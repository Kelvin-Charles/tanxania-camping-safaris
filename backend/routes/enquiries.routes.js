const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { verifyToken, isAdmin } = require('../middleware/auth.middleware');
const { sendEmail, emailTemplates } = require('../utils/email');

// Get all enquiries (admin only)
router.get('/', [verifyToken, isAdmin], async (req, res) => {
    try {
        const [enquiries] = await db.execute(
            'SELECT * FROM enquiries ORDER BY created_at DESC'
        );

        res.json({
            status: 'success',
            data: enquiries
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching enquiries',
            error: error.message
        });
    }
});

// Get single enquiry (admin only)
router.get('/:id', [verifyToken, isAdmin], async (req, res) => {
    try {
        const [enquiries] = await db.execute(
            'SELECT * FROM enquiries WHERE id = ?',
            [req.params.id]
        );

        if (enquiries.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Enquiry not found'
            });
        }

        res.json({
            status: 'success',
            data: enquiries[0]
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching enquiry',
            error: error.message
        });
    }
});

// Create new enquiry (public)
router.post('/', async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            country,
            tour_name,
            travel_date,
            adults,
            children,
            subject,
            message
        } = req.body;

        // Insert enquiry
        const [result] = await db.execute(
            `INSERT INTO enquiries (name, email, phone, country, tour_name,
                travel_date, adults, children, subject, message, status)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
            [name, email, phone, country, tour_name,
             travel_date, adults, children, subject, message]
        );

        // Send confirmation email to user
        await sendEmail({
            to: email,
            subject: 'Thank you for your enquiry',
            html: emailTemplates.enquiryConfirmation({
                name,
                tour_name,
                travel_date,
                adults,
                children
            })
        });

        // Send notification to admin
        await sendEmail({
            to: process.env.EMAIL_USER,
            subject: 'New Tour Enquiry',
            html: emailTemplates.adminNotification({
                name,
                email,
                phone,
                tour_name,
                travel_date,
                subject,
                message
            })
        });

        res.status(201).json({
            status: 'success',
            message: 'Enquiry submitted successfully',
            enquiryId: result.insertId
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error submitting enquiry',
            error: error.message
        });
    }
});

// Update enquiry status (admin only)
router.patch('/:id/status', [verifyToken, isAdmin], async (req, res) => {
    try {
        const { status } = req.body;
        const enquiryId = req.params.id;

        // Get current enquiry data
        const [enquiries] = await db.execute(
            'SELECT * FROM enquiries WHERE id = ?',
            [enquiryId]
        );

        if (enquiries.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Enquiry not found'
            });
        }

        // Update status
        await db.execute(
            'UPDATE enquiries SET status = ? WHERE id = ?',
            [status, enquiryId]
        );

        // Send status update email to user if needed
        if (status === 'processed') {
            await sendEmail({
                to: enquiries[0].email,
                subject: 'Your Enquiry Has Been Processed',
                html: emailTemplates.enquiryProcessed({
                    name: enquiries[0].name,
                    tour_name: enquiries[0].tour_name
                })
            });
        }

        res.json({
            status: 'success',
            message: 'Enquiry status updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error updating enquiry status',
            error: error.message
        });
    }
});

// Delete enquiry (admin only)
router.delete('/:id', [verifyToken, isAdmin], async (req, res) => {
    try {
        const enquiryId = req.params.id;

        // Check if enquiry exists
        const [enquiries] = await db.execute(
            'SELECT id FROM enquiries WHERE id = ?',
            [enquiryId]
        );

        if (enquiries.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Enquiry not found'
            });
        }

        // Delete enquiry
        await db.execute(
            'DELETE FROM enquiries WHERE id = ?',
            [enquiryId]
        );

        res.json({
            status: 'success',
            message: 'Enquiry deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error deleting enquiry',
            error: error.message
        });
    }
});

module.exports = router; 