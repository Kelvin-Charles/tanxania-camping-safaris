const db = require('../config/database');

class Park {
    static async create({
        name,
        description,
        location,
        imageUrl,
        highlights,
        bestTimeToVisit,
        activities,
        circuit
    }) {
        const [result] = await db.execute(
            `INSERT INTO parks (
                name, description, location, image_url,
                highlights, best_time_to_visit, activities,
                circuit, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
            [name, description, location, imageUrl,
             JSON.stringify(highlights),
             bestTimeToVisit,
             JSON.stringify(activities),
             circuit]
        );
        return result.insertId;
    }

    static async update(id, {
        name,
        description,
        location,
        imageUrl,
        highlights,
        bestTimeToVisit,
        activities,
        circuit
    }) {
        await db.execute(
            `UPDATE parks SET 
                name = ?, description = ?, location = ?,
                image_url = ?, highlights = ?, best_time_to_visit = ?,
                activities = ?, circuit = ?, updated_at = NOW()
            WHERE id = ?`,
            [name, description, location, imageUrl,
             JSON.stringify(highlights),
             bestTimeToVisit,
             JSON.stringify(activities),
             circuit, id]
        );
    }

    static async findById(id) {
        const [rows] = await db.execute(
            'SELECT * FROM parks WHERE id = ?',
            [id]
        );
        if (rows[0]) {
            rows[0].highlights = JSON.parse(rows[0].highlights);
            rows[0].activities = JSON.parse(rows[0].activities);
        }
        return rows[0];
    }

    static async getAll(filters = {}) {
        let query = 'SELECT * FROM parks WHERE 1=1';
        const params = [];

        if (filters.circuit) {
            query += ' AND circuit = ?';
            params.push(filters.circuit);
        }

        query += ' ORDER BY name ASC';

        const [rows] = await db.execute(query, params);
        rows.forEach(row => {
            row.highlights = JSON.parse(row.highlights);
            row.activities = JSON.parse(row.activities);
        });
        return rows;
    }

    static async delete(id) {
        await db.execute('DELETE FROM parks WHERE id = ?', [id]);
    }

    static async getByCircuit(circuit) {
        const [rows] = await db.execute(
            'SELECT * FROM parks WHERE circuit = ? ORDER BY name ASC',
            [circuit]
        );
        rows.forEach(row => {
            row.highlights = JSON.parse(row.highlights);
            row.activities = JSON.parse(row.activities);
        });
        return rows;
    }

    static async getPackagesByParkId(parkId) {
        const [rows] = await db.execute(
            `SELECT * FROM packages WHERE park_id = ? 
            ORDER BY duration ASC, price ASC`,
            [parkId]
        );
        rows.forEach(row => {
            row.itinerary = JSON.parse(row.itinerary);
            row.inclusions = JSON.parse(row.inclusions);
            row.exclusions = JSON.parse(row.exclusions);
        });
        return rows;
    }
}

module.exports = Park; 