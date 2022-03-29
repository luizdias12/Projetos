const { json } = require('express')
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const path = require('path')
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000

app.use('/css',express.static(path.join(__dirname, 'public/css')));
app.use('/bs',express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
    socket.on('chat message', (msg) => {
        console.log(msg)
        io.emit('chat message', msg);
    });
});

server.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});