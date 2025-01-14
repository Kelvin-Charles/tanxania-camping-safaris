const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { verifyToken, isAdmin } = require('../middleware/auth.middleware');
const { upload, handleUploadError, deleteFile } = require('../utils/upload');

// Get all tours
router.get('/', async (req, res) => {
    try {
        const [tours] = await db.execute(
            'SELECT * FROM tours ORDER BY title'
        );

        res.json({
            status: 'success',
            data: tours
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching tours',
            error: error.message
        });
    }
});

// Get tours by type
router.get('/type/:type', async (req, res) => {
    try {
        const [tours] = await db.execute(
            'SELECT * FROM tours WHERE tour_type = ? ORDER BY title',
            [req.params.type]
        );

        res.json({
            status: 'success',
            data: tours
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching tours',
            error: error.message
        });
    }
});

// Get single tour with associated parks
router.get('/:id', async (req, res) => {
    try {
        // Get tour details
        const [tours] = await db.execute(
            'SELECT * FROM tours WHERE id = ?',
            [req.params.id]
        );

        if (tours.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Tour not found'
            });
        }

        const tour = tours[0];

        // Get associated parks
        const [parks] = await db.execute(
            `SELECT p.* FROM parks p 
             INNER JOIN tour_parks tp ON p.id = tp.park_id 
             WHERE tp.tour_id = ?`,
            [req.params.id]
        );

        tour.parks = parks;

        res.json({
            status: 'success',
            data: tour
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching tour',
            error: error.message
        });
    }
});

// Create new tour (admin only)
router.post('/', [verifyToken, isAdmin, upload.single('image')], async (req, res) => {
    const connection = await db.getConnection();
    try {
        await connection.beginTransaction();

        const {
            title,
            description,
            duration,
            price,
            group_size,
            tour_type,
            highlights,
            itinerary,
            included,
            not_included,
            park_ids
        } = req.body;

        const image_url = req.file ? `${process.env.UPLOAD_PATH}/${req.file.filename}` : null;

        // Insert tour
        const [result] = await connection.execute(
            `INSERT INTO tours (title, description, duration, price, group_size,
                tour_type, highlights, itinerary, included, not_included, image_url)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [title, description, duration, price, group_size,
             tour_type, highlights, itinerary, included, not_included, image_url]
        );

        const tourId = result.insertId;

        // Insert tour-park associations if provided
        if (park_ids && Array.isArray(park_ids)) {
            for (const parkId of park_ids) {
                await connection.execute(
                    'INSERT INTO tour_parks (tour_id, park_id) VALUES (?, ?)',
                    [tourId, parkId]
                );
            }
        }

        await connection.commit();

        res.status(201).json({
            status: 'success',
            message: 'Tour created successfully',
            tourId: tourId
        });
    } catch (error) {
        await connection.rollback();
        if (req.file) {
            deleteFile(req.file.path);
        }
        res.status(500).json({
            status: 'error',
            message: 'Error creating tour',
            error: error.message
        });
    } finally {
        connection.release();
    }
});

// Update tour (admin only)
router.put('/:id', [verifyToken, isAdmin, upload.single('image')], async (req, res) => {
    const connection = await db.getConnection();
    try {
        await connection.beginTransaction();

        const tourId = req.params.id;
        const {
            title,
            description,
            duration,
            price,
            group_size,
            tour_type,
            highlights,
            itinerary,
            included,
            not_included,
            park_ids
        } = req.body;

        // Get current tour data
        const [tours] = await connection.execute(
            'SELECT * FROM tours WHERE id = ?',
            [tourId]
        );

        if (tours.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Tour not found'
            });
        }

        const currentTour = tours[0];
        let image_url = currentTour.image_url;

        // If new image uploaded, delete old image and update path
        if (req.file) {
            if (currentTour.image_url) {
                deleteFile(currentTour.image_url);
            }
            image_url = `${process.env.UPLOAD_PATH}/${req.file.filename}`;
        }

        // Update tour
        await connection.execute(
            `UPDATE tours 
             SET title = ?, description = ?, duration = ?, price = ?,
                 group_size = ?, tour_type = ?, highlights = ?, itinerary = ?,
                 included = ?, not_included = ?, image_url = ?
             WHERE id = ?`,
            [title, description, duration, price, group_size,
             tour_type, highlights, itinerary, included, not_included,
             image_url, tourId]
        );

        // Update tour-park associations if provided
        if (park_ids && Array.isArray(park_ids)) {
            // Remove existing associations
            await connection.execute(
                'DELETE FROM tour_parks WHERE tour_id = ?',
                [tourId]
            );

            // Add new associations
            for (const parkId of park_ids) {
                await connection.execute(
                    'INSERT INTO tour_parks (tour_id, park_id) VALUES (?, ?)',
                    [tourId, parkId]
                );
            }
        }

        await connection.commit();

        res.json({
            status: 'success',
            message: 'Tour updated successfully'
        });
    } catch (error) {
        await connection.rollback();
        if (req.file) {
            deleteFile(req.file.path);
        }
        res.status(500).json({
            status: 'error',
            message: 'Error updating tour',
            error: error.message
        });
    } finally {
        connection.release();
    }
});

// Delete tour (admin only)
router.delete('/:id', [verifyToken, isAdmin], async (req, res) => {
    const connection = await db.getConnection();
    try {
        await connection.beginTransaction();

        const tourId = req.params.id;

        // Get tour data to delete image
        const [tours] = await connection.execute(
            'SELECT image_url FROM tours WHERE id = ?',
            [tourId]
        );

        if (tours.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Tour not found'
            });
        }

        // Delete tour image if exists
        if (tours[0].image_url) {
            deleteFile(tours[0].image_url);
        }

        // Delete tour-park associations
        await connection.execute(
            'DELETE FROM tour_parks WHERE tour_id = ?',
            [tourId]
        );

        // Delete tour
        await connection.execute(
            'DELETE FROM tours WHERE id = ?',
            [tourId]
        );

        await connection.commit();

        res.json({
            status: 'success',
            message: 'Tour deleted successfully'
        });
    } catch (error) {
        await connection.rollback();
        res.status(500).json({
            status: 'error',
            message: 'Error deleting tour',
            error: error.message
        });
    } finally {
        connection.release();
    }
});

module.exports = router; 