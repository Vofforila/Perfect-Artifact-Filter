import{z as S,a as F,ab as H,r as s,b as t,S as $,h as K,d as e,G as o,T as i,aa as y,ac as v,ad as at,ae as rt,O as L,af as R,ag as it,ah as nt,ai as ot,M as st,aj as ct,ak as lt,N as ut,al as dt,am as z,f as E,an as N,ao as ht,ap as ft,aq as q,ar as U,as as T,at as mt,P as pt,au as gt,av as yt,aw as wt,ax as xt,a9 as At,ay as bt,az as vt,aA as kt,aB as Dt,aC as St,aD as Ct,aE as It,aF as Tt,aG as Rt,aH as P}from"./index-2il23TaU.js";import{A as Mt}from"./AddArtInfo-DC2oSCd5.js";import{d as Bt,a as Q,I as Ut}from"./PersonOff-CR-8yOvP.js";import{L as $t}from"./Link-DpsVhdwh.js";function Et({numShowing:a,total:n,artifactIds:r}){const{t:h}=S(["artifact","ui"]),u=F(),{filterOption:p}=H(),f=s.useCallback(c=>u.displayArtifact.set({filterOption:{...p,...c}}),[u,p]);return t(s.Suspense,{fallback:t($,{variant:"rectangular",width:"100%",height:300}),children:t(K,{children:e(L,{children:[e(o,{container:!0,children:[t(o,{item:!0,children:t(i,{variant:"h6",children:t(y,{t:h,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),t(o,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:e(i,{children:[t("strong",{children:a})," / ",n]})}),t(o,{item:!0,children:t(v,{size:"small",color:"error",onClick:()=>u.displayArtifact.set({action:"reset"}),startIcon:t(at,{}),children:t(y,{t:h,i18nKey:"ui:reset"})})})]}),t(s.Suspense,{fallback:t($,{variant:"rectangular",width:"100%",height:400}),children:t(rt,{filterOption:p,filterOptionDispatch:f,filteredIds:r})})]})})})}function Ft({artifactIds:a}){const{t:n}=S(["artifact","ui"]),r=F(),{numDelete:h,numUnequip:u,numUnlock:p,numLock:f}=s.useMemo(()=>{const l=a.map(b=>r.arts.get(b)),m=l.reduce((b,D)=>b+(D.lock?0:1),0),x=l.length-m,M=m,A=l.reduce((b,D)=>b+(D.location?1:0),0);return{numDelete:M,numUnequip:A,numUnlock:m,numLock:x}},[a,r]);return e(o,{container:!0,spacing:1,alignItems:"center",children:[t(o,{item:!0,xs:12,sm:6,md:3,children:e(v,{fullWidth:!0,color:"error",disabled:!u,onClick:()=>window.confirm(`Are you sure you want to unequip ${u} artifacts currently equipped on characters?`)&&a.map(l=>r.arts.set(l,{location:""})),startIcon:t(Bt,{}),children:[t(y,{t:n,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),t(R,{sx:{ml:1},color:u?"success":"secondary",children:u})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:e(v,{fullWidth:!0,color:"error",disabled:!h,onClick:()=>window.confirm(`Are you sure you want to delete ${h} artifacts?`)&&a.map(l=>{var m;return!((m=r.arts.get(l))!=null&&m.lock)&&r.arts.remove(l)}),startIcon:t(it,{}),children:[t(y,{t:n,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),t(R,{sx:{ml:1},color:h?"success":"secondary",children:h})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:e(v,{fullWidth:!0,color:"error",disabled:!f,onClick:()=>window.confirm(`Are you sure you want to unlock ${f} artifacts?`)&&a.map(l=>r.arts.set(l,{lock:!1})),startIcon:t(nt,{}),children:[t(y,{t:n,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),t(R,{sx:{ml:1},color:f?"success":"secondary",children:f})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:e(v,{fullWidth:!0,color:"error",disabled:!p,onClick:()=>window.confirm(`Are you sure you want to lock ${p} artifacts?`)&&a.map(l=>r.arts.set(l,{lock:!0})),startIcon:t(ot,{}),children:[t(y,{t:n,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),t(R,{sx:{ml:1},color:p?"success":"secondary",children:p})]})}),t(o,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:t(i,{variant:"caption",color:"text.secondary",children:e(y,{t:n,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",t("b",{children:"currently filtered artifacts"})]})})})]})}function Kt({setArtifactIdToEdit:a,show:n,onHide:r}){const{t:h}=S("artifact");return t(dt,{open:n,onClose:r,children:e(K,{children:[t(st,{title:e(i,{variant:"h6",flexGrow:1,display:"flex",alignItems:"center",children:[t(Q,{sx:{verticalAlign:"text-top",mr:1}}),h("showDup")]}),action:t(ct,{onClick:r,children:t(lt,{})})}),t(ut,{}),t(L,{children:t(Lt,{setArtifactIdToEdit:a})})]})})}function Lt({setArtifactIdToEdit:a}){const{t:n}=S("artifact"),r=F(),[h,u]=z();s.useEffect(()=>r.arts.followAny(u),[u,r]);const p=s.useMemo(()=>{const f=h&&[];let c=r.arts.keys;for(;c.length!==0;){const g=c.shift();if(!g)continue;const C=r.arts.get(g);if(!C)continue;const{duplicated:k}=r.arts.findDups(C,c);if(!k.length)continue;const l=k.map(m=>m.id);f.push([g,...l].sort(m=>{var x;return((x=r.arts.get(m))==null?void 0:x.location)??""?-1:1})),c=c.filter(m=>!l.includes(m))}return f},[r,h]);return e(ft,{spacing:2,children:[p.map(f=>t(K,{sx:{overflowX:"scroll"},children:t(L,{sx:{display:"flex",gap:1},children:f.map(c=>t(E,{sx:{minWidth:300},children:t(N,{artifactId:c,setLocation:g=>r.arts.set(c,{location:g}),onLockToggle:()=>r.arts.set(c,({lock:g})=>({lock:!g})),onDelete:()=>r.arts.remove(c),onEdit:()=>a(c)})},c))})},f.join())),!p.length&&t(ht,{variant:"filled",severity:"success",children:n("noDupAlert")})]})}const Vt=""+new URL("artifactcard-CYZmz0U0.png",import.meta.url).href,qt=""+new URL("artifacteditor-BryQ3Lmm.png",import.meta.url).href,Ot=""+new URL("artifactfilter-DK_eMtaJ.png",import.meta.url).href;function Gt(){return t(E,{display:"inline-flex",gap:.3,sx:{height:"1.5em"},children:gt(0,5).map(a=>t(yt,{color:`roll${a+1}.main`,value:(a+1)/6*100},a))})}function Wt(){const{t:a}=S("artifact");return e(o,{container:!0,spacing:1,children:[t(o,{item:!0,xs:12,lg:5,xl:4,children:t(q,{src:Vt})}),t(o,{item:!0,xs:12,lg:7,xl:8,children:e(y,{t:a,i18nKey:"info.section1",children:[t(i,{variant:"h5",children:"Substat rolls"}),e(i,{gutterBottom:!0,children:["The ",t("b",{children:"number of rolls"})," a substat has is shown to the left of the substat. As the number gets higher, the substat is more colorful:",t(Gt,{}),"."]}),t(i,{variant:"h5",children:"Substat Roll Value"}),e(i,{gutterBottom:!0,children:["The Roll Value(RV) of an subtat is a percentage of the current value over the highest potential 5",t(U,{...T}),"value. From the Image, the maximum roll value of CRIT DMG is 7.8%. In RV: ",t("b",{children:"5.8/7.8 = 69.2%."})]}),t(i,{variant:"h5",children:"Current Roll Value vs. Maximum Roll Value"}),e(i,{gutterBottom:!0,children:["When a 5",t(U,{...T})," have 9(4+5) total rolls, with each of the rolls having the highest value, that is defined as a 900% RV artifact. However, most of the artifacts are not this lucky. The ",t("b",{children:"Current RV"})," of an artifact is a percentage over that 100% artifact. The ",t("b",{children:"Maximum RV"})," is the maximum possible RV an artifact can achieve, if the remaining artifact rolls from upgrades are the hightest possible value."]})]})}),t(o,{item:!0,xs:12,lg:6,xl:7,children:e(y,{t:a,i18nKey:"info.section2",children:[t(i,{variant:"h5",children:"Artifact Editor"}),e(i,{gutterBottom:!0,children:["A fully featured artifact editor, that can accept any 3",t(U,{...T})," to 5",t(U,{...T})," Artifact. When a substat is inputted, it can calculate the exact roll values. It will also make sure that you have the correct number of rolls in the artifact according to the level, along with other metrics of validation."]}),t(i,{variant:"h5",children:"Scan screenshots"}),e(i,{gutterBottom:!0,children:["Manual input is not your cup of tea? You can scan in your artifacts with screenshots! On the Artifact Editor, click the",t(R,{color:"info",children:"Show Me How!"})," button to learn more."]}),t(i,{variant:"h6",children:"Automatic Artifact Scanner"}),e(i,{gutterBottom:!0,children:["If you are playing Genshin on PC, you can download a tool that automatically scans all your artifacts for you, and you can then import that data in ",t(mt,{...T})," Database.",t($t,{component:pt,to:"/scanner",children:"Click here"}),"for a list of scanners that are compatible with GO."]}),t(i,{variant:"h5",children:"Duplicate/Upgrade artifact detection"}),e(i,{children:["Did you know GO can detect if you are adding a ",t("b",{children:"duplicate"}),"artifact that exists in the system? It can also detect if the current artifact in editor is an ",t("b",{children:"upgrade"})," of an existing artifact as well. Once a duplicate/upgrade is detected, a preview will allow you to compare the two artifacts in question(See Image)."]})]})}),t(o,{item:!0,xs:12,lg:6,xl:5,children:t(q,{src:qt})}),t(o,{item:!0,xs:12,lg:7,xl:6,children:t(q,{src:Ot})}),t(o,{item:!0,xs:12,lg:5,xl:6,children:e(y,{t:a,i18nKey:"info.section3",children:[t(i,{variant:"h5",children:"Artifact Inventory"}),e(i,{gutterBottom:!0,children:["All your artifacts that you've added to GO are displayed here. The filters here allow you to further refine your view of your artifacts."," "]}),t(i,{variant:"h5",children:"Example: Finding Fodder Artifacts"}),t(i,{children:"By utilizing the artifact filter, and the artifact RV, you can quickly find artifacts to feed as food."}),t(i,{children:"In this example, the filters are set thusly: "}),t(i,{component:"div",children:e("ul",{children:[t("li",{children:"Limit level to 0-8."}),t("li",{children:"Unlocked artifacts in Inventory."}),t("li",{children:"Removing the contribution of flat HP, flat DEF and Energy Recharge to RV calculations."}),t("li",{children:"Sorted by Ascending Max Roll Value."})]})}),t(i,{children:"This will filter the artifact Inventory by the lowest RV artifacts, for desired substats."})]})})]})}const j={xs:1,sm:2,md:3,lg:3,xl:4},_t={xs:5,sm:6,md:12,lg:12,xl:12};function Qt(){const{t:a}=S(["artifact","ui"]),n=F(),r=H(),[h,u]=s.useState(),[p,f,c]=wt(!1),g=xt(),{sortType:C,effFilter:k,ascending:l}=r,[m,x]=z(),M=s.useDeferredValue(m),A=s.useMemo(()=>new Set(k),[k]);s.useEffect(()=>(At.send({hitType:"pageview",page:"/artifact"}),n.arts.followAny(()=>x())),[n,x]);const b=s.useMemo(()=>!n.arts.values.length,[n]),D=s.useMemo(()=>bt(A),[A]),O=s.useMemo(()=>vt({effFilterSet:A}),[A]),G=s.useDeferredValue(r),{artifactIds:w,totalArtNum:B}=s.useMemo(()=>{const{sortType:d=P[0],ascending:I=!1,filterOption:tt}=G,_=n.arts.values;return{artifactIds:_.filter(kt(tt,O)).sort(Dt(It[d]??[],I,D)).map(et=>et.id),totalArtNum:_.length,...M}},[G,M,n,D,O]),{numShow:W,setTriggerElement:Y}=St(_t[g],w.length),V=s.useMemo(()=>w.slice(0,W),[w,W]),J=w.length!==B?`${w.length}/${B}`:`${B}`,X={numShowing:V.length,total:J,t:a,namespace:"artifact"},Z={sortKeys:[...P],value:C,onChange:d=>n.displayArtifact.set({sortType:d}),ascending:l,onChangeAsc:d=>n.displayArtifact.set({ascending:d})};return e(E,{display:"flex",flexDirection:"column",gap:1,children:[t(s.Suspense,{fallback:!1,children:t(Tt,{artifactIdToEdit:h,cancelEdit:()=>u(void 0),allowUpload:!0,allowEmpty:!0})}),t(s.Suspense,{fallback:!1,children:t(Kt,{show:p,onHide:c,setArtifactIdToEdit:u})}),t(Ut,{pageKey:"artifactPage",modalTitle:a("info.title"),text:a("tipsOfTheDay",{returnObjects:!0}),children:t(Wt,{})}),b&&t(Mt,{}),t(Et,{numShowing:w.length,total:B,artifactIds:w}),t(K,{children:e(L,{children:[t(E,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(Rt,{showingTextProps:X,sortByButtonProps:Z})}),t(Ft,{artifactIds:w})]})}),e(o,{container:!0,columns:j,spacing:1,children:[t(o,{item:!0,xs:!0,children:t(v,{fullWidth:!0,onClick:()=>u("new"),color:"info",startIcon:t(Ct,{}),children:a("addNew")})}),t(o,{item:!0,xs:1,children:t(v,{fullWidth:!0,onClick:f,color:"info",startIcon:t(Q,{}),children:a("showDup")})})]}),e(s.Suspense,{fallback:t($,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:[t(o,{container:!0,spacing:1,columns:j,children:V.map(d=>t(o,{item:!0,xs:1,children:t(N,{artifactId:d,effFilter:A,onDelete:()=>n.arts.remove(d),onEdit:()=>u(d),setLocation:I=>n.arts.set(d,{location:I}),onLockToggle:()=>n.arts.set(d,({lock:I})=>({lock:!I}))})},d))}),w.length!==V.length&&t($,{ref:d=>{d&&Y(d)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}export{Qt as default};
