const jwt = require('jsonwebtoken');
const userRoles = require('../model/const/user/role');

/**
 * Middeware for check JWT from request headers
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        req.user = { role: userRoles.guest };
        return next();
    }

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            res.code(403);
            return res.json({
                message: 'Invalid token'
            });
        } else {
            req.user = user;
            return next();
        }
    });
};
