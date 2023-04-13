import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ButtonModule} from 'primeng/button';
import { WaterFootprintPieChartPage } from './water-footprint-pie-chart.page';
import { WaterFootprintPieChartPageRoutingModule } from './water-footprint-pie-chart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxChartsModule,
    ButtonModule,
    WaterFootprintPieChartPageRoutingModule
  ],
  declarations: [WaterFootprintPieChartPage]
})
export class WaterFootprintPieChartPageModule {}
