const { models } = require('../config/database');
const AbstractCrudService = require('./abstractCrudService');

class User extends AbstractCrudService {
    constructor() {
        super(models.User);
    }

    /**
     * @param {string} email
     * @returns User entity
     */
    findOneByEmail(email) {
        return this.userModel.findOne({
            where: {
                email
            }
        });
    }
}

module.exports = new User();
