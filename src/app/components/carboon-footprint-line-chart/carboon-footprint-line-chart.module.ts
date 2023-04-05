import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarboonFootprintLineChartPageRoutingModule } from './carboon-footprint-line-chart-routing.module';
import { CarboonFootprintLineChartPage } from './carboon-footprint-line-chart.page';
import { ChartModule } from 'primeng/chart';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartModule,
    CarboonFootprintLineChartPageRoutingModule
  ],
  declarations: [CarboonFootprintLineChartPage]
})
export class CarboonFootprintLineChartPageModule {}
