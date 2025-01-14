const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { verifyToken, isAdmin } = require('../middleware/auth.middleware');
const { upload, handleUploadError, deleteFile } = require('../utils/upload');

// Get all parks
router.get('/', async (req, res) => {
    try {
        const [parks] = await db.execute(
            'SELECT * FROM parks ORDER BY name'
        );

        res.json({
            status: 'success',
            data: parks
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching parks',
            error: error.message
        });
    }
});

// Get parks by circuit
router.get('/circuit/:type', async (req, res) => {
    try {
        const [parks] = await db.execute(
            'SELECT * FROM parks WHERE circuit_type = ? ORDER BY name',
            [req.params.type]
        );

        res.json({
            status: 'success',
            data: parks
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching parks',
            error: error.message
        });
    }
});

// Get single park
router.get('/:id', async (req, res) => {
    try {
        const [parks] = await db.execute(
            'SELECT * FROM parks WHERE id = ?',
            [req.params.id]
        );

        if (parks.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Park not found'
            });
        }

        res.json({
            status: 'success',
            data: parks[0]
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching park',
            error: error.message
        });
    }
});

// Create new park (admin only)
router.post('/', [verifyToken, isAdmin, upload.single('image')], async (req, res) => {
    try {
        const {
            name,
            description,
            location,
            best_time,
            highlights,
            activities,
            circuit_type
        } = req.body;

        const image_url = req.file ? `${process.env.UPLOAD_PATH}/${req.file.filename}` : null;

        const [result] = await db.execute(
            `INSERT INTO parks (name, description, location, best_time, highlights, 
                activities, image_url, circuit_type) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [name, description, location, best_time, highlights, 
             activities, image_url, circuit_type]
        );

        res.status(201).json({
            status: 'success',
            message: 'Park created successfully',
            parkId: result.insertId
        });
    } catch (error) {
        if (req.file) {
            deleteFile(req.file.path);
        }
        res.status(500).json({
            status: 'error',
            message: 'Error creating park',
            error: error.message
        });
    }
});

// Update park (admin only)
router.put('/:id', [verifyToken, isAdmin, upload.single('image')], async (req, res) => {
    try {
        const parkId = req.params.id;
        const {
            name,
            description,
            location,
            best_time,
            highlights,
            activities,
            circuit_type
        } = req.body;

        // Get current park data
        const [parks] = await db.execute(
            'SELECT * FROM parks WHERE id = ?',
            [parkId]
        );

        if (parks.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Park not found'
            });
        }

        const currentPark = parks[0];
        let image_url = currentPark.image_url;

        // If new image uploaded, delete old image and update path
        if (req.file) {
            if (currentPark.image_url) {
                deleteFile(currentPark.image_url);
            }
            image_url = `${process.env.UPLOAD_PATH}/${req.file.filename}`;
        }

        await db.execute(
            `UPDATE parks 
             SET name = ?, description = ?, location = ?, best_time = ?,
                 highlights = ?, activities = ?, image_url = ?, circuit_type = ?
             WHERE id = ?`,
            [name, description, location, best_time, highlights,
             activities, image_url, circuit_type, parkId]
        );

        res.json({
            status: 'success',
            message: 'Park updated successfully'
        });
    } catch (error) {
        if (req.file) {
            deleteFile(req.file.path);
        }
        res.status(500).json({
            status: 'error',
            message: 'Error updating park',
            error: error.message
        });
    }
});

// Delete park (admin only)
router.delete('/:id', [verifyToken, isAdmin], async (req, res) => {
    try {
        const parkId = req.params.id;

        // Get park data to delete image
        const [parks] = await db.execute(
            'SELECT image_url FROM parks WHERE id = ?',
            [parkId]
        );

        if (parks.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Park not found'
            });
        }

        // Delete park image if exists
        if (parks[0].image_url) {
            deleteFile(parks[0].image_url);
        }

        // Delete park from database
        await db.execute(
            'DELETE FROM parks WHERE id = ?',
            [parkId]
        );

        res.json({
            status: 'success',
            message: 'Park deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error deleting park',
            error: error.message
        });
    }
});

module.exports = router; 