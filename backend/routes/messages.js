const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const { authenticate, authorize } = require('../middleware/auth');
const AppError = require('../utils/AppError');

// Get conversation with another user
router.get('/conversation/:userId', authenticate, async (req, res, next) => {
    try {
        const { limit = 50, offset = 0 } = req.query;
        const messages = await Message.getConversation(
            req.user.id,
            req.params.userId,
            { limit: parseInt(limit), offset: parseInt(offset) }
        );
        res.json(messages);
    } catch (error) {
        next(error);
    }
});

// Get recent conversations
router.get('/recent', authenticate, async (req, res, next) => {
    try {
        const conversations = await Message.getRecentConversations(req.user.id);
        res.json(conversations);
    } catch (error) {
        next(error);
    }
});

// Get unread message count
router.get('/unread/count', authenticate, async (req, res, next) => {
    try {
        const count = await Message.getUnreadCount(req.user.id);
        res.json({ count });
    } catch (error) {
        next(error);
    }
});

// Send a message
router.post('/', authenticate, async (req, res, next) => {
    try {
        const {
            receiverId,
            content,
            type = 'text',
            bookingId,
            customTripId,
            enquiryId
        } = req.body;

        if (!receiverId || !content) {
            throw new AppError('Receiver ID and content are required', 400);
        }

        const messageId = await Message.create({
            senderId: req.user.id,
            receiverId,
            content,
            type,
            bookingId,
            customTripId,
            enquiryId
        });

        const message = await Message.findById(messageId);
        res.status(201).json(message);
    } catch (error) {
        next(error);
    }
});

// Mark message as read
router.patch('/:id/read', authenticate, async (req, res, next) => {
    try {
        await Message.markAsRead(req.params.id);
        res.json({ message: 'Message marked as read' });
    } catch (error) {
        next(error);
    }
});

// Get messages by context (booking, custom trip, or enquiry)
router.get('/context', authenticate, async (req, res, next) => {
    try {
        const { bookingId, customTripId, enquiryId } = req.query;
        
        if (!bookingId && !customTripId && !enquiryId) {
            throw new AppError('At least one context ID is required', 400);
        }

        const messages = await Message.getContextMessages({
            bookingId,
            customTripId,
            enquiryId
        });
        res.json(messages);
    } catch (error) {
        next(error);
    }
});

module.exports = router; 