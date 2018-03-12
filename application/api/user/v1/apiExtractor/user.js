/**
 * Extract a part of user data for API response
 * @param {*} user
 */
module.exports = user => ({
    id: user.id,
    role: user.role,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
    created_at: user.createdAt,
    updated_at: user.updatedAt
});
