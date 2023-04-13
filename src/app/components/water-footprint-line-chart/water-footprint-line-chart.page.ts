import {  Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Misurazione, MisurazioneService } from 'src/app/services/misurazione.service';

@Component({
  selector: 'app-water-footprint-line-chart',
  templateUrl: './water-footprint-line-chart.page.html',
  styleUrls: ['./water-footprint-line-chart.page.scss'],
})
export class WaterFootprintLineChartPage  {

  data: any[] = [];

  view: any[] = [610, 220];

  legendTitle: string = 'CarbonFootPrint';
  legendPosition: string = 'top'; // ['right', 'below']
  legend: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'kgCO2eq kg-1';
  xAxisLabel: string = 'Score';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = false;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = false;

  yAxisTicks: any[] ;

  animations: boolean = true; // animations on load

  showGridLines: boolean = true; // grid lines

  showDataLabel: boolean = true; // numbers on bars

  gradient: boolean = false;
  colorScheme = {
    domain: ['#064b7c', '#41b10a', '#3090dd']
  };
  schemeType: string = 'ordinal'; // 'ordinal' or 'linear'

  activeEntries: any[] = ['book']
  barPadding: number = 5
  tooltipDisabled: boolean = false;

  yScaleMax: number = 9000;

  roundEdges: boolean = false;

  misurazione!:Misurazione;


  constructor(private misurazioneService:MisurazioneService, private navCtrl: NavController) {



    this.setDataOut();

  }




setDataOut() {

  this.yAxisTicks = [];
  this.yAxisTicks =  [0,500,1000,1500,2000,2500,3000,3500,4000,4500];
  this.misurazione = this.misurazioneService.getMisurazioneLocalStorage()!;
  console.log(this.misurazione);
  if(this.misurazione.outputMisurazione && this.misurazione.outputMisurazione.outputCarbonFootPrint) {


    if(this.misurazione.outputMisurazione.ouputWaterFootPrint.wfMetriCubiEttaro && this.misurazione.outputMisurazione.ouputWaterFootPrint.wfMetriCubiEttaro != 'Non Calcolabile') {
      this.data.push({
        "name": "Water FootPrint",
        "value": parseFloat(this.misurazione.outputMisurazione.ouputWaterFootPrint.wfMetriCubiEttaro)

      })
    }

    if(this.misurazione.outputMisurazione.ouputWaterFootPrint.metriCubiGreenWaterEttaro && this.misurazione.outputMisurazione.ouputWaterFootPrint.metriCubiGreenWaterEttaro != 'Non Calcolabile') {
      this.data.push({
        "name": "Green Water",
        "value": parseFloat(this.misurazione.outputMisurazione.ouputWaterFootPrint.metriCubiGreenWaterEttaro)

      })
    }




    if(this.misurazione.outputMisurazione.ouputWaterFootPrint.metriCubiBlueWaterEttaro && this.misurazione.outputMisurazione.ouputWaterFootPrint.metriCubiBlueWaterEttaro != 'Non Calcolabile') {
      this.data.push({
        "name": "Blue Water",
        "value": parseFloat(this.misurazione.outputMisurazione.ouputWaterFootPrint.metriCubiBlueWaterEttaro)

      })
    }
  }
}

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  formatString(input: string): string {
    return input.toUpperCase()
  }

  formatNumber(input: number): number {
    return input
  }
}
