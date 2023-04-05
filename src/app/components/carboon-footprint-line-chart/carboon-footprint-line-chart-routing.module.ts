import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarboonFootprintLineChartPage } from './carboon-footprint-line-chart.page';

const routes: Routes = [
  {
    path: '',
    component: CarboonFootprintLineChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarboonFootprintLineChartPageRoutingModule {}
