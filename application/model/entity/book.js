const Sequelize = require('sequelize');

/**
 * Define User Entity
 * @param {*} sequelize
 */
module.exports = sequelize => {
    const Book = sequelize.define(
        'Book',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'id'
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                field: 'name'
            },
            author: {
                type: Sequelize.STRING,
                allowNull: false,
                field: 'author'
            },
            libraryId: {
                type: Sequelize.INTEGER,
                field: 'library_id'
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
                field: 'created_at'
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: true,
                field: 'updated_at'
            }
        },
        {
            tableName: 'book',
            timestamps: false,
            classMethods: {
                associate: models => {
                    Book.belongsTo(models.Library, { foreignKey: 'library_id', as: 'library' });
                }
            }
        }
    );

    return Book;
};
