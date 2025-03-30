import{z as E,b as e,d as a,aa as ne,ao as Pe,a as _,A as N,r as o,bq as re,f as u,G as h,h as b,bW as Ge,bX as qe,bY as ze,bZ as Ve,W as xe,bl as Ue,b_ as He,af as ue,Z as Ye,b$ as pe,c0 as Ze,c1 as ae,M as L,aj as se,ak as H,N as $,O as M,T as A,c2 as Je,c3 as O,bR as K,p as Y,e as P,c4 as ye,a8 as Qe,c5 as Xe,ac as k,ag as le,al as ie,aw as Ce,c6 as et,c7 as tt,o as at,c8 as nt,ap as rt,aD as Z,c9 as st,ca as lt,cb as be,bB as it,v as ve,w as Te,j as we,t as q,bE as ce,cc as ct,aW as Se,bF as ot,cd as dt,ce as ht,cf as ut,D as De,cg as ge,E as pt,J as gt,ch as mt,ci as me,am as ke,cj as ft,S as G,i as xt,l as yt,ck as Ct,bv as bt,cl as vt,ax as Tt,a9 as wt,aA as St,aB as Dt,b0 as te,aC as kt,b3 as It,cm as Mt,cn as Et,be as jt,aG as _t,co as Wt,cp as Ie,cq as $t,cr as At,I as Bt,H as Ot,g as Lt,F as Nt,cs as Rt,ct as Ft}from"./index-ByFzPjUD.js";import{u as Kt,B as Me,a as Ee,L as Pt,T as fe,d as Gt,b as qt,c as zt,e as Vt,C as Ut,f as Ht,g as Yt,E as Zt}from"./LoadoutInfoAlert-Cv2KPehD.js";import{T as je}from"./TeamCard-CXpPxeZM.js";import{u as Jt}from"./useTeamChar-DvFSif7G.js";import{O as Qt,L as Xt}from"./TeamDelModal-D7uoDKzW.js";function ea(){const{t}=E("page_character");return e(Pe,{severity:"warning",children:a(ne,{t,i18nKey:"noLoadout",children:["Looks like you haven't added any loadout/Teams with this character yet. You need to create a loadout+team with this character to"," ",e("strong",{children:"create builds"}),", ",e("strong",{children:"theorycraft"}),", or"," ",e("strong",{children:"optimize"}),"."]})})}function ta(){const t=_(),s=N();return o.useCallback(n=>{t.chars.get(n)||t.chars.getWithInitWeapon(n),s(`/characters/${n}`)},[s,t])}function aa({buildId:t,characterKey:s}){const{name:r,description:n,weaponId:i,artifactIds:p}=Kt(t),d=re(s).weaponType;return e(Me,{name:r,description:n,hideFooter:!0,children:e(u,{sx:{display:"flex",flexDirection:"column",gap:1,alignItems:"stretch"},children:a(h,{container:!0,spacing:1,columns:{xs:2,sm:2,md:2,lg:3,xl:3},children:[e(h,{item:!0,xs:1,children:e(b,{sx:{height:"100%",maxHeight:"8em"},children:e(Ge,{weaponId:i,weaponTypeKey:d})})}),Object.entries(p).map(([m,x])=>e(h,{item:!0,xs:1,children:e(b,{sx:{height:"100%",maxHeight:"8em"},children:e(qe,{artifactId:x,slotKey:m})})},x||m))]})})})}function na({buildTcId:t}){const s=Ee(t),{name:r,description:n}=s;return e(Me,{name:r,description:n,hideFooter:!0,children:e(ra,{buildTcId:t})})}function ra({buildTcId:t}){const{weapon:s,artifact:{slots:r,substats:{stats:n},sets:i}}=Ee(t),p=ze(s.key),d=Object.entries(n),m=d.slice(0,5),x=d.slice(5);return e(u,{children:a(h,{container:!0,spacing:1,columns:{xs:2,sm:2,md:2,lg:2,xl:2},children:[e(h,{item:!0,xs:1,children:a(u,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(Ve,{weapon:s,weaponSheet:p}),!!Object.keys(i).length&&e(b,{sx:{flexGrow:1},children:e(u,{sx:{p:1,display:"flex",flexDirection:"column",gap:1},children:Object.entries(i).map(([c,l])=>a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(xe,{size:2,src:Ue(c,"flower")}),e("span",{children:e(He,{setKey:c})}),a(ue,{children:["x",l]})]},c))})})]})}),e(h,{item:!0,xs:1,children:e(b,{sx:{flexGrow:1,height:"100%",p:1,display:"flex",flexDirection:"column",gap:1,justifyContent:"space-between"},children:Object.entries(r).map(([c,{level:l,statKey:f}])=>a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Ye,{slotKey:c}),a(ue,{children:["+",l]}),e(pe,{statKey:f})]},c))})}),[m,x].map((c,l)=>e(h,{item:!0,xs:1,children:e(b,{sx:{flexGrow:1,height:"100%"},children:e(u,{sx:{p:1,height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:1},children:c.map(([f,v])=>a(u,{sx:{display:"flex",alignItems:"center",gap:1,justifyContent:"space-between"},children:[e(pe,{statKey:f}),a("span",{children:[Ze(v,ae(f)),ae(f)]})]},f))})})},l))]})})}function sa({show:t,onHide:s,teamCharId:r,onDelete:n,teamIds:i,conditionalCount:p}){const{t:d}=E("loadout"),m=_(),{name:x,description:c,buildIds:l,buildTcIds:f,customMultiTargets:v,bonusStats:S}=m.teamChars.get(r),W=o.useCallback(()=>{s(),n()},[n,s]);return e(ie,{open:t,onClose:s,containerProps:{maxWidth:"md"},children:a(b,{children:[e(L,{title:e("span",{children:a(ne,{t:d,i18nKey:"loadoutDelModal.title",name:x,children:["Delete Loadout: ",e("strong",{children:{name:x}}),"?"]})}),action:e(se,{onClick:s,children:e(H,{})})}),e($,{}),a(M,{children:[c&&e(b,{bgt:"dark",sx:{mb:2},children:e(M,{children:c})}),e(A,{children:d("loadoutDelModal.desc")}),a(Je,{sx:{listStyleType:"disc",pl:4},children:[!!l.length&&e(O,{sx:{display:"list-item"},children:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[d("loadoutDelModal.builds"),l.length," ",e(K,{title:e(u,{children:l.map(C=>{var T;return a(A,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Y,{}),e("span",{children:(T=m.builds.get(C))==null?void 0:T.name})]},C)})}),children:e(P,{})})]})}),!!f.length&&e(O,{sx:{display:"list-item"},children:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[d("loadoutDelModal.tcBuilds"),f.length," ",e(K,{title:e(u,{children:f.map(C=>{var T;return a(A,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Y,{}),e("span",{children:(T=m.buildTcs.get(C))==null?void 0:T.name})]},C)})}),children:e(P,{})})]})}),!!v.length&&e(O,{sx:{display:"list-item"},children:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[d("loadoutDelModal.mTargets"),v.length," ",e(K,{title:e(u,{children:v.map((C,T)=>a(A,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(ye,{}),e("span",{children:C.name})]},T))}),children:e(P,{})})]})}),!!Object.keys(S).length&&a(O,{sx:{display:"list-item"},children:[d("loadoutDelModal.bonus"),Object.keys(S).length]}),!!p&&a(O,{sx:{display:"list-item"},children:[d("loadoutDelModal.condi"),p]}),e(O,{sx:{display:"list-item"},children:d("loadoutDelModal.optConfig")}),!!i.length&&e(O,{sx:{display:"list-item"},children:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[a("span",{children:[d("loadoutDelModal.affected"),i.length]}),e(K,{title:e(u,{children:i.map(C=>{var T;return a(A,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Qe,{}),e("span",{children:(T=m.teams.get(C))==null?void 0:T.name})]},C)})}),children:e(P,{})})]})})]})]}),a(Xe,{sx:{float:"right"},children:[e(k,{startIcon:e(H,{}),color:"secondary",onClick:s,children:d("loadoutDelModal.cancel")}),e(k,{startIcon:e(le,{}),color:"error",onClick:W,children:d("loadoutDelModal.delete")})]})]})})}function la({show:t,onHide:s,teamCharId:r,teamIds:n}){const{t:i}=E("loadout"),[p,d,m]=Ce(),x=N(),c=_(),{key:l,name:f,description:v,buildIds:S,buildTcIds:W,customMultiTargets:C,bonusStats:T,optConfigId:z,conditional:R}=Jt(r),{optimizationTarget:w}=et(z),F=()=>{s(),c.teamChars.remove(r)},J=()=>{c.teamChars.duplicate(r)&&s()},Q=y=>{const j=c.teams.new();c.teams.set(j,X=>{X.loadoutData[0]={teamCharId:y}}),x(`/teams/${j}`)},V=o.useMemo(()=>{let y=0;return tt(R,[],j=>typeof j!="object",()=>y++),y},[R]);return e(ie,{open:t,onClose:s,containerProps:{maxWidth:"lg"},children:a(b,{children:[e(L,{title:a(u,{display:"flex",gap:1,alignItems:"center",children:[e(at,{}),e("strong",{children:f})]}),action:e(se,{onClick:s,children:e(H,{})})}),e($,{}),a(M,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(Pt,{}),e(fe,{fullWidth:!0,label:i("loadoutEditor.label"),placeholder:i("loadoutEditor.placeholder"),value:f,onChange:y=>c.teamChars.set(r,{name:y})}),e(fe,{fullWidth:!0,label:i("loadoutEditor.desc"),value:v,onChange:y=>c.teamChars.set(r,{description:y}),multiline:!0,minRows:2}),e(u,{children:a(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:[e(h,{item:!0,xs:1,children:e(k,{color:"info",onClick:()=>J(),fullWidth:!0,startIcon:e(Gt,{}),children:i("loadoutEditor.dupBtn")})}),a(h,{item:!0,xs:1,children:[e(sa,{show:p,onHide:m,onDelete:F,teamCharId:r,teamIds:n,conditionalCount:V}),e(k,{fullWidth:!0,startIcon:e(le,{}),color:"error",onClick:d,children:i("loadoutEditor.delBtn")})]})]})}),e(u,{children:a(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:[!!Object.keys(T).length&&e(h,{item:!0,xs:1,children:e(ia,{bonusStats:T})}),!!w&&e(h,{item:!0,xs:1,children:a(b,{bgt:"light",children:[e(L,{title:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(nt,{}),e("span",{children:i("loadoutEditor.optTarget")})]})}),e($,{}),e(M,{children:e(rt,{divider:e($,{orientation:"vertical",flexItem:!0}),spacing:1,children:e(Qt,{optimizationTarget:w,customMultiTargets:C})})})]})}),!!C.length&&e(h,{item:!0,xs:1,children:e(ca,{customMultiTargets:C})}),e(h,{item:!0,xs:1,children:e(b,{bgt:"light",children:e(M,{children:a(A,{variant:"h6",children:[i("loadoutEditor.conditionals"),e("strong",{children:V})]})})})})]})})]}),e($,{}),e(L,{title:a(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(Y,{}),e("span",{children:i("loadoutEditor.builds")})]})}),e($,{}),a(M,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(qt,{}),e(u,{children:e(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:S.map(y=>e(h,{item:!0,xs:1,children:e(aa,{buildId:y,characterKey:l})},y))})}),e(zt,{}),e(u,{children:e(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:W.map(y=>e(h,{item:!0,xs:1,children:e(na,{buildTcId:y})},y))})})]}),e($,{}),e(L,{title:a(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(Y,{}),e("span",{children:i("loadoutEditor.teams")})]})}),e($,{}),a(M,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(Vt,{}),a(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:[n.map(y=>e(h,{item:!0,xs:1,children:e(je,{bgt:"light",teamId:y,onClick:j=>x(`/teams/${y}${j?`/${j}`:""}`)})},y)),e(h,{item:!0,xs:1,children:e(k,{fullWidth:!0,sx:{height:"100%",backgroundColor:"contentLight.main"},variant:"outlined",onClick:()=>Q(r),color:"info",startIcon:e(Z,{}),children:i("loadoutEditor.addNewTeam")})})]})]})]})})}function ia({bonusStats:t}){const{t:s}=E("loadout");return a(b,{bgt:"light",children:[e(L,{title:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(st,{}),e("span",{children:s("loadoutEditor.bonusStats")})]}),titleTypographyProps:{variant:"h6"}}),e(be,{bgt:"light",sections:[{fields:Object.entries(t).map(([r,n])=>({text:lt.getStr(r)??r,value:n,unit:ae(r)}))}]})]})}function ca({customMultiTargets:t}){const{t:s}=E("loadout");return a(b,{bgt:"light",children:[e(L,{title:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(ye,{}),e("span",{children:s("loadoutEditor.mltTargets")})]}),titleTypographyProps:{variant:"h6"}}),e(be,{bgt:"light",sections:[{fields:t.map(({name:r,description:n})=>({text:r,value:n?e(K,{title:n,children:e(P,{})}):void 0}))}]})]})}const oa={xs:1,md:2};function da({teamCharId:t,teamIds:s}){const{t:r}=E("page_character"),n=N(),i=_(),p=c=>{const l=i.teams.new();i.teams.set(l,f=>{f.loadoutData[0]={teamCharId:c}}),n(`/teams/${l}`)},[d,m,x]=Ce();return a(it,{children:[e(la,{show:d,onHide:x,teamCharId:t,teamIds:s}),a(b,{bgt:"light",children:[e(k,{fullWidth:!0,onClick:m,sx:{p:0,display:"flex",borderBottomLeftRadius:0,borderBottomRightRadius:0},color:"neutral100",variant:"outlined",children:e(Xt,{teamCharId:t,showSetting:!0})}),e(M,{sx:{p:1},children:a(h,{container:!0,columns:oa,spacing:1,children:[s.map(c=>e(h,{item:!0,xs:1,children:e(je,{teamId:c,onClick:l=>n(`/teams/${c}${l?`/${l}`:""}`)})},c)),e(h,{item:!0,xs:1,children:e(k,{fullWidth:!0,sx:{height:"100%",backgroundColor:"contentNormal.main"},variant:"outlined",onClick:()=>p(t),color:"info",startIcon:e(Z,{}),children:r("charContentModal.addTeam")})})]})})]},t)]})}var oe={},ha=Te;Object.defineProperty(oe,"__esModule",{value:!0});var _e=oe.default=void 0,ua=ha(ve()),pa=we;_e=oe.default=(0,ua.default)((0,pa.jsx)("path",{d:"M17.5 9.5C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5c0 2.7 1.94 4.93 4.5 5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1c2.56-.47 4.5-2.7 4.5-5.4m-9 0C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5"}),"Female");var de={},ga=Te;Object.defineProperty(de,"__esModule",{value:!0});var We=de.default=void 0,ma=ga(ve()),fa=we;We=de.default=(0,ma.default)((0,fa.jsx)("path",{d:"M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18 6 16.43 6 14.5 7.57 11 9.5 11m0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9"}),"Male");function xa(){const{t}=E("ui"),s=_(),{character:r}=o.useContext(q),{key:n}=r,{gender:i}=ce(),p=o.useCallback(()=>s.dbMeta.set({gender:i==="F"?"M":"F"}),[i,s]);return n.startsWith("Traveler")?a(k,{onClick:p,startIcon:i==="F"?e(_e,{}):e(We,{}),children:[e("strong",{children:t(`gender.${i}`)})," "]}):null}function ya({onClose:t}){const{t:s}=E(["page_character","sillyWisher_charNames","charNames_gen"]),r=N(),n=_(),{character:i,character:{key:p}}=o.useContext(q),{gender:d}=ce(),m=ct(p,d),{silly:x}=o.useContext(Se),c=o.useCallback(async()=>{const l=s(`${x?"sillyWisher_charNames":"charNames_gen"}:${ot(p,d)}`);window.confirm(s("removeCharacter",{value:l}))&&(n.chars.remove(p),r("/characters"))},[n,r,p,d,x,s]);return a(u,{display:"flex",flexDirection:"column",gap:1,children:[a(u,{display:"flex",gap:1,children:[e(xa,{}),e(k,{color:"error",onClick:()=>c(),startIcon:e(le,{}),sx:{marginLeft:"auto"},children:s("delete")}),!!t&&e(se,{onClick:t,children:e(H,{})})]}),e(u,{children:a(h,{container:!0,spacing:1,sx:{justifyContent:"center"},children:[e(h,{item:!0,xs:8,sm:5,md:4,lg:3,children:a(b,{bgt:"light",sx:{height:"100%",display:"flex",flexDirection:"column",gap:1},children:[e(Ut,{}),e(u,{sx:{px:1},children:e(dt,{level:i.level,ascension:i.ascension,setBoth:l=>n.chars.set(p,l)})}),e(ht,{bgt:"light"}),e(A,{sx:{textAlign:"center",pb:-1},variant:"h6",children:e(ut,{characterKey:p,gender:d})}),e(u,{sx:{px:1},children:e(Ht,{setConstellation:l=>n.chars.set(p,{constellation:l})})})]})}),a(h,{item:!0,xs:12,sm:7,md:8,lg:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[e(u,{children:e(h,{container:!0,columns:3,spacing:1,children:["auto","skill","burst"].map(l=>{var f;return e(h,{item:!0,xs:1,children:e(Yt,{talentKey:l,dropDownButtonProps:{startIcon:e(xe,{src:(f=m.getTalentOfKey(l))==null?void 0:f.img,size:1.75,sideMargin:!0})},setTalent:v=>n.chars.set(p,S=>{S.talent[l]=v})},l)},l)})})}),e(Ca,{}),e(ba,{})]})]})})]})}function Ca(){const{character:{key:t,equippedArtifacts:s}}=o.useContext(q),{data:r}=o.useContext(De),n=_(),i=re(t).weaponType,p=r.get(ge.weapon.id).value,d=o.useMemo(()=>pt(gt,m=>r.get(ge.art[m].id).value),[r]);return e(u,{children:e(mt.Provider,{value:"equipped",children:e(Zt,{weaponTypeKey:i,weaponId:p,artifactIds:d,setWeapon:m=>{n.weapons.set(m,{location:me(t)})},setArtifact:(m,x)=>{x?n.arts.set(x,{location:me(t)}):n.arts.set(s[m],{location:""})}})})})}function ba(){const{t}=E("page_character"),s=N(),{character:{key:r}}=o.useContext(q),n=_(),{gender:i}=ce(),[p,d]=ke(),m=o.useMemo(()=>{const c={};return n.teamChars.entries.map(([l,f])=>{f.key===r&&(c[l]||(c[l]=[]))}),n.teams.entries.forEach(([l,f])=>{const v=f.loadoutData.find(S=>{var W;return S&&((W=n.teamChars.get(S==null?void 0:S.teamCharId))==null?void 0:W.key)===r});v&&c[v==null?void 0:v.teamCharId].push(l)}),p&&c},[p,r,n]);o.useEffect(()=>n.teams.followAny(()=>d()),[n,d]),o.useEffect(()=>n.teamChars.followAny(()=>d()),[n,d]);const x=()=>{const c=n.teams.new(),l=n.teamChars.new(r);n.teams.set(c,f=>{f.loadoutData[0]={teamCharId:l}}),s(`/teams/${c}`)};return a(u,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(A,{variant:"h6",children:a(ne,{t,i18nKey:"charContentModal.loadoutsWith",children:["Team Loadouts with"," ",e(ft,{characterKey:r,gender:i})]})}),!Object.values(m).length&&e(ea,{}),Object.entries(m).map(([c,l])=>e(da,{teamCharId:c,teamIds:l},c)),e(k,{fullWidth:!0,onClick:()=>x(),color:"info",startIcon:e(Z,{}),variant:"outlined",sx:{backgroundColor:"contentLight.main"},children:t("charContentModal.addLoAndTeam")}),e(b,{bgt:"light"})]})}function va({characterKey:t,onClose:s}){return e(ie,{open:!!t,onClose:s,children:e(o.Suspense,{fallback:e(G,{variant:"rectangular",width:"100%",height:1e3}),children:t&&e(Ta,{characterKey:t,onClose:s},t)})})}function Ta({characterKey:t,onClose:s}){const r=xt(t),n=yt(t),{target:i}=(n==null?void 0:n[t])??{},p=o.useMemo(()=>{if(!(!n||!i))return{data:i,teamData:n,compareData:void 0}},[i,n]),d=o.useMemo(()=>r&&{character:r},[r]),[m,x]=o.useState(),[c,l]=o.useState(),f=o.useMemo(()=>({chartData:m,setChartData:x,graphBuilds:c,setGraphBuilds:l}),[m,c]);return o.useEffect(()=>{x(void 0),l(void 0)},[t]),e(b,{children:e(M,{sx:{display:"flex",flexDirection:"column",gap:1},children:e(o.Suspense,{fallback:e(G,{variant:"rectangular",width:"100%",height:1e3}),children:p&&d&&f?e(q.Provider,{value:d,children:e(De.Provider,{value:p,children:e(Ct.Provider,{value:f,children:e(ya,{onClose:s})})})}):e(G,{variant:"rectangular",width:"100%",height:1e3})})})})}const wa={xs:1,sm:2,md:3,lg:4,xl:4},Sa={xs:5,sm:8,md:9,lg:12,xl:12},Da=Object.keys(Ie);function _a(){const t=_(),s=N(),{params:{characterKey:r}}=bt({path:"/characters/:characterKey",end:!1})??{params:{}},n=o.useMemo(()=>r?vt(r)?(t.chars.get(r)||t.chars.getWithInitWeapon(r),r):(s("/characters"),null):null,[r,s,t]),{t:i}=E(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:p}=o.useContext(Se),[d,m]=o.useState(()=>t.displayCharacter.get());o.useEffect(()=>t.displayCharacter.follow((g,D)=>m(D)),[t,m]);const[x,c]=o.useState(""),l=o.useDeferredValue(x),f=Tt(),[v,S]=o.useState(!1),[W,C]=ke();o.useEffect(()=>(wt.send({hitType:"pageview",page:"/characters"}),t.chars.followAny((g,D)=>(D==="new"||D==="remove")&&C())),[C,t]),o.useEffect(()=>t.charMeta.followAny(g=>C()),[C,t]);const T=ta(),z=o.useDeferredValue(d),R=o.useDeferredValue(W),{charKeys:w,totalCharNum:F}=o.useMemo(()=>{const D=t.chars.keys.length,{element:B,weaponType:I,rarity:U,sortType:Re,ascending:Fe}=z,Ke=t.chars.keys.filter(St({element:B,weaponType:I,rarity:U,name:l},$t(t,p))).sort(Dt(Ie[Re]??[],Fe,At(t,p),["new","favorite"]));return R&&{charKeys:Ke,totalCharNum:D}},[t,z,l,p,R]),{weaponType:J,element:Q,rarity:V,sortType:y,ascending:j}=d,X=o.useMemo(()=>te(Ot,g=>Object.entries(t.chars.data).forEach(([D,B])=>{const I=t.weapons.get(B.equippedWeapon);if(!I)return;const U=Bt(I.key).weaponType;g[U].total++,w.includes(D)&&g[U].current++})),[t,w]),$e=o.useMemo(()=>te(Nt,g=>Object.entries(t.chars.data).forEach(([D,B])=>{const I=Lt(B.key);g[I].total++,w.includes(D)&&g[I].current++})),[t,w]),Ae=o.useMemo(()=>te(Rt,g=>Object.entries(t.chars.data).forEach(([D,B])=>{const I=re(B.key).rarity;g[I].total++,w.includes(D)&&g[I].current++})),[t,w]),{numShow:he,setTriggerElement:Be}=kt(Sa[f],w.length),ee=o.useMemo(()=>w.slice(0,he),[w,he]),Oe=w.length!==F?`${w.length}/${F}`:`${F}`,Le={numShowing:ee.length,total:Oe,t:i,namespace:"page_character"},Ne={sortKeys:[...Da],value:y,onChange:g=>t.displayCharacter.set({sortType:g}),ascending:j,onChangeAsc:g=>t.displayCharacter.set({ascending:g})};return a(u,{display:"flex",flexDirection:"column",gap:1,children:[n&&e(va,{characterKey:n,onClose:()=>s("/characters")}),e(o.Suspense,{fallback:!1,children:e(Ft,{newFirst:!0,show:v,onHide:()=>S(!1),onSelect:T})}),e(b,{children:a(M,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(h,{container:!0,spacing:1,children:[e(h,{item:!0,children:e(It,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({weaponType:g}),value:J,totals:X,size:"small"})}),e(h,{item:!0,children:e(Mt,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({element:g}),value:Q,totals:$e,size:"small"})}),e(h,{item:!0,children:e(Et,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({rarity:g}),value:V,totals:Ae,size:"small"})}),e(h,{item:!0,flexGrow:1}),e(h,{item:!0,children:e(jt,{autoFocus:!0,value:x,onChange:g=>c(g.target.value),label:i("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),e(u,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:e(_t,{showingTextProps:Le,sortByButtonProps:Ne})})]})}),e(k,{fullWidth:!0,onClick:()=>S(!0),color:"info",startIcon:e(Z,{}),children:i("addNew")}),e(o.Suspense,{fallback:e(G,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:e(h,{container:!0,spacing:1,columns:wa,children:ee.map(g=>e(h,{item:!0,xs:1,children:e(Wt,{characterKey:g,onClick:()=>s(`${g}`),hideStats:!0})},g))})}),w.length!==ee.length&&e(G,{ref:g=>{g&&Be(g)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{_a as default};
