import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfStudentComponent } from './list-of-student/list-of-student.component';
import { AddSudentInfoComponent } from './add-sudent-info/add-sudent-info.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import{LoginComponent} from './login/login.component'
import{RegisterUserComponent} from './register-user/register-user.component'


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  {path:'resgisterUser',component:RegisterUserComponent},
  { path: 'list', component: ListOfStudentComponent,canActivate: [AuthGuardService]},
  { path: 'register', component: AddSudentInfoComponent,canActivate: [AuthGuardService ]},
  { path: 'edit-student/:id', component: EditStudentComponent,canActivate: [AuthGuardService]},
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
