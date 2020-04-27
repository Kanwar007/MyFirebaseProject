import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfStudentComponent } from './list-of-student/list-of-student.component';
import { AddSudentInfoComponent } from './add-sudent-info/add-sudent-info.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'list', component: ListOfStudentComponent},
  { path: 'register', component: AddSudentInfoComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: '**', component: ListOfStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
