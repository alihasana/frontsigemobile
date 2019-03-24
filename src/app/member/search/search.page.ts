import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import {StudentService} from '../../services/members/student.service';

@Component({
  selector: 'app-member-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit {
  constructor(
      private router: Router,
      private translate: TranslateService,
      private studentService: StudentService,
      private storage: Storage
  ) {
  }
  public members;
  ngOnInit() {
    this.getLanguage();
    this.getStudent();
  }

  goToCreateStudent() {
    this.router.navigateByUrl('tabs/member/student_create');
  }

  getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    const m = today.getMonth() - birthDate.getMonth();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  getStudent() {
    this.studentService.getStudentService().then((data: any) => {
      data.subscribe(list => {
        const addData = list.docs;
        addData.map( add =>  {
          add.dob ? add.age = this.getAge(add.dob) : add.age = '';
          return add;
        });
        this.members = addData;
      });
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
