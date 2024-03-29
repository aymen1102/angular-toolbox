import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url:string="https://randomuser.me/api/";

  constructor(private http:HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }
  
}
