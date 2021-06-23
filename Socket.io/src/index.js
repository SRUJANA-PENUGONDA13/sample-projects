const express = require('express')
const path = require('path')

//Creating server and adding our application to the server
const app = express()
const http = require('http')
const socketio = require('socket.io')
const server = http.createServer(app)
const io = socketio(server)


io.on('connection',(socket) =>
{
    console.log("Web Socket Connection")
    socket.emit('message', "Welcome")
    
})


const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

server.listen(port, () =>
{
    console.log("Server Started")
})