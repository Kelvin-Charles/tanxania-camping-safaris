const express = require('express');
const router = express.Router();
const { AppError } = require('../middleware/errorHandler');
const Booking = require('../models/Booking');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// Get all bookings (admin/manager only)
router.get('/', authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const filters = {
            status: req.query.status,
            startDate: req.query.startDate,
            endDate: req.query.endDate
        };

        const bookings = await Booking.getAll(filters);
        res.json({
            status: 'success',
            data: { bookings }
        });
    } catch (error) {
        next(error);
    }
});

// Get booking by ID
router.get('/:id', async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            throw new AppError('Booking not found', 404);
        }

        // Check if user is authorized to view this booking
        if (req.user.role !== 'admin' && req.user.role !== 'manager' && booking.user_id !== req.user.id) {
            throw new AppError('Not authorized to view this booking', 403);
        }

        res.json({
            status: 'success',
            data: { booking }
        });
    } catch (error) {
        next(error);
    }
});

// Create new booking
router.post('/', async (req, res, next) => {
    try {
        const {
            packageId,
            startDate,
            endDate,
            numberOfPeople,
            totalPrice,
            specialRequirements
        } = req.body;

        const bookingId = await Booking.create({
            userId: req.user.id,
            packageId,
            startDate,
            endDate,
            numberOfPeople,
            totalPrice,
            specialRequirements
        });

        const booking = await Booking.findById(bookingId);

        res.status(201).json({
            status: 'success',
            data: { booking }
        });
    } catch (error) {
        next(error);
    }
});

// Update booking status (admin/manager only)
router.patch('/:id/status', authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const { status } = req.body;
        const validStatuses = ['pending', 'confirmed', 'completed', 'cancelled'];

        if (!validStatuses.includes(status)) {
            throw new AppError('Invalid status', 400);
        }

        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            throw new AppError('Booking not found', 404);
        }

        await Booking.updateStatus(req.params.id, status);
        const updatedBooking = await Booking.findById(req.params.id);

        res.json({
            status: 'success',
            data: { booking: updatedBooking }
        });
    } catch (error) {
        next(error);
    }
});

// Cancel booking
router.patch('/:id/cancel', async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            throw new AppError('Booking not found', 404);
        }

        // Check if user is authorized to cancel this booking
        if (req.user.role !== 'admin' && req.user.role !== 'manager' && booking.user_id !== req.user.id) {
            throw new AppError('Not authorized to cancel this booking', 403);
        }

        // Check if booking can be cancelled
        if (booking.status === 'completed' || booking.status === 'cancelled') {
            throw new AppError('Booking cannot be cancelled', 400);
        }

        await Booking.updateStatus(req.params.id, 'cancelled');
        const updatedBooking = await Booking.findById(req.params.id);

        res.json({
            status: 'success',
            data: { booking: updatedBooking }
        });
    } catch (error) {
        next(error);
    }
});

// Update payment status (admin/manager only)
router.patch('/:id/payment', authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const { paymentStatus, paymentAmount } = req.body;
        const validPaymentStatuses = ['pending', 'partial', 'completed', 'refunded'];

        if (!validPaymentStatuses.includes(paymentStatus)) {
            throw new AppError('Invalid payment status', 400);
        }

        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            throw new AppError('Booking not found', 404);
        }

        await Booking.updatePayment(req.params.id, paymentStatus, paymentAmount);
        const updatedBooking = await Booking.findById(req.params.id);

        res.json({
            status: 'success',
            data: { booking: updatedBooking }
        });
    } catch (error) {
        next(error);
    }
});

// Get booking statistics (admin/manager only)
router.get('/stats/overview', authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const stats = await Booking.getStats();
        res.json({
            status: 'success',
            data: { stats }
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router; 