import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FireBaseOperationService {

  constructor(private firestore:AngularFirestore) { 

  }
  getStudentData(){
    
  }
}
