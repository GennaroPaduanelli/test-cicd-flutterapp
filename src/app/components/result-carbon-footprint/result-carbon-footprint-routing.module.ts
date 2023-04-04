import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultCarbonFootprintPage } from './result-carbon-footprint.page';

const routes: Routes = [
  {
    path: '',
    component: ResultCarbonFootprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultCarbonFootprintPageRoutingModule {}
