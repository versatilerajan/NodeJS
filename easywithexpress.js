const http = require("http");
const express = require("express");
const app = express();
const fs = require('fs');

app.get('/', (req, res)=>{
    return res.send("Home Page");
});

app.get("/about", (req, res)=>{
    return res.send("About Page");

});

const server = http.createServer(app);

server.listen(3000, ()=>{
    const host = "http://localhost";
    const port = 3000;
    console.log(` Server is running at ${host}:${port}`);
    console.log(` About page start at ${host}:${port}/about`);
    console.log(` Home page start at ${host}:${port}/`);
})

