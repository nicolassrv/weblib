const express = require('express');
const router = express.Router();

require('../api/user/v1')(router);
require('../api/books/v1')(router);
require('../api/library/v1')(router);

module.exports = router;
