import{x as B,fl as W,ab as x,b as t,fm as A,f as c,i as E,fn as I,bI as N,r as m,aZ as j,C as w,h as T,d as f,bu as F,br as h,cB as z,T as y,am as g,eY as D,fo as H,fp as $,eQ as k,B as L,X as q}from"./index-Dn9-t-k9.js";var C={exports:{}},U="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y=U,Q=Y;function b(){}function S(){}S.resetWarningCache=b;var V=function(){function e(n,i,l,r,d,p){if(p!==Q){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function o(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:S,resetWarningCache:b};return a.PropTypes=a,a};C.exports=V();var X=C.exports;const G=B(X);function J({dataAdSlot:e,bgt:o="normal",maxHeight:a=350}){const{width:n,height:i,ref:l}=W(),[r,d,p]=x(!0);return r?t(c,{ref:l,sx:{height:"100%",width:"100%",maxHeight:a},children:n&&t(A,{bgt:o,onClose:s=>{s.stopPropagation(),p()},dataAdSlot:e,sx:{width:n,height:Math.max(i,a)}})}):null}function M({characterKey:e,onClick:o,onMouseDown:a,onMouseEnter:n,hoverChild:i,hideFav:l}){const r=E(e),{favorite:d}=I(e),{gender:p}=N(),{silly:s}=m.useContext(j),u=m.useCallback(()=>o==null?void 0:o(e),[e,o]),v=m.useCallback(O=>t(w,{onClick:u,onMouseDown:a,onMouseEnter:n,children:O}),[u,a,n]),[P,_,R]=x();return t(L,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!i&&P,onClose:R,onOpen:_,title:i,children:t(T,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:f(k,{condition:!!o||!!a||!!n,wrapper:v,children:[t(c,{display:"flex",className:`grad-${F(e).rarity}star`,children:t(c,{component:h?h:"img",src:z(e,p,s),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),r&&t(y,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:t("strong",{children:f(g,{color:"primary",children:[r.level,"/",D[r.ascension]]})})}),!l&&t(c,{sx:{position:"absolute",top:0,right:0},children:d?t(H,{fontSize:"small"}):t($,{fontSize:"small"})}),r&&t(y,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:f(g,{color:"secondary",children:["C",r.constellation]})})})]})})})}function K({index:e}){return t(T,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:t(c,{component:h?h:"img",src:q.team[`team${e+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}export{J as A,K as B,M as C,G as P};