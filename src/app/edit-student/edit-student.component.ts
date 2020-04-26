import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from '@angular/forms';

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
    private router: Router
    
    ) { }

  ngOnInit(): void {
    this.updateStudentData();
    const id = this.actRoute.snapshot.paramMap.get('id')
  }

  updateStudentData() {
  this.editForm = this.fb.group({
    FirstName: [''],
    LastName:[''],
    Country:[''],
    Phone:[''],
    State:[''],
    City:['']
  })
  }
}
