// Import modules
const http = require("http");
const fs = require("fs");

// console.log(http);
// console.log(fs);

const server = http.createServer((req, res) =>{
    switch(req.url){
    case "/":
        res.end("Hey user welcome to my server , thank you");
    break;
     case "/contact":
        res.end("hy user welcome to my contact page");
    break;
     case  "/bye":
        res.end("good bye");
    break;
     case "/about":
        res.end("My about is not found");
    break;
    case "/details":
        res.end("hey user this server is no details");
    break;
    case "/logo":
        res.end("logo is not found");
    break;
    default:
        res.end("404 page not found");
        break;
    }

});

//Start server
const port = 2147
server.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
}) ;