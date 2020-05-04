import { Component, OnInit } from '@angular/core';
import { FireBaseOperationService } from '../services/fire-base-operation.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-list-of-student',
  templateUrl: './list-of-student.component.html',
  styleUrls: ['./list-of-student.component.css']
})
export class ListOfStudentComponent implements OnInit {
  studentlist;

  constructor(private operationSevice:FireBaseOperationService,
              public authService : AuthService) { }

  ngOnInit(): void {
    this.getStudent();
   
  }
  getStudent= ()=>{
        this.operationSevice.getStudentData()
      .subscribe(resp =>
        ( 
          this.studentlist = resp
        )
       
        );
  }
  removeStudent= data=>
          this.operationSevice
            .deleteStudent(data)
  }
  


