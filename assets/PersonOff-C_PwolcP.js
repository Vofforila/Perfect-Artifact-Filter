import{aw as y,r as n,bT as C,d as a,G as o,b as e,T as d,ac as w,bU as I,bV as b,h as u,O as h,aj as g,ak as z,N as M,S as $,al as k,v as f,w as v,j as p}from"./index-C5roA2cR.js";function B({pageKey:r,text:t="",modalTitle:m="",children:x}){const[_,S,i]=y(typeof window<"u"&&localStorage.getItem(`infoShown_${r}`)!=="true"),[j]=n.useState(Array.isArray(t)?C(t):t),c=n.useCallback(()=>{i(),localStorage.setItem(`infoShown_${r}`,"true")},[i,r]);return a(u,{children:[a(o,{container:!0,children:[e(o,{item:!0,flexGrow:1,children:e(d,{variant:"caption",pl:1,children:j})}),e(o,{item:!0,xs:"auto",children:e(w,{size:"small",color:"info",variant:"contained",onClick:S,startIcon:e(I,{}),children:e(b,{ns:"ui",key18:"info"})})})]}),e(k,{containerProps:{maxWidth:"xl"},open:_,onClose:c,children:a(u,{children:[a(h,{sx:{py:1,display:"flex"},children:[e(d,{variant:"h6",children:m}),e(g,{onClick:c,sx:{ml:"auto"},children:e(z,{})})]}),e(M,{}),e(h,{children:e(n.Suspense,{fallback:e($,{variant:"rectangular",width:"100%",height:500}),children:x})})]})})]})}var s={},R=v;Object.defineProperty(s,"__esModule",{value:!0});var T=s.default=void 0,V=R(f()),D=p;T=s.default=(0,V.default)((0,D.jsx)("path",{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7zm1.5 14h-6v-2h6zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2z"}),"Difference");var l={},O=v;Object.defineProperty(l,"__esModule",{value:!0});var P=l.default=void 0,q=O(f()),E=p;P=l.default=(0,q.default)((0,E.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61z"}),"PersonOff");export{B as I,T as a,P as d};
