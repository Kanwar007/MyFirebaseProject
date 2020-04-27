import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfStudentComponent } from './list-of-student/list-of-student.component';
import { AddSudentInfoComponent } from './add-sudent-info/add-sudent-info.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


const routes: Routes = [
  { path: '',   redirectTo: '/list', pathMatch: 'full' }, 
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
