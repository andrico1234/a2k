var Gs=Object.defineProperty;var Js=(s,t,e)=>t in s?Gs(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Y=(s,t,e)=>(Js(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();insights.init("qSiM34gCir3EyTFz");insights.trackPages();const ne=window,ri=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ai=Symbol(),$i=new WeakMap;let ls=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ai)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ri&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=$i.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&$i.set(e,t))}return t}toString(){return this.cssText}};const Qs=s=>new ls(typeof s=="string"?s:s+"",void 0,ai),Tt=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[n+1],s[0]);return new ls(e,s,ai)},to=(s,t)=>{ri?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),o=ne.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)})},Ei=ri?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Qs(e)})(s):s;var Ue;const he=window,Ai=he.trustedTypes,eo=Ai?Ai.emptyScript:"",ki=he.reactiveElementPolyfillSupport,Je={toAttribute(s,t){switch(t){case Boolean:s=s?eo:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},ds=(s,t)=>t!==s&&(t==t||s==s),je={attribute:!0,type:String,converter:Je,reflect:!1,hasChanged:ds};let ft=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=je){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||je}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(Ei(o))}else t!==void 0&&e.push(Ei(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return to(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=je){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Je).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Je;this._$El=n,this[n]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ds)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ft.finalized=!0,ft.elementProperties=new Map,ft.elementStyles=[],ft.shadowRootOptions={mode:"open"},ki==null||ki({ReactiveElement:ft}),((Ue=he.reactiveElementVersions)!==null&&Ue!==void 0?Ue:he.reactiveElementVersions=[]).push("1.5.0");var Le;const ce=window,wt=ce.trustedTypes,Ci=wt?wt.createPolicy("lit-html",{createHTML:s=>s}):void 0,J=`lit$${(Math.random()+"").slice(9)}$`,hs="?"+J,io=`<${hs}>`,yt=document,Vt=(s="")=>yt.createComment(s),Ht=s=>s===null||typeof s!="object"&&typeof s!="function",cs=Array.isArray,so=s=>cs(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xi=/-->/g,Si=/>/g,ot=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ti=/'/g,Pi=/"/g,us=/^(?:script|style|textarea|title)$/i,oo=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),et=oo(1),at=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Oi=new WeakMap,gt=yt.createTreeWalker(yt,129,null,!1),no=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",r=Ut;for(let l=0;l<e;l++){const d=s[l];let g,h,p=-1,f=0;for(;f<d.length&&(r.lastIndex=f,h=r.exec(d),h!==null);)f=r.lastIndex,r===Ut?h[1]==="!--"?r=xi:h[1]!==void 0?r=Si:h[2]!==void 0?(us.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=ot):h[3]!==void 0&&(r=ot):r===ot?h[0]===">"?(r=o??Ut,p=-1):h[1]===void 0?p=-2:(p=r.lastIndex-h[2].length,g=h[1],r=h[3]===void 0?ot:h[3]==='"'?Pi:Ti):r===Pi||r===Ti?r=ot:r===xi||r===Si?r=Ut:(r=ot,o=void 0);const b=r===ot&&s[l+1].startsWith("/>")?" ":"";n+=r===Ut?d+io:p>=0?(i.push(g),d.slice(0,p)+"$lit$"+d.slice(p)+J+b):d+J+(p===-2?(i.push(void 0),l):b)}const a=n+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ci!==void 0?Ci.createHTML(a):a,i]};let ue=class{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const a=t.length-1,l=this.parts,[d,g]=no(t,e);if(this.el=ue.createElement(d,i),gt.currentNode=this.el.content,e===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(o=gt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const p of o.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(J)){const f=g[r++];if(h.push(p),f!==void 0){const b=o.getAttribute(f.toLowerCase()+"$lit$").split(J),$=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:$[2],strings:b,ctor:$[1]==="."?ao:$[1]==="?"?ho:$[1]==="@"?co:Ae})}else l.push({type:6,index:n})}for(const p of h)o.removeAttribute(p)}if(us.test(o.tagName)){const h=o.textContent.split(J),p=h.length-1;if(p>0){o.textContent=wt?wt.emptyScript:"";for(let f=0;f<p;f++)o.append(h[f],Vt()),gt.nextNode(),l.push({type:2,index:++n});o.append(h[p],Vt())}}}else if(o.nodeType===8)if(o.data===hs)l.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(J,h+1))!==-1;)l.push({type:7,index:n}),h+=J.length-1}n++}}static createElement(t,e){const i=yt.createElement("template");return i.innerHTML=t,i}};function _t(s,t,e=s,i){var o,n,r,a;if(t===at)return t;let l=i!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[i]:e._$Cl;const d=Ht(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),d===void 0?l=void 0:(l=new d(s),l._$AT(s,e,i)),i!==void 0?((r=(a=e)._$Co)!==null&&r!==void 0?r:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=_t(s,l._$AS(s,t.values),l,i)),t}let ro=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:yt).importNode(i,!0);gt.currentNode=n;let r=gt.nextNode(),a=0,l=0,d=o[0];for(;d!==void 0;){if(a===d.index){let g;d.type===2?g=new Ee(r,r.nextSibling,this,t):d.type===1?g=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(g=new uo(r,this,t)),this.u.push(g),d=o[++l]}a!==(d==null?void 0:d.index)&&(r=gt.nextNode(),a++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Ee=class{constructor(t,e,i,o){var n;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_t(this,t,e),Ht(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==at&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):so(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==P&&Ht(this._$AH)?this._$AA.nextSibling.data=t:this.T(yt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ue.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const r=new ro(n,this),a=r.v(this.options);r.p(i),this.T(a),this._$AH=r}}_$AC(t){let e=Oi.get(t.strings);return e===void 0&&Oi.set(t.strings,e=new ue(t)),e}k(t){cs(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new Ee(this.O(Vt()),this.O(Vt()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ae=class{constructor(t,e,i,o,n){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=_t(this,t,e,0),r=!Ht(t)||t!==this._$AH&&t!==at,r&&(this._$AH=t);else{const a=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=_t(this,a[i+l],e,l),d===at&&(d=this._$AH[l]),r||(r=!Ht(d)||d!==this._$AH[l]),d===P?t=P:t!==P&&(t+=(d??"")+n[l+1]),this._$AH[l]=d}r&&!o&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ao=class extends Ae{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}};const lo=wt?wt.emptyScript:"";let ho=class extends Ae{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,lo):this.element.removeAttribute(this.name)}},co=class extends Ae{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=_t(this,t,e,0))!==null&&i!==void 0?i:P)===at)return;const o=this._$AH,n=t===P&&o!==P||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==P&&(o===P||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},uo=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){_t(this,t)}};const Ri=ce.litHtmlPolyfillSupport;Ri==null||Ri(ue,Ee),((Le=ce.litHtmlVersions)!==null&&Le!==void 0?Le:ce.litHtmlVersions=[]).push("2.5.0");const po=(s,t,e)=>{var i,o;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const a=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new Ee(t.insertBefore(Vt(),a),a,void 0,e??{})}return r._$AI(s),r};var Ie,De;let q=class extends ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=po(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return at}};q.finalized=!0,q._$litElement$=!0,(Ie=globalThis.litElementHydrateSupport)===null||Ie===void 0||Ie.call(globalThis,{LitElement:q});const Mi=globalThis.litElementPolyfillSupport;Mi==null||Mi({LitElement:q});((De=globalThis.litElementVersions)!==null&&De!==void 0?De:globalThis.litElementVersions=[]).push("3.2.1");let fo=class extends Event{constructor(t,e,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=i}};let vo=class{constructor(t,e,i,o=!1){this.host=t,this.context=e,this.callback=i,this.subscribe=o,this.provided=!1,this.value=void 0,this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new fo(this.context,(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.subscribe))}};let go=class{constructor(t){this.callbacks=new Map,this.updateObservers=()=>{for(const[e,i]of this.callbacks)e(this.t,i)},t!==void 0&&(this.value=t)}get value(){return this.t}set value(t){this.setValue(t)}setValue(t,e=!1){const i=e||!Object.is(t,this.t);this.t=t,i&&this.updateObservers()}addCallback(t,e){e&&(this.callbacks.has(t)||this.callbacks.set(t,()=>{this.callbacks.delete(t)})),t(this.value)}clearCallbacks(){this.callbacks.clear()}};let mo=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}},bo=class extends go{constructor(t,e,i){super(i),this.host=t,this.context=e,this.onContextRequest=o=>{o.context===this.context&&o.composedPath()[0]!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,o.subscribe))},this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new mo(this.context))}};const ps=({finisher:s,descriptor:t})=>(e,i)=>{var o;if(i===void 0){const n=(o=e.originalKey)!==null&&o!==void 0?o:e.key,r=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return s!=null&&(r.finisher=function(a){s(a,n)}),r}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),s==null||s(n,i)}};function wo({context:s}){return ps({finisher:(t,e)=>{const i=new WeakMap;t.addInitializer(a=>{i.set(a,new bo(a,s))});const o=Object.getOwnPropertyDescriptor(t.prototype,e),n=o==null?void 0:o.set,r={...o,set:function(a){var l;(l=i.get(this))===null||l===void 0||l.setValue(a),n&&n.call(this,a)}};Object.defineProperty(t.prototype,e,r)}})}function yo({context:s,subscribe:t}){return ps({finisher:(e,i)=>{e.addInitializer(o=>{new vo(o,s,n=>{o[i]=n},t)})}})}const _o=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function K(s){return(t,e)=>e!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(s,t,e):_o(s,t)}var Ne;((Ne=window.HTMLSlotElement)===null||Ne===void 0?void 0:Ne.prototype.assignedElements)!=null;const $o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Eo=s=>(...t)=>({_$litDirective$:s,values:t});let Ao=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const ko=Eo(class extends Ao{constructor(s){var t;if(super(s),s.type!==$o.ATTRIBUTE||s.name!=="style"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{const i=s[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[t]){const{style:e}=s.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const o=t[i];o!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,o):e[i]=o)}return at}});class Co{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class G{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:Dt(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new G(e));if(t.length>0)return t}return[this]}}const Dt=s=>"pointerId"in s,Ve=s=>"changedTouches"in s,Ui=()=>{};class xo{constructor(t,{start:e=()=>!0,move:i=Ui,end:o=Ui,rawUpdates:n=!1,avoidPointerEvents:r=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(Dt(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const l=new G(a);this.currentPointers.some(d=>d.id===l.id)||!this._triggerPointerStart(l,a)||(Dt(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerStart(new G(l),a)},this._move=a=>{if(!Ve(a)&&(!Dt(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const l=this.currentPointers.slice(),d=Ve(a)?Array.from(a.changedTouches).map(h=>new G(h)):[new G(a)],g=[];for(const h of d){const p=this.currentPointers.findIndex(f=>f.id===h.id);p!==-1&&(g.push(h),this.currentPointers[p]=h)}g.length!==0&&this._moveCallback(l,g,a)},this._triggerPointerEnd=(a,l)=>{if(!Ve(l)&&l.buttons&1)return!1;const d=this.currentPointers.findIndex(h=>h.id===a.id);if(d===-1)return!1;this.currentPointers.splice(d,1),this.startPointers.splice(d,1),this._excludeFromButtonsCheck.delete(a.id);const g=!(l.type==="mouseup"||l.type==="touchend"||l.type==="pointerup");return this._endCallback(a,l,g),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new G(a),a))if(Dt(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerEnd(new G(l),a)},this._startCallback=e,this._moveCallback=i,this._endCallback=o,this._rawUpdates=n&&"onpointerrawupdate"in window,self.PointerEvent&&!r?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}var He=globalThis&&globalThis.__classPrivateFieldGet||function(s,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(s):i?i.value:t.get(s)},Qe,ti,ei;const ji={initialPosition:{},getContainerEl:()=>null,getDraggableEl:()=>Promise.resolve(null),getIsDraggable:()=>!0};class So{constructor(t,e=ji){this.cursorPositionX=0,this.cursorPositionY=0,this.draggableEl=null,this.state="idle",this.pointerTracker=null,this.styles={position:"absolute",touchAction:"none",top:"0px",left:"0px"},Qe.set(this,r=>(this.cursorPositionX=Math.floor(r.pageX),this.cursorPositionY=Math.floor(r.pageY),!0)),ti.set(this,(r,a)=>{const[l]=a,d=this.draggableEl,g=new CustomEvent("window-drag",{bubbles:!0,composed:!0,detail:{pointer:l,containerEl:this.getContainerEl(),draggableEl:d}});this.host.dispatchEvent(g),this.handleWindowMove(l)}),ei.set(this,(r,a)=>{a.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this),this.getContainerEl=e.getContainerEl,this.getIsDraggable=e.getIsDraggable??ji.getIsDraggable,e.getDraggableEl().then(r=>{if(!r){console.warn("getDraggableEl() did not return an element HTMLElement");return}this.draggableEl=r,this.init()});const{initialPosition:i}=e,{x:o=0,y:n=0}=i;this.x=o,this.y=n,this.updateElPosition()}init(){const t=He(this,ti,"f"),e=He(this,Qe,"f"),i=He(this,ei,"f"),o=this.host,n=r=>this.state=r;this.pointerTracker=new xo(this.draggableEl,{start(r){return e(r),n("dragging"),o.requestUpdate(),!0},move(r,a){t(r,a)},end(r,a){i(r,a),n("idle"),o.requestUpdate()}})}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}updateElPosition(){this.styles.transform=`translate(${this.x}px, ${this.y}px)`}handleWindowMove(t){const e=this.draggableEl,i=this.getContainerEl();if(!e||!i||!this.getIsDraggable())return;const n=this.x,r=this.y,a=Math.floor(t.pageX),l=Math.floor(t.pageY);if(a!==this.cursorPositionX||l!==this.cursorPositionY){const{bottom:g,height:h}=e.getBoundingClientRect(),{right:p,width:f}=i.getBoundingClientRect(),b=a-this.cursorPositionX,$=l-this.cursorPositionY;this.x=n+b,this.y=r+$,this.cursorPositionX=a,this.cursorPositionY=l;const V=this.y<0,H=this.x<0,st=g+$>window.innerHeight,j=p+b>=window.innerWidth;V&&(this.y=0),H&&(this.x=0),st&&(this.y=window.innerHeight-h),j&&(this.x=Math.floor(window.innerWidth-f)),this.updateElPosition(),this.host.requestUpdate()}}}Qe=new WeakMap,ti=new WeakMap,ei=new WeakMap;const re=(s,t=100)=>Math.round(s*t)/t,To=(s,t)=>s<=t?s:t,fs="window-context";let oe;const Po=new Uint8Array(16);function Oo(){if(!oe&&(oe=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!oe))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return oe(Po)}const U=[];for(let s=0;s<256;++s)U.push((s+256).toString(16).slice(1));function Ro(s,t=0){return(U[s[t+0]]+U[s[t+1]]+U[s[t+2]]+U[s[t+3]]+"-"+U[s[t+4]]+U[s[t+5]]+"-"+U[s[t+6]]+U[s[t+7]]+"-"+U[s[t+8]]+U[s[t+9]]+"-"+U[s[t+10]]+U[s[t+11]]+U[s[t+12]]+U[s[t+13]]+U[s[t+14]]+U[s[t+15]]).toLowerCase()}const Mo=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Li={randomUUID:Mo};function Uo(s,t,e){if(Li.randomUUID&&!t&&!s)return Li.randomUUID();s=s||{};const i=s.random||(s.rng||Oo)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){e=e||0;for(let o=0;o<16;++o)t[e+o]=i[o];return t}return Ro(i)}const ae=window,li=ae.ShadowRoot&&(ae.ShadyCSS===void 0||ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vs=Symbol(),Ii=new WeakMap;let jo=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==vs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(li&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Ii.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ii.set(e,t))}return t}toString(){return this.cssText}};const Lo=s=>new jo(typeof s=="string"?s:s+"",void 0,vs),Io=(s,t)=>{li?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),o=ae.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)})},Di=li?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Lo(e)})(s):s;var Fe;const pe=window,Ni=pe.trustedTypes,Do=Ni?Ni.emptyScript:"",Vi=pe.reactiveElementPolyfillSupport,ii={toAttribute(s,t){switch(t){case Boolean:s=s?Do:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},gs=(s,t)=>t!==s&&(t==t||s==s),We={attribute:!0,type:String,converter:ii,reflect:!1,hasChanged:gs};let jt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=We){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||We}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(Di(o))}else t!==void 0&&e.push(Di(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Io(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=We){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:ii).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ii;this._$El=n,this[n]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||gs)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};jt.finalized=!0,jt.elementProperties=new Map,jt.elementStyles=[],jt.shadowRootOptions={mode:"open"},Vi==null||Vi({ReactiveElement:jt}),((Fe=pe.reactiveElementVersions)!==null&&Fe!==void 0?Fe:pe.reactiveElementVersions=[]).push("1.6.1");var ze;const fe=window,$t=fe.trustedTypes,Hi=$t?$t.createPolicy("lit-html",{createHTML:s=>s}):void 0,Q=`lit$${(Math.random()+"").slice(9)}$`,ms="?"+Q,No=`<${ms}>`,Et=document,ve=(s="")=>Et.createComment(s),Ft=s=>s===null||typeof s!="object"&&typeof s!="function",bs=Array.isArray,Vo=s=>bs(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fi=/-->/g,Wi=/>/g,nt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zi=/'/g,qi=/"/g,ws=/^(?:script|style|textarea|title)$/i,lt=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Bi=new WeakMap,mt=Et.createTreeWalker(Et,129,null,!1),Ho=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",r=Lt;for(let l=0;l<e;l++){const d=s[l];let g,h,p=-1,f=0;for(;f<d.length&&(r.lastIndex=f,h=r.exec(d),h!==null);)f=r.lastIndex,r===Lt?h[1]==="!--"?r=Fi:h[1]!==void 0?r=Wi:h[2]!==void 0?(ws.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=nt):h[3]!==void 0&&(r=nt):r===nt?h[0]===">"?(r=o??Lt,p=-1):h[1]===void 0?p=-2:(p=r.lastIndex-h[2].length,g=h[1],r=h[3]===void 0?nt:h[3]==='"'?qi:zi):r===qi||r===zi?r=nt:r===Fi||r===Wi?r=Lt:(r=nt,o=void 0);const b=r===nt&&s[l+1].startsWith("/>")?" ":"";n+=r===Lt?d+No:p>=0?(i.push(g),d.slice(0,p)+"$lit$"+d.slice(p)+Q+b):d+Q+(p===-2?(i.push(void 0),l):b)}const a=n+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Hi!==void 0?Hi.createHTML(a):a,i]};let ge=class{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const a=t.length-1,l=this.parts,[d,g]=Ho(t,e);if(this.el=ge.createElement(d,i),mt.currentNode=this.el.content,e===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(o=mt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const p of o.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(Q)){const f=g[r++];if(h.push(p),f!==void 0){const b=o.getAttribute(f.toLowerCase()+"$lit$").split(Q),$=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:$[2],strings:b,ctor:$[1]==="."?Wo:$[1]==="?"?qo:$[1]==="@"?Bo:ke})}else l.push({type:6,index:n})}for(const p of h)o.removeAttribute(p)}if(ws.test(o.tagName)){const h=o.textContent.split(Q),p=h.length-1;if(p>0){o.textContent=$t?$t.emptyScript:"";for(let f=0;f<p;f++)o.append(h[f],ve()),mt.nextNode(),l.push({type:2,index:++n});o.append(h[p],ve())}}}else if(o.nodeType===8)if(o.data===ms)l.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(Q,h+1))!==-1;)l.push({type:7,index:n}),h+=Q.length-1}n++}}static createElement(t,e){const i=Et.createElement("template");return i.innerHTML=t,i}};function At(s,t,e=s,i){var o,n,r,a;if(t===lt)return t;let l=i!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[i]:e._$Cl;const d=Ft(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),d===void 0?l=void 0:(l=new d(s),l._$AT(s,e,i)),i!==void 0?((r=(a=e)._$Co)!==null&&r!==void 0?r:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=At(s,l._$AS(s,t.values),l,i)),t}let Fo=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Et).importNode(i,!0);mt.currentNode=n;let r=mt.nextNode(),a=0,l=0,d=o[0];for(;d!==void 0;){if(a===d.index){let g;d.type===2?g=new di(r,r.nextSibling,this,t):d.type===1?g=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(g=new Ko(r,this,t)),this.u.push(g),d=o[++l]}a!==(d==null?void 0:d.index)&&(r=mt.nextNode(),a++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},di=class{constructor(t,e,i,o){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=At(this,t,e),Ft(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==lt&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vo(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==O&&Ft(this._$AH)?this._$AA.nextSibling.data=t:this.T(Et.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ge.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const r=new Fo(n,this),a=r.v(this.options);r.p(i),this.T(a),this._$AH=r}}_$AC(t){let e=Bi.get(t.strings);return e===void 0&&Bi.set(t.strings,e=new ge(t)),e}k(t){bs(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new di(this.O(ve()),this.O(ve()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},ke=class{constructor(t,e,i,o,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=At(this,t,e,0),r=!Ft(t)||t!==this._$AH&&t!==lt,r&&(this._$AH=t);else{const a=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=At(this,a[i+l],e,l),d===lt&&(d=this._$AH[l]),r||(r=!Ft(d)||d!==this._$AH[l]),d===O?t=O:t!==O&&(t+=(d??"")+n[l+1]),this._$AH[l]=d}r&&!o&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Wo=class extends ke{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}};const zo=$t?$t.emptyScript:"";let qo=class extends ke{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,zo):this.element.removeAttribute(this.name)}},Bo=class extends ke{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=At(this,t,e,0))!==null&&i!==void 0?i:O)===lt)return;const o=this._$AH,n=t===O&&o!==O||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==O&&(o===O||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Ko=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){At(this,t)}};const Ki=fe.litHtmlPolyfillSupport;Ki==null||Ki(ge,di),((ze=fe.litHtmlVersions)!==null&&ze!==void 0?ze:fe.litHtmlVersions=[]).push("2.6.1");const le=window,hi=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ci=Symbol(),Yi=new WeakMap;let ys=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ci)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(hi&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Yi.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Yi.set(e,t))}return t}toString(){return this.cssText}};const Yo=s=>new ys(typeof s=="string"?s:s+"",void 0,ci),x=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[n+1],s[0]);return new ys(e,s,ci)},Xo=(s,t)=>{hi?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),o=le.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)})},Xi=hi?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Yo(e)})(s):s;var qe;const me=window,Zi=me.trustedTypes,Zo=Zi?Zi.emptyScript:"",Gi=me.reactiveElementPolyfillSupport,si={toAttribute(s,t){switch(t){case Boolean:s=s?Zo:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},_s=(s,t)=>t!==s&&(t==t||s==s),Be={attribute:!0,type:String,converter:si,reflect:!1,hasChanged:_s};let vt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=Be){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Be}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(Xi(o))}else t!==void 0&&e.push(Xi(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Xo(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Be){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:si).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:si;this._$El=n,this[n]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||_s)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};vt.finalized=!0,vt.elementProperties=new Map,vt.elementStyles=[],vt.shadowRootOptions={mode:"open"},Gi==null||Gi({ReactiveElement:vt}),((qe=me.reactiveElementVersions)!==null&&qe!==void 0?qe:me.reactiveElementVersions=[]).push("1.5.0");var Ke;const be=window,kt=be.trustedTypes,Ji=kt?kt.createPolicy("lit-html",{createHTML:s=>s}):void 0,tt=`lit$${(Math.random()+"").slice(9)}$`,$s="?"+tt,Go=`<${$s}>`,Ct=document,Wt=(s="")=>Ct.createComment(s),zt=s=>s===null||typeof s!="object"&&typeof s!="function",Es=Array.isArray,Jo=s=>Es(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",It=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qi=/-->/g,ts=/>/g,rt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),es=/'/g,is=/"/g,As=/^(?:script|style|textarea|title)$/i,ks=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),_=ks(1),Qo=ks(2),xt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),ss=new WeakMap,bt=Ct.createTreeWalker(Ct,129,null,!1),tn=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",r=It;for(let l=0;l<e;l++){const d=s[l];let g,h,p=-1,f=0;for(;f<d.length&&(r.lastIndex=f,h=r.exec(d),h!==null);)f=r.lastIndex,r===It?h[1]==="!--"?r=Qi:h[1]!==void 0?r=ts:h[2]!==void 0?(As.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=rt):h[3]!==void 0&&(r=rt):r===rt?h[0]===">"?(r=o??It,p=-1):h[1]===void 0?p=-2:(p=r.lastIndex-h[2].length,g=h[1],r=h[3]===void 0?rt:h[3]==='"'?is:es):r===is||r===es?r=rt:r===Qi||r===ts?r=It:(r=rt,o=void 0);const b=r===rt&&s[l+1].startsWith("/>")?" ":"";n+=r===It?d+Go:p>=0?(i.push(g),d.slice(0,p)+"$lit$"+d.slice(p)+tt+b):d+tt+(p===-2?(i.push(void 0),l):b)}const a=n+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ji!==void 0?Ji.createHTML(a):a,i]};class qt{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const a=t.length-1,l=this.parts,[d,g]=tn(t,e);if(this.el=qt.createElement(d,i),bt.currentNode=this.el.content,e===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(o=bt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const p of o.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(tt)){const f=g[r++];if(h.push(p),f!==void 0){const b=o.getAttribute(f.toLowerCase()+"$lit$").split(tt),$=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:$[2],strings:b,ctor:$[1]==="."?sn:$[1]==="?"?nn:$[1]==="@"?rn:Ce})}else l.push({type:6,index:n})}for(const p of h)o.removeAttribute(p)}if(As.test(o.tagName)){const h=o.textContent.split(tt),p=h.length-1;if(p>0){o.textContent=kt?kt.emptyScript:"";for(let f=0;f<p;f++)o.append(h[f],Wt()),bt.nextNode(),l.push({type:2,index:++n});o.append(h[p],Wt())}}}else if(o.nodeType===8)if(o.data===$s)l.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(tt,h+1))!==-1;)l.push({type:7,index:n}),h+=tt.length-1}n++}}static createElement(t,e){const i=Ct.createElement("template");return i.innerHTML=t,i}}function St(s,t,e=s,i){var o,n,r,a;if(t===xt)return t;let l=i!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[i]:e._$Cl;const d=zt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),d===void 0?l=void 0:(l=new d(s),l._$AT(s,e,i)),i!==void 0?((r=(a=e)._$Co)!==null&&r!==void 0?r:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=St(s,l._$AS(s,t.values),l,i)),t}class en{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Ct).importNode(i,!0);bt.currentNode=n;let r=bt.nextNode(),a=0,l=0,d=o[0];for(;d!==void 0;){if(a===d.index){let g;d.type===2?g=new Kt(r,r.nextSibling,this,t):d.type===1?g=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(g=new an(r,this,t)),this.u.push(g),d=o[++l]}a!==(d==null?void 0:d.index)&&(r=bt.nextNode(),a++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Kt{constructor(t,e,i,o){var n;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=St(this,t,e),zt(t)?t===T||t==null||t===""?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==xt&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Jo(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==T&&zt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ct.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=qt.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const r=new en(n,this),a=r.v(this.options);r.p(i),this.T(a),this._$AH=r}}_$AC(t){let e=ss.get(t.strings);return e===void 0&&ss.set(t.strings,e=new qt(t)),e}k(t){Es(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new Kt(this.O(Wt()),this.O(Wt()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Ce{constructor(t,e,i,o,n){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=St(this,t,e,0),r=!zt(t)||t!==this._$AH&&t!==xt,r&&(this._$AH=t);else{const a=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=St(this,a[i+l],e,l),d===xt&&(d=this._$AH[l]),r||(r=!zt(d)||d!==this._$AH[l]),d===T?t=T:t!==T&&(t+=(d??"")+n[l+1]),this._$AH[l]=d}r&&!o&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class sn extends Ce{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}const on=kt?kt.emptyScript:"";class nn extends Ce{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,on):this.element.removeAttribute(this.name)}}class rn extends Ce{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=St(this,t,e,0))!==null&&i!==void 0?i:T)===xt)return;const o=this._$AH,n=t===T&&o!==T||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==T&&(o===T||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class an{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){St(this,t)}}const os=be.litHtmlPolyfillSupport;os==null||os(qt,Kt),((Ke=be.litHtmlVersions)!==null&&Ke!==void 0?Ke:be.litHtmlVersions=[]).push("2.5.0");const Yt=(s,t,e)=>{var i,o;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const a=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new Kt(t.insertBefore(Wt(),a),a,void 0,e??{})}return r._$AI(s),r};var Ye,Xe;class E extends vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Yt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return xt}}E.finalized=!0,E._$litElement$=!0,(Ye=globalThis.litElementHydrateSupport)===null||Ye===void 0||Ye.call(globalThis,{LitElement:E});const ns=globalThis.litElementPolyfillSupport;ns==null||ns({LitElement:E});((Xe=globalThis.litElementVersions)!==null&&Xe!==void 0?Xe:globalThis.litElementVersions=[]).push("3.2.1");class Cs extends E{render(){return _`<div id="stack">
      <slot></slot>
    </div>`}}Cs.styles=x`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",Cs);class xs extends E{render(){return _` <div id="panel">
      <slot></slot>
    </div>`}}xs.styles=x`
    :host {
      box-sizing: border-box;
    }

    #panel {
      border: var(--panel-border);
      background-color: var(--panel-color-background);
      box-shadow: var(--panel-shadow);
    }
  `;window.customElements.define("a2k-panel",xs);var ln=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},dn=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class ui extends q{constructor(){super(...arguments),this.dataState="active"}render(){return et`
      <div data-state=${this.dataState} id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}ui.styles=Tt`
    #wrapper {
      background: var(--window-topbar-background);
      user-select: none;
      height: var(--window-topbar-height);
      display: flex;
      align-items: center;
    }

    #wrapper[data-state="inactive"] {
      background: var(--window-topbar-background-inactive);
    }

    h2 {
      margin: 0;
      font-size: var(--window-topbar-heading-font-size);
      color: var(--window-topbar-heading-color);
      padding: 0 var(--window-spacing-horizontal);
    }

    #wrapper[data-state="inactive"] h2 {
      color: var(--window-topbar-heading-color-inactive);
    }
  `;ln([K({attribute:"data-state"}),dn("design:type",Object)],ui.prototype,"dataState",void 0);window.customElements.define("a2k-window-topbar",ui);const ht=s=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(r){customElements.define(e,r)}}})(s,t);const hn=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function w(s){return(t,e)=>e!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(s,t,e):hn(s,t)}function xe(s){return w({...s,state:!0})}const Ss=({finisher:s,descriptor:t})=>(e,i)=>{var o;if(i===void 0){const n=(o=e.originalKey)!==null&&o!==void 0?o:e.key,r=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return s!=null&&(r.finisher=function(a){s(a,n)}),r}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),s==null||s(n,i)}};function Xt(s,t){return Ss({descriptor:e=>{const i={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(s))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const o=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var n,r;return this[o]===void 0&&(this[o]=(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(s))!==null&&r!==void 0?r:null),this[o]}}return i}})}var Ze;const cn=((Ze=window.HTMLSlotElement)===null||Ze===void 0?void 0:Ze.prototype.assignedElements)!=null?(s,t)=>s.assignedElements(t):(s,t)=>s.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function un(s){const{slot:t,selector:e}=s??{};return Ss({descriptor:i=>({get(){var o;const n="slot"+(t?`[name=${t}]`:":not([name])"),r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n),a=r!=null?cn(r,s):[];return e?a.filter(l=>l.matches(e)):a},enumerable:!0,configurable:!0})})}var A=globalThis&&globalThis.__classPrivateFieldGet||function(s,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(s):i?i.value:t.get(s)},L=globalThis&&globalThis.__classPrivateFieldSet||function(s,t,e,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!o:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(s,e):o?o.value=e:t.set(s,e),e};function pn(s){var t,e,i,o,n,r,a,l,d,g,h,p,f,b,$,V,H;class st extends s{constructor(...c){super(...c),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),o.set(this,!1),n.set(this,void 0),r.set(this,void 0),a.set(this,""),l.set(this,()=>{L(this,o,!0,"f"),L(this,e,!0,"f"),A(this,t,"m",b).call(this)}),d.set(this,()=>{L(this,e,!1,"f"),A(this,t,"m",$).call(this,this.shouldFormValueUpdate()?A(this,a,"f"):""),!this.validity.valid&&A(this,o,"f")&&L(this,i,!0,"f");const u=A(this,t,"m",b).call(this);this.validationMessageCallback&&this.validationMessageCallback(u?this.internals.validationMessage:"")}),g.set(this,()=>{var u;L(this,i,!0,"f"),A(this,t,"m",b).call(this),(u=this===null||this===void 0?void 0:this.validationMessageCallback)===null||u===void 0||u.call(this,this.showError?this.internals.validationMessage:"")}),h.set(this,void 0),p.set(this,!1),f.set(this,Promise.resolve()),this.addEventListener("focus",A(this,l,"f")),this.addEventListener("blur",A(this,d,"f")),this.addEventListener("invalid",A(this,g,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const c=this.validators.map(m=>m.attribute).flat(),u=super.observedAttributes||[];return[...new Set([...u,...c])]}static getValidator(c){return this.validators.find(u=>u.attribute===c)||null}static getValidators(c){return this.validators.filter(u=>{var v;if(u.attribute===c||((v=u.attribute)===null||v===void 0?void 0:v.includes(c)))return!0})}get form(){return this.internals.form}get showError(){return A(this,t,"m",b).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(c,u,v){var m;(m=super.attributeChangedCallback)===null||m===void 0||m.call(this,c,u,v);const R=this.constructor.getValidators(c);(R==null?void 0:R.length)&&this.validationTarget&&this.setValue(A(this,a,"f"))}setValue(c){var u;L(this,i,!1,"f"),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,""),L(this,a,c,"f");const m=this.shouldFormValueUpdate()?c:null;this.internals.setFormValue(m),A(this,t,"m",$).call(this,m),this.valueChangedCallback&&this.valueChangedCallback(m),A(this,t,"m",b).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(c=>c(A(this,f,"f")))}formResetCallback(){var c,u;L(this,o,!1,"f"),L(this,i,!1,"f"),A(this,t,"m",b).call(this),(c=this.resetFormControl)===null||c===void 0||c.call(this),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,A(this,t,"m",b).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,o=new WeakMap,n=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,d=new WeakMap,g=new WeakMap,h=new WeakMap,p=new WeakMap,f=new WeakMap,t=new WeakSet,b=function(){if(this.hasAttribute("disabled"))return!1;const c=A(this,i,"f")||A(this,o,"f")&&!this.validity.valid&&!A(this,e,"f");return c&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),c},$=function(c){const u=this.constructor,v={},m=u.validators,F=[],R=m.some(y=>y.isValid instanceof Promise);A(this,p,"f")||(L(this,f,new Promise(y=>{L(this,h,y,"f")}),"f"),L(this,p,!0,"f")),A(this,n,"f")&&(A(this,n,"f").abort(),L(this,r,A(this,n,"f"),"f"));const M=new AbortController;L(this,n,M,"f");let N,Z=!1;!m.length||(m.forEach(y=>{const W=y.key||"customError",S=y.isValid(this,c,M.signal);S instanceof Promise?(F.push(S),S.then(z=>{z!=null&&(v[W]=!z,N=A(this,t,"m",H).call(this,y,c),A(this,t,"m",V).call(this,v,N))})):(v[W]=!S,this.validity[W]!==!S&&(Z=!0),S||(N=A(this,t,"m",H).call(this,y,c)))}),Promise.allSettled(F).then(()=>{var y;M!=null&&M.signal.aborted||(L(this,p,!1,"f"),(y=A(this,h,"f"))===null||y===void 0||y.call(this))}),(Z||!R)&&A(this,t,"m",V).call(this,v,N))},V=function(c,u){if(this.validationTarget)this.internals.setValidity(c,u,this.validationTarget);else{if(this.internals.setValidity(c,u),this.internals.validity.valid)return;let v=0;const m=setInterval(()=>{v>=100||this.validity.valid?clearInterval(m):this.validationTarget&&(this.internals.setValidity(this.validity,u,this.validationTarget),clearInterval(m)),v+=1},0)}},H=function(c,u){if(this.validityCallback){const v=this.validityCallback(c.key||"customError");if(v)return v}return c.message instanceof Function?c.message(this,u):c.message},st}var pi=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},fi=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Zt extends pn(E){constructor(){super(...arguments),this.disabled=!1,this.type="",this.size="medium"}handleSubmit(){this.form.requestSubmit()}connectedCallback(){super.connectedCallback(),!this.type&&this.form?this.type:this.type,this.type==="submit"&&this.addEventListener("click",this.handleSubmit)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleSubmit)}render(){return _` <button
      data-size="${this.size}"
      aria-label="${this.ariaLabel||T}"
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`}}Zt.styles=x`
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
  `;pi([w({type:Boolean}),fi("design:type",Object)],Zt.prototype,"disabled",void 0);pi([w({type:String}),fi("design:type",Object)],Zt.prototype,"type",void 0);pi([w({type:String}),fi("design:type",String)],Zt.prototype,"size",void 0);window.customElements.define("a2k-button",Zt);var fn=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},vn=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};const gn=new URL("/assets/a2k-icons-b650a9b4.svg",self.location).href;class vi extends E{constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),Qo`
      <svg height="1em" width="1em">
        <use href="${gn}#${this.icon}"></use>
      </svg>
    `}}vi.styles=x`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;fn([w({type:String}),vn("design:type",Object)],vi.prototype,"icon",void 0);window.customElements.define("a2k-icon",vi);var mn=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},bn=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class gi extends q{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return et`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
      aria-label="Close Window"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}gi.styles=Tt`
    :host {
      position: absolute;
      right: 2px;
    }

    #icon-wrapper {
      font-size: 8px;
    }
  `;mn([K({type:Boolean}),bn("design:type",Object)],gi.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",gi);var Pt=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Ot=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class it extends q{async getDraggableEl(){return await this.updateComplete,this.shadowRoot.querySelector("#draggable")}constructor(){super(),this.id=Uo(),this.heading="",this.draggable=!1,this.closeable=!1,this.x=-1,this.y=-1,this.drag=new So(this,{initialPosition:{},getContainerEl:()=>this.shadowRoot.querySelector("#window"),getDraggableEl:()=>this.getDraggableEl(),getIsDraggable:()=>this.draggable}),this.addEventListener("close",()=>this.remove())}connectedCallback(){if(super.connectedCallback(),this.windows){const t=this.x===-1||this.y===-1,e={hasAutoPosition:t};if(this.windows.registerWindow(this.id,e),this.addEventListener("pointerdown",this.handleClick),t){const o=this.windows.windowsList.filter(n=>n.hasAutoPosition).length;this.x=o*32,this.y=o*32}}this.x===-1&&(this.x=0),this.y===-1&&(this.y=0)}disconnectedCallback(){super.disconnectedCallback(),this.windows&&(this.windows.unregisterWindow(this.id),this.removeEventListener("pointerdown",this.handleClick))}firstUpdated(){const{offsetWidth:t}=this.renderRoot.querySelector("#window"),e=To(screen.availWidth,innerWidth);this.drag.x=this.x,this.drag.y=this.y,this.drag.updateElPosition(),this.x+t>e&&(this.drag.styles.transform=`translate(0px, ${this.y}px)`),this.requestUpdate()}handleClick(){var t;(t=this.windows)==null||t.handleInteraction(this.id)}getWindowPosition(){if(!!this.windows)return this.windows.windowOrder.indexOf(this.id)}getIsMostRecentlyUpdatedWindow(){if(!this.windows)return;const{windowOrder:t}=this.windows;return t[t.length-1]===this.id}render(){const t=this.getWindowPosition(),e=this.getIsMostRecentlyUpdatedWindow()?"active":"inactive";return et`
      <div
        id="window"
        style=${ko({...this.drag.styles,zIndex:`${t}`})}
      >
        <a2k-panel>
          <div id="topbar-wrapper">
            <div id="draggable" data-dragging=${this.drag.state}>
              <a2k-window-topbar data-state=${e}
                >${this.heading}</a2k-window-topbar
              >
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
    `}}it.styles=Tt`
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
  `;Pt([yo({context:fs,subscribe:!0}),K({type:String,attribute:!1}),Ot("design:type",Object)],it.prototype,"windows",void 0);Pt([K({type:String}),Ot("design:type",Object)],it.prototype,"heading",void 0);Pt([K({type:Boolean}),Ot("design:type",Object)],it.prototype,"draggable",void 0);Pt([K({type:Boolean}),Ot("design:type",Object)],it.prototype,"closeable",void 0);Pt([K({type:Number}),Ot("design:type",Object)],it.prototype,"x",void 0);Pt([K({type:Number}),Ot("design:type",Object)],it.prototype,"y",void 0);window.customElements.define("a2k-window",it);var wn=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},yn=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Ts extends q{constructor(){super(...arguments),this.windowContext={windows:{},get windowsList(){return Object.values(this.windows)},get windowOrder(){return this.windowsList.sort((i,o)=>i.lastInteractionTime-o.lastInteractionTime).map(({id:i})=>i)},get count(){return Object.keys(this.windows).length},registerWindow:(t,e)=>{const{hasAutoPosition:i=!0}=e,o=Date.now(),n={id:t,lastInteractionTime:o,hasAutoPosition:i,el:null};this.windowContext.windows[t]=n,this.windowContext.triggerUpdate()},unregisterWindow:t=>{delete this.windowContext.windows[t],this.windowContext.triggerUpdate()},handleInteraction:t=>{if(!this.windowContext.windows[t])return;const i=Date.now();this.windowContext.windows[t].lastInteractionTime=i,this.windowContext.triggerUpdate()},triggerUpdate:()=>{const t=_n(this.windowContext);this.windowContext=t}}}render(){return et`<div>
      <slot></slot>
    </div>`}}wn([wo({context:fs}),K({attribute:!1}),yn("design:type",Object)],Ts.prototype,"windowContext",void 0);function _n(s){return Object.create(Object.getPrototypeOf(s),Object.getOwnPropertyDescriptors(s))}window.customElements.define("a2k-window-context",Ts);class Ps extends q{render(){return et`<div id="toolbar">
        <slot></slot>
      </div>
      <div id="separator"></div>`}}Ps.styles=Tt`
    #toolbar {
      border-color: var(--color-gray-300) var(--color-gray-700)
        var(--color-gray-700) var(--color-gray-300);
      border-width: 2px;
      border-style: solid;
    }

    #separator {
      border-bottom: 5px solid var(--color-gray-400);
    }
  `;window.customElements.define("a2k-window-toolbar",Ps);class Os extends q{render(){return et`<div id="item">
      <slot></slot>
    </div>`}}Os.styles=Tt`
    #item {
      border-color: var(--color-gray-700) var(--color-gray-300)
        var(--color-gray-300) var(--color-gray-700);
      border-width: var(--border-width);
      border-style: solid;
      padding: var(--spacing-50);
      background-color: var(--window-toolbar-item-color-background);
    }
  `;window.customElements.define("a2k-window-toolbar-item",Os);var Rs=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Ms=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Se extends q{constructor(){super(...arguments),this.statusOne="",this.statusTwo=""}render(){return et`
      <div id="separator"></div>
      <div id="content">
        <div class="section">
          <p>${this.statusOne}</p>
        </div>

        ${this.statusTwo?et` <div class="section-separator"></div>
              <div class="section"><p>${this.statusTwo}</p></div>`:null}
      </div>
    `}}Se.styles=Tt`
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
  `;Rs([K({type:String}),Ms("design:type",Object)],Se.prototype,"statusOne",void 0);Rs([K({type:String}),Ms("design:type",Object)],Se.prototype,"statusTwo",void 0);window.customElements.define("a2k-window-status-bar",Se);class Us extends E{render(){return _`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}Us.styles=x`
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
  `;window.customElements.define("a2k-cover",Us);class js extends E{render(){return _`
      <div id="wrapper">
        <a2k-cover>
          <div slot="heading"><slot></slot></div>
        </a2k-cover>
      </div>
    `}}js.styles=x`
    #wrapper {
      background: var(--blue-screen-color-background);
    }

    [slot="heading"] {
      color: var(--blue-screen-font-color);
      font-weight: var(--blue-screen-font-weight);
      font-size: var(--blue-screen-font-size);
    }
  `;window.customElements.define("a2k-blue-screen",js);var Ls=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},$n=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let we=class extends E{constructor(){super(...arguments),this.open=!1}render(){return _`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};we.styles=x`
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
  `;Ls([w(),$n("design:type",Object)],we.prototype,"open",void 0);we=Ls([ht("a2k-start-menu-item")],we);var Is=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},En=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let ye=class extends E{constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=_` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;Yt(t,document.body)}handleShutdownClick(){location.reload()}render(){const t=String(this.open)==="true";return _`
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
    `}};ye.styles=x`
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
  `;Is([w(),En("design:type",Object)],ye.prototype,"open",void 0);ye=Is([ht("a2k-start-menu")],ye);var Ds=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},An=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let _e=class extends E{constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return _`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `}};_e.styles=x`
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
  `;Ds([xe(),An("design:type",Object)],_e.prototype,"_isMenuOpen",void 0);_e=Ds([ht("a2k-start-button")],_e);var kn=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n};let oi=class extends E{constructor(){super(...arguments),this.clock=new Co(this)}render(){const t=Cn.format(this.clock.value);return _`<div class="utility-bar">${t}</div>`}};oi.styles=x`
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
  `;oi=kn([ht("a2k-utility-bar")],oi);const Cn=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class Ns extends E{render(){return _`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}Ns.styles=x`
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
  `;window.customElements.define("a2k-taskbar",Ns);const Vs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Hs=s=>(...t)=>({_$litDirective$:s,values:t});let Fs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const xn=Hs(class extends Fs{constructor(s){var t;if(super(s),s.type!==Vs.ATTRIBUTE||s.name!=="class"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){var e,i;if(this.nt===void 0){this.nt=new Set,s.strings!==void 0&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((e=this.st)===null||e===void 0)&&e.has(n))&&this.nt.add(n);return this.render(t)}const o=s.element.classList;this.nt.forEach(n=>{n in t||(o.remove(n),this.nt.delete(n))});for(const n in t){const r=!!t[n];r===this.nt.has(n)||((i=this.st)===null||i===void 0?void 0:i.has(n))||(r?(o.add(n),this.nt.add(n)):(o.remove(n),this.nt.delete(n)))}return lt}});var Ws=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Sn=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let $e=class extends E{constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return _`<div class=${xn(t)} id="unit">
      <div></div>
      <div></div>
    </div>`}};$e.styles=x`
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
  `;Ws([w(),Sn("design:type",String)],$e.prototype,"filled",void 0);$e=Ws([ht("a2k-progress-unit")],$e);var Tn=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Pn=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class mi extends E{constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=t.getBoundingClientRect().width??0;if(this.width===e)return;this.width=e;const{gap:i}=getComputedStyle(t),n=Number(i.replace("px",""))+12,r=Math.ceil(e/n);Array(r).fill(0).forEach(()=>{const a=document.createElement("a2k-progress-unit");a.setAttribute("filled","none"),t==null||t.appendChild(a)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,i=On(e),o=Math.floor(e);t.forEach((n,r)=>{r<o?n.setAttribute("filled","filled"):r===o&&i>=.5?n.setAttribute("filled","half"):n.setAttribute("filled","none")})}render(){return _`
      <div aria-label="Loading progress" id="progress" role="progressbar"></div>
    `}}mi.styles=x`
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
  `;Tn([w({type:Number}),Pn("design:type",Object)],mi.prototype,"progress",void 0);const On=s=>Math.floor(s%1*10)/10;window.customElements.define("a2k-progress",mi);var k=globalThis&&globalThis.__classPrivateFieldGet||function(s,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(s):i?i.value:t.get(s)},I=globalThis&&globalThis.__classPrivateFieldSet||function(s,t,e,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!o:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(s,e):o?o.value=e:t.set(s,e),e};function Rn(s){var t,e,i,o,n,r,a,l,d,g,h,p,f,b,$,V,H;class st extends s{constructor(...c){super(...c),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),o.set(this,!1),n.set(this,void 0),r.set(this,void 0),a.set(this,""),l.set(this,()=>{I(this,o,!0,"f"),I(this,e,!0,"f"),k(this,t,"m",b).call(this)}),d.set(this,()=>{I(this,e,!1,"f"),k(this,t,"m",$).call(this,this.shouldFormValueUpdate()?k(this,a,"f"):""),!this.validity.valid&&k(this,o,"f")&&I(this,i,!0,"f");const u=k(this,t,"m",b).call(this);this.validationMessageCallback&&this.validationMessageCallback(u?this.internals.validationMessage:"")}),g.set(this,()=>{var u;I(this,i,!0,"f"),k(this,t,"m",b).call(this),(u=this===null||this===void 0?void 0:this.validationMessageCallback)===null||u===void 0||u.call(this,this.showError?this.internals.validationMessage:"")}),h.set(this,void 0),p.set(this,!1),f.set(this,Promise.resolve()),this.addEventListener("focus",k(this,l,"f")),this.addEventListener("blur",k(this,d,"f")),this.addEventListener("invalid",k(this,g,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const c=this.validators.map(m=>m.attribute).flat(),u=super.observedAttributes||[];return[...new Set([...u,...c])]}static getValidator(c){return this.validators.find(u=>u.attribute===c)||null}static getValidators(c){return this.validators.filter(u=>{var v;if(u.attribute===c||((v=u.attribute)===null||v===void 0?void 0:v.includes(c)))return!0})}get form(){return this.internals.form}get showError(){return k(this,t,"m",b).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(c,u,v){var m;(m=super.attributeChangedCallback)===null||m===void 0||m.call(this,c,u,v);const R=this.constructor.getValidators(c);(R==null?void 0:R.length)&&this.validationTarget&&this.setValue(k(this,a,"f"))}setValue(c){var u;I(this,i,!1,"f"),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,""),I(this,a,c,"f");const m=this.shouldFormValueUpdate()?c:null;this.internals.setFormValue(m),k(this,t,"m",$).call(this,m),this.valueChangedCallback&&this.valueChangedCallback(m),k(this,t,"m",b).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(c=>c(k(this,f,"f")))}formResetCallback(){var c,u;I(this,o,!1,"f"),I(this,i,!1,"f"),k(this,t,"m",b).call(this),(c=this.resetFormControl)===null||c===void 0||c.call(this),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,k(this,t,"m",b).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,o=new WeakMap,n=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,d=new WeakMap,g=new WeakMap,h=new WeakMap,p=new WeakMap,f=new WeakMap,t=new WeakSet,b=function(){if(this.hasAttribute("disabled"))return!1;const c=k(this,i,"f")||k(this,o,"f")&&!this.validity.valid&&!k(this,e,"f");return c&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),c},$=function(c){const u=this.constructor,v={},m=u.validators,F=[],R=m.some(y=>y.isValid instanceof Promise);k(this,p,"f")||(I(this,f,new Promise(y=>{I(this,h,y,"f")}),"f"),I(this,p,!0,"f")),k(this,n,"f")&&(k(this,n,"f").abort(),I(this,r,k(this,n,"f"),"f"));const M=new AbortController;I(this,n,M,"f");let N,Z=!1;!m.length||(m.forEach(y=>{const W=y.key||"customError",S=y.isValid(this,c,M.signal);S instanceof Promise?(F.push(S),S.then(z=>{z!=null&&(v[W]=!z,N=k(this,t,"m",H).call(this,y,c),k(this,t,"m",V).call(this,v,N))})):(v[W]=!S,this.validity[W]!==!S&&(Z=!0),S||(N=k(this,t,"m",H).call(this,y,c)))}),Promise.allSettled(F).then(()=>{var y;M!=null&&M.signal.aborted||(I(this,p,!1,"f"),(y=k(this,h,"f"))===null||y===void 0||y.call(this))}),(Z||!R)&&k(this,t,"m",V).call(this,v,N))},V=function(c,u){if(this.validationTarget)this.internals.setValidity(c,u,this.validationTarget);else{if(this.internals.setValidity(c,u),this.internals.validity.valid)return;let v=0;const m=setInterval(()=>{v>=100||this.validity.valid?clearInterval(m):this.validationTarget&&(this.internals.setValidity(this.validity,u,this.validationTarget),clearInterval(m)),v+=1},0)}},H=function(c,u){if(this.validityCallback){const v=this.validityCallback(c.key||"customError");if(v)return v}return c.message instanceof Function?c.message(this,u):c.message},st}var Te=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Pe=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Rt extends Rn(E){constructor(){super(...arguments),this.defaultValue="",this.name="",this.label="",this.placeholder=""}static get formAssociated(){return!0}handleInputChange(t){const e=t.target;this.setValue(e.value);const i=new Event("change",{composed:!0,bubbles:!0});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.label&&(this.label=`${this.label}:`)}render(){return _`
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
    `}}Rt.styles=x`
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
  `;Te([w(),Pe("design:type",Object)],Rt.prototype,"defaultValue",void 0);Te([w(),Pe("design:type",Object)],Rt.prototype,"name",void 0);Te([w(),Pe("design:type",Object)],Rt.prototype,"label",void 0);Te([w(),Pe("design:type",Object)],Rt.prototype,"placeholder",void 0);window.customElements.define("a2k-text-field",Rt);var C=globalThis&&globalThis.__classPrivateFieldGet||function(s,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(s):i?i.value:t.get(s)},D=globalThis&&globalThis.__classPrivateFieldSet||function(s,t,e,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!o:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(s,e):o?o.value=e:t.set(s,e),e};function Mn(s){var t,e,i,o,n,r,a,l,d,g,h,p,f,b,$,V,H;class st extends s{constructor(...c){super(...c),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),o.set(this,!1),n.set(this,void 0),r.set(this,void 0),a.set(this,""),l.set(this,()=>{D(this,o,!0,"f"),D(this,e,!0,"f"),C(this,t,"m",b).call(this)}),d.set(this,()=>{D(this,e,!1,"f"),C(this,t,"m",$).call(this,this.shouldFormValueUpdate()?C(this,a,"f"):""),!this.validity.valid&&C(this,o,"f")&&D(this,i,!0,"f");const u=C(this,t,"m",b).call(this);this.validationMessageCallback&&this.validationMessageCallback(u?this.internals.validationMessage:"")}),g.set(this,()=>{var u;D(this,i,!0,"f"),C(this,t,"m",b).call(this),(u=this===null||this===void 0?void 0:this.validationMessageCallback)===null||u===void 0||u.call(this,this.showError?this.internals.validationMessage:"")}),h.set(this,void 0),p.set(this,!1),f.set(this,Promise.resolve()),this.addEventListener("focus",C(this,l,"f")),this.addEventListener("blur",C(this,d,"f")),this.addEventListener("invalid",C(this,g,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const c=this.validators.map(m=>m.attribute).flat(),u=super.observedAttributes||[];return[...new Set([...u,...c])]}static getValidator(c){return this.validators.find(u=>u.attribute===c)||null}static getValidators(c){return this.validators.filter(u=>{var v;if(u.attribute===c||((v=u.attribute)===null||v===void 0?void 0:v.includes(c)))return!0})}get form(){return this.internals.form}get showError(){return C(this,t,"m",b).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(c,u,v){var m;(m=super.attributeChangedCallback)===null||m===void 0||m.call(this,c,u,v);const R=this.constructor.getValidators(c);(R==null?void 0:R.length)&&this.validationTarget&&this.setValue(C(this,a,"f"))}setValue(c){var u;D(this,i,!1,"f"),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,""),D(this,a,c,"f");const m=this.shouldFormValueUpdate()?c:null;this.internals.setFormValue(m),C(this,t,"m",$).call(this,m),this.valueChangedCallback&&this.valueChangedCallback(m),C(this,t,"m",b).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(c=>c(C(this,f,"f")))}formResetCallback(){var c,u;D(this,o,!1,"f"),D(this,i,!1,"f"),C(this,t,"m",b).call(this),(c=this.resetFormControl)===null||c===void 0||c.call(this),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,C(this,t,"m",b).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,o=new WeakMap,n=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,d=new WeakMap,g=new WeakMap,h=new WeakMap,p=new WeakMap,f=new WeakMap,t=new WeakSet,b=function(){if(this.hasAttribute("disabled"))return!1;const c=C(this,i,"f")||C(this,o,"f")&&!this.validity.valid&&!C(this,e,"f");return c&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),c},$=function(c){const u=this.constructor,v={},m=u.validators,F=[],R=m.some(y=>y.isValid instanceof Promise);C(this,p,"f")||(D(this,f,new Promise(y=>{D(this,h,y,"f")}),"f"),D(this,p,!0,"f")),C(this,n,"f")&&(C(this,n,"f").abort(),D(this,r,C(this,n,"f"),"f"));const M=new AbortController;D(this,n,M,"f");let N,Z=!1;!m.length||(m.forEach(y=>{const W=y.key||"customError",S=y.isValid(this,c,M.signal);S instanceof Promise?(F.push(S),S.then(z=>{z!=null&&(v[W]=!z,N=C(this,t,"m",H).call(this,y,c),C(this,t,"m",V).call(this,v,N))})):(v[W]=!S,this.validity[W]!==!S&&(Z=!0),S||(N=C(this,t,"m",H).call(this,y,c)))}),Promise.allSettled(F).then(()=>{var y;M!=null&&M.signal.aborted||(D(this,p,!1,"f"),(y=C(this,h,"f"))===null||y===void 0||y.call(this))}),(Z||!R)&&C(this,t,"m",V).call(this,v,N))},V=function(c,u){if(this.validationTarget)this.internals.setValidity(c,u,this.validationTarget);else{if(this.internals.setValidity(c,u),this.internals.validity.valid)return;let v=0;const m=setInterval(()=>{v>=100||this.validity.valid?clearInterval(m):this.validationTarget&&(this.internals.setValidity(this.validity,u,this.validationTarget),clearInterval(m)),v+=1},0)}},H=function(c,u){if(this.validityCallback){const v=this.validityCallback(c.key||"customError");if(v)return v}return c.message instanceof Function?c.message(this,u):c.message},st}var Gt=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Jt=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class ct extends Mn(E){constructor(){super(...arguments),this.label="",this.selectedItem=null,this.name="",this.expanded=!1,this.placeholder="Choose an option",this._options=[],this._openListbox=()=>{this.expanded||(this.expanded=!0,document.addEventListener("click",this._hideOnClickOutside))},this._closeListbox=()=>{!this.expanded||(this.expanded=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._hideOnClickOutside=t=>{t.composedPath().includes(this)||this._closeListbox()}}handleKeyDown(t){t.key==="Escape"&&this.expanded?this._closeListbox():t.key==="Escape"&&!this.expanded&&this.handleSetValue(null)}handleSelectKeyDown(t){(t.key==="ArrowDown"||t.key==="Enter"||t.code==="Space")&&(this.expanded?this.moveFocusToOption(0):this._openListbox())}moveFocusToOption(t){this._options[t].focus()}handleSelectClick(){this.expanded?this._closeListbox():this._openListbox()}handleSetValue(t){const e=t||null;this.selectedItem=e,this.setValue((e==null?void 0:e.value)||"");const i=new Event("change",{composed:!0,bubbles:!0});this.dispatchEvent(i)}handleOptionSelect(t){const e=t.target;if(e.tagName!=="OPTION")return;const i={value:e.value,label:e.innerText};this.handleSetValue(i),this._closeListbox()}handleOptionKeyDown(t){if((t.key==="Enter"||t.code==="Space")&&this.handleOptionSelect(t),t.key==="ArrowDown"){const e=t.target;e.nextElementSibling?e.nextElementSibling.focus():this.moveFocusToOption(0)}if(t.key==="ArrowUp"){const e=t.target;if(e.previousElementSibling)e.previousElementSibling.focus();else{const o=this._options.length;this.moveFocusToOption(o-1)}}}toggleButton(){return _`<a2k-button tabindex="-1" aria-label="Open Select" size="small">
      <a2k-icon icon="chevron-icon"></a2k-icon>
    </a2k-button> `}handleSlotchange(t){const i=t.target.assignedElements();i.forEach(o=>{o.setAttribute("tabindex","0")}),this._options=i}connectedCallback(){super.connectedCallback(),this.label&&(this.label=`${this.label}:`),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown)}render(){var t;return _`
      <div id="select-wrapper">
        <label id="label">${this.label}</label>
        <div id="select">
          <div
            aria-controls="listbox"
            aria-expanded="${this.expanded}"
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
    `}}ct.styles=x`
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
  `;Gt([w({type:String}),Jt("design:type",Object)],ct.prototype,"label",void 0);Gt([w({type:String}),Jt("design:type",Object)],ct.prototype,"selectedItem",void 0);Gt([w({type:String}),Jt("design:type",Object)],ct.prototype,"name",void 0);Gt([xe(),Jt("design:type",Object)],ct.prototype,"expanded",void 0);Gt([w({type:String}),Jt("design:type",Object)],ct.prototype,"placeholder",void 0);window.customElements.define("a2k-select",ct);const Bt=Hs(class extends Fs{constructor(s){var t;if(super(s),s.type!==Vs.ATTRIBUTE||s.name!=="style"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{const i=s[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[t]){const{style:e}=s.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const o=t[i];o!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,o):e[i]=o)}return lt}});var zs=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},qs=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Oe extends E{constructor(){super(...arguments),this.slotHeightStyles={height:"0px"}}firstUpdated(){const t=getComputedStyle(this.desktopContainer).height;this.slotHeightStyles={height:t}}render(){return _`<div id="desktop">
      <slot id="slot" style=${Bt(this.slotHeightStyles)}></slot>
    </div>`}}Oe.styles=x`
    #desktop {
      height: 100%;
    }

    #desktop > slot {
      display: flex;
      flex-flow: column wrap;
      width: fit-content;
    }
  `;zs([w(),qs("design:type",Object)],Oe.prototype,"slotHeightStyles",void 0);zs([Xt("#desktop"),qs("design:type",HTMLSlotElement)],Oe.prototype,"desktopContainer",void 0);window.customElements.define("a2k-desktop",Oe);var bi=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},wi=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Qt extends E{constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return _` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`}}Qt.styles=x`
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
      color: var(--desktop-icon-text-color-focus);
    }
  `;bi([w({type:String}),wi("design:type",Object)],Qt.prototype,"text",void 0);bi([w({type:String}),wi("design:type",Object)],Qt.prototype,"icon",void 0);bi([w(),wi("design:type",Object)],Qt.prototype,"onOpen",void 0);window.customElements.define("a2k-icon-button",Qt);const Un=(s,t)=>{const e=s/t,i=t/s*100,o=Array(e).fill(i),n=o.length;for(let r=0;r<1e3;r++){const a=Math.floor(Math.random()*n),l=o[a],d=Math.floor(Math.random()*n),g=o[d],h=re(Math.random()*l),p=re(l-h),f=re(g+h);o[a]=p,o[d]=f}return o};var te=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},ee=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};const jn=["Booting Up..."],Ln=s=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:s});class ut extends E{constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.state="idle",this.image="",this.footerText="Copyright Ⓒ 1999-2000. Andricos2000",this.messages=jn,this.progress=0,this.interval=50,this.handleStart=()=>{this.state="loading",document.querySelector("body").setAttribute("data-state","waiting"),this.beginLoading()},this.beginLoading=()=>{const t=Un(this.startupTime,this.interval);this.intervalRef=setInterval(()=>{const e=t[this.currentStep]??0,i=re(this.progress+e),o=Ln({progress:i,isComplete:i>=100});this.dispatchEvent(o),i>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=i,this.currentStep++)},this.interval)}}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return this.state==="idle"?_`
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
    `}}ut.styles=x`
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
  `;te([w({type:String}),ee("design:type",Object)],ut.prototype,"state",void 0);te([w({type:String}),ee("design:type",Object)],ut.prototype,"image",void 0);te([w({type:String}),ee("design:type",Object)],ut.prototype,"footerText",void 0);te([w(),ee("design:type",Object)],ut.prototype,"messages",void 0);te([w(),ee("design:type",Object)],ut.prototype,"progress",void 0);window.customElements.define("a2k-startup",ut);var Bs=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Ks=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Re extends E{firstUpdated(){const[t]=this.slotEl,e=t.cloneNode(!0);this.marqueeWrapperEl.appendChild(e)}render(){return _`<div id="marquee">
      <div id="marquee-inner-1">
        <slot name="text"></slot>
      </div>
      <div id="marquee-inner-2"></div>
    </div>`}}Re.styles=x`
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
  `;Bs([un({slot:"text"}),Ks("design:type",Array)],Re.prototype,"slotEl",void 0);Bs([Xt("#marquee-inner-2"),Ks("design:type",HTMLElement)],Re.prototype,"marqueeWrapperEl",void 0);window.customElements.define("a2k-marquee",Re);const In=s=>{const t=new FormData(s),e={};for(const[i,o]of t.entries())e.hasOwnProperty(i)?Array.isArray(e[i])?e[i].push(o):e[i]=[e[i],o]:e[i]=o;return e},rs=s=>{const t=In(s),e={};return Object.entries(t).forEach(([i,o])=>{if(i.includes(".")){const n=i.split("."),r=n.pop();let a=e;for(;n.length;){const l=n.shift();a[l]=a[l]||{},a=a[l]}a[r]=o}else e[i]=t[i]}),e};var Dn=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,yi=(s,t,e,i)=>{for(var o=i>1?void 0:i?Nn(t,e):t,n=s.length-1,r;n>=0;n--)(r=s[n])&&(o=(i?r(t,e,o):r(o))||o);return i&&o&&Dn(t,e,o),o};const Vn="https://github.com/andrico1234/a2k",Hn="https://twitter.com/andricokaroulla",Fn=()=>_`
    <a2k-text-field
      label="Feedback"
      placeholder="e.g. it's dope!"
      name="details"
    ></a2k-text-field>
  `,Wn=()=>_`
    <a2k-text-field
      label="Ideas"
      placeholder="e.g. more easter eggs"
      name="details"
    ></a2k-text-field>
  `,zn=()=>_`
    <a2k-text-field
      label="Issues"
      placeholder="e.g. i'm on Chrome and it's broken"
      name="details"
    ></a2k-text-field>
  `,qn=()=>_`
    <a2k-text-field
      label="Your email"
      placeholder="e.g. andrico@example.com"
      name="details"
    ></a2k-text-field>
  `,Bn=()=>_`
    <div>
      <p>
        Thanks! You can show your support by giving
        <a href="${Vn}">a2k</a> a star on GitHub.
      </p>
      <p>
        You can also follow me on <a href="${Hn}">Twitter</a> to follow
        progress.
      </p>
    </div>
  `,Kn={feature:Wn,problem:zn,hire:qn,support:Bn};class ie extends E{constructor(){super(...arguments),this.activeContent="",this.hasSubmitted=!1}submit(t){t.preventDefault();const e=t.target,{select:i="none",details:o=""}=rs(e);window.insights.track({id:"feedback",parameters:{type:i,details:o}}),this.hasSubmitted=!0}updateActiveContent(){const{select:t}=rs(this.formEl);this.activeContent=t?t.toString():""}handleFormChange(){this.updateActiveContent()}handleChange(){this.updateActiveContent()}render(){const t=Kn[this.activeContent];return _`
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

              ${t?t():Fn()}
              <a2k-button type="submit">Submit</a2k-button>

              ${this.hasSubmitted?_`<p>Thanks! We've received your feedback.</p>`:null}
            </a2k-stack>
          </form>
        </a2k-window>
      </div>
    `}}ie.styles=x`
    :host {
      --window-width: 400px;
    }

    #container {
      width: 320px;
    }

    form {
      margin-block: var(--spacing-100);
    }
  `;yi([Xt("form")],ie.prototype,"formEl",2);yi([xe()],ie.prototype,"activeContent",2);yi([xe()],ie.prototype,"hasSubmitted",2);window.customElements.define("a2k-feedback",ie);const Yn=_`
  <a2k-window heading="Please wait..." draggable closeable>
    <p class="heading">Andricos<span>2000</span></p>
    <a2k-stack>
      <p>Andricos2000 is starting up...</p>
      <a2k-progress></a2k-progress>
    </a2k-stack>
  </a2k-window>
`,Xn=navigator.platform.includes("Mac"),Zn=Xn?"Ctrl+Alt+Delete":"Cmd+Option+Esc",Gn=_`
  <a2k-blue-screen>
    <a2k-stack>
      <p>
        An error has occurred and Andricos2000 has been shut down to prevent
        damage to your browser.
      </p>
      <p>
        If this the first time you're seeing this error, please restart
        Andricos2000 by pressing ${Zn}.
      </p>
      <p>
        If you continue to experience problems, please perform a fresh reinstall
        of Andricos2000 using an official installation CD.
      </p>
    </a2k-stack>
  </a2k-blue-screen>
`;var Jn=Object.defineProperty,Qn=Object.getOwnPropertyDescriptor,X=(s,t,e,i)=>{for(var o=i>1?void 0:i?Qn(t,e):t,n=s.length-1,r;n>=0;n--)(r=s[n])&&(o=(i?r(t,e,o):r(o))||o);return i&&o&&Jn(t,e,o),o};function Ge(s=1,t=0){const e=s-t;return Math.random()*e+t}let B=class extends E{constructor(){super(),this.width="0",this.height="0",this.href="",this.styles={top:"0",left:"0",zIndex:"0",width:this.width,height:this.height},this.imgStyles={width:this.width},this.imgSrc="",this.alt="",this.delayTimeout=null,this.displayDelay=Ge(6,2)*1e3,this.styles.zIndex=`${Math.ceil(this.displayDelay)}`,this.setupAppearance()}willUpdate(t){t.has("width")&&(this.styles.width=this.width,this.imgStyles.width=this.width,this.requestUpdate()),t.has("height")&&(this.styles.height=this.height,this.requestUpdate())}setupAppearance(){setTimeout(()=>{this.triggerAppearance(),this.setElPosition()},this.displayDelay)}triggerAppearance(){this.wrapperEl.removeAttribute("hidden")}setElPosition(){const[t,e]=this.calculateValidPositionRange(),i=Ge(t),o=Ge(e);this.styles.left=`${i}px`,this.styles.top=`${o}px`,this.requestUpdate()}calculateValidPositionRange(){const{offsetParent:t}=this.wrapperEl,{width:e,height:i}=this.wrapperEl.getBoundingClientRect(),o={width:window.innerWidth,height:window.innerHeight},{width:n,height:r}=(t==null?void 0:t.getBoundingClientRect())??o,a=n-e,l=a>0?a:0,d=r-i,g=d>0?d:0;return[l,g]}render(){return _`<div style=${Bt(this.styles)} hidden id="wrapper">
      <a href=${this.href} target="_blank">
        <img
          src=${this.imgSrc}
          style=${Bt(this.imgStyles)}
          alt=${this.alt}
        />
      </a>
    </div>`}};B.styles=x`
    #wrapper {
      position: absolute;
    }
  `;X([w()],B.prototype,"width",2);X([w()],B.prototype,"height",2);X([w()],B.prototype,"href",2);X([w()],B.prototype,"styles",2);X([w()],B.prototype,"imgStyles",2);X([w()],B.prototype,"imgSrc",2);X([w()],B.prototype,"alt",2);X([Xt("#wrapper")],B.prototype,"wrapperEl",2);B=X([ht("a2k-advert")],B);var tr=Object.defineProperty,er=Object.getOwnPropertyDescriptor,se=(s,t,e,i)=>{for(var o=i>1?void 0:i?er(t,e):t,n=s.length-1,r;n>=0;n--)(r=s[n])&&(o=(i?r(t,e,o):r(o))||o);return i&&o&&tr(t,e,o),o};function ir(s=1,t=0){const e=s-t;return Math.random()*e+t}let dt=class extends E{constructor(){super(),this.imgSrc="",this.alt="",this.href="",this.delayTimeout=null,this.displayDelay=ir(6,2)*500,this.setupAppearance()}setupAppearance(){setTimeout(()=>{this.triggerAppearance()},this.displayDelay)}triggerAppearance(){this.wrapperEl.removeAttribute("hidden")}render(){return _`<div hidden id="wrapper">
      <a href=${this.href} target="_blank">
        <img src=${this.imgSrc} alt=${this.alt} />
      </a>
    </div>`}};dt.styles=x`
    #wrapper {
      width: 100%;
    }

    img {
      width: 100%;
    }
  `;se([w()],dt.prototype,"imgSrc",2);se([w()],dt.prototype,"alt",2);se([w()],dt.prototype,"href",2);se([Xt("#wrapper")],dt.prototype,"wrapperEl",2);dt=se([ht("a2k-static-advert")],dt);const sr=new URL("/assets/cali-skills-ad-19fc50eb.gif",self.location).href,or=new URL("/assets/coding-tips-and-tricks-7a7e7cda.gif",self.location).href,nr=new URL("/assets/stream-songs-15e882ad.gif",self.location).href,rr=new URL("/assets/7-simple-tips-1fe1029b.png",self.location).href;class Ys extends E{constructor(){super(...arguments);Y(this,"connection","");Y(this,"handleOnline",()=>{connection="Online"});Y(this,"handleOffline",()=>{connection="Offline"})}connectedCallback(){super.connectedCallback(),this.addEventListener("online",this.handleOnline),this.addEventListener("offline",this.handleOffline),this.connection=navigator.onLine?"Online":"Offline"}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("online",this.handleOnline),this.removeEventListener("offline",this.handleOffline)}render(){return _`<a2k-window draggable closeable heading="Internet Explorer 5">
  <a2k-window-toolbar slot="toolbar">
    <a2k-window-toolbar-item>
      <div class="toolbar-row">
        <div>Address</div>
        <a2k-text-field defaultValue="https://www.microsoft.com/internet-explorer"></a2k-text-field>
      </div>
    </a2k-window-toolbar-item>
  </a2k-window-toolbar>

  <a2k-marquee>
    <p slot="text">Internet Explorer has reached end of life. RIP king.</p>
  </a2k-marquee>
  <div id="content">
    <div id="with-sidebar">
      <div id="sidebar">
        <a2k-static-advert href="https://play.google.com/store/apps/details?id=com.caliskillsapp"
          alt="cali skills advert" imgSrc=${sr}>
          </a2k-advert>
      </div>
      <div id="not-sidebar">
        <img src="/images/ie5-splash.png" />
      </div>
    </div>
    <a2k-advert href="https://blog.andri.co" alt="get the latest coding tips and tricks" width="300px" height="300px"
      imgSrc=${or}></a2k-advert>
    <a2k-advert href="https://open.spotify.com/playlist/37i9dQZF1DX9D5dmCM8Lo3?si=5f5b2de628bf4f20"
      alt="stream millions of songs for free" width="125px" height="175px" imgSrc=${nr}></a2k-advert>
    <a2k-advert href="https://www.who.int/news/item/19-05-2019-respect-women-preventing-violence-against-women"
      alt="become more popular with the ladies" width="360px" height="150px" imgSrc=${rr}></a2k-advert>
  </div>

  <a2k-window-status-bar statusOne="Loaded" statusTwo="${this.connection}" slot="statusbar"></a2k-window-status-bar>
</a2k-window>`}}Y(Ys,"styles",x`
    :host {
      --panel-color-background: white;
      --window-width: 800px;
    }

    .toolbar-row {
      display: flex;
      align-items: center;
      gap: var(--spacing-50);
    }

    .toolbar-row > *:nth-child(2) {
      flex: 1;
    }

    #content {
      position: relative;
    }

    #with-sidebar {
      display: flex;
    }

    #sidebar {
      flex-basis: 10rem;
      flex-grow: 1;
      position: relative;
      display: none;
    }

    #not-sidebar {
      flex-basis: 0;
      flex-grow: 999;
    }

    a2k-stack {
      position: relative;
    }

    a2k-marquee {
      padding: 0;
    }

    img {
      object-fit: cover;
      padding: 0;
      max-width: 100%;
    }

    @media (min-width: 700px) {
      #sidebar {
        display: block;
      }
    }
  `);window.customElements.define("a2k-ie5",Ys);class Xs extends E{render(){return _` <a2k-window draggable closeable heading="About Andricos2000">
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
    </a2k-window>`}}Y(Xs,"styles",x`
    p {
      margin: 0;
    }

    img {
      max-width: 400px;
      object-fit: cover;
    }
  `);window.customElements.define("a2k-about",Xs);var ar=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,Me=(s,t,e,i)=>{for(var o=i>1?void 0:i?lr(t,e):t,n=s.length-1,r;n>=0;n--)(r=s[n])&&(o=(i?r(t,e,o):r(o))||o);return i&&o&&ar(t,e,o),o};class Mt extends E{constructor(){super(...arguments),this.height=0,this.width=0,this.top=0,this.left=0}render(){const t=Bt({width:`${this.width}px`,transform:`translate(${this.left}px, ${this.top}px)`}),e=Bt({height:`${this.height}px`});return _`
      <div style=${t} id="outer-wrapper">
        <a2k-panel>
          <div style=${e}></div>
        </a2k-panel>
      </div>
    `}}Mt.styles=x`
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
  `;Me([w({type:Number})],Mt.prototype,"height",2);Me([w({type:Number})],Mt.prototype,"width",2);Me([w({type:Number})],Mt.prototype,"top",2);Me([w({type:Number})],Mt.prototype,"left",2);window.customElements.define("a2k-broken-window",Mt);const dr=_`
  <a2k-window heading="Privacy Notice" draggable closeable>
    <a2k-stack>
      <img class="cookie" src="/images/cookie.png" alt="a cookie" />
      <p>
        Do you remember cookie banners back in the year 2000? Neither do we.
      </p>
      <p>
        We uses privacy-focused analytics to improve the site, but we don't
        track any personal information or use tracking cookies. You won't find
        any annoying cookie banners in Andricos2000.
      </p>
      <p>
        For more info about the data we collect, check out our provider's
        <a href="https://getinsights.io/what-data-we-collect" target="_blank"
          >privacy statement</a
        >.
      </p>
    </a2k-stack>
  </a2k-window>
`,hr={action:"default"};class cr{constructor(){Y(this,"items",[]);Y(this,"enqueue",(t=hr)=>{this.items.push(t)});Y(this,"dequeue",()=>this.isEmpty()?void 0:this.items.shift());Y(this,"isEmpty",()=>!this.items.length)}}const ni=document.querySelector("body"),ur=new URL("/assets/andricos-2000-startup-774be9be.mp3",self.location),pt=document.querySelector("#windows-container"),pr=document.querySelector('a2k-icon-button[icon="documents-icon"]');pr.onOpen=()=>{window.location.href="https://andri.co"};const fr=document.querySelector('a2k-icon-button[icon="network-icon"]');fr.onOpen=()=>{const s=document.createElement("a2k-feedback");pt.append(s)};const vr=document.querySelector('a2k-icon-button[icon="github-icon"]');vr.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const gr=document.querySelector('a2k-icon-button[icon="help-icon"]');gr.onOpen=()=>{const s=document.createElement("a2k-about");pt.append(s)};const mr=document.querySelector('a2k-icon-button[icon="internet-icon"]'),Nt=new cr;let de="idle";function br(){setTimeout(()=>{de="off";const s=()=>{setTimeout(()=>{Nt.dequeue();const t=document.createElement("a2k-ie5");pt.append(t),Nt.isEmpty()||s()},100)};Nt.isEmpty()||s()},4e3)}mr.onOpen=()=>{if(de==="idle")de="queueing",Nt.enqueue(),br();else if(de==="queueing")Nt.enqueue();else{const s=document.createElement("a2k-ie5");pt.append(s)}};const wr=document.querySelector('a2k-icon-button[icon="lock-icon"]');wr.onOpen=()=>{const s=document.createElement("div");pt.appendChild(s),Yt(dr,s)};let as=!1;const yr=s=>{const{target:t,detail:e}=s,{containerEl:i}=e,o=document.querySelector("a2k-window[heading='Please wait...']");if(!o||!o.isSameNode(t))return;const{width:n,top:r,left:a,height:l}=i.getBoundingClientRect(),d=document.createElement("a2k-broken-window");pt.insertBefore(d,o),d.setAttribute("height",l),d.setAttribute("width",n),d.setAttribute("top",r),d.setAttribute("left",a)};window.addEventListener("keypress",Zs);function Zs(s){s.key==="e"&&s.ctrlKey&&(window.removeEventListener("keypress",Zs),ni.textContent="",Yt(Gn,ni))}window.addEventListener("startup-progress",s=>{if(!(s.detail.progress<50)&&!as){as=!0;try{_r()}catch{}}});window.addEventListener("startup-progress",s=>{!s.detail.isComplete||(setTimeout(()=>{document.querySelector(".fixed-container").remove(),$r(),Er()},300),setTimeout(()=>{ni.removeAttribute("data-state")},500))});function _r(){const s=new Audio(ur);s.volume=.3,s.play()}function $r(){let s=0;setTimeout(()=>{Yt(Yn,pt);const t=document.querySelector("a2k-progress"),e=document.querySelector("a2k-window[heading='Please wait...']"),i=setInterval(()=>{if(!!t&&(s=s+1.2,t.setAttribute("progress",s),s>40)){for(;e.firstChild;)e.removeChild(e.lastChild);window.addEventListener("window-drag",yr),e.innerHTML=`
        <a2k-stack>
          <p>Oh no! We had a problem loading Andricos2000. Don't worry, you can still play around and find some easter eggs.</p>
          <p>Andricos2000 is a work in progress, so keep checking back (or follow me on <a href="https://twitter.com/andricokaroulla" target="_blank"
          >Twitter</a
        >) for updates :)</p>
          </a2k-stack>
        `,clearInterval(i)}},100)},700)}function Er(){const s=document.querySelectorAll("a2k-icon-button");setTimeout(()=>{s.forEach(t=>{t.removeAttribute("hidden")})},1200)}
