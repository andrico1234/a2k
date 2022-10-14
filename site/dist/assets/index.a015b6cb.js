var ei=Object.defineProperty;var ii=(o,t,e)=>t in o?ei(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var W=(o,t,e)=>(ii(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();insights.init("qSiM34gCir3EyTFz");insights.trackPages();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=window,Xt=bt.ShadowRoot&&(bt.ShadyCSS===void 0||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kt=Symbol(),de=new WeakMap;class Ce{constructor(t,e,i){if(this._$cssResult$=!0,i!==Kt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Xt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=de.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&de.set(e,t))}return t}toString(){return this.cssText}}const oi=o=>new Ce(typeof o=="string"?o:o+"",void 0,Kt),x=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new Ce(e,o,Kt)},si=(o,t)=>{Xt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=bt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},ce=Xt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return oi(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ft;const yt=window,he=yt.trustedTypes,ri=he?he.emptyScript:"",ue=yt.reactiveElementPolyfillSupport,qt={toAttribute(o,t){switch(t){case Boolean:o=o?ri:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},xe=(o,t)=>t!==o&&(t==t||o==o),Vt={attribute:!0,type:String,converter:qt,reflect:!1,hasChanged:xe};class G extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=Vt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Vt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(ce(s))}else t!==void 0&&e.push(ce(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return si(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Vt){var s;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:qt).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=s.getPropertyOptions(r),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:qt;this._$El=r,this[r]=a.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||xe)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}G.finalized=!0,G.elementProperties=new Map,G.elementStyles=[],G.shadowRootOptions={mode:"open"},ue==null||ue({ReactiveElement:G}),((Ft=yt.reactiveElementVersions)!==null&&Ft!==void 0?Ft:yt.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Lt;const _t=window,J=_t.trustedTypes,pe=J?J.createPolicy("lit-html",{createHTML:o=>o}):void 0,H=`lit$${(Math.random()+"").slice(9)}$`,Ae="?"+H,ni=`<${Ae}>`,Q=document,rt=(o="")=>Q.createComment(o),nt=o=>o===null||typeof o!="object"&&typeof o!="function",Se=Array.isArray,ai=o=>Se(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fe=/-->/g,ve=/>/g,Y=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ge=/'/g,me=/"/g,Te=/^(?:script|style|textarea|title)$/i,Oe=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),g=Oe(1),li=Oe(2),N=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),be=new WeakMap,Z=Q.createTreeWalker(Q,129,null,!1),di=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":"",n=ot;for(let d=0;d<e;d++){const h=o[d];let w,u,f=-1,y=0;for(;y<h.length&&(n.lastIndex=y,u=n.exec(h),u!==null);)y=n.lastIndex,n===ot?u[1]==="!--"?n=fe:u[1]!==void 0?n=ve:u[2]!==void 0?(Te.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=Y):u[3]!==void 0&&(n=Y):n===Y?u[0]===">"?(n=s!=null?s:ot,f=-1):u[1]===void 0?f=-2:(f=n.lastIndex-u[2].length,w=u[1],n=u[3]===void 0?Y:u[3]==='"'?me:ge):n===me||n===ge?n=Y:n===fe||n===ve?n=ot:(n=Y,s=void 0);const b=n===Y&&o[d+1].startsWith("/>")?" ":"";r+=n===ot?h+ni:f>=0?(i.push(w),h.slice(0,f)+"$lit$"+h.slice(f)+H+b):h+H+(f===-2?(i.push(void 0),d):b)}const a=r+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[pe!==void 0?pe.createHTML(a):a,i]};class at{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const a=t.length-1,d=this.parts,[h,w]=di(t,e);if(this.el=at.createElement(h,i),Z.currentNode=this.el.content,e===2){const u=this.el.content,f=u.firstChild;f.remove(),u.append(...f.childNodes)}for(;(s=Z.nextNode())!==null&&d.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const f of s.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(H)){const y=w[n++];if(u.push(f),y!==void 0){const b=s.getAttribute(y.toLowerCase()+"$lit$").split(H),T=/([.?@])?(.*)/.exec(y);d.push({type:1,index:r,name:T[2],strings:b,ctor:T[1]==="."?hi:T[1]==="?"?pi:T[1]==="@"?fi:At})}else d.push({type:6,index:r})}for(const f of u)s.removeAttribute(f)}if(Te.test(s.tagName)){const u=s.textContent.split(H),f=u.length-1;if(f>0){s.textContent=J?J.emptyScript:"";for(let y=0;y<f;y++)s.append(u[y],rt()),Z.nextNode(),d.push({type:2,index:++r});s.append(u[f],rt())}}}else if(s.nodeType===8)if(s.data===Ae)d.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(H,u+1))!==-1;)d.push({type:7,index:r}),u+=H.length-1}r++}}static createElement(t,e){const i=Q.createElement("template");return i.innerHTML=t,i}}function tt(o,t,e=o,i){var s,r,n,a;if(t===N)return t;let d=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=nt(t)?void 0:t._$litDirective$;return(d==null?void 0:d.constructor)!==h&&((r=d==null?void 0:d._$AO)===null||r===void 0||r.call(d,!1),h===void 0?d=void 0:(d=new h(o),d._$AT(o,e,i)),i!==void 0?((n=(a=e)._$Co)!==null&&n!==void 0?n:a._$Co=[])[i]=d:e._$Cl=d),d!==void 0&&(t=tt(o,d._$AS(o,t.values),d,i)),t}class ci{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Q).importNode(i,!0);Z.currentNode=r;let n=Z.nextNode(),a=0,d=0,h=s[0];for(;h!==void 0;){if(a===h.index){let w;h.type===2?w=new lt(n,n.nextSibling,this,t):h.type===1?w=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(w=new vi(n,this,t)),this.u.push(w),h=s[++d]}a!==(h==null?void 0:h.index)&&(n=Z.nextNode(),a++)}return r}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class lt{constructor(t,e,i,s){var r;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=tt(this,t,e),nt(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==N&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ai(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==O&&nt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Q.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=at.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(i);else{const n=new ci(r,this),a=n.v(this.options);n.p(i),this.T(a),this._$AH=n}}_$AC(t){let e=be.get(t.strings);return e===void 0&&be.set(t.strings,e=new at(t)),e}k(t){Se(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new lt(this.O(rt()),this.O(rt()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class At{constructor(t,e,i,s,r){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=tt(this,t,e,0),n=!nt(t)||t!==this._$AH&&t!==N,n&&(this._$AH=t);else{const a=t;let d,h;for(t=r[0],d=0;d<r.length-1;d++)h=tt(this,a[i+d],e,d),h===N&&(h=this._$AH[d]),n||(n=!nt(h)||h!==this._$AH[d]),h===O?t=O:t!==O&&(t+=(h!=null?h:"")+r[d+1]),this._$AH[d]=h}n&&!s&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class hi extends At{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}}const ui=J?J.emptyScript:"";class pi extends At{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,ui):this.element.removeAttribute(this.name)}}class fi extends At{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=tt(this,t,e,0))!==null&&i!==void 0?i:O)===N)return;const s=this._$AH,r=t===O&&s!==O||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==O&&(s===O||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class vi{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const we=_t.litHtmlPolyfillSupport;we==null||we(at,lt),((Lt=_t.litHtmlVersions)!==null&&Lt!==void 0?Lt:_t.litHtmlVersions=[]).push("2.4.0");const Gt=(o,t,e)=>{var i,s;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=r._$litPart$;if(n===void 0){const a=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=n=new lt(t.insertBefore(rt(),a),a,void 0,e!=null?e:{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ut,Dt;class k extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Gt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return N}}k.finalized=!0,k._$litElement$=!0,(Ut=globalThis.litElementHydrateSupport)===null||Ut===void 0||Ut.call(globalThis,{LitElement:k});const ye=globalThis.litElementPolyfillSupport;ye==null||ye({LitElement:k});((Dt=globalThis.litElementVersions)!==null&&Dt!==void 0?Dt:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(n){customElements.define(e,n)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function m(o){return(t,e)=>e!==void 0?((i,s,r)=>{s.constructor.createProperty(r,i)})(o,t,e):gi(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zt(o){return m({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=({finisher:o,descriptor:t})=>(e,i)=>{var s;if(i===void 0){const r=(s=e.originalKey)!==null&&s!==void 0?s:e.key,n=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:{...e,key:r};return o!=null&&(n.finisher=function(a){o(a,r)}),n}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o==null||o(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jt(o,t){return Pe({descriptor:e=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(o))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var r,n;return this[s]===void 0&&(this[s]=(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&n!==void 0?n:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var It;const mi=((It=window.HTMLSlotElement)===null||It===void 0?void 0:It.prototype.assignedElements)!=null?(o,t)=>o.assignedElements(t):(o,t)=>o.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function bi(o){const{slot:t,selector:e}=o!=null?o:{};return Pe({descriptor:i=>({get(){var s;const r="slot"+(t?`[name=${t}]`:":not([name])"),n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(r),a=n!=null?mi(n,o):[];return e?a.filter(d=>d.matches(e)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Me=o=>(...t)=>({_$litDirective$:o,values:t});class je{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=Me(class extends je{constructor(o){var t;if(super(o),o.type!==Re.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const i=o[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[t]){const{style:e}=o.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const s=t[i];s!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,s):e[i]=s)}return N}});class wi{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class q{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:st(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new q(e));if(t.length>0)return t}return[this]}}const st=o=>"pointerId"in o,Wt=o=>"changedTouches"in o,_e=()=>{};class yi{constructor(t,{start:e=()=>!0,move:i=_e,end:s=_e,rawUpdates:r=!1,avoidPointerEvents:n=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(st(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const d=new q(a);this.currentPointers.some(h=>h.id===d.id)||!this._triggerPointerStart(d,a)||(st(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const d of Array.from(a.changedTouches))this._triggerPointerStart(new q(d),a)},this._move=a=>{if(!Wt(a)&&(!st(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const d=this.currentPointers.slice(),h=Wt(a)?Array.from(a.changedTouches).map(u=>new q(u)):[new q(a)],w=[];for(const u of h){const f=this.currentPointers.findIndex(y=>y.id===u.id);f!==-1&&(w.push(u),this.currentPointers[f]=u)}w.length!==0&&this._moveCallback(d,w,a)},this._triggerPointerEnd=(a,d)=>{if(!Wt(d)&&d.buttons&1)return!1;const h=this.currentPointers.findIndex(u=>u.id===a.id);if(h===-1)return!1;this.currentPointers.splice(h,1),this.startPointers.splice(h,1),this._excludeFromButtonsCheck.delete(a.id);const w=!(d.type==="mouseup"||d.type==="touchend"||d.type==="pointerup");return this._endCallback(a,d,w),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new q(a),a))if(st(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const d of Array.from(a.changedTouches))this._triggerPointerEnd(new q(d),a)},this._startCallback=e,this._moveCallback=i,this._endCallback=s,this._rawUpdates=r&&"onpointerrawupdate"in window,self.PointerEvent&&!n?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}var zt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(o):i?i.value:t.get(o)},Ht,Nt,Bt;const ke={initialPosition:{},getContainerEl:()=>null,getDraggableEl:()=>Promise.resolve(null),getIsDraggable:()=>!0};class _i{constructor(t,e=ke){var n;this.cursorPositionX=0,this.cursorPositionY=0,this.draggableEl=null,this.state="idle",this.pointerTracker=null,this.styles={position:"absolute",touchAction:"none",top:"0px",left:"0px"},Ht.set(this,a=>(this.cursorPositionX=Math.floor(a.pageX),this.cursorPositionY=Math.floor(a.pageY),!0)),Nt.set(this,(a,d)=>{const[h]=d,w=this.draggableEl,u=new CustomEvent("window-drag",{bubbles:!0,composed:!0,detail:{pointer:h,containerEl:this.getContainerEl(),draggableEl:w}});this.host.dispatchEvent(u),this.handleWindowMove(h)}),Bt.set(this,(a,d)=>{d.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this),this.getContainerEl=e.getContainerEl,this.getIsDraggable=(n=e.getIsDraggable)!=null?n:ke.getIsDraggable,e.getDraggableEl().then(a=>{if(!a){console.warn("getDraggableEl() did not return an element HTMLElement");return}this.draggableEl=a,this.init()});const{initialPosition:i}=e,{x:s=0,y:r=0}=i;this.x=s,this.y=r,this.updateElPosition()}init(){const t=zt(this,Nt,"f"),e=zt(this,Ht,"f"),i=zt(this,Bt,"f"),s=this.host,r=n=>this.state=n;this.pointerTracker=new yi(this.draggableEl,{start(n){return e(n),r("dragging"),s.requestUpdate(),!0},move(n,a){t(n,a)},end(n,a){i(n,a),r("idle"),s.requestUpdate()}})}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}updateElPosition(){this.styles.transform=`translate(${this.x}px, ${this.y}px)`}handleWindowMove(t){const e=this.draggableEl,i=this.getContainerEl();if(!e||!i||!this.getIsDraggable())return;const r=this.x,n=this.y,a=Math.floor(t.pageX),d=Math.floor(t.pageY);if(a!==this.cursorPositionX||d!==this.cursorPositionY){const{bottom:w,height:u}=e.getBoundingClientRect(),{right:f,width:y}=i.getBoundingClientRect(),b=a-this.cursorPositionX,T=d-this.cursorPositionY;this.x=r+b,this.y=n+T,this.cursorPositionX=a,this.cursorPositionY=d;const V=this.y<0,L=this.x<0,B=w+T>window.innerHeight,P=f+b>=window.innerWidth;V&&(this.y=0),L&&(this.x=0),B&&(this.y=window.innerHeight-u),P&&(this.x=Math.floor(window.innerWidth-y)),this.updateElPosition(),this.host.requestUpdate()}}}Ht=new WeakMap,Nt=new WeakMap,Bt=new WeakMap;const wt=(o,t=100)=>Math.round(o*t)/t,ki=(o,t)=>o<=t?o:t;class Fe extends k{render(){return g`<div id="stack">
      <slot></slot>
    </div>`}}Fe.styles=x`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",Fe);class Ve extends k{render(){return g` <div id="panel">
      <slot></slot>
    </div>`}}Ve.styles=x`
    #panel {
      border: var(--panel-border);
      background-color: var(--panel-color-background);
      box-shadow: var(--panel-shadow);
    }
  `;window.customElements.define("a2k-panel",Ve);class Le extends k{render(){return g`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}Le.styles=x`
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
  `;window.customElements.define("a2k-window-topbar",Le);var E=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(o):i?i.value:t.get(o)},R=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,i,s){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!s:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?s.call(o,e):s?s.value=e:t.set(o,e),e};function Ei(o){var t,e,i,s,r,n,a,d,h,w,u,f,y,b,T,V,L;class B extends o{constructor(...l){super(...l),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),s.set(this,!1),r.set(this,void 0),n.set(this,void 0),a.set(this,""),d.set(this,()=>{R(this,s,!0,"f"),R(this,e,!0,"f"),E(this,t,"m",b).call(this)}),h.set(this,()=>{R(this,e,!1,"f"),E(this,t,"m",T).call(this,this.shouldFormValueUpdate()?E(this,a,"f"):""),!this.validity.valid&&E(this,s,"f")&&R(this,i,!0,"f");const c=E(this,t,"m",b).call(this);this.validationMessageCallback&&this.validationMessageCallback(c?this.internals.validationMessage:"")}),w.set(this,()=>{var c;R(this,i,!0,"f"),E(this,t,"m",b).call(this),(c=this===null||this===void 0?void 0:this.validationMessageCallback)===null||c===void 0||c.call(this,this.showError?this.internals.validationMessage:"")}),u.set(this,void 0),f.set(this,!1),y.set(this,Promise.resolve()),this.addEventListener("focus",E(this,d,"f")),this.addEventListener("blur",E(this,h,"f")),this.addEventListener("invalid",E(this,w,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const l=this.validators.map(p=>p.attribute),c=super.observedAttributes||[];return[...new Set([...c,...l])]}static getValidator(l){return this.validators.find(c=>c.attribute===l)||null}get form(){return this.internals.form}get showError(){return E(this,t,"m",b).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(l,c,v){var p;(p=super.attributeChangedCallback)===null||p===void 0||p.call(this,l,c,v),this.constructor.getValidator(l)&&this.validationTarget&&this.setValue(E(this,a,"f"))}setValue(l){var c;R(this,i,!1,"f"),(c=this.validationMessageCallback)===null||c===void 0||c.call(this,""),R(this,a,l,"f");const p=this.shouldFormValueUpdate()?l:null;this.internals.setFormValue(p),E(this,t,"m",T).call(this,p),this.valueChangedCallback&&this.valueChangedCallback(p),E(this,t,"m",b).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(l=>l(E(this,y,"f")))}formResetCallback(){var l,c;R(this,s,!1,"f"),R(this,i,!1,"f"),E(this,t,"m",b).call(this),(l=this.resetFormControl)===null||l===void 0||l.call(this),(c=this.validationMessageCallback)===null||c===void 0||c.call(this,E(this,t,"m",b).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,s=new WeakMap,r=new WeakMap,n=new WeakMap,a=new WeakMap,d=new WeakMap,h=new WeakMap,w=new WeakMap,u=new WeakMap,f=new WeakMap,y=new WeakMap,t=new WeakSet,b=function(){if(this.hasAttribute("disabled"))return!1;const l=E(this,i,"f")||E(this,s,"f")&&!this.validity.valid&&!E(this,e,"f");return l&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),l},T=function(l){const c=this.constructor,v={},p=c.validators,U=[];E(this,f,"f")||(R(this,y,new Promise(_=>{R(this,u,_,"f")}),"f"),R(this,f,!0,"f")),E(this,r,"f")&&(E(this,r,"f").abort(),R(this,n,E(this,r,"f"),"f"));const A=new AbortController;R(this,r,A,"f");let F,z=!1;!p.length||(p.forEach(_=>{const D=_.key||"customError",S=_.isValid(this,l,A.signal);S instanceof Promise?(U.push(S),S.then(I=>{I!=null&&(v[D]=!I,F=E(this,t,"m",L).call(this,_,l),E(this,t,"m",V).call(this,v,F))})):(v[D]=!S,this.validity[D]!==!S&&(z=!0),S||(F=E(this,t,"m",L).call(this,_,l)))}),Promise.allSettled(U).then(()=>{var _;A!=null&&A.signal.aborted||(R(this,f,!1,"f"),(_=E(this,u,"f"))===null||_===void 0||_.call(this))}),z&&E(this,t,"m",V).call(this,v,F))},V=function(l,c){if(this.validationTarget)this.internals.setValidity(l,c,this.validationTarget);else{if(this.internals.setValidity(l,c),this.internals.validity.valid)return;let v=0;const p=setInterval(()=>{v>=100||this.validity.valid?clearInterval(p):this.validationTarget&&(this.internals.setValidity(this.validity,c,this.validationTarget),clearInterval(p)),v+=1},0)}},L=function(l,c){if(this.validityCallback){const v=this.validityCallback(l.key||"customError");if(v)return v}return l.message instanceof Function?l.message(this,c):l.message},B}var Qt=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},te=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class ct extends Ei(k){constructor(){super(...arguments),this.disabled=!1,this.type="",this.size="medium"}handleSubmit(){this.form.requestSubmit()}connectedCallback(){super.connectedCallback(),!this.type&&this.form?this.type:this.type,this.type==="submit"&&this.addEventListener("click",this.handleSubmit)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleSubmit)}render(){return g` <button data-size="${this.size}" ?disabled=${this.disabled}>
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
  `;Qt([m({type:Boolean}),te("design:type",Object)],ct.prototype,"disabled",void 0);Qt([m({type:String}),te("design:type",Object)],ct.prototype,"type",void 0);Qt([m({type:String}),te("design:type",String)],ct.prototype,"size",void 0);window.customElements.define("a2k-button",ct);var $i=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},Ci=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};const xi=new URL("/assets/a2k-icons.20ee8091.svg",self.location).href;class ee extends k{constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),li`
      <svg height="1em" width="1em">
        <use href="${xi}#${this.icon}"></use>
      </svg>
    `}}ee.styles=x`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;$i([m({type:String}),Ci("design:type",Object)],ee.prototype,"icon",void 0);window.customElements.define("a2k-icon",ee);var Ai=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},Si=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class ie extends k{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return g`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}ie.styles=x`
    :host {
      position: absolute;
      right: 2px;
    }

    #icon-wrapper {
      font-size: 8px;
    }
  `;Ai([m({type:Boolean}),Si("design:type",Object)],ie.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",ie);var oe=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},se=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class ht extends k{constructor(){super(),this.heading="",this.draggable=!1,this.closeable=!1,this.drag=new _i(this,{initialPosition:{x:32,y:32},getContainerEl:()=>this.shadowRoot.querySelector("#window"),getDraggableEl:()=>this.getDraggableEl(),getIsDraggable:()=>this.draggable}),this.addEventListener("close",()=>this.remove())}async getDraggableEl(){return await this.updateComplete,this.shadowRoot.querySelector("#draggable")}firstUpdated(){const{x:t,y:e}=this.drag,{offsetWidth:i}=this.renderRoot.querySelector("#window"),s=ki(screen.availWidth,innerWidth);t+i>s&&(this.drag.styles.transform=`translate(0px, ${e}px)`,this.requestUpdate())}render(){return g`
      <div id="window" style=${kt(this.drag.styles)}>
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
  `;oe([m({type:String}),se("design:type",Object)],ht.prototype,"heading",void 0);oe([m({type:Boolean}),se("design:type",Object)],ht.prototype,"draggable",void 0);oe([m({type:Boolean}),se("design:type",Object)],ht.prototype,"closeable",void 0);window.customElements.define("a2k-window",ht);class Ue extends k{render(){return g`<div id="toolbar">
        <slot></slot>
      </div>
      <div id="separator"></div>`}}Ue.styles=x`
    #toolbar {
      border-color: var(--color-gray-300) var(--color-gray-700)
        var(--color-gray-700) var(--color-gray-300);
      border-width: 2px;
      border-style: solid;
    }

    #separator {
      border-bottom: 5px solid var(--color-gray-400);
    }
  `;window.customElements.define("a2k-window-toolbar",Ue);class De extends k{render(){return g`<div id="item">
      <slot></slot>
    </div>`}}De.styles=x`
    #item {
      border-color: var(--color-gray-700) var(--color-gray-300)
        var(--color-gray-300) var(--color-gray-700);
      border-width: var(--border-width);
      border-style: solid;
      padding: var(--spacing-50);
      background-color: var(--window-toolbar-item-color-background);
    }
  `;window.customElements.define("a2k-window-toolbar-item",De);var Ie=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},We=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class St extends k{constructor(){super(...arguments),this.statusOne="",this.statusTwo=""}render(){return g`
      <div id="separator"></div>
      <div id="content">
        <div class="section">
          <p>${this.statusOne}</p>
        </div>

        ${this.statusTwo?g` <div class="section-separator"></div>
              <div class="section"><p>${this.statusTwo}</p></div>`:null}
      </div>
    `}}St.styles=x`
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
  `;Ie([m({type:String}),We("design:type",Object)],St.prototype,"statusOne",void 0);Ie([m({type:String}),We("design:type",Object)],St.prototype,"statusTwo",void 0);window.customElements.define("a2k-window-status-bar",St);var ze=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},Ti=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let Et=class extends k{constructor(){super(...arguments),this.open=!1}render(){return g`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};Et.styles=x`
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
  `;ze([m(),Ti("design:type",Object)],Et.prototype,"open",void 0);Et=ze([dt("a2k-start-menu-item")],Et);var qe=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},Oi=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let $t=class extends k{constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=g` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;Gt(t,document.body)}handleShutdownClick(){location.reload()}render(){const t=String(this.open)==="true";return g`
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
    `}};$t.styles=x`
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
  `;qe([m(),Oi("design:type",Object)],$t.prototype,"open",void 0);$t=qe([dt("a2k-start-menu")],$t);var He=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},Pi=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let Ct=class extends k{constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return g`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `}};Ct.styles=x`
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
  `;He([Zt(),Pi("design:type",Object)],Ct.prototype,"_isMenuOpen",void 0);Ct=He([dt("a2k-start-button")],Ct);var Ri=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r};let Yt=class extends k{constructor(){super(...arguments),this.clock=new wi(this)}render(){const t=Mi.format(this.clock.value);return g`<div class="utility-bar">${t}</div>`}};Yt.styles=x`
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
  `;Yt=Ri([dt("a2k-utility-bar")],Yt);const Mi=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class Ne extends k{render(){return g`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}Ne.styles=x`
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
  `;window.customElements.define("a2k-taskbar",Ne);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=Me(class extends je{constructor(o){var t;if(super(o),o.type!==Re.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,i;if(this.nt===void 0){this.nt=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.st)===null||e===void 0)&&e.has(r))&&this.nt.add(r);return this.render(t)}const s=o.element.classList;this.nt.forEach(r=>{r in t||(s.remove(r),this.nt.delete(r))});for(const r in t){const n=!!t[r];n===this.nt.has(r)||((i=this.st)===null||i===void 0?void 0:i.has(r))||(n?(s.add(r),this.nt.add(r)):(s.remove(r),this.nt.delete(r)))}return N}});var Be=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},Fi=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let xt=class extends k{constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return g`<div class=${ji(t)} id="unit">
      <div></div>
      <div></div>
    </div>`}};xt.styles=x`
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
  `;Be([m(),Fi("design:type",String)],xt.prototype,"filled",void 0);xt=Be([dt("a2k-progress-unit")],xt);var Vi=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},Li=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class re extends k{constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){var a;const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=(a=t.getBoundingClientRect().width)!=null?a:0;if(this.width===e)return;this.width=e;const{gap:i}=getComputedStyle(t),r=Number(i.replace("px",""))+12,n=Math.ceil(e/r);Array(n).fill(0).forEach(()=>{const d=document.createElement("a2k-progress-unit");d.setAttribute("filled","none"),t==null||t.appendChild(d)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,i=Ui(e),s=Math.floor(e);t.forEach((r,n)=>{n<s?r.setAttribute("filled","filled"):n===s&&i>=.5?r.setAttribute("filled","half"):r.setAttribute("filled","none")})}render(){return g`<div id="progress" role="progress"></div>`}}re.styles=x`
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
  `;Vi([m({type:Number}),Li("design:type",Object)],re.prototype,"progress",void 0);const Ui=o=>Math.floor(o%1*10)/10;window.customElements.define("a2k-progress",re);var $=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(o):i?i.value:t.get(o)},M=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,i,s){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!s:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?s.call(o,e):s?s.value=e:t.set(o,e),e};function Di(o){var t,e,i,s,r,n,a,d,h,w,u,f,y,b,T,V,L;class B extends o{constructor(...l){super(...l),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),s.set(this,!1),r.set(this,void 0),n.set(this,void 0),a.set(this,""),d.set(this,()=>{M(this,s,!0,"f"),M(this,e,!0,"f"),$(this,t,"m",b).call(this)}),h.set(this,()=>{M(this,e,!1,"f"),$(this,t,"m",T).call(this,this.shouldFormValueUpdate()?$(this,a,"f"):""),!this.validity.valid&&$(this,s,"f")&&M(this,i,!0,"f");const c=$(this,t,"m",b).call(this);this.validationMessageCallback&&this.validationMessageCallback(c?this.internals.validationMessage:"")}),w.set(this,()=>{var c;M(this,i,!0,"f"),$(this,t,"m",b).call(this),(c=this===null||this===void 0?void 0:this.validationMessageCallback)===null||c===void 0||c.call(this,this.showError?this.internals.validationMessage:"")}),u.set(this,void 0),f.set(this,!1),y.set(this,Promise.resolve()),this.addEventListener("focus",$(this,d,"f")),this.addEventListener("blur",$(this,h,"f")),this.addEventListener("invalid",$(this,w,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const l=this.validators.map(p=>p.attribute),c=super.observedAttributes||[];return[...new Set([...c,...l])]}static getValidator(l){return this.validators.find(c=>c.attribute===l)||null}get form(){return this.internals.form}get showError(){return $(this,t,"m",b).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(l,c,v){var p;(p=super.attributeChangedCallback)===null||p===void 0||p.call(this,l,c,v),this.constructor.getValidator(l)&&this.validationTarget&&this.setValue($(this,a,"f"))}setValue(l){var c;M(this,i,!1,"f"),(c=this.validationMessageCallback)===null||c===void 0||c.call(this,""),M(this,a,l,"f");const p=this.shouldFormValueUpdate()?l:null;this.internals.setFormValue(p),$(this,t,"m",T).call(this,p),this.valueChangedCallback&&this.valueChangedCallback(p),$(this,t,"m",b).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(l=>l($(this,y,"f")))}formResetCallback(){var l,c;M(this,s,!1,"f"),M(this,i,!1,"f"),$(this,t,"m",b).call(this),(l=this.resetFormControl)===null||l===void 0||l.call(this),(c=this.validationMessageCallback)===null||c===void 0||c.call(this,$(this,t,"m",b).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,s=new WeakMap,r=new WeakMap,n=new WeakMap,a=new WeakMap,d=new WeakMap,h=new WeakMap,w=new WeakMap,u=new WeakMap,f=new WeakMap,y=new WeakMap,t=new WeakSet,b=function(){if(this.hasAttribute("disabled"))return!1;const l=$(this,i,"f")||$(this,s,"f")&&!this.validity.valid&&!$(this,e,"f");return l&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),l},T=function(l){const c=this.constructor,v={},p=c.validators,U=[];$(this,f,"f")||(M(this,y,new Promise(_=>{M(this,u,_,"f")}),"f"),M(this,f,!0,"f")),$(this,r,"f")&&($(this,r,"f").abort(),M(this,n,$(this,r,"f"),"f"));const A=new AbortController;M(this,r,A,"f");let F,z=!1;!p.length||(p.forEach(_=>{const D=_.key||"customError",S=_.isValid(this,l,A.signal);S instanceof Promise?(U.push(S),S.then(I=>{I!=null&&(v[D]=!I,F=$(this,t,"m",L).call(this,_,l),$(this,t,"m",V).call(this,v,F))})):(v[D]=!S,this.validity[D]!==!S&&(z=!0),S||(F=$(this,t,"m",L).call(this,_,l)))}),Promise.allSettled(U).then(()=>{var _;A!=null&&A.signal.aborted||(M(this,f,!1,"f"),(_=$(this,u,"f"))===null||_===void 0||_.call(this))}),z&&$(this,t,"m",V).call(this,v,F))},V=function(l,c){if(this.validationTarget)this.internals.setValidity(l,c,this.validationTarget);else{if(this.internals.setValidity(l,c),this.internals.validity.valid)return;let v=0;const p=setInterval(()=>{v>=100||this.validity.valid?clearInterval(p):this.validationTarget&&(this.internals.setValidity(this.validity,c,this.validationTarget),clearInterval(p)),v+=1},0)}},L=function(l,c){if(this.validityCallback){const v=this.validityCallback(l.key||"customError");if(v)return v}return l.message instanceof Function?l.message(this,c):l.message},B}var Tt=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},Ot=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class et extends Di(k){constructor(){super(...arguments),this.defaultValue="",this.name="",this.label="",this.placeholder=""}static get formAssociated(){return!0}handleInputChange(t){const e=t.target;this.setValue(e.value);const i=new Event("change",{composed:!0,bubbles:!0});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.label&&(this.label=`${this.label}:`)}render(){return g`
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
  `;Tt([m(),Ot("design:type",Object)],et.prototype,"defaultValue",void 0);Tt([m(),Ot("design:type",Object)],et.prototype,"name",void 0);Tt([m(),Ot("design:type",Object)],et.prototype,"label",void 0);Tt([m(),Ot("design:type",Object)],et.prototype,"placeholder",void 0);window.customElements.define("a2k-text-field",et);var C=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(o):i?i.value:t.get(o)},j=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,i,s){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!s:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?s.call(o,e):s?s.value=e:t.set(o,e),e};function Ii(o){var t,e,i,s,r,n,a,d,h,w,u,f,y,b,T,V,L;class B extends o{constructor(...l){super(...l),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),s.set(this,!1),r.set(this,void 0),n.set(this,void 0),a.set(this,""),d.set(this,()=>{j(this,s,!0,"f"),j(this,e,!0,"f"),C(this,t,"m",b).call(this)}),h.set(this,()=>{j(this,e,!1,"f"),C(this,t,"m",T).call(this,this.shouldFormValueUpdate()?C(this,a,"f"):""),!this.validity.valid&&C(this,s,"f")&&j(this,i,!0,"f");const c=C(this,t,"m",b).call(this);this.validationMessageCallback&&this.validationMessageCallback(c?this.internals.validationMessage:"")}),w.set(this,()=>{var c;j(this,i,!0,"f"),C(this,t,"m",b).call(this),(c=this===null||this===void 0?void 0:this.validationMessageCallback)===null||c===void 0||c.call(this,this.showError?this.internals.validationMessage:"")}),u.set(this,void 0),f.set(this,!1),y.set(this,Promise.resolve()),this.addEventListener("focus",C(this,d,"f")),this.addEventListener("blur",C(this,h,"f")),this.addEventListener("invalid",C(this,w,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const l=this.validators.map(p=>p.attribute),c=super.observedAttributes||[];return[...new Set([...c,...l])]}static getValidator(l){return this.validators.find(c=>c.attribute===l)||null}get form(){return this.internals.form}get showError(){return C(this,t,"m",b).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(l,c,v){var p;(p=super.attributeChangedCallback)===null||p===void 0||p.call(this,l,c,v),this.constructor.getValidator(l)&&this.validationTarget&&this.setValue(C(this,a,"f"))}setValue(l){var c;j(this,i,!1,"f"),(c=this.validationMessageCallback)===null||c===void 0||c.call(this,""),j(this,a,l,"f");const p=this.shouldFormValueUpdate()?l:null;this.internals.setFormValue(p),C(this,t,"m",T).call(this,p),this.valueChangedCallback&&this.valueChangedCallback(p),C(this,t,"m",b).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(l=>l(C(this,y,"f")))}formResetCallback(){var l,c;j(this,s,!1,"f"),j(this,i,!1,"f"),C(this,t,"m",b).call(this),(l=this.resetFormControl)===null||l===void 0||l.call(this),(c=this.validationMessageCallback)===null||c===void 0||c.call(this,C(this,t,"m",b).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,s=new WeakMap,r=new WeakMap,n=new WeakMap,a=new WeakMap,d=new WeakMap,h=new WeakMap,w=new WeakMap,u=new WeakMap,f=new WeakMap,y=new WeakMap,t=new WeakSet,b=function(){if(this.hasAttribute("disabled"))return!1;const l=C(this,i,"f")||C(this,s,"f")&&!this.validity.valid&&!C(this,e,"f");return l&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),l},T=function(l){const c=this.constructor,v={},p=c.validators,U=[];C(this,f,"f")||(j(this,y,new Promise(_=>{j(this,u,_,"f")}),"f"),j(this,f,!0,"f")),C(this,r,"f")&&(C(this,r,"f").abort(),j(this,n,C(this,r,"f"),"f"));const A=new AbortController;j(this,r,A,"f");let F,z=!1;!p.length||(p.forEach(_=>{const D=_.key||"customError",S=_.isValid(this,l,A.signal);S instanceof Promise?(U.push(S),S.then(I=>{I!=null&&(v[D]=!I,F=C(this,t,"m",L).call(this,_,l),C(this,t,"m",V).call(this,v,F))})):(v[D]=!S,this.validity[D]!==!S&&(z=!0),S||(F=C(this,t,"m",L).call(this,_,l)))}),Promise.allSettled(U).then(()=>{var _;A!=null&&A.signal.aborted||(j(this,f,!1,"f"),(_=C(this,u,"f"))===null||_===void 0||_.call(this))}),z&&C(this,t,"m",V).call(this,v,F))},V=function(l,c){if(this.validationTarget)this.internals.setValidity(l,c,this.validationTarget);else{if(this.internals.setValidity(l,c),this.internals.validity.valid)return;let v=0;const p=setInterval(()=>{v>=100||this.validity.valid?clearInterval(p):this.validationTarget&&(this.internals.setValidity(this.validity,c,this.validationTarget),clearInterval(p)),v+=1},0)}},L=function(l,c){if(this.validityCallback){const v=this.validityCallback(l.key||"customError");if(v)return v}return l.message instanceof Function?l.message(this,c):l.message},B}var ut=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},pt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class X extends Ii(k){constructor(){super(...arguments),this.label="",this.selectedItem=null,this.name="",this.expanded=!1,this.placeholder="Choose an option",this._options=[],this._openListbox=()=>{this.expanded||(this.expanded=!0,document.addEventListener("click",this._hideOnClickOutside))},this._closeListbox=()=>{!this.expanded||(this.expanded=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._hideOnClickOutside=t=>{t.composedPath().includes(this)||this._closeListbox()}}handleKeyDown(t){t.key==="Escape"&&this.expanded?this._closeListbox():t.key==="Escape"&&!this.expanded&&this.handleSetValue(null)}handleSelectKeyDown(t){(t.key==="ArrowDown"||t.key==="Enter"||t.code==="Space")&&(this.expanded?this.moveFocusToOption(0):this._openListbox())}moveFocusToOption(t){this._options[t].focus()}handleSelectClick(){this.expanded?this._closeListbox():this._openListbox()}handleSetValue(t){const e=t||null;this.selectedItem=e,this.setValue((e==null?void 0:e.value)||"");const i=new Event("change",{composed:!0,bubbles:!0});this.dispatchEvent(i)}handleOptionSelect(t){const e=t.target;if(e.tagName!=="OPTION")return;const i={value:e.value,label:e.innerText};this.handleSetValue(i),this._closeListbox()}handleOptionKeyDown(t){if((t.key==="Enter"||t.code==="Space")&&this.handleOptionSelect(t),t.key==="ArrowDown"){const e=t.target;e.nextElementSibling?e.nextElementSibling.focus():this.moveFocusToOption(0)}if(t.key==="ArrowUp"){const e=t.target;if(e.previousElementSibling)e.previousElementSibling.focus();else{const s=this._options.length;this.moveFocusToOption(s-1)}}}toggleButton(){return g`<a2k-button tabindex="-1" size="small">
      <a2k-icon icon="chevron-icon"></a2k-icon>
    </a2k-button> `}handleSlotchange(t){const i=t.target.assignedElements();i.forEach(s=>{s.setAttribute("tabindex","0")}),this._options=i}connectedCallback(){super.connectedCallback(),this.label&&(this.label=`${this.label}:`),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown)}render(){var t;return g`
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

          ${this.expanded?g`
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
  `;ut([m({type:String}),pt("design:type",Object)],X.prototype,"label",void 0);ut([m({type:String}),pt("design:type",Object)],X.prototype,"selectedItem",void 0);ut([m({type:String}),pt("design:type",Object)],X.prototype,"name",void 0);ut([Zt(),pt("design:type",Object)],X.prototype,"expanded",void 0);ut([m({type:String}),pt("design:type",Object)],X.prototype,"placeholder",void 0);window.customElements.define("a2k-select",X);var Ye=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},Xe=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Pt extends k{constructor(){super(...arguments),this.slotHeightStyles={height:"0px"}}firstUpdated(){const t=getComputedStyle(this.desktopContainer).height;this.slotHeightStyles={height:t}}render(){return g`<div id="desktop">
      <slot id="slot" style=${kt(this.slotHeightStyles)}></slot>
    </div>`}}Pt.styles=x`
    #desktop {
      height: 100%;
    }

    #desktop > slot {
      display: flex;
      flex-flow: column wrap;
      width: fit-content;
    }
  `;Ye([m(),Xe("design:type",Object)],Pt.prototype,"slotHeightStyles",void 0);Ye([Jt("#desktop"),Xe("design:type",HTMLSlotElement)],Pt.prototype,"desktopContainer",void 0);window.customElements.define("a2k-desktop",Pt);var ne=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},ae=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class ft extends k{constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return g` <button id="icon-wrapper" @dblclick=${this.onOpen}>
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
  `;ne([m({type:String}),ae("design:type",Object)],ft.prototype,"text",void 0);ne([m({type:String}),ae("design:type",Object)],ft.prototype,"icon",void 0);ne([m(),ae("design:type",Object)],ft.prototype,"onOpen",void 0);window.customElements.define("a2k-desktop-icon",ft);class Ke extends k{render(){return g`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}Ke.styles=x`
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
  `;window.customElements.define("a2k-cover",Ke);const Wi=(o,t)=>{const e=o/t,i=t/o*100,s=Array(e).fill(i),r=s.length;for(let n=0;n<1e3;n++){const a=Math.floor(Math.random()*r),d=s[a],h=Math.floor(Math.random()*r),w=s[h],u=wt(Math.random()*d),f=wt(d-u),y=wt(w+u);s[a]=f,s[h]=y}return s};var vt=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},gt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};const zi=["Booting Up..."],qi=o=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:o});class K extends k{constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.state="idle",this.image="",this.footerText="Copyright \u24B8 1999-2000. Andricos2000",this.messages=zi,this.progress=0,this.interval=50,this.handleStart=()=>{this.state="loading",document.querySelector("body").setAttribute("data-state","waiting"),this.beginLoading()},this.beginLoading=()=>{const t=Wi(this.startupTime,this.interval);this.intervalRef=setInterval(()=>{var r;const e=(r=t[this.currentStep])!=null?r:0,i=wt(this.progress+e),s=qi({progress:i,isComplete:i>=100});this.dispatchEvent(s),i>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=i,this.currentStep++)},this.interval)}}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return this.state==="idle"?g`
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
      `:g`
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
    `}}K.styles=x`
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
  `;vt([m({type:String}),gt("design:type",Object)],K.prototype,"state",void 0);vt([m({type:String}),gt("design:type",Object)],K.prototype,"image",void 0);vt([m({type:String}),gt("design:type",Object)],K.prototype,"footerText",void 0);vt([m(),gt("design:type",Object)],K.prototype,"messages",void 0);vt([m(),gt("design:type",Object)],K.prototype,"progress",void 0);window.customElements.define("a2k-startup",K);var Ge=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},Ze=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Rt extends k{firstUpdated(){const[t]=this.slotEl,e=t.cloneNode(!0);this.marqueeWrapperEl.appendChild(e)}render(){return g`<div id="marquee">
      <div id="marquee-inner-1">
        <slot name="text"></slot>
      </div>
      <div id="marquee-inner-2"></div>
    </div>`}}Rt.styles=x`
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
  `;Ge([bi({slot:"text"}),Ze("design:type",Array)],Rt.prototype,"slotEl",void 0);Ge([Jt("#marquee-inner-2"),Ze("design:type",HTMLElement)],Rt.prototype,"marqueeWrapperEl",void 0);window.customElements.define("a2k-marquee",Rt);const Hi=o=>{const t=new FormData(o),e={};for(const[i,s]of t.entries())e.hasOwnProperty(i)?Array.isArray(e[i])?e[i].push(s):e[i]=[e[i],s]:e[i]=s;return e},Ee=o=>{const t=Hi(o),e={};return Object.entries(t).forEach(([i,s])=>{if(i.includes(".")){const r=i.split("."),n=r.pop();let a=e;for(;r.length;){const d=r.shift();a[d]=a[d]||{},a=a[d]}a[n]=s}else e[i]=t[i]}),e};var Ni=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,Je=(o,t,e,i)=>{for(var s=i>1?void 0:i?Bi(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Ni(t,e,s),s};const Yi="https://github.com/andrico1234/a2k",Xi="https://twitter.com/andricokaroulla",Ki=()=>g`
    <a2k-text-field
      label="Feedback"
      placeholder="e.g. it's dope!"
      name="details"
    ></a2k-text-field>
  `,Gi=()=>g`
    <a2k-text-field
      label="Ideas"
      placeholder="e.g. more easter eggs"
      name="details"
    ></a2k-text-field>
  `,Zi=()=>g`
    <a2k-text-field
      label="Issues"
      placeholder="e.g. i'm on Chrome and it's broken"
      name="details"
    ></a2k-text-field>
  `,Ji=()=>g`
    <a2k-text-field
      label="Your email"
      placeholder="e.g. andrico@example.com"
      name="details"
    ></a2k-text-field>
  `,Qi=()=>g`
    <div>
      <p>
        Thanks! You can show your support by giving
        <a href="${Yi}">a2k</a> a star on GitHub.
      </p>
      <p>
        You can also follow me on <a href="${Xi}">Twitter</a> to follow
        progress.
      </p>
    </div>
  `,to={feature:Gi,problem:Zi,hire:Ji,support:Qi};class Mt extends k{constructor(){super(...arguments),this.activeContent=""}submit(t){t.preventDefault();const e=t.target,{select:i="none",details:s=""}=Ee(e);window.insights.track({id:"feedback",parameters:{type:i,details:s}})}updateActiveContent(){const{select:t}=Ee(this.formEl);this.activeContent=t?t.toString():""}handleFormChange(){this.updateActiveContent()}handleChange(){this.updateActiveContent()}render(){const t=to[this.activeContent];return g`
      <div id="container">
        <a2k-window draggable closeable heading="Share your thoughts">
          <form @submit=${this.submit} @change=${this.handleChange}>
            <a2k-stack>
              <a2k-select
                label="Reason"
                name="select"
                placeholder="I would like to..."
              >
                <option value="feature">Suggest a feature</option>
                <option value="problem">Report a problem</option>
                <option value="hire">Hire Andrico</option>
                <option value="support">Show support for a2k</option>
              </a2k-select>

              ${t?t():Ki()}
              <a2k-button type="submit">Submit</a2k-button>
            </a2k-stack>
          </form>
        </a2k-window>
      </div>
    `}}Mt.styles=x`
    :host {
      --window-width: 400px;
    }

    #container {
      width: 320px;
    }

    form {
      margin-block: var(--spacing-100);
    }
  `;Je([Jt("form")],Mt.prototype,"formEl",2);Je([Zt()],Mt.prototype,"activeContent",2);window.customElements.define("a2k-feedback",Mt);const eo=g`
  <a2k-window heading="Please wait..." draggable closeable>
    <p class="heading">Andricos<span>2000</span></p>
    <a2k-stack>
      <p>Andricos2000 is starting up...</p>
      <a2k-progress></a2k-progress>
    </a2k-stack>
  </a2k-window>
`;class Qe extends k{constructor(){super(...arguments);W(this,"connection","");W(this,"handleOnline",()=>{connection="Online"});W(this,"handleOffline",()=>{connection="Offline"})}connectedCallback(){super.connectedCallback(),this.addEventListener("online",this.handleOnline),this.addEventListener("offline",this.handleOffline),this.connection=navigator.onLine?"Online":"Offline"}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("online",this.handleOnline),this.removeEventListener("offline",this.handleOffline)}render(){return g` <a2k-window draggable closeable heading="Internet Explorer 5">
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
    </a2k-window>`}}W(Qe,"styles",x`
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
  `);window.customElements.define("a2k-ie5",Qe);class ti extends k{render(){return g` <a2k-window draggable closeable heading="About Andricos2000">
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
    </a2k-window>`}}W(ti,"styles",x`
    p {
      margin: 0;
    }

    img {
      max-width: 400px;
      object-fit: cover;
    }
  `);window.customElements.define("a2k-about",ti);var io=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,jt=(o,t,e,i)=>{for(var s=i>1?void 0:i?oo(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&io(t,e,s),s};class it extends k{constructor(){super(...arguments);W(this,"height",0);W(this,"width",0);W(this,"top",0);W(this,"left",0)}render(){const e=kt({width:`${this.width}px`,transform:`translate(${this.left}px, ${this.top}px)`}),i=kt({height:`${this.height}px`});return g`
      <div style=${e} id="outer-wrapper">
        <a2k-panel>
          <div style=${i}></div>
        </a2k-panel>
      </div>
    `}}W(it,"styles",x`
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
  `);jt([m()],it.prototype,"height",2);jt([m()],it.prototype,"width",2);jt([m()],it.prototype,"top",2);jt([m()],it.prototype,"left",2);window.customElements.define("a2k-broken-window",it);const so=document.querySelector("body"),ro=new URL("/assets/andricos-2000-startup.774be9be.mp3",self.location),mt=document.querySelector("#windows-container"),no=document.querySelector('a2k-desktop-icon[icon="documents-icon"]');no.onOpen=()=>{window.location.href="https://andri.co"};const ao=document.querySelector('a2k-desktop-icon[icon="network-icon"]');ao.onOpen=()=>{const o=document.createElement("a2k-feedback");mt.append(o)};const lo=document.querySelector('a2k-desktop-icon[icon="github-icon"]');lo.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const co=document.querySelector('a2k-desktop-icon[icon="help-icon"]');co.onOpen=()=>{const o=document.createElement("a2k-about");mt.append(o)};const ho=document.querySelector('a2k-desktop-icon[icon="internet-icon"]');ho.onOpen=()=>{const o=document.createElement("a2k-ie5");mt.append(o)};let $e=!1;const uo=o=>{const{target:t,detail:e}=o,{containerEl:i}=e,s=document.querySelector("a2k-window[heading='Please wait...']");if(!s||!s.isSameNode(t))return;const{width:r,top:n,left:a,height:d}=i.getBoundingClientRect(),h=document.createElement("a2k-broken-window");mt.insertBefore(h,s),h.setAttribute("height",d),h.setAttribute("width",r),h.setAttribute("top",n),h.setAttribute("left",a)};window.addEventListener("startup-progress",o=>{if(!(o.detail.progress<50)&&!$e){$e=!0;try{po()}catch{}}});window.addEventListener("startup-progress",o=>{!o.detail.isComplete||(setTimeout(()=>{document.querySelector(".fixed-container").remove(),fo(),vo()},300),setTimeout(()=>{so.removeAttribute("data-state")},500))});function po(){const o=new Audio(ro);o.volume=.3,o.play()}function fo(){let o=0;setTimeout(()=>{Gt(eo,mt);const t=document.querySelector("a2k-progress"),e=document.querySelector("a2k-window[heading='Please wait...']"),i=setInterval(()=>{if(!!t&&(o=o+1.2,t.setAttribute("progress",o),o>40)){for(;e.firstChild;)e.removeChild(e.lastChild);window.addEventListener("window-drag",uo),e.innerHTML=`
        <a2k-stack>
          <p>Oh no! We had a problem loading Andricos2000. Don't worry, you can still play around and find some easter eggs.</p>
          <p>Andricos2000 is a work in progress, so keep checking back (or follow me on <a href="https://twitter.com/andricokaroulla" target="_blank"
          >Twitter</a
        >) for updates :)</p>
          </a2k-stack>
        `,clearInterval(i)}},100)},700)}function vo(){const o=document.querySelectorAll("a2k-desktop-icon");setTimeout(()=>{o.forEach(t=>{t.removeAttribute("hidden")})},1200)}
