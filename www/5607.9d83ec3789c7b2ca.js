"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5607],{5607:(v,d,o)=>{o.r(d),o.d(d,{AuthPageModule:()=>J});var u=o(6814),s=o(95),l=o(5548),c=o(6745),g=o(5861),n=o(5879),p=o(6949),h=o(4532),A=o(74),Z=o(5890),P=o(140);function T(t,a){1&t&&(n.TgZ(0,"div"),n._uU(1,"Ingresa tu correo"),n.qZA())}function y(t,a){1&t&&(n.TgZ(0,"div"),n._uU(1,"Ingresa un correo valido"),n.qZA())}function I(t,a){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,T,2,0,"div",14),n.YNc(2,y,2,0,"div",14),n.qZA()),2&t){const i=n.oxw();n.xp6(1),n.Q6J("ngIf",null==i.form.controls.email.errors?null:i.form.controls.email.errors.required),n.xp6(1),n.Q6J("ngIf",null==i.form.controls.email.errors?null:i.form.controls.email.errors.email)}}function x(t,a){1&t&&(n.TgZ(0,"div"),n._uU(1,"Ingresa tu contrase\xf1a"),n.qZA())}function S(t,a){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,x,2,0,"div",14),n.qZA()),2&t){const i=n.oxw();n.xp6(1),n.Q6J("ngIf",null==i.form.controls.password.errors?null:i.form.controls.password.errors.required)}}const C=[{path:"",component:(()=>{var t;class a{constructor(e,r){this.firebaseSvc=e,this.utilSvc=r,this.form=new s.cw({email:new s.NI("",[s.kI.required,s.kI.email]),password:new s.NI("",[s.kI.required])})}ngOnInit(){}submit(){var e=this;this.form.valid&&(this.utilSvc.presentLoading({message:"Autenticando..."}),this.firebaseSvc.login(this.form.value).then(function(){var r=(0,g.Z)(function*(m){let f={uid:m.user.uid,name:m.user.displayName,email:m.user.email};e.utilSvc.setElementInLocalStorage("user",f),e.utilSvc.routerLink("/tabs/home"),e.utilSvc.dismissLoading(),e.utilSvc.presentToast({message:`Te damos la bienvenida ${f.name}!`,duration:1500,color:"primary",icon:"person-circle-outline"}),e.form.reset()});return function(m){return r.apply(this,arguments)}}(),r=>{this.utilSvc.dismissLoading(),this.utilSvc.presentToast({message:r,duration:5e3,color:"warning",icon:"alert-circle-outline"})}))}}return(t=a).\u0275fac=function(e){return new(e||t)(n.Y36(p.O),n.Y36(h.F))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-auth"]],decls:21,vars:6,consts:[[3,"fullscreen"],[1,"ion-text-center","ion-no-margin"],[1,"content"],[1,"d-flex-center"],[1,"ion-text-center",3,"keyup.enter","ngSubmit"],["autocomplete","email","type","email","label","Correo","icon","mail-outline",3,"control"],["class","validators",4,"ngIf"],["type","password","label","Contrase\xf1a","icon","lock-closed-outline",3,"control"],["type","submit","shape","round",1,"ion-margin-vertical",3,"disabled"],["slot","end","name","log-in-outline"],[1,"sign-up"],["routerLink","sign-up","shape","round",1,"ion-margin-vertical"],["slot","end","name","person-add-outline"],[1,"validators"],[4,"ngIf"]],template:function(e,r){1&e&&(n.TgZ(0,"ion-content",0),n._UZ(1,"app-header")(2,"app-logo"),n.TgZ(3,"h2",1),n._uU(4,"Login"),n.qZA(),n.TgZ(5,"div",2)(6,"div",3)(7,"form",4),n.NdJ("keyup.enter",function(){return r.submit()})("ngSubmit",function(){return r.submit()}),n._UZ(8,"app-custom-input",5),n.YNc(9,I,3,2,"div",6),n._UZ(10,"app-custom-input",7),n.YNc(11,S,2,1,"div",6),n.TgZ(12,"ion-button",8),n._uU(13," Ingresar "),n._UZ(14,"ion-icon",9),n.qZA(),n.TgZ(15,"div",10)(16,"div"),n._uU(17," \xbfNo tienes cuenta? "),n.qZA(),n.TgZ(18,"ion-button",11),n._uU(19," Reg\xedstrate "),n._UZ(20,"ion-icon",12),n.qZA()()()()()()),2&e&&(n.Q6J("fullscreen",!0),n.xp6(8),n.Q6J("control",r.form.controls.email),n.xp6(1),n.Q6J("ngIf",r.form.controls.email.errors&&r.form.controls.email.dirty),n.xp6(1),n.Q6J("control",r.form.controls.password),n.xp6(1),n.Q6J("ngIf",r.form.controls.password.errors&&r.form.controls.password.dirty),n.xp6(1),n.Q6J("disabled",r.form.invalid))},dependencies:[u.O5,s._Y,s.JL,s.F,l.YG,l.W2,l.gu,l.YI,c.rH,A.G,Z.O,P.R],styles:[".sign-up[_ngcontent-%COMP%]{padding:50px}ion-button[_ngcontent-%COMP%]{width:170px}@media (min-width: 769px){form[_ngcontent-%COMP%]{width:500px;padding:50px 10px}}"]}),a})()},{path:"sign-up",loadChildren:()=>o.e(7782).then(o.bind(o,7782)).then(t=>t.SignUpPageModule)}];let U=(()=>{var t;class a{}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[c.Bz.forChild(C),c.Bz]}),a})();var M=o(6208);let J=(()=>{var t;class a{}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[u.ez,s.u5,l.Pc,U,M.m]}),a})()},140:(v,d,o)=>{o.d(d,{R:()=>s});var u=o(5879);let s=(()=>{var l;class c{constructor(){}ngOnInit(){}}return(l=c).\u0275fac=function(n){return new(n||l)},l.\u0275cmp=u.Xpm({type:l,selectors:[["app-logo"]],decls:2,vars:0,template:function(n,p){1&n&&(u.TgZ(0,"h1"),u._uU(1,"Tareas"),u.qZA())},styles:["h1[_ngcontent-%COMP%]{text-align:center;margin:0;font-weight:700}"]}),c})()}}]);