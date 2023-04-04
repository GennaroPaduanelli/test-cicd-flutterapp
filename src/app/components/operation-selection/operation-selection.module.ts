import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperationSelectionPageRoutingModule } from './operation-selection-routing.module';

import { OperationSelectionPage } from './operation-selection.page';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonModule,
    OperationSelectionPageRoutingModule
  ],
  declarations: [OperationSelectionPage]
})
export class OperationSelectionPageModule {}
