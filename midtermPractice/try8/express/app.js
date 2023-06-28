let express= require("express")
let bodyParser= require("body-parser")
let app= express()
let port=3000


app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public'))
app.set("view engine","PUG")


let routes= require('./routes/routers.js')
app.use("/a",routes)

app.get("/",(req,res)=>{
    res.render(__dirname +"\\page.pug")
})

app.use((req,res, next)=>{
    console.log(req.body)
    console.log("middle ware hit")
    next()
    // throw "err"
})



app.get("/abc",(req,res)=>{
    res.send("here")
})

app.post("/",(req,res)=>{
    let age=req.body.age
    res.render(__dirname+"\\page.pug",
    {
        age:"sent from the server age: "+age
    }
    )
})

app.use((err,req,res, next)=>{
    res.send("page not found due to "+err)
        
})

app.get("*",(req,res)=>{
    res.send("404 page not found")
})

app.listen(port, ()=>{
    console.log("app is on port "+port)
})