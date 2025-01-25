const db = require('../config/database');

class Message {
    static async create({
        senderId,
        receiverId,
        content,
        type = 'text',
        bookingId = null,
        customTripId = null,
        enquiryId = null
    }) {
        const [result] = await db.execute(
            `INSERT INTO messages (
                sender_id, receiver_id, content, type,
                booking_id, custom_trip_id, enquiry_id,
                created_at, read_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NULL)`,
            [senderId, receiverId, content, type,
             bookingId, customTripId, enquiryId]
        );
        return result.insertId;
    }

    static async getConversation(userId1, userId2, { limit = 50, offset = 0 }) {
        const [rows] = await db.execute(
            `SELECT m.*, 
                s.full_name as sender_name,
                r.full_name as receiver_name
            FROM messages m
            JOIN users s ON m.sender_id = s.id
            JOIN users r ON m.receiver_id = r.id
            WHERE (m.sender_id = ? AND m.receiver_id = ?)
               OR (m.sender_id = ? AND m.receiver_id = ?)
            ORDER BY m.created_at DESC
            LIMIT ? OFFSET ?`,
            [userId1, userId2, userId2, userId1, limit, offset]
        );
        return rows;
    }

    static async markAsRead(messageId) {
        await db.execute(
            'UPDATE messages SET read_at = NOW() WHERE id = ? AND read_at IS NULL',
            [messageId]
        );
    }

    static async getUnreadCount(userId) {
        const [rows] = await db.execute(
            `SELECT COUNT(*) as count 
            FROM messages 
            WHERE receiver_id = ? AND read_at IS NULL`,
            [userId]
        );
        return rows[0].count;
    }

    static async getRecentConversations(userId) {
        const [rows] = await db.execute(
            `SELECT 
                CASE 
                    WHEN m.sender_id = ? THEN m.receiver_id
                    ELSE m.sender_id
                END as other_user_id,
                u.full_name as other_user_name,
                u.email as other_user_email,
                MAX(m.created_at) as last_message_time,
                COUNT(CASE WHEN m.receiver_id = ? AND m.read_at IS NULL THEN 1 END) as unread_count
            FROM messages m
            JOIN users u ON (
                CASE 
                    WHEN m.sender_id = ? THEN m.receiver_id
                    ELSE m.sender_id
                END = u.id
            )
            WHERE m.sender_id = ? OR m.receiver_id = ?
            GROUP BY 
                CASE 
                    WHEN m.sender_id = ? THEN m.receiver_id
                    ELSE m.sender_id
                END
            ORDER BY last_message_time DESC`,
            [userId, userId, userId, userId, userId, userId]
        );
        return rows;
    }

    static async getContextMessages({
        bookingId = null,
        customTripId = null,
        enquiryId = null
    }) {
        let query = `
            SELECT m.*, 
                s.full_name as sender_name,
                r.full_name as receiver_name
            FROM messages m
            JOIN users s ON m.sender_id = s.id
            JOIN users r ON m.receiver_id = r.id
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

        query += ' ORDER BY m.created_at DESC';

        const [rows] = await db.execute(query, params);
        return rows;
    }
}

module.exports = Message; 