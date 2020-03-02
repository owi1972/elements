function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,o,n){return o&&_defineProperties(e.prototype,o),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"xps+":function(e,o,n){"use strict";n.r(o);var t,l,r=n("uHuC"),a=n("PCNd"),c=n("sEIs"),s=n("EM62"),i=((t=function(){function e(){_classCallCheck(this,e),this.codeExampleComponent=m,this.codeExampleModule=p,this.codeExampleAppModule=d,this.codeExampleSharedModule=u}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["demo-getting-started"]],decls:84,vars:4,consts:[[1,"wrapper"],[3,"highlight"]],template:function(e,o){1&e&&(s.Tb(0,"div",0),s.Tb(1,"h1"),s.yc(2,"Getting started"),s.Sb(),s.Tb(3,"p"),s.yc(4," Start using Angular elements or any other web components in your applications by following these 5 steps... "),s.Sb(),s.Tb(5,"ol"),s.Tb(6,"li"),s.yc(7,"Install "),s.Tb(8,"code"),s.yc(9,"npm i @angular-extensions/elements"),s.Sb(),s.Sb(),s.Tb(10,"li"),s.yc(11," Add "),s.Tb(12,"code"),s.yc(13," import { LazyElementsModule } from '@angular-extensions/elements'; "),s.Sb(),s.Sb(),s.Tb(14,"li"),s.yc(15," Append "),s.Tb(16,"code"),s.yc(17,"LazyElementsModule"),s.Sb(),s.yc(18," to the "),s.Tb(19,"code"),s.yc(20,"imports: []"),s.Sb(),s.yc(21," of your "),s.Tb(22,"code"),s.yc(23,"AppModule"),s.Sb(),s.Sb(),s.Tb(24,"li"),s.yc(25," Add new "),s.Tb(26,"code"),s.yc(27,"schemas: []"),s.Sb(),s.yc(28," property with "),s.Tb(29,"code"),s.yc(30,"CUSTOM_ELEMENTS_SCHEMA"),s.Sb(),s.yc(31," value to "),s.Tb(32,"code"),s.yc(33,"@NgModule"),s.Sb(),s.yc(34," decorator of your "),s.Tb(35,"code"),s.yc(36,"AppModule"),s.Sb(),s.Sb(),s.Tb(37,"li"),s.yc(38," Use "),s.Tb(39,"code"),s.yc(40,"*axLazyElement"),s.Sb(),s.yc(41," directive on an element you wish to load and pass in the url of the element bundle "),s.Sb(),s.Sb(),s.Tb(42,"p"),s.yc(43,"That way we get..."),s.Sb(),s.Ob(44,"pre",1),s.Tb(45,"p"),s.yc(46," and can use "),s.Tb(47,"code"),s.yc(48,"*axLazyElement"),s.Sb(),s.yc(49," in the template of our component... "),s.Sb(),s.Ob(50,"pre",1),s.Tb(51,"h2"),s.yc(52,"Using in other (and lazy loaded) modules"),s.Sb(),s.Tb(53,"p"),s.yc(54," Any non-trivial Angular application will usually contain more than a single "),s.Tb(55,"code"),s.yc(56,"AppModule"),s.Sb(),s.yc(57,". "),s.Sb(),s.Tb(58,"p"),s.yc(59,"More so, some of these additional modules could be lazy loaded."),s.Sb(),s.Tb(60,"p"),s.yc(61," Any module which contains components which are using "),s.Tb(62,"code"),s.yc(63,"*axLazyElement"),s.Sb(),s.yc(64," directive has to have "),s.Tb(65,"code"),s.yc(66,"schemas: [CUSTOM_ELEMENTS_SCHEMA]"),s.Sb(),s.yc(67," in its "),s.Tb(68,"code"),s.yc(69,"@NgModule"),s.Sb(),s.yc(70," decorator configuration. Also the module has to either import "),s.Tb(71,"code"),s.yc(72,"LazyElementsModule"),s.Sb(),s.yc(73,". Let's have a look on the following example... "),s.Sb(),s.Ob(74,"pre",1),s.Tb(75,"p"),s.yc(76," Or import other module (most commonly "),s.Tb(77,"code"),s.yc(78,"SharedModule"),s.Sb(),s.yc(79,") which both imports and exports "),s.Tb(80,"code"),s.yc(81,"LazyElementsModule"),s.Sb(),s.yc(82,". "),s.Sb(),s.Ob(83,"pre",1),s.Sb()),2&e&&(s.Bb(44),s.kc("highlight",o.codeExampleAppModule),s.Bb(6),s.kc("highlight",o.codeExampleComponent),s.Bb(24),s.kc("highlight",o.codeExampleModule),s.Bb(9),s.kc("highlight",o.codeExampleSharedModule))},directives:[r.b],styles:["ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]}),t),m="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'your-org-feature',\n  template: `\n    <some-element *axLazyElement=\"elementUrl\"></some-element>\n  `\n})\nexport class FeatureComponent {\n  elementUrl = 'https://your-org.com/elements/some-element.js';\n}\n",p="import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\nimport { FeatureComponent } from './feature-component';\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  imports: [CommonModule, LazyElementsModule], // or imports: [SharedModule]\n  declarations: [FeatureComponent]\n})\nexport class FeatureModule {}\n",d="import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  imports: [BrowserModule, LazyElementsModule],\n  declarations: [AppComponent],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}\n",u="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\n@NgModule({\n  imports: [CommonModule, LazyElementsModule],\n  exports: [CommonModule, LazyElementsModule]\n})\nexport class SharedModule {}\n",b=[{path:"",component:i}],y=((l=function e(){_classCallCheck(this,e)}).\u0275mod=s.Lb({type:l}),l.\u0275inj=s.Kb({factory:function(e){return new(e||l)},imports:[[c.d.forChild(b)],c.d]}),l);n.d(o,"GettingStartedModule",(function(){return M}));var h,M=((h=function e(){_classCallCheck(this,e)}).\u0275mod=s.Lb({type:h}),h.\u0275inj=s.Kb({factory:function(e){return new(e||h)},imports:[[r.c,a.a,y]]}),h)}}]);