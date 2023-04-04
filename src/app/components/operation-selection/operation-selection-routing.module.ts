import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationSelectionPage } from './operation-selection.page';

const routes: Routes = [
  {
    path: '',
    component: OperationSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationSelectionPageRoutingModule {}
