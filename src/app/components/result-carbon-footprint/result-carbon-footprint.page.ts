import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';
import {
  Misurazione,
  MisurazioneService,
  OutputCarbonFootPrint,
  OutputMisurazione,
} from 'src/app/services/misurazione.service';

@Component({
  selector: 'app-result-carbon-footprint',
  templateUrl: './result-carbon-footprint.page.html',
  styleUrls: ['./result-carbon-footprint.page.scss'],
})
export class ResultCarbonFootprintPage {
  misurazione!: Misurazione;
  isActiveGraph = false;

  sommaCfpUrLavorazioni!: string;
  sommaCfpUrAltreLavorazioni!: string;
  sommaCfpUrPesticidi!: string;
  sommaCfpUrFertilizzanti!: string;
  sommaCfpUrResidui!: string;
  sommaCfpUrEmissioniAltreAttivita!: string;

  percentualeCfpLavorazioni!: string;
  percentualeCfpAltreLavorazioni!: string;
  percentualeCfpPesticidi!: string;
  percentualeCfpFertilizzanti!: string;
  percentualeCfpResidui!: string;
  percentualeCfpEmissioniAltreAttivita!: string;

  totaleCfpUr!: string;

  pagliaAlSuoloKgEttaro!: string;
  resaGranellaSeccaKgEttaro!: string;
  proteineGranellaSeccaKgEttaro!: string;

  kgCo2Ettaro!: string;
  kgCo2PerKgGranella!: string;
  kgCo2PerKgProteina!: string;
  kgCo2PerKgAllocazioneGranella!: string;
  asoc!: string;
  systemExspansion!: string;

  isSecondPage = false;

  constructor(
    private misurazioneService: MisurazioneService,
    private navCtrl: NavController
  ) {
    this.misurazione = misurazioneService.getMisurazioneLocalStorage()!;

    console.log(this.misurazione);
  }

  ionViewWillEnter() {
    this.setDataOut();
  }
  setDataOut() {
    this.totaleCfpUr = "0"

      if (
        this.misurazione.inputMisurazione.operazioniColturali.lavorazioni
          .length > 0
      ) {
        this.sommaCfpUrLavorazioni =
          this.misurazione.inputMisurazione.operazioniColturali.lavorazioni
            .map((x) => parseFloat(x.kgCo2Ettaro))
            .reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            )
            .toFixed(3).toString();
      } else {
        this.sommaCfpUrLavorazioni = 'Non Calcolabile';
      }

      if (
        this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni
          .length > 0
      ) {
        this.sommaCfpUrAltreLavorazioni =
          this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni
            .map((x) => parseFloat(x.co2Ettaro))
            .reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            )
            .toString();
      } else {
        this.sommaCfpUrAltreLavorazioni = 'Non Calcolabile';
      }

      if (
        this.misurazione.inputMisurazione.operazioniColturali.pesticidi.length >
        0
      ) {
        this.sommaCfpUrPesticidi =
          this.misurazione.inputMisurazione.operazioniColturali.pesticidi
            .map((x) => parseFloat(x.co2Ettaro))
            .reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            )
            .toString();
      } else {
        this.sommaCfpUrPesticidi = 'Non Calcolabile';
      }

      if (
        this.misurazione.inputMisurazione.operazioniColturali.fertilizzanti
          .length > 0
      ) {
        this.sommaCfpUrFertilizzanti =
          this.misurazione.inputMisurazione.operazioniColturali.fertilizzanti
            .map((x) => parseFloat(x.co2Ettaro))
            .reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            )
            .toString();
      } else {
        this.sommaCfpUrFertilizzanti = 'Non Calcolabile';
      }

      if (
        this.misurazione.inputMisurazione.residuiColturali &&
        this.misurazione.inputMisurazione.residuiColturali.emissioniN2OKgAnno &&
        this.misurazione.inputMisurazione.residuiColturali.emissioniN2OKgAnno !=
          0
      ) {
        this.sommaCfpUrResidui = (
          this.misurazione.inputMisurazione.residuiColturali
            .emissioniN2OKgAnno * 298
        )
          .toFixed(3)
          .toString();
      } else {
        this.sommaCfpUrResidui = 'Non Calcolabile';
      }
      if (this.misurazione.inputMisurazione.operazioniColturali
        .emissioniAltreAttivita &&
        this.misurazione.inputMisurazione.operazioniColturali
          .emissioniAltreAttivita.length > 0
      ) {
        this.sommaCfpUrEmissioniAltreAttivita =
          this.misurazione.inputMisurazione.operazioniColturali.emissioniAltreAttivita
            .map((x) => parseFloat(x.kgCo2Ettaro))
            .reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            )
            .toString();
      } else {
        this.sommaCfpUrEmissioniAltreAttivita = 'Non Calcolabile';
      }

      if(this.sommaCfpUrLavorazioni && this.sommaCfpUrLavorazioni != 'Non Calcolabile') {
        this.totaleCfpUr = (parseFloat(this.totaleCfpUr) +parseFloat(this.sommaCfpUrLavorazioni)).toFixed(3).toString();
      }

      if(this.sommaCfpUrAltreLavorazioni && this.sommaCfpUrAltreLavorazioni != 'Non Calcolabile') {
        this.totaleCfpUr = (parseFloat(this.totaleCfpUr) +parseFloat(this.sommaCfpUrAltreLavorazioni)).toFixed(3).toString();
      }

      if(this.sommaCfpUrPesticidi && this.sommaCfpUrPesticidi != 'Non Calcolabile') {
        this.totaleCfpUr = (parseFloat(this.totaleCfpUr) +parseFloat(this.sommaCfpUrPesticidi)).toFixed(3).toString();
      }

      if(this.sommaCfpUrFertilizzanti && this.sommaCfpUrFertilizzanti != 'Non Calcolabile') {
        this.totaleCfpUr = (parseFloat(this.totaleCfpUr) +parseFloat(this.sommaCfpUrFertilizzanti)).toFixed(3).toString();
      }

      if(this.sommaCfpUrResidui && this.sommaCfpUrResidui != 'Non Calcolabile') {
        this.totaleCfpUr = (parseFloat(this.totaleCfpUr) +parseFloat(this.sommaCfpUrResidui)).toFixed(3).toString();
      }

      if(this.sommaCfpUrEmissioniAltreAttivita && this.sommaCfpUrEmissioniAltreAttivita != 'Non Calcolabile') {
        this.totaleCfpUr = (parseFloat(this.totaleCfpUr) +parseFloat(this.sommaCfpUrEmissioniAltreAttivita)).toFixed(3).toString();
      }

      if (this.totaleCfpUr && this.totaleCfpUr != 'Non Calcolabile') {
        if (
          this.sommaCfpUrLavorazioni &&
          this.sommaCfpUrLavorazioni != 'Non Calcolabile'
        ) {
          this.percentualeCfpLavorazioni = (
            (100 * parseFloat(this.sommaCfpUrLavorazioni)) /
            parseFloat(this.totaleCfpUr)
          )
            .toFixed(2)
            .toString();
        } else {
          this.percentualeCfpLavorazioni = 'Non Calcolabile';
        }

        if (
          this.sommaCfpUrAltreLavorazioni &&
          this.sommaCfpUrAltreLavorazioni != 'Non Calcolabile'
        ) {
          this.percentualeCfpAltreLavorazioni = (
            (100 * parseFloat(this.sommaCfpUrAltreLavorazioni)) /
            parseFloat(this.totaleCfpUr)
          )
            .toFixed(2)
            .toString();
        } else {
          this.percentualeCfpAltreLavorazioni = 'Non Calcolabile';
        }

        if (
          this.sommaCfpUrPesticidi &&
          this.sommaCfpUrPesticidi != 'Non Calcolabile'
        ) {
          this.percentualeCfpPesticidi = (
            (100 * parseFloat(this.sommaCfpUrPesticidi)) /
            parseFloat(this.totaleCfpUr)
          )
            .toFixed(2)
            .toString();
        } else {
          this.percentualeCfpPesticidi = 'Non Calcolabile';
        }

        if (
          this.sommaCfpUrFertilizzanti &&
          this.sommaCfpUrFertilizzanti != 'Non Calcolabile'
        ) {
          this.percentualeCfpFertilizzanti = (
            (100 * parseFloat(this.sommaCfpUrFertilizzanti)) /
            parseFloat(this.totaleCfpUr)
          )
            .toFixed(2)
            .toString();
        } else {
          this.percentualeCfpFertilizzanti = 'Non Calcolabile';
        }

        if (
          this.sommaCfpUrResidui &&
          this.sommaCfpUrResidui != 'Non Calcolabile'
        ) {
          this.percentualeCfpResidui = (
            (100 * parseFloat(this.sommaCfpUrResidui)) /
            parseFloat(this.totaleCfpUr)
          )
            .toFixed(2)
            .toString();
        } else {
          this.percentualeCfpResidui = 'Non Calcolabile';
        }

        if (
          this.sommaCfpUrEmissioniAltreAttivita &&
          this.sommaCfpUrEmissioniAltreAttivita != 'Non Calcolabile'
        ) {
          this.percentualeCfpEmissioniAltreAttivita = (
            (100 * parseFloat(this.sommaCfpUrEmissioniAltreAttivita)) /
            parseFloat(this.totaleCfpUr)
          )
            .toFixed(2)
            .toString();
        } else {
          this.percentualeCfpEmissioniAltreAttivita = 'Non Calcolabile';
        }
      }

      if (
        this.misurazione.inputMisurazione.residuiColturali.residuiTotaliAlSuolo
      ) {
        this.pagliaAlSuoloKgEttaro =
          this.misurazione.inputMisurazione.residuiColturali.residuiTotaliAlSuolo
            .toFixed(3)
            .toString();
      } else {
        this.pagliaAlSuoloKgEttaro = 'Non Calcolabile';
      }

      if (
        this.misurazione.inputMisurazione.datiProduttivi
          .datiProduttiviCarbonFootPrint &&
        this.misurazione.inputMisurazione.datiProduttivi
          .datiProduttiviCarbonFootPrint.resaGranellaKgEttaro &&
        this.misurazione.inputMisurazione.datiProduttivi
          .datiProduttiviCarbonFootPrint.percentualeUmiditaGranella
      ) {
        this.resaGranellaSeccaKgEttaro = (
          this.misurazione.inputMisurazione.datiProduttivi
            .datiProduttiviCarbonFootPrint.resaGranellaKgEttaro *
          ((100 -
            this.misurazione.inputMisurazione.datiProduttivi
              .datiProduttiviCarbonFootPrint.percentualeUmiditaGranella) /
            100)
        )
          .toFixed(3)
          .toString();
      } else {
        this.resaGranellaSeccaKgEttaro = 'Non Calcolabile';
      }

      if (
        this.resaGranellaSeccaKgEttaro &&
        this.resaGranellaSeccaKgEttaro != 'Non Calcolabile'
      ) {
        this.proteineGranellaSeccaKgEttaro = (
          (parseFloat(this.resaGranellaSeccaKgEttaro) *
            this.misurazione.inputMisurazione.datiProduttivi
              .datiProduttiviCarbonFootPrint.percentualeUmiditaGranella) /
          100
        )
          .toFixed(3)
          .toString();
      } else {
        this.proteineGranellaSeccaKgEttaro = 'Non Calcolabile';
      }

      if (this.totaleCfpUr && this.totaleCfpUr != 'Non Calcolabile') {
        this.kgCo2Ettaro = this.totaleCfpUr;
      } else {
        this.kgCo2Ettaro = 'Non Calcolabile';
      }

      if (
        this.kgCo2Ettaro &&
        this.kgCo2Ettaro != 'Non Calcolabile' &&
        this.resaGranellaSeccaKgEttaro &&
        this.resaGranellaSeccaKgEttaro != 'Non Calcolabile'
      ) {
        this.kgCo2PerKgGranella = (
          parseFloat(this.kgCo2Ettaro) /
          parseFloat(this.resaGranellaSeccaKgEttaro)
        )
          .toFixed(3)
          .toString();
      } else {
        this.kgCo2PerKgGranella = 'Non Calcolabile';
      }

      if (
        this.kgCo2Ettaro &&
        this.kgCo2Ettaro != 'Non Calcolabile' &&
        this.proteineGranellaSeccaKgEttaro &&
        this.proteineGranellaSeccaKgEttaro != 'Non Calcolabile'
      ) {
        this.kgCo2PerKgProteina = (
          parseFloat(this.kgCo2Ettaro) /
          parseFloat(this.proteineGranellaSeccaKgEttaro)
        )
          .toFixed(3)
          .toString();
      } else {
        this.kgCo2PerKgProteina = 'Non Calcolabile';
      }

      if (
        this.kgCo2PerKgGranella &&
        this.kgCo2PerKgGranella != 'Non Calcolabile' &&
        this.misurazione.inputMisurazione.residuiColturali.bgtotNumber
      ) {
        this.kgCo2PerKgAllocazioneGranella = (
          parseFloat(this.kgCo2PerKgGranella) *
          (parseFloat(this.resaGranellaSeccaKgEttaro) /
            (parseFloat(
              this.misurazione.inputMisurazione.residuiColturali.bgtotNumber.toFixed(
                2
              )
            ) *
              1000))
        )
          .toFixed(3)
          .toString();
      } else {
        this.kgCo2PerKgProteina = 'Non Calcolabile';
      }

      if (
        this.misurazione.inputMisurazione.datiSuolo &&
        this.misurazione.inputMisurazione.datiSuolo.densitaApparente &&
        this.misurazione.inputMisurazione.datiSuolo.sostanzaOrganica &&
        this.misurazione.inputMisurazione.datiSuolo.profondita &&
        this.pagliaAlSuoloKgEttaro &&
        this.pagliaAlSuoloKgEttaro != 'Non Calcolabile'
      ) {
        this.asoc = (
          this.misurazioneService.getDatiCarbonio(
            this.misurazione.inputMisurazione.datiSuolo.densitaApparente,
            this.misurazione.inputMisurazione.datiSuolo.sostanzaOrganica,
            this.misurazione.inputMisurazione.datiSuolo.profondita,
            parseFloat(this.pagliaAlSuoloKgEttaro)
          ).co2SequenzaMedia50Anni * 1000
        )
          .toFixed(3)
          .toString();
      } else {
        this.asoc = 'Non Calcolabile';
      }

      if (
        this.kgCo2Ettaro &&
        this.kgCo2Ettaro != 'Non Calcolabile' &&
        this.misurazione.inputMisurazione.datiProduttivi
          .datiProduttiviCarbonFootPrint.resaGranellaKgEttaro
      ) {
        this.systemExspansion = (
          (parseFloat(this.kgCo2Ettaro) - parseFloat(this.asoc)) /
          this.misurazione.inputMisurazione.datiProduttivi
            .datiProduttiviCarbonFootPrint.resaGranellaKgEttaro
        )
          .toFixed(3)
          .toString();
      } else {
        this.systemExspansion = 'Non Calcolabile';
      }

      if( this.misurazione.outputMisurazione == undefined) {
        this.misurazione.outputMisurazione = new OutputMisurazione();
        }
        if( this.misurazione.outputMisurazione.outputCarbonFootPrint == undefined)  {
          this.misurazione.outputMisurazione.outputCarbonFootPrint = new OutputCarbonFootPrint();
        }

        this.misurazione.outputMisurazione.outputCarbonFootPrint.sommaCfpUrLavorazioni = this.sommaCfpUrLavorazioni;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.sommaCfpUrAltreLavorazioni = this.sommaCfpUrAltreLavorazioni;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.sommaCfpUrPesticidi = this.sommaCfpUrPesticidi;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.sommaCfpUrFertilizzanti = this.sommaCfpUrFertilizzanti;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.sommaCfpUrResidui = this.sommaCfpUrResidui;



        this.misurazione.outputMisurazione.outputCarbonFootPrint.sommaCfpUrEmissioniAltreAttivita = this.sommaCfpUrEmissioniAltreAttivita;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpLavorazioni = this.percentualeCfpLavorazioni;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpAltreLavorazioni = this.percentualeCfpAltreLavorazioni;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpPesticidi = this.percentualeCfpPesticidi;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpFertilizzanti = this.percentualeCfpFertilizzanti;


        this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpResidui = this.percentualeCfpResidui;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpEmissioniAltreAttivita = this.percentualeCfpEmissioniAltreAttivita;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.totaleCfpUr = this.totaleCfpUr;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.pagliaAlSuoloKgEttaro = this.pagliaAlSuoloKgEttaro;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.resaGranellaSeccaKgEttaro = this.resaGranellaSeccaKgEttaro;


        this.misurazione.outputMisurazione.outputCarbonFootPrint.proteineGranellaSeccaKgEttaro = this.proteineGranellaSeccaKgEttaro;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2Ettaro = this.kgCo2Ettaro;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2PerKgGranella = this.kgCo2PerKgGranella;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2PerKgProteina = this.kgCo2PerKgProteina;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2PerKgAllocazioneGranella = this.kgCo2PerKgAllocazioneGranella;

        this.misurazione.outputMisurazione.outputCarbonFootPrint.asoc = this.asoc;
        this.misurazione.outputMisurazione.outputCarbonFootPrint.systemExspansion = this.systemExspansion;

        this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
        this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione, this.misurazione);

        if(this.misurazione.outputMisurazione.outputCarbonFootPrint.systemExspansion&&
          this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2PerKgAllocazioneGranella&&
          this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2PerKgGranella&&
          this.misurazione.outputMisurazione.outputCarbonFootPrint.systemExspansion != 'Non Calcolabile'&&
          this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2PerKgAllocazioneGranella != 'Non Calcolabile'&&
          this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2PerKgGranella != 'Non Calcolabile'
          ) {
          this.isActiveGraph = true;
        }else{this.isActiveGraph = false;}

  }

  nextPage() {

    if(this.isSecondPage) {
      this.navCtrl.navigateForward('home-input');
    }
    this.isSecondPage = true;

  }

  backPage() {
    if (this.isSecondPage) {
      this.isSecondPage = false;
    } else {
      this.navCtrl.navigateForward('home-input');
    }
  }
  goToChartSystemExspansion() {
    this.navCtrl.navigateForward('carboon-footprint-line-chart').then(()=> {
      window.location.reload();
    })
  }
}
