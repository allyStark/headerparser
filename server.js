var express = require('express');
var cors = require('cors');
var app = express();

app.get('/', function(req,res,next){
    res.writeHead(200);
    res.end(JSON.stringify({
        "ip address": req.connection.remoteAddress,
        "language": req.headers["accept-language"].substring(0, req.headers["accept-language"].indexOf(",")),
        "system": req.headers["user-agent"].substring(req.headers["user-agent"].indexOf("(") + 1, req.headers["user-agent"].indexOf(")"))
    }));
});

app.listen(3000);