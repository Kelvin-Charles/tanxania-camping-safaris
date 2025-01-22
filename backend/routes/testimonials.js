const express = require('express');
const router = express.Router();
const { AppError } = require('../middleware/errorHandler');
const Testimonial = require('../models/Testimonial');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// Get all approved testimonials
router.get('/', async (req, res, next) => {
    try {
        const testimonials = await Testimonial.getAllApproved();
        res.json({
            status: 'success',
            data: { testimonials }
        });
    } catch (error) {
        next(error);
    }
});

// Get all testimonials (admin/manager only)
router.get('/all', authenticateToken, authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const testimonials = await Testimonial.getAll();
        res.json({
            status: 'success',
            data: { testimonials }
        });
    } catch (error) {
        next(error);
    }
});

// Get testimonial by ID
router.get('/:id', async (req, res, next) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            throw new AppError('Testimonial not found', 404);
        }

        // If testimonial is not approved, only allow admin/manager or owner to view
        if (!testimonial.is_approved && 
            req.user.role !== 'admin' && 
            req.user.role !== 'manager' && 
            testimonial.user_id !== req.user.id) {
            throw new AppError('Not authorized to view this testimonial', 403);
        }

        res.json({
            status: 'success',
            data: { testimonial }
        });
    } catch (error) {
        next(error);
    }
});

// Create new testimonial
router.post('/', authenticateToken, async (req, res, next) => {
    try {
        const { rating, review, packageId } = req.body;

        // Validate rating
        if (rating < 1 || rating > 5) {
            throw new AppError('Rating must be between 1 and 5', 400);
        }

        const testimonialId = await Testimonial.create({
            userId: req.user.id,
            rating,
            review,
            packageId
        });

        const testimonial = await Testimonial.findById(testimonialId);

        res.status(201).json({
            status: 'success',
            data: { testimonial }
        });
    } catch (error) {
        next(error);
    }
});

// Update testimonial
router.put('/:id', authenticateToken, async (req, res, next) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            throw new AppError('Testimonial not found', 404);
        }

        // Check if user is authorized to update this testimonial
        if (testimonial.user_id !== req.user.id) {
            throw new AppError('Not authorized to update this testimonial', 403);
        }

        const { rating, review } = req.body;

        // Validate rating
        if (rating < 1 || rating > 5) {
            throw new AppError('Rating must be between 1 and 5', 400);
        }

        await Testimonial.update(req.params.id, { rating, review });
        const updatedTestimonial = await Testimonial.findById(req.params.id);

        res.json({
            status: 'success',
            data: { testimonial: updatedTestimonial }
        });
    } catch (error) {
        next(error);
    }
});

// Delete testimonial
router.delete('/:id', authenticateToken, async (req, res, next) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            throw new AppError('Testimonial not found', 404);
        }

        // Check if user is authorized to delete this testimonial
        if (req.user.role !== 'admin' && testimonial.user_id !== req.user.id) {
            throw new AppError('Not authorized to delete this testimonial', 403);
        }

        await Testimonial.delete(req.params.id);

        res.json({
            status: 'success',
            message: 'Testimonial deleted successfully'
        });
    } catch (error) {
        next(error);
    }
});

// Approve/reject testimonial (admin/manager only)
router.patch('/:id/approve', authenticateToken, authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const { isApproved } = req.body;
        const testimonial = await Testimonial.findById(req.params.id);
        
        if (!testimonial) {
            throw new AppError('Testimonial not found', 404);
        }

        await Testimonial.updateApprovalStatus(req.params.id, isApproved);
        const updatedTestimonial = await Testimonial.findById(req.params.id);

        res.json({
            status: 'success',
            data: { testimonial: updatedTestimonial }
        });
    } catch (error) {
        next(error);
    }
});

// Get testimonials by package
router.get('/package/:packageId', async (req, res, next) => {
    try {
        const testimonials = await Testimonial.getByPackage(req.params.packageId);
        res.json({
            status: 'success',
            data: { testimonials }
        });
    } catch (error) {
        next(error);
    }
});

// Get testimonials statistics (admin/manager only)
router.get('/stats/overview', authenticateToken, authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const stats = await Testimonial.getStats();
        res.json({
            status: 'success',
            data: { stats }
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router; 