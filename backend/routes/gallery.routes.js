const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { verifyToken, isAdmin } = require('../middleware/auth.middleware');
const { upload, handleUploadError, deleteFile } = require('../utils/upload');

// Get all gallery images
router.get('/', async (req, res) => {
    try {
        const [images] = await db.execute(
            'SELECT * FROM gallery ORDER BY created_at DESC'
        );

        res.json({
            status: 'success',
            data: images
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching gallery images',
            error: error.message
        });
    }
});

// Get gallery images by category
router.get('/category/:category', async (req, res) => {
    try {
        const [images] = await db.execute(
            'SELECT * FROM gallery WHERE category = ? ORDER BY created_at DESC',
            [req.params.category]
        );

        res.json({
            status: 'success',
            data: images
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching gallery images',
            error: error.message
        });
    }
});

// Get gallery categories
router.get('/categories', async (req, res) => {
    try {
        const [categories] = await db.execute(
            'SELECT DISTINCT category FROM gallery ORDER BY category'
        );

        res.json({
            status: 'success',
            data: categories.map(c => c.category)
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching gallery categories',
            error: error.message
        });
    }
});

// Upload new gallery image (admin only)
router.post('/', [verifyToken, isAdmin, upload.single('image')], async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                status: 'error',
                message: 'No image file uploaded'
            });
        }

        const { title, description, category } = req.body;
        const image_url = `${process.env.UPLOAD_PATH}/${req.file.filename}`;

        const [result] = await db.execute(
            'INSERT INTO gallery (title, description, category, image_url) VALUES (?, ?, ?, ?)',
            [title, description, category, image_url]
        );

        res.status(201).json({
            status: 'success',
            message: 'Gallery image uploaded successfully',
            imageId: result.insertId
        });
    } catch (error) {
        if (req.file) {
            deleteFile(req.file.path);
        }
        res.status(500).json({
            status: 'error',
            message: 'Error uploading gallery image',
            error: error.message
        });
    }
});

// Update gallery image details (admin only)
router.put('/:id', [verifyToken, isAdmin, upload.single('image')], async (req, res) => {
    try {
        const imageId = req.params.id;
        const { title, description, category } = req.body;

        // Get current image data
        const [images] = await db.execute(
            'SELECT * FROM gallery WHERE id = ?',
            [imageId]
        );

        if (images.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Gallery image not found'
            });
        }

        let image_url = images[0].image_url;

        // If new image uploaded, delete old image and update path
        if (req.file) {
            deleteFile(images[0].image_url);
            image_url = `${process.env.UPLOAD_PATH}/${req.file.filename}`;
        }

        await db.execute(
            'UPDATE gallery SET title = ?, description = ?, category = ?, image_url = ? WHERE id = ?',
            [title, description, category, image_url, imageId]
        );

        res.json({
            status: 'success',
            message: 'Gallery image updated successfully'
        });
    } catch (error) {
        if (req.file) {
            deleteFile(req.file.path);
        }
        res.status(500).json({
            status: 'error',
            message: 'Error updating gallery image',
            error: error.message
        });
    }
});

// Delete gallery image (admin only)
router.delete('/:id', [verifyToken, isAdmin], async (req, res) => {
    try {
        const imageId = req.params.id;

        // Get image data to delete file
        const [images] = await db.execute(
            'SELECT image_url FROM gallery WHERE id = ?',
            [imageId]
        );

        if (images.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Gallery image not found'
            });
        }

        // Delete image file
        deleteFile(images[0].image_url);

        // Delete database record
        await db.execute(
            'DELETE FROM gallery WHERE id = ?',
            [imageId]
        );

        res.json({
            status: 'success',
            message: 'Gallery image deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error deleting gallery image',
            error: error.message
        });
    }
});

module.exports = router; 