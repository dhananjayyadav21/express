const express = require('express');
const Router = express.Router();

// core module 
const path = require('path');

//local module 
const rootDir = require('../utils/rootDir');

Router.get('/contact-us', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
})

Router.post('/contact-us', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

module.exports = Router;