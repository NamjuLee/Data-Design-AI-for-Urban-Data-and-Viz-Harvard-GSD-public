/*! For license information please see 3049.5cae2572.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[3049],{53049:function(t,e,a){a.r(e),a.d(e,{CalciteFlow:function(){return g},defineCustomElement:function(){return k}});var n=a(4942),i=a(74165),r=a(15861),o=a(15671),c=a(43144),l=a(97326),s=a(60136),u=a(29388),f=a(51554),m=a(72021),d="frame",v="frame--advancing",h="frame--retreating",p=(0,f.GH)(function(t){(0,s.Z)(a,t);var e=(0,u.Z)(a);function a(){var t;return(0,o.Z)(this,a),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.flowDirection=null,t.itemCount=0,t.items=[],t.itemMutationObserver=(0,m.c)("mutation",(function(){return t.updateFlowProps()})),t.getFlowDirection=function(t,e){return t&&e>1||t>1?e<t?"retreating":"advancing":null},t.updateFlowProps=function(){var e=(0,l.Z)(t),a=e.el,n=e.items,i=Array.from(a.querySelectorAll("calcite-flow-item, calcite-panel")).filter((function(t){return!t.matches("calcite-flow-item calcite-flow-item, calcite-panel calcite-panel")})),r=n.length,o=i.length,c=i[o-1],s=i[o-2];if(o&&c&&i.forEach((function(t){t.showBackButton=t===c&&o>1,t.hidden=t!==c})),s&&(s.menuOpen=!1),t.items=i,r!==o){var u=t.getFlowDirection(r,o);t.itemCount=o,t.flowDirection=u}},t}return(0,c.Z)(a,[{key:"back",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(){var e,a,n;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.items,a=e[e.length-1]){t.next=4;break}return t.abrupt("return");case 4:return n=a.beforeBack?a.beforeBack:function(){return Promise.resolve()},t.abrupt("return",n.call(a).then((function(){return a.remove(),a})));case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connectedCallback",value:function(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.disconnect()}},{key:"handleItemBackClick",value:function(){this.back()}},{key:"render",value:function(){var t,e=this.flowDirection,a=(t={},(0,n.Z)(t,d,!0),(0,n.Z)(t,v,"advancing"===e),(0,n.Z)(t,h,"retreating"===e),t);return(0,f.h)("div",{class:a},(0,f.h)("slot",null))}},{key:"el",get:function(){return this}}],[{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}"}}]),a}(f.mv),[1,"calcite-flow",{flowDirection:[32],itemCount:[32],items:[32],back:[64]},[[0,"calciteFlowItemBackClick","handleItemBackClick"],[0,"calcitePanelBackClick","handleItemBackClick"]]]);function b(){if("undefined"!==typeof customElements){["calcite-flow"].forEach((function(t){if("calcite-flow"===t)customElements.get(t)||customElements.define(t,p)}))}}b();var g=p,k=b},72021:function(t,e,a){a.d(e,{c:function(){return u}});var n=a(15671),i=a(43144),r=a(11752),o=a(61120),c=a(60136),l=a(29388),s=a(51554);function u(t,e,a){if(s.Z5.isBrowser){var u=function(t){var e=function(t){(0,c.Z)(a,t);var e=(0,l.Z)(a);function a(t){var i;return(0,n.Z)(this,a),(i=e.call(this,t)).observedEntry=[],i.callback=t,i}return(0,i.Z)(a,[{key:"observe",value:function(t,e){return this.observedEntry.push({target:t,options:e}),(0,r.Z)((0,o.Z)(a.prototype),"observe",this).call(this,t,e)}},{key:"unobserve",value:function(t){var e=this,n=this.observedEntry.filter((function(e){return e.target!==t}));this.observedEntry=[],this.callback((0,r.Z)((0,o.Z)(a.prototype),"takeRecords",this).call(this),this),this.disconnect(),n.forEach((function(t){return e.observe(t.target,t.options)}))}}]),a}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new u(e,a)}}}}]);
//# sourceMappingURL=3049.5cae2572.chunk.js.map