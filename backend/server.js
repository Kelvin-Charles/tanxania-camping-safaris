require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Import routes
const authRoutes = require('./routes/auth.routes');
const parksRoutes = require('./routes/parks.routes');
const toursRoutes = require('./routes/tours.routes');
const enquiriesRoutes = require('./routes/enquiries.routes');
const customTripsRoutes = require('./routes/custom-trips.routes');
const testimonialsRoutes = require('./routes/testimonials.routes');
const galleryRoutes = require('./routes/gallery.routes');
const settingsRoutes = require('./routes/settings.routes');
const uploadRoutes = require('./routes/upload.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
app.use(`/${process.env.UPLOAD_PATH}`, express.static(path.join(__dirname, process.env.UPLOAD_PATH)));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/parks', parksRoutes);
app.use('/api/tours', toursRoutes);
app.use('/api/enquiries', enquiriesRoutes);
app.use('/api/custom-trips', customTripsRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/upload', uploadRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});
