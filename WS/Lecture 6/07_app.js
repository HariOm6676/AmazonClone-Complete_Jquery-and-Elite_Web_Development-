var http = require('http');// including modeule 'http'
var dt=require("./06_app");
http.createServer(function (req, res) {
    res.writeHead(200, { "COntent-type": "text/html" });//HTTP Header
    res.write("Todays date and Time is"+dt.myDT());
    res.end("Hello World");
}).listen(9090);