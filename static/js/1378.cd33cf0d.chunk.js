"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[1378],{51378:function(e,t,_){_.d(t,{x:function(){return I}});var E=_(1413),r=_(15671),T=_(43144),i=(_(93169),_(16889)),R=_(92026),n=_(37825),A=_(49800),o=_(8548),a=_(30308),N={target:o.No.TEXTURE_2D,samplingMode:o.cw.LINEAR,wrapMode:o.e8.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1},I=function(){function e(t,_){var T=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(var i in(0,r.Z)(this,e),this._context=t,this.type="texture",this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,t.instanceCounter.increment(o._g.Texture,this),this._descriptor=(0,E.Z)((0,E.Z)({},N),_),N)void 0===this._descriptor[i]&&(this._descriptor[i]=N[i]);if(t.type!==A.zO.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),s(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===o.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(T):this.setData(T)}return(0,T.Z)(e,[{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._descriptor}},{key:"isDirty",get:function(){return this._samplingModeDirty||this._wrapModeDirty}},{key:"dispose",value:function(){this._context.gl&&this._glName&&(this._context.unbindTexture(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(o._g.Texture,this))}},{key:"release",value:function(){this.dispose()}},{key:"resize",value:function(e,t){var _=this._descriptor;if(_.width!==e||_.height!==t){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");_.width=e,_.height=t,this._descriptor.target===o.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}},{key:"_setDataCubeMap",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=o.No.TEXTURE_CUBE_MAP_POSITIVE_X;t<=o.No.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}},{key:"setData",value:function(e){this._setData(e)}},{key:"_setData",value:function(t,_){var E,r,T=this;if(this._context&&this._context.gl){var i=this._context.gl;this._glName||(this._glName=i.createTexture()),void 0===t&&(t=null);var A=this._descriptor,N=null!==_&&void 0!==_?_:A.target,I=s(N);null===t&&(A.width=A.width||4,A.height=A.height||4,I&&(A.depth=null!==(E=A.depth)&&void 0!==E?E:1));var O=this._context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),e._validateTexture(this._context,A),this._configurePixelStorage(),(0,n.zu)(i);var M=A.pixelFormat,l=null!==(r=A.internalFormat)&&void 0!==r?r:this._deriveInternalFormat(M,A.dataType);if(S(t)){var D=t.width,c=t.height;t instanceof HTMLVideoElement&&(D=t.videoWidth,c=t.videoHeight),A.width&&A.height,I&&A.depth,A.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(N,l,A.hasMipmap,D,c,1),this._texImage(N,0,l,D,c,1,t),(0,n.zu)(i),A.hasMipmap&&this.generateMipmap(),void 0===A.width&&(A.width=D),void 0===A.height&&(A.height=c),I&&void 0===A.depth&&(A.depth=1)}else{var L=A.width,P=A.height,h=A.depth;if(null==L||null==P)throw new Error("Width and height must be specified!");if(I&&null==h)throw new Error("Depth must be specified!");if(A.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(N,l,A.hasMipmap,L,P,h),i.DEPTH24_STENCIL8&&l===i.DEPTH_STENCIL&&(l=i.DEPTH24_STENCIL8),u(t)){var U=t.levels,d=C(N,L,P,h),p=Math.min(d-1,U.length-1);(0,a.Z)(i)?i.texParameteri(A.target,i.TEXTURE_MAX_LEVEL,p):A.hasMipmap=A.hasMipmap&&d===U.length;var G=l;if(!function(e){return e in o.q_}(G))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel((function(e,t,_,E){var r=U[Math.min(e,U.length-1)];T._compressedTexImage(N,e,G,t,_,E,r)}),p)}else(0,R.pC)(t)?(this._texImage(N,0,l,L,P,h,t),(0,n.zu)(i),A.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel((function(e,t,_,E){T._texImage(N,e,l,t,_,E,null),(0,n.zu)(i)}))}e._applySamplingMode(i,this._descriptor),e._applyWrapMode(i,this._descriptor),e._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,n.zu)(i),this._context.bindTexture(O,e.TEXTURE_UNIT_FOR_UPDATES)}}},{key:"updateData",value:function(t,_,E,r,T,i){var R,n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;i||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var A=this._context.gl,o=this._descriptor,N=o.pixelFormat,I=o.dataType,s=o.target,C=o.isImmutable,O=null!==(R=o.internalFormat)&&void 0!==R?R:this._deriveInternalFormat(N,I);if(C&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");var M=this._context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES,!0);if((_<0||E<0||r>o.width||T>o.height||_+r>o.width||E+T>o.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),n){if(!(0,a.Z)(A))return void console.error("Webgl2 must be enabled to use dataRowOffset!");A.pixelStorei(A.UNPACK_SKIP_ROWS,n)}if(S(i)?(0,a.Z)(A)?A.texSubImage2D(s,t,_,E,r,T,N,I,i):A.texSubImage2D(s,t,_,E,N,I,i):u(i)?A.compressedTexSubImage2D(s,t,_,E,r,T,O,i.levels[t]):A.texSubImage2D(s,t,_,E,r,T,N,I,i),n){if(!(0,a.Z)(A))return void console.error("Webgl2 must be enabled to use dataRowOffset!");A.pixelStorei(A.UNPACK_SKIP_ROWS,0)}this._context.bindTexture(M,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"updateData3D",value:function(t,_,E,r,T,i,R,n){var A;n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var o=this._context.gl;if(!(0,a.Z)(o))throw new Error("3D textures are not supported in WebGL1");var N=this._descriptor,I=N.pixelFormat,S=N.dataType,C=N.isImmutable,O=N.target,M=null!==(A=N.internalFormat)&&void 0!==A?A:this._deriveInternalFormat(I,S);if(C&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");s(O)||console.warn("Attempting to set 3D texture data on a non-3D texture");var l=this._context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),(_<0||E<0||r<0||T>N.width||i>N.height||R>N.depth||_+T>N.width||E+i>N.height||r+R>N.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),u(n))n=n.levels[t],o.compressedTexSubImage3D(O,t,_,E,r,T,i,R,M,n);else{var D=n;o.texSubImage3D(O,t,_,E,r,T,i,R,I,S,D)}this._context.bindTexture(l,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"generateMipmap",value:function(){var t=this._descriptor;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,e._validateTexture(this._context,t)}t.samplingMode===o.cw.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=o.cw.LINEAR_MIPMAP_NEAREST):t.samplingMode===o.cw.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=o.cw.NEAREST_MIPMAP_NEAREST);var _=this._context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(t.target),this._context.bindTexture(_,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"setSamplingMode",value:function(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}},{key:"setWrapMode",value:function(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,e._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}},{key:"applyChanges",value:function(){var t=this._context.gl,_=this._descriptor;this._samplingModeDirty&&(e._applySamplingMode(t,_),this._samplingModeDirty=!1),this._wrapModeDirty&&(e._applyWrapMode(t,_),this._wrapModeDirty=!1)}},{key:"_deriveInternalFormat",value:function(e,t){if(this._context.type===A.zO.WEBGL1)return e;switch(t){case o.Br.FLOAT:switch(e){case o.VI.RGBA:return o.lP.RGBA32F;case o.VI.RGB:return o.lP.RGB32F;default:throw new Error("Unable to derive format")}case o.Br.UNSIGNED_BYTE:switch(e){case o.VI.RGBA:return o.lP.RGBA8;case o.VI.RGB:return o.lP.RGB8}default:return e}}},{key:"_configurePixelStorage",value:function(){var e=this._context.gl,t=this._descriptor,_=t.unpackAlignment,E=t.flipped,r=t.preMultiplyAlpha;e.pixelStorei(e.UNPACK_ALIGNMENT,_),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0)}},{key:"_texStorage",value:function(e,t,_,E,r,T){var i=this._context.gl;if(!(0,a.Z)(i))throw new Error("Immutable textures are not supported in WebGL1");if(!function(e){return e in o.lP}(t))throw new Error("Immutable textures must have a sized internal format");if(this._descriptor.isImmutable){var R=_?C(e,E,r,T):1;if(s(e)){if(null==T)throw new Error("Missing depth dimension for 3D texture upload");i.texStorage3D(e,R,t,E,r,T)}else i.texStorage2D(e,R,t,E,r);this._wasImmutablyAllocated=!0}}},{key:"_texImage",value:function(e,t,_,E,r,T,i){var n=this._context.gl,o=null,a=this._context.type===A.zO.WEBGL2,N=s(e),I=this._descriptor,u=I.isImmutable,C=I.pixelFormat,O=I.dataType;if(a&&(o=n),a||!S(i))if(u){if((0,R.pC)(i)){var M=i;if(N){if(null==T)throw new Error("Missing depth dimension for 3D texture upload");o.texSubImage3D(e,t,0,0,0,E,r,T,C,O,M)}else n.texSubImage2D(e,t,0,0,E,r,C,O,M)}}else{var l=(0,R.Wg)(i);if(N){if(null==T)throw new Error("Missing depth dimension for 3D texture upload");o.texImage3D(e,t,_,E,r,T,0,C,O,l)}else n.texImage2D(e,t,_,E,r,0,C,O,l)}else n.texImage2D(e,0,_,C,O,i)}},{key:"_compressedTexImage",value:function(e,t,_,E,r,T,i){var n=this._context.gl,o=null,a=s(e),N=this._descriptor.isImmutable;if(a){if(this._context.type!==A.zO.WEBGL2)throw new Error("3D textures are not supported in WebGL1");o=n}if(N){if((0,R.pC)(i))if(a){if(null==T)throw new Error("Missing depth dimension for 3D texture upload");o.compressedTexSubImage3D(e,t,0,0,0,E,r,T,_,i)}else n.compressedTexSubImage2D(e,t,0,0,E,r,_,i)}else if(a){if(null==T)throw new Error("Missing depth dimension for 3D texture upload");o.compressedTexImage3D(e,t,_,E,r,T,0,i)}else n.compressedTexImage2D(e,t,_,E,r,0,i)}},{key:"_forEachMipmapLevel",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,_=this._descriptor,E=_.width,r=_.height,T=_.depth,i=_.hasMipmap,R=_.target,n=R===o.No.TEXTURE_3D;if(null==E||null==r||n&&null==T)throw new Error("Missing texture dimensions for mipmap calculation");for(var A=0;e(A,E,r,T),i&&(1!==E||1!==r||n&&1!==T)&&!(A>=t);++A)E=Math.max(1,E>>1),r=Math.max(1,r>>1),n&&(T=Math.max(1,T>>1))}}],[{key:"_validateTexture",value:function(e,t){(null!=t.width&&t.width<0||null!=t.height&&t.height<0||null!=t.depth&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!");var _=(0,a.Z)(e.gl),E=null!=t.width&&(0,i.wt)(t.width)&&null!=t.height&&(0,i.wt)(t.height);_||!t.isImmutable&&!s(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),_||E||("number"==typeof t.wrapMode?t.wrapMode!==o.e8.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===o.e8.CLAMP_TO_EDGE&&t.wrapMode.t===o.e8.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}},{key:"_applySamplingMode",value:function(e,t){var _=t.samplingMode,E=t.samplingMode;_===o.cw.LINEAR_MIPMAP_NEAREST||_===o.cw.LINEAR_MIPMAP_LINEAR?(_=o.cw.LINEAR,t.hasMipmap||(E=o.cw.LINEAR)):_!==o.cw.NEAREST_MIPMAP_NEAREST&&_!==o.cw.NEAREST_MIPMAP_LINEAR||(_=o.cw.NEAREST,t.hasMipmap||(E=o.cw.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,_),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,E)}},{key:"_applyWrapMode",value:function(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}},{key:"_applyAnisotropicFilteringParameters",value:function(e,t){var _,E=e.capabilities.textureFilterAnisotropic;E&&e.gl.texParameterf(t.target,E.TEXTURE_MAX_ANISOTROPY,null!==(_=t.maxAnisotropy)&&void 0!==_?_:1)}}]),e}();function u(e){return(0,R.pC)(e)&&"type"in e&&"compressed"===e.type}function S(e){return(0,R.pC)(e)&&!u(e)&&!function(e){return(0,R.pC)(e)&&"byteLength"in e}(e)}function s(e){return e===o.No.TEXTURE_3D||e===o.No.TEXTURE_2D_ARRAY}function C(e,t,_){var E=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=Math.max(t,_);return e===o.No.TEXTURE_3D&&(r=Math.max(r,E)),Math.round(Math.log(r)/Math.LN2)+1}I.TEXTURE_UNIT_FOR_UPDATES=0},30308:function(e,t,_){function E(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}_.d(t,{Z:function(){return E}})},37825:function(e,t,_){_.d(t,{CG:function(){return n},hZ:function(){return R},zu:function(){return A}});var E=_(10064),r=_(93169),T=_(32718).Z.getLogger("esri.views.webgl.checkWebGLError");var i=!!(0,r.Z)("enable-feature:webgl-debug");function R(){return i}function n(){return i}function A(e){if(R()){var t=e.getError();if(t){var _=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),r=(new Error).stack;T.error(new E.Z("webgl-error","WebGL error occured",{message:_,stack:r}))}}}},8548:function(e,t,_){var E,r,T,i,R,n,A,o,a,N,I,u,S,s,C,O,M,l,D,c,L,P;_.d(t,{Br:function(){return O},Ho:function(){return D},LR:function(){return n},Ld:function(){return d},Lm:function(){return L},Lu:function(){return x},MX:function(){return r},No:function(){return S},OU:function(){return P},Se:function(){return G},Tg:function(){return M},V7:function(){return F},VI:function(){return s},VY:function(){return U},Wf:function(){return A},Y5:function(){return B},_g:function(){return h},cw:function(){return I},db:function(){return i},e8:function(){return u},g:function(){return o},l1:function(){return l},lP:function(){return C},lk:function(){return E},q_:function(){return p},qi:function(){return c},w0:function(){return R},wb:function(){return a},xS:function(){return N},zi:function(){return T}}),function(e){e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(E||(E={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(r||(r={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(T||(T={})),function(e){e[e.ADD=32774]="ADD",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(i||(i={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(R||(R={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(n||(n={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(A||(A={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT"}(o||(o={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(a||(a={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(N||(N={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(I||(I={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(u||(u={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(S||(S={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(s||(s={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(C||(C={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(O||(O={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(M||(M={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(l||(l={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(D||(D={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(c||(c={})),function(e){e[e.TEXTURE=0]="TEXTURE",e[e.RENDER_BUFFER=1]="RENDER_BUFFER",e[e.CUBEMAP=2]="CUBEMAP"}(L||(L={})),function(e){e[e.NONE=0]="NONE",e[e.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",e[e.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(P||(P={}));var h,U,d=33984;!function(e){e[e.Texture=0]="Texture",e[e.BufferObject=1]="BufferObject",e[e.VertexArrayObject=2]="VertexArrayObject",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.FramebufferObject=5]="FramebufferObject",e[e.Renderbuffer=6]="Renderbuffer",e[e.Sync=7]="Sync",e[e.COUNT=8]="COUNT"}(h||(h={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(U||(U={}));var p,G,f,m,B,F,g,x=33306;!function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(p||(p={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(G||(G={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(f||(f={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(m||(m={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}(B||(B={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(F||(F={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(g||(g={}))}}]);
//# sourceMappingURL=1378.cd33cf0d.chunk.js.map