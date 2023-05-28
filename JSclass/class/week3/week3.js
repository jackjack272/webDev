
express= require("express");
let port= 3000
let app= express();

app.get("/p1",(req,res)=>{
    res.send("response is creates");
});
app.get("/about",(req,res)=>{
    res.send("about page is created");
});
app.get("/menue/:vegetables", (req, res)=>{ // the name has to match
    let veg= req.params.vegetables;
    res.send("this page for menu  "+ veg)
})
app.get("/contact/:name", (req, res)=>{ // the name has to match
    let veg= req.params.name;
    res.json(req.params);
    // send just send text, res.sendFile() - used to send a HTML file. 
})


//simple calculator 
    //want to make a git request

bodyparser= require("body-parser") // comes with JS, if dosent come then NPM body-parser 
app.use(bodyparser.urlencoded({extended:true}))
    // use is middleware 

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
    // need to specify the root otherwise it will break
})

app.post("/",(req,res)=>{
  
    console.log(req.body.num1);
        // these are strin need to Float 
    nu1=req.body.num1;
    nu2=req.body['num2'];
        // this is a HTTP msg, js dosent just respond. 
        // need body parser. 
    nu2=Number(nu2)
    nu1=parseFloat(nu1)

    res.send(`worked: sum is ${nu1+nu2}`)

})

// Routes
// routes = require("./routes.js")
// app.use("/routes",routes);
//     // the prefix needs to be /route/abc 


//middle ware 
app.use((req,res,next)=>{
    console.log("First");
    req.newMessage= "this is a new mesage"; // this is added to req. 
        // allows me to add/ modify/ remove things from the request.
    next(); // if i mute this, the next middle ware will not be called, and wont go to the get()

}) 
// even with post these methods are called. 
    // going to the next middle ware. 


app.use((req,res,next)=>{
    // console.log("second " );
    // err= new Error("There is an error");
    // console.log("second also contrains "+req.newMessage );

    next();
    // next(err); // i can pass it to the next middle ware
        // but it stops at the first middle ware with 4 params .
        // this is an error mddle ware. 
})

app.get("/",(req,res)=>{
    res.send("middle ware app run");
})

app.get("/contact", (req, res)=>{
    res.send('constact list')
})


app.get("/:anything", (req, res)=>{ // creative solution 
    res.send('404')
})


// put the 404 at the end of the document. 

app.use((req,res,next)=>{
    err= new Error("not found");
    err.status= 404;
    next();
})

app.use((err,rq,res,next)=>{
    console.log("we are here waiting")
    res.send("This is an end route not found ,404 page not found error. ")

}) // the error stops here.


app.listen(port, ()=>{
    console.log("the app is runnning: "+port);
})
