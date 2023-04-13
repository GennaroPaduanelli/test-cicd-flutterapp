import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaterFootprintPieChartPage } from './water-footprint-pie-chart.page';

const routes: Routes = [
  {
    path: '',
    component: WaterFootprintPieChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterFootprintPieChartPageRoutingModule {}
