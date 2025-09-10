const express = require('express');
const addHomeRouter = express.Router();

addHomeRouter.get('/addhome', (req, res) => {
    res.render('AddHome', { pageTitle: "Add a New Home For Rent", currentPage: 'AddHome' });
})

const homes = [
    {
        title: 'Modern Family Home',
        price: 120,
        rating: 4.5,
        location: 'New York, USA',
        imageUrl: 'https://nhs-dynamic-secure.akamaized.net/images/homes/coventryhomes/27478040-180913.jpg?format=jpg&maxwidth=808'
    },
    {
        title: 'Luxury Villa',
        price: 350,
        rating: 4.9,
        location: 'Los Angeles, USA',
        imageUrl: 'https://www.wolfranchbyhillwood.com/wp-content/uploads/2021/10/Meet-the-Wolf-Ranch-Home-Builders-in-Georgetown-TX_2.jpg'
    },
    {
        title: 'City Apartment',
        price: 90,
        rating: 4.2,
        location: 'Chicago, USA',
        imageUrl: 'https://th.bing.com/th/id/R.29ebb2a18091cab98ecb6a5c41b7b729?rik=Sua88ydcTiL9gQ&riu=http%3a%2f%2fnhs-static.bdxcdn.com%2fImages%2fHomes%2fRendi15752%2f11673752.jpg%3fwidth%3d460%26height%3d307%26scale%3dupscalecanvas%26format%3djpg&ehk=47iz1mqnIUVQOyZ49mbofTodK3rCHbX12Mik9KqRhyo%3d&risl=&pid=ImgRaw&r=0'
    }
];
addHomeRouter.post('/addhome', (req, res) => {
    console.log(req.body);
    homes.push(req.body);
    res.render('success');
})


module.exports = {
    addHomeRouter,
    homes
}