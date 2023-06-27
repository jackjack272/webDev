let express= require('express')
let app= express()
let port=3000

app.use(express.static("public"))


app.get("/",(req,res)=>{
    res.render(__dirname+"\\something.pug")
})




app.listen(port, ()=>{
    console.log("server on port "+port)
})