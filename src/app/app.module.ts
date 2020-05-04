import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ListOfStudentComponent } from './list-of-student/list-of-student.component';
import { AddSudentInfoComponent } from './add-sudent-info/add-sudent-info.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOfStudentComponent,
    AddSudentInfoComponent,
    EditStudentComponent,
    LoginComponent,
    RegisterUserComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
