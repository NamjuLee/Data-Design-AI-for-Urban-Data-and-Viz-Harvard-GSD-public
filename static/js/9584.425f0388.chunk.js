"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[9584],{39584:function(o,n,t){t.r(n),t.d(n,{Solution:function(){return c}});var e=t(15671),a=t(43144),i=t(60136),r=t(29388),s=t(20386),l=t(87968),c=function(o){(0,i.Z)(t,o);var n=(0,r.Z)(t);function t(o){var a;(0,e.Z)(this,t),(a=n.call(this,o)).polygons=[],a.colors=[],a.centers=[],a.mView.on("drag",(function(o){o.stopPropagation()})),a.mView.navigation.mouseWheelZoomEnabled=!1,a.center(-97.893669,39.176304),a.zoom(4);var i=document.createElement("canvas");return i.id="layer",i.width=a.mView.container.clientWidth,i.height=a.mView.container.clientHeight,i.style.background="rgba(0, 32, 0, 0.6)",i.style.position="absolute",i.style.pointerEvents="none",a.mView.container.appendChild(i),(0,l.getJSONFromURL)("/Data-Design-AI-for-Urban-Data-and-Viz-Harvard-GSD-public/static/data/gz_2010_us_050_00_20m.json").then((function(o){for(var n=o.features,t=0;t<n.length;++t){var e=n[t].geometry;if("Polygon"===e.type){var i=e.coordinates[0][0][0],r=e.coordinates[0][0][1],s=[];s.push(i,r);for(var l=1;l<e.coordinates[0].length;++l)i=e.coordinates[0][l][0],r=e.coordinates[0][l][1],s.push(i,r);a.colors.push("rgba(0, 255, 0, ".concat(.2*Math.random()+.3,")")),a.polygons.push(s)}}a.start()})),a}return(0,a.Z)(t,[{key:"render",value:function(o){for(var n=0;n<this.polygons.length;++n){var t=this.polygons[n][0],e=this.polygons[n][1],a=this.toScreen(t,e);o.beginPath(),o.moveTo(a[0],a[1]);for(var i=2;i<this.polygons[n].length;i+=2)t=this.polygons[n][i],e=this.polygons[n][i+1],a=this.toScreen(t,e),o.lineTo(a[0],a[1]);o.closePath(),o.fillStyle=this.colors[n],o.fill()}console.log("done!"),this.isStatic=!0}},{key:"mouseMove",value:function(o,n){console.log("inspecting",o,n),console.log(this.ctx.isPointInPath(o,n))}}]),t}(s.RendererJSAPI)}}]);
//# sourceMappingURL=9584.425f0388.chunk.js.map