/**
 * Hydrate a Library entity with request data
 * @param {object} libraryData
 */
module.exports = libraryData => ({
    name: libraryData.name,
    address: libraryData.address,
    city: libraryData.city,
    zipcode: libraryData.city,
    country: libraryData.country
});
