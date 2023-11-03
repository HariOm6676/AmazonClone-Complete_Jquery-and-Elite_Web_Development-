var http = require('http');// including modeule 'http'
var url = require("url");
http.createServer(function (req, res) {
    res.writeHead(200, { "COntent-type": "text/html" });//HTTP Header
    res.write(req.url);
    var q = url.parse(req.url, true).query;
    var txt = q.name + "" + q.age;
    // res.write(q);
    res.write(txt);
    res.end("Hello World");

}).listen(9090);