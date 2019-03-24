import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {StudentService} from '../../services/members/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(
      private router: Router,
      private studentService: StudentService
  ) { }

  ngOnInit() {
  }
  onRegisterMember(form: NgForm) {
    this.studentService.postStudentService(form.value).then((res: any) => {
      res.subscribe(response => {
        if (response.success) {
          this.router.navigateByUrl('tabs/member');
        }
      });
    });
  }
}
