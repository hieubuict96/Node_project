var http = require("http")

http.createServer(function (req,  res) {
    res.writeHead(200, {"Content-Type": "text-plain"})
    res.end("Hello Web  from Nodejs")
}).listen(1335, "127.0.2.1")