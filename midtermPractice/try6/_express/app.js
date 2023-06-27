let express=require('express')
let app=express()
let port=3000

let bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine","PUG")
app.use(express.static("public"))


// do external routes
let xx= require('./routes')
app.use("/abc",xx)


app.get("/",(req,res)=>{
    res.render(__dirname+"/views/here.pug")
})

// need middle ware
app.use((res,req,next)=>{
    console.log("middleware hit")
    // console.log(req.body)
    // throw "something's wrong"
    next()
})

// do an example where url code is used to display something on page
app.get("/here/:code1",(req,res)=>{
    res.send("you have selected "+req.params.code1)
})

//end of middle ware. 
app.use((err,req,res,next)=>{
    // console.log("Catch Middle ware err msg: "+err.Message)
    next()
})

app.post("/",(req, res)=>{
    // console.log(req.body)
    res.render(__dirname +"/views/here.pug",
    {
        bmiStr:"he"
    })
})

// control for wierd URL
app.get("*",(req,res)=>{
    res.send("404 page not found")
})

app.listen(port, ()=>{
    console.log("server is up on "+port)
})