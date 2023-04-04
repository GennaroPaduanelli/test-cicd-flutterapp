import { Component, OnInit } from '@angular/core';
import { EvoluzioneCarbonio, Misurazione, MisurazioneService } from 'src/app/services/misurazione.service';
import { convertToPrintableDate } from 'src/app/services/timeUtils';

@Component({
  selector: 'app-evoluzione-carbonio-suolo',
  templateUrl: './evoluzione-carbonio-suolo.page.html',
  styleUrls: ['./evoluzione-carbonio-suolo.page.scss'],
})
export class EvoluzioneCarbonioSuoloPage implements OnInit {
  //@ts-ignore
  evoluzioneCarbonio: EvoluzioneCarbonio = {densitaApparente:0, sostanzaOrganica:0};

  listaDensitaApparente: any[] = [];
  listaSostanzeOrganiche: any[] = [];
  misurazione!:Misurazione;

  selectedDensitaApparenteDropDown!:any;
  selectedSostanzaOrganicaDropDown!: any;

  selectedDensitaApparenteInput:any = 0.9;
  selectedSostanzaOrganicaInput:any = 0.6;

  isTextInputDensitaApparente = false;
  isTextInputSostanzaOrganica = false;
  constructor(private misurazioneService: MisurazioneService ) {
    this.misurazione = this.misurazioneService.getMisurazioneLocalStorage()!;


    if(this.misurazione !=  undefined && this.misurazione?.inputMisurazione.datiSuolo != undefined) {

      if(Object.keys(this.misurazione?.inputMisurazione.datiSuolo).length !== 0) {

        this.evoluzioneCarbonio = this.misurazione?.inputMisurazione.datiSuolo;


        switch(this.evoluzioneCarbonio.densitaApparente) {
          case 1.55:
            this.selectedDensitaApparenteDropDown = {name: "Sabbioso", code: 1.55};
            break;

            case 1.35:
              this.selectedDensitaApparenteDropDown = {name: "Medio", code: 1.35};
            break;

              case 1.2:
                this.selectedDensitaApparenteDropDown = {name: "Argilloso", code: 1.2};
          break;
          default:

          if(this.evoluzioneCarbonio.densitaApparente && !isNaN(this.evoluzioneCarbonio.densitaApparente)) {
            this.selectedDensitaApparenteInput = this.evoluzioneCarbonio.densitaApparente;
          }


          break;
        }


        switch(this.evoluzioneCarbonio.sostanzaOrganica) {
          case 1:
            this.selectedSostanzaOrganicaDropDown = {name: "Povero", code: 1};
            break;

            case 1.7:
              this.selectedSostanzaOrganicaDropDown = {name: "Medio", code: 1.7};
            break;

              case 2.6:
                this.selectedSostanzaOrganicaDropDown = {name: "Buono", code: 2.6};
          break;
          default:

          if(this.evoluzioneCarbonio.sostanzaOrganica && !isNaN(this.evoluzioneCarbonio.sostanzaOrganica)) {
            this.selectedSostanzaOrganicaInput = this.evoluzioneCarbonio.sostanzaOrganica;
          }


          break;
        }




        if(isNaN(this.evoluzioneCarbonio.densitaApparente) && isNaN(this.evoluzioneCarbonio.sostanzaOrganica)) {
          this.evoluzioneCarbonio.densitaApparente = 0.9;
          this.evoluzioneCarbonio.sostanzaOrganica = 0.6;
        }
    }
    }







  }

  ngOnInit() {

    this.listaDensitaApparente = [{name: "Sabbioso", code:1.55},{name: "Medio", code:1.35},{name: "Argilloso", code:1.2}]

    this.listaSostanzeOrganiche = [{name: "Povero", code:1},{name: "Medio", code:1.7},{name: "Buono", code:2.6}]



  }

  onBack() {
    if(Object.keys(this.evoluzioneCarbonio).length != 0) {


      this.misurazione.inputMisurazione.datiSuolo = this.evoluzioneCarbonio;
      this.misurazione.inputMisurazione.datiSuolo.densitaApparente = this.isTextInputDensitaApparente ? this.selectedDensitaApparenteInput: this.selectedDensitaApparenteDropDown.code;
      this.misurazione.inputMisurazione.datiSuolo.sostanzaOrganica = this.isTextInputSostanzaOrganica ? this.selectedSostanzaOrganicaInput: this.selectedSostanzaOrganicaDropDown.code;
      this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
      this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
      this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione,this.misurazione);

    }
  }

}
