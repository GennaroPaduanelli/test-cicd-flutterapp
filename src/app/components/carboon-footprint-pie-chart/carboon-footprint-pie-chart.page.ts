import { Component, OnInit } from '@angular/core';
import { LegendPosition, escapeLabel, formatLabel } from '@swimlane/ngx-charts';
import { Misurazione, MisurazioneService } from 'src/app/services/misurazione.service';
@Component({
  selector: 'app-carboon-footprint-pie-chart',
  templateUrl: './carboon-footprint-pie-chart.page.html',
  styleUrls: ['./carboon-footprint-pie-chart.page.scss'],
})
export class CarboonFootprintPieChartPage   {
  misurazione!:Misurazione;

  data: any[] = [];

  view: any[] = [660, 390];
  legendPosition = LegendPosition.Below;
  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;



  colorScheme = {
    domain: ['#6e9f65', '#e57113', '#bcbcbc', '#f4c331', '#6fa8dc', '#f44336']
  };

  pieTooltipText({ data }) {
    const label = formatLabel(data.name);
    const val = formatLabel(data.value);

    return `
      <span class="tooltip-label">${escapeLabel(label)}</span>
      <span class="tooltip-val">$${val}</span>
    `;
  }



 
  constructor(private misurazioneService:MisurazioneService) {

    this.setDatOut();
  }

  setDatOut() {
    this.misurazione = this.misurazioneService.getMisurazioneLocalStorage()!;

    if(this.misurazione.outputMisurazione && this.misurazione.outputMisurazione.outputCarbonFootPrint) {


      if(this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpLavorazioni && this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpLavorazioni != 'Non Calcolabile') {
        this.data.push({
          "name": "Lavorazioni",
          "value": parseFloat(this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpLavorazioni)

        })
      }


      if(this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpAltreLavorazioni && this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpAltreLavorazioni != 'Non Calcolabile') {
        this.data.push({
          "name": "AltreOperazioni",
          "value": parseFloat(this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpAltreLavorazioni)

        })
      }


      if(this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpPesticidi && this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpPesticidi != 'Non Calcolabile') {
        this.data.push({
          "name": "Pesticidi",
          "value": parseFloat(this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpPesticidi)

        })
      }

      if(this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpFertilizzanti && this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpFertilizzanti != 'Non Calcolabile') {
        this.data.push({
          "name": "Fertilizzanti",
          "value": parseFloat(this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpFertilizzanti)

        })
      }




      if(this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpResidui && this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpResidui != 'Non Calcolabile') {
        this.data.push({
          "name": "Residui",
          "value": parseFloat(this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpResidui)

        })
      }

      if(this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpEmissioniAltreAttivita && this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpEmissioniAltreAttivita != 'Non Calcolabile') {
        this.data.push({
          "name": "EmissioniAltreAttività",
          "value": parseFloat(this.misurazione.outputMisurazione.outputCarbonFootPrint.percentualeCfpEmissioniAltreAttivita)

        })
      }

    }
  }




  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

}
