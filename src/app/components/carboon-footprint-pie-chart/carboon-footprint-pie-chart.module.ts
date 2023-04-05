import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarboonFootprintPieChartPageRoutingModule } from './carboon-footprint-pie-chart-routing.module';

import { CarboonFootprintPieChartPage } from './carboon-footprint-pie-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarboonFootprintPieChartPageRoutingModule
  ],
  declarations: [CarboonFootprintPieChartPage]
})
export class CarboonFootprintPieChartPageModule {}
