// external module
const express = require('express');
const registerRouter = express.Router();

// local module
const { registerGet } = require('../controllers/auth');


const { registerPost } = require('../controllers/auth');
registerRouter.get('/register', registerGet);
registerRouter.post('/register', registerPost);

module.exports = {
    registerRouter
}