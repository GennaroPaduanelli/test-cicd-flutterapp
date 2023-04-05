import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { InputMisurazione, Misurazione, MisurazioneService } from 'src/app/services/misurazione.service';
import { convertToPrintableDate } from 'src/app/services/timeUtils';

export class EmissioneAltreAttivita {
  id!: string;
  code!: string;
  name!: string;
  operazione!: string;
  numeroPassate!: number;
  kgCo2Ettaro!: string;
  m3BlueWaterEttaro!:string;
  velocita!:string;
  caricoLavoro!:string;
  stimaConsumiDiesel!: StimaConsumiDiesel;
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

export class StimaConsumiDiesel {
  velocita!: any;
  caricoLavoro!: any;
  operazione!: string;

  potenzaUscita!: PotenzaUscita;
  consumoCarburanteKgOra!: number;
  emissioniCo2Ettaro!: number;
  totaleKgCo2Ettaro!: number;
  metriCubiWfpEttaro!: number;

  constructor(velocità: any, caricoLavoro: any) {
    this.velocita = velocità;
    this.caricoLavoro = caricoLavoro;
    this.potenzaUscita = this.tabelllaPotenzaUscita.find(
      (potenzaUscitaRes) =>
        potenzaUscitaRes.caricoLavoro == this.caricoLavoro.code &&
        potenzaUscitaRes.kmOra == this.velocita.code
    )!;

    this.consumoCarburanteKgOra =
      2.3592 +
      0.2341 * this.potenzaUscita.potenzaUscita +
      0.0901 * this.potenzaUscita.kmOra;

    this.emissioniCo2Ettaro = this.consumoCarburanteKgOra * 4.04;

    this.totaleKgCo2Ettaro = this.emissioniCo2Ettaro + 13.9 + 13.2 + 2.39;

    this.metriCubiWfpEttaro = this.consumoCarburanteKgOra * 9.36;


  }

  tabelllaPotenzaUscita: PotenzaUscita[] = [
    { caricoLavoro: 80, kmOra: 4, potenzaUscita: 87.696 },
    { caricoLavoro: 80, kmOra: 7.5, potenzaUscita: 112.35 },
    { caricoLavoro: 80, kmOra: 10, potenzaUscita: 113.4 },
    { caricoLavoro: 80, kmOra: 13, potenzaUscita: 108.472 },

    { caricoLavoro: 75, kmOra: 4, potenzaUscita: 82.208 },
    { caricoLavoro: 75, kmOra: 7.5, potenzaUscita: 105.42 },
    { caricoLavoro: 75, kmOra: 10, potenzaUscita: 106.12 },
    { caricoLavoro: 75, kmOra: 13, potenzaUscita: 101.92 },

    { caricoLavoro: 70, kmOra: 4, potenzaUscita: 76.72 },
    { caricoLavoro: 70, kmOra: 7.5, potenzaUscita: 98.28 },
    { caricoLavoro: 70, kmOra: 10, potenzaUscita: 99.12 },
    { caricoLavoro: 70, kmOra: 13, potenzaUscita: 95.004 },

    { caricoLavoro: 60, kmOra: 4, potenzaUscita: 65.744 },
    { caricoLavoro: 60, kmOra: 7.5, potenzaUscita: 84.21 },
    { caricoLavoro: 60, kmOra: 10, potenzaUscita: 84.84 },
    { caricoLavoro: 60, kmOra: 13, potenzaUscita: 81.536 },

    { caricoLavoro: 50, kmOra: 4, potenzaUscita: 54.768 },
    { caricoLavoro: 50, kmOra: 7.5, potenzaUscita: 70.35 },
    { caricoLavoro: 50, kmOra: 10, potenzaUscita: 70.84 },
    { caricoLavoro: 50, kmOra: 13, potenzaUscita: 67.704 },

    { caricoLavoro: 40, kmOra: 4, potenzaUscita: 43.904 },
    { caricoLavoro: 40, kmOra: 7.5, potenzaUscita: 56.28 },
    { caricoLavoro: 40, kmOra: 10, potenzaUscita: 56.56 },
    { caricoLavoro: 40, kmOra: 13, potenzaUscita: 54.236 },

    { caricoLavoro: 30, kmOra: 4, potenzaUscita: 32.928 },
    { caricoLavoro: 30, kmOra: 7.5, potenzaUscita: 42.21 },
    { caricoLavoro: 30, kmOra: 10, potenzaUscita: 42.28 },
    { caricoLavoro: 30, kmOra: 13, potenzaUscita: 40.768 },
  ];

  getEmissioneAltreAttivita(numeroPassate: number, operazione: string): EmissioneAltreAttivita {
    let emissioneAltraAttivita: EmissioneAltreAttivita = new EmissioneAltreAttivita();
    emissioneAltraAttivita.stimaConsumiDiesel = this;
    emissioneAltraAttivita.caricoLavoro = this.caricoLavoro.name;
   emissioneAltraAttivita.velocita = this.velocita.name;
    emissioneAltraAttivita.operazione = operazione;

    emissioneAltraAttivita.numeroPassate = numeroPassate;

    emissioneAltraAttivita.kgCo2Ettaro = (this.totaleKgCo2Ettaro * numeroPassate)
      .toFixed(3)
      .toString();


    emissioneAltraAttivita.m3BlueWaterEttaro = (this.metriCubiWfpEttaro * numeroPassate)
    .toFixed(3)
    .toString();
    return emissioneAltraAttivita;
  }
}

export class TipoEmissioneAltreAttivita {
  name!: string;
  code!: string;
  kgCo2Ettaro!: number;
}

@Component({
  selector: 'emissioni-altre-attivita',
  templateUrl: './emissioniAltreAttivita.page.html',
  styleUrls: ['./emissioniAltreAttivita.page.scss'],
})
export class EmissioniAltreAttivitaPage {
  submitted: boolean = false;

  emissioniAltreAttivita: EmissioneAltreAttivita[] = [];
  emissioneAltraAttivita!: EmissioneAltreAttivita;
  emissioniAltreAttiviaSelezionate: EmissioneAltreAttivita[] = [];

  dialogEmissioniAltreAttivita: boolean = false;
  tipiEmissioneAltreAttivita: TipoEmissioneAltreAttivita[] = [];
  selectedTipoEmissioneAltreAttivita!: TipoEmissioneAltreAttivita;
  selectedNumeroPassate!: number;
  formExtended: boolean = false;

  updating = false;
  listVelocita: any[] = [];
  listForzaLavoro: any[] = [];

  velocitaSelezionata!: any;
  caricoLavoroSelezionato!: any;
  nomeEmissioneAltraAttivita!: string;
  oldNomeEmissioneAltraAttivita!: string;

  enable = false;
  misurazione!:Misurazione;
  tipiLavorazioneCheck: TipoEmissioneAltreAttivita[] = [];
  tipiLavorazioneCheckWithoutAltreLavorazioni: TipoEmissioneAltreAttivita[] = [];

  @ViewChild('dt') dt: Table | undefined;
  constructor(private misurazioneService: MisurazioneService) {


    this.tipiEmissioneAltreAttivita = [
      { name: 'AltreLavorazioni', code: 'AltreLavorazioni', kgCo2Ettaro: 0.0 }

    ];
    this.tipiEmissioneAltreAttivita.sort((a, b) => a.name.localeCompare(b.name));

    this.tipiLavorazioneCheck = [
      { name: 'AltreLavorazioni', code: 'AltreLavorazioni', kgCo2Ettaro: 0.0 }

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



    if(this.misurazione && this.misurazione.inputMisurazione && this.misurazione.inputMisurazione.operazioniColturali.emissioniAltreAttivita) {
    if(this.misurazione.inputMisurazione.operazioniColturali.emissioniAltreAttivita == undefined) {
      this.misurazione.inputMisurazione.operazioniColturali.emissioniAltreAttivita = [];
      this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
      this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
      this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione,this.misurazione);
    }else {
      this.emissioniAltreAttivita = this.misurazione.inputMisurazione.operazioniColturali.emissioniAltreAttivita;
      this.tipiEmissioneAltreAttivita = this.tipiEmissioneAltreAttivita.filter(tipoEmissioneAltraAttivita =>  !this.emissioniAltreAttivita.map(x => x.operazione).includes(tipoEmissioneAltraAttivita.name))
    }
  }
    this.selectedTipoEmissioneAltreAttivita = {
      name: 'AltreLavorazioni',
      code: 'AltreLavorazioni',
      kgCo2Ettaro: 0.0,
    };




  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  onChange(event: any) {
    if (this.selectedTipoEmissioneAltreAttivita.name != 'AltreLavorazioni') {
      this.enable = true;
    } else {
      this.enable = false;
    }
  }
  apriModale() {
    this.enable = false;
    this.selectedNumeroPassate = 1;
    this.nomeEmissioneAltraAttivita = '';
    this.oldNomeEmissioneAltraAttivita = '';
    this.velocitaSelezionata = undefined;

    this.selectedTipoEmissioneAltreAttivita = this.tipiEmissioneAltreAttivita[0];
    this.caricoLavoroSelezionato = undefined;
    this.updating = false;

    if (this.tipiEmissioneAltreAttivita.length > 0) {
      this.dialogEmissioniAltreAttivita = true;
    }
    this.selectedNumeroPassate = 1;
  }

  aggiornaEmissioneAltreAttivita(emissioneAltraAttivita: EmissioneAltreAttivita) {
    this.updating = true;
    this.selectedNumeroPassate = emissioneAltraAttivita.numeroPassate;
    this.nomeEmissioneAltraAttivita = emissioneAltraAttivita.operazione;
    this.oldNomeEmissioneAltraAttivita = emissioneAltraAttivita.operazione;

    if (emissioneAltraAttivita.stimaConsumiDiesel) {
      this.velocitaSelezionata = emissioneAltraAttivita.stimaConsumiDiesel.velocita;
      this.caricoLavoroSelezionato =
        emissioneAltraAttivita.stimaConsumiDiesel.caricoLavoro;
    }

    this.tipiEmissioneAltreAttivita.sort((a, b) => a.name.localeCompare(b.name));
    //@ts-ignore
    this.dt.totalRecords = this.emissioniAltreAttivita.length;
    if (
      this.tipiLavorazioneCheck.find(
        (tipoLavorazione) => tipoLavorazione.name == this.nomeEmissioneAltraAttivita
      )
    ) {
      this.enable = true;
    } else {
      this.enable = false;
    }

    this.dialogEmissioniAltreAttivita = true;
  }

  eliminaEmissioneAltreAttivita(emissioneAltreAttivita: EmissioneAltreAttivita) {
    this.emissioniAltreAttivita = this.emissioniAltreAttivita.filter(
      (lavorazioneRes) => lavorazioneRes.operazione != emissioneAltreAttivita.operazione
    );



    this.misurazione.inputMisurazione.operazioniColturali.emissioniAltreAttivita = this.emissioniAltreAttivita;
    this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();
    this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
    this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione,this.misurazione);

    if (
      !this.tipiEmissioneAltreAttivita.find(
        (tipoLavorazioneRes) =>
          tipoLavorazioneRes.name == emissioneAltreAttivita.operazione
      ) &&
      this.tipiLavorazioneCheck
        .map((x) => x.name)
        .includes(emissioneAltreAttivita.operazione)
    ) {
      this.tipiEmissioneAltreAttivita.push({
        name: emissioneAltreAttivita.operazione,
        code: emissioneAltreAttivita.operazione,
        kgCo2Ettaro:
          parseFloat(emissioneAltreAttivita.kgCo2Ettaro) / emissioneAltreAttivita.numeroPassate,
      });
      this.tipiEmissioneAltreAttivita.sort((a, b) => a.name.localeCompare(b.name));
    }
    //@ts-ignore
    this.selectedTipoEmissioneAltreAttivita = undefined;

    this.nomeEmissioneAltraAttivita = '';
    this.velocitaSelezionata = undefined;
    this.caricoLavoroSelezionato = undefined;

    //@ts-ignore
    this.dt.totalRecords = this.emissioniAltreAttivita.length;
  }

  chiudiDialogEmissioniAltreAttivita() {
    this.dialogEmissioniAltreAttivita = false;

    this.emissioniAltreAttivita
      .filter((lavorazione) => lavorazione.name !== 'AltreLavorazioni')
      .forEach((lavorazioneRes) => {
        let tipoLavorazione = this.tipiEmissioneAltreAttivita.find(
          (tipoLavorazioneRes) =>
            tipoLavorazioneRes.name == lavorazioneRes.operazione
        );
        if (tipoLavorazione) {
          this.tipiEmissioneAltreAttivita = this.tipiEmissioneAltreAttivita.filter(
            (tipoLavorazioneRes) =>
              tipoLavorazioneRes.name !== tipoLavorazione?.name
          );
        }
      });
  }

  salvaLavorazione() {
    if (
      this.selectedTipoEmissioneAltreAttivita.name == 'AltreLavorazioni' &&
      !this.enable
    ) {
      this.formExtended = true;
      if (
        this.velocitaSelezionata &&
        this.nomeEmissioneAltraAttivita &&
        this.velocitaSelezionata.code &&
        this.caricoLavoroSelezionato &&
        this.caricoLavoroSelezionato.code
      ) {
        if (
          this.emissioniAltreAttivita.find(
            (lavorazione) => lavorazione.operazione == this.oldNomeEmissioneAltraAttivita
          )
        ) {
          this.emissioniAltreAttivita = this.emissioniAltreAttivita.filter(
            (lavorazione) => lavorazione.operazione !== this.oldNomeEmissioneAltraAttivita
          );
        }

        const stimaConsumiDiesel: StimaConsumiDiesel = new StimaConsumiDiesel(
          this.velocitaSelezionata,
          this.caricoLavoroSelezionato
        );
        this.emissioniAltreAttivita.push(
          stimaConsumiDiesel.getEmissioneAltreAttivita(
            this.selectedNumeroPassate,
            this.nomeEmissioneAltraAttivita
          )
        );


        if(this.misurazione.inputMisurazione.operazioniColturali.lavorazioni == undefined ) {
          this.misurazione.inputMisurazione = new InputMisurazione();


        }

        this.misurazione.inputMisurazione.operazioniColturali.emissioniAltreAttivita = this.emissioniAltreAttivita;
        this.misurazione.dataOraUltimoAggiornamento =new Date().toUTCString();
        this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
        this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione,this.misurazione);


        this.dialogEmissioniAltreAttivita = false;
        this.nomeEmissioneAltraAttivita = '';
        this.velocitaSelezionata = undefined;
        this.caricoLavoroSelezionato = undefined;

        //@ts-ignore
        this.dt.totalRecords = this.emissioniAltreAttivita.length;
      } else {
        this.nomeEmissioneAltraAttivita = '';
      }
    } else {
      if (
        this.emissioniAltreAttivita.find(
          (lavorazioneRes) =>
            lavorazioneRes.operazione == this.selectedTipoEmissioneAltreAttivita.name
        )
      ) {
        this.emissioniAltreAttivita = this.emissioniAltreAttivita.filter(
          (lavorazioneRes) =>
            lavorazioneRes.operazione !== this.selectedTipoEmissioneAltreAttivita.name
        );
      }

      //@ts-ignore
      this.emissioneAltraAttivita = {};
      this.emissioneAltraAttivita.numeroPassate = this.selectedNumeroPassate;
      let co2Result =
        this.selectedTipoEmissioneAltreAttivita.name == 'AltreLavorazioni'
          ? this.tipiLavorazioneCheck.find(
              (tipoLavorazione) => tipoLavorazione.name == this.nomeEmissioneAltraAttivita
            )?.kgCo2Ettaro
          : this.selectedTipoEmissioneAltreAttivita.kgCo2Ettaro;
      this.emissioneAltraAttivita.kgCo2Ettaro = (co2Result! * this.selectedNumeroPassate)
        .toFixed(3)
        .toString();
      this.emissioneAltraAttivita.operazione =
        this.selectedTipoEmissioneAltreAttivita.name == 'AltreLavorazioni'
          ? this.nomeEmissioneAltraAttivita
          : this.selectedTipoEmissioneAltreAttivita.name;

      this.emissioniAltreAttivita = this.emissioniAltreAttivita.filter(
        (lavorazioni) => lavorazioni.operazione !== this.emissioneAltraAttivita.operazione
      );
      this.tipiEmissioneAltreAttivita = this.tipiEmissioneAltreAttivita.filter(
        (tipoLavorazione) =>
          tipoLavorazione.name !== this.emissioneAltraAttivita.operazione
      );

      this.emissioniAltreAttivita.push(this.emissioneAltraAttivita);
      this.misurazione.inputMisurazione.operazioniColturali.emissioniAltreAttivita = this.emissioniAltreAttivita;
      this.misurazione.dataOraUltimoAggiornamento = new Date().toUTCString();

      this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione);
      this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione,this.misurazione);

      this.tipiEmissioneAltreAttivita = this.tipiEmissioneAltreAttivita.filter(
        (tipoLavorazione) => tipoLavorazione.name != this.emissioneAltraAttivita.operazione
      );
      this.dialogEmissioniAltreAttivita = false;
      //@ts-ignore
      this.dt.totalRecords = this.emissioniAltreAttivita.length;
    }
  }
}
