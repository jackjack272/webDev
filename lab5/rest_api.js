const express = require('express');
const app = express();
const url = require("url");

const records = require('./records');

app.use(express.json());

// Send a GET request to /quotes to READ a list of quotes
app.get('/quotes', async (req, res)=>{
    
    url_parts= url.parse(req.url, true);
    query= url_parts.query;

    console.log(query);
    
    const quotes = await records.getQuotes();
    res.json(quotes);
});

app.listen(3000,()=>{console.log("port: 3000")})