(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[101,797],{4031:function(e,t,n){Promise.resolve().then(n.t.bind(n,6173,23)),Promise.resolve().then(n.t.bind(n,5456,23)),Promise.resolve().then(n.t.bind(n,3476,23)),Promise.resolve().then(n.t.bind(n,761,23)),Promise.resolve().then(n.t.bind(n,7095,23)),Promise.resolve().then(n.bind(n,7836)),Promise.resolve().then(n.bind(n,5396))},7836:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(9268),i=n(2469),o=n(6006),l=n(8576),s=n(9714),u=n(4461),c=n(8657),a=()=>{let{theme:e,toggleTheme:t}=(0,o.useContext)(c.ThemeContext),[n,i]=(0,o.useState)(!1);if((0,o.useEffect)(()=>{i(!0)},[e]),!n)return null;let l="light"==e?"Dark mode":"Light mode";return(0,r.jsx)(u.default,{icon:"light"==e?(0,r.jsx)(s.NWY,{}):(0,r.jsx)(s.kLh,{}),tooltip:l,onClickHandler:t})},d=n(7933),f=n.n(d);function h(e){let{sticky:t,title:n}=e,s=(0,o.useRef)(null),[u,c]=(0,o.useState)(!0),[{height:d},h]=(0,i.q_)(()=>({height:"64px",config:i.vc.gentle})),m=(0,o.useCallback)(()=>{let e=window.scrollY;e<200?(c(!0),h.start({height:"64px"})):(c(!1),h.start({height:"60px"}))},[h]);(0,o.useEffect)(()=>(t&&window.addEventListener("scroll",()=>m()),window.removeEventListener("scroll",m)),[t,m]);let C=f().header;return t&&(C+=" "+f().sticky),(0,r.jsx)("header",{ref:s,className:C,style:{"--header-nav-border":u?"transparent":"var(--surface2)"},children:(0,r.jsxs)(i.a.div,{className:f().header__content,style:{height:d},children:[(0,r.jsx)("div",{children:(0,r.jsx)(l.default,{})}),n&&(0,r.jsx)("p",{className:"h4 ".concat(f().title),style:{opacity:u?"0":"1"},children:n}),(0,r.jsx)("div",{children:(0,r.jsx)(a,{})})]})})}},4461:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(9268),i=n(9178),o=n.n(i);function l(e){let{icon:t,href:n,tooltip:i,target:l,onClickHandler:s}=e;return n?(0,r.jsxs)("a",{href:n,...l&&{target:l,rel:"noreferrer"},className:o().button,children:[t,(0,r.jsx)("div",{className:o().tooltip,children:(0,r.jsx)("p",{children:i})})]}):(0,r.jsxs)("button",{className:o().button,...s&&{onClick:()=>s()},children:[t,(0,r.jsx)("div",{className:o().tooltip,children:(0,r.jsx)("p",{children:i})})]})}},8576:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(9268);function i(){return(0,r.jsx)("a",{"aria-label":"homepage",href:"/",style:{color:"var(--text1)"},children:(0,r.jsxs)("svg",{width:"32px",viewBox:"0 0 397 302",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("path",{d:"M221.939114,35.6605157 C204.351035,50.8449551 130.324787,113.792827 119.890628,120.420043 C119.576213,120.619743 119.263558,120.821114 118.952664,121.024159 L198.5,0 L221.939114,35.6605157 Z M243.828546,68.963329 L273.8866,114.69397 C272.117464,114.562854 270.321534,114.497297 268.498807,114.497297 C253.978066,114.497297 241.82999,118.073799 232.054216,125.22691 C222.278441,132.380022 214.560841,142.050884 208.901182,154.239786 C203.241523,166.428688 198.296541,181.564445 194.066089,199.647511 C190.979003,213.152586 188.063465,223.939316 185.319387,232.008026 C182.57531,240.076736 178.602175,246.6575 173.399862,251.750516 C168.19755,256.843531 161.423211,259.390001 153.076643,259.390001 C142.557681,259.390001 133.782483,254.669018 126.750786,245.22691 C119.719088,235.784803 116.203292,223.510248 116.203292,208.402876 C116.203292,197.415697 117.946899,188.545971 121.434163,181.793434 C124.53939,175.780653 216.917922,93.0246761 243.828546,68.963329 Z M338.76446,213.399833 L397,302 L290.773472,302 C298.328071,297.296467 311.954049,284.104731 317.806195,277.244078 C324.151873,269.804842 329.239773,260.448712 333.070047,249.175408 C336.539552,238.963924 338.437676,227.038831 338.76446,213.399833 Z M228.656406,302 L192.417674,302 C200.40751,297.557999 207.073897,291.566449 212.417013,284.025194 C218.13384,275.956484 222.99307,266.171174 226.994849,254.66897 C230.996628,243.166767 234.655343,230.319971 237.971103,216.128198 C240.829516,204.797669 243.001878,196.671856 244.488253,191.750516 C245.974628,186.829175 248.032655,181.965132 250.662395,177.158241 C253.292136,172.35135 256.436344,168.574564 260.095113,165.827769 C263.753882,163.080974 268.098606,161.707597 273.129414,161.707597 C281.247308,161.707597 288.193149,165.741891 293.967145,173.810601 C299.74114,181.879311 302.628095,192.49437 302.628095,205.656095 C302.628095,219.847868 299.96981,230.148194 294.653161,236.557382 C289.59174,242.658894 241.454262,293.210694 228.656406,302 Z M124.700889,302 L0,302 L82.010118,177.228939 C79.8803207,187.090058 78.8154297,197.939145 78.8154297,209.776267 C78.8154297,230.491678 82.2454745,248.402801 89.1056672,263.510172 C95.9658598,278.617544 105.455651,290.090963 117.575324,297.930773 C119.894022,299.430661 122.269209,300.78707 124.700889,302 Z",id:"path-1"})}),(0,r.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,r.jsxs)("g",{id:"Group-4",children:[(0,r.jsx)("mask",{id:"mask-2",children:(0,r.jsx)("use",{xlinkHref:"#path-1"})}),(0,r.jsx)("use",{id:"Combined-Shape",fill:"currentColor",xlinkHref:"#path-1"})]})})]})})}},5396:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r={};n.r(r),n.d(r,{MDXContext:function(){return s},MDXProvider:function(){return d},useMDXComponents:function(){return c},withMDXComponents:function(){return u}});var i=n(9268),o=n(6006),l=n(6541);let s=o.createContext({});function u(e){return function(t){let n=c(t.components);return o.createElement(e,{...t,allComponents:n})}}function c(e){let t=o.useContext(s);return o.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function d({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||a:c(e),o.createElement(s.Provider,{value:r},t)}function f({compiledSource:e,frontmatter:t,scope:n,components:i={},lazy:s}){let[u,c]=(0,o.useState)(!s||"undefined"==typeof window);(0,o.useEffect)(()=>{if(s){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let a=(0,o.useMemo)(()=>{let i=Object.assign({opts:{...r,...l.jsxRuntime}},{frontmatter:t},n),o=Object.keys(i),s=Object.values(i),u=Reflect.construct(Function,o.concat(`${e}`));return u.apply(u,s).default},[n,e]);if(!u)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let f=o.createElement(d,{components:i},o.createElement(a,null));return s?o.createElement("div",null,f):f}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var h=n(6394),m=n.n(h);let C={Image:m()};function x(e){let{source:t}=e;return(0,i.jsx)(f,{...t,components:C})}},8657:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeContext:function(){return l},ThemeProvider:function(){return s}});var r=n(9268),i=n(6006);let o=e=>{localStorage.setItem("theme",e)},l=(0,i.createContext)({theme:"dark",toggleTheme:()=>{}}),s=e=>{let{children:t}=e,[n,s]=(0,i.useState)(null);(0,i.useEffect)(()=>{let e=window.document.documentElement;s("dark"==e.getAttribute("data-theme")?"dark":"light")},[]);let u=(0,i.useMemo)(()=>({theme:n,toggleTheme:function(){let e=window.document.documentElement,t="light"==n?"dark":"light";e.setAttribute("data-theme",t),o(t),s(t)}}),[n,s]);return(0,r.jsx)(l.Provider,{value:u,children:t})}},761:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return i},NoSSR:function(){return o}}),n(6927),n(6006);let r=n(8687);function i(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function o(e){let{children:t}=e;return t}},7933:function(e){e.exports={header:"header_header__ts5le",header__content:"header_header__content__kVqxU",title:"header_title__awEy6",sticky:"header_sticky__iOy_Z"}},9178:function(e){e.exports={button:"iconButton_button__sCCG7",tooltip:"iconButton_tooltip__iePKq"}},6541:function(e,t,n){e.exports.jsxRuntime=n(9268)}},function(e){e.O(0,[919,209,253,698,744],function(){return e(e.s=4031)}),_N_E=e.O()}]);