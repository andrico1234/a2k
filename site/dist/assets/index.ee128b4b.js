var fe=Object.defineProperty;var ve=(i,t,e)=>t in i?fe(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ut=(i,t,e)=>(ve(i,typeof t!="symbol"?t+"":t,e),e);const me=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}};me();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mt=Symbol(),Mt=new Map;class Kt{constructor(t,e){if(this._$cssResult$=!0,e!==mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Mt.get(this.cssText);return vt&&t===void 0&&(Mt.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const be=i=>new Kt(typeof i=="string"?i:i+"",mt),v=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,n,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new Kt(e,mt)},we=(i,t)=>{vt?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),n=window.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=e.cssText,i.appendChild(o)})},Lt=vt?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return be(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ot;const zt=window.trustedTypes,ye=zt?zt.emptyScript:"",Dt=window.reactiveElementPolyfillSupport,dt={toAttribute(i,t){switch(t){case Boolean:i=i?ye:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Zt=(i,t)=>t!==i&&(t==t||i==i),it={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:Zt};class A extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const n=this._$Eh(o,e);n!==void 0&&(this._$Eu.set(n,o),t.push(n))}),t}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||it}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of o)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)e.unshift(Lt(n))}else t!==void 0&&e.push(Lt(t));return e}static _$Eh(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return we(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=it){var n,r;const s=this.constructor._$Eh(t,o);if(s!==void 0&&o.reflect===!0){const a=((r=(n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&r!==void 0?r:dt.toAttribute)(e,o.type);this._$Ei=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Ei=null}}_$AK(t,e){var o,n,r;const s=this.constructor,a=s._$Eu.get(t);if(a!==void 0&&this._$Ei!==a){const l=s.getPropertyOptions(a),d=l.converter,h=(r=(n=(o=d)===null||o===void 0?void 0:o.fromAttribute)!==null&&n!==void 0?n:typeof d=="function"?d:null)!==null&&r!==void 0?r:dt.fromAttribute;this._$Ei=a,this[a]=h(e,l.type),this._$Ei=null}}requestUpdate(t,e,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Zt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,r)=>this[r]=n),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(o)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,o)=>this._$ES(o,this[o],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},Dt==null||Dt({ReactiveElement:A}),((ot=globalThis.reactiveElementVersions)!==null&&ot!==void 0?ot:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rt;const T=globalThis.trustedTypes,It=T?T.createPolicy("lit-html",{createHTML:i=>i}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,Gt="?"+$,_e=`<${Gt}>`,P=document,D=(i="")=>P.createComment(i),I=i=>i===null||typeof i!="object"&&typeof i!="function",Jt=Array.isArray,$e=i=>{var t;return Jt(i)||typeof((t=i)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nt=/-->/g,Bt=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Ht=/'/g,Wt=/"/g,Qt=/^(?:script|style|textarea)$/i,te=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),f=te(1),ke=te(2),y=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),qt=new WeakMap,bt=(i,t,e)=>{var o,n;const r=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let s=r._$litPart$;if(s===void 0){const a=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new B(t.insertBefore(D(),a),a,void 0,e!=null?e:{})}return s._$AI(i),s},S=P.createTreeWalker(P,129,null,!1),xe=(i,t)=>{const e=i.length-1,o=[];let n,r=t===2?"<svg>":"",s=L;for(let l=0;l<e;l++){const d=i[l];let h,c,p=-1,b=0;for(;b<d.length&&(s.lastIndex=b,c=s.exec(d),c!==null);)b=s.lastIndex,s===L?c[1]==="!--"?s=Nt:c[1]!==void 0?s=Bt:c[2]!==void 0?(Qt.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=x):c[3]!==void 0&&(s=x):s===x?c[0]===">"?(s=n!=null?n:L,p=-1):c[1]===void 0?p=-2:(p=s.lastIndex-c[2].length,h=c[1],s=c[3]===void 0?x:c[3]==='"'?Wt:Ht):s===Wt||s===Ht?s=x:s===Nt||s===Bt?s=L:(s=x,n=void 0);const E=s===x&&i[l+1].startsWith("/>")?" ":"";r+=s===L?d+_e:p>=0?(o.push(h),d.slice(0,p)+"$lit$"+d.slice(p)+$+E):d+$+(p===-2?(o.push(void 0),l):E)}const a=r+(i[e]||"<?>")+(t===2?"</svg>":"");return[It!==void 0?It.createHTML(a):a,o]};class N{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[d,h]=xe(t,e);if(this.el=N.createElement(d,o),S.currentNode=this.el.content,e===2){const c=this.el.content,p=c.firstChild;p.remove(),c.append(...p.childNodes)}for(;(n=S.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const p of n.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith($)){const b=h[s++];if(c.push(p),b!==void 0){const E=n.getAttribute(b.toLowerCase()+"$lit$").split($),k=/([.?@])?(.*)/.exec(b);l.push({type:1,index:r,name:k[2],strings:E,ctor:k[1]==="."?Ae:k[1]==="?"?Te:k[1]==="@"?Pe:Z})}else l.push({type:6,index:r})}for(const p of c)n.removeAttribute(p)}if(Qt.test(n.tagName)){const c=n.textContent.split($),p=c.length-1;if(p>0){n.textContent=T?T.emptyScript:"";for(let b=0;b<p;b++)n.append(c[b],D()),S.nextNode(),l.push({type:2,index:++r});n.append(c[p],D())}}}else if(n.nodeType===8)if(n.data===Gt)l.push({type:2,index:r});else{let c=-1;for(;(c=n.data.indexOf($,c+1))!==-1;)l.push({type:7,index:r}),c+=$.length-1}r++}}static createElement(t,e){const o=P.createElement("template");return o.innerHTML=t,o}}function O(i,t,e=i,o){var n,r,s,a;if(t===y)return t;let l=o!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[o]:e._$Cu;const d=I(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),d===void 0?l=void 0:(l=new d(i),l._$AT(i,e,o)),o!==void 0?((s=(a=e)._$Cl)!==null&&s!==void 0?s:a._$Cl=[])[o]=l:e._$Cu=l),l!==void 0&&(t=O(i,l._$AS(i,t.values),l,o)),t}class Ee{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:P).importNode(o,!0);S.currentNode=r;let s=S.nextNode(),a=0,l=0,d=n[0];for(;d!==void 0;){if(a===d.index){let h;d.type===2?h=new B(s,s.nextSibling,this,t):d.type===1?h=new d.ctor(s,d.name,d.strings,this,t):d.type===6&&(h=new Oe(s,this,t)),this.v.push(h),d=n[++l]}a!==(d==null?void 0:d.index)&&(s=S.nextNode(),a++)}return r}m(t){let e=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class B{constructor(t,e,o,n){var r;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cg=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),I(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==y&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):$e(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==m&&I(this._$AH)?this._$AA.nextSibling.data=t:this.S(P.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=N.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(o);else{const s=new Ee(r,this),a=s.p(this.options);s.m(o),this.S(a),this._$AH=s}}_$AC(t){let e=qt.get(t.strings);return e===void 0&&qt.set(t.strings,e=new N(t)),e}M(t){Jt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const r of t)n===e.length?e.push(o=new B(this.A(D()),this.A(D()),this,this.options)):o=e[n],o._$AI(r),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Z{constructor(t,e,o,n,r){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,n){const r=this.strings;let s=!1;if(r===void 0)t=O(this,t,e,0),s=!I(t)||t!==this._$AH&&t!==y,s&&(this._$AH=t);else{const a=t;let l,d;for(t=r[0],l=0;l<r.length-1;l++)d=O(this,a[o+l],e,l),d===y&&(d=this._$AH[l]),s||(s=!I(d)||d!==this._$AH[l]),d===m?t=m:t!==m&&(t+=(d!=null?d:"")+r[l+1]),this._$AH[l]=d}s&&!n&&this.k(t)}k(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Ae extends Z{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===m?void 0:t}}const Se=T?T.emptyScript:"";class Te extends Z{constructor(){super(...arguments),this.type=4}k(t){t&&t!==m?this.element.setAttribute(this.name,Se):this.element.removeAttribute(this.name)}}class Pe extends Z{constructor(t,e,o,n,r){super(t,e,o,n,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=O(this,t,e,0))!==null&&o!==void 0?o:m)===y)return;const n=this._$AH,r=t===m&&n!==m||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==m&&(n===m||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class Oe{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const Vt=window.litHtmlPolyfillSupport;Vt==null||Vt(N,B),((rt=globalThis.litHtmlVersions)!==null&&rt!==void 0?rt:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nt,st;class u extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return y}}u.finalized=!0,u._$litElement$=!0,(nt=globalThis.litElementHydrateSupport)===null||nt===void 0||nt.call(globalThis,{LitElement:u});const Yt=globalThis.litElementPolyfillSupport;Yt==null||Yt({LitElement:u});((st=globalThis.litElementVersions)!==null&&st!==void 0?st:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=i=>t=>typeof t=="function"?((e,o)=>(window.customElements.define(e,o),o))(i,t):((e,o)=>{const{kind:n,elements:r}=o;return{kind:n,elements:r,finisher(s){window.customElements.define(e,s)}}})(i,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function g(i){return(t,e)=>e!==void 0?((o,n,r)=>{n.constructor.createProperty(r,o)})(i,t,e):Ce(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Re(i){return g({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yt=i=>(...t)=>({_$litDirective$:i,values:t});class _t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=yt(class extends _t{constructor(i){var t;if(super(i),i.type!==wt.ATTRIBUTE||i.name!=="style"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const o=i[e];return o==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ut===void 0){this.ut=new Set;for(const o in t)this.ut.add(o);return this.render(t)}this.ut.forEach(o=>{t[o]==null&&(this.ut.delete(o),o.includes("-")?e.removeProperty(o):e[o]="")});for(const o in t){const n=t[o];n!=null&&(this.ut.add(o),o.includes("-")?e.setProperty(o,n):e[o]=n)}return y}});class je{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class _{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:z(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new _(e));if(t.length>0)return t}return[this]}}const z=i=>"pointerId"in i,at=i=>"changedTouches"in i,Xt=()=>{};class Ue{constructor(t,{start:e=()=>!0,move:o=Xt,end:n=Xt,rawUpdates:r=!1,avoidPointerEvents:s=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(z(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const l=new _(a);this.currentPointers.some(d=>d.id===l.id)||!this._triggerPointerStart(l,a)||(z(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerStart(new _(l),a)},this._move=a=>{if(!at(a)&&(!z(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const l=this.currentPointers.slice(),d=at(a)?Array.from(a.changedTouches).map(c=>new _(c)):[new _(a)],h=[];for(const c of d){const p=this.currentPointers.findIndex(b=>b.id===c.id);p!==-1&&(h.push(c),this.currentPointers[p]=c)}h.length!==0&&this._moveCallback(l,h,a)},this._triggerPointerEnd=(a,l)=>{if(!at(l)&&l.buttons&1)return!1;const d=this.currentPointers.findIndex(c=>c.id===a.id);if(d===-1)return!1;this.currentPointers.splice(d,1),this.startPointers.splice(d,1),this._excludeFromButtonsCheck.delete(a.id);const h=!(l.type==="mouseup"||l.type==="touchend"||l.type==="pointerup");return this._endCallback(a,l,h),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new _(a),a))if(z(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerEnd(new _(l),a)},this._startCallback=e,this._moveCallback=o,this._endCallback=n,this._rawUpdates=r&&"onpointerrawupdate"in window,self.PointerEvent&&!s?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}const ht=(i,t)=>i<=t?i:t;var lt=globalThis&&globalThis.__classPrivateFieldGet||function(i,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?i!==t||!o:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(i):o?o.value:t.get(i)},pt,ut,gt;const Me={initialPosition:{}};class Le extends _t{constructor(t){if(super(t),this.hasInitialised=!1,t.type!==wt.ELEMENT)throw new Error("The `drag` directive must be used on an element")}update(t,e){if(this.hasInitialised)return;const o=t.element,[n,r]=e;o.setAttribute("data-dragging","idle"),n.draggableElement=o,n.pointerTracker=new Ue(o,{start(...s){return r.start(...s),o.setAttribute("data-dragging","dragging"),!0},move(...s){r.move(...s)},end(...s){r.end(...s),o.setAttribute("data-dragging","idle")}}),this.hasInitialised=!0}render(t,e){return y}}const ze=yt(Le);class De{constructor(t,e=Me){this.cursorPositionX=null,this.cursorPositionY=null,this.pointerTracker=null,this.draggableElement=null,this.containerElement=null,this.containerId="",this.styles={touchAction:"none",top:"0px",left:"0px"},pt.set(this,(r,s)=>(this.cursorPositionX=Math.floor(r.pageX),this.cursorPositionY=Math.floor(r.pageY),s.target.setAttribute("data-state","dragging"),!0)),ut.set(this,(r,s)=>{const[a]=s,l=new CustomEvent("window-drag",{bubbles:!0,composed:!0,detail:{pointer:a}});window.requestAnimationFrame(()=>(this.host.dispatchEvent(l),this.handleWindowMove(a)))}),gt.set(this,(r,s)=>{s.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this);const{initialPosition:o={},containerId:n=""}=e;this.styles={...this.styles,...o},this.containerId=n}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}applyDrag(){return this.host.draggable?ze(this,{start:lt(this,pt,"f"),move:lt(this,ut,"f"),end:lt(this,gt,"f")}):null}updateElPosition(t,e){this.styles={...this.styles,left:t,top:e}}handleWindowMove(t){var h;const e=this.draggableElement,o=(h=this.host.shadowRoot)==null?void 0:h.querySelector(this.containerId);if(!e||!o)return;const{top:n,left:r}=this.styles,s=Number(n==null?void 0:n.replace("px","")),a=Number(r==null?void 0:r.replace("px","")),l=Math.floor(t.pageX),d=Math.floor(t.pageY);if(l!==this.cursorPositionX||d!==this.cursorPositionY){const{bottom:c,height:p}=e.getBoundingClientRect(),{right:b,width:E}=o.getBoundingClientRect(),k=ht(screen.availWidth,innerWidth),Pt=ht(screen.availHeight,innerHeight),j=l-this.cursorPositionX,U=d-this.cursorPositionY,Ot=s+U<0,Ct=a+j<0,Rt=c+U>Pt,jt=b+j>=k,ge=Rt||Ct||jt||Ot;if(this.cursorPositionX=l,this.cursorPositionY=d,ge){if(Ot){const w=`${a+j}px`;this.updateElPosition(w,"0px")}else if(Ct){const w=`${s+U}px`;this.updateElPosition("0px",w)}else if(Rt){const w=`${Pt-p}px`,M=`${a+j}px`;this.updateElPosition(M,w)}else if(jt){const w=`${s+U}px`,M=`${Math.floor(k-E)}px`;this.updateElPosition(M,w)}}else{const w=`${s+U}px`,M=`${a+j}px`;this.updateElPosition(M,w)}this.host.requestUpdate()}}}pt=new WeakMap,ut=new WeakMap,gt=new WeakMap;const V=(i,t=100)=>Math.round(i*t)/t;class ee extends u{render(){return f`<div id="stack">
      <slot></slot>
    </div>`}}ee.styles=v`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",ee);class oe extends u{render(){return f` <div id="panel">
      <slot></slot>
    </div>`}}oe.styles=v`
    #panel {
      --inset-shadow-padding: 2px;
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
    }
  `;window.customElements.define("a2k-panel",oe);class ie extends u{render(){return f`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}ie.styles=v`
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
  `;window.customElements.define("a2k-window-topbar",ie);var re=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ne=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class G extends u{constructor(){super(...arguments),this.disabled=!1,this.size="medium"}render(){return f` <button data-size="${this.size}" ?disabled=${this.disabled}>
      <slot></slot>
    </button>`}}G.styles=v`
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
  `;re([g({type:Boolean}),ne("design:type",Object)],G.prototype,"disabled",void 0);re([g({type:String}),ne("design:type",String)],G.prototype,"size",void 0);window.customElements.define("a2k-button",G);var Ie=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ne=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};const Be=new URL("/assets/a2k-icons.1cab8d64.svg",self.location).href;class $t extends u{constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),ke`
      <svg height="1em" width="1em">
        <use href="${Be}#${this.icon}"></use>
      </svg>
    `}}$t.styles=v`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;Ie([g({type:String}),Ne("design:type",Object)],$t.prototype,"icon",void 0);window.customElements.define("a2k-icon",$t);var He=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},We=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class kt extends u{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return f`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}kt.styles=v`
    :host {
      position: absolute;
      right: 2px;
    }

    #icon-wrapper {
      font-size: 8px;
    }
  `;He([g({type:Boolean}),We("design:type",Object)],kt.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",kt);var xt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Et=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class W extends u{constructor(){super(),this.heading="",this.draggable=!1,this.closeable=!1,this.drag=new De(this,{initialPosition:{left:"32px",top:"32px"},containerId:"#window"}),this.addEventListener("close",()=>this.remove())}firstUpdated(){const{left:t}=this.drag.styles,{offsetWidth:e}=this.renderRoot.querySelector("#window"),o=ht(screen.availWidth,innerWidth);Number(t==null?void 0:t.replace("px",""))+e>o&&(this.drag.styles={...this.drag.styles,left:"0px"},this.requestUpdate())}render(){return f`
      <div id="window" style=${ct(this.drag.styles)}>
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
    `}}W.styles=v`
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
  `;xt([g({type:String}),Et("design:type",Object)],W.prototype,"heading",void 0);xt([g({type:Boolean}),Et("design:type",Object)],W.prototype,"draggable",void 0);xt([g({type:Boolean}),Et("design:type",Object)],W.prototype,"closeable",void 0);window.customElements.define("a2k-window",W);var se=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},qe=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let Y=class extends u{constructor(){super(...arguments),this.open=!1}render(){return f`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};Y.styles=v`
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
  `;se([g(),qe("design:type",Object)],Y.prototype,"open",void 0);Y=se([H("a2k-start-menu-item")],Y);var ae=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ve=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let X=class extends u{constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=f` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;bt(t,document.body)}render(){const t=String(this.open)==="true";return f`
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
    `}};X.styles=v`
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
  `;ae([g(),Ve("design:type",Object)],X.prototype,"open",void 0);X=ae([H("a2k-start-menu")],X);var le=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ye=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let F=class extends u{constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return f`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `}};F.styles=v`
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
  `;le([Re(),Ye("design:type",Object)],F.prototype,"_isMenuOpen",void 0);F=le([H("a2k-start-button")],F);var Xe=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let ft=class extends u{constructor(){super(...arguments),this.clock=new je(this)}render(){const t=Fe.format(this.clock.value);return f`<div class="utility-bar">${t}</div>`}};ft.styles=v`
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
  `;ft=Xe([H("a2k-utility-bar")],ft);const Fe=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class de extends u{render(){return f`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}de.styles=v`
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
  `;window.customElements.define("a2k-taskbar",de);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke=yt(class extends _t{constructor(i){var t;if(super(i),i.type!==wt.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,o;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.et=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.et)===null||e===void 0)&&e.has(r))&&this.st.add(r);return this.render(t)}const n=i.element.classList;this.st.forEach(r=>{r in t||(n.remove(r),this.st.delete(r))});for(const r in t){const s=!!t[r];s===this.st.has(r)||((o=this.et)===null||o===void 0?void 0:o.has(r))||(s?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return y}});var ce=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ze=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let K=class extends u{constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return f`<div class=${Ke(t)} id="unit">
      <div></div>
      <div></div>
    </div>`}};K.styles=v`
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
  `;ce([g(),Ze("design:type",String)],K.prototype,"filled",void 0);K=ce([H("a2k-progress-unit")],K);var Ge=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Je=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class At extends u{constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){var a;const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=(a=t.getBoundingClientRect().width)!=null?a:0;if(this.width===e)return;this.width=e;const{gap:o}=getComputedStyle(t),r=Number(o.replace("px",""))+12,s=Math.ceil(e/r);Array(s).fill(0).forEach(()=>{const l=document.createElement("a2k-progress-unit");l.setAttribute("filled","none"),t==null||t.appendChild(l)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,o=Qe(e),n=Math.floor(e);t.forEach((r,s)=>{s<n?r.setAttribute("filled","filled"):s===n&&o>=.5?r.setAttribute("filled","half"):r.setAttribute("filled","none")})}render(){return f`<div id="progress" role="progress"></div>`}}At.styles=v`
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
  `;Ge([g({type:Number}),Je("design:type",Object)],At.prototype,"progress",void 0);const Qe=i=>Math.floor(i%1*10)/10;window.customElements.define("a2k-progress",At);class he extends u{render(){return f`<div id="desktop">
      <slot />
    </div>`}}he.styles=v`
    #desktop {
      height: 100%;
    }
  `;window.customElements.define("a2k-desktop",he);var St=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Tt=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class q extends u{constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return f` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`}}q.styles=v`
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
  `;St([g({type:String}),Tt("design:type",Object)],q.prototype,"text",void 0);St([g({type:String}),Tt("design:type",Object)],q.prototype,"icon",void 0);St([g(),Tt("design:type",Object)],q.prototype,"onOpen",void 0);window.customElements.define("a2k-desktop-icon",q);class pe extends u{render(){return f`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}pe.styles=v`
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
  `;window.customElements.define("a2k-cover",pe);const to=(i,t)=>{const e=i/t,o=t/i*100,n=Array(e).fill(o),r=n.length;for(let s=0;s<1e3;s++){const a=Math.floor(Math.random()*r),l=n[a],d=Math.floor(Math.random()*r),h=n[d],c=V(Math.random()*l),p=V(l-c),b=V(h+c);n[a]=p,n[d]=b}return n};var J=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Q=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};const eo=["Booting Up..."],oo=i=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:i});class C extends u{constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.image="",this.footerText="Copyright \u24B8 1999-2000. Andricos2000",this.messages=eo,this.progress=0}connectedCallback(){super.connectedCallback();const t=50,e=to(this.startupTime,t);this.intervalRef=setInterval(()=>{var s;const o=(s=e[this.currentStep])!=null?s:0,n=V(this.progress+o),r=oo({progress:n,isComplete:n>=100});this.dispatchEvent(r),n>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=n,this.currentStep++)},t)}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return f`
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
  `;J([g({type:String}),Q("design:type",Object)],C.prototype,"image",void 0);J([g({type:String}),Q("design:type",Object)],C.prototype,"footerText",void 0);J([g(),Q("design:type",Object)],C.prototype,"messages",void 0);J([g(),Q("design:type",Object)],C.prototype,"progress",void 0);window.customElements.define("a2k-startup",C);const io=f`
  <a2k-window heading="Please wait..." draggable closeable>
    <p class="heading">Andricos<span>2000</span></p>
    <p>Andricos2000 is starting up...</p>
    <a2k-progress></a2k-progress>
  </a2k-window>
`;class ue extends u{render(){return f` <a2k-window draggable closeable heading="Internet Explorer 5">
      <div>
        <a2k-icon icon="info-icon"></a2k-icon>
        <p>Coming soon</p>
      </div>
    </a2k-window>`}}Ut(ue,"styles",v`
    :host {
      --window-color-background: white;
    }
  `);window.customElements.define("a2k-ie5",ue);class ro extends u{render(){return f` <a2k-window draggable closeable heading="About Andricos2000">
      <div>
        <p>Deets coming soon...</p>
      </div>
    </a2k-window>`}}window.customElements.define("a2k-about",ro);var no=Object.defineProperty,so=Object.getOwnPropertyDescriptor,tt=(i,t,e,o)=>{for(var n=o>1?void 0:o?so(t,e):t,r=i.length-1,s;r>=0;r--)(s=i[r])&&(n=(o?s(t,e,n):s(n))||n);return o&&n&&no(t,e,n),n};class R extends u{constructor(){super(...arguments),this.height="",this.width="",this.top="",this.left=""}render(){const t=ct({width:this.width,top:this.top,left:this.left}),e=ct({height:this.height});return f`
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
  `;tt([g()],R.prototype,"height",2);tt([g()],R.prototype,"width",2);tt([g()],R.prototype,"top",2);tt([g()],R.prototype,"left",2);window.customElements.define("a2k-broken-window",R);const ao=new URL("/assets/andricos-2000-startup.774be9be.mp3",self.location),et=document.querySelector("#windows-container"),lo=document.querySelector('a2k-desktop-icon[icon="documents-icon"]');lo.onOpen=()=>{window.location.href="https://andri.co"};const co=document.querySelector('a2k-desktop-icon[icon="network-icon"]');co.onOpen=()=>{window.location.href="https://twitter.com/andricokaroulla"};const ho=document.querySelector('a2k-desktop-icon[icon="github-icon"]');ho.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const po=document.querySelector('a2k-desktop-icon[icon="help-icon"]');po.onOpen=()=>{const i=document.createElement("a2k-about");et.append(i)};const uo=document.querySelector('a2k-desktop-icon[icon="internet-icon"]');uo.onOpen=()=>{const i=document.createElement("a2k-ie5");et.append(i)};let Ft=!1;const go=i=>{const{target:t,detail:e}=i,{path:o}=e.pointer.nativePointer,n=document.querySelector("a2k-window[heading='Please wait...']");if(t.nodeName!=="A2K-WINDOW")return;const r=o.find(c=>!c||!c.getAttribute?!1:c.getAttribute("id")==="window"),{width:s,top:a,left:l,height:d}=getComputedStyle(r),h=document.createElement("a2k-broken-window");et.insertBefore(h,n),h.setAttribute("height",d),h.setAttribute("width",s),h.setAttribute("top",a),h.setAttribute("left",l)};window.addEventListener("startup-progress",i=>{if(!(i.detail.progress<50)&&!Ft){Ft=!0;try{fo()}catch{}}});window.addEventListener("startup-progress",i=>{!i.detail.isComplete||setTimeout(()=>{document.querySelector(".fixed-container").remove(),vo(),mo()},300)});function fo(){const i=new Audio(ao);i.volume=.3}function vo(){let i=0;setTimeout(()=>{bt(io,et);const t=document.querySelector("a2k-progress"),e=document.querySelector("a2k-window[heading='Please wait...']"),o=setInterval(()=>{if(!!t&&(i=i+1.2,t.setAttribute("progress",i),i>40)){for(;e.firstChild;)e.removeChild(e.lastChild);window.addEventListener("window-drag",go),e.innerHTML=`
          <p>There was an error loading Andricos2000</p>
          <p>Andricos2000 is still a work in progress, keeping checking back for updates or follow progress on <a href="https://twitter.com/andricokaroulla" target="_blank">Twitter</a></p>
        `,clearInterval(o)}},100)},700)}function mo(){const i=document.querySelectorAll("a2k-desktop-icon");setTimeout(()=>{i.forEach(t=>{t.removeAttribute("hidden")})},1200)}
