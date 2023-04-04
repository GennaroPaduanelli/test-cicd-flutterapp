import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FertilizzantiPage } from './fertilizzanti.page';

const routes: Routes = [
  {
    path: '',
    component: FertilizzantiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FertilizzantiPageRoutingModule {}
