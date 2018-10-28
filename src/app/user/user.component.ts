import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../users/user.service';
import { AlertsService } from '../alert-service/alerts.service';
import { Depo } from '../depo-class/depo';
import { HttpClient } from '@angular/common/http';
import { DepoRequestService } from '../depo-http/depo-request.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService, DepoRequestService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  alertService: AlertsService;
  depo: Depo;

  constructor(userService: UserService, alertService: AlertsService, private http: HttpClient, private depoService: DepoRequestService) {
    // this.users = userService.getUsers();
    this.alertService = alertService; // make the service available to the class
  }
  addNewUser(user) {
    const userLength = this.users.length;
    user.id = userLength + 1;
    user.completeDate = new Date(user.completeDate);
    this.users.push(user);

  }

  deleteUser(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.users[index].name}`);

      if (toDelete) {
        this.users.splice(index, 1);
        this.alertService.alertMe('User has been deleted');
      }

    }
  }


  toogleDetails(index) {
    this.users[index].showDepositories = !this.users[index].showDepositories;
  }


  ngOnInit() {
    interface ApiResponse {
      depositories: string;
      followers: string;
    }
    // tslint:disable-next-line:max-line-length
    this.http.get <ApiResponse>('https://api.github.com/users/daneden?access_token=3767e07a8cfa5a0ab04e6c1dac7d4568bdbc6817').subscribe(data => {
      this.depo = new Depo(data.depositories, data.followers);
    }, err => {
      this.depo = new Depo('no depositories', 'no followers');
      console.log('Error occured ');
    });
  }

}
