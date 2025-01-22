const db = require('../config/database');

class Enquiry {
    static async create({
        name,
        email,
        phone,
        message,
        packageId,
        preferredDate,
        numberOfPeople,
        status = 'pending'
    }) {
        const [result] = await db.execute(
            `INSERT INTO enquiries (
                name, email, phone, message, package_id,
                preferred_date, number_of_people, status,
                created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
            [name, email, phone, message, packageId,
             preferredDate, numberOfPeople, status]
        );
        return result.insertId;
    }

    static async findById(id) {
        const [rows] = await db.execute(
            `SELECT e.*, p.name as package_name 
            FROM enquiries e 
            LEFT JOIN packages p ON e.package_id = p.id 
            WHERE e.id = ?`,
            [id]
        );
        return rows[0];
    }

    static async updateStatus(id, status) {
        await db.execute(
            'UPDATE enquiries SET status = ? WHERE id = ?',
            [status, id]
        );
    }

    static async getAll(filters = {}) {
        let query = `
            SELECT e.*, p.name as package_name 
            FROM enquiries e 
            LEFT JOIN packages p ON e.package_id = p.id 
            WHERE 1=1
        `;
        const params = [];

        if (filters.status) {
            query += ' AND e.status = ?';
            params.push(filters.status);
        }

        if (filters.email) {
            query += ' AND e.email = ?';
            params.push(filters.email);
        }

        if (filters.startDate) {
            query += ' AND e.created_at >= ?';
            params.push(filters.startDate);
        }

        if (filters.endDate) {
            query += ' AND e.created_at <= ?';
            params.push(filters.endDate);
        }

        query += ' ORDER BY e.created_at DESC';

        const [rows] = await db.execute(query, params);
        return rows;
    }

    static async addResponse(id, {
        response,
        respondedBy
    }) {
        await db.execute(
            `UPDATE enquiries SET 
                response = ?, 
                responded_by = ?,
                responded_at = NOW(),
                status = 'responded'
            WHERE id = ?`,
            [response, respondedBy, id]
        );
    }

    static async getStats() {
        const [rows] = await db.execute(`
            SELECT 
                COUNT(*) as total_enquiries,
                SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending_enquiries,
                SUM(CASE WHEN status = 'responded' THEN 1 ELSE 0 END) as responded_enquiries,
                SUM(CASE WHEN status = 'converted' THEN 1 ELSE 0 END) as converted_enquiries
            FROM enquiries
        `);
        return rows[0];
    }

    static async getRecent(limit = 10) {
        const [rows] = await db.execute(
            `SELECT e.*, p.name as package_name 
            FROM enquiries e 
            LEFT JOIN packages p ON e.package_id = p.id 
            ORDER BY e.created_at DESC 
            LIMIT ?`,
            [limit]
        );
        return rows;
    }

    static async getConversionStats({ startDate, endDate }) {
        let query = `
            SELECT 
                COUNT(*) as total_enquiries,
                SUM(CASE WHEN status = 'converted' THEN 1 ELSE 0 END) as converted_enquiries,
                (SUM(CASE WHEN status = 'converted' THEN 1 ELSE 0 END) * 100.0 / COUNT(*)) as conversion_rate,
                AVG(TIMESTAMPDIFF(HOUR, created_at, 
                    CASE 
                        WHEN status = 'responded' THEN responded_at
                        ELSE NULL
                    END
                )) as average_response_time
            FROM enquiries
            WHERE 1=1
        `;
        const params = [];

        if (startDate) {
            query += ' AND created_at >= ?';
            params.push(startDate);
        }

        if (endDate) {
            query += ' AND created_at <= ?';
            params.push(endDate);
        }

        const [rows] = await db.execute(query, params);
        return rows[0];
    }

    static async getByPackage(packageId) {
        const [rows] = await db.execute(
            `SELECT e.* 
            FROM enquiries e 
            WHERE e.package_id = ? 
            ORDER BY e.created_at DESC`,
            [packageId]
        );
        return rows;
    }
}

module.exports = Enquiry; 