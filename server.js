let http = require("http");

let start = ()=>{
    let onRequest = (request,response)=>{
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('Hello World\n');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
}
console.log("Server has started");
exports.start = start;