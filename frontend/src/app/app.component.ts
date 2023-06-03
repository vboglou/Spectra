import { Component, OnInit } from '@angular/core';
import { SocketioService } from './socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  constructor(private socketService: SocketioService) {}

  ngOnInit(){
    this.socketService.setupSocketConnection();

  }

  ngOnDestroy(){
    this.socketService.socketDisconnect();
  }
}
