(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{7823:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,552,23)),Promise.resolve().then(t.t.bind(t,4546,23)),Promise.resolve().then(t.t.bind(t,6584,23)),Promise.resolve().then(t.bind(t,5807)),Promise.resolve().then(t.bind(t,6869))},5807:(e,r,t)=>{"use strict";t.d(r,{Header:()=>w});var n=t(3528),a=t(5316),i=t(6282),s=t(7369),o=t(3275),l=t(957),c=t(4927);function d(e){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...e,children:[(0,n.jsx)("path",{d:"M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"}),(0,n.jsx)("path",{d:"M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061",fill:"none"})]})}function h(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:(0,n.jsx)("path",{d:"M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}let u=(0,a.forwardRef)(function(e,r){let{className:t,children:a,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,c.A)("sm:px-8",t),...i,children:(0,n.jsx)("div",{className:"mx-auto w-full max-w-7xl lg:px-8",children:a})})}),m=(0,a.forwardRef)(function(e,r){let{className:t,children:a,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,c.A)("relative px-4 sm:px-8 lg:px-12",t),...i,children:(0,n.jsx)("div",{className:"mx-auto max-w-2xl lg:max-w-5xl",children:a})})}),f=(0,a.forwardRef)(function(e,r){let{children:t,...a}=e;return(0,n.jsx)(u,{ref:r,...a,children:(0,n.jsx)(m,{children:t})})});function v(e,r,t){return Math.min(Math.max(e,Math.min(r,t)),Math.max(r,t))}function p(){let{resolvedTheme:e,setTheme:r}=(0,l.D)(),t="dark"===e?"light":"dark",[i,s]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{s(!0)},[]),(0,n.jsxs)("button",{type:"button","aria-label":i?"Switch to ".concat(t," theme"):"Toggle theme",className:"group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20",onClick:()=>r(t),children:[(0,n.jsx)(d,{className:"h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"}),(0,n.jsx)(h,{className:"hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"})]})}function x(e){let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,c.A)(r,"h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"),...t})}function g(e){let{large:r=!1,className:t,...a}=e;return(0,n.jsx)(s.default,{href:"/","aria-label":"Home",className:(0,c.A)(t,"pointer-events-auto"),...a,children:(0,n.jsx)(i.default,{src:"/avatar.png",width:40,height:40,alt:"",sizes:r?"4rem":"2.25rem",className:(0,c.A)("rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",r?"h-16 w-16":"h-9 w-9"),priority:!0})})}function w(){let e="/"===(0,o.usePathname)(),r=(0,a.useRef)(null),t=(0,a.useRef)(null),i=(0,a.useRef)(!0);return(0,a.useEffect)(()=>{var n,a;let s=null!==(a=null===(n=t.current)||void 0===n?void 0:n.offsetTop)&&void 0!==a?a:0;function o(e,r){document.documentElement.style.setProperty(e,r)}function l(e){document.documentElement.style.removeProperty(e)}function c(){(function(){if(!r.current)return;let{top:e,height:t}=r.current.getBoundingClientRect(),n=v(window.scrollY,0,document.body.scrollHeight-window.innerHeight);if(i.current&&o("--header-position","sticky"),o("--content-offset","".concat(s,"px")),i.current||n<s)o("--header-height","".concat(s+t,"px")),o("--header-mb","".concat(-s,"px"));else if(e+t<-64){let e=Math.max(t,n-64);o("--header-height","".concat(e,"px")),o("--header-mb","".concat(t-e,"px"))}else 0===e&&(o("--header-height","".concat(n+t,"px")),o("--header-mb","".concat(-n,"px")));0===e&&n>0&&n>=s?(o("--header-inner-position","fixed"),l("--header-top"),l("--avatar-top")):(l("--header-inner-position"),o("--header-top","0px"),o("--avatar-top","0px"))})(),function(){if(!e)return;let r=36/64,t=2/16,n=s-window.scrollY,a=n*(1-r)/s+r;a=v(a,1,r);let i=n*(0-t)/s+t;i=v(i,0,t),o("--avatar-image-transform","translate3d(".concat(i,"rem, 0, 0) scale(").concat(a,")"));let l=1/(r/a),c=(-t+i)*l;o("--avatar-border-transform","translate3d(".concat(c,"rem, 0, 0) scale(").concat(l,")")),o("--avatar-border-opacity",a===r?"1":"0")}(),i.current=!1}return c(),window.addEventListener("scroll",c,{passive:!0}),window.addEventListener("resize",c),()=>{window.removeEventListener("scroll",c),window.removeEventListener("resize",c)}},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("header",{className:"pointer-events-none relative z-50 flex flex-none flex-col",style:{height:"var(--header-height)",marginBottom:"var(--header-mb)"},children:[e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{ref:t,className:"order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"}),(0,n.jsx)(f,{className:"top-0 order-last -mb-3 pt-3",style:{position:"var(--header-position)"},children:(0,n.jsx)("div",{className:"top-[var(--avatar-top,theme(spacing.3))] w-full",style:{position:"var(--header-inner-position)"},children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(x,{className:"absolute left-0 top-3 origin-left transition-opacity",style:{opacity:"var(--avatar-border-opacity, 0)",transform:"var(--avatar-border-transform)"}}),(0,n.jsx)(g,{large:!0,className:"block h-16 w-16 origin-left",style:{transform:"var(--avatar-image-transform)"}})]})})})]}),(0,n.jsx)("div",{ref:r,className:"top-0 z-10 h-16 pt-6",style:{position:"var(--header-position)"},children:(0,n.jsx)(f,{className:"top-[var(--header-top,theme(spacing.6))] w-full",style:{position:"var(--header-inner-position)"},children:(0,n.jsxs)("div",{className:"relative flex gap-4",children:[(0,n.jsx)("div",{className:"flex flex-1",children:!e&&(0,n.jsx)(x,{children:(0,n.jsx)(g,{})})}),(0,n.jsx)("div",{className:"flex justify-end md:flex-1",children:(0,n.jsx)("div",{className:"pointer-events-auto",children:(0,n.jsx)(p,{})})})]})})})]}),e&&(0,n.jsx)("div",{className:"flex-none",style:{height:"var(--content-offset)"}})]})}},6869:(e,r,t)=>{"use strict";t.d(r,{Providers:()=>c});var n=t(3528),a=t(5316),i=t(3275),s=t(957);function o(){let{resolvedTheme:e,setTheme:r}=(0,s.D)();return(0,a.useEffect)(()=>{let t=window.matchMedia("(prefers-color-scheme: dark)");function n(){e===(t.matches?"dark":"light")&&r("system")}return n(),t.addEventListener("change",n),()=>{t.removeEventListener("change",n)}},[e,r]),null}let l=(0,a.createContext)({});function c(e){let{children:r}=e,t=function(e){let r=(0,a.useRef)();return(0,a.useEffect)(()=>{r.current=e},[e]),r.current}((0,i.usePathname)());return(0,n.jsx)(l.Provider,{value:{previousPathname:t},children:(0,n.jsxs)(s.N,{attribute:"class",disableTransitionOnChange:!0,children:[(0,n.jsx)(o,{}),r]})})}},6584:()=>{}},e=>{var r=r=>e(e.s=r);e.O(0,[868,208,59,465,743,358],()=>r(7823)),_N_E=e.O()}]);