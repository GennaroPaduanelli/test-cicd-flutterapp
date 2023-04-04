import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Misurazione, MisurazioneService } from 'src/app/services/misurazione.service';
import { convertToPrintableDate } from 'src/app/services/timeUtils';
export interface AltraLavorazione {
  id?:string;
  code?:string;
  name?:string;
  operazione: string;
  quantitàKgEttaro?:number;
  numeroPassate: number;
  co2Ettaro: string;
  m3BlueWaterEttaro:string;


}

interface TipoAltraLavorazione {
  name: string,
  code: string,
  co2Ettaro: number;
  m3BlueWaterEttaro:number;
}

@Component({
  selector: 'app-altre-lavorazioni',
  templateUrl: './altre-lavorazioni.page.html',
  styleUrls: ['./altre-lavorazioni.page.scss'],
})
export class AltreLavorazioniPage {

  submitted: boolean = false;

  altreLavorazioni: AltraLavorazione[] =[];
  altraLavorazione!: AltraLavorazione ;
  altreLavorazioniSelezionate: AltraLavorazione[] =[];

  dialogLavorazioni: boolean = false;
  tipiAltreLavorazioni: TipoAltraLavorazione[] = [];
  tipiAltreLavorazioniCheck: TipoAltraLavorazione[] = [];
  selectedTipoLavorazione!: TipoAltraLavorazione;
  selectedNumeroPassate!: number ;
  misurazione!:Misurazione;
  updating = false;

  imballaturaActive:boolean = false;
  selectedQuantitaKgEttaro!:number;

  @ViewChild('dt') dt: Table | undefined;
  constructor(private misurazioneService:MisurazioneService) {


    this.tipiAltreLavorazioni = [{name: "Semina", code: "Semina", co2Ettaro: 24.0,m3BlueWaterEttaro:98.90},
    {name: "SeminaCombinato", code: "SeminaCombinato", co2Ettaro: 83.9 ,m3BlueWaterEttaro:306.00 },
    {name: "SeminaSuSodo", code: "SeminaSuSodo", co2Ettaro: 81.5,m3BlueWaterEttaro:338.36},
    {name: "RaccoltaCombinato", code: "RaccoltaCombinato", co2Ettaro: 162,m3BlueWaterEttaro:344.27},
    {name: "Imballatura", code: "Imballatura", co2Ettaro: 0.00971,m3BlueWaterEttaro:0.04}

  ]

  this.tipiAltreLavorazioniCheck = [{name: "Semina", code: "Semina", co2Ettaro: 24.0,m3BlueWaterEttaro:98.90},
    {name: "SeminaCombinato", code: "SeminaCombinato", co2Ettaro: 83.9 ,m3BlueWaterEttaro:306.00 },
    {name: "SeminaSuSodo", code: "SeminaSuSodo", co2Ettaro: 81.5,m3BlueWaterEttaro:338.36},
    {name: "RaccoltaCombinato", code: "RaccoltaCombinato", co2Ettaro: 162,m3BlueWaterEttaro:344.27},
    {name: "Imballatura", code: "Imballatura", co2Ettaro: 0.00971,m3BlueWaterEttaro:0.04}

  ]

  this.tipiAltreLavorazioni.sort((a, b) => a.name.localeCompare(b.name))

  this.misurazione = this.misurazioneService.getMisurazioneLocalStorage()!;

  if(this.misurazione)  {
  if(this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni ==undefined) {
    this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni = [];
    this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
    this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione, this.misurazione);
    this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
  }else {
    this.altreLavorazioni =this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni;
    this.tipiAltreLavorazioni = this.tipiAltreLavorazioni.filter(tipoAltraLavorazione =>  !this.altreLavorazioni.map(x => x.operazione).includes(tipoAltraLavorazione.name))



  }

  }}



  applyFilterGlobal($event: any, stringVal:any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  apriModale() {
    this.updating = false;


    if(this.tipiAltreLavorazioni.find(tipoAltreLavorazioni => tipoAltreLavorazioni.name === "Imballatura")) {
      this.imballaturaActive = true;
    }else {
      this.imballaturaActive = false;
    }
    if(this.tipiAltreLavorazioni.length >0) {
    this.dialogLavorazioni = true;
    }
    this.selectedNumeroPassate = 1;
    //@ts-ignore
    this.selectedQuantitaKgEttaro = undefined;

  }



  aggiornaAltraLavorazione(altraLavorazione: AltraLavorazione) {


    if(altraLavorazione.operazione === "Imballatura") {
      this.imballaturaActive = true;
    }else {
      this.imballaturaActive = false;
    }


    this.updating = true;
    this.dialogLavorazioni = true;
    this.selectedNumeroPassate = altraLavorazione.numeroPassate;
    this.selectedQuantitaKgEttaro = altraLavorazione.quantitàKgEttaro!;

    //@ts-ignore
    this.selectedTipoLavorazione = this.tipiAltreLavorazioniCheck.find(tipoAltraLavorazione => tipoAltraLavorazione.name == altraLavorazione.operazione);



    if(!this.tipiAltreLavorazioni.find(tipoLavorazioneRes => tipoLavorazioneRes.name == altraLavorazione.operazione)) {
    this.tipiAltreLavorazioni.push(this.selectedTipoLavorazione);
    this.tipiAltreLavorazioni.sort((a, b) => a.name.localeCompare(b.name))
    //@ts-ignore
    this.dt.totalRecords = this.altreLavorazioni.length;



    }




  }

  onChange(event:any) {
    if(event.value.name == 'Imballatura') {
      this.imballaturaActive = true;
    }else {
      this.imballaturaActive = false;
    }
  }
  eliminaAltraLavorazione(altraLavorazione: AltraLavorazione) {

    this.altreLavorazioni = this.altreLavorazioni.filter(lavorazioneRes => lavorazioneRes.operazione != altraLavorazione.operazione);

    if(!this.tipiAltreLavorazioni.find(tipoLavorazioneRes => tipoLavorazioneRes.name == altraLavorazione.operazione)) {
      this.tipiAltreLavorazioni.push(this.tipiAltreLavorazioniCheck.find(tipoAltraLavorazioneCheck => tipoAltraLavorazioneCheck.name == altraLavorazione.operazione)!);
      this.tipiAltreLavorazioni.sort((a, b) => a.name.localeCompare(b.name))
    }
    //@ts-ignore
    this.selectedTipoLavorazione = undefined;
       //@ts-ignore
    this.selectedQuantitaKgEttaro = undefined;
    //@ts-ignore
    this.dt.totalRecords = this.altreLavorazioni.length;
    this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni = this.altreLavorazioni;
    this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
    this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
    this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione, this.misurazione);

  }

  chiudiDialogAltraLavorazione() {
    this.dialogLavorazioni = false;

    this.altreLavorazioni.forEach(lavorazioneRes => {
      let tipoLavorazione = this.tipiAltreLavorazioni.find(tipoLavorazioneRes => tipoLavorazioneRes.name == lavorazioneRes.operazione);
      if(tipoLavorazione) {
        this.tipiAltreLavorazioni = this.tipiAltreLavorazioni.filter(tipoLavorazioneRes => tipoLavorazioneRes.name !== tipoLavorazione?.name);
      }
    })



  }

  salvaAltraLavorazione() {



    if(this.altreLavorazioni.find(lavorazioneRes => lavorazioneRes.operazione  == this.selectedTipoLavorazione.name)) {
      this.altreLavorazioni = this.altreLavorazioni.filter(lavorazioneRes => lavorazioneRes.operazione !== this.selectedTipoLavorazione.name);
    }






    //@ts-ignore
    this.altraLavorazione = {};
    this.altraLavorazione.numeroPassate  = this.selectedNumeroPassate
    this.altraLavorazione.quantitàKgEttaro = this.selectedQuantitaKgEttaro;
    let co2Result = this.selectedTipoLavorazione.co2Ettaro * this.selectedNumeroPassate;
    let blueWaterResult = this.selectedTipoLavorazione.m3BlueWaterEttaro * this.selectedNumeroPassate;

    this.altraLavorazione.co2Ettaro = this.selectedTipoLavorazione.name == 'Imballatura'? ((this.selectedTipoLavorazione.co2Ettaro  * this.selectedQuantitaKgEttaro) * this.selectedNumeroPassate).toFixed(3).toString():
    co2Result.toFixed(3).toString();



    this.altraLavorazione.m3BlueWaterEttaro = this.selectedTipoLavorazione.name == 'Imballatura'? ((this.selectedTipoLavorazione.m3BlueWaterEttaro  * this.selectedQuantitaKgEttaro) * this.selectedNumeroPassate).toFixed(3).toString():
    blueWaterResult.toFixed(3).toString();



    this.altraLavorazione.operazione = this.selectedTipoLavorazione.name;
    this.altreLavorazioni.push(this.altraLavorazione)


    this.tipiAltreLavorazioni = this.tipiAltreLavorazioni.filter(tipoLavorazione =>tipoLavorazione.name != this.altraLavorazione.operazione );
    this.dialogLavorazioni = false;
    //@ts-ignore
    this.dt.totalRecords = this.altreLavorazioni.length;

    //@ts-ignore
    this.selectedTipoLavorazione = undefined;

    this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni = this.altreLavorazioni;
    this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
    this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
    this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione, this.misurazione);
}


}
