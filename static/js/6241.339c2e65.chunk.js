"use strict";(self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD=self.webpackChunkData_Design_AI_for_Urban_Data_and_Viz_Harvard_GSD||[]).push([[6241],{46241:function(t,n,e){e.r(n),e.d(n,{l:function(){return a}});var r,i,o,u={exports:{}};r=u,i="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(i=i||__filename),o=function(t){var n,e;(t=void 0!==(t=t||{})?t:{}).ready=new Promise((function(t,r){n=t,e=r}));var r,o,u,a,s,c,f=Object.assign({},t),p="object"==typeof window,l="function"==typeof importScripts,h="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,d="";h?(d=l?require("path").dirname(d)+"/":__dirname+"/",c=function(){s||(a=require("fs"),s=require("path"))},r=function(t,n){return c(),t=s.normalize(t),a.readFileSync(t,n?void 0:"utf8")},u=function(t){var n=r(t,!0);return n.buffer||(n=new Uint8Array(n)),n},o=function(t,n,e){c(),t=s.normalize(t),a.readFile(t,(function(t,r){t?e(t):n(r.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof K))throw t})),process.on("unhandledRejection",(function(t){throw t})),t.inspect=function(){return"[Emscripten Module object]"}):(p||l)&&(l?d=self.location.href:"undefined"!=typeof document&&document.currentScript&&(d=document.currentScript.src),i&&(d=i),d=0!==d.indexOf("blob:")?d.substr(0,d.replace(/[?#].*/,"").lastIndexOf("/")+1):"",r=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(null),n.responseText},l&&(u=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),o=function(t,n,e){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?n(r.response):e()},r.onerror=e,r.send(null)}),t.print||console.log.bind(console);var _,m,y=t.printErr||console.warn.bind(console);Object.assign(t,f),f=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&t.quit,t.wasmBinary&&(_=t.wasmBinary),t.noExitRuntime,"object"!=typeof WebAssembly&&O("no native wasm support detected");var g,v,b,w,A,R,S=!1,x="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function I(t,n){return t?function(t,n,e){for(var r=n+e,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.buffer&&x)return x.decode(t.subarray(n,i));for(var o="";n<i;){var u=t[n++];if(128&u){var a=63&t[n++];if(192!=(224&u)){var s=63&t[n++];if((u=224==(240&u)?(15&u)<<12|a<<6|s:(7&u)<<18|a<<12|s<<6|63&t[n++])<65536)o+=String.fromCharCode(u);else{var c=u-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&u)<<6|a)}else o+=String.fromCharCode(u)}return o}(b,t,n):""}function P(n){g=n,t.HEAP8=v=new Int8Array(n),t.HEAP16=new Int16Array(n),t.HEAP32=w=new Int32Array(n),t.HEAPU8=b=new Uint8Array(n),t.HEAPU16=new Uint16Array(n),t.HEAPU32=A=new Uint32Array(n),t.HEAPF32=new Float32Array(n),t.HEAPF64=new Float64Array(n)}t.INITIAL_MEMORY;var D=[],E=[],j=[];function H(t){D.unshift(t)}function T(t){j.unshift(t)}var U=0,M=null;function O(n){t.onAbort&&t.onAbort(n),y(n="Aborted("+n+")"),S=!0,n+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(n);throw e(r),r}var W;function k(t){return t.startsWith("data:application/octet-stream;base64,")}function C(t){return t.startsWith("file://")}function q(t){try{if(t==W&&_)return new Uint8Array(_);if(u)return u(t);throw"both async and sync fetching of the wasm failed"}catch(y){O(y)}}function F(){if(!_&&(p||l)){if("function"==typeof fetch&&!C(W))return fetch(W,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+W+"'";return t.arrayBuffer()})).catch((function(){return q(W)}));if(o)return new Promise((function(t,n){o(W,(function(n){t(new Uint8Array(n))}),n)}))}return Promise.resolve().then((function(){return q(W)}))}function z(n){for(;n.length>0;){var e=n.shift();if("function"!=typeof e){var r=e.func;"number"==typeof r?void 0===e.arg?G(r)():G(r)(e.arg):r(void 0===e.arg?null:e.arg)}else e(t)}}k(W="lerc-wasm.wasm")||(W=function(n){return t.locateFile?t.locateFile(n,d):d+n}(W));var B=[];function G(t){var n=B[t];return n||(t>=B.length&&(B.length=t+1),B[t]=n=R.get(t)),n}function L(t){this.excPtr=t,this.ptr=t-24,this.set_type=function(t){A[this.ptr+4>>2]=t},this.get_type=function(){return A[this.ptr+4>>2]},this.set_destructor=function(t){A[this.ptr+8>>2]=t},this.get_destructor=function(){return A[this.ptr+8>>2]},this.set_refcount=function(t){w[this.ptr>>2]=t},this.set_caught=function(t){t=t?1:0,v[this.ptr+12>>0]=t},this.get_caught=function(){return 0!=v[this.ptr+12>>0]},this.set_rethrown=function(t){t=t?1:0,v[this.ptr+13>>0]=t},this.get_rethrown=function(){return 0!=v[this.ptr+13>>0]},this.init=function(t,n){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(n),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var t=w[this.ptr>>2];w[this.ptr>>2]=t+1},this.release_ref=function(){var t=w[this.ptr>>2];return w[this.ptr>>2]=t-1,1===t},this.set_adjusted_ptr=function(t){A[this.ptr+16>>2]=t},this.get_adjusted_ptr=function(){return A[this.ptr+16>>2]},this.get_exception_ptr=function(){if(J(this.get_type()))return A[this.excPtr>>2];var t=this.get_adjusted_ptr();return 0!==t?t:this.excPtr}}function X(t){try{return m.grow(t-g.byteLength+65535>>>16),P(m.buffer),1}catch(n){}}var N={a:function(t,n,e,r){O("Assertion failed: "+I(t)+", at: "+[n?I(n):"unknown filename",e,r?I(r):"unknown function"])},c:function(t){return V(t+24)+24},b:function(t,n,e){throw new L(t).init(n,e),t},d:function(){O("")},f:function(t,n,e){b.copyWithin(t,n,n+e)},e:function(t){var n=b.length,e=2147483648;if((t>>>=0)>e)return!1;for(var r=function(t,n){return t+(n-t%n)%n},i=1;i<=4;i*=2){var o=n*(1+.2/i);if(o=Math.min(o,t+100663296),X(Math.min(e,r(Math.max(t,o),65536))))return!0}return!1}};(function(){var n={a:N};function r(n,e){var r=n.exports;t.asm=r,P((m=t.asm.g).buffer),R=t.asm.m,function(t){E.unshift(t)}(t.asm.h),function(n){if(U--,t.monitorRunDependencies&&t.monitorRunDependencies(U),0==U&&M){var e=M;M=null,e()}}()}function i(t){r(t.instance)}function o(t){return F().then((function(t){return WebAssembly.instantiate(t,n)})).then((function(t){return t})).then(t,(function(t){y("failed to asynchronously prepare wasm: "+t),O(t)}))}if(U++,t.monitorRunDependencies&&t.monitorRunDependencies(U),t.instantiateWasm)try{return t.instantiateWasm(n,r)}catch(a){return y("Module.instantiateWasm callback failed with error: "+a),!1}(_||"function"!=typeof WebAssembly.instantiateStreaming||k(W)||C(W)||h||"function"!=typeof fetch?o(i):fetch(W,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(i,(function(t){return y("wasm streaming compile failed: "+t),y("falling back to ArrayBuffer instantiation"),o(i)}))}))).catch(e)})(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.h).apply(null,arguments)},t._lerc_getBlobInfo=function(){return(t._lerc_getBlobInfo=t.asm.i).apply(null,arguments)},t._lerc_getDataRanges=function(){return(t._lerc_getDataRanges=t.asm.j).apply(null,arguments)},t._lerc_decode=function(){return(t._lerc_decode=t.asm.k).apply(null,arguments)},t._lerc_decode_4D=function(){return(t._lerc_decode_4D=t.asm.l).apply(null,arguments)};var V=t._malloc=function(){return(V=t._malloc=t.asm.n).apply(null,arguments)};t._free=function(){return(t._free=t.asm.o).apply(null,arguments)};var Y,J=t.___cxa_is_pointer_type=function(){return(J=t.___cxa_is_pointer_type=t.asm.p).apply(null,arguments)};function K(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function Q(e){function r(){Y||(Y=!0,t.calledRun=!0,S||(z(E),n(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),function(){if(t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;)T(t.postRun.shift());z(j)}()))}U>0||(function(){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)H(t.preRun.shift());z(D)}(),U>0||(t.setStatus?(t.setStatus("Running..."),setTimeout((function(){setTimeout((function(){t.setStatus("")}),1),r()}),1)):r()))}if(M=function t(){Y||Q(),Y||(M=t)},t.run=Q,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return Q(),t.ready},r.exports=o;var a=function(t,n){for(var e=function(){var e=n[r];if("string"!=typeof e&&!Array.isArray(e)){var i=function(n){if("default"!==n&&!(n in t)){var r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}};for(var o in e)i(o)}},r=0;r<n.length;r++)e();return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:u.exports},[u.exports])}}]);
//# sourceMappingURL=6241.339c2e65.chunk.js.map