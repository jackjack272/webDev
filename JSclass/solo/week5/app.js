let express= require("express")
let app= express()
let bodyParser= require("body-parser")
let port= 3000

app.set('view engine',"pug")
app.use(bodyParser.urlencoded({extended:true}))
app.get("/cards",(req, res)=>{
    res.render(__dirname+"/PUG/try.pug", {
        prompt:"worked",
        hint:"think about",
    })
})

app.get("/",(req, res)=>{
    res.send("worked")
})


app.listen(port, ()=>{
    console.log("server on port "+port)
})
