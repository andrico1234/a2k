var Ae=Object.defineProperty;var Se=(o,t,e)=>t in o?Ae(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var A=(o,t,e)=>(Se(o,typeof t!="symbol"?t+"":t,e),e);const Oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}};Oe();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mt=Symbol(),Pt=new WeakMap;class Wt{constructor(t,e,i){if(this._$cssResult$=!0,i!==mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(bt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Pt.set(e,t))}return t}toString(){return this.cssText}}const Te=o=>new Wt(typeof o=="string"?o:o+"",void 0,mt),g=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,n,r)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[r+1],o[0]);return new Wt(e,o,mt)},Pe=(o,t)=>{bt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=window.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Rt=bt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Te(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rt;const Ct=window.trustedTypes,Re=Ct?Ct.emptyScript:"",jt=window.reactiveElementPolyfillSupport,pt={toAttribute(o,t){switch(t){case Boolean:o=o?Re:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Vt=(o,t)=>t!==o&&(t==t||o==o),nt={attribute:!0,type:String,converter:pt,reflect:!1,hasChanged:Vt};class S extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=nt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||nt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Rt(n))}else t!==void 0&&e.push(Rt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Pe(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=nt){var n,r;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const a=((r=(n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&r!==void 0?r:pt.toAttribute)(e,i.type);this._$El=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(t,e){var i,n;const r=this.constructor,s=r._$Ev.get(t);if(s!==void 0&&this._$El!==s){const a=r.getPropertyOptions(s),l=a.converter,d=(n=(i=l==null?void 0:l.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&n!==void 0?n:pt.fromAttribute;this._$El=s,this[s]=d(e,a.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Vt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}S.finalized=!0,S.elementProperties=new Map,S.elementStyles=[],S.shadowRootOptions={mode:"open"},jt==null||jt({ReactiveElement:S}),((rt=globalThis.reactiveElementVersions)!==null&&rt!==void 0?rt:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var st;const T=globalThis.trustedTypes,Lt=T?T.createPolicy("lit-html",{createHTML:o=>o}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,Xt="?"+y,Ce=`<${Xt}>`,P=document,M=(o="")=>P.createComment(o),z=o=>o===null||typeof o!="object"&&typeof o!="function",Yt=Array.isArray,je=o=>{var t;return Yt(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mt=/-->/g,zt=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Ut=/'/g,Dt=/"/g,Ft=/^(?:script|style|textarea|title)$/i,Kt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),p=Kt(1),Le=Kt(2),_=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),It=new WeakMap,wt=(o,t,e)=>{var i,n;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let s=r._$litPart$;if(s===void 0){const a=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new D(t.insertBefore(M(),a),a,void 0,e!=null?e:{})}return s._$AI(o),s},O=P.createTreeWalker(P,129,null,!1),Me=(o,t)=>{const e=o.length-1,i=[];let n,r=t===2?"<svg>":"",s=j;for(let l=0;l<e;l++){const d=o[l];let v,c,f=-1,b=0;for(;b<d.length&&(s.lastIndex=b,c=s.exec(d),c!==null);)b=s.lastIndex,s===j?c[1]==="!--"?s=Mt:c[1]!==void 0?s=zt:c[2]!==void 0?(Ft.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=x):c[3]!==void 0&&(s=x):s===x?c[0]===">"?(s=n!=null?n:j,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,v=c[1],s=c[3]===void 0?x:c[3]==='"'?Dt:Ut):s===Dt||s===Ut?s=x:s===Mt||s===zt?s=j:(s=x,n=void 0);const k=s===x&&o[l+1].startsWith("/>")?" ":"";r+=s===j?d+Ce:f>=0?(i.push(v),d.slice(0,f)+"$lit$"+d.slice(f)+y+k):d+y+(f===-2?(i.push(void 0),l):k)}const a=r+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Lt!==void 0?Lt.createHTML(a):a,i]};class U{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[d,v]=Me(t,e);if(this.el=U.createElement(d,i),O.currentNode=this.el.content,e===2){const c=this.el.content,f=c.firstChild;f.remove(),c.append(...f.childNodes)}for(;(n=O.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const f of n.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(y)){const b=v[s++];if(c.push(f),b!==void 0){const k=n.getAttribute(b.toLowerCase()+"$lit$").split(y),E=/([.?@])?(.*)/.exec(b);l.push({type:1,index:r,name:E[2],strings:k,ctor:E[1]==="."?Ue:E[1]==="?"?Ie:E[1]==="@"?qe:Z})}else l.push({type:6,index:r})}for(const f of c)n.removeAttribute(f)}if(Ft.test(n.tagName)){const c=n.textContent.split(y),f=c.length-1;if(f>0){n.textContent=T?T.emptyScript:"";for(let b=0;b<f;b++)n.append(c[b],M()),O.nextNode(),l.push({type:2,index:++r});n.append(c[f],M())}}}else if(n.nodeType===8)if(n.data===Xt)l.push({type:2,index:r});else{let c=-1;for(;(c=n.data.indexOf(y,c+1))!==-1;)l.push({type:7,index:r}),c+=y.length-1}r++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function R(o,t,e=o,i){var n,r,s,a;if(t===_)return t;let l=i!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[i]:e._$Cu;const d=z(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),d===void 0?l=void 0:(l=new d(o),l._$AT(o,e,i)),i!==void 0?((s=(a=e)._$Cl)!==null&&s!==void 0?s:a._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=R(o,l._$AS(o,t.values),l,i)),t}class ze{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:P).importNode(i,!0);O.currentNode=r;let s=O.nextNode(),a=0,l=0,d=n[0];for(;d!==void 0;){if(a===d.index){let v;d.type===2?v=new D(s,s.nextSibling,this,t):d.type===1?v=new d.ctor(s,d.name,d.strings,this,t):d.type===6&&(v=new He(s,this,t)),this.v.push(v),d=n[++l]}a!==(d==null?void 0:d.index)&&(s=O.nextNode(),a++)}return r}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,n){var r;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),z(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==_&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):je(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==m&&z(this._$AH)?this._$AA.nextSibling.data=t:this.k(P.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=U.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(i);else{const s=new ze(r,this),a=s.p(this.options);s.m(i),this.k(a),this._$AH=s}}_$AC(t){let e=It.get(t.strings);return e===void 0&&It.set(t.strings,e=new U(t)),e}S(t){Yt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new D(this.M(M()),this.M(M()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Z{constructor(t,e,i,n,r){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let s=!1;if(r===void 0)t=R(this,t,e,0),s=!z(t)||t!==this._$AH&&t!==_,s&&(this._$AH=t);else{const a=t;let l,d;for(t=r[0],l=0;l<r.length-1;l++)d=R(this,a[i+l],e,l),d===_&&(d=this._$AH[l]),s||(s=!z(d)||d!==this._$AH[l]),d===m?t=m:t!==m&&(t+=(d!=null?d:"")+r[l+1]),this._$AH[l]=d}s&&!n&&this.C(t)}C(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Ue extends Z{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===m?void 0:t}}const De=T?T.emptyScript:"";class Ie extends Z{constructor(){super(...arguments),this.type=4}C(t){t&&t!==m?this.element.setAttribute(this.name,De):this.element.removeAttribute(this.name)}}class qe extends Z{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=R(this,t,e,0))!==null&&i!==void 0?i:m)===_)return;const n=this._$AH,r=t===m&&n!==m||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==m&&(n===m||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class He{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const qt=window.litHtmlPolyfillSupport;qt==null||qt(U,D),((st=globalThis.litHtmlVersions)!==null&&st!==void 0?st:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at,lt;class h extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return _}}h.finalized=!0,h._$litElement$=!0,(at=globalThis.litElementHydrateSupport)===null||at===void 0||at.call(globalThis,{LitElement:h});const Ht=globalThis.litElementPolyfillSupport;Ht==null||Ht({LitElement:h});((lt=globalThis.litElementVersions)!==null&&lt!==void 0?lt:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=o=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(s){window.customElements.define(e,s)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function u(o){return(t,e)=>e!==void 0?((i,n,r)=>{n.constructor.createProperty(r,i)})(o,t,e):Ne(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gt(o){return u({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const r=(n=e.originalKey)!==null&&n!==void 0?n:e.key,s=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:{...e,key:r};return o!=null&&(s.finisher=function(a){o(a,r)}),s}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o==null||o(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jt(o,t){return Zt({descriptor:e=>{const i={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const n=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var r,s;return this[n]===void 0&&(this[n]=(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&s!==void 0?s:null),this[n]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dt;const Be=((dt=window.HTMLSlotElement)===null||dt===void 0?void 0:dt.prototype.assignedElements)!=null?(o,t)=>o.assignedElements(t):(o,t)=>o.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function We(o){const{slot:t,selector:e}=o!=null?o:{};return Zt({descriptor:i=>({get(){var n;const r="slot"+(t?`[name=${t}]`:":not([name])"),s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(r),a=s!=null?Be(s,o):[];return e?a.filter(l=>l.matches(e)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},te=o=>(...t)=>({_$litDirective$:o,values:t});class ee{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=te(class extends ee{constructor(o){var t;if(super(o),o.type!==Qt.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const i=o[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ct===void 0){this.ct=new Set;for(const i in t)this.ct.add(i);return this.render(t)}this.ct.forEach(i=>{t[i]==null&&(this.ct.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const n=t[i];n!=null&&(this.ct.add(i),i.includes("-")?e.setProperty(i,n):e[i]=n)}return _}});class Ve{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class w{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:L(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new w(e));if(t.length>0)return t}return[this]}}const L=o=>"pointerId"in o,ct=o=>"changedTouches"in o,Nt=()=>{};class Xe{constructor(t,{start:e=()=>!0,move:i=Nt,end:n=Nt,rawUpdates:r=!1,avoidPointerEvents:s=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(L(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const l=new w(a);this.currentPointers.some(d=>d.id===l.id)||!this._triggerPointerStart(l,a)||(L(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerStart(new w(l),a)},this._move=a=>{if(!ct(a)&&(!L(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const l=this.currentPointers.slice(),d=ct(a)?Array.from(a.changedTouches).map(c=>new w(c)):[new w(a)],v=[];for(const c of d){const f=this.currentPointers.findIndex(b=>b.id===c.id);f!==-1&&(v.push(c),this.currentPointers[f]=c)}v.length!==0&&this._moveCallback(l,v,a)},this._triggerPointerEnd=(a,l)=>{if(!ct(l)&&l.buttons&1)return!1;const d=this.currentPointers.findIndex(c=>c.id===a.id);if(d===-1)return!1;this.currentPointers.splice(d,1),this.startPointers.splice(d,1),this._excludeFromButtonsCheck.delete(a.id);const v=!(l.type==="mouseup"||l.type==="touchend"||l.type==="pointerup");return this._endCallback(a,l,v),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new w(a),a))if(L(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerEnd(new w(l),a)},this._startCallback=e,this._moveCallback=i,this._endCallback=n,this._rawUpdates=r&&"onpointerrawupdate"in window,self.PointerEvent&&!s?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}var ht=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(o):i?i.value:t.get(o)},ut,ft,gt;const Ye={initialPosition:{},getContainerEl:()=>null,getDraggableEl:()=>Promise.resolve(null)};class Fe{constructor(t,e=Ye){this.cursorPositionX=0,this.cursorPositionY=0,this.draggableEl=null,this.state="idle",this.pointerTracker=null,this.containerId="",this.styles={position:"absolute",touchAction:"none",top:"0px",left:"0px"},ut.set(this,a=>(this.cursorPositionX=Math.floor(a.pageX),this.cursorPositionY=Math.floor(a.pageY),!0)),ft.set(this,(a,l)=>{const[d]=l,v=this.draggableEl,c=new CustomEvent("window-drag",{bubbles:!0,composed:!0,detail:{pointer:d,containerEl:this.getContainerEl(),draggableEl:v}});this.host.dispatchEvent(c),this.handleWindowMove(d)}),gt.set(this,(a,l)=>{l.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this),this.getContainerEl=e.getContainerEl,e.getDraggableEl().then(a=>{if(!a){console.warn("getDraggableEl() did not return an element HTMLElement");return}this.draggableEl=a,this.init()});const{initialPosition:i,containerId:n=""}=e,{x:r=0,y:s=0}=i;this.x=r,this.y=s,this.updateElPosition(),this.containerId=n}init(){const t=ht(this,ft,"f"),e=ht(this,ut,"f"),i=ht(this,gt,"f"),n=this.host,r=s=>this.state=s;this.pointerTracker=new Xe(this.draggableEl,{start(s){return e(s),r("dragging"),n.requestUpdate(),!0},move(s,a){t(s,a)},end(s,a){i(s,a),r("idle"),n.requestUpdate()}})}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}updateElPosition(){this.styles.transform=`translate(${this.x}px, ${this.y}px)`}handleWindowMove(t){const e=this.draggableEl,i=this.getContainerEl();if(!e||!i)return;const n=this.x,r=this.y,s=Math.floor(t.pageX),a=Math.floor(t.pageY);if(s!==this.cursorPositionX||a!==this.cursorPositionY){const{bottom:d,height:v}=e.getBoundingClientRect(),{right:c,width:f}=i.getBoundingClientRect(),b=s-this.cursorPositionX,k=a-this.cursorPositionY;this.x=n+b,this.y=r+k;const E=this.y<0,xe=this.x<0,$e=d+k>window.innerHeight,Ee=c+b>=window.innerWidth;this.cursorPositionX=s,this.cursorPositionY=a,E&&(this.y=0),xe&&(this.x=0),$e&&(this.y=window.innerHeight-v),Ee&&(this.x=Math.floor(window.innerWidth-f)),this.updateElPosition(),this.host.requestUpdate()}}}ut=new WeakMap,ft=new WeakMap,gt=new WeakMap;const V=(o,t=100)=>Math.round(o*t)/t,Ke=(o,t)=>o<=t?o:t;class oe extends h{render(){return p`<div id="stack">
      <slot></slot>
    </div>`}}oe.styles=g`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",oe);class ie extends h{render(){return p` <div id="panel">
      <slot></slot>
    </div>`}}ie.styles=g`
    #panel {
      border: var(--panel-border);
      background-color: var(--panel-color-background);
      box-shadow: var(--panel-shadow);
    }
  `;window.customElements.define("a2k-panel",ie);class re extends h{render(){return p`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}re.styles=g`
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
  `;window.customElements.define("a2k-window-topbar",re);var ne=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},se=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class J extends h{constructor(){super(...arguments),this.disabled=!1,this.size="medium"}render(){return p` <button data-size="${this.size}" ?disabled=${this.disabled}>
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
  `;ne([u({type:Boolean}),se("design:type",Object)],J.prototype,"disabled",void 0);ne([u({type:String}),se("design:type",String)],J.prototype,"size",void 0);window.customElements.define("a2k-button",J);var Ge=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ze=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};const Je=new URL("/assets/a2k-icons.100a148a.svg",self.location).href;class yt extends h{constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),Le`
      <svg height="1em" width="1em">
        <use href="${Je}#${this.icon}"></use>
      </svg>
    `}}yt.styles=g`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;Ge([u({type:String}),Ze("design:type",Object)],yt.prototype,"icon",void 0);window.customElements.define("a2k-icon",yt);var Qe=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},to=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class _t extends h{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return p`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}_t.styles=g`
    :host {
      position: absolute;
      right: 2px;
    }

    #icon-wrapper {
      font-size: 8px;
    }
  `;Qe([u({type:Boolean}),to("design:type",Object)],_t.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",_t);var kt=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},xt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class q extends h{constructor(){super(),this.heading="",this.draggable=!1,this.closeable=!1,this.drag=new Fe(this,{initialPosition:{x:32,y:32},getContainerEl:()=>this.shadowRoot.querySelector("#window"),getDraggableEl:()=>this.getDraggableEl()}),this.addEventListener("close",()=>this.remove())}async getDraggableEl(){return await this.updateComplete,this.shadowRoot.querySelector("#draggable")}firstUpdated(){const{left:t}=this.drag.styles,{offsetWidth:e}=this.renderRoot.querySelector("#window"),i=Ke(screen.availWidth,innerWidth);Number(t==null?void 0:t.replace("px",""))+e>i&&(this.drag.styles={...this.drag.styles,left:"0px"},this.requestUpdate())}render(){return p`
      <div id="window" style=${X(this.drag.styles)}>
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
    `}}q.styles=g`
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
  `;kt([u({type:String}),xt("design:type",Object)],q.prototype,"heading",void 0);kt([u({type:Boolean}),xt("design:type",Object)],q.prototype,"draggable",void 0);kt([u({type:Boolean}),xt("design:type",Object)],q.prototype,"closeable",void 0);window.customElements.define("a2k-window",q);class ae extends h{render(){return p`<div id="toolbar">
        <slot></slot>
      </div>
      <div id="separator"></div>`}}ae.styles=g`
    #toolbar {
      border-color: var(--color-gray-300) var(--color-gray-700)
        var(--color-gray-700) var(--color-gray-300);
      border-width: 2px;
      border-style: solid;
    }

    #separator {
      border-bottom: 5px solid var(--color-gray-400);
    }
  `;window.customElements.define("a2k-window-toolbar",ae);class le extends h{render(){return p`<div id="item">
      <slot></slot>
    </div>`}}le.styles=g`
    #item {
      border-color: var(--color-gray-700) var(--color-gray-300)
        var(--color-gray-300) var(--color-gray-700);
      border-width: var(--border-width);
      border-style: solid;
      padding: var(--spacing-50);
      background-color: var(--window-toolbar-item-color-background);
    }
  `;window.customElements.define("a2k-window-toolbar-item",le);var de=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ce=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Q extends h{constructor(){super(...arguments),this.statusOne="",this.statusTwo=""}render(){return p`
      <div id="separator"></div>
      <div id="content">
        <div class="section">
          <p>${this.statusOne}</p>
        </div>

        ${this.statusTwo?p` <div class="section-separator"></div>
              <div class="section"><p>${this.statusTwo}</p></div>`:null}
      </div>
    `}}Q.styles=g`
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
  `;de([u({type:String}),ce("design:type",Object)],Q.prototype,"statusOne",void 0);de([u({type:String}),ce("design:type",Object)],Q.prototype,"statusTwo",void 0);window.customElements.define("a2k-window-status-bar",Q);var he=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},eo=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let Y=class extends h{constructor(){super(...arguments),this.open=!1}render(){return p`
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
  `;he([u(),eo("design:type",Object)],Y.prototype,"open",void 0);Y=he([I("a2k-start-menu-item")],Y);var pe=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},oo=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let F=class extends h{constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=p` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;wt(t,document.body)}handleShutdownClick(){location.reload()}render(){const t=String(this.open)==="true";return p`
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
  `;pe([u(),oo("design:type",Object)],F.prototype,"open",void 0);F=pe([I("a2k-start-menu")],F);var ue=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},io=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let K=class extends h{constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return p`
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
  `;ue([Gt(),io("design:type",Object)],K.prototype,"_isMenuOpen",void 0);K=ue([I("a2k-start-button")],K);var ro=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let vt=class extends h{constructor(){super(...arguments),this.clock=new Ve(this)}render(){const t=no.format(this.clock.value);return p`<div class="utility-bar">${t}</div>`}};vt.styles=g`
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
  `;vt=ro([I("a2k-utility-bar")],vt);const no=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class fe extends h{render(){return p`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}fe.styles=g`
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
  `;window.customElements.define("a2k-taskbar",fe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const so=te(class extends ee{constructor(o){var t;if(super(o),o.type!==Qt.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,i;if(this.et===void 0){this.et=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.st)===null||e===void 0)&&e.has(r))&&this.et.add(r);return this.render(t)}const n=o.element.classList;this.et.forEach(r=>{r in t||(n.remove(r),this.et.delete(r))});for(const r in t){const s=!!t[r];s===this.et.has(r)||((i=this.st)===null||i===void 0?void 0:i.has(r))||(s?(n.add(r),this.et.add(r)):(n.remove(r),this.et.delete(r)))}return _}});var ge=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ao=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let G=class extends h{constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return p`<div class=${so(t)} id="unit">
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
  `;ge([u(),ao("design:type",String)],G.prototype,"filled",void 0);G=ge([I("a2k-progress-unit")],G);var lo=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},co=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class $t extends h{constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){var a;const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=(a=t.getBoundingClientRect().width)!=null?a:0;if(this.width===e)return;this.width=e;const{gap:i}=getComputedStyle(t),r=Number(i.replace("px",""))+12,s=Math.ceil(e/r);Array(s).fill(0).forEach(()=>{const l=document.createElement("a2k-progress-unit");l.setAttribute("filled","none"),t==null||t.appendChild(l)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,i=ho(e),n=Math.floor(e);t.forEach((r,s)=>{s<n?r.setAttribute("filled","filled"):s===n&&i>=.5?r.setAttribute("filled","half"):r.setAttribute("filled","none")})}render(){return p`<div id="progress" role="progress"></div>`}}$t.styles=g`
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
  `;lo([u({type:Number}),co("design:type",Object)],$t.prototype,"progress",void 0);const ho=o=>Math.floor(o%1*10)/10;window.customElements.define("a2k-progress",$t);var po=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},uo=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Et extends h{constructor(){super(...arguments),this.defaultValue=""}render(){return p`<input value="${this.defaultValue}" type="text" />`}}Et.styles=g`
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
  `;po([u(),uo("design:type",Object)],Et.prototype,"defaultValue",void 0);window.customElements.define("a2k-text-field",Et);var At=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},St=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class H extends h{constructor(){super(),this.label="",this.selectedItem=null,this.expanded=!1,this.placeholder="Choose an option",this._openListbox=()=>{this.expanded||(this.expanded=!0,document.addEventListener("click",this._hideOnClickOutside))},this._closeListbox=()=>{!this.expanded||(this.expanded=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._hideOnClickOutside=t=>{t.composedPath().includes(this)||this._closeListbox()},this.addEventListener("keydown",t=>{t.key==="Escape"&&this.expanded?this._closeListbox():t.key==="Escape"&&!this.expanded&&(this.selectedItem=null)})}handleOptionSelect(t){const e=t.target;if(e.tagName!=="OPTION")return;const i={value:e.value,label:e.innerText};this.selectedItem=i,this._closeListbox()}handleSelectKeyDown(t){console.log(t.key),(t.key==="ArrowDown"||t.key==="Enter"||t.code==="Space")&&this._openListbox()}handleSelectClick(){this.expanded?this._closeListbox():this._openListbox()}render(){return p`
      <div>
        <label id="label">${this.label}</label>
        <div class="select">
          <div>
            <div
              aria-controls="listbox1"
              ?aria-expanded=${this.expanded}
              aria-haspopup="listbox"
              aria-labelledby="label"
              id="select"
              class="combo-input"
              role="combobox"
              @keydown=${this.handleSelectKeyDown}
              @click=${this.handleSelectClick}
              tabindex="0"
            >
              ${this.selectedItem?this.selectedItem.label:this.placeholder}
              <slot name="icon"> > </slot>
            </div>
          </div>
          <!-- if I put an event handler here, is that an example of event delegation? -->
          <div
            class="combo-menu"
            role="listbox"
            id="listbox1"
            aria-labelledby="label"
            tabindex="-1"
            @click="${this.handleOptionSelect}"
          >
            ${this.expanded?p`
                  <option tabindex="0" value="one">uno</option>
                  <option tabindex="0" value="two">dos</option>
                  <option tabindex="0" value="three">trois</option>
                `:null}
          </div>
        </div>
      </div>
    `}}H.styles=g`
    * {
      box-sizing: border-box;
    }

    /*  */
  `;At([u({type:String}),St("design:type",Object)],H.prototype,"label",void 0);At([u({type:String}),St("design:type",Object)],H.prototype,"selectedItem",void 0);At([Gt(),St("design:type",Object)],H.prototype,"expanded",void 0);window.customElements.define("a2k-select",H);var ve=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},be=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class tt extends h{constructor(){super(...arguments),this.slotHeightStyles={height:"0px"}}firstUpdated(){const t=getComputedStyle(this.desktopContainer).height;this.slotHeightStyles={height:t}}render(){return p`<div id="desktop">
      <slot id="slot" style=${X(this.slotHeightStyles)}></slot>
    </div>`}}tt.styles=g`
    #desktop {
      height: 100%;
    }

    #desktop > slot {
      display: flex;
      flex-flow: column wrap;
      width: fit-content;
    }
  `;ve([u(),be("design:type",Object)],tt.prototype,"slotHeightStyles",void 0);ve([Jt("#desktop"),be("design:type",HTMLSlotElement)],tt.prototype,"desktopContainer",void 0);window.customElements.define("a2k-desktop",tt);var Ot=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Tt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class N extends h{constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return p` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`}}N.styles=g`
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
  `;Ot([u({type:String}),Tt("design:type",Object)],N.prototype,"text",void 0);Ot([u({type:String}),Tt("design:type",Object)],N.prototype,"icon",void 0);Ot([u(),Tt("design:type",Object)],N.prototype,"onOpen",void 0);window.customElements.define("a2k-desktop-icon",N);class me extends h{render(){return p`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}me.styles=g`
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
  `;window.customElements.define("a2k-cover",me);const fo=(o,t)=>{const e=o/t,i=t/o*100,n=Array(e).fill(i),r=n.length;for(let s=0;s<1e3;s++){const a=Math.floor(Math.random()*r),l=n[a],d=Math.floor(Math.random()*r),v=n[d],c=V(Math.random()*l),f=V(l-c),b=V(v+c);n[a]=f,n[d]=b}return n};var B=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},W=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};const go=["Booting Up..."],vo=o=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:o});class $ extends h{constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.state="idle",this.image="",this.footerText="Copyright \u24B8 1999-2000. Andricos2000",this.messages=go,this.progress=0,this.interval=50,this.handleStart=()=>{this.state="loading",document.querySelector("body").setAttribute("data-state","waiting"),this.beginLoading()},this.beginLoading=()=>{const t=fo(this.startupTime,this.interval);this.intervalRef=setInterval(()=>{var r;const e=(r=t[this.currentStep])!=null?r:0,i=V(this.progress+e),n=vo({progress:i,isComplete:i>=100});this.dispatchEvent(n),i>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=i,this.currentStep++)},this.interval)}}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return this.state==="idle"?p`<a2k-cover>
        <div slot="principal">
          <h1 id="standing-by">Standing by...</h1>
          <a2k-button size="large" @click=${this.handleStart}>Start</a2k-button>
        </div>
        <div slot="footer"></div>
      </a2k-cover>`:p`
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
    `}}$.styles=g`
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
  `;B([u({type:String}),W("design:type",Object)],$.prototype,"state",void 0);B([u({type:String}),W("design:type",Object)],$.prototype,"image",void 0);B([u({type:String}),W("design:type",Object)],$.prototype,"footerText",void 0);B([u(),W("design:type",Object)],$.prototype,"messages",void 0);B([u(),W("design:type",Object)],$.prototype,"progress",void 0);window.customElements.define("a2k-startup",$);var we=globalThis&&globalThis.__decorate||function(o,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(r=(n<3?s(r):n>3?s(t,e,r):s(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ye=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class et extends h{firstUpdated(){const[t]=this.slotEl,e=t.cloneNode(!0);this.marqueeWrapperEl.appendChild(e)}render(){return p`<div id="marquee">
      <div id="marquee-inner-1">
        <slot name="text"></slot>
      </div>
      <div id="marquee-inner-2"></div>
    </div>`}}et.styles=g`
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
  `;we([We({slot:"text"}),ye("design:type",Array)],et.prototype,"slotEl",void 0);we([Jt("#marquee-inner-2"),ye("design:type",HTMLElement)],et.prototype,"marqueeWrapperEl",void 0);window.customElements.define("a2k-marquee",et);const bo=p`
  <a2k-window heading="Please wait..." draggable closeable>
    <p class="heading">Andricos<span>2000</span></p>
    <p>Andricos2000 is starting up...</p>
    <a2k-progress></a2k-progress>
  </a2k-window>
`;class _e extends h{constructor(){super(...arguments);A(this,"connection","");A(this,"handleOnline",()=>{connection="Online"});A(this,"handleOffline",()=>{connection="Offline"})}connectedCallback(){super.connectedCallback(),this.addEventListener("online",this.handleOnline),this.addEventListener("offline",this.handleOffline),this.connection=navigator.onLine?"Online":"Offline"}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("online",this.handleOnline),this.removeEventListener("offline",this.handleOffline)}render(){return p` <a2k-window draggable closeable heading="Internet Explorer 5">
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
    </a2k-window>`}}A(_e,"styles",g`
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
  `);window.customElements.define("a2k-ie5",_e);class ke extends h{render(){return p` <a2k-window draggable closeable heading="About Andricos2000">
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
    </a2k-window>`}}A(ke,"styles",g`
    p {
      margin: 0;
    }

    img {
      max-width: 400px;
      object-fit: cover;
    }
  `);window.customElements.define("a2k-about",ke);var mo=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,ot=(o,t,e,i)=>{for(var n=i>1?void 0:i?wo(t,e):t,r=o.length-1,s;r>=0;r--)(s=o[r])&&(n=(i?s(t,e,n):s(n))||n);return i&&n&&mo(t,e,n),n};class C extends h{constructor(){super(...arguments),this.height=0,this.width=0,this.top=0,this.left=0}render(){const t=X({width:`${this.width}px`,transform:`translate(${this.left}px, ${this.top}px)`}),e=X({height:`${this.height}px`});return p`
      <div style=${t} id="outer-wrapper">
        <a2k-panel>
          <div style=${e}></div>
        </a2k-panel>
      </div>
    `}}C.styles=g`
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
  `;ot([u()],C.prototype,"height",2);ot([u()],C.prototype,"width",2);ot([u()],C.prototype,"top",2);ot([u()],C.prototype,"left",2);window.customElements.define("a2k-broken-window",C);const yo=document.querySelector("body"),_o=new URL("/assets/andricos-2000-startup.774be9be.mp3",self.location),it=document.querySelector("#windows-container"),ko=document.querySelector('a2k-desktop-icon[icon="documents-icon"]');ko.onOpen=()=>{window.location.href="https://andri.co"};const xo=document.querySelector('a2k-desktop-icon[icon="network-icon"]');xo.onOpen=()=>{window.location.href="https://twitter.com/andricokaroulla"};const $o=document.querySelector('a2k-desktop-icon[icon="github-icon"]');$o.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const Eo=document.querySelector('a2k-desktop-icon[icon="help-icon"]');Eo.onOpen=()=>{const o=document.createElement("a2k-about");it.append(o)};const Ao=document.querySelector('a2k-desktop-icon[icon="internet-icon"]');Ao.onOpen=()=>{const o=document.createElement("a2k-ie5");it.append(o)};let Bt=!1;const So=o=>{const{target:t,detail:e}=o,{containerEl:i}=e,n=document.querySelector("a2k-window[heading='Please wait...']");if(!n||!n.isSameNode(t))return;const{width:r,top:s,left:a,height:l}=i.getBoundingClientRect(),d=document.createElement("a2k-broken-window");it.insertBefore(d,n),d.setAttribute("height",l),d.setAttribute("width",r),d.setAttribute("top",s),d.setAttribute("left",a)};window.addEventListener("startup-progress",o=>{if(!(o.detail.progress<50)&&!Bt){Bt=!0;try{Oo()}catch{}}});window.addEventListener("startup-progress",o=>{!o.detail.isComplete||(setTimeout(()=>{document.querySelector(".fixed-container").remove(),To(),Po()},300),setTimeout(()=>{yo.removeAttribute("data-state")},500))});function Oo(){const o=new Audio(_o);o.volume=.3,o.play()}function To(){let o=0;setTimeout(()=>{wt(bo,it);const t=document.querySelector("a2k-progress"),e=document.querySelector("a2k-window[heading='Please wait...']"),i=setInterval(()=>{if(!!t&&(o=o+1.2,t.setAttribute("progress",o),o>40)){for(;e.firstChild;)e.removeChild(e.lastChild);window.addEventListener("window-drag",So),e.innerHTML=`
        <a2k-stack>
          <p>Oh no! We had a problem loading Andricos2000. Don't worry, you can still play around and find some easter eggs.</p>
          <p>Andricos2000 is a work in progress, so keep checking back (or follow me on <a href="https://twitter.com/andricokaroulla" target="_blank"
          >Twitter</a
        >) for updates :)</p>
          </a2k-stack>
        `,clearInterval(i)}},100)},700)}function Po(){const o=document.querySelectorAll("a2k-desktop-icon");setTimeout(()=>{o.forEach(t=>{t.removeAttribute("hidden")})},1200)}
