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




      this.misurazione.inputMisurazione.datiProduttivi = this.datiProduttivi;
      this.misurazione.inputMisurazione.residuiColturali = residuiColturali;

      this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
      this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
      this.misurazioneService.updateMisurazione(
        this.misurazione.nomeMisurazione,
        this.misurazione
      );
    }
  }
}
