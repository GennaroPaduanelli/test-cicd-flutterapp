"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1920],{1920:(v,p,n)=>{n.r(p),n.d(p,{WaterFootprintPieChartPageModule:()=>z});var h=n(6895),d=n(433),c=n(603),a=n(5402),g=n(5593),l=n(7486),o=n(4650),P=n(1364);const m=[{path:"",component:(()=>{class t{constructor(e){this.misurazioneService=e,this.data=[],this.view=[660,390],this.legendPosition=a.tV.Below,this.showLegend=!0,this.showLabels=!0,this.gradient=!1,this.isDoughnut=!0,this.colorScheme={domain:["#6e9f65","#e57113","#bcbcbc","#f4c331","#6fa8dc","#f44336"]},this.setDataOut()}pieTooltipText({data:e}){const i=(0,a.N4)(e.name),u=(0,a.N4)(e.value);return`\n      <span class="tooltip-label">${(0,a.QG)(i)}</span>\n      <span class="tooltip-val">$${u}</span>\n    `}setDataOut(){this.misurazione=this.misurazioneService.getMisurazioneLocalStorage(),this.misurazione.outputMisurazione&&this.misurazione.outputMisurazione.ouputWaterFootPrint&&(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeLavorazioniBlueWaterFootPrint&&"Non Calcolabile"!=this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeLavorazioniBlueWaterFootPrint&&this.data.push({name:"Lavorazioni",value:parseFloat(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeLavorazioniBlueWaterFootPrint)}),this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeAltreLavorazioniBlueWaterFootPrint&&"Non Calcolabile"!=this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeAltreLavorazioniBlueWaterFootPrint&&this.data.push({name:"AltreOperazioni",value:parseFloat(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeAltreLavorazioniBlueWaterFootPrint)}),this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualePesticidiBlueWaterFootPrint&&"Non Calcolabile"!=this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualePesticidiBlueWaterFootPrint&&this.data.push({name:"Pesticidi",value:parseFloat(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualePesticidiBlueWaterFootPrint)}),this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeFertilizzantiBlueWaterFootPrint&&"Non Calcolabile"!=this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeFertilizzantiBlueWaterFootPrint&&this.data.push({name:"Fertilizzanti",value:parseFloat(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeFertilizzantiBlueWaterFootPrint)}),this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeEmissioniAltreAttivitaBlueWaterFootPrint&&"Non Calcolabile"!=this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeEmissioniAltreAttivitaBlueWaterFootPrint&&this.data.push({name:"EmissioniAltreAttivit\xe0",value:parseFloat(this.misurazione.outputMisurazione.ouputWaterFootPrint.percentualeEmissioniAltreAttivitaBlueWaterFootPrint)}))}onActivate(e){console.log("Activate",JSON.parse(JSON.stringify(e)))}onDeactivate(e){console.log("Deactivate",JSON.parse(JSON.stringify(e)))}onSelect(e){console.log("Item clicked",JSON.parse(JSON.stringify(e)))}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(P.Hc))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-water-footprint-pie-chart"]],decls:9,vars:5,consts:[[1,"container"],[1,"form"],[1,"title"],[2,"fill","white",3,"results","view","scheme","tooltipDisabled","gradient","select","activate","deactivate"],["pButton","","type","button","icon","pi pi-arrow-left","routerLink","/result-water-footprint",1,"back-btn"]],template:function(e,i){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),o._uU(3,"BlueWater FP %"),o.qZA(),o._UZ(4,"br"),o.TgZ(5,"ngx-charts-advanced-pie-chart",3),o.NdJ("select",function(s){return i.onSelect(s)})("activate",function(s){return i.onActivate(s)})("deactivate",function(s){return i.onDeactivate(s)}),o.qZA(),o._UZ(6,"br")(7,"br")(8,"button",4),o.qZA()()),2&e&&(o.xp6(5),o.Q6J("results",i.data)("view",i.view)("scheme",i.colorScheme)("tooltipDisabled",!1)("gradient",i.gradient))},dependencies:[c.YI,a.MP,g.Hq,l.rH],styles:[".container[_ngcontent-%COMP%]{align-items:center;background-image:url(wallpaper.ae506ee631960cb4.jpg);display:flex;justify-content:center;height:100vh;margin-top:30px;background-repeat:no-repeat}.form[_ngcontent-%COMP%]{background-color:#15172b;border-radius:20px;box-sizing:border-box;height:600px;padding:20px;width:700px}@media screen and (max-width: 991px){.form[_ngcontent-%COMP%]{overflow:scroll}.form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-left:30%}}.title[_ngcontent-%COMP%]{color:#eee;font-family:sans-serif;font-size:30px;font-weight:600;margin-top:4px;position:fixed;margin-left:12%;margin-bottom:10px}.subtitle[_ngcontent-%COMP%]{color:#eee;font-family:sans-serif;font-size:16px;font-weight:600;margin-top:10px;margin-left:12px}.input-container[_ngcontent-%COMP%]{height:50px;position:relative;width:100%}.ic1[_ngcontent-%COMP%]{margin-top:40px}.ic2[_ngcontent-%COMP%]{margin-top:30px}.input[_ngcontent-%COMP%]{background-color:#303245;border-radius:12px;border:0;box-sizing:border-box;color:#eee;font-size:18px;height:100%;outline:0;padding:4px 20px 0;width:100%}.cut[_ngcontent-%COMP%]{background-color:#15172b;border-radius:10px;height:20px;left:20px;position:absolute;top:-20px;transform:translateY(0);transition:transform .2s;width:76px}.cut-short[_ngcontent-%COMP%]{width:50px}.input[_ngcontent-%COMP%]:focus ~ .cut[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ .cut[_ngcontent-%COMP%]{transform:translateY(8px)}.placeholder[_ngcontent-%COMP%]{color:#65657b;font-family:sans-serif;left:20px;line-height:14px;pointer-events:none;position:absolute;transform-origin:0 50%;transition:transform .2s,color .2s;top:20px}.input[_ngcontent-%COMP%]:focus ~ .placeholder[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ .placeholder[_ngcontent-%COMP%]{transform:translateY(-30px) translate(10px) scale(.75)}.input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ .placeholder[_ngcontent-%COMP%]{color:#808097}.input[_ngcontent-%COMP%]:focus ~ .placeholder[_ngcontent-%COMP%]{color:#dc2f55}.submit[_ngcontent-%COMP%]{background-color:#08d;border-radius:12px;border:0;box-sizing:border-box;color:#eee;cursor:pointer;font-size:18px;height:50px;margin-top:38px;text-align:center;width:100%}[_nghost-%COMP%]     .input-switch{margin-top:2%;margin-left:40%;display:block}.submit[_ngcontent-%COMP%]:active{background-color:#06b}.input-switch-span[_ngcontent-%COMP%]{color:#fff;font-size:medium;margin-left:31%}.input-class[_ngcontent-%COMP%]{margin-top:-3%;margin-left:10.5%}[_nghost-%COMP%]     .p-inputnumber-buttons-stacked .p-inputnumber-input{width:230px}.back-btn[_ngcontent-%COMP%]{position:fixed;margin-left:16%}@media screen and (max-width: 991px){.back-btn[_ngcontent-%COMP%]{margin-left:39%}}.next-btn[_ngcontent-%COMP%]{margin-left:2%}  .chart-legend .legend-title-text{color:#fff}  .advanced-pie-legend{color:#fff}  .advanced-pie-legend .legend-item:hover{color:#06b!important}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[l.Bz.forChild(m),l.Bz]}),t})(),z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[h.ez,d.u5,c.Pc,a.a4,g.hJ,f]}),t})()}}]);