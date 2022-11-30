"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[394],{80394:function(e,r,n){n.d(r,{Hq:function(){return V},Mk:function(){return d},P_:function(){return Y},Qp:function(){return q},VO:function(){return _},_D:function(){return k},kZ:function(){return H},kr:function(){return X},nF:function(){return N},tB:function(){return j},ut:function(){return I},vF:function(){return K},zD:function(){return P}});var i,a,t=n(74165),o=n(1413),s=n(29439),f=n(15861),u=(n(59486),n(10064)),l=n(92026),c=n(68860),h=n(15075),x=n(52587),p=n(53866),v=n(585),m=n(80885),g=n(78952);function d(e,r,n){return!(0,x.Up)(e,r,n)}function y(e,r,n){var i=d(e,r,n);if(i&&!(0,x.kR)())throw new u.Z("rasterprojectionhelper-project","projection engine is not loaded");return i}(a=i||(i={}))[a.None=0]="None",a[a.North=1]="North",a[a.South=2]="South",a[a.Both=3]="Both";var M=function(e,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(1===n[0])return[0,0];for(var a=1,t=-1,o=1,s=-1,f=0;f<e.length;f+=2)isNaN(e[f])||(a=a>e[f]?e[f]:a,t=t>e[f]?t:e[f],o=o>e[f+1]?e[f+1]:o,s=s>e[f+1]?s:e[f+1]);for(var u=r.cols,l=r.rows,c=(t-a)/u/n[0],h=(s-o)/l/n[1],x=2*i,p=0,v=!1,m=[0,0],g=0;g<u-3;g++){for(var d=0;d<l-3;d++){var y=g*l*2+2*d,M=(e[y]+e[y+4]+e[y+4*l]+e[y+4*l+4])/4,w=(e[y+1]+e[y+5]+e[y+4*l+1]+e[y+4*l+5])/4,R=Math.abs((M-e[y+2*l+2])/c),b=Math.abs((w-e[y+2*l+3])/h);if(R+b>p&&(p=R+b,m=[R,b]),x&&p>x){v=!0;break}}if(v)break}return m},w={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},R=new Map,b=new Map,S=500;function P(){return C.apply(this,arguments)}function C(){return(C=(0,f.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=(0,x.kR)(),e.t0){e.next=4;break}return e.next=4,(0,x.zD)();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,r,n){return y(e.spatialReference,r)?n?(0,x.rS)(r,e.spatialReference,e):(0,x.rS)(e.spatialReference,r,e):null}function _(e,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=e.spatialReference;if(a.equals(r))return e;y(a,r,i);var t,o=n.center,s=new p.Z({xmin:o.x-e.x/2,xmax:o.x+e.x/2,ymin:o.y-e.y/2,ymax:o.y+e.y/2,spatialReference:a}),f=(0,x.iV)(s,r,i),u=I(r);if((0,l.Wi)(f)||(0,l.pC)(u)&&f.width>=u){var h=(0,c.c9)(a)/(0,c.c9)(r);t={x:e.x*h,y:e.y*h}}else t={x:f.width,y:f.height};return t}function G(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;return(0,c.c9)(e)?r/(0,c.c9)(e):0}function N(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=e.spatialReference;if(a.equals(r))return e;y(a,r,n);var t=(0,x.iV)(e,r,n);return i&&t?(E([e],[t],a,r),t):t}function E(e,r,n,i){var a=B(n,!0),t=B(i,!0),o=G(n,S),s=G(i,S);if(o&&(0,l.pC)(a)&&(0,l.pC)(t))for(var f=0;f<e.length;f++){var u=r[f];if(u){var c=e[f].x,h=u.x;h>=t[1]-s&&Math.abs(c-a[0])<o?u.x-=t[1]-t[0]:h<=t[0]+s&&Math.abs(c-a[1])<o&&(u.x+=t[1]-t[0])}}}function Z(e){var r=e.inSR,n=e.outSR,i=e.datumTransformation,a=e.preferPE;if(r.equals(n))return O(e,null).points;if(r.isWebMercator&&n.isWGS84||r.isWGS84&&n.isWebMercator)return function(e){var r=e.cols,n=e.rows,i=e.xres,a=e.yres,t=e.usePixelCenter,o=e.inSR,s=e.outSR,f=e.xmin,u=e.ymax;t&&(f+=i/2,u-=a/2);for(var l=[],c=[],h=Math.max(r,n),p=0;p<h;p++){var m=f+i*Math.min(r,p),g=u-a*Math.min(n,p),d=(0,x.iV)(new v.Z({x:m,y:g,spatialReference:o}),s);p<=r&&l.push(d.x),p<=n&&c.push(d.y)}for(var y=[],M=0;M<r;M++)for(var w=0;w<n;w++)y.push([l[M],c[w]]);return y}(e);if(y(r,n,i)&&a){if(r.isGeographic)return T(e);var t=W(r);if((0,l.pC)(t))return T(e)}return function(e){var r=O(e,null).points,n=e.inSR,i=e.outSR,a=e.datumTransformation,t=r.map((function(e){return new v.Z(e[0],e[1],n)})),o=(0,x.iV)(t,i,a);return a&&E(t,o,n,i),o.map((function(e){return e?[e.x,e.y]:[NaN,NaN]}))}(e)}function T(e){var r=e.inSR,n=e.outSR,i=e.datumTransformation,a=O(e,W(r)),t=a.points,o=a.mask;if(!r.isGeographic){var f=r.wkid?h.e.coordsys(r.wkid):h.e.fromString(r.isGeographic?h.f.PE_TYPE_GEOGCS:h.f.PE_TYPE_PROJCS,r.wkt);h.g.projToGeog(f,t.length,t)}if((0,l.pC)(i)&&i.steps.length){var u,c=179.9955;if(n.isGeographic&&(u=t.map((function(e){var r=(0,s.Z)(e,1)[0];return r>c?1:r<-c?-1:0}))),i.steps.forEach((function(e){var r=e.wkid?h.e.geogtran(e.wkid):h.e.fromString(h.f.PE_TYPE_GEOGTRAN,e.wkt);h.h.geogToGeog(r,t.length,t,null,e.isInverse?h.f.PE_TRANSFORM_2_TO_1:h.f.PE_TRANSFORM_1_TO_2)})),u)for(var x=0;x<t.length;x++){var p=u[x],v=t[x][0],m=v>c?1:v<-c?-1:0;p&&m&&p!==m&&(t[x][0]=p>0?v+360:v-360)}}if(!n.isGeographic){var g=W(n,!0),d=(0,l.pC)(g)&&g.isEnvelope?[g.bbox[1],g.bbox[3]]:[-90,90];!function(e,r){for(var n=(0,s.Z)(r,2),i=n[0],a=n[1],t=0;t<e.length;t++){var o=e[t][1];(o<i||o>a)&&(e[t]=[NaN,NaN])}}(t,d);var y=n.wkid?h.e.coordsys(n.wkid):h.e.fromString(n.isGeographic?h.f.PE_TYPE_GEOGCS:h.f.PE_TYPE_PROJCS,n.wkt);h.g.geogToProj(y,t.length,t)}var M=t;if(o&&t.length!==o.length){M=[];for(var w=0,R=0;w<o.length;w++)o[w]?M.push(t[R++]):M.push([NaN,NaN])}return M}function W(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.wkid||e.wkt;if(!n||e.isGeographic)return null;if(n=String(n),R.has(n)){var i=R.get(n);return r?null===i||void 0===i?void 0:i.gcs:null===i||void 0===i?void 0:i.pcs}var a=e.wkid?h.e.coordsys(e.wkid):h.e.fromString(e.isGeographic?h.f.PE_TYPE_GEOGCS:h.f.PE_TYPE_PROJCS,e.wkt),t=z(a,G(e,1e-4)),o=z(a,0,!0);return R.set(n,{pcs:t,gcs:o}),r?o:t}function z(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=h.j.generate(e),a=n?e.horizonGcsGenerate():e.horizonPcsGenerate();if(!i||null===a||void 0===a||!a.length)return null;var t=!1,o=a.find((function(e){return 1===e.getInclusive()&&1===e.getKind()}));if(!o){if(o=a.find((function(e){return 1===e.getInclusive()&&0===e.getKind()})),!o)return null;t=!0}var f=n?0:(2===i.getNorthPoleLocation()?1:0)|(2===i.getSouthPoleLocation()?2:0),u=i.isPannableRectangle(),l=o.getCoord();if(t)return{isEnvelope:t,isPannable:u,vertices:l,coef:null,bbox:[l[0][0]-r,l[0][1]-r,l[1][0]+r,l[1][1]+r],poleLocation:f};for(var c=0,x=[],p=(0,s.Z)(l[0],2),v=p[0],m=p[1],g=(0,s.Z)(l[0],2),d=g[0],y=g[1],M=0,w=l.length;M<w;M++){++c===w&&(c=0);var R=(0,s.Z)(l[M],2),b=R[0],S=R[1],P=(0,s.Z)(l[c],2),C=P[0],k=P[1];if(k===S)x.push([b,C,S,k,2]);else{var _=(C-b)/(k-S||1e-4),G=b-_*S;S<k?x.push([_,G,S,k,0]):x.push([_,G,k,S,1])}v=v<b?v:b,m=m<S?m:S,d=d>b?d:b,y=y>S?y:S}return{isEnvelope:!1,isPannable:u,vertices:l,coef:x,bbox:[v,m,d,y],poleLocation:f}}function O(e,r){var n=[],i=e.cols,a=e.rows,t=e.xres,o=e.yres,f=e.usePixelCenter,u=e.xmin,c=e.ymax;if(f&&(u+=t/2,c-=o/2),(0,l.Wi)(r)){for(var h=0;h<i;h++)for(var x=0;x<a;x++)n.push([u+t*h,c-o*x]);return{points:n}}var p=new Uint8Array(i*a);if(r.isEnvelope){for(var v=(0,s.Z)(r.bbox,4),m=v[0],g=v[1],d=v[2],y=v[3],M=0,w=0;M<i;M++)for(var R=u+t*M,b=r.isPannable||R>=m&&R<=d,S=0;S<a;S++,w++){var P=c-o*S;b&&P>=g&&P<=y&&(n.push([R,P]),p[w]=1)}return{points:n,mask:p}}for(var C=r.coef,k=[],_=0;_<a;_++){for(var G=c-o*_,N=[],E=[],Z=0;Z<C.length;Z++){var T=(0,s.Z)(C[Z],5),W=T[0],z=T[1],O=T[2],L=T[3],j=T[4];if(G===O&&O===L)N.push(W),N.push(z),E.push(2),E.push(2);else if(G>=O&&G<=L){var A=W*G+z;N.push(A),E.push(j)}}var D=N;if(N.length>2){var I=2===E[0]?0:E[0],B=N[0];D=[];for(var F=1;F<E.length;F++)2===E[F]&&F!==E.length-1||(E[F]!==I&&(D.push(0===I?Math.min(B,N[F-1]):Math.max(B,N[F-1])),I=E[F],B=N[F]),F===E.length-1&&D.push(0===E[F]?Math.min(B,N[F]):Math.max(B,N[F])));D.sort((function(e,r){return e-r}))}else N[0]>N[1]&&(D=[N[1],N[0]]);k.push(D)}for(var V=0,Y=0;V<i;V++)for(var q=u+t*V,J=0;J<a;J++,Y++){var U=c-o*J,H=k[J];if(2===H.length)q>=H[0]&&q<=H[1]&&(n.push([q,U]),p[Y]=1);else if(H.length>2){for(var X=!1,K=0;K<H.length;K+=2)if(q>=H[K]&&q<=H[K+1]){X=!0;break}X&&(n.push([q,U]),p[Y]=1)}}return{points:n,mask:p}}function L(e){var r=I(e[0].spatialReference);if(e.length<2||(0,l.Wi)(r))return e[0];for(var n=e[0],i=n.xmin,a=n.xmax,t=n.ymin,o=n.ymax,s=1;s<e.length;s++){var f=e[s];a=f.xmax+r*s,t=Math.min(t,f.ymin),o=Math.max(o,f.ymax)}return new p.Z({xmin:i,xmax:a,ymin:t,ymax:o,spatialReference:e[0].spatialReference})}function j(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],t=e.spatialReference;if(t.equals(r))return e;var o=V(e),s=I(t,!0),f=I(r);if(0===o||(0,l.Wi)(s)||(0,l.Wi)(f)){var u=D(e,r,n,a);if((0,l.Wi)(s)&&(0,l.pC)(f)&&Math.abs(u.width-f)<G(r)&&(0,x.kR)()){var c=W(t);if((0,l.pC)(c)&&c.poleLocation===i.None&&e.width<(c.bbox[2]-c.bbox[0])/2)return A(e,r)||u}return u}var h=e.clone().normalize();if(1===h.length&&e.xmax<s&&e.xmax-s/2>G(t))for(var v=e.xmin,m=e.xmax,g=0;g<=o;g++){var d=0===g?v:-s/2,y=g===o?m-s*g:s/2;h[g]=new p.Z({xmin:d,xmax:y,ymin:e.ymin,ymax:e.ymax,spatialReference:t})}return L(h.map((function(e){return D(e,r,n,a)})).filter(l.pC))}function A(e,r){var n=I(r);if((0,l.Wi)(n))return null;var i=e.xmin,a=e.ymin,t=e.xmax,o=e.ymax,s=e.spatialReference,f=new m.Z({spatialReference:s,rings:[[[i,a],[t,a],[t,o],[i,o],[i,a]]]}),u=(0,x.iV)(f,r);if(2!==u.rings.length||!u.rings[0].length||!u.rings[1].length)return null;for(var c=u.rings,h=G(s),v=new p.Z({spatialReference:r}),g=0;g<2;g++){i=t=c[g][0][0],a=o=c[g][0][1];for(var d=0;d<c[g].length;d++)i=i>c[g][d][0]?c[g][d][0]:i,t=t<c[g][d][0]?c[g][d][0]:t,a=a>c[g][d][1]?c[g][d][1]:a,o=o<c[g][d][1]?c[g][d][1]:o;if(0===g)v.ymin=a,v.ymax=o,v.xmin=i,v.xmax=t;else if(v.ymin=Math.min(v.ymin,a),v.ymax=Math.max(v.ymax,o),Math.abs(t-n/2)<h)v.xmin=i,v.xmax=v.xmax+n;else{if(!(Math.abs(i+n/2)<h))return null;v.xmax=t+n}}return v}function D(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],t=e.spatialReference;if(t.equals(r)||!r)return e;y(t,r,n);var o=(0,x.iV)(e,r,n);if(a&&r.isWebMercator&&o&&(o.ymax=Math.min(20037508.342787,o.ymax),o.ymin=Math.max(-20037508.342787,o.ymin),o.ymin>=o.ymax))return null;if(!i||!o)return o;var s=B(t,!0),f=B(r,!0);if((0,l.Wi)(s)||(0,l.Wi)(f))return o;var u=G(t,.001),c=G(t,S),h=G(r,.001);if(Math.abs(o.xmin-f[0])<h&&Math.abs(o.xmax-f[1])<h){var p=Math.abs(e.xmin-s[0]),m=Math.abs(s[1]-e.xmax);if(p<u&&m>c){o.xmin=f[0];var g=[];g.push(new v.Z(e.xmax,e.ymin,t)),g.push(new v.Z(e.xmax,(e.ymin+e.ymax)/2,t)),g.push(new v.Z(e.xmax,e.ymax,t));var d=g.map((function(e){return N(e,r,n)})).filter((function(e){return!isNaN(null===e||void 0===e?void 0:e.x)})).map((function(e){return e.x}));o.xmax=Math.max.apply(null,d)}if(m<u&&p>c){o.xmax=f[1];var M=[];M.push(new v.Z(e.xmin,e.ymin,t)),M.push(new v.Z(e.xmin,(e.ymin+e.ymax)/2,t)),M.push(new v.Z(e.xmin,e.ymax,t));var w=M.map((function(e){return N(e,r,n)})).filter((function(e){return!isNaN(null===e||void 0===e?void 0:e.x)})).map((function(e){return e.x}));o.xmin=Math.min.apply(null,w)}}else{var R=G(r,.001);Math.abs(o.xmin-f[0])<R&&(o.xmin=f[0]),Math.abs(o.xmax-f[1])<R&&(o.xmax=f[1])}return o}function I(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return null;var n=r?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*w[e.wkid]||null}function B(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.isGeographic)return[-180,180];var n=I(e,r);return(0,l.pC)(n)?[-n/2,n/2]:null}function F(e,r,n,i){var a=(e-r)/n;return a-Math.floor(a)!=0?a=Math.floor(a):i&&(a-=1),a}function V(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=I(e.spatialReference);if((0,l.Wi)(n))return 0;var i=r?0:-n/2,a=G(e.spatialReference),t=!r&&Math.abs(e.xmax-n/2)<a?n/2:e.xmax,o=!r&&Math.abs(e.xmin+n/2)<a?-n/2:e.xmin;return F(t,i,n,!0)-F(o,i,n,!1)}function Y(e){var r=e.storageInfo.origin.x,n=I(e.spatialReference,!0);if((0,l.Wi)(n))return{originX:r,halfWorldWidth:null,pyramidsInfo:null};for(var i=n/2,a=e.nativePixelSize,t=e.storageInfo,o=e.extent,s=t.maximumPyramidLevel,f=t.blockWidth,u=t.pyramidScalingFactor,c=a.x,h=[],x=(0,l.pC)(e.transform)&&"gcs-shift"===e.transform.type,p=r+(x?0:i),v=x?n-r:i-r,m=0;m<=s;m++){var g=(o.xmax-r)/c/f,d=g-Math.floor(g)==0?g:Math.ceil(g),y=v/c/f,M=y-Math.floor(y)==0?y:Math.ceil(y),w=Math.floor(p/c/f),R=Math.round(p/c)%f,b=(f-Math.round(v/c)%f)%f;h.push({resolutionX:c,blockWidth:f,datsetColumnCount:d,worldColumnCountFromOrigin:M,leftMargin:R,rightPadding:b,originColumnOffset:w}),c*=u}return{originX:r,halfWorldWidth:i,pyramidsInfo:h,hasGCSSShiftTransform:x}}function q(e){var r=e.isAdaptive&&null==e.spacing,n=e.spacing||[32,32],i=J(e),a={cols:i.size[0]+1,rows:i.size[1]+1},t=i.outofBoundPointCount>0&&i.outofBoundPointCount<i.offsets.length/2,s=i.outofBoundPointCount===i.offsets.length/2||r&&t?[0,0]:M(i.offsets,a,n,4),f=(s[0]+s[1])/2,u=e.projectedExtent.spatialReference,c=e.srcBufferExtent.spatialReference;if(r&&(t||f>4)&&(d(u,c,e.datumTransformation)&&(u.isGeographic||(0,l.pC)(W(u))),n=[4,4],a={cols:(i=J((0,o.Z)((0,o.Z)({},e),{},{spacing:n}))).size[0]+1,rows:i.size[1]+1},s=M(i.offsets,a,n,4)),i.error=s,n[0]>1&&(i.coefficients=U(i.offsets,a,t)),e.includeGCSGrid&&!u.isGeographic&&!u.isWebMercator)if(c.isGeographic)i.gcsGrid={offsets:i.offsets,coefficients:i.coefficients,spacing:n};else{var x=W(u);if((0,l.pC)(x)&&!x.isEnvelope){var p=function(e){if(!e||e.isGeographic)return e;var r,n=String(e.wkid||e.wkt);return b.has(n)?r=b.get(n):(r=(e.wkid?h.e.coordsys(e.wkid):h.e.fromString(h.f.PE_TYPE_PROJCS,e.wkt)).getGeogcs().getCode(),b.set(n,r)),new g.Z({wkid:r})}(u),v=j(e.projectedExtent,p),m=J((0,o.Z)((0,o.Z)({},e),{},{srcBufferExtent:v,spacing:n})).offsets,y=U(m,a,t);i.gcsGrid={offsets:m,coefficients:y,spacing:n}}}return i}function J(e){var r,n=e.projectedExtent,i=e.srcBufferExtent,a=e.pixelSize,t=e.datumTransformation,o=e.rasterTransform,s=n.spatialReference,f=i.spatialReference,u=y(s,f),c=n.xmin,h=n.ymin,x=n.xmax,p=n.ymax,m=I(f),g=(0,l.pC)(m)&&(e.hasWrapAround||"gcs-shift"===(null===o||void 0===o?void 0:o.type)),d=e.spacing||[32,32],M=d[0]*a.x,w=d[1]*a.y,R=1===d[0],b=Math.ceil((x-c)/M-.1/d[0])+(R?0:1),P=Math.ceil((p-h)/w-.1/d[1])+(R?0:1),C=Z({cols:b,rows:P,xmin:c,ymax:p,xres:M,yres:w,inSR:s,outSR:f,datumTransformation:t,preferPE:d[0]<=4,usePixelCenter:R}),k=[],_=0,N=R?-1:NaN,E=i.xmin,T=i.xmax,z=i.ymax,O=i.width,L=i.height,j=G(f,S),A=(0,l.pC)(m)&&E>0&&T>m/2,D=!1;if(u){var B=W(s);D=(0,l.pC)(B)&&B.poleLocation>0}for(var F=0;F<b;F++){for(var V=[],Y=0;Y<P;Y++){var q=C[F*P+Y];if(g&&q[0]>T&&q[0]>m/2-j?q[0]-=m:g&&0===F&&q[0]<0&&A&&!o&&(q[0]+=m),!q||isNaN(q[0])||isNaN(q[1]))k.push(N),k.push(N),V.push(null),_++;else{if(o){var J=o.inverseTransform(new v.Z({x:q[0],y:q[1],spatialReference:f}));q=[J.x,J.y]}V.push(q),F>0&&g&&r[Y]&&q[0]<r[Y][0]&&(q[0]+=m,D&&q[0]>T&&q[0]>m&&(q[0]-=m)),k.push((q[0]-E)/O),k.push((z-q[1])/L)}}r=V}return{offsets:k,error:null,coefficients:null,outofBoundPointCount:_,spacing:d,size:R?[b,P]:[b-1,P-1]}}function U(e,r,n){for(var i=r.cols,a=r.rows,t=new Float32Array((i-1)*(a-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),s=new Float32Array([-1,1,0,0,-1,1,1,0,0]),f=0;f<i-1;f++){for(var u=0;u<a-1;u++){for(var l=f*a*2+2*u,c=e[l],h=e[l+1],x=e[l+2],p=e[l+3],v=e[l+=2*a],m=e[l+1],g=e[l+2],d=e[l+3],y=0,M=12*(u*(i-1)+f),w=0;w<3;w++)t[M++]=o[y++]*c+o[y++]*x+o[y++]*g;y=0;for(var R=0;R<3;R++)t[M++]=o[y++]*h+o[y++]*p+o[y++]*d;y=0;for(var b=0;b<3;b++)t[M++]=s[y++]*c+s[y++]*v+s[y++]*g;y=0;for(var S=0;S<3;S++)t[M++]=s[y++]*h+s[y++]*m+s[y++]*d}if(n)for(var P=0;P<t.length;P++)isNaN(t[P])&&(t[P]=-1)}return t}function H(e){var r=e.clone().normalize();return 1===r.length?r[0]:L(r)}function X(e,r,n){var i=r.storageInfo,a=r.pixelSize,t=0,o=!1,s=i.pyramidResolutions;if((0,l.pC)(s)&&s.length){var f=(e.x+e.y)/2,u=s[s.length-1],h=(u.x+u.y)/2,x=(a.x+a.y)/2;if(f<=x)t=0;else if(f>=h)t=s.length,o=f/h>8;else for(var p,m=x,g=1;g<=s.length;g++){if(f<=(p=(s[g-1].x+s[g-1].y)/2)){f===p?t=g:"down"===n?(t=g-1,o=f/m>8):t="up"===n||f-m>p-f||f/m>2?g:g-1;break}m=p}var d=0===t?a:s[t-1];return o&&Math.min(d.x,d.y)*(0,c.c9)(r.spatialReference)>19567&&(o=!1),{pyramidLevel:t,pyramidResolution:new v.Z({x:d.x,y:d.y,spatialReference:r.spatialReference}),excessiveReading:o}}var y=Math.log(e.x/a.x)/Math.LN2,M=Math.log(e.y/a.y)/Math.LN2,w=r.storageInfo.maximumPyramidLevel||0;(t="down"===n?Math.floor(Math.min(y,M)):"up"===n?Math.ceil(Math.max(y,M)):Math.round((y+M)/2))<0?t=0:t>w&&(o=t>w+3,t=w);var R=Math.pow(2,t);return{pyramidLevel:t,pyramidResolution:new v.Z({x:R*r.nativePixelSize.x,y:R*r.nativePixelSize.y,spatialReference:r.spatialReference}),excessiveReading:o}}function K(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=e.extent,t=e.spatialReference,o=e.pixelSize,s=_(new v.Z({x:o.x,y:o.y,spatialReference:t}),r,a);if(null==s)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};var f=(s.x+s.y)/2,u=(0,c.c9)(r),h=f*u*96*39.37,x=r.isGeographic?256/n*295828763.7958547:256/n*591657527.591555,p="vector-magdir"===e.dataType||"vector-uv"===e.dataType,m=j(a,r),g=Math.min(Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2),Math.ceil(Math.log(x/2/h)/Math.LN2));if(!p&&i&&(r.isGeographic||r.isWebMercator)&&(!(p=m.xmin*m.xmax<0)&&g<3)){var d=I(r);if((0,l.pC)(d)){var y=Math.pow(2,g)*f*n,M=Math.ceil(d/y);p=1===M||2===M&&d/2-m.xmax<y}}var w,R=h,b=1.001;if(p){R=x;var S=r.isGeographic?1341104507446289e-21:.29858214164761665,P=S*(96*u*39.37),C=r.isGeographic?4326:3857;(w=_(new v.Z({x:S,y:S,spatialReference:{wkid:C}}),t,m)).x*=R/P,w.y*=R/P}else{w={x:o.x,y:o.y};for(var k=0;R<x*(b/2)&&k<g;)k++,R*=2,w.x*=2,w.y*=2;Math.max(R,x)/Math.min(R,x)<=b&&(R=x)}for(var G=[R],N=[{x:w.x,y:w.y}],E=70.5310735,Z=Math.min(E,h)/b;R>=Z;)R/=2,w.x/=2,w.y/=2,G.push(R),N.push({x:w.x,y:w.y});return{projectedPixelSize:s,scales:G,srcResolutions:N,isCustomTilingScheme:!p}}}}]);
//# sourceMappingURL=394.585963e3.chunk.js.map