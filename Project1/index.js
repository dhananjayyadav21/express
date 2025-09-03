const express = require('express');
const PORT = 3000;
const app = express();

//local module
const { homeRouter } = require('./routes/homeRouter')
const { addHomeRouter } = require('./routes/addHomeRouter')

// set view engine and static folder
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded());
app.use(express.static('public'));

app.use('/', homeRouter);
app.use('/', addHomeRouter);

// handle 404 page
app.use('/', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`Server listen at http://localhost:${PORT}`);
})

