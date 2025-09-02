const express = require('express');
const app = express();
const PORT = 3000;

// middleware tha log path 
app.use((req, res, next) => {
    console.log("path : ", req.url);
    next();
});

// middleware tha log method 
app.use((req, res, next) => {
    console.log("method : ", req.method);
    next();
});

// // middleware
// app.use((req, res, next) => {
//     res.send("It is third middleware")
// });

// handle / path
app.get("/", (req, res, next) => {
    console.log("handle / path");
    res.send("Welcom in the express app")
})

// handle /contact-as path
app.get("/contact-us", (req, res, next) => {
    console.log("handle /contact-us path");
    res.send(`
        <form action="/contact-us" method="POST" >
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="submit"/>
        <form/>`)
})

// handle /contact-as post
app.post("/contact-us", (req, res, next) => {
    console.log("handle /contact-us path");
    res.send(`Recieve your data`)
    console.log(req.body);
})

app.listen(PORT, () => {
    console.log(`app listen at port http://localhost:${PORT}`);
});

