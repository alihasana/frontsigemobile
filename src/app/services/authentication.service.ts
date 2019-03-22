import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
const APIEndpoint = 'http://localhost:3000';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);
  constructor(
    private storage: Storage,
    private plt: Platform,
    private http: HttpClient,
    private router: Router,
    ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  // register(auth) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({'Content-Type': 'application/json'})
  //   };
  //   let email = auth.email;
  //   console.log('email : ' + email);

  //   let password = auth.password;
  //   console.log('password : ' + password);
  //   return this.http.post(bankEndUrl, {email, password})
  //   .pipe(
  //     map(res => {
  //       console.log(res);
  //     })
  //   );

  // }

  login(auth) {
    return this.http.post(APIEndpoint + '/auth/login', auth).subscribe(data => {
      const token = data['token'];
      return this.storage.set(TOKEN_KEY, token).then(res => {
          console.log(res);
          this.authenticationState.next(true);
          this.router.navigate(['tabs/member']);
        });
    });
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
    return this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }
}

