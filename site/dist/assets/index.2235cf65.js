var Be=Object.defineProperty;var Xe=(i,t,e)=>t in i?Be(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var N=(i,t,e)=>(Xe(i,typeof t!="symbol"?t+"":t,e),e);const Ye=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}};Ye();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vt=Symbol(),Qt=new WeakMap;class pe{constructor(t,e,o){if(this._$cssResult$=!0,o!==Vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Dt&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Qt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Qt.set(e,t))}return t}toString(){return this.cssText}}const Ke=i=>new pe(typeof i=="string"?i:i+"",void 0,Vt),x=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,n,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new pe(e,i,Vt)},Ge=(i,t)=>{Dt?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),n=window.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=e.cssText,i.appendChild(o)})},te=Dt?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Ke(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var At;const ee=window.trustedTypes,Ze=ee?ee.emptyScript:"",oe=window.reactiveElementPolyfillSupport,Lt={toAttribute(i,t){switch(t){case Boolean:i=i?Ze:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},fe=(i,t)=>t!==i&&(t==t||i==i),St={attribute:!0,type:String,converter:Lt,reflect:!1,hasChanged:fe};class H extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const n=this._$Ep(o,e);n!==void 0&&(this._$Ev.set(n,o),t.push(n))}),t}static createProperty(t,e=St){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||St}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of o)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)e.unshift(te(n))}else t!==void 0&&e.push(te(t));return e}static _$Ep(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ge(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=St){var n,r;const s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){const a=((r=(n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&r!==void 0?r:Lt.toAttribute)(e,o.type);this._$El=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(t,e){var o,n;const r=this.constructor,s=r._$Ev.get(t);if(s!==void 0&&this._$El!==s){const a=r.getPropertyOptions(s),l=a.converter,d=(n=(o=l==null?void 0:l.fromAttribute)!==null&&o!==void 0?o:typeof l=="function"?l:null)!==null&&n!==void 0?n:Lt.fromAttribute;this._$El=s,this[s]=d(e,a.type),this._$El=null}}requestUpdate(t,e,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||fe)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(o)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}H.finalized=!0,H.elementProperties=new Map,H.elementStyles=[],H.shadowRootOptions={mode:"open"},oe==null||oe({ReactiveElement:H}),((At=globalThis.reactiveElementVersions)!==null&&At!==void 0?At:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Tt;const X=globalThis.trustedTypes,ie=X?X.createPolicy("lit-html",{createHTML:i=>i}):void 0,U=`lit$${(Math.random()+"").slice(9)}$`,ge="?"+U,Je=`<${ge}>`,Y=document,ot=(i="")=>Y.createComment(i),it=i=>i===null||typeof i!="object"&&typeof i!="function",ve=Array.isArray,Qe=i=>{var t;return ve(i)||typeof((t=i)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,ne=/>/g,W=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,se=/'/g,ae=/"/g,me=/^(?:script|style|textarea|title)$/i,be=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),f=be(1),to=be(2),I=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),le=new WeakMap,Wt=(i,t,e)=>{var o,n;const r=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let s=r._$litPart$;if(s===void 0){const a=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new nt(t.insertBefore(ot(),a),a,void 0,e!=null?e:{})}return s._$AI(i),s},B=Y.createTreeWalker(Y,129,null,!1),eo=(i,t)=>{const e=i.length-1,o=[];let n,r=t===2?"<svg>":"",s=tt;for(let l=0;l<e;l++){const d=i[l];let b,u,p=-1,y=0;for(;y<d.length&&(s.lastIndex=y,u=s.exec(d),u!==null);)y=s.lastIndex,s===tt?u[1]==="!--"?s=re:u[1]!==void 0?s=ne:u[2]!==void 0?(me.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=W):u[3]!==void 0&&(s=W):s===W?u[0]===">"?(s=n!=null?n:tt,p=-1):u[1]===void 0?p=-2:(p=s.lastIndex-u[2].length,b=u[1],s=u[3]===void 0?W:u[3]==='"'?ae:se):s===ae||s===se?s=W:s===re||s===ne?s=tt:(s=W,n=void 0);const $=s===W&&i[l+1].startsWith("/>")?" ":"";r+=s===tt?d+Je:p>=0?(o.push(b),d.slice(0,p)+"$lit$"+d.slice(p)+U+$):d+U+(p===-2?(o.push(void 0),l):$)}const a=r+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ie!==void 0?ie.createHTML(a):a,o]};class rt{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[d,b]=eo(t,e);if(this.el=rt.createElement(d,o),B.currentNode=this.el.content,e===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(n=B.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const u=[];for(const p of n.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(U)){const y=b[s++];if(u.push(p),y!==void 0){const $=n.getAttribute(y.toLowerCase()+"$lit$").split(U),T=/([.?@])?(.*)/.exec(y);l.push({type:1,index:r,name:T[2],strings:$,ctor:T[1]==="."?io:T[1]==="?"?no:T[1]==="@"?so:bt})}else l.push({type:6,index:r})}for(const p of u)n.removeAttribute(p)}if(me.test(n.tagName)){const u=n.textContent.split(U),p=u.length-1;if(p>0){n.textContent=X?X.emptyScript:"";for(let y=0;y<p;y++)n.append(u[y],ot()),B.nextNode(),l.push({type:2,index:++r});n.append(u[p],ot())}}}else if(n.nodeType===8)if(n.data===ge)l.push({type:2,index:r});else{let u=-1;for(;(u=n.data.indexOf(U,u+1))!==-1;)l.push({type:7,index:r}),u+=U.length-1}r++}}static createElement(t,e){const o=Y.createElement("template");return o.innerHTML=t,o}}function K(i,t,e=i,o){var n,r,s,a;if(t===I)return t;let l=o!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[o]:e._$Cu;const d=it(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),d===void 0?l=void 0:(l=new d(i),l._$AT(i,e,o)),o!==void 0?((s=(a=e)._$Cl)!==null&&s!==void 0?s:a._$Cl=[])[o]=l:e._$Cu=l),l!==void 0&&(t=K(i,l._$AS(i,t.values),l,o)),t}class oo{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Y).importNode(o,!0);B.currentNode=r;let s=B.nextNode(),a=0,l=0,d=n[0];for(;d!==void 0;){if(a===d.index){let b;d.type===2?b=new nt(s,s.nextSibling,this,t):d.type===1?b=new d.ctor(s,d.name,d.strings,this,t):d.type===6&&(b=new ao(s,this,t)),this.v.push(b),d=n[++l]}a!==(d==null?void 0:d.index)&&(s=B.nextNode(),a++)}return r}m(t){let e=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class nt{constructor(t,e,o,n){var r;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cg=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),it(t)?t===C||t==null||t===""?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==I&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Qe(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==C&&it(this._$AH)?this._$AA.nextSibling.data=t:this.k(Y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=rt.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(o);else{const s=new oo(r,this),a=s.p(this.options);s.m(o),this.k(a),this._$AH=s}}_$AC(t){let e=le.get(t.strings);return e===void 0&&le.set(t.strings,e=new rt(t)),e}S(t){ve(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const r of t)n===e.length?e.push(o=new nt(this.M(ot()),this.M(ot()),this,this.options)):o=e[n],o._$AI(r),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class bt{constructor(t,e,o,n,r){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,n){const r=this.strings;let s=!1;if(r===void 0)t=K(this,t,e,0),s=!it(t)||t!==this._$AH&&t!==I,s&&(this._$AH=t);else{const a=t;let l,d;for(t=r[0],l=0;l<r.length-1;l++)d=K(this,a[o+l],e,l),d===I&&(d=this._$AH[l]),s||(s=!it(d)||d!==this._$AH[l]),d===C?t=C:t!==C&&(t+=(d!=null?d:"")+r[l+1]),this._$AH[l]=d}s&&!n&&this.C(t)}C(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class io extends bt{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===C?void 0:t}}const ro=X?X.emptyScript:"";class no extends bt{constructor(){super(...arguments),this.type=4}C(t){t&&t!==C?this.element.setAttribute(this.name,ro):this.element.removeAttribute(this.name)}}class so extends bt{constructor(t,e,o,n,r){super(t,e,o,n,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=K(this,t,e,0))!==null&&o!==void 0?o:C)===I)return;const n=this._$AH,r=t===C&&n!==C||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==C&&(n===C||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class ao{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const de=window.litHtmlPolyfillSupport;de==null||de(rt,nt),((Tt=globalThis.litHtmlVersions)!==null&&Tt!==void 0?Tt:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ot,Pt;class m extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return I}}m.finalized=!0,m._$litElement$=!0,(Ot=globalThis.litElementHydrateSupport)===null||Ot===void 0||Ot.call(globalThis,{LitElement:m});const ce=globalThis.litElementPolyfillSupport;ce==null||ce({LitElement:m});((Pt=globalThis.litElementVersions)!==null&&Pt!==void 0?Pt:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=i=>t=>typeof t=="function"?((e,o)=>(window.customElements.define(e,o),o))(i,t):((e,o)=>{const{kind:n,elements:r}=o;return{kind:n,elements:r,finisher(s){window.customElements.define(e,s)}}})(i,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lo=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function g(i){return(t,e)=>e!==void 0?((o,n,r)=>{n.constructor.createProperty(r,o)})(i,t,e):lo(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qt(i){return g({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=({finisher:i,descriptor:t})=>(e,o)=>{var n;if(o===void 0){const r=(n=e.originalKey)!==null&&n!==void 0?n:e.key,s=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:{...e,key:r};return i!=null&&(s.finisher=function(a){i(a,r)}),s}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,o,t(o)),i==null||i(r,o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ye(i,t){return we({descriptor:e=>{const o={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const n=typeof e=="symbol"?Symbol():"__"+e;o.get=function(){var r,s;return this[n]===void 0&&(this[n]=(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&s!==void 0?s:null),this[n]}}return o}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rt;const co=((Rt=window.HTMLSlotElement)===null||Rt===void 0?void 0:Rt.prototype.assignedElements)!=null?(i,t)=>i.assignedElements(t):(i,t)=>i.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function ho(i){const{slot:t,selector:e}=i!=null?i:{};return we({descriptor:o=>({get(){var n;const r="slot"+(t?`[name=${t}]`:":not([name])"),s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(r),a=s!=null?co(s,i):[];return e?a.filter(l=>l.matches(e)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ke=i=>(...t)=>({_$litDirective$:i,values:t});class xe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=ke(class extends xe{constructor(i){var t;if(super(i),i.type!==_e.ATTRIBUTE||i.name!=="style"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const o=i[e];return o==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ct===void 0){this.ct=new Set;for(const o in t)this.ct.add(o);return this.render(t)}this.ct.forEach(o=>{t[o]==null&&(this.ct.delete(o),o.includes("-")?e.removeProperty(o):e[o]="")});for(const o in t){const n=t[o];n!=null&&(this.ct.add(o),o.includes("-")?e.setProperty(o,n):e[o]=n)}return I}});class uo{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class F{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:et(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new F(e));if(t.length>0)return t}return[this]}}const et=i=>"pointerId"in i,Mt=i=>"changedTouches"in i,he=()=>{};class po{constructor(t,{start:e=()=>!0,move:o=he,end:n=he,rawUpdates:r=!1,avoidPointerEvents:s=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(et(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const l=new F(a);this.currentPointers.some(d=>d.id===l.id)||!this._triggerPointerStart(l,a)||(et(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerStart(new F(l),a)},this._move=a=>{if(!Mt(a)&&(!et(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const l=this.currentPointers.slice(),d=Mt(a)?Array.from(a.changedTouches).map(u=>new F(u)):[new F(a)],b=[];for(const u of d){const p=this.currentPointers.findIndex(y=>y.id===u.id);p!==-1&&(b.push(u),this.currentPointers[p]=u)}b.length!==0&&this._moveCallback(l,b,a)},this._triggerPointerEnd=(a,l)=>{if(!Mt(l)&&l.buttons&1)return!1;const d=this.currentPointers.findIndex(u=>u.id===a.id);if(d===-1)return!1;this.currentPointers.splice(d,1),this.startPointers.splice(d,1),this._excludeFromButtonsCheck.delete(a.id);const b=!(l.type==="mouseup"||l.type==="touchend"||l.type==="pointerup");return this._endCallback(a,l,b),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new F(a),a))if(et(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerEnd(new F(l),a)},this._startCallback=e,this._moveCallback=o,this._endCallback=n,this._rawUpdates=r&&"onpointerrawupdate"in window,self.PointerEvent&&!s?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}var jt=globalThis&&globalThis.__classPrivateFieldGet||function(i,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?i!==t||!o:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(i):o?o.value:t.get(i)},Ft,Ut,It;const fo={initialPosition:{},getContainerEl:()=>null,getDraggableEl:()=>Promise.resolve(null)};class go{constructor(t,e=fo){this.cursorPositionX=0,this.cursorPositionY=0,this.draggableEl=null,this.state="idle",this.pointerTracker=null,this.containerId="",this.styles={position:"absolute",touchAction:"none",top:"0px",left:"0px"},Ft.set(this,a=>(this.cursorPositionX=Math.floor(a.pageX),this.cursorPositionY=Math.floor(a.pageY),!0)),Ut.set(this,(a,l)=>{const[d]=l,b=this.draggableEl,u=new CustomEvent("window-drag",{bubbles:!0,composed:!0,detail:{pointer:d,containerEl:this.getContainerEl(),draggableEl:b}});this.host.dispatchEvent(u),this.handleWindowMove(d)}),It.set(this,(a,l)=>{l.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this),this.getContainerEl=e.getContainerEl,e.getDraggableEl().then(a=>{if(!a){console.warn("getDraggableEl() did not return an element HTMLElement");return}this.draggableEl=a,this.init()});const{initialPosition:o,containerId:n=""}=e,{x:r=0,y:s=0}=o;this.x=r,this.y=s,this.updateElPosition(),this.containerId=n}init(){const t=jt(this,Ut,"f"),e=jt(this,Ft,"f"),o=jt(this,It,"f"),n=this.host,r=s=>this.state=s;this.pointerTracker=new po(this.draggableEl,{start(s){return e(s),r("dragging"),n.requestUpdate(),!0},move(s,a){t(s,a)},end(s,a){o(s,a),r("idle"),n.requestUpdate()}})}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}updateElPosition(){this.styles.transform=`translate(${this.x}px, ${this.y}px)`}handleWindowMove(t){const e=this.draggableEl,o=this.getContainerEl();if(!e||!o)return;const n=this.x,r=this.y,s=Math.floor(t.pageX),a=Math.floor(t.pageY);if(s!==this.cursorPositionX||a!==this.cursorPositionY){const{bottom:d,height:b}=e.getBoundingClientRect(),{right:u,width:p}=o.getBoundingClientRect(),y=s-this.cursorPositionX,$=a-this.cursorPositionY;this.x=n+y,this.y=r+$;const T=this.y<0,R=this.x<0,M=d+$>window.innerHeight,J=u+y>=window.innerWidth;this.cursorPositionX=s,this.cursorPositionY=a,T&&(this.y=0),R&&(this.x=0),M&&(this.y=window.innerHeight-b),J&&(this.x=Math.floor(window.innerWidth-p)),this.updateElPosition(),this.host.requestUpdate()}}}Ft=new WeakMap,Ut=new WeakMap,It=new WeakMap;const ut=(i,t=100)=>Math.round(i*t)/t,vo=(i,t)=>i<=t?i:t;class $e extends m{render(){return f`<div id="stack">
      <slot></slot>
    </div>`}}$e.styles=x`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",$e);class Ee extends m{render(){return f` <div id="panel">
      <slot></slot>
    </div>`}}Ee.styles=x`
    #panel {
      border: var(--panel-border);
      background-color: var(--panel-color-background);
      box-shadow: var(--panel-shadow);
    }
  `;window.customElements.define("a2k-panel",Ee);class Ce extends m{render(){return f`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}Ce.styles=x`
    #wrapper {
      background: var(--window-topbar-background);
      user-select: none;
      height: var(--window-topbar-height);
      display: flex;
      align-items: center;
    }

    h2 {
      margin: 0;
      font-size: var(--window-topbar-heading-font-size);
      color: var(--window-topbar-heading-color);
      padding: 0 var(--window-spacing-horizontal);
    }
  `;window.customElements.define("a2k-window-topbar",Ce);var Ae=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Se=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class wt extends m{constructor(){super(...arguments),this.disabled=!1,this.size="medium"}render(){return f` <button data-size="${this.size}" ?disabled=${this.disabled}>
      <slot></slot>
    </button>`}}wt.styles=x`
    :host {
      width: fit-content;
    }

    :host([disabled]) {
      pointer-events: none;
      cursor: not-allowed;
    }

    button {
      background-color: var(--button-color-background);
      color: (--button-font-color);
      font-family: var(--button-font-family);
      padding: var(--button-padding);
      font-weight: var(--button-font-weight);
      box-sizing: border-box;
      box-shadow: var(--button-shadow);
      border-width: var(--button-border-width);
      border-color: var(--button-border-color);
      border-style: var(--button-border-style);
      outline-color: var(--outline-color-focus);
      outline-offset: var(--outline-offset-focus);
      cursor: var(--cursor-pointer);
      display: inline-block;
      border: var(--button-border);
      border-left: 1px dotted var(--color-white);
      border-top: 1px dotted var(--color-white);
      box-shadow: var(--button-shadow);
    }

    button[data-size="small"] {
      padding: var(--button-padding-small);
      box-shadow: var(--button-small-shadow);
    }

    button[data-size="large"] {
      padding: var(--button-padding-large);
      font-size: var(--button-font-size-large);
    }

    button:not([disabled]):active {
      border-bottom: 2px solid transparent;
      border-right: 0;
      border-left: 1px dotted var(--color-black);
      border-top: 1px dotted var(--color-black);
      box-shadow: var(--button-shadow-active);
      transform: translate(2px, 2px);
    }

    button[data-size="small"]:not([disabled]):active {
      box-shadow: var(--button-small-shadow-active);
      transform: translate(0px, 1px);
    }
  `;Ae([g({type:Boolean}),Se("design:type",Object)],wt.prototype,"disabled",void 0);Ae([g({type:String}),Se("design:type",String)],wt.prototype,"size",void 0);window.customElements.define("a2k-button",wt);var mo=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},bo=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};const wo=new URL("/assets/a2k-icons.20ee8091.svg",self.location).href;class Nt extends m{constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),to`
      <svg height="1em" width="1em">
        <use href="${wo}#${this.icon}"></use>
      </svg>
    `}}Nt.styles=x`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;mo([g({type:String}),bo("design:type",Object)],Nt.prototype,"icon",void 0);window.customElements.define("a2k-icon",Nt);var yo=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},_o=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class Ht extends m{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return f`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}Ht.styles=x`
    :host {
      position: absolute;
      right: 2px;
    }

    #icon-wrapper {
      font-size: 8px;
    }
  `;yo([g({type:Boolean}),_o("design:type",Object)],Ht.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",Ht);var Bt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Xt=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class at extends m{constructor(){super(),this.heading="",this.draggable=!1,this.closeable=!1,this.drag=new go(this,{initialPosition:{x:32,y:32},getContainerEl:()=>this.shadowRoot.querySelector("#window"),getDraggableEl:()=>this.getDraggableEl()}),this.addEventListener("close",()=>this.remove())}async getDraggableEl(){return await this.updateComplete,this.shadowRoot.querySelector("#draggable")}firstUpdated(){const{left:t}=this.drag.styles,{offsetWidth:e}=this.renderRoot.querySelector("#window"),o=vo(screen.availWidth,innerWidth);Number(t==null?void 0:t.replace("px",""))+e>o&&(this.drag.styles={...this.drag.styles,left:"0px"},this.requestUpdate())}render(){return f`
      <div id="window" style=${pt(this.drag.styles)}>
        <a2k-panel>
          <div id="topbar-wrapper">
            <div id="draggable" data-dragging=${this.drag.state}>
              <a2k-window-topbar>${this.heading}</a2k-window-topbar>
            </div>
            <a2k-window-actions
              ?closeable="${this.closeable}"
            ></a2k-window-actions>
          </div>
          <slot name="toolbar"></slot>
          <a2k-stack>
            <slot></slot>
          </a2k-stack>
          <slot name="statusbar"></slot>
        </a2k-panel>
      </div>
    `}}at.styles=x`
    :host([hidden]) {
      display: none;
    }

    ::slotted(*) {
      padding: 0 var(--window-spacing-horizontal);
    }

    ::slotted([slot="toolbar"]) {
      padding: 0;
    }

    ::slotted([slot="statusbar"]) {
      padding: 0;
    }

    #window {
      font-family: var(--font-primary);
      letter-spacing: var(--font-primary-letter-spacing);
      position: absolute;
      width: var(--window-width);
      max-width: 100%;
    }

    #draggable {
      width: 100%;
      position: relative;
    }

    #draggable[data-dragging="idle"] {
      cursor: var(--cursor-grab);
    }

    #draggable[data-dragging="dragging"] {
      cursor: var(--cursor-grabbing);
    }

    #topbar-wrapper {
      display: flex;
      justify-content: space-between;
    }
  `;Bt([g({type:String}),Xt("design:type",Object)],at.prototype,"heading",void 0);Bt([g({type:Boolean}),Xt("design:type",Object)],at.prototype,"draggable",void 0);Bt([g({type:Boolean}),Xt("design:type",Object)],at.prototype,"closeable",void 0);window.customElements.define("a2k-window",at);class Te extends m{render(){return f`<div id="toolbar">
        <slot></slot>
      </div>
      <div id="separator"></div>`}}Te.styles=x`
    #toolbar {
      border-color: var(--color-gray-300) var(--color-gray-700)
        var(--color-gray-700) var(--color-gray-300);
      border-width: 2px;
      border-style: solid;
    }

    #separator {
      border-bottom: 5px solid var(--color-gray-400);
    }
  `;window.customElements.define("a2k-window-toolbar",Te);class Oe extends m{render(){return f`<div id="item">
      <slot></slot>
    </div>`}}Oe.styles=x`
    #item {
      border-color: var(--color-gray-700) var(--color-gray-300)
        var(--color-gray-300) var(--color-gray-700);
      border-width: var(--border-width);
      border-style: solid;
      padding: var(--spacing-50);
      background-color: var(--window-toolbar-item-color-background);
    }
  `;window.customElements.define("a2k-window-toolbar-item",Oe);var Pe=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Re=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class yt extends m{constructor(){super(...arguments),this.statusOne="",this.statusTwo=""}render(){return f`
      <div id="separator"></div>
      <div id="content">
        <div class="section">
          <p>${this.statusOne}</p>
        </div>

        ${this.statusTwo?f` <div class="section-separator"></div>
              <div class="section"><p>${this.statusTwo}</p></div>`:null}
      </div>
    `}}yt.styles=x`
    * {
      box-sizing: border-box;
      margin: 0;
    }

    #separator {
      border: var(--border-width) solid var(--color-gray-700);
    }

    #content {
      background: var(--color-gray-550);
      display: flex;
    }

    .section {
      border: var(--border-medium);
      border-bottom-color: white;
      border-right-color: white;
      padding: 0 var(--spacing-50);
    }

    .section-separator {
      border-right: var(--border-width) solid var(--color-gray-700);
    }

    .section:first-child {
      flex: 1;
    }
  `;Pe([g({type:String}),Re("design:type",Object)],yt.prototype,"statusOne",void 0);Pe([g({type:String}),Re("design:type",Object)],yt.prototype,"statusTwo",void 0);window.customElements.define("a2k-window-status-bar",yt);var Me=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ko=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let ft=class extends m{constructor(){super(...arguments),this.open=!1}render(){return f`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};ft.styles=x`
    #start-menu-item {
      height: var(--start-menu-item-height);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding-inline: var(--start-menu-item-padding);
      gap: var(--start-menu-item-gap);
      background: var(--start-menu-item-background);
      cursor: var(--cursor-pointer);
      width: 100%;
      border: 0;
      font-size: inherit;
      text-align: left;
      font-family: var(--font-primary);
      letter-spacing: var(--font-primary-letter-spacing);
    }

    #start-menu-item:hover {
      background: var(--start-menu-background-hover);
    }

    #start-menu-item:hover p {
      color: var(--start-menu-item-text-color-hover);
    }

    #icon-wrapper {
      width: var(--start-menu-icon-size);
      height: var(--start-menu-icon-size);
    }

    #start-menu.open {
      display: block;
    }

    #text-wrapper {
      flex: 1;
      margin: 0;
    }
  `;Me([g(),ko("design:type",Object)],ft.prototype,"open",void 0);ft=Me([st("a2k-start-menu-item")],ft);var je=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},xo=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let gt=class extends m{constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=f` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;Wt(t,document.body)}handleShutdownClick(){location.reload()}render(){const t=String(this.open)==="true";return f`
      <div id="start-menu" class="${t?"open":""}">
        <a2k-panel>
        <div id="content">
            <div id="side-strip">
              <p>
                Andricos2000
              </p>
            </div>
            <div id="stack-wrapper">
              <a2k-stack>
                <!-- This start menu should be managed by user land.  -->
                <a target="_blank" href="https://andri.co" rel="noreferrer noopener">
                  <a2k-start-menu-item>
                    <span slot="icon"><a2k-icon icon="documents-icon" /></span>
                    Portfolio
                  </a2k-start-menu-item>
                </a>
                <a target="_blank" href="https://twitter.com/andricokaroulla" rel="noreferrer noopener">
                  <a2k-start-menu-item>
                    <span slot="icon"><a2k-icon icon="network-icon"/></span>
                    Send Feedback
                  </a2k-start-menu-item>
                </a>
                <button @click="${this.handleAboutClick}">
                  <a2k-start-menu-item>
                    <span slot="icon">
                      <a2k-icon slot="icon" icon="help-icon" />
                    </span>
                    About
                  </a2k-start-menu-item>
                </button>
                <button @click="${this.handleShutdownClick}">
                  <a2k-start-menu-item>
                    <span slot="icon">
                      <a2k-icon slot="icon" icon="shut-down-icon" />
                    </span>
                    Shut Down
                  </a2k-start-menu-item>
                </button>
              </a2k-stack>
            </div>
          </a2k-panel>
        </div>
      </div>
    `}};gt.styles=x`
    #start-menu {
      width: var(--start-menu-height);
      position: absolute;
      bottom: calc(0px + var(--taskbar-height));
      display: none;
    }

    #start-menu.open {
      display: block;
    }

    #start-menu a {
      text-decoration: none;
      color: var(--font-color);
    }

    #content {
      display: flex;
      flex-direction: row;
    }

    #stack-wrapper {
      flex-grow: 1;
    }

    #side-strip {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      background: var(--start-menu-strip-background-gradient);
      padding-block-top: var(--spacing-100);
    }

    button {
      background: none;
      border: 0;
      margin: 0;
      padding: 0;
      font-family: var(--font-primary);
      letter-spacing: var(--font-primary-letter-spacing);
      font-size: var(--font-size-100);
    }

    #side-strip p {
      color: white;
      font-weight: var(--font-weight-600);
      margin: 0;
      padding-inline-start: var(--spacing-50);
    }
  `;je([g(),xo("design:type",Object)],gt.prototype,"open",void 0);gt=je([st("a2k-start-menu")],gt);var Le=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},$o=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let vt=class extends m{constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return f`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `}};vt.styles=x`
    .wrapper {
      position: relative;
      height: 100%;
    }

    button {
      display: flex;
      align-items: center;
      gap: var(--taskbar-content-gap);
      font-family: var(--font-primary);
      letter-spacing: var(--font-primary-letter-spacing);
      height: 100%;
      font-weight: var(--font-weight-heavy);
      font-size: var(--font-size-100);
      line-height: var(--font-size-100);
      background-color: var(--color-gray-600);
      cursor: var(--cursor-pointer);
      border: var(--button-border);
      border-left: 1px dotted var(--color-white);
      border-top: 1px dotted var(--color-white);
      box-shadow: var(--button-shadow);
      outline-color: var(--outline-color-focus);
      outline-offset: var(--outline-offset-focus);
    }

    button:active {
      border-bottom: 2px solid transparent;
      border-right: 0;
      border-left: 1px dotted var(--color-black);
      border-top: 1px dotted var(--color-black);
      box-shadow: var(--button-shadow-active);
      transform: translate(2px, 2px);
    }
  `;Le([qt(),$o("design:type",Object)],vt.prototype,"_isMenuOpen",void 0);vt=Le([st("a2k-start-button")],vt);var Eo=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let zt=class extends m{constructor(){super(...arguments),this.clock=new uo(this)}render(){const t=Co.format(this.clock.value);return f`<div class="utility-bar">${t}</div>`}};zt.styles=x`
    .utility-bar {
      --inset-shadow-padding: 2px;

      display: flex;
      height: 100%;
      box-sizing: border-box;
      align-items: center;
      padding: var(--taskbar-padding);
      padding-left: calc(var(--inset-shadow-padding) + var(--taskbar-padding));
      box-shadow: var(--taskbar-utility-bar-shadow);
    }
  `;zt=Eo([st("a2k-utility-bar")],zt);const Co=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class Fe extends m{render(){return f`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}Fe.styles=x`
    .taskbar {
      --inset-shadow-padding: 2px;

      font-family: var(--font-primary);
      letter-spacing: var(--font-primary-letter-spacing);
      box-sizing: border-box;
      border: var(--taskbar-border);
      border-top: 0;
      border-left: 0;
      box-shadow: var(--taskbar-shadow);
      background-color: var(--taskbar-color-background);
      width: 100%;
      padding: var(--taskbar-padding);
      padding-top: calc(var(--inset-shadow-padding) + var(--taskbar-padding));
      padding-left: calc(var(--inset-shadow-padding) + var(--taskbar-padding));
      height: var(--taskbar-height);
      margin-bottom: var(--inset-shadow-padding);
      display: flex;
      justify-content: space-between;
    }
  `;window.customElements.define("a2k-taskbar",Fe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ao=ke(class extends xe{constructor(i){var t;if(super(i),i.type!==_e.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,o;if(this.et===void 0){this.et=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.st)===null||e===void 0)&&e.has(r))&&this.et.add(r);return this.render(t)}const n=i.element.classList;this.et.forEach(r=>{r in t||(n.remove(r),this.et.delete(r))});for(const r in t){const s=!!t[r];s===this.et.has(r)||((o=this.st)===null||o===void 0?void 0:o.has(r))||(s?(n.add(r),this.et.add(r)):(n.remove(r),this.et.delete(r)))}return I}});var Ue=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},So=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let mt=class extends m{constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return f`<div class=${Ao(t)} id="unit">
      <div></div>
      <div></div>
    </div>`}};mt.styles=x`
    #unit {
      width: var(--progress-unit-width);
      height: 100%;
      display: flex;
      flex-direction: row;
    }

    #unit > div {
      width: calc(var(--progress-unit-width) / 2);
      height: 100%;
    }

    .half-filled > div:first-child {
      background: var(--progress-unit-background);
    }

    .filled > :last-child {
      background: var(--progress-unit-background);
    }
  `;Ue([g(),So("design:type",String)],mt.prototype,"filled",void 0);mt=Ue([st("a2k-progress-unit")],mt);var To=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Oo=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class Yt extends m{constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){var a;const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=(a=t.getBoundingClientRect().width)!=null?a:0;if(this.width===e)return;this.width=e;const{gap:o}=getComputedStyle(t),r=Number(o.replace("px",""))+12,s=Math.ceil(e/r);Array(s).fill(0).forEach(()=>{const l=document.createElement("a2k-progress-unit");l.setAttribute("filled","none"),t==null||t.appendChild(l)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,o=Po(e),n=Math.floor(e);t.forEach((r,s)=>{s<n?r.setAttribute("filled","filled"):s===n&&o>=.5?r.setAttribute("filled","half"):r.setAttribute("filled","none")})}render(){return f`<div id="progress" role="progress"></div>`}}Yt.styles=x`
    #progress {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      box-shadow: var(--progress-shadow);
      padding-left: 3px;
      padding-right: 1px;
      padding-bottom: 2px;
      padding-top: 3px;
      height: var(--progress-height);
      border-right: var(--progress-border-right);
      gap: var(--progress-contents-gap);
      overflow: hidden;
    }
  `;To([g({type:Number}),Oo("design:type",Object)],Yt.prototype,"progress",void 0);const Po=i=>Math.floor(i%1*10)/10;window.customElements.define("a2k-progress",Yt);var _=globalThis&&globalThis.__classPrivateFieldGet||function(i,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?i!==t||!o:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(i):o?o.value:t.get(i)},A=globalThis&&globalThis.__classPrivateFieldSet||function(i,t,e,o,n){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?i!==t||!n:!t.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?n.call(i,e):n?n.value=e:t.set(i,e),e};function Ro(i){var t,e,o,n,r,s,a,l,d,b,u,p,y,$,T,R,M;class J extends i{constructor(...c){super(...c),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),o.set(this,!1),n.set(this,!1),r.set(this,void 0),s.set(this,void 0),a.set(this,""),l.set(this,()=>{A(this,n,!0,"f"),A(this,e,!0,"f"),_(this,t,"m",$).call(this)}),d.set(this,()=>{A(this,e,!1,"f"),_(this,t,"m",T).call(this,this.shouldFormValueUpdate()?_(this,a,"f"):""),!this.validity.valid&&_(this,n,"f")&&A(this,o,!0,"f");const h=_(this,t,"m",$).call(this);this.validationMessageCallback&&this.validationMessageCallback(h?this.internals.validationMessage:"")}),b.set(this,()=>{var h;A(this,o,!0,"f"),_(this,t,"m",$).call(this),(h=this===null||this===void 0?void 0:this.validationMessageCallback)===null||h===void 0||h.call(this,this.showError?this.internals.validationMessage:"")}),u.set(this,void 0),p.set(this,!1),y.set(this,Promise.resolve()),this.addEventListener("focus",_(this,l,"f")),this.addEventListener("blur",_(this,d,"f")),this.addEventListener("invalid",_(this,b,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const c=this.validators.map(v=>v.attribute),h=super.observedAttributes||[];return[...new Set([...h,...c])]}static getValidator(c){return this.validators.find(h=>h.attribute===c)||null}get form(){return this.internals.form}get showError(){return _(this,t,"m",$).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(c,h,w){var v;(v=super.attributeChangedCallback)===null||v===void 0||v.call(this,c,h,w),this.constructor.getValidator(c)&&this.validationTarget&&this.setValue(_(this,a,"f"))}setValue(c){var h;A(this,o,!1,"f"),(h=this.validationMessageCallback)===null||h===void 0||h.call(this,""),A(this,a,c,"f");const v=this.shouldFormValueUpdate()?c:null;this.internals.setFormValue(v),_(this,t,"m",T).call(this,v),this.valueChangedCallback&&this.valueChangedCallback(v),_(this,t,"m",$).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(c=>c(_(this,y,"f")))}formResetCallback(){var c,h;A(this,n,!1,"f"),A(this,o,!1,"f"),_(this,t,"m",$).call(this),(c=this.resetFormControl)===null||c===void 0||c.call(this),(h=this.validationMessageCallback)===null||h===void 0||h.call(this,_(this,t,"m",$).call(this)?this.validationMessage:"")}}return e=new WeakMap,o=new WeakMap,n=new WeakMap,r=new WeakMap,s=new WeakMap,a=new WeakMap,l=new WeakMap,d=new WeakMap,b=new WeakMap,u=new WeakMap,p=new WeakMap,y=new WeakMap,t=new WeakSet,$=function(){if(this.hasAttribute("disabled"))return!1;const c=_(this,o,"f")||_(this,n,"f")&&!this.validity.valid&&!_(this,e,"f");return c&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),c},T=function(c){const h=this.constructor,w={},v=h.validators,z=[];_(this,p,"f")||(A(this,y,new Promise(E=>{A(this,u,E,"f")}),"f"),A(this,p,!0,"f")),_(this,r,"f")&&(_(this,r,"f").abort(),A(this,s,_(this,r,"f"),"f"));const O=new AbortController;A(this,r,O,"f");let L,Q=!1;!v.length||(v.forEach(E=>{const D=E.key||"customError",P=E.isValid(this,c,O.signal);P instanceof Promise?(z.push(P),P.then(V=>{V!=null&&(w[D]=!V,L=_(this,t,"m",M).call(this,E,c),_(this,t,"m",R).call(this,w,L))})):(w[D]=!P,this.validity[D]!==!P&&(Q=!0),P||(L=_(this,t,"m",M).call(this,E,c)))}),Promise.allSettled(z).then(()=>{var E;O!=null&&O.signal.aborted||(A(this,p,!1,"f"),(E=_(this,u,"f"))===null||E===void 0||E.call(this))}),Q&&_(this,t,"m",R).call(this,w,L))},R=function(c,h){if(this.validationTarget)this.internals.setValidity(c,h,this.validationTarget);else{if(this.internals.setValidity(c,h),this.internals.validity.valid)return;let w=0;const v=setInterval(()=>{w>=100||this.validity.valid?clearInterval(v):this.validationTarget&&(this.internals.setValidity(this.validity,h,this.validationTarget),clearInterval(v)),w+=1},0)}},M=function(c,h){if(this.validityCallback){const w=this.validityCallback(c.key||"customError");if(w)return w}return c.message instanceof Function?c.message(this,h):c.message},J}var Kt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Gt=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class lt extends Ro(m){constructor(){super(),this.defaultValue="",this.name="",this.value="",this.value=this.defaultValue}static get formAssociated(){return!0}handleInputChange(t){const e=t.target;this.value=e.value,this.setValue(this.value)}render(){return f`<input
      name=${this.name}
      defaultValue=${this.defaultValue}
      type="text"
      @input=${this.handleInputChange}
      @change=${this.handleInputChange}
    />`}}lt.styles=x`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
      width: 100%;
    }

    input {
      font-family: var(--font-primary);
      padding: var(--text-field-padding);
      width: 100%;
      box-shadow: var(--text-input-border);
    }

    input::placeholder {
      font-family: var(--font-primary);
    }
  `;Kt([g(),Gt("design:type",Object)],lt.prototype,"defaultValue",void 0);Kt([g(),Gt("design:type",Object)],lt.prototype,"name",void 0);Kt([qt(),Gt("design:type",Object)],lt.prototype,"value",void 0);window.customElements.define("a2k-text-field",lt);var k=globalThis&&globalThis.__classPrivateFieldGet||function(i,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?i!==t||!o:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(i):o?o.value:t.get(i)},S=globalThis&&globalThis.__classPrivateFieldSet||function(i,t,e,o,n){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?i!==t||!n:!t.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?n.call(i,e):n?n.value=e:t.set(i,e),e};function Mo(i){var t,e,o,n,r,s,a,l,d,b,u,p,y,$,T,R,M;class J extends i{constructor(...c){super(...c),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),o.set(this,!1),n.set(this,!1),r.set(this,void 0),s.set(this,void 0),a.set(this,""),l.set(this,()=>{S(this,n,!0,"f"),S(this,e,!0,"f"),k(this,t,"m",$).call(this)}),d.set(this,()=>{S(this,e,!1,"f"),k(this,t,"m",T).call(this,this.shouldFormValueUpdate()?k(this,a,"f"):""),!this.validity.valid&&k(this,n,"f")&&S(this,o,!0,"f");const h=k(this,t,"m",$).call(this);this.validationMessageCallback&&this.validationMessageCallback(h?this.internals.validationMessage:"")}),b.set(this,()=>{var h;S(this,o,!0,"f"),k(this,t,"m",$).call(this),(h=this===null||this===void 0?void 0:this.validationMessageCallback)===null||h===void 0||h.call(this,this.showError?this.internals.validationMessage:"")}),u.set(this,void 0),p.set(this,!1),y.set(this,Promise.resolve()),this.addEventListener("focus",k(this,l,"f")),this.addEventListener("blur",k(this,d,"f")),this.addEventListener("invalid",k(this,b,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const c=this.validators.map(v=>v.attribute),h=super.observedAttributes||[];return[...new Set([...h,...c])]}static getValidator(c){return this.validators.find(h=>h.attribute===c)||null}get form(){return this.internals.form}get showError(){return k(this,t,"m",$).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(c,h,w){var v;(v=super.attributeChangedCallback)===null||v===void 0||v.call(this,c,h,w),this.constructor.getValidator(c)&&this.validationTarget&&this.setValue(k(this,a,"f"))}setValue(c){var h;S(this,o,!1,"f"),(h=this.validationMessageCallback)===null||h===void 0||h.call(this,""),S(this,a,c,"f");const v=this.shouldFormValueUpdate()?c:null;this.internals.setFormValue(v),k(this,t,"m",T).call(this,v),this.valueChangedCallback&&this.valueChangedCallback(v),k(this,t,"m",$).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(c=>c(k(this,y,"f")))}formResetCallback(){var c,h;S(this,n,!1,"f"),S(this,o,!1,"f"),k(this,t,"m",$).call(this),(c=this.resetFormControl)===null||c===void 0||c.call(this),(h=this.validationMessageCallback)===null||h===void 0||h.call(this,k(this,t,"m",$).call(this)?this.validationMessage:"")}}return e=new WeakMap,o=new WeakMap,n=new WeakMap,r=new WeakMap,s=new WeakMap,a=new WeakMap,l=new WeakMap,d=new WeakMap,b=new WeakMap,u=new WeakMap,p=new WeakMap,y=new WeakMap,t=new WeakSet,$=function(){if(this.hasAttribute("disabled"))return!1;const c=k(this,o,"f")||k(this,n,"f")&&!this.validity.valid&&!k(this,e,"f");return c&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),c},T=function(c){const h=this.constructor,w={},v=h.validators,z=[];k(this,p,"f")||(S(this,y,new Promise(E=>{S(this,u,E,"f")}),"f"),S(this,p,!0,"f")),k(this,r,"f")&&(k(this,r,"f").abort(),S(this,s,k(this,r,"f"),"f"));const O=new AbortController;S(this,r,O,"f");let L,Q=!1;!v.length||(v.forEach(E=>{const D=E.key||"customError",P=E.isValid(this,c,O.signal);P instanceof Promise?(z.push(P),P.then(V=>{V!=null&&(w[D]=!V,L=k(this,t,"m",M).call(this,E,c),k(this,t,"m",R).call(this,w,L))})):(w[D]=!P,this.validity[D]!==!P&&(Q=!0),P||(L=k(this,t,"m",M).call(this,E,c)))}),Promise.allSettled(z).then(()=>{var E;O!=null&&O.signal.aborted||(S(this,p,!1,"f"),(E=k(this,u,"f"))===null||E===void 0||E.call(this))}),Q&&k(this,t,"m",R).call(this,w,L))},R=function(c,h){if(this.validationTarget)this.internals.setValidity(c,h,this.validationTarget);else{if(this.internals.setValidity(c,h),this.internals.validity.valid)return;let w=0;const v=setInterval(()=>{w>=100||this.validity.valid?clearInterval(v):this.validationTarget&&(this.internals.setValidity(this.validity,h,this.validationTarget),clearInterval(v)),w+=1},0)}},M=function(c,h){if(this.validityCallback){const w=this.validityCallback(c.key||"customError");if(w)return w}return c.message instanceof Function?c.message(this,h):c.message},J}var _t=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},kt=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class G extends Mo(m){constructor(){super(),this.label="",this.selectedItem=null,this.name="",this.expanded=!1,this.placeholder="Choose an option",this._options=[],this._openListbox=()=>{this.expanded||(this.expanded=!0,document.addEventListener("click",this._hideOnClickOutside))},this._closeListbox=()=>{!this.expanded||(this.expanded=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._hideOnClickOutside=t=>{t.composedPath().includes(this)||this._closeListbox()},this.addEventListener("keydown",t=>{t.key==="Escape"&&this.expanded?this._closeListbox():t.key==="Escape"&&!this.expanded&&(this.selectedItem=null)})}handleSelectKeyDown(t){(t.key==="ArrowDown"||t.key==="Enter"||t.code==="Space")&&(this.expanded?this.moveFocusToOption(0):this._openListbox())}moveFocusToOption(t){this._options[t].focus()}handleSelectClick(){this.expanded?this._closeListbox():this._openListbox()}handleOptionSelect(t){const e=t.target;if(e.tagName!=="OPTION")return;const o={value:e.value,label:e.innerText};this.selectedItem=o,this.setValue(o.value),this._closeListbox()}handleOptionKeyDown(t){if((t.key==="Enter"||t.code==="Space")&&this.handleOptionSelect(t),t.key==="ArrowDown"){const e=t.target;e.nextElementSibling?e.nextElementSibling.focus():this.moveFocusToOption(0)}if(t.key==="ArrowUp"){const e=t.target;if(e.previousElementSibling)e.previousElementSibling.focus();else{const n=this.renderRoot.querySelectorAll("option").length;this.moveFocusToOption(n-1)}}}toggleButton(){return f`<a2k-button tabindex="-1" size="small">
      <a2k-icon icon="chevron-icon"></a2k-icon>
    </a2k-button> `}handleSlotchange(t){const o=t.target.assignedElements();o.forEach(n=>{n.setAttribute("tabindex","0")}),this._options=o}render(){var t;return f`
      <div>
        <label id="label">${this.label}</label>
        <div class="select">
          <div>
            <div
              aria-controls="listbox"
              ?aria-expanded=${this.expanded}
              aria-haspopup="listbox"
              aria-labelledby="label"
              id="select"
              class="combo-input"
              role="combobox"
              @keydown=${this.handleSelectKeyDown}
              @click=${this.handleSelectClick}
              tabindex="0"
              name=${this.name}
              value=${(t=this.selectedItem)==null?void 0:t.value}
            >
              <p>
                ${this.selectedItem?this.selectedItem.label:this.placeholder}
              </p>
              <slot name="icon"> ${this.toggleButton()} </slot>
            </div>
          </div>

          ${this.expanded?f`
                <div
                  class="listbox"
                  role="listbox"
                  id="listbox"
                  aria-labelledby="label"
                  tabindex="-1"
                  @click=${this.handleOptionSelect}
                  @keydown=${this.handleOptionKeyDown}
                >
                  <slot @slotchange=${this.handleSlotchange}></slot>
                </div>
              `:null}
        </div>
      </div>
    `}}G.styles=x`
    :host {
      --select-input-height: 32px;
      --select-input-padding-inline: 12px;
      --select-input-min-width: 184px;

      --select-input-background-color: white;
      --select-input-option-color-hover: var(--color-blue-100);
    }

    * {
      box-sizing: border-box;
    }

    .combo-input {
      height: var(--select-input-height);
      display: flex;
      align-items: center;
      min-width: var(--select-input-min-width);
      width: fit-content;
      background: var(--select-input-background-color);
      border: 2px solid black;
      border-right: 2px solid white;
      border-bottom: 2px solid white;
      cursor: pointer;
    }

    .combo-input:focus {
      background: var(--select-input-option-color-hover);
      color: white;
    }

    .combo-input p {
      padding-inline: var(--select-input-padding-inline);
      width: 100%;
    }

    .listbox {
      border: 1px solid black;
      background: white;
      position: absolute;
      min-width: var(--select-input-min-width);
      width: fit-content;
    }

    slot:not([name])::slotted(*) {
      height: var(--select-input-height);
      padding-inline: var(--select-input-padding-inline);
      display: flex;
      align-items: center;
      cursor: var(--cursor-pointer);
    }

    slot:not([name])::slotted(*:hover),
    slot:not([name])::slotted(*:focus) {
      background: var(--select-input-option-color-hover);
      color: white;
      outline: 1px dotted white;
      outline-offset: -1px;
    }

    a2k-icon {
      font-size: 14px;
      transform: rotate(90deg);
    }
  `;_t([g({type:String}),kt("design:type",Object)],G.prototype,"label",void 0);_t([g({type:String}),kt("design:type",Object)],G.prototype,"selectedItem",void 0);_t([g({type:String}),kt("design:type",Object)],G.prototype,"name",void 0);_t([qt(),kt("design:type",Object)],G.prototype,"expanded",void 0);window.customElements.define("a2k-select",G);var Ie=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ze=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class xt extends m{constructor(){super(...arguments),this.slotHeightStyles={height:"0px"}}firstUpdated(){const t=getComputedStyle(this.desktopContainer).height;this.slotHeightStyles={height:t}}render(){return f`<div id="desktop">
      <slot id="slot" style=${pt(this.slotHeightStyles)}></slot>
    </div>`}}xt.styles=x`
    #desktop {
      height: 100%;
    }

    #desktop > slot {
      display: flex;
      flex-flow: column wrap;
      width: fit-content;
    }
  `;Ie([g(),ze("design:type",Object)],xt.prototype,"slotHeightStyles",void 0);Ie([ye("#desktop"),ze("design:type",HTMLSlotElement)],xt.prototype,"desktopContainer",void 0);window.customElements.define("a2k-desktop",xt);var Zt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Jt=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class dt extends m{constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return f` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`}}dt.styles=x`
    :host([hidden]) {
      display: none;
    }

    #icon-wrapper {
      all: unset;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      font-family: var(--font-primary);
      letter-spacing: var(--font-primary-letter-spacing);
      color: var(--desktop-icon-text-color);
      padding: var(--desktop-icon-padding);
      cursor: var(--cursor-pointer);
      gap: var(--desktop-icon-flex-gap);
      text-align: center;
      width: var(--desktop-icon-width);
      font-size: var(--desktop-icon-text-size);
      user-select: none;
    }

    #icon-wrapper p {
      padding: var(--desktop-icon-text-padding);
      margin: 0;
    }

    #icon-wrapper:focus p {
      outline: var(--desktop-icon-text-outline-focus);
      background: var(--desktop-icon-text-background-color-focus);
    }
  `;Zt([g({type:String}),Jt("design:type",Object)],dt.prototype,"text",void 0);Zt([g({type:String}),Jt("design:type",Object)],dt.prototype,"icon",void 0);Zt([g(),Jt("design:type",Object)],dt.prototype,"onOpen",void 0);window.customElements.define("a2k-desktop-icon",dt);class De extends m{render(){return f`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}De.styles=x`
    #cover {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      min-block-size: 100vh;
      padding: 1rem;
    }

    #cover > div {
      margin-block: 1rem;
    }

    #cover > div:nth-child(1) {
      margin-block-start: 0;
    }

    #cover > div:nth-child(2) {
      margin-block: auto;
    }

    #cover > div:nth-child(3) {
      margin-block-end: 0;
    }
  `;window.customElements.define("a2k-cover",De);const jo=(i,t)=>{const e=i/t,o=t/i*100,n=Array(e).fill(o),r=n.length;for(let s=0;s<1e3;s++){const a=Math.floor(Math.random()*r),l=n[a],d=Math.floor(Math.random()*r),b=n[d],u=ut(Math.random()*l),p=ut(l-u),y=ut(b+u);n[a]=p,n[d]=y}return n};var ct=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ht=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};const Lo=["Booting Up..."],Fo=i=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:i});class q extends m{constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.state="idle",this.image="",this.footerText="Copyright \u24B8 1999-2000. Andricos2000",this.messages=Lo,this.progress=0,this.interval=50,this.handleStart=()=>{this.state="loading",document.querySelector("body").setAttribute("data-state","waiting"),this.beginLoading()},this.beginLoading=()=>{const t=jo(this.startupTime,this.interval);this.intervalRef=setInterval(()=>{var r;const e=(r=t[this.currentStep])!=null?r:0,o=ut(this.progress+e),n=Fo({progress:o,isComplete:o>=100});this.dispatchEvent(n),o>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=o,this.currentStep++)},this.interval)}}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return this.state==="idle"?f`<a2k-cover>
        <div slot="principal">
          <h1 id="standing-by">Standing by...</h1>
          <a2k-button size="large" @click=${this.handleStart}>Start</a2k-button>
        </div>
        <div slot="footer"></div>
      </a2k-cover>`:f`
      <a2k-cover>
        <div slot="principal">
          <h1>Welcome. Andricos2000 is starting up...</h1>
        </div>
        <div slot="footer">
          <a2k-stack>
            <div id="progress-wrapper">
              <a2k-progress progress=${this.progress}></a2k-progress>
            </div>
            <p>${Math.floor(this.progress)}%</p>
            <p>${this.footerText}</p>
          </a2k-stack>
        </div>
      </a2k-cover>
    `}}q.styles=x`
    :host {
      --progress-unit-background: var(--color-white);

      color: var(--color-white);
      text-align: center;
      font-family: var(--font-primary);
      width: 100%;
    }

    #progress-wrapper {
      max-width: var(--startup-progress-bar-width);
      margin: 0 auto;
      width: 100%;
    }

    #standing-by {
      animation: flash 1s infinite;
    }

    @keyframes flash {
      from {
        opacity: 0;
      }

      1% {
        opacity: 1;
      }

      50% {
        opacity: 0;
      }
    }
  `;ct([g({type:String}),ht("design:type",Object)],q.prototype,"state",void 0);ct([g({type:String}),ht("design:type",Object)],q.prototype,"image",void 0);ct([g({type:String}),ht("design:type",Object)],q.prototype,"footerText",void 0);ct([g(),ht("design:type",Object)],q.prototype,"messages",void 0);ct([g(),ht("design:type",Object)],q.prototype,"progress",void 0);window.customElements.define("a2k-startup",q);var Ve=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},We=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class $t extends m{firstUpdated(){const[t]=this.slotEl,e=t.cloneNode(!0);this.marqueeWrapperEl.appendChild(e)}render(){return f`<div id="marquee">
      <div id="marquee-inner-1">
        <slot name="text"></slot>
      </div>
      <div id="marquee-inner-2"></div>
    </div>`}}$t.styles=x`
    :host {
      background: var(--marquee-background);
      padding: var(--spacing-50) 0;
    }

    :host * {
      margin: 0;
    }

    ::slotted(*) {
      margin: 0;
    }

    #marquee {
      overflow: hidden;
      width: 100%;
      position: relative;
    }

    #marquee:hover > * {
      animation-play-state: paused;
    }

    #marquee-inner-2 {
      top: 0;
      position: absolute;
      width: 100%;
    }

    @media (prefers-reduced-motion: no-preference) {
      #marquee-inner-1 {
        animation: marquee-move var(--marquee-animation-duration) both infinite
          linear;
      }

      #marquee-inner-2 {
        animation: marquee-move var(--marquee-animation-duration) both
          calc(var(--marquee-animation-duration) / 2) infinite linear;
      }
    }

    @keyframes marquee-move {
      from {
        transform: translateX(100%);
      }

      to {
        transform: translateX(-100%);
      }
    }
  `;Ve([ho({slot:"text"}),We("design:type",Array)],$t.prototype,"slotEl",void 0);Ve([ye("#marquee-inner-2"),We("design:type",HTMLElement)],$t.prototype,"marqueeWrapperEl",void 0);window.customElements.define("a2k-marquee",$t);const Uo=f`
  <a2k-window heading="Please wait..." draggable closeable>
    <p class="heading">Andricos<span>2000</span></p>
    <p>Andricos2000 is starting up...</p>
    <a2k-progress></a2k-progress>
  </a2k-window>
`;class qe extends m{constructor(){super(...arguments);N(this,"connection","");N(this,"handleOnline",()=>{connection="Online"});N(this,"handleOffline",()=>{connection="Offline"})}connectedCallback(){super.connectedCallback(),this.addEventListener("online",this.handleOnline),this.addEventListener("offline",this.handleOffline),this.connection=navigator.onLine?"Online":"Offline"}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("online",this.handleOnline),this.removeEventListener("offline",this.handleOffline)}render(){return f` <a2k-window draggable closeable heading="Internet Explorer 5">
      <a2k-window-toolbar slot="toolbar">
        <a2k-window-toolbar-item>
          <div class="toolbar-row">
            <div>Address</div>
            <a2k-text-field
              defaultValue="https://www.microsoft.com/internet-explorer"
            ></a2k-text-field>
          </div>
        </a2k-window-toolbar-item>
      </a2k-window-toolbar>
      <a2k-marquee>
        <p slot="text">Internet Explorer has reached end of life. RIP king.</p>
      </a2k-marquee>
      <img src="/images/ie5-splash.png" />
      <a2k-window-status-bar
        statusOne="Loaded"
        statusTwo="${this.connection}"
        slot="statusbar"
      ></a2k-window-status-bar>
    </a2k-window>`}}N(qe,"styles",x`
    :host {
      --panel-color-background: white;
    }

    .toolbar-row {
      display: flex;
      align-items: center;
      gap: var(--spacing-50);
    }

    .toolbar-row > *:nth-child(2) {
      flex: 1;
    }

    a2k-window > a2k-marquee {
      padding: 0;
    }
    img {
      object-fit: cover;
      padding: 0;
    }
  `);window.customElements.define("a2k-ie5",qe);class Ne extends m{render(){return f` <a2k-window draggable closeable heading="About Andricos2000">
      <p>
        Andricos2000 is a free-to-use web component library inspired by the
        turn-of-the-millenium era of computing. It's a work in progress, so
        follow us on
        <a href="https://twitter.com/andricokaroulla" target="_blank"
          >Twitter</a
        >
        if you'd like updates.
      </p>

      <p>
        Head on over to
        <a href="https://github.com/andrico1234/a2k" target="_blank">GitHub</a>
        if you'd like to use Andricos2000 in your own projects. Or consider
        giving us a ⭐️ to help the project grow.
      </p>
      <h2>Credits</h2>
      <p>Andrico Karoulla - Developer and designer (pictured below).</p>
      <img
        src="/images/me-at-computer.jpeg"
        loading="lazy"
        class="profile-picture"
        alt="me, playing at the computer, with my pokemon cards scattered around me"
      />
      <p>
        The startup music is a reimagining of Madgalena Bay's
        <a
          href="https://www.youtube.com/watch?v=SLdCV3nIiEI"
          target="_blank"
          rel="noreferrer noopener"
          >Mercurial World
        </a>
      </p>
    </a2k-window>`}}N(Ne,"styles",x`
    p {
      margin: 0;
    }

    img {
      max-width: 400px;
      object-fit: cover;
    }
  `);window.customElements.define("a2k-about",Ne);var Io=Object.defineProperty,zo=Object.getOwnPropertyDescriptor,Et=(i,t,e,o)=>{for(var n=o>1?void 0:o?zo(t,e):t,r=i.length-1,s;r>=0;r--)(s=i[r])&&(n=(o?s(t,e,n):s(n))||n);return o&&n&&Io(t,e,n),n};class Z extends m{constructor(){super(...arguments),this.height=0,this.width=0,this.top=0,this.left=0}render(){const t=pt({width:`${this.width}px`,transform:`translate(${this.left}px, ${this.top}px)`}),e=pt({height:`${this.height}px`});return f`
      <div style=${t} id="outer-wrapper">
        <a2k-panel>
          <div style=${e}></div>
        </a2k-panel>
      </div>
    `}}Z.styles=x`
    #outer-wrapper {
      position: absolute;
      display: flex;
      top: 0;
    }

    a2k-panel {
      width: 100%;
    }

    a2k-panel > div {
      display: flex;
    }
  `;Et([g()],Z.prototype,"height",2);Et([g()],Z.prototype,"width",2);Et([g()],Z.prototype,"top",2);Et([g()],Z.prototype,"left",2);window.customElements.define("a2k-broken-window",Z);const Do=document.querySelector("body"),Vo=new URL("/assets/andricos-2000-startup.774be9be.mp3",self.location),Ct=document.querySelector("#windows-container"),Wo=document.querySelector('a2k-desktop-icon[icon="documents-icon"]');Wo.onOpen=()=>{window.location.href="https://andri.co"};const qo=document.querySelector('a2k-desktop-icon[icon="network-icon"]');qo.onOpen=()=>{window.location.href="https://twitter.com/andricokaroulla"};const No=document.querySelector('a2k-desktop-icon[icon="github-icon"]');No.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const Ho=document.querySelector('a2k-desktop-icon[icon="help-icon"]');Ho.onOpen=()=>{const i=document.createElement("a2k-about");Ct.append(i)};const Bo=document.querySelector('a2k-desktop-icon[icon="internet-icon"]');Bo.onOpen=()=>{const i=document.createElement("a2k-ie5");Ct.append(i)};let ue=!1;const Xo=i=>{const{target:t,detail:e}=i,{containerEl:o}=e,n=document.querySelector("a2k-window[heading='Please wait...']");if(!n||!n.isSameNode(t))return;const{width:r,top:s,left:a,height:l}=o.getBoundingClientRect(),d=document.createElement("a2k-broken-window");Ct.insertBefore(d,n),d.setAttribute("height",l),d.setAttribute("width",r),d.setAttribute("top",s),d.setAttribute("left",a)};window.addEventListener("startup-progress",i=>{if(!(i.detail.progress<50)&&!ue){ue=!0;try{Yo()}catch{}}});window.addEventListener("startup-progress",i=>{!i.detail.isComplete||(setTimeout(()=>{document.querySelector(".fixed-container").remove(),Ko(),Go()},300),setTimeout(()=>{Do.removeAttribute("data-state")},500))});function Yo(){const i=new Audio(Vo);i.volume=.3,i.play()}function Ko(){let i=0;setTimeout(()=>{Wt(Uo,Ct);const t=document.querySelector("a2k-progress"),e=document.querySelector("a2k-window[heading='Please wait...']"),o=setInterval(()=>{if(!!t&&(i=i+1.2,t.setAttribute("progress",i),i>40)){for(;e.firstChild;)e.removeChild(e.lastChild);window.addEventListener("window-drag",Xo),e.innerHTML=`
        <a2k-stack>
          <p>Oh no! We had a problem loading Andricos2000. Don't worry, you can still play around and find some easter eggs.</p>
          <p>Andricos2000 is a work in progress, so keep checking back (or follow me on <a href="https://twitter.com/andricokaroulla" target="_blank"
          >Twitter</a
        >) for updates :)</p>
          </a2k-stack>
        `,clearInterval(o)}},100)},700)}function Go(){const i=document.querySelectorAll("a2k-desktop-icon");setTimeout(()=>{i.forEach(t=>{t.removeAttribute("hidden")})},1200)}
