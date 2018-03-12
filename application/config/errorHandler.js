/**
 * Middleware for manage API errors
 * @param {Error rejected} err
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 * @returns A formated error response
 */
module.exports = (err, req, res, next) => {
    console.log(err);
    return res.json({
        type: err.name,
        title: err.message,
        details: err.details || null
    });
};
