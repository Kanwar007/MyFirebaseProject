import { Component, OnInit } from '@angular/core';
import { FireBaseOperationService } from '../services/fire-base-operation.service';

@Component({
  selector: 'app-list-of-student',
  templateUrl: './list-of-student.component.html',
  styleUrls: ['./list-of-student.component.css']
})
export class ListOfStudentComponent implements OnInit {
  studentlist;

  constructor(private operationSevice:FireBaseOperationService) { }

  ngOnInit(): void {
    this.getStudent();
  }
  getStudent= ()=>{
        this.operationSevice.getStudentData()
      .subscribe(resp =>
        (this.studentlist = resp)
        );
  }

}
