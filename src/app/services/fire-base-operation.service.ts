import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import{AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class FireBaseOperationService {
  studentsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  studentRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too
  
  constructor(private firestore:AngularFirestore, private firedb:AngularFireDatabase) { 

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
}
