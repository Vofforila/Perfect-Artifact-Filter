import{bI as M,bJ as $,fu as y,cT as j,bK as N,T as P,cO as h,bL as a,r as x,bM as U,bN as W,fv as _,cW as z,j as O,bO as E,bP as H}from"./index-ByFzPjUD.js";function I(o){return $("MuiLink",o)}const J=M("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},K=o=>C[o]||o,q=({theme:o,ownerState:e})=>{const n=K(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:j(s,.4)},w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],G=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return H(t,I,e)},Q=N(P,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:q({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${J.focusVisible}`]:{outline:"auto"}})),X=x.forwardRef(function(e,n){const s=U({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:g,underline:k="always",variant:p="inherit",sx:l}=s,L=W(s,w),{isFocusVisibleRef:b,onBlur:V,onFocus:v,ref:F}=_(),[R,f]=x.useState(!1),D=z(n,F),T=i=>{V(i),b.current===!1&&f(!1),u&&u(i)},A=i=>{v(i),b.current===!0&&f(!0),d&&d(i)},m=a({},s,{color:t,component:c,focusVisible:R,underline:k,variant:p}),B=G(m);return O.jsx(Q,a({color:t,className:E(B.root,r),classes:g,component:c,onBlur:T,onFocus:A,ref:D,ownerState:m,variant:p,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))});export{X as L};
