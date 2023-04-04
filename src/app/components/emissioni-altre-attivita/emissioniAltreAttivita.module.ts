import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {ToolbarModule} from 'primeng/toolbar';

import { EmissioniAltreAttivitaPageRoutingModule } from './emissioniAltreAttivita-routing.module';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';

import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { EmissioniAltreAttivitaPage } from './emissioniAltreAttivita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    IonicModule,TableModule,
    EmissioniAltreAttivitaPageRoutingModule,
    InputTextModule,
    InputNumberModule
  ],
  declarations: [EmissioniAltreAttivitaPage]
})
export class EmissioniAltreAttivitaPageModule {}
