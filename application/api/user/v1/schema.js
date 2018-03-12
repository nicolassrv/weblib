const Joi = require('joi');

const read = {
    params: Joi.object({
        id: Joi.number()
            .integer()
            .required()
    }).required()
};

/**
 * Create request body definition
 */
const create = {
    body: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
        firstname: Joi.string(),
        lastname: Joi.string()
    })
        .options({ allowUnknown: true })
        .required()
};

/**
 * Update request body definition
 */
const update = {
    body: Joi.object({
        email: Joi.string(),
        password: Joi.string(),
        firstname: Joi.string(),
        lastname: Joi.string()
    })
        .options({ allowUnknown: true })
        .required()
};

/**
 * Remove request body definition
 */
const remove = {
    params: Joi.object({
        id: Joi.number()
            .integer()
            .required()
    }).required()
};

const login = {
    body: Joi.object({
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string().required()
    }).required()
};

module.exports = {
    read,
    create,
    update,
    remove,
    login
};
