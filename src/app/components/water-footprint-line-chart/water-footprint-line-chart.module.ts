import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarboonFootprintLineChartPageRoutingModule } from './water-footprint-line-chart-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgChartsModule } from 'ng2-charts';
import {ButtonModule} from 'primeng/button';
import { WaterFootprintLineChartPage } from './water-footprint-line-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxChartsModule,
    NgChartsModule,
    ButtonModule,
    CarboonFootprintLineChartPageRoutingModule
  ],
  declarations: [WaterFootprintLineChartPage]
})
export class WaterFootprintLineChartPageModule {}
