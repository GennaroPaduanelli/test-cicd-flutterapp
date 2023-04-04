import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
export interface User {
azienda: string;
cognome: string;
nome: string;
uuid_utente: string;
timestamp?: Date;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly angularFirestore: AngularFirestore) {

  }


  saveUser(user:User) {

    return this.angularFirestore.collection("users").add(JSON.parse(JSON.stringify(user)));
  }

  updateUser(user: User,uuid_utente: string) {


    return this.angularFirestore
      .doc("users/" + uuid_utente)
      .update(JSON.parse(JSON.stringify(user)));
  }

  deleteUser(uuid_utente: string) {
    return this.angularFirestore.collection('users', ref => ref.where('uid_utente', '==', uuid_utente)).doc("users").delete();
  }

  getUserByUuid_utente(uuid_utente: string) {
  return this.angularFirestore.collection<User>('users', ref => ref.where('uid_utente', '==', uuid_utente)).valueChanges();
  }


}
