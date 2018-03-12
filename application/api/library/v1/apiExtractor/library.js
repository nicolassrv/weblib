/**
 * Extract entity data for API response
 * @param {Library Entity} library
 */
module.exports = library => ({
    id: library.id,
    name: library.name,
    address: library.address,
    city: library.city,
    zipcode: library.city,
    country: library.country,
    created_at: library.createdAt,
    updated_at: library.updatedAt
});
