// Every action in a computer is an event and object in js can fire an Event
var fs=require('fs');
var rs=fs.createReadStream('./myappendfile1.txt');
rs.on('open',function(){
    console.log('The file is open');
});