import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-wheats-nav-bar',
  templateUrl: './wheats-nav-bar.component.html',
  styleUrls: ['./wheats-nav-bar.component.css']
})
export class WheatsNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  links = ['/wheatProtein', '/', '/'];
  titles = ['Protein', 'Moisture', 'Other data'];
  activeLink = this.links[-1];
  myColor = 'primary';

}
