"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[8588],{88588:function(t,o,a){a.r(o),a.d(o,{Solution:function(){return h}});var s=a(15671),r=a(43144),e=a(60136),n=a(29388),i=a(20386),l=a(87968),h=function(t){(0,e.Z)(a,t);var o=(0,n.Z)(a);function a(t){var r;(0,s.Z)(this,a),(r=o.call(this,t)).pts=[],r.ptsUni=[],r.ptsBook=[],r.ptsLib=[],r.colorArray=[],(0,l.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Boston/thrid-place/ThridPlaceBoston.json").then((function(t){for(var o=0;o<t.dataset.length;++o)console.log(t.dataset[o].id),"university"===t.dataset[o].id?t.dataset[o].data.forEach((function(t){r.ptsUni.push([t.lon,t.lat])})):"book_store"===t.dataset[o].id?t.dataset[o].data.forEach((function(t){r.ptsBook.push([t.lon,t.lat])})):"library"===t.dataset[o].id&&t.dataset[o].data.forEach((function(t){r.ptsLib.push([t.lon,t.lat])}))})),r.colorArray=[];for(var e=0;e<255;++e){var n=(0,l.getFalseColor)(e/255);r.colorArray.push(n)}return console.log(r.colorArray.length),r.start(),r}return(0,r.Z)(a,[{key:"render",value:function(t){t.globalCompositeOperation="screen";for(var o=0;o<this.ptsUni.length;++o){var a=this.toScreen(this.ptsUni[o][0],this.ptsUni[o][1]);c(t,a[0],a[1],this.time,"rgba(0, 255, 0, 0.6)")}for(var s=0;s<this.ptsBook.length;++s){var r=this.toScreen(this.ptsBook[s][0],this.ptsBook[s][1]);c(t,r[0],r[1],this.time+1,"rgba(0, 0, 255, 0.6)")}for(var e=0;e<this.ptsLib.length;++e){var n=this.toScreen(this.ptsLib[e][0],this.ptsLib[e][1]);c(t,n[0],n[1],this.time+2,"rgba(255, 0, 0, 0.6)")}for(var i=0;i<this.pts.length;++i){var l=this.toScreen(this.pts[i][0],this.pts[i][1]);c(t,l[0],l[1],this.time+3,"rgba(255, 255, 255, 0.6)")}for(var h=t.canvas.height-100,u=0;u<this.colorArray.length;++u)t.beginPath(),t.rect(2*u+100,h,2,20),t.closePath(),t.fillStyle="rgba(".concat(this.colorArray[u][0],", ").concat(this.colorArray[u][1],", ").concat(this.colorArray[u][2],", 1)"),t.fill()}},{key:"keyDown",value:function(t){console.log("key pressed",t)}},{key:"mouseDown",value:function(t,o){console.log("mouse down")}},{key:"mouseUp",value:function(t,o){console.log("mouse up")}},{key:"mouseClick",value:function(t,o){var a=this.toMap(t,o);this.pts.push(a)}},{key:"mouseMove",value:function(t,o){}}]),a}(i.RendererJSAPI),c=function(t,o,a,s,r){t.fillStyle=r,t.beginPath(),t.arc(o,a,2*(Math.sin(.8*s)+4),0,2*Math.PI),t.closePath(),t.fill()}}}]);
//# sourceMappingURL=8588.5d943fe8.chunk.js.map