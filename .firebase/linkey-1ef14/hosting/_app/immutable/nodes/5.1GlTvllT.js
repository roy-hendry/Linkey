import{s as H,k as q,e as g,a as L,t as I,c as _,m as A,g as R,b as $,f,d as O,o as l,r as D,i as x,h as w,q as T}from"../chunks/scheduler.BJHXs0pQ.js";import{S as j,i as B,c as G,a as N,m as V,t as z,b as J,d as K}from"../chunks/index.DitbgsN3.js";import{A as Q}from"../chunks/AuthCheck.CQmiWQ5P.js";import{a as W,u as X,r as Y,d as Z,e as ee,g as te,f as se,h as ae,i as re}from"../chunks/firebase.DQ-78Fzk.js";function F(c){let t,n="Uploading...",s,a;return{c(){t=g("p"),t.textContent=n,s=L(),a=g("progress"),this.h()},l(e){t=_(e,"P",{"data-svelte-h":!0}),A(t)!=="svelte-be0b5h"&&(t.textContent=n),s=R(e),a=_(e,"PROGRESS",{class:!0}),$(a).forEach(f),this.h()},h(){l(a,"class","progress progress-info w-56 mt-6")},m(e,o){x(e,t,o),x(e,s,o),x(e,a,o)},d(e){e&&(f(t),f(s),f(a))}}}function le(c){let t,n="Upload a profile photo",s,a,e,o,b,U,u,v='<span class="label-text">Pick a file</span>',y,h,C,k,d,E,P,M,i=c[2]&&F();return{c(){t=g("h2"),t.textContent=n,s=L(),a=g("form"),e=g("div"),o=g("img"),U=L(),u=g("label"),u.innerHTML=v,y=L(),h=g("input"),C=L(),i&&i.c(),k=L(),d=g("a"),E=I("Finish"),this.h()},l(r){t=_(r,"H2",{class:!0,"data-svelte-h":!0}),A(t)!=="svelte-w00yvf"&&(t.textContent=n),s=R(r),a=_(r,"FORM",{class:!0});var p=$(a);e=_(p,"DIV",{class:!0});var m=$(e);o=_(m,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),U=R(m),u=_(m,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),A(u)!=="svelte-1186g42"&&(u.innerHTML=v),y=R(m),h=_(m,"INPUT",{name:!0,type:!0,class:!0,accept:!0}),C=R(m),i&&i.l(m),m.forEach(f),p.forEach(f),k=R(r),d=_(r,"A",{href:!0,class:!0});var S=$(d);E=O(S,"Finish"),S.forEach(f),this.h()},h(){var r;l(t,"class","card-title"),D(o.src,b=c[1]??((r=c[0])==null?void 0:r.photoURL)??"/src/lib/user.png")||l(o,"src",b),l(o,"alt","photoURL"),l(o,"width","256"),l(o,"height","256"),l(o,"class","mx-auto"),l(u,"for","photoURL"),l(u,"class","label"),l(h,"name","photoURL"),l(h,"type","file"),l(h,"class","file-input file-input-bordered w-full max-w-xs"),l(h,"accept","image/png, image/jpeg, image/gif, image/webp"),l(e,"class","form-control w-full max-w-xs my-10 mx-auto text-center"),l(a,"class","max-w-screen-md w-full"),l(d,"href",c[3]),l(d,"class","btn btn-primary")},m(r,p){x(r,t,p),x(r,s,p),x(r,a,p),w(a,e),w(e,o),w(e,U),w(e,u),w(e,y),w(e,h),w(e,C),i&&i.m(e,null),x(r,k,p),x(r,d,p),w(d,E),P||(M=T(h,"change",c[4]),P=!0)},p(r,p){var m;p&3&&!D(o.src,b=r[1]??((m=r[0])==null?void 0:m.photoURL)??"/src/lib/user.png")&&l(o,"src",b),r[2]?i||(i=F(),i.c(),i.m(e,null)):i&&(i.d(1),i=null),p&8&&l(d,"href",r[3])},d(r){r&&(f(t),f(s),f(a),f(k),f(d)),i&&i.d(),P=!1,M()}}}function oe(c){let t,n;return t=new Q({props:{$$slots:{default:[le]},$$scope:{ctx:c}}}),{c(){G(t.$$.fragment)},l(s){N(t.$$.fragment,s)},m(s,a){V(t,s,a),n=!0},p(s,[a]){const e={};a&79&&(e.$$scope={dirty:a,ctx:s}),t.$set(e)},i(s){n||(z(t.$$.fragment,s),n=!0)},o(s){J(t.$$.fragment,s),n=!1},d(s){K(t,s)}}}function ne(c,t,n){let s,a,e;q(c,W,u=>n(5,a=u)),q(c,X,u=>n(0,e=u));let o,b=!1;async function U(u){n(2,b=!0);const v=u.target.files[0];n(1,o=URL.createObjectURL(v));const y=Y(Z,`users/${a.uid}/profile.png`),h=await ee(y,v),C=await te(h.ref);await se(ae(re,"users",a.uid),{photoURL:C}),n(2,b=!1)}return c.$$.update=()=>{c.$$.dirty&1&&n(3,s=`/${e==null?void 0:e.username}/edit`)},[e,o,b,s,U]}class pe extends j{constructor(t){super(),B(this,t,ne,oe,H,{})}}export{pe as component};