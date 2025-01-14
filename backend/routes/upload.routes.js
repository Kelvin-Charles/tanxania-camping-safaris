const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;
const { verifyToken, isAdmin } = require('../middleware/auth.middleware');
const { upload, handleUploadError, deleteFile } = require('../utils/upload');

// Upload single file (admin only)
router.post('/single', [verifyToken, isAdmin, upload.single('file')], async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                status: 'error',
                message: 'No file uploaded'
            });
        }

        res.json({
            status: 'success',
            message: 'File uploaded successfully',
            data: {
                filename: req.file.filename,
                path: `${process.env.UPLOAD_PATH}/${req.file.filename}`,
                mimetype: req.file.mimetype,
                size: req.file.size
            }
        });
    } catch (error) {
        if (req.file) {
            deleteFile(req.file.path);
        }
        res.status(500).json({
            status: 'error',
            message: 'Error uploading file',
            error: error.message
        });
    }
});

// Upload multiple files (admin only)
router.post('/multiple', [verifyToken, isAdmin, upload.array('files', 10)], async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({
                status: 'error',
                message: 'No files uploaded'
            });
        }

        const uploadedFiles = req.files.map(file => ({
            filename: file.filename,
            path: `${process.env.UPLOAD_PATH}/${file.filename}`,
            mimetype: file.mimetype,
            size: file.size
        }));

        res.json({
            status: 'success',
            message: 'Files uploaded successfully',
            data: uploadedFiles
        });
    } catch (error) {
        // Clean up any uploaded files
        if (req.files) {
            req.files.forEach(file => deleteFile(file.path));
        }
        res.status(500).json({
            status: 'error',
            message: 'Error uploading files',
            error: error.message
        });
    }
});

// Delete file (admin only)
router.delete('/:filename', [verifyToken, isAdmin], async (req, res) => {
    try {
        const filename = req.params.filename;
        const filepath = path.join(process.env.UPLOAD_PATH, filename);

        try {
            await fs.access(filepath);
        } catch (error) {
            return res.status(404).json({
                status: 'error',
                message: 'File not found'
            });
        }

        await deleteFile(filepath);

        res.json({
            status: 'success',
            message: 'File deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error deleting file',
            error: error.message
        });
    }
});

// List uploaded files (admin only)
router.get('/list', [verifyToken, isAdmin], async (req, res) => {
    try {
        const files = await fs.readdir(process.env.UPLOAD_PATH);
        const fileDetails = await Promise.all(
            files.map(async filename => {
                const filepath = path.join(process.env.UPLOAD_PATH, filename);
                const stats = await fs.stat(filepath);
                return {
                    filename,
                    path: `${process.env.UPLOAD_PATH}/${filename}`,
                    size: stats.size,
                    created: stats.birthtime,
                    modified: stats.mtime
                };
            })
        );

        res.json({
            status: 'success',
            data: fileDetails
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error listing files',
            error: error.message
        });
    }
});

// Get file info (admin only)
router.get('/info/:filename', [verifyToken, isAdmin], async (req, res) => {
    try {
        const filename = req.params.filename;
        const filepath = path.join(process.env.UPLOAD_PATH, filename);

        try {
            const stats = await fs.stat(filepath);
            res.json({
                status: 'success',
                data: {
                    filename,
                    path: `${process.env.UPLOAD_PATH}/${filename}`,
                    size: stats.size,
                    created: stats.birthtime,
                    modified: stats.mtime
                }
            });
        } catch (error) {
            return res.status(404).json({
                status: 'error',
                message: 'File not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error getting file info',
            error: error.message
        });
    }
});

// Handle upload errors
router.use((error, req, res, next) => {
    handleUploadError(error, req, res, next);
});

module.exports = router; 