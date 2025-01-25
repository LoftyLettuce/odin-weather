(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>p});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),l=t.n(c),s=new URL(t(968),t.b),d=a()(o()),u=l()(s);d.push([e.id,`/* reset */\n* {\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  border-radius: 5px;\n  font-family:\n    "Offside",\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    "Open Sans",\n    "Helvetica Neue",\n    sans-serif;\n}\n\n/*style */\n:root.dark {\n  ---signify: #0d9488;\n  ---font-color: #cbd5e1;\n  ---border-color: #f9fafb;\n  ---background-color: #082f49;\n  ---secondary-color: #0f172a;\n}\n:root {\n  ---signify: #fbbf24;\n  ---font-color: #44403c;\n  ---border-color: #0a0a0a;\n  ---background-color: #7dd3fc;\n  ---secondary-color: #f0f9ff;\n}\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: var(---background-color);\n  color: var(---font-color);\n}\n.toggle-theme {\n  ---border-radius: 10%;\n  ---top: 2%;\n  ---left: 2%;\n  position: absolute;\n  top: var(---top);\n  left: var(---left);\n  width: 60px;\n  height: 30px;\n  border-radius: var(---border-radius);\n  border: 1px solid var(---border-color);\n}\n.toggle-wrapper {\n  position: relative;\n}\n.toggle-theme input {\n  display: block;\n  width: 100%;\n  position: absolute;\n  border-radius: var(---border-radius);\n  opacity: 0;\n}\n.toggle-theme span {\n  ---visibility: hidden;\n  width: 50%;\n  border-right: 1px solid var(---border-color);\n}\n.toggle-theme span::after {\n  content: url(${u});\n  width: 100%;\n  left: 100%;\n  height: inherit;\n  visibility: var(---visibility);\n}\n.toggle-theme span,\n.toggle-theme span::after {\n  position: absolute;\n  top: 0;\n  display: block;\n  background-color: var(---signify);\n  border-radius: var(---border-radius);\n}\n.toggle-theme * {\n  height: 100%;\n}\n.toggle-theme input:checked + span {\n  visibility: hidden;\n  ---visibility: visible;\n}\n.toggle-theme input + span {\n  visibility: visible;\n  ---visibility: hidden;\n}\n.search-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.search-wrapper button,\n.search-wrapper input {\n  border: 1px solid var(---border-color);\n}\n.search-wrapper button {\n  padding: 5px;\n  height: 5vh;\n  max-height: 50px;\n  min-height: fit-content;\n  background-color: var(---signify);\n}\n.search-wrapper input {\n  background-color: var(---secondary-color);\n  padding: 1% 2%;\n  text-align: center;\n}\n.day-wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n.day-wrapper button {\n  background-color: var(---secondary-color);\n  border: 1px var(---border-color) solid;\n  padding: 5px;\n}\n.day-wrapper .focus {\n  background-color: var(---signify);\n}\n#small {\n  width: 80%;\n  height: 50vh;\n  overflow: hidden;\n  background-color: transparent;\n  position: relative;\n  border: 1px solid var(---border-color);\n}\n#big {\n  display: flex;\n  position: absolute;\n  width: 100%;\n}\n#big > div {\n  flex: 0 0 100%;\n  height: 50vh;\n  background-color: var(---secondary-color);\n  padding: 2%;\n  box-sizing: border-box;\n}\n.board {\n  display: grid;\n  grid-template-areas:\n    "place1 place2 place3 place4 place5"\n    "place6 place7 place8 place9 place10";\n  align-items: start;\n  overflow: hidden;\n}\n.button-wraper {\n  width: 80vw;\n  display: flex;\n  gap: 10vw;\n  justify-content: center;\n}\n.button-wraper button {\n  padding: 1%;\n  background-color: var(---signify);\n  border: 1px solid var(---border-color);\n}\nsvg {\n  height: 100%;\n}\npath {\n  fill: var(---border-color);\n}\n`,""]);const p=d},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=i[s]||0,u="".concat(s," ").concat(d);i[s]=d+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var l=r(e,o),s=0;s<i.length;s++){var d=t(i[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=l}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},968:(e,n,t)=>{e.exports=t.p+"ad5a1c462bb9ee9bbf2f.svg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),c=t(659),l=t.n(c),s=t(56),d=t.n(s),u=t(540),p=t.n(u),f=t(113),h=t.n(f),g=t(365),v={};function y(e){return Number(e.slice(0,e.indexOf("p")))}v.styleTagTransform=h(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(g.A,v),g.A&&g.A.locals&&g.A.locals,window.onload=()=>{!function(){const e=window.getComputedStyle(document.querySelector(".big div")),n=window.getComputedStyle(document.querySelector(".big")),t=document.querySelector(".big").children.length-1;document.querySelector(".small").style.width=e.width,document.querySelector(".right").addEventListener("click",(function(){y(n.left)==-t*y(e.width)?document.querySelector(".big").style.left="0px":document.querySelector(".big").style.left=y(n.left)-y(e.width)+"px"})),document.querySelector(".left").addEventListener("click",(function(){0==y(n.left)?document.querySelector(".big").style.left=-t*y(e.width)+"px":document.querySelector(".big").style.left=y(n.left)+y(e.width)+"px"}))}();const e=document.getElementById("search");let n=!1;e.addEventListener("click",(()=>{const e=document.getElementById("city").value;console.log("waiting..."),async function(e){const n=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?unitGroup=metric&key=CGRJF9AWVHYYTBGAV53C7SUQR&contentType=json`;try{const e=await fetch(n,{mode:"cors"});if(200==e.status)return await e.json();alert("Something went so wrong:<")}catch(e){alert(e)}}(e).then((e=>{n=e,document.querySelector(".day-wrapper").children[0].click()})).catch(alert)}));let t=!1;Array.from(document.querySelector(".day-wrapper").children).forEach(((e,r)=>{e.addEventListener("click",(()=>{var o,i;n&&(t&&t.classList.remove("focus"),t=e,t.classList.add("focus"),o=r,i=n,Array.from(document.getElementById("big").children).forEach((e=>{const n=e.querySelector("div");n.textContent.includes(":")&&(n.textContent=n.textContent.slice(0,n.textContent.indexOf(":"))),n.textContent=`${n.textContent}: ${i.days[o][e.classList[0]]}`,["temp","feelslike"].includes(e.classList[0])&&(n.textContent+="°C")})),console.log("done"))}))})),document.querySelector(".toggle-theme input").addEventListener("click",(()=>{let e=document.querySelector(".toggle-theme input:checked");document.documentElement.className=e?"dark":"light"})),function(){let e=[];for(let n=1;n<11;n++)e.push("place"+n);Array.from(document.querySelectorAll(".board")).forEach((n=>{let t=[...e];for(let e=0;e<4;e++)n.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.88 6.85 7.75 5.43 9.63 4 12 4 14.93 4 16.96 6.04 19 8.07 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20M6.5 18H18.5Q19.55 18 20.27 17.27 21 16.55 21 15.5 21 14.45 20.27 13.73 19.55 13 18.5 13H17V11Q17 8.93 15.54 7.46 14.08 6 12 6 9.93 6 8.46 7.46 7 8.93 7 11H6.5Q5.05 11 4.03 12.03 3 13.05 3 14.5 3 15.95 4.03 17 5.05 18 6.5 18M12 12Z" /></svg>';Array.from(n.children).forEach((e=>{const n=Math.round(Math.random()*(t.length-1));e.style.gridArea=t[n],t.splice(n,1)}))}))}()}})();