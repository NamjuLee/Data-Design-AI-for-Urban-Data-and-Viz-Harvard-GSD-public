"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[1778],{71778:function(t,i,s){s.r(i),s.d(i,{AppSVG:function(){return l}});var e=s(15671),n=s(43144),o=function(){function t(i,s,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;(0,e.Z)(this,t),this.x=0,this.y=0,this.r=0,this.svgCore=void 0,this.svg=void 0,this.svgCore=i,this.x=s,this.y=n,this.r=o,this.svg=document.createElementNS("http://www.w3.org/2000/svg","circle"),this.svg.setAttributeNS(null,"className","circle"),this.svg.setAttributeNS(null,"cx","".concat(s)),this.svg.setAttributeNS(null,"cy","".concat(n)),this.svg.setAttributeNS(null,"r","".concat(this.r)),this.svg.setAttributeNS(null,"fill","#dddddd"),this.svg.animate([{transform:"translateY(0px)"},{transform:"translateY(-3px)"},{transform:"translateY(0px)"}],{delay:1e3*Math.random(),duration:1e3,iterations:1/0}),this.svgCore.appendChild(this.svg),this.BindEvent()}return(0,n.Z)(t,[{key:"BindEvent",value:function(){var t=this;this.svg.ontransitionstart=function(){console.log(t.svg)},this.svg.ontransitionrun=function(){console.log(t.svg)},this.svg.onmouseenter=function(){t.svg.animate([{opacity:1,fill:"#ff0000",r:2*t.r,easing:"ease-in"},{opacity:.5,fill:"#00ff",r:3*t.r,easing:"ease-out"},{opacity:0,fill:"#0000ff",r:1*t.r,easing:"ease-out"}],{duration:1e3,iterations:1})},this.svg.onmouseleave=function(){t.svg.animate([{opacity:1,fill:"#ff0000",easing:"ease-in"},{opacity:0,fill:"#0000ff",easing:"ease-out"}],{direction:"reverse",duration:1e3,iterations:1})},this.svg.onmousedown=function(){t.svg.setAttributeNS(null,"stroke","blue"),t.svg.setAttributeNS(null,"stroke-width","".concat(5,"px")),console.log(t)}}}]),t}(),h=function(){function t(i,s,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10;(0,e.Z)(this,t),this.x=0,this.y=0,this.width=0,this.height=0,this.svgCore=void 0,this.svg=void 0,this.svgCore=i,this.x=s,this.y=n,this.width=2*o,this.height=h,this.svg=document.createElementNS("http://www.w3.org/2000/svg","rect"),this.svg.setAttributeNS(null,"fill","#ffff00"),this.svg.setAttributeNS(null,"x","".concat(this.x)),this.svg.setAttributeNS(null,"y","".concat(this.y)),this.svg.setAttributeNS(null,"width","".concat(this.width)),this.svg.setAttributeNS(null,"height","".concat(this.height)),this.svgCore.appendChild(this.svg),this.BindEvent()}return(0,n.Z)(t,[{key:"BindEvent",value:function(){var t=this;this.svg.onmouseenter=function(){t.svg.animate([{width:"".concat(t.width,"px"),fill:"#0ff000",opacity:1},{width:"".concat(.5*t.width,"px"),fill:"#00ff0",opacity:1},{width:"".concat(.1*t.width,"px"),fill:"#000fff",opacity:.1}],{duration:1e3,easing:"ease-out",iterations:1})},this.svg.onmouseleave=function(){t.svg.animate([{width:"".concat(t.width,"px"),fill:"#0ff000",opacity:1},{width:"".concat(.5*t.width,"px"),fill:"#00ff0",opacity:1},{width:"".concat(.1*t.width,"px"),fill:"#000fff",opacity:.1}],{direction:"reverse",duration:1e3,easing:"ease-in",iterations:1})}}}]),t}(),a=function(){function t(i){(0,e.Z)(this,t),this.svgCore=void 0,this.host=void 0,this.ctx=void 0,this.svgns="http://www.w3.org/2000/svg",this.t=0,this.sCircles=[],this.InitCanvas(i)}return(0,n.Z)(t,[{key:"InitCanvas",value:function(t){var i=document.createElementNS(this.svgns,"svg"),s=document.getElementById(t);s&&(s.setAttribute("hover","http://www.w3.org/1999/xlink"),s.appendChild(i),this.host=s),i&&(this.svgCore=i,this.svgCore.style.width=this.host.clientWidth+"px",this.svgCore.style.height=this.host.clientHeight+"px",this.svgCore.style.position="absolute",this.svgCore.setAttribute("viewBox","-200, -200, 500, 500"),this.svgCore.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgCore.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.svgCore.setAttribute("transition","fill 3s ")),this.AddShape()}},{key:"AddShape",value:function(){for(var t=-150;t<350;t+=18)for(var i=-150;i<150;i+=18)this.sCircles.push(new o(this.svgCore,t,i,9));for(var s=-150;s<150;s+=18){var e=new h(this.svgCore,-280,s-9,100,20);console.log(e)}}},{key:"Resize",value:function(t){}},{key:"Render",value:function(t){console.log(t)}},{key:"MouseDown",value:function(t){console.log(t)}},{key:"MouseUp",value:function(t){console.log(t)}},{key:"MouseMove",value:function(t){console.log(t)}},{key:"destroy",value:function(){for(;this.host.lastChild;)this.host.removeChild(this.host.lastChild)}}]),t}(),r=(0,n.Z)((function t(){(0,e.Z)(this,t)})),l=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SandBox";(0,e.Z)(this,t),this.svgCore=void 0,this.core=void 0,this.core=new r,this.svgCore=new a(i)}return(0,n.Z)(t,[{key:"Dummy",value:function(){}},{key:"BindEvent",value:function(){}},{key:"destroy",value:function(){this.svgCore.destroy()}}],[{key:"Init",value:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SandBox",s=new t(i);s.Dummy()}}]),t}()}}]);
//# sourceMappingURL=1778.3fdb2e98.chunk.js.map