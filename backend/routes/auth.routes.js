const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database');
const { verifyToken, isAdmin } = require('../middleware/auth.middleware');

// Register new user (admin only)
router.post('/register', [verifyToken, isAdmin], async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert user
        const [result] = await db.execute(
            'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
            [username, email, hashedPassword, role || 'user']
        );

        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            userId: result.insertId
        });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({
                status: 'error',
                message: 'Username or email already exists'
            });
        }
        res.status(500).json({
            status: 'error',
            message: 'Error registering user',
            error: error.message
        });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Get user
        const [users] = await db.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );

        if (users.length === 0) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid credentials'
            });
        }

        const user = users[0];

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid credentials'
            });
        }

        // Generate token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({
            status: 'success',
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error logging in',
            error: error.message
        });
    }
});

// Get current user
router.get('/me', verifyToken, async (req, res) => {
    try {
        const [users] = await db.execute(
            'SELECT id, username, email, role FROM users WHERE id = ?',
            [req.user.id]
        );

        if (users.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            });
        }

        res.json({
            status: 'success',
            user: users[0]
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error getting user info',
            error: error.message
        });
    }
});

// Update user
router.put('/update', verifyToken, async (req, res) => {
    try {
        const { username, email, currentPassword, newPassword } = req.body;
        const userId = req.user.id;

        // Get current user
        const [users] = await db.execute(
            'SELECT * FROM users WHERE id = ?',
            [userId]
        );

        if (users.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            });
        }

        const user = users[0];

        // If updating password, verify current password
        if (newPassword) {
            const validPassword = await bcrypt.compare(currentPassword, user.password);
            if (!validPassword) {
                return res.status(401).json({
                    status: 'error',
                    message: 'Current password is incorrect'
                });
            }

            // Hash new password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);

            // Update user with new password
            await db.execute(
                'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',
                [username || user.username, email || user.email, hashedPassword, userId]
            );
        } else {
            // Update user without changing password
            await db.execute(
                'UPDATE users SET username = ?, email = ? WHERE id = ?',
                [username || user.username, email || user.email, userId]
            );
        }

        res.json({
            status: 'success',
            message: 'User updated successfully'
        });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({
                status: 'error',
                message: 'Username or email already exists'
            });
        }
        res.status(500).json({
            status: 'error',
            message: 'Error updating user',
            error: error.message
        });
    }
});

// Delete user (admin only)
router.delete('/:id', [verifyToken, isAdmin], async (req, res) => {
    try {
        const userId = req.params.id;

        const [result] = await db.execute(
            'DELETE FROM users WHERE id = ?',
            [userId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            });
        }

        res.json({
            status: 'success',
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error deleting user',
            error: error.message
        });
    }
});

module.exports = router; 