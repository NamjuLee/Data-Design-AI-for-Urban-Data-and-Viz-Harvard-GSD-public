"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[2186],{47037:function(e,t,r){r.d(t,{G:function(){return f}});var i=r(1413),n=r(37762),a=r(15671),s=r(43144),h=r(11752),u=r(61120),c=r(60136),o=r(29388),l=r(64510),d=r(8548),f=function(e){(0,c.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,a.Z)(this,r),(e=t.apply(this,arguments)).requiresDedicatedFBO=!1,e}return(0,s.Z)(r,[{key:"dispose",value:function(){}},{key:"doRender",value:function(e){var t=this.createRenderParams(e),r=t.context,i=t.painter,a=t.profiler;this._prevFBO=r.getBoundFramebufferObject(),a.recordContainerStart(this.name);var s=this._getFbo(t),h=i.getRenderTarget();r.bindFramebuffer(s),i.setRenderTarget(s),r.setDepthWriteEnabled(!0),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);var u,c=(0,n.Z)(this.children);try{for(c.s();!(u=c.n()).done;){u.value.beforeRender(e)}}catch(g){c.e(g)}finally{c.f()}var o,l=(0,n.Z)(this.children);try{for(l.s();!(o=l.n()).done;){o.value.processRender(t)}}catch(g){l.e(g)}finally{l.f()}var f,p=(0,n.Z)(this.children);try{for(p.s();!(f=p.n()).done;){f.value.afterRender(e)}}catch(g){p.e(g)}finally{p.f()}i.setRenderTarget(h),i.releaseFbo(s),r.bindFramebuffer(this._prevFBO),i.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),r.setStencilTestEnabled(!1),r.setStencilWriteMask(0),i.blitTexture(r,s.colorTexture,d.cw.NEAREST),i.compositeLayer(t,this.computedOpacity),a.recordContainerEnd()}},{key:"createRenderParams",value:function(e){return(0,i.Z)((0,i.Z)({},(0,h.Z)((0,u.Z)(r.prototype),"createRenderParams",this).call(this,e)),{},{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1})}},{key:"_getFbo",value:function(e){var t=e.context,r=e.painter,i=t.getViewport(),n=i.width,a=i.height;return r.acquireFbo(n,a)}}]),r}(l.Z)},82186:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});var i=r(37762),n=r(74165),a=r(15861),s=r(15671),h=r(43144),u=r(60136),c=r(29388),o=r(27366),l=r(52639),d=r(40281),f=r(92026),p=r(94172),g=(r(32718),r(25243),r(63780),r(10064),r(93169),r(69912)),v=r(33624),y=r(47037),_=r(95986),w=r(75391),b=r(34035),Z=r(67581),m="sublayers",k="layerView",C=Object.freeze({remove:function(){},pause:function(){},resume:function(){}}),V=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments))._highlightIds=new Map,e.container=new y.G,e}return(0,h.Z)(r,[{key:"fetchPopupFeatures",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Array.from(this.graphicsViews(),(function(e){return e.hitTest(t).filter((function(e){return!!e.popupTemplate}))})).flat());case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"graphicsViews",value:(0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,f.pC)(this._graphicsViewsFeatureCollectionMap)){e.next=4;break}return e.delegateYield(this._graphicsViewsFeatureCollectionMap.keys(),"t0",2);case 2:case 6:e.next=9;break;case 4:if(!(0,f.pC)(this._graphicsViews)){e.next=8;break}return e.delegateYield(this._graphicsViews,"t1",6);case 8:return e.delegateYield([],"t2",9);case 9:case"end":return e.stop()}}),e,this)}))},{key:"hitTest",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Array.from(this.graphicsViews(),(function(e){var r=e.hitTest(t);if((0,f.pC)(a._graphicsViewsFeatureCollectionMap)){var n,s=a._graphicsViewsFeatureCollectionMap.get(e),h=(0,i.Z)(r);try{for(h.s();!(n=h.n()).done;){var u=n.value;!u.popupTemplate&&s.popupTemplate&&(u.popupTemplate=s.popupTemplate),u.sourceLayer=u.layer=a.layer}}catch(c){h.e(c)}finally{h.f()}}return r})).flat().map((function(e){return{type:"graphic",graphic:e,layer:a.layer,mapPoint:t}})));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"highlight",value:function(e){var t,r=this;return"number"==typeof e?t=[e]:e instanceof l.Z?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((function(e){return e&&e.uid})):d.Z.isCollection(e)&&(t=e.map((function(e){return e&&e.uid})).toArray()),t=t.filter((function(e){return null!=e})),t.length?(this._addHighlight(t),{remove:function(){r._removeHighlight(t)}}):C}},{key:"update",value:function(e){var t,r=(0,i.Z)(this.graphicsViews());try{for(r.s();!(t=r.n()).done;){t.value.processUpdate(e)}}catch(n){r.e(n)}finally{r.f()}}},{key:"attach",value:function(){var e=this,t=this.view,r=function(){return e.requestUpdate()},n=this.layer.featureCollections;if((0,f.pC)(n)&&n.length){this._graphicsViewsFeatureCollectionMap=new Map;var a,s=(0,i.Z)(n);try{var h=function(){var i=a.value,n=new w.Z(e.view.featuresTilingScheme),s=new b.Z({view:t,graphics:i.source,renderer:i.renderer,requestUpdateCallback:r,container:n});e._graphicsViewsFeatureCollectionMap.set(s,i),e.container.addChild(s.container),e.handles.add([(0,p.YP)((function(){return i.visible}),(function(e){return s.container.visible=e}),p.nn),(0,p.YP)((function(){return s.updating}),(function(){return e.notifyChange("updating")}),p.nn)],k)};for(s.s();!(a=s.n()).done;)h()}catch(u){s.e(u)}finally{s.f()}this._updateHighlight()}else(0,f.pC)(this.layer.sublayers)&&this.handles.add((0,p.on)((function(){return e.layer.sublayers}),"change",(function(){return e._createGraphicsViews()}),{onListenerAdd:function(){return e._createGraphicsViews()},onListenerRemove:function(){return e._destroyGraphicsViews()}}),m)}},{key:"detach",value:function(){this._destroyGraphicsViews(),this.handles.remove(m)}},{key:"moveStart",value:function(){}},{key:"moveEnd",value:function(){}},{key:"viewChange",value:function(){var e,t=(0,i.Z)(this.graphicsViews());try{for(t.s();!(e=t.n()).done;){e.value.viewChange()}}catch(r){t.e(r)}finally{t.f()}}},{key:"isUpdating",value:function(){var e,t=(0,i.Z)(this.graphicsViews());try{for(t.s();!(e=t.n()).done;){if(e.value.updating)return!0}}catch(r){t.e(r)}finally{t.f()}return!1}},{key:"_destroyGraphicsViews",value:function(){this.container.removeAllChildren(),this.handles.remove(k);var e,t=(0,i.Z)(this.graphicsViews());try{for(t.s();!(e=t.n()).done;){e.value.destroy()}}catch(r){t.e(r)}finally{t.f()}this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}},{key:"_createGraphicsViews",value:function(){var e=this;if(this._destroyGraphicsViews(),!(0,f.Wi)(this.layer.sublayers)){var t,r=[],n=this.view,a=function(){return e.requestUpdate()},s=(0,i.Z)(this.layer.sublayers);try{var h=function(){var i=t.value,s=new v.W,h=new w.Z(e.view.featuresTilingScheme);h.fadeTransitionEnabled=!0;var u=new b.Z({view:n,graphics:i.graphics,requestUpdateCallback:a,container:h});e.handles.add([i.on("graphic-update",u.graphicUpdateHandler),(0,p.YP)((function(){return i.visible}),(function(e){return u.container.visible=e}),p.nn),(0,p.YP)((function(){return u.updating}),(function(){return e.notifyChange("updating")}),p.nn)],k),s.addChild(u.container),e.container.addChild(s),r.push(u)};for(s.s();!(t=s.n()).done;)h()}catch(u){s.e(u)}finally{s.f()}this._graphicsViews=r,this._updateHighlight()}}},{key:"_addHighlight",value:function(e){var t,r=(0,i.Z)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(this._highlightIds.has(n)){var a=this._highlightIds.get(n);this._highlightIds.set(n,a+1)}else this._highlightIds.set(n,1)}}catch(s){r.e(s)}finally{r.f()}this._updateHighlight()}},{key:"_removeHighlight",value:function(e){var t,r=(0,i.Z)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(this._highlightIds.has(n)){var a=this._highlightIds.get(n)-1;0===a?this._highlightIds.delete(n):this._highlightIds.set(n,a)}}}catch(s){r.e(s)}finally{r.f()}this._updateHighlight()}},{key:"_updateHighlight",value:function(){var e,t=Array.from(this._highlightIds.keys()),r=(0,i.Z)(this.graphicsViews());try{for(r.s();!(e=r.n()).done;){e.value.setHighlight(t)}}catch(n){r.e(n)}finally{r.f()}}}]),r}((0,_.y)(Z.Z)),T=V=(0,o._)([(0,g.j)("esri.views.2d.layers.MapNotesLayerView2D")],V)},75391:function(e,t,r){r.d(t,{Z:function(){return o}});var i=r(15671),n=r(43144),a=r(11752),s=r(61120),h=r(60136),u=r(29388),c=r(80613),o=function(e){(0,h.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,n.Z)(r,[{key:"renderChildren",value:function(e){this.attributeView.update(),this.children.some((function(e){return e.hasData}))&&(this.attributeView.bindTextures(e.context,!1),(0,a.Z)((0,s.Z)(r.prototype),"renderChildren",this).call(this,e),e.drawPhase===c.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===c.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}},{key:"_renderHighlight",value:function(e){var t=e.painter.effects.highlight;t.bind(e),this._renderChildren(e,t.defines),t.draw(e),t.unbind()}}]),r}(r(82022).Z)}}]);
//# sourceMappingURL=2186.9c6e359d.chunk.js.map