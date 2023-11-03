var http = require('http');// including modeule 'http'
var fs=require("fs");
http.createServer(function (req, res) {
    fs.readFile("06_app.js",function(err,data){
        res.writeHead(200, { "COntent-type": "text/html" });//HTTP Header
        res.write(data);
        return res.end();
    })
    
    
}).listen(9090);