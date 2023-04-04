import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmissioniAltreAttivitaPage } from './emissioniAltreAttivita.page';



const routes: Routes = [
  {
    path: '',
    component: EmissioniAltreAttivitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmissioniAltreAttivitaPageRoutingModule {}
