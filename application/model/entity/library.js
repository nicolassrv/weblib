const Sequelize = require('sequelize');

/**
 * Define Library Entity
 * @param {*} sequelize
 */
module.exports = sequelize => {
    const Library = sequelize.define(
        'Library',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'id'
            },
            name: {
                type: Sequelize.STRING,
                allowNull: true,
                field: 'name'
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true,
                field: 'address'
            },
            city: {
                type: Sequelize.STRING,
                allowNull: true,
                field: 'city'
            },
            zipcode: {
                type: Sequelize.STRING,
                allowNull: true,
                field: 'zipcode'
            },
            country: {
                type: Sequelize.STRING,
                allowNull: true,
                field: 'country'
            },
            createdAt: {
                type: Sequelize.DATE,
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
            tableName: 'library',
            timestamps: false,
            classMethods: {
                associate: models => {
                    Library.hasMany(models.Books, { foreignKey: 'library_id', as: 'books' });
                }
            }
        }
    );

    return Library;
};
