(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7705:function(e,t,n){Promise.resolve().then(n.t.bind(n,7676,23)),Promise.resolve().then(n.bind(n,8657)),Promise.resolve().then(n.bind(n,8576)),Promise.resolve().then(n.t.bind(n,1141,23)),Promise.resolve().then(n.t.bind(n,8628,23)),Promise.resolve().then(n.t.bind(n,6419,23))},8576:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(9268);function l(){return(0,r.jsx)("a",{"aria-label":"homepage",href:"/",style:{color:"var(--text1)"},children:(0,r.jsxs)("svg",{width:"32px",viewBox:"0 0 397 302",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("path",{d:"M221.939114,35.6605157 C204.351035,50.8449551 130.324787,113.792827 119.890628,120.420043 C119.576213,120.619743 119.263558,120.821114 118.952664,121.024159 L198.5,0 L221.939114,35.6605157 Z M243.828546,68.963329 L273.8866,114.69397 C272.117464,114.562854 270.321534,114.497297 268.498807,114.497297 C253.978066,114.497297 241.82999,118.073799 232.054216,125.22691 C222.278441,132.380022 214.560841,142.050884 208.901182,154.239786 C203.241523,166.428688 198.296541,181.564445 194.066089,199.647511 C190.979003,213.152586 188.063465,223.939316 185.319387,232.008026 C182.57531,240.076736 178.602175,246.6575 173.399862,251.750516 C168.19755,256.843531 161.423211,259.390001 153.076643,259.390001 C142.557681,259.390001 133.782483,254.669018 126.750786,245.22691 C119.719088,235.784803 116.203292,223.510248 116.203292,208.402876 C116.203292,197.415697 117.946899,188.545971 121.434163,181.793434 C124.53939,175.780653 216.917922,93.0246761 243.828546,68.963329 Z M338.76446,213.399833 L397,302 L290.773472,302 C298.328071,297.296467 311.954049,284.104731 317.806195,277.244078 C324.151873,269.804842 329.239773,260.448712 333.070047,249.175408 C336.539552,238.963924 338.437676,227.038831 338.76446,213.399833 Z M228.656406,302 L192.417674,302 C200.40751,297.557999 207.073897,291.566449 212.417013,284.025194 C218.13384,275.956484 222.99307,266.171174 226.994849,254.66897 C230.996628,243.166767 234.655343,230.319971 237.971103,216.128198 C240.829516,204.797669 243.001878,196.671856 244.488253,191.750516 C245.974628,186.829175 248.032655,181.965132 250.662395,177.158241 C253.292136,172.35135 256.436344,168.574564 260.095113,165.827769 C263.753882,163.080974 268.098606,161.707597 273.129414,161.707597 C281.247308,161.707597 288.193149,165.741891 293.967145,173.810601 C299.74114,181.879311 302.628095,192.49437 302.628095,205.656095 C302.628095,219.847868 299.96981,230.148194 294.653161,236.557382 C289.59174,242.658894 241.454262,293.210694 228.656406,302 Z M124.700889,302 L0,302 L82.010118,177.228939 C79.8803207,187.090058 78.8154297,197.939145 78.8154297,209.776267 C78.8154297,230.491678 82.2454745,248.402801 89.1056672,263.510172 C95.9658598,278.617544 105.455651,290.090963 117.575324,297.930773 C119.894022,299.430661 122.269209,300.78707 124.700889,302 Z",id:"path-1"})}),(0,r.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,r.jsxs)("g",{id:"Group-4",children:[(0,r.jsx)("mask",{id:"mask-2",children:(0,r.jsx)("use",{xlinkHref:"#path-1"})}),(0,r.jsx)("use",{id:"Combined-Shape",fill:"currentColor",xlinkHref:"#path-1"})]})})]})})}},8657:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeContext:function(){return a},ThemeProvider:function(){return i}});var r=n(9268),l=n(6006);let o=e=>{localStorage.setItem("theme",e)},a=(0,l.createContext)({theme:"dark",toggleTheme:()=>{}}),i=e=>{let{children:t}=e,[n,i]=(0,l.useState)(null);(0,l.useEffect)(()=>{let e=window.document.documentElement;i("dark"==e.getAttribute("data-theme")?"dark":"light")},[]);let u=(0,l.useMemo)(()=>({theme:n,toggleTheme:function(){let e=window.document.documentElement,t="light"==n?"dark":"light";e.setAttribute("data-theme",t),o(t),i(t)}}),[n,i]);return(0,r.jsx)(a.Provider,{value:u,children:t})}},1522:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?l[o]=!!n[e]:l.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:a}=n;return a?l.innerHTML=a.__html||"":o&&(l.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),l}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&i.push(n)}let s=t.map(l).filter(e=>{for(let t=0,n=i.length;t<n;t++){let n=i[t];if(o(n,e))return i.splice(t,1),!1}return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(a-i.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9830:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7676:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return _},initScriptLoader:function(){return m},default:function(){return y}});let r=n(6927),l=n(5909),o=r._(n(8431)),a=l._(n(6006)),i=n(7268),u=n(1522),s=n(9830),c=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:o,children:a="",strategy:i="afterInteractive",onError:s}=e,p=n||t;if(p&&d.has(p))return;if(c.has(t)){d.add(p),c.get(t).then(r,s);return}let _=()=>{l&&l(),d.add(p)},m=document.createElement("script"),h=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),_()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(o?(m.innerHTML=o.__html||"",_()):a?(m.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",_()):t&&(m.src=t,c.set(t,h)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,r)}"worker"===i&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",i),document.body.appendChild(m)};function _(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>p(e))}):p(e)}function m(e){e.forEach(_),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function h(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:u="afterInteractive",onError:c,...f}=e,{updateScripts:_,scripts:m,getIsSsr:h,appDir:y,nonce:b}=(0,a.useContext)(i.HeadManagerContext),v=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;v.current||(l&&e&&d.has(e)&&l(),v.current=!0)},[l,t,n]);let C=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!C.current&&("afterInteractive"===u?p(e):"lazyOnload"===u&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>p(e))})),C.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(_?(m[u]=(m[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:c,...f}]),_(m)):h&&h()?d.add(t||n):h&&!h()&&p(e)),y){if("beforeInteractive"===u)return n?(o.default.preload(n,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"}),a.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(f.dangerouslySetInnerHTML&&(f.children=f.dangerouslySetInnerHTML.__html,delete f.dangerouslySetInnerHTML),a.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...f}])+")"}}));"afterInteractive"===u&&n&&o.default.preload(n,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"})}return null}Object.defineProperty(h,"__nextScript",{value:!0});let y=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1141:function(){},6419:function(e){e.exports={style:{fontFamily:"'__Fira_Code_a1451e', '__Fira_Code_Fallback_a1451e'",fontStyle:"normal"},className:"__className_a1451e",variable:"__variable_a1451e"}},8628:function(e){e.exports={style:{fontFamily:"'__Inter_74b6c1', '__Inter_Fallback_74b6c1'",fontStyle:"normal"},className:"__className_74b6c1",variable:"__variable_74b6c1"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:l,type:e,key:s,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},9268:function(e,t,n){"use strict";e.exports=n(3177)}},function(e){e.O(0,[253,698,744],function(){return e(e.s=7705)}),_N_E=e.O()}]);