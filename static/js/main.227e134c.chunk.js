(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{130:function(e,t,n){},136:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(19),r=n.n(s),l=n(53),i=n(4),o=n(76),u=n(7),j=n(6),d=n.n(j),b=(n(130),n(47));function h(e,t,n){function c(e,t,n){for(var c=new Map,a=t;a<=n;a++){var s=e[a];c.has(s)?(c.get(s).count++,c.get(s).index=a):c.set(s,{count:1,index:a})}return c.forEach((function(e,t,n){1!==e.count?n.delete(t):n.set(t,e.index)})),c}function a(e,t,n,a,s,r){var l=c(e,t,n),i=c(a,s,r);return l.forEach((function(e,t,n){i.has(t)?n.set(t,{indexA:e,indexB:i.get(t)}):n.delete(t)})),l}var s=[],r=0,l=0,i=[],o=[],u=[],j=[];function d(n,c){c<0?(i.push(e[n]),o.push(s.length),r++):n<0&&(u.push(t[c]),j.push(s.length),l++),s.push({line:0<=n?e[n]:t[c],aIndex:n,bIndex:c})}function b(n,c,s,r){for(;n<=c&&s<=r&&e[n]===t[s];)d(n++,s++);for(var l=c;n<=c&&s<=r&&e[c]===t[r];)c--,r--;var i=a(e,n,c,t,s,r);if(0===i.size){for(;n<=c;)d(n++,-1);for(;s<=r;)d(-1,s++)}else h(n,c,s,r,i);for(;c<l;)d(++c,++r)}function h(n,c,s,r,l){var i=function(e){var t=[];e.forEach((function(e,n,c){for(var a=0;t[a]&&t[a][t[a].length-1].indexB<e.indexB;)a++;t[a]||(t[a]=[]),0<a&&(e.prev=t[a-1][t[a-1].length-1]),t[a].push(e)}));var n=[];if(0<t.length){var c=t.length-1;for(n=[t[c][t[c].length-1]];n[n.length-1].prev;)n.push(n[n.length-1].prev)}return n.reverse()}(l||a(e,n,c,t,s,r));if(0===i.length)b(n,c,s,r);else{var o;for((n<i[0].indexA||s<i[0].indexB)&&b(n,i[0].indexA-1,s,i[0].indexB-1),o=0;o<i.length-1;o++)b(i[o].indexA,i[o+1].indexA-1,i[o].indexB,i[o+1].indexB-1);(i[o].indexA<=c||i[o].indexB<=r)&&b(i[o].indexA,c,i[o].indexB,r)}}return h(0,e.length-1,0,t.length-1),n?{lines:s,lineCountDeleted:r,lineCountInserted:l,lineCountMoved:0,aMove:i,aMoveIndex:o,bMove:u,bMoveIndex:j}:{lines:s,lineCountDeleted:r,lineCountInserted:l,lineCountMoved:0}}var f=n(2),x=Object(c.createContext)();var g=function(e){var t=Object(c.useState)("javascript"),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!0),l=Object(i.a)(r,2),o=l[0],u=l[1],j=Object(c.useState)(!1),d=Object(i.a)(j,2),b=d[0],h=d[1];return Object(f.jsx)(x.Provider,{value:{language:a,setLanguage:s,dark:o,setDark:u,status:b,setStatus:h},children:e.children})};function O(e){var t=Object(u.g)().id,n=Object(c.useState)(),a=Object(i.a)(n,2),s=a[0],r=a[1],j=Object(c.useState)(),g=Object(i.a)(j,2),O=g[0],p=g[1],v=Object(c.useState)(),y=Object(i.a)(v,2),m=y[0],S=y[1],N=Object(c.useState)(""),k=Object(i.a)(N,2),C=k[0],w=k[1],I=Object(c.useState)({}),M=Object(i.a)(I,2),E=M[0],A=M[1],B=Object(c.useState)({lineNumber:1,column:1}),J=Object(i.a)(B,2),q=J[0],D=J[1],z=Object(c.useState)(null),P=Object(i.a)(z,2),T=P[0],F=P[1],L=Object(c.useContext)(x),U=L.language,H=L.setLanguage,R=L.status,V=L.setStatus;return Object(c.useEffect)((function(){var e=Object(o.io)("https://obscure-sands-22564.herokuapp.com/");r(e);var n=d.a.change(d.a.init(),(function(e){e.text=new d.a.Text}));return p(n),A(d.a.initSyncState()),e.emit("get-document",t),function(){V(!1),e.disconnect()}}),[]),Object(c.useEffect)((function(){if(null!=s&&null!=m){var e=function(e){V(!0);var t=m.getPosition(),n=t.lineNumber,c=t.column;D({lineNumber:n,column:c});var a=JSON.parse(e),s=a.state,r=a.changes,l=a.messages,o=a.language;if(null!=o&&U!==o&&H(o),null!=s&&null!=r&&null!=l){var u=JSON.parse(r).map((function(e){return new Uint8Array(Object.values(e).map((function(e){return e})))})),j=JSON.parse(l),b=Object.values(j).map((function(e){return e})),h=d.a.receiveSyncMessage(O,s,new Uint8Array(b)),f=Object(i.a)(h,2),x=f[0],g=f[1],v=d.a.applyChanges(x,u),y=Object(i.a)(v,1)[0],S=y.text.toString();S==C&&V(!1),p(d.a.clone(y)),w(S),A(g)}};return s.on("receive-changes",e),function(){s.off("receive-changes",e)}}}),[s,O,m]),Object(c.useEffect)((function(){if(null!=s&&null!=m){var t=function(){V(!0);var t=setTimeout((function(){try{var t=d.a.getChanges(d.a.init(),d.a.clone(O)),n=d.a.generateSyncMessage(O,E),c=Object(i.a)(n,2),a=c[0],s=c[1],r={state:a,messages:JSON.stringify(s),changes:JSON.stringify(t),language:e.language};F(r)}catch(l){V(!1)}}),1e3);return function(){return clearTimeout(t)}};return s.on("synchronize-editor",t),function(){s.off("synchronize-editor",t)}}}),[s,O]),Object(c.useEffect)((function(){null!=s&&null!=m&&F({state:null,messages:null,changes:null,language:U})}),[U]),Object(c.useEffect)((function(){if(null!=T&&null!=s){var e=setInterval((function(){s.emit("send-changes",JSON.stringify(T),t),F(null)}),250);return function(){clearInterval(e)}}}),[T]),Object(c.useEffect)((function(){if(null!=s&&null!=m){var e=m.getModel();null!=e&&e.getValue()!=C&&(m.executeEdits("",[{forceMoveMarkers:!1,range:e.getFullModelRange(),text:C}],(function(){return null})),m.setPosition(q))}}),[C]),Object(c.useEffect)((function(){if(null!=s&&null!=O){var e;try{e=setInterval((function(){var e=O.text.toString().split(""),t=d.a.change(d.a.init(),(function(t){var n;t.text=new d.a.Text,(n=t.text).insertAt.apply(n,[0].concat(Object(l.a)(e)))}));p(t),A(d.a.initSyncState())}),1e4)}catch(t){V(!1)}return function(){return clearInterval(e)}}}),[O,s]),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(b.a,{height:"calc(100vh - 63px)",theme:e.theme,language:U,onMount:function(e,t){S(e)},onChange:function(t,n){if(t!==O.text.toString()&&t!==C){var c=function(e,t){var n=h(e.split(""),t.split(""),!1),c=[],a=0,s=0,r=0;n.lines.forEach((function(e,t){if(e.aIndex>=0&&e.bIndex>=0)return a++,s=0,r=0,void c.push({retain:a});if(e.aIndex>=0&&e.bIndex<=0&&(r++,s=0,a=0,c.push({delete:r})),e.aIndex<=0&&e.bIndex>=0){var n="";n=s>0&&t>0?c[t-1].insert+e.line:e.line,s++,r=0,a=0,c.push({insert:n})}}));var l=[];1==c.length&&l.push(c[0]);for(var i=0;i<c.length-1;i++){var o=i+1;Object.keys(c[o])[0]!==Object.keys(c[i])[0]&&l.push(c[i]),o==c.length-1&&l.push(c[o])}return l}(O.text.toString(),t),a=0;try{var s=d.a.change(O,"change",(function(e){e.text||(e.text=new d.a.Text);for(var t=0;t<c.length;t++)if(c[t].retain)a+=c[t].retain;else if(c[t].delete)e.text.deleteAt(a,c[t].delete);else if(c[t].insert){var n,s=c[t].insert.split("");(n=e.text).insertAt.apply(n,[a].concat(Object(l.a)(s))),a+=c[t].insert.length}})),r=d.a.getChanges(d.a.init(),d.a.clone(s)),o=d.a.generateSyncMessage(s,E),u=Object(i.a)(o,2),j=u[0],b=u[1],f={state:j,messages:JSON.stringify(b),changes:JSON.stringify(r),language:e.language};F(f),p(s),A(j),w(t),R||V(!0)}catch(x){V(!1)}}}})})}n(136);var p=n(145),v=n(78),y=n(79),m=n.n(y),S=n(38),N=n(52),k=n(51),C=n(24),w=n(8),I=n(50),M=n(80),E={bat:Object(f.jsx)(C.f,{style:{color:"#61a5c1"}}),c:Object(f.jsx)(w.a,{style:{color:"#61a5c1"}}),cpp:Object(f.jsx)(w.c,{style:{color:"#6d94c7"}}),css:Object(f.jsx)(C.a,{style:{color:"#3570b0"}}),coffeescript:Object(f.jsx)(w.b,{style:{color:"hsl(223, 28%, 53%)"}}),csharp:Object(f.jsx)(w.d,{style:{color:"#4a9738"}}),dockerfile:Object(f.jsx)(w.e,{style:{color:"#4598c2"}}),fsharp:Object(f.jsx)(C.b,{style:{color:"#5ab0d0"}}),go:Object(f.jsx)(C.c,{}),graphql:Object(f.jsx)(I.a,{style:{color:"#c82a90"}}),html:Object(f.jsx)(k.b,{style:{color:"#d86b3a"}}),java:Object(f.jsx)(w.f,{style:{color:"#d23c35"}}),javascript:Object(f.jsx)(w.g,{style:{color:"#e5d565"}}),json:Object(f.jsx)(S.a,{style:{color:"#e5d565"}}),kotlin:Object(f.jsx)(w.h,{style:{color:"#7c77d2"}}),less:Object(f.jsx)(C.d,{}),lua:Object(f.jsx)(w.i,{style:{color:"\thsla(241, 80%, 65%, 0.8)"}}),markdown:Object(f.jsx)(w.j,{}),mysql:Object(f.jsx)(I.b,{style:{color:"hsl(204, 54%, 53%)"}}),perl:Object(f.jsx)(w.k,{style:{color:"hsl(208, 61%, 43%)"}}),pgsql:Object(f.jsx)(w.l,{style:{color:"#3e6e89"}}),php:Object(f.jsx)(C.e,{}),powershell:Object(f.jsx)(w.m,{style:{color:"#3171b2"}}),python:Object(f.jsx)(w.n,{style:{color:"#efd162"}}),r:Object(f.jsx)(w.o,{style:{color:"#61a5c1"}}),redis:Object(f.jsx)(w.p,{style:{color:"#c03b2b"}}),ruby:Object(f.jsx)(w.q,{style:{color:"#d53227"}}),rust:Object(f.jsx)(w.r,{}),shell:Object(f.jsx)(M.a,{}),sql:Object(f.jsx)(k.a,{style:{color:"#f25890"}}),swift:Object(f.jsx)(w.s,{style:{color:"#efa251"}}),typescript:Object(f.jsx)(w.t,{style:{color:"#4572c0"}})};function A(e){var t=e.language?e.language:"";return""===t?Object(f.jsx)(N.a,{}):E[t]?E[t]:Object(f.jsx)(N.a,{})}var B=function(){var e=Object(u.g)().id,t=Object(c.useContext)(x),n=t.language,a=t.setLanguage,s=t.dark,r=t.setDark,l=t.status,o=(t.setStatus,Object(c.useState)(!1)),j=Object(i.a)(o,2),d=j[0],b=j[1],h=Object(c.useState)(""),g=Object(i.a)(h,2),y=g[0],N=g[1],k=function(){N(""),b(!1)};return Object(f.jsxs)("div",{className:"editor-wrapper",children:[Object(f.jsx)(p.a,{open:d,onClose:k,disableAutoFocus:!0,disableEnforceFocus:!0,BackdropProps:{invisible:!0},children:Object(f.jsxs)("div",{className:"search-modal",children:[Object(f.jsx)("form",{className:"language-search-container",children:Object(f.jsx)("input",{type:"text",placeholder:"Search language mode",className:"language-search",onChange:function(e){return N(e.target.value)},autoFocus:!0})}),Object(f.jsx)("div",{className:"language-search-result",children:v.filter((function(e){return e.includes(y)})).map((function(e,t){return Object(f.jsxs)("div",{className:"language-selection",onClick:function(){a(e),k()},children:[Object(f.jsx)("div",{className:"language-icon",children:Object(f.jsx)(A,{language:e})}),e.toUpperCase()[0]+e.slice(1)]},"language-"+t)}))})]})}),Object(f.jsxs)("div",{className:"editor-header",children:[Object(f.jsxs)("div",{className:"editor-header-left",children:["Document ID: ",e]}),Object(f.jsxs)("div",{className:"editor-header-right",children:[Object(f.jsx)("span",{className:"status-dot ".concat(l?"status-dot-sync":"status-dot-desync")}),Object(f.jsx)("div",{className:"status-message",children:l?"Synchronized":"Desynchronized"}),Object(f.jsx)("label",{children:Object(f.jsx)(m.a,{checked:s,onChange:function(){r(!s)},onColor:"#4b99f0",onHandleColor:"#fff",handleDiameter:18,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:18,width:40,className:"react-switch",id:"material-switch"})})]})]}),Object(f.jsx)("div",{className:"editor-body",children:Object(f.jsx)(O,{theme:s?"vs-dark":"vs",language:n})}),Object(f.jsxs)("div",{className:"editor-footer",children:[Object(f.jsxs)("div",{className:"editor-footer-version editor-footer-text",children:[Object(f.jsx)(S.b,{}),Object(f.jsx)("a",{style:{marginLeft:"7px"},children:"MergePad"})]}),Object(f.jsx)("div",{className:"editor-footer-language editor-footer-text",onClick:function(){b(!0)},children:n.toUpperCase()[0]+n.slice(1)})]})]})},J=n(36),q=n(146);var D=function(){return Object(f.jsx)(J.a,{children:Object(f.jsxs)(u.d,{children:[Object(f.jsx)(u.b,{path:"/:id",children:Object(f.jsx)(g,{children:Object(f.jsx)(B,{})})}),Object(f.jsx)(u.b,{path:"/",children:Object(f.jsx)(u.a,{to:"/".concat(Object(q.a)())})})]})})};n(138);r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root"))},78:function(e){e.exports=JSON.parse('["apex","azcli","bat","c","clojure","coffeescript","cpp","csharp","csp","css","dockerfile","fsharp","go","graphql","handlebars","html","ini","java","javascript","json","kotlin","less","lua","markdown","msdax","mysql","objective-c","pascal","perl","pgsql","php","plaintext","postiats","powerquery","powershell","pug","python","r","razor","redis","redshift","ruby","rust","sb","scheme","scss","shell","sol","sql","st","swift","tcl","typescript","vb","xml","yaml"]')}},[[139,1,2]]]);
//# sourceMappingURL=main.227e134c.chunk.js.map