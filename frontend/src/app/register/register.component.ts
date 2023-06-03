import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  registerUser(user){
    this.apiService.registerUser(user);
    console.log(user);
  }

  ngOnInit(): void {
  }

}
