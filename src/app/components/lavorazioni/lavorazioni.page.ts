import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import {
  InputMisurazione,
  Misurazione,
  MisurazioneService,
  OperazioniColturali,
} from 'src/app/services/misurazione.service';
import { convertToPrintableDate } from 'src/app/services/timeUtils';

export class Lavorazione {
  id!: string;
  code!: string;
  name!: string;
  operazione!: string;
  numeroPassate!: number;
  kgCo2Ettaro!: string;
  m3BlueWaterEttaro!: string;
}

export class ForzaTrazione {
  caricoLavoro!: number;
  kmOra!: number;
  forzaTrazione!: number;
}

export class PotenzaUscita {
  caricoLavoro!: number;
  kmOra!: number;
  potenzaUscita!: number;
}

export class TipoLavorazione {
  name!: string;
  code!: string;
  kgCo2Ettaro!: number;
  m3BlueWaterEttaro!: number;
}

@Component({
  selector: 'app-lavorazioni',
  templateUrl: './lavorazioni.page.html',
  styleUrls: ['./lavorazioni.page.scss'],
})
export class LavorazioniPage {
  submitted: boolean = false;

  lavorazioni: Lavorazione[] = [];
  lavorazione!: Lavorazione;
  lavorazioniSelezionate: Lavorazione[] = [];

  dialogLavorazioni: boolean = false;
  tipiLavorazione: TipoLavorazione[] = [];
  selectedTipoLavorazione!: TipoLavorazione;
  selectedNumeroPassate!: number;
  formExtended: boolean = false;

  updating = false;
  listVelocita: any[] = [];
  listForzaLavoro: any[] = [];

  velocitaSelezionata!: any;
  caricoLavoroSelezionato!: any;
  nomeLavorazione!: string;
  oldNomeLavorazione!: string;

  enable = false;
  misurazione!: Misurazione;
  tipiLavorazioneCheck: TipoLavorazione[] = [];
  tipiLavorazioneCheckWithoutAltreLavorazioni: TipoLavorazione[] = [];

  @ViewChild('dt') dt: Table | undefined;
  constructor(private misurazioneService: MisurazioneService) {
    this.tipiLavorazione = [
      {
        name: 'Aratura',
        code: 'Aratura',
        kgCo2Ettaro: 121.0,
        m3BlueWaterEttaro: 294.88,
      },
      {
        name: 'Frangizollatura',
        code: 'Frangizollatura',
        kgCo2Ettaro: 80.7,
        m3BlueWaterEttaro: 125.01,
      },
      {
        name: 'Fresatura',
        code: 'Fresatura',
        kgCo2Ettaro: 80.5,
        m3BlueWaterEttaro: 335.0,
      },
      {
        name: 'Ripuntatura',
        code: 'Ripuntatura',
        kgCo2Ettaro: 79.7,
        m3BlueWaterEttaro: 94.57,
      },
      {
        name: 'Rullatura',
        code: 'Rullatura',
        kgCo2Ettaro: 26.4,
        m3BlueWaterEttaro: 165.3,
      },
      {
        name: 'ErpicaturaRotante',
        code: 'ErpicaturaRotante',
        kgCo2Ettaro: 67.5,
        m3BlueWaterEttaro: 292.0,
      },
      {
        name: 'Erpicatura',
        code: 'Erpicatura',
        kgCo2Ettaro: 72.9,
        m3BlueWaterEttaro: 187.0,
      },
      {
        name: 'ErpicaturaAMolle',
        code: 'ErpicaturaAMolle',
        kgCo2Ettaro: 25.7,
        m3BlueWaterEttaro: 109.0,
      },
    ];
    this.tipiLavorazione.sort((a, b) => a.name.localeCompare(b.name));

    this.tipiLavorazioneCheck = [
      {
        name: 'Aratura',
        code: 'Aratura',
        kgCo2Ettaro: 121.0,
        m3BlueWaterEttaro: 294.88,
      },
      {
        name: 'Frangizollatura',
        code: 'Frangizollatura',
        kgCo2Ettaro: 80.7,
        m3BlueWaterEttaro: 125.01,
      },
      {
        name: 'Fresatura',
        code: 'Fresatura',
        kgCo2Ettaro: 80.5,
        m3BlueWaterEttaro: 335.0,
      },
      {
        name: 'Ripuntatura',
        code: 'Ripuntatura',
        kgCo2Ettaro: 79.7,
        m3BlueWaterEttaro: 94.57,
      },
      {
        name: 'Rullatura',
        code: 'Rullatura',
        kgCo2Ettaro: 26.4,
        m3BlueWaterEttaro: 165.3,
      },
      {
        name: 'ErpicaturaRotante',
        code: 'ErpicaturaRotante',
        kgCo2Ettaro: 67.5,
        m3BlueWaterEttaro: 292.0,
      },
      {
        name: 'Erpicatura',
        code: 'Erpicatura',
        kgCo2Ettaro: 72.9,
        m3BlueWaterEttaro: 187.0,
      },
      {
        name: 'ErpicaturaAMolle',
        code: 'ErpicaturaAMolle',
        kgCo2Ettaro: 25.7,
        m3BlueWaterEttaro: 109.0,
      },
    ];
    this.tipiLavorazioneCheck.sort((a, b) => a.name.localeCompare(b.name));

    this.listVelocita = [
      { name: '4 Km/h', code: 4 },
      { name: '7.5 Km/h', code: 7.5 },
      { name: '10 Km/h', code: 10 },
      { name: '13 Km/h', code: 13 },
    ];
    this.listForzaLavoro = [
      { name: '80%', code: 80 },
      { name: '75%', code: 75 },
      { name: '70%', code: 70 },
      { name: '60%', code: 60 },
      { name: '50%', code: 50 },
      { name: '40%', code: 50 },
      { name: '30%', code: 50 },
    ];

    this.misurazione = this.misurazioneService.getMisurazioneLocalStorage()!;

    if (
      this.misurazione &&
      this.misurazione.inputMisurazione &&
      this.misurazione.inputMisurazione.operazioniColturali.lavorazioni
    ) {
      if (
        this.misurazione.inputMisurazione.operazioniColturali.lavorazioni ==
        undefined
      ) {
        this.misurazione.inputMisurazione.operazioniColturali.lavorazioni = [];
        this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
        this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
        this.misurazioneService.updateMisurazione(
          this.misurazione.nomeMisurazione,
          this.misurazione
        );
      } else {
        this.lavorazioni =
          this.misurazione.inputMisurazione.operazioniColturali.lavorazioni;
        this.tipiLavorazione = this.tipiLavorazione.filter(
          (tipoLavorazione) =>
            !this.lavorazioni
              .map((x) => x.operazione)
              .includes(tipoLavorazione.name)
        );
      }
    }
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  apriModale() {
    this.enable = false;
    this.selectedNumeroPassate = 1;
    this.nomeLavorazione = '';
    this.oldNomeLavorazione = '';
    this.velocitaSelezionata = undefined;

    this.selectedTipoLavorazione = new TipoLavorazione();
    this.caricoLavoroSelezionato = undefined;
    this.updating = false;

    if (this.tipiLavorazione.length > 0) {
      this.dialogLavorazioni = true;
    }
    this.selectedNumeroPassate = 1;
  }

  aggiornaLavorazione(lavorazione: Lavorazione) {
    this.updating = true;
    this.selectedNumeroPassate = lavorazione.numeroPassate;
    this.nomeLavorazione = lavorazione.operazione;
    this.oldNomeLavorazione = lavorazione.operazione;

    if (
      this.selectedTipoLavorazione == undefined ||
      this.selectedTipoLavorazione.name !== lavorazione.operazione
    ) {
      this.selectedTipoLavorazione = this.tipiLavorazioneCheck.find(
        (tipoLavorazione) => tipoLavorazione.name == lavorazione.operazione
      )!;
    }

    this.tipiLavorazione.sort((a, b) => a.name.localeCompare(b.name));
    //@ts-ignore
    this.dt.totalRecords = this.lavorazioni.length;
    if (
      this.tipiLavorazioneCheck.find(
        (tipoLavorazione) => tipoLavorazione.name == this.nomeLavorazione
      )
    ) {
      this.enable = true;
    } else {
      this.enable = false;
    }

    this.dialogLavorazioni = true;
  }

  eliminaLavorazione(lavorazione: Lavorazione) {
    this.lavorazioni = this.lavorazioni.filter(
      (lavorazioneRes) => lavorazioneRes.operazione != lavorazione.operazione
    );



    this.misurazione.inputMisurazione.operazioniColturali.lavorazioni =
      this.lavorazioni;
      this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
    this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
    this.misurazioneService.updateMisurazione(
      this.misurazione.nomeMisurazione,
      this.misurazione
    );

    if (
      !this.tipiLavorazione.find(
        (tipoLavorazioneRes) =>
          tipoLavorazioneRes.name == lavorazione.operazione
      ) &&
      this.tipiLavorazioneCheck
        .map((x) => x.name)
        .includes(lavorazione.operazione)
    ) {
      this.tipiLavorazione.push({
        name: lavorazione.operazione,
        code: lavorazione.operazione,
        m3BlueWaterEttaro:
          parseFloat(lavorazione.m3BlueWaterEttaro) / lavorazione.numeroPassate,
        kgCo2Ettaro:
          parseFloat(lavorazione.kgCo2Ettaro) / lavorazione.numeroPassate,
      });
      this.tipiLavorazione.sort((a, b) => a.name.localeCompare(b.name));
    }
    //@ts-ignore
    this.selectedTipoLavorazione = undefined;

    this.nomeLavorazione = '';
    this.velocitaSelezionata = undefined;
    this.caricoLavoroSelezionato = undefined;

    //@ts-ignore
    this.dt.totalRecords = this.lavorazioni.length;
  }

  chiudiDialogLavorazione() {
    this.dialogLavorazioni = false;

    this.lavorazioni
      .filter((lavorazione) => lavorazione.name !== 'AltreLavorazioni')
      .forEach((lavorazioneRes) => {
        let tipoLavorazione = this.tipiLavorazione.find(
          (tipoLavorazioneRes) =>
            tipoLavorazioneRes.name == lavorazioneRes.operazione
        );
        if (tipoLavorazione) {
          this.tipiLavorazione = this.tipiLavorazione.filter(
            (tipoLavorazioneRes) =>
              tipoLavorazioneRes.name !== tipoLavorazione?.name
          );
        }
      });
  }

  salvaLavorazione() {
    if (
      this.lavorazioni.find(
        (lavorazioneRes) =>
          lavorazioneRes.operazione == this.selectedTipoLavorazione.name
      )
    ) {
      this.lavorazioni = this.lavorazioni.filter(
        (lavorazioneRes) =>
          lavorazioneRes.operazione !== this.selectedTipoLavorazione.name
      );
    }

    //@ts-ignore
    this.lavorazione = {};
    this.lavorazione.numeroPassate = this.selectedNumeroPassate;

    this.lavorazione.kgCo2Ettaro = (
      this.selectedTipoLavorazione.kgCo2Ettaro! * this.selectedNumeroPassate
    )
      .toFixed(3)
      .toString();
    this.lavorazione.m3BlueWaterEttaro = (
      this.selectedTipoLavorazione.m3BlueWaterEttaro *
      this.selectedNumeroPassate
    )
      .toFixed(3)
      .toString();

    this.lavorazione.operazione = this.selectedTipoLavorazione.name;

    this.lavorazioni = this.lavorazioni.filter(
      (lavorazioni) => lavorazioni.operazione !== this.lavorazione.operazione
    );
    this.tipiLavorazione = this.tipiLavorazione.filter(
      (tipoLavorazione) => tipoLavorazione.name !== this.lavorazione.operazione
    );

    this.lavorazioni.push(this.lavorazione);

    this.misurazione.inputMisurazione.operazioniColturali.lavorazioni =
      this.lavorazioni;
      this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
    this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
    this.misurazioneService.updateMisurazione(
      this.misurazione.nomeMisurazione,
      this.misurazione
    );

    this.tipiLavorazione = this.tipiLavorazione.filter(
      (tipoLavorazione) => tipoLavorazione.name != this.lavorazione.operazione
    );
    this.dialogLavorazioni = false;
    //@ts-ignore
    this.dt.totalRecords = this.lavorazioni.length;
  }
}
