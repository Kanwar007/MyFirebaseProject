
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


  ) { 

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }
//login with email/password

  login(email,password)
  {
  return this.afAuth.signInWithEmailAndPassword(email,password)
  .then((result)=> {
    this.userData = result.user;

  
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
   

    localStorage.setItem('user', JSON.stringify(this.userData));
    this.ngZone.run(()=>
  {

      this.router.navigate(['list']);
    });
    
    this.SetUserData(result.user);

  }).catch((error)=>{
    window.alert(error.message)
  })
  }
  registeUser(email,password){
    return this.afAuth.createUserWithEmailAndPassword(email,password)
    .then((result)=>{
      this.SetUserData(result.user);
      this.router.navigate(['list']);
    }).catch((error)=>{
      window.alert(error.message);
    })
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

}
