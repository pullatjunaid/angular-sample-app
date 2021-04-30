import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  updateUserData(data: any) {
    console.log(data)
    sessionStorage.setItem("user_info", JSON.stringify(data))
  }
  currentUserValue() {
    if (sessionStorage.getItem('user_info')) {
      return true
    } else {
      return false
    }
  }
}
