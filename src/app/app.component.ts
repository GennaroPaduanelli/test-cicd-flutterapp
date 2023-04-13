import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { UserLocalStorageService } from './services/user.localStorage.service';
import { User } from './services/user.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Misurazione, MisurazioneService } from './services/misurazione.service';
import { getAnalytics } from "firebase/analytics";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  items: MenuItem[] = [];
  position = 'menu-absolute'
  constructor(private primengConfig: PrimeNGConfig, private router: Router, private localStorageServiceUser: UserLocalStorageService,
    private misurazioniService:MisurazioneService,
    private navController: NavController) {


    const app = firebase.initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
  }


  ngOnInit() {
    this.primengConfig.ripple = true;
    this.setData();
  }
    logout() {
      this.localStorageServiceUser.signOut();
      this.misurazioniService.removeMisurazioneLocalStorage();
      this.navController.navigateForward("home");
      this.setData();
    }

    setData() {
      this.items = [];
      this.items.push({label: 'Misurazioni', icon: 'pi pi-chevron-circle-right',url: '/home',target:"_self",styleClass: this.isActive(['/home-input'])});

      let user: User = this.localStorageServiceUser.getUser();
      let misurazione:Misurazione = this.misurazioniService.getMisurazioneLocalStorage();

      if(user != undefined) {
        this.items.push({label: 'OperazioniColturali', icon: 'pi pi-chevron-circle-right',target:"_self",  styleClass: this.isActive(['/lavorazioni']), command : ()=> {
          if(misurazione == undefined ) {
            this.navController.navigateForward('home-input');
          }else {
            this.navController.navigateForward('lavorazioni');
          }


        }});
        this.items.push({label: 'DatiProduttivi', icon: 'pi pi-chevron-circle-right',target:"_self",  styleClass: this.isActive(['/dati-produttivi']) , command : ()=>{
          if(misurazione == undefined ) {
            this.navController.navigateForward('home-input');
          }else {
            this.navController.navigateForward('dati-produttivi');
          }
        }});

        this.items.push({label: 'Dati Soulo', icon: 'pi pi-chevron-circle-right',target:"_self",  styleClass: this.isActive(['/evoluzione-carbonio-suolo']),command : ()=> {
          if(misurazione == undefined ) {
            this.navController.navigateForward('home-input');
          }else {
            this.navController.navigateForward('evoluzione-carbonio-suolo');
          }
        }});
        this.items.push({label: 'Seleziona Calcolo', icon: 'pi pi-chevron-circle-right',target:"_self",  styleClass: this.isActive(['/operation-selection']), command : ()=> {
          if(misurazione == undefined ) {
            this.navController.navigateForward('home-input');
          }else {


              this.navController.navigateForward('operation-selection').then( ()=> {
                location.reload();
              })



          }
        }});
        //{label: 'Cambia Password', icon: 'pi pi-user-edit',  url:'/change-password' ,target:"_self",  styleClass: this.isActive(['/login'])}
        this.items.push({label: `${user.nome} ${user.cognome}`, icon: 'pi pi-user',items:[
        {label: 'Logout', icon: 'pi pi-sign-out' , command: () => {this.logout()}}
      ]});


      }else {


        this.items.push({icon: 'pi pi-user', items :[
          {label: 'Login', icon: 'pi pi-sign-in' , url:'/login' ,target:"_self" ,  styleClass: this.isActive(['/login'])},
          {label: 'Registrazione', icon: 'pi pi-user-plus' , url:'/registration' ,target:"_self" ,  styleClass: this.isActive(['/registration'])}
        ]});
      }
    }

    isActive(urls:any) {
      if(urls.includes(this.router.url)) {
        return 'menu-item-active';
      }
      return '';
    }


  }



