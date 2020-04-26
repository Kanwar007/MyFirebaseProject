import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import{AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Student } from '../shared/student';


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
  getStudentByID(id){

    let ref = this.firestore.collection('student').doc(id)
   


let getDoc = ref.get()
  .then(doc => {
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      console.log('Document data:', doc.data());
    }
  })
  .catch(err => {
    console.log('Error getting document', err);
  });

    }
  
  
  

}
