require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const jwt = require('./application/config/jwt');
const acl = require('./application/config/acl');
const routes = require('./application/config/route');
const errorHandler = require('./application/config/errorHandler');

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');
    
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(jwt);
app.use(acl.authorize);
app.use(routes);
app.use(errorHandler);

app.listen(process.env.SERVER_PORT, () => {
    console.log('App listening at http://%s:%s', process.env.SERVER_ADDR, process.env.SERVER_PORT);
});
