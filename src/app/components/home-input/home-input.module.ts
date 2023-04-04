import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeInputPageRoutingModule } from './home-input-routing.module';

import { HomeInputPage } from './home-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeInputPageRoutingModule
  ],
  declarations: [HomeInputPage]
})
export class HomeInputPageModule {}
