let express= require("express")
let bodyParser= require("body-parser")
let app= express()
let port= 3000

//this will make the "name" values be able to be pulled form the form 
app.use(bodyParser.urlencoded({extended:true}))

// this will like the css
app.use(express.static("public")) 

app.set("view engine","PUG")

let routes= require("./routes/routes.js")
app.use("/abc",routes)

app.get("/",(req,res)=>{
    // console.log(__dirname+"\\views\\something.pug")
    res.render(__dirname+"\\views\\something.pug")
})

app.get((req, res,next)=>{
    console.log("inside of middleware")
    
    // throw "err"
    next() // i will send to the next part of the execution 
    
})

app.post("/",(req,res)=>{
    console.log(req.body.age)
    res.render(__dirname+"\\views\\something.pug",{
        result:"i was passed"
    })
    
})

app.get((err, req, res, next)=>{
    console.log("this is the catch middleware")
    console.log("trigger "+err )
})


app.get("*",(req,res)=>{
    res.send("404 page not found")
})


app.listen(port, ()=>{
    console.log("app runnin on port "+port)
})




