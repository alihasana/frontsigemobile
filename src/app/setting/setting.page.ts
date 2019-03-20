import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
