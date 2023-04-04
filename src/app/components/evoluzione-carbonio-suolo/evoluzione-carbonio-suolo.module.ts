import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvoluzioneCarbonioSuoloPageRoutingModule } from './evoluzione-carbonio-suolo-routing.module';
import {DropdownModule} from 'primeng/dropdown';

import { EvoluzioneCarbonioSuoloPage } from './evoluzione-carbonio-suolo.page';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonModule,
    InputNumberModule,
    InputSwitchModule,
    DropdownModule,
    EvoluzioneCarbonioSuoloPageRoutingModule
  ],
  declarations: [EvoluzioneCarbonioSuoloPage]
})
export class EvoluzioneCarbonioSuoloPageModule {}
