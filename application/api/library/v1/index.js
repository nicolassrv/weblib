const libraryService = require('../../../service/library');
const libraryExtractor = require('./apiExtractor/library');
const libraryHydrator = require('./entityHydrator/library');

/**
 * Get a Library
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const read = (req, res, next) => {
    return libraryService
        .findOneById(req.params.id)
        .then(library => {
            if (!library) {
                res.status(404);
                next(new Error(`Library "${req.params.id}" not found`));
            }

            res.json(libraryExtractor(library));
        })
        .catch(err => next(err));
};

/**
 * Get all libraries
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const list = (req, res, next) => {
    return libraryService
        .getAll()
        .then(libraries => res.json(libraries.map(libraryExtractor)))
        .catch(err => next(err));
};

/**
 * Delete a Library
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const remove = (req, res, next) => {
    return libraryService
        .findOneById(req.params.id)
        .then(library => {
            if (!library) {
                res.status(404);
                return next(new Error(`Library "${req.params.id}" not found`));
            }

            return libraryService.delete(library.get());
        })
        .then(() => res.status(200).json({ success: true }))
        .catch(err => next(err));
};

/**
 * Create a new Library
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const create = (req, res, next) => {
    return libraryService
        .create(libraryHydrator(req.body))
        .then(book => res.status(201).json(libraryExtractor(book)))
        .catch(err => next(err));
};

/**
 * Update a Library
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const update = (req, res, next) => {
    return libraryService
        .findOneById(req.params.id)
        .then(library => {
            if (!library) {
                res.status(404);
                return next(new Error(`Library "${req.params.id}" not found`));
            }

            return libraryService.update(library.get().id, libraryHydrator(req.body));
        })
        .then(library => res.json(libraryExtractor(library)))
        .catch(err => next(err));
};

/**
 * Library route definition
 * @param {Express Router} router
 */
const createRoute = router => {
    router.get('/libraries', list);
    router.get('/libraries/:id', read);
    router.post('/libraries', create);
    router.put('/libraries/:id', update);
    router.delete('/libraries/:id', remove);
};

module.exports = createRoute;
