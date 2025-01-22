const express = require('express');
const router = express.Router();
const { AppError } = require('../middleware/errorHandler');
const Enquiry = require('../models/Enquiry');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// Get all enquiries (admin/manager only)
router.get('/', authenticateToken, authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const filters = {
            status: req.query.status,
            email: req.query.email,
            startDate: req.query.startDate,
            endDate: req.query.endDate
        };

        const enquiries = await Enquiry.getAll(filters);
        res.json({
            status: 'success',
            data: { enquiries }
        });
    } catch (error) {
        next(error);
    }
});

// Get enquiry by ID (admin/manager only)
router.get('/:id', authenticateToken, authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const enquiry = await Enquiry.findById(req.params.id);
        if (!enquiry) {
            throw new AppError('Enquiry not found', 404);
        }

        res.json({
            status: 'success',
            data: { enquiry }
        });
    } catch (error) {
        next(error);
    }
});

// Create new enquiry (public)
router.post('/', async (req, res, next) => {
    try {
        const {
            name,
            email,
            phone,
            message,
            packageId,
            preferredDate,
            numberOfPeople
        } = req.body;

        const enquiryId = await Enquiry.create({
            name,
            email,
            phone,
            message,
            packageId,
            preferredDate,
            numberOfPeople
        });

        const enquiry = await Enquiry.findById(enquiryId);

        res.status(201).json({
            status: 'success',
            data: { enquiry }
        });
    } catch (error) {
        next(error);
    }
});

// Update enquiry status (admin/manager only)
router.patch('/:id/status', authenticateToken, authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const { status } = req.body;
        const validStatuses = ['pending', 'responded', 'converted', 'closed'];

        if (!validStatuses.includes(status)) {
            throw new AppError('Invalid status', 400);
        }

        const enquiry = await Enquiry.findById(req.params.id);
        if (!enquiry) {
            throw new AppError('Enquiry not found', 404);
        }

        await Enquiry.updateStatus(req.params.id, status);
        const updatedEnquiry = await Enquiry.findById(req.params.id);

        res.json({
            status: 'success',
            data: { enquiry: updatedEnquiry }
        });
    } catch (error) {
        next(error);
    }
});

// Add response to enquiry (admin/manager only)
router.post('/:id/response', authenticateToken, authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const { response } = req.body;
        const enquiry = await Enquiry.findById(req.params.id);
        
        if (!enquiry) {
            throw new AppError('Enquiry not found', 404);
        }

        await Enquiry.addResponse(req.params.id, response, req.user.id);
        const updatedEnquiry = await Enquiry.findById(req.params.id);

        res.json({
            status: 'success',
            data: { enquiry: updatedEnquiry }
        });
    } catch (error) {
        next(error);
    }
});

// Get enquiry statistics (admin/manager only)
router.get('/stats/overview', authenticateToken, authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const stats = await Enquiry.getStats();
        res.json({
            status: 'success',
            data: { stats }
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router; 