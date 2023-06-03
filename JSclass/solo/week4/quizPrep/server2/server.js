let express=require("express")
let body_parser= require("body-parser")

let app= express();
app.use(body_parser.urlencoded({extended:true}))


let formRoute= require("./formRoutes.js")
app.use("/form",formRoute)

let route=require("./routes.js")
app.use("/",route)


app.listen(3000, ()=>{
    console.log("the application is running on port 3000")
})