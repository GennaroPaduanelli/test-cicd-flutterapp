import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisurazioniPageRoutingModule } from './misurazioni-routing.module';

import { MisurazioniPage } from './misurazioni.page';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToolbarModule } from 'primeng/toolbar';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    InputNumberModule,
    ToolbarModule,
    TableModule,
    InputTextModule,
    MisurazioniPageRoutingModule,
  ],
  declarations: [MisurazioniPage],
})
export class MisurazioniPageModule {}
