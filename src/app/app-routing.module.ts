import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentEditProfileComponent } from './student-edit-profile/student-edit-profile.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

const routes: Routes = [
  { path: 'student', component: StudentDashboardComponent },
  { path: 'student/:name', component: StudentProfileComponent },
  { path: 'student/edit/:name', component: StudentEditProfileComponent },
  { path: '', redirectTo: '/student', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
