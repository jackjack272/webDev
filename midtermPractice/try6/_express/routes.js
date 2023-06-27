const express = require('express')
const router = express.Router()


router.get("/sunshine",(res,req)=>{
    res.send("routes successfully implemented")
})

router.get("/here",(res,req)=>{
    res.send("routes successfully implemented")
})


module.exports = router