import{x as W,fp as B,aw as x,b as t,fq as E,f as c,i as A,fr as w,bE as N,r as m,aW as j,C as F,h as T,d as f,bq as I,bn as h,cC as z,T as y,af as g,e_ as D,fs as H,ft as q,eS as $,B as k,X as L}from"./index-rjnhfMGF.js";var C={exports:{}},U="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",V=U,X=V;function b(){}function S(){}S.resetWarningCache=b;var Y=function(){function e(s,i,l,r,d,p){if(p!==X){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}e.isRequired=e;function a(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:S,resetWarningCache:b};return o.PropTypes=o,o};C.exports=Y();var G=C.exports;const M=W(G);function Q({dataAdSlot:e,bgt:a="normal",maxHeight:o=350}){const{width:s,height:i,ref:l}=B(),[r,d,p]=x(!0);return r?t(c,{ref:l,sx:{height:"100%",width:"100%",maxHeight:o},children:s&&t(E,{bgt:a,onClose:n=>{n.stopPropagation(),p()},dataAdSlot:e,sx:{width:s,height:Math.max(i,o)}})}):null}function Z({characterKey:e,onClick:a,onMouseDown:o,onMouseEnter:s,hoverChild:i,hideFav:l}){const r=A(e),{favorite:d}=w(e),{gender:p}=N(),{silly:n}=m.useContext(j),u=m.useCallback(()=>a==null?void 0:a(e),[e,a]),v=m.useCallback(O=>t(F,{onClick:u,onMouseDown:o,onMouseEnter:s,children:O}),[u,o,s]),[P,_,R]=x();return t(k,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!i&&P,onClose:R,onOpen:_,title:i,children:t(T,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:f($,{condition:!!a||!!o||!!s,wrapper:v,children:[t(c,{display:"flex",className:`grad-${I(e).rarity}star`,children:t(c,{component:h?h:"img",src:z(e,p,n),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),r&&t(y,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:t("strong",{children:f(g,{color:"primary",children:[r.level,"/",D[r.ascension]]})})}),!l&&t(c,{sx:{position:"absolute",top:0,right:0},children:d?t(H,{fontSize:"small"}):t(q,{fontSize:"small"})}),r&&t(y,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:f(g,{color:"secondary",children:["C",r.constellation]})})})]})})})}function K({index:e}){return t(T,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:t(c,{component:h?h:"img",src:L.team[`team${e+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}export{Q as A,K as B,Z as C,M as P};
