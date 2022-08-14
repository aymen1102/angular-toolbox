import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url:string="https://randomuser.me/api/";

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.url);
  }
  
}
