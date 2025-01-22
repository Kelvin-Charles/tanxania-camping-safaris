const express = require('express');
const router = express.Router();
const { AppError } = require('../middleware/errorHandler');
const { authorizeRole } = require('../middleware/auth');
const Booking = require('../models/Booking');
const CustomTrip = require('../models/CustomTrip');
const Enquiry = require('../models/Enquiry');
const User = require('../models/User');
const Package = require('../models/Package');

// Get dashboard overview (admin/manager only)
router.get('/overview', authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        // Get all required statistics
        const [
            bookingStats,
            customTripStats,
            enquiryStats,
            userStats,
            packageStats
        ] = await Promise.all([
            Booking.getBookingStats(),
            CustomTrip.getStats(),
            Enquiry.getStats(),
            User.getStats(),
            Package.getStats()
        ]);

        res.json({
            status: 'success',
            data: {
                bookings: bookingStats,
                customTrips: customTripStats,
                enquiries: enquiryStats,
                users: userStats,
                packages: packageStats
            }
        });
    } catch (error) {
        next(error);
    }
});

// Get recent activities (admin/manager only)
router.get('/recent-activities', authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 10;

        const [
            recentBookings,
            recentCustomTrips,
            recentEnquiries
        ] = await Promise.all([
            Booking.getRecent(limit),
            CustomTrip.getRecent(limit),
            Enquiry.getRecent(limit)
        ]);

        // Combine and sort all activities by date
        const activities = [
            ...recentBookings.map(b => ({
                type: 'booking',
                data: b,
                date: new Date(b.created_at)
            })),
            ...recentCustomTrips.map(ct => ({
                type: 'custom_trip',
                data: ct,
                date: new Date(ct.created_at)
            })),
            ...recentEnquiries.map(e => ({
                type: 'enquiry',
                data: e,
                date: new Date(e.created_at)
            }))
        ].sort((a, b) => b.date - a.date)
        .slice(0, limit);

        res.json({
            status: 'success',
            data: { activities }
        });
    } catch (error) {
        next(error);
    }
});

// Get revenue statistics (admin only)
router.get('/revenue', authorizeRole('admin'), async (req, res, next) => {
    try {
        const {
            startDate,
            endDate,
            groupBy = 'month' // 'day', 'month', 'year'
        } = req.query;

        const revenueStats = await Booking.getRevenueStats({
            startDate,
            endDate,
            groupBy
        });

        res.json({
            status: 'success',
            data: { revenue: revenueStats }
        });
    } catch (error) {
        next(error);
    }
});

// Get package performance statistics (admin/manager only)
router.get('/package-performance', authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const {
            startDate,
            endDate,
            limit = 10
        } = req.query;

        const packageStats = await Package.getPerformanceStats({
            startDate,
            endDate,
            limit: parseInt(limit)
        });

        res.json({
            status: 'success',
            data: { packages: packageStats }
        });
    } catch (error) {
        next(error);
    }
});

// Get customer statistics (admin only)
router.get('/customer-stats', authorizeRole('admin'), async (req, res, next) => {
    try {
        const {
            startDate,
            endDate
        } = req.query;

        const customerStats = await User.getCustomerStats({
            startDate,
            endDate
        });

        res.json({
            status: 'success',
            data: { customers: customerStats }
        });
    } catch (error) {
        next(error);
    }
});

// Get conversion statistics (admin/manager only)
router.get('/conversion-stats', authorizeRole('admin', 'manager'), async (req, res, next) => {
    try {
        const {
            startDate,
            endDate
        } = req.query;

        const [
            enquiryConversion,
            customTripConversion
        ] = await Promise.all([
            Enquiry.getConversionStats({ startDate, endDate }),
            CustomTrip.getConversionStats({ startDate, endDate })
        ]);

        res.json({
            status: 'success',
            data: {
                enquiries: enquiryConversion,
                customTrips: customTripConversion
            }
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router; 