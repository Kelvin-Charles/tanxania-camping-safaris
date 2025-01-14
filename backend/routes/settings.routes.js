const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { verifyToken, isAdmin } = require('../middleware/auth.middleware');

// Get all settings
router.get('/', async (req, res) => {
    try {
        const [settings] = await db.execute(
            'SELECT * FROM settings ORDER BY setting_key'
        );

        // Convert array to object for easier client-side usage
        const settingsObject = settings.reduce((acc, setting) => {
            acc[setting.setting_key] = setting.setting_value;
            return acc;
        }, {});

        res.json({
            status: 'success',
            data: settingsObject
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching settings',
            error: error.message
        });
    }
});

// Get setting by key
router.get('/:key', async (req, res) => {
    try {
        const [settings] = await db.execute(
            'SELECT * FROM settings WHERE setting_key = ?',
            [req.params.key]
        );

        if (settings.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Setting not found'
            });
        }

        res.json({
            status: 'success',
            data: settings[0].setting_value
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching setting',
            error: error.message
        });
    }
});

// Update settings (admin only)
router.put('/', [verifyToken, isAdmin], async (req, res) => {
    const connection = await db.getConnection();
    try {
        await connection.beginTransaction();

        const settings = req.body;
        const updatePromises = [];

        // Update each setting
        for (const [key, value] of Object.entries(settings)) {
            const [existing] = await connection.execute(
                'SELECT id FROM settings WHERE setting_key = ?',
                [key]
            );

            if (existing.length > 0) {
                // Update existing setting
                updatePromises.push(
                    connection.execute(
                        'UPDATE settings SET setting_value = ? WHERE setting_key = ?',
                        [value, key]
                    )
                );
            } else {
                // Insert new setting
                updatePromises.push(
                    connection.execute(
                        'INSERT INTO settings (setting_key, setting_value) VALUES (?, ?)',
                        [key, value]
                    )
                );
            }
        }

        await Promise.all(updatePromises);
        await connection.commit();

        res.json({
            status: 'success',
            message: 'Settings updated successfully'
        });
    } catch (error) {
        await connection.rollback();
        res.status(500).json({
            status: 'error',
            message: 'Error updating settings',
            error: error.message
        });
    } finally {
        connection.release();
    }
});

// Delete setting (admin only)
router.delete('/:key', [verifyToken, isAdmin], async (req, res) => {
    try {
        const settingKey = req.params.key;

        // Check if setting exists
        const [settings] = await db.execute(
            'SELECT id FROM settings WHERE setting_key = ?',
            [settingKey]
        );

        if (settings.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Setting not found'
            });
        }

        // Delete setting
        await db.execute(
            'DELETE FROM settings WHERE setting_key = ?',
            [settingKey]
        );

        res.json({
            status: 'success',
            message: 'Setting deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error deleting setting',
            error: error.message
        });
    }
});

// Reset settings to default (admin only)
router.post('/reset', [verifyToken, isAdmin], async (req, res) => {
    const connection = await db.getConnection();
    try {
        await connection.beginTransaction();

        // Delete all existing settings
        await connection.execute('DELETE FROM settings');

        // Insert default settings
        const defaultSettings = {
            'site.name': 'Tanzania Camping',
            'site.description': 'Experience the best of Tanzania with our guided tours and safaris',
            'site.email': process.env.EMAIL_USER,
            'site.phone': '+255 123 456 789',
            'site.address': 'Arusha, Tanzania',
            'social.facebook': 'https://facebook.com/tanzaniacamping',
            'social.instagram': 'https://instagram.com/tanzaniacamping',
            'social.twitter': 'https://twitter.com/tanzaniacamping',
            'booking.min_advance_days': '7',
            'booking.max_group_size': '15',
            'currency.code': 'USD',
            'currency.symbol': '$'
        };

        const insertPromises = Object.entries(defaultSettings).map(([key, value]) =>
            connection.execute(
                'INSERT INTO settings (setting_key, setting_value) VALUES (?, ?)',
                [key, value]
            )
        );

        await Promise.all(insertPromises);
        await connection.commit();

        res.json({
            status: 'success',
            message: 'Settings reset to default values'
        });
    } catch (error) {
        await connection.rollback();
        res.status(500).json({
            status: 'error',
            message: 'Error resetting settings',
            error: error.message
        });
    } finally {
        connection.release();
    }
});

module.exports = router; 