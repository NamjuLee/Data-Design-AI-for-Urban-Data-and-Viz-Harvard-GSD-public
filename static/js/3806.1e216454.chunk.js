"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[3806],{83806:function(n,r,e){e.r(r),e.d(r,{registerFunctions:function(){return k}});var t=e(37762),a=e(74165),i=e(15861),u=e(19545),c=e(47238),s=e(44715),f=e(95435),o=e(53866),l=e(32238),d=e(84178),p=e(77577),h=e(585),w=e(80885),m=e(29909),y=e(77981),v=e(22564),Z=e(68860);function b(n){return 0===u.i8.indexOf("4.")?w.Z.fromExtent(n):new w.Z({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function A(n,r,e){if((0,s.y)(n,2,2,r,e),n[0]instanceof l.Z&&n[1]instanceof l.Z);else if(n[0]instanceof l.Z&&null===n[1]);else if(n[1]instanceof l.Z&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new v.aV(r,v.rH.InvalidParameter,e)}function x(n,r){return g.apply(this,arguments)}function g(){return(g=(0,i.Z)((0,a.Z)().mark((function n(r,e){var i,u,c,o,l,p,h,w,y,v,b;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("polygon"===r.type||"polyline"===r.type||"extent"===r.type){n.next=2;break}return n.abrupt("return",0);case 2:if(i=1,(r.spatialReference.vcsWkid||r.spatialReference.latestVcsWkid)&&(i=(0,f._R)(r.spatialReference)/(0,Z.c9)(r.spatialReference)),u=0,"polyline"===r.type){c=(0,t.Z)(r.paths);try{for(c.s();!(o=c.n()).done;)for(l=o.value,p=1;p<l.length;p++)u+=(0,f.AW)(l[p],l[p-1],i)}catch(a){c.e(a)}finally{c.f()}}else if("polygon"===r.type){h=(0,t.Z)(r.rings);try{for(h.s();!(w=h.n()).done;){for(y=w.value,v=1;v<y.length;v++)u+=(0,f.AW)(y[v],y[v-1],i);(y[0][0]!==y[y.length-1][0]||y[0][1]!==y[y.length-1][1]||void 0!==y[0][2]&&y[0][2]!==y[y.length-1][2])&&(u+=(0,f.AW)(y[0],y[y.length-1],i))}}catch(a){h.e(a)}finally{h.f()}}else"extent"===r.type&&(u+=2*(0,f.AW)([r.xmin,r.ymin,0],[r.xmax,r.ymin,0],i),u+=2*(0,f.AW)([r.xmin,r.ymin,0],[r.xmin,r.ymax,0],i),u*=2,u+=4*Math.abs((0,s.A)(r.zmax,0)*i-(0,s.A)(r.zmin,0)*i));return b=new m.Z({hasZ:!1,hasM:!1,spatialReference:r.spatialReference,paths:[[0,0],[0,u]]}),n.abrupt("return",(0,d.sz)(b,e));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){"async"===n.mode&&(n.functions.disjoint=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){return A(a=(0,s.G)(a),r,e),null===a[0]||null===a[1]||(0,d.ED)(a[0],a[1])}))},n.functions.intersects=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){return A(a=(0,s.G)(a),r,e),null!==a[0]&&null!==a[1]&&(0,d.kK)(a[0],a[1])}))},n.functions.touches=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){return A(a=(0,s.G)(a),r,e),null!==a[0]&&null!==a[1]&&(0,d.W4)(a[0],a[1])}))},n.functions.crosses=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){return A(a=(0,s.G)(a),r,e),null!==a[0]&&null!==a[1]&&(0,d.jU)(a[0],a[1])}))},n.functions.within=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){return A(a=(0,s.G)(a),r,e),null!==a[0]&&null!==a[1]&&(0,d.uh)(a[0],a[1])}))},n.functions.contains=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){return A(a=(0,s.G)(a),r,e),null!==a[0]&&null!==a[1]&&(0,d.r3)(a[0],a[1])}))},n.functions.overlaps=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){return A(a=(0,s.G)(a),r,e),null!==a[0]&&null!==a[1]&&(0,d.Nm)(a[0],a[1])}))},n.functions.equals=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){return(0,s.y)(a,2,2,r,e),a[0]===a[1]||(a[0]instanceof l.Z&&a[1]instanceof l.Z?(0,d.fS)(a[0],a[1]):!(!(0,s.k)(a[0])||!(0,s.k)(a[1]))&&a[0].getTime()===a[1].getTime())}))},n.functions.relate=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if(a=(0,s.G)(a),(0,s.y)(a,3,3,r,e),a[0]instanceof l.Z&&a[1]instanceof l.Z)return(0,d.LV)(a[0],a[1],(0,s.j)(a[2]));if(a[0]instanceof l.Z&&null===a[1])return!1;if(a[1]instanceof l.Z&&null===a[0])return!1;if(null===a[0]&&null===a[1])return!1;throw new v.aV(r,v.rH.InvalidParameter,e)}))},n.functions.intersection=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){return A(a=(0,s.G)(a),r,e),null===a[0]||null===a[1]?null:(0,d.wf)(a[0],a[1])}))},n.functions.union=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){var i=[];if(0===(a=(0,s.G)(a)).length)throw new v.aV(r,v.rH.WrongNumberOfParameters,e);if(1===a.length)if((0,s.m)(a[0])){for(var u=(0,s.G)(a[0]),f=0;f<u.length;f++)if(null!==u[f]){if(!(u[f]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);i.push(u[f])}}else{if(!(0,s.x)(a[0])){if(a[0]instanceof l.Z)return(0,s.q)((0,c.r1)(a[0]),r.spatialReference);if(null===a[0])return null;throw new v.aV(r,v.rH.InvalidParameter,e)}for(var o=(0,s.G)(a[0].toArray()),p=0;p<o.length;p++)if(null!==o[p]){if(!(o[p]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);i.push(o[p])}}else for(var h=0;h<a.length;h++)if(null!==a[h]){if(!(a[h]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);i.push(a[h])}return 0===i.length?null:(0,d.G0)(i)}))},n.functions.difference=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){return A(a=(0,s.G)(a),r,e),null!==a[0]&&null===a[1]?(0,c.r1)(a[0]):null===a[0]?null:(0,d.e5)(a[0],a[1])}))},n.functions.symmetricdifference=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){return A(a=(0,s.G)(a),r,e),null===a[0]&&null===a[1]?null:null===a[0]?(0,c.r1)(a[1]):null===a[1]?(0,c.r1)(a[0]):(0,d.Sp)(a[0],a[1])}))},n.functions.clip=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if(a=(0,s.G)(a),(0,s.y)(a,2,2,r,e),!(a[1]instanceof o.Z)&&null!==a[1])throw new v.aV(r,v.rH.InvalidParameter,e);if(null===a[0])return null;if(!(a[0]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);return null===a[1]?null:(0,d.oq)(a[0],a[1])}))},n.functions.cut=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if(a=(0,s.G)(a),(0,s.y)(a,2,2,r,e),!(a[1]instanceof m.Z)&&null!==a[1])throw new v.aV(r,v.rH.InvalidParameter,e);if(null===a[0])return[];if(!(a[0]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);return null===a[1]?[(0,c.r1)(a[0])]:(0,d.z7)(a[0],a[1])}))},n.functions.area=function(r,e){return n.standardFunctionAsync(r,e,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t,i,u){var f,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,s.y)(u,1,2,r,e),null!==(u=(0,s.G)(u))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,s.T)(u[0])){n.next=9;break}return n.next=5,u[0].sumArea((0,c.EI)((0,s.A)(u[1],-1)),!1,r.abortSignal);case 5:if(f=n.sent,!r.abortSignal.aborted){n.next=8;break}throw new v.aV(r,v.rH.Cancelled,e);case 8:return n.abrupt("return",f);case 9:if(!(0,s.m)(u[0])&&!(0,s.x)(u[0])){n.next=12;break}return o=(0,s.J)(u[0],r.spatialReference),n.abrupt("return",null===o?0:(0,d.CJ)(o,(0,c.EI)((0,s.A)(u[1],-1))));case 12:if(u[0]instanceof l.Z){n.next=14;break}throw new v.aV(r,v.rH.InvalidParameter,e);case 14:return n.abrupt("return",(0,d.CJ)(u[0],(0,c.EI)((0,s.A)(u[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(r,e,t){return n.apply(this,arguments)}}())},n.functions.areageodetic=function(r,e){return n.standardFunctionAsync(r,e,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t,i,u){var f,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,s.y)(u,1,2,r,e),null!==(u=(0,s.G)(u))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,s.T)(u[0])){n.next=9;break}return n.next=5,u[0].sumArea((0,c.EI)((0,s.A)(u[1],-1)),!0,r.abortSignal);case 5:if(f=n.sent,!r.abortSignal.aborted){n.next=8;break}throw new v.aV(r,v.rH.Cancelled,e);case 8:return n.abrupt("return",f);case 9:if(!(0,s.m)(u[0])&&!(0,s.x)(u[0])){n.next=12;break}return o=(0,s.J)(u[0],r.spatialReference),n.abrupt("return",null===o?0:(0,d.Y4)(o,(0,c.EI)((0,s.A)(u[1],-1))));case 12:if(u[0]instanceof l.Z){n.next=14;break}throw new v.aV(r,v.rH.InvalidParameter,e);case 14:return n.abrupt("return",(0,d.Y4)(u[0],(0,c.EI)((0,s.A)(u[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(r,e,t){return n.apply(this,arguments)}}())},n.functions.length=function(r,e){return n.standardFunctionAsync(r,e,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t,i,u){var f,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,s.y)(u,1,2,r,e),null!==(u=(0,s.G)(u))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,s.T)(u[0])){n.next=9;break}return n.next=5,u[0].sumLength((0,c.Lz)((0,s.A)(u[1],-1)),!1,r.abortSignal);case 5:if(f=n.sent,!r.abortSignal.aborted){n.next=8;break}throw new v.aV(r,v.rH.Cancelled,e);case 8:return n.abrupt("return",f);case 9:if(!(0,s.m)(u[0])&&!(0,s.x)(u[0])){n.next=12;break}return o=(0,s.H)(u[0],r.spatialReference),n.abrupt("return",null===o?0:(0,d.sz)(o,(0,c.Lz)((0,s.A)(u[1],-1))));case 12:if(u[0]instanceof l.Z){n.next=14;break}throw new v.aV(r,v.rH.InvalidParameter,e);case 14:return n.abrupt("return",(0,d.sz)(u[0],(0,c.Lz)((0,s.A)(u[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(r,e,t){return n.apply(this,arguments)}}())},n.functions.length3d=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if((0,s.y)(a,1,2,r,e),null===(a=(0,s.G)(a))[0])return 0;if((0,s.m)(a[0])||(0,s.x)(a[0])){var i=(0,s.H)(a[0],r.spatialReference);return null===i?0:!0===i.hasZ?x(i,(0,c.Lz)((0,s.A)(a[1],-1))):(0,d.sz)(i,(0,c.Lz)((0,s.A)(a[1],-1)))}if(!(a[0]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);return!0===a[0].hasZ?x(a[0],(0,c.Lz)((0,s.A)(a[1],-1))):(0,d.sz)(a[0],(0,c.Lz)((0,s.A)(a[1],-1)))}))},n.functions.lengthgeodetic=function(r,e){return n.standardFunctionAsync(r,e,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t,i,u){var f,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,s.y)(u,1,2,r,e),null!==(u=(0,s.G)(u))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,s.T)(u[0])){n.next=9;break}return n.next=5,u[0].sumLength((0,c.Lz)((0,s.A)(u[1],-1)),!0,r.abortSignal);case 5:if(f=n.sent,!r.abortSignal.aborted){n.next=8;break}throw new v.aV(r,v.rH.Cancelled,e);case 8:return n.abrupt("return",f);case 9:if(!(0,s.m)(u[0])&&!(0,s.x)(u[0])){n.next=12;break}return o=(0,s.H)(u[0],r.spatialReference),n.abrupt("return",null===o?0:(0,d.kQ)(o,(0,c.Lz)((0,s.A)(u[1],-1))));case 12:if(u[0]instanceof l.Z){n.next=14;break}throw new v.aV(r,v.rH.InvalidParameter,e);case 14:return n.abrupt("return",(0,d.kQ)(u[0],(0,c.Lz)((0,s.A)(u[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(r,e,t){return n.apply(this,arguments)}}())},n.functions.distance=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){a=(0,s.G)(a),(0,s.y)(a,2,3,r,e);var i=a[0];((0,s.m)(a[0])||(0,s.x)(a[0]))&&(i=(0,s.K)(a[0],r.spatialReference));var u=a[1];if(((0,s.m)(a[1])||(0,s.x)(a[1]))&&(u=(0,s.K)(a[1],r.spatialReference)),!(i instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);if(!(u instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);return(0,d.TE)(i,u,(0,c.Lz)((0,s.A)(a[2],-1)))}))},n.functions.distancegeodetic=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){a=(0,s.G)(a),(0,s.y)(a,2,3,r,e);var i=a[0],u=a[1];if(!(i instanceof h.Z))throw new v.aV(r,v.rH.InvalidParameter,e);if(!(u instanceof h.Z))throw new v.aV(r,v.rH.InvalidParameter,e);var f=new m.Z({paths:[],spatialReference:i.spatialReference});return f.addPath([i,u]),(0,d.kQ)(f,(0,c.Lz)((0,s.A)(a[2],-1)))}))},n.functions.densify=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if(a=(0,s.G)(a),(0,s.y)(a,2,3,r,e),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);var i=(0,s.g)(a[1]);if(isNaN(i))throw new v.aV(r,v.rH.InvalidParameter,e);if(i<=0)throw new v.aV(r,v.rH.InvalidParameter,e);return a[0]instanceof w.Z||a[0]instanceof m.Z?(0,d.Cz)(a[0],i,(0,c.Lz)((0,s.A)(a[2],-1))):a[0]instanceof o.Z?(0,d.Cz)(b(a[0]),i,(0,c.Lz)((0,s.A)(a[2],-1))):a[0]}))},n.functions.densifygeodetic=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if(a=(0,s.G)(a),(0,s.y)(a,2,3,r,e),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);var i=(0,s.g)(a[1]);if(isNaN(i))throw new v.aV(r,v.rH.InvalidParameter,e);if(i<=0)throw new v.aV(r,v.rH.InvalidParameter,e);return a[0]instanceof w.Z||a[0]instanceof m.Z?(0,d.j2)(a[0],i,(0,c.Lz)((0,s.A)(a[2],-1))):a[0]instanceof o.Z?(0,d.j2)(b(a[0]),i,(0,c.Lz)((0,s.A)(a[2],-1))):a[0]}))},n.functions.generalize=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if(a=(0,s.G)(a),(0,s.y)(a,2,4,r,e),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);var i=(0,s.g)(a[1]);if(isNaN(i))throw new v.aV(r,v.rH.InvalidParameter,e);return(0,d.D$)(a[0],i,(0,s.h)((0,s.A)(a[2],!0)),(0,c.Lz)((0,s.A)(a[3],-1)))}))},n.functions.buffer=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if(a=(0,s.G)(a),(0,s.y)(a,2,3,r,e),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);var i=(0,s.g)(a[1]);if(isNaN(i))throw new v.aV(r,v.rH.InvalidParameter,e);return 0===i?(0,c.r1)(a[0]):(0,d.f3)(a[0],i,(0,c.Lz)((0,s.A)(a[2],-1)))}))},n.functions.buffergeodetic=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if(a=(0,s.G)(a),(0,s.y)(a,2,3,r,e),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);var i=(0,s.g)(a[1]);if(isNaN(i))throw new v.aV(r,v.rH.InvalidParameter,e);return 0===i?(0,c.r1)(a[0]):(0,d.rd)(a[0],i,(0,c.Lz)((0,s.A)(a[2],-1)))}))},n.functions.offset=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if(a=(0,s.G)(a),(0,s.y)(a,2,6,r,e),null===a[0])return null;if(!(a[0]instanceof w.Z||a[0]instanceof m.Z))throw new v.aV(r,v.rH.InvalidParameter,e);var i=(0,s.g)(a[1]);if(isNaN(i))throw new v.aV(r,v.rH.InvalidParameter,e);var u=(0,s.g)((0,s.A)(a[4],10));if(isNaN(u))throw new v.aV(r,v.rH.InvalidParameter,e);var f=(0,s.g)((0,s.A)(a[5],0));if(isNaN(f))throw new v.aV(r,v.rH.InvalidParameter,e);return(0,d.cv)(a[0],i,(0,c.Lz)((0,s.A)(a[2],-1)),(0,s.j)((0,s.A)(a[3],"round")).toLowerCase(),u,f)}))},n.functions.rotate=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){a=(0,s.G)(a),(0,s.y)(a,2,3,r,e);var i=a[0];if(null===i)return null;if(!(i instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);i instanceof o.Z&&(i=w.Z.fromExtent(i));var u=(0,s.g)(a[1]);if(isNaN(u))throw new v.aV(r,v.rH.InvalidParameter,e);var c=(0,s.A)(a[2],null);if(null===c)return(0,d.U1)(i,u);if(c instanceof h.Z)return(0,d.U1)(i,u,c);throw new v.aV(r,v.rH.InvalidParameter,e)}))},n.functions.centroid=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if(a=(0,s.G)(a),(0,s.y)(a,1,1,r,e),null===a[0])return null;var i=a[0];if(((0,s.m)(a[0])||(0,s.x)(a[0]))&&(i=(0,s.K)(a[0],r.spatialReference)),null===i)return null;if(!(i instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);return i instanceof h.Z?(0,s.q)((0,c.r1)(a[0]),r.spatialReference):i instanceof w.Z?i.centroid:i instanceof m.Z?(0,f.s9)(i):i instanceof p.Z?(0,f.Ay)(i):i instanceof o.Z?i.center:null}))},n.functions.multiparttosinglepart=function(r,e){return n.standardFunctionAsync(r,e,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t,i,u){var f,Z,b,A,x,g,k,H,I,V,P,G,z;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u=(0,s.G)(u),(0,s.y)(u,1,1,r,e),f=[],null!==u[0]){n.next=4;break}return n.abrupt("return",null);case 4:if(u[0]instanceof l.Z){n.next=6;break}throw new v.aV(r,v.rH.InvalidParameter,e);case 6:if(!(u[0]instanceof h.Z)){n.next=8;break}return n.abrupt("return",[(0,s.q)((0,c.r1)(u[0]),r.spatialReference)]);case 8:if(!(u[0]instanceof o.Z)){n.next=10;break}return n.abrupt("return",[(0,s.q)((0,c.r1)(u[0]),r.spatialReference)]);case 10:return n.next=12,(0,d.og)(u[0]);case 12:if(!((Z=n.sent)instanceof w.Z)){n.next=30;break}for(b=[],A=[],x=0;x<Z.rings.length;x++)Z.isClockwise(Z.rings[x])?(g=(0,y.im)({rings:[Z.rings[x]],hasZ:!0===Z.hasZ,hazM:!0===Z.hasM,spatialReference:Z.spatialReference.toJSON()}),b.push(g)):A.push({ring:Z.rings[x],pt:Z.getPoint(x,0)});k=0;case 17:if(!(k<A.length)){n.next=29;break}H=0;case 19:if(!(H<b.length)){n.next=26;break}if(!b[H].contains(A[k].pt)){n.next=23;break}return b[H].addRing(A[k].ring),n.abrupt("break",26);case 23:H++,n.next=19;break;case 26:k++,n.next=17;break;case 29:return n.abrupt("return",b);case 30:if(!(Z instanceof m.Z)){n.next=34;break}for(I=[],V=0;V<Z.paths.length;V++)P=(0,y.im)({paths:[Z.paths[V]],hasZ:!0===Z.hasZ,hazM:!0===Z.hasM,spatialReference:Z.spatialReference.toJSON()}),I.push(P);return n.abrupt("return",I);case 34:if(!(u[0]instanceof p.Z)){n.next=38;break}for(G=(0,s.q)((0,c.r1)(u[0]),r.spatialReference),z=0;z<G.points.length;z++)f.push(G.getPoint(z));return n.abrupt("return",f);case 38:return n.abrupt("return",null);case 39:case"end":return n.stop()}}),n)})));return function(r,e,t){return n.apply(this,arguments)}}())},n.functions.issimple=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if(a=(0,s.G)(a),(0,s.y)(a,1,1,r,e),null===a[0])return!0;if(!(a[0]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);return(0,d.Gg)(a[0])}))},n.functions.simplify=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if(a=(0,s.G)(a),(0,s.y)(a,1,1,r,e),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);return(0,d.og)(a[0])}))},n.functions.convexhull=function(r,e){return n.standardFunctionAsync(r,e,(function(n,t,a){if(a=(0,s.G)(a),(0,s.y)(a,1,1,r,e),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new v.aV(r,v.rH.InvalidParameter,e);return(0,d.JI)(a[0])}))})}}}]);
//# sourceMappingURL=3806.1e216454.chunk.js.map