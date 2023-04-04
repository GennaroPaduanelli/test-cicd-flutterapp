import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AltraLavorazione } from '../components/altre-lavorazioni/altre-lavorazioni.page';
import { EmissioneAltreAttivita } from '../components/emissioni-altre-attivita/emissioniAltreAttivita.page';
import { Fertilizzante } from '../components/fertilizzanti/fertilizzanti.page';
import { Lavorazione } from '../components/lavorazioni/lavorazioni.page';
import { Pesticidio } from '../components/pesticidi/pesticidi.page';
import { CryptoService } from './crypto.service';

export class OperazioniColturali {
  lavorazioni!: Lavorazione[];
  altreLavorazioni!: AltraLavorazione[];
  pesticidi!: Pesticidio[];
  fertilizzanti!: Fertilizzante[];
  emissioniAltreAttivita!: EmissioneAltreAttivita[];

  constructor() {
    this.lavorazioni = [];
    this.altreLavorazioni = [];
    this.pesticidi = [];
    this.fertilizzanti = [];
  }
}

export class ResiduiColturali {
  granellaKgEttaro!: number;
  percentualeUmidita!: number;
  pagliaRimossaKgEttaro!: number;

  agDmtNumber!: number;
  agDmtNumberCropT!: number;
  agDmtNumberKgAnno!: number;

  ragtNumber!: number;
  rbgtNumber!: number;

  bgDmtNumber!: number;
  bgtotNumber!: number;

  nagNumber!: number;
  fracRemoveNumber!: number;
  fracRenewNumber!: number;

  nbgtNumber!: number;
  rbgbiot!: number;

  residuiTotaliAlSuolo!: number;
  fcr!: number;

  emissioniN2OKgAnno!: number;

  pesoGranellaSeccaAl13KgEttaro!: number;

  constructor(
    granellaKgEttaro: number,
    percentualeUmidita: number,
    pagliaRimossaKgEttaro: number
  ) {
    this.granellaKgEttaro = granellaKgEttaro;
    this.percentualeUmidita = percentualeUmidita;
    this.pagliaRimossaKgEttaro = pagliaRimossaKgEttaro;

    this.pesoGranellaSeccaAl13KgEttaro =
      this.granellaKgEttaro * ((100 - this.percentualeUmidita) / 100);
    this.agDmtNumber =
      (1.51 * this.pesoGranellaSeccaAl13KgEttaro) / 1000 + 0.52;
    this.agDmtNumberCropT =
      (this.agDmtNumber * 1000 + this.pesoGranellaSeccaAl13KgEttaro) /
      this.pesoGranellaSeccaAl13KgEttaro;
    this.agDmtNumberKgAnno = this.agDmtNumber * 1000;
    this.ragtNumber =
      (this.agDmtNumber * 1000) / this.pesoGranellaSeccaAl13KgEttaro;
    this.rbgtNumber = 0.24 * this.agDmtNumberCropT;
    this.bgDmtNumber =
      (this.rbgtNumber * this.pesoGranellaSeccaAl13KgEttaro) / 1000;
    this.bgtotNumber = this.agDmtNumber + this.bgDmtNumber;
    this.nagNumber = 0.006;
    this.fracRemoveNumber =
      this.pagliaRimossaKgEttaro /
      this.ragtNumber /
      this.pesoGranellaSeccaAl13KgEttaro;
    this.fracRenewNumber = 1.0;
    this.nbgtNumber = 0.009;
    this.rbgbiot = 0.24;
    this.residuiTotaliAlSuolo =
      this.pesoGranellaSeccaAl13KgEttaro *
      this.fracRenewNumber *
      (this.ragtNumber * (1 - this.fracRemoveNumber) + this.rbgtNumber);
    this.fcr =
      this.pesoGranellaSeccaAl13KgEttaro *
      this.fracRenewNumber *
      (this.ragtNumber * this.nagNumber * (1 - this.fracRemoveNumber) +
        this.rbgtNumber * this.nbgtNumber);
    this.emissioniN2OKgAnno = (this.fcr * 1) / 100;
  }
}

export class DatiProduttivi {
  datiProduttiviWaterFootPrint!: DatiProduttiviWaterFootPrint;
  datiProduttiviCarbonFootPrint!: DatiProduttiviCarbonFootPrint;

  constructor() {
    this.datiProduttiviCarbonFootPrint = new DatiProduttiviCarbonFootPrint();
    this.datiProduttiviWaterFootPrint = new DatiProduttiviWaterFootPrint();
  }
}
export class DatiProduttiviWaterFootPrint {
  resaGranellaKgEttaro!: number;
  pagliaAsportataKgEttaro!: number;
  percentualeUmiditaGranella!: number;
  percentualeProteineGranella!: number;
  resaGranellaSeccaKgEttaro!: number;
  proteineGranellaKgEttaro!: number;
}
export class DatiProduttiviCarbonFootPrint {
  resaGranellaKgEttaro!: number;
  pagliaProdottaKgEttaro!: number;
  pagliaAsportataKgEttaro!: number;
  percentualeUmiditaGranella!: number;
  percentualeProteineGranella!: number;
}

export class EvoluzioneCarbonio {
  densitaApparente!: number;
  sostanzaOrganica!: number;
  profondita!: number;


}


export class DatiCarbonio {
  densitaApparente!: number;
  sostanzaOrganica!: number;
  profondita!: number;

  totInit!:number;
  carbonioAlSuolo!:number;
  residui!:number;
  carbAdd!:number;

  listDatoCarbonio:DatoCarbonio[] = [];

  co2SequenzaMedia50Anni!:number;

  constructor(densitaApparente: number, sostanzaOrganica: number,profondita: number, pagliaAlSuolo:number) {

    this.densitaApparente = densitaApparente;
    this.sostanzaOrganica = sostanzaOrganica;
    this.profondita = profondita;
    this.carbonioAlSuolo = densitaApparente*sostanzaOrganica*profondita*(58/100);
    this.totInit = this.carbonioAlSuolo;
    this.residui = pagliaAlSuolo/1000;
    this.carbAdd = this.residui * 0.43;

    for(var i = 1; i <= 50; i++) {
      var datoCarbonio!:DatoCarbonio;
      if(i == 1) {
      datoCarbonio= new DatoCarbonio(i.toString(),0.15,0.006,0.006,4.03,1.73,((0.15*1.73)-(0.006*this.carbonioAlSuolo)),this.carbonioAlSuolo+((0.15*1.73)-(0.006*this.carbonioAlSuolo)));
      }else {

       datoCarbonio= new DatoCarbonio(i.toString(),0.15,0.006,0.006,4.03,1.73,((0.15*1.73)-(0.006* this.listDatoCarbonio[this.listDatoCarbonio.length-1].cSoil)),this.listDatoCarbonio[this.listDatoCarbonio.length-1].cSoil+((0.15*1.73)-(0.006* this.listDatoCarbonio[this.listDatoCarbonio.length-1].cSoil)));
      }
      this.listDatoCarbonio.push(datoCarbonio);
    }

    this.co2SequenzaMedia50Anni = (((this.listDatoCarbonio[this.listDatoCarbonio.length - 1].cSoil- this.listDatoCarbonio[0].cSoil)/50)*3.67);


  }

}


export class DatoCarbonio {
  anno!:string;
  h!:number;
  k!:number;
  kev1!:number;
  paglie!:number;
  cPaglie!:number;
  cEv!:number;
  cSoil!:number;

  constructor(anno:string,
    h:number,
    k:number,
    kev1:number,
    paglie:number,
    cPaglie:number,
    cEv:number,
    cSoil:number) {
      this.anno = anno;
      this.h = h;
      this.k = k;
      this.kev1 = kev1;
      this.paglie = paglie;
      this.cPaglie = cPaglie;
      this.cEv = cEv;
      this.cSoil = cSoil;
    }
}


export class InputMisurazione {
  operazioniColturali!: OperazioniColturali;
  residuiColturali!: ResiduiColturali;
  datiProduttivi!: DatiProduttivi;
  datiSuolo!: EvoluzioneCarbonio;

  constructor() {
    this.operazioniColturali = new OperazioniColturali();
    this.residuiColturali = new ResiduiColturali(NaN, NaN, NaN);
    this.datiProduttivi = new DatiProduttivi();
    this.datiSuolo = new EvoluzioneCarbonio();
  }
}

export class OutputMisurazione {}

export class Misurazione {
  nomeMisurazione!: string;
  dataOraUltimoAggiornamento!: string;
  inputMisurazione!: InputMisurazione;
  outputMisurazione!: OutputMisurazione;

  constructor() {
    this.inputMisurazione = new InputMisurazione();
    this.outputMisurazione = new OutputMisurazione();
  }
}

const MISURAZIONE_KEY = 'misurazione';

@Injectable({
  providedIn: 'root',
})
export class MisurazioneService {
  private dbPath = '/misurazioni';
  getDatiCarbonio( densitaApparente: number, sostanzaOrganica: number,profondita:number,pagliaAlSuolo:number): DatiCarbonio {
    return new DatiCarbonio(densitaApparente,sostanzaOrganica,profondita,pagliaAlSuolo);
  }
  public salvaMisurazioneLocalStorage(misurazione: Misurazione): void {
    window.localStorage.removeItem(MISURAZIONE_KEY);
    window.localStorage.setItem(
      MISURAZIONE_KEY,
      this.cryptoService.encrypt(JSON.stringify(misurazione))
    );
  }

  public getMisurazioneLocalStorage(): Misurazione | undefined {
    const misurazione = window.localStorage.getItem(MISURAZIONE_KEY);
    if (misurazione) {
      return JSON.parse(this.cryptoService.decrypt(misurazione));
    }
    return undefined;
  }

  public removeMisurazioneLocalStorage() {
    window.localStorage.removeItem(MISURAZIONE_KEY);
  }

  constructor(
    private angularFirestore: AngularFirestore,
    private cryptoService: CryptoService
  ) {}

  getAllMisurazioni(): AngularFirestoreCollection<Misurazione> {
    return this.angularFirestore.collection(this.dbPath);
  }

  getIdByNomeMisurazione(nomeMisurazione: string) {
    return this.angularFirestore
      .collection(this.dbPath, (ref) =>
        ref.where('nomeMisurazione', '==', nomeMisurazione)
      )
      .get();
  }

  getMisurazioneById(id: string) {
    return this.angularFirestore.collection(this.dbPath).doc(id).get();
  }

  saveMisurazione(misurazione: Misurazione): any {
    return this.angularFirestore
      .collection(this.dbPath)
      .add(JSON.parse(JSON.stringify(misurazione)));
  }

  updateMisurazione(nomeMisurazione: string, misurazione: any) {
    this.angularFirestore
      .collection(this.dbPath, (ref) =>
        ref.where('nomeMisurazione', '==', nomeMisurazione)
      )
      .get()
      .subscribe((data) => {
        if (data && data.docs && data.docs[0] && data.docs[0].id)
          this.angularFirestore
            .collection(this.dbPath)
            .doc(data.docs[0].id)
            .update(JSON.parse(JSON.stringify(misurazione)));
      });
  }

  deleteMisurazione(nomeMisurazione: string) {
    this.angularFirestore
      .collection(this.dbPath, (ref) =>
        ref.where('nomeMisurazione', '==', nomeMisurazione)
      )
      .get()
      .subscribe((data) => {
        if (data && data.docs && data.docs[0] && data.docs[0].id)
          this.angularFirestore
            .collection(this.dbPath)
            .doc(data.docs[0].id)
            .delete();
      });
  }
}
