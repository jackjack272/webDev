let express=require("express")
let router=express.Router()

router.get("/a",(req,res)=>{
    res.send("helo 1")
    
})
router.get("/b",(req,res)=>{
    res.send("helo 2")
})
router.get("/c",(req,res)=>{
    res.send("helo3 ")
})

module.exports=router