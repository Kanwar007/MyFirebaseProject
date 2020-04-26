import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Student } from '../shared/student';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';


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
 

 

    getStudentByID(id: string): Observable<T> {
      return this.collection
          .doc<T>(id)
          .snapshotChanges()
          .pipe(
              // We want to map the document into a Typed JS Object
              map(doc => {
                  // Only if the entity exists should we build an object out of it
                  if (doc.payload.exists) {
                      const data = doc.payload.data() as T;
                      const payloadId = doc.payload.id;
                      return { id: payloadId, ...data };
                  }
              })
          );
  }
  
    
  
  
  

}
