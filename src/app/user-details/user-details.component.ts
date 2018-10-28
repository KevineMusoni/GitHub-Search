import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../user';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;
  @Output() isComplete = new EventEmitter<boolean>();

  userDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
