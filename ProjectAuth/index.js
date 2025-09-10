// external module
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded());

// local module
const { loginRouter } = require('./routes/loginRouter');
const { registerRouter } = require('./routes/registerRouter');

// set view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use("/auth", loginRouter)
app.use("/auth", registerRouter)

// handle if enter invalid path
app.use('/', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log("app listen at http://localhost:3000");
})