const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const parkRoutes = require('./routes/parks');
const packageRoutes = require('./routes/packages');
const bookingRoutes = require('./routes/bookings');
const enquiryRoutes = require('./routes/enquiries');
const customTripRoutes = require('./routes/customTrips');
const testimonialRoutes = require('./routes/testimonials');
const settingRoutes = require('./routes/settings');
const dashboardRoutes = require('./routes/dashboard');

// Import middleware
const { authenticateToken } = require('./middleware/auth');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', authenticateToken, userRoutes);
app.use('/api/parks', parkRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', authenticateToken, bookingRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/custom-trips', authenticateToken, customTripRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/settings', authenticateToken, settingRoutes);
app.use('/api/dashboard', authenticateToken, dashboardRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Error handling
app.use(errorHandler);

// Handle 404
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

// Database initialization
const initDb = require('./config/initDb');

async function startServer() {
    try {
        // Initialize database
        await initDb();
        
        // Start server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();
