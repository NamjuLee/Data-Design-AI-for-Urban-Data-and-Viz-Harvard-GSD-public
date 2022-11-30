/*! For license information please see 738.ef83b167.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[738],{30738:function(t,e,r){r.r(e),r.d(e,{scopeCss:function(){return T}});var n=r(93433),c="-shadowcsshost",o="-shadowcssslotted",s="-shadowcsscontext",a=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",i=new RegExp("(-shadowcsshost"+a,"gim"),u=new RegExp("(-shadowcsscontext"+a,"gim"),l=new RegExp("(-shadowcssslotted"+a,"gim"),h="-shadowcsshost-no-combinator",f=/-shadowcsshost-no-combinator([^\s]*)/,p=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,v=/::slotted/gim,_=/:host-context/gim,m=/\/\*\s*[\s\S]*?\*\//g,x=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,S=/(^.*?[^\\])??((:+)(.*)|$)/,O="%BLOCK%",W=function(t,e){var r=k(t),n=0;return r.escapedString.replace(w,(function(){var t=arguments.length<=2?void 0:arguments[2],c="",o=arguments.length<=4?void 0:arguments[4],s="";o&&o.startsWith("{%BLOCK%")&&(c=r.blocks[n++],o=o.substring(O.length+1),s="{");var a={selector:t,content:c},i=e(a);return"".concat(arguments.length<=1?void 0:arguments[1]).concat(i.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(s).concat(i.content).concat(o)}))},k=function(t){for(var e=t.split(b),r=[],n=[],c=0,o=[],s=0;s<e.length;s++){var a=e[s];"}"===a&&c--,c>0?o.push(a):(o.length>0&&(n.push(o.join("")),r.push(O),o=[]),r.push(a)),"{"===a&&c++}return o.length>0&&(n.push(o.join("")),r.push(O)),{escapedString:r.join(""),blocks:n}},D=function(t,e,r){return t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e[2]){for(var c=e[2].split(","),o=[],s=0;s<c.length;s++){var a=c[s].trim();if(!a)break;o.push(r(h,a,e[3]))}return o.join(",")}return h+e[3]}))},j=function(t,e,r){return t+e.replace(c,"")+r},C=function(t,e,r){return e.indexOf(c)>-1?j(t,e,r):t+e+r+", "+e+" "+t+r},E=function(t,e){var r=function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e);return!r.test(t)},R=function(t,e){return t.replace(S,(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return r+e+n+c}))},A=function(t,e,r){e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}));for(var n,c="."+e,o=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(h)>-1)n=function(t,e,r){if(g.lastIndex=0,g.test(t)){var n=".".concat(r);return t.replace(f,(function(t,e){return R(e,n)})).replace(g,n+" ")}return e+" "+t}(t,e,r);else{var o=t.replace(g,"");o.length>0&&(n=R(o,c))}return n},s=function(t){var e=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var c="__ph-".concat(r,"__");return e.push(n),r++,c}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,c){var o="__ph-".concat(r,"__");return e.push(c),r++,n+o})),placeholders:e}}(t),a="",i=0,u=/( |>|\+|~(?!=))\s*/g,l=!((t=s.content).indexOf(h)>-1);null!==(n=u.exec(t));){var p=n[1],d=t.slice(i,n.index).trim(),v=(l=l||d.indexOf(h)>-1)?o(d):d;a+="".concat(v," ").concat(p," "),i=u.lastIndex}var _,m=t.substring(i);return a+=(l=l||m.indexOf(h)>-1)?o(m):m,_=s.placeholders,a.replace(/__ph-(\d+)__/g,(function(t,e){return _[+e]}))},I=function t(e,r,n,c,o){return W(e,(function(e){var o=e.selector,s=e.content;return"@"!==e.selector[0]?o=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():E(t,e)?A(t,e,r).trim():t.trim()})).join(", ")}(e.selector,r,n,c):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(s=t(e.content,r,n,c)),{selector:o.replace(/\s{2,}/g," ").trim(),content:s}}))},L=function(t,e,r,n,a){var f=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(l,(function(){for(var t=arguments.length,e=new Array(t),c=0;c<t;c++)e[c]=arguments[c];if(e[2]){for(var o=e[2].trim(),s=e[3],a=r+o+s,i="",u=e[4]-1;u>=0;u--){var l=e[5][u];if("}"===l||","===l)break;i=l+i}var f=i+a,p="".concat(i.trimRight()).concat(a.trim());if(f.trim()!==p.trim()){var g="".concat(p,", ").concat(f);n.push({orgSelector:f,updatedSelector:g})}return a}return h+e[3]})),{selectors:n,cssText:t}}(t=function(t){return D(t,u,C)}(t=function(t){return D(t,i,j)}(t=t.replace(_,s).replace(d,c).replace(v,o))),n);return t=function(t){return p.reduce((function(t,e){return t.replace(e," ")}),t)}(t=f.cssText),e&&(t=I(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(r))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:f.selectors}},T=function(t,e,r){var c=e+"-h",o=e+"-s",s=t.match(x)||[];t=function(t){return t.replace(m,"")}(t);var a=[];if(r){var i=function(t){var e="/*!@___".concat(a.length,"___*/"),r="/*!@".concat(t.selector,"*/");return a.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=W(t,(function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=W(t.content,i),t):t}))}var u=L(t,e,c,o);return t=[u.cssText].concat((0,n.Z)(s)).join("\n"),r&&a.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),u.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=738.ef83b167.chunk.js.map