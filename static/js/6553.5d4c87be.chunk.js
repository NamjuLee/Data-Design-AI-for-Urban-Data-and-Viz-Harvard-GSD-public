"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[6553],{16553:function(e,r,t){t.r(r),t.d(r,{createLabelFunction:function(){return g},formatField:function(){return x}});var n=t(74165),a=t(37762),u=t(15861),i=t(10064),l=t(32718),s=t(92026),c=t(76969),o=t(6291),f=t(80031),p=t(93253),d=t(819),b=l.Z.getLogger("esri.layers.support.labelFormatUtils"),v={type:"simple",evaluate:function(){return null}},h={getAttribute:function(e,r){return e.field(r)}};function g(e,r,t){return y.apply(this,arguments)}function y(){return y=(0,u.Z)((0,n.Z)().mark((function e(r,a,u){var l,c,o,f,g,y,_;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.symbol){e.next=2;break}return e.abrupt("return",v);case 2:if(l=r.where,c=(0,p.hV)(r),!l){e.next=10;break}return e.next=7,t.e(8562).then(t.bind(t,48562));case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=null;case 11:if(o=e.t0,"arcade"!==c.type){e.next=21;break}return e.next=15,(0,d.WW)(c.expression,u,a);case 15:if(g=e.sent,!(0,s.Wi)(g)){e.next=18;break}return e.abrupt("return",v);case 18:f={type:"arcade",evaluate:function(e){try{var r=g.evaluate({$feature:"attributes"in e?g.repurposeFeature(e):e});if(null!=r)return r.toString()}catch(a){b.error(new i.Z("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:e,expression:c}))}return null},needsHydrationToEvaluate:function(){return null==(0,p.el)(c.expression)}},e.next=22;break;case 21:f={type:"simple",evaluate:function(e){return c.expression.replace(/{[^}]*}/g,(function(r){var t=r.slice(1,-1),n=a.get(t);if(!n)return r;var u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[n.name]):u=e.field(n.name),null==u?"":x(u,n)}))}};case 22:if(!l){e.next=32;break}e.prev=23,y=o.WhereClause.create(l,a),e.next=30;break;case 27:return e.prev=27,e.t1=e.catch(23),e.abrupt("return",(b.error(new i.Z("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:l,error:e.t1})),v));case 30:_=f.evaluate,f.evaluate=function(e){var r="attributes"in e?void 0:h;try{if(y.testFeature(e,r))return _(e)}catch(t){b.error(new i.Z("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:l,feature:e,error:t}))}return null};case 32:return e.abrupt("return",f);case 33:case"end":return e.stop()}}),e,null,[[23,27]])}))),y.apply(this,arguments)}function x(e,r){if(null==e)return"";var t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){var n,u=e,i=(0,a.Z)(t.codedValues);try{for(i.s();!(n=i.n()).done;){var l=n.value;if(l.code===u)return l.name}}catch(v){i.e(v)}finally{i.f()}}else if("range"===t.type){var s=+e,p="range"in t?t.range[0]:t.minValue,d="range"in t?t.range[1]:t.maxValue;if(p<=s&&s<=d)return t.name}var b=e;return"date"===r.type||"esriFieldTypeDate"===r.type?b=(0,c.p6)(b,(0,c.Ze)("short-date")):(0,f.H7)(r)&&(b=(0,o.uf)(+b)),b||""}}}]);
//# sourceMappingURL=6553.5d4c87be.chunk.js.map