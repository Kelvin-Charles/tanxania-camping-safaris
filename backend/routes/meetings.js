const express = require('express');
const router = express.Router();
const Meeting = require('../models/Meeting');
const { authenticate, authorize } = require('../middleware/auth');
const AppError = require('../utils/AppError');

// Create a new meeting
router.post('/', authenticate, authorize(['admin', 'manager']), async (req, res, next) => {
    try {
        const {
            title,
            description,
            startTime,
            duration,
            meetingLink,
            bookingId,
            customTripId,
            enquiryId,
            attendees
        } = req.body;

        if (!title || !startTime || !duration || !meetingLink || !attendees) {
            throw new AppError('Missing required fields', 400);
        }

        const meetingId = await Meeting.create({
            hostId: req.user.id,
            title,
            description,
            startTime,
            duration,
            meetingLink,
            bookingId,
            customTripId,
            enquiryId,
            attendees
        });

        const meeting = await Meeting.findById(meetingId);
        res.status(201).json(meeting);
    } catch (error) {
        next(error);
    }
});

// Get meeting by ID
router.get('/:id', authenticate, async (req, res, next) => {
    try {
        const meeting = await Meeting.findById(req.params.id);
        if (!meeting) {
            throw new AppError('Meeting not found', 404);
        }
        
        // Check if user is host or attendee
        const isHost = meeting.host_id === req.user.id;
        const isAttendee = meeting.attendees.some(a => a.user_id === req.user.id);
        
        if (!isHost && !isAttendee && !['admin', 'manager'].includes(req.user.role)) {
            throw new AppError('Not authorized to view this meeting', 403);
        }
        
        res.json(meeting);
    } catch (error) {
        next(error);
    }
});

// Get upcoming meetings
router.get('/upcoming', authenticate, async (req, res, next) => {
    try {
        const { limit = 10, offset = 0 } = req.query;
        const meetings = await Meeting.getUpcoming(req.user.id, {
            limit: parseInt(limit),
            offset: parseInt(offset)
        });
        res.json(meetings);
    } catch (error) {
        next(error);
    }
});

// Get past meetings
router.get('/past', authenticate, async (req, res, next) => {
    try {
        const { limit = 10, offset = 0 } = req.query;
        const meetings = await Meeting.getPast(req.user.id, {
            limit: parseInt(limit),
            offset: parseInt(offset)
        });
        res.json(meetings);
    } catch (error) {
        next(error);
    }
});

// Update meeting status
router.patch('/:id/status', authenticate, authorize(['admin', 'manager']), async (req, res, next) => {
    try {
        const { status } = req.body;
        if (!status) {
            throw new AppError('Status is required', 400);
        }

        await Meeting.updateStatus(req.params.id, status);
        const meeting = await Meeting.findById(req.params.id);
        res.json(meeting);
    } catch (error) {
        next(error);
    }
});

// Update attendee status
router.patch('/:id/attendee-status', authenticate, async (req, res, next) => {
    try {
        const { status } = req.body;
        if (!status) {
            throw new AppError('Status is required', 400);
        }

        await Meeting.updateAttendeeStatus(req.params.id, req.user.id, status);
        const meeting = await Meeting.findById(req.params.id);
        res.json(meeting);
    } catch (error) {
        next(error);
    }
});

// Get meetings by context
router.get('/context', authenticate, async (req, res, next) => {
    try {
        const { bookingId, customTripId, enquiryId } = req.query;
        
        if (!bookingId && !customTripId && !enquiryId) {
            throw new AppError('At least one context ID is required', 400);
        }

        const meetings = await Meeting.getByContext({
            bookingId,
            customTripId,
            enquiryId
        });
        res.json(meetings);
    } catch (error) {
        next(error);
    }
});

// Delete meeting
router.delete('/:id', authenticate, authorize(['admin', 'manager']), async (req, res, next) => {
    try {
        const meeting = await Meeting.findById(req.params.id);
        if (!meeting) {
            throw new AppError('Meeting not found', 404);
        }

        if (meeting.host_id !== req.user.id && req.user.role !== 'admin') {
            throw new AppError('Not authorized to delete this meeting', 403);
        }

        await Meeting.delete(req.params.id);
        res.json({ message: 'Meeting deleted successfully' });
    } catch (error) {
        next(error);
    }
});

module.exports = router; 