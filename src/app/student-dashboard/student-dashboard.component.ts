import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentModel } from './student.model';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
})
export class StudentDashboardComponent implements OnInit {
  studentValue!: FormGroup;

  studentObj: StudentModel = new StudentModel();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.studentValue = this.formBuilder.group({
      name: [''],
      class: [''],
      email: [''],
      mobile: [''],
    });
  }

  AddStudent() {}
}
