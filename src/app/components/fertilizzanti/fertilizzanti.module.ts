import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizzantiPageRoutingModule } from './fertilizzanti-routing.module';

import { FertilizzantiPage } from './fertilizzanti.page';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {ToolbarModule} from 'primeng/toolbar';


import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
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
    TableModule, InputTextModule,
    FertilizzantiPageRoutingModule
  ],
  declarations: [FertilizzantiPage]
})
export class FertilizzantiPageModule {}
