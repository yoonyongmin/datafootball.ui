import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  webSocketEndPoint = "http://localhost:8080/ws"
  userId = 'test';
  topic = "/topic/"
  stompClient : any;

  constructor() { }

  connect(userId : string) {
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function(frame) {
      _this.stompClient.subscribe(_this.topic+userId, function(sdkEvent) {
        _this.onMessageReceived(sdkEvent);
      })
    })
  }

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
  }
  
  send(message) {
    this.stompClient.send("/app/login", {}, JSON.stringify(message));
  }

  onMessageReceived(message) {
    
  }

}
