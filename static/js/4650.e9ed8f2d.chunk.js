"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[4650],{94650:function(e,r,t){t.r(r),t.d(r,{fromUrl:function(){return y}});var n=t(74165),a=t(1413),u=t(15861),s=t(10064),l=t(92026),o=t(35995),i=t(25899),c=t(74368),p=t(19610);function y(e){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)((0,n.Z)().mark((function e(r){var u,s,l,o,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=null===(u=r.properties)||void 0===u?void 0:u.customParameters,e.next=3,b(r.url,s);case 3:if(l=e.sent,o=(0,a.Z)((0,a.Z)({},r.properties),{},{url:r.url}),l.sublayerIds){e.next=7;break}return e.abrupt("return",(null!=l.layerOrTableId&&(o.layerId=l.layerOrTableId,o.sourceJSON=l.sourceJSON),new l.Constructor(o)));case 7:return e.next=10,t.e(5069).then(t.bind(t,65069));case 10:return e.t0=e.sent.default,e.t1={title:l.parsedUrl.title},i=new e.t0(e.t1),e.abrupt("return",(v(i,l,o),i));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,r){return e?e.find((function(e){return e.id===r})):null}function v(e,r,t){function n(e,n){var u=(0,a.Z)((0,a.Z)({},t),{},{layerId:e,sublayerTitleMode:"service-name"});return(0,l.pC)(n)&&(u.sourceJSON=n),new r.Constructor(u)}r.sublayerIds.forEach((function(t){var a=n(t,f(r.sublayerInfos,t));e.add(a)})),r.tableIds.forEach((function(t){var a=n(t,f(r.tableInfos,t));e.tables.add(a)}))}function b(e,r){return h.apply(this,arguments)}function h(){return h=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u,o,p,y,d,f,v,b,h,I,S,w;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=(0,i.Qc)(r),e.t0=(0,l.Wi)(a),!e.t0){e.next=6;break}return e.next=5,m(r,t);case 5:a=e.sent;case 6:if(!(0,l.Wi)(a)){e.next=8;break}throw new s.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});case 8:o=(u=a).serverType,p=u.sublayer,d={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},e.t1=o,e.next="MapServer"===e.t1?13:"ImageServer"===e.t1?15:"SceneServer"===e.t1?17:19;break;case 13:return y=null!=p?"FeatureLayer":O(r,t).then((function(e){return e?"TileLayer":"MapImageLayer"})),e.abrupt("break",20);case 15:return y=(0,c.C)(r,{customParameters:t}).then((function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?"LERC"!==(null===r||void 0===r?void 0:r.toUpperCase())||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"})),e.abrupt("break",20);case 17:return y=(0,c.C)(a.url.path,{customParameters:t}).then((function(e){if(e){if("Voxel"===(null===e||void 0===e?void 0:e.layerType))return"VoxelLayer";if(null!==e&&void 0!==e&&e.layers&&Array.isArray(e.layers)&&e.layers.length>0){var r,t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},n=null===(r=e.layers[0])||void 0===r?void 0:r.layerType;if(null!=t[n])return t[n]}}return"SceneLayer"})),e.abrupt("break",20);case 19:y=d[o];case 20:return f={FeatureLayer:!0,SceneLayer:!0},b={parsedUrl:a,Constructor:null,layerOrTableId:(v="FeatureServer"===o)?p:null,sublayerIds:null,tableIds:null},e.next=25,y;case 25:if(h=e.sent,!f[h]||null!=p){e.next=32;break}return e.next=29,x(r,o,t);case 29:w=e.sent,v&&(b.sublayerInfos=w.layerInfos,b.tableInfos=w.tableInfos),1!==w.layerIds.length+w.tableIds.length?(b.sublayerIds=w.layerIds,b.tableIds=w.tableIds):v&&(b.layerOrTableId=null!==(I=w.layerIds[0])&&void 0!==I?I:w.tableIds[0],b.sourceJSON=null!==(S=w.layerInfos[0])&&void 0!==S?S:w.tableInfos[0]);case 32:return e.next=34,Z(h);case 34:return b.Constructor=e.sent,e.abrupt("return",b);case 36:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function m(e,r){return I.apply(this,arguments)}function I(){return I=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u,s,p,y,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.C)(r,{customParameters:t});case 2:if(u=e.sent,s=null,p=null,"Feature Layer"===(y=u.type)||"Table"===y?(s="FeatureServer",p=u.id):"indexedVector"===y?s="VectorTileServer":u.hasOwnProperty("mapName")?s="MapServer":u.hasOwnProperty("bandCount")&&u.hasOwnProperty("pixelSizeX")?s="ImageServer":u.hasOwnProperty("maxRecordCount")&&u.hasOwnProperty("allowGeometryUpdates")?s="FeatureServer":u.hasOwnProperty("streamUrls")?s="StreamServer":S(u)?(s="SceneServer",p=u.id):u.hasOwnProperty("layers")&&S(null===(a=u.layers)||void 0===a?void 0:a[0])&&(s="SceneServer"),s){e.next=7;break}return e.abrupt("return",null);case 7:return d=null!=p?(0,i.DR)(r):null,e.abrupt("return",{title:(0,l.pC)(d)&&u.name||(0,o.vt)(r),serverType:s,sublayer:p,url:{path:(0,l.pC)(d)?d.serviceUrl:(0,o.mN)(r).path}});case 9:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function S(e){return(null===e||void 0===e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}function x(e,r,t){return w.apply(this,arguments)}function w(){return(w=(0,u.Z)((0,n.Z)().mark((function e(r,t,a){var u,s,l,o,i,p,y;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=!1,"FeatureServer"!==t){e.next=8;break}return e.next=4,(0,c.V)(r,{customParameters:a});case 4:i=e.sent,o=!!i.layersJSON,l=i.layersJSON||i.serviceJSON,e.next=11;break;case 8:return e.next=10,(0,c.C)(r,{customParameters:a});case 10:l=e.sent;case 11:return p=null===(u=l)||void 0===u?void 0:u.layers,y=null===(s=l)||void 0===s?void 0:s.tables,e.abrupt("return",{layerIds:(null===p||void 0===p?void 0:p.map((function(e){return e.id})).reverse())||[],tableIds:(null===y||void 0===y?void 0:y.map((function(e){return e.id})).reverse())||[],layerInfos:o?p:[],tableInfos:o?y:[]});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return k.apply(this,arguments)}function k(){return(k=(0,u.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.T[r])());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,r){return C.apply(this,arguments)}function C(){return(C=(0,u.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.C)(r,{customParameters:t});case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},74368:function(e,r,t){t.d(r,{C:function(){return c},V:function(){return l}});var n=t(1413),a=t(74165),u=t(15861),s=t(76200);function l(e,r){return o.apply(this,arguments)}function o(){return o=(0,u.Z)((0,a.Z)().mark((function e(r,t){var n,u,s,l,o,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(r,t);case 2:if((l=(l=e.sent)||{}).layers=(null===(n=l.layers)||void 0===n?void 0:n.filter(i))||[],o={serviceJSON:l},!((null!==(u=l.currentVersion)&&void 0!==u?u:0)<10.5)){e.next=7;break}return e.abrupt("return",o);case 7:return e.next=9,c(r+"/layers",t);case 9:return p=e.sent,e.abrupt("return",(o.layersJSON={layers:(null===p||void 0===p||null===(s=p.layers)||void 0===s?void 0:s.filter(i))||[],tables:(null===p||void 0===p?void 0:p.tables)||[]},o));case 11:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function i(e){return!e.type||"Feature Layer"===e.type}function c(e,r){return p.apply(this,arguments)}function p(){return p=(0,u.Z)((0,a.Z)().mark((function e(r,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.default)(r,{responseType:"json",query:(0,n.Z)((0,n.Z)({f:"json"},null===t||void 0===t?void 0:t.customParameters),{},{token:null===t||void 0===t?void 0:t.apiKey})});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}}}]);
//# sourceMappingURL=4650.e9ed8f2d.chunk.js.map