"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[5069],{65069:function(i,e,t){t.r(e),t.d(e,{default:function(){return D}});var r=t(15671),n=t(43144),s=t(97326),l=t(60136),a=t(29388),o=t(27366),u=t(77178),y=t(93002),v=t(92026),d=t(97642),h=t(94172),b=t(49861),c=(t(63780),t(23879)),f=(t(25243),t(69912)),p=t(31201),_=t(30651),C=t(6693),g=t(6061),k=t(29598),w=t(56811),L=t(19610),m=t(30219),M=t(84938),O=t(16791),V=t(41190),Z=function(i){(0,l.Z)(t,i);var e=(0,a.Z)(t);function t(i){var n;return(0,r.Z)(this,t),(n=e.call(this,i))._visibilityHandles={},n.allLayers=new u.Z({getCollections:function(){return[n.layers]},getChildrenFunction:function(i){return"layers"in i?i.layers:null}}),n.allTables=(0,m.a)((0,s.Z)(n)),n.fullExtent=void 0,n.operationalLayerType="GroupLayer",n.spatialReference=void 0,n.type="group",n}return(0,n.Z)(t,[{key:"initialize",value:function(){var i=this;this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles((0,h.YP)((function(){return i.visible}),this._onVisibilityChange.bind(this),h.Z_))}},{key:"_writeLayers",value:function(i,e,t,r){var n=[];if(!i)return n;i.forEach((function(i){var e=(0,V.Nw)(i,r.webmap?r.webmap.getLayerJSONFromResourceInfo(i):null,r);(0,v.pC)(e)&&e.layerType&&n.push(e)})),e.layers=n}},{key:"portalItem",set:function(i){this._set("portalItem",i)}},{key:"visibilityMode",set:function(i){var e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}},{key:"load",value:function(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:L.T},i)),Promise.resolve(this)}},{key:"loadAll",value:function(){var i=this;return(0,y.G)(this,(function(e){e(i.layers,i.tables)}))}},{key:"layerAdded",value:function(i){var e=this;i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=(0,h.YP)((function(){return i.visible}),(function(t){return e._onChildVisibilityChange(i,t)}),h.Z_)}},{key:"layerRemoved",value:function(i){var e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}},{key:"_turnOffOtherLayers",value:function(i){this.layers.forEach((function(e){e!==i&&(e.visible=!1)}))}},{key:"_enforceVisibility",value:function(i,e){if((0,c.vw)(this).initialized){var t=this.layers,r=t.find((function(i){return i.visible}));switch(i){case"exclusive":t.length&&!r&&((r=t.getItemAt(0)).visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach((function(i){i.visible=e}))}}}},{key:"_onVisibilityChange",value:function(i){"inherited"===this.visibilityMode&&this.layers.forEach((function(e){e.visible=i}))}},{key:"_onChildVisibilityChange",value:function(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}},{key:"_isAnyLayerVisible",value:function(){return this.layers.some((function(i){return i.visible}))}}]),t}((0,C.h)((0,w.M)((0,g.q)((0,k.I)((0,O.Q)((0,M.K)((0,d.R)(_.Z))))))));(0,o._)([(0,b.Cb)({readOnly:!0,dependsOn:[]})],Z.prototype,"allLayers",void 0),(0,o._)([(0,b.Cb)({readOnly:!0})],Z.prototype,"allTables",void 0),(0,o._)([(0,b.Cb)()],Z.prototype,"fullExtent",void 0),(0,o._)([(0,b.Cb)({json:{read:!0,write:!0}})],Z.prototype,"blendMode",void 0),(0,o._)([(0,b.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],Z.prototype,"layers",void 0),(0,o._)([(0,p.c)("layers")],Z.prototype,"_writeLayers",null),(0,o._)([(0,b.Cb)({type:["GroupLayer"]})],Z.prototype,"operationalLayerType",void 0),(0,o._)([(0,b.Cb)({json:{origins:{"web-document":{read:!1,write:!1}}}})],Z.prototype,"portalItem",null),(0,o._)([(0,b.Cb)()],Z.prototype,"spatialReference",void 0),(0,o._)([(0,b.Cb)({json:{read:!1},readOnly:!0,value:"group"})],Z.prototype,"type",void 0),(0,o._)([(0,b.Cb)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],Z.prototype,"visibilityMode",null);var D=Z=(0,o._)([(0,f.j)("esri.layers.GroupLayer")],Z)}}]);
//# sourceMappingURL=5069.9d8ba860.chunk.js.map