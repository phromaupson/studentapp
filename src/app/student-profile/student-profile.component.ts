import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
})
export class StudentProfileComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private ActivatedRoute: ActivatedRoute
  ) {}

  user: any;
  name: any;

  ngOnInit(): void {
    this.name = this.ActivatedRoute.snapshot.params['name'];
    this.getOneUser();
  }
  getOneUser() {
    this.http
      .get(`http://localhost:9000/api/${this.name}`)
      .subscribe((result) => {
        this.user = result;
      });
  }
}
