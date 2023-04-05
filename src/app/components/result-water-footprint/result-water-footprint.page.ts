import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Misurazione, MisurazioneService } from 'src/app/services/misurazione.service';

@Component({
  selector: 'app-result-water-footprint',
  templateUrl: './result-water-footprint.page.html',
  styleUrls: ['./result-water-footprint.page.scss'],
})
export class ResultWaterFootprintPage  {

  isSecondPage = false;
  sommaLavorazioniBlueWater!:string;
  sommaAltreLavorazioniBlueWater!:string;
  sommaPesticidiBlueWater!:string;
  sommaFertilizzantiBlueWater!:string;
  sommaEmissioniAltreAttivitaBlueWater!:string;
  sommaResiduiBlueWater!:string;

  sommaTotaleBlueWater!:string;

  percentualeLavorazioniBlueWaterFootPrint!:string;
  percentualeAltreLavorazioniBlueWaterFootPrint!:string;
  percentualePesticidiBlueWaterFootPrint!:string;
  percentualeFertilizzantiBlueWaterFootPrint!:string;
  percentualeEmissioniAltreAttivitaBlueWaterFootPrint!:string;
  percentualeResiduiBlueWaterFootPrint!:string;

  metriCubiGreenWaterKgGranella!:string;
  metriCubiGreenWaterEttaro!:string;
  metriCubiBlueWaterEttaro!:string;
  metriCubiBlueWaterKgGranella!:string;

  wfMetriCubiEttaro!:string;
  wfiMetriCubiKgGranella!:string;

  misurazione!:Misurazione;


  constructor(private navController:NavController, private misurazioneService:MisurazioneService) {


  }


  ionViewWillEnter() {
    this.misurazione = this.misurazioneService.getMisurazioneLocalStorage()!;
    this.setDataOutput();
  }

  setDataOutput() {
    this.sommaTotaleBlueWater = "0";
    if (
      this.misurazione.inputMisurazione.operazioniColturali &&
      this.misurazione.inputMisurazione.residuiColturali &&
      this.misurazione.inputMisurazione.residuiColturali.granellaKgEttaro &&
      this.misurazione.inputMisurazione.residuiColturali.percentualeUmidita &&
      this.misurazione.inputMisurazione.residuiColturali.pagliaRimossaKgEttaro
    ) {
      if(this.misurazione.inputMisurazione.operazioniColturali.lavorazioni.length >0) {
      this.sommaLavorazioniBlueWater= this.misurazione.inputMisurazione.operazioniColturali.lavorazioni
        .map((x) => parseFloat(x.m3BlueWaterEttaro))
        .reduce((accumulator, currentValue) => accumulator + currentValue,0)
        .toFixed(3).toString();
      }else {
        this.sommaLavorazioniBlueWater = 'Non Calcolabile';
      }


      if(this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni.length >0) {
        this.sommaAltreLavorazioniBlueWater= this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni
          .map((x) => parseFloat(x.m3BlueWaterEttaro))
          .reduce((accumulator, currentValue) => accumulator + currentValue,0)
          .toFixed(3).toString();
        }else {
          this.sommaAltreLavorazioniBlueWater = 'Non Calcolabile';
        }

        if(this.misurazione.inputMisurazione.operazioniColturali.pesticidi.length >0) {
          this.sommaPesticidiBlueWater= this.misurazione.inputMisurazione.operazioniColturali.pesticidi
            .map((x) => parseFloat(x.m3BlueWaterEttaro))
            .reduce((accumulator, currentValue) => accumulator + currentValue,0)
            .toFixed(3).toString();
          }else {
            this.sommaPesticidiBlueWater = 'Non Calcolabile';
          }


          if (
            this.misurazione.inputMisurazione.residuiColturali &&
            this.misurazione.inputMisurazione.residuiColturali.emissioniN2OKgAnno &&
            this.misurazione.inputMisurazione.residuiColturali.emissioniN2OKgAnno !=
              0
          ) {
            this.sommaResiduiBlueWater = (
              this.misurazione.inputMisurazione.residuiColturali
                .emissioniN2OKgAnno * 298
            )
              .toFixed(3)
              .toString();
          } else {
            this.sommaResiduiBlueWater = 'Non Calcolabile';
          }


        if(this.misurazione.inputMisurazione.operazioniColturali.fertilizzanti.length >0) {
          this.sommaFertilizzantiBlueWater= this.misurazione.inputMisurazione.operazioniColturali.fertilizzanti
            .map((x) => parseFloat(x.m3BlueWaterEttaro))
            .reduce((accumulator, currentValue) => accumulator + currentValue,0)
            .toFixed(3).toString();
          }else {
            this.sommaFertilizzantiBlueWater = 'Non Calcolabile';
          }

          if(this.misurazione.inputMisurazione.operazioniColturali.emissioniAltreAttivita.length >0) {
            this.sommaEmissioniAltreAttivitaBlueWater= this.misurazione.inputMisurazione.operazioniColturali.emissioniAltreAttivita
              .map((x) => parseFloat(x.m3BlueWaterEttaro))
              .reduce((accumulator, currentValue) => accumulator + currentValue,0)
              .toFixed(3).toString();
            }else {
              this.sommaEmissioniAltreAttivitaBlueWater = 'Non Calcolabile';
            }

            if(this.sommaLavorazioniBlueWater && this.sommaLavorazioniBlueWater != 'Non Calcolabile') {

              this.sommaTotaleBlueWater = (parseFloat(this.sommaTotaleBlueWater)+ parseFloat(this.sommaLavorazioniBlueWater)).toFixed(3).toString();
            }

            if(this.sommaAltreLavorazioniBlueWater && this.sommaAltreLavorazioniBlueWater != 'Non Calcolabile') {
              this.sommaTotaleBlueWater = (parseFloat(this.sommaTotaleBlueWater)+ parseFloat(this.sommaAltreLavorazioniBlueWater)).toFixed(3).toString();
            }

            if(this.sommaPesticidiBlueWater && this.sommaPesticidiBlueWater != 'Non Calcolabile') {
              this.sommaTotaleBlueWater =(parseFloat(this.sommaTotaleBlueWater)+ parseFloat(this.sommaPesticidiBlueWater)).toFixed(3).toString();
            }

           if(this.sommaFertilizzantiBlueWater && this.sommaFertilizzantiBlueWater != 'Non Calcolabile') {
              this.sommaTotaleBlueWater = (parseFloat(this.sommaTotaleBlueWater)+ parseFloat(this.sommaFertilizzantiBlueWater)).toFixed(3).toString();
            }

            if(this.sommaEmissioniAltreAttivitaBlueWater && this.sommaEmissioniAltreAttivitaBlueWater != 'Non Calcolabile') {
              this.sommaTotaleBlueWater = (parseFloat(this.sommaTotaleBlueWater)+ parseFloat(this.sommaEmissioniAltreAttivitaBlueWater)).toFixed(3).toString();
            }

            this.metriCubiGreenWaterKgGranella = 0.718.toString();

            if(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro ){
              this.metriCubiGreenWaterEttaro = (parseFloat(this.metriCubiGreenWaterKgGranella) *this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro).toFixed(3).toString();
            }else {
              this.metriCubiGreenWaterEttaro = 'Non Calcolabile';
            }

            if(this.sommaTotaleBlueWater && this.sommaTotaleBlueWater != 'Non Calcolabile') {
              this.metriCubiBlueWaterEttaro = this.sommaTotaleBlueWater;
            }else {
              this.metriCubiBlueWaterEttaro = 'Non Calcolabile';
            }

            if(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro && this.metriCubiBlueWaterEttaro  && this.metriCubiBlueWaterEttaro != 'Non Calcolabile') {
              this.metriCubiBlueWaterKgGranella = (parseFloat(this.metriCubiBlueWaterEttaro)/this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro).toFixed(3).toString();
            }else {
              this.metriCubiBlueWaterKgGranella = 'Non Calcolabile';
            }

            if(this.metriCubiBlueWaterEttaro && this.metriCubiBlueWaterEttaro != 'Non Calcolabile'&& this.metriCubiGreenWaterEttaro && this.metriCubiGreenWaterEttaro != 'Non Calcolabile') {
                this.wfMetriCubiEttaro = (parseFloat(this.metriCubiGreenWaterEttaro) + parseFloat(this.metriCubiBlueWaterEttaro)).toFixed(3).toString();
            }else {
              this.wfMetriCubiEttaro = 'Non Calcolabile';
            }

            if(this.wfMetriCubiEttaro && this.wfMetriCubiEttaro != 'Non Calcolabile'&& this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro) {
              this.wfiMetriCubiKgGranella = (parseFloat(this.wfMetriCubiEttaro) / this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro).toFixed(3).toString();
          }else {
            this.wfiMetriCubiKgGranella = 'Non Calcolabile';
          }

          if (this.sommaTotaleBlueWater && this.sommaTotaleBlueWater != 'Non Calcolabile') {
            if (this.sommaLavorazioniBlueWater && this.sommaLavorazioniBlueWater != 'Non Calcolabile') {
              this.percentualeLavorazioniBlueWaterFootPrint = ((100 * parseFloat(this.sommaLavorazioniBlueWater)) /parseFloat(this.sommaTotaleBlueWater))
              .toFixed(2)
              .toString();
            } else {
              this.percentualeLavorazioniBlueWaterFootPrint = 'Non Calcolabile';
            }

            if (this.sommaAltreLavorazioniBlueWater && this.sommaAltreLavorazioniBlueWater != 'Non Calcolabile') {
              this.percentualeAltreLavorazioniBlueWaterFootPrint = ((100 * parseFloat(this.sommaAltreLavorazioniBlueWater)) /parseFloat(this.sommaTotaleBlueWater))
              .toFixed(2)
              .toString();
            } else {
              this.percentualeAltreLavorazioniBlueWaterFootPrint = 'Non Calcolabile';
            }

            if (this.sommaPesticidiBlueWater && this.sommaPesticidiBlueWater != 'Non Calcolabile') {
              this.percentualePesticidiBlueWaterFootPrint = ((100 * parseFloat(this.sommaPesticidiBlueWater)) /parseFloat(this.sommaTotaleBlueWater))
              .toFixed(2)
              .toString();
            } else {
              this.percentualePesticidiBlueWaterFootPrint = 'Non Calcolabile';
            }


            if (this.sommaFertilizzantiBlueWater && this.sommaFertilizzantiBlueWater != 'Non Calcolabile') {
              this.percentualeFertilizzantiBlueWaterFootPrint = ((100 * parseFloat(this.sommaFertilizzantiBlueWater)) /parseFloat(this.sommaTotaleBlueWater))
              .toFixed(2)
              .toString();
            } else {
              this.percentualeFertilizzantiBlueWaterFootPrint = 'Non Calcolabile';
            }


            if (this.sommaResiduiBlueWater && this.sommaResiduiBlueWater != 'Non Calcolabile') {
              this.percentualeResiduiBlueWaterFootPrint = ((100 * parseFloat(this.sommaResiduiBlueWater)) /parseFloat(this.sommaTotaleBlueWater))
              .toFixed(2)
              .toString();
            } else {
              this.percentualeResiduiBlueWaterFootPrint = 'Non Calcolabile';
            }


            if (this.sommaEmissioniAltreAttivitaBlueWater && this.sommaEmissioniAltreAttivitaBlueWater != 'Non Calcolabile') {
              this.percentualeEmissioniAltreAttivitaBlueWaterFootPrint = ((100 * parseFloat(this.sommaEmissioniAltreAttivitaBlueWater)) /parseFloat(this.sommaTotaleBlueWater))
              .toFixed(2)
              .toString();
            } else {
              this.percentualeEmissioniAltreAttivitaBlueWaterFootPrint = 'Non Calcolabile';
            }



          }






    }
  }
  backPage() {
    if (this.isSecondPage) {
      this.isSecondPage = false;
    } else {
      this.navController.navigateForward('home-input');
    }
  }
  nextPage() {
    this.isSecondPage = true;
  }
}
