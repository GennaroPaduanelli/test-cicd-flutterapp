import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { UserLocalStorageService } from './services/user.localStorage.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
    , canActivate:[AuthGuardService]
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
    , canActivate:[AuthGuardService]
  },
  {
    path: 'registration',
    loadChildren: () => import('./components/registration/registration.module').then( m => m.RegistrationPageModule)
    , canActivate:[AuthGuardService]
  },
  {
    path: 'operation-selection',
    loadChildren: () => import('./components/operation-selection/operation-selection.module').then( m => m.OperationSelectionPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'lavorazioni',
    loadChildren: () => import('./components/lavorazioni/lavorazioni.module').then( m => m.LavorazioniPageModule)
    , canActivate:[AuthGuardService]
  },
  {
    path: 'altre-lavorazioni',
    loadChildren: () => import('./components/altre-lavorazioni/altre-lavorazioni.module').then( m => m.AltreLavorazioniPageModule)
    , canActivate:[AuthGuardService]
  },
  {
    path: 'pesticidi',
    loadChildren: () => import('./components/pesticidi/pesticidi.module').then( m => m.PesticidiPageModule)
    , canActivate:[AuthGuardService]
  },
  {
    path: 'fertilizzanti',
    loadChildren: () => import('./components/fertilizzanti/fertilizzanti.module').then( m => m.FertilizzantiPageModule)
    , canActivate:[AuthGuardService]
  },
  {
    path: 'home-input',
    loadChildren: () => import('./components/home-input/home-input.module').then( m => m.HomeInputPageModule)
    , canActivate:[AuthGuardService]
  },
  {
    path: 'dati-produttivi',
    loadChildren: () => import('./components/dati-produttivi/dati-produttivi.module').then( m => m.DatiProduttiviPageModule)

  },
  {
    path: 'evoluzione-carbonio-suolo',
    loadChildren: () => import('./components/evoluzione-carbonio-suolo/evoluzione-carbonio-suolo.module').then( m => m.EvoluzioneCarbonioSuoloPageModule)
  },
  {
    path: 'result-carbon-footprint',
    loadChildren: () => import('./components/result-carbon-footprint/result-carbon-footprint.module').then( m => m.ResultCarbonFootprintPageModule)
  },
  {
    path: 'result-water-footprint',
    loadChildren: () => import('./components/result-water-footprint/result-water-footprint.module').then( m => m.ResultWaterFootprintPageModule)
  },
  {
    path: 'misurazioni',
    loadChildren: () => import('./components/misurazioni/misurazioni.module').then( m => m.MisurazioniPageModule)
  },
  {
    path: 'emissioni-altre-attività',
    loadChildren: () => import('./components/emissioni-altre-attivita/emissioniAltreAttivita.module').then( m => m.EmissioniAltreAttivitaPageModule)
  },
  {
    path: 'carboon-footprint-line-chart',
    loadChildren: () => import('./components/carboon-footprint-line-chart/carboon-footprint-line-chart.module').then( m => m.CarboonFootprintLineChartPageModule)
  },
  {
    path: 'carboon-footprint-pie-chart',
    loadChildren: () => import('./components/carboon-footprint-pie-chart/carboon-footprint-pie-chart.module').then( m => m.CarboonFootprintPieChartPageModule)
  },

  {
    path: 'water-footprint-line-chart',
    loadChildren: () => import('./components/water-footprint-line-chart/water-footprint-line-chart.module').then( m => m.WaterFootprintLineChartPageModule)
  },
  {
    path: 'water-footprint-pie-chart',
    loadChildren: () => import('./components/water-footprint-pie-chart/water-footprint-pie-chart.module').then( m => m.WaterFootprintPieChartPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private userLocationStorage: UserLocalStorageService) {}
 }
