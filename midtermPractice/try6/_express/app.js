let  express= require('express')
let bodyParser= require('body-parser')
app.use(bodyParser.)
app=express()

app.get("/",(req,res)=>{
    res.send("here")
})



app.listen(3000,()=>{
    console.log("server on port 3k")
})