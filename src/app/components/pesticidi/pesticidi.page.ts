import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Misurazione, MisurazioneService } from 'src/app/services/misurazione.service';
import { convertToPrintableDate } from 'src/app/services/timeUtils';
export interface Pesticidio {
  id?:string;
  code?:string;
  name?:string;
  nomePesticidio: string;
  numeroPassate: number;
  quantitaKgEttaro?:number;
  percentualePrincipioAttivo?: number;
  co2Ettaro: string;
  m3BlueWaterEttaro:string;


}

interface TipoPesticidio {
  name: string,
  code: string,
  co2Ettaro: number;
  n1Carbon: number;
  n2Carbon: number;

  n1Water: number;
  n2Water: number;
}
@Component({
  selector: 'app-pesticidi',
  templateUrl: './pesticidi.page.html',
  styleUrls: ['./pesticidi.page.scss'],
})
export class PesticidiPage   {


  pesticidi: Pesticidio[] =[];
  pesticidio!: Pesticidio ;
  pesticidiSelezionati: Pesticidio[] =[];

  dialogPesticidiVisible: boolean = false;
  tipiPesticidio: TipoPesticidio[] = [];
  tipiPesticidioCheck: TipoPesticidio[] = [];


  selectedTipoPesticidio!: TipoPesticidio;
  selectedNumeroPassate!: number ;

  selectedQuantitaKgEttaro!:number;
  selectedPercentualePrincipioAttivo!: number;
  misurazione!:Misurazione;
  updating = false;

  @ViewChild('dt') dt: Table | undefined;
  constructor(private misurazioneService: MisurazioneService ) {

    this.tipiPesticidio = [{name: "SolfatoDiRame", code: "SolfatoDiRame", co2Ettaro: 2.07, n1Carbon:1.45 ,n2Carbon:4.17 ,n1Water: 5.03, n2Water:128.33},
    {name: "OssidoDiRame", code: "OssidoDiRame", co2Ettaro: 3.442,n1Carbon: 1.45,n2Carbon: 6.64,n1Water: 5.03, n2Water:232.95},
    {name: "BicarbonatoDiPotassio", code: "BicarbonatoDiPotassio", co2Ettaro: 7.11, n1Carbon:1.45 ,n2Carbon:2.83,n1Water: 5.03, n2Water:29.59},
    {name: "CalceIdrata", code: "CalceIdrata", co2Ettaro: 3.23, n1Carbon:1.45 ,n2Carbon:0.89,n1Water: 5.03, n2Water:0.00017735978773},
    {name: "Zolfo", code: "Zolfo", co2Ettaro: 2.89, n1Carbon:1.45 ,n2Carbon:0.144,n1Water: 5.03, n2Water:0.05}]

  this.tipiPesticidioCheck = [{name: "SolfatoDiRame", code: "SolfatoDiRame", co2Ettaro: 2.07, n1Carbon:1.45 ,n2Carbon:4.17 ,n1Water: 5.03, n2Water:128.33},
    {name: "OssidoDiRame", code: "OssidoDiRame", co2Ettaro: 3.442,n1Carbon: 1.45,n2Carbon: 6.64,n1Water: 5.03, n2Water:232.95},
    {name: "BicarbonatoDiPotassio", code: "BicarbonatoDiPotassio", co2Ettaro: 7.11, n1Carbon:1.45 ,n2Carbon:2.83,n1Water: 5.03, n2Water:29.59},
    {name: "CalceIdrata", code: "CalceIdrata", co2Ettaro: 3.23, n1Carbon:1.45 ,n2Carbon:0.89,n1Water: 5.03, n2Water:0.00017735978773},
    {name: "Zolfo", code: "Zolfo", co2Ettaro: 2.89, n1Carbon:1.45 ,n2Carbon:0.144,n1Water: 5.03, n2Water:0.05}]

  this.tipiPesticidio.sort((a, b) => a.name.localeCompare(b.name))

  this.misurazione = this.misurazioneService.getMisurazioneLocalStorage()!;

  if(this.misurazione) {



  if(this.misurazione.inputMisurazione.operazioniColturali.pesticidi ==undefined) {
    this.misurazione.inputMisurazione.operazioniColturali.pesticidi = [];
    this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
    this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
    this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione, this.misurazione);

  }else {
    this.pesticidi = this.misurazione.inputMisurazione.operazioniColturali.pesticidi;
    this.tipiPesticidio = this.tipiPesticidio.filter(tipoPesticidio =>  !this.pesticidi.map(x => x.nomePesticidio).includes(tipoPesticidio.name))
  }
}
  }







  applyFilterGlobal($event: any, stringVal:any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  apriModale() {
    //@ts-ignore
    this.selectedQuantitaKgEttaro = undefined;
    //@ts-ignore
    this.selectedPercentualePrincipioAttivo = undefined;
    this.updating = false;
    if(this.tipiPesticidio.length >0) {
    this.dialogPesticidiVisible = true;
    }
    this.selectedNumeroPassate = 1;
  }



  aggiornaPesticidio(pesticidio: Pesticidio) {


    this.updating = true;
    this.dialogPesticidiVisible = true;
    this.selectedNumeroPassate = pesticidio.numeroPassate;
    this.selectedQuantitaKgEttaro = pesticidio.quantitaKgEttaro!;
    this.selectedPercentualePrincipioAttivo = pesticidio.percentualePrincipioAttivo!;


    //@ts-ignore
    this.selectedTipoPesticidio = this.tipiPesticidioCheck.find(tipoPesticidio => tipoPesticidio.name == pesticidio.nomePesticidio);
    if(!this.tipiPesticidio.find(tipoPesticidioRes => tipoPesticidioRes.name == pesticidio.nomePesticidio)) {
    this.tipiPesticidio.push(this.selectedTipoPesticidio);
    this.tipiPesticidio.sort((a, b) => a.name.localeCompare(b.name))
    //@ts-ignore
    this.dt.totalRecords = this.pesticidi.length;





    }




  }
  eliminaPesticidio(pesticidio: Pesticidio) {

    this.pesticidi = this.pesticidi.filter(pesticidioRes => pesticidioRes.nomePesticidio != pesticidio.nomePesticidio);
    //@ts-ignore
    this.selectedTipoLavorazione = undefined;
    //@ts-ignore
    this.dt.totalRecords = this.pesticidi.length;


    if(!this.tipiPesticidio.find(tipoPesticidioRes => tipoPesticidioRes.name == pesticidio.nomePesticidio)) {
      this.tipiPesticidio.push(this.tipiPesticidioCheck.find(tipoPesticidioCheck => tipoPesticidioCheck.name == pesticidio.nomePesticidio)!);
      this.tipiPesticidio.sort((a, b) => a.name.localeCompare(b.name))
    }


    this.misurazione.inputMisurazione.operazioniColturali.pesticidi = this.pesticidi;
    this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
    this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
    this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione, this.misurazione);




  }

  chiudiDialogPesticidio() {
    this.dialogPesticidiVisible = false;

    this.pesticidi.forEach(lavorazioneRes => {
      let tipoLavorazione = this.tipiPesticidio.find(tipoLavorazioneRes => tipoLavorazioneRes.name == lavorazioneRes.nomePesticidio);
      if(tipoLavorazione) {
        this.tipiPesticidio = this.tipiPesticidio.filter(tipoLavorazioneRes => tipoLavorazioneRes.name !== tipoLavorazione?.name);
      }
    })



  }

  salvaPesticidio() {

    if(this.selectedPercentualePrincipioAttivo && this.selectedNumeroPassate && this.selectedQuantitaKgEttaro) {

    if(this.pesticidi.find(pesticidioRes => pesticidioRes.nomePesticidio  == this.selectedTipoPesticidio.name)) {
      this.pesticidi = this.pesticidi.filter(pesticidioRes => pesticidioRes.nomePesticidio !== this.selectedTipoPesticidio.name);
    }

    //@ts-ignore
    this.pesticidio = {};
    this.pesticidio.numeroPassate  = this.selectedNumeroPassate
    let co2Result = (this.selectedTipoPesticidio.n1Carbon*this.selectedNumeroPassate)+(this.selectedTipoPesticidio.n2Carbon*(this.selectedQuantitaKgEttaro*this.selectedPercentualePrincipioAttivo/100))
    let blueWaterResult = (this.selectedTipoPesticidio.n1Water*this.selectedNumeroPassate)+(this.selectedTipoPesticidio.n2Water*(this.selectedQuantitaKgEttaro*this.selectedPercentualePrincipioAttivo/100))
    this.pesticidio.co2Ettaro = co2Result.toFixed(3).toString();
    this.pesticidio.m3BlueWaterEttaro = blueWaterResult.toFixed(3).toString();



    this.pesticidio.nomePesticidio = this.selectedTipoPesticidio.name;
    this.pesticidio.quantitaKgEttaro = this.selectedQuantitaKgEttaro;
    this.pesticidio.percentualePrincipioAttivo = this.selectedPercentualePrincipioAttivo;
    this.pesticidi.push(this.pesticidio);
    this.tipiPesticidio = this.tipiPesticidio.filter(tipoPesticidio =>tipoPesticidio.name != this.pesticidio.nomePesticidio );
    //@ts-ignore
    this.dt.totalRecords = this.pesticidi.length;
    this.dialogPesticidiVisible = false;




    this.misurazione.inputMisurazione.operazioniColturali.pesticidi = this.pesticidi;
    this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
    this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
    this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione, this.misurazione);

  }
}


}
