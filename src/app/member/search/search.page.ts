import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-member-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  constructor(
      private router: Router
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
  goToCreateMember() {
    this.router.navigateByUrl('tabs/student/create');
  }
}
