import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ToolbarModule } from 'primeng/toolbar';

import { LavorazioniPageRoutingModule } from './lavorazioni-routing.module';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

import { LavorazioniPage } from './lavorazioni.page';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    IonicModule,
    TableModule,
    LavorazioniPageRoutingModule,
    InputTextModule,
    InputNumberModule,
  ],
  declarations: [LavorazioniPage],
})
export class LavorazioniPageModule {}
