"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[7139],{27139:function(t,a,e){e.r(a),e.d(a,{Solution:function(){return s}});var o=e(15671),n=e(43144),r=e(60136),c=e(29388),i=e(20386),l=e(87968),s=function(t){(0,r.Z)(e,t);var a=(0,c.Z)(e);function e(t){var n;(0,o.Z)(this,e),(n=a.call(this,t)).data=[],n.API_KEY="bd30a8d327da510a2972cbbec887a1e2",n.colorsLegend=[],console.log("your key is ","bd30a8d327da510a2972cbbec887a1e2"),n.zoom(2),n.center(127.024612,37.5326);for(var r=-45;r<45;++r)n.colorsLegend.push((0,l.getColorByCelsius)(r));var c="http://api.openweathermap.org/data/2.5/weather?q=".concat("Seoul","&appid=").concat(n.API_KEY,"&units=metric");return(0,l.getJSONFromURL)(c).then((function(t){console.log(t),n.data.push(t)})),n.start(),n}return(0,n.Z)(e,[{key:"render",value:function(t){for(var a=0;a<this.data.length;++a){var e=this.data[a],o=this.toScreen(e.coord.lon,e.coord.lat),n=e.main.temp,r=(0,l.getColorByCelsius)(n),c="rgb(".concat(r[0],", ").concat(r[1],", ").concat(r[2],")");h(t,o[0],o[1],this.time,c),u(t,o[0]+15,o[1],n,"#fff")}d(t,this.colorsLegend)}},{key:"mouseClick",value:function(t,a){var e=this,o=this.toMap(t,a),n="https://api.openweathermap.org/data/2.5/weather?lat=".concat(o[1],"&lon=").concat(o[0],"&appid=").concat(this.API_KEY,"&units=metric");(0,l.getJSONFromURL)(n).then((function(t){console.log(t),e.data.push(t)}))}}]),e}(i.RendererJSAPI),h=function(t,a,e,o,n){t.fillStyle=n,t.beginPath(),t.arc(a,e,3*(Math.sin(.8*o)+4),0,2*Math.PI),t.closePath(),t.fill()},u=function(t,a,e,o,n){t.strokeStyle=n,t.font="15px Arial",t.strokeText(o,a,e)},d=function(t,a){for(var e=t.canvas.height-100,o=0;o<a.length;++o)t.beginPath(),t.rect(5*o+100,e,5,20),t.closePath(),t.fillStyle="rgba(".concat(a[o][0],", ").concat(a[o][1],", ").concat(a[o][2],", 1)"),t.fill()}}}]);
//# sourceMappingURL=7139.d64eafac.chunk.js.map