loginGet = (req, res) => {
    res.render("login");
}

registerGet = (req, res) => {
    res.render("register");
}
registerPost = (req, res) => {
    console.log(req.body);
    res.send(req.body);
}

module.exports = {
    loginGet,
    registerGet
}