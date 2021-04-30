import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  fetchAllUsers() {
    this.http.get('https://randomuser.me/api/0.8/?results=20').subscribe((res) => {
      if (res['results']) localStorage.setItem('users', JSON.stringify(res['results']));
    }, (err) => {

    })
  }
}
