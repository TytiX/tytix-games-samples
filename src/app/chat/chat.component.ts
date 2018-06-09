import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  name: string;

  messageList = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.register().subscribe( dataMsg => {
      console.log('[ChatComponent] msg :', dataMsg);
      this.messageList.push(dataMsg);
    });
  }

  sendMessage(msg: string) {
    this.chatService.emitMessage({
      name: this.name,
      msg: msg
    });
  }

  setName(name: string) {
    this.name = name;
  }
}
