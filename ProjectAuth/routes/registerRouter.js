// external module
const express = require('express');
const registerRouter = express.Router();

// local module
const { registerGet } = require('../controllers/auth');

registerRouter.get('/register', registerGet);
registerRouter.post('/register', registerGet);

module.exports = {
    registerRouter
}