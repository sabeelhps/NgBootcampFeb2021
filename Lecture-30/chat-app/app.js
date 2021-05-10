const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);




app.use('/', express.static(path.join(__dirname, '/public')));



server.listen(3001, () => {
    console.log('server running at http://localhost:3001');
})