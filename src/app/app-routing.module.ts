import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfStudentComponent } from './list-of-student/list-of-student.component';
import { AddSudentInfoComponent } from './add-sudent-info/add-sudent-info.component';


const routes: Routes = [
  { path: 'list', component: ListOfStudentComponent},
  { path: 'register', component: AddSudentInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
