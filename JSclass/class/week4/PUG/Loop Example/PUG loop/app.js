const express = require('express');

const app = express();

const colors =[
    'red','yellow','blue','green','orange'
]

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', { prompt: "List of Colors", colors });
});


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});