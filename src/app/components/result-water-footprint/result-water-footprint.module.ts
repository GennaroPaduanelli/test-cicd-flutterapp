import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultWaterFootprintPageRoutingModule } from './result-water-footprint-routing.module';

import { ResultWaterFootprintPage } from './result-water-footprint.page';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonModule,
    ResultWaterFootprintPageRoutingModule
  ],
  declarations: [ResultWaterFootprintPage]
})
export class ResultWaterFootprintPageModule {}
