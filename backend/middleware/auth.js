const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authentication token is required' });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

const authorizeRole = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Authentication required' });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ 
                message: 'You do not have permission to perform this action' 
            });
        }

        next();
    };
};

const isResourceOwner = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    // Allow admins and managers to access any resource
    if (['admin', 'manager'].includes(req.user.role)) {
        return next();
    }

    // For customers, check if they own the resource
    const resourceUserId = req.params.userId || req.body.userId;
    
    if (resourceUserId && req.user.id !== parseInt(resourceUserId)) {
        return res.status(403).json({ 
            message: 'You do not have permission to access this resource' 
        });
    }

    next();
};

module.exports = {
    authenticateToken,
    authorizeRole,
    isResourceOwner
}; 