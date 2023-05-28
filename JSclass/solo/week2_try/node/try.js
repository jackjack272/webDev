const port=3000


//routing in express 
express= require("express")
app= express();
app.get("/", (req,res) => {
    res.send("hello, uni");
});
app.get("/items/:something", (res,req)=>{
    let veg= req.params.something;
    res.send("this is a page for item: "+veg);
});
app.listen(port, ()=>{
    console.log("server running on port "+port);
})


//setting up an express server 
express=require("express")
app=express();
app.get("/",(req,res)=>{
    res.send("hello, uni");
});
app.listen(port, ()=>{
    console.log("Server started in port 3k")
});


// //routing based on extension 
// const routeResponceMap={
//     "/info": "<h1>info page</h1>",
//     "/contact": "<h1>contatct</h1>",
//     "/about": "<h1>Learn more about us</h1>",
//     "/hello": "<h1>Say hellow by email to us here</h1>",
//     "/error": "<h1>sorry the page you are looking for is not here </h1>",
// };
// http=requre("http")
// httpStatus=require("http-status-code")
// app=http.createServer( (req,res)=>{
//     res.writeHead(200, {
//         "content-Type": "text/html"
//     });
//     if (routeResponceMap[req.url]){
//         res.end(routeResponceMap[req.url])
//     }else {
//         res.end("<h1>Welcome</h1>")
//     }
// });


//     // handeling incomng request. 
// port=3000
// http=requre("http")
// httpStatus=require("http-status-codes")
// app=http.createServer()
// app.on(
//     "request", (req,res) =>{
//         res.writeHead(httpStatus.OK ,{
//             "Content-Type": "text/html",
//         });
//         let responceMessage="<h1>this will show on the screen </h1>";
//         res.end(responceMessage);
//     }
// );

// // app.listen(port, ()=>{
// //     console.log("the server has started listening on port "+port)
// // })
    

//     // spinning up a simple server 
// let http=require("http");
// let app= http.createServer( (req, res) =>{
//     res.write("<html><h1> hello whats good</h1></html>")
//     res.end();
// });

// // app.listen(3000, (err)=>{
// //     console.log("on port 3k")
// // })


// // using the cities library
// let cities= require("cities")
// let myCity=cities.zip_lookup("10016")
// // console.log(myCity)