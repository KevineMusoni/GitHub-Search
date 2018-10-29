import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repo } from '../depo-class/depo';

@Injectable()

export class DepoRequestService {
  repo: Repo;
  constructor(private http: HttpClient) {
    this.repo = new Repo('', '');
   }
  depoRequest() {

    interface ApiResponse {
      public_repos: string;
      followers: string;

    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {

        this.repo.public_repos = response.public_repos;
        this.repo.followers = response.followers;
        console.log(this.repo);
        console.log(response);

        resolve();
      },
        error => {
          this.repo.public_repos = 'no repositories';
          this.repo.followers = 'no followers';
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

    }

    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.defaultapiUrl).toPromise().then(response => {

        this.repo.public_repos = response.public_repos;
        this.repo.followers = response.followers;
        console.log(response);
        resolve();
      },
        error => {
          this.repo.public_repos = 'no repositories';
          this.repo.followers = 'no followers';
          console.log(error);
          reject(error);
        }
      );
    });
    // console.log(promise);
    return promise;
  }
  }

