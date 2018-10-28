import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {User} from '../user';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
newUser = new User(0, '', '', new Date());
  @Output() addUser = new EventEmitter<User>();

  submitUser() {
    this.addUser.emit(this.newUser);
  }
  constructor() { }

  ngOnInit() {
  }

}
