import{r as z,j as De,fF as Fe,x as Me}from"./index-BlpnPJy5.js";function ye(e,t){for(var a=0;a<t.length;a++){const r=t[a];if(typeof r!="string"&&!Array.isArray(r)){for(const _ in r)if(_!=="default"&&!(_ in e)){const c=Object.getOwnPropertyDescriptor(r,_);c&&Object.defineProperty(e,_,c.get?c:{enumerable:!0,get:()=>r[_]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var Ie={},H={};H._=H._interop_require_default=ve;function ve(e){return e&&e.__esModule?e:{default:e}}var ue={},we={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return t}});let t=a=>{}})(we);var Te={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return t}});function t(a){let{widthInt:r,heightInt:_,blurWidth:c,blurHeight:i,blurDataURL:n,objectFit:T}=a;const O=20,l=c?c*40:r,d=i?i*40:_,u=l&&d?"viewBox='0 0 "+l+" "+d+"'":"",b=u?"none":T==="contain"?"xMidYMid":T==="cover"?"xMidYMid slice":"none";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+O+"'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='"+O+"'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+b+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}})(Te);var te={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(_,c){for(var i in c)Object.defineProperty(_,i,{enumerable:!0,get:c[i]})}t(e,{VALID_LOADERS:function(){return a},imageConfigDefault:function(){return r}});const a=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}})(te);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImgProps",{enumerable:!0,get:function(){return O}});const t=Te,a=te;function r(l){return l.default!==void 0}function _(l){return l.src!==void 0}function c(l){return typeof l=="object"&&(r(l)||_(l))}function i(l){return typeof l>"u"?l:typeof l=="number"?Number.isFinite(l)?l:NaN:typeof l=="string"&&/^[0-9]+$/.test(l)?parseInt(l,10):NaN}function n(l,d,u){let{deviceSizes:b,allSizes:S}=l;if(u){const R=/(^|\s)(1?\d?\d)vw/g,h=[];for(let D;D=R.exec(u);D)h.push(parseInt(D[2]));if(h.length){const D=Math.min(...h)*.01;return{widths:S.filter(m=>m>=b[0]*D),kind:"w"}}return{widths:S,kind:"w"}}return typeof d!="number"?{widths:b,kind:"w"}:{widths:[...new Set([d,d*2].map(R=>S.find(h=>h>=R)||S[S.length-1]))],kind:"x"}}function T(l){let{config:d,src:u,unoptimized:b,width:S,quality:U,sizes:R,loader:h}=l;if(b)return{src:u,srcSet:void 0,sizes:void 0};const{widths:D,kind:m}=n(d,S,R),o=D.length-1;return{sizes:!R&&m==="w"?"100vw":R,srcSet:D.map((p,s)=>h({config:d,src:u,quality:U,width:p})+" "+(m==="w"?p:s+1)+m).join(", "),src:h({config:d,src:u,quality:U,width:D[o]})}}function O(l,d){let{src:u,sizes:b,unoptimized:S=!1,priority:U=!1,loading:R,className:h,quality:D,width:m,height:o,fill:p=!1,style:s,overrideSrc:f,onLoad:I,onLoadingComplete:A,placeholder:P="empty",blurDataURL:N,fetchPriority:g,layout:E,objectFit:F,objectPosition:y,lazyBoundary:J,lazyRoot:Y,...X}=l;const{imgConf:W,showAltText:G,blurComplete:x,defaultLoader:q}=d;let M,v=W||a.imageConfigDefault;if("allSizes"in v)M=v;else{const C=[...v.deviceSizes,...v.imageSizes].sort((j,K)=>j-K),B=v.deviceSizes.sort((j,K)=>j-K);M={...v,allSizes:C,deviceSizes:B}}if(typeof q>"u")throw new Error(`images.loaderFile detected but the file is missing default export.
Read more: https://nextjs.org/docs/messages/invalid-images-config`);let V=X.loader||q;delete X.loader,delete X.srcSet;const Q="__next_img_default"in V;if(Q){if(M.loader==="custom")throw new Error('Image with src "'+u+`" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{const C=V;V=B=>{const{config:j,...K}=B;return C(K)}}if(E){E==="fill"&&(p=!0);const C={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}},B={responsive:"100vw",fill:"100vw"},j=C[E];j&&(s={...s,...j});const K=B[E];K&&!b&&(b=K)}let L="",w=i(m),k=i(o),_e,de;if(c(u)){const C=r(u)?u.default:u;if(!C.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(C));if(!C.height||!C.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(C));if(_e=C.blurWidth,de=C.blurHeight,N=N||C.blurDataURL,L=C.src,!p){if(!w&&!k)w=C.width,k=C.height;else if(w&&!k){const B=w/C.width;k=Math.round(C.height*B)}else if(!w&&k){const B=k/C.height;w=Math.round(C.width*B)}}}u=typeof u=="string"?u:L;let me=!U&&(R==="lazy"||typeof R>"u");(!u||u.startsWith("data:")||u.startsWith("blob:"))&&(S=!0,me=!1),M.unoptimized&&(S=!0),Q&&u.endsWith(".svg")&&!M.dangerouslyAllowSVG&&(S=!0),U&&(g="high");const Le=i(D),Z=Object.assign(p?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:F,objectPosition:y}:{},G?{}:{color:"transparent"},s),fe=!x&&P!=="empty"?P==="blur"?'url("data:image/svg+xml;charset=utf-8,'+(0,t.getImageBlurSvg)({widthInt:w,heightInt:k,blurWidth:_e,blurHeight:de,blurDataURL:N||"",objectFit:Z.objectFit})+'")':'url("'+P+'")':null;let Ue=fe?{backgroundSize:Z.objectFit||"cover",backgroundPosition:Z.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:fe}:{};const oe=T({config:M,src:u,unoptimized:S,width:w,quality:Le,sizes:b,loader:V});return{props:{...X,loading:me?"lazy":R,fetchPriority:g,width:w,height:k,decoding:"async",className:h,style:{...Z,...Ue},sizes:oe.sizes,srcSet:oe.srcSet,src:f||oe.src},meta:{unoptimized:S,priority:U,placeholder:P,fill:p}}}})(ue);var pe={exports:{}},ee={};function be(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(be=function(r){return r?a:t})(e)}ee._=ee._interop_require_wildcard=We;function We(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var a=be(t);if(a&&a.has(e))return a.get(e);var r={__proto__:null},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(c!=="default"&&Object.prototype.hasOwnProperty.call(e,c)){var i=_?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(r,c,i):r[c]=e[c]}return r.default=e,a&&a.set(e,r),r}var $={exports:{}},re={},Ce;function Ge(){return Ce||(Ce=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});const t=z,a=typeof window>"u",r=a?()=>{}:t.useLayoutEffect,_=a?()=>{}:t.useEffect;function c(i){const{headManager:n,reduceComponentsToState:T}=i;function O(){if(n&&n.mountedInstances){const d=t.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(T(d,i))}}if(a){var l;n==null||(l=n.mountedInstances)==null||l.add(i.children),O()}return r(()=>{var d;return n==null||(d=n.mountedInstances)==null||d.add(i.children),()=>{var u;n==null||(u=n.mountedInstances)==null||u.delete(i.children)}}),r(()=>(n&&(n._pendingUpdate=O),()=>{n&&(n._pendingUpdate=O)})),_(()=>(n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),()=>{n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)})),null}}(re)),re}var ie={},Se;function Xe(){return Se||(Se=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AmpStateContext",{enumerable:!0,get:function(){return r}});const r=H._(z).default.createContext({})}(ie)),ie}var se={},Pe;function Ve(){return Pe||(Pe=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"HeadManagerContext",{enumerable:!0,get:function(){return r}});const r=H._(z).default.createContext({})}(se)),se}var ne={},Ee;function Be(){return Ee||(Ee=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isInAmpMode",{enumerable:!0,get:function(){return t}});function t(a){let{ampFirst:r=!1,hybrid:_=!1,hasQuery:c=!1}=a===void 0?{}:a;return r||_&&c}}(ne)),ne}var ge;function He(){return ge||(ge=1,function(e,t){"use client";var a={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\polbe\\AppData\\Roaming",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_5784_FFISWQHHDYVUQVBK",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"VOFFOLAPTOP",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EFC_6480:"1",FORCE_COLOR:"true",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\polbe","IntelliJ IDEA":"D:\\IntelliJ IDEA 2023.2.5\\bin;","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2023.3.4\\bin;",LANG:"en_US.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\polbe\\AppData\\Local",LOCAL_GIT_DIRECTORY:"C:\\Users\\polbe\\AppData\\Local\\GitHubDesktop\\app-3.4.13\\resources\\app\\git",LOGONSERVER:"\\\\VOFFOLAPTOP",NODE_ENV:"production",NUMBER_OF_PROCESSORS:"12",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_TASK_HASH:"347233138967440930",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"D:\\Applications\\Typescript\\Perfect-Artifact-Filter",OneDrive:"C:\\Users\\polbe\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",Path:"D:\\Applications\\Typescript\\Perfect-Artifact-Filter\\apps\\frontend\\node_modules\\.bin;D:\\Applications\\Typescript\\Perfect-Artifact-Filter\\apps\\node_modules\\.bin;D:\\Applications\\Typescript\\Perfect-Artifact-Filter\\node_modules\\.bin;D:\\Applications\\Typescript\\node_modules\\.bin;D:\\Applications\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Program Files\\nodejs;D:\\Oracle\\dbhomeXE\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\Git\\cmd;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files (x86)\\Windows Kits\\10\\Windows Performance Toolkit\\;C:\\Program Files (x86)\\Google\\Cloud SDK\\google-cloud-sdk\\bin;C:\\Program Files\\nodejs\\;C:\\Program Files\\dotnet\\;C:\\Users\\polbe\\AppData\\Local\\Microsoft\\WindowsApps;D:\\IntelliJ IDEA 2023.2.5\\bin;;C:\\Users\\polbe\\AppData\\Local\\GitHubDesktop\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2023.3.4\\bin;;C:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\polbe\\dart-sdk\\bin;C:\\Users\\polbe\\flutter\\bin;C:\\Users\\polbe\\AppData\\Roaming\\npm;C:\\Program Files\\JetBrains\\WebStorm 2024.3.1\\bin;;C:\\Users\\polbe\\.dotnet\\tools",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.CPL",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD",PROCESSOR_LEVEL:"25",PROCESSOR_REVISION:"5000",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROMPT:"$P$G",PSModulePath:"C:\\Users\\polbe\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Google\\Cloud SDK\\google-cloud-sdk\\platform\\PowerShell",PT8HOME:"D:\\Cisco Packet Tracer 8.2.2",PUBLIC:"C:\\Users\\Public",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\polbe\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.96.4",TMP:"C:\\Users\\polbe\\AppData\\Local\\Temp",USERDOMAIN:"VOFFOLAPTOP",USERDOMAIN_ROAMINGPROFILE:"VOFFOLAPTOP",USERNAME:"polbe",USERPROFILE:"C:\\Users\\polbe",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-9438f23aff-sock",VSCODE_INJECTION:"1",WebStorm:"C:\\Program Files\\JetBrains\\WebStorm 2024.3.1\\bin;",windir:"C:\\WINDOWS"};Object.defineProperty(t,"__esModule",{value:!0});function r(m,o){for(var p in o)Object.defineProperty(m,p,{enumerable:!0,get:o[p]})}r(t,{default:function(){return D},defaultHead:function(){return u}});const _=H,c=ee,i=De,n=c._(z),T=_._(Ge()),O=Xe(),l=Ve(),d=Be();function u(m){m===void 0&&(m=!1);const o=[(0,i.jsx)("meta",{charSet:"utf-8"})];return m||o.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"})),o}function b(m,o){return typeof o=="string"||typeof o=="number"?m:o.type===n.default.Fragment?m.concat(n.default.Children.toArray(o.props.children).reduce((p,s)=>typeof s=="string"||typeof s=="number"?p:p.concat(s),[])):m.concat(o)}const S=["name","httpEquiv","charSet","itemProp"];function U(){const m=new Set,o=new Set,p=new Set,s={};return f=>{let I=!0,A=!1;if(f.key&&typeof f.key!="number"&&f.key.indexOf("$")>0){A=!0;const P=f.key.slice(f.key.indexOf("$")+1);m.has(P)?I=!1:m.add(P)}switch(f.type){case"title":case"base":o.has(f.type)?I=!1:o.add(f.type);break;case"meta":for(let P=0,N=S.length;P<N;P++){const g=S[P];if(f.props.hasOwnProperty(g))if(g==="charSet")p.has(g)?I=!1:p.add(g);else{const E=f.props[g],F=s[g]||new Set;(g!=="name"||!A)&&F.has(E)?I=!1:(F.add(E),s[g]=F)}}break}return I}}function R(m,o){const{inAmpMode:p}=o;return m.reduce(b,[]).reverse().concat(u(p).reverse()).filter(U()).reverse().map((s,f)=>{const I=s.key||f;if(a.__NEXT_OPTIMIZE_FONTS&&!p&&s.type==="link"&&s.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(A=>s.props.href.startsWith(A))){const A={...s.props||{}};return A["data-href"]=A.href,A.href=void 0,A["data-optimized-fonts"]=!0,n.default.cloneElement(s,A)}return n.default.cloneElement(s,{key:I})})}function h(m){let{children:o}=m;const p=(0,n.useContext)(O.AmpStateContext),s=(0,n.useContext)(l.HeadManagerContext);return(0,i.jsx)(T.default,{reduceComponentsToState:R,headManager:s,inAmpMode:(0,d.isInAmpMode)(p),children:o})}const D=h;(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}($,$.exports)),$.exports}var ae={},Oe;function xe(){return Oe||(Oe=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ImageConfigContext",{enumerable:!0,get:function(){return _}});const a=H._(z),r=te,_=a.default.createContext(r.imageConfigDefault)}(ae)),ae}var le={},Re;function ke(){return Re||(Re=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"RouterContext",{enumerable:!0,get:function(){return r}});const r=H._(z).default.createContext(null)}(le)),le}var ce={},Ae;function he(){return Ae||(Ae=1,function(e){var t={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\polbe\\AppData\\Roaming",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_5784_FFISWQHHDYVUQVBK",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"VOFFOLAPTOP",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EFC_6480:"1",FORCE_COLOR:"true",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\polbe","IntelliJ IDEA":"D:\\IntelliJ IDEA 2023.2.5\\bin;","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2023.3.4\\bin;",LANG:"en_US.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\polbe\\AppData\\Local",LOCAL_GIT_DIRECTORY:"C:\\Users\\polbe\\AppData\\Local\\GitHubDesktop\\app-3.4.13\\resources\\app\\git",LOGONSERVER:"\\\\VOFFOLAPTOP",NODE_ENV:"production",NUMBER_OF_PROCESSORS:"12",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_TASK_HASH:"347233138967440930",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"D:\\Applications\\Typescript\\Perfect-Artifact-Filter",OneDrive:"C:\\Users\\polbe\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",Path:"D:\\Applications\\Typescript\\Perfect-Artifact-Filter\\apps\\frontend\\node_modules\\.bin;D:\\Applications\\Typescript\\Perfect-Artifact-Filter\\apps\\node_modules\\.bin;D:\\Applications\\Typescript\\Perfect-Artifact-Filter\\node_modules\\.bin;D:\\Applications\\Typescript\\node_modules\\.bin;D:\\Applications\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Program Files\\nodejs;D:\\Oracle\\dbhomeXE\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\Git\\cmd;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files (x86)\\Windows Kits\\10\\Windows Performance Toolkit\\;C:\\Program Files (x86)\\Google\\Cloud SDK\\google-cloud-sdk\\bin;C:\\Program Files\\nodejs\\;C:\\Program Files\\dotnet\\;C:\\Users\\polbe\\AppData\\Local\\Microsoft\\WindowsApps;D:\\IntelliJ IDEA 2023.2.5\\bin;;C:\\Users\\polbe\\AppData\\Local\\GitHubDesktop\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2023.3.4\\bin;;C:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\polbe\\dart-sdk\\bin;C:\\Users\\polbe\\flutter\\bin;C:\\Users\\polbe\\AppData\\Roaming\\npm;C:\\Program Files\\JetBrains\\WebStorm 2024.3.1\\bin;;C:\\Users\\polbe\\.dotnet\\tools",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.CPL",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD",PROCESSOR_LEVEL:"25",PROCESSOR_REVISION:"5000",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROMPT:"$P$G",PSModulePath:"C:\\Users\\polbe\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Google\\Cloud SDK\\google-cloud-sdk\\platform\\PowerShell",PT8HOME:"D:\\Cisco Packet Tracer 8.2.2",PUBLIC:"C:\\Users\\Public",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\polbe\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.96.4",TMP:"C:\\Users\\polbe\\AppData\\Local\\Temp",USERDOMAIN:"VOFFOLAPTOP",USERDOMAIN_ROAMINGPROFILE:"VOFFOLAPTOP",USERNAME:"polbe",USERPROFILE:"C:\\Users\\polbe",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-9438f23aff-sock",VSCODE_INJECTION:"1",WebStorm:"C:\\Program Files\\JetBrains\\WebStorm 2024.3.1\\bin;",windir:"C:\\WINDOWS"};Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r}});function a(_){let{config:c,src:i,width:n,quality:T}=_;return c.path+"?url="+encodeURIComponent(i)+"&w="+n+"&q="+(T||75)+(t.NEXT_DEPLOYMENT_ID?"&dpl="+t.NEXT_DEPLOYMENT_ID:"")}a.__next_img_default=!0;const r=a}(ce)),ce}(function(e,t){"use client";var a={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\polbe\\AppData\\Roaming",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_5784_FFISWQHHDYVUQVBK",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"VOFFOLAPTOP",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EFC_6480:"1",FORCE_COLOR:"true",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\polbe","IntelliJ IDEA":"D:\\IntelliJ IDEA 2023.2.5\\bin;","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2023.3.4\\bin;",LANG:"en_US.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\polbe\\AppData\\Local",LOCAL_GIT_DIRECTORY:"C:\\Users\\polbe\\AppData\\Local\\GitHubDesktop\\app-3.4.13\\resources\\app\\git",LOGONSERVER:"\\\\VOFFOLAPTOP",NODE_ENV:"production",NUMBER_OF_PROCESSORS:"12",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_TASK_HASH:"347233138967440930",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"D:\\Applications\\Typescript\\Perfect-Artifact-Filter",OneDrive:"C:\\Users\\polbe\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",Path:"D:\\Applications\\Typescript\\Perfect-Artifact-Filter\\apps\\frontend\\node_modules\\.bin;D:\\Applications\\Typescript\\Perfect-Artifact-Filter\\apps\\node_modules\\.bin;D:\\Applications\\Typescript\\Perfect-Artifact-Filter\\node_modules\\.bin;D:\\Applications\\Typescript\\node_modules\\.bin;D:\\Applications\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Program Files\\nodejs;D:\\Oracle\\dbhomeXE\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\Git\\cmd;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files (x86)\\Windows Kits\\10\\Windows Performance Toolkit\\;C:\\Program Files (x86)\\Google\\Cloud SDK\\google-cloud-sdk\\bin;C:\\Program Files\\nodejs\\;C:\\Program Files\\dotnet\\;C:\\Users\\polbe\\AppData\\Local\\Microsoft\\WindowsApps;D:\\IntelliJ IDEA 2023.2.5\\bin;;C:\\Users\\polbe\\AppData\\Local\\GitHubDesktop\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2023.3.4\\bin;;C:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\polbe\\dart-sdk\\bin;C:\\Users\\polbe\\flutter\\bin;C:\\Users\\polbe\\AppData\\Roaming\\npm;C:\\Program Files\\JetBrains\\WebStorm 2024.3.1\\bin;;C:\\Users\\polbe\\.dotnet\\tools",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.CPL",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD",PROCESSOR_LEVEL:"25",PROCESSOR_REVISION:"5000",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROMPT:"$P$G",PSModulePath:"C:\\Users\\polbe\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Google\\Cloud SDK\\google-cloud-sdk\\platform\\PowerShell",PT8HOME:"D:\\Cisco Packet Tracer 8.2.2",PUBLIC:"C:\\Users\\Public",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\polbe\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.96.4",TMP:"C:\\Users\\polbe\\AppData\\Local\\Temp",USERDOMAIN:"VOFFOLAPTOP",USERDOMAIN_ROAMINGPROFILE:"VOFFOLAPTOP",USERNAME:"polbe",USERPROFILE:"C:\\Users\\polbe",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-9438f23aff-sock",VSCODE_INJECTION:"1",WebStorm:"C:\\Program Files\\JetBrains\\WebStorm 2024.3.1\\bin;",windir:"C:\\WINDOWS"};Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return m}});const r=H,_=ee,c=De,i=_._(z),n=r._(Fe),T=r._(He()),O=ue,l=te,d=xe(),u=ke(),b=r._(he()),S=a.__NEXT_IMAGE_OPTS;typeof window>"u"&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);function U(o,p,s,f,I,A,P){const N=o==null?void 0:o.src;if(!o||o["data-loaded-src"]===N)return;o["data-loaded-src"]=N,("decode"in o?o.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(!(!o.parentElement||!o.isConnected)){if(p!=="empty"&&I(!0),s!=null&&s.current){const E=new Event("load");Object.defineProperty(E,"target",{writable:!1,value:o});let F=!1,y=!1;s.current({...E,nativeEvent:E,currentTarget:o,target:o,isDefaultPrevented:()=>F,isPropagationStopped:()=>y,persist:()=>{},preventDefault:()=>{F=!0,E.preventDefault()},stopPropagation:()=>{y=!0,E.stopPropagation()}})}f!=null&&f.current&&f.current(o)}})}function R(o){return i.use?{fetchPriority:o}:{fetchpriority:o}}const h=(0,i.forwardRef)((o,p)=>{let{src:s,srcSet:f,sizes:I,height:A,width:P,decoding:N,className:g,style:E,fetchPriority:F,placeholder:y,loading:J,unoptimized:Y,fill:X,onLoadRef:W,onLoadingCompleteRef:G,setBlurComplete:x,setShowAltText:q,sizesInput:M,onLoad:v,onError:V,...Q}=o;return(0,c.jsx)("img",{...Q,...R(F),loading:J,width:P,height:A,decoding:N,"data-nimg":X?"fill":"1",className:g,style:E,sizes:I,srcSet:f,src:s,ref:(0,i.useCallback)(L=>{p&&(typeof p=="function"?p(L):typeof p=="object"&&(p.current=L)),L&&(V&&(L.src=L.src),L.complete&&U(L,y,W,G,x))},[s,y,W,G,x,V,Y,M,p]),onLoad:L=>{const w=L.currentTarget;U(w,y,W,G,x)},onError:L=>{q(!0),y!=="empty"&&x(!0),V&&V(L)}})});function D(o){let{isAppRouter:p,imgAttributes:s}=o;const f={as:"image",imageSrcSet:s.srcSet,imageSizes:s.sizes,crossOrigin:s.crossOrigin,referrerPolicy:s.referrerPolicy,...R(s.fetchPriority)};return p&&n.default.preload?(n.default.preload(s.src,f),null):(0,c.jsx)(T.default,{children:(0,c.jsx)("link",{rel:"preload",href:s.srcSet?void 0:s.src,...f},"__nimg-"+s.src+s.srcSet+s.sizes)})}const m=(0,i.forwardRef)((o,p)=>{const f=!(0,i.useContext)(u.RouterContext),I=(0,i.useContext)(d.ImageConfigContext),A=(0,i.useMemo)(()=>{const G=S||I||l.imageConfigDefault,x=[...G.deviceSizes,...G.imageSizes].sort((M,v)=>M-v),q=G.deviceSizes.sort((M,v)=>M-v);return{...G,allSizes:x,deviceSizes:q}},[I]),{onLoad:P,onLoadingComplete:N}=o,g=(0,i.useRef)(P);(0,i.useEffect)(()=>{g.current=P},[P]);const E=(0,i.useRef)(N);(0,i.useEffect)(()=>{E.current=N},[N]);const[F,y]=(0,i.useState)(!1),[J,Y]=(0,i.useState)(!1),{props:X,meta:W}=(0,O.getImgProps)(o,{defaultLoader:b.default,imgConf:A,blurComplete:F,showAltText:J});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(h,{...X,unoptimized:W.unoptimized,placeholder:W.placeholder,fill:W.fill,onLoadRef:g,onLoadingCompleteRef:E,setBlurComplete:y,setShowAltText:Y,sizesInput:o.sizes,ref:p}),W.priority?(0,c.jsx)(D,{isAppRouter:f,imgAttributes:X}):null]})});(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)})(pe,pe.exports);var Ke=pe.exports;(function(e){var t={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\polbe\\AppData\\Roaming",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_5784_FFISWQHHDYVUQVBK",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"VOFFOLAPTOP",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EFC_6480:"1",FORCE_COLOR:"true",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\polbe","IntelliJ IDEA":"D:\\IntelliJ IDEA 2023.2.5\\bin;","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2023.3.4\\bin;",LANG:"en_US.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\polbe\\AppData\\Local",LOCAL_GIT_DIRECTORY:"C:\\Users\\polbe\\AppData\\Local\\GitHubDesktop\\app-3.4.13\\resources\\app\\git",LOGONSERVER:"\\\\VOFFOLAPTOP",NODE_ENV:"production",NUMBER_OF_PROCESSORS:"12",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_TASK_HASH:"347233138967440930",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"D:\\Applications\\Typescript\\Perfect-Artifact-Filter",OneDrive:"C:\\Users\\polbe\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",Path:"D:\\Applications\\Typescript\\Perfect-Artifact-Filter\\apps\\frontend\\node_modules\\.bin;D:\\Applications\\Typescript\\Perfect-Artifact-Filter\\apps\\node_modules\\.bin;D:\\Applications\\Typescript\\Perfect-Artifact-Filter\\node_modules\\.bin;D:\\Applications\\Typescript\\node_modules\\.bin;D:\\Applications\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Program Files\\nodejs;D:\\Oracle\\dbhomeXE\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\Git\\cmd;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files (x86)\\Windows Kits\\10\\Windows Performance Toolkit\\;C:\\Program Files (x86)\\Google\\Cloud SDK\\google-cloud-sdk\\bin;C:\\Program Files\\nodejs\\;C:\\Program Files\\dotnet\\;C:\\Users\\polbe\\AppData\\Local\\Microsoft\\WindowsApps;D:\\IntelliJ IDEA 2023.2.5\\bin;;C:\\Users\\polbe\\AppData\\Local\\GitHubDesktop\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2023.3.4\\bin;;C:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\polbe\\dart-sdk\\bin;C:\\Users\\polbe\\flutter\\bin;C:\\Users\\polbe\\AppData\\Roaming\\npm;C:\\Program Files\\JetBrains\\WebStorm 2024.3.1\\bin;;C:\\Users\\polbe\\.dotnet\\tools",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.CPL",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD",PROCESSOR_LEVEL:"25",PROCESSOR_REVISION:"5000",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROMPT:"$P$G",PSModulePath:"C:\\Users\\polbe\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Google\\Cloud SDK\\google-cloud-sdk\\platform\\PowerShell",PT8HOME:"D:\\Cisco Packet Tracer 8.2.2",PUBLIC:"C:\\Users\\Public",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\polbe\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.96.4",TMP:"C:\\Users\\polbe\\AppData\\Local\\Temp",USERDOMAIN:"VOFFOLAPTOP",USERDOMAIN_ROAMINGPROFILE:"VOFFOLAPTOP",USERNAME:"polbe",USERPROFILE:"C:\\Users\\polbe",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\polbe\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-9438f23aff-sock",VSCODE_INJECTION:"1",WebStorm:"C:\\Program Files\\JetBrains\\WebStorm 2024.3.1\\bin;",windir:"C:\\WINDOWS"};Object.defineProperty(e,"__esModule",{value:!0});function a(O,l){for(var d in l)Object.defineProperty(O,d,{enumerable:!0,get:l[d]})}a(e,{default:function(){return T},getImageProps:function(){return n}});const r=H,_=ue,c=Ke,i=r._(he());function n(O){const{props:l}=(0,_.getImgProps)(O,{defaultLoader:i.default,imgConf:t.__NEXT_IMAGE_OPTS});for(const[d,u]of Object.entries(l))u===void 0&&delete l[d];return{props:l}}const T=c.Image})(Ie);var Ne=Ie;const je=Me(Ne),Ye=ye({__proto__:null,default:je},[Ne]);export{Ye as i};
