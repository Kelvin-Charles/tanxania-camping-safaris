const express = require('express');
const router = express.Router();
const { AppError } = require('../middleware/errorHandler');
const Package = require('../models/Package');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// Get all packages
router.get('/', async (req, res, next) => {
    try {
        const filters = {
            parkId: req.query.parkId,
            featured: req.query.featured === 'true',
            minPrice: req.query.minPrice ? parseFloat(req.query.minPrice) : undefined,
            maxPrice: req.query.maxPrice ? parseFloat(req.query.maxPrice) : undefined,
            duration: req.query.duration ? parseInt(req.query.duration) : undefined
        };

        const packages = await Package.getAll(filters);
        res.json({
            status: 'success',
            data: { packages }
        });
    } catch (error) {
        next(error);
    }
});

// Get package by ID
router.get('/:id', async (req, res, next) => {
    try {
        const package = await Package.findById(req.params.id);
        if (!package) {
            throw new AppError('Package not found', 404);
        }

        res.json({
            status: 'success',
            data: { package }
        });
    } catch (error) {
        next(error);
    }
});

// Create new package (admin/manager only)
router.post('/', authenticateToken, authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const {
            name,
            description,
            duration,
            price,
            parkId,
            itinerary,
            inclusions,
            exclusions,
            imageUrl,
            featured = false
        } = req.body;

        const packageId = await Package.create({
            name,
            description,
            duration,
            price,
            parkId,
            itinerary,
            inclusions,
            exclusions,
            imageUrl,
            featured
        });

        const newPackage = await Package.findById(packageId);

        res.status(201).json({
            status: 'success',
            data: { package: newPackage }
        });
    } catch (error) {
        next(error);
    }
});

// Update package (admin/manager only)
router.put('/:id', authenticateToken, authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const packageId = req.params.id;
        const {
            name,
            description,
            duration,
            price,
            parkId,
            itinerary,
            inclusions,
            exclusions,
            imageUrl,
            featured
        } = req.body;

        const package = await Package.findById(packageId);
        if (!package) {
            throw new AppError('Package not found', 404);
        }

        await Package.update(packageId, {
            name,
            description,
            duration,
            price,
            parkId,
            itinerary,
            inclusions,
            exclusions,
            imageUrl,
            featured
        });

        const updatedPackage = await Package.findById(packageId);

        res.json({
            status: 'success',
            data: { package: updatedPackage }
        });
    } catch (error) {
        next(error);
    }
});

// Delete package (admin only)
router.delete('/:id', authenticateToken, authorizeRole('admin'), async (req, res, next) => {
    try {
        const package = await Package.findById(req.params.id);
        if (!package) {
            throw new AppError('Package not found', 404);
        }

        await Package.delete(req.params.id);

        res.json({
            status: 'success',
            message: 'Package deleted successfully'
        });
    } catch (error) {
        next(error);
    }
});

// Get featured packages
router.get('/featured/all', async (req, res, next) => {
    try {
        const packages = await Package.getFeatured();
        res.json({
            status: 'success',
            data: { packages }
        });
    } catch (error) {
        next(error);
    }
});

// Toggle package featured status (admin/manager only)
router.patch('/:id/featured', authenticateToken, authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const package = await Package.findById(req.params.id);
        if (!package) {
            throw new AppError('Package not found', 404);
        }

        await Package.toggleFeatured(req.params.id);
        const updatedPackage = await Package.findById(req.params.id);

        res.json({
            status: 'success',
            data: { package: updatedPackage }
        });
    } catch (error) {
        next(error);
    }
});

// Add this new route for getting packages by category
router.get('/category/:category', async (req, res, next) => {
    try {
        console.log(`Fetching packages for category: ${req.params.category}`);
        const packages = await Package.getPackagesByCategory(req.params.category);
        
        console.log(`Found ${packages.length} packages for category ${req.params.category}`);
        
        res.json({
            status: 'success',
            data: packages
        });
    } catch (error) {
        console.error('Error fetching packages by category:', error);
        next(error);
    }
});

module.exports = router; 