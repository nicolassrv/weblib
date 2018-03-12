const Sequelize = require('sequelize');

/**
 * Define User Entity
 * @param {*} sequelize
 */
module.exports = sequelize => {
    const User = sequelize.define(
        'User',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'id'
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                field: 'email'
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                field: 'password'
            },
            firstname: {
                type: Sequelize.STRING,
                allowNull: true,
                field: 'firstname'
            },
            lastname: {
                type: Sequelize.STRING,
                allowNull: true,
                field: 'lastname'
            },
            role: {
                type: Sequelize.STRING,
                allowNull: false,
                field: 'role'
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
            tableName: 'user',
            timestamps: false
        }
    );

    return User;
};
