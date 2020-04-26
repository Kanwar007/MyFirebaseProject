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
  updateStudent(){

  }
  deleteStudent(student){
    console.log(student)
    this.firestore.collection('student')
        .doc(student.payload.doc.id)
        .delete();


  }

  // method to retrive data for model student object
 

 
    getStudentByID(id: string){
  
      this.firestore.collection('student').doc(id).valueChanges().subscribe(
        data => {
          console.log(data)
        }
      )
         

    
    }
    
  
  
  

}
