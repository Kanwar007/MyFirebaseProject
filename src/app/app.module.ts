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

@NgModule({
  declarations: [
    AppComponent,
    ListOfStudentComponent,
    AddSudentInfoComponent,
    EditStudentComponent
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
