import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;

  constructor() { }


  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    //When a webclient is connected to the system, we have to save the socket id of the client into a list
    this.socket.emit('webclient_initialize','Angular sending data to the backend')
  }

  socketDisconnect(){
    if (this.socket) {this.socket.disconnect();}
  }
}
