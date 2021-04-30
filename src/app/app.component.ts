import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'White Rabbit';
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    // Load all users data into localStorage
    this.usersService.fetchAllUsers();
  }
}
