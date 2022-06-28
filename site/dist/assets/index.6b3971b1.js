const ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}};ie();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol(),Et=new Map;class It{constructor(t,e){if(this._$cssResult$=!0,e!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Et.get(this.cssText);return lt&&t===void 0&&(Et.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const re=i=>new It(typeof i=="string"?i:i+"",ct),b=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,n,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new It(e,ct)},ne=(i,t)=>{lt?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),n=window.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=e.cssText,i.appendChild(o)})},At=lt?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return re(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;const St=window.trustedTypes,se=St?St.emptyScript:"",Tt=window.reactiveElementPolyfillSupport,it={toAttribute(i,t){switch(t){case Boolean:i=i?se:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Nt=(i,t)=>t!==i&&(t==t||i==i),G={attribute:!0,type:String,converter:it,reflect:!1,hasChanged:Nt};class A extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const n=this._$Eh(o,e);n!==void 0&&(this._$Eu.set(n,o),t.push(n))}),t}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||G}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of o)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)e.unshift(At(n))}else t!==void 0&&e.push(At(t));return e}static _$Eh(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ne(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=G){var n,r;const s=this.constructor._$Eh(t,o);if(s!==void 0&&o.reflect===!0){const a=((r=(n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&r!==void 0?r:it.toAttribute)(e,o.type);this._$Ei=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Ei=null}}_$AK(t,e){var o,n,r;const s=this.constructor,a=s._$Eu.get(t);if(a!==void 0&&this._$Ei!==a){const l=s.getPropertyOptions(a),c=l.converter,u=(r=(n=(o=c)===null||o===void 0?void 0:o.fromAttribute)!==null&&n!==void 0?n:typeof c=="function"?c:null)!==null&&r!==void 0?r:it.fromAttribute;this._$Ei=a,this[a]=u(e,l.type),this._$Ei=null}}requestUpdate(t,e,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Nt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,r)=>this[r]=n),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(o)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,o)=>this._$ES(o,this[o],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},Tt==null||Tt({ReactiveElement:A}),((Z=globalThis.reactiveElementVersions)!==null&&Z!==void 0?Z:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J;const T=globalThis.trustedTypes,Pt=T?T.createPolicy("lit-html",{createHTML:i=>i}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,Ht="?"+x,ae=`<${Ht}>`,P=document,U=(i="")=>P.createComment(i),M=i=>i===null||typeof i!="object"&&typeof i!="function",Bt=Array.isArray,le=i=>{var t;return Bt(i)||typeof((t=i)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ot=/-->/g,Ct=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Rt=/'/g,jt=/"/g,Wt=/^(?:script|style|textarea)$/i,qt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),v=qt(1),ce=qt(2),_=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Ut=new WeakMap,Yt=(i,t,e)=>{var o,n;const r=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let s=r._$litPart$;if(s===void 0){const a=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new z(t.insertBefore(U(),a),a,void 0,e!=null?e:{})}return s._$AI(i),s},S=P.createTreeWalker(P,129,null,!1),de=(i,t)=>{const e=i.length-1,o=[];let n,r=t===2?"<svg>":"",s=R;for(let l=0;l<e;l++){const c=i[l];let u,d,h=-1,f=0;for(;f<c.length&&(s.lastIndex=f,d=s.exec(c),d!==null);)f=s.lastIndex,s===R?d[1]==="!--"?s=Ot:d[1]!==void 0?s=Ct:d[2]!==void 0?(Wt.test(d[2])&&(n=RegExp("</"+d[2],"g")),s=E):d[3]!==void 0&&(s=E):s===E?d[0]===">"?(s=n!=null?n:R,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?E:d[3]==='"'?jt:Rt):s===jt||s===Rt?s=E:s===Ot||s===Ct?s=R:(s=E,n=void 0);const k=s===E&&i[l+1].startsWith("/>")?" ":"";r+=s===R?c+ae:h>=0?(o.push(u),c.slice(0,h)+"$lit$"+c.slice(h)+x+k):c+x+(h===-2?(o.push(void 0),l):k)}const a=r+(i[e]||"<?>")+(t===2?"</svg>":"");return[Pt!==void 0?Pt.createHTML(a):a,o]};class L{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[c,u]=de(t,e);if(this.el=L.createElement(c,o),S.currentNode=this.el.content,e===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(n=S.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const h of n.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(x)){const f=u[s++];if(d.push(h),f!==void 0){const k=n.getAttribute(f.toLowerCase()+"$lit$").split(x),y=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:y[2],strings:k,ctor:y[1]==="."?pe:y[1]==="?"?ge:y[1]==="@"?fe:V})}else l.push({type:6,index:r})}for(const h of d)n.removeAttribute(h)}if(Wt.test(n.tagName)){const d=n.textContent.split(x),h=d.length-1;if(h>0){n.textContent=T?T.emptyScript:"";for(let f=0;f<h;f++)n.append(d[f],U()),S.nextNode(),l.push({type:2,index:++r});n.append(d[h],U())}}}else if(n.nodeType===8)if(n.data===Ht)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(x,d+1))!==-1;)l.push({type:7,index:r}),d+=x.length-1}r++}}static createElement(t,e){const o=P.createElement("template");return o.innerHTML=t,o}}function O(i,t,e=i,o){var n,r,s,a;if(t===_)return t;let l=o!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[o]:e._$Cu;const c=M(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,e,o)),o!==void 0?((s=(a=e)._$Cl)!==null&&s!==void 0?s:a._$Cl=[])[o]=l:e._$Cu=l),l!==void 0&&(t=O(i,l._$AS(i,t.values),l,o)),t}class he{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:P).importNode(o,!0);S.currentNode=r;let s=S.nextNode(),a=0,l=0,c=n[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new z(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new ve(s,this,t)),this.v.push(u),c=n[++l]}a!==(c==null?void 0:c.index)&&(s=S.nextNode(),a++)}return r}m(t){let e=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class z{constructor(t,e,o,n){var r;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cg=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),M(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==_&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):le(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==g&&M(this._$AH)?this._$AA.nextSibling.data=t:this.S(P.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=L.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(o);else{const s=new he(r,this),a=s.p(this.options);s.m(o),this.S(a),this._$AH=s}}_$AC(t){let e=Ut.get(t.strings);return e===void 0&&Ut.set(t.strings,e=new L(t)),e}M(t){Bt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const r of t)n===e.length?e.push(o=new z(this.A(U()),this.A(U()),this,this.options)):o=e[n],o._$AI(r),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class V{constructor(t,e,o,n,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,n){const r=this.strings;let s=!1;if(r===void 0)t=O(this,t,e,0),s=!M(t)||t!==this._$AH&&t!==_,s&&(this._$AH=t);else{const a=t;let l,c;for(t=r[0],l=0;l<r.length-1;l++)c=O(this,a[o+l],e,l),c===_&&(c=this._$AH[l]),s||(s=!M(c)||c!==this._$AH[l]),c===g?t=g:t!==g&&(t+=(c!=null?c:"")+r[l+1]),this._$AH[l]=c}s&&!n&&this.k(t)}k(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class pe extends V{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===g?void 0:t}}const ue=T?T.emptyScript:"";class ge extends V{constructor(){super(...arguments),this.type=4}k(t){t&&t!==g?this.element.setAttribute(this.name,ue):this.element.removeAttribute(this.name)}}class fe extends V{constructor(t,e,o,n,r){super(t,e,o,n,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=O(this,t,e,0))!==null&&o!==void 0?o:g)===_)return;const n=this._$AH,r=t===g&&n!==g||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class ve{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const Mt=window.litHtmlPolyfillSupport;Mt==null||Mt(L,z),((J=globalThis.litHtmlVersions)!==null&&J!==void 0?J:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Q,tt;class p extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Yt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return _}}p.finalized=!0,p._$litElement$=!0,(Q=globalThis.litElementHydrateSupport)===null||Q===void 0||Q.call(globalThis,{LitElement:p});const Lt=globalThis.litElementPolyfillSupport;Lt==null||Lt({LitElement:p});((tt=globalThis.litElementVersions)!==null&&tt!==void 0?tt:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=i=>t=>typeof t=="function"?((e,o)=>(window.customElements.define(e,o),o))(i,t):((e,o)=>{const{kind:n,elements:r}=o;return{kind:n,elements:r,finisher(s){window.customElements.define(e,s)}}})(i,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function m(i){return(t,e)=>e!==void 0?((o,n,r)=>{n.constructor.createProperty(r,o)})(i,t,e):be(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(i){return m({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ht=i=>(...t)=>({_$litDirective$:i,values:t});class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=ht(class extends pt{constructor(i){var t;if(super(i),i.type!==dt.ATTRIBUTE||i.name!=="style"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const o=i[e];return o==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ut===void 0){this.ut=new Set;for(const o in t)this.ut.add(o);return this.render(t)}this.ut.forEach(o=>{t[o]==null&&(this.ut.delete(o),o.includes("-")?e.removeProperty(o):e[o]="")});for(const o in t){const n=t[o];n!=null&&(this.ut.add(o),o.includes("-")?e.setProperty(o,n):e[o]=n)}return _}});class _e{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class ${constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:j(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new $(e));if(t.length>0)return t}return[this]}}const j=i=>"pointerId"in i,et=i=>"changedTouches"in i,zt=()=>{};class ye{constructor(t,{start:e=()=>!0,move:o=zt,end:n=zt,rawUpdates:r=!1,avoidPointerEvents:s=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(j(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const l=new $(a);this.currentPointers.some(c=>c.id===l.id)||!this._triggerPointerStart(l,a)||(j(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerStart(new $(l),a)},this._move=a=>{if(!et(a)&&(!j(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const l=this.currentPointers.slice(),c=et(a)?Array.from(a.changedTouches).map(d=>new $(d)):[new $(a)],u=[];for(const d of c){const h=this.currentPointers.findIndex(f=>f.id===d.id);h!==-1&&(u.push(d),this.currentPointers[h]=d)}u.length!==0&&this._moveCallback(l,u,a)},this._triggerPointerEnd=(a,l)=>{if(!et(l)&&l.buttons&1)return!1;const c=this.currentPointers.findIndex(d=>d.id===a.id);if(c===-1)return!1;this.currentPointers.splice(c,1),this.startPointers.splice(c,1),this._excludeFromButtonsCheck.delete(a.id);const u=!(l.type==="mouseup"||l.type==="touchend"||l.type==="pointerup");return this._endCallback(a,l,u),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new $(a),a))if(j(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerEnd(new $(l),a)},this._startCallback=e,this._moveCallback=o,this._endCallback=n,this._rawUpdates=r&&"onpointerrawupdate"in window,self.PointerEvent&&!s?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}const Dt=(i,t)=>i<=t?i:t;var ot=globalThis&&globalThis.__classPrivateFieldGet||function(i,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?i!==t||!o:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(i):o?o.value:t.get(i)},rt,nt,st;const $e={initialPosition:{}};class xe extends pt{constructor(t){if(super(t),this.hasInitialised=!1,t.type!==dt.ELEMENT)throw new Error("The `drag` directive must be used on an element")}update(t,e){if(this.hasInitialised)return;const o=t.element,[n,r]=e;o.setAttribute("data-dragging","idle"),n.draggableElement=o,n.pointerTracker=new ye(o,{start(...s){return r.start(...s),o.setAttribute("data-dragging","dragging"),!0},move(...s){r.move(...s)},end(...s){r.end(...s),o.setAttribute("data-dragging","idle")}}),this.hasInitialised=!0}render(t,e){return _}}const ke=ht(xe);class Ee{constructor(t,e=$e){this.cursorPositionX=null,this.cursorPositionY=null,this.pointerTracker=null,this.draggableElement=null,this.styles={touchAction:"none",top:"0px",left:"0px"},rt.set(this,(n,r)=>(this.cursorPositionX=Math.floor(n.pageX),this.cursorPositionY=Math.floor(n.pageY),r.target.setAttribute("data-state","dragging"),!0)),nt.set(this,(n,r)=>{const[s]=r;window.requestAnimationFrame(()=>this.handleWindowMove(s))}),st.set(this,(n,r)=>{r.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this);const{initialPosition:o={}}=e;this.styles={...this.styles,...o}}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}applyDrag(){return this.host.draggable?ke(this,{start:ot(this,rt,"f"),move:ot(this,nt,"f"),end:ot(this,st,"f")}):null}updateElPosition(t,e){this.styles={...this.styles,left:t,top:e}}handleWindowMove(t){const e=this.draggableElement;if(!e)return;const{top:o,left:n}=this.styles,r=Number(o==null?void 0:o.replace("px","")),s=Number(n==null?void 0:n.replace("px","")),a=Math.floor(t.pageX),l=Math.floor(t.pageY);if(a!==0&&l!==0&&(a!==this.cursorPositionX||l!==this.cursorPositionY)){const{bottom:c,right:u,width:d,height:h}=e.getBoundingClientRect(),f=Dt(screen.availWidth,innerWidth),k=Dt(screen.availHeight,innerHeight),y=a-this.cursorPositionX,K=l-this.cursorPositionY,yt=r+K<0,$t=s+y<0,xt=c+K>k,kt=u+y>f,oe=xt||$t||kt||yt;if(this.cursorPositionX=a,this.cursorPositionY=l,oe){if(yt){const w=`${s}px`;this.updateElPosition(w,"0px")}if($t){const w=`${r}px`;this.updateElPosition("0px",w)}if(xt){const w=`${k-h}px`,C=`${s}px`;this.updateElPosition(C,w)}if(kt){const w=`${r}px`,C=`${f-d}px`;this.updateElPosition(C,w)}}else{const w=`${r+K}px`,C=`${s+y}px`;this.updateElPosition(C,w)}this.host.requestUpdate()}}}rt=new WeakMap,nt=new WeakMap,st=new WeakMap;class Xt extends p{render(){return v`<div id="stack">
      <slot></slot>
    </div>`}}Xt.styles=b`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",Xt);class Vt extends p{render(){return v` <div id="panel">
      <slot></slot>
    </div>`}}Vt.styles=b`
    #panel {
      --inset-shadow-padding: 2px;
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
    }
  `;window.customElements.define("a2k-panel",Vt);var Ae=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Se=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class ut extends p{constructor(){super(...arguments),this.closeable=!1}render(){return v`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}ut.styles=b`
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
  `;Ae([m({type:Boolean}),Se("design:type",Object)],ut.prototype,"closeable",void 0);window.customElements.define("a2k-window-topbar",ut);var Ft=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Kt=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class F extends p{constructor(){super(...arguments),this.disabled=!1,this.size="medium"}render(){return v` <button data-size="${this.size}" ?disabled=${this.disabled}>
      <slot></slot>
    </button>`}}F.styles=b`
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
  `;Ft([m({type:Boolean}),Kt("design:type",Object)],F.prototype,"disabled",void 0);Ft([m({type:String}),Kt("design:type",String)],F.prototype,"size",void 0);window.customElements.define("a2k-button",F);var Te=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Pe=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};const Oe=new URL("/assets/a2k-icons.ff08339c.svg",self.location).href;class gt extends p{constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),ce`
      <svg id="icon" height="1em" width="1em">
        <use href="${Oe}#${this.icon}"></use>
      </svg>
    `}}gt.styles=b`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;Te([m({type:String}),Pe("design:type",Object)],gt.prototype,"icon",void 0);window.customElements.define("a2k-icon",gt);var Ce=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Re=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class ft extends p{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return v`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}ft.styles=b`
    #icon-wrapper {
      font-size: 8px;
    }
  `;Ce([m({type:Boolean}),Re("design:type",Object)],ft.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",ft);var vt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},bt=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class I extends p{constructor(){super(),this.heading="",this.draggable=!1,this.closeable=!1,this.drag=new Ee(this,{initialPosition:{left:"32px",top:"32px"}}),this.addEventListener("close",()=>this.remove())}render(){return v`
      <div id="window" style=${we(this.drag.styles)}>
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
    `}}I.styles=b`
    #window {
      font-family: var(--font-primary);
      letter-spacing: var(--font-primary-letter-spacing);
      position: absolute;
      width: var(--window-width);
      max-width: 100%;
    }

    #draggable {
      width: 100%;
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
  `;vt([m({type:String}),bt("design:type",Object)],I.prototype,"heading",void 0);vt([m({type:Boolean}),bt("design:type",Object)],I.prototype,"draggable",void 0);vt([m({type:Boolean}),bt("design:type",Object)],I.prototype,"closeable",void 0);window.customElements.define("a2k-window",I);var Zt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},je=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let W=class extends p{constructor(){super(...arguments),this.open=!1}render(){return v`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};W.styles=b`
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
  `;Zt([m(),je("design:type",Object)],W.prototype,"open",void 0);W=Zt([D("a2k-start-menu-item")],W);var Gt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ue=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let q=class extends p{constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=v` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;Yt(t,document.body)}render(){const t=String(this.open)==="true";return v`
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
    `}};q.styles=b`
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
  `;Gt([m(),Ue("design:type",Object)],q.prototype,"open",void 0);q=Gt([D("a2k-start-menu")],q);var Jt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Me=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let Y=class extends p{constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return v`
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
  `;Jt([me(),Me("design:type",Object)],Y.prototype,"_isMenuOpen",void 0);Y=Jt([D("a2k-start-button")],Y);var Le=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let at=class extends p{constructor(){super(...arguments),this.clock=new _e(this)}render(){const t=ze.format(this.clock.value);return v`<div class="utility-bar">${t}</div>`}};at.styles=b`
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
  `;at=Le([D("a2k-utility-bar")],at);const ze=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class Qt extends p{render(){return v`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}Qt.styles=b`
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
  `;window.customElements.define("a2k-taskbar",Qt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=ht(class extends pt{constructor(i){var t;if(super(i),i.type!==dt.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,o;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.et=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.et)===null||e===void 0)&&e.has(r))&&this.st.add(r);return this.render(t)}const n=i.element.classList;this.st.forEach(r=>{r in t||(n.remove(r),this.st.delete(r))});for(const r in t){const s=!!t[r];s===this.st.has(r)||((o=this.et)===null||o===void 0?void 0:o.has(r))||(s?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return _}});var te=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ie=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};let X=class extends p{constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return v`<div class=${De(t)} id="unit">
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
  `;te([m(),Ie("design:type",String)],X.prototype,"filled",void 0);X=te([D("a2k-progress-unit")],X);var Ne=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},He=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class mt extends p{constructor(){super(...arguments),this.progress=0,this.width=0}async firstUpdated(){this.generateProgressUnits()}async updated(t){t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){var a;const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=(a=t.getBoundingClientRect().width)!=null?a:0;if(this.width===e)return;this.width=e;const{gap:o}=getComputedStyle(t),r=Number(o.replace("px",""))+12,s=Math.ceil(e/r);Array(s).fill(0).forEach(()=>{const l=document.createElement("a2k-progress-unit");l.setAttribute("filled","none"),t==null||t.appendChild(l)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,o=Be(e),n=Math.floor(e);t.forEach((r,s)=>{s<n?r.setAttribute("filled","filled"):s===n&&o>=.5?r.setAttribute("filled","half"):r.setAttribute("filled","none")})}render(){return v`<div id="progress" role="progress"></div>`}}mt.styles=b`
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
  `;Ne([m({type:Number}),He("design:type",Object)],mt.prototype,"progress",void 0);const Be=i=>Math.floor(i%1*10)/10;window.customElements.define("a2k-progress",mt);class ee extends p{render(){return v`<div id="desktop">
      <slot />
    </div>`}}ee.styles=b`
    #desktop {
      height: 100%;
    }
  `;window.customElements.define("a2k-desktop",ee);var wt=globalThis&&globalThis.__decorate||function(i,t,e,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},_t=globalThis&&globalThis.__metadata||function(i,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,t)};class N extends p{constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return v` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`}}N.styles=b`
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
  `;wt([m({type:String}),_t("design:type",Object)],N.prototype,"text",void 0);wt([m({type:String}),_t("design:type",Object)],N.prototype,"icon",void 0);wt([m(),_t("design:type",Object)],N.prototype,"onOpen",void 0);window.customElements.define("a2k-desktop-icon",N);let H=0;const B=document.querySelector("a2k-window[heading='Please wait...']"),We=setInterval(()=>{const i=document.querySelector("a2k-progress");if(!!i&&(H=H+1.2,i.setAttribute("progress",H),H>70)){for(;B.firstChild;)B.removeChild(B.lastChild);B.innerHTML=`
      <p>There was an error loading Andricos2000</p>
      <p>Andricos2000 is still a work in progress, keeping checking back for updates or follow progress on Twitter</p>
    `,clearInterval(We)}},100),qe=document.querySelector('a2k-desktop-icon[icon="documents-icon"]');qe.onOpen=()=>{window.location.href="https://andri.co"};const Ye=document.querySelector('a2k-desktop-icon[icon="network-icon"]');Ye.onOpen=()=>{window.location.href="https://twitter.com/andricokaroulla"};const Xe=document.querySelector('a2k-desktop-icon[icon="github-icon"]');Xe.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const Ve=document.querySelector('a2k-desktop-icon[icon="help-icon"]');Ve.onOpen=()=>{const i=document.createElement("a2k-window");i.setAttribute("draggable",""),i.setAttribute("closeable",""),i.setAttribute("heading","About Andricos2000");const t=document.createElement("p");t.textContent="Deets coming soon...",i.appendChild(t),document.body.appendChild(i)};const Fe=document.querySelector('a2k-desktop-icon[icon="internet-icon"]');Fe.onOpen=()=>{const i=document.createElement("a2k-window");i.setAttribute("draggable",""),i.setAttribute("closeable",""),i.setAttribute("heading","Internet Explorer 11");const t=document.createElement("p");t.textContent="Deets coming soon...",i.appendChild(t),document.body.appendChild(i)};
