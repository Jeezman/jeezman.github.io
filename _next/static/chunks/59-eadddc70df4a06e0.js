(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59],{6282:(e,t,r)=>{"use strict";r.d(t,{default:()=>i.a});var n=r(9673),i=r.n(n)},7369:(e,t,r)=>{"use strict";r.d(t,{default:()=>i.a});var n=r(7208),i=r.n(n)},3275:(e,t,r)=>{"use strict";var n=r(6067);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}})},456:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(6218),i=r(9067),o=r(3528),a=i._(r(5316)),s=n._(r(8965)),l=n._(r(1552)),u=r(4847),d=r(8532),c=r(4980);r(9194);let f=r(6585),m=n._(r(7133)),p=r(5898),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,i,o,a){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:s,width:l,decoding:u,className:d,style:c,fetchPriority:f,placeholder:m,loading:g,unoptimized:v,fill:b,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:S,setShowAltText:C,sizesInput:x,onLoad:P,onError:j,...E}=e,O=(0,a.useCallback)(e=>{e&&(j&&(e.src=e.src),e.complete&&h(e,m,_,w,S,v,x))},[r,m,_,w,S,j,v,x]),M=(0,p.useMergedRef)(t,O);return(0,o.jsx)("img",{...E,...y(f),loading:g,width:l,height:s,decoding:u,"data-nimg":b?"fill":"1",className:d,style:c,sizes:i,srcSet:n,src:r,ref:M,onLoad:e=>{h(e.currentTarget,m,_,w,S,v,x)},onError:e=>{C(!0),"empty"!==m&&S(!0),j&&j(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,n),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=g||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:s,onLoadingComplete:l}=e,p=(0,a.useRef)(s);(0,a.useEffect)(()=>{p.current=s},[s]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[y,_]=(0,a.useState)(!1),[w,S]=(0,a.useState)(!1),{props:C,meta:x}=(0,u.getImgProps)(e,{defaultLoader:m.default,imgConf:i,blurComplete:y,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...C,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:p,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:S,sizesInput:e.sizes,ref:t}),x.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:C}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},644:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(6218)._(r(5316)).default.createContext({})},4268:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},4847:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(9194);let n=r(2216),i=r(8532);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,l,u,{src:d,sizes:c,unoptimized:f=!1,priority:m=!1,loading:p,className:g,quality:h,width:y,height:v,fill:b=!1,style:_,overrideSrc:w,onLoad:S,onLoadingComplete:C,placeholder:x="empty",blurDataURL:P,fetchPriority:j,decoding:E="async",layout:O,objectFit:M,objectPosition:k,lazyBoundary:z,lazyRoot:I,...A}=e,{imgConf:T,showAltText:R,blurComplete:L,defaultLoader:N}=t,D=T||i.imageConfigDefault;if("allSizes"in D)s=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);s={...D,allSizes:e,deviceSizes:t}}if(void 0===N)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=A.loader||N;delete A.loader,delete A.srcSet;let U="__next_img_default"in F;if(U){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let G="",B=a(y),W=a(v);if((r=d)&&"object"==typeof r&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,P=P||e.blurDataURL,G=e.src,!b){if(B||W){if(B&&!W){let t=B/e.width;W=Math.round(e.height*t)}else if(!B&&W){let t=W/e.height;B=Math.round(e.width*t)}}else B=e.width,W=e.height}}let H=!m&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:G)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,H=!1),s.unoptimized&&(f=!0),U&&d.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0);let V=a(h),q=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:k}:{},R?{}:{color:"transparent"},_),J=L||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:W,blurWidth:l,blurHeight:u,blurDataURL:P||"",objectFit:q.objectFit})+'")':'url("'+x+'")',K=J?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},$=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map((e,n)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:s({config:t,src:r,quality:o,width:l[d]})}}({config:s,src:d,unoptimized:f,width:B,quality:V,sizes:c,loader:F});return{props:{...A,loading:H?"lazy":p,fetchPriority:j,width:B,height:W,decoding:E,className:g,style:{...q,...K},sizes:$.sizes,srcSet:$.srcSet,src:w||$.src},meta:{unoptimized:f,priority:m,placeholder:x,fill:b}}}},1552:(e,t,r)=>{"use strict";var n=r(3953);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return f}});let i=r(6218),o=r(9067),a=r(3528),s=o._(r(5316)),l=i._(r(49)),u=r(644),d=r(9146),c=r(4268);function f(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(9194);let p=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:r}=t;return e.reduce(m,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:i})})}let h=function(e){let{children:t}=e,r=(0,s.useContext)(u.AmpStateContext),n=(0,s.useContext)(d.HeadManagerContext);return(0,a.jsx)(l.default,{reduceComponentsToState:g,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2216:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,s=n?40*n:t,l=i?40*i:r,u=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},4980:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(6218)._(r(5316)),i=r(8532),o=n.default.createContext(i.imageConfigDefault)},8532:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},9673:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return s}});let n=r(6218),i=r(4847),o=r(456),a=n._(r(7133));function s(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=o.Image},7133:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},49:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(5316),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,a=i?()=>{}:n.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var l;null==t||null==(l=t.mountedInstances)||l.add(e.children),s()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4546:e=>{e.exports={style:{fontFamily:"'geistMono', 'geistMono Fallback'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},552:e=>{e.exports={style:{fontFamily:"'geistSans', 'geistSans Fallback'"},className:"__className_1e4310",variable:"__variable_1e4310"}},4927:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(n&&(n+=" "),n+=t);return n}},957:(e,t,r)=>{"use strict";r.d(t,{D:()=>d,N:()=>c});var n=r(5316),i=(e,t,r,n,i,o,a,s)=>{let l=document.documentElement,u=["light","dark"];function d(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&o?i.map(e=>o[e]||e):i;r?(l.classList.remove(...n),l.classList.add(t)):l.setAttribute(e,t)}),s&&u.includes(t)&&(l.style.colorScheme=t)}if(n)d(n);else try{let e=localStorage.getItem(t)||r,n=a&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(n)}catch(e){}},o=["light","dark"],a="(prefers-color-scheme: dark)",s="undefined"==typeof window,l=n.createContext(void 0),u={setTheme:e=>{},themes:[]},d=()=>{var e;return null!=(e=n.useContext(l))?e:u},c=e=>n.useContext(l)?n.createElement(n.Fragment,null,e.children):n.createElement(m,{...e}),f=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:i=!0,enableColorScheme:s=!0,storageKey:u="theme",themes:d=f,defaultTheme:c=i?"system":"light",attribute:m="data-theme",value:v,children:b,nonce:_,scriptProps:w}=e,[S,C]=n.useState(()=>g(u,c)),[x,P]=n.useState(()=>g(u)),j=v?Object.values(v):d,E=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=y());let n=v?v[t]:t,a=r?h(_):null,l=document.documentElement,u=e=>{"class"===e?(l.classList.remove(...j),n&&l.classList.add(n)):e.startsWith("data-")&&(n?l.setAttribute(e,n):l.removeAttribute(e))};if(Array.isArray(m)?m.forEach(u):u(m),s){let e=o.includes(c)?c:null,r=o.includes(t)?t:e;l.style.colorScheme=r}null==a||a()},[_]),O=n.useCallback(e=>{let t="function"==typeof e?e(S):e;C(t);try{localStorage.setItem(u,t)}catch(e){}},[S]),M=n.useCallback(e=>{P(y(e)),"system"===S&&i&&!t&&E("system")},[S,t]);n.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(M),M(e),()=>e.removeListener(M)},[M]),n.useEffect(()=>{let e=e=>{e.key===u&&O(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[O]),n.useEffect(()=>{E(null!=t?t:S)},[t,S]);let k=n.useMemo(()=>({theme:S,setTheme:O,forcedTheme:t,resolvedTheme:"system"===S?x:S,themes:i?[...d,"system"]:d,systemTheme:i?x:void 0}),[S,O,t,x,i,d]);return n.createElement(l.Provider,{value:k},n.createElement(p,{forcedTheme:t,storageKey:u,attribute:m,enableSystem:i,enableColorScheme:s,defaultTheme:c,value:v,themes:d,nonce:_,scriptProps:w}),b)},p=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:o,enableSystem:a,enableColorScheme:s,defaultTheme:l,value:u,themes:d,nonce:c,scriptProps:f}=e,m=JSON.stringify([o,r,l,t,d,u,a,s]).slice(1,-1);return n.createElement("script",{...f,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?c:"",dangerouslySetInnerHTML:{__html:"(".concat(i.toString(),")(").concat(m,")")}})}),g=(e,t)=>{let r;if(!s){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},h=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},y=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}}]);