import{a as u,cZ as f}from"./index-ByFzPjUD.js";function c(a){const e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(e,(o,t,n,s)=>t+t+n+n+s+s);const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}function d(a,e=1){if(a)return`rgba(${a.r},${a.g},${a.b},${e})`}function g(a){const e=u();return f(e.teamChars,a)}export{d as c,c as h,g as u};
