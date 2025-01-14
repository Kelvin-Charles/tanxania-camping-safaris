const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'];

    if (!token) {
        return res.status(403).send({
            status: 'error',
            message: 'No token provided!'
        });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send({
            status: 'error',
            message: 'Unauthorized!'
        });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).send({
            status: 'error',
            message: 'Require Admin Role!'
        });
    }
};

module.exports = {
    verifyToken,
    isAdmin
}; 