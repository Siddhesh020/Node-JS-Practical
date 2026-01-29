const http = require('http');

const server = http.createServer((req, resp) => {
    if(req.url === "/"){
        resp.end("Welcome to the Home Page");
    }
    else if(req.url == "/about"){
        resp.end("Welcome to the About Page");
    }
    else if(req.url === "/contact"){
        resp.end("Welcome to the Contact Page");
    }
    else if(req.url === "/data"){
        resp.end("Welcome to the Data Page");
    }
    else{
        resp.end("Error...");
    }
})

server.listen(3000, () => {
    console.log("running");
})
