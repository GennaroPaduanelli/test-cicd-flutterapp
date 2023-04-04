import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeInputPage } from './home-input.page';

const routes: Routes = [
  {
    path: '',
    component: HomeInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeInputPageRoutingModule {}
