const { models } = require('../config/database');
const AbstractCrudService = require('./abstractCrudService');

class Library extends AbstractCrudService {
    constructor() {
        super(models.Library);
    }
}

module.exports = new Library();
