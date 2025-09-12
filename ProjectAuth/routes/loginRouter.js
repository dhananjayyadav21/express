// external ,odule
const express = require('express');
const loginRouter = express.Router();

// local module
const { loginGet, loginPost } = require('../controllers/auth');

loginRouter.get('/login', loginGet);
loginRouter.post('/login', loginPost);

module.exports = {
    loginRouter
}