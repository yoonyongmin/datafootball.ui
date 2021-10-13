import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  webSocketEndPoint = "http://localhost:8080/ws";
  topic = "/topic/"
  stompClient : any;
  
  roomId = '1';
  ownerId = 'test';

  content = {
    roomId : '',
    ownerId : '',
    content : ''
  }

  contents : any = [];
  sendValue: string = '';
  
  constructor() { }

  ngOnInit(): void {
    this.content.roomId = this.roomId;
  }

  public roomSet() {
    // console.log(this.roomId);
    // this.roomConnect(this.roomId);
  }

  public sendChat() {
    if(this.sendValue != '') {
      let content = {
        roomId : this.roomId,
        ownerId : this.ownerId,
        content : this.sendValue
      };
      this.stompClient.send("/app/sendMessage", {}, JSON.stringify(content));
      this.contents.push(content);
      this.sendValue = '';
    }
  }

  public handleMessage(message : any) {
    console.log(JSON.stringify(message.body))
  }
  
  public roomConnect(roomId : any) {
    let stompClient : any;
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function(frame) {
      _this.stompClient.subscribe(_this.topic+roomId, function(sdkEvent) {
          _this.handleMessage(sdkEvent)
        });
    }, this.errorCallBack);
  }

  public roomDisconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
  }

  public errorCallBack(error) {
    setTimeout(() => {
      this.roomConnect(error);
    }, 5000);
  }

}
