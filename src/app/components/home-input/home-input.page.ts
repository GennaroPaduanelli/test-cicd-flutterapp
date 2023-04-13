import { Component, OnInit } from '@angular/core';
import { MisurazioneService } from 'src/app/services/misurazione.service';

@Component({
  selector: 'app-home-input',
  templateUrl: './home-input.page.html',
  styleUrls: ['./home-input.page.scss'],
})
export class HomeInputPage implements OnInit {

  constructor(private misurazioneService:MisurazioneService) { }
  misurazioneExists = false;
  misurazioneName = '';
  ngOnInit() {
    let misurazione = this.misurazioneService.getMisurazioneLocalStorage();
    if(misurazione != undefined ) {
      if(misurazione.nomeMisurazione != undefined && misurazione.nomeMisurazione != '') {
        this.misurazioneExists = true;
        this.misurazioneName = misurazione.nomeMisurazione;
      }


    }
  }

}
