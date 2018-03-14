/**
 * Extract book data for API response
 * @param {Book Entity} book
 */
module.exports = book => ({
    id: book.id,
    name: book.name,
    author: book.author,
    library_id: book.library_id,
    created_at: book.createdAt,
    updated_at: book.updatedAt
});
