"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[2622],{70804:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(71002),a=n(89611),i=n(60136);function o(){o=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,i){var o=new RegExp(e,r);return t.set(o,i||t.get(e)),(0,a.Z)(o,n.prototype)}function u(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){var a=r[n];if("number"==typeof a)t[n]=e[a];else{for(var i=0;void 0===e[a[i]]&&i+1<a.length;)i++;t[n]=e[a[i]]}return t}),Object.create(null))}return(0,i.Z)(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);if(n){n.groups=u(n,this);var r=n.indices;r&&(r.groups=u(r,this))}return n},n.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var i=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){var n=i[t];return"$"+(Array.isArray(n)?n.join("$"):n)})))}if("function"==typeof a){var o=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=(0,r.Z)(e[e.length-1])&&(e=[].slice.call(e)).push(u(e,o)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},o.apply(this,arguments)}},47615:function(e,t,n){n.d(t,{O3:function(){return F},lG:function(){return P},my:function(){return C},q9:function(){return d}});var r=n(29439),a=n(74165),i=n(37762),o=n(10064),u=n(3182),s=n(80457),c=n(80031),l=(0,a.Z)().mark(y),p=(0,a.Z)().mark(v),f={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function d(e){return f[e]}function y(e){var t,n,r;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.t0=e.type,a.next="Feature"===a.t0?3:"FeatureCollection"===a.t0?6:25;break;case 3:return a.next=5,e;case 5:return a.abrupt("break",25);case 6:t=(0,i.Z)(e.features),a.prev=7,t.s();case 9:if((n=t.n()).done){a.next=17;break}if(r=n.value,a.t1=r,!a.t1){a.next=15;break}return a.next=15,r;case 15:a.next=9;break;case 17:a.next=22;break;case 19:a.prev=19,a.t2=a.catch(7),t.e(a.t2);case 22:return a.prev=22,t.f(),a.finish(22);case 25:case"end":return a.stop()}}),l,null,[[7,19,22,25]])}function v(e){var t,n,r,o,u,s,c,l,f;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return",null);case 2:a.t0=e.type,a.next="Point"===a.t0?5:"LineString"===a.t0||"MultiPoint"===a.t0?8:"MultiLineString"===a.t0||"Polygon"===a.t0?10:"MultiPolygon"===a.t0?27:58;break;case 5:return a.next=7,e.coordinates;case 7:return a.abrupt("break",58);case 8:return a.delegateYield(e.coordinates,"t1",9);case 9:return a.abrupt("break",58);case 10:t=(0,i.Z)(e.coordinates),a.prev=11,t.s();case 13:if((n=t.n()).done){a.next=18;break}return r=n.value,a.delegateYield(r,"t2",16);case 16:a.next=13;break;case 18:a.next=23;break;case 20:a.prev=20,a.t3=a.catch(11),t.e(a.t3);case 23:return a.prev=23,t.f(),a.finish(23);case 26:return a.abrupt("break",58);case 27:o=(0,i.Z)(e.coordinates),a.prev=28,o.s();case 30:if((u=o.n()).done){a.next=50;break}s=u.value,c=(0,i.Z)(s),a.prev=33,c.s();case 35:if((l=c.n()).done){a.next=40;break}return f=l.value,a.delegateYield(f,"t4",38);case 38:a.next=35;break;case 40:a.next=45;break;case 42:a.prev=42,a.t5=a.catch(33),c.e(a.t5);case 45:return a.prev=45,c.f(),a.finish(45);case 48:a.next=30;break;case 50:a.next=55;break;case 52:a.prev=52,a.t6=a.catch(28),o.e(a.t6);case 55:return a.prev=55,o.f(),a.finish(55);case 58:case"end":return a.stop()}}),p,null,[[11,20,23,26],[28,52,55,58],[33,42,45,48]])}function m(e){var t,n=(0,i.Z)(e);try{for(n.s();!(t=n.n()).done;){if(t.value.length>2)return!0}}catch(r){n.e(r)}finally{n.f()}return!1}function g(e){for(var t=0,n=0;n<e.length;n++){var r=e[n],a=e[(n+1)%e.length];t+=r[0]*a[1]-a[0]*r[1]}return t<=0}function h(e){var t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function b(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return Z(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){var r,a=(0,i.Z)(t.coordinates);try{for(a.s();!(r=a.n()).done;){Z(e,r.value,n)}}catch(o){a.e(o)}finally{a.f()}return e}(e,t,n);case"MultiPolygon":return function(e,t,n){var r,a=(0,i.Z)(t.coordinates);try{for(a.s();!(r=a.n()).done;){var o=r.value;w(e,o[0],n);for(var u=1;u<o.length;u++)x(e,o[u],n)}}catch(s){a.e(s)}finally{a.f()}return e}(e,t,n);case"Point":return function(e,t,n){return S(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){var r=t.coordinates;w(e,r[0],n);for(var a=1;a<r.length;a++)x(e,r[a],n);return e}(e,t,n)}}function w(e,t,n){var r=h(t);!function(e){return!g(e)}(r)?Z(e,r,n):k(e,r,n)}function x(e,t,n){var r=h(t);!function(e){return g(e)}(r)?Z(e,r,n):k(e,r,n)}function Z(e,t,n){var r,a=(0,i.Z)(t);try{for(a.s();!(r=a.n()).done;){S(e,r.value,n)}}catch(o){a.e(o)}finally{a.f()}e.lengths.push(t.length)}function k(e,t,n){for(var r=t.length-1;r>=0;r--)S(e,t[r],n);e.lengths.push(t.length)}function S(e,t,n){var a=(0,r.Z)(t,3),i=a[0],o=a[1],u=a[2];e.coords.push(i,o),n.hasZ&&e.coords.push(u||0)}function T(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function F(e){if(!e)throw new o.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new o.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var t=e.crs;if(t){var n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!r.test(n))throw new o.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}}function C(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[],u=new Set,s=new Set,l=!1,p=null,f=!1,g=a.geometryType,h=void 0===g?null:g,b=!1,w=(0,i.Z)(y(e));try{var x=function(){var e=r.value,t=e.geometry,a=e.properties,i=e.id;if((!t||(h||(h=d(t.type)),d(t.type)===h))&&(l||(l=m(v(t))),f||(f=null!=i)&&(n=typeof i,p=Object.keys(a).filter((function(e){return a[e]===i}))),f&&null!=i&&(p.length>1?p=p.filter((function(e){return a[e]===i})):1===p.length&&(p=a[p[0]]===i?p:[])),!b&&a)){var y=!0;for(var g in a)if(!u.has(g)){var w=a[g];if(null!=w){var x=T(w);"unknown"!==x?(s.delete(g),u.add(g),o.push({name:(0,c.q6)(g),alias:g,type:x})):s.add(g)}else y=!1,s.add(g)}b=y}};for(w.s();!(r=w.n()).done;)x()}catch(C){w.e(C)}finally{w.f()}var Z=(0,c.q6)(1===(null===(t=p)||void 0===t?void 0:t.length)&&p[0]||null);if(Z){var k,S=(0,i.Z)(o);try{for(S.s();!(k=S.n()).done;){var F=k.value;if(F.name===Z&&(0,c.H7)(F)){F.type="esriFieldTypeOID";break}}}catch(C){S.e(C)}finally{S.f()}}return{fields:o,geometryType:h,hasZ:l,objectIdFieldName:Z,objectIdFieldType:n,unknownFields:Array.from(s)}}function P(e,t){return Array.from(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,a.Z)().mark((function n(){var r,o,c,l,p,f,y,v,m,g,h,w;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.geometryType,o=t.objectIdField,c=(0,i.Z)(e),n.prev=2,c.s();case 4:if((l=c.n()).done){n.next=17;break}if(f=l.value,y=f.geometry,v=f.properties,m=f.id,!y||d(y.type)===r){n.next=9;break}return n.abrupt("continue",15);case 9:return h=null!==(p=(g=v||{})[o])&&void 0!==p?p:null,o&&null!=m&&!g[o]&&(g[o]=h=m),w=new u.u_(y?b(new s.Z,y,t):null,g,null,h),n.next=15,w;case 15:n.next=4;break;case 17:n.next=22;break;case 19:n.prev=19,n.t0=n.catch(2),c.e(n.t0);case 22:return n.prev=22,c.f(),n.finish(22);case 25:case"end":return n.stop()}}),n,null,[[2,19,22,25]])}))()}(y(e),t))}},12622:function(e,t,n){n.d(t,{M8:function(){return P},ft:function(){return H},FU:function(){return O},Bm:function(){return re},be:function(){return W},eB:function(){return J}});var r=n(74165),a=n(1413),i=n(29439),o=n(37762),u=n(93433),s=n(70804),c=n(15861),l=(n(59486),n(76200)),p=n(10064),f=n(83704),d=n(92026),y=n(66978),v=n(35995),m=n(52587),g=n(92975),h=n(27823),b=n(47615);function w(e){var t;return null!==(t=function(e){var t,n,r,a,i=x.exec(e);if(null===i||void 0===i||!i.groups)return null;var o=i.groups,u=+o.year,s=+o.month-1,c=+o.day,l=+(null!==(t=o.hours)&&void 0!==t?t:"0"),p=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),f=+(null!==(r=o.seconds)&&void 0!==r?r:"0");if(l>23)return null;if(p>59)return null;if(f>59)return null;var d,y=null!==(a=o.ms)&&void 0!==a?a:"0",v=y?+y.padEnd(3,"0").substring(0,3):0;if(o.isUTC)d=Date.UTC(u,s,c,l,p,f,v);else if(o.offsetSign){var m=+o.offsetHours,g=+o.offsetMinutes;d=6e4*("+"===o.offsetSign?-1:1)*(60*m+g)+Date.UTC(u,s,c,l,p,f,v)}else d=new Date(u,s,c,l,p,f,v).getTime();return Number.isNaN(d)?null:d}(e))&&void 0!==t?t:function(e){var t=new Date(e).getTime();return Number.isNaN(t)?null:t}(e)}var x=(0,s.Z)(/^(?:(\x2D?\d{4,})\x2D(\d{2})\x2D(\d{2}))(?:T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?)?(?:(Z)|(?:(\+|\x2D)(\d{2}):(\d{2})))?$/,{year:1,month:2,day:3,hours:4,minutes:5,seconds:6,ms:7,isUTC:8,offsetSign:9,offsetHours:10,offsetMinutes:11}),Z=n(39098),k=n(83040),S=n(78952),T=n(53866),F="xlink:href",C="2.0.0",P="__esri_wfs_id__",N="wfs-layer:getWFSLayerTypeInfo-error",E="wfs-layer:empty-service",G="wfs-layer:feature-type-not-found",D="wfs-layer:malformed-json",A="wfs-layer:unknown-geometry-type",R="wfs-layer:unknown-field-type",M="wfs-layer:unsupported-spatial-reference",j="wfs-layer:unsupported-wfs-version";function O(e,t){return _.apply(this,arguments)}function _(){return _=(0,c.Z)((0,r.Z)().mark((function e(t,n){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=U,e.next=3,(0,l.default)(t,{responseType:"text",query:(0,a.Z)({SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:C},null===n||void 0===n?void 0:n.customParameters),signal:null===n||void 0===n?void 0:n.signal});case 3:return e.t1=e.sent.data,i=(0,e.t0)(e.t1),e.abrupt("return",(V(t,i),i));case 6:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function U(e){var t=oe(e);(function(e){var t,n=null===(t=e.firstElementChild)||void 0===t?void 0:t.getAttribute("version");if(n&&n!==C)throw new p.Z(j,"Unsupported WFS version ".concat(n,". Supported version: ").concat(C))})(t),se(t);var n=t.firstElementChild,r=(0,f.Fs)(function(e){return(0,Z.H)(e,{FeatureTypeList:{FeatureType:function(e){var t,n={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},r=new Set([4326]),a=function(e){var t,n,a,i,o=parseInt(null!==(t=null===(n=e.textContent)||void 0===n||null===(a=n.match((0,s.Z)(/(\d+$)/i,{wkid:1})))||void 0===a||null===(i=a.groups)||void 0===i?void 0:i.wkid)&&void 0!==t?t:"",10);Number.isNaN(o)||r.add(o)};return(0,Z.h)(e,{Name:function(e){var t=ue(e.textContent),r=t.name,a=t.prefix;n.typeName="".concat(a,":").concat(r),n.name=r,n.namespacePrefix=a,n.namespaceUri=e.lookupNamespaceURI(a)},Abstract:function(e){n.description=e.textContent},Title:function(e){n.title=e.textContent},WGS84BoundingBox:function(e){n.extent=function(e){var t,n,r,a,u,s=(0,o.Z)(e.children);try{for(s.s();!(u=s.n()).done;){var c=u.value;switch(c.localName){case"LowerCorner":var l=c.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),p=(0,i.Z)(l,2);t=p[0],n=p[1];break;case"UpperCorner":var f=c.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),d=(0,i.Z)(f,2);r=d[0],a=d[1]}}}catch(y){s.e(y)}finally{s.f()}return{xmin:t,ymin:n,xmax:r,ymax:a,spatialReference:g.Zn}}(e)},DefaultSRS:a,DefaultCRS:a,OtherSRS:a,OtherCRS:a}),n.title||(n.title=n.name),(t=n.supportedSpatialReferences).push.apply(t,(0,u.Z)(r)),n}}})}(n));return{operations:L(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}var I=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function L(e){var t=!1,n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,Z.h)(e,{OperationsMetadata:{Operation:function(e){switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:function(e){n.GetCapabilities.url=e.getAttribute(F)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:function(e){n.DescribeFeatureType.url=e.getAttribute(F)}}}};case"GetFeature":return{DCP:{HTTP:{Get:function(e){n.GetFeature.url=e.getAttribute(F)}}},Parameter:function(e){if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:function(e){var t=e.textContent;t&&I.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:function(e){switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:function(e){t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:function(e){n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new p.Z("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if((0,d.Wi)(n.GetFeature.outputFormat))throw new p.Z("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return n}function V(e,t){(0,v.$U)(e)&&((0,v.D6)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,v.hO)(t.operations.DescribeFeatureType.url)),(0,v.D6)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,v.hO)(t.operations.GetFeature.url)))}function H(e,t,n){return(0,f.sE)(e,(function(e){return n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t}))}function W(e,t,n){return Y.apply(this,arguments)}function Y(){return Y=(0,c.Z)((0,r.Z)().mark((function e(t,n,a){var i,o,u,s,c,l,p,f,d,y,v,m=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=m.length>3&&void 0!==m[3]?m[3]:{},e.next=3,q(t,n,a,o);case 3:return u=e.sent,s=u.featureType,c=u.extent,e.next=8,z(t,s.typeName,o);case 8:return l=e.sent,p=l.fields,f=l.geometryType,d=l.swapXY,y=l.objectIdField,v=l.geometryField,e.abrupt("return",{url:t.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:p,geometryField:v,geometryType:f,objectIdField:y,spatialReference:null!==(i=o.spatialReference)&&void 0!==i?i:S.Z.WGS84,extent:c,swapXY:d,wfsCapabilities:t,customParameters:o.customParameters});case 15:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}function q(e,t,n){return $.apply(this,arguments)}function $(){return $=(0,c.Z)((0,r.Z)().mark((function e(t,n,i){var o,u,s,c,l,f,y=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=y.length>3&&void 0!==y[3]?y[3]:{},u=o.spatialReference,s=void 0===u?S.Z.WGS84:u,c=t.readFeatureTypes(),l=n?H(c,n,i):c.next().value,!(0,d.Wi)(l)){e.next=4;break}throw n?new p.Z(G,"The type '".concat(n,"' could not be found in the service")):new p.Z(E,"The service is empty");case 4:if(f=new T.Z((0,a.Z)((0,a.Z)({},l.extent),{},{spatialReference:s})),(0,g.fS)(s,g.Zn)){e.next=15;break}return e.prev=6,e.next=9,(0,m.iQ)(g.Zn,s,void 0,o);case 9:f=(0,m.iV)(f,g.Zn),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(6),new p.Z(M,"Projection not supported");case 15:return e.abrupt("return",{extent:f,spatialReference:s,featureType:l});case 16:case"end":return e.stop()}}),e,null,[[6,12]])}))),$.apply(this,arguments)}function z(e,t){return X.apply(this,arguments)}function X(){return X=(0,c.Z)((0,r.Z)().mark((function e(t,n){var o,u,s,c,l,f,v,m,g,h,b,w,x,Z,k,S=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f=S.length>2&&void 0!==S[2]?S[2]:{},e.next=3,(0,y.as)([K(t.operations.DescribeFeatureType.url,n,f),B(t,n,f)]);case 3:if(v=e.sent,m=(0,i.Z)(v,2),g=m[0],h=m[1],!g.error&&!h.error){e.next=9;break}throw new p.Z(N,"An error occurred while getting info about the feature type '".concat(n,"'"),{error:g.error||h.error});case 9:if(b=null!==(o=g.value)&&void 0!==o?o:{},w=b.fields,x=b.errors,Z=(null===(u=g.value)||void 0===u?void 0:u.geometryType)||(null===(s=h.value)||void 0===s?void 0:s.geometryType),k=null!==(c=null===(l=h.value)||void 0===l?void 0:l.swapXY)&&void 0!==c&&c,!(0,d.Wi)(Z)){e.next=12;break}throw new p.Z(A,"The geometry type could not be determined for type '".concat(n),{typeName:n,geometryType:Z,fields:w,errors:x});case 12:return e.abrupt("return",(0,a.Z)((0,a.Z)({},J(null!==w&&void 0!==w?w:[])),{},{geometryType:Z,swapXY:k}));case 13:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}function J(e){var t,n=e.find((function(e){return"geometry"===e.type})),r=e.find((function(e){return"oid"===e.type}));return e=e.filter((function(e){return"geometry"!==e.type})),r||(r=new k.Z({name:P,type:"oid",alias:P}),e.unshift(r)),{geometryField:null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:null,objectIdField:r.name,fields:e}}function B(e,t){return Q.apply(this,arguments)}function Q(){return Q=(0,c.Z)((0,r.Z)().mark((function e(t,n){var o,u,s,c,p,f,d,y,v,m,g,w,x,Z,k=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=k.length>2&&void 0!==k[2]?k[2]:{},c=!1,e.next=4,Promise.all([re(t.operations.GetFeature.url,n,t.operations.GetFeature.outputFormat,(0,a.Z)((0,a.Z)({},u),{},{count:1})),(0,l.default)(t.operations.GetFeature.url,{responseType:"text",query:ie(n,void 0,(0,a.Z)((0,a.Z)({},u),{},{count:1})),signal:null===u||void 0===u?void 0:u.signal})]);case 4:if(p=e.sent,f=(0,i.Z)(p,2),d=f[0],y=f[1],!(v="FeatureCollection"===d.type&&(null===(o=d.features[0])||void 0===o?void 0:o.geometry))){e.next=22;break}e.t0=(s=h.Mk.fromJSON((0,b.q9)(v.type)),v.type),e.next="Point"===e.t0?13:"LineString"===e.t0||"MultiPoint"===e.t0?15:"MultiLineString"===e.t0||"Polygon"===e.t0?17:"MultiPolygon"===e.t0?19:20;break;case 13:return m=v.coordinates,e.abrupt("break",20);case 15:return m=v.coordinates[0],e.abrupt("break",20);case 17:return m=v.coordinates[0][0],e.abrupt("break",20);case 19:m=v.coordinates[0][0][0];case 20:(g=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(y.data))&&(w=m[0].toFixed(3),x=m[1].toFixed(3),Z=parseFloat(g[1]).toFixed(3),w===parseFloat(g[2]).toFixed(3)&&x===Z&&(c=!0));case 22:return e.abrupt("return",{geometryType:s,swapXY:c});case 23:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function K(e,t,n){return ee.apply(this,arguments)}function ee(){return ee=(0,c.Z)((0,r.Z)().mark((function e(t,n,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=te,e.t1=n,e.next=4,(0,l.default)(t,{responseType:"text",query:(0,a.Z)({SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:C,TYPENAME:n},null===i||void 0===i?void 0:i.customParameters),signal:null===i||void 0===i?void 0:i.signal});case 4:return e.t2=e.sent.data,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 6:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}function te(e,t){var n=ue(e).name,r=oe(t);se(r);var a=(0,f.sE)((0,Z.H)(r.firstElementChild,{element:function(e){return{name:e.getAttribute("name"),typeName:ue(e.getAttribute("type")).name}}}),(function(e){return e.name===n}));if((0,d.pC)(a)){var i=(0,f.sE)((0,Z.H)(r.firstElementChild,{complexType:function(e){return e}}),(function(e){return e.getAttribute("name")===a.typeName}));if((0,d.pC)(i))return function(e){var t,n,r,a,i=[],u=[],s=(0,Z.H)(e,{complexContent:{extension:{sequence:{element:function(e){return e}}}}}),c=(0,o.Z)(s);try{for(c.s();!(a=c.n()).done;){var l=a.value,f=l.getAttribute("name");if(f){var d=void 0,y=void 0;if(l.hasAttribute("type")?d=ue(l.getAttribute("type")).name:(0,Z.h)(l,{simpleType:{restriction:function(e){return d=ue(e.getAttribute("base")).name,{maxLength:function(e){y=+e.getAttribute("value")}}}}}),d){var v="true"===l.getAttribute("nillable"),m=!1;switch(d.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":u.push(new k.Z({name:f,alias:f,type:"integer",nullable:v}));break;case"float":case"double":case"decimal":u.push(new k.Z({name:f,alias:f,type:"double",nullable:v}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":u.push(new k.Z({name:f,alias:f,type:"string",nullable:v,length:null!==(t=y)&&void 0!==t?t:255}));break;case"datetime":case"date":u.push(new k.Z({name:f,alias:f,type:"date",nullable:v,length:null!==(n=y)&&void 0!==n?n:36}));break;case"pointpropertytype":r="point",m=!0;break;case"multipointpropertytype":r="multipoint",m=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",m=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",m=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":m=!0,i.push(new p.Z(A,"geometry type '".concat(d,"' is not supported"),{type:(new XMLSerializer).serializeToString(e)}));break;default:i.push(new p.Z(R,"Unknown field type '".concat(d,"'"),{type:(new XMLSerializer).serializeToString(e)}))}m&&u.push(new k.Z({name:f,alias:f,type:"geometry",nullable:v}))}}}}catch(w){c.e(w)}finally{c.f()}for(var g=0,h=u;g<h.length;g++){var b=h[g];if("integer"===b.type&&!b.nullable&&ne.has(b.name.toLowerCase())){b.type="oid";break}}return{geometryType:r,fields:u,errors:i}}(i)}throw new p.Z(G,"Type '".concat(e,"' not found in document"),{document:(new XMLSerializer).serializeToString(r)})}var ne=new Set(["objectid","fid"]);function re(e,t,n,r){return ae.apply(this,arguments)}function ae(){return ae=(0,c.Z)((0,r.Z)().mark((function e(t,n,a,i){var o,u,s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.default)(t,{responseType:"text",query:ie(n,a,i),signal:null===i||void 0===i?void 0:i.signal});case 2:if(o=e.sent,u=(u=o.data).replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3'),e.prev=5,null===i||void 0===i||null===(s=i.dateFields)||void 0===s||!s.length){e.next=9;break}return c=new Set(i.dateFields),e.abrupt("return",JSON.parse(u,(function(e,t){return c.has(e)?w(t):t})));case 9:return e.abrupt("return",JSON.parse(u));case 12:throw e.prev=12,e.t0=e.catch(5),new p.Z(D,"Error while parsing the\xa0response",{response:u,error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[5,12]])}))),ae.apply(this,arguments)}function ie(e,t,n){return(0,a.Z)({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:C,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null===n||void 0===n?void 0:n.startIndex,COUNT:null===n||void 0===n?void 0:n.count},null===n||void 0===n?void 0:n.customParameters)}function oe(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function ue(e){var t=e.split(":"),n=(0,i.Z)(t,2),r=n[0],a=n[1];return{prefix:a?r:"",name:null!==a&&void 0!==a?a:r}}function se(e){var t="",n="";if((0,Z.h)(e.firstElementChild,{Exception:function(e){return t=e.getAttribute("exceptionCode"),{ExceptionText:function(e){n=e.textContent}}}}),t)throw new p.Z("wfs-layer:".concat(t),n)}},39098:function(e,t,n){n.d(t,{H:function(){return u},h:function(){return o}});var r=n(74165),a=n(37762),i=(0,r.Z)().mark(u);function o(e,t){if(e&&t){var n,r=(0,a.Z)(e.children);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(i.localName in t){var u=t[i.localName];if("function"==typeof u){var s=u(i);s&&o(i,s)}else o(i,u)}}}catch(c){r.e(c)}finally{r.f()}}}function u(e,t){var n,o,s,c;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=(0,a.Z)(e.children),r.prev=1,n.s();case 3:if((o=n.n()).done){r.next=15;break}if(!((s=o.value).localName in t)){r.next=13;break}if("function"!=typeof(c=t[s.localName])){r.next=12;break}return r.next=10,c(s);case 10:r.next=13;break;case 12:return r.delegateYield(u(s,c),"t0",13);case 13:r.next=3;break;case 15:r.next=20;break;case 17:r.prev=17,r.t1=r.catch(1),n.e(r.t1);case 20:return r.prev=20,n.f(),r.finish(20);case 23:case"end":return r.stop()}}),i,null,[[1,17,20,23]])}}}]);
//# sourceMappingURL=2622.3b7439e5.chunk.js.map