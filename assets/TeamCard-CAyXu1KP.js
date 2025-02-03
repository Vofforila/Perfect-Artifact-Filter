import{u as _,a as $,aw as E,b as e,d as n,f as a,ac as H,T as s,B as L,e as G,ag as U,C as N,bo as l,X as V,h as D,i as X,bF as Z,r as u,aW as q,br as J,k as Q,l as Y,cz as K,g as ee,D as te,S as P,cA as F,aN as ae,U as ne,cB as ie,o as oe,p as re,t as se,cC as le,cD as ce,z as de,cE as he,bl as T,bC as M,Z as pe,cF as xe}from"./index-pYpdGbM0.js";import{u as ue,c as w,h as k}from"./useTeamChar-Bi6cpCSL.js";import{T as ge}from"./TeamDelModal-BOL0Aovj.js";function ve({teamId:t,onClick:c,bgt:d}){const i=_(t),{name:o,description:r,loadoutData:x}=i,g=$(),[m,p,v]=E();return e(D,{bgt:d,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:n(a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[n(a,{sx:{display:"flex",flexDirection:"row"},children:[e(H,{onClick:()=>c(),variant:"outlined",fullWidth:!0,color:"neutral300",sx:{borderTopRightRadius:0,borderBottomRightRadius:0,borderBottomLeftRadius:0},children:n(s,{sx:{display:"flex",gap:1,alignItems:"center"},variant:"h6",children:[e("span",{children:o}),r&&e(L,{title:e(s,{children:r}),children:e(G,{})})]})}),e(ge,{teamId:t,show:m,onHide:v,onDel:function(){}}),e(H,{variant:"outlined",size:"small",onClick:p,color:"error",sx:{borderTopLeftRadius:0,borderBottomRightRadius:0,borderBottomLeftRadius:0},children:e(U,{})})]}),e(a,{sx:{marginTop:"auto"},children:x.map((b,I)=>{var f;const S=b==null?void 0:b.teamCharId,h=S&&((f=g.teamChars.get(S))==null?void 0:f.key);return e(a,{className:"team-teammate",sx:{border:"1px rgba(200,200,200,0.3) solid","&:hover":{border:"1px rgba(200,200,200,0.8) solid"}},children:h?e(N,{onClick:()=>c(h),children:e(me,{characterKey:h,teamId:t,teamCharId:S})}):e(N,{onClick:()=>c(),sx:{height:120,position:"relative"},children:e(a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:120,backgroundColor:"neutral600.main"},children:e(a,{component:l?l:"img",src:V.team[`team${I+1}`],sx:{width:"auto",my:"15px",height:90,opacity:.7,mx:"auto"}})})})})})})]})})}const y={banner:0,bannerFilter:1,characterIcon:2,darkDRop:3,other:4};function me({characterKey:t,teamId:c,teamCharId:d}){var B;const i=$(),o=X(t),{gender:r}=Z(),{silly:x}=u.useContext(q),g=J(t),{name:m}=ue(d),p=i.teams.getLoadoutDatum(c,d),v=i.teams.getActiveBuildName(p),b=u.useMemo(()=>i.teams.getLoadoutWeapon(p),[p,i]),I=(()=>{const{buildType:C,buildTcId:j}=p;return C==="tc"&&j?Q(i.buildTcs.get(j)):Object.values(i.teams.getLoadoutArtifacts(p)).filter(O=>O)})(),S=u.useMemo(()=>i.teams.getLoadoutArtifactData(p),[i,p]),h=Y(t,void 0,I,b),f=(B=h==null?void 0:h[t])==null?void 0:B.target,A=u.useMemo(()=>o&&{character:o},[o]),R=u.useMemo(()=>f&&h&&{data:f,teamData:h},[f,h]),z=K(t,"banner",r),W=ee(t);return!A||!R?null:e(se.Provider,{value:A,children:e(te.Provider,{value:R,children:e(u.Suspense,{fallback:e(P,{variant:"rectangular",width:"100%",height:300}),children:n(a,{className:z?void 0:`grad-${g.rarity}star`,sx:{display:"flex","&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${z})`,backgroundPosition:"center",backgroundSize:"cover",zIndex:y.banner}},children:[e(a,{sx:C=>({position:"absolute",width:"100%",height:"100%",zIndex:y.bannerFilter,backdropFilter:"blur(3px)",background:`linear-gradient(to right, ${w(k(C.palette.neutral600.main),.8)}, ${w(k(C.palette.neutral600.main),.4)} 100% )`})}),e(a,{sx:C=>({position:"absolute",width:"100%",height:"100%",zIndex:y.darkDRop,background:`linear-gradient(to top, ${w(k(C.palette.neutral600.main),.9)}, rgba(0,0,0,0) 25% )`})}),n(a,{sx:{height:120,width:120,position:"absolute",zIndex:y.other},children:[o&&e(s,{sx:{position:"absolute",lineHeight:1,bottom:0,p:.5,textShadow:"0 0 5px black"},children:F(o.level,o.ascension)}),o&&n(s,{sx:{position:"absolute",lineHeight:1,bottom:0,right:0,p:.5,textShadow:"0 0 5px black"},children:["C",o.constellation]}),t.startsWith("Traveler")&&e(s,{sx:{position:"absolute",lineHeight:1,top:0,left:0,p:.5,textShadow:"0 0 5px black"},children:e(ae,{color:W,children:e(ne,{ele:W})})})]}),e(a,{component:l?l:"img",src:ie(t,r,x),sx:{height:120,width:120,zIndex:y.characterIcon}}),n(a,{sx:{pr:.5,pl:.5,py:.5,display:"flex",flexDirection:"column",flexGrow:1,width:"100%",minWidth:0,justifyContent:"space-between",zIndex:y.other},children:[n(s,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(oe,{}),e("span",{children:m})]}),n(s,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(re,{}),e("span",{children:v})]}),n(a,{sx:{display:"flex",mb:.5,gap:1},children:[e(be,{weapon:b}),e(fe,{artifactData:S})]})]})]})})})})}function be({weapon:t}){return n(D,{bgt:"neutral600",sx:{height:"100%",display:"flex",flexDirection:"horizontal",boxShadow:"0 0 10px rgba(0,0,0,0.4)"},children:[e(a,{component:l?l:"img",src:le(t.key,t.ascension>=2),maxWidth:"100%",maxHeight:"50px",sx:{mt:"auto"}}),n(a,{sx:{pr:1,display:"flex",flexDirection:"column",justifyContent:"space-evenly",color:"neutral200.main"},children:[e(s,{sx:{},children:F(t.level,t.ascension)}),ce(t.key)&&n(s,{children:["R",t.refinement]})]})]})}function fe({artifactData:t}){const{setNum:c={},mains:d={}}=t,{t:i}=de("statKey_gen"),o=Object.entries(c).filter(([,r])=>r===2||r===4);return n(D,{bgt:"neutral600",sx:{height:"100%",maxHeight:"50px",display:"flex",flexDirection:"horizontal",boxShadow:"0 0 10px rgba(0,0,0,0.4)",flexGrow:1},children:[e(a,{sx:{Width:"50px",minWidth:"50px",height:"50px",position:"relative"},children:o.length===2?e(Ce,{sets:o.map(([r])=>r)}):o.length===1?e(ye,{set:o[0][0],num:o[0][1]}):!1}),e(a,{sx:{display:"flex",flexGrow:1,position:"relative",justifyContent:"space-around",alignItems:"center"},children:Object.entries(d).filter(([,r])=>r).map(([r,x])=>{const g=e(pe,{slotKey:r,iconProps:{sx:{fontSize:"inherit"}}}),m=e(xe,{statKey:x,iconProps:{sx:{fontSize:"inherit"}}});return e(L,{title:e(a,{children:n(u.Suspense,{fallback:e(P,{variant:"text"}),children:[n(s,{sx:{display:"flex",gap:1,alignItems:"center"},children:[g,e(he,{slotKey:r})]}),n(s,{sx:{display:"flex",gap:1,alignItems:"center"},children:[m,i(x)]})]})}),children:n(s,{sx:{lineHeight:0},children:[g,m]})},r+x)})})]})}function Ce({sets:t}){const c=t[0],d=t[1];return n(M,{children:[e(a,{component:l?l:"img",sx:{position:"absolute",top:0,left:0,Width:"50px",height:"50px",clipPath:"polygon(0 0, 0 100%, 100% 0)"},src:T(c,"flower")}),e(a,{component:l?l:"img",sx:{position:"absolute",top:0,left:0,Width:"50px",height:"50px",clipPath:"polygon(100% 100%, 0 100%, 100% 0)"},src:T(d,"flower")}),e(a,{className:"botright",sx:i=>({position:"absolute",bottom:0,right:0,width:"1.4em",padding:"0.2em",textAlign:"center",backgroundColor:w(k(i.palette.primary.main),.4),borderRadius:"100%"}),children:"2"}),e(a,{sx:i=>({position:"absolute",top:0,left:0,width:"1.4em",padding:"0.2em",textAlign:"center",backgroundColor:w(k(i.palette.primary.main),.4),borderRadius:"100%"}),children:"2"})]})}function ye({set:t,num:c}){return n(M,{children:[e(a,{sx:d=>({position:"absolute",bottom:0,right:0,width:"1.4em",padding:"0.2em",textAlign:"center",backgroundColor:w(k(d.palette.primary.main),.4),borderRadius:"100%"}),children:c}),e(a,{component:l?l:"img",src:T(t,"flower"),sx:{Width:"50px",height:"50px"}})]})}export{ve as T};
