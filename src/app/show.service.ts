import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/users/';

  register(user: User){
    return this.http.post<any>(this.url,user);
  }
}
