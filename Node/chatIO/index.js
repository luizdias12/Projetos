const { json } = require('express')
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const path = require('path')
const { Server } = require("socket.io");
const io = new Server(server);
const bodyParser = require('body-parser')
const port = 3000

var authRouther = require('./routes/auth');
var indexRouter = require('./routes/home');
var chatRouter = require('./routes/chat');

// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/bs', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/io', express.static(path.join(__dirname, 'node_modules/socket.io/client-dist')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouther);
app.use('/chat', chatRouter);

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

module.exports = app;