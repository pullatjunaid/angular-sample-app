import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(public authService: AuthService, private profileService: ProfileService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      }
    )
  }
  onSubmit() {
    console.log(this.loginForm.value)
    this.authService.doLogin(this.loginForm.value.username, this.loginForm.value.password).then((val) => {
      console.log(val)
      this.profileService.updateUserData(val["user"]);
      this.router.navigate(["home"]);
    }).catch((err) => {
      console.log(err)
    })
  }
}
