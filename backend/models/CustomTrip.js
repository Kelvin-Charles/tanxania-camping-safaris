const db = require('../config/database');

class CustomTrip {
    static async create({
        userId,
        startDate,
        endDate,
        numberOfPeople,
        preferences,
        selectedParks,
        budget,
        accommodationType,
        specialRequirements,
        status = 'pending'
    }) {
        const [result] = await db.execute(
            `INSERT INTO custom_trips (
                user_id, start_date, end_date, number_of_people,
                preferences, selected_parks, budget,
                accommodation_type, special_requirements,
                status, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
            [userId, startDate, endDate, numberOfPeople,
             JSON.stringify(preferences),
             JSON.stringify(selectedParks),
             budget,
             accommodationType,
             specialRequirements,
             status]
        );
        return result.insertId;
    }

    static async findById(id) {
        const [rows] = await db.execute(
            `SELECT ct.*, u.name as user_name, u.email as user_email
            FROM custom_trips ct
            LEFT JOIN users u ON ct.user_id = u.id
            WHERE ct.id = ?`,
            [id]
        );
        
        if (rows[0]) {
            rows[0].preferences = JSON.parse(rows[0].preferences);
            rows[0].selected_parks = JSON.parse(rows[0].selected_parks);
            if (rows[0].proposed_itinerary) {
                rows[0].proposed_itinerary = JSON.parse(rows[0].proposed_itinerary);
            }
        }
        
        return rows[0];
    }

    static async updateStatus(id, status) {
        await db.execute(
            'UPDATE custom_trips SET status = ? WHERE id = ?',
            [status, id]
        );
    }

    static async getAll(filters = {}) {
        let query = `
            SELECT ct.*, u.name as user_name, u.email as user_email
            FROM custom_trips ct
            LEFT JOIN users u ON ct.user_id = u.id
            WHERE 1=1
        `;
        const params = [];

        if (filters.status) {
            query += ' AND ct.status = ?';
            params.push(filters.status);
        }

        if (filters.userId) {
            query += ' AND ct.user_id = ?';
            params.push(filters.userId);
        }

        if (filters.startDate) {
            query += ' AND ct.created_at >= ?';
            params.push(filters.startDate);
        }

        if (filters.endDate) {
            query += ' AND ct.created_at <= ?';
            params.push(filters.endDate);
        }

        query += ' ORDER BY ct.created_at DESC';

        const [rows] = await db.execute(query, params);
        
        // Parse JSON fields
        rows.forEach(row => {
            row.preferences = JSON.parse(row.preferences);
            row.selected_parks = JSON.parse(row.selected_parks);
            if (row.proposed_itinerary) {
                row.proposed_itinerary = JSON.parse(row.proposed_itinerary);
            }
        });
        
        return rows;
    }

    static async addProposal(id, {
        proposedItinerary,
        totalPrice,
        validUntil,
        notes
    }) {
        await db.execute(
            `UPDATE custom_trips SET 
                proposed_itinerary = ?,
                total_price = ?,
                valid_until = ?,
                proposal_notes = ?,
                status = 'proposal_sent',
                proposed_at = NOW()
            WHERE id = ?`,
            [JSON.stringify(proposedItinerary), totalPrice,
             validUntil, notes, id]
        );
    }

    static async acceptProposal(id) {
        await db.execute(
            `UPDATE custom_trips SET 
                status = 'proposal_accepted',
                accepted_at = NOW()
            WHERE id = ?`,
            [id]
        );
    }

    static async getStats() {
        const [rows] = await db.execute(`
            SELECT 
                COUNT(*) as total_trips,
                SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending_trips,
                SUM(CASE WHEN status = 'proposal_sent' THEN 1 ELSE 0 END) as proposals_sent,
                SUM(CASE WHEN status = 'proposal_accepted' THEN 1 ELSE 0 END) as proposals_accepted,
                AVG(total_price) as average_price,
                AVG(DATEDIFF(end_date, start_date)) as average_duration
            FROM custom_trips
            WHERE status != 'cancelled'
        `);
        return rows[0];
    }

    static async getRecent(limit = 10) {
        const [rows] = await db.execute(
            `SELECT ct.*, u.name as user_name, u.email as user_email
            FROM custom_trips ct
            LEFT JOIN users u ON ct.user_id = u.id
            ORDER BY ct.created_at DESC
            LIMIT ?`,
            [limit]
        );
        
        // Parse JSON fields
        rows.forEach(row => {
            row.preferences = JSON.parse(row.preferences);
            row.selected_parks = JSON.parse(row.selected_parks);
            if (row.proposed_itinerary) {
                row.proposed_itinerary = JSON.parse(row.proposed_itinerary);
            }
        });
        
        return rows;
    }

    static async getConversionStats({ startDate, endDate }) {
        let query = `
            SELECT 
                COUNT(*) as total_requests,
                SUM(CASE WHEN status = 'proposal_sent' THEN 1 ELSE 0 END) as proposals_sent,
                SUM(CASE WHEN status = 'proposal_accepted' THEN 1 ELSE 0 END) as proposals_accepted,
                (SUM(CASE WHEN status = 'proposal_accepted' THEN 1 ELSE 0 END) * 100.0 / 
                    NULLIF(SUM(CASE WHEN status = 'proposal_sent' THEN 1 ELSE 0 END), 0)) as acceptance_rate,
                AVG(TIMESTAMPDIFF(HOUR, created_at, 
                    CASE 
                        WHEN status = 'proposal_sent' THEN proposed_at
                        ELSE NULL
                    END
                )) as average_response_time,
                AVG(total_price) as average_accepted_price
            FROM custom_trips
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

    static async getByUser(userId) {
        const [rows] = await db.execute(
            `SELECT ct.* 
            FROM custom_trips ct 
            WHERE ct.user_id = ? 
            ORDER BY ct.created_at DESC`,
            [userId]
        );
        
        // Parse JSON fields
        rows.forEach(row => {
            row.preferences = JSON.parse(row.preferences);
            row.selected_parks = JSON.parse(row.selected_parks);
            if (row.proposed_itinerary) {
                row.proposed_itinerary = JSON.parse(row.proposed_itinerary);
            }
        });
        
        return rows;
    }
}

module.exports = CustomTrip; 