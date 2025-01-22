const db = require('../config/database');

class Booking {
    static async create({
        userId,
        packageId,
        startDate,
        endDate,
        numberOfPeople,
        totalPrice,
        status = 'pending',
        specialRequirements
    }) {
        const [result] = await db.execute(
            `INSERT INTO bookings (
                user_id, package_id, start_date, end_date, 
                number_of_people, total_price, status, 
                special_requirements, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
            [userId, packageId, startDate, endDate, numberOfPeople, totalPrice, status, specialRequirements]
        );
        return result.insertId;
    }

    static async findById(id) {
        const [rows] = await db.execute(
            `SELECT b.*, u.full_name, u.email, u.phone, p.name as package_name 
            FROM bookings b 
            JOIN users u ON b.user_id = u.id 
            JOIN packages p ON b.package_id = p.id 
            WHERE b.id = ?`,
            [id]
        );
        return rows[0];
    }

    static async findByUserId(userId) {
        const [rows] = await db.execute(
            `SELECT b.*, p.name as package_name 
            FROM bookings b 
            JOIN packages p ON b.package_id = p.id 
            WHERE b.user_id = ?`,
            [userId]
        );
        return rows;
    }

    static async updateStatus(id, status) {
        await db.execute(
            'UPDATE bookings SET status = ? WHERE id = ?',
            [status, id]
        );
    }

    static async getAllBookings(filters = {}) {
        let query = `
            SELECT b.*, u.full_name, u.email, p.name as package_name 
            FROM bookings b 
            JOIN users u ON b.user_id = u.id 
            JOIN packages p ON b.package_id = p.id 
            WHERE 1=1
        `;
        const params = [];

        if (filters.status) {
            query += ' AND b.status = ?';
            params.push(filters.status);
        }

        if (filters.startDate) {
            query += ' AND b.start_date >= ?';
            params.push(filters.startDate);
        }

        if (filters.endDate) {
            query += ' AND b.end_date <= ?';
            params.push(filters.endDate);
        }

        query += ' ORDER BY b.created_at DESC';

        const [rows] = await db.execute(query, params);
        return rows;
    }

    static async getBookingStats() {
        const [rows] = await db.execute(`
            SELECT 
                COUNT(*) as total_bookings,
                SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending_bookings,
                SUM(CASE WHEN status = 'confirmed' THEN 1 ELSE 0 END) as confirmed_bookings,
                SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed_bookings,
                SUM(total_price) as total_revenue
            FROM bookings
        `);
        return rows[0];
    }

    static async updatePayment(id, paymentStatus, paymentAmount) {
        await db.execute(
            `UPDATE bookings SET 
                payment_status = ?, 
                payment_amount = ?,
                updated_at = NOW()
            WHERE id = ?`,
            [paymentStatus, paymentAmount, id]
        );
    }

    static async getRecent(limit = 10) {
        const [rows] = await db.execute(
            `SELECT b.*, u.full_name, u.email, p.name as package_name 
            FROM bookings b 
            JOIN users u ON b.user_id = u.id 
            JOIN packages p ON b.package_id = p.id 
            ORDER BY b.created_at DESC 
            LIMIT ?`,
            [limit]
        );
        return rows;
    }

    static async getRevenueStats({ startDate, endDate, groupBy = 'month' }) {
        let groupFormat;
        switch (groupBy) {
            case 'day':
                groupFormat = '%Y-%m-%d';
                break;
            case 'month':
                groupFormat = '%Y-%m';
                break;
            case 'year':
                groupFormat = '%Y';
                break;
            default:
                groupFormat = '%Y-%m';
        }

        let query = `
            SELECT 
                DATE_FORMAT(created_at, ?) as period,
                COUNT(*) as total_bookings,
                SUM(total_price) as revenue,
                AVG(total_price) as average_booking_value,
                SUM(CASE WHEN payment_status = 'completed' THEN total_price ELSE 0 END) as collected_revenue
            FROM bookings
            WHERE 1=1
        `;
        const params = [groupFormat];

        if (startDate) {
            query += ' AND created_at >= ?';
            params.push(startDate);
        }

        if (endDate) {
            query += ' AND created_at <= ?';
            params.push(endDate);
        }

        query += ' GROUP BY period ORDER BY period DESC';

        const [rows] = await db.execute(query, params);
        return rows;
    }
}

module.exports = Booking; 