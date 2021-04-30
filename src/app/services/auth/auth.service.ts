import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  doLogin(username: string, password: string) {
    console.log(username)
    return new Promise((resolve, reject) => {
      this.http.get('../assets/data/users.json').subscribe((res) => {
        console.log(res)
        if (res["username"] === username && res["password"] === password) {
          resolve({ success: true, user: res })
        } else {
          reject({ success: false })
        }
      })
    })

  }
}
