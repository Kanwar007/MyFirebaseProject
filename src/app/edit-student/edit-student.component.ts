import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from '@angular/forms';
import { FireBaseOperationService } from '../services/fire-base-operation.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private fireService:FireBaseOperationService,
    private location: Location,  
    private router: Router
    
    ) { }

  ngOnInit(): void {
    this.updateStudentData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id)
    this.fireService.getStudentByID(id);
   // this.fireService.getStudentByID(id).valueChanges();
  


  }

  updateStudentData() {
  this.editForm = this.fb.group({
    FirstName: [''],
    LastName:[''],
    Country:[''],
    Phone:[''],
    State:[''],
    City:[''],
    Email:['']
  })
  }

  updateForm(){

  }
   // Go back to previous component
   goBack() {
    this.location.back();
  }
}
