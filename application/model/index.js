const instances = {};
const fs = require('fs');
const path = require('path');
const sequelize = require('sequelize');

const models = db => {
    fs.readdirSync(`${__dirname}/entity/`).forEach(file => {
        if (fs.lstatSync(path.join(`${__dirname}/entity/`, file)).isFile()) {
            const model = db.import(path.join(`${__dirname}/entity/`, file));
            instances[model.name] = model;
        } else {
            instances[file] = {};
            fs.readdirSync(`${__dirname}/entity/${file}`).forEach(child => {
                const model = db.import(path.join(`${__dirname}/entity/${file}`, child));
                instances[file][model.name] = model;
            });
        }
    });

    for (const modelName in instances) {
        const Model = instances[modelName];
        const sequelizeModel = sequelize.Model;

        if (Model instanceof sequelizeModel) {
            if (Model.hasOwnProperty('associate')) {
                Model.associate(instances);
            }
        } else {
            for (const childModelName in Model) {
                const ChildModel = instances[modelName][childModelName];
                if (ChildModel && ChildModel.hasOwnProperty('associate')) {
                    ChildModel.associate(instances);
                }
            }
        }
    }

    instances.Sequelize = sequelize;
    return instances;
};

module.exports = models;
