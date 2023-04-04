import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatiProduttiviPageRoutingModule } from './dati-produttivi-routing.module';

import { DatiProduttiviPage } from './dati-produttivi.page';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputSwitchModule,
    InputNumberModule,
    ButtonModule,
    DatiProduttiviPageRoutingModule
  ],
  declarations: [DatiProduttiviPage]
})
export class DatiProduttiviPageModule {}
