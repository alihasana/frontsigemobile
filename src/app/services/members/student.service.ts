import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public currentUser: any;

  constructor(
      private plt: Platform,
      private storage: Storage,
      private http: HttpClient
  ) {
    this.storage.get('auth-token').then(res => {
      this.currentUser = res;
    });
  }

  postStudentService(members) {
    return this.storage.get('auth-token').then(res => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + res
      });
      const options = {
        headers: headers
      }
      return this.http.post(APIEndpoint + '/member/', members, options);
    });
  }

  getStudentService() {
   return this.storage.get('auth-token').then(res => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + res
      });
      const options = {
        headers: headers
      };
      return this.http.get(APIEndpoint + '/member/', options);
    });
  }
}
