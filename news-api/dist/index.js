(()=>{"use strict";var n={669:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,".news {\r\n    width: 95%;\r\n}\r\n\r\n.news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n",""]);const i=o},501:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,".sources {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    width: 100%;\r\n    height: 120px;\r\n    overflow: auto;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.source__item {\r\n    background: none;\r\n    border: 2px solid #30c5ff;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: #70d6ff;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #3f6ecc;\r\n    color: #293751;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #3fabcc;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n\r\n@media (max-width: 640px) {\r\n    .source__item {\r\n        margin: 0.3em;\r\n        padding: 0.5em 1em;\r\n    }\r\n}\r\n",""]);const i=o},767:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,"html {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: linear-gradient(45deg, #989b96, #4d7e95);\r\n    background-repeat: no-repeat;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    width: 99%;\r\n    height: 100vh;\r\n    color: #fff;\r\n\r\n    font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n    padding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 40px;\r\n    font-weight: 800;\r\n}\r\n\r\nfooter {\r\n    width: 100%;\r\n    height: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nfooter .copyright {\r\n    font-size: 14px;\r\n    color: #333;\r\n    text-align: center;\r\n}\r\nfooter .copyright a {\r\n    color: #444;\r\n}\r\nfooter .copyright a:hover {\r\n    color: #555;\r\n}\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n\r\n.footer__list {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.footer__img-github {\r\n    width: 40px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n}\r\n\r\n.footer__item {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: black;\r\n}\r\n\r\n.footer__img-rs {\r\n    width: 100px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n}\r\n",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},379:(n,e,r)=>{var t,o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function s(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function a(n,e){for(var r={},t=[],o=0;o<n.length;o++){var a=n[o],c=e.base?a[0]+e.base:a[0],d=r[c]||0,l="".concat(c," ").concat(d);r[c]=d+1;var u=s(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:h(p,e),references:1}),t.push(l)}return t}function c(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var s=o(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function p(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,m=0;function h(n,e){var r,t,o;if(e.singleton){var i=m++;r=f||(f=c(e)),t=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=c(e),t=p.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=s(r[t]);i[o].references--}for(var c=a(n,e),d=0;d<r.length;d++){var l=s(r[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=c}}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{class n extends class extends class{constructor(n,e){this.baseLink=n,this.options=e}getResp(n,e=(()=>{console.error("No callback for GET response")})){this.load("GET",n,e)}errorHandler(n){if(!n.ok)throw 401!==n.status&&404!==n.status||console.log(`Sorry, but there is ${n.status} error: ${n.statusText}`),Error(n.statusText);return n}makeUrl(n){const e=Object.assign(Object.assign({},this.options),n.options);let r=`${this.baseLink}${n.endpoint}?`;return Object.keys(e).forEach((n=>{r+=`${n}=${e[n]}&`})),r.slice(0,-1)}load(n,e,r){fetch(this.makeUrl(e),{method:n}).then(this.errorHandler).then((n=>n.json())).then((n=>{r(n)})).catch((n=>console.error(n)))}}{constructor(){super("https://newsapi.org/v2/",{apiKey:"bd3921ba43574f31af73d14b3ec0129b"})}}{constructor(){super(...arguments),this.endpoint={endpoint:"sources"}}getSources(n){super.getResp(this.endpoint,n)}getNews(n,e){let r=n.target;const t=n.currentTarget;for(;r&&r!==t;){if(r.classList.contains("source__item")){const n=r.getAttribute("data-source-id");return void(t.getAttribute("data-source")!==n&&(t.setAttribute("data-source",n),super.getResp({endpoint:"everything",options:{sources:n}},e)))}r=r.parentNode}}}var e=r(379),t=r.n(e),o=r(669);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;class i{draw(n){const e=n.length>=10?n.filter(((n,e)=>e<10)):n,r=document.querySelector(".news"),t=document.createDocumentFragment(),o=document.querySelector("#newsItemTemp");e.forEach(((n,e)=>{const r=o.content.cloneNode(!0),i=r.querySelector(".news__item"),s=r.querySelector(".news__meta-photo"),a=r.querySelector(".news__meta-author"),c=r.querySelector(".news__meta-date"),d=r.querySelector(".news__description-title"),l=r.querySelector(".news__description-source"),u=r.querySelector(".news__description-content"),p=r.querySelector(".news__read-more a");e%2&&i.classList.add("alt"),s.style.backgroundImage=`url(${n.urlToImage||"img/news_placeholder.jpg"})`,a.textContent=n.author||n.source.name,c.textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"),d.textContent=n.title,l.textContent=n.source.name,u.textContent=n.description,p.setAttribute("href",n.url),t.append(r)})),r.innerHTML="",r.appendChild(t)}}var s=r(501);t()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;class a{constructor(){this.sources=document.querySelector(".sources")}draw(n){const e=document.createDocumentFragment(),r=document.getElementById("sourceItemTemp");n.forEach((n=>{const t=r.content.cloneNode(!0),o=t.querySelector(".source__item-name"),i=t.querySelector(".source__item");o.textContent=n.name,i.setAttribute("data-source-id",n.id),e.append(t)})),this.sources&&this.sources.append(e)}}class c{constructor(){this.news=new i,this.sources=new a}drawNews(n){const e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)}drawSources(n){const e=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sources.draw(e)}}var d=r(767);t()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,(new class{constructor(){this.sources=document.querySelector(".sources"),this.controller=new n,this.view=new c}start(){this.sources&&this.sources.addEventListener("click",(n=>this.controller.getNews(n,(n=>{void 0!==n&&this.view.drawNews(n)})))),this.controller.getSources((n=>{void 0!==n&&this.view.drawSources(n)}))}}).start()})()})();