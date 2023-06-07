let express=require('express')
let app= express()
let bodyParser= require('body-parser')
let port=3000;

app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine",'PUG')
app.use(express.static("public"))

app.get("/",(req, res)=>{
    // check that this worked
    console.log(req.params.age)    


    res.render(__dirname+"/bmi.pug",{})

})

app.listen(port,()=>{
    console.log("server on port "+port)
})
