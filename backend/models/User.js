const db = require('../config/database');

class User {
    static async create({ username, email, password, role, fullName, phone }) {
        const [result] = await db.execute(
            'INSERT INTO users (username, email, password, role, full_name, phone, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())',
            [username, email, password, role, fullName, phone]
        );
        return result.insertId;
    }

    static async findByEmail(email) {
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    }

    static async findById(id) {
        const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    }

    static async updateProfile(id, { fullName, phone, email }) {
        await db.execute(
            'UPDATE users SET full_name = ?, phone = ?, email = ? WHERE id = ?',
            [fullName, phone, email, id]
        );
    }

    static async changePassword(id, newPassword) {
        await db.execute(
            'UPDATE users SET password = ? WHERE id = ?',
            [newPassword, id]
        );
    }

    static async getAllCustomers() {
        const [rows] = await db.execute('SELECT * FROM users WHERE role = "customer"');
        return rows;
    }

    static async getAllStaff() {
        const [rows] = await db.execute('SELECT * FROM users WHERE role IN ("admin", "manager")');
        return rows;
    }

    static async getAll() {
        const [rows] = await db.execute('SELECT * FROM users ORDER BY created_at DESC');
        return rows;
    }

    static async updateRole(id, role) {
        await db.execute(
            'UPDATE users SET role = ? WHERE id = ?',
            [role, id]
        );
    }

    static async delete(id) {
        await db.execute('DELETE FROM users WHERE id = ?', [id]);
    }

    static async getAdminCount() {
        const [rows] = await db.execute(
            'SELECT COUNT(*) as count FROM users WHERE role = "admin"'
        );
        return rows[0].count;
    }

    static async getBookings(userId) {
        const [rows] = await db.execute(
            `SELECT b.*, p.name as package_name 
            FROM bookings b 
            JOIN packages p ON b.package_id = p.id 
            WHERE b.user_id = ? 
            ORDER BY b.created_at DESC`,
            [userId]
        );
        return rows;
    }

    static async getCustomTrips(userId) {
        const [rows] = await db.execute(
            `SELECT * FROM custom_trips WHERE user_id = ? ORDER BY created_at DESC`,
            [userId]
        );
        rows.forEach(row => {
            if (row.preferences) row.preferences = JSON.parse(row.preferences);
            if (row.selected_parks) row.selected_parks = JSON.parse(row.selected_parks);
            if (row.proposed_itinerary) row.proposed_itinerary = JSON.parse(row.proposed_itinerary);
        });
        return rows;
    }

    static async getTestimonials(userId) {
        const [rows] = await db.execute(
            `SELECT t.*, p.name as package_name 
            FROM testimonials t 
            LEFT JOIN packages p ON t.package_id = p.id 
            WHERE t.user_id = ? 
            ORDER BY t.created_at DESC`,
            [userId]
        );
        return rows;
    }

    static async getStats() {
        const [rows] = await db.execute(`
            SELECT 
                COUNT(*) as total_users,
                SUM(CASE WHEN role = 'customer' THEN 1 ELSE 0 END) as total_customers,
                SUM(CASE WHEN role = 'manager' THEN 1 ELSE 0 END) as total_managers,
                SUM(CASE WHEN role = 'admin' THEN 1 ELSE 0 END) as total_admins,
                COUNT(CASE WHEN created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY) THEN 1 END) as new_users_last_30_days
            FROM users
        `);
        return rows[0];
    }

    static async getCustomerStats({ startDate, endDate }) {
        let query = `
            SELECT 
                u.id,
                u.full_name,
                u.email,
                COUNT(DISTINCT b.id) as total_bookings,
                COUNT(DISTINCT ct.id) as total_custom_trips,
                SUM(b.total_price) as total_spent,
                MAX(b.created_at) as last_booking_date
            FROM users u
            LEFT JOIN bookings b ON u.id = b.user_id
            LEFT JOIN custom_trips ct ON u.id = ct.user_id
            WHERE u.role = 'customer'
        `;
        const params = [];

        if (startDate) {
            query += ' AND (b.created_at >= ? OR ct.created_at >= ?)';
            params.push(startDate, startDate);
        }

        if (endDate) {
            query += ' AND (b.created_at <= ? OR ct.created_at <= ?)';
            params.push(endDate, endDate);
        }

        query += ' GROUP BY u.id ORDER BY total_spent DESC';

        const [rows] = await db.execute(query, params);
        return rows;
    }
}

module.exports = User; 