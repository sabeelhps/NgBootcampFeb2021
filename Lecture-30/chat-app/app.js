const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);


app.use('/', express.static(path.join(__dirname, '/public')));


const users={}


io.on('connection', (socket) => {
    
    socket.on('login', (data) => {
        users[socket.id]=data.name
    })

    socket.on('send_msg', (data) => {
        
        
        io.emit('recieved_msg', {
            msg: data.msg,
            name: users[socket.id]
        })

    })

})



server.listen(process.env.PORT || 3001, () => {
    console.log('server running at http://localhost:3001');
})