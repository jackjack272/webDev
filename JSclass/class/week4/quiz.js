let express= require("express")
let bodyParser= require("body-parser")
let app = express()
app.use(bodyParser.urlencoded({extended:true}))

let port=3000

const user=[]
console.log(user)
app.get("/", (req, res)=>{
    res.send( 
    "<h2>Hellow User</h2>"+
    "<form method='post' action='/'>" +
        "<input type='text' name='name'>"+
        "<input type='submit' value='submit'>"+
    "</form>"
    )
})

// create Post route - gets the naem in teh textbox and 
    // adds the name of the user below. 
app.post("/",(req, res)=>{
    user.push(req.body.name)
    // res.redirect("/")

    let msg=""
    for(let i=0; i < user.length; i++){
        msg+=`user ${i+1}: ${user[i]} <br>`
    }
    
    res.send(
            "<h2>Hellow User</h2>"+
    "<form method='post' action='/'>" +
        "<input type='text' name='name'>"+
        "<input type='submit' value='submit'>"+
    "</form>"+
    msg
    )

})

app.get("*",(req, res)=>{
    res.sendFile(__dirname+ "/404page.html")
})


app.listen(port, ()=>{
    console.log(`server on port ${port}`)
})

