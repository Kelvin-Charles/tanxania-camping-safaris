const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { verifyToken, isAdmin } = require('../middleware/auth.middleware');
const { upload, handleUploadError, deleteFile } = require('../utils/upload');

// Get all approved testimonials
router.get('/', async (req, res) => {
    try {
        const [testimonials] = await db.execute(
            `SELECT t.*, tours.title as tour_name 
             FROM testimonials t
             LEFT JOIN tours ON t.tour_id = tours.id
             WHERE t.is_approved = true
             ORDER BY t.created_at DESC`
        );

        res.json({
            status: 'success',
            data: testimonials
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching testimonials',
            error: error.message
        });
    }
});

// Get all testimonials (admin only)
router.get('/all', [verifyToken, isAdmin], async (req, res) => {
    try {
        const [testimonials] = await db.execute(
            `SELECT t.*, tours.title as tour_name 
             FROM testimonials t
             LEFT JOIN tours ON t.tour_id = tours.id
             ORDER BY t.created_at DESC`
        );

        res.json({
            status: 'success',
            data: testimonials
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching testimonials',
            error: error.message
        });
    }
});

// Get testimonials for a specific tour
router.get('/tour/:tourId', async (req, res) => {
    try {
        const [testimonials] = await db.execute(
            `SELECT t.*, tours.title as tour_name 
             FROM testimonials t
             LEFT JOIN tours ON t.tour_id = tours.id
             WHERE t.tour_id = ? AND t.is_approved = true
             ORDER BY t.created_at DESC`,
            [req.params.tourId]
        );

        res.json({
            status: 'success',
            data: testimonials
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching testimonials',
            error: error.message
        });
    }
});

// Create new testimonial
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const {
            name,
            country,
            rating,
            comment,
            tour_id
        } = req.body;

        const image_url = req.file ? `${process.env.UPLOAD_PATH}/${req.file.filename}` : null;

        const [result] = await db.execute(
            `INSERT INTO testimonials (name, country, rating, comment,
                tour_id, image_url, is_approved)
             VALUES (?, ?, ?, ?, ?, ?, false)`,
            [name, country, rating, comment,
             tour_id, image_url]
        );

        res.status(201).json({
            status: 'success',
            message: 'Testimonial submitted successfully and pending approval',
            testimonialId: result.insertId
        });
    } catch (error) {
        if (req.file) {
            deleteFile(req.file.path);
        }
        res.status(500).json({
            status: 'error',
            message: 'Error submitting testimonial',
            error: error.message
        });
    }
});

// Update testimonial approval status (admin only)
router.patch('/:id/approve', [verifyToken, isAdmin], async (req, res) => {
    try {
        const testimonialId = req.params.id;
        const { is_approved } = req.body;

        // Check if testimonial exists
        const [testimonials] = await db.execute(
            'SELECT id FROM testimonials WHERE id = ?',
            [testimonialId]
        );

        if (testimonials.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Testimonial not found'
            });
        }

        // Update approval status
        await db.execute(
            'UPDATE testimonials SET is_approved = ? WHERE id = ?',
            [is_approved, testimonialId]
        );

        res.json({
            status: 'success',
            message: `Testimonial ${is_approved ? 'approved' : 'unapproved'} successfully`
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error updating testimonial approval status',
            error: error.message
        });
    }
});

// Delete testimonial (admin only)
router.delete('/:id', [verifyToken, isAdmin], async (req, res) => {
    try {
        const testimonialId = req.params.id;

        // Get testimonial data to delete image
        const [testimonials] = await db.execute(
            'SELECT image_url FROM testimonials WHERE id = ?',
            [testimonialId]
        );

        if (testimonials.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Testimonial not found'
            });
        }

        // Delete testimonial image if exists
        if (testimonials[0].image_url) {
            deleteFile(testimonials[0].image_url);
        }

        // Delete testimonial
        await db.execute(
            'DELETE FROM testimonials WHERE id = ?',
            [testimonialId]
        );

        res.json({
            status: 'success',
            message: 'Testimonial deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error deleting testimonial',
            error: error.message
        });
    }
});

module.exports = router; 