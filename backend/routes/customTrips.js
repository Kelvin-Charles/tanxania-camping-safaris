const express = require('express');
const router = express.Router();
const { AppError } = require('../middleware/errorHandler');
const CustomTrip = require('../models/CustomTrip');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// Get all custom trips (admin/manager only)
router.get('/', authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const filters = {
            status: req.query.status,
            startDate: req.query.startDate,
            endDate: req.query.endDate
        };

        const customTrips = await CustomTrip.getAll(filters);
        res.json({
            status: 'success',
            data: { customTrips }
        });
    } catch (error) {
        next(error);
    }
});

// Get custom trip by ID
router.get('/:id', async (req, res, next) => {
    try {
        const customTrip = await CustomTrip.findById(req.params.id);
        if (!customTrip) {
            throw new AppError('Custom trip not found', 404);
        }

        // Check if user is authorized to view this custom trip
        if (req.user.role !== 'admin' && req.user.role !== 'manager' && customTrip.user_id !== req.user.id) {
            throw new AppError('Not authorized to view this custom trip', 403);
        }

        res.json({
            status: 'success',
            data: { customTrip }
        });
    } catch (error) {
        next(error);
    }
});

// Create new custom trip request
router.post('/', async (req, res, next) => {
    try {
        const {
            startDate,
            endDate,
            numberOfPeople,
            preferences,
            selectedParks,
            budget,
            accommodationType,
            specialRequirements
        } = req.body;

        const customTripId = await CustomTrip.create({
            userId: req.user.id,
            startDate,
            endDate,
            numberOfPeople,
            preferences,
            selectedParks,
            budget,
            accommodationType,
            specialRequirements
        });

        const customTrip = await CustomTrip.findById(customTripId);

        res.status(201).json({
            status: 'success',
            data: { customTrip }
        });
    } catch (error) {
        next(error);
    }
});

// Update custom trip status (admin/manager only)
router.patch('/:id/status', authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const { status } = req.body;
        const validStatuses = ['pending', 'proposal_sent', 'accepted', 'rejected', 'completed'];

        if (!validStatuses.includes(status)) {
            throw new AppError('Invalid status', 400);
        }

        const customTrip = await CustomTrip.findById(req.params.id);
        if (!customTrip) {
            throw new AppError('Custom trip not found', 404);
        }

        await CustomTrip.updateStatus(req.params.id, status);
        const updatedCustomTrip = await CustomTrip.findById(req.params.id);

        res.json({
            status: 'success',
            data: { customTrip: updatedCustomTrip }
        });
    } catch (error) {
        next(error);
    }
});

// Add proposal to custom trip (admin/manager only)
router.post('/:id/proposal', authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const {
            proposedItinerary,
            totalPrice,
            validUntil,
            notes
        } = req.body;

        const customTrip = await CustomTrip.findById(req.params.id);
        if (!customTrip) {
            throw new AppError('Custom trip not found', 404);
        }

        await CustomTrip.addProposal(req.params.id, {
            proposedItinerary,
            totalPrice,
            validUntil,
            notes
        });

        // Update status to proposal_sent
        await CustomTrip.updateStatus(req.params.id, 'proposal_sent');
        const updatedCustomTrip = await CustomTrip.findById(req.params.id);

        res.json({
            status: 'success',
            data: { customTrip: updatedCustomTrip }
        });
    } catch (error) {
        next(error);
    }
});

// Accept proposal
router.post('/:id/accept', async (req, res, next) => {
    try {
        const customTrip = await CustomTrip.findById(req.params.id);
        if (!customTrip) {
            throw new AppError('Custom trip not found', 404);
        }

        // Check if user is authorized to accept this proposal
        if (customTrip.user_id !== req.user.id) {
            throw new AppError('Not authorized to accept this proposal', 403);
        }

        // Check if proposal exists and is still valid
        if (!customTrip.proposed_itinerary || new Date(customTrip.valid_until) < new Date()) {
            throw new AppError('No valid proposal found', 400);
        }

        await CustomTrip.updateStatus(req.params.id, 'accepted');
        const updatedCustomTrip = await CustomTrip.findById(req.params.id);

        res.json({
            status: 'success',
            data: { customTrip: updatedCustomTrip }
        });
    } catch (error) {
        next(error);
    }
});

// Get custom trip statistics (admin/manager only)
router.get('/stats/overview', authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const stats = await CustomTrip.getStats();
        res.json({
            status: 'success',
            data: { stats }
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router; 