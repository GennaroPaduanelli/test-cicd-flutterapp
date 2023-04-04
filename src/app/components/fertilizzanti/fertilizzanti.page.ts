import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import {
  Misurazione,
  MisurazioneService,
} from 'src/app/services/misurazione.service';
import { convertToPrintableDate } from 'src/app/services/timeUtils';

export interface Fertilizzante {
  id?: string;
  code?: string;
  name?: string;
  nomeFertilizzante: string;
  numeroPassate: number;
  quantitaKgEttaro: number;

  percentualeAzoto: number;
  co2Ettaro: string;
  m3BlueWaterEttaro: string;
}

interface TipoFertilizzante {
  name: string;
  code: string;
  co2Ettaro: number;
  operandiCalcoloCo2: OperandiCalcoloCo2;
  operandiCalcoloWater: OperandiCalcoloWater;
}

interface OperandiCalcoloCo2 {
  n1: number;
  n2: number;
  n3: number;
  n4: number;
}

interface OperandiCalcoloWater {
  n1: number;
  n2: number;
}

@Component({
  selector: 'app-fertilizzanti',
  templateUrl: './fertilizzanti.page.html',
  styleUrls: ['./fertilizzanti.page.scss'],
})
export class FertilizzantiPage {
  fertilizzanti: Fertilizzante[] = [];
  fertilizzante!: Fertilizzante;
  fertilizzantiSelezionati: Fertilizzante[] = [];

  dialogFertilizzantiVisible: boolean = false;
  tipiFertilizzante: TipoFertilizzante[] = [];
  tipiFertilizzanteCheck: TipoFertilizzante[] = [];

  selectedTipoFertilizzante!: TipoFertilizzante;
  selectedNumeroPassate!: number;
  selecteQuantitaKgEttaro!: number;
  selectedPercentualeAzoto!: number;
  misurazione!: Misurazione;

  updating = false;

  @ViewChild('dt') dt: Table | undefined;
  constructor(private misurazioneService: MisurazioneService) {
    this.tipiFertilizzante = [
      {
        name: 'NitratoDiAmmonio',
        code: 'NitratoDiAmmonio',
        co2Ettaro: 201.26,
        operandiCalcoloCo2: { n1: 26.1, n2: 2.49, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.07 },
      },
      {
        name: 'Urea',
        code: 'Urea',
        co2Ettaro: 126.084,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.611, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.121 },
      },
      {
        name: 'SolfatoDiAmmonio',
        code: 'SolfatoDiAmmonio',
        co2Ettaro: 86.69,
        operandiCalcoloCo2: { n1: 26.1, n2: 2.49, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.04 },
      },
      {
        name: 'CalcioAmmonioNitrato',
        code: 'CalcioAmmonioNitrato',
        co2Ettaro: 294.07,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.586, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.05 },
      },
      {
        name: 'LiquameBovino',
        code: 'LiquameBovino',
        co2Ettaro: 62.676,
        operandiCalcoloCo2: { n1: 26.1, n2: 1.89, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.04 },
      },
      {
        name: 'LetameBovino',
        code: 'LetameBovino',
        co2Ettaro: 70.076,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.033, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.09 },
      },
      {
        name: 'PollinaFresca',
        code: 'PollinaFresca',
        co2Ettaro: 260.41,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.0404, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.19 },
      },
      {
        name: 'PollinaEssiccata',
        code: 'PollinaEssiccata',
        co2Ettaro: 654.872,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.565, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 1.61 },
      },
      {
        name: 'LetameSuinoLiquido',
        code: 'LetameSuinoLiquido',
        co2Ettaro: 61.356,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.0287, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.03 },
      },
      {
        name: 'Compost',
        code: 'Compost',
        co2Ettaro: 175.96,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.129, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.19 },
      },
    ];

    this.tipiFertilizzanteCheck = [
      {
        name: 'NitratoDiAmmonio',
        code: 'NitratoDiAmmonio',
        co2Ettaro: 201.26,
        operandiCalcoloCo2: { n1: 26.1, n2: 2.49, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.07 },
      },
      {
        name: 'Urea',
        code: 'Urea',
        co2Ettaro: 126.084,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.611, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.121 },
      },
      {
        name: 'SolfatoDiAmmonio',
        code: 'SolfatoDiAmmonio',
        co2Ettaro: 86.69,
        operandiCalcoloCo2: { n1: 26.1, n2: 2.49, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.04 },
      },
      {
        name: 'CalcioAmmonioNitrato',
        code: 'CalcioAmmonioNitrato',
        co2Ettaro: 294.07,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.586, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.05 },
      },
      {
        name: 'LiquameBovino',
        code: 'LiquameBovino',
        co2Ettaro: 62.676,
        operandiCalcoloCo2: { n1: 26.1, n2: 1.89, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.04 },
      },
      {
        name: 'LetameBovino',
        code: 'LetameBovino',
        co2Ettaro: 70.076,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.033, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.09 },
      },
      {
        name: 'PollinaFresca',
        code: 'PollinaFresca',
        co2Ettaro: 260.41,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.0404, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.19 },
      },
      {
        name: 'PollinaEssiccata',
        code: 'PollinaEssiccata',
        co2Ettaro: 654.872,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.565, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 1.61 },
      },
      {
        name: 'LetameSuinoLiquido',
        code: 'LetameSuinoLiquido',
        co2Ettaro: 61.356,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.0287, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.03 },
      },
      {
        name: 'Compost',
        code: 'Compost',
        co2Ettaro: 175.96,
        operandiCalcoloCo2: { n1: 26.1, n2: 0.129, n3: 0.01, n4: 298 },
        operandiCalcoloWater: { n1: 66.09, n2: 0.19 },
      },
    ];

    this.tipiFertilizzante.sort((a, b) => a.name.localeCompare(b.name));

    this.misurazione = misurazioneService.getMisurazioneLocalStorage()!;

    if (this.misurazione) {
      if (
        this.misurazione.inputMisurazione.operazioniColturali.fertilizzanti ==
        undefined
      ) {
        this.misurazione.inputMisurazione.operazioniColturali.fertilizzanti =
          [];
          this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
        this.misurazioneService.updateMisurazione(
          this.misurazione.nomeMisurazione,
          this.misurazione
        );
        this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
      } else {
        this.fertilizzanti =
          this.misurazione.inputMisurazione.operazioniColturali.fertilizzanti;
        this.tipiFertilizzante = this.tipiFertilizzante.filter(
          (tipoFertilizzante) =>
            !this.fertilizzanti
              .map((x) => x.nomeFertilizzante)
              .includes(tipoFertilizzante.name)
        );
      }
    }
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  apriModale() {
    this.updating = false;
    if (this.tipiFertilizzante.length > 0) {
      this.dialogFertilizzantiVisible = true;
    }
    this.selectedNumeroPassate = 1;
    //@ts-ignore
    this.selecteQuantitaKgEttaro = undefined;
    //@ts-ignore
    this.selectedPercentualeAzoto = undefined;
    //@ts-ignore
    this.selectedPercentualePrincipioAttivo = undefined;
  }

  aggiornaFertilizzante(fertilizzante: Fertilizzante) {
    this.updating = true;
    this.dialogFertilizzantiVisible = true;
    this.selectedNumeroPassate = fertilizzante.numeroPassate;
    this.selecteQuantitaKgEttaro = fertilizzante.quantitaKgEttaro!;
    this.selectedPercentualeAzoto = fertilizzante.percentualeAzoto;

    //@ts-ignore
    this.selectedTipoFertilizzante = {
      name: fertilizzante.nomeFertilizzante,
      code: fertilizzante.nomeFertilizzante,
      co2Ettaro:
        parseFloat(fertilizzante.co2Ettaro) / fertilizzante.numeroPassate,
    };
    if (
      !this.tipiFertilizzante.find(
        (tipoFertilizzanteRes) =>
          tipoFertilizzanteRes.name == fertilizzante.nomeFertilizzante
      )
    ) {
      this.tipiFertilizzante.push(this.selectedTipoFertilizzante);
      this.tipiFertilizzante.sort((a, b) => a.name.localeCompare(b.name));
      //@ts-ignore
      this.dt.totalRecords = this.fertilizzanti.length;



    }
  }
  eliminaFertilizzante(fertilizzante: Fertilizzante) {
    this.fertilizzanti = this.fertilizzanti.filter(
      (lavorazioneRes) =>
        lavorazioneRes.nomeFertilizzante != fertilizzante.nomeFertilizzante
    );

    if (
      !this.tipiFertilizzante.find(
        (tipoLavorazioneRes) =>
          tipoLavorazioneRes.name == fertilizzante.nomeFertilizzante
      )
    ) {
      this.tipiFertilizzante.push(this.tipiFertilizzanteCheck.find(tipoFertilizzanteCheck => tipoFertilizzanteCheck.name == fertilizzante.nomeFertilizzante)!);
      this.tipiFertilizzante.sort((a, b) => a.name.localeCompare(b.name));
    }
    //@ts-ignore
    this.selectedTipoFertilizzante = undefined;
    //@ts-ignore
    this.dt.totalRecords = this.fertilizzanti.length;

    this.misurazione.inputMisurazione.operazioniColturali.fertilizzanti =
      this.fertilizzanti;
      this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
    this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
    this.misurazioneService.updateMisurazione(
      this.misurazione.nomeMisurazione,
      this.misurazione
    );
  }

  chiudiDialogFertilizzante() {
    this.dialogFertilizzantiVisible = false;

    this.fertilizzanti.forEach((lavorazioneRes) => {
      let tipoLavorazione = this.tipiFertilizzante.find(
        (tipoLavorazioneRes) =>
          tipoLavorazioneRes.name == lavorazioneRes.nomeFertilizzante
      );
      if (tipoLavorazione) {
        this.tipiFertilizzante = this.tipiFertilizzante.filter(
          (tipoLavorazioneRes) =>
            tipoLavorazioneRes.name !== tipoLavorazione?.name
        );
      }
    });
  }

  salvaFertilizzante() {
    if (
      this.selectedNumeroPassate &&
      this.selecteQuantitaKgEttaro &&
      this.selectedPercentualeAzoto
    ) {
      if (
        this.fertilizzanti.find(
          (lavorazioneRes) =>
            lavorazioneRes.nomeFertilizzante ==
            this.selectedTipoFertilizzante.name
        )
      ) {
        this.fertilizzanti = this.fertilizzanti.filter(
          (lavorazioneRes) =>
            lavorazioneRes.nomeFertilizzante !==
            this.selectedTipoFertilizzante.name
        );
      }

      //@ts-ignore
      this.fertilizzante = {};
      this.fertilizzante.numeroPassate = this.selectedNumeroPassate;
      this.fertilizzante.quantitaKgEttaro = this.selecteQuantitaKgEttaro;

      this.fertilizzante.percentualeAzoto = this.selectedPercentualeAzoto;

      let co2Result = (this.selectedTipoFertilizzante.operandiCalcoloCo2.n1*this.selectedNumeroPassate)+(this.selecteQuantitaKgEttaro*this.selectedTipoFertilizzante.operandiCalcoloCo2.n2)+
      ((this.selectedTipoFertilizzante.operandiCalcoloCo2.n3* (this.selectedPercentualeAzoto*this.selecteQuantitaKgEttaro)/100)*this.selectedTipoFertilizzante.operandiCalcoloCo2.n4);
      let waterResult = (this.selectedTipoFertilizzante.operandiCalcoloWater.n1 * this.selectedNumeroPassate)+(this.selectedTipoFertilizzante.operandiCalcoloWater.n2 * this.selecteQuantitaKgEttaro);

      this.fertilizzante.co2Ettaro = co2Result.toFixed(3).toString();
      this.fertilizzante.m3BlueWaterEttaro = waterResult.toFixed(3).toString();
      this.fertilizzante.nomeFertilizzante =
        this.selectedTipoFertilizzante.name;
      this.fertilizzanti.push(this.fertilizzante);
      this.tipiFertilizzante = this.tipiFertilizzante.filter(
        (tipoLavorazione) =>
          tipoLavorazione.name != this.fertilizzante.nomeFertilizzante
      );
      //@ts-ignore
      this.dt.totalRecords = this.fertilizzanti.length;
      this.dialogFertilizzantiVisible = false;

      this.misurazione.inputMisurazione.operazioniColturali.fertilizzanti =
        this.fertilizzanti;
        this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
      this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
      this.misurazioneService.updateMisurazione(
        this.misurazione.nomeMisurazione,
        this.misurazione
      );
    }
  }
}
