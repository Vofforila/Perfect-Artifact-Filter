import{fw as Se,bI as Qe,bJ as Je,bK as ke,cO as R,r as l,bM as er,bN as rr,bL as se,fx as Be,bO as je,j as q,bP as ar,b as e,be as tr,a as F,cZ as De,bF as nr,t as D,bE as J,cc as Oe,D as ee,cg as B,G as y,f as p,bn as k,aW as or,d as h,fy as Ae,bq as ue,T as m,g as ir,U as sr,cj as lr,W as de,X as me,Q as cr,af as hr,cB as pr,fr as ur,aj as O,fs as dr,ft as mr,au as Te,C as ze,fz as gr,v as re,w as ae,z as _,ac as A,c5 as fr,fA as Cr,bR as S,p as _r,ag as wr,h as W,e as vr,M as Rr,O as I,aa as H,ao as Y,aw as M,ew as Lr,am as yr,ax as br,az as Ur,aC as xr,J as Br,aF as Ke,ak as jr,N as Q,S as le,ae as $r,aG as Sr,aD as kr,fB as Dr,an as Ie,al as Or,aA as Ar,bk as Tr,bf as zr,fC as ge,Z as Kr,as as Ir,bB as fe,eo as ce,fD as qr,aS as Mr,aT as Pr}from"./index-DEKiL77d.js";const Nr={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"};function Er(r){const{badgeContent:t,invisible:a=!1,max:n=99,showZero:i=!1}=r,s=Se({badgeContent:t,max:n});let o=a;a===!1&&t===0&&!i&&(o=!0);const{badgeContent:c,max:u=n}=o?s:r,d=c&&Number(c)>u?`${u}+`:c;return{badgeContent:c,invisible:o,max:u,displayValue:d}}function Wr(r){return Je("MuiBadge",r)}const $=Qe("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),Fr=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],he=10,pe=4,Hr=r=>{const{color:t,anchorOrigin:a,invisible:n,overlap:i,variant:s,classes:o={}}=r,c={root:["root"],badge:["badge",s,n&&"invisible",`anchorOrigin${R(a.vertical)}${R(a.horizontal)}`,`anchorOrigin${R(a.vertical)}${R(a.horizontal)}${R(i)}`,`overlap${R(i)}`,t!=="default"&&`color${R(t)}`]};return ar(c,Wr,o)},Yr=ke("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),Xr=ke("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,t)=>{const{ownerState:a}=r;return[t.badge,t[a.variant],t[`anchorOrigin${R(a.anchorOrigin.vertical)}${R(a.anchorOrigin.horizontal)}${R(a.overlap)}`],a.color!=="default"&&t[`color${R(a.color)}`],a.invisible&&t.invisible]}})(({theme:r})=>{var t;return{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:he*2,lineHeight:1,padding:"0 6px",height:he*2,borderRadius:he,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen}),variants:[...Object.keys(((t=r.vars)!=null?t:r).palette).filter(a=>{var n,i;return((n=r.vars)!=null?n:r).palette[a].main&&((i=r.vars)!=null?i:r).palette[a].contrastText}).map(a=>({props:{color:a},style:{backgroundColor:(r.vars||r).palette[a].main,color:(r.vars||r).palette[a].contrastText}})),{props:{variant:"dot"},style:{borderRadius:pe,height:pe*2,minWidth:pe*2,padding:0}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="top"&&a.anchorOrigin.horizontal==="right"&&a.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${$.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="bottom"&&a.anchorOrigin.horizontal==="right"&&a.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${$.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="top"&&a.anchorOrigin.horizontal==="left"&&a.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${$.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="bottom"&&a.anchorOrigin.horizontal==="left"&&a.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${$.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="top"&&a.anchorOrigin.horizontal==="right"&&a.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${$.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="bottom"&&a.anchorOrigin.horizontal==="right"&&a.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${$.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="top"&&a.anchorOrigin.horizontal==="left"&&a.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${$.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:a})=>a.anchorOrigin.vertical==="bottom"&&a.anchorOrigin.horizontal==="left"&&a.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${$.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})}}]}}),Gr=l.forwardRef(function(t,a){var n,i,s,o,c,u;const d=er({props:t,name:"MuiBadge"}),{anchorOrigin:b={vertical:"top",horizontal:"right"},className:w,component:C,components:g={},componentsProps:v={},children:te,overlap:N="rectangular",color:T="default",invisible:U=!1,max:X=99,badgeContent:G,slots:j,slotProps:z,showZero:V=!1,variant:x="standard"}=d,K=rr(d,Fr),{badgeContent:Z,invisible:f,max:L,displayValue:E}=Er({max:X,invisible:U,badgeContent:G,showZero:V}),He=Se({anchorOrigin:b,color:T,overlap:N,variant:x,badgeContent:G}),Re=f||Z==null&&x!=="dot",{color:Ye=T,overlap:Xe=N,anchorOrigin:Ge=b,variant:Le=x}=Re?He:d,ye=Le!=="dot"?E:void 0,ne=se({},d,{badgeContent:Z,invisible:Re,max:L,displayValue:ye,showZero:V,anchorOrigin:Ge,color:Ye,overlap:Xe,variant:Le}),be=Hr(ne),Ue=(n=(i=j==null?void 0:j.root)!=null?i:g.Root)!=null?n:Yr,xe=(s=(o=j==null?void 0:j.badge)!=null?o:g.Badge)!=null?s:Xr,oe=(c=z==null?void 0:z.root)!=null?c:v.root,ie=(u=z==null?void 0:z.badge)!=null?u:v.badge,Ve=Be({elementType:Ue,externalSlotProps:oe,externalForwardedProps:K,additionalProps:{ref:a,as:C},ownerState:ne,className:je(oe==null?void 0:oe.className,be.root,w)}),Ze=Be({elementType:xe,externalSlotProps:ie,ownerState:ne,className:je(be.badge,ie==null?void 0:ie.className)});return q.jsxs(Ue,se({},Ve,{children:[te,q.jsx(xe,se({},Ze,{children:ye}))]}))});function Ko({value:r,onChange:t,...a}){const[n,i]=l.useState(r);l.useEffect(()=>{i(r)},[r]);const s=()=>t(n);return e(tr,{value:n,onChange:o=>i(o.target.value),onBlur:s,onKeyDown:o=>o.key==="Enter"&&!a.multiline&&s(),...a})}function Io(r){const t=F();return De(t.builds,r)}function qo(r){const t=F();return De(t.buildTcs,r)}const Vr=""+new URL("splash_aether-DJzOYokv.png",import.meta.url).href,Zr=""+new URL("splash_albedo-C2ClDHXJ.png",import.meta.url).href,Qr=""+new URL("splash_alhaitham-CA0sQI8X.png",import.meta.url).href,Jr=""+new URL("splash_amber-CMXdnMxx.png",import.meta.url).href,ea=""+new URL("splash_arlecchino-De11NpLa.png",import.meta.url).href,ra=""+new URL("splash_ayaka-DPmpFfjD.png",import.meta.url).href,aa=""+new URL("splash_ayato-VOwChnnn.png",import.meta.url).href,ta=""+new URL("splash_baizhu-DuNRm3Wc.png",import.meta.url).href,na=""+new URL("splash_barbara-CnuuBtjx.png",import.meta.url).href,oa=""+new URL("splash_beidou-DAcc5DQf.png",import.meta.url).href,ia=""+new URL("splash_bennett-BiKbQNXU.png",import.meta.url).href,sa=""+new URL("splash_candace-z-8Vs9vX.png",import.meta.url).href,la=""+new URL("splash_charlotte-CqI4iexi.png",import.meta.url).href,ca=""+new URL("splash_chevreuse-CCu9ByG0.png",import.meta.url).href,ha=""+new URL("splash_chiori-Dsv0eX76.png",import.meta.url).href,pa=""+new URL("splash_chongyun-DuFe7QpO.png",import.meta.url).href,ua=""+new URL("splash_collei-XCQMnPIQ.png",import.meta.url).href,da=""+new URL("splash_cyno-UUip-7qe.png",import.meta.url).href,ma=""+new URL("splash_dehya-BNbalvXi.png",import.meta.url).href,ga=""+new URL("splash_diluc-B9yBooi8.png",import.meta.url).href,fa=""+new URL("splash_diona-BekVqAtV.png",import.meta.url).href,Ca=""+new URL("splash_dori-ETbroQpt.png",import.meta.url).href,_a=""+new URL("splash_eula-CWM0oOOm.png",import.meta.url).href,wa=""+new URL("splash_faruzan-CuLPOgXv.png",import.meta.url).href,va=""+new URL("splash_fischl-eNS_Q4Yq.png",import.meta.url).href,Ra=""+new URL("splash_freminet-BK116q87.png",import.meta.url).href,La=""+new URL("splash_furina-Dl2Olj6j.png",import.meta.url).href,ya=""+new URL("splash_gaming-7Y_g9EKP.png",import.meta.url).href,ba=""+new URL("splash_ganyu-51SeDPVZ.png",import.meta.url).href,Ua=""+new URL("splash_gorou-BTgwjfbi.png",import.meta.url).href,xa=""+new URL("splash_heizou-B1OGXzm5.png",import.meta.url).href,Ba=""+new URL("splash_hutao-BnM6ApUB.png",import.meta.url).href,ja=""+new URL("splash_itto-CAbBR0Zp.png",import.meta.url).href,$a=""+new URL("splash_jean-Bi78jjdb.png",import.meta.url).href,Sa=""+new URL("splash_kaeya-CqZUM0lq.png",import.meta.url).href,ka=""+new URL("splash_kaveh-Cnxi7r3d.png",import.meta.url).href,Da=""+new URL("splash_kazuha-CriY046g.png",import.meta.url).href,Oa=""+new URL("splash_keqing-BbKPZ-gj.png",import.meta.url).href,Aa=""+new URL("splash_kirara-DRMRckJo.png",import.meta.url).href,Ta=""+new URL("splash_klee-Bepwm4Dw.png",import.meta.url).href,za=""+new URL("splash_kokomi-TPOxgeDQ.png",import.meta.url).href,Ka=""+new URL("splash_kuki-Cqu89_Z8.png",import.meta.url).href,Ia=""+new URL("splash_layla-D2kdEiP4.png",import.meta.url).href,qa=""+new URL("splash_lisa-CWtsUH6n.png",import.meta.url).href,Ma=""+new URL("splash_lumine-DjfSEbJZ.png",import.meta.url).href,Pa=""+new URL("splash_lynette-jKA0GiXg.png",import.meta.url).href,Na=""+new URL("splash_lyney-YDlwT6uD.png",import.meta.url).href,Ea=""+new URL("splash_mika-Bkkw9tBR.png",import.meta.url).href,Wa=""+new URL("splash_mona-bkAi0VbK.png",import.meta.url).href,Fa=""+new URL("splash_nahida-DRhmP5Jb.png",import.meta.url).href,Ha=""+new URL("splash_navia-BUTPUKtD.png",import.meta.url).href,Ya=""+new URL("splash_neuvillette-C4ZbVr1r.png",import.meta.url).href,Xa=""+new URL("splash_nilou-Dx2CHYCE.png",import.meta.url).href,Ga=""+new URL("splash_ningguang-g7VYSynG.png",import.meta.url).href,Va=""+new URL("splash_noelle-D_7jmXS3.png",import.meta.url).href,Za=""+new URL("splash_qiqi-BwAm_6rv.png",import.meta.url).href,Qa=""+new URL("splash_raiden-3An7aYEy.png",import.meta.url).href,Ja=""+new URL("splash_razor-CixKqXhp.png",import.meta.url).href,et=""+new URL("splash_rosaria-DjlUDP6W.png",import.meta.url).href,rt=""+new URL("splash_sara-BXwH30mO.png",import.meta.url).href,at=""+new URL("splash_sayu-Bc78JOFk.png",import.meta.url).href,tt=""+new URL("splash_shenhe-GbmFj4LB.png",import.meta.url).href,nt=""+new URL("splash_sucrose-DbpONZgF.png",import.meta.url).href,ot=""+new URL("splash_tartaglia-_CDK8h1z.png",import.meta.url).href,it=""+new URL("splash_thoma-Csq2lH6Z.png",import.meta.url).href,st=""+new URL("splash_tighnari-Cxm5cuAN.png",import.meta.url).href,lt=""+new URL("splash_venti-DZqaHXqJ.png",import.meta.url).href,ct=""+new URL("splash_wanderer-Cgi8ZpvN.png",import.meta.url).href,ht=""+new URL("splash_wriothesley-unwiYGBl.png",import.meta.url).href,pt=""+new URL("splash_xiangling-CjsfO110.png",import.meta.url).href,ut=""+new URL("splash_xianyun-8Bq2tWSB.png",import.meta.url).href,dt=""+new URL("splash_xiao-D0mJbo-D.png",import.meta.url).href,mt=""+new URL("splash_xingqiu-8_rk5zS1.png",import.meta.url).href,gt=""+new URL("splash_xinyan-npt0jwGK.png",import.meta.url).href,ft=""+new URL("splash_yae-c4CxAWZx.png",import.meta.url).href,Ct=""+new URL("splash_yanfei-DFGvA19Z.png",import.meta.url).href,_t=""+new URL("splash_yaoyao-BIHk1AkM.png",import.meta.url).href,wt=""+new URL("splash_yelan-DXvYWOYE.png",import.meta.url).href,vt=""+new URL("splash_yoimiya-BwV7hPT-.png",import.meta.url).href,Rt=""+new URL("splash_yunjin-CogctS_D.png",import.meta.url).href,Lt=""+new URL("splash_zhongli-CAGDgoHb.png",import.meta.url).href,yt={Albedo:Zr,Alhaitham:Qr,Amber:Jr,AratakiItto:ja,Arlecchino:ea,Baizhu:ta,Barbara:na,Beidou:oa,Bennett:ia,Candace:sa,Charlotte:la,Chevreuse:ca,Chiori:ha,Chongyun:pa,Collei:ua,Cyno:da,Dehya:ma,Diluc:ga,Diona:fa,Dori:Ca,Eula:_a,Faruzan:wa,Fischl:va,Freminet:Ra,Furina:La,Gaming:ya,Ganyu:ba,Gorou:Ua,HuTao:Ba,Jean:$a,KaedeharaKazuha:Da,Kaeya:Sa,KamisatoAyaka:ra,KamisatoAyato:aa,Kaveh:ka,Keqing:Oa,Kirara:Aa,Klee:Ta,KujouSara:rt,KukiShinobu:Ka,Layla:Ia,Lisa:qa,Lynette:Pa,Lyney:Na,Mika:Ea,Mona:Wa,Nahida:Fa,Navia:Ha,Neuvillette:Ya,Nilou:Xa,Ningguang:Ga,Noelle:Va,Qiqi:Za,RaidenShogun:Qa,Razor:Ja,Rosaria:et,SangonomiyaKokomi:za,Sayu:at,Shenhe:tt,ShikanoinHeizou:xa,Sucrose:nt,Tartaglia:ot,Thoma:it,Tighnari:st,TravelerF:Ma,TravelerM:Vr,Venti:lt,Wanderer:ct,Wriothesley:ht,Xiangling:pt,Xianyun:ut,Xiao:dt,Xingqiu:mt,Xinyan:gt,YaeMiko:ft,Yanfei:Ct,Yaoyao:_t,Yelan:wt,Yoimiya:vt,YunJin:Rt,Zhongli:Lt};function bt(r,t){return yt[nr(r,t)]}const Ut=""+new URL("Character_Albedo_Card-BpLo-Cd6.png",import.meta.url).href,xt=""+new URL("Character_Alhaitham_Card-B3qI6uNs.jpg",import.meta.url).href,Bt=""+new URL("Character_Aloy_Card-BGLKJQPn.png",import.meta.url).href,jt=""+new URL("Character_Amber_Card-D7m_gRNd.jpg",import.meta.url).href,$t=""+new URL("Character_Arataki_Itto_Card-wnLcJYYl.jpg",import.meta.url).href,St=""+new URL("Character_Arlecchino_Card-WX11Bm1z.jpg",import.meta.url).href,kt=""+new URL("Character_Baizhu_Card-u_-blciS.jpg",import.meta.url).href,Dt=""+new URL("Character_Barbara_Card-DtsJmWjO.jpg",import.meta.url).href,Ot=""+new URL("Character_Beidou_Card-BFobTRzj.jpg",import.meta.url).href,At=""+new URL("Character_Bennett_Card-HueXUQqB.jpg",import.meta.url).href,Tt=""+new URL("Character_Candace_Card-BjYHYytN.jpg",import.meta.url).href,zt=""+new URL("Character_Charlotte_Card-B9Vnf_zR.jpg",import.meta.url).href,Kt=""+new URL("Character_Chasca_Card-BPCRDGvP.jpg",import.meta.url).href,It=""+new URL("Character_Chevreuse_Card-Dlu7AwtZ.jpg",import.meta.url).href,qt=""+new URL("Character_Chiori_Card-CIJlkKZh.jpg",import.meta.url).href,Mt=""+new URL("Character_Chongyun_Card-LjhtWmnO.jpg",import.meta.url).href,Pt=""+new URL("Character_Citlali_Card-BdTFHTyG.jpg",import.meta.url).href,Nt=""+new URL("Character_Clorinde_Card-BOO0JOMp.jpg",import.meta.url).href,Et=""+new URL("Character_Collei_Card-BfO5oi4z.jpg",import.meta.url).href,Wt=""+new URL("Character_Cyno_Card-DokRZ4GX.jpg",import.meta.url).href,Ft=""+new URL("Character_Dehya_Card-DD2-q8Se.jpg",import.meta.url).href,Ht=""+new URL("Character_Diluc_Card-C6DUtV6e.jpg",import.meta.url).href,Yt=""+new URL("Character_Diona_Card-LQlv9j_e.png",import.meta.url).href,Xt=""+new URL("Character_Dori_Card-ECypwj3a.jpg",import.meta.url).href,Gt=""+new URL("Character_Emilie_Card-Bqx0MCr0.jpg",import.meta.url).href,Vt=""+new URL("Character_Eula_Card-ByDQZguw.png",import.meta.url).href,Zt=""+new URL("Character_Faruzan_Card-CviBKLcR.jpg",import.meta.url).href,Qt=""+new URL("Character_Fischl_Card-BfWz6Y9V.jpg",import.meta.url).href,Jt=""+new URL("Character_Freminet_Card-BM4IZ5OQ.jpg",import.meta.url).href,en=""+new URL("Character_Furina_Card-D5fr82oX.jpg",import.meta.url).href,rn=""+new URL("Character_Gaming_Card-BzpVaYig.jpg",import.meta.url).href,an=""+new URL("Character_Ganyu_Card-B8qDR0po.png",import.meta.url).href,tn=""+new URL("Character_Gorou_Card-CyDpw4ZN.png",import.meta.url).href,nn=""+new URL("Character_Hu_Tao_Card-Deie4ty4.png",import.meta.url).href,on=""+new URL("Character_Jean_Card-Bwo9uFav.jpg",import.meta.url).href,sn=""+new URL("Character_Kachina_Card-CYH-FKNT.jpg",import.meta.url).href,ln=""+new URL("Character_Kaeya_Card-DbOA5Qtf.jpg",import.meta.url).href,cn=""+new URL("Character_Kamisato_Ayaka_Card-96pmp9TA.png",import.meta.url).href,hn=""+new URL("Character_Kamisato_Ayato_Card-R5TOBR-F.png",import.meta.url).href,pn=""+new URL("Character_Kaveh_Card-Ctz--hrg.jpg",import.meta.url).href,un=""+new URL("Character_Kazuha_Card-DGwQBbCF.png",import.meta.url).href,dn=""+new URL("Character_Keqing_Card-DHVuslyM.jpg",import.meta.url).href,mn=""+new URL("Character_Kinich_Card-B2KvwpUd.jpg",import.meta.url).href,gn=""+new URL("Character_Kirara_Card-rxmuQyvl.jpg",import.meta.url).href,fn=""+new URL("Character_Klee_Card-BQUx3KBz.jpg",import.meta.url).href,Cn=""+new URL("Character_Kujou_Sara_Card-D4WuEcwQ.jpg",import.meta.url).href,_n=""+new URL("Character_Kuki_Shinobu_Card-C_2gpsSN.jpg",import.meta.url).href,wn=""+new URL("Character_Layla_Card-DI8fh3jW.jpeg",import.meta.url).href,vn=""+new URL("Character_Lisa_Card-DjSa66-9.jpg",import.meta.url).href,Rn=""+new URL("Character_Lynette_Card-BB20aO3o.jpg",import.meta.url).href,Ln=""+new URL("Character_Lyney_Card-BHNEXZm0.jpg",import.meta.url).href,yn=""+new URL("Character_Mavuika_Card-Cfp-IzNI.jpg",import.meta.url).href,bn=""+new URL("Character_Mika_Card-D0Wakkqp.jpg",import.meta.url).href,Un=""+new URL("Character_Mona_Card-CvlMUYK_.jpg",import.meta.url).href,xn=""+new URL("Character_Mualani_Card-Bodz7euQ.jpg",import.meta.url).href,Bn=""+new URL("Character_Nahida_Card-D6s1_qrb.jpeg",import.meta.url).href,jn=""+new URL("Character_Navia_Card-DOJWwJM3.jpg",import.meta.url).href,$n=""+new URL("Character_Neuvillette_Card-0KoykWPP.jpg",import.meta.url).href,Sn=""+new URL("Character_Nilou_Card-DqnQ-dSs.jpg",import.meta.url).href,kn=""+new URL("Character_Ningguang_Card-tAkw2zDe.jpg",import.meta.url).href,Dn=""+new URL("Character_Noelle_Card-DWubGuU2.jpg",import.meta.url).href,On=""+new URL("Character_Ororon_Card-BNaY7G78.jpg",import.meta.url).href,An=""+new URL("Character_Qiqi_Card-BGeVsL5w.jpg",import.meta.url).href,Tn=""+new URL("Character_Raiden_Shogun_Card-vq7qd8KO.png",import.meta.url).href,zn=""+new URL("Character_Razor_Card-CiLHXjyO.jpg",import.meta.url).href,Kn=""+new URL("Character_Rosaria_Card-C18GJZev.png",import.meta.url).href,In=""+new URL("Character_Sangonomiya_Kokomi_Card-VzbVrd2G.jpg",import.meta.url).href,qn=""+new URL("Character_Sayu_Card-CI2YcBLI.png",import.meta.url).href,Mn=""+new URL("Character_Sethos_Card-4jl_270k.jpg",import.meta.url).href,Pn=""+new URL("Character_Shenhe_Card-CfyNiGEm.jpg",import.meta.url).href,Nn=""+new URL("Character_Shikanoin_Heizou_Card-fbmiEsdP.png",import.meta.url).href,En=""+new URL("Character_Sigewinne_Card-qpI--enz.jpg",import.meta.url).href,Wn=""+new URL("Character_Somnia_Card-BAHIWQnu.png",import.meta.url).href,Fn=""+new URL("Character_Sucrose_Card-gESU62rQ.jpg",import.meta.url).href,Hn=""+new URL("Character_Tartaglia_Card-BeeFQ-7e.png",import.meta.url).href,Yn=""+new URL("Character_Thoma_Card-D-qXE_tt.jpg",import.meta.url).href,Xn=""+new URL("Character_Tighnari_Card-tDB04_hy.jpg",import.meta.url).href,Gn=""+new URL("Character_Venti_Card-Bcd9uIho.jpg",import.meta.url).href,Vn=""+new URL("Character_Wanderer_Card-Bl4jK4PI.jpg",import.meta.url).href,Zn=""+new URL("Character_Wriothesley_Card-DLF_wdog.jpg",import.meta.url).href,Qn=""+new URL("Character_Xiangling_Card-Bi4nVpm4.jpg",import.meta.url).href,Jn=""+new URL("Character_Xianyun_Card-B6H-tPs7.jpg",import.meta.url).href,eo=""+new URL("Character_Xiao_Card-Il1hbs9F.jpg",import.meta.url).href,ro=""+new URL("Character_Xilonen_Card-CdzkOzyR.jpg",import.meta.url).href,ao=""+new URL("Character_Xingqiu_Card-yjOWNKdH.jpg",import.meta.url).href,to=""+new URL("Character_Xinyan_Card-Cgqoz1e8.jpg",import.meta.url).href,no=""+new URL("Character_Yae_Miko_Card-DO8V8vWJ.png",import.meta.url).href,oo=""+new URL("Character_Yanfei_Card-BvaqEZTG.png",import.meta.url).href,io=""+new URL("Character_Yaoyao_Card-IWfs5nZN.jpg",import.meta.url).href,so=""+new URL("Character_Yelan_Card-BiLckvYV.jpg",import.meta.url).href,lo=""+new URL("Character_Yoimiya_Card-DaaZv-Y3.png",import.meta.url).href,co=""+new URL("Character_Yun_Jin_Card-Cy-dHGe_.jpg",import.meta.url).href,ho=""+new URL("Character_Zhongli_Card-BJ13Ueck.png",import.meta.url).href,po=""+new URL("Traveler_Female_Card-CpZU2Ke9.jpg",import.meta.url).href,uo=""+new URL("Traveler_Male_Card-DExj1wni.jpg",import.meta.url).href,$e={Albedo:Ut,Alhaitham:xt,Aloy:Bt,Amber:jt,AratakiItto:$t,Arlecchino:St,Baizhu:kt,Barbara:Dt,Beidou:Ot,Bennett:At,Candace:Tt,Charlotte:zt,Chasca:Kt,Chevreuse:It,Chiori:qt,Chongyun:Mt,Citlali:Pt,Clorinde:Nt,Collei:Et,Cyno:Wt,Dehya:Ft,Diluc:Ht,Diona:Yt,Dori:Xt,Emilie:Gt,Eula:Vt,Faruzan:Zt,Fischl:Qt,Freminet:Jt,Furina:en,Gaming:rn,Ganyu:an,Gorou:tn,HuTao:nn,Jean:on,Kachina:sn,KaedeharaKazuha:un,Kaeya:ln,KamisatoAyaka:cn,KamisatoAyato:hn,Kaveh:pn,Keqing:dn,Kinich:mn,Kirara:gn,Klee:fn,KujouSara:Cn,KukiShinobu:_n,Layla:wn,Lisa:vn,Lyney:Ln,Lynette:Rn,Mavuika:yn,Mika:bn,Mona:Un,Mualani:xn,Nahida:Bn,Navia:jn,Neuvillette:$n,Nilou:Sn,Ningguang:kn,Noelle:Dn,Ororon:On,Qiqi:An,RaidenShogun:Tn,Razor:zn,Rosaria:Kn,SangonomiyaKokomi:In,Sayu:qn,Sethos:Mn,Shenhe:Pn,ShikanoinHeizou:Nn,Sigewinne:En,Somnia:Wn,Sucrose:Fn,Tartaglia:Hn,Thoma:Yn,Tighnari:Xn,TravelerF:po,TravelerM:uo,Venti:Gn,Wanderer:Vn,Wriothesley:Zn,Xiangling:Qn,Xianyun:Jn,Xiao:eo,Xilonen:ro,Xingqiu:ao,Xinyan:to,YaeMiko:no,Yanfei:oo,Yaoyao:io,Yelan:so,Yoimiya:lo,YunJin:co,Zhongli:ho};function mo(r,t){switch(r){case"TravelerAnemo":case"TravelerDendro":case"TravelerElectro":case"TravelerGeo":case"TravelerHydro":case"TravelerPyro":return $e[`Traveler${t}`];default:return $e[r]}}function Mo(){const{character:{key:r}}=l.useContext(D),{gender:t}=J(),a=Oe(r,t),{data:n}=l.useContext(ee),i={auto:n.get(B.total.auto).value,skill:n.get(B.total.skill).value,burst:n.get(B.total.burst).value},s={auto:n.get(B.total.autoBoost).value,skill:n.get(B.total.skillBoost).value,burst:n.get(B.total.burstBoost).value};return e(p,{children:e(y,{container:!0,spacing:1,children:["auto","skill","burst"].map(o=>{var u;const c=i[o].toString();return e(y,{item:!0,xs:4,children:e(Gr,{badgeContent:c,color:s[o]?"info":"secondary",overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{width:"100%",height:"100%","& > .MuiBadge-badge":{fontSize:"1em",padding:c.length>1?".25em":".25em .4em",borderRadius:".5em",lineHeight:1,height:"1.25em",right:"25%"}},children:e(p,{component:k?k:"img",src:(u=a.getTalentOfKey(o))==null?void 0:u.img,width:"100%",height:"auto"})})},o)})})})}function Po({setConstellation:r,warning:t=!1}){const{character:{key:a}}=l.useContext(D),{data:n}=l.useContext(ee),i=n.get(B.constellation).value,{gender:s}=J(),o=Oe(a,s);return e(y,{container:!0,spacing:1,children:Te(1,6).map(c=>{var u;return e(y,{item:!0,xs:4,children:e(ze,{onClick:()=>r(c===i?c-1:c),style:{border:`1px solid ${t?Nr[200]:gr[200]}`,borderRadius:"4px",overflow:"hidden"},children:e(p,{component:k?k:"img",src:(u=o.getTalentOfKey(`constellation${c}`))==null?void 0:u.img,sx:{...i>=c?{}:{filter:"brightness(50%)"}},width:"100%",height:"auto"})})},c)})})}function No(){const{silly:r}=l.useContext(or),{character:{key:t}}=l.useContext(D),{gender:a}=J(),{data:n}=l.useContext(ee),i=n.get(B.lvl).value,s=n.get(B.asc).value,o=bt(t,a),c=mo(t,a);return r&&o?e(go,{src:o,level:i,ascension:s}):e(fo,{src:c,level:i,ascension:s})}function go({src:r,level:t,ascension:a}){const{character:{key:n}}=l.useContext(D);return h(p,{sx:{display:"flex",position:"relative"},children:[e(p,{src:r,component:k?k:"img",width:"100%",height:"auto"}),h(p,{sx:{width:"100%",height:"100%"},children:[e(p,{sx:{opacity:.85,width:"100%",display:"flex",justifyContent:"center",px:1},children:e(qe,{})}),e(m,{variant:"h6",sx:{width:"100%",opacity:.75,textAlign:"center"},children:e(Ae,{stars:ue(n).rarity,colored:!0})}),e(Pe,{}),e(Me,{level:t,ascension:a})]})]})}function fo({src:r,level:t,ascension:a}){const{character:{key:n}}=l.useContext(D);return h(p,{sx:{display:"flex",position:"relative"},children:[h(p,{sx:{position:"absolute",width:"100%",height:"100%"},children:[e(m,{variant:"h6",sx:{position:"absolute",width:"100%",left:"50%",bottom:0,transform:"translate(-50%, -50%)",opacity:.75,textAlign:"center"},children:e(Ae,{stars:ue(n).rarity,colored:!0})}),e(p,{sx:{position:"absolute",left:"50%",bottom:"7%",transform:"translate(-50%, -50%)",opacity:.85,width:"100%",display:"flex",justifyContent:"center",px:1},children:e(qe,{})}),e(Pe,{}),e(Me,{level:t,ascension:a})]}),e(p,{src:r,component:k?k:"img",width:"100%",height:"auto"})]})}function qe(){const{character:{key:r}}=l.useContext(D),{gender:t}=J(),a=ir(r),n=ue(r).weaponType;return e(cr,{color:a,sx:{height:"auto"},label:h(m,{variant:"h6",sx:{display:"flex",gap:1,alignItems:"center"},children:[e(sr,{ele:a}),e(p,{sx:{whiteSpace:"normal",textAlign:"center"},children:e(lr,{characterKey:r,gender:t})}),e(de,{src:me.weaponTypes[n]})]})})}function Me({level:r,ascension:t}){return e(m,{sx:{p:1,position:"absolute",right:0,top:0,opacity:.8},children:e(hr,{children:pr(r,t)})})}function Pe(){const{character:{key:r}}=l.useContext(D),t=F(),{favorite:a}=ur(r);return e(p,{sx:{position:"absolute",left:0,top:0},children:e(O,{sx:{p:1},color:"error",onClick:()=>t.charMeta.set(r,{favorite:!a}),children:a?e(dr,{}):e(mr,{})})})}var Ce={},Co=ae;Object.defineProperty(Ce,"__esModule",{value:!0});var P=Ce.default=void 0,_o=Co(re()),wo=q;P=Ce.default=(0,_o.default)((0,wo.jsx)("path",{d:"M6.99 11 3 15l3.99 4v-3H14v-2H6.99zM21 9l-3.99-4v3H10v2h7.01v3z"}),"SwapHoriz");var _e={},vo=ae;Object.defineProperty(_e,"__esModule",{value:!0});var Ne=_e.default=void 0,Ro=vo(re()),Lo=q;Ne=_e.default=(0,Ro.default)((0,Lo.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11H7v-2h10z"}),"RemoveCircle");var we={},yo=ae;Object.defineProperty(we,"__esModule",{value:!0});var Ee=we.default=void 0,bo=yo(re()),Uo=q;Ee=we.default=(0,bo.default)((0,Uo.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy");var ve={},xo=ae;Object.defineProperty(ve,"__esModule",{value:!0});var We=ve.default=void 0,Bo=xo(re()),jo=q;We=ve.default=(0,Bo.default)((0,jo.jsx)("path",{d:"M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6"}),"Science");function Eo({avatar:r,name:t,description:a,active:n=!1,onActive:i,children:s,onEdit:o,onCopyToTc:c,onDupe:u,onEquip:d,onRemove:b,hideFooter:w=!1}){const{t:C}=_("build"),g=h(p,{children:[e(Rr,{avatar:r,title:e(m,{noWrap:!0,gutterBottom:!0,variant:"h6",children:t}),action:a&&e(S,{title:e(m,{children:a}),children:e(vr,{})})}),e(I,{sx:{pt:0,pb:1},children:s})]});return h(W,{bgt:"light",sx:{height:"100%",display:"flex",flexDirection:"column",boxShadow:n?"0px 0px 0px 2px green inset":void 0},children:[i?e(A,{color:"neutral300",onClick:i,variant:"outlined",sx:{p:0,borderBottomLeftRadius:0,borderBottomRightRadius:0},children:g}):g,!w&&h(fr,{sx:{display:"flex",justifyContent:"space-around",marginTop:"auto"},children:[e(S,{title:e(m,{children:C("buildCardTip.edit")}),placement:"top",arrow:!0,children:e(p,{children:e(O,{color:"info",size:"small",onClick:o,disabled:!o,children:e("span",{children:e(Cr,{})})})})}),e(S,{title:e(m,{children:C("buildCardTip.copyTc")}),placement:"top",arrow:!0,children:e(p,{children:e(O,{color:"info",size:"small",onClick:c,disabled:!c,children:e(We,{})})})}),e(S,{title:e(m,{children:C("buildCardTip.duplicate")}),placement:"top",arrow:!0,children:e(p,{children:e(O,{color:"info",size:"small",onClick:u,disabled:!u,children:e(Ee,{})})})}),e(S,{title:e(m,{children:C("buildCardTip.equip")}),placement:"top",arrow:!0,children:e(p,{children:e(O,{color:"info",size:"small",onClick:d,disabled:!d,children:e(_r,{})})})}),e(S,{title:e(m,{children:C("buildCardTip.delete")}),placement:"top",arrow:!0,children:e(p,{children:e(O,{color:"error",size:"small",onClick:b,disabled:!b,children:e(wr,{})})})})]})]})}function Wo(){const{t:r}=_("page_team");return e(Y,{severity:"info",children:e(H,{t:r,i18nKey:"buildInfo.equipped",children:"This is the build currently equipped to your character, this represents in-game equipement and is persistent outside of the Loadout."})})}function Fo(){const{t:r}=_("page_team");return e(Y,{severity:"info",children:e(H,{t:r,i18nKey:"buildInfo.build",children:"This is the build currently equipped to your character, this represents in-game equipement and is persistent outside of the Loadout."})})}function Ho(){const{t:r}=_("page_team");return e(Y,{severity:"info",children:e(H,{t:r,i18nKey:"buildInfo.tcbuild",children:"This is the build currently equipped to your character, this represents in-game equipement and is persistent outside of the Loadout."})})}const $o={xs:2*3,sm:2*3,md:3*3,lg:4*3,xl:4*3};function Fe({artId:r,onChangeId:t,slotKey:a,show:n,onClose:i}){const{t:s}=_(["page_character","artifact"]),o=F(),c=l.useCallback((f,L)=>({...f,...L,slotKeys:[a]}),[a]),[u,d,b]=M(!1),[w,C]=l.useReducer(c,{...Lr(),slotKeys:[a]}),[g,v]=yr();l.useEffect(()=>o.arts.followAny(v),[o,v]);const te=br(),N=l.useMemo(()=>Ur(),[]),T=o.arts.values.filter(f=>f.slotKey===w.slotKeys[0]).length,U=l.useMemo(()=>{const f=Ar(w,N);let L=o.arts.values.filter(f).map(E=>E.id);return r&&o.arts.get(r)&&(L=L.filter(E=>E!==r),L.unshift(r)),g&&L},[w,N,o,r,g]),{numShow:X,setTriggerElement:G}=xr($o[te],U.length),j=l.useMemo(()=>U.slice(0,X),[U,X]),z=U.length!==T?`${U.length}/${T}`:`${T}`,V={numShowing:j.length,total:z,t:s,namespace:"artifact"},[x,K]=l.useState(""),Z=l.useCallback(()=>{!x||Br.includes(x)?t(null):t(x),K(""),i()},[t,i,x]);return e(Or,{open:n,onClose:i,containerProps:{maxWidth:"xl"},children:h(W,{children:[e(l.Suspense,{fallback:!1,children:e(Ke,{artifactIdToEdit:u?"new":"",cancelEdit:b,allowUpload:!0,allowEmpty:!0,fixedSlotKey:w.slotKeys[0]})}),h(I,{sx:{py:1,display:"flex",alignItems:"center"},children:[h(m,{variant:"h6",children:[a?e(de,{src:me.slot[a]}):null," ",s("tabEquip.swapArt")]}),e(O,{onClick:i,sx:{ml:"auto"},children:e(jr,{})})]}),e(Q,{}),e(I,{children:e(l.Suspense,{fallback:e(le,{variant:"rectangular",width:"100%",height:200}),children:e($r,{filterOption:w,filterOptionDispatch:C,filteredIds:U,disableSlotFilter:!0})})}),e(Q,{}),h(I,{children:[e(p,{pb:1,display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:e(Sr,{showingTextProps:V})}),e(A,{fullWidth:!0,onClick:d,color:"info",startIcon:e(kr,{}),children:s("artifact:addNew")}),e(p,{mt:1,children:h(l.Suspense,{fallback:e(le,{variant:"rectangular",width:"100%",height:300}),children:[e(Dr,{artIdOrSlot:x,onHide:()=>K(""),onEquip:Z}),h(y,{container:!0,spacing:1,columns:{xs:2,md:3,lg:4},children:[r&&e(y,{item:!0,xs:1,children:e(W,{bgt:"light",sx:{width:"100%",height:"100%"},children:e(ze,{sx:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>K(a),children:h(p,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e(Ne,{sx:{fontSize:"10em"}}),e(m,{children:s("artifact:button.unequipArtifact")})]})})})}),j.map(f=>e(y,{item:!0,xs:1,sx:L=>({...r===f&&{"> .MuiCard-root":{outline:`solid ${L.palette.warning.main}`}}}),children:e(Ie,{artifactId:f,onClick:r===f?void 0:()=>K(f)})},f))]})]})}),U.length!==j.length&&e(le,{ref:f=>{f&&G(f)},sx:{borderRadius:1,mt:1},variant:"rectangular",width:"100%",height:100})]})]})})}const So={xs:1,sm:2,md:3,lg:3,xl:3};function Yo({weaponTypeKey:r,weaponId:t,artifactIds:a,setWeapon:n,setArtifact:i}){const s=F(),[o,c]=l.useState(""),[u,d]=l.useState();l.useEffect(()=>{t&&o&&o!==t&&c(t)},[o,t]);const b=l.useCallback(()=>t&&c(t),[t]),w=l.useCallback(()=>c(""),[]);return h(p,{children:[e(l.Suspense,{fallback:!1,children:e(Tr,{weaponId:o,footer:!0,onClose:w,extraButtons:e(To,{weaponId:t||"",weaponTypeKey:r,onChangeId:n})})}),e(l.Suspense,{fallback:!1,children:e(Ke,{artifactIdToEdit:u,cancelEdit:()=>d(void 0)})}),h(y,{item:!0,columns:So,container:!0,spacing:1,children:[e(y,{item:!0,xs:1,display:"flex",flexDirection:"column",children:t&&s.weapons.keys.includes(t)?e(zr,{weaponId:t,onEdit:b,extraButtons:e(Ao,{weaponId:t,weaponTypeKey:r,onChangeId:n})}):e(ko,{weaponId:"",weaponTypeKey:r,onChangeId:n})}),!!a&&Object.entries(a).map(([C,g])=>e(y,{item:!0,xs:1,children:g&&s.arts.keys.includes(g)?e(Ie,{artifactId:g,extraButtons:e(Oo,{artifactId:g,slotKey:C,onChangeId:v=>i(C,v)}),onEdit:()=>d(g),onLockToggle:()=>s.arts.set(g,({lock:v})=>({lock:!v}))}):e(Do,{slotKey:C,onChangeId:v=>i(C,v)})},g||C))]})]})}function ko({weaponId:r,weaponTypeKey:t,onChangeId:a}){const{t:n}=_("page_weapon"),[i,s,o]=M();return h(W,{bgt:"light",sx:{height:"100%",width:"100%",minHeight:300,display:"flex",flexDirection:"column"},children:[e(I,{children:h(m,{children:[e(de,{src:me.weaponTypes[t]})," ",n(`weaponType.${t}`)]})}),e(Q,{}),h(p,{sx:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},children:[e(ge,{weaponId:r,weaponTypeKey:t,show:i,onClose:o,onChangeId:a}),e(A,{onClick:s,color:"info",sx:{borderRadius:"1em"},children:e(P,{sx:{height:100,width:100}})})]})]})}function Do({slotKey:r,onChangeId:t}){const[a,n,i]=M(),{t:s}=_("artifact");return h(W,{bgt:"light",sx:{height:"100%",width:"100%",minHeight:300,display:"flex",flexDirection:"column"},children:[e(I,{children:h(m,{children:[e(Kr,{iconProps:Ir,slotKey:r})," ",s(`slotName.${r}`)]})}),e(Q,{}),h(p,{sx:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},children:[e(Fe,{artId:"",slotKey:r,show:a,onClose:i,onChangeId:t}),e(A,{onClick:n,color:"info",sx:{borderRadius:"1em"},children:e(P,{sx:{height:100,width:100}})})]})]})}function Oo({artifactId:r,slotKey:t,onChangeId:a}){const{t:n}=_("page_character"),[i,s,o]=M();return h(fe,{children:[e(S,{title:e(m,{children:n("tabEquip.swapArt")}),placement:"top",arrow:!0,children:e(A,{color:"info",size:"small",onClick:s,children:e(P,{})})}),e(Fe,{artId:r,slotKey:t,show:i,onClose:o,onChangeId:a})]})}function Ao({weaponId:r,weaponTypeKey:t,onChangeId:a}){const{t:n}=_("page_character"),[i,s,o]=M();return h(fe,{children:[e(S,{title:e(m,{children:n("tabEquip.swapWeapon")}),placement:"top",arrow:!0,children:e(A,{color:"info",size:"small",onClick:s,children:e(P,{})})}),e(ge,{weaponId:r,weaponTypeKey:t,onChangeId:a,show:i,onClose:o})]})}function To({weaponId:r,weaponTypeKey:t,onChangeId:a}){const{t:n}=_("page_character"),[i,s,o]=M();return h(fe,{children:[e(A,{color:"info",onClick:s,startIcon:e(P,{}),children:n("tabEquip.swapWeapon")}),e(ge,{weaponId:r,weaponTypeKey:t,onChangeId:a,show:i,onClose:o})]})}function Xo({talentKey:r,setTalent:t,dropDownButtonProps:a}){const{t:n}=_("sheet_gen"),{character:{talent:i}}=l.useContext(D),{data:s}=l.useContext(ee),o=s.get(ce.total[`${r}Boost`]).value,c=s.get(ce.total[r]).value,u=s.get(ce.asc).value;return e(Pr,{fullWidth:!0,title:n("talentLvl",{level:c}),color:o?"info":"primary",...a,children:Te(1,qr[u]).map(d=>e(Mr,{selected:i[r]===d,disabled:i[r]===d,onClick:()=>t(d),children:n("talentLvl",{level:d+o})},d))})}function Go(){const{t:r}=_("page_team");return e(Y,{severity:"info",children:h(H,{t:r,i18nKey:"teamSettings.alert.desc",children:[e("strong",{children:"Teams"})," are a container for 4 character loadouts. It provides a way for characters to apply team buffs, and configuration of enemy stats. Loadouts can be shared between teams."]})})}function Vo(){const{t:r}=_("loadout");return e(Y,{severity:"info",children:h(H,{t:r,i18nKey:"loadoutSettings.alert",children:[e("strong",{children:"Loadouts"})," provides character context data, including bonus stats, conditionals, multi-targets, optimization config, and stores builds. A single ",e("strong",{children:"Loadout"})," can be used for many teams."]})})}export{Eo as B,No as C,Yo as E,Vo as L,Ko as T,qo as a,Fo as b,Ho as c,Ee as d,Go as e,Po as f,Xo as g,Wo as h,Mo as i,We as j,Io as u};
