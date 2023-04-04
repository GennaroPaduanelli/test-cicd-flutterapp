import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvoluzioneCarbonioSuoloPage } from './evoluzione-carbonio-suolo.page';

const routes: Routes = [
  {
    path: '',
    component: EvoluzioneCarbonioSuoloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvoluzioneCarbonioSuoloPageRoutingModule {}
