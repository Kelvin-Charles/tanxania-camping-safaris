const express = require('express');
const router = express.Router();
const { AppError } = require('../middleware/errorHandler');
const Setting = require('../models/Setting');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// Get all settings
router.get('/', async (req, res, next) => {
    try {
        const settings = await Setting.getAll();
        
        // Convert settings array to object for easier client-side usage
        const settingsObject = settings.reduce((acc, setting) => {
            let value = setting.setting_value;
            
            // Parse value based on type
            switch (setting.setting_type) {
                case 'number':
                    value = parseFloat(value);
                    break;
                case 'boolean':
                    value = value === 'true';
                    break;
                case 'json':
                    value = JSON.parse(value);
                    break;
            }
            
            acc[setting.setting_key] = value;
            return acc;
        }, {});

        res.json({
            status: 'success',
            data: { settings: settingsObject }
        });
    } catch (error) {
        next(error);
    }
});

// Get setting by key
router.get('/:key', async (req, res, next) => {
    try {
        const setting = await Setting.findByKey(req.params.key);
        if (!setting) {
            throw new AppError('Setting not found', 404);
        }

        let value = setting.setting_value;
        
        // Parse value based on type
        switch (setting.setting_type) {
            case 'number':
                value = parseFloat(value);
                break;
            case 'boolean':
                value = value === 'true';
                break;
            case 'json':
                value = JSON.parse(value);
                break;
        }

        res.json({
            status: 'success',
            data: { 
                key: setting.setting_key,
                value,
                type: setting.setting_type,
                description: setting.description
            }
        });
    } catch (error) {
        next(error);
    }
});

// Update setting (admin only)
router.put('/:key', authenticateToken, authorizeRole('admin'), async (req, res, next) => {
    try {
        const { value, type, description } = req.body;
        const key = req.params.key;

        // Validate setting type
        const validTypes = ['text', 'number', 'boolean', 'json'];
        if (type && !validTypes.includes(type)) {
            throw new AppError('Invalid setting type', 400);
        }

        // Validate value based on type
        let processedValue = value;
        if (type === 'json') {
            try {
                // Verify it's valid JSON
                JSON.parse(typeof value === 'string' ? value : JSON.stringify(value));
                processedValue = typeof value === 'string' ? value : JSON.stringify(value);
            } catch (e) {
                throw new AppError('Invalid JSON value', 400);
            }
        }

        await Setting.updateOrCreate(key, processedValue, type, description);
        const setting = await Setting.findByKey(key);

        res.json({
            status: 'success',
            data: { setting }
        });
    } catch (error) {
        next(error);
    }
});

// Delete setting (admin only)
router.delete('/:key', authenticateToken, authorizeRole('admin'), async (req, res, next) => {
    try {
        const setting = await Setting.findByKey(req.params.key);
        if (!setting) {
            throw new AppError('Setting not found', 404);
        }

        await Setting.delete(req.params.key);

        res.json({
            status: 'success',
            message: 'Setting deleted successfully'
        });
    } catch (error) {
        next(error);
    }
});

// Bulk update settings (admin only)
router.post('/bulk', authenticateToken, authorizeRole('admin'), async (req, res, next) => {
    try {
        const { settings } = req.body;
        
        if (!Array.isArray(settings)) {
            throw new AppError('Settings must be an array', 400);
        }

        const validTypes = ['text', 'number', 'boolean', 'json'];
        
        // Validate all settings before updating
        for (const setting of settings) {
            if (!setting.key || !setting.value) {
                throw new AppError('Each setting must have a key and value', 400);
            }
            if (setting.type && !validTypes.includes(setting.type)) {
                throw new AppError(`Invalid type for setting ${setting.key}`, 400);
            }
            if (setting.type === 'json') {
                try {
                    JSON.parse(typeof setting.value === 'string' ? setting.value : JSON.stringify(setting.value));
                } catch (e) {
                    throw new AppError(`Invalid JSON value for setting ${setting.key}`, 400);
                }
            }
        }

        // Update all settings
        await Setting.bulkUpdate(settings);

        const updatedSettings = await Setting.getAll();
        
        res.json({
            status: 'success',
            data: { settings: updatedSettings }
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router; 