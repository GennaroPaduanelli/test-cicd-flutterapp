import { Component } from '@angular/core';
import { Misurazione, MisurazioneService } from 'src/app/services/misurazione.service';

@Component({
  selector: 'app-carboon-footprint-line-chart',
  templateUrl: './carboon-footprint-line-chart.page.html',
  styleUrls: ['./carboon-footprint-line-chart.page.scss'],
})
export class CarboonFootprintLineChartPage  {

  data: any[] = [];

  view: any[] = [340, 220];

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
    domain: ['#ce5526', '#f5b59c', '#091c6d']
  };
  schemeType: string = 'ordinal'; // 'ordinal' or 'linear'

  activeEntries: any[] = ['book']
  barPadding: number = 5
  tooltipDisabled: boolean = false;

  yScaleMax: number = 9000;

  roundEdges: boolean = false;

  misurazione!:Misurazione;

  constructor(private misurazioneService:MisurazioneService) {
    this.setDataOut();




   }

   setDataOut() {
    this.yAxisTicks = [];
    this.yAxisTicks =  [0.0, 0.1, 0.2, 0.3, 0.4, 0.5,0.6,0.7,0.8,0.9,1.0,1.1,1.2,1.3,1.4];
    this.misurazione = this.misurazioneService.getMisurazioneLocalStorage()!;
    console.log(this.misurazione);
    if(this.misurazione.outputMisurazione && this.misurazione.outputMisurazione.outputCarbonFootPrint) {


      if(this.misurazione.outputMisurazione.outputCarbonFootPrint.systemExspansion && this.misurazione.outputMisurazione.outputCarbonFootPrint.systemExspansion != 'Non Calcolabile') {
        this.data.push({
          "name": "System_Exspansion",
          "value": parseFloat(this.misurazione.outputMisurazione.outputCarbonFootPrint.systemExspansion)

        })
      }

      if(this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2PerKgAllocazioneGranella && this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2PerKgAllocazioneGranella != 'Non Calcolabile') {
        this.data.push({
          "name": "Allocation_Calc",
          "value": parseFloat(this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2PerKgAllocazioneGranella)

        })
      }


      if(this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2PerKgGranella && this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2PerKgGranella != 'Non Calcolabile') {
        this.data.push({
          "name": "Attributional_Calc",
          "value": parseFloat(this.misurazione.outputMisurazione.outputCarbonFootPrint.kgCo2PerKgGranella)

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
