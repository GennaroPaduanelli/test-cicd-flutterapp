"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1908],{1908:(M,s,r)=>{r.r(s),r.d(s,{DatiProduttiviPageModule:()=>C});var c=r(6895),d=r(433),P=r(603),l=r(7486),p=r(1364),t=r(4650),g=r(5047),v=r(5593);const h=[{path:"",component:(()=>{class o{constructor(a){this.misurazioneService=a,this.isWaterFootPrint=!1,this.datiProduttivi={datiProduttiviWaterFootPrint:{},datiProduttiviCarbonFootPrint:{}},this.misurazione=this.misurazioneService.getMisurazioneLocalStorage(),null!=this.misurazione&&null!=this.misurazione.inputMisurazione.datiProduttivi&&(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint&&!isNaN(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro)&&!isNaN(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro)&&!isNaN(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro)&&!isNaN(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella)&&!isNaN(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeProteineGranella)&&(this.datiProduttivi.datiProduttiviCarbonFootPrint=this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint),this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviWaterFootPrint&&!isNaN(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviWaterFootPrint.resaGranellaKgEttaro)&&!isNaN(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviWaterFootPrint.pagliaAsportataKgEttaro)&&!isNaN(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviWaterFootPrint.percentualeUmiditaGranella)&&!isNaN(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviWaterFootPrint.percentualeProteineGranella)&&!isNaN(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviWaterFootPrint.resaGranellaSeccaKgEttaro)&&!isNaN(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviWaterFootPrint.proteineGranellaKgEttaro)&&(this.datiProduttivi.datiProduttiviWaterFootPrint=this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviWaterFootPrint))}ngOnInit(){}onBackCarboonFootPrint(){if(this.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro&&this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella&&this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro){let a=new p.g1(this.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro,this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella,this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro);null==this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro&&(this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro=a.agDmtNumberKgAnno);let i=!1;this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro!=this.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro?(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro=this.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro,i=!0):i=!1,this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro!=this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro?(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro=this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro,i=!0):i=!1,this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro!=this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro?(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro=this.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro,i=!0):i=!1,this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella!=this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella?(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella=this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella,i=!0):i=!1,this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeProteineGranella!=this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeProteineGranella?(this.misurazione.inputMisurazione.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeProteineGranella=this.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeProteineGranella,i=!0):i=!1,this.misurazione.inputMisurazione.residuiColturali=a,i&&(this.misurazione.dataOraUltimoAggiornamento=(new Date).toUTCString()),this.misurazioneService.salvaMisurazioneLocalStorage(this.misurazione),this.misurazioneService.updateMisurazione(this.misurazione.nomeMisurazione,this.misurazione)}}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(p.Hc))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dati-produttivi"]],decls:31,vars:22,consts:[[1,"container"],[1,"form"],[1,"title"],[1,"p-field","input-class"],["for","resaGranellaKgEttaro",2,"color","white"],["id","resaGranellaKgEttaro","placeholder","Resa Granella KgEttaro",1,"data-input",3,"ngModel","showButtons","min","required","ngModelChange"],["for","pagliaProdottaKgEttaro",2,"color","white"],["id","pagliaProdottaKgEttaro","placeholder","Paglia Prodotta KgEttaro",1,"data-input",3,"ngModel","showButtons","min","required","ngModelChange"],["for","pagliaAsportataKgEttaro",2,"color","white"],["id","pagliaAsportataKgEttaro","placeholder","Paglia Asportata KgEttaro",1,"data-input",3,"ngModel","showButtons","min","required","ngModelChange"],["for","percentualeUmiditaGranella",2,"color","white"],["id","percentualeUmiditaGranella","placeholder","Umidit\xe0 Granella %",1,"data-input",3,"ngModel","showButtons","min","max","required","ngModelChange"],["for","percentualeProteineGranella",2,"color","white"],["id","percentualeProteineGranella","placeholder","Proteine Granella %",1,"data-input",3,"ngModel","showButtons","min","max","required","ngModelChange"],["pButton","","type","button","icon","pi pi-arrow-right","routerLink","/home-input",1,"back-btn",3,"click"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3,"Dati Produttivi"),t.qZA(),t._UZ(4,"br"),t.TgZ(5,"div",3)(6,"label",4),t._uU(7,"Resa Granella KgEttaro"),t.qZA(),t.TgZ(8,"p-inputNumber",5),t.NdJ("ngModelChange",function(n){return i.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro=n}),t.qZA()(),t._UZ(9,"br"),t.TgZ(10,"div",3)(11,"label",6),t._uU(12,"Paglia Prodotta KgEttaro (Modifica se Errato)"),t.qZA(),t.TgZ(13,"p-inputNumber",7),t.NdJ("ngModelChange",function(n){return i.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro=n}),t.qZA()(),t._UZ(14,"br"),t.TgZ(15,"div",3)(16,"label",8),t._uU(17,"Paglia Asportata KgEttaro"),t.qZA(),t.TgZ(18,"p-inputNumber",9),t.NdJ("ngModelChange",function(n){return i.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro=n}),t.qZA()(),t._UZ(19,"br"),t.TgZ(20,"div",3)(21,"label",10),t._uU(22,"Umidit\xe0 Granella %"),t.qZA(),t.TgZ(23,"p-inputNumber",11),t.NdJ("ngModelChange",function(n){return i.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella=n}),t.qZA()(),t._UZ(24,"br"),t.TgZ(25,"div",3)(26,"label",12),t._uU(27,"Proteine Granella %"),t.qZA(),t.TgZ(28,"p-inputNumber",13),t.NdJ("ngModelChange",function(n){return i.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeProteineGranella=n}),t.qZA()(),t._UZ(29,"br"),t.TgZ(30,"button",14),t.NdJ("click",function(){return i.onBackCarboonFootPrint()}),t.qZA()()()),2&a&&(t.xp6(8),t.Q6J("ngModel",i.datiProduttivi.datiProduttiviCarbonFootPrint.resaGranellaKgEttaro)("showButtons",!0)("min",0)("required",!0),t.xp6(5),t.Q6J("ngModel",i.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaProdottaKgEttaro)("showButtons",!0)("min",0)("required",!0),t.xp6(5),t.Q6J("ngModel",i.datiProduttivi.datiProduttiviCarbonFootPrint.pagliaAsportataKgEttaro)("showButtons",!0)("min",0)("required",!0),t.xp6(5),t.Q6J("ngModel",i.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeUmiditaGranella)("showButtons",!0)("min",0)("max",100)("required",!0),t.xp6(5),t.Q6J("ngModel",i.datiProduttivi.datiProduttiviCarbonFootPrint.percentualeProteineGranella)("showButtons",!0)("min",0)("max",100)("required",!0))},dependencies:[d.JJ,d.Q7,d.On,P.YI,g.Rn,v.Hq,l.rH],styles:[".container[_ngcontent-%COMP%]{align-items:center;background-image:url(wallpaper.efd42db9a1e745de.jpg);display:flex;justify-content:center;height:100vh;margin-top:48px;background-repeat:no-repeat}.form[_ngcontent-%COMP%]{background-color:#15172b;border-radius:20px;box-sizing:border-box;height:500px;padding:20px;width:400px}.title[_ngcontent-%COMP%]{color:#eee;font-family:sans-serif;font-size:36px;font-weight:600;margin-top:4px;margin-left:45px;margin-bottom:10px}.subtitle[_ngcontent-%COMP%]{color:#eee;font-family:sans-serif;font-size:16px;font-weight:600;margin-top:10px;margin-left:12px}.input-container[_ngcontent-%COMP%]{height:50px;position:relative;width:100%}.ic1[_ngcontent-%COMP%]{margin-top:40px}.ic2[_ngcontent-%COMP%]{margin-top:30px}.input[_ngcontent-%COMP%]{background-color:#303245;border-radius:12px;border:0;box-sizing:border-box;color:#eee;font-size:18px;height:100%;outline:0;padding:4px 20px 0;width:100%}.cut[_ngcontent-%COMP%]{background-color:#15172b;border-radius:10px;height:20px;left:20px;position:absolute;top:-20px;transform:translateY(0);transition:transform .2s;width:76px}.cut-short[_ngcontent-%COMP%]{width:50px}.input[_ngcontent-%COMP%]:focus ~ .cut[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ .cut[_ngcontent-%COMP%]{transform:translateY(8px)}.placeholder[_ngcontent-%COMP%]{color:#65657b;font-family:sans-serif;left:20px;line-height:14px;pointer-events:none;position:absolute;transform-origin:0 50%;transition:transform .2s,color .2s;top:20px}.input[_ngcontent-%COMP%]:focus ~ .placeholder[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ .placeholder[_ngcontent-%COMP%]{transform:translateY(-30px) translate(10px) scale(.75)}.input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ .placeholder[_ngcontent-%COMP%]{color:#808097}.input[_ngcontent-%COMP%]:focus ~ .placeholder[_ngcontent-%COMP%]{color:#dc2f55}.submit[_ngcontent-%COMP%]{background-color:#08d;border-radius:12px;border:0;box-sizing:border-box;color:#eee;cursor:pointer;font-size:18px;height:50px;margin-top:38px;text-align:center;width:100%}[_nghost-%COMP%]     .input-switch{margin-top:2%;margin-left:40%;display:block}.submit[_ngcontent-%COMP%]:active{background-color:#06b}.input-switch-span[_ngcontent-%COMP%]{color:#fff;font-size:medium;margin-left:31%}.input-class[_ngcontent-%COMP%]{margin-top:-3%;margin-left:10.5%}[_nghost-%COMP%]     .p-inputnumber-buttons-stacked .p-inputnumber-input{width:230px}.back-btn[_ngcontent-%COMP%]{margin-top:-1.5%;margin-left:40%}"]}),o})()}];let m=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(h),l.Bz]}),o})();var b=r(7913);let C=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,d.u5,P.Pc,b.Iu,g.L$,v.hJ,m]}),o})()}}]);