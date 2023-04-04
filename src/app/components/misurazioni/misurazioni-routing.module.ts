import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisurazioniPage } from './misurazioni.page';

const routes: Routes = [
  {
    path: '',
    component: MisurazioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisurazioniPageRoutingModule {}
