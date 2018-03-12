const bcrypt = require('bcrypt');

class Password {
    constructor() {
        this.salt = 10;
    }

    /**
     * Crypt a password
     * @param {string} password 
     * @returns {string} hash
     */
    crypt(password) {
        return bcrypt.hashSync(password, this.salt);
    }

    /**
     * Compare a password with a hash
     * @param {string} password 
     * @param {string} hash 
     * @returns {bool}
     */
    check(password, hash) {
        return bcrypt.compareSync(password, hash)
    }

}

module.exports = new Password();