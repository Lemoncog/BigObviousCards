var express = require('express')
var serveStatic = require('serve-static')

var app = express()

console.log("Trying to get port");
var PORT = process.env.PORT || 8080;

app.use(serveStatic('public', {'index': ['index.html']}))
app.listen(PORT)
