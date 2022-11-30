"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[296],{80296:function(e,t,r){r.r(t),r.d(t,{createConnection:function(){return W}});var n=r(37762),o=r(74165),s=r(15861),i=r(1413),a=r(15671),c=r(43144),u=r(60136),l=r(29388),f=r(27366),d=(r(59486),r(76200)),h=r(10064),p=r(32718),v=r(92026),g=r(66978),y=r(35995),_=(r(25243),r(63780),r(93169),r(69912)),k=r(49861),w=r(93501),Z=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(){return(0,a.Z)(this,r),t.apply(this,arguments)}return(0,c.Z)(r,[{key:"connectionError",get:function(){return this.errorString?new h.Z("stream-connection",this.errorString):null}},{key:"onFeature",value:function(e){this.emit("data-received",e)}}]),r}(r(91505).Z.EventedAccessor);(0,f._)([(0,k.Cb)({readOnly:!0})],Z.prototype,"connectionError",null);var b,m,x=Z=(0,f._)([(0,_.j)("esri.layers.support.StreamConnection")],Z);(m=b||(b={}))[m.CONNECTING=0]="CONNECTING",m[m.OPEN=1]="OPEN",m[m.CLOSING=2]="CLOSING",m[m.CLOSED=3]="CLOSED";var C=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;(0,a.Z)(this,r),(n=t.call(this)).errorString=null;var o=e.geometryType,s=e.spatialReference,i=e.sourceSpatialReference;return n._config=e,n._featureZScaler=(0,w.k)(o,i,s),n._open(),n}return(0,c.Z)(r,[{key:"_open",value:function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._tryCreateWebSocket();case 2:if(e.t0=this.destroyed,e.t0){e.next=6;break}return e.next=6,this._handshake();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){(0,v.pC)(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}},{key:"connectionStatus",get:function(){if((0,v.Wi)(this._websocket))return"disconnected";switch(this._websocket.readyState){case b.CONNECTING:case b.OPEN:return"connected";case b.CLOSING:case b.CLOSED:return"disconnected"}}},{key:"_tryCreateWebSocket",value:function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var t,r,n,s,i,a=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.length>0&&void 0!==a[0]?a[0]:this._config.source.path,r=a.length>1&&void 0!==a[1]?a[1]:1e3,n=a.length>2&&void 0!==a[2]?a[2]:0,e.prev=3,!this.destroyed){e.next=6;break}return e.abrupt("return");case 6:return s=(0,y.fl)(t,this._config.customParameters),e.next=9,this._createWebSocket(s);case 9:this._websocket=e.sent,this.notifyChange("connectionStatus"),e.next=25;break;case 13:if(e.prev=13,e.t0=e.catch(3),i=r/1e3,!(this._config.maxReconnectionAttempts&&n>=this._config.maxReconnectionAttempts)){e.next=20;break}e.t1=(p.Z.getLogger(this.declaredClass).error(new h.Z("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()),e.next=24;break;case 20:return p.Z.getLogger(this.declaredClass).error(new h.Z("websocket-connection","Failed to connect. Attempting to reconnect in ".concat(i,"s"),e.t0)),e.next=23,(0,g.e4)(r);case 23:e.t1=this._tryCreateWebSocket(t,Math.min(1.5*r,1e3*this._config.maxReconnectionInterval),n+1);case 24:return e.abrupt("return",e.t1);case 25:case"end":return e.stop()}}),e,this,[[3,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"_createWebSocket",value:function(e){var t=this;return new Promise((function(r,n){var o=new WebSocket(e);o.onopen=function(){if(o.onopen=null,t.destroyed)return o.onclose=null,void o.close();o.onclose=function(e){return t._onClose(e)},o.onerror=function(e){return t._onError(e)},o.onmessage=function(e){return t._onMessage(e)},r(o)},o.onclose=function(e){o.onopen=o.onclose=null,n(e)}}))}},{key:"_handshake",value:function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var t,r,n,s,i,a,c,u,l=this,f=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=f.length>0&&void 0!==f[0]?f[0]:1e4,r=this._websocket,!(0,v.Wi)(r)){e.next=4;break}return e.abrupt("return");case 4:return n=(0,g.hh)(),s=r.onmessage,i=this._config,a=i.filter,c=i.outFields,u=i.spatialReference,e.abrupt("return",(n.timeout(t),r.onmessage=function(e){var t,o=null;try{o=JSON.parse(e.data)}catch(Z){}o&&"object"==typeof o||(p.Z.getLogger(l.declaredClass).error(new h.Z("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),n.reject(),l.destroy()),(null===(t=o.spatialReference)||void 0===t?void 0:t.wkid)!==(null===u||void 0===u?void 0:u.wkid)&&(p.Z.getLogger(l.declaredClass).error(new h.Z("websocket-connection","Protocol violation. Handshake failed - expected wkid of ".concat(u.wkid),e.data)),n.reject(),l.destroy()),"json"!==o.format&&(p.Z.getLogger(l.declaredClass).error(new h.Z("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),n.reject(),l.destroy()),a&&o.filter!==a&&p.Z.getLogger(l.declaredClass).error(new h.Z("websocket-connection","Tried to set filter, but server doesn't support it")),c&&o.outFields!==c&&p.Z.getLogger(l.declaredClass).error(new h.Z("websocket-connection","Tried to set outFields, but server doesn't support it")),r.onmessage=s,n.resolve()},r.send(JSON.stringify({filter:a,outFields:c,format:"json",spatialReference:{wkid:u.wkid}})),n.promise));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_onMessage",value:function(e){try{var t=JSON.parse(e.data);if("featureResult"!==t.type)throw new h.Z("websocket-connection","Protocol violation - Expected to find message of type 'featureResult'",t);var r,o=(0,n.Z)(t.features);try{for(o.s();!(r=o.n()).done;){var s=r.value;(0,v.pC)(this._featureZScaler)&&this._featureZScaler(s.geometry),this.onFeature(s)}}catch(i){o.e(i)}finally{o.f()}}catch(a){return p.Z.getLogger(this.declaredClass).error(new h.Z("websocket-connection","Failed to parse message",a)),void this.destroy()}}},{key:"_onError",value:function(e){var t="Encountered an error over WebSocket connection";this._set("errorString",t),p.Z.getLogger(this.declaredClass).error("websocket-connection",t)}},{key:"_onClose",value:function(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&p.Z.getLogger(this.declaredClass).error("websocket-connection","WebSocket closed unexpectedly with error code ".concat(e.code)),this.destroyed||this._open()}}]),r}(x);(0,f._)([(0,k.Cb)()],C.prototype,"connectionStatus",null),(0,f._)([(0,k.Cb)()],C.prototype,"errorString",void 0),C=(0,f._)([(0,_.j)("esri.layers.graphics.sources.connections.WebSocketConnection")],C);var S=r(5192),F=r(86638),R=r(77981),L=r(78952),E={maxQueryDepth:5,maxRecordCountFactor:3},O=function(e){(0,u.Z)(f,e);var t=(0,l.Z)(f);function f(e){return(0,a.Z)(this,f),t.call(this,(0,i.Z)((0,i.Z)({},E),e))}return(0,c.Z)(f,[{key:"_open",value:function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var t,r,n,s,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchServiceDefinition(this._config.source);case 2:return(t=e.sent).timeInfo.trackIdField||p.Z.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect."),r=this._fetchWebSocketUrl(t.streamUrls,this._config.spatialReference),this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),e.next=8,this._buddyServicesQuery;case 8:return e.next=10,this._tryCreateWebSocket(r);case 10:n=this._config,s=n.filter,i=n.outFields,this.destroyed||this._setFilter(s,i);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_onMessage",value:function(e){var t;try{t=this._enrich(JSON.parse(e.data)),(0,v.pC)(this._featureZScaler)&&this._featureZScaler(t.geometry)}catch(r){return void p.Z.getLogger(this.declaredClass).error(new h.Z("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}},{key:"_fetchServiceDefinition",value:function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var r,n,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,i.Z)({f:"json"},this._config.customParameters),n=(0,d.default)(t.path,{query:r,responseType:"json"}),e.next=4,n;case 4:return s=e.sent.data,e.abrupt("return",(this._serviceDefinition=s,s));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchWebSocketUrl",value:function(e,t){var r=e[0],n=r.urls,o=r.token,s=this._inferWebSocketBaseUrl(n);return(0,y.fl)("".concat(s,"/subscribe"),{outSR:""+t.wkid,token:o})}},{key:"_inferWebSocketBaseUrl",value:function(e){if(1===e.length)return e[0];var t,r=(0,n.Z)(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(o.includes("wss"))return o}}catch(s){r.e(s)}finally{r.f()}return p.Z.getLogger(this.declaredClass).error(new h.Z("geoevent-connection","Unable to infer WebSocket url",e)),null}},{key:"_setFilter",value:function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t,r){var n,s,i,a,c,u,l=this;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this._websocket,!((0,v.Wi)(n)||(0,v.Wi)(t)&&(0,v.Wi)(r))){e.next=3;break}return e.abrupt("return");case 3:return s=JSON.stringify({filter:this._serializeFilter(t,r)}),i=!1,a=(0,g.hh)(),c=function(){i||(l.destroyed||l._websocket!==n||p.Z.getLogger(l.declaredClass).error(new h.Z("geoevent-connection","Server timed out when setting filter")),a.reject())},u=function(e){var t=JSON.parse(e.data);t.filter&&(t.error&&(p.Z.getLogger(l.declaredClass).error(new h.Z("geoevent-connection","Failed to set service filter",t.error)),l._set("errorString","Could not set service filter - ".concat(t.error)),a.reject(t.error)),n.onmessage=l._onMessage.bind(l),i=!0,a.resolve())},e.abrupt("return",(n.onmessage=u,n.send(s),setTimeout(c,1e4),a.promise));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_serializeFilter",value:function(e,t){var r={};if((0,v.Wi)(e)&&(0,v.Wi)(t))return r;if((0,v.pC)(e)&&e.geometry)try{var n=(0,R.im)(e.geometry);if("extent"!==n.type)throw new h.Z("Expected extent but found type ".concat(n.type));r.geometry=JSON.stringify(n.shiftCentralMeridian())}catch(o){p.Z.getLogger(this.declaredClass).error(new h.Z("geoevent-connection","Encountered an error when setting connection geometryDefinition",o))}return(0,v.pC)(e)&&e.where&&"1 = 1"!==e.where&&(r.where=e.where),(0,v.pC)(t)&&(r.outFields=t.join(",")),r}},{key:"_enrich",value:function(e){if(!this._relatedFeatures)return e;var t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t];if(!this._relatedFeatures.has(r))return p.Z.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;var n=this._relatedFeatures.get(r),o=n.attributes,s=n.geometry;for(var i in o)e.attributes[i]=o[i];return s&&(e.geometry=s),e.geometry||e.centroid||p.Z.getLogger(this.declaredClass).error(new h.Z("geoevent-connection","Found malformed feature - no geometry found",e)),e}},{key:"_queryBuddyServices",value:function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var t,r,s,i,a,c,u,l,f;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this._serviceDefinition,r=t.relatedFeatures,s=t.keepLatestArchive,i=this._queryRelatedFeatures(r),a=this._queryArchive(s),e.next=4,i;case 4:return e.next=6,a;case 6:if(c=e.sent){e.next=9;break}return e.abrupt("return");case 9:u=(0,n.Z)(c.features);try{for(u.s();!(l=u.n()).done;)f=l.value,this.onFeature(this._enrich(f))}catch(o){u.e(o)}finally{u.f()}e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),p.Z.getLogger(this.declaredClass).error(new h.Z("geoevent-connection","Encountered an error when querying buddy services",{error:e.t0}));case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"_queryRelatedFeatures",value:function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this._queryBuddy(t.featuresUrl);case 4:r=e.sent,this._addRelatedFeatures(r);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_queryArchive",value:function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",this._queryBuddy(t.featuresUrl));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_queryBuddy",value:function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var n,s,i,a,c,u,l,f,d,h,p;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(r,64326));case 2:return e.t0=e.sent.default,e.t1={url:t},n=new e.t0(e.t1),e.next=7,n.load();case 7:if(s=e.sent,i=s.capabilities,a=i.query.supportsMaxRecordCountFactor,c=i.query.supportsPagination,u=i.query.supportsCentroid,l=this._config.maxRecordCountFactor,f=n.capabilities.query.maxRecordCount,d=a?f*l:f,(h=new F.Z).outFields=(0,v.Pt)(this._config.outFields,["*"]),h.where=(0,v.Pt)((0,v.U2)(this._config.filter,"where"),"1=1"),h.returnGeometry=!0,h.returnExceededLimitFeatures=!0,h.outSpatialReference=L.Z.fromJSON(this._config.spatialReference),u&&(h.returnCentroid=!0),a&&(h.maxRecordCountFactor=l),!c){e.next=18;break}return e.abrupt("return",(h.num=d,n.destroy(),this._queryPages(t,h)));case 18:return e.next=20,(0,S.executeQuery)(t,h,this._config.sourceSpatialReference);case 20:return p=e.sent,e.abrupt("return",(n.destroy(),p.data));case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_queryPages",value:function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t,r){var n,s,i,a,c=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:[],s=c.length>3&&void 0!==c[3]?c[3]:0,r.start=(0,v.pC)(r.num)?s*r.num:null,e.next=5,(0,S.executeQuery)(t,r,this._config.sourceSpatialReference);case 5:return i=e.sent,a=i.data,e.abrupt("return",a.exceededTransferLimit&&s<this._config.maxQueryDepth?(a.features.forEach((function(e){return n.push(e)})),this._queryPages(t,r,n,s+1)):(n.forEach((function(e){return a.features.push(e)})),a));case 8:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_addRelatedFeatures",value:function(e){var t,r=new Map,o=e.features,s=this._serviceDefinition.relatedFeatures.joinField,i=(0,n.Z)(o);try{for(i.s();!(t=i.n()).done;){var a=t.value,c=a.attributes[s];r.set(c,a)}}catch(u){i.e(u)}finally{i.f()}this._relatedFeatures=r}}]),f}(C),N=O=(0,f._)([(0,_.j)("esri.layers.graphics.sources.connections.GeoEventConnection")],O);function W(e,t,r,n,o,s,i,a){var c=0===e.path.indexOf("wss://")||0===e.path.indexOf("ws://"),u={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:n,filter:o,maxReconnectionAttempts:s,maxReconnectionInterval:i,customParameters:a};return c?new C(u):new N(u)}}}]);
//# sourceMappingURL=296.cf6293bb.chunk.js.map