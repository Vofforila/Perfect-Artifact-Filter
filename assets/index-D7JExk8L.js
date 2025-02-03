import{z as j,r as o,aW as J,a as O,bE as R,b as e,cu as q,bF as X,am as z,b1 as Y,cv as N,Q as Z,S as K,cw as ee,g as te,A as ae,cx as se,cy as re,aw as oe,bo as ne,aA as le,aB as ce,ax as ie,aC as me,d as S,O as A,f as M,be as W,aG as he,h as L,aD as ue,ac as $,M as de,N as pe,T as fe,al as ge,G,cz as ye}from"./index-BYcD6taU.js";import{T as Ce}from"./TeamCard-DO30njRN.js";import{d as P}from"./Upload-CeZD7hNy.js";import"./useTeamChar-BwnLbyEW.js";import"./TeamDelModal-BRaRvMa9.js";function Te({teamIds:s,charKeys:r,setCharKey:m,acProps:c}){const{t:h}=j(["page_team","sillyWisher_charNames","charNames_gen"]),{silly:u}=o.useContext(J),l=O(),{gender:p}=R(),d=o.useCallback(t=>l.charMeta.get(t).favorite,[l.charMeta]),E=o.useCallback(t=>e(q,{characterKey:t}),[]),C=o.useCallback((t,n)=>h(`${n?"sillyWisher_charNames":"charNames_gen"}:${X(t,p)}`),[p,h]),x=te,[D,I]=z();o.useEffect(()=>l.chars.followAny((t,n)=>["new","remove"].includes(n)&&I()),[l.chars,I]);const f=o.useMemo(()=>D&&l.chars.keys,[l,D]),{characterTeamTotal:g}=o.useMemo(()=>Y({characterTeamTotal:f},n=>{l.teams.values.forEach(T=>{const{loadoutData:b}=T;b.filter(N).forEach(({teamCharId:w})=>{const v=l.teamChars.get(w);if(!v)return;const y=v.key;n.characterTeamTotal[y].total++})}),s.forEach(T=>{const b=l.teams.get(T);if(!b)return;const{loadoutData:w}=b;w.filter(N).forEach(({teamCharId:v})=>{const y=l.teamChars.get(v);if(!y)return;const B=y.key;n.characterTeamTotal[B].current++})})}),[l,f,s]),k=o.useCallback(t=>e("strong",{children:g[t]}),[g]),F=o.useCallback(t=>e(Z,{size:"small",label:g[t]}),[g]),_=o.useMemo(()=>f.map(t=>({key:t,label:C(t,u),alternateNames:u?[C(t,!u)]:void 0,favorite:d(t),color:x(t)})).sort((t,n)=>t.favorite&&!n.favorite?-1:!t.favorite&&n.favorite?1:t.label.localeCompare(n.label)),[u,C,x,d,f]);return e(o.Suspense,{fallback:e(K,{variant:"text",width:100}),children:e(ee,{label:h("searchLabel.char"),options:_,toImg:E,valueKeys:r,onChange:t=>m(t),toExLabel:k,toExItemLabel:F,chipProps:{variant:"outlined"},...c})})}function xe(){return{name:s=>s.name??"",lastEdit:s=>s.lastEdit??0}}const be={name:["name","lastEdit"],lastEdit:["lastEdit"]};function we(s){return{charKeys:(r,m)=>{var l;if(!m.length)return!0;const c=(l=s.teams.get(r))==null?void 0:l.loadoutData.filter(N),h=c==null?void 0:c.map(({teamCharId:p})=>{var d;return(d=s.teamChars.get(p))==null?void 0:d.key}).filter(N);return m.every(p=>h==null?void 0:h.includes(p))},name:(r,m)=>{var c;return!m||!!((c=s.teams.get(r))!=null&&c.name.toLowerCase().includes(m.toLowerCase()))}}}const ve={xs:1,sm:2,md:2,lg:3,xl:3},Se={xs:6,sm:12,md:18,lg:24,xl:24};function Me(){const{t:s}=j(["page_team","page_teams","sillyWisher_charNames","charNames_gen"]),r=O(),[m,c]=z(),h=ae(),u=se();o.useEffect(()=>r.teams.followAny((a,i)=>(i==="new"||i==="remove"||i==="update")&&c()),[c,r]),re();const l=()=>{const a=r.teams.new();h(a)},[p,d,E]=oe(),[C,x]=o.useState("");o.useEffect(()=>{var a,i;(a=u.state)!=null&&a.openImportModal&&(x((i=u.state)==null?void 0:i.teamData),d())},[u.state,d,x]);const D=()=>{try{const a=JSON.parse(C);r.teams.import(a)||window.alert(s("importForm.error.verifi")),E()}catch(a){window.alert(s("importForm.error.import")+`
${a}`);return}},I=ne(r.displayTeam),{sortType:f,ascending:g,charKeys:k}=I,[F,_]=o.useState(I.searchTerm),t=o.useDeferredValue(F);o.useEffect(()=>{r.displayTeam.set({searchTerm:t})},[r,t]);const{teamIds:n,totalTeamNum:T}=o.useMemo(()=>{const a=r.teams.keys.length,i=r.teams.keys.filter(le({charKeys:k,name:t},we(r))).sort((Q,V)=>ce(be[f],g,xe())(r.teams.get(Q),r.teams.get(V)));return m&&{teamIds:i,totalTeamNum:a}},[m,r,k,t,f,g]),b=ie(),{numShow:w,setTriggerElement:v}=me(Se[b],n.length),y=o.useMemo(()=>n.slice(0,w),[n,w]),B=n.length!==T?`${n.length}/${T}`:`${T}`,H={numShowing:y.length,total:B,t:s,namespace:"page_teams"},U={sortKeys:[...ye],value:f,onChange:a=>r.displayTeam.set({sortType:a}),ascending:g,onChangeAsc:a=>r.displayTeam.set({ascending:a})};return S(M,{display:"flex",flexDirection:"column",gap:1,children:[e(L,{children:S(A,{sx:{display:"flex",flexDirection:"column",gap:1},children:[S(M,{display:"flex",gap:1,alignItems:"stretch",children:[e(Te,{teamIds:n,charKeys:k,setCharKey:a=>r.displayTeam.set({charKeys:a}),acProps:{sx:{flexGrow:1}}}),e(W,{autoFocus:!0,value:F,onChange:a=>_(a.target.value),label:s("searchLabel.team"),sx:{height:"100%",flexGrow:1},InputProps:{sx:{height:"100%"}}})]}),e(M,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:e(he,{showingTextProps:H,sortByButtonProps:U})})]})}),S(M,{sx:{display:"flex",gap:1},children:[e($,{fullWidth:!0,onClick:l,color:"info",startIcon:e(ue,{}),children:s("addTeamBtn")}),e(ge,{open:p,onClose:E,children:S(L,{children:[e(de,{title:s("importForm.title")}),e(pe,{}),S(A,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(fe,{children:s("importForm.desc")}),e(W,{fullWidth:!0,label:s("importForm.label"),placeholder:s("importForm.placeholder"),value:C,onChange:a=>x(a.target.value),multiline:!0,rows:4}),e($,{startIcon:e(P,{}),disabled:!C,onClick:D,children:s("importForm.importBtn")})]})]})}),e($,{fullWidth:!0,onClick:d,color:"info",startIcon:e(P,{}),children:s("importTeamBtn")})]}),e(o.Suspense,{fallback:e(K,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:e(G,{container:!0,spacing:2,columns:ve,children:y.map(a=>e(G,{item:!0,xs:1,children:e(o.Suspense,{fallback:e(K,{variant:"rectangular",width:"100%",height:150}),children:e(Ce,{teamId:a,bgt:"light",onClick:i=>h(`${a}${i?`/${i}`:""}`)})})},a))})}),n.length!==y.length&&e(K,{ref:a=>{a&&v(a)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Me as default};
