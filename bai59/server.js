var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    
    var obj = {
        firstName: "Minh",
        lastName: "Anh"
    }

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("url success")
    } else if (req.url === "/index.html") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Truy cap index.html")
    } else {
        res.writeHead(404)
        res.end("Not Found")
    }
}).listen(1335, "127.0.0.1", function () {
    console.log("Thiet bi duoc nghe tai port: 1335");
});
