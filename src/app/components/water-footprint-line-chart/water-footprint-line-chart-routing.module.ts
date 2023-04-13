import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaterFootprintLineChartPage } from './water-footprint-line-chart.page';



const routes: Routes = [
  {
    path: '',
    component: WaterFootprintLineChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarboonFootprintLineChartPageRoutingModule {}
