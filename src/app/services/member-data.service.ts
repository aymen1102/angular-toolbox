import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberDataService {

  constructor(private http:HttpClient) { }

  url="https://randomuser.me/api/";
  member(){
    return this.http.get(this.url);
  }
}
