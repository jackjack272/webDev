let server_port= 3000
let express=require("express")
let app= express()

let bodyParser= require("body-parser")
const { route } = require("./routes.js")
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/templates/homePage.html")
})

app.post("/postForm",(req, res )=>{
    res.send(`<h1> Nice to meet you ${req.body.fname}</h1>
        <p> and the password is ${req.body.lname}</p>
    `)
})
// server and a post form 


// handles routing
routes= require("./routes.js")
app.use("/", routes)
    // this is the base 
    // by "/abc" this is the prefix that is going to be the prefix 
        // "/abc/:whatever"

// controlling routing with external file. 



// 404 page not found
app.use(( req, res, next) => {
    // res.status(500).send('Something broke!')
    console.log("middle ware 1 hit ")
    next()
})

app.use((req,res,next)=>{
    console.log("middleware 2 hit")
    next()
})

app.get("*",(req, res)=>{
    res.send("404 page not found")
})


app.listen(server_port, ()=>{
    console.log(`the server is running on port: ${server_port}`)
})
