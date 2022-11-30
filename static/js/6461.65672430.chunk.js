"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[6461],{16461:function(r,e,t){t.r(e),t.d(e,{default:function(){return x}});var n=t(1413),a=t(74165),i=t(15861),s=t(15671),o=t(43144),u=(t(59486),t(92026)),c=t(42306),f=t(96212),l=t(45502),p=t(17314),m=t(74477),v=t(80394),d=t(21449),h=t(64145),k=t(77960),y=t(43238),Z=t(55185),S=t(53866),x=function(){function r(){(0,s.Z)(this,r)}return(0,o.Z)(r,[{key:"convertVectorFieldData",value:function(r){var e=f.Z.fromJSON(r.pixelBlock),t=(0,h.KC)(e,r.type);return Promise.resolve((0,u.pC)(t)&&t.toJSON())}},{key:"decode",value:function(){var r=(0,i.Z)((0,a.Z)().mark((function r(e){var t;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,l.J)(e.data,e.options);case 2:return t=r.sent,r.abrupt("return",t&&t.toJSON());case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},{key:"symbolize",value:function(r){r.pixelBlock=f.Z.fromJSON(r.pixelBlock),r.extent=r.extent?S.Z.fromJSON(r.extent):null;var e=this.symbolizer.symbolize(r);return Promise.resolve((0,u.pC)(e)&&e.toJSON())}},{key:"updateSymbolizer",value:function(){var r=(0,i.Z)((0,a.Z)().mark((function r(e){var t;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:this.symbolizer=y.Z.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null===(t=this.symbolizer)||void 0===t?void 0:t.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms);case 1:case"end":return r.stop()}}),r,this)})));return function(e){return r.apply(this,arguments)}}()},{key:"updateRasterFunction",value:function(){var r=(0,i.Z)((0,a.Z)().mark((function r(e){return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:this.rasterFunction=(0,m.Ue)(e.rasterFunctionJSON);case 1:case"end":return r.stop()}}),r,this)})));return function(e){return r.apply(this,arguments)}}()},{key:"process",value:function(){var r=(0,i.Z)((0,a.Z)().mark((function r(e){var t;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=this.rasterFunction.process({extent:S.Z.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map((function(r){return(0,u.pC)(r)?f.Z.fromJSON(r):null})),primaryRasterIds:e.primaryRasterIds}),r.abrupt("return",(0,u.pC)(t)?t.toJSON():null);case 2:case"end":return r.stop()}}),r,this)})));return function(e){return r.apply(this,arguments)}}()},{key:"stretch",value:function(r){var e=this.symbolizer.simpleStretch(f.Z.fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve((0,u.pC)(e)&&e.toJSON())}},{key:"estimateStatisticsHistograms",value:function(r){var e=(0,d.Hv)(f.Z.fromJSON(r.srcPixelBlock));return Promise.resolve(e)}},{key:"split",value:function(r){var e=(0,p.Vl)(f.Z.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return e&&e.forEach((function(r,t){e.set(t,null===r||void 0===r?void 0:r.toJSON())})),Promise.resolve(e)}},{key:"mosaicAndTransform",value:function(){var r=(0,i.Z)((0,a.Z)().mark((function r(e){var t,n,i,s,o;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.srcPixelBlocks.map((function(r){return r?new f.Z(r):null})),i=(0,p.us)(n,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize}),o=i,r.abrupt("return",(e.coefs&&(o=(0,p.Uk)(i,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(s=(0,p.Qh)(e.destDimension,e.gcsGrid),o=(0,u.Wg)((0,h.xQ)(o,e.isUV?"vector-uv":"vector-magdir",s))),{pixelBlock:null===(t=o)||void 0===t?void 0:t.toJSON(),localNorthDirections:s}));case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},{key:"createFlowMesh",value:function(){var r=(0,i.Z)((0,a.Z)().mark((function r(e,t){var n,i,s,o;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},r.next=3,(0,Z.GE)(e.meshType,e.simulationSettings,n,t.signal);case 3:return i=r.sent,s=i.vertexData,o=i.indexData,r.abrupt("return",{result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]});case 7:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},{key:"getProjectionOffsetGrid",value:function(){var r=(0,i.Z)((0,a.Z)().mark((function r(e){var t,i,s,o;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=S.Z.fromJSON(e.projectedExtent),i=S.Z.fromJSON(e.srcBufferExtent),s=null,e.datumTransformationSteps&&(s=new c.Z({steps:e.datumTransformationSteps})),r.t0=e.includeGCSGrid||(0,v.Mk)(t.spatialReference,i.spatialReference,s),!r.t0){r.next=7;break}return r.next=7,(0,v.zD)();case 7:return o=e.rasterTransform?(0,k.c)(e.rasterTransform):null,r.abrupt("return",(0,v.Qp)((0,n.Z)((0,n.Z)({},e),{},{projectedExtent:t,srcBufferExtent:i,datumTransformation:s,rasterTransform:o})));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}]),r}()}}]);
//# sourceMappingURL=6461.65672430.chunk.js.map