"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[1486],{76551:function(n,e,a){a.d(e,{Z:function(){return g}});var r=a(15671),t=a(43144),i=a(60136),l=a(29388),u=a(27366),o=a(43404),s=a(49861),f=(a(63780),a(25243),a(69912)),c=a(46784),v=a(57634),d=a(22061),m=new o.X({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"}),p=function(n){(0,i.Z)(a,n);var e=(0,l.Z)(a);function a(){var n;return(0,r.Z)(this,a),(n=e.apply(this,arguments)).baseSymbol=null,n.colorRamp=null,n.type=null,n}return(0,t.Z)(a)}(c.wq);(0,u._)([(0,s.Cb)({type:d.Z,json:{write:!0}})],p.prototype,"baseSymbol",void 0),(0,u._)([(0,s.Cb)({types:v.V,json:{read:{reader:v.i},write:!0}})],p.prototype,"colorRamp",void 0),(0,u._)([(0,s.Cb)({json:{read:m.read,write:m.write}})],p.prototype,"type",void 0);var h=p=(0,u._)([(0,f.j)("esri.rest.support.ClassificationDefinition")],p),b=new o.X({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),y=new o.X({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),V=function(n){(0,i.Z)(a,n);var e=(0,l.Z)(a);function a(){var n;return(0,r.Z)(this,a),(n=e.apply(this,arguments)).breakCount=null,n.classificationField=null,n.classificationMethod=null,n.normalizationField=null,n.normalizationType=null,n.type="class-breaks-definition",n}return(0,t.Z)(a,[{key:"standardDeviationInterval",set:function(n){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",n)}},{key:"definedInterval",set:function(n){"defined-interval"===this.classificationMethod&&this._set("definedInterval",n)}}]),a}(h);(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"breakCount",void 0),(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"classificationField",void 0),(0,u._)([(0,s.Cb)({type:String,json:{read:b.read,write:b.write}})],V.prototype,"classificationMethod",void 0),(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"normalizationField",void 0),(0,u._)([(0,s.Cb)({json:{read:y.read,write:y.write}})],V.prototype,"normalizationType",void 0),(0,u._)([(0,s.Cb)({value:null,json:{write:!0}})],V.prototype,"standardDeviationInterval",null),(0,u._)([(0,s.Cb)({value:null,json:{write:!0}})],V.prototype,"definedInterval",null),(0,u._)([(0,s.Cb)()],V.prototype,"type",void 0);var g=V=(0,u._)([(0,f.j)("esri.rest.support.ClassBreaksDefinition")],V)},51905:function(n,e,a){a.d(e,{k:function(){return i}});var r=a(32718).Z.getLogger("esri.rest.support.generateRendererUtils");function t(n,e){return Number(n.toFixed(e))}function i(n){var e=n.normalizationTotal;return{classBreaks:l(n),normalizationTotal:e}}function l(n){var e=n.definition,a=e.classificationMethod,r=e.breakCount,i=e.normalizationType,l=e.definedInterval,f=[],c=n.values;if(0===c.length)return[];c=c.sort((function(n,e){return n-e}));var v=c[0],d=c[c.length-1];if("equal-interval"===a)if(c.length>=r){for(var m=(d-v)/r,p=v,h=1;h<r;h++){var b=t(v+h*m,6);f.push({minValue:p,maxValue:b,label:u(p,b,i)}),p=b}f.push({minValue:p,maxValue:d,label:u(p,d,i)})}else c.forEach((function(n){f.push({minValue:n,maxValue:n,label:u(n,n,i)})}));else if("natural-breaks"===a){for(var y=o(c),V=n.valueFrequency||y.valueFrequency,g=s(y.uniqueValues,V,r),x=v,D=1;D<r;D++)if(y.uniqueValues.length>D){var T=t(y.uniqueValues[g[D]],6);f.push({minValue:x,maxValue:T,label:u(x,T,i)}),x=T}f.push({minValue:x,maxValue:d,label:u(x,d,i)})}else if("quantile"===a)if(c.length>=r&&v!==d){for(var F=v,M=Math.ceil(c.length/r),_=0,k=1;k<r;k++){var z=M+_-1;z>c.length&&(z=c.length-1),z<0&&(z=0),f.push({minValue:F,maxValue:c[z],label:u(F,c[z],i)}),F=c[z],_+=M,M=Math.ceil((c.length-_)/(r-k))}f.push({minValue:F,maxValue:d,label:u(F,d,i)})}else for(var C=-1,I=0;I<c.length;I++){var S=c[I];S!==C&&(C=S,f.push({minValue:C,maxValue:S,label:u(C,S,i)}),C=S)}else if("standard-deviation"===a){var w=function(n){for(var e=0,a=0;a<n.length;a++)e+=n[a];return e/n.length}(c),N=function(n,e){for(var a=0,r=0;r<n.length;r++){var t=n[r];a+=(t-e)*(t-e)}return a/=n.length,Math.sqrt(a)}(c,w);if(0===N)f.push({minValue:c[0],maxValue:c[0],label:u(c[0],c[0],i)});else{for(var q=function(n,e,a,r,t){var i=Math.max(r-n,e-r)/t/a;return i>=1?1:i>=.5?.5:.25}(v,d,r,w,N)*N,Z=0,B=v,j=r;j>=1;j--){var E=t(w-(j-.5)*q,6);f.push({minValue:B,maxValue:E,label:u(B,E,i)}),B=E,Z++}var U=t(w+.5*q,6);f.push({minValue:B,maxValue:U,label:u(B,U,i)}),B=U,Z++;for(var G=1;G<=r;G++)U=Z===2*r?d:t(w+(G+.5)*q,6),f.push({minValue:B,maxValue:U,label:u(B,U,i)}),B=U,Z++}}else if("defined-interval"===a){if(!l)return f;for(var L=c[0],P=c[c.length-1],A=Math.ceil((P-L)/l),O=L,X=1;X<A;X++){var H=t(L+X*l,6);f.push({minValue:O,maxValue:H,label:u(O,H,i)}),O=H}f.push({minValue:O,maxValue:P,label:u(O,P,i)})}return f}function u(n,e,a){return n===e?a&&"percent-of-total"===a?n+"%":n.toString():a&&"percent-of-total"===a?n+"% - "+e+"%":n+" - "+e}function o(n){for(var e=[],a=[],r=Number.MIN_VALUE,t=1,i=-1,l=0;l<n.length;l++){var u=n[l];u===r?(t++,a[i]=t):null!==u&&(e.push(u),r=u,t=1,a.push(t),i++)}return{uniqueValues:e,valueFrequency:a}}function s(n,e,a){var r=n.length,t=[];a>r&&(a=r);for(var i=0;i<a;i++)t.push(Math.round(i*r/a-1));t.push(r-1);var l=f(t,n,e,a);return function(n,e,a,r,t,i){for(var l=0,u=0,o=0,s=0,f=!0,v=0;v<2&&f;v++){0===v&&(f=!1);for(var d=0;d<i-1;d++)for(;a[d+1]+1!==a[d+2];){a[d+1]=a[d+1]+1;var m=c(d,a,r,t);o=m.sbMean,l=m.sbSdcm;var p=c(d+1,a,r,t);if(s=p.sbMean,!(l+(u=p.sbSdcm)<e[d]+e[d+1])){a[d+1]=a[d+1]-1;break}e[d]=l,e[d+1]=u,n[d]=o,n[d+1]=s,f=!0}for(var h=i-1;h>0;h--)for(;a[h]!==a[h-1]+1;){a[h]=a[h]-1;var b=c(h-1,a,r,t);o=b.sbMean,l=b.sbSdcm;var y=c(h,a,r,t);if(s=y.sbMean,!(l+(u=y.sbSdcm)<e[h-1]+e[h])){a[h]=a[h]+1;break}e[h-1]=l,e[h]=u,n[h-1]=o,n[h]=s,f=!0}}return f}(l.mean,l.sdcm,t,n,e,a)&&(l=f(t,n,e,a)),t}function f(n,e,a,r){for(var t=[],i=[],l=[],u=0,o=[],s=[],f=0;f<r;f++){var v=c(f,n,e,a);o.push(v.sbMean),s.push(v.sbSdcm),u+=s[f]}for(var d,m=u,p=!0;p||u<m;){p=!1,t=[];for(var h=0;h<r;h++)t.push(n[h]);for(var b=0;b<r;b++)for(var y=n[b]+1;y<=n[b+1];y++)if(d=e[y],b>0&&y!==n[b+1]&&Math.abs(d-o[b])>Math.abs(d-o[b-1]))n[b]=y;else if(b<r-1&&n[b]!==y-1&&Math.abs(d-o[b])>Math.abs(d-o[b+1])){n[b+1]=y-1;break}m=u,u=0,i=[],l=[];for(var V=0;V<r;V++){i.push(o[V]),l.push(s[V]);var g=c(V,n,e,a);o[V]=g.sbMean,s[V]=g.sbSdcm,u+=s[V]}}if(u>m){for(var x=0;x<r;x++)n[x]=t[x],o[x]=i[x],s[x]=l[x];u=m}return{mean:o,sdcm:s}}function c(n,e,a,t){for(var i=0,l=0,u=e[n]+1;u<=e[n+1];u++){var o=t[u];i+=a[u]*o,l+=o}l<=0&&r.warn("Exception in Natural Breaks calculation");for(var s=i/l,f=0,c=e[n]+1;c<=e[n+1];c++)f+=t[c]*Math.pow(a[c]-s,2);return{sbMean:s,sbSdcm:f}}},71486:function(n,e,a){a.d(e,{DL:function(){return M},F_:function(){return y},G2:function(){return T},H0:function(){return v},Lq:function(){return p},Qm:function(){return x},S5:function(){return c},XL:function(){return m},eT:function(){return V},fk:function(){return D},i5:function(){return d},oF:function(){return _},wk:function(){return f}});var r=a(37762),t=a(93433),i=a(76551),l=a(51905),u=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,o=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),s=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function f(n){return null==n||"string"==typeof n&&!n?"<Null>":n}function c(n){var e=null!=n.normalizationField||null!=n.normalizationType,a=null!=n.minValue||null!=n.maxValue,r=!!n.sqlExpression&&n.supportsSQLExpression;return!e&&!a&&!r}function v(n){var e=n.returnDistinct?(0,t.Z)(new Set(n.values)):n.values,a=e.filter((function(n){return null!=n})).length,r={count:a};return n.supportsNullCount&&(r.nullcount=e.length-a),n.percentileParams&&(r.median=m(e,n.percentileParams)),r}function d(n){var e,a=n.values,t=n.useSampleStdDev,i=n.supportsNullCount,l=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,o=null,s=null,f=null,c=null,v=0,d=null==n.minValue?-1/0:n.minValue,p=null==n.maxValue?1/0:n.maxValue,h=(0,r.Z)(a);try{for(h.s();!(e=h.n()).done;){var b=e.value;Number.isFinite(b)?b>=d&&b<=p&&(o+=b,l=Math.min(l,b),u=Math.max(u,b),v++):"string"==typeof b&&v++}}catch(T){h.e(T)}finally{h.f()}if(v&&null!=o){s=o/v;var y,V=0,g=(0,r.Z)(a);try{for(g.s();!(y=g.n()).done;){var x=y.value;Number.isFinite(x)&&x>=d&&x<=p&&(V+=Math.pow(x-s,2))}}catch(T){g.e(T)}finally{g.f()}c=t?v>1?V/(v-1):0:v>0?V/v:0,f=Math.sqrt(c)}else l=null,u=null;var D={avg:s,count:v,max:u,min:l,stddev:f,sum:o,variance:c};return i&&(D.nullcount=a.length-v),n.percentileParams&&(D.median=m(a,n.percentileParams)),D}function m(n,e){var a=e.fieldType,r=e.value,i=e.orderBy,l=e.isDiscrete,u=p(a,"desc"===i);if(0===(n=(0,t.Z)(n).filter((function(n){return null!=n})).sort((function(n,e){return u(n,e)}))).length)return null;if(r<=0)return n[0];if(r>=1)return n[n.length-1];var o=(n.length-1)*r,s=Math.floor(o),f=s+1,c=o%1,v=n[s],d=n[f];return f>=n.length||l||"string"==typeof v||"string"==typeof d?v:v*(1-c)+d*c}function p(n,e){var a=e?1:-1,r=function(n){return n?function(n,e){return e-n}:function(n,e){return n-e}}(e),i=h(e);if(!n||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID"].concat((0,t.Z)(o)).includes(n))return function(n,e){return"number"==typeof n&&"number"==typeof e?r(n,e):"string"==typeof n&&"string"==typeof e?i(n,e):a};if("esriFieldTypeDate"===n)return function(n,e){var t=new Date(n).getTime(),i=new Date(e).getTime();return isNaN(t)||isNaN(i)?a:r(t,i)};if(o.has(n))return function(n,e){return r(n,e)};if("esriFieldTypeString"===n)return function(n,e){return i(n,e)};if("esriFieldTypeGUID"===n||"esriFieldTypeGlobalID"===n){var l=h(e);return function(n,e){return l(b(n),b(e))}}return e?function(n,e){return 1}:function(n,e){return-1}}function h(n){return n?function(n,e){var a,r;return(n=null===(a=n)||void 0===a?void 0:a.toUpperCase())>(e=null===(r=e)||void 0===r?void 0:r.toUpperCase())?-1:n<e?1:0}:function(n,e){var a,r;return(n=null===(a=n)||void 0===a?void 0:a.toUpperCase())<(e=null===(r=e)||void 0===r?void 0:r.toUpperCase())?-1:n>e?1:0}}function b(n){return n.substr(24,12)+n.substr(19,4)+n.substr(16,2)+n.substr(14,2)+n.substr(11,2)+n.substr(9,2)+n.substr(6,2)+n.substr(4,2)+n.substr(2,2)+n.substr(0,2)}function y(n,e){var a;for(a in n)s.includes(a)&&(Number.isFinite(n[a])||(n[a]=null));return e?(["avg","stddev","variance"].forEach((function(e){null!=n[e]&&(n[e]=Math.ceil(n[e]))})),n):n}function V(n){var e,a={},t=(0,r.Z)(n);try{for(t.s();!(e=t.n()).done;){var i=e.value;(null==i||"string"==typeof i&&""===i.trim())&&(i=null),null==a[i]?a[i]={count:1,data:i}:a[i].count++}}catch(l){t.e(l)}finally{t.f()}return{count:a}}function g(n){return"coded-value"!==(null===n||void 0===n?void 0:n.type)?[]:n.codedValues.map((function(n){return n.code}))}function x(n,e,a,t){var i=n.count,l=[];if(a&&e){var u,o=[],s=g(e[0]),c=(0,r.Z)(s);try{for(c.s();!(u=c.n()).done;){var v=u.value;if(e[1]){var d,m=g(e[1]),p=(0,r.Z)(m);try{for(p.s();!(d=p.n()).done;){var h=d.value;if(e[2]){var b,y=g(e[2]),V=(0,r.Z)(y);try{for(V.s();!(b=V.n()).done;){var x=b.value;o.push("".concat(f(v)).concat(t).concat(f(h)).concat(t).concat(f(x)))}}catch(k){V.e(k)}finally{V.f()}}else o.push("".concat(f(v)).concat(t).concat(f(h)))}}catch(k){p.e(k)}finally{p.f()}}else o.push(v)}}catch(k){c.e(k)}finally{c.f()}for(var D=0,T=o;D<T.length;D++){var F=T[D];i.hasOwnProperty(F)||(i[F]={data:F,count:0})}}for(var M in i){var _=i[M];l.push({value:_.data,count:_.count,label:_.label})}return{uniqueValueInfos:l}}function D(n,e,a,r){var t=null;switch(e){case"log":0!==n&&(t=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(r)&&0!==r&&(t=n/r*100);break;case"field":Number.isFinite(a)&&0!==a&&(t=n/a);break;case"natural-log":n>0&&(t=Math.log(n));break;case"square-root":n>0&&(t=Math.pow(n,.5))}return t}function T(n,e){var a=F({field:e.field,normalizationType:e.normalizationType,normalizationField:e.normalizationField,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numClasses||5});return n=function(n,e,a){var r,t;return e=null!==(r=e)&&void 0!==r?r:-1/0,a=null!==(t=a)&&void 0!==t?t:1/0,n.filter((function(n){return Number.isFinite(n)&&n>=e&&n<=a}))}(n,e.minValue,e.maxValue),(0,l.k)({definition:a,values:n,normalizationTotal:e.normalizationTotal})}function F(n){var e=n.field,a=n.classificationMethod||"equal-interval",r=n.normalizationType,t=n.normalizationField,l=new i.Z;return l.classificationField=e,l.breakCount=n.breakCount,l.classificationMethod=a,l.standardDeviationInterval="standard-deviation"===a?n.standardDeviationInterval||1:void 0,l.normalizationType=r,l.normalizationField="field"===r?t:void 0,l}function M(n,e){var a=n.classBreaks,r=a.length,t=a[0].minValue,i=a[r-1].maxValue,l="standard-deviation"===e,o=u;return a=a.map((function(n){var e=n.label,a={minValue:n.minValue,maxValue:n.maxValue,label:e};if(l&&e){var r=e.match(o).map((function(n){return+n.trim()}));2===r.length?(a.minStdDev=r[0],a.maxStdDev=r[1],r[0]<0&&r[1]>0&&(a.hasAvg=!0)):1===r.length&&(e.includes("<")?(a.minStdDev=null,a.maxStdDev=r[0]):e.includes(">")&&(a.minStdDev=r[0],a.maxStdDev=null))}return a})),{minValue:t,maxValue:i,classBreakInfos:a,normalizationTotal:n.normalizationTotal}}function _(n,e){var a,t=function(n,e){var a=e.field,r=e.classificationMethod,t=e.standardDeviationInterval,i=e.normalizationType,l=e.normalizationField,u=e.normalizationTotal,o=e.minValue,s=e.maxValue,f=e.numBins||10,v=null,m=null,p=null;if(r&&"equal-interval"!==r||i){var h=T(n,{field:a,normalizationType:i,normalizationField:l,normalizationTotal:u,classificationMethod:r,standardDeviationInterval:t,minValue:o,maxValue:s,numClasses:f}).classBreaks;v=h[0].minValue,m=h[h.length-1].maxValue,p=h.map((function(n){return[n.minValue,n.maxValue]}))}else{if(null!=o&&null!=s)v=o,m=s;else{var b=d({values:n,minValue:o,maxValue:s,useSampleStdDev:!i,supportsNullCount:c({normalizationType:i,normalizationField:l,minValue:o,maxValue:s})});v=b.min,m=b.max}p=function(n,e,a){for(var r,t=(e-n)/a,i=[],l=n,u=1;u<=a;u++)r=l+t,r=Number(r.toFixed(16)),i.push([l,u===a?e:r]),l=r;return i}(v,m,f)}return{min:v,max:m,intervals:p}}(n,e),i=t.min,l=t.max,u=t.intervals,o=u.map((function(n,e){return{minValue:u[e][0],maxValue:u[e][1],count:0}})),s=(0,r.Z)(n);try{for(s.s();!(a=s.n()).done;){var f=a.value;if(null!=f&&f>=i&&f<=l){var v=k(u,f);v>-1&&o[v].count++}}}catch(m){s.e(m)}finally{s.f()}return{bins:o,minValue:i,maxValue:l,normalizationTotal:e.normalizationTotal}}function k(n,e){for(var a=-1,r=n.length-1;r>=0;r--)if(e>=n[r][0]){a=r;break}return a}}}]);
//# sourceMappingURL=1486.e15ff7d8.chunk.js.map