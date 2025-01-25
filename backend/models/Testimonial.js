const db = require('../config/database');

class Testimonial {
    static async create({
        userId,
        rating,
        review,
        packageId,
        isApproved = false
    }) {
        const [result] = await db.execute(
            `INSERT INTO testimonials (
                user_id, rating, review, package_id,
                is_approved, created_at
            ) VALUES (?, ?, ?, ?, ?, NOW())`,
            [userId, rating, review, packageId, isApproved]
        );
        return result.insertId;
    }

    static async findById(id) {
        const [rows] = await db.execute(
            `SELECT t.*, u.full_name as user_name, p.name as package_name 
            FROM testimonials t 
            JOIN users u ON t.user_id = u.id 
            LEFT JOIN packages p ON t.package_id = p.id 
            WHERE t.id = ?`,
            [id]
        );
        return rows[0];
    }

    static async update(id, { rating, review }) {
        await db.execute(
            `UPDATE testimonials SET 
                rating = ?, 
                review = ?,
                updated_at = NOW()
            WHERE id = ?`,
            [rating, review, id]
        );
    }

    static async updateApprovalStatus(id, isApproved) {
        await db.execute(
            `UPDATE testimonials SET 
                is_approved = ?,
                updated_at = NOW()
            WHERE id = ?`,
            [isApproved, id]
        );
    }

    static async delete(id) {
        await db.execute('DELETE FROM testimonials WHERE id = ?', [id]);
    }

    static async getAllApproved() {
        const [rows] = await db.execute(
            `SELECT t.*, u.full_name as user_name, p.name as package_name 
            FROM testimonials t 
            JOIN users u ON t.user_id = u.id 
            LEFT JOIN packages p ON t.package_id = p.id 
            WHERE t.is_approved = true 
            ORDER BY t.created_at DESC`
        );
        return rows;
    }

    static async getAll() {
        const [rows] = await db.execute(
            `SELECT t.*, u.full_name as user_name, p.name as package_name 
            FROM testimonials t 
            JOIN users u ON t.user_id = u.id 
            LEFT JOIN packages p ON t.package_id = p.id 
            ORDER BY t.created_at DESC`
        );
        return rows;
    }

    static async getByPackage(packageId) {
        const [rows] = await db.execute(
            `SELECT t.*, u.full_name as user_name 
            FROM testimonials t 
            JOIN users u ON t.user_id = u.id 
            WHERE t.package_id = ? AND t.is_approved = true 
            ORDER BY t.created_at DESC`,
            [packageId]
        );
        return rows;
    }

    static async getStats() {
        const [rows] = await db.execute(`
            SELECT 
                COUNT(*) as total_testimonials,
                SUM(CASE WHEN is_approved = true THEN 1 ELSE 0 END) as approved_testimonials,
                AVG(rating) as average_rating,
                COUNT(DISTINCT user_id) as unique_reviewers,
                COUNT(DISTINCT package_id) as reviewed_packages
            FROM testimonials
        `);
        return rows[0];
    }
}

module.exports = Testimonial; 