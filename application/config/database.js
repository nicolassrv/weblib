const Sequelize = require('sequelize');

/**
 * Initialize a Database connection with process env parameters
 */
const database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    timezone: process.env.TZ,
    logging: false,
    dialect: 'mysql'
});

const models = require('../model')(database);

module.exports = {
    database,
    models
};
