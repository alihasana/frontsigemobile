import { Component, OnInit  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  constructor(private authService: AuthenticationService) { }

  ngOnInit () {
  }

  onLogin(form: NgForm) {
    const auth = {
      email: form.value.email,
      password: form.value.password,
    };
    this.authService.login(auth);
  }

}
