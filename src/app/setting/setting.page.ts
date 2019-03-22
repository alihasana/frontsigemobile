import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  constructor(
      private translate: TranslateService,
      private router: Router,
      private storage: Storage
) {
    translate.setDefaultLang('en');
    storage.set('setting_language', 'en');
  }
  ngOnInit() {
    this.getLanguage();
  }
  useLanguage(language: string) {
    this.translate.use(language);
    return this.storage.set('setting_language', language);
  }
  previousUrl() {
    this.storage.get('previousUrl').then(res => {
      this.router.navigateByUrl(res);
    });
  }
  getLanguage() {
    this.storage.get('setting_language').then(res => {
      if (res) {
        return this.translate.use(res);
      } else {
        return this.translate.use('en');
      }
    });
  }
}
