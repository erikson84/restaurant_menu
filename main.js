(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),u=new URL(t(606),t.b),l=new URL(t(489),t.b),d=i()(a()),p=s()(u),m=s()(l);d.push([e.id,"@font-face {\n    font-family: 'Manuscript Regular';\n    font-style: normal;\n    font-weight: normal;\n    src: local('Manuscript Regular'), url("+p+") format('woff');\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    min-height: 100%;\n\n}\n\nbody {\n    width: 100%;\n    max-width: 100%;\n    margin: 0;\n    padding: 0;\n    font-family: 'Courier New', Courier, monospace;\n    background-image: url("+m+");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\ndiv#content {\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 40vh;\n    background-color: rgba(0, 0, 0, 0.5);\n\n}\n\nh1 {\n    flex: 1 1 auto;\n    font-family: \"Manuscript Regular\";\n    font-size: 120px;\n    margin: 20px;\n    color:azure;\n    text-shadow: 2px 2px 4px black;\n    font-weight: lighter;\n}\n\nh4 {\n    flex: 1 1 auto;\n    text-shadow: 2px 2px 4px black;\n    font-size: 15px;\n    color: azure;\n    display: flex;\n    align-items: center;\n\n}\n\nnav {\n    flex: 1 1 auto;\n    display: flex;\n    justify-content: space-around;\n    gap: 50px;\n}\n\nbutton.menuButton {\n    flex: 1 1 auto;\n    font-family: 'Courier New', Courier, monospace;\n    text-shadow: 2px 2px 4px black;\n    font-size: 30px;\n    background-color: transparent;\n    color: azure;\n    border: none;\n    padding: 10px 20px;   \n}\n\nbutton.menuButton:hover {\n    border-bottom: 5px azure solid;\n    padding-bottom: 5px;\n}\n\nbutton.activeTab {\n    border-bottom: 5px azure solid;\n    padding-bottom: 5px;\n    background-color: rgba(255, 255, 255, 0.5);\n    border-radius: 20px 20px 0px 0px;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n    align-items: stretch;\n}\n\nmain > p {\n    flex: 1 1 auto;\n    font-family: 'Courier New', Courier, monospace;\n    text-shadow: 2px 2px 4px black;\n    font-size: 15px;\n    color: azure;\n    margin: 30px 20vw;\n    line-height: 20px;\n}\n\nform {\n    display: grid;\n    align-items: stretch;\n    margin: 40px 30vw;\n    justify-content: center;\n}\n\ndiv.input {\n    display: flex;\n    flex-direction: column;\n}\n\nlabel {\n    flex: 1 1 auto;\n    font-family: 'Courier New', Courier, monospace;\n    text-shadow: 2px 2px 4px black;\n    font-size: 15px;\n    color: azure;\n    margin: 20px 0;\n}\n\nbutton.order {\n    background-color: rgba(255, 255, 255, 0.5);\n    border-radius: 10px;\n    height: 50px;\n    width: 20vw;\n    margin: 50px;\n    text-shadow: 2px 2px 4px black;\n    font-size: 15px;\n    color: azure;\n}\n\nfooter {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.5);\n    color: azure;\n}\n\nfooter > p {\n    margin: 5px;\n    padding: 0;\n}\n\ndiv.menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n    margin: 50px;\n}\n\ndiv.card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(255, 255, 255, 0.5);\n    border-radius: 20px;\n    width: 20vw;\n    aspect-ratio: 1/1;\n    transition: 0.2s all;\n}\n\ndiv.card:hover {\n    transform: scale(1.1);\n}\n\nimg.cardImg {\n    max-width: 100%;\n    border-radius: 20px;\n\n}",""]);const f=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=o[u]||0,d="".concat(u," ").concat(l);o[u]=l+1;var p=t(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),u=0;u<o.length;u++){var l=t(o[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},606:(e,n,t)=>{e.exports=t.p+"8bfbc14b3642d8172ca0.woff"},489:(e,n,t)=>{e.exports=t.p+"6ea6fc603169954c6980.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function e(e){const n=document.createElement("h1");n.textContent="About Us",e.appendChild(n);const t=document.createElement("p");t.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a erat sollicitudin, maximus mauris nec,     egestas risus. Quisque bibendum mattis ante ut tristique. Nulla tempor ante et tempor aliquam. Suspendisse faucibus ut ligula non tempus.     Nullam lobortis est sit amet turpis efficitur, at rutrum sem blandit. Nunc sed semper augue, eu accumsan tortor.";const r=document.createElement("p");r.textContent="Aenean auctor et turpis non aliquam. Donec non ipsum vel magna tristique pharetra nec vitae urna. Curabitur eget ipsum pharetra,     pharetra justo vitae, euismod sem. Nunc vestibulum consequat nisl at consequat. Aliquam ut eleifend sem. Morbi interdum pellentesque tempus.     In congue finibus erat vel congue. Mauris mattis bibendum tellus, nec ultrices ex congue id.";const a=document.createElement("p");a.textContent="Vestibulum odio urna, vehicula non nulla sit amet, bibendum iaculis est. Nullam convallis, ligula at accumsan posuere,     felis nulla tempus ex, id pharetra ex erat ac ipsum. Praesent tincidunt pellentesque arcu dapibus lacinia. Nullam eget nibh in ante scelerisque hendrerit.     Etiam auctor nunc sit amet mauris volutpat elementum. Nulla volutpat hendrerit rhoncus. Sed eu massa molestie, tempus lacus a, commodo nunc.",e.appendChild(t),e.appendChild(r),e.appendChild(a)}function n(e,n,t){const r=document.createElement("div");r.classList.add("input");const a=document.createElement("input");a.setAttribute("type",e),a.id=n;const o=document.createElement("label");return o.textContent=t,o.setAttribute("for",n),r.appendChild(o),r.appendChild(a),r}var r=t(379),a=t.n(r),o=t(795),i=t.n(o),c=t(569),s=t.n(c),u=t(565),l=t.n(u),d=t(216),p=t.n(d),m=t(589),f=t.n(m),h=t(426),x={};x.styleTagTransform=f(),x.setAttributes=l(),x.insert=s().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=p(),a()(h.Z,x),h.Z&&h.Z.locals&&h.Z.locals;const g=t.p+"2e48c6ec66e2fe6cdc3e.jpg",b=t.p+"719e0ad1c6704de640ff.jpg",v=t.p+"b7368d210235eaa8a33d.jpg";!function(e){const n=document.createElement("header");e.appendChild(n);const t=document.createElement("h1");t.textContent="Achilles Last Supper",n.appendChild(t);const r=document.createElement("nav");n.appendChild(r);for(let e of["About Us","Menu","Order"]){const n=document.createElement("button");n.classList.add("menuButton"),n.id=e.split(" ")[0].toLowerCase(),n.textContent=e,r.appendChild(n)}const a=document.createElement("main");e.appendChild(a);const o=document.createElement("footer");e.appendChild(o);const i=document.createElement("p");i.textContent="Achilles Last Supper",o.appendChild(i);const c=document.createElement("p");c.textContent="☎ +55 (48) 99901-0666",o.appendChild(c);const s=document.createElement("p");s.textContent="✉ achilles@lastsupper.com",o.appendChild(s)}(document.querySelector("#content"));const C=document.querySelector("main");e(C);const y=document.getElementById("about"),w=document.getElementById("menu"),E=document.getElementById("order");function L(t){const r=document.querySelector("button.activeTab"),a=t.target;if(r.id!=a.id)switch(r.classList.toggle("activeTab"),a.classList.add("activeTab"),C.textContent="",a.id){case"about":e(C);break;case"menu":!function(e,n){const t=document.createElement("h1");t.textContent="Menu",e.appendChild(t);const r=document.createElement("div");r.classList.add("menu"),e.appendChild(r);const a=n.map((e=>function(e,n){const t=document.createElement("div");t.classList.add("card");const r=document.createElement("img");r.classList.add("cardImg"),r.src=n,t.appendChild(r);const a=document.createElement("h4");return a.classList.add("cardTxt"),a.textContent=e,t.appendChild(a),t}(e[0],e[1])));for(let e of a)r.appendChild(e)}(C,[["Rice and Beans",b],["Fish'n'Chips",v],["Burger and Fries",g]]);break;case"order":!function(e){const t=document.createElement("h1");t.textContent="Order",e.appendChild(t);const r=document.createElement("form");e.appendChild(r);const a=n("text","formName","Name");r.appendChild(a);const o=n("text","formAddrs","Address");r.appendChild(o);const i=n("text","formOpt","Choice");r.appendChild(i);const c=document.createElement("button");c.classList.add("order"),c.textContent="Order!",r.appendChild(c)}(C)}}y.addEventListener("click",L),w.addEventListener("click",L),E.addEventListener("click",L),y.classList.add("activeTab")})()})();