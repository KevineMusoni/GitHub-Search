import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Depo } from '../depo-class/depo';

@Injectable()

export class DepoRequestService {
  depo: Depo;
  constructor(private http: HttpClient) {
    this.depo = new Depo('', '');
   }
  depoRequest() {

    interface ApiResponse {
      depositories: string;
      followers: string;

    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {

        this.depo.depositories = response.depositories;
        this.depo.followers = response.followers;

        resolve();
      },
        error => {
          this.depo.depositories = 'no depositories';
          this.depo.followers = 'no followers';
          reject(error);
        }
      );
    });

    return promise;
  }
}
