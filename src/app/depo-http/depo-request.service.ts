import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repo } from '../depo-class/depo';

@Injectable()

export class DepoRequestService {
  repo: Repo;
  avatar_url: string;
  constructor(private http: HttpClient) {
    // display parameter
    this.repo = new Repo('', '', '', '', '');
   }
  depoRequest() {

    interface ApiResponse {
      login: string;
      public_repos: string;
      followers: string;
      avatar_url: any;
      following: string;

    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {

        this.repo.public_repos = response.public_repos;
        this.repo.followers = response.followers;
        this.repo.login = response.login;
        this.repo.following = response.following;

        console.log(response);

        resolve();
      },
        error => {
          this.repo.public_repos = 'no repositories';
          this.repo.followers = 'no followers';
          this.repo.following = 'none';
          this.repo.login = 'no login details';
          reject(error);
        }
      );
    });

    return promise;
  }
  defaultRequest() {
    interface ApiResponse {
      public_repos: string;
      followers: string;
      login: string;
      following: string;
      avatar_url: 'https://avatars3.githubusercontent.com/u/41263453?v=4';

    }

    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.defaultapiUrl).toPromise().then(response => {

        this.repo.public_repos = response.public_repos;
        this.repo.followers = response.followers;
        this.repo.following = response.following;
        this.repo.login = response.login;
        this.avatar_url = response.avatar_url;
        console.log(response);
        resolve();
      },
        error => {
          this.repo.public_repos = 'no repositories';
          this.repo.followers = 'no followers';
          this.repo.following = 'none';
          this.repo.avatar_url = 'no profile photo available';
          console.log(error);
          reject(error);
        }
      );
    });
    // console.log(promise);
    return promise;
  }
  }

