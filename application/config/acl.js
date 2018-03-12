const acl = require('express-acl');
const userRoles = require('../model/const/user/role');

const response = {
    status: 'Access Denied :(',
    message: 'You are not authorized to access this resource'
};

/**
 * Allow users with role "user" to access all routes
 * And allow guests to access login and [POST] /users
 */
const config = {
    baseUrl: '/',
    searchPath: 'user.role',
    rules: [
        {
            group: userRoles.guest,
            permissions: [
                {
                    resource: 'login',
                    methods: ['POST'],
                    action: 'allow'
                },
                {
                    resource: 'users',
                    methods: ['POST'],
                    action: 'allow'
                }
            ]
        },
        {
            group: userRoles.user,
            permissions: [
                {
                    resource: '*',
                    methods: ['POST', 'GET', 'PUT', 'DELETE'],
                    action: 'allow'
                }
            ]
        }
    ]
};

acl.config(config, response);

module.exports = acl;
