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
      private http: HttpClient,
      private storage: Storage
  ) {
    this.storage.get('auth-token').then(res => {
      this.currentUser = res;
    });
  }

  registerMember(members) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.currentUser
    });
    const options = {
      headers: headers
    }
    return this.http.post(APIEndpoint + '/member/', members, options).subscribe(data => {
      console.log('Create Student : ' + data);
    });
  }
}
