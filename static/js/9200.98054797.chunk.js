"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[9200],{89200:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var l=r(74165),n=r(15861),a=r(37762),o=r(1413),i=r(15671),s=r(43144),u=r(60136),p=r(29388),c=r(27366),y=(r(59486),r(76200)),v=r(10064),f=r(97642),d=r(643),h=r(35995),m=r(49861),w=(r(63780),r(25243),r(38511)),b=r(69912),Z=r(31201),g=r(30651),_=r(6693),T=r(6061),C=r(29598),R=r(71684),S=r(56811),j=r(59068),k=r(22824),D=r(4961),I=r(53866),x=r(78952),P=r(585),U=function(e){(0,u.Z)(r,e);var t=(0,p.Z)(r);function r(){var e;(0,i.Z)(this,r);for(var l=arguments.length,n=new Array(l),a=0;a<l;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).copyright="",e.fullExtent=new I.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,x.Z.WebMercator),e.legendEnabled=!1,e.isReference=null,e.popupEnabled=!1,e.spatialReference=x.Z.WebMercator,e.subDomains=null,e.tileInfo=new k.Z({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new P.Z({x:-20037508.342787,y:20037508.342787,spatialReference:x.Z.WebMercator}),spatialReference:x.Z.WebMercator,lods:[new j.Z({level:0,scale:591657527.591555,resolution:156543.033928}),new j.Z({level:1,scale:295828763.795777,resolution:78271.5169639999}),new j.Z({level:2,scale:147914381.897889,resolution:39135.7584820001}),new j.Z({level:3,scale:73957190.948944,resolution:19567.8792409999}),new j.Z({level:4,scale:36978595.474472,resolution:9783.93962049996}),new j.Z({level:5,scale:18489297.737236,resolution:4891.96981024998}),new j.Z({level:6,scale:9244648.868618,resolution:2445.98490512499}),new j.Z({level:7,scale:4622324.434309,resolution:1222.99245256249}),new j.Z({level:8,scale:2311162.217155,resolution:611.49622628138}),new j.Z({level:9,scale:1155581.108577,resolution:305.748113140558}),new j.Z({level:10,scale:577790.554289,resolution:152.874056570411}),new j.Z({level:11,scale:288895.277144,resolution:76.4370282850732}),new j.Z({level:12,scale:144447.638572,resolution:38.2185141425366}),new j.Z({level:13,scale:72223.819286,resolution:19.1092570712683}),new j.Z({level:14,scale:36111.909643,resolution:9.55462853563415}),new j.Z({level:15,scale:18055.954822,resolution:4.77731426794937}),new j.Z({level:16,scale:9027.977411,resolution:2.38865713397468}),new j.Z({level:17,scale:4513.988705,resolution:1.19432856685505}),new j.Z({level:18,scale:2256.994353,resolution:.597164283559817}),new j.Z({level:19,scale:1128.497176,resolution:.298582141647617}),new j.Z({level:20,scale:564.248588,resolution:.14929107082380833}),new j.Z({level:21,scale:282.124294,resolution:.07464553541190416}),new j.Z({level:22,scale:141.062147,resolution:.03732276770595208}),new j.Z({level:23,scale:70.5310735,resolution:.01866138385297604})]}),e.type="web-tile",e.urlTemplate=null,e.wmtsInfo=null,e}return(0,s.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,o.Z)({urlTemplate:e},t):e}},{key:"load",value:function(e){var t=this,r=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var r=new h.R9(t.urlTemplate);!(t.subDomains&&t.subDomains.length>0)&&r.authority.includes("{subDomain}")&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new v.Z("web-tile-layer:load","WebTileLayer (title: '".concat(t.title,"', id: '").concat(t.id,"') ").concat(e))}));return this.addResolvingPromise(r),Promise.resolve(this)}},{key:"levelValues",get:function(){var e=[];if(!this.tileInfo)return null;var t,r=(0,a.Z)(this.tileInfo.lods);try{for(r.s();!(t=r.n()).done;){var l=t.value;e[l.level]=l.levelValue||l.level}}catch(n){r.e(n)}finally{r.f()}return e}},{key:"readSpatialReference",value:function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&x.Z.fromJSON(t.fullExtent.spatialReference)}},{key:"tileServers",get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,r=this.subDomains,l=new h.R9(t),n=l.scheme?l.scheme+"://":"//",o=n+l.authority+"/";if(l.authority.includes("{subDomain}")){if(r&&r.length>0&&l.authority.split(".").length>1){var i,s=(0,a.Z)(r);try{for(s.s();!(i=s.n()).done;){var u=i.value;e.push(n+l.authority.replace(/\{subDomain\}/gi,u)+"/")}}catch(p){s.e(p)}finally{s.f()}}}else e.push(o);return e.map((function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}))}},{key:"urlPath",get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new h.R9(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}},{key:"readUrlTemplate",value:function(e,t){return e||t.templateUrl}},{key:"writeUrlTemplate",value:function(e,t){e&&(0,h.oC)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=(0,h.Fv)(e)),t.templateUrl=e}},{key:"fetchTile",value:function(e,t,r){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=l.signal,a=this.getTileUrl(e,t,r),i={responseType:"image",signal:n,query:(0,o.Z)({},this.refreshParameters)};return(0,y.default)(a,i).then((function(e){return e.data}))}},{key:"fetchImageBitmapTile",value:function(){var e=(0,n.Z)((0,l.Z)().mark((function e(t,r,n){var a,i,s,u,p,c,v=arguments;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v.length>3&&void 0!==v[3]?v[3]:{},i=a.signal,s=this.getTileUrl(t,r,n),u={responseType:"blob",signal:i,query:(0,o.Z)({},this.refreshParameters)},e.next=6,(0,y.default)(s,u);case 6:return p=e.sent,c=p.data,e.abrupt("return",createImageBitmap(c));case 9:case"end":return e.stop()}}),e,this)})));return function(t,r,l){return e.apply(this,arguments)}}()},{key:"getTileUrl",value:function(e,t,r){var l=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+(0,d.gx)(this.urlPath,{level:l,z:l,col:r,x:r,row:t,y:t})}}]),r}((0,_.h)((0,R.Q)((0,S.M)((0,T.q)((0,C.I)((0,f.R)(g.Z)))))));(0,c._)([(0,m.Cb)({type:String,value:"",json:{write:!0}})],U.prototype,"copyright",void 0),(0,c._)([(0,m.Cb)({type:I.Z,json:{write:!0},nonNullable:!0})],U.prototype,"fullExtent",void 0),(0,c._)([(0,m.Cb)({readOnly:!0,json:{read:!1,write:!1}})],U.prototype,"legendEnabled",void 0),(0,c._)([(0,m.Cb)({type:["show","hide"]})],U.prototype,"listMode",void 0),(0,c._)([(0,m.Cb)({json:{read:!0,write:!0}})],U.prototype,"blendMode",void 0),(0,c._)([(0,m.Cb)()],U.prototype,"levelValues",null),(0,c._)([(0,m.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],U.prototype,"isReference",void 0),(0,c._)([(0,m.Cb)({type:["WebTiledLayer"],value:"WebTiledLayer"})],U.prototype,"operationalLayerType",void 0),(0,c._)([(0,m.Cb)({readOnly:!0,json:{read:!1,write:!1}})],U.prototype,"popupEnabled",void 0),(0,c._)([(0,m.Cb)({type:x.Z})],U.prototype,"spatialReference",void 0),(0,c._)([(0,w.r)("spatialReference",["spatialReference","fullExtent.spatialReference"])],U.prototype,"readSpatialReference",null),(0,c._)([(0,m.Cb)({type:[String],json:{write:!0}})],U.prototype,"subDomains",void 0),(0,c._)([(0,m.Cb)({type:k.Z,json:{write:!0}})],U.prototype,"tileInfo",void 0),(0,c._)([(0,m.Cb)({readOnly:!0})],U.prototype,"tileServers",null),(0,c._)([(0,m.Cb)({json:{read:!1}})],U.prototype,"type",void 0),(0,c._)([(0,m.Cb)()],U.prototype,"urlPath",null),(0,c._)([(0,m.Cb)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],U.prototype,"urlTemplate",void 0),(0,c._)([(0,w.r)("urlTemplate",["urlTemplate","templateUrl"])],U.prototype,"readUrlTemplate",null),(0,c._)([(0,Z.c)("urlTemplate",{templateUrl:{type:String}})],U.prototype,"writeUrlTemplate",null),(0,c._)([(0,m.Cb)({type:D.B,json:{write:!0}})],U.prototype,"wmtsInfo",void 0);var M=U=(0,c._)([(0,b.j)("esri.layers.WebTileLayer")],U)},4961:function(e,t,r){r.d(t,{B:function(){return v}});var l,n=r(15671),a=r(43144),o=r(60136),i=r(29388),s=r(27366),u=r(46784),p=r(84652),c=r(49861),y=(r(25243),r(69912)),v=l=function(e){(0,o.Z)(r,e);var t=(0,i.Z)(r);function r(e){return(0,n.Z)(this,r),t.call(this,e)}return(0,a.Z)(r,[{key:"clone",value:function(){return new l({customLayerParameters:(0,p.d9)(this.customLayerParameters),customParameters:(0,p.d9)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}}]),r}(u.wq);(0,s._)([(0,c.Cb)({json:{type:Object,write:!0}})],v.prototype,"customLayerParameters",void 0),(0,s._)([(0,c.Cb)({json:{type:Object,write:!0}})],v.prototype,"customParameters",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],v.prototype,"layerIdentifier",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],v.prototype,"tileMatrixSet",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],v.prototype,"url",void 0),v=l=(0,s._)([(0,y.j)("esri.layer.support.WMTSLayerInfo")],v)}}]);
//# sourceMappingURL=9200.98054797.chunk.js.map