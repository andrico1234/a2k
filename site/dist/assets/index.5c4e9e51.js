var Se=Object.defineProperty;var Te=(o,t,e)=>t in o?Se(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var nt=(o,t,e)=>(Te(o,typeof t!="symbol"?t+"":t,e),e);const Pe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}};Pe();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_t=Symbol(),It=new WeakMap;class Jt{constructor(t,e,r){if(this._$cssResult$=!0,r!==_t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(yt&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=It.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&It.set(e,t))}return t}toString(){return this.cssText}}const Oe=o=>new Jt(typeof o=="string"?o:o+"",void 0,_t),g=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,n,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[i+1],o[0]);return new Jt(e,o,_t)},Ce=(o,t)=>{yt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),n=window.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,o.appendChild(r)})},Dt=yt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Oe(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var st;const Nt=window.trustedTypes,Re=Nt?Nt.emptyScript:"",qt=window.reactiveElementPolyfillSupport,ft={toAttribute(o,t){switch(t){case Boolean:o=o?Re:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Qt=(o,t)=>t!==o&&(t==t||o==o),at={attribute:!0,type:String,converter:ft,reflect:!1,hasChanged:Qt};class A extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const n=this._$Ep(r,e);n!==void 0&&(this._$Ev.set(n,r),t.push(n))}),t}static createProperty(t,e=at){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||at}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of r)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(Dt(n))}else t!==void 0&&e.push(Dt(t));return e}static _$Ep(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ce(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=at){var n,i;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const a=((i=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&i!==void 0?i:ft.toAttribute)(e,r.type);this._$El=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(t,e){var r,n;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const a=i.getPropertyOptions(s),l=a.converter,d=(n=(r=l==null?void 0:l.fromAttribute)!==null&&r!==void 0?r:typeof l=="function"?l:null)!==null&&n!==void 0?n:ft.fromAttribute;this._$El=s,this[s]=d(e,a.type),this._$El=null}}requestUpdate(t,e,r){let n=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Qt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,i)=>this[i]=n),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(r)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},qt==null||qt({ReactiveElement:A}),((st=globalThis.reactiveElementVersions)!==null&&st!==void 0?st:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lt;const T=globalThis.trustedTypes,Ht=T?T.createPolicy("lit-html",{createHTML:o=>o}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,te="?"+k,je=`<${te}>`,P=document,I=(o="")=>P.createComment(o),D=o=>o===null||typeof o!="object"&&typeof o!="function",ee=Array.isArray,Me=o=>{var t;return ee(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bt=/-->/g,Wt=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Vt=/'/g,Xt=/"/g,oe=/^(?:script|style|textarea|title)$/i,re=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),f=re(1),Le=re(2),y=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Yt=new WeakMap,kt=(o,t,e)=>{var r,n;const i=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let s=i._$litPart$;if(s===void 0){const a=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new q(t.insertBefore(I(),a),a,void 0,e!=null?e:{})}return s._$AI(o),s},S=P.createTreeWalker(P,129,null,!1),Ue=(o,t)=>{const e=o.length-1,r=[];let n,i=t===2?"<svg>":"",s=U;for(let l=0;l<e;l++){const d=o[l];let u,c,p=-1,b=0;for(;b<d.length&&(s.lastIndex=b,c=s.exec(d),c!==null);)b=s.lastIndex,s===U?c[1]==="!--"?s=Bt:c[1]!==void 0?s=Wt:c[2]!==void 0?(oe.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=x):c[3]!==void 0&&(s=x):s===x?c[0]===">"?(s=n!=null?n:U,p=-1):c[1]===void 0?p=-2:(p=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?x:c[3]==='"'?Xt:Vt):s===Xt||s===Vt?s=x:s===Bt||s===Wt?s=U:(s=x,n=void 0);const E=s===x&&o[l+1].startsWith("/>")?" ":"";i+=s===U?d+je:p>=0?(r.push(u),d.slice(0,p)+"$lit$"+d.slice(p)+k+E):d+k+(p===-2?(r.push(void 0),l):E)}const a=i+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ht!==void 0?Ht.createHTML(a):a,r]};class N{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,s=0;const a=t.length-1,l=this.parts,[d,u]=Ue(t,e);if(this.el=N.createElement(d,r),S.currentNode=this.el.content,e===2){const c=this.el.content,p=c.firstChild;p.remove(),c.append(...p.childNodes)}for(;(n=S.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const p of n.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(k)){const b=u[s++];if(c.push(p),b!==void 0){const E=n.getAttribute(b.toLowerCase()+"$lit$").split(k),$=/([.?@])?(.*)/.exec(b);l.push({type:1,index:i,name:$[2],strings:E,ctor:$[1]==="."?Ie:$[1]==="?"?Ne:$[1]==="@"?qe:Z})}else l.push({type:6,index:i})}for(const p of c)n.removeAttribute(p)}if(oe.test(n.tagName)){const c=n.textContent.split(k),p=c.length-1;if(p>0){n.textContent=T?T.emptyScript:"";for(let b=0;b<p;b++)n.append(c[b],I()),S.nextNode(),l.push({type:2,index:++i});n.append(c[p],I())}}}else if(n.nodeType===8)if(n.data===te)l.push({type:2,index:i});else{let c=-1;for(;(c=n.data.indexOf(k,c+1))!==-1;)l.push({type:7,index:i}),c+=k.length-1}i++}}static createElement(t,e){const r=P.createElement("template");return r.innerHTML=t,r}}function O(o,t,e=o,r){var n,i,s,a;if(t===y)return t;let l=r!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[r]:e._$Cu;const d=D(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),d===void 0?l=void 0:(l=new d(o),l._$AT(o,e,r)),r!==void 0?((s=(a=e)._$Cl)!==null&&s!==void 0?s:a._$Cl=[])[r]=l:e._$Cu=l),l!==void 0&&(t=O(o,l._$AS(o,t.values),l,r)),t}class ze{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,i=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:P).importNode(r,!0);S.currentNode=i;let s=S.nextNode(),a=0,l=0,d=n[0];for(;d!==void 0;){if(a===d.index){let u;d.type===2?u=new q(s,s.nextSibling,this,t):d.type===1?u=new d.ctor(s,d.name,d.strings,this,t):d.type===6&&(u=new He(s,this,t)),this.v.push(u),d=n[++l]}a!==(d==null?void 0:d.index)&&(s=S.nextNode(),a++)}return i}m(t){let e=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class q{constructor(t,e,r,n){var i;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=(i=n==null?void 0:n.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),D(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==y&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Me(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==m&&D(this._$AH)?this._$AA.nextSibling.data=t:this.k(P.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=N.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.m(r);else{const s=new ze(i,this),a=s.p(this.options);s.m(r),this.k(a),this._$AH=s}}_$AC(t){let e=Yt.get(t.strings);return e===void 0&&Yt.set(t.strings,e=new N(t)),e}S(t){ee(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new q(this.M(I()),this.M(I()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Z{constructor(t,e,r,n,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const i=this.strings;let s=!1;if(i===void 0)t=O(this,t,e,0),s=!D(t)||t!==this._$AH&&t!==y,s&&(this._$AH=t);else{const a=t;let l,d;for(t=i[0],l=0;l<i.length-1;l++)d=O(this,a[r+l],e,l),d===y&&(d=this._$AH[l]),s||(s=!D(d)||d!==this._$AH[l]),d===m?t=m:t!==m&&(t+=(d!=null?d:"")+i[l+1]),this._$AH[l]=d}s&&!n&&this.C(t)}C(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Ie extends Z{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===m?void 0:t}}const De=T?T.emptyScript:"";class Ne extends Z{constructor(){super(...arguments),this.type=4}C(t){t&&t!==m?this.element.setAttribute(this.name,De):this.element.removeAttribute(this.name)}}class qe extends Z{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){var r;if((t=(r=O(this,t,e,0))!==null&&r!==void 0?r:m)===y)return;const n=this._$AH,i=t===m&&n!==m||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==m&&(n===m||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class He{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const Ft=window.litHtmlPolyfillSupport;Ft==null||Ft(N,q),((lt=globalThis.litHtmlVersions)!==null&&lt!==void 0?lt:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dt,ct;class h extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return y}}h.finalized=!0,h._$litElement$=!0,(dt=globalThis.litElementHydrateSupport)===null||dt===void 0||dt.call(globalThis,{LitElement:h});const Kt=globalThis.litElementPolyfillSupport;Kt==null||Kt({LitElement:h});((ct=globalThis.litElementVersions)!==null&&ct!==void 0?ct:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=o=>t=>typeof t=="function"?((e,r)=>(window.customElements.define(e,r),r))(o,t):((e,r)=>{const{kind:n,elements:i}=r;return{kind:n,elements:i,finisher(s){window.customElements.define(e,s)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function v(o){return(t,e)=>e!==void 0?((r,n,i)=>{n.constructor.createProperty(i,r)})(o,t,e):Be(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function We(o){return v({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=({finisher:o,descriptor:t})=>(e,r)=>{var n;if(r===void 0){const i=(n=e.originalKey)!==null&&n!==void 0?n:e.key,s=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(e.key)}:{...e,key:i};return o!=null&&(s.finisher=function(a){o(a,i)}),s}{const i=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),o==null||o(i,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ne(o,t){return ie({descriptor:e=>{const r={get(){var n,i;return(i=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const n=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var i,s;return this[n]===void 0&&(this[n]=(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(o))!==null&&s!==void 0?s:null),this[n]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ht;const Ve=((ht=window.HTMLSlotElement)===null||ht===void 0?void 0:ht.prototype.assignedElements)!=null?(o,t)=>o.assignedElements(t):(o,t)=>o.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function Xe(o){const{slot:t,selector:e}=o!=null?o:{};return ie({descriptor:r=>({get(){var n;const i="slot"+(t?`[name=${t}]`:":not([name])"),s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i),a=s!=null?Ve(s,o):[];return e?a.filter(l=>l.matches(e)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xt=o=>(...t)=>({_$litDirective$:o,values:t});class Et{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=xt(class extends Et{constructor(o){var t;if(super(o),o.type!==$t.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const r=o[e];return r==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ct===void 0){this.ct=new Set;for(const r in t)this.ct.add(r);return this.render(t)}this.ct.forEach(r=>{t[r]==null&&(this.ct.delete(r),r.includes("-")?e.removeProperty(r):e[r]="")});for(const r in t){const n=t[r];n!=null&&(this.ct.add(r),r.includes("-")?e.setProperty(r,n):e[r]=n)}return y}});class Ye{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class _{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:z(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new _(e));if(t.length>0)return t}return[this]}}const z=o=>"pointerId"in o,pt=o=>"changedTouches"in o,Gt=()=>{};class Fe{constructor(t,{start:e=()=>!0,move:r=Gt,end:n=Gt,rawUpdates:i=!1,avoidPointerEvents:s=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(z(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const l=new _(a);this.currentPointers.some(d=>d.id===l.id)||!this._triggerPointerStart(l,a)||(z(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerStart(new _(l),a)},this._move=a=>{if(!pt(a)&&(!z(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const l=this.currentPointers.slice(),d=pt(a)?Array.from(a.changedTouches).map(c=>new _(c)):[new _(a)],u=[];for(const c of d){const p=this.currentPointers.findIndex(b=>b.id===c.id);p!==-1&&(u.push(c),this.currentPointers[p]=c)}u.length!==0&&this._moveCallback(l,u,a)},this._triggerPointerEnd=(a,l)=>{if(!pt(l)&&l.buttons&1)return!1;const d=this.currentPointers.findIndex(c=>c.id===a.id);if(d===-1)return!1;this.currentPointers.splice(d,1),this.startPointers.splice(d,1),this._excludeFromButtonsCheck.delete(a.id);const u=!(l.type==="mouseup"||l.type==="touchend"||l.type==="pointerup");return this._endCallback(a,l,u),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new _(a),a))if(z(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerEnd(new _(l),a)},this._startCallback=e,this._moveCallback=r,this._endCallback=n,this._rawUpdates=i&&"onpointerrawupdate"in window,self.PointerEvent&&!s?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}const gt=(o,t)=>o<=t?o:t;var ut=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},vt,mt,bt;const Ke={initialPosition:{}};class Ge extends Et{constructor(t){if(super(t),this.hasInitialised=!1,t.type!==$t.ELEMENT)throw new Error("The `drag` directive must be used on an element")}update(t,e){if(this.hasInitialised)return;const r=t.element,[n,i]=e;r.setAttribute("data-dragging","idle"),n.draggableElement=r,n.pointerTracker=new Fe(r,{start(...s){return i.start(...s),r.setAttribute("data-dragging","dragging"),!0},move(...s){i.move(...s)},end(...s){i.end(...s),r.setAttribute("data-dragging","idle")}}),this.hasInitialised=!0}render(t,e){return y}}const Ze=xt(Ge);class Je{constructor(t,e=Ke){this.cursorPositionX=null,this.cursorPositionY=null,this.pointerTracker=null,this.draggableElement=null,this.containerElement=null,this.containerId="",this.styles={touchAction:"none",top:"0px",left:"0px"},vt.set(this,(i,s)=>(this.cursorPositionX=Math.floor(i.pageX),this.cursorPositionY=Math.floor(i.pageY),s.target.setAttribute("data-state","dragging"),!0)),mt.set(this,(i,s)=>{const[a]=s,l=new CustomEvent("window-drag",{bubbles:!0,composed:!0,detail:{pointer:a}});window.requestAnimationFrame(()=>(this.host.dispatchEvent(l),this.handleWindowMove(a)))}),bt.set(this,(i,s)=>{s.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this);const{initialPosition:r={},containerId:n=""}=e;this.styles={...this.styles,...r},this.containerId=n}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}applyDrag(){return this.host.draggable?Ze(this,{start:ut(this,vt,"f"),move:ut(this,mt,"f"),end:ut(this,bt,"f")}):null}updateElPosition(t,e){this.styles={...this.styles,left:t,top:e}}handleWindowMove(t){var u;const e=this.draggableElement,r=(u=this.host.shadowRoot)==null?void 0:u.querySelector(this.containerId);if(!e||!r)return;const{top:n,left:i}=this.styles,s=Number(n==null?void 0:n.replace("px","")),a=Number(i==null?void 0:i.replace("px","")),l=Math.floor(t.pageX),d=Math.floor(t.pageY);if(l!==this.cursorPositionX||d!==this.cursorPositionY){const{bottom:c,height:p}=e.getBoundingClientRect(),{right:b,width:E}=r.getBoundingClientRect(),$=gt(screen.availWidth,innerWidth),jt=gt(screen.availHeight,innerHeight),j=l-this.cursorPositionX,M=d-this.cursorPositionY,Mt=s+M<0,Lt=a+j<0,Ut=c+M>jt,zt=b+j>=$,Ae=Ut||Lt||zt||Mt;if(this.cursorPositionX=l,this.cursorPositionY=d,Ae){if(Mt){const w=`${a+j}px`;this.updateElPosition(w,"0px")}else if(Lt){const w=`${s+M}px`;this.updateElPosition("0px",w)}else if(Ut){const w=`${jt-p}px`,L=`${a+j}px`;this.updateElPosition(L,w)}else if(zt){const w=`${s+M}px`,L=`${Math.floor($-E)}px`;this.updateElPosition(L,w)}}else{const w=`${s+M}px`,L=`${a+j}px`;this.updateElPosition(L,w)}this.host.requestUpdate()}}}vt=new WeakMap,mt=new WeakMap,bt=new WeakMap;const V=(o,t=100)=>Math.round(o*t)/t;class se extends h{render(){return f`<div id="stack">
      <slot></slot>
    </div>`}}se.styles=g`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",se);class ae extends h{render(){return f` <div id="panel">
      <slot></slot>
    </div>`}}ae.styles=g`
    #panel {
      --inset-shadow-padding: 2px;
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
    }
  `;window.customElements.define("a2k-panel",ae);class le extends h{render(){return f`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}le.styles=g`
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
  `;window.customElements.define("a2k-window-topbar",le);var de=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},ce=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class J extends h{constructor(){super(...arguments),this.disabled=!1,this.size="medium"}render(){return f` <button data-size="${this.size}" ?disabled=${this.disabled}>
      <slot></slot>
    </button>`}}J.styles=g`
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
  `;de([v({type:Boolean}),ce("design:type",Object)],J.prototype,"disabled",void 0);de([v({type:String}),ce("design:type",String)],J.prototype,"size",void 0);window.customElements.define("a2k-button",J);var Qe=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},to=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};const eo=new URL("/assets/a2k-icons.100a148a.svg",self.location).href;class At extends h{constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),Le`
      <svg height="1em" width="1em">
        <use href="${eo}#${this.icon}"></use>
      </svg>
    `}}At.styles=g`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;Qe([v({type:String}),to("design:type",Object)],At.prototype,"icon",void 0);window.customElements.define("a2k-icon",At);var oo=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},ro=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class St extends h{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return f`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}St.styles=g`
    :host {
      position: absolute;
      right: 2px;
    }

    #icon-wrapper {
      font-size: 8px;
    }
  `;oo([v({type:Boolean}),ro("design:type",Object)],St.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",St);var Tt=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},Pt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class B extends h{constructor(){super(),this.heading="",this.draggable=!1,this.closeable=!1,this.drag=new Je(this,{initialPosition:{left:"32px",top:"32px"},containerId:"#window"}),this.addEventListener("close",()=>this.remove())}firstUpdated(){const{left:t}=this.drag.styles,{offsetWidth:e}=this.renderRoot.querySelector("#window"),r=gt(screen.availWidth,innerWidth);Number(t==null?void 0:t.replace("px",""))+e>r&&(this.drag.styles={...this.drag.styles,left:"0px"},this.requestUpdate())}render(){return f`
      <div id="window" style=${X(this.drag.styles)}>
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
    `}}B.styles=g`
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
  `;Tt([v({type:String}),Pt("design:type",Object)],B.prototype,"heading",void 0);Tt([v({type:Boolean}),Pt("design:type",Object)],B.prototype,"draggable",void 0);Tt([v({type:Boolean}),Pt("design:type",Object)],B.prototype,"closeable",void 0);window.customElements.define("a2k-window",B);class he extends h{render(){return f`<div id="toolbar">
        <slot></slot>
      </div>
      <div id="separator"></div>`}}he.styles=g`
    #toolbar {
      border-color: var(--color-gray-300) var(--color-gray-700)
        var(--color-gray-700) var(--color-gray-300);
      border-width: 2px;
      border-style: solid;
    }

    #separator {
      border-bottom: 5px solid var(--color-gray-400);
    }
  `;window.customElements.define("a2k-window-toolbar",he);class pe extends h{render(){return f`<div id="item">
      <slot></slot>
    </div>`}}pe.styles=g`
    #item {
      border-color: var(--color-gray-700) var(--color-gray-300)
        var(--color-gray-300) var(--color-gray-700);
      border-width: var(--border-width);
      border-style: solid;
      padding: var(--spacing-50);
      background-color: var(--window-toolbar-item-color-background);
    }
  `;window.customElements.define("a2k-window-toolbar-item",pe);var ue=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},io=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let Y=class extends h{constructor(){super(...arguments),this.open=!1}render(){return f`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};Y.styles=g`
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
  `;ue([v(),io("design:type",Object)],Y.prototype,"open",void 0);Y=ue([H("a2k-start-menu-item")],Y);var fe=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},no=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let F=class extends h{constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=f` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;kt(t,document.body)}handleShutdownClick(){location.reload()}render(){const t=String(this.open)==="true";return f`
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
    `}};F.styles=g`
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
  `;fe([v(),no("design:type",Object)],F.prototype,"open",void 0);F=fe([H("a2k-start-menu")],F);var ge=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},so=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let K=class extends h{constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return f`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `}};K.styles=g`
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
  `;ge([We(),so("design:type",Object)],K.prototype,"_isMenuOpen",void 0);K=ge([H("a2k-start-button")],K);var ao=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i};let wt=class extends h{constructor(){super(...arguments),this.clock=new Ye(this)}render(){const t=lo.format(this.clock.value);return f`<div class="utility-bar">${t}</div>`}};wt.styles=g`
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
  `;wt=ao([H("a2k-utility-bar")],wt);const lo=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class ve extends h{render(){return f`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}ve.styles=g`
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
  `;window.customElements.define("a2k-taskbar",ve);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const co=xt(class extends Et{constructor(o){var t;if(super(o),o.type!==$t.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,r;if(this.et===void 0){this.et=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((e=this.st)===null||e===void 0)&&e.has(i))&&this.et.add(i);return this.render(t)}const n=o.element.classList;this.et.forEach(i=>{i in t||(n.remove(i),this.et.delete(i))});for(const i in t){const s=!!t[i];s===this.et.has(i)||((r=this.st)===null||r===void 0?void 0:r.has(i))||(s?(n.add(i),this.et.add(i)):(n.remove(i),this.et.delete(i)))}return y}});var me=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},ho=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let G=class extends h{constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return f`<div class=${co(t)} id="unit">
      <div></div>
      <div></div>
    </div>`}};G.styles=g`
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
  `;me([v(),ho("design:type",String)],G.prototype,"filled",void 0);G=me([H("a2k-progress-unit")],G);var po=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},uo=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Ot extends h{constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){var a;const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=(a=t.getBoundingClientRect().width)!=null?a:0;if(this.width===e)return;this.width=e;const{gap:r}=getComputedStyle(t),i=Number(r.replace("px",""))+12,s=Math.ceil(e/i);Array(s).fill(0).forEach(()=>{const l=document.createElement("a2k-progress-unit");l.setAttribute("filled","none"),t==null||t.appendChild(l)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,r=fo(e),n=Math.floor(e);t.forEach((i,s)=>{s<n?i.setAttribute("filled","filled"):s===n&&r>=.5?i.setAttribute("filled","half"):i.setAttribute("filled","none")})}render(){return f`<div id="progress" role="progress"></div>`}}Ot.styles=g`
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
  `;po([v({type:Number}),uo("design:type",Object)],Ot.prototype,"progress",void 0);const fo=o=>Math.floor(o%1*10)/10;window.customElements.define("a2k-progress",Ot);class go extends h{render(){return console.log("booo"),f`<input type="text" />`}}window.customElements.define("a2k-text-field",go);var be=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},we=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Q extends h{constructor(){super(...arguments),this.slotHeightStyles={height:"0px"}}firstUpdated(){const t=getComputedStyle(this.desktopContainer).height;this.slotHeightStyles={height:t}}render(){return f`<div id="desktop">
      <slot id="slot" style=${X(this.slotHeightStyles)}></slot>
    </div>`}}Q.styles=g`
    #desktop {
      height: 100%;
    }

    #desktop > slot {
      display: flex;
      flex-flow: column wrap;
      width: fit-content;
    }
  `;be([v(),we("design:type",Object)],Q.prototype,"slotHeightStyles",void 0);be([ne("#desktop"),we("design:type",HTMLSlotElement)],Q.prototype,"desktopContainer",void 0);window.customElements.define("a2k-desktop",Q);var Ct=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},Rt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class W extends h{constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return f` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`}}W.styles=g`
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
  `;Ct([v({type:String}),Rt("design:type",Object)],W.prototype,"text",void 0);Ct([v({type:String}),Rt("design:type",Object)],W.prototype,"icon",void 0);Ct([v(),Rt("design:type",Object)],W.prototype,"onOpen",void 0);window.customElements.define("a2k-desktop-icon",W);class ye extends h{render(){return f`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}ye.styles=g`
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
  `;window.customElements.define("a2k-cover",ye);const vo=(o,t)=>{const e=o/t,r=t/o*100,n=Array(e).fill(r),i=n.length;for(let s=0;s<1e3;s++){const a=Math.floor(Math.random()*i),l=n[a],d=Math.floor(Math.random()*i),u=n[d],c=V(Math.random()*l),p=V(l-c),b=V(u+c);n[a]=p,n[d]=b}return n};var tt=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},et=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};const mo=["Booting Up..."],bo=o=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:o});class C extends h{constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.image="",this.footerText="Copyright \u24B8 1999-2000. Andricos2000",this.messages=mo,this.progress=0}connectedCallback(){super.connectedCallback();const t=50,e=vo(this.startupTime,t);this.intervalRef=setInterval(()=>{var s;const r=(s=e[this.currentStep])!=null?s:0,n=V(this.progress+r),i=bo({progress:n,isComplete:n>=100});this.dispatchEvent(i),n>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=n,this.currentStep++)},t)}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return f`
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
    `}}C.styles=g`
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
  `;tt([v({type:String}),et("design:type",Object)],C.prototype,"image",void 0);tt([v({type:String}),et("design:type",Object)],C.prototype,"footerText",void 0);tt([v(),et("design:type",Object)],C.prototype,"messages",void 0);tt([v(),et("design:type",Object)],C.prototype,"progress",void 0);window.customElements.define("a2k-startup",C);var _e=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},ke=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class ot extends h{firstUpdated(){const[t]=this.slotEl,e=t.cloneNode(!0);this.marqueeWrapperEl.appendChild(e)}render(){return f`<div id="marquee">
      <div id="marquee-inner-1">
        <slot name="text"></slot>
      </div>
      <div id="marquee-inner-2"></div>
    </div>`}}ot.styles=g`
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
  `;_e([Xe({slot:"text"}),ke("design:type",Array)],ot.prototype,"slotEl",void 0);_e([ne("#marquee-inner-2"),ke("design:type",HTMLElement)],ot.prototype,"marqueeWrapperEl",void 0);window.customElements.define("a2k-marquee",ot);const wo=f`
  <a2k-window heading="Please wait..." draggable closeable>
    <p class="heading">Andricos<span>2000</span></p>
    <p>Andricos2000 is starting up...</p>
    <a2k-progress></a2k-progress>
  </a2k-window>
`;class $e extends h{render(){return f` <a2k-window draggable closeable heading="Internet Explorer 5">
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
    </a2k-window>`}}nt($e,"styles",g`
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
  `);window.customElements.define("a2k-ie5",$e);class xe extends h{render(){return f` <a2k-window draggable closeable heading="About Andricos2000">
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
    </a2k-window>`}}nt(xe,"styles",g`
    p {
      margin: 0;
    }
  `);window.customElements.define("a2k-about",xe);var yo=Object.defineProperty,_o=Object.getOwnPropertyDescriptor,rt=(o,t,e,r)=>{for(var n=r>1?void 0:r?_o(t,e):t,i=o.length-1,s;i>=0;i--)(s=o[i])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&yo(t,e,n),n};class R extends h{constructor(){super(...arguments),this.height="",this.width="",this.top="",this.left=""}render(){const t=X({width:this.width,top:this.top,left:this.left}),e=X({height:this.height});return f`
      <div style=${t} id="outer-wrapper">
        <a2k-panel>
          <div style=${e}></div>
        </a2k-panel>
      </div>
    `}}R.styles=g`
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
  `;rt([v()],R.prototype,"height",2);rt([v()],R.prototype,"width",2);rt([v()],R.prototype,"top",2);rt([v()],R.prototype,"left",2);window.customElements.define("a2k-broken-window",R);const Ee=document.querySelector("body"),ko=new URL("/assets/andricos-2000-startup.774be9be.mp3",self.location),it=document.querySelector("#windows-container");Ee.setAttribute("data-state","waiting");const $o=document.querySelector('a2k-desktop-icon[icon="documents-icon"]');$o.onOpen=()=>{window.location.href="https://andri.co"};const xo=document.querySelector('a2k-desktop-icon[icon="network-icon"]');xo.onOpen=()=>{window.location.href="https://twitter.com/andricokaroulla"};const Eo=document.querySelector('a2k-desktop-icon[icon="github-icon"]');Eo.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const Ao=document.querySelector('a2k-desktop-icon[icon="help-icon"]');Ao.onOpen=()=>{const o=document.createElement("a2k-about");it.append(o)};const So=document.querySelector('a2k-desktop-icon[icon="internet-icon"]');So.onOpen=()=>{const o=document.createElement("a2k-ie5");it.append(o)};let Zt=!1;const To=o=>{const{target:t,detail:e}=o,{path:r}=e.pointer.nativePointer,n=document.querySelector("a2k-window[heading='Please wait...']");if(!n||!n.isSameNode(t))return;const i=r.find(c=>!c||!c.getAttribute?!1:c.getAttribute("id")==="window"),{width:s,top:a,left:l,height:d}=getComputedStyle(i),u=document.createElement("a2k-broken-window");it.insertBefore(u,n),u.setAttribute("height",d),u.setAttribute("width",s),u.setAttribute("top",a),u.setAttribute("left",l)};window.addEventListener("startup-progress",o=>{if(!(o.detail.progress<50)&&!Zt){Zt=!0;try{Po()}catch{}}});window.addEventListener("startup-progress",o=>{!o.detail.isComplete||(setTimeout(()=>{document.querySelector(".fixed-container").remove(),Oo(),Co()},300),setTimeout(()=>{Ee.removeAttribute("data-state")},500))});function Po(){const o=new Audio(ko);o.volume=.3,o.play()}function Oo(){let o=0;setTimeout(()=>{kt(wo,it);const t=document.querySelector("a2k-progress"),e=document.querySelector("a2k-window[heading='Please wait...']"),r=setInterval(()=>{if(!!t&&(o=o+1.2,t.setAttribute("progress",o),o>40)){for(;e.firstChild;)e.removeChild(e.lastChild);window.addEventListener("window-drag",To),e.innerHTML=`
        <a2k-stack>
          <p>Oh no! We had a problem loading Andricos2000. Don't worry, you can still play around and find some easter eggs.</p>
          </a2k-stack>
        `,clearInterval(r)}},100)},700)}function Co(){const o=document.querySelectorAll("a2k-desktop-icon");setTimeout(()=>{o.forEach(t=>{t.removeAttribute("hidden")})},1200)}
