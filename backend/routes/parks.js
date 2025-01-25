const express = require('express');
const router = express.Router();
const { AppError } = require('../middleware/errorHandler');
const Park = require('../models/Park');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// Get all parks
router.get('/', async (req, res, next) => {
    try {
        const filters = {
            circuit: req.query.circuit
        };

        const parks = await Park.getAll(filters);
        res.json({
            status: 'success',
            data: { parks }
        });
    } catch (error) {
        next(error);
    }
});

// Get park by ID
router.get('/:id', async (req, res, next) => {
    try {
        const park = await Park.findById(req.params.id);
        if (!park) {
            throw new AppError('Park not found', 404);
        }

        res.json({
            status: 'success',
            data: { park }
        });
    } catch (error) {
        next(error);
    }
});

// Create new park (admin/manager only)
router.post('/', authenticateToken, authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const {
            name,
            description,
            location,
            imageUrl,
            highlights,
            bestTimeToVisit,
            activities,
            circuit
        } = req.body;

        const parkId = await Park.create({
            name,
            description,
            location,
            imageUrl,
            highlights,
            bestTimeToVisit,
            activities,
            circuit
        });

        const park = await Park.findById(parkId);

        res.status(201).json({
            status: 'success',
            data: { park }
        });
    } catch (error) {
        next(error);
    }
});

// Update park (admin/manager only)
router.put('/:id', authenticateToken, authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const parkId = req.params.id;
        const {
            name,
            description,
            location,
            imageUrl,
            highlights,
            bestTimeToVisit,
            activities,
            circuit
        } = req.body;

        const park = await Park.findById(parkId);
        if (!park) {
            throw new AppError('Park not found', 404);
        }

        await Park.update(parkId, {
            name,
            description,
            location,
            imageUrl,
            highlights,
            bestTimeToVisit,
            activities,
            circuit
        });

        const updatedPark = await Park.findById(parkId);

        res.json({
            status: 'success',
            data: { park: updatedPark }
        });
    } catch (error) {
        next(error);
    }
});

// Delete park (admin only)
router.delete('/:id', authenticateToken, authorizeRole('admin'), async (req, res, next) => {
    try {
        const park = await Park.findById(req.params.id);
        if (!park) {
            throw new AppError('Park not found', 404);
        }

        await Park.delete(req.params.id);

        res.json({
            status: 'success',
            message: 'Park deleted successfully'
        });
    } catch (error) {
        next(error);
    }
});

// Get park packages
router.get('/:id/packages', async (req, res, next) => {
    try {
        const park = await Park.findById(req.params.id);
        if (!park) {
            throw new AppError('Park not found', 404);
        }

        const packages = await Park.getPackagesByParkId(req.params.id);

        res.json({
            status: 'success',
            data: { packages }
        });
    } catch (error) {
        next(error);
    }
});

// Get parks by circuit
router.get('/circuit/:circuit', async (req, res, next) => {
    try {
        const validCircuits = ['northern', 'southern', 'western', 'coastal'];
        const circuit = req.params.circuit.toLowerCase();

        if (!validCircuits.includes(circuit)) {
            throw new AppError('Invalid circuit', 400);
        }

        const parks = await Park.getByCircuit(circuit);

        res.json({
            status: 'success',
            data: { parks }
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router; 