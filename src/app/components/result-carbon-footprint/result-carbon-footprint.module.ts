import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextModule } from 'primeng/inputtext';
import { ResultCarbonFootprintPageRoutingModule } from './result-carbon-footprint-routing.module';
import { ResultCarbonFootprintPage } from './result-carbon-footprint.page';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultCarbonFootprintPageRoutingModule,
    InputNumberModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: [ResultCarbonFootprintPage]
})
export class ResultCarbonFootprintPageModule {}
