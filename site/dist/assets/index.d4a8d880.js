var ue=Object.defineProperty;var ge=(i,t,e)=>t in i?ue(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ot=(i,t,e)=>(ge(i,typeof t!="symbol"?t+"":t,e),e);const fe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}};fe();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),Ct=new Map;class Yt{constructor(t,e){if(this._$cssResult$=!0,e!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Ct.get(this.cssText);return ut&&t===void 0&&(Ct.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const ve=i=>new Yt(typeof i=="string"?i:i+"",gt),v=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,n,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new Yt(e,gt)},me=(i,t)=>{ut?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),n=window.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=e.cssText,i.appendChild(o)})},Rt=ut?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return ve(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tt;const jt=window.trustedTypes,be=jt?jt.emptyScript:"",Mt=window.reactiveElementPolyfillSupport,at={toAttribute(i,t){switch(t){case Boolean:i=i?be:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Xt=(i,t)=>t!==i&&(t==t||i==i),et={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:Xt};class A extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const n=this._$Eh(o,e);n!==void 0&&(this._$Eu.set(n,o),t.push(n))}),t}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||et}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of o)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)e.unshift(Rt(n))}else t!==void 0&&e.push(Rt(t));return e}static _$Eh(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return me(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=et){var n,r;const s=this.constructor._$Eh(t,o);if(s!==void 0&&o.reflect===!0){const a=((r=(n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&r!==void 0?r:at.toAttribute)(e,o.type);this._$Ei=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Ei=null}}_$AK(t,e){var o,n,r;const s=this.constructor,a=s._$Eu.get(t);if(a!==void 0&&this._$Ei!==a){const l=s.getPropertyOptions(a),d=l.converter,g=(r=(n=(o=d)===null||o===void 0?void 0:o.fromAttribute)!==null&&n!==void 0?n:typeof d=="function"?d:null)!==null&&r!==void 0?r:at.fromAttribute;this._$Ei=a,this[a]=g(e,l.type),this._$Ei=null}}requestUpdate(t,e,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Xt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,r)=>this[r]=n),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(o)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,o)=>this._$ES(o,this[o],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},Mt==null||Mt({ReactiveElement:A}),((tt=globalThis.reactiveElementVersions)!==null&&tt!==void 0?tt:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ot;const T=globalThis.trustedTypes,Ut=T?T.createPolicy("lit-html",{createHTML:i=>i}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,Ft="?"+k,we=`<${Ft}>`,P=document,z=(i="")=>P.createComment(i),D=i=>i===null||typeof i!="object"&&typeof i!="function",Kt=Array.isArray,ye=i=>{var t;return Kt(i)||typeof((t=i)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,zt=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Dt=/'/g,It=/"/g,Zt=/^(?:script|style|textarea)$/i,Gt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),f=Gt(1),_e=Gt(2),_=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Nt=new WeakMap,Jt=(i,t,e)=>{var o,n;const r=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let s=r._$litPart$;if(s===void 0){const a=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new N(t.insertBefore(z(),a),a,void 0,e!=null?e:{})}return s._$AI(i),s},S=P.createTreeWalker(P,129,null,!1),$e=(i,t)=>{const e=i.length-1,o=[];let n,r=t===2?"<svg>":"",s=U;for(let l=0;l<e;l++){const d=i[l];let g,c,h=-1,m=0;for(;m<d.length&&(s.lastIndex=m,c=s.exec(d),c!==null);)m=s.lastIndex,s===U?c[1]==="!--"?s=Lt:c[1]!==void 0?s=zt:c[2]!==void 0?(Zt.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=E):c[3]!==void 0&&(s=E):s===E?c[0]===">"?(s=n!=null?n:U,h=-1):c[1]===void 0?h=-2:(h=s.lastIndex-c[2].length,g=c[1],s=c[3]===void 0?E:c[3]==='"'?It:Dt):s===It||s===Dt?s=E:s===Lt||s===zt?s=U:(s=E,n=void 0);const x=s===E&&i[l+1].startsWith("/>")?" ":"";r+=s===U?d+we:h>=0?(o.push(g),d.slice(0,h)+"$lit$"+d.slice(h)+k+x):d+k+(h===-2?(o.push(void 0),l):x)}const a=r+(i[e]||"<?>")+(t===2?"</svg>":"");return[Ut!==void 0?Ut.createHTML(a):a,o]};class I{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[d,g]=$e(t,e);if(this.el=I.createElement(d,o),S.currentNode=this.el.content,e===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(n=S.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const h of n.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(k)){const m=g[s++];if(c.push(h),m!==void 0){const x=n.getAttribute(m.toLowerCase()+"$lit$").split(k),w=/([.?@])?(.*)/.exec(m);l.push({type:1,index:r,name:w[2],strings:x,ctor:w[1]==="."?xe:w[1]==="?"?Ae:w[1]==="@"?Se:K})}else l.push({type:6,index:r})}for(const h of c)n.removeAttribute(h)}if(Zt.test(n.tagName)){const c=n.textContent.split(k),h=c.length-1;if(h>0){n.textContent=T?T.emptyScript:"";for(let m=0;m<h;m++)n.append(c[m],z()),S.nextNode(),l.push({type:2,index:++r});n.append(c[h],z())}}}else if(n.nodeType===8)if(n.data===Ft)l.push({type:2,index:r});else{let c=-1;for(;(c=n.data.indexOf(k,c+1))!==-1;)l.push({type:7,index:r}),c+=k.length-1}r++}}static createElement(t,e){const o=P.createElement("template");return o.innerHTML=t,o}}function O(i,t,e=i,o){var n,r,s,a;if(t===_)return t;let l=o!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[o]:e._$Cu;const d=D(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),d===void 0?l=void 0:(l=new d(i),l._$AT(i,e,o)),o!==void 0?((s=(a=e)._$Cl)!==null&&s!==void 0?s:a._$Cl=[])[o]=l:e._$Cu=l),l!==void 0&&(t=O(i,l._$AS(i,t.values),l,o)),t}class ke{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:P).importNode(o,!0);S.currentNode=r;let s=S.nextNode(),a=0,l=0,d=n[0];for(;d!==void 0;){if(a===d.index){let g;d.type===2?g=new N(s,s.nextSibling,this,t):d.type===1?g=new d.ctor(s,d.name,d.strings,this,t):d.type===6&&(g=new Te(s,this,t)),this.v.push(g),d=n[++l]}a!==(d==null?void 0:d.index)&&(s=S.nextNode(),a++)}return r}m(t){let e=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class N{constructor(t,e,o,n){var r;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cg=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),D(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==_&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):ye(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==b&&D(this._$AH)?this._$AA.nextSibling.data=t:this.S(P.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=I.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(o);else{const s=new ke(r,this),a=s.p(this.options);s.m(o),this.S(a),this._$AH=s}}_$AC(t){let e=Nt.get(t.strings);return e===void 0&&Nt.set(t.strings,e=new I(t)),e}M(t){Kt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const r of t)n===e.length?e.push(o=new N(this.A(z()),this.A(z()),this,this.options)):o=e[n],o._$AI(r),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class K{constructor(t,e,o,n,r){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,n){const r=this.strings;let s=!1;if(r===void 0)t=O(this,t,e,0),s=!D(t)||t!==this._$AH&&t!==_,s&&(this._$AH=t);else{const a=t;let l,d;for(t=r[0],l=0;l<r.length-1;l++)d=O(this,a[o+l],e,l),d===_&&(d=this._$AH[l]),s||(s=!D(d)||d!==this._$AH[l]),d===b?t=b:t!==b&&(t+=(d!=null?d:"")+r[l+1]),this._$AH[l]=d}s&&!n&&this.k(t)}k(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class xe extends K{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===b?void 0:t}}const Ee=T?T.emptyScript:"";class Ae extends K{constructor(){super(...arguments),this.type=4}k(t){t&&t!==b?this.element.setAttribute(this.name,Ee):this.element.removeAttribute(this.name)}}class Se extends K{constructor(t,e,o,n,r){super(t,e,o,n,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=O(this,t,e,0))!==null&&o!==void 0?o:b)===_)return;const n=this._$AH,r=t===b&&n!==b||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==b&&(n===b||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class Te{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const Bt=window.litHtmlPolyfillSupport;Bt==null||Bt(I,N),((ot=globalThis.litHtmlVersions)!==null&&ot!==void 0?ot:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var it,rt;class p extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return _}}p.finalized=!0,p._$litElement$=!0,(it=globalThis.litElementHydrateSupport)===null||it===void 0||it.call(globalThis,{LitElement:p});const Ht=globalThis.litElementPolyfillSupport;Ht==null||Ht({LitElement:p});((rt=globalThis.litElementVersions)!==null&&rt!==void 0?rt:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=i=>t=>typeof t=="function"?((e,o)=>(window.customElements.define(e,o),o))(i,t):((e,o)=>{const{kind:n,elements:r}=o;return{kind:n,elements:r,finisher(s){window.customElements.define(e,s)}}})(i,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function u(i){return(t,e)=>e!==void 0?((o,n,r)=>{n.constructor.createProperty(r,o)})(i,t,e):Pe(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Oe(i){return u({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vt=i=>(...t)=>({_$litDirective$:i,values:t});class mt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=vt(class extends mt{constructor(i){var t;if(super(i),i.type!==ft.ATTRIBUTE||i.name!=="style"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const o=i[e];return o==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ut===void 0){this.ut=new Set;for(const o in t)this.ut.add(o);return this.render(t)}this.ut.forEach(o=>{t[o]==null&&(this.ut.delete(o),o.includes("-")?e.removeProperty(o):e[o]="")});for(const o in t){const n=t[o];n!=null&&(this.ut.add(o),o.includes("-")?e.setProperty(o,n):e[o]=n)}return _}});class Ce{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class ${constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:L(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new $(e));if(t.length>0)return t}return[this]}}const L=i=>"pointerId"in i,nt=i=>"changedTouches"in i,Wt=()=>{};class Re{constructor(t,{start:e=()=>!0,move:o=Wt,end:n=Wt,rawUpdates:r=!1,avoidPointerEvents:s=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(L(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const l=new $(a);this.currentPointers.some(d=>d.id===l.id)||!this._triggerPointerStart(l,a)||(L(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerStart(new $(l),a)},this._move=a=>{if(!nt(a)&&(!L(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const l=this.currentPointers.slice(),d=nt(a)?Array.from(a.changedTouches).map(c=>new $(c)):[new $(a)],g=[];for(const c of d){const h=this.currentPointers.findIndex(m=>m.id===c.id);h!==-1&&(g.push(c),this.currentPointers[h]=c)}g.length!==0&&this._moveCallback(l,g,a)},this._triggerPointerEnd=(a,l)=>{if(!nt(l)&&l.buttons&1)return!1;const d=this.currentPointers.findIndex(c=>c.id===a.id);if(d===-1)return!1;this.currentPointers.splice(d,1),this.startPointers.splice(d,1),this._excludeFromButtonsCheck.delete(a.id);const g=!(l.type==="mouseup"||l.type==="touchend"||l.type==="pointerup");return this._endCallback(a,l,g),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new $(a),a))if(L(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerEnd(new $(l),a)},this._startCallback=e,this._moveCallback=o,this._endCallback=n,this._rawUpdates=r&&"onpointerrawupdate"in window,self.PointerEvent&&!s?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}const qt=(i,t)=>i<=t?i:t;var st=globalThis&&globalThis.__classPrivateFieldGet||function(i,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?i!==t||!o:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(i):o?o.value:t.get(i)},dt,ct,ht;const je={initialPosition:{}};class Me extends mt{constructor(t){if(super(t),this.hasInitialised=!1,t.type!==ft.ELEMENT)throw new Error("The `drag` directive must be used on an element")}update(t,e){if(this.hasInitialised)return;const o=t.element,[n,r]=e;o.setAttribute("data-dragging","idle"),n.draggableElement=o,n.pointerTracker=new Re(o,{start(...s){return r.start(...s),o.setAttribute("data-dragging","dragging"),!0},move(...s){r.move(...s)},end(...s){r.end(...s),o.setAttribute("data-dragging","idle")}}),this.hasInitialised=!0}render(t,e){return _}}const Ue=vt(Me);class Le{constructor(t,e=je){this.cursorPositionX=null,this.cursorPositionY=null,this.pointerTracker=null,this.draggableElement=null,this.styles={touchAction:"none",top:"0px",left:"0px"},dt.set(this,(n,r)=>(this.cursorPositionX=Math.floor(n.pageX),this.cursorPositionY=Math.floor(n.pageY),r.target.setAttribute("data-state","dragging"),!0)),ct.set(this,(n,r)=>{const[s]=r,a=new CustomEvent("window-drag",{bubbles:!0,composed:!0,detail:{pointer:s}});window.requestAnimationFrame(()=>(this.host.dispatchEvent(a),this.handleWindowMove(s)))}),ht.set(this,(n,r)=>{r.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this);const{initialPosition:o={}}=e;this.styles={...this.styles,...o}}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}applyDrag(){return this.host.draggable?Ue(this,{start:st(this,dt,"f"),move:st(this,ct,"f"),end:st(this,ht,"f")}):null}updateElPosition(t,e){this.styles={...this.styles,left:t,top:e}}handleWindowMove(t){const e=this.draggableElement;if(!e)return;const{top:o,left:n}=this.styles,r=Number(o==null?void 0:o.replace("px","")),s=Number(n==null?void 0:n.replace("px","")),a=Math.floor(t.pageX),l=Math.floor(t.pageY);if(a!==0&&l!==0&&(a!==this.cursorPositionX||l!==this.cursorPositionY)){const{bottom:d,right:g,width:c,height:h}=e.getBoundingClientRect(),m=qt(screen.availWidth,innerWidth),x=qt(screen.availHeight,innerHeight),w=a-this.cursorPositionX,j=l-this.cursorPositionY,At=r+j<0,St=s+w<0,Tt=d+j>x,Pt=g+w>m,pe=Tt||St||Pt||At;if(this.cursorPositionX=a,this.cursorPositionY=l,pe){if(At){const y=`${s+w}px`;this.updateElPosition(y,"0px")}if(St){const y=`${r+j}px`;this.updateElPosition("0px",y)}if(Tt){const y=`${x-h}px`,M=`${s+w}px`;this.updateElPosition(M,y)}if(Pt){const y=`${r+j}px`,M=`${Math.floor(m-c-2)}px`;this.updateElPosition(M,y)}}else{const y=`${r+j}px`,M=`${s+w}px`;this.updateElPosition(M,y)}this.host.requestUpdate()}}}dt=new WeakMap,ct=new WeakMap,ht=new WeakMap;const q=(i,t=100)=>Math.round(i*t)/t;class Qt extends p{render(){return f`<div id="stack">
      <slot></slot>
    </div>`}}Qt.styles=v`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",Qt);class te extends p{render(){return f` <div id="panel">
      <slot></slot>
    </div>`}}te.styles=v`
    #panel {
      --inset-shadow-padding: 2px;
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
    }
  `;window.customElements.define("a2k-panel",te);class ee extends p{render(){return f`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}ee.styles=v`
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
  `;window.customElements.define("a2k-window-topbar",ee);var oe=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ie=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class Z extends p{constructor(){super(...arguments),this.disabled=!1,this.size="medium"}render(){return f` <button data-size="${this.size}" ?disabled=${this.disabled}>
      <slot></slot>
    </button>`}}Z.styles=v`
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
  `;oe([u({type:Boolean}),ie("design:type",Object)],Z.prototype,"disabled",void 0);oe([u({type:String}),ie("design:type",String)],Z.prototype,"size",void 0);window.customElements.define("a2k-button",Z);var ze=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},De=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};const Ie=new URL("/assets/a2k-icons.1cab8d64.svg",self.location).href;class bt extends p{constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),_e`
      <svg height="1em" width="1em">
        <use href="${Ie}#${this.icon}"></use>
      </svg>
    `}}bt.styles=v`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;ze([u({type:String}),De("design:type",Object)],bt.prototype,"icon",void 0);window.customElements.define("a2k-icon",bt);var Ne=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Be=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class wt extends p{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return f`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}wt.styles=v`
    :host {
      position: absolute;
      right: 2px;
    }

    #icon-wrapper {
      font-size: 8px;
    }
  `;Ne([u({type:Boolean}),Be("design:type",Object)],wt.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",wt);var yt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},_t=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class H extends p{constructor(){super(),this.heading="",this.draggable=!1,this.closeable=!1,this.drag=new Le(this,{initialPosition:{left:"32px",top:"32px"}}),this.addEventListener("close",()=>this.remove())}render(){return f`
      <div id="window" style=${lt(this.drag.styles)}>
        <a2k-panel>
          <div id="topbar-wrapper">
            <div id="draggable" ${this.drag.applyDrag()}>
              <a2k-window-topbar>${this.heading}</a2k-window-topbar>
            </div>
            <a2k-window-actions
              ?closeable="${this.closeable}"
            ></a2k-window-actions>
          </div>
          <a2k-stack>
            <slot></slot>
          </a2k-stack>
        </a2k-panel>
      </div>
    `}}H.styles=v`
    :host([hidden]) {
      display: none;
    }

    ::slotted(*) {
      padding: 0 var(--window-spacing-horizontal);
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
  `;yt([u({type:String}),_t("design:type",Object)],H.prototype,"heading",void 0);yt([u({type:Boolean}),_t("design:type",Object)],H.prototype,"draggable",void 0);yt([u({type:Boolean}),_t("design:type",Object)],H.prototype,"closeable",void 0);window.customElements.define("a2k-window",H);var re=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},He=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let V=class extends p{constructor(){super(...arguments),this.open=!1}render(){return f`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};V.styles=v`
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
  `;re([u(),He("design:type",Object)],V.prototype,"open",void 0);V=re([B("a2k-start-menu-item")],V);var ne=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},We=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let Y=class extends p{constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=f` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;Jt(t,document.body)}render(){const t=String(this.open)==="true";return f`
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
                    Contact
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
              </a2k-stack>
            </div>
          </a2k-panel>
        </div>
      </div>
    `}};Y.styles=v`
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
  `;ne([u(),We("design:type",Object)],Y.prototype,"open",void 0);Y=ne([B("a2k-start-menu")],Y);var se=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},qe=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let X=class extends p{constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return f`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `}};X.styles=v`
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
  `;se([Oe(),qe("design:type",Object)],X.prototype,"_isMenuOpen",void 0);X=se([B("a2k-start-button")],X);var Ve=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let pt=class extends p{constructor(){super(...arguments),this.clock=new Ce(this)}render(){const t=Ye.format(this.clock.value);return f`<div class="utility-bar">${t}</div>`}};pt.styles=v`
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
  `;pt=Ve([B("a2k-utility-bar")],pt);const Ye=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class ae extends p{render(){return f`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}ae.styles=v`
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
  `;window.customElements.define("a2k-taskbar",ae);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=vt(class extends mt{constructor(i){var t;if(super(i),i.type!==ft.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,o;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.et=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.et)===null||e===void 0)&&e.has(r))&&this.st.add(r);return this.render(t)}const n=i.element.classList;this.st.forEach(r=>{r in t||(n.remove(r),this.st.delete(r))});for(const r in t){const s=!!t[r];s===this.st.has(r)||((o=this.et)===null||o===void 0?void 0:o.has(r))||(s?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return _}});var le=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Fe=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let F=class extends p{constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return f`<div class=${Xe(t)} id="unit">
      <div></div>
      <div></div>
    </div>`}};F.styles=v`
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
  `;le([u(),Fe("design:type",String)],F.prototype,"filled",void 0);F=le([B("a2k-progress-unit")],F);var Ke=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ze=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class $t extends p{constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){var a;const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=(a=t.getBoundingClientRect().width)!=null?a:0;if(this.width===e)return;this.width=e;const{gap:o}=getComputedStyle(t),r=Number(o.replace("px",""))+12,s=Math.ceil(e/r);Array(s).fill(0).forEach(()=>{const l=document.createElement("a2k-progress-unit");l.setAttribute("filled","none"),t==null||t.appendChild(l)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,o=Ge(e),n=Math.floor(e);t.forEach((r,s)=>{s<n?r.setAttribute("filled","filled"):s===n&&o>=.5?r.setAttribute("filled","half"):r.setAttribute("filled","none")})}render(){return f`<div id="progress" role="progress"></div>`}}$t.styles=v`
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
  `;Ke([u({type:Number}),Ze("design:type",Object)],$t.prototype,"progress",void 0);const Ge=i=>Math.floor(i%1*10)/10;window.customElements.define("a2k-progress",$t);class de extends p{render(){return f`<div id="desktop">
      <slot />
    </div>`}}de.styles=v`
    #desktop {
      height: 100%;
    }
  `;window.customElements.define("a2k-desktop",de);var kt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},xt=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class W extends p{constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return f` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`}}W.styles=v`
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
  `;kt([u({type:String}),xt("design:type",Object)],W.prototype,"text",void 0);kt([u({type:String}),xt("design:type",Object)],W.prototype,"icon",void 0);kt([u(),xt("design:type",Object)],W.prototype,"onOpen",void 0);window.customElements.define("a2k-desktop-icon",W);class ce extends p{render(){return f`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}ce.styles=v`
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
  `;window.customElements.define("a2k-cover",ce);const Je=(i,t)=>{const e=i/t,o=t/i*100,n=Array(e).fill(o),r=n.length;for(let s=0;s<1e3;s++){const a=Math.floor(Math.random()*r),l=n[a],d=Math.floor(Math.random()*r),g=n[d],c=q(Math.random()*l),h=q(l-c),m=q(g+c);n[a]=h,n[d]=m}return n};var G=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},J=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};const Qe=["Booting Up..."],to=i=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:i});class C extends p{constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.image="",this.footerText="Copyright \u24B8 1999-2000. Andricos2000",this.messages=Qe,this.progress=0}connectedCallback(){super.connectedCallback();const t=50,e=Je(this.startupTime,t);this.intervalRef=setInterval(()=>{var s;const o=(s=e[this.currentStep])!=null?s:0,n=q(this.progress+o),r=to({progress:n,isComplete:n>=100});this.dispatchEvent(r),n>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=n,this.currentStep++)},t)}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return f`
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

            ${this.footerText}
          </a2k-stack>
        </div>
      </a2k-cover>
    `}}C.styles=v`
    :host {
      --progress-unit-background: var(--color-white);

      color: var(--color-white);
      text-align: center;
      font-family: var(--font-primary);
      width: 100%;
    }

    #progress-wrapper {
      max-width: min(600px, 90%);
      margin: 0 auto;
      width: 100%;
    }

    a2k-stack {
      width: 600px;
    }
  `;G([u({type:String}),J("design:type",Object)],C.prototype,"image",void 0);G([u({type:String}),J("design:type",Object)],C.prototype,"footerText",void 0);G([u(),J("design:type",Object)],C.prototype,"messages",void 0);G([u(),J("design:type",Object)],C.prototype,"progress",void 0);window.customElements.define("a2k-startup",C);class he extends p{render(){return f` <a2k-window draggable closeable heading="Internet Explorer 5">
      <div>
        <a2k-icon icon="info-icon"></a2k-icon>
        <p>Coming soon</p>
      </div>
    </a2k-window>`}}Ot(he,"styles",v`
    :host {
      --window-color-background: white;
    }
  `);window.customElements.define("a2k-ie5",he);class eo extends p{render(){return f` <a2k-window draggable closeable heading="About Andricos2000">
      <div>
        <p>Deets coming soon...</p>
      </div>
    </a2k-window>`}}window.customElements.define("a2k-about",eo);var oo=Object.defineProperty,io=Object.getOwnPropertyDescriptor,Q=(i,t,e,o)=>{for(var n=o>1?void 0:o?io(t,e):t,r=i.length-1,s;r>=0;r--)(s=i[r])&&(n=(o?s(t,e,n):s(n))||n);return o&&n&&oo(t,e,n),n};class R extends p{constructor(){super(...arguments),this.height="",this.width="",this.top="",this.left=""}render(){const t=lt({width:this.width,top:this.top,left:this.left}),e=lt({height:this.height});return f`
      <div style=${t} id="outer-wrapper">
        <a2k-panel>
          <div style=${e}></div>
        </a2k-panel>
      </div>
    `}}R.styles=v`
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
  `;Q([u()],R.prototype,"height",2);Q([u()],R.prototype,"width",2);Q([u()],R.prototype,"top",2);Q([u()],R.prototype,"left",2);window.customElements.define("a2k-broken-window",R);const ro=new URL("/assets/andricos-2000-startup.774be9be.mp3",self.location),Et=document.querySelector("#windows-container"),no=document.querySelector('a2k-desktop-icon[icon="documents-icon"]');no.onOpen=()=>{window.location.href="https://andri.co"};const so=document.querySelector('a2k-desktop-icon[icon="network-icon"]');so.onOpen=()=>{window.location.href="https://twitter.com/andricokaroulla"};const ao=document.querySelector('a2k-desktop-icon[icon="github-icon"]');ao.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const lo=document.querySelector('a2k-desktop-icon[icon="help-icon"]');lo.onOpen=()=>{const i=document.createElement("a2k-about");Et.append(i)};const co=document.querySelector('a2k-desktop-icon[icon="internet-icon"]');co.onOpen=()=>{const i=document.createElement("a2k-ie5");Et.append(i)};let Vt=!1;const ho=i=>{const{path:t}=i.detail.pointer.nativePointer,e=document.querySelector("a2k-window[heading='Please wait...']"),o=t.find(d=>!d||!d.getAttribute?!1:d.getAttribute("id")==="window"),{width:n,top:r,left:s,height:a}=getComputedStyle(o),l=document.createElement("a2k-broken-window");Et.insertBefore(l,e),l.setAttribute("height",a),l.setAttribute("width",n),l.setAttribute("top",r),l.setAttribute("left",s)};window.addEventListener("startup-progress",i=>{i.detail.progress<50||Vt||(Vt=!0,po())});window.addEventListener("startup-progress",i=>{!i.detail.isComplete||setTimeout(()=>{document.querySelector(".fixed-container").remove(),uo(),go()},300)});function po(){const i=new Audio(ro);i.volume=.3,i.play()}function uo(){let i=0;setTimeout(()=>{const t=document.querySelector("a2k-window[heading='Please wait...']");t.removeAttribute("hidden");const e=document.querySelector("a2k-progress"),o=setInterval(()=>{if(!!e&&(i=i+1.2,e.setAttribute("progress",i),i>40)){for(;t.firstChild;)t.removeChild(t.lastChild);window.addEventListener("window-drag",ho),t.innerHTML=`
          <p>There was an error loading Andricos2000</p>
          <p>Andricos2000 is still a work in progress, keeping checking back for updates or follow progress on <a href="https://twitter.com/andricokaroulla" target="_blank">Twitter</a></p>
        `,clearInterval(o)}},100)},700)}function go(){const i=document.querySelectorAll("a2k-desktop-icon");setTimeout(()=>{i.forEach(t=>{t.removeAttribute("hidden")})},1200)}
