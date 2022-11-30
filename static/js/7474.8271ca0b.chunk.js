/*! For license information please see 7474.8271ca0b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[7474],{87474:function(t,n,e){e.r(n),e.d(n,{CalciteIcon:function(){return a},defineCustomElement:function(){return r}});var i=e(57601),a=i.I,r=i.d},57601:function(t,n,e){e.d(n,{I:function(){return g},d:function(){return w}});var i=e(4942),a=e(74165),r=e(15671),c=e(43144),o=e(60136),s=e(29388),l=e(15861),u=e(51554),f=e(92358),h=e(72021),m="flip-rtl",p={},v={},d={s:16,m:24,l:32};function b(t){return y.apply(this,arguments)}function y(){return(y=(0,l.Z)((0,a.Z)().mark((function t(n){var e,i,r,c,o,s,l,f;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.icon,i=n.scale,r=d[i],c=k(e),o="F"===c.charAt(c.length-1),s=o?c.substring(0,c.length-1):c,l="".concat(s).concat(r).concat(o?"F":""),!p[l]){t.next=8;break}return t.abrupt("return",p[l]);case 8:return v[l]||(v[l]=fetch((0,u.K3)("./assets/icon/".concat(l,".json"))).then((function(t){return t.json()})).catch((function(){return console.error('"'.concat(l,'" is not a valid calcite-ui-icon name')),""}))),t.next=11,v[l];case 11:return f=t.sent,p[l]=f,t.abrupt("return",f);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){var n=!isNaN(Number(t.charAt(0))),e=t.split("-");return 1===e.length?n?"i".concat(t):t:e.map((function(t,e){return 0===e?n?"i".concat(t.toUpperCase()):t:t.charAt(0).toUpperCase()+t.slice(1)})).join("")}var g=(0,u.GH)(function(t){(0,o.Z)(e,t);var n=(0,s.Z)(e);function e(){var t;return(0,r.Z)(this,e),(t=n.call(this)).__registerHost(),t.__attachShadow(),t.icon=null,t.flipRtl=!1,t.scale="m",t.visible=!1,t}return(0,c.Z)(e,[{key:"connectedCallback",value:function(){var t=this;this.waitUntilVisible((function(){t.visible=!0,t.loadIconPathData()}))}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}},{key:"componentWillLoad",value:function(){var t=(0,l.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loadIconPathData();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,n=this.el,e=this.flipRtl,a=this.pathData,r=this.scale,c=this.textLabel,o=(0,f.c)(n),s=d[r],l=!!c,h=[].concat(a||"");return(0,u.h)(u.AA,{"aria-hidden":(0,f.t)(!l),"aria-label":l?c:null,role:l?"img":null},(0,u.h)("svg",{class:(t={},(0,i.Z)(t,m,"rtl"===o&&e),(0,i.Z)(t,"svg",!0),t),fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(s," ").concat(s),width:"100%",xmlns:"http://www.w3.org/2000/svg"},h.map((function(t){return"string"===typeof t?(0,u.h)("path",{d:t}):(0,u.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})}))))}},{key:"loadIconPathData",value:function(){var t=(0,l.Z)((0,a.Z)().mark((function t(){var n,e,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.icon,e=this.scale,i=this.visible,u.Z5.isBrowser&&n&&i){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,b({icon:n,scale:e});case 5:this.pathData=t.sent;case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"waitUntilVisible",value:function(t){var n=this;this.intersectionObserver=(0,h.c)("intersection",(function(e){e.forEach((function(e){e.isIntersecting&&(n.intersectionObserver.disconnect(),n.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}},{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}"}}]),e}(u.mv),[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function w(){if("undefined"!==typeof customElements){["calcite-icon"].forEach((function(t){if("calcite-icon"===t)customElements.get(t)||customElements.define(t,g)}))}}w()},72021:function(t,n,e){e.d(n,{c:function(){return u}});var i=e(15671),a=e(43144),r=e(11752),c=e(61120),o=e(60136),s=e(29388),l=e(51554);function u(t,n,e){if(l.Z5.isBrowser){var u=function(t){var n=function(t){(0,o.Z)(e,t);var n=(0,s.Z)(e);function e(t){var a;return(0,i.Z)(this,e),(a=n.call(this,t)).observedEntry=[],a.callback=t,a}return(0,a.Z)(e,[{key:"observe",value:function(t,n){return this.observedEntry.push({target:t,options:n}),(0,r.Z)((0,c.Z)(e.prototype),"observe",this).call(this,t,n)}},{key:"unobserve",value:function(t){var n=this,i=this.observedEntry.filter((function(n){return n.target!==t}));this.observedEntry=[],this.callback((0,r.Z)((0,c.Z)(e.prototype),"takeRecords",this).call(this),this),this.disconnect(),i.forEach((function(t){return n.observe(t.target,t.options)}))}}]),e}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?n:window.ResizeObserver}(t);return new u(n,e)}}}}]);
//# sourceMappingURL=7474.8271ca0b.chunk.js.map