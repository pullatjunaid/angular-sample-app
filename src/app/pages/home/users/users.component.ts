import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: any = [];
  filteredUsers: any = [];
  addUserForm;
  constructor(private modalService: NgbModal) {
    this.addUserForm = new FormGroup(
      {
        title: new FormControl('', Validators.required),
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        dob: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required)
      }
    )
  }

  ngOnInit(): void {
    this.loadUsersList();
  }
  loadUsersList() {
    this.usersList = JSON.parse(localStorage.getItem('users'));
    this.onFilter({})
  }
  onFilter(event) {
    this.filteredUsers = [];
    if (event?.target?.value) {
      this.filteredUsers = this.usersList.filter((item) => {
        console.log(event.target.value)
        console.log(item.user.name.first)
        if (item.user.name.first.includes(event.target.value) || item.user.name.last.includes(event.target.value)) {
          return item;
        }
        else if (item.user.email.includes(event.target.value)) {
          return item;
        } else if (item.user.username.includes(event.target.value)) {
          return item;
        }
      })
    } else {
      this.filteredUsers = this.usersList;
    }
  }
  onAddNewUser(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      let addUserValues = this.addUserForm.value;
      this.usersList = [
        {
          user: {
            name: {
              title: addUserValues.title,
              first: addUserValues.firstname,
              last: addUserValues.lastname
            },
            email: addUserValues.email,
            phone: addUserValues.phone,
            dob: addUserValues.dob,
            username: addUserValues.username,
            password: addUserValues.password,
            gender: addUserValues.gender
          }
        },
        ...this.usersList
      ]
      localStorage.setItem('users', JSON.stringify(this.usersList));
      this.onFilter({})
    }, (reason) => {
 
    });
  }
}
