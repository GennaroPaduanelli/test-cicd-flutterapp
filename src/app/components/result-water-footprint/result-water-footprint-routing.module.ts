import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultWaterFootprintPage } from './result-water-footprint.page';

const routes: Routes = [
  {
    path: '',
    component: ResultWaterFootprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultWaterFootprintPageRoutingModule {}
