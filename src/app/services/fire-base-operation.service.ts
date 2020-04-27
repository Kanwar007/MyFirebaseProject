import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Student } from '../shared/student';


@Injectable({
  providedIn: 'root'
})
export class FireBaseOperationService {
  
  
  constructor(private firestore:AngularFirestore) { 

  }


  getStudentData(){
   return this.firestore
      .collection('student')
      .snapshotChanges();
     
  }
  addStudentInfo(data){
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("student")
        .add(data)
        .then(res => {}, err => reject(err));
    });

    

  }
  updateStudent(data,id: string){

     this.firestore.collection('student').doc(id)
       .update(data).then(Response=>{alert('updated')})

  }
  deleteStudent(student){
    console.log(student)
    this.firestore.collection('student')
        .doc(student.payload.doc.id)
        .delete();


  }
    getStudentByID(id: string){
      return this.firestore.collection('student').doc(id).valueChanges();

    }
    
  
  
  

}
