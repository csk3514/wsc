(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(199)},105:function(e,t,a){},115:function(e,t){},117:function(e,t){},199:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(50),s=a.n(i),c=(a(105),a(32)),l=a(33),o=a(36),u=a(34),m=a(37),p=a(99),h=a.n(p),f=a(14),d=a.n(f),g=a(13),b=a.n(g),y=a(52),w=a.n(y),E=a(94),v=(a(181),function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{style:{marginTop:"20px"}},r.a.createElement(d.a,{className:"justify-content-md-center"},r.a.createElement(b.a,{lg:10},r.a.createElement(w.a,{bg:"light",expand:"lg",style:{marginBottom:"20px"}},r.a.createElement(w.a.Brand,null,"WhatsApp Stickers Converter")))),r.a.createElement(d.a,{className:"justify-content-md-center"},r.a.createElement(b.a,{lg:10},r.a.createElement(E.a,null))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},26:function(e,t,a){"use strict";a.d(t,"a",function(){return u}),a.d(t,"b",function(){return h}),a.d(t,"c",function(){return d});var n=a(10),r=a.n(n),i=a(15),s=a(111),c=a(112),l={};function o(e,t){return new Promise(function(a,n){if(null==e)return n();var r=document.createElement("canvas"),i=r.getContext("2d"),s=new Image;s.addEventListener("load",function(){r.width=s.width,r.height=s.height,i.drawImage(s,0,0,r.width,r.height);var e=i.getImageData(0,0,r.width,r.height);a(function(e,t){var a=l.create_buffer(e.width,e.height);Module.HEAP8.set(e.data,a),l.encode(a,e.width,e.height,t);var n=l.get_result_pointer(),r=l.get_result_size(),i=new Uint8Array(Module.HEAP8.buffer,n,r),s=new Uint8Array(i);return l.free_result(n),l.destroy_buffer(a),btoa(s.reduce(function(e,t){return e+String.fromCharCode(t)},""))}(e,Math.ceil(100*t)))},!1),s.src=e})}function u(e,t){return new Promise(function(a,n){if(null==e)return n();var r=document.createElement("canvas"),i=r.getContext("2d"),s=new Image;s.addEventListener("load",function(){r.width=s.width,r.height=s.height,i.drawImage(s,0,0,r.width,r.height),i.save(),i.beginPath(),i.arc(r.width-0-16,r.height-0-16,16,0,2*Math.PI),i.fillStyle="rgba(53, 67, 90, 0.85)",i.fill(),i.restore(),i.font="30px helvetica",i.textAlign="center",i.fillStyle="#f7f7f7",i.lineWidth=2,i.fillText("".concat(t),r.width-0-16,r.height-0-6),a(r.toDataURL("image/png"))},!1),s.src=e})}function m(e,t,a){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(r.a.mark(function e(t,a,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.read(t).then(function(e){return n?e.contain(a,a).getBase64Async(s.MIME_PNG).then(function(e){return o(e,1).then(function(){var t=Object(i.a)(r.a.mark(function t(a){var n,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=a,i=1;case 2:if(!(btoa(n).length>99999&&i>.2)){t.next=10;break}return i-=.08,console.error("WebP size ".concat(Math.ceil(btoa(n).length/1024),"kb exceeded 100kb, resizing with quality ").concat(i)),t.next=7,o(e,i);case 7:n=t.sent,t.next=2;break;case 10:return t.abrupt("return",n);case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}):e.contain(a,a).getBase64Async(s.MIME_PNG)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function h(e,t){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(r.a.mark(function e(t,a){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){var s=new FileReader;s.onloadend=Object(i.a)(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"tray"!==a){t.next=9;break}return t.t0=e,t.next=5,m(s.result,96,!1);case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=15;break;case 9:if("stickers"!==a){t.next=15;break}return t.t2=e,t.next=13,m(s.result,512,!0);case 13:t.t3=t.sent,(0,t.t2)(t.t3);case 15:t.next=20;break;case 17:t.prev=17,t.t4=t.catch(0),n(t.t4);case 20:case"end":return t.stop()}},t,this,[[0,17]])})),s.readAsArrayBuffer(t)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.loadAsync(t).then(function(){var e=Object(i.a)(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],t.forEach(function(e,t){e.startsWith("__MACOSX")||!e.endsWith(".png")&&!e.endsWith(".jpg")||a.push(e)}),!(a.length<3)){e.next=4;break}throw new Error("Less than 3 images are found!");case 4:return e.next=6,t.file(a[0]).async("blob");case 6:return e.t0=e.sent,e.next=9,Promise.all(a.map(function(e){return t.file(e).async("blob")}));case 9:return e.t1=e.sent,e.abrupt("return",{trayFile:e.t0,stickersFiles:e.t1});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}Module.onRuntimeInitialized=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l={version:Module.cwrap("version","number",[]),create_buffer:Module.cwrap("create_buffer","number",["number","number"]),destroy_buffer:Module.cwrap("destroy_buffer","",["number"]),encode:Module.cwrap("encode","",["number","number","number","number"]),free_result:Module.cwrap("free_result","",["number"]),get_result_pointer:Module.cwrap("get_result_pointer","number",[]),get_result_size:Module.cwrap("get_result_size","number",[])},console.log("libwebp loaded, api version: ".concat(l.version()));case 2:case"end":return e.stop()}},e,this)}))},94:function(e,t,a){"use strict";(function(e){var n=a(95),r=a(10),i=a.n(r),s=a(38),c=a(15),l=a(32),o=a(33),u=a(36),m=a(34),p=a(37),h=a(0),f=a.n(h),d=a(5),g=a.n(d),b=a(14),y=a.n(b),w=a(13),E=a.n(w),v=a(51),k=a.n(v),x=a(98),F=a.n(x),C=a(97),j=a.n(C),I=a(35),S=a.n(I),_=a(96),O=a.n(_),M=a(26),z=a(163),N=function(t){function a(t){var r;return Object(l.a)(this,a),(r=Object(u.a)(this,Object(m.a)(a).call(this,t))).handleSubmit=function(t){t.preventDefault(),r.setState({progress:0,errorMsg:"",isSubmitting:!0,downloadUrls:[]});var a=r.state,n=a.identifier,l=a.name,o=a.publisher,u=a.zipFile,m=a.uploadType,p=r.state,h=p.trayFile,f=p.stickersFiles;Object(c.a)(i.a.mark(function t(){var a,c,p,d,g,b,y,w;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("zip"!==m){t.next=6;break}return t.next=3,Object(M.c)(u);case 3:a=t.sent,h=a.trayFile,f=a.stickersFiles;case 6:return t.next=8,Object(M.b)(h,"tray");case 8:c=t.sent,p=[],d=Math.ceil(f.length/30),g=[],b=0;case 13:if(!(b<d)){t.next=28;break}if(p.push([]),t.t0=g,1!==d){t.next=20;break}t.t1=c,t.next=23;break;case 20:return t.next=22,Object(M.a)(c,"".concat(b+1));case 22:t.t1=t.sent;case 23:t.t2=t.t1,t.t0.push.call(t.t0,t.t2);case 25:b++,t.next=13;break;case 28:y=0;case 29:if(!(y<f.length)){t.next=38;break}return t.next=32,Object(M.b)(f[y],"stickers");case 32:w=t.sent,r.setState({progress:(y+1)/f.length*100}),p[Math.floor(y/30)].push(w);case 35:y++,t.next=29;break;case 38:d>1&&p[d-1].length<3&&(p[d-1]=Object(s.a)(p[d-2].splice(-(3-p[d-1].length))).concat(Object(s.a)(p[d-1]))),p.map(function(e,t){return{identifier:n+(0===t?"":"_".concat(t+1)),name:l+(0===t?"":" (".concat(t+1,")")),publisher:o,tray_image:g[t].replace("data:image/png;base64,",""),stickers:e.map(function(e){return{image_data:e.replace("data:image/webp;base64,","")}})}}).forEach(function(t){var a="data:application/json;base64,".concat(e.from(JSON.stringify(t)).toString("base64"));z(a,"".concat(t.identifier,".json"),"application/json"),r.setState(function(e){return{downloadUrls:Object(s.a)(e.downloadUrls).concat([new Blob([JSON.stringify(t)],{type:"application/json"})])}})}),r.setState({isSubmitting:!1});case 41:case"end":return t.stop()}},t,this)}))().catch(function(e){console.error(e),r.setState({errorMsg:e.message||t.toString(),isSubmitting:!1})})},r.handleFileChange=function(e,t){e.preventDefault(),"tray"===t?r.setState({trayFile:e.target.files[0]}):"stickers"===t?r.setState({stickersFiles:e.target.files}):"zip"===t&&r.setState({zipFile:e.target.files[0]})},r.handleInputChange=function(e){r.setState(Object(n.a)({},e.target.id,e.target.value))},r.isFormValid=function(){return r.isIdentifierValid()&&r.state.identifier&&r.state.name&&r.state.publisher&&("image"===r.state.uploadType&&null!=r.state.trayFile&&r.state.stickersFiles&&r.state.stickersFiles.length>=3||"zip"===r.state.uploadType&&null!=r.state.zipFile)},r.isSubmittable=function(){return r.isFormValid()&&!r.state.isSubmitting},r.isIdentifierValid=function(){return/^[A-Za-z0-9-_.\s]*$/.test(r.state.identifier)},r.state={identifier:"",name:"",publisher:"",trayFile:null,stickersFiles:null,zipFile:null,isSubmitting:!1,progress:0,errorMsg:"",downloadUrls:[],uploadType:"image"},r}return Object(p.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){var e=this;return f.a.createElement(g.a,{onSubmit:function(t){return e.handleSubmit(t)}},f.a.createElement(g.a.Group,{as:y.a,controlId:"identifier"},f.a.createElement(g.a.Label,{column:!0,sm:4},"Identifier"),f.a.createElement(E.a,{sm:6},f.a.createElement(g.a.Control,{type:"text",required:!0,onChange:this.handleInputChange,isInvalid:!this.isIdentifierValid()}),f.a.createElement(g.a.Control.Feedback,{type:"invalid"},'Alphanumeric characters with ".", "_", "-" or " " only '))),f.a.createElement(g.a.Group,{as:y.a,controlId:"name"},f.a.createElement(g.a.Label,{column:!0,sm:4},"Pack Name"),f.a.createElement(E.a,{sm:6},f.a.createElement(g.a.Control,{type:"text",required:!0,onChange:this.handleInputChange}))),f.a.createElement(g.a.Group,{as:y.a,controlId:"publisher"},f.a.createElement(g.a.Label,{column:!0,sm:4},"Publisher"),f.a.createElement(E.a,{sm:6},f.a.createElement(g.a.Control,{type:"text",required:!0,onChange:this.handleInputChange}))),f.a.createElement(g.a.Group,{as:y.a,controlId:"uploadType"},f.a.createElement(g.a.Label,{column:!0,sm:4},"Upload Type"),f.a.createElement(E.a,{sm:8},f.a.createElement(O.a,null,f.a.createElement(j.a,{type:"radio",name:"options",value:this.state.uploadType,onChange:function(t){return e.handleInputChange({target:{id:"uploadType",value:t}})}},f.a.createElement(S.a,{value:"image"},"Image Files"),f.a.createElement(S.a,{value:"zip"},"Zip File"))))),"image"===this.state.uploadType?f.a.createElement("div",null,f.a.createElement(g.a.Group,{as:y.a,controlId:"formTrayFile"},f.a.createElement(g.a.Label,{column:!0,sm:4},"Tray Icon"),f.a.createElement(E.a,{sm:8},f.a.createElement("div",{className:"custom-file"},f.a.createElement(g.a.Control,{className:"custom-file-input",type:"file",required:!0,isValid:!1,onChange:function(t){return e.handleFileChange(t,"tray")},accept:"image/png, image/jpeg"}),f.a.createElement(g.a.Label,{className:"custom-file-label"},this.state.trayFile?this.state.trayFile.name:"Choose file (any resolution)")))),f.a.createElement(g.a.Group,{as:y.a,controlId:"formStickersFiles"},f.a.createElement(g.a.Label,{column:!0,sm:4},"Stickers (3 or more images)"),f.a.createElement(E.a,{sm:8},f.a.createElement("div",{className:"custom-file"},f.a.createElement(g.a.Control,{className:"custom-file-input",type:"file",required:!0,multiple:!0,onChange:function(t){return e.handleFileChange(t,"stickers")},accept:"image/png"}),f.a.createElement(g.a.Label,{className:"custom-file-label"},this.state.stickersFiles&&this.state.stickersFiles.length>0?"".concat(this.state.stickersFiles.length," file(s) selected"):"Choose file (any resolution)"))))):"zip"===this.state.uploadType?f.a.createElement(g.a.Group,{as:y.a,controlId:"formZipFile"},f.a.createElement(g.a.Label,{column:!0,sm:4},"Zip file"),f.a.createElement(E.a,{sm:8},f.a.createElement("div",{className:"custom-file"},f.a.createElement(g.a.Control,{className:"custom-file-input",type:"file",required:!0,multiple:!0,onChange:function(t){return e.handleFileChange(t,"zip")},accept:".zip"}),f.a.createElement(g.a.Label,{className:"custom-file-label"},this.state.zipFile?this.state.zipFile.name:"Choose file")))):null,f.a.createElement(k.a,{type:"submit",disabled:!this.isSubmittable()},"Convert Images"),f.a.createElement(F.a,{style:{transition:"none",marginTop:"15px"},now:this.state.progress,hidden:!this.state.isSubmitting&&!this.state.errorMsg,variant:this.state.errorMsg?"danger":""}),f.a.createElement("p",{className:this.state.errorMsg?"text-danger":"text-success",hidden:!this.state.errorMsg&&100!==this.state.progress},this.state.errorMsg||"Images converted!"))}}]),a}(f.a.Component);t.a=N}).call(this,a(20).Buffer)}},[[100,2,1]]]);
//# sourceMappingURL=main.50e1b5fd.chunk.js.map