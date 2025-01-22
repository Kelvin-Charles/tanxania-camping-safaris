const db = require('../config/database');

class Meeting {
    static async create({
        hostId,
        title,
        description,
        startTime,
        duration,
        meetingLink,
        bookingId = null,
        customTripId = null,
        enquiryId = null,
        attendees
    }) {
        const [result] = await db.execute(
            `INSERT INTO meetings (
                host_id, title, description, start_time,
                duration, meeting_link, booking_id,
                custom_trip_id, enquiry_id, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
            [hostId, title, description, startTime,
             duration, meetingLink, bookingId,
             customTripId, enquiryId]
        );
        
        const meetingId = result.insertId;
        
        // Add attendees
        const attendeeValues = attendees.map(userId => 
            `(${meetingId}, ${userId}, 'pending')`
        ).join(',');
        
        if (attendees.length > 0) {
            await db.execute(`
                INSERT INTO meeting_attendees (meeting_id, user_id, status)
                VALUES ${attendeeValues}
            `);
        }
        
        return meetingId;
    }

    static async findById(id) {
        const [meetings] = await db.execute(
            `SELECT m.*, 
                h.full_name as host_name,
                h.email as host_email
            FROM meetings m
            JOIN users h ON m.host_id = h.id
            WHERE m.id = ?`,
            [id]
        );
        
        if (meetings[0]) {
            const [attendees] = await db.execute(
                `SELECT ma.*, u.full_name, u.email
                FROM meeting_attendees ma
                JOIN users u ON ma.user_id = u.id
                WHERE ma.meeting_id = ?`,
                [id]
            );
            meetings[0].attendees = attendees;
        }
        
        return meetings[0];
    }

    static async updateStatus(id, status) {
        await db.execute(
            'UPDATE meetings SET status = ? WHERE id = ?',
            [status, id]
        );
    }

    static async updateAttendeeStatus(meetingId, userId, status) {
        await db.execute(
            `UPDATE meeting_attendees 
            SET status = ?, updated_at = NOW()
            WHERE meeting_id = ? AND user_id = ?`,
            [status, meetingId, userId]
        );
    }

    static async getUpcoming(userId, { limit = 10, offset = 0 }) {
        const [rows] = await db.execute(
            `SELECT m.*, 
                h.full_name as host_name,
                h.email as host_email,
                ma.status as attendee_status
            FROM meetings m
            JOIN users h ON m.host_id = h.id
            LEFT JOIN meeting_attendees ma ON m.id = ma.meeting_id AND ma.user_id = ?
            WHERE (m.host_id = ? OR ma.user_id = ?)
                AND m.start_time > NOW()
            ORDER BY m.start_time ASC
            LIMIT ? OFFSET ?`,
            [userId, userId, userId, limit, offset]
        );
        return rows;
    }

    static async getPast(userId, { limit = 10, offset = 0 }) {
        const [rows] = await db.execute(
            `SELECT m.*, 
                h.full_name as host_name,
                h.email as host_email,
                ma.status as attendee_status
            FROM meetings m
            JOIN users h ON m.host_id = h.id
            LEFT JOIN meeting_attendees ma ON m.id = ma.meeting_id AND ma.user_id = ?
            WHERE (m.host_id = ? OR ma.user_id = ?)
                AND m.start_time <= NOW()
            ORDER BY m.start_time DESC
            LIMIT ? OFFSET ?`,
            [userId, userId, userId, limit, offset]
        );
        return rows;
    }

    static async getByContext({
        bookingId = null,
        customTripId = null,
        enquiryId = null
    }) {
        let query = `
            SELECT m.*, 
                h.full_name as host_name,
                h.email as host_email
            FROM meetings m
            JOIN users h ON m.host_id = h.id
            WHERE 1=0
        `;
        const params = [];

        if (bookingId) {
            query += ' OR m.booking_id = ?';
            params.push(bookingId);
        }
        if (customTripId) {
            query += ' OR m.custom_trip_id = ?';
            params.push(customTripId);
        }
        if (enquiryId) {
            query += ' OR m.enquiry_id = ?';
            params.push(enquiryId);
        }

        query += ' ORDER BY m.start_time DESC';

        const [rows] = await db.execute(query, params);
        return rows;
    }

    static async delete(id) {
        await db.execute('DELETE FROM meeting_attendees WHERE meeting_id = ?', [id]);
        await db.execute('DELETE FROM meetings WHERE id = ?', [id]);
    }
}

module.exports = Meeting; 