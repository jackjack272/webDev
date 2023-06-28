let express= require('express')
let router=express.Router()


router.get("/",(req,res)=>{
    res.send("inside the route")
})

router.get("/:here",(req,res)=>{
    res.send("you have selected : "+ req.params.here+" in the browser")
})


module.exports =router