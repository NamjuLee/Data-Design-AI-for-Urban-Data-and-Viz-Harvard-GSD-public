"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[8636],{98636:function(e,t,r){r.r(t),r.d(t,{Solution:function(){return m}});var s=r(29439),o=r(15671),n=r(43144),i=r(60136),a=r(29388),h=r(17760),u=r(20386),c=r(87968),m=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main";(0,o.Z)(this,r),(e=t.call(this,n)).streetOSM=[],e.routesTreated=[],e.routesControl=[],e.zones30=[],e.positions=void 0,e.geometry=void 0,e.raycaster=new h.iMs,e.pointer=new h.FM8,e.mesh=void 0,e.sphere=void 0,e.renderPoints=function(t,r,o){for(var n=new h.u9r,i=new h.UY4({vertexColors:!0,size:.75}),a=[],u=[],m=0;m<r.length;++m)for(var p=r[m],d=0;d<p.length;++d)for(var l=0;l<p[d].length;++l){var v=(0,c.MercatorProjection)(p[d][l][0],p[d][l][1]),g=(0,s.Z)(v,2),f=.01*(g[0]+-15478803.88731685),y=.01*(g[1]+-4766681.448690384);a.push(f,0,y),u.push(o[0],o[1],o[2])}n.setAttribute("position",new h.a$l(a,3)),n.setAttribute("color",new h.a$l(u,3)),n.computeBoundingSphere(),e.positions=a,e.geometry=n,e.mesh=new h.woe(n,i),t.add(e.mesh)};var i=new h.cek(16777215,.8);e.camera.add(i),e.scene.add(i),e.raycaster=new h.iMs,e.raycaster.params.Points.threshold=.8,e.raycaster.far=1e3;var a=new h.xo$(.1,32,32),u=new h.vBJ({color:16777215}),m=new h.Kj0(a,u);return e.sphere=m,e.scene.add(m),e.camera.position.set(0,40,48),(0,c.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then((function(t){for(var r=0;r<t.features.length;++r)e.streetOSM.push(t.features[r].geometry.coordinates);e.renderPoints(e.scene,e.streetOSM,[0,1,1]),e.start()})),e}return(0,n.Z)(r,[{key:"mouseMove",value:function(e){this.pointer.x=e.offsetX/this.hostDiv.clientWidth*2-1,this.pointer.y=-e.offsetY/this.hostDiv.clientHeight*2+1}},{key:"update",value:function(e){this.raycaster.setFromCamera(this.pointer,this.camera);var t=this.raycaster.intersectObjects([this.mesh],!1),r=t.length>0?t[0]:null;null!==r&&this.sphere.position.set(r.point.x,r.point.y,r.point.z);for(var s=this.mesh.geometry.attributes.position.count,o=0;o<s;o++){var n=this.mesh.geometry.attributes.position,i=n.getX(o),a=n.getY(o),u=n.getZ(o);a=(a=Math.sin(9*i*u+5*this.t))<0?0:a;var m=new h.Pa4(i,a,u);this.mesh.geometry.attributes.position.setXYZ(o,m.x,m.y,m.z),null!==r&&(a=(0,c.distanceTo)(i,a,u,r.point.x,r.point.y,r.point.z)/30),this.mesh.geometry.attributes.color.setXYZ(o,a,1-a,0)}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0,this.mesh.geometry.computeVertexNormals()}}]),r}(u.RendererThree)}}]);
//# sourceMappingURL=8636.20b7b7f1.chunk.js.map