// external ,odule
const express = require('express');
const loginRouter = express.Router();

// local module
const { loginGet } = require('../controllers/auth');

loginRouter.get('/login', loginGet)

module.exports = {
    loginRouter
}