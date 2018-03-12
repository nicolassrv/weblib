const jwt = require('jsonwebtoken');
const schemas = require('./schema');
const validator = require('express-joi-validator');
const userService = require('../../../service/user');
const userExtractor = require('./apiExtractor/user');
const userHydrator = require('./entityHydrator/user');
const passwordService = require('../../../service/password');

/**
 * Create user endpoint
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const create = (req, res, next) => {
    const user = userHydrator(req.body);
    user.password = passwordService.crypt(user.password);

    return userService
        .create(user)
        .then(user => res.status(201).json(userExtractor(user)))
        .catch(err => next(err));
};

/**
 * Get user data
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const read = (req, res, next) => {
    return userService
        .findOneById(req.params.id)
        .then(user => {
            if (!user) {
                res.status(404);
                next(new Error(`User "${req.params.id}" not found`));
            }

            res.json(userExtractor(user));
        })
        .catch(err => next(err));
};

/**
 * Update a User
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const update = (req, res, next) => {
    return userService
        .findOneById(req.params.id)
        .then(user => {
            if (!user) {
                res.status(404);
                next(new Error(`User "${req.params.id}" not found`));
            }

            return userService.update(user, userHydrator(req.body));
        })
        .then(user => res.json(userExtractor(user)))
        .catch(err => next(err));
};

/**
 * Delete a User
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const remove = (req, res, next) => {
    return userService
        .findOneById(req.params.id)
        .then(user => {
            if (!user) {
                res.status(404);
                next(new Error(`User "${req.params.id}" not found`));
            }

            return userService.delete(user);
        })
        .then(() => res.status(200).json({ success: true }))
        .catch(err => next(err));
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const login = (req, res, next) => {
    return userService
        .findOneByEmail(req.body.email)
        .then(user => {
            if (!user || !passwordService.check(req.body.password, user.password)) {
                return res.status(401).json({
                    message: 'Authentication failed.'
                });
            }

            const token = jwt.sign(user.get(), process.env.SECRET);
            return res.json({ token });
        })
        .catch(err => next(err));
};

/**
 * User route definition
 * @param {Express Router} router
 */
const createRoute = router => {
    router.get('/users/:id', validator(schemas.read), read);
    router.post('/users', validator(schemas.create), create);
    router.put('/users/:id', validator(schemas.update), update);
    router.delete('/users/:id', validator(schemas.remove), remove);

    router.post('/login', validator(schemas.login), login);
};

module.exports = createRoute;
