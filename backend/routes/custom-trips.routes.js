const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { verifyToken, isAdmin } = require('../middleware/auth.middleware');
const { sendEmail, emailTemplates } = require('../utils/email');

// Get all custom trip requests (admin only)
router.get('/', [verifyToken, isAdmin], async (req, res) => {
    try {
        const [requests] = await db.execute(
            'SELECT * FROM custom_trips ORDER BY created_at DESC'
        );

        res.json({
            status: 'success',
            data: requests
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching custom trip requests',
            error: error.message
        });
    }
});

// Get single custom trip request (admin only)
router.get('/:id', [verifyToken, isAdmin], async (req, res) => {
    try {
        const [requests] = await db.execute(
            'SELECT * FROM custom_trips WHERE id = ?',
            [req.params.id]
        );

        if (requests.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Custom trip request not found'
            });
        }

        res.json({
            status: 'success',
            data: requests[0]
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching custom trip request',
            error: error.message
        });
    }
});

// Create new custom trip request (public)
router.post('/', async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            start_date,
            duration,
            group_size,
            budget_range,
            accommodation_preference,
            special_requirements,
            selected_parks
        } = req.body;

        // Insert custom trip request
        const [result] = await db.execute(
            `INSERT INTO custom_trips (name, email, phone, start_date, duration,
                group_size, budget_range, accommodation_preference,
                special_requirements, selected_parks, status)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
            [name, email, phone, start_date, duration,
             group_size, budget_range, accommodation_preference,
             special_requirements, JSON.stringify(selected_parks)]
        );

        // Send confirmation email to user
        await sendEmail({
            to: email,
            subject: 'Custom Trip Request Received',
            html: emailTemplates.customTripConfirmation({
                name,
                start_date,
                duration,
                group_size,
                selected_parks
            })
        });

        // Send notification to admin
        await sendEmail({
            to: process.env.EMAIL_USER,
            subject: 'New Custom Trip Request',
            html: emailTemplates.adminNotification({
                name,
                email,
                phone,
                start_date,
                duration,
                group_size,
                budget_range,
                accommodation_preference,
                special_requirements,
                selected_parks
            })
        });

        res.status(201).json({
            status: 'success',
            message: 'Custom trip request submitted successfully',
            requestId: result.insertId
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error submitting custom trip request',
            error: error.message
        });
    }
});

// Update custom trip request status (admin only)
router.patch('/:id/status', [verifyToken, isAdmin], async (req, res) => {
    try {
        const { status } = req.body;
        const requestId = req.params.id;

        // Get current request data
        const [requests] = await db.execute(
            'SELECT * FROM custom_trips WHERE id = ?',
            [requestId]
        );

        if (requests.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Custom trip request not found'
            });
        }

        // Update status
        await db.execute(
            'UPDATE custom_trips SET status = ? WHERE id = ?',
            [status, requestId]
        );

        // Send status update email to user if needed
        if (status === 'processed') {
            await sendEmail({
                to: requests[0].email,
                subject: 'Your Custom Trip Request Has Been Processed',
                html: emailTemplates.customTripProcessed({
                    name: requests[0].name,
                    start_date: requests[0].start_date
                })
            });
        }

        res.json({
            status: 'success',
            message: 'Custom trip request status updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error updating custom trip request status',
            error: error.message
        });
    }
});

// Delete custom trip request (admin only)
router.delete('/:id', [verifyToken, isAdmin], async (req, res) => {
    try {
        const requestId = req.params.id;

        // Check if request exists
        const [requests] = await db.execute(
            'SELECT id FROM custom_trips WHERE id = ?',
            [requestId]
        );

        if (requests.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Custom trip request not found'
            });
        }

        // Delete request
        await db.execute(
            'DELETE FROM custom_trips WHERE id = ?',
            [requestId]
        );

        res.json({
            status: 'success',
            message: 'Custom trip request deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error deleting custom trip request',
            error: error.message
        });
    }
});

module.exports = router; 