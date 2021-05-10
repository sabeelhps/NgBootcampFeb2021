const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);




app.use('/', express.static(path.join(__dirname, '/public')));


io.on('connection', (socket) => {

    socket.on('send_msg', (data) => {
        console.log(`${socket.id} says -- ${data.msg}`)
        
        io.emit('recieved_msg', {
            msg: data.msg,
            id:socket.id
        })
    
    })


    console.log(socket.id);
})

server.listen(3001, () => {
    console.log('server running at http://localhost:3001');
})