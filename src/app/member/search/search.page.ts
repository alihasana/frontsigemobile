import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-member-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit {
  constructor(
      private router: Router,
      private translate: TranslateService,
      private storage: Storage
  ) {
  }
  rows = [
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22,
      'this': 34
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55,
      'this': 34
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67,
      'this': 34
    },
    {
      'name': 'Simon Grimm',
      'gender': 'male',
      'age': 28,
      'this': 34
    }
  ];
  ngOnInit() {
    this.getLanguage();
  }
  goToCreateStudent() {
    this.router.navigateByUrl('tabs/member/student_create');
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
