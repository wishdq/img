if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.3cb6b11c.css",revision:"cfb719a006a95a08a445626fbf39c5ea"},{url:"assets/index.456d374e.css",revision:"04126e05ac4bb7e0343ebaee7d3f8b9c"},{url:"assets/index.893b767e.js",revision:"6001680fa49653250496db3820611da0"},{url:"assets/index.d9aa92fd.js",revision:"856e5d77ab95542e1fcd417bc61b7caa"},{url:"assets/registerSW.4c4014ca.js",revision:"46cc2c00aba4e94db68ec2a69ceeec86"},{url:"assets/vendor.56b8358c.js",revision:"4ca6802848b3a395b17a13d5d7d71090"},{url:"index.html",revision:"299f87ff501cb7f34369e5c34212896f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
