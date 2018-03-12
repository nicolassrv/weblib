/**
 * Hydrate a book Entity with request data
 * @param {object} bookData
 */
module.exports = bookData => ({
    name: bookData.name,
    author: bookData.author,
    library_id: bookData.library_id
});
