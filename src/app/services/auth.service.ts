
import { Injectable, NgZone } from '@angular/core';
import { User } from './../shared/user';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any;


  constructor(
    public afs:AngularFirestore,
    public afAuth: AngularFireAuth,
    public router:Router,
    public ngZone:NgZone


  ) { }
//login with email/password

  login(email,password)
  {
  return this.afAuth.signInWithEmailAndPassword(email,password)
  .then((result)=> {
    this.ngZone.run(()=>{
      this.router.navigate(['list']);
    });

  }).catch((error)=>{
    window.alert(error.message)
  })
  }
}
