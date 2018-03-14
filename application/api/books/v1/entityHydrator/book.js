/**
 * Hydrate a book Entity with request data
 * @param {object} bookData
 */
module.exports = bookData => ({
    name: bookData.name,
    author: bookData.author,
    libraryId: bookData.library_id
});
