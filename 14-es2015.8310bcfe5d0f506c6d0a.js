(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"xps+":function(e,o,n){"use strict";n.r(o);var t=n("uHuC"),l=n("PCNd"),r=n("sEIs"),a=n("EM62");let c=(()=>{class e{constructor(){this.codeExampleComponent=s,this.codeExampleModule=m,this.codeExampleAppModule=d,this.codeExampleSharedModule=p}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a.Hb({type:e,selectors:[["demo-getting-started"]],decls:84,vars:4,consts:[[1,"wrapper"],[3,"highlight"]],template:function(e,o){1&e&&(a.Tb(0,"div",0),a.Tb(1,"h1"),a.yc(2,"Getting started"),a.Sb(),a.Tb(3,"p"),a.yc(4," Start using Angular elements or any other web components in your applications by following these 5 steps... "),a.Sb(),a.Tb(5,"ol"),a.Tb(6,"li"),a.yc(7,"Install "),a.Tb(8,"code"),a.yc(9,"npm i @angular-extensions/elements"),a.Sb(),a.Sb(),a.Tb(10,"li"),a.yc(11," Add "),a.Tb(12,"code"),a.yc(13," import { LazyElementsModule } from '@angular-extensions/elements'; "),a.Sb(),a.Sb(),a.Tb(14,"li"),a.yc(15," Append "),a.Tb(16,"code"),a.yc(17,"LazyElementsModule"),a.Sb(),a.yc(18," to the "),a.Tb(19,"code"),a.yc(20,"imports: []"),a.Sb(),a.yc(21," of your "),a.Tb(22,"code"),a.yc(23,"AppModule"),a.Sb(),a.Sb(),a.Tb(24,"li"),a.yc(25," Add new "),a.Tb(26,"code"),a.yc(27,"schemas: []"),a.Sb(),a.yc(28," property with "),a.Tb(29,"code"),a.yc(30,"CUSTOM_ELEMENTS_SCHEMA"),a.Sb(),a.yc(31," value to "),a.Tb(32,"code"),a.yc(33,"@NgModule"),a.Sb(),a.yc(34," decorator of your "),a.Tb(35,"code"),a.yc(36,"AppModule"),a.Sb(),a.Sb(),a.Tb(37,"li"),a.yc(38," Use "),a.Tb(39,"code"),a.yc(40,"*axLazyElement"),a.Sb(),a.yc(41," directive on an element you wish to load and pass in the url of the element bundle "),a.Sb(),a.Sb(),a.Tb(42,"p"),a.yc(43,"That way we get..."),a.Sb(),a.Ob(44,"pre",1),a.Tb(45,"p"),a.yc(46," and can use "),a.Tb(47,"code"),a.yc(48,"*axLazyElement"),a.Sb(),a.yc(49," in the template of our component... "),a.Sb(),a.Ob(50,"pre",1),a.Tb(51,"h2"),a.yc(52,"Using in other (and lazy loaded) modules"),a.Sb(),a.Tb(53,"p"),a.yc(54," Any non-trivial Angular application will usually contain more than a single "),a.Tb(55,"code"),a.yc(56,"AppModule"),a.Sb(),a.yc(57,". "),a.Sb(),a.Tb(58,"p"),a.yc(59,"More so, some of these additional modules could be lazy loaded."),a.Sb(),a.Tb(60,"p"),a.yc(61," Any module which contains components which are using "),a.Tb(62,"code"),a.yc(63,"*axLazyElement"),a.Sb(),a.yc(64," directive has to have "),a.Tb(65,"code"),a.yc(66,"schemas: [CUSTOM_ELEMENTS_SCHEMA]"),a.Sb(),a.yc(67," in its "),a.Tb(68,"code"),a.yc(69,"@NgModule"),a.Sb(),a.yc(70," decorator configuration. Also the module has to either import "),a.Tb(71,"code"),a.yc(72,"LazyElementsModule"),a.Sb(),a.yc(73,". Let's have a look on the following example... "),a.Sb(),a.Ob(74,"pre",1),a.Tb(75,"p"),a.yc(76," Or import other module (most commonly "),a.Tb(77,"code"),a.yc(78,"SharedModule"),a.Sb(),a.yc(79,") which both imports and exports "),a.Tb(80,"code"),a.yc(81,"LazyElementsModule"),a.Sb(),a.yc(82,". "),a.Sb(),a.Ob(83,"pre",1),a.Sb()),2&e&&(a.Bb(44),a.kc("highlight",o.codeExampleAppModule),a.Bb(6),a.kc("highlight",o.codeExampleComponent),a.Bb(24),a.kc("highlight",o.codeExampleModule),a.Bb(9),a.kc("highlight",o.codeExampleSharedModule))},directives:[t.b],styles:["ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]}),e})();const s="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'your-org-feature',\n  template: `\n    <some-element *axLazyElement=\"elementUrl\"></some-element>\n  `\n})\nexport class FeatureComponent {\n  elementUrl = 'https://your-org.com/elements/some-element.js';\n}\n",m="import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\nimport { FeatureComponent } from './feature-component';\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  imports: [CommonModule, LazyElementsModule], // or imports: [SharedModule]\n  declarations: [FeatureComponent]\n})\nexport class FeatureModule {}\n",d="import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  imports: [BrowserModule, LazyElementsModule],\n  declarations: [AppComponent],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}\n",p="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\n@NgModule({\n  imports: [CommonModule, LazyElementsModule],\n  exports: [CommonModule, LazyElementsModule]\n})\nexport class SharedModule {}\n",i=[{path:"",component:c}];let u=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(o){return new(o||e)},imports:[[r.d.forChild(i)],r.d]}),e})();n.d(o,"GettingStartedModule",(function(){return b}));let b=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(o){return new(o||e)},imports:[[t.c,l.a,u]]}),e})()}}]);