import { Component, OnInit } from '@angular/core';
import {
  Misurazione,
  MisurazioneService,
  ResiduiColturali,
} from 'src/app/services/misurazione.service';

@Component({
  selector: 'app-dati-produttivi',
  templateUrl: './dati-produttivi.page.html',
  styleUrls: ['./dati-produttivi.page.scss'],
})
export class DatiProduttiviPage implements OnInit {
  isWaterFootPrint: boolean = false;
  //@ts-ignore
  datiProduttivi: DatiProduttivi = {
    datiProduttiviWaterFootPrint: {},
    datiProduttiviCarbonFootPrint: {},
  };

  misurazione!: Misurazione;



  constructor(

    private misurazioneService: MisurazioneService
  ) {
    this.misurazione = this.misurazioneService.getMisurazioneLocalStorage()!;

    if (
      this.misurazione != undefined &&
      this.misurazione.inputMisurazione.datiProduttivi != undefined
    ) {
      if (
        this.misurazione.inputMisurazione.datiProduttivi
          .datiProduttiviCarbonFootPrint &&
        !isNaN(
          this.misurazione.inputMisurazione.datiProduttivi
            .datiProduttiviCarbonFootPrint.resaGranellaKgEttaro
        ) &&
        !isNaN(
          this.misurazione.inputMisurazione.datiProduttivi
            .datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro
        ) &&
        !isNaN(
          this.misurazione.inputMisurazione.datiProduttivi
            .datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro
        ) &&
        !isNaN(
          this.misurazione.inputMisurazione.datiProduttivi
            .datiProduttiviCarbonFootPrint.percentualeUmiditaGranella
        ) &&
        !isNaN(
          this.misurazione.inputMisurazione.datiProduttivi
            .datiProduttiviCarbonFootPrint.percentualeProteineGranella
        )
      ) {
        this.datiProduttivi.datiProduttiviCarbonFootPrint =
          this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint;
      }

      if (
        this.misurazione.inputMisurazione.datiProduttivi
          .datiProduttiviWaterFootPrint &&
        !isNaN(
          this.misurazione.inputMisurazione.datiProduttivi
            .datiProduttiviWaterFootPrint.resaGranellaKgEttaro
        ) &&
        !isNaN(
          this.misurazione.inputMisurazione.datiProduttivi
            .datiProduttiviWaterFootPrint.pagliaAsportataKgEttaro
        ) &&
        !isNaN(
          this.misurazione.inputMisurazione.datiProduttivi
            .datiProduttiviWaterFootPrint.percentualeUmiditaGranella
        ) &&
        !isNaN(
          this.misurazione.inputMisurazione.datiProduttivi
            .datiProduttiviWaterFootPrint.percentualeProteineGranella
        ) &&
        !isNaN(
          this.misurazione.inputMisurazione.datiProduttivi
            .datiProduttiviWaterFootPrint.resaGranellaSeccaKgEttaro
        ) &&
        !isNaN(
          this.misurazione.inputMisurazione.datiProduttivi
            .datiProduttiviWaterFootPrint.proteineGranellaKgEttaro
        )
      ) {
        this.datiProduttivi.datiProduttiviWaterFootPrint =
          this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviWaterFootPrint;
      }

      this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro =  this.misurazione.inputMisurazione.residuiColturali.agDmtNumberKgAnno;

    }
  }

  ngOnInit() {}

  onBackCarboonFootPrint() {
    if (
      this.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro &&
      this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella &&
      this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro
    ) {
      let residuiColturali: ResiduiColturali = new ResiduiColturali(
        this.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro,
        this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella,
        this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro
      );


      if(this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro == null) {
        this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro  = residuiColturali.agDmtNumberKgAnno;
      }






      let resultUpdating = false;

      if(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro !=  this.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro) {
        this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro  = this.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro;
        resultUpdating = true;
      }else {
        resultUpdating = false;
      }

      if(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro !=  this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro) {
        this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro  = this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro;
        resultUpdating = true;
      }else {
        resultUpdating = false;
      }

      if(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro !=  this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro) {
        this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro  = this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro;
        resultUpdating = true;
      }else {
        resultUpdating = false;
      }

      if(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella !=  this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella) {
        this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella  = this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella;
        resultUpdating = true;
      }else {
        resultUpdating = false;
      }

      if(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeProteineGranella !=  this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeProteineGranella) {
        this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeProteineGranella  = this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeProteineGranella;
        resultUpdating = true;
      }else {
        resultUpdating = false;
      }

      this.misurazione.inputMisurazione.residuiColturali = residuiColturali;

      if(resultUpdating) {
        this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
      }


      this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
      this.misurazioneService.updateMisurazione(
        this.misurazione.nomeMisurazione,
        this.misurazione
      );
    }
  }
  onChangeResaGranellaKgEttaro(event) {
    this.updatePagliaProdotta();
  }
  onChangePercentualeUmiditaGranella(event) {
    this.updatePagliaProdotta();
  }
  onChangePagliaAsportataKgEttaro(event) {

    this.updatePagliaProdotta();
  }

  updatePagliaProdotta() {
    if(this.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro != null
      && this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella != null
      && this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro != null
      ) {
        let residuiColturali: ResiduiColturali = new ResiduiColturali(
          this.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro,
          this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella,
          this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro
        );
        this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro = residuiColturali.agDmtNumberKgAnno;
    }
  }
}

