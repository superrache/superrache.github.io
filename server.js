var express = require('express')
var serveStatic = require('serve-static')

const app = express()

app.use(serveStatic(__dirname))
var port = process.env.PORT || 8000

app.listen(port)

console.log('Server listening on: '+ port)
