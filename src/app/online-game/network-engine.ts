import * as io from "socket.io-client";


export class NetworkEngine {

  socket;

  constructor() {
    this.socket = io.connect({
      port: '8080'
    });
    
    this.socket.on('newPlayer', this.newPlayerConnected);
    this.socket.on('playerMoved', this.playerMoved);
    this.socket.on('playeFired', this.playeFired);
    this.socket.on('playeRotated', this.playeRotated);
  }

  connect() {
    this.socket.emit('newPlayer', 'me');

  }

  newPlayerConnected(player) {

  }

  playerMoved(player) {

  }

  playeFired(player) {

  }

  playeRotated(player) {

  }

}