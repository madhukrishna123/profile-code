/* 
 * To change123 this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http = require('http');
var hostname ='localhost';
var port =3000;
var server = http.createServer(function(req,res){
    console.log(req.headers + "madhu krishna");
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>hello port</h1>');
});

server.listen(port,hostname,function(){
    console.log("server has starte");
});

