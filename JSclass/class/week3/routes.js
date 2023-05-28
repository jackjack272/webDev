var express=require("express");
var router= express.Router();

router.get("/route" , (req, res)=>{
    res.send("get route on things.")
})

router.get("/abc" , (req, res)=>{
    res.send("get route on things.")
})


router.get("/route/1" , (req, res)=>{
    res.send("get abd  on things.")
})


router.post("/route" , (req, res)=>{
    res.send("post route on things.")
})

