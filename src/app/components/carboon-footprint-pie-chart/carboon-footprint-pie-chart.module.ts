import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarboonFootprintPieChartPageRoutingModule } from './carboon-footprint-pie-chart-routing.module';

import { CarboonFootprintPieChartPage } from './carboon-footprint-pie-chart.page';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxChartsModule,
    ButtonModule,
    CarboonFootprintPieChartPageRoutingModule
  ],
  declarations: [CarboonFootprintPieChartPage]
})
export class CarboonFootprintPieChartPageModule {}
