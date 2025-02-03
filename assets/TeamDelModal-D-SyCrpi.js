import{r as y,D as H,a as v,dv as S,d8 as A,d9 as E,d as a,f,b as e,af as j,T as p,bB as L,z as b,c6 as N,o as K,e as w,B as $,at as P,p as B,c4 as V,c8 as W,O as I,u as q,cv as F,M as R,aj as U,ak as z,N as _,ao as G,aa as J,fE as Q,ac as k,ag as X,h as O,al as Y,l as Z,aN as ee}from"./index-C5roA2cR.js";import{u as ae}from"./useTeamChar-7sxV6FsH.js";function te({optimizationTarget:t,customMultiTargets:m}){var l;const{data:i}=y.useContext(H),n=v(),c=y.useMemo(()=>S(i,t[0],n),[i,t,n]),{title:d,icon:h,action:s}=c??{},o=A(i.getDisplay(),t),{textSuffix:r,icon:g,name:x=t[0]==="custom"?(l=m[parseInt(t[1]??"")])==null?void 0:l.name:void 0}=(o&&E(o.info))??{};return a(L,{children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[h||g,e("span",{children:d}),!!s&&e(j,{color:"success",sx:{whiteSpace:"normal"},children:s})]}),e(p,{sx:{display:"flex",alignItems:"center"},children:a(j,{sx:{whiteSpace:"normal"},children:[e("strong",{children:x}),r&&a("span",{children:[" ",r]})]})})]})}function ne({teamCharId:t,showSetting:m=!1,children:i}){const{t:n}=b("loadout"),c=v(),{name:d,description:h,buildIds:s,buildTcIds:o,optConfigId:r,customMultiTargets:g}=c.teamChars.get(t),{optimizationTarget:x}=N(r);return a(I,{sx:{display:"flex",flexDirection:"column",gap:1,width:"100%"},children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(K,{}),e(p,{variant:"h6",children:d}),!!h&&e($,{title:e(p,{children:h}),children:e(w,{})}),m&&e(P,{sx:{ml:"auto"}})]}),a(f,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(B,{}),a(p,{children:[n("loadoutHeader.builds"),e("strong",{children:s.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(B,{}),a(p,{children:[n("loadoutHeader.tcBuilds"),e("strong",{children:o.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(V,{}),a(p,{children:[n("loadoutHeader.mltTargets"),e("strong",{children:g.length})]})]})]}),x&&a(p,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(W,{}),e(f,{children:n("loadoutHeader.optTarget")}),e(te,{customMultiTargets:g,optimizationTarget:x})]}),i]})}function oe({teamId:t,show:m,onHide:i,onDel:n}){const{t:c}=b("page_team"),d=v(),h=q(t),{name:s,description:o,loadoutData:r}=h,g=y.useMemo(()=>r.map(l=>{if(!l)return[];const{teamCharId:u}=l;return d.teams.values.filter(({loadoutData:C})=>C.find(D=>(D==null?void 0:D.teamCharId)===u))}),[d,r]),[x,T]=y.useState(()=>g.map((l,u)=>l.length===1?u:void 0).filter(F)),M=()=>{d.teams.remove(t),r.forEach((l,u)=>{!l||!x.includes(u)||d.teamChars.remove(l.teamCharId)}),n()};return e(Y,{open:m,onClose:i,children:a(O,{children:[e(R,{title:a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(f,{children:c("teamDelModal.teamName")}),e("strong",{children:s}),o&&e($,{title:o,children:e(w,{})})]}),action:e(U,{onClick:i,children:e(z,{})})}),e(_,{}),a(I,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(G,{severity:"info",children:e(J,{t:c,i18nKey:"teamDelModal.alert",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."})}),r.map((l,u)=>l?e(se,{teamCharId:l.teamCharId,selected:x.includes(u),onClick:()=>T(C=>Q(C,u)),inTeams:g[u]},u):null)]}),e(_,{}),e(I,{sx:{display:"flex",justifyContent:"flex-end"},children:e(k,{color:"error",startIcon:e(X,{}),onClick:M,children:c("teamDelModal.delBtn")})})]})})}function se({teamCharId:t,selected:m,onClick:i,inTeams:n}){const{t:c}=b("page_team"),d=ae(t),{key:h}=d,s=Z(h),{target:o}=(s==null?void 0:s[h])??{},r=y.useMemo(()=>{if(!(!s||!o))return{data:o,teamData:s,compareData:void 0}},[o,s]);if(r)return e(H.Provider,{value:r,children:e(O,{bgt:"light",sx:{border:m?"2px red solid":void 0},children:e(k,{fullWidth:!0,onClick:i,variant:"outlined",color:"neutral100",sx:{p:0},children:e(ne,{teamCharId:t,children:e(ee,{color:n.length===1?"success":"warning",children:e(p,{children:n.length===1?c("teamDelModal.onlyCrrTeam"):c("teamDelModal.usingMltTeams",{count:n.length})})})})})})})}export{ne as L,te as O,oe as T};
