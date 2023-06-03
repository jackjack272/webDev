let x= require("express")
let bodyParser= require("body-parser")
let app=x()
app.use(bodyParser.urlencoded({extended:true}))
let router= x.Router()

router.get("/here",(req,res )=>{
    res.sendFile(__dirname+"/form/formzz.html")
})

router.post("/filledForm",(req,res)=>{
    res.send(`Nice too meet you ${req.body.Name} ${req.body.lastName}`)

})


module.exports=router