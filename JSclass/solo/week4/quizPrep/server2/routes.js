let express= require("express")
let router=express.Router()

router.get("/",(req, res)=>{
    res.send("were online")
})
router.get("/user/:name", (req, res)=>{
    res.send(` Nice to meet you ${req.params.name}`)
})

router.get("/vegetables/:item", (req, res)=>{
    res.send(`${req.params.item} would go great in a soup`)
})

router.get("*",(req, res, next)=>{
    res.send("404 page not found")
})


module.exports=router;
