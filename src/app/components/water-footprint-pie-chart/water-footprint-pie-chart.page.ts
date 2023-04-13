import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LegendPosition, escapeLabel, formatLabel } from '@swimlane/ngx-charts';
import { Misurazione, MisurazioneService } from 'src/app/services/misurazione.service';
@Component({
  selector: 'app-water-footprint-pie-chart',
  templateUrl: './water-footprint-pie-chart.page.html',
  styleUrls: ['./water-footprint-pie-chart.page.scss'],
})
export class WaterFootprintPieChartPage   {
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
    this.setDataOut();

  }





  setDataOut() {
    this.misurazione = this.misurazioneService.getMisurazioneLocalStorage()!;

    if(this.misurazione.outputMisurazione && this.misurazione.outputMisurazione.ouputWaterFootPrint) {


      if(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeLavorazioniBlueWaterFootPrint && this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeLavorazioniBlueWaterFootPrint != 'Non Calcolabile') {
        this.data.push({
          "name": "Lavorazioni",
          "value": parseFloat(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeLavorazioniBlueWaterFootPrint)

        })
      }


      if(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeAltreLavorazioniBlueWaterFootPrint && this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeAltreLavorazioniBlueWaterFootPrint != 'Non Calcolabile') {
        this.data.push({
          "name": "AltreOperazioni",
          "value": parseFloat(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeAltreLavorazioniBlueWaterFootPrint)

        })
      }


      if(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualePesticidiBlueWaterFootPrint && this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualePesticidiBlueWaterFootPrint != 'Non Calcolabile') {
        this.data.push({
          "name": "Pesticidi",
          "value": parseFloat(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualePesticidiBlueWaterFootPrint)

        })
      }

      if(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeFertilizzantiBlueWaterFootPrint && this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeFertilizzantiBlueWaterFootPrint != 'Non Calcolabile') {
        this.data.push({
          "name": "Fertilizzanti",
          "value": parseFloat(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeFertilizzantiBlueWaterFootPrint)

        })
      }






      if(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeEmissioniAltreAttivitaBlueWaterFootPrint && this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeEmissioniAltreAttivitaBlueWaterFootPrint != 'Non Calcolabile') {
        this.data.push({
          "name": "EmissioniAltreAttività",
          "value": parseFloat(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeEmissioniAltreAttivitaBlueWaterFootPrint)

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
