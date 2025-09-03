const express = require('express');
const Router = express.Router();

// core module
const path = require('path');

// local module
const rootDir = require('../utils/rootDir');

Router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'greet.html'));
})

module.exports = Router;