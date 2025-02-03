import{v as ee,w as te,j as ne,r as v,d as t,G as i,b as e,W as F,T as l,aI as I,ac as M,N as L,aJ as U,aK as X,aL as O,aM as z,h as b,f as C,aN as A,O as S,ao as ie,aO as re,X as N,aq as le,a as J,a6 as p,aP as Q,aQ as se,a5 as q,aR as ae,aS as oe,aT as ce,aU as de,a7 as $,a9 as he}from"./index-pYpdGbM0.js";import{R as j,d as ue}from"./AccessTimeFilled-DOZ7UVB6.js";var H={},me=te;Object.defineProperty(H,"__esModule",{value:!0});var K=H.default=void 0,pe=me(ee()),xe=ne;K=H.default=(0,pe.default)((0,xe.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");const W={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:N.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:N.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:N.exp_books.wit}},D=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],fe=[20,40,50,60,70,80,90];function ge(){return{mora:0,level:1,curExp:0,goUnder:!1,books:{advice:0,experience:0,wit:0}}}function be(){const[s,n]=v.useState(()=>ge()),{mora:m,level:h,curExp:o,goUnder:a,books:c,books:{advice:x,experience:f,wit:u}}=s,g=fe.find(d=>d>h);let r=-o;for(let d=h;d<Math.min(g,D.length);d++)r+=D[d];const T=ye(u,f,x,r,a)||[],[y=0,E=0,_=0]=T,Z={advice:_,experience:E,wit:y},B=y*2e4+E*5e3+_*1e3,Y=B/5,V=r-B,G=m-Y;let R=B+o,w=h;for(;w<Math.min(g,D.length)&&D[w]<=R;w++)R-=D[w];w===g&&(R=0);let k="";return G<0?k=t("span",{children:["You don't have enough ",e("b",{children:"Mora"})," for this operation."]}):T.length===0?k=t("span",{children:["You don't have enough ",e("b",{children:"EXP. books"})," to level to the next milestone."]}):h===90&&(k="You are at the maximum level."),t(b,{children:[t(i,{container:!0,sx:{px:2,py:1},spacing:2,children:[e(i,{item:!0,children:e(F,{src:W.wit.img,size:2})}),e(i,{item:!0,flexGrow:1,children:e(l,{variant:"h6",children:"Experience Calculator"})}),e(i,{item:!0,children:t(I,{children:[e(M,{color:"primary",disabled:!a,onClick:()=>n({...s,goUnder:!1}),children:"Full Level"}),e(M,{color:"primary",disabled:a,onClick:()=>n({...s,goUnder:!0}),children:"Don't fully level"})]})})]}),e(L,{}),e(S,{children:t(i,{container:!0,spacing:1,children:[e(i,{item:!0,children:t(l,{children:[t("span",{children:["This calculator tries to calculate the amount of exp books required to get to the next milestone level."," "]}),a?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minimize as much exp loss as possible."]})}),e(i,{item:!0,xs:6,md:3,children:t(I,{sx:{display:"flex"},children:[e(U,{children:"Current Level"}),e(X,{sx:{flexBasis:30,flexGrow:1},children:e(O,{value:h,onChange:d=>n({...s,level:z(d??0,0,90)}),sx:{px:2}})})]})}),e(i,{item:!0,xs:6,md:3,children:t(I,{sx:{display:"flex"},children:[e(U,{children:"Current EXP."}),e(X,{sx:{flexBasis:30,flexGrow:1},children:e(O,{value:o,onChange:d=>n({...s,curExp:z(d??0,0,(D[h]||1)-1)}),endAdornment:`/${D[h]||0}`,sx:{px:2}})})]})}),e(i,{item:!0,xs:6,md:3,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Next Milestone Level:"}),e(l,{children:e("b",{children:g})})]})})}),e(i,{item:!0,xs:6,md:3,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"EXP. to milestone:"}),e(l,{children:t("span",{children:[e("strong",{children:B})," / ",e("strong",{children:r})]})})]})})}),Object.entries(c).map(([d])=>e(i,{item:!0,xs:12,md:4,children:e(ve,{bookKey:d,value:c[d],setValue:P=>n({...s,books:{...c,[d]:P}}),required:Z[d]})},d)),e(i,{item:!0,xs:12,md:4,children:t(I,{sx:{display:"flex"},children:[e(U,{children:"Current Mora"}),e(X,{sx:{flexBasis:30,flexGrow:1},children:e(O,{value:m,onChange:d=>n({...s,mora:Math.max(d??0,0)}),sx:{px:2}})})]})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Mora Cost: "}),e(l,{children:e("b",{children:Y})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[t(l,{children:["EXP ",a?"Diff":"Waste",": "]}),e(l,{children:e("b",{children:e(A,{color:V<0?"error":"success",children:V})})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Final Mora: "}),e(l,{children:e("b",{children:e(A,{color:G<0?"error":"success",children:G})})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Final Level: "}),e(l,{children:e("b",{children:e(A,{color:"success",children:w})})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Final EXP: "}),e(l,{children:e("b",{children:e(A,{color:R<0?"error":"success",children:R})})})]})})})]})}),e(L,{}),e(S,{sx:{py:1},children:t(i,{container:!0,spacing:2,children:[e(i,{item:!0,flexGrow:1,children:!!k&&e(ie,{variant:"filled",severity:"error",children:k})}),e(i,{item:!0,xs:"auto",children:e(M,{disabled:!!k,onClick:()=>n({...s,level:w,curExp:R,books:re(Z,(d,P)=>c[P]-d),mora:G}),color:"success",startIcon:e(K,{}),sx:{height:"100%"},children:"Apply"})})]})})]})}function ve(s){const{bookKey:n,value:m=0,setValue:h,required:o=0}=s;return t(b,{bgt:"light",children:[e(S,{sx:{py:1},children:e(l,{children:W[n].name})}),e(L,{}),e(S,{children:t(i,{container:!0,children:[e(i,{item:!0,xs:3,children:e(le,{src:W[n].img})}),t(i,{item:!0,xs:9,children:[t(I,{sx:{display:"flex"},children:[e(U,{children:"Amount"}),e(X,{sx:{flexBasis:30,flexGrow:1},children:e(O,{value:m,onChange:a=>h(Math.max(a??0,0)),sx:{px:2}})})]}),t(C,{display:"flex",justifyContent:"space-between",mt:1,children:[e(l,{children:"Required:"}),e(l,{children:e("b",{children:e(A,{color:o?"success":void 0,children:o})})})]})]})]})})]})}function ye(s,n,m,h,o){let a=o?Math.floor(h/1e3):Math.ceil(h/1e3);const c=Math.min(Math.floor(a/20),s);a-=c*20;const x=Math.min(Math.floor(a/5),n);a-=x*5;const f=Math.min(a,m);return a-=f,o||a===0?[c,x,f]:x===3&&c!==s?[c+1,0,0]:x!==n?[c,x+1,0]:c!==s?[c+1,0,0]:null}const Ce=[0,-1,-10,-20,-30,-40,-60,1,60,p];function Te(){const s=J(),[{resin:n,resinDate:m},h]=v.useState(()=>s.displayTool.get());v.useEffect(()=>s.displayTool.follow((r,T)=>h(T)),[s]);const o=v.useRef(void 0),a=r=>{r>=p?(o.current&&clearTimeout(o.current),o.current=void 0):o.current=setTimeout(()=>console.log("set resin",r+1),j),s.displayTool.set({resin:r,resinDate:new Date().getTime()})};v.useEffect(()=>{if(n<p){const r=Date.now(),T=p-n,y=Math.min(Math.floor((r-m)/j),T),E=n+y,_=m+y*j;s.displayTool.set({resin:E,resinDate:_}),E<p&&(o.current=setTimeout(()=>a(E+1),r-_))}return()=>o.current&&clearTimeout(o.current)},[]);const c=n>=p?m:m+j,x=n>=p?m:m+(p-n)*j,f=new Date(x),u=Q(Math.abs(c-Date.now())),g=r=>{const y=parseInt(r);y>=0&&y<=2e3&&a(y)};return t(b,{children:[t(i,{container:!0,sx:{px:2,py:1},spacing:2,children:[e(i,{item:!0,children:e(F,{src:N.resin.fragile,size:2})}),e(i,{item:!0,children:e(l,{variant:"h6",children:"Resin Counter"})})]}),e(L,{}),e(S,{children:t(i,{container:!0,spacing:2,children:[e(i,{item:!0,children:t(l,{variant:"h2",children:[e(F,{src:N.resin.fragile}),e(se,{type:"number",sx:{width:"2.5em",fontSize:"4rem"},value:n,inputProps:{min:0,max:999,sx:{textAlign:"right"}},onChange:r=>g(r.target.value)}),t("span",{children:["/",p]})]})}),t(i,{item:!0,flexGrow:1,children:[e(I,{fullWidth:!0,children:Ce.map(r=>r===0?e(M,{onClick:()=>a(r),disabled:n===0,children:r}):r===p?t(M,{onClick:()=>a(p),disabled:n>=p,children:["MAX ",r]}):r>0?t(M,{onClick:()=>a(n+r),disabled:n>=p,children:["+",r]}):e(M,{onClick:()=>a(n+r),disabled:n<Math.abs(r),children:r}))}),e(l,{variant:"subtitle1",sx:{mt:2},children:n<p?t("span",{children:["Next resin in ",u,", full Resin at"," ",f.toLocaleTimeString()," ",f.toLocaleDateString()]}):t("span",{children:["Resin has been full for at least ",u,", since"," ",f.toLocaleTimeString()," ",f.toLocaleDateString()]})})]}),e(i,{item:!0,xs:12,children:e(l,{variant:"caption",children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})})]})})]})}function we(){const s=J(),[{timeZoneKey:n},m]=v.useState(()=>s.displayTool.get());v.useEffect(()=>s.displayTool.follow((u,g)=>m(g)),[s]);const h=v.useCallback(u=>s.displayTool.set({timeZoneKey:u}),[s]),[o,a]=v.useState(new Date(Date.now()+q[n]));v.useEffect(()=>{const u=()=>(a(new Date(Date.now()+q[n])),setTimeout(()=>{g=u()},$-Date.now()%$));let g=u();return()=>clearTimeout(g)},[n]);let c=new Date(o);c.getUTCHours()<4||(c=new Date(c.getTime()+ae)),c.setUTCHours(4,0,0,0);const x=c.getTime()-o.getTime(),f=Q(x);return t(b,{children:[t(S,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(ue,{}),e(l,{variant:"h6",sx:{flexGrow:1},children:"Teyvat Time"}),e(ce,{title:n,children:Object.keys(q).map(u=>e(oe,{selected:n===u,disabled:n===u,onClick:()=>h(u),children:u},u))})]}),e(L,{}),e(S,{children:t(i,{container:!0,justifyContent:"center",spacing:3,children:[e(i,{item:!0,sx:{my:4},children:e(l,{variant:"h2",children:o.toLocaleTimeString([],{timeZone:"UTC"})})}),t(i,{item:!0,display:"flex",flexDirection:"column",justifyContent:"space-around",children:[t(l,{children:["Server Date: ",e("b",{children:o.toDateString()})]}),t(l,{children:["Time until reset: ",e("b",{children:f})]}),t(l,{children:["Resin until reset:"," ",e("b",{children:Math.floor(x/(8*de))})]})]})]})})]})}function Se(){return he.send({hitType:"pageview",page:"/tools"}),t(C,{display:"flex",flexDirection:"column",gap:1,children:[e(we,{}),e(Te,{}),e(be,{})]})}export{Se as default};
