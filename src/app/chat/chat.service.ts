import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class ChatService {

  url = null;
  socket = null;
  messageSubscriber: Subscriber<any> = null;

  constructor(private http: HttpClient) {
    this.url = environment.url;
    console.log(this.url);
    this.init();
  }

  init() {
    console.log('connect to socket');
    this.socket = io.connect(this.url);

    this.socket.on('connected', () => {
      console.log('socket connected');
    });
    this.socket.on('connect_error', (error) => {
      console.error(error);
    });

    this.socket.on('chat', this.receivedMessage.bind(this));

    this.socket.on('error', function(err) {
      console.error(err);
    });
  }

  register(): Observable<any> {
    console.log('register');
    return new Observable( (subscriber) => {
      this.messageSubscriber = subscriber;
      console.log(this.messageSubscriber);
    });
  }

  private receivedMessage(data) {
    console.log('recived', data, this.messageSubscriber);
    if (this.messageSubscriber) {
      console.log('send to observer');
      this.messageSubscriber.next(data);
    }
  }

  emitMessage(data) {
    console.log('send message to socket');
    this.socket.emit('chat', data);
  }
}
