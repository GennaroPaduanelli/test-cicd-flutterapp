import { Injectable } from "@angular/core";
import { User } from "./user.service";
import * as CryptoJS from 'crypto-js';
import { environment } from "src/environments/environment";


const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {



  encrypt(value : string) : string{
    return CryptoJS.AES.encrypt(value, environment.secretKey.trim()).toString();
  }

  decrypt(textToDecrypt : string){
    return CryptoJS.AES.decrypt(textToDecrypt, environment.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }




}
