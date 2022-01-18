import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-edit-profile',
  templateUrl: './student-edit-profile.component.html',
  styleUrls: ['./student-edit-profile.component.css'],
})
export class StudentEditProfileComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private toast: ToastrService
  ) {}

  public name: String = '';
  public room: String = '';
  public mobile: String = '';
  public description: String = '';

  oldName!: String;
  user: any;

  ngOnInit(): void {
    this.oldName = this.activatedRoute.snapshot.params['name'];
    this.getOneUser();
  }

  getOneUser() {
    this.http
      .get(`http://localhost:9000/api/${this.oldName}`)
      .subscribe((result: any) => {
        this.name = result.name;
        this.room = result.room;
        this.mobile = result.mobile;
        this.description = result.description;
        this.user = result;
      });
  }

  UpdateUser() {
    this.http
      .put(`http://localhost:9000/api/update/${this.oldName}`, {
        room: this.room,
        mobile: this.mobile,
        description: this.description,
      })
      .subscribe((result: any) => {
        this.toast.success(`${this.oldName} Updated`, 'Success');
        this.router.navigateByUrl('/');
      });
  }
}
