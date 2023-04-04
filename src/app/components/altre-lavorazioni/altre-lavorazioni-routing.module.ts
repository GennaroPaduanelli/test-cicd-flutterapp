import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltreLavorazioniPage } from './altre-lavorazioni.page';

const routes: Routes = [
  {
    path: '',
    component: AltreLavorazioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltreLavorazioniPageRoutingModule {}
