const express = require('express');
const homeRouter = express.Router();

// local module
const { homes } = require('./addHomeRouter')

homeRouter.get('/', (req, res) => {
    res.render('Home', { homes, currentPage: 'Home' });
})

module.exports = {
    homeRouter
}