import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Misurazione, MisurazioneService } from 'src/app/services/misurazione.service';
import * as moment from "moment";
import { Router } from '@angular/router';
import { convertToPrintableDate } from 'src/app/services/timeUtils';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-misurazioni',
  templateUrl: './misurazioni.page.html',
  styleUrls: ['./misurazioni.page.scss'],
})
export class MisurazioniPage  {
[x: string]: any;

  submitted: boolean = false;

  misurazioni: Misurazione[] =[];
  misurazione: Misurazione = new Misurazione();

  selectedNomeMisurazione!:string;
  oldSelectedNomeMisurazione!:string;


  dialogMisurazioni: boolean = false;


  @ViewChild('dt') dt: Table | undefined;
  constructor(private misurazioneService :MisurazioneService, private navCtrl:NavController) {

    this.misurazioneService.getAllMisurazioni().valueChanges().subscribe(data => {this.misurazioni = data});
  }

  applyFilterGlobal($event: any, stringVal:any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  apriModale() {

    this.dialogMisurazioni = true;
    this.misurazione = new Misurazione();
    this.selectedNomeMisurazione = "";
    this.oldSelectedNomeMisurazione = ""

  }



  aggiornaMisurazione(misurazione: Misurazione) {
    console.log(misurazione);
    this.dialogMisurazioni = true;
    this.selectedNomeMisurazione = misurazione.nomeMisurazione;
    this.oldSelectedNomeMisurazione = misurazione.nomeMisurazione;
    //@ts-ignore
    this.dt.totalRecords = this.misurazioni.length;
  }

  eliminaMisurazione(misurazione: Misurazione) {


    this.misurazioneService.deleteMisurazione(misurazione.nomeMisurazione);
    this.misurazioni = this.misurazioni.filter(misurazione => misurazione.nomeMisurazione != misurazione.nomeMisurazione);

  //@ts-ignore
 this.dt.totalRecords = this.misurazioni.length;
  }

  chiudiDialogMisurazione() {

    this.dialogMisurazioni = false;


  }

  salvaMisurazione() {



    if(!this.misurazioni.find(misurazione => misurazione.nomeMisurazione ==this.selectedNomeMisurazione)) {
      this.dialogMisurazioni = true;
    if(this.oldSelectedNomeMisurazione == "" ) {
      this.misurazione = new Misurazione();
      this.misurazione.nomeMisurazione = this.selectedNomeMisurazione;
      this.misurazione.dataOraUltimoAggiornamento = convertToPrintableDate(new Date());
      this.misurazioneService.saveMisurazione(this.misurazione);
      this.misurazioni.push(this.misurazione);
      this.dialogMisurazioni = false;


    }else {

      this.misurazioneService.getIdByNomeMisurazione(this.oldSelectedNomeMisurazione).subscribe(data => {
        if (data && data.docs && data.docs[0] && data.docs[0].id)
        this.misurazioneService.getMisurazioneById(data.docs[0].id).subscribe(misurazione => {

          let misurazioneRes = misurazione.data();
          //@ts-ignore
          misurazioneRes.nomeMisurazione = this.selectedNomeMisurazione;
          //@ts-ignore
          misurazioneRes.dataOraUltimoAggiornamento = new Date().toUTCString();
          this.misurazioneService.updateMisurazione(this.oldSelectedNomeMisurazione, misurazioneRes);
          //@ts-ignore
          this.misurazioni.push(misurazioneRes);
          this.dialogMisurazioni = false;
        })
      })



    }

     //@ts-ignore
     this.dt.totalRecords = this.misurazioni.length;
  }


}




goToHomeInput(misurazione: Misurazione) {

  this.misurazioneService.salvaMisurazioneLocalStorage(misurazione);
  this.navCtrl.navigateForward('home-input').then(()=> {
    location.reload();
  });
}


convert(date: any) {
  return convertToPrintableDate(date);
}

}

