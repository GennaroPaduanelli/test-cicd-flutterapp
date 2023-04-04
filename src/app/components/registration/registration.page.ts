import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { UserLocalStorageService } from 'src/app/services/user.localStorage.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  azienda: string = '';
  nome: string = '';
  cognome: string = '';
  email: string = '';
  password: string = '';

  validationMessage = '';
  visibleValidationMessage = false;

  visibleSpinner = false;

  constructor(private userLocalStorageStorage: UserLocalStorageService,
     private userService: UserService, private firebaseAuthService: FirebaseAuthService, private navController: NavController) { }

  ngOnInit() {
  }

  registrati() {
    if(this.azienda != ''&& this.nome != '' && this.cognome != ''  && this.email != '' && this.password != '') {
      var patternEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
      var resultPatternEmail = patternEmail.test(this.email);

    if(resultPatternEmail && this.password.length >= 6) {


      this.firebaseAuthService.doRegister({email: this.email, password: this.password}).then(v => {
      let user: User  = {azienda: this.azienda, cognome: this.cognome, nome: this.nome, uuid_utente: v.user.multiFactor.user.uid};
      this.userService.saveUser(user).then(d => {
        this.userLocalStorageStorage.signOut();
        this.userLocalStorageStorage.saveUser(user);

        this.visibleSpinner = true;

        setTimeout(()=>{
          this.navController.navigateForward("misurazioni");
        },1800)


      }).catch(x => {
        this.validationMessage = "Errore Registrazione";
        this.visibleValidationMessage = true;
        setTimeout(()=> {
        this.validationMessage = "";
        this.visibleValidationMessage = false;
        },1500);
      })

      }).catch(x =>{
        this.validationMessage = "Errore Registrazione";
        this.visibleValidationMessage = true;
        setTimeout(()=> {
        this.validationMessage = "";
        this.visibleValidationMessage = false;
        },1500);
      })

    }else if(!resultPatternEmail) {
      this.validationMessage = "Inserisci una email valida";
      this.visibleValidationMessage = true;
      setTimeout(()=> {
        this.validationMessage = "";
      this.visibleValidationMessage = false;
      },1500);
    }else if(this.password.length <= 5) {
      this.validationMessage = "La password inserita deve essere minimo 6 caratteri";
      this.visibleValidationMessage = true;
      setTimeout(()=> {
        this.validationMessage = "";
      this.visibleValidationMessage = false;
      },1500);
    }

  }else {
    this.validationMessage = "Campi vuoti";
    this.visibleValidationMessage = true;
    setTimeout(()=> {
      this.validationMessage = "";
    this.visibleValidationMessage = false;
    },1500);
  }
  }

}
