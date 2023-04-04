import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";


@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor( public afAuth: AngularFireAuth
    ) { }

    doRegister(value: any){
      return new Promise<any>((resolve, reject) => {
        this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
       .then(
         res => resolve(res),
         err => reject(err))
      })
    }

    doLogin(value: any){
      return new Promise<any>((resolve, reject) => {
        this.afAuth.signInWithEmailAndPassword(value.email, value.password)
       .then(
         res => resolve(res),
         err => reject(err))
      })
    }

    doLogout(){
      return new Promise((resolve, reject) => {
        this.afAuth.signOut()
        .then(
          res => resolve(res),
          err => reject(err))
       })

    }



}
