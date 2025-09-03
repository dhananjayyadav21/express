const express = require('express');
const homeRouter = express.Router();

// local module
const { homes } = require('./addHomeRouter')
console.log("55", homes)
homeRouter.get('/', (req, res) => {
    res.render('Home', { homes, currentPage: 'Home' });
})

module.exports = {
    homeRouter
}