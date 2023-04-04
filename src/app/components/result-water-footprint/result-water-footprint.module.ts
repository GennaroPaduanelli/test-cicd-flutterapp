import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultWaterFootprintPageRoutingModule } from './result-water-footprint-routing.module';

import { ResultWaterFootprintPage } from './result-water-footprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultWaterFootprintPageRoutingModule
  ],
  declarations: [ResultWaterFootprintPage]
})
export class ResultWaterFootprintPageModule {}
