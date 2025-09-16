const fs = require("fs")
const http = require("http")
const url =  require("url")

const server = http.createServer((req, res)=>{
    const log = `${new Date().toISOString()}- ${req.method}- ${req.url}\n`
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ message: "Hello World" }))

    switch(url.parse(req.url).pathname){
        case "/":
            res.end("Home Page");
            break;
        case "/about":
            res.end("About Page");
            break;
        case "/contact":
            res.end('Contact Page');
            break;
        case "api/data":
            res.end("API Data Usage");
            break;
        default:
            res.end("404 Not Found");
    }
    fs.appendFile("server.log", log, (err)=>{
        if(err) console.log("Unable to append to server.log")
    })     
    fs.appendFile("data.txt", log,(err)=>{
        if(err) console.log("Unable to append to data.txt")
    })
});

server.on("error", (err)=>{
    console.log("Error occurred: ", err.message);
});

server.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
});
