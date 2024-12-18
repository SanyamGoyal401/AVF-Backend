const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/server');

const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send('Access Denied');
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        console.log(error);
        res.status(400).send('Invalid Token');
    }
}

module.exports = auth;