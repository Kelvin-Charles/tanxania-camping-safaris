const express = require('express');
const router = express.Router();
const db = require('../database/connection');
const Package = require('../models/Package');

router.get('/data', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM persons LIMIT 1');
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: "No data found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching data from database", error: error });
    }
});

router.get('/packages/:parkId', async (req, res) => {
    try {
        console.log(`Received request for park: ${req.params.parkId}`);
        const packages = await Package.getPackagesByParkIdentifier(req.params.parkId);
        console.log(`Found ${packages.length} packages`);
        res.json(packages);
    } catch (error) {
        console.error('Error in /packages/:parkId:', error);
        if (error.message.includes('Park not found')) {
            return res.status(404).json({ 
                status: 'fail',
                message: error.message 
            });
        }
        res.status(500).json({ 
            status: 'error',
            message: 'Error fetching packages',
            error: error.message 
        });
    }
});

// New route for getting package by title
router.get('/package/:title', async (req, res) => {
    try {
        console.log(`Received request for package: ${req.params.title}`);
        const package = await Package.getPackageByTitle(req.params.title);
        res.json({
            status: 'success',
            data: {
                package
            }
        });
    } catch (error) {
        console.error('Error in /package/:title:', error);
        if (error.message.includes('Package not found')) {
            return res.status(404).json({ 
                status: 'fail',
                message: error.message 
            });
        }
        res.status(500).json({ 
            status: 'error',
            message: 'Error fetching package',
            error: error.message 
        });
    }
});

router.get('/packages/category/:category', async (req, res) => {
    try {
        console.log(`Received request for category: ${req.params.category}`);
        const packages = await Package.getPackagesByCategory(req.params.category);
        console.log(`Found ${packages.length} packages for category ${req.params.category}:`, packages);
        res.json({
            status: 'success',
            data: packages
        });
    } catch (error) {
        console.error('Error in /packages/category/:category:', error);
        res.status(500).json({ 
            status: 'error',
            message: 'Error fetching packages',
            error: error.message 
        });
    }
});

module.exports = router; 