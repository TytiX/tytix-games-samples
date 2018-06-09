import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {

  url = null;
  socket = null;
  messageObserver = null;

  constructor(private http: HttpClient) {
    this.url = environment.url;
    console.log(this.url);
    this.socket = io.connect(this.url);
    this.socket.open();
    this.socket.on('connect_error', (error) => {
      console.error(error);
    });
    this.socket.on('chat', function(data) {
      console.log('recived', data);
      if (this.messageObserver) {
        this.messageObserver.next(data);
      }
    });
    this.socket.on('error', function(err) {
      console.error(err);
    });
  }

  register(): Observable<any> {
    return new Observable( observer => {
      this.messageObserver = observer;
    });
  }

  emitMessage(data) {
    this.socket.emit('chat', data);
  }
}
