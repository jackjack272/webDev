let express= require("express")
let app= express()
let bodyParser= require("body-parser")
let port= 3000

app.set('view engine',"pug")
app.use(bodyParser.urlencoded({extended:true}))

app.get("/cards",(req, res)=>{
    res.render(__dirname+"/PUG/blanks.pug", {
        prompt:"worked",
        hint:"think about",
    })
})

app.get("/loops", (req, res)=>{
    let _users=["smith", "jhones", "bill" ,"tyler"]

    res.render(__dirname+"/PUG/loops", {
        getHeader: "This is a list of the users we're supposed to contact",
        users:_users, 
    })
})

app.get("/form",(req, res)=>{
    res.render(__dirname+"/PUG/form",{
        getTitle:"Try form page"
    })
})
app.post("/pugForm", (req, res)=>{
    res.render(__dirname+"/PUG/form2",{
        greetMe:"hello "+req.body.username,
        getPerson:req.body.username
    })
})

app.get("/",(req, res)=>{
    res.send("worked")
})




app.listen(port, ()=>{
    console.log("server on port "+port)
})
