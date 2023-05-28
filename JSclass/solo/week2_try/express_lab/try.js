
// spin up server on port 500 
let port=5000;

let express=require("express");
let app= express();

// app.get("/", (req,res)=>{
//     res.send("hello world")
// });

app.get("/register", (req, res)=>{
        let msg="";
        msg+="<h2>Hello User</h2>";
        msg+="<form action='/' method='POST'>";
            msg+='First Name: <input type="text"  name="fname" id="fname"></input><br>'
            msg+='Password: <input type="text" name="password"></input>'
        msg+="<input type='submit' value='Submit'>"
        msg+='</form>'
        res.send(msg);
});
app.post("/", (req,res)=>{
    console.log(req.body); // "undefined"
    res.send("worked   "+req.body);
})


app.listen(port, ()=>{
    console.log("worked on port "+port);
        // log to confirm it
})