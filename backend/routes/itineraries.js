const express = require('express');
const router = express.Router();
const Itinerary = require('../models/Itinerary');
const { authenticate, authorize } = require('../middleware/auth');
const AppError = require('../utils/AppError');
const path = require('path');
const fs = require('fs').promises;

// Create a new itinerary
router.post('/', authenticate, authorize(['admin', 'manager']), async (req, res, next) => {
    try {
        const {
            title,
            description,
            duration,
            startLocation,
            endLocation,
            packageId,
            customTripId,
            days,
            inclusions,
            exclusions,
            notes
        } = req.body;

        if (!title || !duration || !days || !startLocation || !endLocation) {
            throw new AppError('Missing required fields', 400);
        }

        if (!packageId && !customTripId) {
            throw new AppError('Either packageId or customTripId is required', 400);
        }

        const itineraryId = await Itinerary.create({
            title,
            description,
            duration,
            startLocation,
            endLocation,
            packageId,
            customTripId,
            days,
            inclusions,
            exclusions,
            notes
        });

        const itinerary = await Itinerary.findById(itineraryId);
        res.status(201).json(itinerary);
    } catch (error) {
        next(error);
    }
});

// Get itinerary by ID
router.get('/:id', authenticate, async (req, res, next) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        if (!itinerary) {
            throw new AppError('Itinerary not found', 404);
        }
        res.json(itinerary);
    } catch (error) {
        next(error);
    }
});

// Update itinerary
router.put('/:id', authenticate, authorize(['admin', 'manager']), async (req, res, next) => {
    try {
        const {
            title,
            description,
            duration,
            startLocation,
            endLocation,
            days,
            inclusions,
            exclusions,
            notes
        } = req.body;

        if (!title || !duration || !days || !startLocation || !endLocation) {
            throw new AppError('Missing required fields', 400);
        }

        await Itinerary.update(req.params.id, {
            title,
            description,
            duration,
            startLocation,
            endLocation,
            days,
            inclusions,
            exclusions,
            notes
        });

        const itinerary = await Itinerary.findById(req.params.id);
        res.json(itinerary);
    } catch (error) {
        next(error);
    }
});

// Get itineraries by package
router.get('/package/:packageId', authenticate, async (req, res, next) => {
    try {
        const itineraries = await Itinerary.getByPackage(req.params.packageId);
        res.json(itineraries);
    } catch (error) {
        next(error);
    }
});

// Get itineraries by custom trip
router.get('/custom-trip/:customTripId', authenticate, async (req, res, next) => {
    try {
        const itineraries = await Itinerary.getByCustomTrip(req.params.customTripId);
        res.json(itineraries);
    } catch (error) {
        next(error);
    }
});

// Generate and download PDF
router.get('/:id/pdf', authenticate, async (req, res, next) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        if (!itinerary) {
            throw new AppError('Itinerary not found', 404);
        }

        // Create uploads directory if it doesn't exist
        const uploadsDir = path.join(__dirname, '../uploads/itineraries');
        await fs.mkdir(uploadsDir, { recursive: true });

        const filename = `itinerary_${itinerary.id}_${Date.now()}.pdf`;
        const outputPath = path.join(uploadsDir, filename);

        await Itinerary.generatePDF(req.params.id, outputPath);

        // Set headers for file download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

        // Stream the file to response
        const fileStream = fs.createReadStream(outputPath);
        fileStream.pipe(res);

        // Delete the file after sending
        fileStream.on('end', async () => {
            try {
                await fs.unlink(outputPath);
            } catch (error) {
                console.error('Error deleting temporary PDF file:', error);
            }
        });
    } catch (error) {
        next(error);
    }
});

// Preview PDF (returns URL)
router.get('/:id/pdf/preview', authenticate, async (req, res, next) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        if (!itinerary) {
            throw new AppError('Itinerary not found', 404);
        }

        // Create uploads directory if it doesn't exist
        const uploadsDir = path.join(__dirname, '../uploads/itineraries');
        await fs.mkdir(uploadsDir, { recursive: true });

        const filename = `itinerary_${itinerary.id}_${Date.now()}.pdf`;
        const outputPath = path.join(uploadsDir, filename);

        await Itinerary.generatePDF(req.params.id, outputPath);

        // Return the URL for preview
        const previewUrl = `/uploads/itineraries/${filename}`;
        res.json({ previewUrl });

        // Delete the file after 5 minutes
        setTimeout(async () => {
            try {
                await fs.unlink(outputPath);
            } catch (error) {
                console.error('Error deleting temporary PDF file:', error);
            }
        }, 5 * 60 * 1000);
    } catch (error) {
        next(error);
    }
});

// Delete itinerary
router.delete('/:id', authenticate, authorize(['admin']), async (req, res, next) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        if (!itinerary) {
            throw new AppError('Itinerary not found', 404);
        }

        await Itinerary.delete(req.params.id);
        res.json({ message: 'Itinerary deleted successfully' });
    } catch (error) {
        next(error);
    }
});

module.exports = router; 