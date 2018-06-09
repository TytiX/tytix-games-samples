'use strict';

const express = require('express');
const pjson = require('./package.json');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

// serv HTML Part
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

app.use('/', express.static('dist'));


var server = http.listen(PORT, function() {
  console.log('listening on *:'+PORT);
});

// IO Part
io.on('connection', function(socket) {

  console.log('chat hi');
  socket.broadcast.emit('chat', {name: 'server', msg:'hi'});
  socket.emit('chat', {name: 'server', msg:'hi'});

  // socket.on('newplayer', function() {
  //     socket.player = {
  //         id: server.lastPlayderID++,
  //         x: randomInt(100,400),
  //         y: randomInt(100,400)
  //     };
  //     socket.emit('allplayers',getAllPlayers());
  //     socket.broadcast.emit('newplayer',socket.player);

  //     socket.on('click', function(data) {
  //         console.log('click to '+data.x+', '+data.y);
  //         socket.player.x = data.x;
  //         socket.player.y = data.y;
  //         io.emit('move',socket.player);
  //     });

  //     socket.on('disconnect', function() {
  //         io.emit('remove',socket.player.id);
  //     });
  // });

  socket.on('chat', function(data) {
    console.log('chat', data);
    socket.broadcast.emit('chat', data);
    socket.emit('chat', data);
  });

  socket.on('test', function() {
      console.log('test received');
  });

  socket.on('disconnect', function() {
    socket.broadcast.emit('chat', {name: 'server', msg:'bye'});
  });
});

function getAllPlayers() {
  var players = [];
  Object.keys(io.sockets.connected).forEach( function(socketID) {
      var player = io.sockets.connected[socketID].player;
      if(player) players.push(player);
  });
  return players;
}

module.exports = server; // for testing