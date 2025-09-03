const express = require('express');
const app = express();
const PORT = 3002;

//core module 
const path = require('path');

// local module
const greetRouter = require('./routes/greetRouter')
const contactRouter = require('./routes/contactUsRouter');
const NotFoundRouter = require('./routes/404');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

// Use routers
app.use(greetRouter);
app.use(contactRouter);

// Handle 404 page
app.use(NotFoundRouter);

app.listen(PORT, () => {
    console.log(`app listen at http://localhost:${PORT}`);
})
