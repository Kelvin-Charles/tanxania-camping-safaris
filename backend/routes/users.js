const express = require('express');
const router = express.Router();
const { AppError } = require('../middleware/errorHandler');
const User = require('../models/User');
const { authorizeRole, isResourceOwner } = require('../middleware/auth');

// Get all users (admin/manager only)
router.get('/', authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const users = await User.getAll();
        res.json({
            status: 'success',
            data: { users }
        });
    } catch (error) {
        next(error);
    }
});

// Get user by ID
router.get('/:userId', isResourceOwner, async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            throw new AppError('User not found', 404);
        }

        res.json({
            status: 'success',
            data: { user }
        });
    } catch (error) {
        next(error);
    }
});

// Update user profile
router.put('/:userId', isResourceOwner, async (req, res, next) => {
    try {
        const { fullName, phone, email } = req.body;
        const userId = req.params.userId;

        // Check if email is being changed and is already taken
        if (email) {
            const existingUser = await User.findByEmail(email);
            if (existingUser && existingUser.id !== parseInt(userId)) {
                throw new AppError('Email already in use', 400);
            }
        }

        await User.updateProfile(userId, { fullName, phone, email });
        const updatedUser = await User.findById(userId);

        res.json({
            status: 'success',
            data: { user: updatedUser }
        });
    } catch (error) {
        next(error);
    }
});

// Delete user (admin only)
router.delete('/:userId', authorizeRole('admin'), async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            throw new AppError('User not found', 404);
        }

        await User.delete(req.params.userId);

        res.json({
            status: 'success',
            message: 'User deleted successfully'
        });
    } catch (error) {
        next(error);
    }
});

// Get user bookings
router.get('/:userId/bookings', isResourceOwner, async (req, res, next) => {
    try {
        const bookings = await User.getBookings(req.params.userId);
        res.json({
            status: 'success',
            data: { bookings }
        });
    } catch (error) {
        next(error);
    }
});

// Get user custom trips
router.get('/:userId/custom-trips', isResourceOwner, async (req, res, next) => {
    try {
        const customTrips = await User.getCustomTrips(req.params.userId);
        res.json({
            status: 'success',
            data: { customTrips }
        });
    } catch (error) {
        next(error);
    }
});

// Get user testimonials
router.get('/:userId/testimonials', isResourceOwner, async (req, res, next) => {
    try {
        const testimonials = await User.getTestimonials(req.params.userId);
        res.json({
            status: 'success',
            data: { testimonials }
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router; 