import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from '@angular/forms';
import { FireBaseOperationService } from '../services/fire-base-operation.service';
import { Location } from '@angular/common'; 
import { Student } from '../shared/student';
import { database } from 'firebase';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editForm: FormGroup;
  student:Student
  id:any
  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private fireService:FireBaseOperationService,
    private location: Location,  
    private router: Router
    
    ) { }

  ngOnInit(): void {
    this.updateStudentData();
    this.id = this.actRoute.snapshot.paramMap.get('id');   
    this.getStudentValue(this.id)
   }

  getStudentValue(id){
    this.fireService.getStudentByID(id).subscribe(
      data =>{
        this.editForm.setValue(data);
      })};

  updateStudentData() {
  this.editForm = this.fb.group({
    FirstName: [''],
    LastName:[''],
    Country:[''],
    Phone:[''],
    State:[''],
    City:[''],
    Email:[''],
    completed:['false']
  })
  }

  updateForm(){
    alert('update')
    console.log(this.editForm.value);

    this.fireService.updateStudent(this.editForm.value,this.id)

    //this.router.navigateByUrl([/list]);
    this.router.navigate(['/list'])
  

  }
   // Go back to previous component
   goBack() {
    this.location.back();
  }
}
