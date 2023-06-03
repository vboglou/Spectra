import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url : string = "http://localhost:27017/meanAuthAngular/wheatparameters"
  constructor(private http: HttpClient) { }

}
