var http= require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('myappendfile.txt', function (err,data){
        res.writeHead(200, { "COntent-type": "text/html" });
        res.write(data);
        return res.end();
    });
}).listen(8090);