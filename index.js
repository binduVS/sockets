const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const app = express();
const port = 3000;
const server = http.createServer(app);
const io = socketio(server);
const publicPath = path.join(__dirname, './client');
console.log(publicPath);
app.use(express.static(publicPath));
io.on('connection', ()=>{
    console.log('connection is successful');
})
app.listen(port, ()=>{
    console.log('server is listening to port 3000');
})