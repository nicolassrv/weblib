const Joi = require('joi');

const create = {
    body: Joi.object({
        name: Joi.string().required(),
        author: Joi.string().required(),
        library_id: Joi.number()
            .integer()
            .required()
    }).required()
};

const update = {
    body: Joi.object({
        name: Joi.string(),
        author: Joi.string()
    }).required()
};

const remove = {
    params: Joi.object({
        id: Joi.number()
            .integer()
            .required()
    }).required()
};

const read = {
    params: Joi.object({
        id: Joi.number()
            .integer()
            .required()
    }).required()
};

module.exports = {
    read,
    create,
    update,
    remove
};
