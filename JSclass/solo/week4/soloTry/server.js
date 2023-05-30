let express= require("express")
let bodyParser= requre("body-parser")
let app= express()
    app.use(bodyParser.urlencoded({extended:true}))
let port=3000



app.get("/", (request,response)=>{
    response.sendFile(__dirname+"/webpages/defaultpage/home.html");
})
app.get("/getForm", ()=>{

})


app.listen(port, ()=>{console.log(`server running on port ${port}`)})