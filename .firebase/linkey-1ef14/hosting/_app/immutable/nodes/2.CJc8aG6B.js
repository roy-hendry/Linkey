import{F as J,G as x,s as w,p as L,i as k,n as K,f as m,k as B,y as F,e as h,c as $,b as C,h as y,z as G,A as H,B as M,H as j,a as I,m as S,g as U,o as d,u as V}from"../chunks/scheduler.BJHXs0pQ.js";import{S as O,i as P,g as Q,b as A,e as T,t as E,f as q,c as W,a as X,m as Y,d as Z}from"../chunks/index.DitbgsN3.js";import{p as R}from"../chunks/stores.DhZdjoF5.js";import{c as tt}from"../chunks/index.CvmYViMX.js";import"../chunks/firebase.DQ-78Fzk.js";function et(i,{delay:a=0,duration:s=400,easing:n=J}={}){const o=+getComputedStyle(i).opacity;return{delay:a,duration:s,easing:n,css:t=>`opacity: ${t*o}`}}function st(i,{delay:a=0,duration:s=400,easing:n=tt,x:o=0,y:t=0,opacity:e=0}={}){const r=getComputedStyle(i),l=+r.opacity,c=r.transform==="none"?"":r.transform,g=l*(1-e),[b,_]=x(o),[v,u]=x(t);return{delay:a,duration:s,easing:n,css:(f,p)=>`
			transform: ${c} translate(${(1-f)*b}${_}, ${(1-f)*v}${u});
			opacity: ${l-g*p}`}}function z(i){let a,s,n,o,t;const e=i[2].default,r=F(e,i,i[1],null);return{c(){a=h("div"),s=h("div"),r&&r.c()},l(l){a=$(l,"DIV",{});var c=C(a);s=$(c,"DIV",{});var g=C(s);r&&r.l(g),g.forEach(m),c.forEach(m)},m(l,c){k(l,a,c),y(a,s),r&&r.m(s,null),t=!0},p(l,c){r&&r.p&&(!t||c&2)&&G(r,e,l,l[1],t?M(e,l[1],c,null):H(l[1]),null)},i(l){t||(E(r,l),l&&(n||j(()=>{n=q(s,st,{x:"-100%",duration:750}),n.start()})),l&&(o||j(()=>{o=q(a,et,{duration:500}),o.start()})),t=!0)},o(l){A(r,l),t=!1},d(l){l&&m(a),r&&r.d(l)}}}function at(i){let a=i[0].url,s,n,o=z(i);return{c(){o.c(),s=L()},l(t){o.l(t),s=L()},m(t,e){o.m(t,e),k(t,s,e),n=!0},p(t,[e]){e&1&&w(a,a=t[0].url)?(Q(),A(o,1,1,K),T(),o=z(t),o.c(),E(o,1),o.m(s.parentNode,s)):o.p(t,e)},i(t){n||(E(o),n=!0)},o(t){A(o),n=!1},d(t){t&&m(s),o.d(t)}}}function nt(i,a,s){let n;B(i,R,e=>s(0,n=e));let{$$slots:o={},$$scope:t}=a;return i.$$set=e=>{"$$scope"in e&&s(1,t=e.$$scope)},[n,t,o]}class ot extends O{constructor(a){super(),P(this,a,nt,at,w,{})}}function rt(i){let a,s,n;const o=i[1].default,t=F(o,i,i[2],null);return{c(){a=h("main"),s=h("div"),t&&t.c(),this.h()},l(e){a=$(e,"MAIN",{class:!0});var r=C(a);s=$(r,"DIV",{class:!0});var l=C(s);t&&t.l(l),l.forEach(m),r.forEach(m),this.h()},h(){d(s,"class","card-body items-center text-center"),d(a,"class","card w-4/6 bg-neutral text-neutral-content mx-auto")},m(e,r){k(e,a,r),y(a,s),t&&t.m(s,null),n=!0},p(e,r){t&&t.p&&(!n||r&4)&&G(t,o,e,e[2],n?M(o,e[2],r,null):H(e[2]),null)},i(e){n||(E(t,e),n=!0)},o(e){A(t,e),n=!1},d(e){e&&m(a),t&&t.d(e)}}}function lt(i){let a,s,n,o="Sign In",t,e,r="Choose Username",l,c,g="Upload Photo",b,_,v;return _=new ot({props:{$$slots:{default:[rt]},$$scope:{ctx:i}}}),{c(){a=h("nav"),s=h("ul"),n=h("a"),n.textContent=o,t=I(),e=h("a"),e.textContent=r,l=I(),c=h("a"),c.textContent=g,b=I(),W(_.$$.fragment),this.h()},l(u){a=$(u,"NAV",{class:!0});var f=C(a);s=$(f,"UL",{class:!0});var p=C(s);n=$(p,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(n)!=="svelte-g5g2k4"&&(n.textContent=o),t=U(p),e=$(p,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(e)!=="svelte-9cbufa"&&(e.textContent=r),l=U(p),c=$(p,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(c)!=="svelte-vwtmt3"&&(c.textContent=g),p.forEach(m),f.forEach(m),b=U(u),X(_.$$.fragment,u),this.h()},h(){var u,f;d(n,"href","/login"),d(n,"class","step step-primary"),d(e,"href","/login/username"),d(e,"class","step"),V(e,"step-primary",(u=i[0].route.id)==null?void 0:u.match(/username|photo/g)),d(c,"href","/login/photo"),d(c,"class","step"),V(c,"step-primary",(f=i[0].route.id)==null?void 0:f.includes("photo")),d(s,"class","steps"),d(a,"class","flex justify-center my-6")},m(u,f){k(u,a,f),y(a,s),y(s,n),y(s,t),y(s,e),y(s,l),y(s,c),k(u,b,f),Y(_,u,f),v=!0},p(u,[f]){var D,N;(!v||f&1)&&V(e,"step-primary",(D=u[0].route.id)==null?void 0:D.match(/username|photo/g)),(!v||f&1)&&V(c,"step-primary",(N=u[0].route.id)==null?void 0:N.includes("photo"));const p={};f&4&&(p.$$scope={dirty:f,ctx:u}),_.$set(p)},i(u){v||(E(_.$$.fragment,u),v=!0)},o(u){A(_.$$.fragment,u),v=!1},d(u){u&&(m(a),m(b)),Z(_,u)}}}function it(i,a,s){let n;B(i,R,e=>s(0,n=e));let{$$slots:o={},$$scope:t}=a;return i.$$set=e=>{"$$scope"in e&&s(2,t=e.$$scope)},[n,o,t]}class _t extends O{constructor(a){super(),P(this,a,it,lt,w,{})}}export{_t as component};
