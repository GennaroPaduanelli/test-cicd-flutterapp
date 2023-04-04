import { Injectable } from '@angular/core';

import {  CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MisurazioneService } from '../services/misurazione.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardMisurazioneService implements CanActivate {
  constructor(private navController: NavController, private misurazioniService: MisurazioneService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {



    switch(route.url[0].path) {
      case "home-input":

      if(this.misurazioniService.getMisurazioneLocalStorage() == undefined) {
         this.navController.navigateForward('misurazioni');
         return false;
      }

      break;

      case "lavorazioni":

      if(this.misurazioniService.getMisurazioneLocalStorage() == undefined) {
         this.navController.navigateForward('misurazioni');
         return false;
      }

      break;


      case "altre-lavorazioni":

      if(this.misurazioniService.getMisurazioneLocalStorage() == undefined) {
         this.navController.navigateForward('misurazioni');
         return false;
      }

      break;

      case "pesticidi":

      if(this.misurazioniService.getMisurazioneLocalStorage() == undefined) {
         this.navController.navigateForward('misurazioni');
         return false;
      }

      break;


      case "fertilizzanti":

      if(this.misurazioniService.getMisurazioneLocalStorage() == undefined) {
         this.navController.navigateForward('misurazioni');
         return false;
      }

      break;

      case "emissioni-altre-attività":

      if(this.misurazioniService.getMisurazioneLocalStorage() == undefined) {
         this.navController.navigateForward('misurazioni');
         return false;
      }

      break

      case "dati-produttivi":

      if(this.misurazioniService.getMisurazioneLocalStorage() == undefined) {
         this.navController.navigateForward('misurazioni');
         return false;
      }

      break

      case "evoluzione-carbonio-suolo":

      if(this.misurazioniService.getMisurazioneLocalStorage() == undefined) {
         this.navController.navigateForward('misurazioni');
         return false;
      }

      break


      case "operation-selection":

      if(this.misurazioniService.getMisurazioneLocalStorage() == undefined) {
         this.navController.navigateForward('misurazioni');
         return false;
      }

      break



    }





    return true;
  }
}
