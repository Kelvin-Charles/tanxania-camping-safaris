const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { AppError } = require('../middleware/errorHandler');
const User = require('../models/User');

// Register new user
router.post('/register', async (req, res, next) => {
    try {
        const { username, email, password, fullName, phone } = req.body;

        // Check if user already exists
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            throw new AppError('Email already in use', 400);
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const userId = await User.create({
            username,
            email,
            password: hashedPassword,
            role: 'customer',
            fullName,
            phone
        });

        const user = await User.findById(userId);

        // Generate token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({
            status: 'success',
            data: {
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                    fullName: user.full_name,
                    phone: user.phone
                },
                token
            }
        });
    } catch (error) {
        next(error);
    }
});

// Login user
router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findByEmail(email);
        if (!user) {
            throw new AppError('Invalid email or password', 401);
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw new AppError('Invalid email or password', 401);
        }

        // Generate token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            status: 'success',
            data: {
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                    fullName: user.full_name,
                    phone: user.phone
                },
                token
            }
        });
    } catch (error) {
        next(error);
    }
});

// Change password
router.post('/change-password', async (req, res, next) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const userId = req.user.id;

        const user = await User.findById(userId);
        if (!user) {
            throw new AppError('User not found', 404);
        }

        // Verify current password
        const validPassword = await bcrypt.compare(currentPassword, user.password);
        if (!validPassword) {
            throw new AppError('Current password is incorrect', 401);
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update password
        await User.changePassword(userId, hashedPassword);

        res.json({
            status: 'success',
            message: 'Password updated successfully'
        });
    } catch (error) {
        next(error);
    }
});

// Reset password request
router.post('/reset-password-request', async (req, res, next) => {
    try {
        const { email } = req.body;

        const user = await User.findByEmail(email);
        if (!user) {
            // Don't reveal whether a user exists
            res.json({
                status: 'success',
                message: 'If your email is registered, you will receive a password reset link'
            });
            return;
        }

        // TODO: Implement password reset token generation and email sending
        // For now, just return success message
        res.json({
            status: 'success',
            message: 'If your email is registered, you will receive a password reset link'
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router; 