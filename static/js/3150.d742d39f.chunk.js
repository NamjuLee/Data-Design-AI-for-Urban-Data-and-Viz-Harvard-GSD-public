"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[3150],{23150:function(e,r,t){t.r(r),t.d(r,{getGeometryServiceURL:function(){return x},projectGeometry:function(){return N}});var n=t(74165),a=t(15861),o=t(42265),i=t(10064),s=t(70032),u=t(1413),c=t(76200),f=t(25243),l=t(77981),p=t(23084),d=t(35594),h=t(15671),m=t(43144),g=t(60136),v=t(29388),y=t(27366),w=t(46784),S=t(49861),_=(t(63780),t(69912)),Z=function(e){(0,g.Z)(t,e);var r=(0,v.Z)(t);function t(e){var n;return(0,h.Z)(this,t),(n=r.call(this,e)).geometries=null,n.outSpatialReference=null,n.transformation=null,n.transformForward=null,n}return(0,m.Z)(t,[{key:"toJSON",value:function(){var e=this.geometries.map((function(e){return e.toJSON()})),r=this.geometries[0],t={};return t.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),t.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference.toJSON()),t.geometries=JSON.stringify({geometryType:(0,l.Ji)(r),geometries:e}),this.transformation&&(t.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(t.transformForward=this.transformForward),t}}]),t}(w.wq);(0,y._)([(0,S.Cb)()],Z.prototype,"geometries",void 0),(0,y._)([(0,S.Cb)({json:{read:{source:"outSR"}}})],Z.prototype,"outSpatialReference",void 0),(0,y._)([(0,S.Cb)()],Z.prototype,"transformation",void 0),(0,y._)([(0,S.Cb)()],Z.prototype,"transformForward",void 0);var b=Z=(0,y._)([(0,_.j)("esri.rest.support.ProjectParameters")],Z),k=(0,f.se)(b);function R(e,r,t){return J.apply(this,arguments)}function J(){return J=(0,a.Z)((0,n.Z)().mark((function e(r,t,a){var o,i,s,f,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=k(t),o=(0,p.en)(r),i=(0,u.Z)((0,u.Z)({},o.query),{},{f:"json"},t.toJSON()),s=t.outSpatialReference,f=(0,l.Ji)(t.geometries[0]),h=(0,p.lA)(i,a),e.abrupt("return",(0,c.default)(o.path+"/project",h).then((function(e){var r=e.data.geometries;return(0,d.o)(r,f,s)})));case 3:case"end":return e.stop()}}),e)}))),J.apply(this,arguments)}function x(){return D.apply(this,arguments)}function D(){return D=(0,a.Z)((0,n.Z)().mark((function e(){var r,t,a,u,c,f,l=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l.length>0&&void 0!==l[0]?l[0]:null,u=l.length>1?l[1]:void 0,!o.Z.geometryServiceUrl){e.next=4;break}return e.abrupt("return",o.Z.geometryServiceUrl);case 4:if(a){e.next=6;break}throw new i.Z("internal:geometry-service-url-not-configured");case 6:return c="portal"in a?a.portal||s.Z.getDefault():a,e.next=9,c.load({signal:u});case 9:if(f=null===(r=c.helperServices)||void 0===r||null===(t=r.geometry)||void 0===t?void 0:t.url){e.next=12;break}throw new i.Z("internal:geometry-service-url-not-configured");case 12:return e.abrupt("return",f);case 13:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function N(e,r){return O.apply(this,arguments)}function O(){return O=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,o,s,u,c,f=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.length>2&&void 0!==f[2]?f[2]:null,o=f.length>3?f[3]:void 0,e.next=4,x(a,o);case 4:return s=e.sent,(u=new b).geometries=[r],u.outSpatialReference=t,e.next=9,R(s,u,{signal:o});case 9:if(!(c=e.sent)||!Array.isArray(c)||1!==c.length){e.next=12;break}return e.abrupt("return",c[0]);case 12:throw new i.Z("internal:geometry-service-projection-failed");case 13:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}}}]);
//# sourceMappingURL=3150.d742d39f.chunk.js.map