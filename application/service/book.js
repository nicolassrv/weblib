const { models } = require('../config/database');
const AbstractCrudService = require('./abstractCrudService');

class Book extends AbstractCrudService {
    constructor() {
        super(models.Book);
    }
}

module.exports = new Book();
