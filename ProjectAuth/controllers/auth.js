const { addUser, findUserByEmail } = require('../models/User');

loginGet = (req, res) => {
    res.render("login");
}

loginPost = (req, res) => {
    const { email, password } = req.body;
    const user = findUserByEmail(email);
    if (!user || user.password !== password) {
        return res.render('login', { error: 'Invalid email or password!' });
    }
    // On success, redirect
    res.render('home');
}

registerGet = (req, res) => {
    res.render("register");
}

registerPost = (req, res) => {
    // Save user to fake DB
    const { email } = req.body;
    if (findUserByEmail(email)) {
        return res.render('register', { error: 'Email is already registered!' });
    }
    addUser(req.body);
    // On success, render registerSuccess page
    res.render('registerSuccess');
}

module.exports = {
    loginGet,
    loginPost,
    registerGet,
    registerPost
}