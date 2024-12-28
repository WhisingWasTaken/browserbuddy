(()=>{"use strict";var e={963:(e,t,n)=>{function r(e,t,n,r,o,i,l){try{var s=e[i](l),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function o(e,t){return i.apply(this,arguments)}function i(){return(e=function*(e,t){return yield browser.runtime.sendMessage(e,t)},i=function(){var t=this,n=arguments;return new Promise((function(o,i){var l=e.apply(t,n);function s(e){r(l,o,i,s,c,"next",e)}function c(e){r(l,o,i,s,c,"throw",e)}s(void 0)}))}).apply(this,arguments);var e}n.d(t,{H$:()=>o})},854:(e,t,n)=>{function r(e,t,n,r,o,i,l){try{var s=e[i](l),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var l=e.apply(t,n);function s(e){r(l,o,i,s,c,"next",e)}function c(e){r(l,o,i,s,c,"throw",e)}s(void 0)}))}}n.d(t,{Bi:()=>d,Q$:()=>a,bO:()=>l,lb:()=>s,z8:()=>i});const i="favouriteItems",l="numDoubloons",s="cachedShips";function c(){return(c=o((function*(e,t){return(yield t.get(e))[e]}))).apply(this,arguments)}function a(e){return u.apply(this,arguments)}function u(){return(u=o((function*(e){return yield function(e,t){return c.apply(this,arguments)}(e,browser.storage.local)}))).apply(this,arguments)}function d(){return h.apply(this,arguments)}function h(){return(h=o((function*(){const e=yield a("shopItems");if(e)return new Map(e.map((e=>[e.id,e])))}))).apply(this,arguments)}},975:(e,t,n)=>{function r(e,t){return Math.trunc(e*t)/t}function o(e){return e.reduce(((e,t)=>e+t.totalDoubloons),0)}function i(e){return e.reduce(((e,t)=>e+t.paidHours),0)}function l(e){return o(e)/i(e)}function s(e){return o(e)/e.filter((e=>e.totalDoubloons>0)).length}function c(e){return i(e)/e.filter((e=>e.paidHours>0)).length}function a(e){for(const t of e.updates)if("shipped"===t.shipStatus)return!0;return!1}function u(e){const t=document.createElement("template");t.innerHTML=e;const n=t.content.childNodes.length;if(1!==n)throw new Error(`html parameter must represent a single node; got ${n}. Note that leading or trailing spaces around an element in your HTML, like " <img/> ", get parsed as text nodes neighbouring the element; call .trim() on your input to avoid this.`);return t.content.firstChild}n.d(t,{C1:()=>i,Cv:()=>a,cU:()=>r,df:()=>l,i6:()=>c,kw:()=>o,le:()=>u,s3:()=>s})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r=n(963),o=n(854),i=n(975);function l(e,t,n,r,o,i,l){try{var s=e[i](l),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(e){l(i,r,o,s,c,"next",e)}function c(e){l(i,r,o,s,c,"throw",e)}s(void 0)}))}}function c(){const e=[];for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);n&&"setItem"!==n&&e.push([n,localStorage[n]])}return e}function a(){return(a=s((function*(){const e=yield(0,r.H$)({id:"visitedSite",localStorage:c()});"setFavourites"===e.id&&localStorage.setItem(o.z8,JSON.stringify(e.value))}))).apply(this,arguments)}let u=null;function d(){return h.apply(this,arguments)}function h(){return(h=s((function*(){const e=window.location.pathname;switch(u&&(clearInterval(u),u=0),e){case"/shop":{const[e=0,t,n]=yield Promise.all([(0,o.Q$)(o.bO),(0,o.Bi)(),(0,o.Q$)(o.lb)]);if(!n)return void function(){if(document.getElementById($))return!0;const e=document.querySelector('[role="tablist"]');if(!e)return!1;const t=(0,i.le)(`<div id="${$}" class="${S}">\n      <img src="${browser.runtime.getURL("/icons/icon.svg")}" class="w-6 h-6 rounded-sm" />\n      <h2 class="w-full text-xl font-semibold">Can't calculate doubloons per hour, please visit the shipyard</h2>\n    </div>`);e.nextSibling.insertBefore(t,e.nextSibling.firstChild)}();!function(e,t,n){var r;const o=null===(r=document.getElementById("region-select"))||void 0===r?void 0:r.children[1];if(!o)return!1;o.addEventListener("change",d);const l="1"===o.value,s=document.getElementById("harbor-tab-scroll-element").querySelectorAll("[id^='item_']"),c=(0,i.df)(n);if(!isFinite(c)||0===c)return!0;for(const n of s){const r=t.get(n.id);if(!r)continue;const o=l?r.priceUs:r.priceGlobal;if(o>e){const t=(o-e)/c,r=t<1?(0,i.cU)(t,10):Math.trunc(t);n.children[2].children[0].innerText=`${r} hours to go`}const s=(0,i.cU)(o/c,10);n.children[0].children[3].children[1].innerText=`(${s} hours worth)`}}(e,null!=t?t:new Map,n);break}case"/shipyard":{var t;u=null;const e=null!==(t=yield(0,o.Q$)(o.lb))&&void 0!==t?t:[];if(0==e.filter((e=>(0,i.Cv)(e))).length)return;w(e),null===u&&(u=setInterval((()=>w(e)),10));break}}}))).apply(this,arguments)}const p="DJLASER-doubloonsPerHour-shipped-ship-";function f(e,t,n){const r=p+t;if(document.getElementById(r))return;const o=document.createElement("span");o.innerText=`(${n} per hour)`,o.id=r,e.parentElement.appendChild(o)}const m="DJLASER-estimatedDoubloons-shipped-ship-";function g(e,t){return`<span id="" class="inline-flex items-center gap-1 rounded-full px-2 border text-sm leading-none text-gray-600 bg-gray-50 border-gray-500/10 false " data-sentry-component="Pill" data-sentry-source-file="pill.tsx" style="vertical-align: middle;">${t}<span class="inline-block py-1">${e}</span></span>`}function v(e){return g(e,'<img alt="doubloons" loading="lazy" width="16" height="20" decoding="async" data-nimg="1" src="/_next/static/media/doubloon.fd63888b.svg" style="color: transparent;">')}function y(e){return g(e,'<svg fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" xmlns="http://www.w3.org/2000/svg" aria-label="clock" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" fill="currentColor" width="20" height="20" style="display: inline-block; vertical-align: middle;"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z"></path><path d="M15.64 17a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1z"></path><path d="M21.702 19.502a1 1 0 0 1-1.366.366l-5.196-3a1 1 0 0 1 1-1.732l5.196 3a1 1 0 0 1 .366 1.366z"></path></g></svg>')}const b="DJLASER-shipyard-stats",x="rounded-lg bg-card text-card-foreground shadow-sm bg-blend-color-burn flex flex-col gap-2 items-start items-start p-4";function w(e){if(document.getElementById(p+"0")||document.getElementById(m+"0"))return!0;const t=function(e){var t;if(document.getElementById(b))return!0;const n=null===(t=document.getElementById("harbor-tab-scroll-element"))||void 0===t?void 0:t.children[1].children[0].children[1].children[4].children[0];if(!n)return!1;const r=(0,i.s3)(e),o=(0,i.i6)(e),l=(0,i.df)(e),s=(0,i.kw)(e),c=(0,i.C1)(e),a=e.length>0,u=(0,i.le)(`<div id="${b}" class="${x}">\n      <div class="flex flex-wrap items-center gap-3 text-sm">\n      <h2 class="text-xl font-semibold text-center">All Time:</h2>\n        ${v(`${s} doubloons earned`)}\n        ${y(`${(0,i.cU)(c,10)} hours shipped`)}\n      </div>\n      ${a?`\n      <div class="flex flex-wrap items-center gap-3 text-sm">\n        <h2 class="text-xl font-semibold text-center">Average:</h2>\n        ${v(`${(0,i.cU)(l,10)} per hour`)}\n        ${v(`${(0,i.cU)(r,10)} per project`)}\n        ${y(`${(0,i.cU)(o,10)} hours per project`)}\n      </div>`:""}\n    </div>`);return n.insertBefore(u,n.children[1]),!0}(e);if(!t)return!1;const n=document.querySelectorAll("[id^='shipped-ship-']");for(const[t,r]of n.entries()){const n=r.querySelector("div > img").src,o=r.querySelectorAll("h2")[1].innerText,l=e.filter((e=>e.title===o&&e.screenshotUrl===n));if(0===l.length){console.error(`No ships found with title: ${o} and screenshot: ${n}`);continue}if(l.length>1){console.error(`Found ${l.length} ships: ${o} and screenshot: ${n}`);continue}const s=l[0],c=r.querySelector("img[alt=doubloons] + span");c&&s.doubloonsPerHour&&f(c,t,(0,i.cU)(s.doubloonsPerHour,10))}return!0}const $="DJLASER-shipsNotFoundWarning",S="mx-auto px-3 py-2 w-fit rounded-lg bg-card text-card-foreground shadow-sm bg-blend-color-burn flex flex-nowrap items-center gap-3";!function(){a.apply(this,arguments)}(),function(e){window.addEventListener("load",(function(){e()}));let t="";new MutationObserver((function(){location.href!==t&&(t=location.href,e())})).observe(document,{subtree:!0,childList:!0}),window.addEventListener("message",(e=>{if(!["https://highseas.hackclub.com","https://high-seas.hackclub.dev"].includes(e.origin))return;const t=e.data;t&&"storageUpdated"===t.id&&"string"==typeof t.key&&"string"==typeof t.value&&(0,r.H$)(t)}));const n=document.createElement("script");n.src=chrome.runtime.getURL("scripts/storageListener.js"),n.dataset.id=chrome.runtime.id,n.onload=function(){this.remove()},(document.head||document.documentElement).appendChild(n),browser.runtime.onMessage.addListener((e=>{switch(e.id){case"injectUpdatedData":d();break;case"null":break;default:console.error("Unknown internal message: ",e)}}))}(d)})();