let express=require('express')
let app= express()
let bodyParser= require('body-parser')
let port=3000;

app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine",'PUG')
app.use(express.static("public"))


app.post("/",(req,res)=>{
    let valid=false
    let age=0, weight=0, height=0, bmi=0

    try{
        age=parseFloat(req.body.age)
        weight=parseFloat(req.body.weight)
        height=parseFloat(req.body.height)

        if(age >0 && weight>0 && height >0){
            valid=true        
        }
    }catch(error){
    }

    if(valid){
        bmi=weight/Math.pow(height/100,2)
    }

    res.render(__dirname+"/bmi.pug",{
        strBMI:(bmi.toFixed(2)),
        strAge:age,
        strWeight:weight.toString(),
        strHeight:height.toString()
    })

})

app.get("/",(req, res)=>{
    res.render(__dirname+"/bmi.pug")
})

app.listen(port,()=>{
    console.log("server on port "+port)
})
