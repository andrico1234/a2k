var ke=Object.defineProperty;var $e=(r,t,e)=>t in r?ke(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var rt=(r,t,e)=>($e(r,typeof t!="symbol"?t+"":t,e),e);const xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}};xe();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yt=Symbol(),It=new WeakMap;class Zt{constructor(t,e,o){if(this._$cssResult$=!0,o!==yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(wt&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=It.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&It.set(e,t))}return t}toString(){return this.cssText}}const Ee=r=>new Zt(typeof r=="string"?r:r+"",void 0,yt),v=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((o,n,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[i+1],r[0]);return new Zt(e,r,yt)},Ae=(r,t)=>{wt?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),n=window.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=e.cssText,r.appendChild(o)})},zt=wt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Ee(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var it;const Dt=window.trustedTypes,Se=Dt?Dt.emptyScript:"",Nt=window.reactiveElementPolyfillSupport,pt={toAttribute(r,t){switch(t){case Boolean:r=r?Se:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Jt=(r,t)=>t!==r&&(t==t||r==r),nt={attribute:!0,type:String,converter:pt,reflect:!1,hasChanged:Jt};class A extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const n=this._$Ep(o,e);n!==void 0&&(this._$Ev.set(n,o),t.push(n))}),t}static createProperty(t,e=nt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||nt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of o)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)e.unshift(zt(n))}else t!==void 0&&e.push(zt(t));return e}static _$Ep(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ae(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=nt){var n,i;const s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){const a=((i=(n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&i!==void 0?i:pt.toAttribute)(e,o.type);this._$El=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(t,e){var o,n;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const a=i.getPropertyOptions(s),l=a.converter,d=(n=(o=l==null?void 0:l.fromAttribute)!==null&&o!==void 0?o:typeof l=="function"?l:null)!==null&&n!==void 0?n:pt.fromAttribute;this._$El=s,this[s]=d(e,a.type),this._$El=null}}requestUpdate(t,e,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Jt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,i)=>this[i]=n),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(o)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},Nt==null||Nt({ReactiveElement:A}),((it=globalThis.reactiveElementVersions)!==null&&it!==void 0?it:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var st;const T=globalThis.trustedTypes,qt=T?T.createPolicy("lit-html",{createHTML:r=>r}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,Qt="?"+k,Te=`<${Qt}>`,P=document,z=(r="")=>P.createComment(r),D=r=>r===null||typeof r!="object"&&typeof r!="function",te=Array.isArray,Pe=r=>{var t;return te(r)||typeof((t=r)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,Bt=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Wt=/'/g,Vt=/"/g,ee=/^(?:script|style|textarea|title)$/i,oe=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=oe(1),Oe=oe(2),y=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Xt=new WeakMap,_t=(r,t,e)=>{var o,n;const i=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let s=i._$litPart$;if(s===void 0){const a=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new q(t.insertBefore(z(),a),a,void 0,e!=null?e:{})}return s._$AI(r),s},S=P.createTreeWalker(P,129,null,!1),Ce=(r,t)=>{const e=r.length-1,o=[];let n,i=t===2?"<svg>":"",s=U;for(let l=0;l<e;l++){const d=r[l];let p,c,h=-1,b=0;for(;b<d.length&&(s.lastIndex=b,c=s.exec(d),c!==null);)b=s.lastIndex,s===U?c[1]==="!--"?s=Ht:c[1]!==void 0?s=Bt:c[2]!==void 0?(ee.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=x):c[3]!==void 0&&(s=x):s===x?c[0]===">"?(s=n!=null?n:U,h=-1):c[1]===void 0?h=-2:(h=s.lastIndex-c[2].length,p=c[1],s=c[3]===void 0?x:c[3]==='"'?Vt:Wt):s===Vt||s===Wt?s=x:s===Ht||s===Bt?s=U:(s=x,n=void 0);const E=s===x&&r[l+1].startsWith("/>")?" ":"";i+=s===U?d+Te:h>=0?(o.push(p),d.slice(0,h)+"$lit$"+d.slice(h)+k+E):d+k+(h===-2?(o.push(void 0),l):E)}const a=i+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[qt!==void 0?qt.createHTML(a):a,o]};class N{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let i=0,s=0;const a=t.length-1,l=this.parts,[d,p]=Ce(t,e);if(this.el=N.createElement(d,o),S.currentNode=this.el.content,e===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(n=S.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const h of n.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(k)){const b=p[s++];if(c.push(h),b!==void 0){const E=n.getAttribute(b.toLowerCase()+"$lit$").split(k),$=/([.?@])?(.*)/.exec(b);l.push({type:1,index:i,name:$[2],strings:E,ctor:$[1]==="."?je:$[1]==="?"?Le:$[1]==="@"?Ue:G})}else l.push({type:6,index:i})}for(const h of c)n.removeAttribute(h)}if(ee.test(n.tagName)){const c=n.textContent.split(k),h=c.length-1;if(h>0){n.textContent=T?T.emptyScript:"";for(let b=0;b<h;b++)n.append(c[b],z()),S.nextNode(),l.push({type:2,index:++i});n.append(c[h],z())}}}else if(n.nodeType===8)if(n.data===Qt)l.push({type:2,index:i});else{let c=-1;for(;(c=n.data.indexOf(k,c+1))!==-1;)l.push({type:7,index:i}),c+=k.length-1}i++}}static createElement(t,e){const o=P.createElement("template");return o.innerHTML=t,o}}function O(r,t,e=r,o){var n,i,s,a;if(t===y)return t;let l=o!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[o]:e._$Cu;const d=D(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),d===void 0?l=void 0:(l=new d(r),l._$AT(r,e,o)),o!==void 0?((s=(a=e)._$Cl)!==null&&s!==void 0?s:a._$Cl=[])[o]=l:e._$Cu=l),l!==void 0&&(t=O(r,l._$AS(r,t.values),l,o)),t}class Re{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:n}=this._$AD,i=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:P).importNode(o,!0);S.currentNode=i;let s=S.nextNode(),a=0,l=0,d=n[0];for(;d!==void 0;){if(a===d.index){let p;d.type===2?p=new q(s,s.nextSibling,this,t):d.type===1?p=new d.ctor(s,d.name,d.strings,this,t):d.type===6&&(p=new Ie(s,this,t)),this.v.push(p),d=n[++l]}a!==(d==null?void 0:d.index)&&(s=S.nextNode(),a++)}return i}m(t){let e=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class q{constructor(t,e,o,n){var i;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cg=(i=n==null?void 0:n.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),D(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==y&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Pe(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==m&&D(this._$AH)?this._$AA.nextSibling.data=t:this.k(P.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=N.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.m(o);else{const s=new Re(i,this),a=s.p(this.options);s.m(o),this.k(a),this._$AH=s}}_$AC(t){let e=Xt.get(t.strings);return e===void 0&&Xt.set(t.strings,e=new N(t)),e}S(t){te(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const i of t)n===e.length?e.push(o=new q(this.M(z()),this.M(z()),this,this.options)):o=e[n],o._$AI(i),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class G{constructor(t,e,o,n,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,n){const i=this.strings;let s=!1;if(i===void 0)t=O(this,t,e,0),s=!D(t)||t!==this._$AH&&t!==y,s&&(this._$AH=t);else{const a=t;let l,d;for(t=i[0],l=0;l<i.length-1;l++)d=O(this,a[o+l],e,l),d===y&&(d=this._$AH[l]),s||(s=!D(d)||d!==this._$AH[l]),d===m?t=m:t!==m&&(t+=(d!=null?d:"")+i[l+1]),this._$AH[l]=d}s&&!n&&this.C(t)}C(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class je extends G{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===m?void 0:t}}const Me=T?T.emptyScript:"";class Le extends G{constructor(){super(...arguments),this.type=4}C(t){t&&t!==m?this.element.setAttribute(this.name,Me):this.element.removeAttribute(this.name)}}class Ue extends G{constructor(t,e,o,n,i){super(t,e,o,n,i),this.type=5}_$AI(t,e=this){var o;if((t=(o=O(this,t,e,0))!==null&&o!==void 0?o:m)===y)return;const n=this._$AH,i=t===m&&n!==m||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==m&&(n===m||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class Ie{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const Yt=window.litHtmlPolyfillSupport;Yt==null||Yt(N,q),((st=globalThis.litHtmlVersions)!==null&&st!==void 0?st:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at,lt;class u extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_t(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return y}}u.finalized=!0,u._$litElement$=!0,(at=globalThis.litElementHydrateSupport)===null||at===void 0||at.call(globalThis,{LitElement:u});const Ft=globalThis.litElementPolyfillSupport;Ft==null||Ft({LitElement:u});((lt=globalThis.litElementVersions)!==null&&lt!==void 0?lt:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=r=>t=>typeof t=="function"?((e,o)=>(window.customElements.define(e,o),o))(r,t):((e,o)=>{const{kind:n,elements:i}=o;return{kind:n,elements:i,finisher(s){window.customElements.define(e,s)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function g(r){return(t,e)=>e!==void 0?((o,n,i)=>{n.constructor.createProperty(i,o)})(r,t,e):ze(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function De(r){return g({...r,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=({finisher:r,descriptor:t})=>(e,o)=>{var n;if(o===void 0){const i=(n=e.originalKey)!==null&&n!==void 0?n:e.key,s=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(e.key)}:{...e,key:i};return r!=null&&(s.finisher=function(a){r(a,i)}),s}{const i=e.constructor;t!==void 0&&Object.defineProperty(e,o,t(o)),r==null||r(i,o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ne(r,t){return re({descriptor:e=>{const o={get(){var n,i;return(i=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(r))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const n=typeof e=="symbol"?Symbol():"__"+e;o.get=function(){var i,s;return this[n]===void 0&&(this[n]=(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(r))!==null&&s!==void 0?s:null),this[n]}}return o}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dt;const qe=((dt=window.HTMLSlotElement)===null||dt===void 0?void 0:dt.prototype.assignedElements)!=null?(r,t)=>r.assignedElements(t):(r,t)=>r.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function He(r){const{slot:t,selector:e}=r!=null?r:{};return re({descriptor:o=>({get(){var n;const i="slot"+(t?`[name=${t}]`:":not([name])"),s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i),a=s!=null?qe(s,r):[];return e?a.filter(l=>l.matches(e)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},$t=r=>(...t)=>({_$litDirective$:r,values:t});class xt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=$t(class extends xt{constructor(r){var t;if(super(r),r.type!==kt.ATTRIBUTE||r.name!=="style"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{const o=r[e];return o==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(r,[t]){const{style:e}=r.element;if(this.ct===void 0){this.ct=new Set;for(const o in t)this.ct.add(o);return this.render(t)}this.ct.forEach(o=>{t[o]==null&&(this.ct.delete(o),o.includes("-")?e.removeProperty(o):e[o]="")});for(const o in t){const n=t[o];n!=null&&(this.ct.add(o),o.includes("-")?e.setProperty(o,n):e[o]=n)}return y}});class Be{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class _{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:I(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new _(e));if(t.length>0)return t}return[this]}}const I=r=>"pointerId"in r,ct=r=>"changedTouches"in r,Kt=()=>{};class We{constructor(t,{start:e=()=>!0,move:o=Kt,end:n=Kt,rawUpdates:i=!1,avoidPointerEvents:s=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(I(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const l=new _(a);this.currentPointers.some(d=>d.id===l.id)||!this._triggerPointerStart(l,a)||(I(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerStart(new _(l),a)},this._move=a=>{if(!ct(a)&&(!I(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const l=this.currentPointers.slice(),d=ct(a)?Array.from(a.changedTouches).map(c=>new _(c)):[new _(a)],p=[];for(const c of d){const h=this.currentPointers.findIndex(b=>b.id===c.id);h!==-1&&(p.push(c),this.currentPointers[h]=c)}p.length!==0&&this._moveCallback(l,p,a)},this._triggerPointerEnd=(a,l)=>{if(!ct(l)&&l.buttons&1)return!1;const d=this.currentPointers.findIndex(c=>c.id===a.id);if(d===-1)return!1;this.currentPointers.splice(d,1),this.startPointers.splice(d,1),this._excludeFromButtonsCheck.delete(a.id);const p=!(l.type==="mouseup"||l.type==="touchend"||l.type==="pointerup");return this._endCallback(a,l,p),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new _(a),a))if(I(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerEnd(new _(l),a)},this._startCallback=e,this._moveCallback=o,this._endCallback=n,this._rawUpdates=i&&"onpointerrawupdate"in window,self.PointerEvent&&!s?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}const ft=(r,t)=>r<=t?r:t;var ht=globalThis&&globalThis.__classPrivateFieldGet||function(r,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!o:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(r):o?o.value:t.get(r)},gt,vt,mt;const Ve={initialPosition:{}};class Xe extends xt{constructor(t){if(super(t),this.hasInitialised=!1,t.type!==kt.ELEMENT)throw new Error("The `drag` directive must be used on an element")}update(t,e){if(this.hasInitialised)return;const o=t.element,[n,i]=e;o.setAttribute("data-dragging","idle"),n.draggableElement=o,n.pointerTracker=new We(o,{start(...s){return i.start(...s),o.setAttribute("data-dragging","dragging"),!0},move(...s){i.move(...s)},end(...s){i.end(...s),o.setAttribute("data-dragging","idle")}}),this.hasInitialised=!0}render(t,e){return y}}const Ye=$t(Xe);class Fe{constructor(t,e=Ve){this.cursorPositionX=null,this.cursorPositionY=null,this.pointerTracker=null,this.draggableElement=null,this.containerElement=null,this.containerId="",this.styles={touchAction:"none",top:"0px",left:"0px"},gt.set(this,(i,s)=>(this.cursorPositionX=Math.floor(i.pageX),this.cursorPositionY=Math.floor(i.pageY),s.target.setAttribute("data-state","dragging"),!0)),vt.set(this,(i,s)=>{const[a]=s,l=new CustomEvent("window-drag",{bubbles:!0,composed:!0,detail:{pointer:a}});window.requestAnimationFrame(()=>(this.host.dispatchEvent(l),this.handleWindowMove(a)))}),mt.set(this,(i,s)=>{s.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this);const{initialPosition:o={},containerId:n=""}=e;this.styles={...this.styles,...o},this.containerId=n}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}applyDrag(){return this.host.draggable?Ye(this,{start:ht(this,gt,"f"),move:ht(this,vt,"f"),end:ht(this,mt,"f")}):null}updateElPosition(t,e){this.styles={...this.styles,left:t,top:e}}handleWindowMove(t){var p;const e=this.draggableElement,o=(p=this.host.shadowRoot)==null?void 0:p.querySelector(this.containerId);if(!e||!o)return;const{top:n,left:i}=this.styles,s=Number(n==null?void 0:n.replace("px","")),a=Number(i==null?void 0:i.replace("px","")),l=Math.floor(t.pageX),d=Math.floor(t.pageY);if(l!==this.cursorPositionX||d!==this.cursorPositionY){const{bottom:c,height:h}=e.getBoundingClientRect(),{right:b,width:E}=o.getBoundingClientRect(),$=ft(screen.availWidth,innerWidth),Rt=ft(screen.availHeight,innerHeight),j=l-this.cursorPositionX,M=d-this.cursorPositionY,jt=s+M<0,Mt=a+j<0,Lt=c+M>Rt,Ut=b+j>=$,_e=Lt||Mt||Ut||jt;if(this.cursorPositionX=l,this.cursorPositionY=d,_e){if(jt){const w=`${a+j}px`;this.updateElPosition(w,"0px")}else if(Mt){const w=`${s+M}px`;this.updateElPosition("0px",w)}else if(Lt){const w=`${Rt-h}px`,L=`${a+j}px`;this.updateElPosition(L,w)}else if(Ut){const w=`${s+M}px`,L=`${Math.floor($-E)}px`;this.updateElPosition(L,w)}}else{const w=`${s+M}px`,L=`${a+j}px`;this.updateElPosition(L,w)}this.host.requestUpdate()}}}gt=new WeakMap,vt=new WeakMap,mt=new WeakMap;const V=(r,t=100)=>Math.round(r*t)/t;class ie extends u{render(){return f`<div id="stack">
      <slot></slot>
    </div>`}}ie.styles=v`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",ie);class ne extends u{render(){return f` <div id="panel">
      <slot></slot>
    </div>`}}ne.styles=v`
    #panel {
      --inset-shadow-padding: 2px;
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
    }
  `;window.customElements.define("a2k-panel",ne);class se extends u{render(){return f`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}se.styles=v`
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
  `;window.customElements.define("a2k-window-topbar",se);var ae=globalThis&&globalThis.__decorate||function(r,t,e,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},le=globalThis&&globalThis.__metadata||function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)};class Z extends u{constructor(){super(...arguments),this.disabled=!1,this.size="medium"}render(){return f` <button data-size="${this.size}" ?disabled=${this.disabled}>
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
  `;ae([g({type:Boolean}),le("design:type",Object)],Z.prototype,"disabled",void 0);ae([g({type:String}),le("design:type",String)],Z.prototype,"size",void 0);window.customElements.define("a2k-button",Z);var Ke=globalThis&&globalThis.__decorate||function(r,t,e,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},Ge=globalThis&&globalThis.__metadata||function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)};const Ze=new URL("/assets/a2k-icons.100a148a.svg",self.location).href;class Et extends u{constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),Oe`
      <svg height="1em" width="1em">
        <use href="${Ze}#${this.icon}"></use>
      </svg>
    `}}Et.styles=v`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;Ke([g({type:String}),Ge("design:type",Object)],Et.prototype,"icon",void 0);window.customElements.define("a2k-icon",Et);var Je=globalThis&&globalThis.__decorate||function(r,t,e,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},Qe=globalThis&&globalThis.__metadata||function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)};class At extends u{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return f`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}At.styles=v`
    :host {
      position: absolute;
      right: 2px;
    }

    #icon-wrapper {
      font-size: 8px;
    }
  `;Je([g({type:Boolean}),Qe("design:type",Object)],At.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",At);var St=globalThis&&globalThis.__decorate||function(r,t,e,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},Tt=globalThis&&globalThis.__metadata||function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)};class B extends u{constructor(){super(),this.heading="",this.draggable=!1,this.closeable=!1,this.drag=new Fe(this,{initialPosition:{left:"32px",top:"32px"},containerId:"#window"}),this.addEventListener("close",()=>this.remove())}firstUpdated(){const{left:t}=this.drag.styles,{offsetWidth:e}=this.renderRoot.querySelector("#window"),o=ft(screen.availWidth,innerWidth);Number(t==null?void 0:t.replace("px",""))+e>o&&(this.drag.styles={...this.drag.styles,left:"0px"},this.requestUpdate())}render(){return f`
      <div id="window" style=${ut(this.drag.styles)}>
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
    `}}B.styles=v`
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
  `;St([g({type:String}),Tt("design:type",Object)],B.prototype,"heading",void 0);St([g({type:Boolean}),Tt("design:type",Object)],B.prototype,"draggable",void 0);St([g({type:Boolean}),Tt("design:type",Object)],B.prototype,"closeable",void 0);window.customElements.define("a2k-window",B);var de=globalThis&&globalThis.__decorate||function(r,t,e,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},to=globalThis&&globalThis.__metadata||function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)};let X=class extends u{constructor(){super(...arguments),this.open=!1}render(){return f`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};X.styles=v`
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
  `;de([g(),to("design:type",Object)],X.prototype,"open",void 0);X=de([H("a2k-start-menu-item")],X);var ce=globalThis&&globalThis.__decorate||function(r,t,e,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},eo=globalThis&&globalThis.__metadata||function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)};let Y=class extends u{constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=f` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;_t(t,document.body)}handleShutdownClick(){location.reload()}render(){const t=String(this.open)==="true";return f`
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
  `;ce([g(),eo("design:type",Object)],Y.prototype,"open",void 0);Y=ce([H("a2k-start-menu")],Y);var he=globalThis&&globalThis.__decorate||function(r,t,e,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},oo=globalThis&&globalThis.__metadata||function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)};let F=class extends u{constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return f`
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
  `;he([De(),oo("design:type",Object)],F.prototype,"_isMenuOpen",void 0);F=he([H("a2k-start-button")],F);var ro=globalThis&&globalThis.__decorate||function(r,t,e,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i};let bt=class extends u{constructor(){super(...arguments),this.clock=new Be(this)}render(){const t=io.format(this.clock.value);return f`<div class="utility-bar">${t}</div>`}};bt.styles=v`
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
  `;bt=ro([H("a2k-utility-bar")],bt);const io=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class pe extends u{render(){return f`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}pe.styles=v`
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
  `;window.customElements.define("a2k-taskbar",pe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no=$t(class extends xt{constructor(r){var t;if(super(r),r.type!==kt.ATTRIBUTE||r.name!=="class"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var e,o;if(this.et===void 0){this.et=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((e=this.st)===null||e===void 0)&&e.has(i))&&this.et.add(i);return this.render(t)}const n=r.element.classList;this.et.forEach(i=>{i in t||(n.remove(i),this.et.delete(i))});for(const i in t){const s=!!t[i];s===this.et.has(i)||((o=this.st)===null||o===void 0?void 0:o.has(i))||(s?(n.add(i),this.et.add(i)):(n.remove(i),this.et.delete(i)))}return y}});var ue=globalThis&&globalThis.__decorate||function(r,t,e,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},so=globalThis&&globalThis.__metadata||function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)};let K=class extends u{constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return f`<div class=${no(t)} id="unit">
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
  `;ue([g(),so("design:type",String)],K.prototype,"filled",void 0);K=ue([H("a2k-progress-unit")],K);var ao=globalThis&&globalThis.__decorate||function(r,t,e,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},lo=globalThis&&globalThis.__metadata||function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)};class Pt extends u{constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){var a;const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=(a=t.getBoundingClientRect().width)!=null?a:0;if(this.width===e)return;this.width=e;const{gap:o}=getComputedStyle(t),i=Number(o.replace("px",""))+12,s=Math.ceil(e/i);Array(s).fill(0).forEach(()=>{const l=document.createElement("a2k-progress-unit");l.setAttribute("filled","none"),t==null||t.appendChild(l)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,o=co(e),n=Math.floor(e);t.forEach((i,s)=>{s<n?i.setAttribute("filled","filled"):s===n&&o>=.5?i.setAttribute("filled","half"):i.setAttribute("filled","none")})}render(){return f`<div id="progress" role="progress"></div>`}}Pt.styles=v`
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
  `;ao([g({type:Number}),lo("design:type",Object)],Pt.prototype,"progress",void 0);const co=r=>Math.floor(r%1*10)/10;window.customElements.define("a2k-progress",Pt);class fe extends u{render(){return f`<div id="desktop">
      <slot />
    </div>`}}fe.styles=v`
    #desktop {
      height: 100%;
    }
  `;window.customElements.define("a2k-desktop",fe);var Ot=globalThis&&globalThis.__decorate||function(r,t,e,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},Ct=globalThis&&globalThis.__metadata||function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)};class W extends u{constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return f` <button id="icon-wrapper" @dblclick=${this.onOpen}>
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
  `;Ot([g({type:String}),Ct("design:type",Object)],W.prototype,"text",void 0);Ot([g({type:String}),Ct("design:type",Object)],W.prototype,"icon",void 0);Ot([g(),Ct("design:type",Object)],W.prototype,"onOpen",void 0);window.customElements.define("a2k-desktop-icon",W);class ge extends u{render(){return f`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}ge.styles=v`
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
  `;window.customElements.define("a2k-cover",ge);const ho=(r,t)=>{const e=r/t,o=t/r*100,n=Array(e).fill(o),i=n.length;for(let s=0;s<1e3;s++){const a=Math.floor(Math.random()*i),l=n[a],d=Math.floor(Math.random()*i),p=n[d],c=V(Math.random()*l),h=V(l-c),b=V(p+c);n[a]=h,n[d]=b}return n};var J=globalThis&&globalThis.__decorate||function(r,t,e,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},Q=globalThis&&globalThis.__metadata||function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)};const po=["Booting Up..."],uo=r=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:r});class C extends u{constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.image="",this.footerText="Copyright \u24B8 1999-2000. Andricos2000",this.messages=po,this.progress=0}connectedCallback(){super.connectedCallback();const t=50,e=ho(this.startupTime,t);this.intervalRef=setInterval(()=>{var s;const o=(s=e[this.currentStep])!=null?s:0,n=V(this.progress+o),i=uo({progress:n,isComplete:n>=100});this.dispatchEvent(i),n>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=n,this.currentStep++)},t)}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return f`
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
    `}}C.styles=v`
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
  `;J([g({type:String}),Q("design:type",Object)],C.prototype,"image",void 0);J([g({type:String}),Q("design:type",Object)],C.prototype,"footerText",void 0);J([g(),Q("design:type",Object)],C.prototype,"messages",void 0);J([g(),Q("design:type",Object)],C.prototype,"progress",void 0);window.customElements.define("a2k-startup",C);var ve=globalThis&&globalThis.__decorate||function(r,t,e,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},me=globalThis&&globalThis.__metadata||function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)};class tt extends u{firstUpdated(){const[t]=this.slotEl,e=t.cloneNode(!0);this.marqueeWrapperEl.appendChild(e)}render(){return f`<div id="marquee">
      <div id="marquee-inner-1">
        <slot name="text"></slot>
      </div>
      <div id="marquee-inner-2"></div>
    </div>`}}tt.styles=v`
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
  `;ve([He({slot:"text"}),me("design:type",Array)],tt.prototype,"slotEl",void 0);ve([Ne("#marquee-inner-2"),me("design:type",HTMLElement)],tt.prototype,"marqueeWrapperEl",void 0);window.customElements.define("a2k-marquee",tt);const fo=f`
  <a2k-window heading="Please wait..." draggable closeable>
    <p class="heading">Andricos<span>2000</span></p>
    <p>Andricos2000 is starting up...</p>
    <a2k-progress></a2k-progress>
  </a2k-window>
`;class be extends u{render(){return f` <a2k-window draggable closeable heading="Internet Explorer 5">
      <a2k-marquee>
        <p slot="text">
          Internet Explorer has now reached end of life. RIP king.
        </p>
      </a2k-marquee>
      <div>
        <a2k-icon icon="info-icon"></a2k-icon>
        <p>Coming soon</p>
      </div>
    </a2k-window>`}}rt(be,"styles",v`
    :host {
      --window-color-background: white;
    }

    a2k-window > a2k-marquee {
      padding: 0;
    }
  `);window.customElements.define("a2k-ie5",be);class we extends u{render(){return f` <a2k-window draggable closeable heading="About Andricos2000">
      <p>
        Andricos2000 is a free-to-use UI library inspired by the
        turn-of-the-millenium era of computing. It's a work in progress, so you
        can follow me on
        <a href="https://twitter.com/andricokaroulla" target="_blank"
          >Twitter</a
        >
        for updates.
      </p>
      <p>It's built by Andrico Karoulla (pictured below).</p>
      <p>
        If you'd like to use Andricos2000 in your own projects, then jump on
        over to our
        <a href="https://github.com/andrico1234/a2k" target="_blank">GitHub</a>.
      </p>
      <h2>Credits</h2>
      <p>
        The startup music is a reimagining of Madgalena Bay's
        <a
          href="https://www.youtube.com/watch?v=SLdCV3nIiEI"
          target="_blank"
          rel="noreferrer noopener"
          >Mercurial World
        </a>
      </p>
    </a2k-window>`}}rt(we,"styles",v`
    p {
      margin: 0;
    }
  `);window.customElements.define("a2k-about",we);var go=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,et=(r,t,e,o)=>{for(var n=o>1?void 0:o?vo(t,e):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(n=(o?s(t,e,n):s(n))||n);return o&&n&&go(t,e,n),n};class R extends u{constructor(){super(...arguments),this.height="",this.width="",this.top="",this.left=""}render(){const t=ut({width:this.width,top:this.top,left:this.left}),e=ut({height:this.height});return f`
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
  `;et([g()],R.prototype,"height",2);et([g()],R.prototype,"width",2);et([g()],R.prototype,"top",2);et([g()],R.prototype,"left",2);window.customElements.define("a2k-broken-window",R);const ye=document.querySelector("body"),mo=new URL("/assets/andricos-2000-startup.774be9be.mp3",self.location),ot=document.querySelector("#windows-container");ye.setAttribute("data-state","waiting");const bo=document.querySelector('a2k-desktop-icon[icon="documents-icon"]');bo.onOpen=()=>{window.location.href="https://andri.co"};const wo=document.querySelector('a2k-desktop-icon[icon="network-icon"]');wo.onOpen=()=>{window.location.href="https://twitter.com/andricokaroulla"};const yo=document.querySelector('a2k-desktop-icon[icon="github-icon"]');yo.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const _o=document.querySelector('a2k-desktop-icon[icon="help-icon"]');_o.onOpen=()=>{const r=document.createElement("a2k-about");ot.append(r)};const ko=document.querySelector('a2k-desktop-icon[icon="internet-icon"]');ko.onOpen=()=>{const r=document.createElement("a2k-ie5");ot.append(r)};let Gt=!1;const $o=r=>{const{target:t,detail:e}=r,{path:o}=e.pointer.nativePointer,n=document.querySelector("a2k-window[heading='Please wait...']");if(!n||!n.isSameNode(t))return;const i=o.find(c=>!c||!c.getAttribute?!1:c.getAttribute("id")==="window"),{width:s,top:a,left:l,height:d}=getComputedStyle(i),p=document.createElement("a2k-broken-window");ot.insertBefore(p,n),p.setAttribute("height",d),p.setAttribute("width",s),p.setAttribute("top",a),p.setAttribute("left",l)};window.addEventListener("startup-progress",r=>{if(!(r.detail.progress<50)&&!Gt){Gt=!0;try{xo()}catch{}}});window.addEventListener("startup-progress",r=>{!r.detail.isComplete||(setTimeout(()=>{document.querySelector(".fixed-container").remove(),Eo(),Ao()},300),setTimeout(()=>{ye.removeAttribute("data-state")},500))});function xo(){const r=new Audio(mo);r.volume=.3,r.play()}function Eo(){let r=0;setTimeout(()=>{_t(fo,ot);const t=document.querySelector("a2k-progress"),e=document.querySelector("a2k-window[heading='Please wait...']"),o=setInterval(()=>{if(!!t&&(r=r+1.2,t.setAttribute("progress",r),r>40)){for(;e.firstChild;)e.removeChild(e.lastChild);window.addEventListener("window-drag",$o),e.innerHTML=`
        <a2k-stack>
          <p>Oh no! We had a problem loading Andricos2000. Don't worry, you can still play around and find some easter eggs.</p>
          <p>Andricos2000 is still a work in progress, so keep checking back for updates or follow us on <a href="https://twitter.com/andricokaroulla" target="_blank">Twitter</a></p>
          <p>If you like Andricos2000, please consider giving it a \u2B50\uFE0F on <a href="https://github.com/andrico1234/a2k" target="_blank">GitHub</a>. It's an easy way to help the project grow</p>
          </a2k-stack>
        `,clearInterval(o)}},100)},700)}function Ao(){const r=document.querySelectorAll("a2k-desktop-icon");setTimeout(()=>{r.forEach(t=>{t.removeAttribute("hidden")})},1200)}
