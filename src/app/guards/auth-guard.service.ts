import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserLocalStorageService } from '../services/user.localStorage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private navController: NavController, private userLocalStorageService: UserLocalStorageService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {



    switch(route.url[0].path) {
      case "home-input":

      if(this.userLocalStorageService.getUser() == undefined) {
         this.navController.navigateForward('home');
         return false;
      }

      break;

      case "login":

      if(this.userLocalStorageService.getUser() != undefined) {
        this.navController.navigateForward('misurazioni');
        return false;
      }
        break;

        case "registration":

        if(this.userLocalStorageService.getUser() != undefined) {
          this.navController.navigateForward('misurazioni');
          return false;
        }
          break;

          case "home":

          if(this.userLocalStorageService.getUser() != undefined) {
            this.navController.navigateForward('misurazioni');
            return false;
          }
          break;

    }





    return true;
  }
}
