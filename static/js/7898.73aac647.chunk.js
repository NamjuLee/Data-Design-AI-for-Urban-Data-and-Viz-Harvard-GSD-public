"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[7898],{11873:function(r,t,n){function e(){return[1,0,0,0,1,0,0,0,1]}function o(r,t){return new Float64Array(r,t,9)}n.d(t,{a:function(){return o},c:function(){return e}});Object.freeze(Object.defineProperty({__proto__:null,create:e,clone:function(r){return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]]},fromValues:function(r,t,n,e,o,a,i,u,f){return[r,t,n,e,o,a,i,u,f]},createView:o},Symbol.toStringTag,{value:"Module"}))},81949:function(r,t,n){function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(r){return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15]]}function a(r,t){return new Float64Array(r,t,16)}n.d(t,{I:function(){return i},a:function(){return a},b:function(){return o},c:function(){return e}});var i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:e,clone:o,fromValues:function(r,t,n,e,o,a,i,u,f,c,l,s,p,y,d,v){return[r,t,n,e,o,a,i,u,f,c,l,s,p,y,d,v]},createView:a,IDENTITY:i},Symbol.toStringTag,{value:"Module"}))},48976:function(r,t,n){n.d(t,{c:function(){return y},g:function(){return l},j:function(){return E},k:function(){return v},m:function(){return s},s:function(){return c}});var e=n(11873),o=n(98131),a=n(71353),i=n(26277),u=n(11186),f=n(90045);function c(r,t,n){n*=.5;var e=Math.sin(n);return r[0]=e*t[0],r[1]=e*t[1],r[2]=e*t[2],r[3]=Math.cos(n),r}function l(r,t){var n=2*Math.acos(t[3]),e=Math.sin(n/2);return e>(0,i.g)()?(r[0]=t[0]/e,r[1]=t[1]/e,r[2]=t[2]/e):(r[0]=1,r[1]=0,r[2]=0),n}function s(r,t,n){var e=t[0],o=t[1],a=t[2],i=t[3],u=n[0],f=n[1],c=n[2],l=n[3];return r[0]=e*l+i*u+o*c-a*f,r[1]=o*l+i*f+a*u-e*c,r[2]=a*l+i*c+e*f-o*u,r[3]=i*l-e*u-o*f-a*c,r}function p(r,t,n,e){var o,a,u,f,c,l=t[0],s=t[1],p=t[2],y=t[3],d=n[0],v=n[1],h=n[2],g=n[3];return(a=l*d+s*v+p*h+y*g)<0&&(a=-a,d=-d,v=-v,h=-h,g=-g),1-a>(0,i.g)()?(o=Math.acos(a),u=Math.sin(o),f=Math.sin((1-e)*o)/u,c=Math.sin(e*o)/u):(f=1-e,c=e),r[0]=f*l+c*d,r[1]=f*s+c*v,r[2]=f*p+c*h,r[3]=f*y+c*g,r}function y(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=t[3],r}function d(r,t){var n,e=t[0]+t[4]+t[8];if(e>0)n=Math.sqrt(e+1),r[3]=.5*n,n=.5/n,r[0]=(t[5]-t[7])*n,r[1]=(t[6]-t[2])*n,r[2]=(t[1]-t[3])*n;else{var o=0;t[4]>t[0]&&(o=1),t[8]>t[3*o+o]&&(o=2);var a=(o+1)%3,i=(o+2)%3;n=Math.sqrt(t[3*o+o]-t[3*a+a]-t[3*i+i]+1),r[o]=.5*n,n=.5/n,r[3]=(t[3*a+i]-t[3*i+a])*n,r[a]=(t[3*a+o]+t[3*o+a])*n,r[i]=(t[3*i+o]+t[3*o+i])*n}return r}function v(r,t,n,e){var o=.5*Math.PI/180;t*=o,n*=o,e*=o;var a=Math.sin(t),i=Math.cos(t),u=Math.sin(n),f=Math.cos(n),c=Math.sin(e),l=Math.cos(e);return r[0]=a*f*l-i*u*c,r[1]=i*u*l+a*f*c,r[2]=i*f*c-a*u*l,r[3]=i*f*l+a*u*c,r}var h=f.c,g=f.s,m=f.a,M=s,_=f.b,P=f.d,T=f.l,A=f.e,b=A,F=f.f,S=F,B=f.n,E=f.g,w=f.h;var C=(0,a.c)(),R=(0,a.f)(1,0,0),x=(0,a.f)(0,1,0);var O=(0,o.a)(),I=(0,o.a)();var z=(0,e.c)();Object.freeze(Object.defineProperty({__proto__:null,identity:function(r){return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r},setAxisAngle:c,getAxisAngle:l,multiply:s,rotateX:function(r,t,n){n*=.5;var e=t[0],o=t[1],a=t[2],i=t[3],u=Math.sin(n),f=Math.cos(n);return r[0]=e*f+i*u,r[1]=o*f+a*u,r[2]=a*f-o*u,r[3]=i*f-e*u,r},rotateY:function(r,t,n){n*=.5;var e=t[0],o=t[1],a=t[2],i=t[3],u=Math.sin(n),f=Math.cos(n);return r[0]=e*f-a*u,r[1]=o*f+i*u,r[2]=a*f+e*u,r[3]=i*f-o*u,r},rotateZ:function(r,t,n){n*=.5;var e=t[0],o=t[1],a=t[2],i=t[3],u=Math.sin(n),f=Math.cos(n);return r[0]=e*f+o*u,r[1]=o*f-e*u,r[2]=a*f+i*u,r[3]=i*f-a*u,r},calculateW:function(r,t){var n=t[0],e=t[1],o=t[2];return r[0]=n,r[1]=e,r[2]=o,r[3]=Math.sqrt(Math.abs(1-n*n-e*e-o*o)),r},slerp:p,random:function(r){var t=i.R,n=t(),e=t(),o=t(),a=Math.sqrt(1-n),u=Math.sqrt(n);return r[0]=a*Math.sin(2*Math.PI*e),r[1]=a*Math.cos(2*Math.PI*e),r[2]=u*Math.sin(2*Math.PI*o),r[3]=u*Math.cos(2*Math.PI*o),r},invert:function(r,t){var n=t[0],e=t[1],o=t[2],a=t[3],i=n*n+e*e+o*o+a*a,u=i?1/i:0;return r[0]=-n*u,r[1]=-e*u,r[2]=-o*u,r[3]=a*u,r},conjugate:y,fromMat3:d,fromEuler:v,str:function(r){return"quat("+r[0]+", "+r[1]+", "+r[2]+", "+r[3]+")"},copy:h,set:g,add:m,mul:M,scale:_,dot:P,lerp:T,length:A,len:b,squaredLength:F,sqrLen:S,normalize:B,exactEquals:E,equals:w,rotationTo:function(r,t,n){var e=(0,u.e)(t,n);return e<-.999999?((0,u.f)(C,R,t),(0,u.u)(C)<1e-6&&(0,u.f)(C,x,t),(0,u.n)(C,C),c(r,C,Math.PI),r):e>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):((0,u.f)(C,t,n),r[0]=C[0],r[1]=C[1],r[2]=C[2],r[3]=1+e,B(r,r))},sqlerp:function(r,t,n,e,o,a){return p(O,t,o,a),p(I,n,e,a),p(r,O,I,2*a*(1-a)),r},setAxes:function(r,t,n,e){var o=z;return o[0]=n[0],o[3]=n[1],o[6]=n[2],o[1]=e[0],o[4]=e[1],o[7]=e[2],o[2]=-t[0],o[5]=-t[1],o[8]=-t[2],B(r,d(r,o))}},Symbol.toStringTag,{value:"Module"}))},98131:function(r,t,n){function e(){return[0,0,0,1]}function o(r){return[r[0],r[1],r[2],r[3]]}function a(r,t){return new Float64Array(r,t,4)}n.d(t,{I:function(){return i},a:function(){return e},b:function(){return o},c:function(){return a}});var i=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:e,clone:o,fromValues:function(r,t,n,e){return[r,t,n,e]},createView:a,IDENTITY:i},Symbol.toStringTag,{value:"Module"}))},32035:function(r,t,n){n.d(t,{a:function(){return a},b:function(){return f},n:function(){return u},s:function(){return i},t:function(){return o}});var e=n(77873);function o(r,t,n){if(r.count===t.count)for(var o=r.count,a=n[0],i=n[1],u=n[2],f=n[4],c=n[5],l=n[6],s=n[8],p=n[9],y=n[10],d=n[12],v=n[13],h=n[14],g=r.typedBuffer,m=r.typedBufferStride,M=t.typedBuffer,_=t.typedBufferStride,P=0;P<o;P++){var T=P*m,A=P*_,b=M[A],F=M[A+1],S=M[A+2];g[T]=a*b+f*F+s*S+d,g[T+1]=i*b+c*F+p*S+v,g[T+2]=u*b+l*F+y*S+h}else e.c.error("source and destination buffers need to have the same number of elements")}function a(r,t,n){if(r.count===t.count)for(var o=r.count,a=n[0],i=n[1],u=n[2],f=n[3],c=n[4],l=n[5],s=n[6],p=n[7],y=n[8],d=r.typedBuffer,v=r.typedBufferStride,h=t.typedBuffer,g=t.typedBufferStride,m=0;m<o;m++){var M=m*v,_=m*g,P=h[_],T=h[_+1],A=h[_+2];d[M]=a*P+f*T+s*A,d[M+1]=i*P+c*T+p*A,d[M+2]=u*P+l*T+y*A}else e.c.error("source and destination buffers need to have the same number of elements")}function i(r,t,n){for(var e=Math.min(r.count,t.count),o=r.typedBuffer,a=r.typedBufferStride,i=t.typedBuffer,u=t.typedBufferStride,f=0;f<e;f++){var c=f*a,l=f*u;o[c]=n*i[l],o[c+1]=n*i[l+1],o[c+2]=n*i[l+2]}}function u(r,t){for(var n=Math.min(r.count,t.count),e=r.typedBuffer,o=r.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,u=0;u<n;u++){var f=u*o,c=u*i,l=a[c],s=a[c+1],p=a[c+2],y=l*l+s*s+p*p;if(y>0){var d=1/Math.sqrt(y);e[f]=d*l,e[f+1]=d*s,e[f+2]=d*p}}}function f(r,t,n){for(var e=Math.min(r.count,t.count),o=r.typedBuffer,a=r.typedBufferStride,i=t.typedBuffer,u=t.typedBufferStride,f=0;f<e;f++){var c=f*a,l=f*u;o[c]=i[l]>>n,o[c+1]=i[l+1]>>n,o[c+2]=i[l+2]>>n}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:o,transformMat3:a,scale:i,normalize:u,shiftRight:f},Symbol.toStringTag,{value:"Module"}))},92770:function(r,t,n){function e(r,t,n){for(var e=r.typedBuffer,o=r.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,u=n?n.count:t.count,f=(n&&n.dstIndex?n.dstIndex:0)*o,c=(n&&n.srcIndex?n.srcIndex:0)*i,l=0;l<u;++l)e[f]=a[c],e[f+1]=a[c+1],e[f+2]=a[c+2],f+=o,c+=i}function o(r,t,n,e,o){for(var a,i,u=r.typedBuffer,f=r.typedBufferStride,c=null!==(a=null===o||void 0===o?void 0:o.count)&&void 0!==a?a:r.count,l=(null!==(i=null===o||void 0===o?void 0:o.dstIndex)&&void 0!==i?i:0)*f,s=0;s<c;++s)u[l]=t,u[l+1]=n,u[l+2]=e,l+=f}n.d(t,{c:function(){return e},f:function(){return o}});Object.freeze(Object.defineProperty({__proto__:null,copy:e,fill:o},Symbol.toStringTag,{value:"Module"}))},76046:function(r,t,n){n.d(t,{Z:function(){return w}});var e,o=n(29439),a=n(15671),i=n(43144),u=n(60136),f=n(29388),c=n(27366),l=n(46784),s=n(92026),p=n(49861),y=(n(63780),n(25243),n(69912)),d=n(14226),v=n(81949),h=n(48976),g=n(98131),m=n(11186),M=n(71353),_=n(585),P=n(52587),T=n(92183),A=n(45238),b=n(25158),F=n(32035),S=n(92770),B=e=function(r){(0,u.Z)(n,r);var t=(0,f.Z)(n);function n(r){var e;return(0,a.Z)(this,n),(e=t.call(this,r)).origin=(0,M.c)(),e.translation=(0,M.c)(),e.rotation=(0,A.Ue)(),e.scale=(0,M.f)(1,1,1),e.geographic=!0,e}return(0,i.Z)(n,[{key:"localMatrix",get:function(){var r=(0,v.c)();return(0,h.s)(E,(0,A.ZZ)(this.rotation),(0,A.WH)(this.rotation)),(0,d.g)(r,E,this.translation,this.scale),r}},{key:"localMatrixInverse",get:function(){return(0,d.a)((0,v.c)(),this.localMatrix)}},{key:"applyLocal",value:function(r,t){return(0,m.m)(t,r,this.localMatrix)}},{key:"applyLocalInverse",value:function(r,t){return(0,m.m)(t,r,this.localMatrixInverse)}},{key:"project",value:function(r,t){var n=new Float64Array(r.length),e=b.fP.fromTypedArray(n),o=b.fP.fromTypedArray(r);if(this.geographic){var a=(0,T.rS)(t),i=(0,v.c)();return(0,P.Bm)(t,this.origin,i,a),(0,d.m)(i,i,this.localMatrix),(0,F.t)(e,o,i),(0,P.CM)(n,a,0,n,t,0,n.length/3),n}var u=this.localMatrix,f=this.origin;(0,d.h)(u,v.I)?(0,S.c)(e,o):(0,F.t)(e,o,u);for(var c=0;c<n.length;c+=3)n[c+0]+=f[0],n[c+1]+=f[1],n[c+2]+=f[2];return n}},{key:"getOriginPoint",value:function(r){var t=(0,o.Z)(this.origin,3),n=t[0],e=t[1],a=t[2];return new _.Z({x:n,y:e,z:a,spatialReference:r})}},{key:"equals",value:function(r){return(0,s.pC)(r)&&this.geographic===r.geographic&&(0,m.k)(this.origin,r.origin)&&(0,d.j)(this.localMatrix,r.localMatrix)}},{key:"clone",value:function(){var r={origin:(0,M.a)(this.origin),translation:(0,M.a)(this.translation),rotation:(0,A.Ue)(this.rotation),scale:(0,M.a)(this.scale),geographic:this.geographic};return new e(r)}}]),n}(l.wq);(0,c._)([(0,p.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],B.prototype,"origin",void 0),(0,c._)([(0,p.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],B.prototype,"translation",void 0),(0,c._)([(0,p.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],B.prototype,"rotation",void 0),(0,c._)([(0,p.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],B.prototype,"scale",void 0),(0,c._)([(0,p.Cb)({type:Boolean,nonNullable:!0,json:{write:!0}})],B.prototype,"geographic",void 0),(0,c._)([(0,p.Cb)()],B.prototype,"localMatrix",null),(0,c._)([(0,p.Cb)()],B.prototype,"localMatrixInverse",null),B=e=(0,c._)([(0,y.j)("esri.geometry.support.MeshTransform")],B);var E=(0,g.a)(),w=B},45238:function(r,t,n){n.d(t,{Ue:function(){return u},WH:function(){return s},ZZ:function(){return l},qC:function(){return c},uT:function(){return f}});var e=n(16889),o=n(48976),a=n(98131),i=n(11186);function u(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return[r[0],r[1],r[2],r[3]]}function f(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return(0,i.c)(n,r),n[3]=t,n}function c(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return(0,o.s)(d,r,s(r)),(0,o.s)(v,t,s(t)),(0,o.m)(d,v,d),p(n,(0,e.BV)((0,o.g)(n,d)))}function l(r){return r}function s(r){return(0,e.Vl)(r[3])}function p(r,t){return r[3]=t,r}var y=[0,0,1,0],d=(0,a.a)(),v=(0,a.a)();u()},77873:function(r,t,n){n.d(t,{c:function(){return e}});var e=n(32718).Z.getLogger("esri.views.3d.support.buffer.math")},26548:function(r,t,n){function e(r,t){var n;return r.isGeographic||r.isWebMercator&&(null===(n=null===t||void 0===t?void 0:t.geographic)||void 0===n||n)}n.d(t,{h:function(){return e}})},57898:function(r,t,n){n.d(t,{FF:function(){return M},I5:function(){return g},Yq:function(){return _},iv:function(){return h},w1:function(){return m}});var e=n(92026),o=n(68860),a=n(11873),i=n(14226),u=n(81949),f=n(22753),c=n(52587),l=n(92183),s=n(76046),p=n(25158),y=n(32035),d=n(26548),v=n(11700);function h(r,t,n){return(0,d.h)(t.spatialReference,n)?function(r,t,n){var e=t.spatialReference,o=F(t,n,w),a=new Float64Array(r.position.length),i=function(r,t,n,e){(0,y.t)(p.fP.fromTypedArray(e),p.fP.fromTypedArray(r),t);var o=new Float64Array(r.length);return(0,v.To)(e,o,n)}(r.position,o,e,a),u=(0,f.b)(R,o);return{position:i,normal:P(i,a,r.normal,u,e),tangent:T(i,a,r.tangent,u,e)}}(r,t,n):function(r,t,n){for(var e=new Float64Array(r.position.length),o=r.position,a=t.x,i=t.y,u=t.z||0,f=E(n?n.unit:null,t.spatialReference),c=f.horizontal,l=f.vertical,s=0;s<o.length;s+=3)e[s+0]=o[s+0]*c+a,e[s+1]=o[s+1]*c+i,e[s+2]=o[s+2]*l+u;return{position:e,normal:r.normal,tangent:r.tangent}}(r,t,n)}function g(r,t,n){var o=r.position,a=r.normal,i=r.tangent;if((0,e.Wi)(t))return{position:o,normal:a,tangent:i};var u=t.localMatrix;return h({position:(0,v.zZ)(o,new Float64Array(o.length),u),normal:(0,e.pC)(a)?(0,v.w9)(a,new Float32Array(a.length),u):null,tangent:(0,e.pC)(i)?(0,v.VS)(i,new Float32Array(i.length),u):null},t.getOriginPoint(n),{geographic:t.geographic})}function m(r,t,n){var e;return null!==n&&void 0!==n&&n.useTransform?{vertexAttributes:{position:r.position,normal:r.normal,tangent:r.tangent},transform:new s.Z({origin:[t.x,t.y,null!==(e=t.z)&&void 0!==e?e:0],geographic:(0,d.h)(t.spatialReference,n)})}:{vertexAttributes:h(r,t,n),transform:null}}function M(r,t,n){return(0,d.h)(t.spatialReference,n)?b(r,t,n):A(r,t,n)}function _(r,t,n,o){if((0,e.Wi)(t))return M(r,n,o);var a=g(r,t,n.spatialReference);return n.equals(t.getOriginPoint(n.spatialReference))?A(a,n,o):(0,d.h)(n.spatialReference,o)?b(a,n,o):A(a,n,o)}function P(r,t,n,o,a){if((0,e.Wi)(n))return null;var i=new Float32Array(n.length);return(0,y.a)(p.ct.fromTypedArray(i),p.ct.fromTypedArray(n),o),(0,v.Yk)(i,r,t,a,i),i}function T(r,t,n,o,a){if((0,e.Wi)(n))return null;var i=new Float32Array(n.length);(0,y.a)(p.ct.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT),p.ct.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),o);for(var u=3;u<i.length;u+=4)i[u]=n[u];return(0,v.M2)(i,r,t,a,i),i}function A(r,t,n){for(var e=new Float64Array(r.position.length),o=r.position,a=t.x,i=t.y,u=t.z||0,f=E(n?n.unit:null,t.spatialReference),c=f.horizontal,l=f.vertical,s=0;s<o.length;s+=3)e[s+0]=(o[s+0]-a)/c,e[s+1]=(o[s+1]-i)/c,e[s+2]=(o[s+2]-u)/l;return{position:e,normal:r.normal,tangent:r.tangent}}function b(r,t,n){var e=t.spatialReference;F(t,n,w);var o=(0,i.a)(C,w),a=new Float64Array(r.position.length),u=function(r,t,n,e){var o=(0,v.XO)(r,t,e),a=p.fP.fromTypedArray(o),i=new Float64Array(o.length),u=p.fP.fromTypedArray(i);return(0,y.t)(u,a,n),i}(r.position,e,o,a),c=(0,f.b)(R,o);return{position:u,normal:S(r.normal,r.position,a,e,c),tangent:B(r.tangent,r.position,a,e,c)}}function F(r,t,n){(0,c.Bm)(r.spatialReference,[r.x,r.y,r.z||0],n,(0,l.rS)(r.spatialReference));var e=E(t?t.unit:null,r.spatialReference),o=e.horizontal,a=e.vertical;return(0,i.k)(n,n,[o,o,a]),n}function S(r,t,n,o,a){if((0,e.Wi)(r))return null;var i=(0,v.Iz)(r,t,n,o,new Float32Array(r.length)),u=p.ct.fromTypedArray(i);return(0,y.a)(u,u,a),i}function B(r,t,n,o,a){if((0,e.Wi)(r))return null;var i=(0,v.wi)(r,t,n,o,new Float32Array(r.length)),u=p.ct.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT);return(0,y.a)(u,u,a),i}function E(r,t){if((0,e.Wi)(r))return x;var n=t.isGeographic?1:(0,o.c9)(t),a=t.isGeographic?1:(0,o._R)(t),i=(0,o.En)(1,r,"meters");return{horizontal:i*n,vertical:i*a}}var w=(0,u.c)(),C=(0,u.c)(),R=(0,a.c)(),x={horizontal:1,vertical:1}},11700:function(r,t,n){n.d(t,{Iz:function(){return M},M2:function(){return B},To:function(){return T},VS:function(){return F},XO:function(){return P},Yk:function(){return _},w9:function(){return b},wi:function(){return S},zZ:function(){return A}});var e,o,a=n(32718),i=n(92026),u=n(22753),f=n(11873),c=n(81949),l=n(11186),s=n(71353),p=n(52587),y=n(92183),d=n(92975),v=n(81753),h=n(25158),g=n(32035),m=a.Z.getLogger("esri.geometry.support.meshUtils.normalProjection");function M(r,t,n,o,a){return w(o)?(E(e.TO_PCPF,h.ct.fromTypedArray(r),h.fP.fromTypedArray(t),h.fP.fromTypedArray(n),o,h.ct.fromTypedArray(a)),a):(m.error("Cannot convert spatial reference to PCPF"),a)}function _(r,t,n,o,a){return w(o)?(E(e.FROM_PCPF,h.ct.fromTypedArray(r),h.fP.fromTypedArray(t),h.fP.fromTypedArray(n),o,h.ct.fromTypedArray(a)),a):(m.error("Cannot convert to spatial reference from PCPF"),a)}function P(r,t,n){return(0,p.CM)(r,t,0,n,(0,y.rS)(t),0,r.length/3),n}function T(r,t,n){return(0,p.CM)(r,(0,y.rS)(n),0,t,n,0,r.length/3),t}function A(r,t,n){if((0,i.Wi)(r))return t;var e=h.fP.fromTypedArray(r),o=h.fP.fromTypedArray(t);return(0,g.t)(o,e,n),t}function b(r,t,n){if((0,i.Wi)(r))return t;(0,u.b)(I,n);var e=h.ct.fromTypedArray(r),o=h.ct.fromTypedArray(t);return(0,g.a)(o,e,I),(0,u.i)(I)||(0,g.n)(o,o),t}function F(r,t,n){if((0,i.Wi)(r))return t;(0,u.b)(I,n);var e=h.ct.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),o=h.ct.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if((0,g.a)(o,e,I),(0,u.i)(I)||(0,g.n)(o,o),r!==t)for(var a=3;a<r.length;a+=4)t[a]=r[a];return t}function S(r,t,n,o,a){if(!w(o))return m.error("Cannot convert spatial reference to PCPF"),a;E(e.TO_PCPF,h.ct.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),h.fP.fromTypedArray(t),h.fP.fromTypedArray(n),o,h.ct.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT));for(var i=3;i<r.length;i+=4)a[i]=r[i];return a}function B(r,t,n,o,a){if(!w(o))return m.error("Cannot convert to spatial reference from PCPF"),a;E(e.FROM_PCPF,h.ct.fromTypedArray(r,16),h.fP.fromTypedArray(t),h.fP.fromTypedArray(n),o,h.ct.fromTypedArray(a,16));for(var i=3;i<r.length;i+=4)a[i]=r[i];return a}function E(r,t,n,o,a,i){if(t){var f=n.count,c=(0,y.rS)(a);if(C(a))for(var s=0;s<f;s++)o.getVec(s,R),t.getVec(s,x),(0,p.Bm)(c,R,O,c),(0,u.f)(I,O),r===e.FROM_PCPF&&(0,u.t)(I,I),(0,l.t)(x,x,I),i.setVec(s,x);else for(var d=0;d<f;d++){o.getVec(d,R),t.getVec(d,x),(0,p.Bm)(c,R,O,c),(0,u.f)(I,O);var h=(0,v.mZ)(n.get(d,1)),g=Math.cos(h);r===e.TO_PCPF&&(g=1/g),I[0]*=g,I[1]*=g,I[2]*=g,I[3]*=g,I[4]*=g,I[5]*=g,r===e.FROM_PCPF&&(0,u.t)(I,I),(0,l.t)(x,x,I),(0,l.n)(x,x),i.setVec(d,x)}return i}}function w(r){return C(r)||function(r){return r.isWebMercator}(r)}function C(r){return r.isWGS84||(0,d.yW)(r)||(0,d.BZ)(r)||(0,d.V2)(r)}(o=e||(e={}))[o.TO_PCPF=0]="TO_PCPF",o[o.FROM_PCPF=1]="FROM_PCPF";var R=(0,s.c)(),x=(0,s.c)(),O=(0,c.c)(),I=(0,f.c)()}}]);
//# sourceMappingURL=7898.73aac647.chunk.js.map