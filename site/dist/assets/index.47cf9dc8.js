var Je=Object.defineProperty;var Qe=(o,t,e)=>t in o?Je(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var K=(o,t,e)=>(Qe(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=window,Xt=mt.ShadowRoot&&(mt.ShadyCSS===void 0||mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yt=Symbol(),ne=new WeakMap;class _e{constructor(t,e,i){if(this._$cssResult$=!0,i!==Yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Xt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ne.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ne.set(e,t))}return t}toString(){return this.cssText}}const ti=o=>new _e(typeof o=="string"?o:o+"",void 0,Yt),x=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,r,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[s+1],o[0]);return new _e(e,o,Yt)},ei=(o,t)=>{Xt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),r=mt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,o.appendChild(i)})},ae=Xt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ti(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jt;const wt=window,le=wt.trustedTypes,ii=le?le.emptyScript:"",de=wt.reactiveElementPolyfillSupport,zt={toAttribute(o,t){switch(t){case Boolean:o=o?ii:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ke=(o,t)=>t!==o&&(t==t||o==o),Ft={attribute:!0,type:String,converter:zt,reflect:!1,hasChanged:ke};class G extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const r=this._$Ep(i,e);r!==void 0&&(this._$Ev.set(r,i),t.push(r))}),t}static createProperty(t,e=Ft){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ft}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of i)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(ae(r))}else t!==void 0&&e.push(ae(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ei(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Ft){var r;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:zt).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,s=r._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=r.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:zt;this._$El=s,this[s]=a.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ke)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw e=!1,this._$Ek(),r}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}G.finalized=!0,G.elementProperties=new Map,G.elementStyles=[],G.shadowRootOptions={mode:"open"},de==null||de({ReactiveElement:G}),((jt=wt.reactiveElementVersions)!==null&&jt!==void 0?jt:wt.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Lt;const yt=window,J=yt.trustedTypes,ce=J?J.createPolicy("lit-html",{createHTML:o=>o}):void 0,q=`lit$${(Math.random()+"").slice(9)}$`,Ee="?"+q,oi=`<${Ee}>`,Q=document,rt=(o="")=>Q.createComment(o),nt=o=>o===null||typeof o!="object"&&typeof o!="function",$e=Array.isArray,si=o=>$e(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,ue=/>/g,B=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pe=/'/g,fe=/"/g,Ce=/^(?:script|style|textarea|title)$/i,xe=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),_=xe(1),ri=xe(2),H=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),ve=new WeakMap,Z=Q.createTreeWalker(Q,129,null,!1),ni=(o,t)=>{const e=o.length-1,i=[];let r,s=t===2?"<svg>":"",n=ot;for(let d=0;d<e;d++){const h=o[d];let b,u,f=-1,w=0;for(;w<h.length&&(n.lastIndex=w,u=n.exec(h),u!==null);)w=n.lastIndex,n===ot?u[1]==="!--"?n=he:u[1]!==void 0?n=ue:u[2]!==void 0?(Ce.test(u[2])&&(r=RegExp("</"+u[2],"g")),n=B):u[3]!==void 0&&(n=B):n===B?u[0]===">"?(n=r!=null?r:ot,f=-1):u[1]===void 0?f=-2:(f=n.lastIndex-u[2].length,b=u[1],n=u[3]===void 0?B:u[3]==='"'?fe:pe):n===fe||n===pe?n=B:n===he||n===ue?n=ot:(n=B,r=void 0);const m=n===B&&o[d+1].startsWith("/>")?" ":"";s+=n===ot?h+oi:f>=0?(i.push(b),h.slice(0,f)+"$lit$"+h.slice(f)+q+m):h+q+(f===-2?(i.push(void 0),d):m)}const a=s+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ce!==void 0?ce.createHTML(a):a,i]};class at{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,n=0;const a=t.length-1,d=this.parts,[h,b]=ni(t,e);if(this.el=at.createElement(h,i),Z.currentNode=this.el.content,e===2){const u=this.el.content,f=u.firstChild;f.remove(),u.append(...f.childNodes)}for(;(r=Z.nextNode())!==null&&d.length<a;){if(r.nodeType===1){if(r.hasAttributes()){const u=[];for(const f of r.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(q)){const w=b[n++];if(u.push(f),w!==void 0){const m=r.getAttribute(w.toLowerCase()+"$lit$").split(q),T=/([.?@])?(.*)/.exec(w);d.push({type:1,index:s,name:T[2],strings:m,ctor:T[1]==="."?li:T[1]==="?"?ci:T[1]==="@"?hi:xt})}else d.push({type:6,index:s})}for(const f of u)r.removeAttribute(f)}if(Ce.test(r.tagName)){const u=r.textContent.split(q),f=u.length-1;if(f>0){r.textContent=J?J.emptyScript:"";for(let w=0;w<f;w++)r.append(u[w],rt()),Z.nextNode(),d.push({type:2,index:++s});r.append(u[f],rt())}}}else if(r.nodeType===8)if(r.data===Ee)d.push({type:2,index:s});else{let u=-1;for(;(u=r.data.indexOf(q,u+1))!==-1;)d.push({type:7,index:s}),u+=q.length-1}s++}}static createElement(t,e){const i=Q.createElement("template");return i.innerHTML=t,i}}function tt(o,t,e=o,i){var r,s,n,a;if(t===H)return t;let d=i!==void 0?(r=e._$Co)===null||r===void 0?void 0:r[i]:e._$Cl;const h=nt(t)?void 0:t._$litDirective$;return(d==null?void 0:d.constructor)!==h&&((s=d==null?void 0:d._$AO)===null||s===void 0||s.call(d,!1),h===void 0?d=void 0:(d=new h(o),d._$AT(o,e,i)),i!==void 0?((n=(a=e)._$Co)!==null&&n!==void 0?n:a._$Co=[])[i]=d:e._$Cl=d),d!==void 0&&(t=tt(o,d._$AS(o,t.values),d,i)),t}class ai{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:r}=this._$AD,s=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Q).importNode(i,!0);Z.currentNode=s;let n=Z.nextNode(),a=0,d=0,h=r[0];for(;h!==void 0;){if(a===h.index){let b;h.type===2?b=new lt(n,n.nextSibling,this,t):h.type===1?b=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(b=new ui(n,this,t)),this.u.push(b),h=r[++d]}a!==(h==null?void 0:h.index)&&(n=Z.nextNode(),a++)}return s}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class lt{constructor(t,e,i,r){var s;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cm=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=tt(this,t,e),nt(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==H&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):si(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==O&&nt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Q.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=at.createElement(r.h,this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.p(i);else{const n=new ai(s,this),a=n.v(this.options);n.p(i),this.T(a),this._$AH=n}}_$AC(t){let e=ve.get(t.strings);return e===void 0&&ve.set(t.strings,e=new at(t)),e}k(t){$e(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new lt(this.O(rt()),this.O(rt()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class xt{constructor(t,e,i,r,s){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const s=this.strings;let n=!1;if(s===void 0)t=tt(this,t,e,0),n=!nt(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const a=t;let d,h;for(t=s[0],d=0;d<s.length-1;d++)h=tt(this,a[i+d],e,d),h===H&&(h=this._$AH[d]),n||(n=!nt(h)||h!==this._$AH[d]),h===O?t=O:t!==O&&(t+=(h!=null?h:"")+s[d+1]),this._$AH[d]=h}n&&!r&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class li extends xt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}}const di=J?J.emptyScript:"";class ci extends xt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,di):this.element.removeAttribute(this.name)}}class hi extends xt{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=tt(this,t,e,0))!==null&&i!==void 0?i:O)===H)return;const r=this._$AH,s=t===O&&r!==O||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==O&&(r===O||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class ui{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const ge=yt.litHtmlPolyfillSupport;ge==null||ge(at,lt),((Lt=yt.litHtmlVersions)!==null&&Lt!==void 0?Lt:yt.litHtmlVersions=[]).push("2.4.0");const Kt=(o,t,e)=>{var i,r;const s=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=s._$litPart$;if(n===void 0){const a=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new lt(t.insertBefore(rt(),a),a,void 0,e!=null?e:{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vt,Ut;class k extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return H}}k.finalized=!0,k._$litElement$=!0,(Vt=globalThis.litElementHydrateSupport)===null||Vt===void 0||Vt.call(globalThis,{LitElement:k});const me=globalThis.litElementPolyfillSupport;me==null||me({LitElement:k});((Ut=globalThis.litElementVersions)!==null&&Ut!==void 0?Ut:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:r,elements:s}=i;return{kind:r,elements:s,finisher(n){customElements.define(e,n)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pi=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function g(o){return(t,e)=>e!==void 0?((i,r,s)=>{r.constructor.createProperty(s,i)})(o,t,e):pi(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ae(o){return g({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=({finisher:o,descriptor:t})=>(e,i)=>{var r;if(i===void 0){const s=(r=e.originalKey)!==null&&r!==void 0?r:e.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return o!=null&&(n.finisher=function(a){o(a,s)}),n}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o==null||o(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Te(o,t){return Se({descriptor:e=>{const i={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const r=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var s,n;return this[r]===void 0&&(this[r]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(o))!==null&&n!==void 0?n:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dt;const fi=((Dt=window.HTMLSlotElement)===null||Dt===void 0?void 0:Dt.prototype.assignedElements)!=null?(o,t)=>o.assignedElements(t):(o,t)=>o.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function vi(o){const{slot:t,selector:e}=o!=null?o:{};return Se({descriptor:i=>({get(){var r;const s="slot"+(t?`[name=${t}]`:":not([name])"),n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s),a=n!=null?fi(n,o):[];return e?a.filter(d=>d.matches(e)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pe=o=>(...t)=>({_$litDirective$:o,values:t});class Re{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=Pe(class extends Re{constructor(o){var t;if(super(o),o.type!==Oe.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const i=o[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[t]){const{style:e}=o.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const r=t[i];r!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,r):e[i]=r)}return H}});class gi{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class z{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:st(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new z(e));if(t.length>0)return t}return[this]}}const st=o=>"pointerId"in o,It=o=>"changedTouches"in o,be=()=>{};class mi{constructor(t,{start:e=()=>!0,move:i=be,end:r=be,rawUpdates:s=!1,avoidPointerEvents:n=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(st(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const d=new z(a);this.currentPointers.some(h=>h.id===d.id)||!this._triggerPointerStart(d,a)||(st(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const d of Array.from(a.changedTouches))this._triggerPointerStart(new z(d),a)},this._move=a=>{if(!It(a)&&(!st(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const d=this.currentPointers.slice(),h=It(a)?Array.from(a.changedTouches).map(u=>new z(u)):[new z(a)],b=[];for(const u of h){const f=this.currentPointers.findIndex(w=>w.id===u.id);f!==-1&&(b.push(u),this.currentPointers[f]=u)}b.length!==0&&this._moveCallback(d,b,a)},this._triggerPointerEnd=(a,d)=>{if(!It(d)&&d.buttons&1)return!1;const h=this.currentPointers.findIndex(u=>u.id===a.id);if(h===-1)return!1;this.currentPointers.splice(h,1),this.startPointers.splice(h,1),this._excludeFromButtonsCheck.delete(a.id);const b=!(d.type==="mouseup"||d.type==="touchend"||d.type==="pointerup");return this._endCallback(a,d,b),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new z(a),a))if(st(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const d of Array.from(a.changedTouches))this._triggerPointerEnd(new z(d),a)},this._startCallback=e,this._moveCallback=i,this._endCallback=r,this._rawUpdates=s&&"onpointerrawupdate"in window,self.PointerEvent&&!n?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}var Wt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(o):i?i.value:t.get(o)},qt,Ht,Nt;const we={initialPosition:{},getContainerEl:()=>null,getDraggableEl:()=>Promise.resolve(null),getIsDraggable:()=>!0};class bi{constructor(t,e=we){var n;this.cursorPositionX=0,this.cursorPositionY=0,this.draggableEl=null,this.state="idle",this.pointerTracker=null,this.styles={position:"absolute",touchAction:"none",top:"0px",left:"0px"},qt.set(this,a=>(this.cursorPositionX=Math.floor(a.pageX),this.cursorPositionY=Math.floor(a.pageY),!0)),Ht.set(this,(a,d)=>{const[h]=d,b=this.draggableEl,u=new CustomEvent("window-drag",{bubbles:!0,composed:!0,detail:{pointer:h,containerEl:this.getContainerEl(),draggableEl:b}});this.host.dispatchEvent(u),this.handleWindowMove(h)}),Nt.set(this,(a,d)=>{d.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this),this.getContainerEl=e.getContainerEl,this.getIsDraggable=(n=e.getIsDraggable)!=null?n:we.getIsDraggable,e.getDraggableEl().then(a=>{if(!a){console.warn("getDraggableEl() did not return an element HTMLElement");return}this.draggableEl=a,this.init()});const{initialPosition:i}=e,{x:r=0,y:s=0}=i;this.x=r,this.y=s,this.updateElPosition()}init(){const t=Wt(this,Ht,"f"),e=Wt(this,qt,"f"),i=Wt(this,Nt,"f"),r=this.host,s=n=>this.state=n;this.pointerTracker=new mi(this.draggableEl,{start(n){return e(n),s("dragging"),r.requestUpdate(),!0},move(n,a){t(n,a)},end(n,a){i(n,a),s("idle"),r.requestUpdate()}})}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}updateElPosition(){this.styles.transform=`translate(${this.x}px, ${this.y}px)`}handleWindowMove(t){const e=this.draggableEl,i=this.getContainerEl();if(!e||!i||!this.getIsDraggable())return;const s=this.x,n=this.y,a=Math.floor(t.pageX),d=Math.floor(t.pageY);if(a!==this.cursorPositionX||d!==this.cursorPositionY){const{bottom:b,height:u}=e.getBoundingClientRect(),{right:f,width:w}=i.getBoundingClientRect(),m=a-this.cursorPositionX,T=d-this.cursorPositionY;this.x=s+m,this.y=n+T,this.cursorPositionX=a,this.cursorPositionY=d;const L=this.y<0,V=this.x<0,N=b+T>window.innerHeight,P=f+m>=window.innerWidth;L&&(this.y=0),V&&(this.x=0),N&&(this.y=window.innerHeight-u),P&&(this.x=Math.floor(window.innerWidth-w)),this.updateElPosition(),this.host.requestUpdate()}}}qt=new WeakMap,Ht=new WeakMap,Nt=new WeakMap;const bt=(o,t=100)=>Math.round(o*t)/t,wi=(o,t)=>o<=t?o:t;class Me extends k{render(){return _`<div id="stack">
      <slot></slot>
    </div>`}}Me.styles=x`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",Me);class je extends k{render(){return _` <div id="panel">
      <slot></slot>
    </div>`}}je.styles=x`
    #panel {
      border: var(--panel-border);
      background-color: var(--panel-color-background);
      box-shadow: var(--panel-shadow);
    }
  `;window.customElements.define("a2k-panel",je);class Fe extends k{render(){return _`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}Fe.styles=x`
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
  `;window.customElements.define("a2k-window-topbar",Fe);var E=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(o):i?i.value:t.get(o)},R=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(o,e):r?r.value=e:t.set(o,e),e};function yi(o){var t,e,i,r,s,n,a,d,h,b,u,f,w,m,T,L,V;class N extends o{constructor(...l){super(...l),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),r.set(this,!1),s.set(this,void 0),n.set(this,void 0),a.set(this,""),d.set(this,()=>{R(this,r,!0,"f"),R(this,e,!0,"f"),E(this,t,"m",m).call(this)}),h.set(this,()=>{R(this,e,!1,"f"),E(this,t,"m",T).call(this,this.shouldFormValueUpdate()?E(this,a,"f"):""),!this.validity.valid&&E(this,r,"f")&&R(this,i,!0,"f");const c=E(this,t,"m",m).call(this);this.validationMessageCallback&&this.validationMessageCallback(c?this.internals.validationMessage:"")}),b.set(this,()=>{var c;R(this,i,!0,"f"),E(this,t,"m",m).call(this),(c=this===null||this===void 0?void 0:this.validationMessageCallback)===null||c===void 0||c.call(this,this.showError?this.internals.validationMessage:"")}),u.set(this,void 0),f.set(this,!1),w.set(this,Promise.resolve()),this.addEventListener("focus",E(this,d,"f")),this.addEventListener("blur",E(this,h,"f")),this.addEventListener("invalid",E(this,b,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const l=this.validators.map(p=>p.attribute),c=super.observedAttributes||[];return[...new Set([...c,...l])]}static getValidator(l){return this.validators.find(c=>c.attribute===l)||null}get form(){return this.internals.form}get showError(){return E(this,t,"m",m).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(l,c,v){var p;(p=super.attributeChangedCallback)===null||p===void 0||p.call(this,l,c,v),this.constructor.getValidator(l)&&this.validationTarget&&this.setValue(E(this,a,"f"))}setValue(l){var c;R(this,i,!1,"f"),(c=this.validationMessageCallback)===null||c===void 0||c.call(this,""),R(this,a,l,"f");const p=this.shouldFormValueUpdate()?l:null;this.internals.setFormValue(p),E(this,t,"m",T).call(this,p),this.valueChangedCallback&&this.valueChangedCallback(p),E(this,t,"m",m).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(l=>l(E(this,w,"f")))}formResetCallback(){var l,c;R(this,r,!1,"f"),R(this,i,!1,"f"),E(this,t,"m",m).call(this),(l=this.resetFormControl)===null||l===void 0||l.call(this),(c=this.validationMessageCallback)===null||c===void 0||c.call(this,E(this,t,"m",m).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,r=new WeakMap,s=new WeakMap,n=new WeakMap,a=new WeakMap,d=new WeakMap,h=new WeakMap,b=new WeakMap,u=new WeakMap,f=new WeakMap,w=new WeakMap,t=new WeakSet,m=function(){if(this.hasAttribute("disabled"))return!1;const l=E(this,i,"f")||E(this,r,"f")&&!this.validity.valid&&!E(this,e,"f");return l&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),l},T=function(l){const c=this.constructor,v={},p=c.validators,U=[];E(this,f,"f")||(R(this,w,new Promise(y=>{R(this,u,y,"f")}),"f"),R(this,f,!0,"f")),E(this,s,"f")&&(E(this,s,"f").abort(),R(this,n,E(this,s,"f"),"f"));const A=new AbortController;R(this,s,A,"f");let F,W=!1;!p.length||(p.forEach(y=>{const D=y.key||"customError",S=y.isValid(this,l,A.signal);S instanceof Promise?(U.push(S),S.then(I=>{I!=null&&(v[D]=!I,F=E(this,t,"m",V).call(this,y,l),E(this,t,"m",L).call(this,v,F))})):(v[D]=!S,this.validity[D]!==!S&&(W=!0),S||(F=E(this,t,"m",V).call(this,y,l)))}),Promise.allSettled(U).then(()=>{var y;A!=null&&A.signal.aborted||(R(this,f,!1,"f"),(y=E(this,u,"f"))===null||y===void 0||y.call(this))}),W&&E(this,t,"m",L).call(this,v,F))},L=function(l,c){if(this.validationTarget)this.internals.setValidity(l,c,this.validationTarget);else{if(this.internals.setValidity(l,c),this.internals.validity.valid)return;let v=0;const p=setInterval(()=>{v>=100||this.validity.valid?clearInterval(p):this.validationTarget&&(this.internals.setValidity(this.validity,c,this.validationTarget),clearInterval(p)),v+=1},0)}},V=function(l,c){if(this.validityCallback){const v=this.validityCallback(l.key||"customError");if(v)return v}return l.message instanceof Function?l.message(this,c):l.message},N}var Gt=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},Zt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class ct extends yi(k){constructor(){super(...arguments),this.disabled=!1,this.type="",this.size="medium"}handleSubmit(){this.form.requestSubmit()}connectedCallback(){super.connectedCallback(),!this.type&&this.form?this.type:this.type,this.type==="submit"&&this.addEventListener("click",this.handleSubmit)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleSubmit)}render(){return _` <button data-size="${this.size}" ?disabled=${this.disabled}>
      <slot></slot>
    </button>`}}ct.styles=x`
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
  `;Gt([g({type:Boolean}),Zt("design:type",Object)],ct.prototype,"disabled",void 0);Gt([g({type:String}),Zt("design:type",Object)],ct.prototype,"type",void 0);Gt([g({type:String}),Zt("design:type",String)],ct.prototype,"size",void 0);window.customElements.define("a2k-button",ct);var _i=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},ki=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};const Ei=new URL("/assets/a2k-icons.20ee8091.svg",self.location).href;class Jt extends k{constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),ri`
      <svg height="1em" width="1em">
        <use href="${Ei}#${this.icon}"></use>
      </svg>
    `}}Jt.styles=x`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;_i([g({type:String}),ki("design:type",Object)],Jt.prototype,"icon",void 0);window.customElements.define("a2k-icon",Jt);var $i=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},Ci=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Qt extends k{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return _`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}Qt.styles=x`
    :host {
      position: absolute;
      right: 2px;
    }

    #icon-wrapper {
      font-size: 8px;
    }
  `;$i([g({type:Boolean}),Ci("design:type",Object)],Qt.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",Qt);var te=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},ee=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class ht extends k{constructor(){super(),this.heading="",this.draggable=!1,this.closeable=!1,this.drag=new bi(this,{initialPosition:{x:32,y:32},getContainerEl:()=>this.shadowRoot.querySelector("#window"),getDraggableEl:()=>this.getDraggableEl(),getIsDraggable:()=>this.draggable}),this.addEventListener("close",()=>this.remove())}async getDraggableEl(){return await this.updateComplete,this.shadowRoot.querySelector("#draggable")}firstUpdated(){const{x:t,y:e}=this.drag,{offsetWidth:i}=this.renderRoot.querySelector("#window"),r=wi(screen.availWidth,innerWidth);t+i>r&&(this.drag.styles.transform=`translate(0px, ${e}px)`,this.requestUpdate())}render(){return _`
      <div id="window" style=${_t(this.drag.styles)}>
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
    `}}ht.styles=x`
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
  `;te([g({type:String}),ee("design:type",Object)],ht.prototype,"heading",void 0);te([g({type:Boolean}),ee("design:type",Object)],ht.prototype,"draggable",void 0);te([g({type:Boolean}),ee("design:type",Object)],ht.prototype,"closeable",void 0);window.customElements.define("a2k-window",ht);class Le extends k{render(){return _`<div id="toolbar">
        <slot></slot>
      </div>
      <div id="separator"></div>`}}Le.styles=x`
    #toolbar {
      border-color: var(--color-gray-300) var(--color-gray-700)
        var(--color-gray-700) var(--color-gray-300);
      border-width: 2px;
      border-style: solid;
    }

    #separator {
      border-bottom: 5px solid var(--color-gray-400);
    }
  `;window.customElements.define("a2k-window-toolbar",Le);class Ve extends k{render(){return _`<div id="item">
      <slot></slot>
    </div>`}}Ve.styles=x`
    #item {
      border-color: var(--color-gray-700) var(--color-gray-300)
        var(--color-gray-300) var(--color-gray-700);
      border-width: var(--border-width);
      border-style: solid;
      padding: var(--spacing-50);
      background-color: var(--window-toolbar-item-color-background);
    }
  `;window.customElements.define("a2k-window-toolbar-item",Ve);var Ue=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},De=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class At extends k{constructor(){super(...arguments),this.statusOne="",this.statusTwo=""}render(){return _`
      <div id="separator"></div>
      <div id="content">
        <div class="section">
          <p>${this.statusOne}</p>
        </div>

        ${this.statusTwo?_` <div class="section-separator"></div>
              <div class="section"><p>${this.statusTwo}</p></div>`:null}
      </div>
    `}}At.styles=x`
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
  `;Ue([g({type:String}),De("design:type",Object)],At.prototype,"statusOne",void 0);Ue([g({type:String}),De("design:type",Object)],At.prototype,"statusTwo",void 0);window.customElements.define("a2k-window-status-bar",At);var Ie=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},xi=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let kt=class extends k{constructor(){super(...arguments),this.open=!1}render(){return _`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};kt.styles=x`
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
  `;Ie([g(),xi("design:type",Object)],kt.prototype,"open",void 0);kt=Ie([dt("a2k-start-menu-item")],kt);var We=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},Ai=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let Et=class extends k{constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=_` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;Kt(t,document.body)}handleShutdownClick(){location.reload()}render(){const t=String(this.open)==="true";return _`
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
    `}};Et.styles=x`
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
  `;We([g(),Ai("design:type",Object)],Et.prototype,"open",void 0);Et=We([dt("a2k-start-menu")],Et);var ze=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},Si=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let $t=class extends k{constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return _`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `}};$t.styles=x`
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
  `;ze([Ae(),Si("design:type",Object)],$t.prototype,"_isMenuOpen",void 0);$t=ze([dt("a2k-start-button")],$t);var Ti=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s};let Bt=class extends k{constructor(){super(...arguments),this.clock=new gi(this)}render(){const t=Oi.format(this.clock.value);return _`<div class="utility-bar">${t}</div>`}};Bt.styles=x`
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
  `;Bt=Ti([dt("a2k-utility-bar")],Bt);const Oi=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class qe extends k{render(){return _`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}qe.styles=x`
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
  `;window.customElements.define("a2k-taskbar",qe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=Pe(class extends Re{constructor(o){var t;if(super(o),o.type!==Oe.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,i;if(this.nt===void 0){this.nt=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((e=this.st)===null||e===void 0)&&e.has(s))&&this.nt.add(s);return this.render(t)}const r=o.element.classList;this.nt.forEach(s=>{s in t||(r.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||((i=this.st)===null||i===void 0?void 0:i.has(s))||(n?(r.add(s),this.nt.add(s)):(r.remove(s),this.nt.delete(s)))}return H}});var He=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},Ri=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let Ct=class extends k{constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return _`<div class=${Pi(t)} id="unit">
      <div></div>
      <div></div>
    </div>`}};Ct.styles=x`
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
  `;He([g(),Ri("design:type",String)],Ct.prototype,"filled",void 0);Ct=He([dt("a2k-progress-unit")],Ct);var Mi=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},ji=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class ie extends k{constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){var a;const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=(a=t.getBoundingClientRect().width)!=null?a:0;if(this.width===e)return;this.width=e;const{gap:i}=getComputedStyle(t),s=Number(i.replace("px",""))+12,n=Math.ceil(e/s);Array(n).fill(0).forEach(()=>{const d=document.createElement("a2k-progress-unit");d.setAttribute("filled","none"),t==null||t.appendChild(d)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,i=Fi(e),r=Math.floor(e);t.forEach((s,n)=>{n<r?s.setAttribute("filled","filled"):n===r&&i>=.5?s.setAttribute("filled","half"):s.setAttribute("filled","none")})}render(){return _`<div id="progress" role="progress"></div>`}}ie.styles=x`
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
  `;Mi([g({type:Number}),ji("design:type",Object)],ie.prototype,"progress",void 0);const Fi=o=>Math.floor(o%1*10)/10;window.customElements.define("a2k-progress",ie);var $=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(o):i?i.value:t.get(o)},M=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(o,e):r?r.value=e:t.set(o,e),e};function Li(o){var t,e,i,r,s,n,a,d,h,b,u,f,w,m,T,L,V;class N extends o{constructor(...l){super(...l),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),r.set(this,!1),s.set(this,void 0),n.set(this,void 0),a.set(this,""),d.set(this,()=>{M(this,r,!0,"f"),M(this,e,!0,"f"),$(this,t,"m",m).call(this)}),h.set(this,()=>{M(this,e,!1,"f"),$(this,t,"m",T).call(this,this.shouldFormValueUpdate()?$(this,a,"f"):""),!this.validity.valid&&$(this,r,"f")&&M(this,i,!0,"f");const c=$(this,t,"m",m).call(this);this.validationMessageCallback&&this.validationMessageCallback(c?this.internals.validationMessage:"")}),b.set(this,()=>{var c;M(this,i,!0,"f"),$(this,t,"m",m).call(this),(c=this===null||this===void 0?void 0:this.validationMessageCallback)===null||c===void 0||c.call(this,this.showError?this.internals.validationMessage:"")}),u.set(this,void 0),f.set(this,!1),w.set(this,Promise.resolve()),this.addEventListener("focus",$(this,d,"f")),this.addEventListener("blur",$(this,h,"f")),this.addEventListener("invalid",$(this,b,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const l=this.validators.map(p=>p.attribute),c=super.observedAttributes||[];return[...new Set([...c,...l])]}static getValidator(l){return this.validators.find(c=>c.attribute===l)||null}get form(){return this.internals.form}get showError(){return $(this,t,"m",m).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(l,c,v){var p;(p=super.attributeChangedCallback)===null||p===void 0||p.call(this,l,c,v),this.constructor.getValidator(l)&&this.validationTarget&&this.setValue($(this,a,"f"))}setValue(l){var c;M(this,i,!1,"f"),(c=this.validationMessageCallback)===null||c===void 0||c.call(this,""),M(this,a,l,"f");const p=this.shouldFormValueUpdate()?l:null;this.internals.setFormValue(p),$(this,t,"m",T).call(this,p),this.valueChangedCallback&&this.valueChangedCallback(p),$(this,t,"m",m).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(l=>l($(this,w,"f")))}formResetCallback(){var l,c;M(this,r,!1,"f"),M(this,i,!1,"f"),$(this,t,"m",m).call(this),(l=this.resetFormControl)===null||l===void 0||l.call(this),(c=this.validationMessageCallback)===null||c===void 0||c.call(this,$(this,t,"m",m).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,r=new WeakMap,s=new WeakMap,n=new WeakMap,a=new WeakMap,d=new WeakMap,h=new WeakMap,b=new WeakMap,u=new WeakMap,f=new WeakMap,w=new WeakMap,t=new WeakSet,m=function(){if(this.hasAttribute("disabled"))return!1;const l=$(this,i,"f")||$(this,r,"f")&&!this.validity.valid&&!$(this,e,"f");return l&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),l},T=function(l){const c=this.constructor,v={},p=c.validators,U=[];$(this,f,"f")||(M(this,w,new Promise(y=>{M(this,u,y,"f")}),"f"),M(this,f,!0,"f")),$(this,s,"f")&&($(this,s,"f").abort(),M(this,n,$(this,s,"f"),"f"));const A=new AbortController;M(this,s,A,"f");let F,W=!1;!p.length||(p.forEach(y=>{const D=y.key||"customError",S=y.isValid(this,l,A.signal);S instanceof Promise?(U.push(S),S.then(I=>{I!=null&&(v[D]=!I,F=$(this,t,"m",V).call(this,y,l),$(this,t,"m",L).call(this,v,F))})):(v[D]=!S,this.validity[D]!==!S&&(W=!0),S||(F=$(this,t,"m",V).call(this,y,l)))}),Promise.allSettled(U).then(()=>{var y;A!=null&&A.signal.aborted||(M(this,f,!1,"f"),(y=$(this,u,"f"))===null||y===void 0||y.call(this))}),W&&$(this,t,"m",L).call(this,v,F))},L=function(l,c){if(this.validationTarget)this.internals.setValidity(l,c,this.validationTarget);else{if(this.internals.setValidity(l,c),this.internals.validity.valid)return;let v=0;const p=setInterval(()=>{v>=100||this.validity.valid?clearInterval(p):this.validationTarget&&(this.internals.setValidity(this.validity,c,this.validationTarget),clearInterval(p)),v+=1},0)}},V=function(l,c){if(this.validityCallback){const v=this.validityCallback(l.key||"customError");if(v)return v}return l.message instanceof Function?l.message(this,c):l.message},N}var St=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},Tt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class et extends Li(k){constructor(){super(...arguments),this.defaultValue="",this.name="",this.label="",this.placeholder=""}static get formAssociated(){return!0}handleInputChange(t){const e=t.target;this.setValue(e.value);const i=new Event("change",{composed:!0,bubbles:!0});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.label&&(this.label=`${this.label}:`)}render(){return _`
      <div>
        <label for="input">${this.label}</label>
        <input
          id="input"
          name=${this.name}
          defaultValue=${this.defaultValue}
          placeholder=${this.placeholder}
          type="text"
          @input=${this.handleInputChange}
          @change=${this.handleInputChange}
        />
      </div>
    `}}et.styles=x`
    * {
      box-sizing: border-box;
      letter-spacing: var(--letter-spacing);
    }

    :host {
      display: block;
      width: 100%;
    }

    input {
      font-family: var(--font-primary);
      font-size: var(--text-field-font-size);
      padding-inline: var(--text-field-padding-inline);
      width: 100%;
      height: var(--text-field-height);
      border-top: var(--text-field-border-top);
      border-left: var(--text-field-border-left);
      border-bottom: var(--text-field-border-bottom);
      border-right: var(--text-field-border-right);
    }

    input::placeholder {
      font-family: var(--font-primary);
    }
  `;St([g(),Tt("design:type",Object)],et.prototype,"defaultValue",void 0);St([g(),Tt("design:type",Object)],et.prototype,"name",void 0);St([g(),Tt("design:type",Object)],et.prototype,"label",void 0);St([g(),Tt("design:type",Object)],et.prototype,"placeholder",void 0);window.customElements.define("a2k-text-field",et);var C=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(o):i?i.value:t.get(o)},j=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(o,e):r?r.value=e:t.set(o,e),e};function Vi(o){var t,e,i,r,s,n,a,d,h,b,u,f,w,m,T,L,V;class N extends o{constructor(...l){super(...l),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),r.set(this,!1),s.set(this,void 0),n.set(this,void 0),a.set(this,""),d.set(this,()=>{j(this,r,!0,"f"),j(this,e,!0,"f"),C(this,t,"m",m).call(this)}),h.set(this,()=>{j(this,e,!1,"f"),C(this,t,"m",T).call(this,this.shouldFormValueUpdate()?C(this,a,"f"):""),!this.validity.valid&&C(this,r,"f")&&j(this,i,!0,"f");const c=C(this,t,"m",m).call(this);this.validationMessageCallback&&this.validationMessageCallback(c?this.internals.validationMessage:"")}),b.set(this,()=>{var c;j(this,i,!0,"f"),C(this,t,"m",m).call(this),(c=this===null||this===void 0?void 0:this.validationMessageCallback)===null||c===void 0||c.call(this,this.showError?this.internals.validationMessage:"")}),u.set(this,void 0),f.set(this,!1),w.set(this,Promise.resolve()),this.addEventListener("focus",C(this,d,"f")),this.addEventListener("blur",C(this,h,"f")),this.addEventListener("invalid",C(this,b,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const l=this.validators.map(p=>p.attribute),c=super.observedAttributes||[];return[...new Set([...c,...l])]}static getValidator(l){return this.validators.find(c=>c.attribute===l)||null}get form(){return this.internals.form}get showError(){return C(this,t,"m",m).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(l,c,v){var p;(p=super.attributeChangedCallback)===null||p===void 0||p.call(this,l,c,v),this.constructor.getValidator(l)&&this.validationTarget&&this.setValue(C(this,a,"f"))}setValue(l){var c;j(this,i,!1,"f"),(c=this.validationMessageCallback)===null||c===void 0||c.call(this,""),j(this,a,l,"f");const p=this.shouldFormValueUpdate()?l:null;this.internals.setFormValue(p),C(this,t,"m",T).call(this,p),this.valueChangedCallback&&this.valueChangedCallback(p),C(this,t,"m",m).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(l=>l(C(this,w,"f")))}formResetCallback(){var l,c;j(this,r,!1,"f"),j(this,i,!1,"f"),C(this,t,"m",m).call(this),(l=this.resetFormControl)===null||l===void 0||l.call(this),(c=this.validationMessageCallback)===null||c===void 0||c.call(this,C(this,t,"m",m).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,r=new WeakMap,s=new WeakMap,n=new WeakMap,a=new WeakMap,d=new WeakMap,h=new WeakMap,b=new WeakMap,u=new WeakMap,f=new WeakMap,w=new WeakMap,t=new WeakSet,m=function(){if(this.hasAttribute("disabled"))return!1;const l=C(this,i,"f")||C(this,r,"f")&&!this.validity.valid&&!C(this,e,"f");return l&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),l},T=function(l){const c=this.constructor,v={},p=c.validators,U=[];C(this,f,"f")||(j(this,w,new Promise(y=>{j(this,u,y,"f")}),"f"),j(this,f,!0,"f")),C(this,s,"f")&&(C(this,s,"f").abort(),j(this,n,C(this,s,"f"),"f"));const A=new AbortController;j(this,s,A,"f");let F,W=!1;!p.length||(p.forEach(y=>{const D=y.key||"customError",S=y.isValid(this,l,A.signal);S instanceof Promise?(U.push(S),S.then(I=>{I!=null&&(v[D]=!I,F=C(this,t,"m",V).call(this,y,l),C(this,t,"m",L).call(this,v,F))})):(v[D]=!S,this.validity[D]!==!S&&(W=!0),S||(F=C(this,t,"m",V).call(this,y,l)))}),Promise.allSettled(U).then(()=>{var y;A!=null&&A.signal.aborted||(j(this,f,!1,"f"),(y=C(this,u,"f"))===null||y===void 0||y.call(this))}),W&&C(this,t,"m",L).call(this,v,F))},L=function(l,c){if(this.validationTarget)this.internals.setValidity(l,c,this.validationTarget);else{if(this.internals.setValidity(l,c),this.internals.validity.valid)return;let v=0;const p=setInterval(()=>{v>=100||this.validity.valid?clearInterval(p):this.validationTarget&&(this.internals.setValidity(this.validity,c,this.validationTarget),clearInterval(p)),v+=1},0)}},V=function(l,c){if(this.validityCallback){const v=this.validityCallback(l.key||"customError");if(v)return v}return l.message instanceof Function?l.message(this,c):l.message},N}var ut=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},pt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class X extends Vi(k){constructor(){super(...arguments),this.label="",this.selectedItem=null,this.name="",this.expanded=!1,this.placeholder="Choose an option",this._options=[],this._openListbox=()=>{this.expanded||(this.expanded=!0,document.addEventListener("click",this._hideOnClickOutside))},this._closeListbox=()=>{!this.expanded||(this.expanded=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._hideOnClickOutside=t=>{t.composedPath().includes(this)||this._closeListbox()}}handleKeyDown(t){t.key==="Escape"&&this.expanded?this._closeListbox():t.key==="Escape"&&!this.expanded&&this.handleSetValue(null)}handleSelectKeyDown(t){(t.key==="ArrowDown"||t.key==="Enter"||t.code==="Space")&&(this.expanded?this.moveFocusToOption(0):this._openListbox())}moveFocusToOption(t){this._options[t].focus()}handleSelectClick(){this.expanded?this._closeListbox():this._openListbox()}handleSetValue(t){const e=t||null;this.selectedItem=e,this.setValue((e==null?void 0:e.value)||"");const i=new Event("change",{composed:!0,bubbles:!0});this.dispatchEvent(i)}handleOptionSelect(t){const e=t.target;if(e.tagName!=="OPTION")return;const i={value:e.value,label:e.innerText};this.handleSetValue(i),this._closeListbox()}handleOptionKeyDown(t){if((t.key==="Enter"||t.code==="Space")&&this.handleOptionSelect(t),t.key==="ArrowDown"){const e=t.target;e.nextElementSibling?e.nextElementSibling.focus():this.moveFocusToOption(0)}if(t.key==="ArrowUp"){const e=t.target;if(e.previousElementSibling)e.previousElementSibling.focus();else{const r=this._options.length;this.moveFocusToOption(r-1)}}}toggleButton(){return _`<a2k-button tabindex="-1" size="small">
      <a2k-icon icon="chevron-icon"></a2k-icon>
    </a2k-button> `}handleSlotchange(t){const i=t.target.assignedElements();i.forEach(r=>{r.setAttribute("tabindex","0")}),this._options=i}connectedCallback(){super.connectedCallback(),this.label&&(this.label=`${this.label}:`),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown)}render(){var t;return _`
      <div id="select-wrapper">
        <label id="label">${this.label}</label>
        <div id="select">
          <div
            aria-controls="listbox"
            ?aria-expanded=${this.expanded}
            aria-haspopup="listbox"
            aria-labelledby="label"
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

          ${this.expanded?_`
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
    `}}X.styles=x`
    * {
      box-sizing: border-box;
    }

    #select-wrapper {
      align-items: center;
    }

    label {
      min-width: var(--select-label-min-width);
      width: var(--select-label-width);
    }

    #select {
      flex: 1;
      box-shadow: var(--select-border);
    }

    .combo-input {
      height: var(--select-height);
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
      background: var(--select-background-color);
      border-top: var(--select-border-top);
      border-left: var(--select-border-left);
      border-bottom: var(--select-border-bottom);
      border-right: var(--select-border-right);
      cursor: pointer;
    }

    .combo-input:focus {
      background: var(--select-option-color-hover);
      color: white;
    }

    .combo-input p {
      padding: var(--select-padding-inline);
    }

    .listbox {
      border: 1px solid black;
      background: white;
      position: absolute;
      min-width: var(--select-min-width);
      width: fit-content;
    }

    slot:not([name])::slotted(*) {
      height: var(--select-height);
      padding-inline: var(--select-padding-inline);
      display: flex;
      align-items: center;
      cursor: var(--cursor-pointer);
    }

    slot:not([name])::slotted(*:hover),
    slot:not([name])::slotted(*:focus) {
      background: var(--select-option-color-hover);
      color: white;
      outline: 1px dotted white;
      outline-offset: -1px;
    }

    a2k-icon {
      font-size: 14px;
      transform: rotate(90deg);
    }
  `;ut([g({type:String}),pt("design:type",Object)],X.prototype,"label",void 0);ut([g({type:String}),pt("design:type",Object)],X.prototype,"selectedItem",void 0);ut([g({type:String}),pt("design:type",Object)],X.prototype,"name",void 0);ut([Ae(),pt("design:type",Object)],X.prototype,"expanded",void 0);ut([g({type:String}),pt("design:type",Object)],X.prototype,"placeholder",void 0);window.customElements.define("a2k-select",X);var Ne=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},Be=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Ot extends k{constructor(){super(...arguments),this.slotHeightStyles={height:"0px"}}firstUpdated(){const t=getComputedStyle(this.desktopContainer).height;this.slotHeightStyles={height:t}}render(){return _`<div id="desktop">
      <slot id="slot" style=${_t(this.slotHeightStyles)}></slot>
    </div>`}}Ot.styles=x`
    #desktop {
      height: 100%;
    }

    #desktop > slot {
      display: flex;
      flex-flow: column wrap;
      width: fit-content;
    }
  `;Ne([g(),Be("design:type",Object)],Ot.prototype,"slotHeightStyles",void 0);Ne([Te("#desktop"),Be("design:type",HTMLSlotElement)],Ot.prototype,"desktopContainer",void 0);window.customElements.define("a2k-desktop",Ot);var oe=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},se=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class ft extends k{constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return _` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`}}ft.styles=x`
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
  `;oe([g({type:String}),se("design:type",Object)],ft.prototype,"text",void 0);oe([g({type:String}),se("design:type",Object)],ft.prototype,"icon",void 0);oe([g(),se("design:type",Object)],ft.prototype,"onOpen",void 0);window.customElements.define("a2k-desktop-icon",ft);class Xe extends k{render(){return _`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}Xe.styles=x`
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
  `;window.customElements.define("a2k-cover",Xe);const Ui=(o,t)=>{const e=o/t,i=t/o*100,r=Array(e).fill(i),s=r.length;for(let n=0;n<1e3;n++){const a=Math.floor(Math.random()*s),d=r[a],h=Math.floor(Math.random()*s),b=r[h],u=bt(Math.random()*d),f=bt(d-u),w=bt(b+u);r[a]=f,r[h]=w}return r};var vt=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},gt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};const Di=["Booting Up..."],Ii=o=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:o});class Y extends k{constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.state="idle",this.image="",this.footerText="Copyright \u24B8 1999-2000. Andricos2000",this.messages=Di,this.progress=0,this.interval=50,this.handleStart=()=>{this.state="loading",document.querySelector("body").setAttribute("data-state","waiting"),this.beginLoading()},this.beginLoading=()=>{const t=Ui(this.startupTime,this.interval);this.intervalRef=setInterval(()=>{var s;const e=(s=t[this.currentStep])!=null?s:0,i=bt(this.progress+e),r=Ii({progress:i,isComplete:i>=100});this.dispatchEvent(r),i>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=i,this.currentStep++)},this.interval)}}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return this.state==="idle"?_`
        <div id="background">
          <a2k-cover>
            <div slot="principal">
              <h1 id="standing-by">Standing by...</h1>
              <a2k-button size="large" @click=${this.handleStart}
                >Start</a2k-button
              >
            </div>
            <div slot="footer"></div>
          </a2k-cover>
        </div>
      `:_`
      <div id="background">
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
      </div>
    `}}Y.styles=x`
    :host {
      --progress-unit-background: var(--color-white);

      color: var(--color-white);
      text-align: center;
      font-family: var(--font-primary);
      width: 100%;
    }

    #background {
      background: var(--startup-background);
    }

    #progress-wrapper {
      max-width: var(--startup-progress-bar-width);
      margin: 0 auto;
      width: 100%;
    }

    #standing-by {
      animation: flash 0.5s infinite alternate;
    }

    @keyframes flash {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  `;vt([g({type:String}),gt("design:type",Object)],Y.prototype,"state",void 0);vt([g({type:String}),gt("design:type",Object)],Y.prototype,"image",void 0);vt([g({type:String}),gt("design:type",Object)],Y.prototype,"footerText",void 0);vt([g(),gt("design:type",Object)],Y.prototype,"messages",void 0);vt([g(),gt("design:type",Object)],Y.prototype,"progress",void 0);window.customElements.define("a2k-startup",Y);var Ye=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},Ke=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Pt extends k{firstUpdated(){const[t]=this.slotEl,e=t.cloneNode(!0);this.marqueeWrapperEl.appendChild(e)}render(){return _`<div id="marquee">
      <div id="marquee-inner-1">
        <slot name="text"></slot>
      </div>
      <div id="marquee-inner-2"></div>
    </div>`}}Pt.styles=x`
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
  `;Ye([vi({slot:"text"}),Ke("design:type",Array)],Pt.prototype,"slotEl",void 0);Ye([Te("#marquee-inner-2"),Ke("design:type",HTMLElement)],Pt.prototype,"marqueeWrapperEl",void 0);window.customElements.define("a2k-marquee",Pt);const Wi=_`
  <a2k-window heading="Please wait..." draggable closeable>
    <p class="heading">Andricos<span>2000</span></p>
    <a2k-stack>
      <p>Andricos2000 is starting up...</p>
      <a2k-progress></a2k-progress>
    </a2k-stack>
  </a2k-window>
`;class Ge extends k{constructor(){super(...arguments);K(this,"connection","");K(this,"handleOnline",()=>{connection="Online"});K(this,"handleOffline",()=>{connection="Offline"})}connectedCallback(){super.connectedCallback(),this.addEventListener("online",this.handleOnline),this.addEventListener("offline",this.handleOffline),this.connection=navigator.onLine?"Online":"Offline"}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("online",this.handleOnline),this.removeEventListener("offline",this.handleOffline)}render(){return _` <a2k-window draggable closeable heading="Internet Explorer 5">
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
    </a2k-window>`}}K(Ge,"styles",x`
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
  `);window.customElements.define("a2k-ie5",Ge);class Ze extends k{render(){return _` <a2k-window draggable closeable heading="About Andricos2000">
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
    </a2k-window>`}}K(Ze,"styles",x`
    p {
      margin: 0;
    }

    img {
      max-width: 400px;
      object-fit: cover;
    }
  `);window.customElements.define("a2k-about",Ze);var zi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Rt=(o,t,e,i)=>{for(var r=i>1?void 0:i?qi(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&zi(t,e,r),r};class it extends k{constructor(){super(...arguments),this.height=0,this.width=0,this.top=0,this.left=0}render(){const t=_t({width:`${this.width}px`,transform:`translate(${this.left}px, ${this.top}px)`}),e=_t({height:`${this.height}px`});return _`
      <div style=${t} id="outer-wrapper">
        <a2k-panel>
          <div style=${e}></div>
        </a2k-panel>
      </div>
    `}}it.styles=x`
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
  `;Rt([g()],it.prototype,"height",2);Rt([g()],it.prototype,"width",2);Rt([g()],it.prototype,"top",2);Rt([g()],it.prototype,"left",2);window.customElements.define("a2k-broken-window",it);const Hi=document.querySelector("body"),Ni=new URL("/assets/andricos-2000-startup.774be9be.mp3",self.location),Mt=document.querySelector("#windows-container"),Bi=document.querySelector('a2k-desktop-icon[icon="documents-icon"]');Bi.onOpen=()=>{window.location.href="https://andri.co"};const Xi=document.querySelector('a2k-desktop-icon[icon="network-icon"]');Xi.onOpen=()=>{window.location.href="https://twitter.com/andricokaroulla"};const Yi=document.querySelector('a2k-desktop-icon[icon="github-icon"]');Yi.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const Ki=document.querySelector('a2k-desktop-icon[icon="help-icon"]');Ki.onOpen=()=>{const o=document.createElement("a2k-about");Mt.append(o)};const Gi=document.querySelector('a2k-desktop-icon[icon="internet-icon"]');Gi.onOpen=()=>{const o=document.createElement("a2k-ie5");Mt.append(o)};let ye=!1;const Zi=o=>{const{target:t,detail:e}=o,{containerEl:i}=e,r=document.querySelector("a2k-window[heading='Please wait...']");if(!r||!r.isSameNode(t))return;const{width:s,top:n,left:a,height:d}=i.getBoundingClientRect(),h=document.createElement("a2k-broken-window");Mt.insertBefore(h,r),h.setAttribute("height",d),h.setAttribute("width",s),h.setAttribute("top",n),h.setAttribute("left",a)};window.addEventListener("startup-progress",o=>{if(!(o.detail.progress<50)&&!ye){ye=!0;try{Ji()}catch{}}});window.addEventListener("startup-progress",o=>{!o.detail.isComplete||(setTimeout(()=>{document.querySelector(".fixed-container").remove(),Qi(),to()},300),setTimeout(()=>{Hi.removeAttribute("data-state")},500))});function Ji(){const o=new Audio(Ni);o.volume=.3,o.play()}function Qi(){let o=0;setTimeout(()=>{Kt(Wi,Mt);const t=document.querySelector("a2k-progress"),e=document.querySelector("a2k-window[heading='Please wait...']"),i=setInterval(()=>{if(!!t&&(o=o+1.2,t.setAttribute("progress",o),o>40)){for(;e.firstChild;)e.removeChild(e.lastChild);window.addEventListener("window-drag",Zi),e.innerHTML=`
        <a2k-stack>
          <p>Oh no! We had a problem loading Andricos2000. Don't worry, you can still play around and find some easter eggs.</p>
          <p>Andricos2000 is a work in progress, so keep checking back (or follow me on <a href="https://twitter.com/andricokaroulla" target="_blank"
          >Twitter</a
        >) for updates :)</p>
          </a2k-stack>
        `,clearInterval(i)}},100)},700)}function to(){const o=document.querySelectorAll("a2k-desktop-icon");setTimeout(()=>{o.forEach(t=>{t.removeAttribute("hidden")})},1200)}
