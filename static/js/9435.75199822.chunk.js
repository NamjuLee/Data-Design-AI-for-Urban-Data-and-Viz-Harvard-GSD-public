"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[9435],{69435:function(e,t,o){o.r(t),o.d(t,{Solution:function(){return c}});var n=o(15671),a=o(43144),r=o(60136),i=o(29388),s=o(20386),l=o(87968),c=function(e){(0,r.Z)(o,e);var t=(0,i.Z)(o);function o(e){var a;(0,n.Z)(this,o),(a=t.call(this,e)).colors=[],a.polygonsGeo=[],a.polygonsScreenPath2D=[],a.centersScreen=[],a.mView.on("drag",(function(e){e.stopPropagation()})),a.mView.navigation.mouseWheelZoomEnabled=!1,a.center(-97.893669,39.176304),a.zoom(4);var r=document.createElement("canvas");return r.id="layer",r.width=a.mView.container.clientWidth,r.height=a.mView.container.clientHeight,r.style.background="rgba(0, 32, 0, 0.6)",r.style.position="absolute",r.style.pointerEvents="none",a.mView.container.appendChild(r),(0,l.getJSONFromURL)("/Data-Design-AI-for-Urban-Data-and-Viz-Harvard-GSD-public/static/data/gz_2010_us_050_00_20m.json").then((function(e){for(var t=e.features,o=0;o<t.length;++o){var n=t[o].geometry;if("Polygon"===n.type){var r=n.coordinates[0][0][0],i=n.coordinates[0][0][1],s=[];s.push(r,i);for(var l=1;l<n.coordinates[0].length;++l)r=n.coordinates[0][l][0],i=n.coordinates[0][l][1],s.push(r,i);a.colors.push("rgba(0, 255, 0, ".concat(.2*Math.random()+.3,")")),a.polygonsGeo.push(s)}}a.start()})),a}return(0,a.Z)(o,[{key:"render",value:function(e){for(var t=0;t<this.polygonsGeo.length;++t){var o=this.polygonsGeo[t][0],n=this.polygonsGeo[t][1],a=this.toScreen(o,n);e.beginPath(),e.moveTo(a[0],a[1]);var r=new Path2D;r.moveTo(a[0],a[1]);for(var i=a[0],s=a[1],l=1,c=2;c<this.polygonsGeo[t].length;c+=2)o=this.polygonsGeo[t][c],n=this.polygonsGeo[t][c+1],a=this.toScreen(o,n),e.lineTo(a[0],a[1]),r.lineTo(a[0],a[1]),i+=a[0],s+=a[1],l++;e.closePath(),e.fillStyle=this.colors[t],e.fill(),h(e,i/l,s/l,1,"#0fff0f"),this.centersScreen.push([i/l,s/l,l]),r.closePath(),this.polygonsScreenPath2D.push(r)}console.log("done!"),this.isStatic=!0}},{key:"mouseMove",value:function(e,t){this.ctx.lineWidth=0;for(var o=-1,n=1e5,a=0;a<this.centersScreen.length;++a){var r=this.centersScreen[a],i=g(e,t,r[0],r[1]);i<n&&(n=i,o=a)}if(console.log("id:",o),this.ctx.lineWidth=.2,-1!==o&&o<=this.polygonsScreenPath2D.length){var s=this.polygonsScreenPath2D[o];this.ctx.strokeStyle="#0f0",this.ctx.stroke(s)}}}]),o}(s.RendererJSAPI),h=function(e,t,o,n,a){e.fillStyle=a,e.beginPath(),e.arc(t,o,n,0,2*Math.PI),e.closePath(),e.fill()},g=function(e,t,o,n){return Math.sqrt((e-o)*(e-o)+(t-n)*(t-n))}}}]);
//# sourceMappingURL=9435.75199822.chunk.js.map