import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../users/user.service';
import { AlertsService } from '../alert-service/alerts.service';
import { Repo } from '../depo-class/depo';
import { HttpClient } from '@angular/common/http';
import { DepoRequestService } from '../depo-http/depo-request.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService, DepoRequestService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  alertService: AlertsService;
  repo: Repo;
  defaultCall: any;

  // tslint:disable-next-line:max-line-length
  constructor(userService: UserService, alertService: AlertsService, private http: HttpClient, private depoService: DepoRequestService, private defaultRequest: DepoRequestService) {
    this.defaultCall = this.defaultRequest.defaultRequest();
    this.repo = this.defaultCall;
    console.log(this.repo);

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
    // this.defaultCall = this.defaultRequest.defaultRequest();
    // this.repo = this.defaultCall.repo;
    console.log(this.repo);
  }
    // interface ApiResponse {
    //   depositories: string;
    //   followers: string;
    // }
    // // tslint:disable-next-line:max-line-length
    // this.http.get <ApiResponse>('https://api.github.com/users/daneden?access_token=' + environment.apiKey).subscribe(data => {
    //   this.repo = new Repo(data.depositories, data.followers);
    // }, err => {
    //   this.repo = new Repo('no depositories', 'no followers');
    //   console.log('Error occured ');
    // });

}
