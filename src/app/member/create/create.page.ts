import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {StudentService} from '../../services/members/student.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }
  onRegisterMember(form: NgForm) {
    this.studentService.registerMember(form.value);
  }
}
