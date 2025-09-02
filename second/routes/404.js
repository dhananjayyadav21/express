const express = require('express');
const Router = express.Router();

// core module
const path = require('path');

// local module
const rootDir = require('../utils/rootDir');

Router.use('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'view', '404.html'));
})

module.exports = Router;