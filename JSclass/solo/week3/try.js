// spin up a server on port 5k
let port= 5000

express=require("express")
app = express()
bodyparser=require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))


app.get("/register", (req,res)=>{
// res.send("worek")
    res.sendFile(__dirname+ "/register.html")
    // req.sendFile(__dirname+"/register.html");
})

app.post("/",(req, res)=>{
    console.log(req.body);
    res.send("nice to meet you "+req.body.name+"<br> password:"+req.body.password)

})


app.listen(port, ()=>{
    console.log("server on port "+port)
})