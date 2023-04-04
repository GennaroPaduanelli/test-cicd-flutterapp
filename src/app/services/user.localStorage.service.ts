import { Injectable } from "@angular/core";
import { User } from "./user.service";

import { CryptoService } from "./crypto.service";
import * as moment from 'moment';


const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageService {

  constructor(private cryptoService: CryptoService) {

  }


  signOut(): void {
    window.localStorage.removeItem(USER_KEY);
  }


  public saveUser(user: User): void {
    user.timestamp = new Date();
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY,this.cryptoService.encrypt(JSON.stringify(user)));
  }

  public getUser(): any {
    const userEncrypted = window.localStorage.getItem(USER_KEY);




    if (userEncrypted) {
      let user: User = JSON.parse(this.cryptoService.decrypt(userEncrypted!));
      let hours = moment().diff(moment(user.timestamp), 'hours');

      if(user && hours <=24) {
      return user
      }else {
        this.signOut();
        return undefined;
      }
    }
    return undefined;
  }





}
