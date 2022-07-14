var xe=Object.defineProperty;var Ee=(o,t,e)=>t in o?xe(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var rt=(o,t,e)=>(Ee(o,typeof t!="symbol"?t+"":t,e),e);const Ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}};Ae();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yt=Symbol(),zt=new WeakMap;class Zt{constructor(t,e,r){if(this._$cssResult$=!0,r!==yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(wt&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=zt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&zt.set(e,t))}return t}toString(){return this.cssText}}const Se=o=>new Zt(typeof o=="string"?o:o+"",void 0,yt),f=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,n,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[i+1],o[0]);return new Zt(e,o,yt)},Te=(o,t)=>{wt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),n=window.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,o.appendChild(r)})},It=wt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Se(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var it;const Dt=window.trustedTypes,Pe=Dt?Dt.emptyScript:"",Nt=window.reactiveElementPolyfillSupport,ut={toAttribute(o,t){switch(t){case Boolean:o=o?Pe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Jt=(o,t)=>t!==o&&(t==t||o==o),nt={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:Jt};class A extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const n=this._$Ep(r,e);n!==void 0&&(this._$Ev.set(n,r),t.push(n))}),t}static createProperty(t,e=nt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||nt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of r)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(It(n))}else t!==void 0&&e.push(It(t));return e}static _$Ep(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Te(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=nt){var n,i;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const a=((i=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&i!==void 0?i:ut.toAttribute)(e,r.type);this._$El=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(t,e){var r,n;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const a=i.getPropertyOptions(s),l=a.converter,d=(n=(r=l==null?void 0:l.fromAttribute)!==null&&r!==void 0?r:typeof l=="function"?l:null)!==null&&n!==void 0?n:ut.fromAttribute;this._$El=s,this[s]=d(e,a.type),this._$El=null}}requestUpdate(t,e,r){let n=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Jt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,i)=>this[i]=n),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(r)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},Nt==null||Nt({ReactiveElement:A}),((it=globalThis.reactiveElementVersions)!==null&&it!==void 0?it:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var st;const T=globalThis.trustedTypes,qt=T?T.createPolicy("lit-html",{createHTML:o=>o}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,Qt="?"+k,Oe=`<${Qt}>`,P=document,I=(o="")=>P.createComment(o),D=o=>o===null||typeof o!="object"&&typeof o!="function",te=Array.isArray,Ce=o=>{var t;return te(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,Bt=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Wt=/'/g,Vt=/"/g,ee=/^(?:script|style|textarea|title)$/i,oe=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),g=oe(1),Re=oe(2),y=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Xt=new WeakMap,_t=(o,t,e)=>{var r,n;const i=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let s=i._$litPart$;if(s===void 0){const a=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new q(t.insertBefore(I(),a),a,void 0,e!=null?e:{})}return s._$AI(o),s},S=P.createTreeWalker(P,129,null,!1),je=(o,t)=>{const e=o.length-1,r=[];let n,i=t===2?"<svg>":"",s=U;for(let l=0;l<e;l++){const d=o[l];let p,c,u=-1,b=0;for(;b<d.length&&(s.lastIndex=b,c=s.exec(d),c!==null);)b=s.lastIndex,s===U?c[1]==="!--"?s=Ht:c[1]!==void 0?s=Bt:c[2]!==void 0?(ee.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=x):c[3]!==void 0&&(s=x):s===x?c[0]===">"?(s=n!=null?n:U,u=-1):c[1]===void 0?u=-2:(u=s.lastIndex-c[2].length,p=c[1],s=c[3]===void 0?x:c[3]==='"'?Vt:Wt):s===Vt||s===Wt?s=x:s===Ht||s===Bt?s=U:(s=x,n=void 0);const E=s===x&&o[l+1].startsWith("/>")?" ":"";i+=s===U?d+Oe:u>=0?(r.push(p),d.slice(0,u)+"$lit$"+d.slice(u)+k+E):d+k+(u===-2?(r.push(void 0),l):E)}const a=i+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[qt!==void 0?qt.createHTML(a):a,r]};class N{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,s=0;const a=t.length-1,l=this.parts,[d,p]=je(t,e);if(this.el=N.createElement(d,r),S.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=S.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(k)){const b=p[s++];if(c.push(u),b!==void 0){const E=n.getAttribute(b.toLowerCase()+"$lit$").split(k),$=/([.?@])?(.*)/.exec(b);l.push({type:1,index:i,name:$[2],strings:E,ctor:$[1]==="."?Le:$[1]==="?"?ze:$[1]==="@"?Ie:G})}else l.push({type:6,index:i})}for(const u of c)n.removeAttribute(u)}if(ee.test(n.tagName)){const c=n.textContent.split(k),u=c.length-1;if(u>0){n.textContent=T?T.emptyScript:"";for(let b=0;b<u;b++)n.append(c[b],I()),S.nextNode(),l.push({type:2,index:++i});n.append(c[u],I())}}}else if(n.nodeType===8)if(n.data===Qt)l.push({type:2,index:i});else{let c=-1;for(;(c=n.data.indexOf(k,c+1))!==-1;)l.push({type:7,index:i}),c+=k.length-1}i++}}static createElement(t,e){const r=P.createElement("template");return r.innerHTML=t,r}}function O(o,t,e=o,r){var n,i,s,a;if(t===y)return t;let l=r!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[r]:e._$Cu;const d=D(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),d===void 0?l=void 0:(l=new d(o),l._$AT(o,e,r)),r!==void 0?((s=(a=e)._$Cl)!==null&&s!==void 0?s:a._$Cl=[])[r]=l:e._$Cu=l),l!==void 0&&(t=O(o,l._$AS(o,t.values),l,r)),t}class Me{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,i=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:P).importNode(r,!0);S.currentNode=i;let s=S.nextNode(),a=0,l=0,d=n[0];for(;d!==void 0;){if(a===d.index){let p;d.type===2?p=new q(s,s.nextSibling,this,t):d.type===1?p=new d.ctor(s,d.name,d.strings,this,t):d.type===6&&(p=new De(s,this,t)),this.v.push(p),d=n[++l]}a!==(d==null?void 0:d.index)&&(s=S.nextNode(),a++)}return i}m(t){let e=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class q{constructor(t,e,r,n){var i;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=(i=n==null?void 0:n.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),D(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==y&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Ce(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==m&&D(this._$AH)?this._$AA.nextSibling.data=t:this.k(P.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=N.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.m(r);else{const s=new Me(i,this),a=s.p(this.options);s.m(r),this.k(a),this._$AH=s}}_$AC(t){let e=Xt.get(t.strings);return e===void 0&&Xt.set(t.strings,e=new N(t)),e}S(t){te(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new q(this.M(I()),this.M(I()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class G{constructor(t,e,r,n,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const i=this.strings;let s=!1;if(i===void 0)t=O(this,t,e,0),s=!D(t)||t!==this._$AH&&t!==y,s&&(this._$AH=t);else{const a=t;let l,d;for(t=i[0],l=0;l<i.length-1;l++)d=O(this,a[r+l],e,l),d===y&&(d=this._$AH[l]),s||(s=!D(d)||d!==this._$AH[l]),d===m?t=m:t!==m&&(t+=(d!=null?d:"")+i[l+1]),this._$AH[l]=d}s&&!n&&this.C(t)}C(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Le extends G{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===m?void 0:t}}const Ue=T?T.emptyScript:"";class ze extends G{constructor(){super(...arguments),this.type=4}C(t){t&&t!==m?this.element.setAttribute(this.name,Ue):this.element.removeAttribute(this.name)}}class Ie extends G{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){var r;if((t=(r=O(this,t,e,0))!==null&&r!==void 0?r:m)===y)return;const n=this._$AH,i=t===m&&n!==m||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==m&&(n===m||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class De{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const Yt=window.litHtmlPolyfillSupport;Yt==null||Yt(N,q),((st=globalThis.litHtmlVersions)!==null&&st!==void 0?st:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at,lt;class h extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_t(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return y}}h.finalized=!0,h._$litElement$=!0,(at=globalThis.litElementHydrateSupport)===null||at===void 0||at.call(globalThis,{LitElement:h});const Ft=globalThis.litElementPolyfillSupport;Ft==null||Ft({LitElement:h});((lt=globalThis.litElementVersions)!==null&&lt!==void 0?lt:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=o=>t=>typeof t=="function"?((e,r)=>(window.customElements.define(e,r),r))(o,t):((e,r)=>{const{kind:n,elements:i}=r;return{kind:n,elements:i,finisher(s){window.customElements.define(e,s)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function v(o){return(t,e)=>e!==void 0?((r,n,i)=>{n.constructor.createProperty(i,r)})(o,t,e):Ne(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qe(o){return v({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=({finisher:o,descriptor:t})=>(e,r)=>{var n;if(r===void 0){const i=(n=e.originalKey)!==null&&n!==void 0?n:e.key,s=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(e.key)}:{...e,key:i};return o!=null&&(s.finisher=function(a){o(a,i)}),s}{const i=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),o==null||o(i,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function He(o,t){return re({descriptor:e=>{const r={get(){var n,i;return(i=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const n=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var i,s;return this[n]===void 0&&(this[n]=(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(o))!==null&&s!==void 0?s:null),this[n]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dt;const Be=((dt=window.HTMLSlotElement)===null||dt===void 0?void 0:dt.prototype.assignedElements)!=null?(o,t)=>o.assignedElements(t):(o,t)=>o.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function We(o){const{slot:t,selector:e}=o!=null?o:{};return re({descriptor:r=>({get(){var n;const i="slot"+(t?`[name=${t}]`:":not([name])"),s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i),a=s!=null?Be(s,o):[];return e?a.filter(l=>l.matches(e)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},$t=o=>(...t)=>({_$litDirective$:o,values:t});class xt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=$t(class extends xt{constructor(o){var t;if(super(o),o.type!==kt.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const r=o[e];return r==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ct===void 0){this.ct=new Set;for(const r in t)this.ct.add(r);return this.render(t)}this.ct.forEach(r=>{t[r]==null&&(this.ct.delete(r),r.includes("-")?e.removeProperty(r):e[r]="")});for(const r in t){const n=t[r];n!=null&&(this.ct.add(r),r.includes("-")?e.setProperty(r,n):e[r]=n)}return y}});class Ve{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class _{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:z(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new _(e));if(t.length>0)return t}return[this]}}const z=o=>"pointerId"in o,ct=o=>"changedTouches"in o,Kt=()=>{};class Xe{constructor(t,{start:e=()=>!0,move:r=Kt,end:n=Kt,rawUpdates:i=!1,avoidPointerEvents:s=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(z(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const l=new _(a);this.currentPointers.some(d=>d.id===l.id)||!this._triggerPointerStart(l,a)||(z(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerStart(new _(l),a)},this._move=a=>{if(!ct(a)&&(!z(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const l=this.currentPointers.slice(),d=ct(a)?Array.from(a.changedTouches).map(c=>new _(c)):[new _(a)],p=[];for(const c of d){const u=this.currentPointers.findIndex(b=>b.id===c.id);u!==-1&&(p.push(c),this.currentPointers[u]=c)}p.length!==0&&this._moveCallback(l,p,a)},this._triggerPointerEnd=(a,l)=>{if(!ct(l)&&l.buttons&1)return!1;const d=this.currentPointers.findIndex(c=>c.id===a.id);if(d===-1)return!1;this.currentPointers.splice(d,1),this.startPointers.splice(d,1),this._excludeFromButtonsCheck.delete(a.id);const p=!(l.type==="mouseup"||l.type==="touchend"||l.type==="pointerup");return this._endCallback(a,l,p),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new _(a),a))if(z(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerEnd(new _(l),a)},this._startCallback=e,this._moveCallback=r,this._endCallback=n,this._rawUpdates=i&&"onpointerrawupdate"in window,self.PointerEvent&&!s?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}const gt=(o,t)=>o<=t?o:t;var ht=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ft,vt,mt;const Ye={initialPosition:{}};class Fe extends xt{constructor(t){if(super(t),this.hasInitialised=!1,t.type!==kt.ELEMENT)throw new Error("The `drag` directive must be used on an element")}update(t,e){if(this.hasInitialised)return;const r=t.element,[n,i]=e;r.setAttribute("data-dragging","idle"),n.draggableElement=r,n.pointerTracker=new Xe(r,{start(...s){return i.start(...s),r.setAttribute("data-dragging","dragging"),!0},move(...s){i.move(...s)},end(...s){i.end(...s),r.setAttribute("data-dragging","idle")}}),this.hasInitialised=!0}render(t,e){return y}}const Ke=$t(Fe);class Ge{constructor(t,e=Ye){this.cursorPositionX=null,this.cursorPositionY=null,this.pointerTracker=null,this.draggableElement=null,this.containerElement=null,this.containerId="",this.styles={touchAction:"none",top:"0px",left:"0px"},ft.set(this,(i,s)=>(this.cursorPositionX=Math.floor(i.pageX),this.cursorPositionY=Math.floor(i.pageY),s.target.setAttribute("data-state","dragging"),!0)),vt.set(this,(i,s)=>{const[a]=s,l=new CustomEvent("window-drag",{bubbles:!0,composed:!0,detail:{pointer:a}});window.requestAnimationFrame(()=>(this.host.dispatchEvent(l),this.handleWindowMove(a)))}),mt.set(this,(i,s)=>{s.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this);const{initialPosition:r={},containerId:n=""}=e;this.styles={...this.styles,...r},this.containerId=n}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}applyDrag(){return this.host.draggable?Ke(this,{start:ht(this,ft,"f"),move:ht(this,vt,"f"),end:ht(this,mt,"f")}):null}updateElPosition(t,e){this.styles={...this.styles,left:t,top:e}}handleWindowMove(t){var p;const e=this.draggableElement,r=(p=this.host.shadowRoot)==null?void 0:p.querySelector(this.containerId);if(!e||!r)return;const{top:n,left:i}=this.styles,s=Number(n==null?void 0:n.replace("px","")),a=Number(i==null?void 0:i.replace("px","")),l=Math.floor(t.pageX),d=Math.floor(t.pageY);if(l!==this.cursorPositionX||d!==this.cursorPositionY){const{bottom:c,height:u}=e.getBoundingClientRect(),{right:b,width:E}=r.getBoundingClientRect(),$=gt(screen.availWidth,innerWidth),Rt=gt(screen.availHeight,innerHeight),j=l-this.cursorPositionX,M=d-this.cursorPositionY,jt=s+M<0,Mt=a+j<0,Lt=c+M>Rt,Ut=b+j>=$,$e=Lt||Mt||Ut||jt;if(this.cursorPositionX=l,this.cursorPositionY=d,$e){if(jt){const w=`${a+j}px`;this.updateElPosition(w,"0px")}else if(Mt){const w=`${s+M}px`;this.updateElPosition("0px",w)}else if(Lt){const w=`${Rt-u}px`,L=`${a+j}px`;this.updateElPosition(L,w)}else if(Ut){const w=`${s+M}px`,L=`${Math.floor($-E)}px`;this.updateElPosition(L,w)}}else{const w=`${s+M}px`,L=`${a+j}px`;this.updateElPosition(L,w)}this.host.requestUpdate()}}}ft=new WeakMap,vt=new WeakMap,mt=new WeakMap;const V=(o,t=100)=>Math.round(o*t)/t;class ie extends h{render(){return g`<div id="stack">
      <slot></slot>
    </div>`}}ie.styles=f`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",ie);class ne extends h{render(){return g` <div id="panel">
      <slot></slot>
    </div>`}}ne.styles=f`
    #panel {
      --inset-shadow-padding: 2px;
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
    }
  `;window.customElements.define("a2k-panel",ne);class se extends h{render(){return g`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}se.styles=f`
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
  `;window.customElements.define("a2k-window-topbar",se);var ae=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},le=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Z extends h{constructor(){super(...arguments),this.disabled=!1,this.size="medium"}render(){return g` <button data-size="${this.size}" ?disabled=${this.disabled}>
      <slot></slot>
    </button>`}}Z.styles=f`
    :host {
      width: fit-content;
    }

    :host([disabled]) {
      pointer-events: none;
      cursor: not-allowed;
    }

    button {
      background-color: var(--button-color-background);
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
  `;ae([v({type:Boolean}),le("design:type",Object)],Z.prototype,"disabled",void 0);ae([v({type:String}),le("design:type",String)],Z.prototype,"size",void 0);window.customElements.define("a2k-button",Z);var Ze=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},Je=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};const Qe=new URL("/assets/a2k-icons.100a148a.svg",self.location).href;class Et extends h{constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),Re`
      <svg height="1em" width="1em">
        <use href="${Qe}#${this.icon}"></use>
      </svg>
    `}}Et.styles=f`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;Ze([v({type:String}),Je("design:type",Object)],Et.prototype,"icon",void 0);window.customElements.define("a2k-icon",Et);var to=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},eo=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class At extends h{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return g`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}At.styles=f`
    :host {
      position: absolute;
      right: 2px;
    }

    #icon-wrapper {
      font-size: 8px;
    }
  `;to([v({type:Boolean}),eo("design:type",Object)],At.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",At);var St=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},Tt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class B extends h{constructor(){super(),this.heading="",this.draggable=!1,this.closeable=!1,this.drag=new Ge(this,{initialPosition:{left:"32px",top:"32px"},containerId:"#window"}),this.addEventListener("close",()=>this.remove())}firstUpdated(){const{left:t}=this.drag.styles,{offsetWidth:e}=this.renderRoot.querySelector("#window"),r=gt(screen.availWidth,innerWidth);Number(t==null?void 0:t.replace("px",""))+e>r&&(this.drag.styles={...this.drag.styles,left:"0px"},this.requestUpdate())}render(){return g`
      <div id="window" style=${pt(this.drag.styles)}>
        <a2k-panel>
          <div id="topbar-wrapper">
            <div id="draggable" ${this.drag.applyDrag()}>
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
        </a2k-panel>
      </div>
    `}}B.styles=f`
    :host([hidden]) {
      display: none;
    }

    ::slotted(*) {
      padding: 0 var(--window-spacing-horizontal);
    }

    ::slotted([slot="toolbar"]) {
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
  `;St([v({type:String}),Tt("design:type",Object)],B.prototype,"heading",void 0);St([v({type:Boolean}),Tt("design:type",Object)],B.prototype,"draggable",void 0);St([v({type:Boolean}),Tt("design:type",Object)],B.prototype,"closeable",void 0);window.customElements.define("a2k-window",B);class de extends h{render(){return g`<div id="toolbar">
        <slot></slot>
      </div>
      <div id="separator"></div>`}}de.styles=f`
    #toolbar {
      border-color: var(--color-gray-300) var(--color-gray-700)
        var(--color-gray-700) var(--color-gray-300);
      border-width: 2px;
      border-style: solid;
    }

    #separator {
      border-bottom: 5px solid var(--color-gray-400);
    }
  `;window.customElements.define("a2k-window-toolbar",de);class ce extends h{render(){return g`<div id="item">
      <slot></slot>
    </div>`}}ce.styles=f`
    #item {
      border-color: var(--color-gray-700) var(--color-gray-300)
        var(--color-gray-300) var(--color-gray-700);
      border-width: var(--border-width);
      border-style: solid;
      padding: var(--spacing-50);
      background-color: var(--window-toolbar-item-color-background);
    }
  `;window.customElements.define("a2k-window-toolbar-item",ce);var he=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},oo=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let X=class extends h{constructor(){super(...arguments),this.open=!1}render(){return g`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};X.styles=f`
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
  `;he([v(),oo("design:type",Object)],X.prototype,"open",void 0);X=he([H("a2k-start-menu-item")],X);var ue=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},ro=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let Y=class extends h{constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=g` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;_t(t,document.body)}handleShutdownClick(){location.reload()}render(){const t=String(this.open)==="true";return g`
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
                    Restart
                  </a2k-start-menu-item>
                </button>
              </a2k-stack>
            </div>
          </a2k-panel>
        </div>
      </div>
    `}};Y.styles=f`
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
  `;ue([v(),ro("design:type",Object)],Y.prototype,"open",void 0);Y=ue([H("a2k-start-menu")],Y);var pe=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},io=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let F=class extends h{constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return g`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `}};F.styles=f`
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
  `;pe([qe(),io("design:type",Object)],F.prototype,"_isMenuOpen",void 0);F=pe([H("a2k-start-button")],F);var no=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i};let bt=class extends h{constructor(){super(...arguments),this.clock=new Ve(this)}render(){const t=so.format(this.clock.value);return g`<div class="utility-bar">${t}</div>`}};bt.styles=f`
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
  `;bt=no([H("a2k-utility-bar")],bt);const so=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class ge extends h{render(){return g`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}ge.styles=f`
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
  `;window.customElements.define("a2k-taskbar",ge);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ao=$t(class extends xt{constructor(o){var t;if(super(o),o.type!==kt.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,r;if(this.et===void 0){this.et=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((e=this.st)===null||e===void 0)&&e.has(i))&&this.et.add(i);return this.render(t)}const n=o.element.classList;this.et.forEach(i=>{i in t||(n.remove(i),this.et.delete(i))});for(const i in t){const s=!!t[i];s===this.et.has(i)||((r=this.st)===null||r===void 0?void 0:r.has(i))||(s?(n.add(i),this.et.add(i)):(n.remove(i),this.et.delete(i)))}return y}});var fe=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},lo=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let K=class extends h{constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return g`<div class=${ao(t)} id="unit">
      <div></div>
      <div></div>
    </div>`}};K.styles=f`
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
  `;fe([v(),lo("design:type",String)],K.prototype,"filled",void 0);K=fe([H("a2k-progress-unit")],K);var co=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},ho=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Pt extends h{constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){var a;const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=(a=t.getBoundingClientRect().width)!=null?a:0;if(this.width===e)return;this.width=e;const{gap:r}=getComputedStyle(t),i=Number(r.replace("px",""))+12,s=Math.ceil(e/i);Array(s).fill(0).forEach(()=>{const l=document.createElement("a2k-progress-unit");l.setAttribute("filled","none"),t==null||t.appendChild(l)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,r=uo(e),n=Math.floor(e);t.forEach((i,s)=>{s<n?i.setAttribute("filled","filled"):s===n&&r>=.5?i.setAttribute("filled","half"):i.setAttribute("filled","none")})}render(){return g`<div id="progress" role="progress"></div>`}}Pt.styles=f`
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
  `;co([v({type:Number}),ho("design:type",Object)],Pt.prototype,"progress",void 0);const uo=o=>Math.floor(o%1*10)/10;window.customElements.define("a2k-progress",Pt);class po extends h{render(){return console.log("booo"),g`<input type="text" />`}}window.customElements.define("a2k-text-field",po);class ve extends h{render(){return g`<div id="desktop">
      <slot />
    </div>`}}ve.styles=f`
    #desktop {
      height: 100%;
    }
  `;window.customElements.define("a2k-desktop",ve);var Ot=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},Ct=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class W extends h{constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return g` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`}}W.styles=f`
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
  `;Ot([v({type:String}),Ct("design:type",Object)],W.prototype,"text",void 0);Ot([v({type:String}),Ct("design:type",Object)],W.prototype,"icon",void 0);Ot([v(),Ct("design:type",Object)],W.prototype,"onOpen",void 0);window.customElements.define("a2k-desktop-icon",W);class me extends h{render(){return g`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}me.styles=f`
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
  `;window.customElements.define("a2k-cover",me);const go=(o,t)=>{const e=o/t,r=t/o*100,n=Array(e).fill(r),i=n.length;for(let s=0;s<1e3;s++){const a=Math.floor(Math.random()*i),l=n[a],d=Math.floor(Math.random()*i),p=n[d],c=V(Math.random()*l),u=V(l-c),b=V(p+c);n[a]=u,n[d]=b}return n};var J=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},Q=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};const fo=["Booting Up..."],vo=o=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:o});class C extends h{constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.image="",this.footerText="Copyright \u24B8 1999-2000. Andricos2000",this.messages=fo,this.progress=0}connectedCallback(){super.connectedCallback();const t=50,e=go(this.startupTime,t);this.intervalRef=setInterval(()=>{var s;const r=(s=e[this.currentStep])!=null?s:0,n=V(this.progress+r),i=vo({progress:n,isComplete:n>=100});this.dispatchEvent(i),n>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=n,this.currentStep++)},t)}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return g`
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
    `}}C.styles=f`
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
  `;J([v({type:String}),Q("design:type",Object)],C.prototype,"image",void 0);J([v({type:String}),Q("design:type",Object)],C.prototype,"footerText",void 0);J([v(),Q("design:type",Object)],C.prototype,"messages",void 0);J([v(),Q("design:type",Object)],C.prototype,"progress",void 0);window.customElements.define("a2k-startup",C);var be=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},we=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class tt extends h{firstUpdated(){const[t]=this.slotEl,e=t.cloneNode(!0);this.marqueeWrapperEl.appendChild(e)}render(){return g`<div id="marquee">
      <div id="marquee-inner-1">
        <slot name="text"></slot>
      </div>
      <div id="marquee-inner-2"></div>
    </div>`}}tt.styles=f`
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
  `;be([We({slot:"text"}),we("design:type",Array)],tt.prototype,"slotEl",void 0);be([He("#marquee-inner-2"),we("design:type",HTMLElement)],tt.prototype,"marqueeWrapperEl",void 0);window.customElements.define("a2k-marquee",tt);const mo=g`
  <a2k-window heading="Please wait..." draggable closeable>
    <p class="heading">Andricos<span>2000</span></p>
    <p>Andricos2000 is starting up...</p>
    <a2k-progress></a2k-progress>
  </a2k-window>
`;class ye extends h{render(){return g` <a2k-window draggable closeable heading="Internet Explorer 5">
      <a2k-window-toolbar slot="toolbar">
        <a2k-window-toolbar-item>
          <div class="toolbar-row">
            <div>Address</div>
            <a2k-text-field></a2k-text-field>
          </div>
        </a2k-window-toolbar-item>
      </a2k-window-toolbar>
      <a2k-marquee>
        <p slot="text">
          Internet Explorer has now reached end of life. RIP king.
        </p>
      </a2k-marquee>
      <div>
        <a2k-icon icon="info-icon"></a2k-icon>
        <p>Coming soon</p>
      </div>
    </a2k-window>`}}rt(ye,"styles",f`
    :host {
      --window-color-background: white;
    }

    .toolbar-row {
      display: flex;
    }

    .toolbar-row > *:nth-child(2) {
      flex: 1;
    }

    a2k-window > a2k-marquee {
      padding: 0;
    }
  `);window.customElements.define("a2k-ie5",ye);class _e extends h{render(){return g` <a2k-window draggable closeable heading="About Andricos2000">
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
      <p>
        The startup music is a reimagining of Madgalena Bay's
        <a
          href="https://www.youtube.com/watch?v=SLdCV3nIiEI"
          target="_blank"
          rel="noreferrer noopener"
          >Mercurial World
        </a>
      </p>
    </a2k-window>`}}rt(_e,"styles",f`
    p {
      margin: 0;
    }
  `);window.customElements.define("a2k-about",_e);var bo=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,et=(o,t,e,r)=>{for(var n=r>1?void 0:r?wo(t,e):t,i=o.length-1,s;i>=0;i--)(s=o[i])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&bo(t,e,n),n};class R extends h{constructor(){super(...arguments),this.height="",this.width="",this.top="",this.left=""}render(){const t=pt({width:this.width,top:this.top,left:this.left}),e=pt({height:this.height});return g`
      <div style=${t} id="outer-wrapper">
        <a2k-panel>
          <div style=${e}></div>
        </a2k-panel>
      </div>
    `}}R.styles=f`
    #outer-wrapper {
      position: absolute;
      display: flex;
    }

    a2k-panel {
      width: 100%;
    }

    a2k-panel > div {
      display: flex;
    }
  `;et([v()],R.prototype,"height",2);et([v()],R.prototype,"width",2);et([v()],R.prototype,"top",2);et([v()],R.prototype,"left",2);window.customElements.define("a2k-broken-window",R);const ke=document.querySelector("body"),yo=new URL("/assets/andricos-2000-startup.774be9be.mp3",self.location),ot=document.querySelector("#windows-container");ke.setAttribute("data-state","waiting");const _o=document.querySelector('a2k-desktop-icon[icon="documents-icon"]');_o.onOpen=()=>{window.location.href="https://andri.co"};const ko=document.querySelector('a2k-desktop-icon[icon="network-icon"]');ko.onOpen=()=>{window.location.href="https://twitter.com/andricokaroulla"};const $o=document.querySelector('a2k-desktop-icon[icon="github-icon"]');$o.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const xo=document.querySelector('a2k-desktop-icon[icon="help-icon"]');xo.onOpen=()=>{const o=document.createElement("a2k-about");ot.append(o)};const Eo=document.querySelector('a2k-desktop-icon[icon="internet-icon"]');Eo.onOpen=()=>{const o=document.createElement("a2k-ie5");ot.append(o)};let Gt=!1;const Ao=o=>{const{target:t,detail:e}=o,{path:r}=e.pointer.nativePointer,n=document.querySelector("a2k-window[heading='Please wait...']");if(!n||!n.isSameNode(t))return;const i=r.find(c=>!c||!c.getAttribute?!1:c.getAttribute("id")==="window"),{width:s,top:a,left:l,height:d}=getComputedStyle(i),p=document.createElement("a2k-broken-window");ot.insertBefore(p,n),p.setAttribute("height",d),p.setAttribute("width",s),p.setAttribute("top",a),p.setAttribute("left",l)};window.addEventListener("startup-progress",o=>{if(!(o.detail.progress<50)&&!Gt){Gt=!0;try{So()}catch{}}});window.addEventListener("startup-progress",o=>{!o.detail.isComplete||(setTimeout(()=>{document.querySelector(".fixed-container").remove(),To(),Po()},300),setTimeout(()=>{ke.removeAttribute("data-state")},500))});function So(){const o=new Audio(yo);o.volume=.3,o.play()}function To(){let o=0;setTimeout(()=>{_t(mo,ot);const t=document.querySelector("a2k-progress"),e=document.querySelector("a2k-window[heading='Please wait...']"),r=setInterval(()=>{if(!!t&&(o=o+1.2,t.setAttribute("progress",o),o>40)){for(;e.firstChild;)e.removeChild(e.lastChild);window.addEventListener("window-drag",Ao),e.innerHTML=`
        <a2k-stack>
          <p>Oh no! We had a problem loading Andricos2000. Don't worry, you can still play around and find some easter eggs.</p>
          </a2k-stack>
        `,clearInterval(r)}},100)},700)}function Po(){const o=document.querySelectorAll("a2k-desktop-icon");setTimeout(()=>{o.forEach(t=>{t.removeAttribute("hidden")})},1200)}
