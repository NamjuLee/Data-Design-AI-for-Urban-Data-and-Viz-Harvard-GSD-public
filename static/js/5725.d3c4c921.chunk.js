"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[5725],{85725:function(t,a,s){s.r(a),s.d(a,{Solution:function(){return u}});var e=s(15671),i=s(43144),n=s(60136),o=s(29388),r=s(20386),h=s(87968),u=function(t){(0,n.Z)(s,t);var a=(0,o.Z)(s);function s(t){var i;return(0,e.Z)(this,s),(i=a.call(this,t)).pts=[],i.ptsUni=[],i.ptsBook=[],i.ptsLib=[],(0,h.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Boston/thrid-place/ThridPlaceBoston.json").then((function(t){for(var a=0;a<t.dataset.length;++a)"university"===t.dataset[a].id?t.dataset[a].data.forEach((function(t){i.ptsUni.push([t.lon,t.lat])})):"book_store"===t.dataset[a].id?t.dataset[a].data.forEach((function(t){i.ptsBook.push([t.lon,t.lat])})):"library"===t.dataset[a].id&&t.dataset[a].data.forEach((function(t){i.ptsLib.push([t.lon,t.lat])}))})),i.start(),i}return(0,i.Z)(s,[{key:"render",value:function(t){t.globalCompositeOperation="screen";for(var a=0;a<this.ptsUni.length;++a){var s=this.toScreen(this.ptsUni[a][0],this.ptsUni[a][1]);c(t,s[0],s[1],this.time,"rgba(0, 255, 0, 0.6)")}for(var e=0;e<this.ptsBook.length;++e){var i=this.toScreen(this.ptsBook[e][0],this.ptsBook[e][1]);c(t,i[0],i[1],this.time+1,"rgba(0, 0, 255, 0.6)")}for(var n=0;n<this.ptsLib.length;++n){var o=this.toScreen(this.ptsLib[n][0],this.ptsLib[n][1]);c(t,o[0],o[1],this.time+2,"rgba(255, 0, 0, 0.6)")}for(var r=0;r<this.pts.length;++r){var h=this.toScreen(this.pts[r][0],this.pts[r][1]);c(t,h[0],h[1],this.time+3,"rgba(255, 255, 255, 0.6)")}}},{key:"keyDown",value:function(t){}},{key:"mouseDown",value:function(t,a){}},{key:"mouseUp",value:function(t,a){}},{key:"mouseClick",value:function(t,a){var s=this.toMap(t,a);this.pts.push(s)}},{key:"mouseMove",value:function(t,a){}}]),s}(r.RendererJSAPI),c=function(t,a,s,e,i){t.fillStyle=i,t.beginPath(),t.arc(a,s,2*(Math.sin(.8*e)+4),0,2*Math.PI),t.closePath(),t.fill()}}}]);
//# sourceMappingURL=5725.d3c4c921.chunk.js.map