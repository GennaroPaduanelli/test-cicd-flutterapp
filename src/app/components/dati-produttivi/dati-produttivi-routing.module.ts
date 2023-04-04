import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatiProduttiviPage } from './dati-produttivi.page';

const routes: Routes = [
  {
    path: '',
    component: DatiProduttiviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatiProduttiviPageRoutingModule {}
