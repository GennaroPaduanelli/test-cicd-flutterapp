import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesticidiPage } from './pesticidi.page';

const routes: Routes = [
  {
    path: '',
    component: PesticidiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesticidiPageRoutingModule {}
