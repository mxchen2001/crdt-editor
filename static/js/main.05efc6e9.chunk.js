(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,t,n){},138:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(20),l=n.n(a),r=n(83),o=n(39),i=n(16),u=n(4),j=n(77),d=n(6),b=n(10),h=n.n(b),g=(n(132),n(49));function f(e,t,n){function c(e,t,n){for(var c=new Map,s=t;s<=n;s++){var a=e[s];c.has(a)?(c.get(a).count++,c.get(a).index=s):c.set(a,{count:1,index:s})}return c.forEach((function(e,t,n){1!==e.count?n.delete(t):n.set(t,e.index)})),c}function s(e,t,n,s,a,l){var r=c(e,t,n),o=c(s,a,l);return r.forEach((function(e,t,n){o.has(t)?n.set(t,{indexA:e,indexB:o.get(t)}):n.delete(t)})),r}var a=[],l=0,r=0,o=[],i=[],u=[],j=[];function d(n,c){c<0?(o.push(e[n]),i.push(a.length),l++):n<0&&(u.push(t[c]),j.push(a.length),r++),a.push({line:0<=n?e[n]:t[c],aIndex:n,bIndex:c})}function b(n,c,a,l){for(;n<=c&&a<=l&&e[n]===t[a];)d(n++,a++);for(var r=c;n<=c&&a<=l&&e[c]===t[l];)c--,l--;var o=s(e,n,c,t,a,l);if(0===o.size){for(;n<=c;)d(n++,-1);for(;a<=l;)d(-1,a++)}else h(n,c,a,l,o);for(;c<r;)d(++c,++l)}function h(n,c,a,l,r){var o=function(e){var t=[];e.forEach((function(e,n,c){for(var s=0;t[s]&&t[s][t[s].length-1].indexB<e.indexB;)s++;t[s]||(t[s]=[]),0<s&&(e.prev=t[s-1][t[s-1].length-1]),t[s].push(e)}));var n=[];if(0<t.length){var c=t.length-1;for(n=[t[c][t[c].length-1]];n[n.length-1].prev;)n.push(n[n.length-1].prev)}return n.reverse()}(r||s(e,n,c,t,a,l));if(0===o.length)b(n,c,a,l);else{var i;for((n<o[0].indexA||a<o[0].indexB)&&b(n,o[0].indexA-1,a,o[0].indexB-1),i=0;i<o.length-1;i++)b(o[i].indexA,o[i+1].indexA-1,o[i].indexB,o[i+1].indexB-1);(o[i].indexA<=c||o[i].indexB<=l)&&b(o[i].indexA,c,o[i].indexB,l)}}return h(0,e.length-1,0,t.length-1),n?{lines:a,lineCountDeleted:l,lineCountInserted:r,lineCountMoved:0,aMove:o,aMoveIndex:i,bMove:u,bMoveIndex:j}:{lines:a,lineCountDeleted:l,lineCountInserted:r,lineCountMoved:0}}var x=n(2),O=Object(c.createContext)();var p=function(e){var t=Object(c.useState)("javascript"),n=Object(u.a)(t,2),s=n[0],a=n[1],l=Object(c.useState)(!0),r=Object(u.a)(l,2),o=r[0],i=r[1],j=Object(c.useState)(!1),d=Object(u.a)(j,2),b=d[0],h=d[1];return Object(x.jsx)(O.Provider,{value:{language:s,setLanguage:a,dark:o,setDark:i,status:b,setStatus:h},children:e.children})};function v(e){var t=Object(d.g)().id,n=Object(c.useState)(),s=Object(u.a)(n,2),a=s[0],l=s[1],b=Object(c.useState)(),p=Object(u.a)(b,2),v=p[0],m=p[1],y=Object(c.useState)(),S=Object(u.a)(y,2),N=S[0],C=S[1],k=Object(c.useState)(""),w=Object(u.a)(k,2),M=w[0],I=w[1],E=Object(c.useState)({}),D=Object(u.a)(E,2),A=D[0],B=D[1],J=Object(c.useState)({lineNumber:1,column:1}),q=Object(u.a)(J,2),P=q[0],z=q[1],L=Object(c.useState)({}),T=Object(u.a)(L,2),U=T[0],F=T[1],V=Object(c.useState)(null),H=Object(u.a)(V,2),R=H[0],G=H[1],K=Object(c.useState)(null),Q=Object(u.a)(K,2),W=(Q[0],Q[1]),X=Object(c.useContext)(O),Y=X.language,Z=X.setLanguage,$=X.status,_=X.setStatus;return Object(c.useEffect)((function(){var e=Object(j.io)("http://localhost:3001/");l(e);var n=h.a.change(h.a.init(),(function(e){e.text=new h.a.Text}));return m(n),B(h.a.initSyncState()),e.emit("get-document",t),function(){_(!1),e.disconnect()}}),[]),Object(c.useEffect)((function(){if(null!=a&&null!=N){var e=function(e){_(!0);var t=N.getPosition(),n=t.lineNumber,c=t.column;z({lineNumber:n,column:c});!function(e,t,n){e.split("\n").slice(0,t).join("\n").length}(M,n-1,c-1);var s=JSON.parse(e),a=s.state,l=s.changes,r=s.messages,j=s.language,d=s.cursorData;if(null!=d&&F((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},d.id,d.position))})),null!=j&&Y!==j&&Z(j),null!=a&&null!=l&&null!=r){var b=JSON.parse(l).map((function(e){return new Uint8Array(Object.values(e).map((function(e){return e})))})),g=JSON.parse(r),f=Object.values(g).map((function(e){return e})),x=h.a.receiveSyncMessage(v,a,new Uint8Array(f)),O=Object(u.a)(x,2),p=O[0],y=O[1],S=h.a.applyChanges(p,b),C=Object(u.a)(S,1)[0],k=C.text.toString();m(h.a.clone(C)),I(k),B(y)}};return a.on("receive-changes",e),function(){a.off("receive-changes",e)}}}),[a,v,N]),Object(c.useEffect)((function(){if(null!=a&&null!=N){var t=function(){_(!0);var t=setTimeout((function(){try{var t=h.a.getChanges(h.a.init(),h.a.clone(v)),n=h.a.generateSyncMessage(v,A),c=Object(u.a)(n,2),s=c[0],l=c[1],r={state:s,messages:JSON.stringify(l),changes:JSON.stringify(t),language:e.language,cursorData:{id:a.id,position:N.getPosition()}};G(r)}catch(o){_(!1)}}),2e3);return function(){return clearTimeout(t)}};return a.on("synchronize-editor",t),function(){a.off("synchronize-editor",t)}}}),[a,v]),Object(c.useEffect)((function(){null!=a&&null!=N&&G({state:null,messages:null,changes:null,language:Y})}),[Y]),Object(c.useEffect)((function(){if(null!=R&&null!=a){var e=setInterval((function(){a.emit("send-changes",JSON.stringify(R),t),G(null)}),250);return function(){clearInterval(e)}}}),[R]),Object(c.useEffect)((function(){if(null!=a&&null!=N){var e=N.getModel();null!=e&&e.getValue()!=M&&(N.executeEdits("",[{forceMoveMarkers:!1,range:e.getFullModelRange(),text:M}],(function(){return null})),N.setPosition(P))}}),[M]),Object(c.useEffect)((function(){null!=a&&null!=N&&N.onDidChangeCursorPosition((function(e){console.log(e);var t=e.position,n=e.reason,c=e.source;if("modelChange"!==c&&"api"!==c&&("keyboard"===c||"mouse"===c)&&3===n){z(t);var s={state:null,messages:null,changes:null,language:null,cursorData:{id:a.id,position:t}};G(s)}}))}),[N]),Object(c.useEffect)((function(){null!=a&&null!=N&&N.getModel().setValue(N.getModel().getValue())}),[U]),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(g.a,{height:"calc(100vh - 63px)",theme:e.theme,language:Y,onMount:function(e,t){C(e),W(t)},onChange:function(t,n){if(t!==v.text.toString()&&t!==M){var c=function(e,t){var n=f(e.split(""),t.split(""),!1),c=[],s=0,a=0,l=0;n.lines.forEach((function(e,t){if(e.aIndex>=0&&e.bIndex>=0)return s++,a=0,l=0,void c.push({retain:s});if(e.aIndex>=0&&e.bIndex<=0&&(l++,a=0,s=0,c.push({delete:l})),e.aIndex<=0&&e.bIndex>=0){var n="";n=a>0&&t>0?c[t-1].insert+e.line:e.line,a++,l=0,s=0,c.push({insert:n})}}));var r=[];1==c.length&&r.push(c[0]);for(var o=0;o<c.length-1;o++){var i=o+1;Object.keys(c[i])[0]!==Object.keys(c[o])[0]&&r.push(c[o]),i==c.length-1&&r.push(c[i])}return r}(v.text.toString(),t),s=0;try{var l=h.a.change(v,"change",(function(e){e.text||(e.text=new h.a.Text);for(var t=0;t<c.length;t++)if(c[t].retain)s+=c[t].retain;else if(c[t].delete)e.text.deleteAt(s,c[t].delete);else if(c[t].insert){var n,a=c[t].insert.split("");(n=e.text).insertAt.apply(n,[s].concat(Object(r.a)(a))),s+=c[t].insert.length}})),o=h.a.getChanges(h.a.init(),h.a.clone(l)),i=h.a.generateSyncMessage(l,A),j=Object(u.a)(i,2),d=j[0],b=j[1],g={state:d,messages:JSON.stringify(b),changes:JSON.stringify(o),language:e.language,cursorData:{id:a.id,position:N.getPosition()}};G(g),m(l),B(d),I(t),$||_(!0)}catch(x){_(!1)}}}})})}n(138);var m=n(147),y=n(79),S=n(80),N=n.n(S),C=n(40),k=n(54),w=n(53),M=n(25),I=n(7),E=n(52),D=n(81),A={bat:Object(x.jsx)(M.f,{style:{color:"#61a5c1"}}),c:Object(x.jsx)(I.a,{style:{color:"#61a5c1"}}),cpp:Object(x.jsx)(I.c,{style:{color:"#6d94c7"}}),css:Object(x.jsx)(M.a,{style:{color:"#3570b0"}}),coffeescript:Object(x.jsx)(I.b,{style:{color:"hsl(223, 28%, 53%)"}}),csharp:Object(x.jsx)(I.d,{style:{color:"#4a9738"}}),dockerfile:Object(x.jsx)(I.e,{style:{color:"#4598c2"}}),fsharp:Object(x.jsx)(M.b,{style:{color:"#5ab0d0"}}),go:Object(x.jsx)(M.c,{}),graphql:Object(x.jsx)(E.a,{style:{color:"#c82a90"}}),html:Object(x.jsx)(w.b,{style:{color:"#d86b3a"}}),java:Object(x.jsx)(I.f,{style:{color:"#d23c35"}}),javascript:Object(x.jsx)(I.g,{style:{color:"#e5d565"}}),json:Object(x.jsx)(C.a,{style:{color:"#e5d565"}}),kotlin:Object(x.jsx)(I.h,{style:{color:"#7c77d2"}}),less:Object(x.jsx)(M.d,{}),lua:Object(x.jsx)(I.i,{style:{color:"\thsla(241, 80%, 65%, 0.8)"}}),markdown:Object(x.jsx)(I.j,{}),mysql:Object(x.jsx)(E.b,{style:{color:"hsl(204, 54%, 53%)"}}),perl:Object(x.jsx)(I.k,{style:{color:"hsl(208, 61%, 43%)"}}),pgsql:Object(x.jsx)(I.l,{style:{color:"#3e6e89"}}),php:Object(x.jsx)(M.e,{}),powershell:Object(x.jsx)(I.m,{style:{color:"#3171b2"}}),python:Object(x.jsx)(I.n,{style:{color:"#efd162"}}),r:Object(x.jsx)(I.o,{style:{color:"#61a5c1"}}),redis:Object(x.jsx)(I.p,{style:{color:"#c03b2b"}}),ruby:Object(x.jsx)(I.q,{style:{color:"#d53227"}}),rust:Object(x.jsx)(I.r,{}),shell:Object(x.jsx)(D.a,{}),sql:Object(x.jsx)(w.a,{style:{color:"#f25890"}}),swift:Object(x.jsx)(I.s,{style:{color:"#efa251"}}),typescript:Object(x.jsx)(I.t,{style:{color:"#4572c0"}})};function B(e){var t=e.language?e.language:"";return""===t?Object(x.jsx)(k.a,{}):A[t]?A[t]:Object(x.jsx)(k.a,{})}var J=function(){var e=Object(d.g)().id,t=Object(c.useContext)(O),n=t.language,s=t.setLanguage,a=t.dark,l=t.setDark,r=t.status,o=(t.setStatus,Object(c.useState)(!1)),i=Object(u.a)(o,2),j=i[0],b=i[1],h=Object(c.useState)(""),g=Object(u.a)(h,2),f=g[0],p=g[1],S=function(){p(""),b(!1)};return Object(x.jsxs)("div",{className:"editor-wrapper",children:[Object(x.jsx)(m.a,{open:j,onClose:S,disableAutoFocus:!0,disableEnforceFocus:!0,BackdropProps:{invisible:!0},children:Object(x.jsxs)("div",{className:"search-modal",children:[Object(x.jsx)("form",{className:"language-search-container",children:Object(x.jsx)("input",{type:"text",placeholder:"Search language mode",className:"language-search",onChange:function(e){return p(e.target.value)}})}),Object(x.jsx)("div",{className:"language-search-result",children:y.filter((function(e){return e.includes(f)})).map((function(e,t){return Object(x.jsxs)("div",{className:"language-selection",onClick:function(){s(e),S()},children:[Object(x.jsx)("div",{className:"language-icon",children:Object(x.jsx)(B,{language:e})}),e.toUpperCase()[0]+e.slice(1)]},"language-"+t)}))})]})}),Object(x.jsxs)("div",{className:"editor-header",children:[Object(x.jsxs)("div",{className:"editor-header-left",children:["Document ID: ",e]}),Object(x.jsxs)("div",{className:"editor-header-right",children:[Object(x.jsx)("span",{className:"status-dot ".concat(r?"status-dot-sync":"status-dot-desync")}),Object(x.jsx)("div",{className:"status-message",children:r?"Synchronized":"Desynchronized"}),Object(x.jsx)("label",{children:Object(x.jsx)(N.a,{checked:a,onChange:function(){l(!a)},onColor:"#4b99f0",onHandleColor:"#fff",handleDiameter:18,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:18,width:40,className:"react-switch",id:"material-switch"})})]})]}),Object(x.jsx)("div",{className:"editor-body",children:Object(x.jsx)(v,{theme:a?"vs-dark":"vs",language:n})}),Object(x.jsxs)("div",{className:"editor-footer",children:[Object(x.jsxs)("div",{className:"editor-footer-version editor-footer-text",children:[Object(x.jsx)(C.b,{}),Object(x.jsx)("a",{style:{marginLeft:"7px"},children:"MergePad"})]}),Object(x.jsx)("div",{className:"editor-footer-language editor-footer-text",onClick:function(){b(!0)},children:n.toUpperCase()[0]+n.slice(1)})]})]})},q=n(37),P=n(148);var z=function(){return Object(x.jsx)(q.a,{children:Object(x.jsxs)(d.d,{children:[Object(x.jsx)(d.b,{path:"/",exact:!0,children:Object(x.jsx)(d.a,{to:"/documents/".concat(Object(P.a)())})}),Object(x.jsx)(d.b,{path:"/documents/:id",children:Object(x.jsx)(p,{children:Object(x.jsx)(J,{})})})]})})};n(140);l.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root"))},79:function(e){e.exports=JSON.parse('["apex","azcli","bat","c","clojure","coffeescript","cpp","csharp","csp","css","dockerfile","fsharp","go","graphql","handlebars","html","ini","java","javascript","json","kotlin","less","lua","markdown","msdax","mysql","objective-c","pascal","perl","pgsql","php","plaintext","postiats","powerquery","powershell","pug","python","r","razor","redis","redshift","ruby","rust","sb","scheme","scss","shell","sol","sql","st","swift","tcl","typescript","vb","xml","yaml"]')}},[[141,1,2]]]);
//# sourceMappingURL=main.05efc6e9.chunk.js.map