import{z as U,a as G,r as a,b0 as H,b1 as ie,b as e,d as l,G as h,T as L,ac as T,ad as ce,aa as b,f as B,ap as F,N as P,b2 as O,b3 as re,b4 as de,b5 as pe,b6 as ue,ah as J,ai as X,Q as M,b7 as he,b8 as me,B as fe,b9 as ge,O as Y,h as Z,ba as ye,I as Q,H as we,bb as We,ag as ke,af as j,bc as be,am as xe,a9 as Te,ax as Se,bd as Ce,aA as ve,aB as Ie,aC as qe,be as De,aG as Ee,aD as Ke,bf as _e,bg as ee,bh as $e,bi as Be,bj as Ne,bk as ze,S as V}from"./index-BlpnPJy5.js";const oe=["locked","unlocked"],Ae=ye([...oe]);function Fe({numShowing:u,total:o,weaponIds:c}){const{t:d}=U(["page_weapon","ui"]),t=G(),[y,I]=a.useState(t.displayWeapon.get());a.useEffect(()=>{t.displayWeapon.follow((s,r)=>I(r))},[t]);const{weaponType:q,rarity:K,locked:p,showEquipped:i,showInventory:S,locations:D}=y,w=a.useMemo(()=>H(we,s=>t.weapons.entries.forEach(([r,k])=>{const f=Q(k.key).weaponType;s[f].total++,c.includes(r)&&s[f].current++})),[t,c]),W=a.useMemo(()=>H(We,s=>t.weapons.entries.forEach(([r,k])=>{const f=Q(k.key).rarity;s[f].total++,c.includes(r)&&s[f].current++})),[t,c]),{lockedTotal:E,equippedTotal:C,locationTotal:_}=a.useMemo(()=>{const s={lockedTotal:["locked","unlocked"],equippedTotal:["equipped","unequipped"],locationTotal:[...be,""]};return ie(s,r=>t.weapons.entries.forEach(([k,f])=>{const v=f.location,m=f.lock?"locked":"unlocked",x=v?"equipped":"unequipped";r.lockedTotal[m].total++,r.equippedTotal[x].total++,r.locationTotal[v].total++,c.includes(k)&&(r.lockedTotal[m].current++,r.equippedTotal[x].current++,r.locationTotal[v].current++)}))},[t,c]);return e(Z,{children:l(Y,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(h,{container:!0,children:[e(h,{item:!0,children:e(L,{variant:"h6",children:d("weaponFilterTitle")})}),e(h,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:l(L,{children:[e("strong",{children:u})," / ",o]})}),e(h,{item:!0,children:e(T,{size:"small",color:"error",onClick:()=>t.displayWeapon.set({action:"reset"}),startIcon:e(ce,{}),children:e(b,{t:d,i18nKey:"ui:reset"})})})]}),e(B,{children:l(h,{container:!0,spacing:1,children:[l(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",children:[e(b,{t:d,i18nKey:"subheadings.general"}),l(F,{spacing:1,children:[e(P,{sx:{bgcolor:O.palette.contentNormal.light}}),e(re,{fullWidth:!0,onChange:s=>t.displayWeapon.set({weaponType:s}),value:q,totals:w,size:"small"}),e(de,{sx:{height:"100%"},fullWidth:!0,onChange:s=>t.displayWeapon.set({rarity:s}),value:K,totals:W,size:"small"})]})]}),e(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:l(B,{children:[e(b,{t:d,i18nKey:"subheadings.inventory"}),l(F,{spacing:1,children:[e(P,{sx:{bgcolor:O.palette.contentNormal.light}}),e(pe,{fullWidth:!0,value:p,size:"small",children:oe.map((s,r)=>l(ue,{value:s,sx:{display:"flex",gap:1},onClick:()=>t.displayWeapon.set({locked:Ae(p,s)}),children:[r?e(J,{}):e(X,{}),e(b,{t:d,i18nKey:`ui:${s}`}),e(M,{label:E[r?"unlocked":"locked"],size:"small"})]},s))}),l(T,{startIcon:e(he,{}),color:S?"success":"secondary",onClick:()=>t.displayWeapon.set({showInventory:!S}),children:[d("weaponInInv")," ",e(M,{sx:{ml:1},label:C.unequipped,size:"small"})]}),l(T,{startIcon:e(me,{}),color:i?"success":"secondary",onClick:()=>t.displayWeapon.set({showEquipped:!i}),children:[d("equippedWeapon")," ",e(M,{sx:{ml:1},label:C.equipped,size:"small"})]})]}),e(F,{spacing:1.5,pt:1.5,children:e(a.Suspense,{fallback:null,children:e(fe,{title:i?d("locationsTooltip"):"",placement:"top",children:e("span",{children:e(ge,{totals:_,locations:i?[]:D,setLocations:s=>t.displayWeapon.set({locations:s}),disabled:i})})})})})]})})]})})]})})}function Me({weaponIds:u}){const{t:o}=U(["page_weapon","ui"]),c=G(),{numDelete:d,numUnlock:t,numLock:y}=a.useMemo(()=>{const p=u.map(w=>c.weapons.get(w)),i=p.reduce((w,W)=>w+(W.lock?0:1),0),S=p.length-i;return{numDelete:p.reduce((w,W)=>w+(W.lock||W.location?0:1),0),numUnlock:i,numLock:S}},[u,c]);return l(h,{container:!0,spacing:1,alignItems:"center",children:[e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!d,onClick:()=>window.confirm(`Are you sure you want to delete ${d} weapons?`)&&u.map(p=>{const i=c.weapons.get(p);!(i!=null&&i.lock)&&!(i!=null&&i.location)&&c.weapons.remove(p)}),startIcon:e(ke,{}),children:[e(b,{t:o,i18nKey:"button.deleteWeapons",children:"Delete Weapons"}),e(j,{sx:{ml:1},color:d?"success":"secondary",children:d})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!y,onClick:()=>window.confirm(`Are you sure you want to unlock ${y} weapons ?`)&&u.map(p=>c.weapons.set(p,{lock:!1})),startIcon:e(J,{}),children:[e(b,{t:o,i18nKey:"button.unlockWeapons",children:"Unlock Weapons"}),e(j,{sx:{ml:1},color:y?"success":"secondary",children:y})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!t,onClick:()=>window.confirm(`Are you sure you want to lock ${t} weapons ?`)&&u.map(p=>c.weapons.set(p,{lock:!0})),startIcon:e(X,{}),children:[e(b,{t:o,i18nKey:"button.lockWeapons",children:"Lock Weapons"}),e(j,{sx:{ml:1},color:t?"success":"secondary",children:t})]})}),e(h,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:e(L,{variant:"caption",color:"text.secondary",children:l(b,{t:o,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",e("b",{children:"currently filtered weapons"})]})})})]})}const je={xs:1,sm:2,md:3,lg:3,xl:4},Le={xs:10,sm:12,md:24,lg:24,xl:24},Ue=Object.keys(ee);function Re(){const{t:u}=U(["page_weapon","ui","weaponNames_gen"]),o=G(),[c,d]=a.useState(o.displayWeapon.get());a.useEffect(()=>o.displayWeapon.follow((n,g)=>d(g)),[o]);const[t,y]=a.useState(!1),[I,q]=xe();a.useEffect(()=>(Te.send({hitType:"pageview",page:"/weapon"}),o.weapons.followAny((n,g)=>(g==="new"||g==="remove"||g==="update")&&q())),[q,o]);const K=Se(),p=a.useCallback(async n=>{const g=o.weapons.get(n);if(!g)return;const A=u(`weaponNames_gen:${g.key}`);window.confirm(u("removeWeapon",{value:A}))&&(o.weapons.remove(n),c.editWeaponId===n&&o.displayWeapon.set({editWeaponId:""}))},[c.editWeaponId,o,u]),i=a.useCallback(n=>{o.displayWeapon.set({editWeaponId:n})},[o]),S=a.useCallback(n=>{i(o.weapons.new(Ce(n)))},[o,i]),[D,w]=a.useState(""),W=a.useDeferredValue(D),{sortType:E,ascending:C,weaponType:_,rarity:s,locked:r,showEquipped:k,showInventory:f,locations:v}=c,{weaponIds:m,totalWeaponNum:x}=a.useMemo(()=>{const n=o.weapons.values,g=n.length,A=n.filter(ve({weaponType:_,rarity:s,name:W,locked:r,showInventory:f,showEquipped:k,locations:v},$e())).sort(Ie(ee[E]??[],C,Be())).map(le=>le.id);return I&&{weaponIds:A,totalWeaponNum:g}},[I,o,E,C,s,_,r,f,k,v,W]),{numShow:R,setTriggerElement:ne}=qe(Le[K],m.length),N=a.useMemo(()=>m.slice(0,R),[m,R]),te=m.length!==x?`${m.length}/${x}`:`${x}`,z=a.useCallback(()=>o.displayWeapon.set({editWeaponId:""}),[o]),{editWeaponId:$}=c;a.useEffect(()=>{$&&(o.weapons.get($)||z())},[o,$,z]);const ae={numShowing:N.length,total:te,t:u,namespace:"page_weapon"},se={sortKeys:[...Ue],value:E,onChange:n=>o.displayWeapon.set({sortType:n}),ascending:C,onChangeAsc:n=>o.displayWeapon.set({ascending:n})};return l(B,{display:"flex",flexDirection:"column",gap:1,children:[e(a.Suspense,{fallback:!1,children:e(Ne,{show:t,onHide:()=>y(!1),onSelect:S})}),e(a.Suspense,{fallback:!1,children:e(ze,{weaponId:$,footer:!0,onClose:z})}),e(Fe,{numShowing:m.length,total:x,weaponIds:m}),e(Z,{children:l(Y,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(B,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:[e(De,{autoFocus:!0,size:"small",value:D,onChange:n=>w(n.target.value),label:u("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}}),e(Ee,{showingTextProps:ae,sortByButtonProps:se})]}),e(Me,{weaponIds:m})]})}),l(a.Suspense,{fallback:e(V,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[e(T,{fullWidth:!0,onClick:()=>y(!0),color:"info",startIcon:e(Ke,{}),children:u("page_weapon:addWeapon")}),e(h,{container:!0,spacing:1,columns:je,children:N.map(n=>e(h,{item:!0,xs:1,children:e(_e,{weaponId:n,onDelete:p,onEdit:i,canEquip:!0})},n))})]}),m.length!==N.length&&e(V,{ref:n=>{n&&ne(n)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Re as default};
