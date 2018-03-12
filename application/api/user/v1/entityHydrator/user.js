const userRoles = require('../../../../model/const/user/role');

/**
 * Hydrate a user entity
 * @param {object} userData
 */
module.exports = userData => ({
    email: userData.email,
    password: userData.password,
    firstname: userData.firstname,
    lastname: userData.lastname,
    role: userRoles.user
});
