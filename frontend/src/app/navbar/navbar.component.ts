import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{ // implements OnInit

  constructor() {}

  //links = ['Summary', 'Wheats', ''];
  //activeLink = this.links[0];



  ngOnInit() {

  }

  links = ['/', '/fetchWheat','/app-fetch-flour','/app-store-experiment', '/app-spectrums', '/','/app-silo-tab' ];
  titles = ['Summary','Wheat meassurements', 'Flour meassurements', 'Store experiment','Spectrum monitoring','Estimation models','Silo Measurements'];
  activeLink = this.links[-1];
  myColor = 'primary';



}
