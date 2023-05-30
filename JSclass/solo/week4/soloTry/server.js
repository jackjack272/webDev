let express= require("express")
let bodyParser= require("body-parser")
let app= express()
app.use(bodyParser.urlencoded({extended:true}))
let port=3000



app.get("/", (request,response)=>{
    response.sendFile(__dirname+"/webpages/defaultpage/home.html");
})
app.get("/getMethod", (request, response)=>{
    response.send(`your frist name is ${request.body.first_name}`)
})

app.get("/postMethod",(request, response)=>{
    response.send(`your frist name is ${request.body.first_name}`)  
})


app.listen(port, ()=>{console.log(`server running on port ${port}`)})