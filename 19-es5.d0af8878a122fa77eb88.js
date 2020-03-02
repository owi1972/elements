function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var c=n[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6J83":function(e,n,t){"use strict";t.r(n);var c,i=t("uHuC"),a=t("nIj0"),o=t("j7lP"),r=t("PCNd"),l=t("sEIs"),m=t("EM62"),d=t("2kYt"),s=t("PBFl"),u=t("bFHC"),b=t("jrat"),p=((c=function(){function e(n,t,c,i,a,o,r){_classCallCheck(this,e),this.document=n,this.renderer=t,this.vcr=c,this.cfr=i,this.cdr=a,this.template=o,this.elementsLoaderService=r}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;if(!this.tag||0===this.tag.length||!this.tag.includes("-"))throw new Error('@angular-extensions/elements - Valid tag has to be specified when using *axLazyElementDynamic directive (use *axLazyElementDynamic="\'some-tag\'"), got: "'.concat(this.tag,'"'));var n=this.elementsLoaderService.getElementConfig(this.tag)||{},t=this.elementsLoaderService.options,c=n.loadingComponent||t.loadingComponent;if(this.loadingTemplateRef)this.vcr.createEmbeddedView(this.loadingTemplateRef);else if(c){var i=this.cfr.resolveComponentFactory(c);this.vcr.createComponent(i)}this.elementsLoaderService.loadElement(this.url,this.tag,this.isModule).then((function(){e.vcr.clear();var n=e.renderer.createElement;e.renderer.createElement=function(n,t){return"ax-lazy-element"===n&&(n=e.tag),e.document.createElement(n)},e.vcr.createEmbeddedView(e.template),e.renderer.createElement=n,e.cdr.markForCheck()})).catch((function(c){var i=n.errorComponent||t.errorComponent;if(e.vcr.clear(),e.errorTemplateRef)e.vcr.createEmbeddedView(e.errorTemplateRef),e.cdr.markForCheck();else if(i){var a=e.cfr.resolveComponentFactory(i);e.vcr.createComponent(a),e.cdr.markForCheck()}else console.error("@angular-extensions/elements - Loading of element <".concat(e.tag,'> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElementDynamic="errorTemplate: error" to display customized error message in place of element\n\n'),c)}))}}]),e}()).\u0275fac=function(e){return new(e||c)(m.Nb(d.d),m.Nb(m.E),m.Nb(m.O),m.Nb(m.j),m.Nb(m.h),m.Nb(m.L),m.Nb(b.a))},c.\u0275dir=m.Ib({type:c,selectors:[["","axLazyElementDynamic",""]],inputs:{tag:["axLazyElementDynamic","tag"],url:["axLazyElementDynamicUrl","url"],loadingTemplateRef:["axLazyElementDynamicLoadingTemplate","loadingTemplateRef"],errorTemplateRef:["axLazyElementDynamicErrorTemplate","errorTemplateRef"],isModule:["axLazyElementDynamicModule","isModule"]}}),c),y=t("k8N0");function g(e,n){if(1&e){var t=m.Ub();m.Tb(0,"div",12),m.Tb(1,"button",13),m.bc("click",(function(e){return m.pc(t),m.fc().example1=!0})),m.Tb(2,"mat-icon"),m.yc(3,"play_arrow"),m.Sb(),m.yc(4," Run "),m.Sb(),m.Sb()}}function f(e,n){1&e&&m.yc(0,"Loading...")}function h(e,n){if(1&e){var t=m.Ub();m.Tb(0,"ax-lazy-element",18),m.bc("click",(function(e){return m.pc(t),m.fc(2).increment1()})),m.yc(1," Increment "),m.Sb()}if(2&e){var c=m.fc(2);m.kc("outlined",c.buttonTypeIsOutlined)("raised",!c.buttonTypeIsOutlined)}}function w(e,n){if(1&e){var t=m.Ub();m.Tb(0,"div",12),m.wc(1,f,1,0,"ng-template",null,14,m.xc),m.wc(3,h,2,2,"ax-lazy-element",15),m.Tb(4,"p"),m.yc(5),m.Sb(),m.Tb(6,"div",16),m.Tb(7,"span"),m.yc(8,"Raised button"),m.Sb(),m.Tb(9,"mat-slide-toggle",17),m.bc("ngModelChange",(function(e){return m.pc(t),m.fc().buttonTypeIsOutlined=e})),m.Sb(),m.Tb(10,"span"),m.yc(11,"Outline button"),m.Sb(),m.Sb(),m.Sb()}if(2&e){var c=m.oc(2),i=m.fc();m.Bb(3),m.kc("axLazyElementDynamic","mwc-button")("axLazyElementDynamicUrl","https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module")("axLazyElementDynamicLoadingTemplate",c)("axLazyElementDynamicModule",!0),m.Bb(2),m.Ac("Counter: ",i.counter1,""),m.Bb(4),m.kc("ngModel",i.buttonTypeIsOutlined)}}function x(e,n){if(1&e){var t=m.Ub();m.Tb(0,"div",12),m.Tb(1,"button",13),m.bc("click",(function(e){return m.pc(t),m.fc().example2=!0})),m.Tb(2,"mat-icon"),m.yc(3,"play_arrow"),m.Sb(),m.yc(4," Run "),m.Sb(),m.Sb()}}function v(e,n){1&e&&m.yc(0,"Loading...")}function k(e,n){if(1&e){var t=m.Ub();m.Tb(0,"ax-lazy-element",20),m.bc("click",(function(e){return m.pc(t),m.fc(2).increment2()})),m.yc(1," Increment "),m.Sb()}}function C(e,n){if(1&e&&(m.Tb(0,"div",12),m.wc(1,v,1,0,"ng-template",null,14,m.xc),m.wc(3,k,2,0,"ax-lazy-element",19),m.Tb(4,"p"),m.yc(5),m.Sb(),m.Sb()),2&e){var t=m.oc(2),c=m.fc();m.Bb(3),m.kc("axLazyElementDynamic","wired-button")("axLazyElementDynamicLoadingTemplate",t),m.Bb(2),m.Ac("Counter: ",c.counter2,"")}}function T(e,n){if(1&e){var t=m.Ub();m.Tb(0,"div",12),m.Tb(1,"button",13),m.bc("click",(function(e){return m.pc(t),m.fc().example3=!0})),m.Tb(2,"mat-icon"),m.yc(3,"play_arrow"),m.Sb(),m.yc(4," Run "),m.Sb(),m.Sb()}}function M(e,n){if(1&e&&m.yc(0),2&e){var t=m.fc().$implicit;m.Ac("Loading <",t.tag,">...\xa0\xa0")}}function O(e,n){if(1&e){var t=m.Ub();m.Tb(0,"ax-lazy-element",24),m.bc("click",(function(e){m.pc(t);var n=m.fc().$implicit;return m.fc(2).performAction(n.actionName)})),m.yc(1),m.Sb()}if(2&e){var c=m.fc().$implicit;m.Bb(1),m.Ac(" ",c.content," ")}}function _(e,n){if(1&e&&(m.Rb(0),m.wc(1,M,1,1,"ng-template",null,14,m.xc),m.wc(3,O,2,1,"ax-lazy-element",23),m.Qb()),2&e){var t=n.$implicit,c=m.oc(2);m.Bb(3),m.kc("axLazyElementDynamic",t.tag)("axLazyElementDynamicUrl",t.url)("axLazyElementDynamicModule",t.isModule)("axLazyElementDynamicLoadingTemplate",c)}}function P(e,n){if(1&e&&(m.Tb(0,"div",12),m.Tb(1,"div",21),m.wc(2,_,4,4,"ng-container",22),m.Sb(),m.Tb(3,"p"),m.yc(4),m.Sb(),m.Sb()),2&e){var t=m.fc();m.Bb(2),m.kc("ngForOf",t.dynamicConfigs),m.Bb(2),m.Ac("Counter: ",t.counter3,"")}}var E,S,L=((E=function(){function e(){_classCallCheck(this,e),this.example1=!1,this.example2=!1,this.example3=!1,this.codeExample1=z,this.codeExample2module=I,this.codeExample2html=D,this.codeExample3html=j,this.buttonTypeIsOutlined=!0,this.counter1=0,this.counter2=0,this.counter3=0,this.dynamicConfigs=[{tag:"mwc-button",url:"https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module",isModule:!0,content:"Increment",actionName:"increment"},{tag:"wired-button",url:"https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js",content:"Decrement",actionName:"decrement"},{tag:"mwc-icon",url:"https://unpkg.com/@material/mwc-icon@0.6.0/mwc-icon.js?module",content:"replay",actionName:"reset"}]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"increment1",value:function(){this.counter1++}},{key:"increment2",value:function(){this.counter2++}},{key:"performAction",value:function(e){"increment"===e&&this.counter3++,"decrement"===e&&this.counter3--,"reset"===e&&(this.counter3=0)}}]),e}()).\u0275fac=function(e){return new(e||E)},E.\u0275cmp=m.Hb({type:E,selectors:[["demo-dynamic"]],decls:87,vars:10,consts:[[1,"quick-nav"],["routerLink",".","fragment","dynamic-element-tag"],["routerLink",".","fragment","module-pre-configuration"],["routerLink",".","fragment","multiple-different-dynamic-elements"],[1,"wrapper"],["id","dynamic-element-tag"],[1,"content"],["class","implementation",4,"ngIf"],[1,"description"],[3,"highlight"],["id","module-pre-configuration"],["id","multiple-different-dynamic-elements"],[1,"implementation"],["mat-flat-button","","color","accent",3,"click"],["loading",""],[3,"outlined","raised","click",4,"axLazyElementDynamic","axLazyElementDynamicUrl","axLazyElementDynamicLoadingTemplate","axLazyElementDynamicModule"],[1,"controls"],[3,"ngModel","ngModelChange"],[3,"outlined","raised","click"],[3,"click",4,"axLazyElementDynamic","axLazyElementDynamicLoadingTemplate"],[3,"click"],[1,"actions"],[4,"ngFor","ngForOf"],["raised","",3,"click",4,"axLazyElementDynamic","axLazyElementDynamicUrl","axLazyElementDynamicModule","axLazyElementDynamicLoadingTemplate"],["raised","",3,"click"]],template:function(e,n){1&e&&(m.Tb(0,"div",0),m.Tb(1,"h3"),m.yc(2,"Quick navigation"),m.Sb(),m.Tb(3,"ul"),m.Tb(4,"li"),m.Tb(5,"a",1),m.yc(6,"Dynamic element tag"),m.Sb(),m.Sb(),m.Tb(7,"li"),m.Tb(8,"a",2),m.yc(9,"Dynamic element tag with module pre-configuration"),m.Sb(),m.Sb(),m.Tb(10,"li"),m.Tb(11,"a",3),m.yc(12,"Multiple different dynamic elements"),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Tb(13,"div",4),m.Tb(14,"h1"),m.yc(15,"Dynamic"),m.Sb(),m.Tb(16,"p"),m.yc(17," These example explain how to configure element tag dynamically using "),m.Tb(18,"code"),m.yc(19,"*axLazyElementDynamic"),m.Sb(),m.yc(20," directive. This can be very useful if we want to retrieve element configuration from somewhere else (for example a backend or a json config file). Such a setup can enable us to develop fully dynamic and configurable microfrontend applications! "),m.Sb(),m.Tb(21,"h2",5),m.yc(22,"Dynamic element tag"),m.Sb(),m.Tb(23,"div",6),m.wc(24,g,5,0,"div",7),m.wc(25,w,12,6,"div",7),m.Tb(26,"div",8),m.Tb(27,"p"),m.yc(28," In this example we're loading "),m.Tb(29,"code"),m.yc(30,"<mwc-button>"),m.Sb(),m.yc(31," using the "),m.Tb(32,"code"),m.yc(33,"*axLazyElementDynamic"),m.Sb(),m.yc(34," directive. Please notice that the original HTML element used in the template is "),m.Tb(35,"code"),m.yc(36,"<ax-lazy-element>"),m.Sb(),m.yc(37," and we're specifying the desired tag as the first parameter of "),m.Tb(38,"code"),m.yc(39,"*axLazyElementDynamic='mwc-button'"),m.Sb(),m.yc(40,". Please, feel free to open your browsers dev tools to check resulting element tag! "),m.Sb(),m.Ob(41,"pre",9),m.Tb(42,"p"),m.yc(43," You might be asking why do we use "),m.Tb(44,"code"),m.yc(45,"<ax-lazy-element>"),m.Sb(),m.yc(46,". This is not a real custom element and that's exactly the point. We can provide any valid and unused custom element name. That way Angular won't complain if we use custom property and event binding which would be the case if we tried to bind "),m.Tb(47,"code"),m.yc(48,'<div [custom]="value">'),m.Sb(),m.yc(49,"... "),m.Sb(),m.Sb(),m.Sb(),m.Tb(50,"h2",10),m.yc(51," Dynamic element tag with module pre-configuration "),m.Sb(),m.Tb(52,"div",6),m.wc(53,x,5,0,"div",7),m.wc(54,C,6,3,"div",7),m.Tb(55,"div",8),m.Tb(56,"p"),m.yc(57," The "),m.Tb(58,"code"),m.yc(59,"*axLazyElementDynamic"),m.Sb(),m.yc(60," directive works also with the pre-configured "),m.Tb(61,"code"),m.yc(62,"LazyElementsModule"),m.Sb(),m.yc(63,". That way we don't have to specify url of the element in the template. Please notice that the original HTML element used in the template is "),m.Tb(64,"code"),m.yc(65,"<div>"),m.Sb(),m.yc(66," and we're specifying the desired tag as the first parameter of "),m.Tb(67,"code"),m.yc(68,"*axLazyElementDynamic='wired-button'"),m.Sb(),m.yc(69,". Please, feel free to open your browsers dev tools to check resulting element tag! "),m.Sb(),m.Ob(70,"pre",9),m.Ob(71,"pre",9),m.Sb(),m.Sb(),m.Tb(72,"h2",11),m.yc(73," Multiple different dynamic elements "),m.Sb(),m.Tb(74,"div",6),m.wc(75,T,5,0,"div",7),m.wc(76,P,5,2,"div",7),m.Tb(77,"div",8),m.Tb(78,"p"),m.yc(79," The "),m.Tb(80,"code"),m.yc(81,"*axLazyElementDynamic"),m.Sb(),m.yc(82," directive works also with "),m.Tb(83,"code"),m.yc(84,"*ngFor"),m.Sb(),m.yc(85," directive to render fully dynamic configuration which could have been retrieved from backend during the runtime in comparison to hard-coded into the template during build time! Please, feel free to open your browsers dev tools to check resulting element tags! "),m.Sb(),m.Ob(86,"pre",9),m.Sb(),m.Sb(),m.Sb()),2&e&&(m.Bb(24),m.kc("ngIf",!n.example1),m.Bb(1),m.kc("ngIf",n.example1),m.Bb(16),m.kc("highlight",n.codeExample1),m.Bb(12),m.kc("ngIf",!n.example2),m.Bb(1),m.kc("ngIf",n.example2),m.Bb(16),m.kc("highlight",n.codeExample2html),m.Bb(1),m.kc("highlight",n.codeExample2module),m.Bb(4),m.kc("ngIf",!n.example3),m.Bb(1),m.kc("ngIf",n.example3),m.Bb(10),m.kc("highlight",n.codeExample3html))},directives:[l.c,d.k,i.b,s.b,u.a,p,y.a,a.e,a.f,d.j],styles:["[_nghost-%COMP%]{position:relative}.quick-nav[_ngcontent-%COMP%]{display:none;position:fixed;top:105px;left:75%;right:0;padding:0 20px}.quick-nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;opacity:.5}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#d32f2f}.wrapper[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin:0 0 50px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:1;flex:1;margin:0 20px 20px 0;border:2px solid #eee;padding:20px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0 0}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   wired-button[_ngcontent-%COMP%]{padding:10px 15px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:10px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{-webkit-box-flex:1.5;flex:1.5}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:20px}.responsive-large[_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%]{display:block}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:60%}"]}),E),z='\x3c!-- url = \'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module\' --\x3e;\n<ax-lazy-element *axLazyElementDynamic="\'mwc-button\', url: url; module: true"\n     [outlined]="true"\n     (click)="increment()">\n  Increment\n</ax-lazy-element>\n\n\x3c!-- will be rendered as ...\n  <mwc-button outlined (click)="increment()">Increment</mwc-button>\n--\x3e',D='<ax-lazy-element *axLazyElementDynamic="\'wired-button\'" (click)="increment()">\n  Increment\n</ax-lazy-element>\n\n\x3c!-- will be rendered as ...\n  <wired-button (click)="increment()">Increment</wired-button>\n--\x3e',I="// pre-configured LazyElementsModule\nconst options: LazyElementModuleOptions = {\n  elementConfigs: [\n    { tag: 'wired-button', url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js' }\n  ]\n};\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  declarations: [FeatureComponent],\n  imports: [\n    LazyElementsModule.forFeature(options),\n  ]\n})\nexport class FeatureModule {}",j="<ng-container *ngFor=\"let c of dynamicConfigs\">\n  <ax-lazy-element\n    *axLazyElementDynamic=\"c.tag; url: c.url; module: c.isModule\"\n    (click)=\"performAction(c.actionName)\"\n    raised\n  >\n    {{ c.content }}\n  </ax-lazy-element>\n</ng-container>\n\n\x3c!--\ndynamicConfigs = [\n  {\n    tag: 'mwc-button',\n    url: 'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module',\n    isModule: true,\n    content: 'Increment',\n    actionName: 'increment'\n  },\n  {\n    tag: 'wired-button',\n    url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',\n    content: 'Decrement',\n    actionName: 'decrement'\n  },\n  {\n    tag: 'mwc-icon',\n    url: 'https://unpkg.com/@material/mwc-icon@0.6.0/mwc-icon.js?module',\n    content: 'replay',\n    actionName: 'reset'\n  }\n];\n--\x3e\n",B=[{path:"",component:L}],N=((S=function e(){_classCallCheck(this,e)}).\u0275mod=m.Lb({type:S}),S.\u0275inj=m.Kb({factory:function(e){return new(e||S)},imports:[[l.d.forChild(B)],l.d]}),S);t.d(n,"DynamicModule",(function(){return U}));var F,R={elementConfigs:[{tag:"wired-button",url:"https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js"}]},U=((F=function e(){_classCallCheck(this,e)}).\u0275mod=m.Lb({type:F}),F.\u0275inj=m.Kb({factory:function(e){return new(e||F)},imports:[[i.c,a.b,o.a.forFeature(R),r.a,N]]}),F)}}]);