import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { UserLocalStorageService } from 'src/app/services/user.localStorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  email:string = '';
  password:string = '';
  validationMessage = '';
  visibleValidationMessage = false;


  constructor(private authService: FirebaseAuthService,
    private userLocalStorageService:UserLocalStorageService,
     private userService: UserService,private navCtrl: NavController ) { }


  login() {





    if(this.password != ''&& this.email != '') {
      var patternEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
      var resultPatternEmail = patternEmail.test(this.email);

    if(resultPatternEmail && this.password.length >= 6) {

      this.authService.doLogin({email: this.email,password: this.password}).then(v => {
      this.userService.getUserByUuid_utente(v.user.multiFactor.user.uid).subscribe(listUser => {

      if(listUser[0] != undefined) {
      this.userLocalStorageService.saveUser(listUser[0]);
      window.location.reload();
      setTimeout(()=> {

        this.navCtrl.navigateForward("misurazioni");


      },3000)


      setTimeout(()=>{
        this.userLocalStorageService.signOut();
        this.navCtrl.navigateForward("home");

      },86400000);

      }




      })

      }).catch(e => {
        this.validationMessage = "Credenziali non valide";
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
    this.validationMessage = "Credenziali vuote";
    this.visibleValidationMessage = true;
    setTimeout(()=> {
      this.validationMessage = "";
    this.visibleValidationMessage = false;
    },1500);
  }

}
}
