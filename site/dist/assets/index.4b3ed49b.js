const ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}};ae();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ht=Symbol(),St=new Map;class Bt{constructor(t,e){if(this._$cssResult$=!0,e!==ht)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=St.get(this.cssText);return dt&&t===void 0&&(St.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const le=i=>new Bt(typeof i=="string"?i:i+"",ht),b=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,n,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new Bt(e,ht)},ce=(i,t)=>{dt?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),n=window.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=e.cssText,i.appendChild(o)})},Tt=dt?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return le(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J;const Pt=window.trustedTypes,de=Pt?Pt.emptyScript:"",Ot=window.reactiveElementPolyfillSupport,nt={toAttribute(i,t){switch(t){case Boolean:i=i?de:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Wt=(i,t)=>t!==i&&(t==t||i==i),Q={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:Wt};class A extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const n=this._$Eh(o,e);n!==void 0&&(this._$Eu.set(n,o),t.push(n))}),t}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Q}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of o)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)e.unshift(Tt(n))}else t!==void 0&&e.push(Tt(t));return e}static _$Eh(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ce(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=Q){var n,r;const s=this.constructor._$Eh(t,o);if(s!==void 0&&o.reflect===!0){const a=((r=(n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&r!==void 0?r:nt.toAttribute)(e,o.type);this._$Ei=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Ei=null}}_$AK(t,e){var o,n,r;const s=this.constructor,a=s._$Eu.get(t);if(a!==void 0&&this._$Ei!==a){const l=s.getPropertyOptions(a),c=l.converter,u=(r=(n=(o=c)===null||o===void 0?void 0:o.fromAttribute)!==null&&n!==void 0?n:typeof c=="function"?c:null)!==null&&r!==void 0?r:nt.fromAttribute;this._$Ei=a,this[a]=u(e,l.type),this._$Ei=null}}requestUpdate(t,e,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Wt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,r)=>this[r]=n),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(o)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,o)=>this._$ES(o,this[o],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},Ot==null||Ot({ReactiveElement:A}),((J=globalThis.reactiveElementVersions)!==null&&J!==void 0?J:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tt;const T=globalThis.trustedTypes,Ct=T?T.createPolicy("lit-html",{createHTML:i=>i}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,qt="?"+x,he=`<${qt}>`,P=document,L=(i="")=>P.createComment(i),z=i=>i===null||typeof i!="object"&&typeof i!="function",Vt=Array.isArray,pe=i=>{var t;return Vt(i)||typeof((t=i)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rt=/-->/g,jt=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Mt=/'/g,Ut=/"/g,Yt=/^(?:script|style|textarea)$/i,Xt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),m=Xt(1),ue=Xt(2),_=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Lt=new WeakMap,Ft=(i,t,e)=>{var o,n;const r=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let s=r._$litPart$;if(s===void 0){const a=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new I(t.insertBefore(L(),a),a,void 0,e!=null?e:{})}return s._$AI(i),s},S=P.createTreeWalker(P,129,null,!1),fe=(i,t)=>{const e=i.length-1,o=[];let n,r=t===2?"<svg>":"",s=M;for(let l=0;l<e;l++){const c=i[l];let u,d,h=-1,g=0;for(;g<c.length&&(s.lastIndex=g,d=s.exec(c),d!==null);)g=s.lastIndex,s===M?d[1]==="!--"?s=Rt:d[1]!==void 0?s=jt:d[2]!==void 0?(Yt.test(d[2])&&(n=RegExp("</"+d[2],"g")),s=E):d[3]!==void 0&&(s=E):s===E?d[0]===">"?(s=n!=null?n:M,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?E:d[3]==='"'?Ut:Mt):s===Ut||s===Mt?s=E:s===Rt||s===jt?s=M:(s=E,n=void 0);const k=s===E&&i[l+1].startsWith("/>")?" ":"";r+=s===M?c+he:h>=0?(o.push(u),c.slice(0,h)+"$lit$"+c.slice(h)+x+k):c+x+(h===-2?(o.push(void 0),l):k)}const a=r+(i[e]||"<?>")+(t===2?"</svg>":"");return[Ct!==void 0?Ct.createHTML(a):a,o]};class D{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[c,u]=fe(t,e);if(this.el=D.createElement(c,o),S.currentNode=this.el.content,e===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(n=S.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const h of n.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(x)){const g=u[s++];if(d.push(h),g!==void 0){const k=n.getAttribute(g.toLowerCase()+"$lit$").split(x),w=/([.?@])?(.*)/.exec(g);l.push({type:1,index:r,name:w[2],strings:k,ctor:w[1]==="."?ve:w[1]==="?"?be:w[1]==="@"?we:F})}else l.push({type:6,index:r})}for(const h of d)n.removeAttribute(h)}if(Yt.test(n.tagName)){const d=n.textContent.split(x),h=d.length-1;if(h>0){n.textContent=T?T.emptyScript:"";for(let g=0;g<h;g++)n.append(d[g],L()),S.nextNode(),l.push({type:2,index:++r});n.append(d[h],L())}}}else if(n.nodeType===8)if(n.data===qt)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(x,d+1))!==-1;)l.push({type:7,index:r}),d+=x.length-1}r++}}static createElement(t,e){const o=P.createElement("template");return o.innerHTML=t,o}}function O(i,t,e=i,o){var n,r,s,a;if(t===_)return t;let l=o!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[o]:e._$Cu;const c=z(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,e,o)),o!==void 0?((s=(a=e)._$Cl)!==null&&s!==void 0?s:a._$Cl=[])[o]=l:e._$Cu=l),l!==void 0&&(t=O(i,l._$AS(i,t.values),l,o)),t}class ge{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:P).importNode(o,!0);S.currentNode=r;let s=S.nextNode(),a=0,l=0,c=n[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new I(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new ye(s,this,t)),this.v.push(u),c=n[++l]}a!==(c==null?void 0:c.index)&&(s=S.nextNode(),a++)}return r}m(t){let e=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class I{constructor(t,e,o,n){var r;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cg=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),z(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==_&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):pe(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==v&&z(this._$AH)?this._$AA.nextSibling.data=t:this.S(P.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=D.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(o);else{const s=new ge(r,this),a=s.p(this.options);s.m(o),this.S(a),this._$AH=s}}_$AC(t){let e=Lt.get(t.strings);return e===void 0&&Lt.set(t.strings,e=new D(t)),e}M(t){Vt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const r of t)n===e.length?e.push(o=new I(this.A(L()),this.A(L()),this,this.options)):o=e[n],o._$AI(r),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class F{constructor(t,e,o,n,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,n){const r=this.strings;let s=!1;if(r===void 0)t=O(this,t,e,0),s=!z(t)||t!==this._$AH&&t!==_,s&&(this._$AH=t);else{const a=t;let l,c;for(t=r[0],l=0;l<r.length-1;l++)c=O(this,a[o+l],e,l),c===_&&(c=this._$AH[l]),s||(s=!z(c)||c!==this._$AH[l]),c===v?t=v:t!==v&&(t+=(c!=null?c:"")+r[l+1]),this._$AH[l]=c}s&&!n&&this.k(t)}k(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class ve extends F{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===v?void 0:t}}const me=T?T.emptyScript:"";class be extends F{constructor(){super(...arguments),this.type=4}k(t){t&&t!==v?this.element.setAttribute(this.name,me):this.element.removeAttribute(this.name)}}class we extends F{constructor(t,e,o,n,r){super(t,e,o,n,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=O(this,t,e,0))!==null&&o!==void 0?o:v)===_)return;const n=this._$AH,r=t===v&&n!==v||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==v&&(n===v||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class ye{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const zt=window.litHtmlPolyfillSupport;zt==null||zt(D,I),((tt=globalThis.litHtmlVersions)!==null&&tt!==void 0?tt:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var et,ot;class p extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ft(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return _}}p.finalized=!0,p._$litElement$=!0,(et=globalThis.litElementHydrateSupport)===null||et===void 0||et.call(globalThis,{LitElement:p});const Dt=globalThis.litElementPolyfillSupport;Dt==null||Dt({LitElement:p});((ot=globalThis.litElementVersions)!==null&&ot!==void 0?ot:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=i=>t=>typeof t=="function"?((e,o)=>(window.customElements.define(e,o),o))(i,t):((e,o)=>{const{kind:n,elements:r}=o;return{kind:n,elements:r,finisher(s){window.customElements.define(e,s)}}})(i,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function f(i){return(t,e)=>e!==void 0?((o,n,r)=>{n.constructor.createProperty(r,o)})(i,t,e):_e(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $e(i){return f({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ut=i=>(...t)=>({_$litDirective$:i,values:t});class ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=ut(class extends ft{constructor(i){var t;if(super(i),i.type!==pt.ATTRIBUTE||i.name!=="style"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const o=i[e];return o==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ut===void 0){this.ut=new Set;for(const o in t)this.ut.add(o);return this.render(t)}this.ut.forEach(o=>{t[o]==null&&(this.ut.delete(o),o.includes("-")?e.removeProperty(o):e[o]="")});for(const o in t){const n=t[o];n!=null&&(this.ut.add(o),o.includes("-")?e.setProperty(o,n):e[o]=n)}return _}});class ke{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class ${constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:U(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new $(e));if(t.length>0)return t}return[this]}}const U=i=>"pointerId"in i,it=i=>"changedTouches"in i,It=()=>{};class Ee{constructor(t,{start:e=()=>!0,move:o=It,end:n=It,rawUpdates:r=!1,avoidPointerEvents:s=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(U(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const l=new $(a);this.currentPointers.some(c=>c.id===l.id)||!this._triggerPointerStart(l,a)||(U(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerStart(new $(l),a)},this._move=a=>{if(!it(a)&&(!U(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const l=this.currentPointers.slice(),c=it(a)?Array.from(a.changedTouches).map(d=>new $(d)):[new $(a)],u=[];for(const d of c){const h=this.currentPointers.findIndex(g=>g.id===d.id);h!==-1&&(u.push(d),this.currentPointers[h]=d)}u.length!==0&&this._moveCallback(l,u,a)},this._triggerPointerEnd=(a,l)=>{if(!it(l)&&l.buttons&1)return!1;const c=this.currentPointers.findIndex(d=>d.id===a.id);if(c===-1)return!1;this.currentPointers.splice(c,1),this.startPointers.splice(c,1),this._excludeFromButtonsCheck.delete(a.id);const u=!(l.type==="mouseup"||l.type==="touchend"||l.type==="pointerup");return this._endCallback(a,l,u),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new $(a),a))if(U(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerEnd(new $(l),a)},this._startCallback=e,this._moveCallback=o,this._endCallback=n,this._rawUpdates=r&&"onpointerrawupdate"in window,self.PointerEvent&&!s?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}const Nt=(i,t)=>i<=t?i:t;var rt=globalThis&&globalThis.__classPrivateFieldGet||function(i,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?i!==t||!o:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(i):o?o.value:t.get(i)},st,at,lt;const Ae={initialPosition:{}};class Se extends ft{constructor(t){if(super(t),this.hasInitialised=!1,t.type!==pt.ELEMENT)throw new Error("The `drag` directive must be used on an element")}update(t,e){if(this.hasInitialised)return;const o=t.element,[n,r]=e;o.setAttribute("data-dragging","idle"),n.draggableElement=o,n.pointerTracker=new Ee(o,{start(...s){return r.start(...s),o.setAttribute("data-dragging","dragging"),!0},move(...s){r.move(...s)},end(...s){r.end(...s),o.setAttribute("data-dragging","idle")}}),this.hasInitialised=!0}render(t,e){return _}}const Te=ut(Se);class Pe{constructor(t,e=Ae){this.cursorPositionX=null,this.cursorPositionY=null,this.pointerTracker=null,this.draggableElement=null,this.styles={touchAction:"none",top:"0px",left:"0px"},st.set(this,(n,r)=>(this.cursorPositionX=Math.floor(n.pageX),this.cursorPositionY=Math.floor(n.pageY),r.target.setAttribute("data-state","dragging"),!0)),at.set(this,(n,r)=>{const[s]=r;window.requestAnimationFrame(()=>this.handleWindowMove(s))}),lt.set(this,(n,r)=>{r.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this);const{initialPosition:o={}}=e;this.styles={...this.styles,...o}}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}applyDrag(){return this.host.draggable?Te(this,{start:rt(this,st,"f"),move:rt(this,at,"f"),end:rt(this,lt,"f")}):null}updateElPosition(t,e){this.styles={...this.styles,left:t,top:e}}handleWindowMove(t){const e=this.draggableElement;if(!e)return;const{top:o,left:n}=this.styles,r=Number(o==null?void 0:o.replace("px","")),s=Number(n==null?void 0:n.replace("px","")),a=Math.floor(t.pageX),l=Math.floor(t.pageY);if(a!==0&&l!==0&&(a!==this.cursorPositionX||l!==this.cursorPositionY)){const{bottom:c,right:u,width:d,height:h}=e.getBoundingClientRect(),g=Nt(screen.availWidth,innerWidth),k=Nt(screen.availHeight,innerHeight),w=a-this.cursorPositionX,R=l-this.cursorPositionY,xt=r+R<0,kt=s+w<0,Et=c+R>k,At=u+w>g,se=Et||kt||At||xt;if(this.cursorPositionX=a,this.cursorPositionY=l,se){if(xt){const y=`${s+w}px`;this.updateElPosition(y,"0px")}if(kt){const y=`${r+R}px`;this.updateElPosition("0px",y)}if(Et){const y=`${k-h}px`,j=`${s+w}px`;this.updateElPosition(j,y)}if(At){const y=`${r+R}px`,j=`${Math.floor(g-d-2)}px`;this.updateElPosition(j,y)}}else{const y=`${r+R}px`,j=`${s+w}px`;this.updateElPosition(j,y)}this.host.requestUpdate()}}}st=new WeakMap,at=new WeakMap,lt=new WeakMap;const W=(i,t=100)=>Math.round(i*t)/t;class Kt extends p{render(){return m`<div id="stack">
      <slot></slot>
    </div>`}}Kt.styles=b`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",Kt);class Zt extends p{render(){return m` <div id="panel">
      <slot></slot>
    </div>`}}Zt.styles=b`
    #panel {
      --inset-shadow-padding: 2px;
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
    }
  `;window.customElements.define("a2k-panel",Zt);var Oe=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ce=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class gt extends p{constructor(){super(...arguments),this.closeable=!1}render(){return m`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}gt.styles=b`
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
  `;Oe([f({type:Boolean}),Ce("design:type",Object)],gt.prototype,"closeable",void 0);window.customElements.define("a2k-window-topbar",gt);var Gt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Jt=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class K extends p{constructor(){super(...arguments),this.disabled=!1,this.size="medium"}render(){return m` <button data-size="${this.size}" ?disabled=${this.disabled}>
      <slot></slot>
    </button>`}}K.styles=b`
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
  `;Gt([f({type:Boolean}),Jt("design:type",Object)],K.prototype,"disabled",void 0);Gt([f({type:String}),Jt("design:type",String)],K.prototype,"size",void 0);window.customElements.define("a2k-button",K);var Re=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},je=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};const Me=new URL("/assets/a2k-icons.ff08339c.svg",self.location).href;class vt extends p{constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),ue`
      <svg height="1em" width="1em">
        <use href="${Me}#${this.icon}"></use>
      </svg>
    `}}vt.styles=b`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;Re([f({type:String}),je("design:type",Object)],vt.prototype,"icon",void 0);window.customElements.define("a2k-icon",vt);var Ue=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Le=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class mt extends p{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return m`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}mt.styles=b`
    :host {
      position: absolute;
      right: 2px;
    }

    #icon-wrapper {
      font-size: 8px;
    }
  `;Ue([f({type:Boolean}),Le("design:type",Object)],mt.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",mt);var bt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},wt=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class H extends p{constructor(){super(),this.heading="",this.draggable=!1,this.closeable=!1,this.drag=new Pe(this,{initialPosition:{left:"32px",top:"32px"}}),this.addEventListener("close",()=>this.remove())}render(){return m`
      <div id="window" style=${xe(this.drag.styles)}>
        <a2k-panel>
          <div id="topbar-wrapper">
            <div id="draggable" ${this.drag.applyDrag()}>
              <a2k-window-topbar>${this.heading}</a2k-window-topbar>
            </div>
            <a2k-window-actions
              ?closeable="${this.closeable}"
            ></a2k-window-actions>
          </div>
          <div class="content">
            <a2k-stack>
              <slot></slot>
            </a2k-stack>
          </div>
        </a2k-panel>
      </div>
    `}}H.styles=b`
    :host([hidden]) {
      display: none;
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

    .content {
      padding: 0 var(--window-spacing-horizontal);
    }
  `;bt([f({type:String}),wt("design:type",Object)],H.prototype,"heading",void 0);bt([f({type:Boolean}),wt("design:type",Object)],H.prototype,"draggable",void 0);bt([f({type:Boolean}),wt("design:type",Object)],H.prototype,"closeable",void 0);window.customElements.define("a2k-window",H);var Qt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ze=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let q=class extends p{constructor(){super(...arguments),this.open=!1}render(){return m`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};q.styles=b`
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
  `;Qt([f(),ze("design:type",Object)],q.prototype,"open",void 0);q=Qt([N("a2k-start-menu-item")],q);var te=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},De=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let V=class extends p{constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=m` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;Ft(t,document.body)}render(){const t=String(this.open)==="true";return m`
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
    `}};V.styles=b`
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
  `;te([f(),De("design:type",Object)],V.prototype,"open",void 0);V=te([N("a2k-start-menu")],V);var ee=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ie=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let Y=class extends p{constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return m`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `}};Y.styles=b`
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
  `;ee([$e(),Ie("design:type",Object)],Y.prototype,"_isMenuOpen",void 0);Y=ee([N("a2k-start-button")],Y);var Ne=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let ct=class extends p{constructor(){super(...arguments),this.clock=new ke(this)}render(){const t=He.format(this.clock.value);return m`<div class="utility-bar">${t}</div>`}};ct.styles=b`
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
  `;ct=Ne([N("a2k-utility-bar")],ct);const He=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class oe extends p{render(){return m`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}oe.styles=b`
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
  `;window.customElements.define("a2k-taskbar",oe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=ut(class extends ft{constructor(i){var t;if(super(i),i.type!==pt.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,o;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.et=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.et)===null||e===void 0)&&e.has(r))&&this.st.add(r);return this.render(t)}const n=i.element.classList;this.st.forEach(r=>{r in t||(n.remove(r),this.st.delete(r))});for(const r in t){const s=!!t[r];s===this.st.has(r)||((o=this.et)===null||o===void 0?void 0:o.has(r))||(s?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return _}});var ie=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},We=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let X=class extends p{constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return m`<div class=${Be(t)} id="unit">
      <div></div>
      <div></div>
    </div>`}};X.styles=b`
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
  `;ie([f(),We("design:type",String)],X.prototype,"filled",void 0);X=ie([N("a2k-progress-unit")],X);var qe=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ve=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class yt extends p{constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){var a;const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=(a=t.getBoundingClientRect().width)!=null?a:0;if(this.width===e)return;this.width=e;const{gap:o}=getComputedStyle(t),r=Number(o.replace("px",""))+12,s=Math.ceil(e/r);Array(s).fill(0).forEach(()=>{const l=document.createElement("a2k-progress-unit");l.setAttribute("filled","none"),t==null||t.appendChild(l)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,o=Ye(e),n=Math.floor(e);t.forEach((r,s)=>{s<n?r.setAttribute("filled","filled"):s===n&&o>=.5?r.setAttribute("filled","half"):r.setAttribute("filled","none")})}render(){return m`<div id="progress" role="progress"></div>`}}yt.styles=b`
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
  `;qe([f({type:Number}),Ve("design:type",Object)],yt.prototype,"progress",void 0);const Ye=i=>Math.floor(i%1*10)/10;window.customElements.define("a2k-progress",yt);class re extends p{render(){return m`<div id="desktop">
      <slot />
    </div>`}}re.styles=b`
    #desktop {
      height: 100%;
    }
  `;window.customElements.define("a2k-desktop",re);var _t=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},$t=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class B extends p{constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return m` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`}}B.styles=b`
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
  `;_t([f({type:String}),$t("design:type",Object)],B.prototype,"text",void 0);_t([f({type:String}),$t("design:type",Object)],B.prototype,"icon",void 0);_t([f(),$t("design:type",Object)],B.prototype,"onOpen",void 0);window.customElements.define("a2k-desktop-icon",B);class ne extends p{render(){return m`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}ne.styles=b`
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
  `;window.customElements.define("a2k-cover",ne);const Xe=(i,t)=>{const e=i/t,o=t/i*100,n=Array(e).fill(o),r=n.length;for(let s=0;s<1e3;s++){const a=Math.floor(Math.random()*r),l=n[a],c=Math.floor(Math.random()*r),u=n[c],d=W(Math.random()*l),h=W(l-d),g=W(u+d);n[a]=h,n[c]=g}return n};var Z=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},G=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};const Fe=["Booting Up..."],Ke=i=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:i});class C extends p{constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.image="",this.footerText="Copyright \u24B8 1999-2000. Andricos2000",this.messages=Fe,this.progress=0}connectedCallback(){super.connectedCallback();const t=50,e=Xe(this.startupTime,t);this.intervalRef=setInterval(()=>{var s;const o=(s=e[this.currentStep])!=null?s:0,n=W(this.progress+o),r=Ke({progress:n,isComplete:n>=100});this.dispatchEvent(r),n>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=n,this.currentStep++)},t)}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return m`
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
    `}}C.styles=b`
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
  `;Z([f({type:String}),G("design:type",Object)],C.prototype,"image",void 0);Z([f({type:String}),G("design:type",Object)],C.prototype,"footerText",void 0);Z([f(),G("design:type",Object)],C.prototype,"messages",void 0);Z([f(),G("design:type",Object)],C.prototype,"progress",void 0);window.customElements.define("a2k-startup",C);const Ze=new URL("/assets/andricos-2000-startup.774be9be.mp3",self.location),Ge=document.querySelector('a2k-desktop-icon[icon="documents-icon"]');Ge.onOpen=()=>{window.location.href="https://andri.co"};const Je=document.querySelector('a2k-desktop-icon[icon="network-icon"]');Je.onOpen=()=>{window.location.href="https://twitter.com/andricokaroulla"};const Qe=document.querySelector('a2k-desktop-icon[icon="github-icon"]');Qe.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const to=document.querySelector('a2k-desktop-icon[icon="help-icon"]');to.onOpen=()=>{const i=document.createElement("a2k-window");i.setAttribute("draggable",""),i.setAttribute("closeable",""),i.setAttribute("heading","About Andricos2000");const t=document.createElement("p");t.textContent="Deets coming soon...",i.appendChild(t),document.body.appendChild(i)};const eo=document.querySelector('a2k-desktop-icon[icon="internet-icon"]');eo.onOpen=()=>{const i=document.createElement("a2k-window");i.setAttribute("draggable",""),i.setAttribute("closeable",""),i.setAttribute("heading","Internet Explorer 11");const t=document.createElement("p");t.textContent="Deets coming soon...",i.appendChild(t),document.body.appendChild(i)};let Ht=!1;window.addEventListener("startup-progress",i=>{i.detail.progress<50||Ht||(Ht=!0,oo())});window.addEventListener("startup-progress",i=>{!i.detail.isComplete||setTimeout(()=>{document.querySelector(".fixed-container").remove(),io(),ro()},300)});function oo(){const i=new Audio(Ze);i.volume=.1,i.play()}function io(){let i=0;setTimeout(()=>{const t=document.querySelector("a2k-window[heading='Please wait...']");t.removeAttribute("hidden");const e=document.querySelector("a2k-progress"),o=setInterval(()=>{if(!!e&&(i=i+1.2,e.setAttribute("progress",i),i>40)){for(;t.firstChild;)t.removeChild(t.lastChild);t.innerHTML=`
          <p>There was an error loading Andricos2000</p>
          <p>Andricos2000 is still a work in progress, keeping checking back for updates or follow progress on Twitter</p>
        `,clearInterval(o)}},100)},700)}function ro(){const i=document.querySelectorAll("a2k-desktop-icon");setTimeout(()=>{i.forEach(t=>{t.removeAttribute("hidden")})},1200)}
