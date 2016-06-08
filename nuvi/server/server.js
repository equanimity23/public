var fs   = require('fs');
var http = require('http');

const PORT=8080; 

function handleRequest(oRequest, oResponse){
	var sData = fs.readFileSync('data.txt');
	oResponse.setHeader('Access-Control-Allow-Origin', '*');
	oResponse.setHeader('Access-Control-Request-Method', '*');
	oResponse.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	oResponse.setHeader('Access-Control-Allow-Headers', '*');
	oResponse.setHeader('Content-Type', 'application/json');

    oResponse.end(sData);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});