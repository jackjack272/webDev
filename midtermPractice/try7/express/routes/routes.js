let express= require('express')
let router=express.Router()

router.get("/",(req,res)=>{
    res.send("inside of routes")
})



module.exports= router

