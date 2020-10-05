var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    var obj = {
        firstName: "Minh",
        lastName: "Anh"
    }
 
    res.end(JSON.stringify(obj));
}).listen(1335, "127.0.2.1");
