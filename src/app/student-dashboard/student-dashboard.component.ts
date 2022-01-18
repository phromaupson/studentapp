import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentModel } from './student.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
})
export class StudentDashboardComponent implements OnInit {
  studentValue!: FormGroup;

  studentObj: StudentModel = new StudentModel();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toast: ToastrService
  ) {}

  users: any;

  ngOnInit(): void {
    //เมื่อเปิดเว็บครั้งแรกจะรันคำสั่งข้างใน
    this.getAllUser();
    this.studentValue = this.formBuilder.group({
      name: [''],
      room: [''],
      mobile: [''],
      description: [''],
    });
  }

  getAllUser() {
    this.http.get('http://localhost:9000/api/').subscribe((result) => {
      this.users = result;
    });
  }

  AddStudent() {
    this.http
      .post('http://localhost:9000/api/add', this.studentValue.value)
      .subscribe((result: any) => {
        this.getAllUser();
        this.studentValue = this.formBuilder.group({
          name: [''],
          room: [''],
          mobile: [''],
          description: [''],
        });
        if (result.err) {
          this.toast.error(result.err, 'Error');
        } else {
          this.toast.success(result.msg, 'Success');
        }
      });
  }

  DeleteStudent(name: string) {
    this.http
      .delete(`http://localhost:9000/api/delete/${name}`)
      .subscribe((result: any) => {
        this.toast.warning(result.msg, 'Deleted');
        this.getAllUser();
      });
  }
}
