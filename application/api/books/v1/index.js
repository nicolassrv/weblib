const schemas = require('./schema');
const validator = require('express-joi-validator');
const bookService = require('../../../service/book');
const bookExtractor = require('./apiExtractor/book');
const bookHydrator = require('./entityHydrator/book');

/**
 * Get a book
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const read = (req, res, next) => {
    return bookService
        .findOneById(req.params.id)
        .then(book => {
            if (!book) {
                res.status(404);
                next(new Error(`Book "${req.params.id}" not found`));
            }

            res.json(bookExtractor(book));
        })
        .catch(err => next(err));
};

/**
 * Get all books
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const list = (req, res, next) => {
    return bookService
        .getAll()
        .then(books => res.json(books.map(bookExtractor)))
        .catch(err => next(err));
};

/**
 * Delete a Book
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const remove = (req, res, next) => {
    return bookService
        .findOneById(req.params.id)
        .then(book => {
            if (!book) {
                res.status(404);
                return next(new Error(`Book "${req.params.id}" not found`));
            }

            return bookService.delete(book.get());
        })
        .then(() => res.status(200).json({ success: true }))
        .catch(err => next(err));
};

/**
 * Create a new Book
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const create = (req, res, next) => {
    return bookService
        .create(bookHydrator(req.body))
        .then(book => res.status(201).json(bookExtractor(book)))
        .catch(err => next(err));
};

/**
 * Update a Book
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const update = (req, res, next) => {
    return bookService
        .findOneById(req.params.id)
        .then(book => {
            if (!book) {
                res.status(404);
                next(new Error(`Book "${req.params.id}" not found`));
            }

            return bookService.update(book.get().id, bookHydrator(req.body));
        })
        .then(book => res.json(bookExtractor(book)))
        .catch(err => next(err));
};

/**
 * Book route definition
 * @param {Express Router} router
 */
const createRoute = router => {
    router.get('/books', list);
    router.get('/books/:id', validator(schemas.read), read);
    router.post('/books', validator(schemas.create), create);
    router.put('/books/:id', validator(schemas.update), update);
    router.delete('/books/:id', validator(schemas.remove), remove);
};

module.exports = createRoute;
