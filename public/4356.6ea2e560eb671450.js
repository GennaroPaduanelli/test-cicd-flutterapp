"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4356],{4356:(W,u,s)=>{s.r(u),s.d(u,{PesticidiPageModule:()=>w});var C=s(6895),c=s(433),m=s(603),d=s(7486),i=s(4650),Z=s(1364),g=s(5593),h=s(1493),T=s(805),P=s(5702),_=s(5047),b=s(1383),l=s(403),f=s(1740);const v=["dt"];function z(n,r){if(1&n){const t=i.EpF();i.TgZ(0,"button",13),i.NdJ("click",function(){i.CHM(t);const o=i.oxw();return i.KtG(o.apriModale())}),i.qZA(),i._uU(1,"\xa0 "),i._UZ(2,"button",14),i._uU(3,"\xa0 "),i._UZ(4,"button",15),i._uU(5,"\xa0 "),i.TgZ(6,"span",16),i._UZ(7,"i",17),i.TgZ(8,"input",18),i.NdJ("input",function(o){i.CHM(t);const a=i.oxw();return i.KtG(a.applyFilterGlobal(o,"contains"))}),i.qZA()()}if(2&n){const t=i.oxw();i.xp6(4),i.Q6J("disabled",!t.pesticidi.length)}}function M(n,r){1&n&&(i.TgZ(0,"tr")(1,"th",19),i._uU(2,"NomePesticidio"),i._UZ(3,"p-sortIcon",20),i.qZA(),i.TgZ(4,"th",21),i._uU(5,"NumeroPassate "),i._UZ(6,"p-sortIcon",22),i.qZA(),i.TgZ(7,"th",21),i._uU(8,"Quantit\xe0KgEttaro "),i._UZ(9,"p-sortIcon",22),i.qZA(),i.TgZ(10,"th",21),i._uU(11,"PercentualePrincipioAttivo"),i._UZ(12,"p-sortIcon",22),i.qZA(),i.TgZ(13,"th",21),i._uU(14,"KgCo2Ettaro"),i._UZ(15,"p-sortIcon",22),i.qZA(),i.TgZ(16,"th",21),i._uU(17,"M3BlueWaterEttaro"),i._UZ(18,"p-sortIcon",22),i.qZA(),i._UZ(19,"th"),i.qZA())}function x(n,r){if(1&n){const t=i.EpF();i.TgZ(0,"tr")(1,"td",23),i._uU(2),i.qZA(),i.TgZ(3,"td",23),i._uU(4),i.qZA(),i.TgZ(5,"td",23),i._uU(6),i.qZA(),i.TgZ(7,"td",23),i._uU(8),i.qZA(),i.TgZ(9,"td",23),i._uU(10),i.qZA(),i.TgZ(11,"td",23),i._uU(12),i.qZA(),i.TgZ(13,"td")(14,"button",24),i.NdJ("click",function(){const a=i.CHM(t).$implicit,p=i.oxw();return i.KtG(p.aggiornaPesticidio(a))}),i.qZA(),i.TgZ(15,"button",25),i.NdJ("click",function(){const a=i.CHM(t).$implicit,p=i.oxw();return i.KtG(p.eliminaPesticidio(a))}),i.qZA()()()}if(2&n){const t=r.$implicit;i.xp6(2),i.Oqu(t.nomePesticidio),i.xp6(2),i.Oqu(t.numeroPassate),i.xp6(2),i.Oqu(t.quantitaKgEttaro),i.xp6(2),i.Oqu(t.percentualePrincipioAttivo),i.xp6(2),i.Oqu(t.co2Ettaro),i.xp6(2),i.Oqu(t.m3BlueWaterEttaro)}}function A(n,r){if(1&n&&(i.TgZ(0,"div",26),i._uU(1),i.qZA()),2&n){const t=i.oxw();i.xp6(1),i.hij(" In totale ci sono ",t.pesticidi?t.pesticidi.length:0," pesticidi. ")}}function U(n,r){if(1&n){const t=i.EpF();i.TgZ(0,"div",27)(1,"label",28),i._uU(2,"Nome Pesticidio"),i.qZA(),i.TgZ(3,"p-dropdown",29),i.NdJ("ngModelChange",function(o){i.CHM(t);const a=i.oxw();return i.KtG(a.selectedTipoPesticidio=o)}),i.qZA()(),i._UZ(4,"br")(5,"br"),i.TgZ(6,"div",27)(7,"label",30),i._uU(8,"Numero Passate"),i.qZA(),i.TgZ(9,"p-inputNumber",31),i.NdJ("ngModelChange",function(o){i.CHM(t);const a=i.oxw();return i.KtG(a.selectedNumeroPassate=o)}),i.qZA()(),i._UZ(10,"br"),i.TgZ(11,"div",27)(12,"label",30),i._uU(13,"Quantit\xe0 KgEttaro"),i.qZA(),i.TgZ(14,"p-inputNumber",31),i.NdJ("ngModelChange",function(o){i.CHM(t);const a=i.oxw();return i.KtG(a.selectedQuantitaKgEttaro=o)}),i.qZA()(),i._UZ(15,"br"),i.TgZ(16,"div",27)(17,"label",30),i._uU(18,"Percentuale Principio Attivo"),i.qZA(),i.TgZ(19,"p-inputNumber",31),i.NdJ("ngModelChange",function(o){i.CHM(t);const a=i.oxw();return i.KtG(a.selectedPercentualePrincipioAttivo=o)}),i.qZA()(),i._UZ(20,"br")}if(2&n){const t=i.oxw();i.xp6(3),i.Q6J("disabled",t.updating)("options",t.tipiPesticidio)("ngModel",t.selectedTipoPesticidio),i.xp6(6),i.Q6J("ngModel",t.selectedNumeroPassate)("showButtons",!0)("min",1)("required",!0),i.xp6(5),i.Q6J("ngModel",t.selectedQuantitaKgEttaro)("showButtons",!0)("min",1)("required",!0),i.xp6(5),i.Q6J("ngModel",t.selectedPercentualePrincipioAttivo)("showButtons",!0)("min",1)("required",!0)}}function E(n,r){if(1&n){const t=i.EpF();i.TgZ(0,"button",32),i.NdJ("click",function(){i.CHM(t);const o=i.oxw();return i.KtG(o.chiudiDialogPesticidio())}),i.qZA(),i.TgZ(1,"button",33),i.NdJ("click",function(){i.CHM(t);const o=i.oxw();return i.KtG(o.salvaPesticidio())}),i.qZA()}}const N=function(){return["operazione","co2Ettaro","numeroPassate"]},S=function(){return{width:"450px"}},q=[{path:"",component:(()=>{class n{constructor(t){this.misurazioneService=t,this.pesticidi=[],this.pesticidiSelezionati=[],this.dialogPesticidiVisible=!1,this.tipiPesticidio=[],this.tipiPesticidioCheck=[],this.updating=!1,this.tipiPesticidio=[{name:"SolfatoDiRame",code:"SolfatoDiRame",co2Ettaro:2.07,n1Carbon:1.45,n2Carbon:4.17,n1Water:5.03,n2Water:128.33},{name:"OssidoDiRame",code:"OssidoDiRame",co2Ettaro:3.442,n1Carbon:1.45,n2Carbon:6.64,n1Water:5.03,n2Water:232.95},{name:"BicarbonatoDiPotassio",code:"BicarbonatoDiPotassio",co2Ettaro:7.11,n1Carbon:1.45,n2Carbon:2.83,n1Water:5.03,n2Water:29.59},{name:"CalceIdrata",code:"CalceIdrata",co2Ettaro:3.23,n1Carbon:1.45,n2Carbon:.89,n1Water:5.03,n2Water:.00017735978773},{name:"Zolfo",code:"Zolfo",co2Ettaro:2.89,n1Carbon:1.45,n2Carbon:.144,n1Water:5.03,n2Water:.05}],this.tipiPesticidioCheck=[{name:"SolfatoDiRame",code:"SolfatoDiRame",co2Ettaro:2.07,n1Carbon:1.45,n2Carbon:4.17,n1Water:5.03,n2Water:128.33},{name:"OssidoDiRame",code:"OssidoDiRame",co2Ettaro:3.442,n1Carbon:1.45,n2Carbon:6.64,n1Water:5.03,n2Water:232.95},{name:"BicarbonatoDiPotassio",code:"BicarbonatoDiPotassio",co2Ettaro:7.11,n1Carbon:1.45,n2Carbon:2.83,n1Water:5.03,n2Water:29.59},{name:"CalceIdrata",code:"CalceIdrata",co2Ettaro:3.23,n1Carbon:1.45,n2Carbon:.89,n1Water:5.03,n2Water:.00017735978773},{name:"Zolfo",code:"Zolfo",co2Ettaro:2.89,n1Carbon:1.45,n2Carbon:.144,n1Water:5.03,n2Water:.05}],this.tipiPesticidio.sort((e,o)=>e.name.localeCompare(o.name)),this.misurazione=this.misurazioneService.getMisurazioneLocalStorage(),this.misurazione&&(null==this.misurazione.inputMisurazione.operazioniColturali.pesticidi?(this.misurazione.inputMisurazione.operazioniColturali.pesticidi=[],this.misurazione.dataOraUltimoAggiornamento=(new Date).toUTCString(),this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione),this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione,this.misurazione)):(this.pesticidi=this.misurazione.inputMisurazione.operazioniColturali.pesticidi,this.tipiPesticidio=this.tipiPesticidio.filter(e=>!this.pesticidi.map(o=>o.nomePesticidio).includes(e.name))))}applyFilterGlobal(t,e){this.dt.filterGlobal(t.target.value,e)}apriModale(){this.selectedQuantitaKgEttaro=void 0,this.selectedPercentualePrincipioAttivo=void 0,this.updating=!1,this.tipiPesticidio.length>0&&(this.dialogPesticidiVisible=!0),this.selectedNumeroPassate=1}aggiornaPesticidio(t){this.updating=!0,this.dialogPesticidiVisible=!0,this.selectedNumeroPassate=t.numeroPassate,this.selectedQuantitaKgEttaro=t.quantitaKgEttaro,this.selectedPercentualePrincipioAttivo=t.percentualePrincipioAttivo,this.selectedTipoPesticidio=this.tipiPesticidioCheck.find(e=>e.name==t.nomePesticidio),this.tipiPesticidio.find(e=>e.name==t.nomePesticidio)||(this.tipiPesticidio.push(this.selectedTipoPesticidio),this.tipiPesticidio.sort((e,o)=>e.name.localeCompare(o.name)),this.dt.totalRecords=this.pesticidi.length)}eliminaPesticidio(t){this.pesticidi=this.pesticidi.filter(e=>e.nomePesticidio!=t.nomePesticidio),this.selectedTipoLavorazione=void 0,this.dt.totalRecords=this.pesticidi.length,this.tipiPesticidio.find(e=>e.name==t.nomePesticidio)||(this.tipiPesticidio.push(this.tipiPesticidioCheck.find(e=>e.name==t.nomePesticidio)),this.tipiPesticidio.sort((e,o)=>e.name.localeCompare(o.name))),this.misurazione.inputMisurazione.operazioniColturali.pesticidi=this.pesticidi,this.misurazione.dataOraUltimoAggiornamento=(new Date).toUTCString(),this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione),this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione,this.misurazione)}chiudiDialogPesticidio(){this.dialogPesticidiVisible=!1,this.pesticidi.forEach(t=>{let e=this.tipiPesticidio.find(o=>o.name==t.nomePesticidio);e&&(this.tipiPesticidio=this.tipiPesticidio.filter(o=>o.name!==(null==e?void 0:e.name)))})}salvaPesticidio(){if(this.selectedPercentualePrincipioAttivo&&this.selectedNumeroPassate&&this.selectedQuantitaKgEttaro){this.pesticidi.find(o=>o.nomePesticidio==this.selectedTipoPesticidio.name)&&(this.pesticidi=this.pesticidi.filter(o=>o.nomePesticidio!==this.selectedTipoPesticidio.name)),this.pesticidio={},this.pesticidio.numeroPassate=this.selectedNumeroPassate;let e=this.selectedTipoPesticidio.n1Water*this.selectedNumeroPassate+this.selectedTipoPesticidio.n2Water*(this.selectedQuantitaKgEttaro*this.selectedPercentualePrincipioAttivo/100);this.pesticidio.co2Ettaro=(this.selectedTipoPesticidio.n1Carbon*this.selectedNumeroPassate+this.selectedTipoPesticidio.n2Carbon*(this.selectedQuantitaKgEttaro*this.selectedPercentualePrincipioAttivo/100)).toFixed(3).toString(),this.pesticidio.m3BlueWaterEttaro=e.toFixed(3).toString(),this.pesticidio.nomePesticidio=this.selectedTipoPesticidio.name,this.pesticidio.quantitaKgEttaro=this.selectedQuantitaKgEttaro,this.pesticidio.percentualePrincipioAttivo=this.selectedPercentualePrincipioAttivo,this.pesticidi.push(this.pesticidio),this.tipiPesticidio=this.tipiPesticidio.filter(o=>o.name!=this.pesticidio.nomePesticidio),this.dt.totalRecords=this.pesticidi.length,this.dialogPesticidiVisible=!1,this.misurazione.inputMisurazione.operazioniColturali.pesticidi=this.pesticidi,this.misurazione.dataOraUltimoAggiornamento=(new Date).toUTCString(),this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione),this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione,this.misurazione)}}}return n.\u0275fac=function(t){return new(t||n)(i.Y36(Z.Hc))},n.\u0275cmp=i.Xpm({type:n,selectors:[["app-pesticidi"]],viewQuery:function(t,e){if(1&t&&i.Gf(v,5),2&t){let o;i.iGM(o=i.CRH())&&(e.dt=o.first)}},decls:15,vars:14,consts:[[1,"container"],["id","card",1,"card"],["styleClass","p-mb-4"],[1,"title"],["pTemplate","left"],["scrollHeight","310px","dataKey","id","currentPageReportTemplate","Visualizzazione {first} su {last} di totale {totalRecords} voci",1,"table",3,"value","rows","paginator","virtualScroll","globalFilterFields","selection","rowHover","showCurrentPageReport","selectionChange"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["header","Dettagli Pesticidio","styleClass","p-fluid",3,"visible","modal","visibleChange","onHide"],["pTemplate","content"],["pTemplate","footer"],["pButton","","pRipple","","icon","pi pi-plus",1,"p-button-success","p-mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-arrow-left","routerLink","/altre-lavorazioni",1,"p-button-primary","p-mr-2"],["pButton","","pRipple","","icon","pi pi-arrow-right","routerLink","/fertilizzanti",1,"p-button-primary","p-mr-2",3,"disabled"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Ricerca...",1,"txt-search",3,"input"],["pSortableColumn","nomePesticidio",1,"t-header"],["field","name"],["pSortableColumn","numeroPassate",1,"t-header"],["field","price"],[1,"btn-edit"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","p-mr-2","btn-edit",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning","btn-edit",3,"click"],[1,"p-d-flex","p-ai-center","p-jc-between"],[1,"p-field"],["for","tipoLavorazioneList"],["id","tipoLavorazioneList","optionLabel","name",3,"disabled","options","ngModel","ngModelChange"],["for","numeroPassate"],[3,"ngModel","showButtons","min","required","ngModelChange"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0)(1,"div",1)(2,"p-toolbar",2)(3,"h2",3),i._uU(4,"Pesticidi"),i.qZA(),i._UZ(5,"br"),i.YNc(6,z,9,1,"ng-template",4),i.qZA(),i.TgZ(7,"p-table",5,6),i.NdJ("selectionChange",function(a){return e.pesticidiSelezionati=a}),i.YNc(9,M,20,0,"ng-template",7),i.YNc(10,x,16,6,"ng-template",8),i.YNc(11,A,2,1,"ng-template",9),i.qZA()(),i.TgZ(12,"p-dialog",10),i.NdJ("visibleChange",function(a){return e.dialogPesticidiVisible=a})("onHide",function(){return e.chiudiDialogPesticidio()}),i.YNc(13,U,21,15,"ng-template",11),i.YNc(14,E,2,0,"ng-template",12),i.qZA()()),2&t&&(i.xp6(7),i.Q6J("value",e.pesticidi)("rows",10)("paginator",!0)("virtualScroll",!1)("globalFilterFields",i.DdM(12,N))("selection",e.pesticidiSelezionati)("rowHover",!0)("showCurrentPageReport",!0),i.xp6(5),i.Akn(i.DdM(13,S)),i.Q6J("visible",e.dialogPesticidiVisible)("modal",!0))},dependencies:[c.JJ,c.Q7,c.On,m.YI,g.Hq,h.V,T.jx,P.Lt,_.Rn,b.o,l.iA,l.lQ,l.fz,f.o,d.rH],styles:["#card[_ngcontent-%COMP%]{margin-top:16%}.t-header[_ngcontent-%COMP%]{font-size:12px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;font-weight:700;margin-left:0}.container[_ngcontent-%COMP%]{background-image:url(/assets/images/wallpaper.jpg);background-repeat:no-repeat;height:100%;width:100%}[_nghost-%COMP%]     .p-datatable .p-datatable-tbody>tr>td{padding:.7rem}[_nghost-%COMP%]     .p-datatable .p-datatable-thead>tr>th{padding:.2rem}[_nghost-%COMP%]     .p-button.p-button-icon-only.p-button-rounded{height:3rem;margin-top:3px}[_nghost-%COMP%]     .p-datatable .p-sortable-column .p-sortable-column-icon{margin-left:.3rem}[_nghost-%COMP%]     .p-toolbar{height:105px}[_nghost-%COMP%]     .table{width:60%}.title[_ngcontent-%COMP%]{margin-top:-1.5rem;padding-left:3rem;padding-bottom:0}.txt-search[_ngcontent-%COMP%]{width:190px}"]}),n})()}];let R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[d.Bz.forChild(q),d.Bz]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[C.ez,c.u5,m.Pc,g.hJ,h.S,P.kW,_.L$,b.V,l.U$,f.j,R]}),n})()}}]);