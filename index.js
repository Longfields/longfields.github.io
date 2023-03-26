import { createServer } from "http";
import { Server } from "socket.io";



const express = require('express');
const app = express();
const http = require('http');
/*const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);*/
const httpServer = createServer();
const io = new Server(httpServer, {
  path: "/chat.html"
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
      });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});