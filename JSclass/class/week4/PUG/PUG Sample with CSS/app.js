const express = require('express');
const bodyParser = require('body-parser');

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
];

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

// code here for adding static assets
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/sample', (res, req)=>{
  // res.locals.myTitle= "my Title in response "
    // i can carry the vlaue thought the locals value 
  
  res.render("sample" ,
  {
    myTitle:"myTitle injected",
    myText: "this is the special text taht was injected",
  }

  )

})

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is." });
});

app.get('/cardcolors', (req, res) => {
  res.render('cardcolors', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is.", colors: colors });
});

app.get('/hello', (req, res) => {
  res.render('hello');
});

app.post('/hello', (req, res) => {
  res.render('hello', { name: req.body.username , colors: colors });
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});