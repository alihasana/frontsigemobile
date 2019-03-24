import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {TranslateService} from '@ngx-translate/core';
import {Storage} from '@ionic/storage';
import {AuthenticationService} from './services/authentication.service';
import {Router, RoutesRecognized} from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public toto: String = 'Zaza';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private storage: Storage,
    private router: Router,
    private authService: AuthenticationService
  ) {

    this.storage.get('setting_language').then(res => {
      this.initializeApp((res) ? res : 'en');
    });
  }
  ngOnInit() {
    this.router.events
        .pipe(filter((e: any) => e instanceof RoutesRecognized),
            pairwise()
        ).subscribe((e: any) => {
      this.storage.set('previousUrl', e[0].urlAfterRedirects);
    });
  }

  initializeApp(lang) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.use(lang);
    });
  }

  logout() {
    this.authService.logout().then(res => {
      console.log(res);
      this.router.navigateByUrl('/login');
        }
    );
  }
  isLogin() {
    return this.authService.authenticationState.value;
  }
}
