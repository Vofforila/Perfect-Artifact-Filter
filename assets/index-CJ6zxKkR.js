import{ab as J,r as l,ac as ft,d as e,G as o,b as t,T as i,ad as x,ae as mt,af as pt,h as D,O as C,ag as Q,ah as Y,N as X,S as $,ai as Z,v as tt,w as et,j as at,z as I,a as L,aj as rt,aa as y,ak as gt,al as yt,am as _,an as vt,ao as xt,ap as wt,M as At,aq as nt,f as F,ar as it,as as bt,at as kt,au as q,av as B,aw as M,ax as St,P as Dt,ay as Ct,az as It,aA as Rt,a9 as Tt,aB as Mt,aC as _t,aD as $t,aE as Vt,aF as Et,aG as Bt,aH as Ft,aI as Lt,aJ as Ut,aK as H}from"./index-CjAFtLKW.js";import{A as qt}from"./AddArtInfo-DqmSOqZS.js";import{L as Ot}from"./Link-DppcQ9xb.js";function jt({pageKey:a,text:n="",modalTitle:r="",children:h}){const[s,f,u]=J(typeof window<"u"&&localStorage.getItem(`infoShown_${a}`)!=="true"),[c]=l.useState(Array.isArray(n)?ft(n):n),g=l.useCallback(()=>{u(),localStorage.setItem(`infoShown_${a}`,"true")},[u,a]);return e(D,{children:[e(o,{container:!0,children:[t(o,{item:!0,flexGrow:1,children:t(i,{variant:"caption",pl:1,children:c})}),t(o,{item:!0,xs:"auto",children:t(x,{size:"small",color:"info",variant:"contained",onClick:f,startIcon:t(mt,{}),children:t(pt,{ns:"ui",key18:"info"})})})]}),t(Z,{containerProps:{maxWidth:"xl"},open:s,onClose:g,children:e(D,{children:[e(C,{sx:{py:1,display:"flex"},children:[t(i,{variant:"h6",children:r}),t(Q,{onClick:g,sx:{ml:"auto"},children:t(Y,{})})]}),t(X,{}),t(C,{children:t(l.Suspense,{fallback:t($,{variant:"rectangular",width:"100%",height:500}),children:h})})]})})]})}var O={},Kt=et;Object.defineProperty(O,"__esModule",{value:!0});var j=O.default=void 0,Pt=Kt(tt()),zt=at;j=O.default=(0,Pt.default)((0,zt.jsx)("path",{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7zm1.5 14h-6v-2h6zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2z"}),"Difference");var K={},Gt=et;Object.defineProperty(K,"__esModule",{value:!0});var ot=K.default=void 0,Wt=Gt(tt()),Ht=at;ot=K.default=(0,Wt.default)((0,Ht.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61z"}),"PersonOff");function Nt({numShowing:a,total:n,artifactIds:r}){const{t:h}=I(["artifact","ui"]),s=L(),{filterOption:f}=rt(),u=l.useCallback(c=>s.displayArtifact.set({filterOption:{...f,...c}}),[s,f]);return t(l.Suspense,{fallback:t($,{variant:"rectangular",width:"100%",height:300}),children:t(D,{children:e(C,{children:[e(o,{container:!0,children:[t(o,{item:!0,children:t(i,{variant:"h6",children:t(y,{t:h,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),t(o,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:e(i,{children:[t("strong",{children:a})," / ",n]})}),t(o,{item:!0,children:t(x,{size:"small",color:"error",onClick:()=>s.displayArtifact.set({action:"reset"}),startIcon:t(gt,{}),children:t(y,{t:h,i18nKey:"ui:reset"})})})]}),t(l.Suspense,{fallback:t($,{variant:"rectangular",width:"100%",height:400}),children:t(yt,{filterOption:f,filterOptionDispatch:u,filteredIds:r})})]})})})}function Jt({artifactIds:a}){const{t:n}=I(["artifact","ui"]),r=L(),{numDelete:h,numUnequip:s,numUnlock:f,numLock:u}=l.useMemo(()=>{const d=a.map(b=>r.arts.get(b)),p=d.reduce((b,S)=>b+(S.lock?0:1),0),w=d.length-p,V=p,A=d.reduce((b,S)=>b+(S.location?1:0),0);return{numDelete:V,numUnequip:A,numUnlock:p,numLock:w}},[a,r]);return e(o,{container:!0,spacing:1,alignItems:"center",children:[t(o,{item:!0,xs:12,sm:6,md:3,children:e(x,{fullWidth:!0,color:"error",disabled:!s,onClick:()=>window.confirm(`Are you sure you want to unequip ${s} artifacts currently equipped on characters?`)&&a.map(d=>r.arts.set(d,{location:""})),startIcon:t(ot,{}),children:[t(y,{t:n,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),t(_,{sx:{ml:1},color:s?"success":"secondary",children:s})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:e(x,{fullWidth:!0,color:"error",disabled:!h,onClick:()=>window.confirm(`Are you sure you want to delete ${h} artifacts?`)&&a.map(d=>{var p;return!((p=r.arts.get(d))!=null&&p.lock)&&r.arts.remove(d)}),startIcon:t(vt,{}),children:[t(y,{t:n,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),t(_,{sx:{ml:1},color:h?"success":"secondary",children:h})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:e(x,{fullWidth:!0,color:"error",disabled:!u,onClick:()=>window.confirm(`Are you sure you want to unlock ${u} artifacts?`)&&a.map(d=>r.arts.set(d,{lock:!1})),startIcon:t(xt,{}),children:[t(y,{t:n,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),t(_,{sx:{ml:1},color:u?"success":"secondary",children:u})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:e(x,{fullWidth:!0,color:"error",disabled:!f,onClick:()=>window.confirm(`Are you sure you want to lock ${f} artifacts?`)&&a.map(d=>r.arts.set(d,{lock:!0})),startIcon:t(wt,{}),children:[t(y,{t:n,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),t(_,{sx:{ml:1},color:f?"success":"secondary",children:f})]})}),t(o,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:t(i,{variant:"caption",color:"text.secondary",children:e(y,{t:n,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",t("b",{children:"currently filtered artifacts"})]})})})]})}function Qt({setArtifactIdToEdit:a,show:n,onHide:r}){const{t:h}=I("artifact");return t(Z,{open:n,onClose:r,children:e(D,{children:[t(At,{title:e(i,{variant:"h6",flexGrow:1,display:"flex",alignItems:"center",children:[t(j,{sx:{verticalAlign:"text-top",mr:1}}),h("showDup")]}),action:t(Q,{onClick:r,children:t(Y,{})})}),t(X,{}),t(C,{children:t(Yt,{setArtifactIdToEdit:a})})]})})}function Yt({setArtifactIdToEdit:a}){const{t:n}=I("artifact"),r=L(),[h,s]=nt();l.useEffect(()=>r.arts.followAny(s),[s,r]);const f=l.useMemo(()=>{const u=h&&[];let c=r.arts.keys;for(;c.length!==0;){const g=c.shift();if(!g)continue;const R=r.arts.get(g);if(!R)continue;const{duplicated:k}=r.arts.findDups(R,c);if(!k.length)continue;const d=k.map(p=>p.id);u.push([g,...d].sort(p=>{var w;return((w=r.arts.get(p))==null?void 0:w.location)??""?-1:1})),c=c.filter(p=>!d.includes(p))}return u},[r,h]);return e(kt,{spacing:2,children:[f.map(u=>t(D,{sx:{overflowX:"scroll"},children:t(C,{sx:{display:"flex",gap:1},children:u.map(c=>t(F,{sx:{minWidth:300},children:t(it,{artifactId:c,setLocation:g=>r.arts.set(c,{location:g}),onLockToggle:()=>r.arts.set(c,({lock:g})=>({lock:!g})),onDelete:()=>r.arts.remove(c),onEdit:()=>a(c)})},c))})},u.join())),!f.length&&t(bt,{variant:"filled",severity:"success",children:n("noDupAlert")})]})}const Xt=""+new URL("artifactcard-CYZmz0U0.png",import.meta.url).href,Zt=""+new URL("artifacteditor-BryQ3Lmm.png",import.meta.url).href,te=""+new URL("artifactfilter-DK_eMtaJ.png",import.meta.url).href;function ee(){return t(F,{display:"inline-flex",gap:.3,sx:{height:"1.5em"},children:Ct(0,5).map(a=>t(It,{color:`roll${a+1}.main`,value:(a+1)/6*100},a))})}function ae(){const{t:a}=I("artifact");return e(o,{container:!0,spacing:1,children:[t(o,{item:!0,xs:12,lg:5,xl:4,children:t(q,{src:Xt})}),t(o,{item:!0,xs:12,lg:7,xl:8,children:e(y,{t:a,i18nKey:"info.section1",children:[t(i,{variant:"h5",children:"Substat rolls"}),e(i,{gutterBottom:!0,children:["The ",t("b",{children:"number of rolls"})," a substat has is shown to the left of the substat. As the number gets higher, the substat is more colorful:",t(ee,{}),"."]}),t(i,{variant:"h5",children:"Substat Roll Value"}),e(i,{gutterBottom:!0,children:["The Roll Value(RV) of an subtat is a percentage of the current value over the highest potential 5",t(B,{...M}),"value. From the Image, the maximum roll value of CRIT DMG is 7.8%. In RV: ",t("b",{children:"5.8/7.8 = 69.2%."})]}),t(i,{variant:"h5",children:"Current Roll Value vs. Maximum Roll Value"}),e(i,{gutterBottom:!0,children:["When a 5",t(B,{...M})," have 9(4+5) total rolls, with each of the rolls having the highest value, that is defined as a 900% RV artifact. However, most of the artifacts are not this lucky. The ",t("b",{children:"Current RV"})," of an artifact is a percentage over that 100% artifact. The ",t("b",{children:"Maximum RV"})," is the maximum possible RV an artifact can achieve, if the remaining artifact rolls from upgrades are the hightest possible value."]})]})}),t(o,{item:!0,xs:12,lg:6,xl:7,children:e(y,{t:a,i18nKey:"info.section2",children:[t(i,{variant:"h5",children:"Artifact Editor"}),e(i,{gutterBottom:!0,children:["A fully featured artifact editor, that can accept any 3",t(B,{...M})," to 5",t(B,{...M})," Artifact. When a substat is inputted, it can calculate the exact roll values. It will also make sure that you have the correct number of rolls in the artifact according to the level, along with other metrics of validation."]}),t(i,{variant:"h5",children:"Scan screenshots"}),e(i,{gutterBottom:!0,children:["Manual input is not your cup of tea? You can scan in your artifacts with screenshots! On the Artifact Editor, click the",t(_,{color:"info",children:"Show Me How!"})," button to learn more."]}),t(i,{variant:"h6",children:"Automatic Artifact Scanner"}),e(i,{gutterBottom:!0,children:["If you are playing Genshin on PC, you can download a tool that automatically scans all your artifacts for you, and you can then import that data in ",t(St,{...M})," Database.",t(Ot,{component:Dt,to:"/scanner",children:"Click here"}),"for a list of scanners that are compatible with GO."]}),t(i,{variant:"h5",children:"Duplicate/Upgrade artifact detection"}),e(i,{children:["Did you know GO can detect if you are adding a ",t("b",{children:"duplicate"}),"artifact that exists in the system? It can also detect if the current artifact in editor is an ",t("b",{children:"upgrade"})," of an existing artifact as well. Once a duplicate/upgrade is detected, a preview will allow you to compare the two artifacts in question(See Image)."]})]})}),t(o,{item:!0,xs:12,lg:6,xl:5,children:t(q,{src:Zt})}),t(o,{item:!0,xs:12,lg:7,xl:6,children:t(q,{src:te})}),t(o,{item:!0,xs:12,lg:5,xl:6,children:e(y,{t:a,i18nKey:"info.section3",children:[t(i,{variant:"h5",children:"Artifact Inventory"}),e(i,{gutterBottom:!0,children:["All your artifacts that you've added to GO are displayed here. The filters here allow you to further refine your view of your artifacts."," "]}),t(i,{variant:"h5",children:"Example: Finding Fodder Artifacts"}),t(i,{children:"By utilizing the artifact filter, and the artifact RV, you can quickly find artifacts to feed as food."}),t(i,{children:"In this example, the filters are set thusly: "}),t(i,{component:"div",children:e("ul",{children:[t("li",{children:"Limit level to 0-8."}),t("li",{children:"Unlocked artifacts in Inventory."}),t("li",{children:"Removing the contribution of flat HP, flat DEF and Energy Recharge to RV calculations."}),t("li",{children:"Sorted by Ascending Max Roll Value."})]})}),t(i,{children:"This will filter the artifact Inventory by the lowest RV artifacts, for desired substats."})]})})]})}const N={xs:1,sm:2,md:3,lg:3,xl:4},re={xs:5,sm:6,md:12,lg:12,xl:12};function ce(){const{t:a}=I(["artifact","ui"]),n=L(),r=rt(),[h,s]=l.useState(),[f,u,c]=J(!1),g=Rt(),{sortType:R,effFilter:k,ascending:d}=r,[p,w]=nt(),V=l.useDeferredValue(p),A=l.useMemo(()=>new Set(k),[k]);l.useEffect(()=>(Tt.send({hitType:"pageview",page:"/artifact"}),n.arts.followAny(()=>w())),[n,w]);const b=l.useMemo(()=>!n.arts.values.length,[n]),S=l.useMemo(()=>Mt(A),[A]),P=l.useMemo(()=>_t({effFilterSet:A}),[A]),z=l.useDeferredValue(r),{artifactIds:v,totalArtNum:E}=l.useMemo(()=>{const{sortType:m=H[0],ascending:T=!1,filterOption:dt}=z,W=n.arts.values;return{artifactIds:W.filter($t(dt,P)).sort(Vt(Ft[m]??[],T,S)).map(ht=>ht.id),totalArtNum:W.length,...V}},[z,V,n,S,P]),{numShow:G,setTriggerElement:lt}=Et(re[g],v.length),U=l.useMemo(()=>v.slice(0,G),[v,G]),ct=v.length!==E?`${v.length}/${E}`:`${E}`,st={numShowing:U.length,total:ct,t:a,namespace:"artifact"},ut={sortKeys:[...H],value:R,onChange:m=>n.displayArtifact.set({sortType:m}),ascending:d,onChangeAsc:m=>n.displayArtifact.set({ascending:m})};return e(F,{display:"flex",flexDirection:"column",gap:1,children:[t(l.Suspense,{fallback:!1,children:t(Lt,{artifactIdToEdit:h,cancelEdit:()=>s(void 0),allowUpload:!0,allowEmpty:!0})}),t(l.Suspense,{fallback:!1,children:t(Qt,{show:f,onHide:c,setArtifactIdToEdit:s})}),t(jt,{pageKey:"artifactPage",modalTitle:a("info.title"),text:a("tipsOfTheDay",{returnObjects:!0}),children:t(ae,{})}),b&&t(qt,{}),t(Nt,{numShowing:v.length,total:E,artifactIds:v}),t(D,{children:e(C,{children:[t(F,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(Ut,{showingTextProps:st,sortByButtonProps:ut})}),t(Jt,{artifactIds:v})]})}),e(o,{container:!0,columns:N,spacing:1,children:[t(o,{item:!0,xs:!0,children:t(x,{fullWidth:!0,onClick:()=>s("new"),color:"info",startIcon:t(Bt,{}),children:a("addNew")})}),t(o,{item:!0,xs:1,children:t(x,{fullWidth:!0,onClick:u,color:"info",startIcon:t(j,{}),children:a("showDup")})})]}),e(l.Suspense,{fallback:t($,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:[t(o,{container:!0,spacing:1,columns:N,children:U.map(m=>t(o,{item:!0,xs:1,children:t(it,{artifactId:m,effFilter:A,onDelete:()=>n.arts.remove(m),onEdit:()=>s(m),setLocation:T=>n.arts.set(m,{location:T}),onLockToggle:()=>n.arts.set(m,({lock:T})=>({lock:!T}))})},m))}),v.length!==U.length&&t($,{ref:m=>{m&&lt(m)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}export{ce as default};