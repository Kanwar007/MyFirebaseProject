import { Component, OnInit } from '@angular/core';
import { FireBaseOperationService } from '../services/fire-base-operation.service';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sudent-info',
  templateUrl: './add-sudent-info.component.html',
  styleUrls: ['./add-sudent-info.component.css']
})
export class AddSudentInfoComponent implements OnInit {
  
  constructor(private operationSevice:FireBaseOperationService,
    private router: Router){ }

  studentform = new FormGroup({
    FirstName: new FormControl(""),
    LastName: new FormControl(""),
    Phone: new FormControl(""),
    City: new FormControl(""),
    State: new FormControl(""),
    Country: new FormControl(""),
    Email: new FormControl(""),
    completed:  new FormControl(false)
  }

  )
  ngOnInit(): void {

  }

  onSubmit(){
   this.addSudent(this.studentform.value);
  
    this.studentform.reset();
    this.router.navigate(['/list'])
  }
  addSudent(data){
    this.operationSevice.addStudentInfo(data);

    
    
         
    
  }
}
