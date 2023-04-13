import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarboonFootprintLineChartPageRoutingModule } from './carboon-footprint-line-chart-routing.module';
import { CarboonFootprintLineChartPage } from './carboon-footprint-line-chart.page';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgChartsModule } from 'ng2-charts';
import {ButtonModule} from 'primeng/button';

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
  declarations: [CarboonFootprintLineChartPage]
})
export class CarboonFootprintLineChartPageModule {}
