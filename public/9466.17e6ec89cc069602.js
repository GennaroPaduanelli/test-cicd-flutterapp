"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9466],{9466:(J,m,r)=>{r.r(m),r.d(m,{AltreLavorazioniPageModule:()=>R});var d=r(6895),s=r(433),g=r(603),u=r(7486),t=r(4650),A=r(1364),z=r(5593),h=r(1493),b=r(805),v=r(5702),L=r(5047),_=r(1383),p=r(403),f=r(1740);const C=["dt"];function T(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.apriModale())}),t.qZA(),t._uU(1,"\xa0 "),t._UZ(2,"button",14),t._uU(3,"\xa0 "),t._UZ(4,"button",15),t._uU(5,"\xa0 "),t.TgZ(6,"span",16),t._UZ(7,"i",17),t.TgZ(8,"input",18),t.NdJ("input",function(i){t.CHM(e);const n=t.oxw();return t.KtG(n.applyFilterGlobal(i,"contains"))}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("disabled",!e.altreLavorazioni.length)}}function P(o,l){1&o&&(t.TgZ(0,"tr")(1,"th",19),t._uU(2,"Lavorazione"),t._UZ(3,"p-sortIcon",20),t.qZA(),t.TgZ(4,"th",21),t._uU(5,"NumeroPassate "),t._UZ(6,"p-sortIcon",22),t.qZA(),t.TgZ(7,"th",21),t._uU(8,"KgCo2Ettaro"),t._UZ(9,"p-sortIcon",22),t.qZA(),t.TgZ(10,"th",21),t._uU(11,"M3BlueWaterEttaro"),t._UZ(12,"p-sortIcon",22),t.qZA(),t._UZ(13,"th"),t.qZA())}function x(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td",23),t._uU(2),t.qZA(),t.TgZ(3,"td",23),t._uU(4),t.qZA(),t.TgZ(5,"td",23),t._uU(6),t.qZA(),t.TgZ(7,"td",23),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"button",24),t.NdJ("click",function(){const n=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.aggiornaAltraLavorazione(n))}),t.qZA(),t.TgZ(11,"button",25),t.NdJ("click",function(){const n=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.eliminaAltraLavorazione(n))}),t.qZA()()()}if(2&o){const e=l.$implicit;t.xp6(2),t.Oqu(e.operazione),t.xp6(2),t.Oqu(e.numeroPassate),t.xp6(2),t.Oqu(e.co2Ettaro),t.xp6(2),t.Oqu(e.m3BlueWaterEttaro)}}function Z(o,l){if(1&o&&(t.TgZ(0,"div",26),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" In totale ci sono ",e.altreLavorazioni?e.altreLavorazioni.length:0," lavorazioni. ")}}function M(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",27)(1,"label",30),t._uU(2,"KgEttaro"),t.qZA(),t.TgZ(3,"p-inputNumber",31),t.NdJ("ngModelChange",function(i){t.CHM(e);const n=t.oxw(2);return t.KtG(n.selectedQuantitaKgEttaro=i)}),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(3),t.Q6J("ngModel",e.selectedQuantitaKgEttaro)("showButtons",!0)("min",1)("required",!0)}}function S(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",27)(1,"label",28),t._uU(2,"Tipo Lavorazione"),t.qZA(),t.TgZ(3,"p-dropdown",29),t.NdJ("onChange",function(i){t.CHM(e);const n=t.oxw();return t.KtG(n.onChange(i))})("ngModelChange",function(i){t.CHM(e);const n=t.oxw();return t.KtG(n.selectedTipoLavorazione=i)}),t.qZA()(),t._UZ(4,"br")(5,"br"),t.TgZ(6,"div",27)(7,"label",30),t._uU(8,"Numero Passate"),t.qZA(),t.TgZ(9,"p-inputNumber",31),t.NdJ("ngModelChange",function(i){t.CHM(e);const n=t.oxw();return t.KtG(n.selectedNumeroPassate=i)}),t.qZA()(),t._UZ(10,"br"),t.YNc(11,M,4,4,"div",32)}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("disabled",e.updating)("options",e.tipiAltreLavorazioni)("ngModel",e.selectedTipoLavorazione),t.xp6(6),t.Q6J("ngModel",e.selectedNumeroPassate)("showButtons",!0)("min",1)("required",!0),t.xp6(2),t.Q6J("ngIf",e.imballaturaActive)}}function E(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.chiudiDialogAltraLavorazione())}),t.qZA(),t.TgZ(1,"button",34),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.salvaAltraLavorazione())}),t.qZA()}}const U=function(){return["operazione","co2Ettaro","numeroPassate"]},N=function(){return{width:"450px"}},w=[{path:"",component:(()=>{class o{constructor(e){this.misurazioneService=e,this.submitted=!1,this.altreLavorazioni=[],this.altreLavorazioniSelezionate=[],this.dialogLavorazioni=!1,this.tipiAltreLavorazioni=[],this.tipiAltreLavorazioniCheck=[],this.updating=!1,this.imballaturaActive=!1,this.tipiAltreLavorazioni=[{name:"Semina",code:"Semina",co2Ettaro:24,m3BlueWaterEttaro:98.9},{name:"SeminaCombinato",code:"SeminaCombinato",co2Ettaro:83.9,m3BlueWaterEttaro:306},{name:"SeminaSuSodo",code:"SeminaSuSodo",co2Ettaro:81.5,m3BlueWaterEttaro:338.36},{name:"RaccoltaCombinato",code:"RaccoltaCombinato",co2Ettaro:162,m3BlueWaterEttaro:344.27},{name:"Imballatura",code:"Imballatura",co2Ettaro:.00971,m3BlueWaterEttaro:.04}],this.tipiAltreLavorazioniCheck=[{name:"Semina",code:"Semina",co2Ettaro:24,m3BlueWaterEttaro:98.9},{name:"SeminaCombinato",code:"SeminaCombinato",co2Ettaro:83.9,m3BlueWaterEttaro:306},{name:"SeminaSuSodo",code:"SeminaSuSodo",co2Ettaro:81.5,m3BlueWaterEttaro:338.36},{name:"RaccoltaCombinato",code:"RaccoltaCombinato",co2Ettaro:162,m3BlueWaterEttaro:344.27},{name:"Imballatura",code:"Imballatura",co2Ettaro:.00971,m3BlueWaterEttaro:.04}],this.tipiAltreLavorazioni.sort((a,i)=>a.name.localeCompare(i.name)),this.misurazione=this.misurazioneService.getMisurazioneLocalStorage(),this.misurazione&&(null==this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni?(this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni=[],this.misurazione.dataOraUltimoAggiornamento=(new Date).toUTCString(),this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione,this.misurazione),this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione)):(this.altreLavorazioni=this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni,this.tipiAltreLavorazioni=this.tipiAltreLavorazioni.filter(a=>!this.altreLavorazioni.map(i=>i.operazione).includes(a.name))))}applyFilterGlobal(e,a){this.dt.filterGlobal(e.target.value,a)}apriModale(){this.updating=!1,this.imballaturaActive=!!this.tipiAltreLavorazioni.find(e=>"Imballatura"===e.name),this.tipiAltreLavorazioni.length>0&&(this.dialogLavorazioni=!0),this.selectedNumeroPassate=1,this.selectedQuantitaKgEttaro=void 0}aggiornaAltraLavorazione(e){this.imballaturaActive="Imballatura"===e.operazione,this.updating=!0,this.dialogLavorazioni=!0,this.selectedNumeroPassate=e.numeroPassate,this.selectedQuantitaKgEttaro=e.quantit\u00e0KgEttaro,this.selectedTipoLavorazione=this.tipiAltreLavorazioniCheck.find(a=>a.name==e.operazione),this.tipiAltreLavorazioni.find(a=>a.name==e.operazione)||(this.tipiAltreLavorazioni.push(this.selectedTipoLavorazione),this.tipiAltreLavorazioni.sort((a,i)=>a.name.localeCompare(i.name)),this.dt.totalRecords=this.altreLavorazioni.length)}onChange(e){this.imballaturaActive="Imballatura"==e.value.name}eliminaAltraLavorazione(e){this.altreLavorazioni=this.altreLavorazioni.filter(a=>a.operazione!=e.operazione),this.tipiAltreLavorazioni.find(a=>a.name==e.operazione)||(this.tipiAltreLavorazioni.push(this.tipiAltreLavorazioniCheck.find(a=>a.name==e.operazione)),this.tipiAltreLavorazioni.sort((a,i)=>a.name.localeCompare(i.name))),this.selectedTipoLavorazione=void 0,this.selectedQuantitaKgEttaro=void 0,this.dt.totalRecords=this.altreLavorazioni.length,this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni=this.altreLavorazioni,this.misurazione.dataOraUltimoAggiornamento=(new Date).toUTCString(),this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione),this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione,this.misurazione)}chiudiDialogAltraLavorazione(){this.dialogLavorazioni=!1,this.altreLavorazioni.forEach(e=>{let a=this.tipiAltreLavorazioni.find(i=>i.name==e.operazione);a&&(this.tipiAltreLavorazioni=this.tipiAltreLavorazioni.filter(i=>i.name!==(null==a?void 0:a.name)))})}salvaAltraLavorazione(){this.altreLavorazioni.find(i=>i.operazione==this.selectedTipoLavorazione.name)&&(this.altreLavorazioni=this.altreLavorazioni.filter(i=>i.operazione!==this.selectedTipoLavorazione.name)),this.altraLavorazione={},this.altraLavorazione.numeroPassate=this.selectedNumeroPassate,this.altraLavorazione.quantit\u00e0KgEttaro=this.selectedQuantitaKgEttaro;let e=this.selectedTipoLavorazione.co2Ettaro*this.selectedNumeroPassate,a=this.selectedTipoLavorazione.m3BlueWaterEttaro*this.selectedNumeroPassate;this.altraLavorazione.co2Ettaro="Imballatura"==this.selectedTipoLavorazione.name?(this.selectedTipoLavorazione.co2Ettaro*this.selectedQuantitaKgEttaro*this.selectedNumeroPassate).toFixed(3).toString():e.toFixed(3).toString(),this.altraLavorazione.m3BlueWaterEttaro="Imballatura"==this.selectedTipoLavorazione.name?(this.selectedTipoLavorazione.m3BlueWaterEttaro*this.selectedQuantitaKgEttaro*this.selectedNumeroPassate).toFixed(3).toString():a.toFixed(3).toString(),this.altraLavorazione.operazione=this.selectedTipoLavorazione.name,this.altreLavorazioni.push(this.altraLavorazione),this.tipiAltreLavorazioni=this.tipiAltreLavorazioni.filter(i=>i.name!=this.altraLavorazione.operazione),this.dialogLavorazioni=!1,this.dt.totalRecords=this.altreLavorazioni.length,this.selectedTipoLavorazione=void 0,this.misurazione.inputMisurazione.operazioniColturali.altreLavorazioni=this.altreLavorazioni,this.misurazione.dataOraUltimoAggiornamento=(new Date).toUTCString(),this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione),this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione,this.misurazione)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(A.Hc))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-altre-lavorazioni"]],viewQuery:function(e,a){if(1&e&&t.Gf(C,5),2&e){let i;t.iGM(i=t.CRH())&&(a.dt=i.first)}},decls:15,vars:14,consts:[[1,"container"],["id","card",1,"card"],["styleClass","p-mb-4"],[1,"title"],["pTemplate","left"],["scrollHeight","310px","dataKey","id","currentPageReportTemplate","Visualizzazione {first} su {last} di totale {totalRecords} voci",1,"table",3,"value","rows","paginator","virtualScroll","globalFilterFields","selection","rowHover","showCurrentPageReport","selectionChange"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["header","Dettagli lavorazione","styleClass","p-fluid",3,"visible","modal","visibleChange","onHide"],["pTemplate","content"],["pTemplate","footer"],["pButton","","pRipple","","icon","pi pi-plus",1,"p-button-success","p-mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-arrow-left","routerLink","/lavorazioni",1,"p-button-primary","p-mr-2"],["pButton","","pRipple","","icon","pi pi-arrow-right","routerLink","/pesticidi",1,"p-button-primary","p-mr-2",3,"disabled"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Ricerca...",1,"txt-search",3,"input"],["pSortableColumn","operazione",1,"t-header"],["field","name"],["pSortableColumn","numeroPassate",1,"t-header"],["field","price"],[1,"btn-edit"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","p-mr-2","btn-edit",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning","btn-edit",3,"click"],[1,"p-d-flex","p-ai-center","p-jc-between"],[1,"p-field"],["for","tipoLavorazioneList"],["id","tipoLavorazioneList","optionLabel","name",3,"disabled","options","ngModel","onChange","ngModelChange"],["for","numeroPassate"],[3,"ngModel","showButtons","min","required","ngModelChange"],["class","p-field",4,"ngIf"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p-toolbar",2)(3,"h2",3),t._uU(4,"Altre Operazioni"),t.qZA(),t._UZ(5,"br"),t.YNc(6,T,9,1,"ng-template",4),t.qZA(),t.TgZ(7,"p-table",5,6),t.NdJ("selectionChange",function(n){return a.altreLavorazioniSelezionate=n}),t.YNc(9,P,14,0,"ng-template",7),t.YNc(10,x,12,4,"ng-template",8),t.YNc(11,Z,2,1,"ng-template",9),t.qZA()(),t.TgZ(12,"p-dialog",10),t.NdJ("visibleChange",function(n){return a.dialogLavorazioni=n})("onHide",function(){return a.chiudiDialogAltraLavorazione()}),t.YNc(13,S,12,8,"ng-template",11),t.YNc(14,E,2,0,"ng-template",12),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("value",a.altreLavorazioni)("rows",10)("paginator",!0)("virtualScroll",!1)("globalFilterFields",t.DdM(12,U))("selection",a.altreLavorazioniSelezionate)("rowHover",!0)("showCurrentPageReport",!0),t.xp6(5),t.Akn(t.DdM(13,N)),t.Q6J("visible",a.dialogLavorazioni)("modal",!0))},dependencies:[d.O5,s.JJ,s.Q7,s.On,g.YI,z.Hq,h.V,b.jx,v.Lt,L.Rn,_.o,p.iA,p.lQ,p.fz,f.o,u.rH],styles:["#card[_ngcontent-%COMP%]{margin-top:16%}.t-header[_ngcontent-%COMP%]{font-size:12px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;font-weight:700;margin-left:0}.container[_ngcontent-%COMP%]{background-image:url(/assets/images/wallpaper.jpg);background-repeat:no-repeat;height:100%;width:100%}[_nghost-%COMP%]     .p-datatable .p-datatable-tbody>tr>td{padding:.7rem}[_nghost-%COMP%]     .p-datatable .p-datatable-thead>tr>th{padding:.2rem}[_nghost-%COMP%]     .p-button.p-button-icon-only.p-button-rounded{height:3rem;margin-top:3px}[_nghost-%COMP%]     .p-datatable .p-sortable-column .p-sortable-column-icon{margin-left:.3rem}[_nghost-%COMP%]     .p-toolbar{height:105px}.title[_ngcontent-%COMP%]{margin-top:-1.5rem;padding-left:3rem;padding-bottom:0}.txt-search[_ngcontent-%COMP%]{width:190px}"]}),o})()}];let B=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(w),u.Bz]}),o})(),R=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,s.u5,g.Pc,z.hJ,h.S,v.kW,L.L$,_.V,p.U$,f.j,B]}),o})()}}]);