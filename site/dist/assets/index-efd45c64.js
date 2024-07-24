var us=Object.defineProperty;var ps=(s,t,e)=>t in s?us(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Y=(s,t,e)=>(ps(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();const Kt=window,Fe=Kt.ShadowRoot&&(Kt.ShadyCSS===void 0||Kt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ve=Symbol(),Qe=new WeakMap;let Si=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Fe&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Qe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Qe.set(e,t))}return t}toString(){return this.cssText}};const fs=s=>new Si(typeof s=="string"?s:s+"",void 0,Ve),_t=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[n+1],s[0]);return new Si(e,s,Ve)},vs=(s,t)=>{Fe?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),o=Kt.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)})},ti=Fe?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return fs(e)})(s):s;var me;const Jt=window,ei=Jt.trustedTypes,gs=ei?ei.emptyScript:"",ii=Jt.reactiveElementPolyfillSupport,Re={toAttribute(s,t){switch(t){case Boolean:s=s?gs:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Ti=(s,t)=>t!==s&&(t==t||s==s),be={attribute:!0,type:String,converter:Re,reflect:!1,hasChanged:Ti};let ht=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=be){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||be}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(ti(o))}else t!==void 0&&e.push(ti(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return vs(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=be){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Re).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Re;this._$El=n,this[n]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Ti)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ht.finalized=!0,ht.elementProperties=new Map,ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},ii==null||ii({ReactiveElement:ht}),((me=Jt.reactiveElementVersions)!==null&&me!==void 0?me:Jt.reactiveElementVersions=[]).push("1.6.1");var we;const Qt=window,vt=Qt.trustedTypes,si=vt?vt.createPolicy("lit-html",{createHTML:s=>s}):void 0,Z=`lit$${(Math.random()+"").slice(9)}$`,Oi="?"+Z,ms=`<${Oi}>`,gt=document,Ot=(s="")=>gt.createComment(s),Pt=s=>s===null||typeof s!="object"&&typeof s!="function",Pi=Array.isArray,bs=s=>Pi(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oi=/-->/g,ni=/>/g,st=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ri=/'/g,ai=/"/g,Ri=/^(?:script|style|textarea|title)$/i,ws=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),Q=ws(1),nt=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),li=new WeakMap,pt=gt.createTreeWalker(gt,129,null,!1),ys=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",r=xt;for(let l=0;l<e;l++){const c=s[l];let g,u,p=-1,m=0;for(;m<c.length&&(r.lastIndex=m,u=r.exec(c),u!==null);)m=r.lastIndex,r===xt?u[1]==="!--"?r=oi:u[1]!==void 0?r=ni:u[2]!==void 0?(Ri.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=st):u[3]!==void 0&&(r=st):r===st?u[0]===">"?(r=o??xt,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,g=u[1],r=u[3]===void 0?st:u[3]==='"'?ai:ri):r===ai||r===ri?r=st:r===oi||r===ni?r=xt:(r=st,o=void 0);const w=r===st&&s[l+1].startsWith("/>")?" ":"";n+=r===xt?c+ms:p>=0?(i.push(g),c.slice(0,p)+"$lit$"+c.slice(p)+Z+w):c+Z+(p===-2?(i.push(void 0),l):w)}const a=n+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[si!==void 0?si.createHTML(a):a,i]};let te=class{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const a=t.length-1,l=this.parts,[c,g]=ys(t,e);if(this.el=te.createElement(c,i),pt.currentNode=this.el.content,e===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(o=pt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const p of o.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(Z)){const m=g[r++];if(u.push(p),m!==void 0){const w=o.getAttribute(m.toLowerCase()+"$lit$").split(Z),A=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:A[2],strings:w,ctor:A[1]==="."?$s:A[1]==="?"?Es:A[1]==="@"?Cs:le})}else l.push({type:6,index:n})}for(const p of u)o.removeAttribute(p)}if(Ri.test(o.tagName)){const u=o.textContent.split(Z),p=u.length-1;if(p>0){o.textContent=vt?vt.emptyScript:"";for(let m=0;m<p;m++)o.append(u[m],Ot()),pt.nextNode(),l.push({type:2,index:++n});o.append(u[p],Ot())}}}else if(o.nodeType===8)if(o.data===Oi)l.push({type:2,index:n});else{let u=-1;for(;(u=o.data.indexOf(Z,u+1))!==-1;)l.push({type:7,index:n}),u+=Z.length-1}n++}}static createElement(t,e){const i=gt.createElement("template");return i.innerHTML=t,i}};function mt(s,t,e=s,i){var o,n,r,a;if(t===nt)return t;let l=i!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[i]:e._$Cl;const c=Pt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),c===void 0?l=void 0:(l=new c(s),l._$AT(s,e,i)),i!==void 0?((r=(a=e)._$Co)!==null&&r!==void 0?r:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=mt(s,l._$AS(s,t.values),l,i)),t}let _s=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:gt).importNode(i,!0);pt.currentNode=n;let r=pt.nextNode(),a=0,l=0,c=o[0];for(;c!==void 0;){if(a===c.index){let g;c.type===2?g=new ae(r,r.nextSibling,this,t):c.type===1?g=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(g=new xs(r,this,t)),this.u.push(g),c=o[++l]}a!==(c==null?void 0:c.index)&&(r=pt.nextNode(),a++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},ae=class{constructor(t,e,i,o){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=mt(this,t,e),Pt(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==nt&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bs(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==O&&Pt(this._$AH)?this._$AA.nextSibling.data=t:this.T(gt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=te.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const r=new _s(n,this),a=r.v(this.options);r.p(i),this.T(a),this._$AH=r}}_$AC(t){let e=li.get(t.strings);return e===void 0&&li.set(t.strings,e=new te(t)),e}k(t){Pi(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new ae(this.O(Ot()),this.O(Ot()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},le=class{constructor(t,e,i,o,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=mt(this,t,e,0),r=!Pt(t)||t!==this._$AH&&t!==nt,r&&(this._$AH=t);else{const a=t;let l,c;for(t=n[0],l=0;l<n.length-1;l++)c=mt(this,a[i+l],e,l),c===nt&&(c=this._$AH[l]),r||(r=!Pt(c)||c!==this._$AH[l]),c===O?t=O:t!==O&&(t+=(c??"")+n[l+1]),this._$AH[l]=c}r&&!o&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},$s=class extends le{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}};const ks=vt?vt.emptyScript:"";let Es=class extends le{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,ks):this.element.removeAttribute(this.name)}},Cs=class extends le{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=mt(this,t,e,0))!==null&&i!==void 0?i:O)===nt)return;const o=this._$AH,n=t===O&&o!==O||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==O&&(o===O||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},xs=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){mt(this,t)}};const di=Qt.litHtmlPolyfillSupport;di==null||di(te,ae),((we=Qt.litHtmlVersions)!==null&&we!==void 0?we:Qt.litHtmlVersions=[]).push("2.6.1");const As=(s,t,e)=>{var i,o;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const a=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new ae(t.insertBefore(Ot(),a),a,void 0,e??{})}return r._$AI(s),r};var ye,_e;let z=class extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=As(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return nt}};z.finalized=!0,z._$litElement$=!0,(ye=globalThis.litElementHydrateSupport)===null||ye===void 0||ye.call(globalThis,{LitElement:z});const ci=globalThis.litElementPolyfillSupport;ci==null||ci({LitElement:z});((_e=globalThis.litElementVersions)!==null&&_e!==void 0?_e:globalThis.litElementVersions=[]).push("3.2.1");let Ss=class extends Event{constructor(t,e,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=i}};let Ts=class{constructor(t,e,i,o=!1){this.host=t,this.context=e,this.callback=i,this.subscribe=o,this.provided=!1,this.value=void 0,this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ss(this.context,(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.subscribe))}};let Os=class{constructor(t){this.callbacks=new Map,this.updateObservers=()=>{for(const[e,i]of this.callbacks)e(this.t,i)},t!==void 0&&(this.value=t)}get value(){return this.t}set value(t){this.setValue(t)}setValue(t,e=!1){const i=e||!Object.is(t,this.t);this.t=t,i&&this.updateObservers()}addCallback(t,e){e&&(this.callbacks.has(t)||this.callbacks.set(t,()=>{this.callbacks.delete(t)})),t(this.value)}clearCallbacks(){this.callbacks.clear()}};let Ps=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}},Rs=class extends Os{constructor(t,e,i){super(i),this.host=t,this.context=e,this.onContextRequest=o=>{o.context===this.context&&o.composedPath()[0]!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,o.subscribe))},this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new Ps(this.context))}};const Mi=({finisher:s,descriptor:t})=>(e,i)=>{var o;if(i===void 0){const n=(o=e.originalKey)!==null&&o!==void 0?o:e.key,r=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return s!=null&&(r.finisher=function(a){s(a,n)}),r}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),s==null||s(n,i)}};function Ms({context:s}){return Mi({finisher:(t,e)=>{const i=new WeakMap;t.addInitializer(a=>{i.set(a,new Rs(a,s))});const o=Object.getOwnPropertyDescriptor(t.prototype,e),n=o==null?void 0:o.set,r={...o,set:function(a){var l;(l=i.get(this))===null||l===void 0||l.setValue(a),n&&n.call(this,a)}};Object.defineProperty(t.prototype,e,r)}})}function js({context:s,subscribe:t}){return Mi({finisher:(e,i)=>{e.addInitializer(o=>{new Ts(o,s,n=>{o[i]=n},t)})}})}const Us=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function B(s){return(t,e)=>e!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(s,t,e):Us(s,t)}var $e;(($e=window.HTMLSlotElement)===null||$e===void 0?void 0:$e.prototype.assignedElements)!=null;const Ls={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ds=s=>(...t)=>({_$litDirective$:s,values:t});let Is=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const Fs=Ds(class extends Is{constructor(s){var t;if(super(s),s.type!==Ls.ATTRIBUTE||s.name!=="style"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{const i=s[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[t]){const{style:e}=s.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const o=t[i];o!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,o):e[i]=o)}return nt}});class Vs{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class G{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:St(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new G(e));if(t.length>0)return t}return[this]}}const St=s=>"pointerId"in s,ke=s=>"changedTouches"in s,hi=()=>{};class Ns{constructor(t,{start:e=()=>!0,move:i=hi,end:o=hi,rawUpdates:n=!1,avoidPointerEvents:r=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(St(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const l=new G(a);this.currentPointers.some(c=>c.id===l.id)||!this._triggerPointerStart(l,a)||(St(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerStart(new G(l),a)},this._move=a=>{if(!ke(a)&&(!St(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const l=this.currentPointers.slice(),c=ke(a)?Array.from(a.changedTouches).map(u=>new G(u)):[new G(a)],g=[];for(const u of c){const p=this.currentPointers.findIndex(m=>m.id===u.id);p!==-1&&(g.push(u),this.currentPointers[p]=u)}g.length!==0&&this._moveCallback(l,g,a)},this._triggerPointerEnd=(a,l)=>{if(!ke(l)&&l.buttons&1)return!1;const c=this.currentPointers.findIndex(u=>u.id===a.id);if(c===-1)return!1;this.currentPointers.splice(c,1),this.startPointers.splice(c,1),this._excludeFromButtonsCheck.delete(a.id);const g=!(l.type==="mouseup"||l.type==="touchend"||l.type==="pointerup");return this._endCallback(a,l,g),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new G(a),a))if(St(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerEnd(new G(l),a)},this._startCallback=e,this._moveCallback=i,this._endCallback=o,this._rawUpdates=n&&"onpointerrawupdate"in window,self.PointerEvent&&!r?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}var Ee=globalThis&&globalThis.__classPrivateFieldGet||function(s,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(s):i?i.value:t.get(s)},Me,je,Ue;const ui={initialPosition:{},getContainerEl:()=>null,getDraggableEl:()=>Promise.resolve(null),getIsDraggable:()=>!0};class Ws{constructor(t,e=ui){this.cursorPositionX=0,this.cursorPositionY=0,this.draggableEl=null,this.state="idle",this.pointerTracker=null,this.styles={position:"absolute",touchAction:"none",top:"0px",left:"0px"},Me.set(this,r=>(this.cursorPositionX=Math.floor(r.pageX),this.cursorPositionY=Math.floor(r.pageY),!0)),je.set(this,(r,a)=>{const[l]=a,c=this.draggableEl,g=new CustomEvent("window-drag",{bubbles:!0,composed:!0,detail:{pointer:l,containerEl:this.getContainerEl(),draggableEl:c}});this.host.dispatchEvent(g),this.handleWindowMove(l)}),Ue.set(this,(r,a)=>{a.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this),this.getContainerEl=e.getContainerEl,this.getIsDraggable=e.getIsDraggable??ui.getIsDraggable,e.getDraggableEl().then(r=>{if(!r){console.warn("getDraggableEl() did not return an element HTMLElement");return}this.draggableEl=r,this.init()});const{initialPosition:i}=e,{x:o=0,y:n=0}=i;this.x=o,this.y=n,this.updateElPosition()}init(){const t=Ee(this,je,"f"),e=Ee(this,Me,"f"),i=Ee(this,Ue,"f"),o=this.host,n=r=>this.state=r;this.pointerTracker=new Ns(this.draggableEl,{start(r){return e(r),n("dragging"),o.requestUpdate(),!0},move(r,a){t(r,a)},end(r,a){i(r,a),n("idle"),o.requestUpdate()}})}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}updateElPosition(){this.styles.transform=`translate(${this.x}px, ${this.y}px)`}handleWindowMove(t){const e=this.draggableEl,i=this.getContainerEl();if(!e||!i||!this.getIsDraggable())return;const n=this.x,r=this.y,a=Math.floor(t.pageX),l=Math.floor(t.pageY);if(a!==this.cursorPositionX||l!==this.cursorPositionY){const{bottom:g,height:u}=e.getBoundingClientRect(),{right:p,width:m}=i.getBoundingClientRect(),w=a-this.cursorPositionX,A=l-this.cursorPositionY;this.x=n+w,this.y=r+A,this.cursorPositionX=a,this.cursorPositionY=l;const F=this.y<0,V=this.x<0,it=g+A>window.innerHeight,j=p+w>=window.innerWidth;F&&(this.y=0),V&&(this.x=0),it&&(this.y=window.innerHeight-u),j&&(this.x=Math.floor(window.innerWidth-m)),this.updateElPosition(),this.host.requestUpdate()}}}Me=new WeakMap,je=new WeakMap,Ue=new WeakMap;const Xt=(s,t=100)=>Math.round(s*t)/t,Hs=(s,t)=>s<=t?s:t,ji="window-context";let Yt;const zs=new Uint8Array(16);function qs(){if(!Yt&&(Yt=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Yt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Yt(zs)}const M=[];for(let s=0;s<256;++s)M.push((s+256).toString(16).slice(1));function Bs(s,t=0){return(M[s[t+0]]+M[s[t+1]]+M[s[t+2]]+M[s[t+3]]+"-"+M[s[t+4]]+M[s[t+5]]+"-"+M[s[t+6]]+M[s[t+7]]+"-"+M[s[t+8]]+M[s[t+9]]+"-"+M[s[t+10]]+M[s[t+11]]+M[s[t+12]]+M[s[t+13]]+M[s[t+14]]+M[s[t+15]]).toLowerCase()}const Ys=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),pi={randomUUID:Ys};function Ks(s,t,e){if(pi.randomUUID&&!t&&!s)return pi.randomUUID();s=s||{};const i=s.random||(s.rng||qs)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){e=e||0;for(let o=0;o<16;++o)t[e+o]=i[o];return t}return Bs(i)}const Gt=window,Ne=Gt.ShadowRoot&&(Gt.ShadyCSS===void 0||Gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,We=Symbol(),fi=new WeakMap;let Ui=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==We)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ne&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=fi.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&fi.set(e,t))}return t}toString(){return this.cssText}};const Xs=s=>new Ui(typeof s=="string"?s:s+"",void 0,We),x=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[n+1],s[0]);return new Ui(e,s,We)},Gs=(s,t)=>{Ne?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),o=Gt.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)})},vi=Ne?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Xs(e)})(s):s;var Ce;const ee=window,gi=ee.trustedTypes,Zs=gi?gi.emptyScript:"",mi=ee.reactiveElementPolyfillSupport,Le={toAttribute(s,t){switch(t){case Boolean:s=s?Zs:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Li=(s,t)=>t!==s&&(t==t||s==s),xe={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:Li};let ut=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=xe){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||xe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(vi(o))}else t!==void 0&&e.push(vi(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Gs(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=xe){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Le).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Le;this._$El=n,this[n]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Li)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ut.finalized=!0,ut.elementProperties=new Map,ut.elementStyles=[],ut.shadowRootOptions={mode:"open"},mi==null||mi({ReactiveElement:ut}),((Ce=ee.reactiveElementVersions)!==null&&Ce!==void 0?Ce:ee.reactiveElementVersions=[]).push("1.6.1");var Ae;const ie=window,bt=ie.trustedTypes,bi=bt?bt.createPolicy("lit-html",{createHTML:s=>s}):void 0,J=`lit$${(Math.random()+"").slice(9)}$`,Di="?"+J,Js=`<${Di}>`,wt=document,Rt=(s="")=>wt.createComment(s),Mt=s=>s===null||typeof s!="object"&&typeof s!="function",Ii=Array.isArray,Qs=s=>Ii(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",At=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wi=/-->/g,yi=/>/g,ot=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_i=/'/g,$i=/"/g,Fi=/^(?:script|style|textarea|title)$/i,Vi=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),_=Vi(1),to=Vi(2),tt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),ki=new WeakMap,ft=wt.createTreeWalker(wt,129,null,!1),eo=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",r=At;for(let l=0;l<e;l++){const c=s[l];let g,u,p=-1,m=0;for(;m<c.length&&(r.lastIndex=m,u=r.exec(c),u!==null);)m=r.lastIndex,r===At?u[1]==="!--"?r=wi:u[1]!==void 0?r=yi:u[2]!==void 0?(Fi.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=ot):u[3]!==void 0&&(r=ot):r===ot?u[0]===">"?(r=o??At,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,g=u[1],r=u[3]===void 0?ot:u[3]==='"'?$i:_i):r===$i||r===_i?r=ot:r===wi||r===yi?r=At:(r=ot,o=void 0);const w=r===ot&&s[l+1].startsWith("/>")?" ":"";n+=r===At?c+Js:p>=0?(i.push(g),c.slice(0,p)+"$lit$"+c.slice(p)+J+w):c+J+(p===-2?(i.push(void 0),l):w)}const a=n+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[bi!==void 0?bi.createHTML(a):a,i]};class jt{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const a=t.length-1,l=this.parts,[c,g]=eo(t,e);if(this.el=jt.createElement(c,i),ft.currentNode=this.el.content,e===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(o=ft.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const p of o.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(J)){const m=g[r++];if(u.push(p),m!==void 0){const w=o.getAttribute(m.toLowerCase()+"$lit$").split(J),A=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:A[2],strings:w,ctor:A[1]==="."?so:A[1]==="?"?no:A[1]==="@"?ro:de})}else l.push({type:6,index:n})}for(const p of u)o.removeAttribute(p)}if(Fi.test(o.tagName)){const u=o.textContent.split(J),p=u.length-1;if(p>0){o.textContent=bt?bt.emptyScript:"";for(let m=0;m<p;m++)o.append(u[m],Rt()),ft.nextNode(),l.push({type:2,index:++n});o.append(u[p],Rt())}}}else if(o.nodeType===8)if(o.data===Di)l.push({type:2,index:n});else{let u=-1;for(;(u=o.data.indexOf(J,u+1))!==-1;)l.push({type:7,index:n}),u+=J.length-1}n++}}static createElement(t,e){const i=wt.createElement("template");return i.innerHTML=t,i}}function yt(s,t,e=s,i){var o,n,r,a;if(t===tt)return t;let l=i!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[i]:e._$Cl;const c=Mt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),c===void 0?l=void 0:(l=new c(s),l._$AT(s,e,i)),i!==void 0?((r=(a=e)._$Co)!==null&&r!==void 0?r:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=yt(s,l._$AS(s,t.values),l,i)),t}class io{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:wt).importNode(i,!0);ft.currentNode=n;let r=ft.nextNode(),a=0,l=0,c=o[0];for(;c!==void 0;){if(a===c.index){let g;c.type===2?g=new Lt(r,r.nextSibling,this,t):c.type===1?g=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(g=new ao(r,this,t)),this.u.push(g),c=o[++l]}a!==(c==null?void 0:c.index)&&(r=ft.nextNode(),a++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Lt{constructor(t,e,i,o){var n;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=yt(this,t,e),Mt(t)?t===T||t==null||t===""?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==tt&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Qs(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==T&&Mt(this._$AH)?this._$AA.nextSibling.data=t:this.T(wt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=jt.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const r=new io(n,this),a=r.v(this.options);r.p(i),this.T(a),this._$AH=r}}_$AC(t){let e=ki.get(t.strings);return e===void 0&&ki.set(t.strings,e=new jt(t)),e}k(t){Ii(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new Lt(this.O(Rt()),this.O(Rt()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class de{constructor(t,e,i,o,n){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=yt(this,t,e,0),r=!Mt(t)||t!==this._$AH&&t!==tt,r&&(this._$AH=t);else{const a=t;let l,c;for(t=n[0],l=0;l<n.length-1;l++)c=yt(this,a[i+l],e,l),c===tt&&(c=this._$AH[l]),r||(r=!Mt(c)||c!==this._$AH[l]),c===T?t=T:t!==T&&(t+=(c??"")+n[l+1]),this._$AH[l]=c}r&&!o&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class so extends de{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}const oo=bt?bt.emptyScript:"";class no extends de{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,oo):this.element.removeAttribute(this.name)}}class ro extends de{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=yt(this,t,e,0))!==null&&i!==void 0?i:T)===tt)return;const o=this._$AH,n=t===T&&o!==T||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==T&&(o===T||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class ao{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){yt(this,t)}}const Ei=ie.litHtmlPolyfillSupport;Ei==null||Ei(jt,Lt),((Ae=ie.litHtmlVersions)!==null&&Ae!==void 0?Ae:ie.litHtmlVersions=[]).push("2.6.1");const Dt=(s,t,e)=>{var i,o;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const a=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new Lt(t.insertBefore(Rt(),a),a,void 0,e??{})}return r._$AI(s),r};var Se,Te;class $ extends ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return tt}}$.finalized=!0,$._$litElement$=!0,(Se=globalThis.litElementHydrateSupport)===null||Se===void 0||Se.call(globalThis,{LitElement:$});const Ci=globalThis.litElementPolyfillSupport;Ci==null||Ci({LitElement:$});((Te=globalThis.litElementVersions)!==null&&Te!==void 0?Te:globalThis.litElementVersions=[]).push("3.2.1");class Ni extends ${render(){return _`<div id="stack">
      <slot></slot>
    </div>`}}Ni.styles=x`
  #stack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--stack-spacing-top) !important;
  }
`;window.customElements.define("a2k-stack",Ni);class Wi extends ${render(){return _` <div id="panel">
      <slot></slot>
    </div>`}}Wi.styles=x`
  :host {
    box-sizing: border-box;
  }

  #panel {
    border: var(--panel-border);
    background-color: var(--panel-color-background);
    box-shadow: var(--panel-shadow);
  }
`;window.customElements.define("a2k-panel",Wi);var lo=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},co=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class He extends z{constructor(){super(...arguments),this.dataState="active"}render(){return Q`
      <div data-state=${this.dataState} id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}He.styles=_t`
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
`;lo([B({attribute:"data-state"}),co("design:type",Object)],He.prototype,"dataState",void 0);window.customElements.define("a2k-window-topbar",He);const at=s=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(r){customElements.define(e,r)}}})(s,t);const ho=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function b(s){return(t,e)=>e!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(s,t,e):ho(s,t)}function ce(s){return b({...s,state:!0})}const Hi=({finisher:s,descriptor:t})=>(e,i)=>{var o;if(i===void 0){const n=(o=e.originalKey)!==null&&o!==void 0?o:e.key,r=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return s!=null&&(r.finisher=function(a){s(a,n)}),r}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),s==null||s(n,i)}};function It(s,t){return Hi({descriptor:e=>{const i={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(s))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const o=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var n,r;return this[o]===void 0&&(this[o]=(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(s))!==null&&r!==void 0?r:null),this[o]}}return i}})}var Oe;const uo=((Oe=window.HTMLSlotElement)===null||Oe===void 0?void 0:Oe.prototype.assignedElements)!=null?(s,t)=>s.assignedElements(t):(s,t)=>s.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function po(s){const{slot:t,selector:e}=s??{};return Hi({descriptor:i=>({get(){var o;const n="slot"+(t?`[name=${t}]`:":not([name])"),r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n),a=r!=null?uo(r,s):[];return e?a.filter(l=>l.matches(e)):a},enumerable:!0,configurable:!0})})}var k=globalThis&&globalThis.__classPrivateFieldGet||function(s,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(s):i?i.value:t.get(s)},U=globalThis&&globalThis.__classPrivateFieldSet||function(s,t,e,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!o:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(s,e):o?o.value=e:t.set(s,e),e};function fo(s){var t,e,i,o,n,r,a,l,c,g,u,p,m,w,A,F,V;class it extends s{constructor(...d){super(...d),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),o.set(this,!1),n.set(this,void 0),r.set(this,void 0),a.set(this,""),l.set(this,()=>{U(this,o,!0,"f"),U(this,e,!0,"f"),k(this,t,"m",w).call(this)}),c.set(this,()=>{U(this,e,!1,"f"),k(this,t,"m",A).call(this,this.shouldFormValueUpdate()?k(this,a,"f"):""),!this.validity.valid&&k(this,o,"f")&&U(this,i,!0,"f");const h=k(this,t,"m",w).call(this);this.validationMessageCallback&&this.validationMessageCallback(h?this.internals.validationMessage:"")}),g.set(this,()=>{var h;U(this,i,!0,"f"),k(this,t,"m",w).call(this),(h=this===null||this===void 0?void 0:this.validationMessageCallback)===null||h===void 0||h.call(this,this.showError?this.internals.validationMessage:"")}),u.set(this,void 0),p.set(this,!1),m.set(this,Promise.resolve()),this.addEventListener("focus",k(this,l,"f")),this.addEventListener("blur",k(this,c,"f")),this.addEventListener("invalid",k(this,g,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const d=this.validators.map(v=>v.attribute).flat(),h=super.observedAttributes||[];return[...new Set([...h,...d])]}static getValidator(d){return this.validators.find(h=>h.attribute===d)||null}static getValidators(d){return this.validators.filter(h=>{var f;if(h.attribute===d||((f=h.attribute)===null||f===void 0?void 0:f.includes(d)))return!0})}get form(){return this.internals.form}get showError(){return k(this,t,"m",w).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(d,h,f){var v;(v=super.attributeChangedCallback)===null||v===void 0||v.call(this,d,h,f);const P=this.constructor.getValidators(d);(P==null?void 0:P.length)&&this.validationTarget&&this.setValue(k(this,a,"f"))}setValue(d){var h;U(this,i,!1,"f"),(h=this.validationMessageCallback)===null||h===void 0||h.call(this,""),U(this,a,d,"f");const v=this.shouldFormValueUpdate()?d:null;this.internals.setFormValue(v),k(this,t,"m",A).call(this,v),this.valueChangedCallback&&this.valueChangedCallback(v),k(this,t,"m",w).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(d=>d(k(this,m,"f")))}formResetCallback(){var d,h;U(this,o,!1,"f"),U(this,i,!1,"f"),k(this,t,"m",w).call(this),(d=this.resetFormControl)===null||d===void 0||d.call(this),(h=this.validationMessageCallback)===null||h===void 0||h.call(this,k(this,t,"m",w).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,o=new WeakMap,n=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap,g=new WeakMap,u=new WeakMap,p=new WeakMap,m=new WeakMap,t=new WeakSet,w=function(){if(this.hasAttribute("disabled"))return!1;const d=k(this,i,"f")||k(this,o,"f")&&!this.validity.valid&&!k(this,e,"f");return d&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),d},A=function(d){const h=this.constructor,f={},v=h.validators,N=[],P=v.some(y=>y.isValid instanceof Promise);k(this,p,"f")||(U(this,m,new Promise(y=>{U(this,u,y,"f")}),"f"),U(this,p,!0,"f")),k(this,n,"f")&&(k(this,n,"f").abort(),U(this,r,k(this,n,"f"),"f"));const R=new AbortController;U(this,n,R,"f");let I,X=!1;!v.length||(v.forEach(y=>{const W=y.key||"customError",S=y.isValid(this,d,R.signal);S instanceof Promise?(N.push(S),S.then(H=>{H!=null&&(f[W]=!H,I=k(this,t,"m",V).call(this,y,d),k(this,t,"m",F).call(this,f,I))})):(f[W]=!S,this.validity[W]!==!S&&(X=!0),S||(I=k(this,t,"m",V).call(this,y,d)))}),Promise.allSettled(N).then(()=>{var y;R!=null&&R.signal.aborted||(U(this,p,!1,"f"),(y=k(this,u,"f"))===null||y===void 0||y.call(this))}),(X||!P)&&k(this,t,"m",F).call(this,f,I))},F=function(d,h){if(this.validationTarget)this.internals.setValidity(d,h,this.validationTarget);else{if(this.internals.setValidity(d,h),this.internals.validity.valid)return;let f=0;const v=setInterval(()=>{f>=100||this.validity.valid?clearInterval(v):this.validationTarget&&(this.internals.setValidity(this.validity,h,this.validationTarget),clearInterval(v)),f+=1},0)}},V=function(d,h){if(this.validityCallback){const f=this.validityCallback(d.key||"customError");if(f)return f}return d.message instanceof Function?d.message(this,h):d.message},it}var ze=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},qe=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Ft extends fo($){constructor(){super(...arguments),this.disabled=!1,this.type="",this.size="medium"}handleSubmit(){this.form.requestSubmit()}connectedCallback(){super.connectedCallback(),!this.type&&this.form?this.type:this.type,this.type==="submit"&&this.addEventListener("click",this.handleSubmit)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleSubmit)}render(){return _` <button
      data-size="${this.size}"
      aria-label="${this.ariaLabel||T}"
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`}}Ft.styles=x`
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
`;ze([b({type:Boolean}),qe("design:type",Object)],Ft.prototype,"disabled",void 0);ze([b({type:String}),qe("design:type",Object)],Ft.prototype,"type",void 0);ze([b({type:String}),qe("design:type",String)],Ft.prototype,"size",void 0);window.customElements.define("a2k-button",Ft);var vo=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},go=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};const mo=new URL("/assets/a2k-icons-b650a9b4.svg",self.location).href;class Be extends ${constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),to`
      <svg height="1em" width="1em">
        <use href="${mo}#${this.icon}"></use>
      </svg>
    `}}Be.styles=x`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
  }
`;vo([b({type:String}),go("design:type",Object)],Be.prototype,"icon",void 0);window.customElements.define("a2k-icon",Be);var bo=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},wo=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Ye extends z{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return Q`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
      aria-label="Close Window"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}Ye.styles=_t`
  :host {
    position: absolute;
    right: 2px;
  }

  #icon-wrapper {
    font-size: 8px;
  }
`;bo([B({type:Boolean}),wo("design:type",Object)],Ye.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",Ye);var $t=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},kt=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class et extends z{async getDraggableEl(){return await this.updateComplete,this.shadowRoot.querySelector("#draggable")}constructor(){super(),this.id=Ks(),this.heading="",this.draggable=!1,this.closeable=!1,this.x=-1,this.y=-1,this.drag=new Ws(this,{initialPosition:{},getContainerEl:()=>this.shadowRoot.querySelector("#window"),getDraggableEl:()=>this.getDraggableEl(),getIsDraggable:()=>this.draggable}),this.addEventListener("close",()=>this.remove())}connectedCallback(){if(super.connectedCallback(),this.windows){const t=this.x===-1||this.y===-1,e={hasAutoPosition:t};if(this.windows.registerWindow(this.id,e),this.addEventListener("pointerdown",this.handleClick),t){const o=this.windows.windowsList.filter(n=>n.hasAutoPosition).length;this.x=o*32,this.y=o*32}}this.x===-1&&(this.x=0),this.y===-1&&(this.y=0)}disconnectedCallback(){super.disconnectedCallback(),this.windows&&(this.windows.unregisterWindow(this.id),this.removeEventListener("pointerdown",this.handleClick))}firstUpdated(){const{offsetWidth:t}=this.renderRoot.querySelector("#window"),e=Hs(screen.availWidth,innerWidth);this.drag.x=this.x,this.drag.y=this.y,this.drag.updateElPosition(),this.x+t>e&&(this.drag.styles.transform=`translate(0px, ${this.y}px)`),this.requestUpdate()}handleClick(){var t;(t=this.windows)==null||t.handleInteraction(this.id)}getWindowPosition(){if(!!this.windows)return this.windows.windowOrder.indexOf(this.id)}getIsMostRecentlyUpdatedWindow(){if(!this.windows)return;const{windowOrder:t}=this.windows;return t[t.length-1]===this.id}render(){const t=this.getWindowPosition(),e=this.getIsMostRecentlyUpdatedWindow()?"active":"inactive";return Q`
      <div
        id="window"
        style=${Fs({...this.drag.styles,zIndex:`${t}`})}
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
    `}}et.styles=_t`
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
`;$t([js({context:ji,subscribe:!0}),B({type:String,attribute:!1}),kt("design:type",Object)],et.prototype,"windows",void 0);$t([B({type:String}),kt("design:type",Object)],et.prototype,"heading",void 0);$t([B({type:Boolean}),kt("design:type",Object)],et.prototype,"draggable",void 0);$t([B({type:Boolean}),kt("design:type",Object)],et.prototype,"closeable",void 0);$t([B({type:Number}),kt("design:type",Object)],et.prototype,"x",void 0);$t([B({type:Number}),kt("design:type",Object)],et.prototype,"y",void 0);window.customElements.define("a2k-window",et);var yo=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},_o=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class zi extends z{constructor(){super(...arguments),this.windowContext={windows:{},get windowsList(){return Object.values(this.windows)},get windowOrder(){return this.windowsList.sort((i,o)=>i.lastInteractionTime-o.lastInteractionTime).map(({id:i})=>i)},get count(){return Object.keys(this.windows).length},registerWindow:(t,e)=>{const{hasAutoPosition:i=!0}=e,o=Date.now(),n={id:t,lastInteractionTime:o,hasAutoPosition:i,el:null};this.windowContext.windows[t]=n,this.windowContext.triggerUpdate()},unregisterWindow:t=>{delete this.windowContext.windows[t],this.windowContext.triggerUpdate()},handleInteraction:t=>{if(!this.windowContext.windows[t])return;const i=Date.now();this.windowContext.windows[t].lastInteractionTime=i,this.windowContext.triggerUpdate()},triggerUpdate:()=>{const t=$o(this.windowContext);this.windowContext=t}}}render(){return Q`<div>
      <slot></slot>
    </div>`}}yo([Ms({context:ji}),B({attribute:!1}),_o("design:type",Object)],zi.prototype,"windowContext",void 0);function $o(s){return Object.create(Object.getPrototypeOf(s),Object.getOwnPropertyDescriptors(s))}window.customElements.define("a2k-window-context",zi);class qi extends z{render(){return Q`<div id="toolbar">
        <slot></slot>
      </div>
      <div id="separator"></div>`}}qi.styles=_t`
  #toolbar {
    border-color: var(--color-gray-300) var(--color-gray-700)
      var(--color-gray-700) var(--color-gray-300);
    border-width: 2px;
    border-style: solid;
  }

  #separator {
    border-bottom: 5px solid var(--color-gray-400);
  }
`;window.customElements.define("a2k-window-toolbar",qi);class Bi extends z{render(){return Q`<div id="item">
      <slot></slot>
    </div>`}}Bi.styles=_t`
  #item {
    border-color: var(--color-gray-700) var(--color-gray-300)
      var(--color-gray-300) var(--color-gray-700);
    border-width: var(--border-width);
    border-style: solid;
    padding: var(--spacing-50);
    background-color: var(--window-toolbar-item-color-background);
  }
`;window.customElements.define("a2k-window-toolbar-item",Bi);var Yi=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Ki=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class he extends z{constructor(){super(...arguments),this.statusOne="",this.statusTwo=""}render(){return Q`
      <div id="separator"></div>
      <div id="content">
        <div class="section">
          <p>${this.statusOne}</p>
        </div>

        ${this.statusTwo?Q` <div class="section-separator"></div>
              <div class="section"><p>${this.statusTwo}</p></div>`:null}
      </div>
    `}}he.styles=_t`
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
`;Yi([B({type:String}),Ki("design:type",Object)],he.prototype,"statusOne",void 0);Yi([B({type:String}),Ki("design:type",Object)],he.prototype,"statusTwo",void 0);window.customElements.define("a2k-window-status-bar",he);class Xi extends ${render(){return _`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}Xi.styles=x`
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
`;window.customElements.define("a2k-cover",Xi);class Gi extends ${render(){return _`
      <div id="wrapper">
        <a2k-cover>
          <div slot="heading"><slot></slot></div>
        </a2k-cover>
      </div>
    `}}Gi.styles=x`
  #wrapper {
    background: var(--blue-screen-color-background);
  }

  [slot="heading"] {
    color: var(--blue-screen-font-color);
    font-weight: var(--blue-screen-font-weight);
    font-size: var(--blue-screen-font-size);
  }
`;window.customElements.define("a2k-blue-screen",Gi);var Zi=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},ko=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let se=class extends ${constructor(){super(...arguments),this.open=!1}render(){return _`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};se.styles=x`
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
`;Zi([b(),ko("design:type",Object)],se.prototype,"open",void 0);se=Zi([at("a2k-start-menu-item")],se);var Ji=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Eo=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let oe=class extends ${constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=_` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;Dt(t,document.body)}handleShutdownClick(){location.reload()}render(){const t=String(this.open)==="true";return _`
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
    `}};oe.styles=x`
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
`;Ji([b(),Eo("design:type",Object)],oe.prototype,"open",void 0);oe=Ji([at("a2k-start-menu")],oe);var Qi=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Co=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let ne=class extends ${constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return _`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `}};ne.styles=x`
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
`;Qi([ce(),Co("design:type",Object)],ne.prototype,"_isMenuOpen",void 0);ne=Qi([at("a2k-start-button")],ne);var xo=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n};let De=class extends ${constructor(){super(...arguments),this.clock=new Vs(this)}render(){const t=Ao.format(this.clock.value);return _`<div class="utility-bar">${t}</div>`}};De.styles=x`
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
`;De=xo([at("a2k-utility-bar")],De);const Ao=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class ts extends ${render(){return _`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}ts.styles=x`
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
`;window.customElements.define("a2k-taskbar",ts);const es={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},is=s=>(...t)=>({_$litDirective$:s,values:t});let ss=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const So=is(class extends ss{constructor(s){var t;if(super(s),s.type!==es.ATTRIBUTE||s.name!=="class"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){var e,i;if(this.nt===void 0){this.nt=new Set,s.strings!==void 0&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((e=this.st)===null||e===void 0)&&e.has(n))&&this.nt.add(n);return this.render(t)}const o=s.element.classList;this.nt.forEach(n=>{n in t||(o.remove(n),this.nt.delete(n))});for(const n in t){const r=!!t[n];r===this.nt.has(n)||((i=this.st)===null||i===void 0?void 0:i.has(n))||(r?(o.add(n),this.nt.add(n)):(o.remove(n),this.nt.delete(n)))}return tt}});var os=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},To=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let re=class extends ${constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return _`<div class=${So(t)} id="unit">
      <div></div>
      <div></div>
    </div>`}};re.styles=x`
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
`;os([b(),To("design:type",String)],re.prototype,"filled",void 0);re=os([at("a2k-progress-unit")],re);var Oo=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Po=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Ke extends ${constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=t.getBoundingClientRect().width??0;if(this.width===e)return;this.width=e;const{gap:i}=getComputedStyle(t),n=Number(i.replace("px",""))+12,r=Math.ceil(e/n);Array(r).fill(0).forEach(()=>{const a=document.createElement("a2k-progress-unit");a.setAttribute("filled","none"),t==null||t.appendChild(a)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,i=Ro(e),o=Math.floor(e);t.forEach((n,r)=>{r<o?n.setAttribute("filled","filled"):r===o&&i>=.5?n.setAttribute("filled","half"):n.setAttribute("filled","none")})}render(){return _`
      <div aria-label="Loading progress" id="progress" role="progressbar"></div>
    `}}Ke.styles=x`
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
`;Oo([b({type:Number}),Po("design:type",Object)],Ke.prototype,"progress",void 0);const Ro=s=>Math.floor(s%1*10)/10;window.customElements.define("a2k-progress",Ke);var E=globalThis&&globalThis.__classPrivateFieldGet||function(s,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(s):i?i.value:t.get(s)},L=globalThis&&globalThis.__classPrivateFieldSet||function(s,t,e,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!o:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(s,e):o?o.value=e:t.set(s,e),e};function Mo(s){var t,e,i,o,n,r,a,l,c,g,u,p,m,w,A,F,V;class it extends s{constructor(...d){super(...d),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),o.set(this,!1),n.set(this,void 0),r.set(this,void 0),a.set(this,""),l.set(this,()=>{L(this,o,!0,"f"),L(this,e,!0,"f"),E(this,t,"m",w).call(this)}),c.set(this,()=>{L(this,e,!1,"f"),E(this,t,"m",A).call(this,this.shouldFormValueUpdate()?E(this,a,"f"):""),!this.validity.valid&&E(this,o,"f")&&L(this,i,!0,"f");const h=E(this,t,"m",w).call(this);this.validationMessageCallback&&this.validationMessageCallback(h?this.internals.validationMessage:"")}),g.set(this,()=>{var h;L(this,i,!0,"f"),E(this,t,"m",w).call(this),(h=this===null||this===void 0?void 0:this.validationMessageCallback)===null||h===void 0||h.call(this,this.showError?this.internals.validationMessage:"")}),u.set(this,void 0),p.set(this,!1),m.set(this,Promise.resolve()),this.addEventListener("focus",E(this,l,"f")),this.addEventListener("blur",E(this,c,"f")),this.addEventListener("invalid",E(this,g,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const d=this.validators.map(v=>v.attribute).flat(),h=super.observedAttributes||[];return[...new Set([...h,...d])]}static getValidator(d){return this.validators.find(h=>h.attribute===d)||null}static getValidators(d){return this.validators.filter(h=>{var f;if(h.attribute===d||((f=h.attribute)===null||f===void 0?void 0:f.includes(d)))return!0})}get form(){return this.internals.form}get showError(){return E(this,t,"m",w).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(d,h,f){var v;(v=super.attributeChangedCallback)===null||v===void 0||v.call(this,d,h,f);const P=this.constructor.getValidators(d);(P==null?void 0:P.length)&&this.validationTarget&&this.setValue(E(this,a,"f"))}setValue(d){var h;L(this,i,!1,"f"),(h=this.validationMessageCallback)===null||h===void 0||h.call(this,""),L(this,a,d,"f");const v=this.shouldFormValueUpdate()?d:null;this.internals.setFormValue(v),E(this,t,"m",A).call(this,v),this.valueChangedCallback&&this.valueChangedCallback(v),E(this,t,"m",w).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(d=>d(E(this,m,"f")))}formResetCallback(){var d,h;L(this,o,!1,"f"),L(this,i,!1,"f"),E(this,t,"m",w).call(this),(d=this.resetFormControl)===null||d===void 0||d.call(this),(h=this.validationMessageCallback)===null||h===void 0||h.call(this,E(this,t,"m",w).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,o=new WeakMap,n=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap,g=new WeakMap,u=new WeakMap,p=new WeakMap,m=new WeakMap,t=new WeakSet,w=function(){if(this.hasAttribute("disabled"))return!1;const d=E(this,i,"f")||E(this,o,"f")&&!this.validity.valid&&!E(this,e,"f");return d&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),d},A=function(d){const h=this.constructor,f={},v=h.validators,N=[],P=v.some(y=>y.isValid instanceof Promise);E(this,p,"f")||(L(this,m,new Promise(y=>{L(this,u,y,"f")}),"f"),L(this,p,!0,"f")),E(this,n,"f")&&(E(this,n,"f").abort(),L(this,r,E(this,n,"f"),"f"));const R=new AbortController;L(this,n,R,"f");let I,X=!1;!v.length||(v.forEach(y=>{const W=y.key||"customError",S=y.isValid(this,d,R.signal);S instanceof Promise?(N.push(S),S.then(H=>{H!=null&&(f[W]=!H,I=E(this,t,"m",V).call(this,y,d),E(this,t,"m",F).call(this,f,I))})):(f[W]=!S,this.validity[W]!==!S&&(X=!0),S||(I=E(this,t,"m",V).call(this,y,d)))}),Promise.allSettled(N).then(()=>{var y;R!=null&&R.signal.aborted||(L(this,p,!1,"f"),(y=E(this,u,"f"))===null||y===void 0||y.call(this))}),(X||!P)&&E(this,t,"m",F).call(this,f,I))},F=function(d,h){if(this.validationTarget)this.internals.setValidity(d,h,this.validationTarget);else{if(this.internals.setValidity(d,h),this.internals.validity.valid)return;let f=0;const v=setInterval(()=>{f>=100||this.validity.valid?clearInterval(v):this.validationTarget&&(this.internals.setValidity(this.validity,h,this.validationTarget),clearInterval(v)),f+=1},0)}},V=function(d,h){if(this.validityCallback){const f=this.validityCallback(d.key||"customError");if(f)return f}return d.message instanceof Function?d.message(this,h):d.message},it}var ue=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},pe=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Et extends Mo($){constructor(){super(...arguments),this.defaultValue="",this.name="",this.label="",this.placeholder=""}static get formAssociated(){return!0}handleInputChange(t){const e=t.target;this.setValue(e.value);const i=new Event("change",{composed:!0,bubbles:!0});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.label&&(this.label=`${this.label}:`)}render(){return _`
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
    `}}Et.styles=x`
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
`;ue([b(),pe("design:type",Object)],Et.prototype,"defaultValue",void 0);ue([b(),pe("design:type",Object)],Et.prototype,"name",void 0);ue([b(),pe("design:type",Object)],Et.prototype,"label",void 0);ue([b(),pe("design:type",Object)],Et.prototype,"placeholder",void 0);window.customElements.define("a2k-text-field",Et);var C=globalThis&&globalThis.__classPrivateFieldGet||function(s,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(s):i?i.value:t.get(s)},D=globalThis&&globalThis.__classPrivateFieldSet||function(s,t,e,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!o:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(s,e):o?o.value=e:t.set(s,e),e};function jo(s){var t,e,i,o,n,r,a,l,c,g,u,p,m,w,A,F,V;class it extends s{constructor(...d){super(...d),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),o.set(this,!1),n.set(this,void 0),r.set(this,void 0),a.set(this,""),l.set(this,()=>{D(this,o,!0,"f"),D(this,e,!0,"f"),C(this,t,"m",w).call(this)}),c.set(this,()=>{D(this,e,!1,"f"),C(this,t,"m",A).call(this,this.shouldFormValueUpdate()?C(this,a,"f"):""),!this.validity.valid&&C(this,o,"f")&&D(this,i,!0,"f");const h=C(this,t,"m",w).call(this);this.validationMessageCallback&&this.validationMessageCallback(h?this.internals.validationMessage:"")}),g.set(this,()=>{var h;D(this,i,!0,"f"),C(this,t,"m",w).call(this),(h=this===null||this===void 0?void 0:this.validationMessageCallback)===null||h===void 0||h.call(this,this.showError?this.internals.validationMessage:"")}),u.set(this,void 0),p.set(this,!1),m.set(this,Promise.resolve()),this.addEventListener("focus",C(this,l,"f")),this.addEventListener("blur",C(this,c,"f")),this.addEventListener("invalid",C(this,g,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const d=this.validators.map(v=>v.attribute).flat(),h=super.observedAttributes||[];return[...new Set([...h,...d])]}static getValidator(d){return this.validators.find(h=>h.attribute===d)||null}static getValidators(d){return this.validators.filter(h=>{var f;if(h.attribute===d||((f=h.attribute)===null||f===void 0?void 0:f.includes(d)))return!0})}get form(){return this.internals.form}get showError(){return C(this,t,"m",w).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(d,h,f){var v;(v=super.attributeChangedCallback)===null||v===void 0||v.call(this,d,h,f);const P=this.constructor.getValidators(d);(P==null?void 0:P.length)&&this.validationTarget&&this.setValue(C(this,a,"f"))}setValue(d){var h;D(this,i,!1,"f"),(h=this.validationMessageCallback)===null||h===void 0||h.call(this,""),D(this,a,d,"f");const v=this.shouldFormValueUpdate()?d:null;this.internals.setFormValue(v),C(this,t,"m",A).call(this,v),this.valueChangedCallback&&this.valueChangedCallback(v),C(this,t,"m",w).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(d=>d(C(this,m,"f")))}formResetCallback(){var d,h;D(this,o,!1,"f"),D(this,i,!1,"f"),C(this,t,"m",w).call(this),(d=this.resetFormControl)===null||d===void 0||d.call(this),(h=this.validationMessageCallback)===null||h===void 0||h.call(this,C(this,t,"m",w).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,o=new WeakMap,n=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap,g=new WeakMap,u=new WeakMap,p=new WeakMap,m=new WeakMap,t=new WeakSet,w=function(){if(this.hasAttribute("disabled"))return!1;const d=C(this,i,"f")||C(this,o,"f")&&!this.validity.valid&&!C(this,e,"f");return d&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),d},A=function(d){const h=this.constructor,f={},v=h.validators,N=[],P=v.some(y=>y.isValid instanceof Promise);C(this,p,"f")||(D(this,m,new Promise(y=>{D(this,u,y,"f")}),"f"),D(this,p,!0,"f")),C(this,n,"f")&&(C(this,n,"f").abort(),D(this,r,C(this,n,"f"),"f"));const R=new AbortController;D(this,n,R,"f");let I,X=!1;!v.length||(v.forEach(y=>{const W=y.key||"customError",S=y.isValid(this,d,R.signal);S instanceof Promise?(N.push(S),S.then(H=>{H!=null&&(f[W]=!H,I=C(this,t,"m",V).call(this,y,d),C(this,t,"m",F).call(this,f,I))})):(f[W]=!S,this.validity[W]!==!S&&(X=!0),S||(I=C(this,t,"m",V).call(this,y,d)))}),Promise.allSettled(N).then(()=>{var y;R!=null&&R.signal.aborted||(D(this,p,!1,"f"),(y=C(this,u,"f"))===null||y===void 0||y.call(this))}),(X||!P)&&C(this,t,"m",F).call(this,f,I))},F=function(d,h){if(this.validationTarget)this.internals.setValidity(d,h,this.validationTarget);else{if(this.internals.setValidity(d,h),this.internals.validity.valid)return;let f=0;const v=setInterval(()=>{f>=100||this.validity.valid?clearInterval(v):this.validationTarget&&(this.internals.setValidity(this.validity,h,this.validationTarget),clearInterval(v)),f+=1},0)}},V=function(d,h){if(this.validityCallback){const f=this.validityCallback(d.key||"customError");if(f)return f}return d.message instanceof Function?d.message(this,h):d.message},it}var Vt=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Nt=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class lt extends jo($){constructor(){super(...arguments),this.label="",this.selectedItem=null,this.name="",this.expanded=!1,this.placeholder="Choose an option",this._options=[],this._openListbox=()=>{this.expanded||(this.expanded=!0,document.addEventListener("click",this._hideOnClickOutside))},this._closeListbox=()=>{!this.expanded||(this.expanded=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._hideOnClickOutside=t=>{t.composedPath().includes(this)||this._closeListbox()}}handleKeyDown(t){t.key==="Escape"&&this.expanded?this._closeListbox():t.key==="Escape"&&!this.expanded&&this.handleSetValue(null)}handleSelectKeyDown(t){(t.key==="ArrowDown"||t.key==="Enter"||t.code==="Space")&&(this.expanded?this.moveFocusToOption(0):this._openListbox())}moveFocusToOption(t){this._options[t].focus()}handleSelectClick(){this.expanded?this._closeListbox():this._openListbox()}handleSetValue(t){const e=t||null;this.selectedItem=e,this.setValue((e==null?void 0:e.value)||"");const i=new Event("change",{composed:!0,bubbles:!0});this.dispatchEvent(i)}handleOptionSelect(t){const e=t.target;if(e.tagName!=="OPTION")return;const i={value:e.value,label:e.innerText};this.handleSetValue(i),this._closeListbox()}handleOptionKeyDown(t){if((t.key==="Enter"||t.code==="Space")&&this.handleOptionSelect(t),t.key==="ArrowDown"){const e=t.target;e.nextElementSibling?e.nextElementSibling.focus():this.moveFocusToOption(0)}if(t.key==="ArrowUp"){const e=t.target;if(e.previousElementSibling)e.previousElementSibling.focus();else{const o=this._options.length;this.moveFocusToOption(o-1)}}}toggleButton(){return _`<a2k-button tabindex="-1" aria-label="Open Select" size="small">
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
    `}}lt.styles=x`
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
`;Vt([b({type:String}),Nt("design:type",Object)],lt.prototype,"label",void 0);Vt([b({type:String}),Nt("design:type",Object)],lt.prototype,"selectedItem",void 0);Vt([b({type:String}),Nt("design:type",Object)],lt.prototype,"name",void 0);Vt([ce(),Nt("design:type",Object)],lt.prototype,"expanded",void 0);Vt([b({type:String}),Nt("design:type",Object)],lt.prototype,"placeholder",void 0);window.customElements.define("a2k-select",lt);const Ut=is(class extends ss{constructor(s){var t;if(super(s),s.type!==es.ATTRIBUTE||s.name!=="style"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{const i=s[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[t]){const{style:e}=s.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const o=t[i];o!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,o):e[i]=o)}return tt}});var ns=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},rs=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class fe extends ${constructor(){super(...arguments),this.slotHeightStyles={height:"0px"}}firstUpdated(){const t=getComputedStyle(this.desktopContainer).height;this.slotHeightStyles={height:t}}render(){return _`<div id="desktop">
      <slot id="slot" style=${Ut(this.slotHeightStyles)}></slot>
    </div>`}}fe.styles=x`
  #desktop {
    height: 100%;
  }

  #desktop > slot {
    display: flex;
    flex-flow: column wrap;
    width: fit-content;
  }
`;ns([b(),rs("design:type",Object)],fe.prototype,"slotHeightStyles",void 0);ns([It("#desktop"),rs("design:type",HTMLSlotElement)],fe.prototype,"desktopContainer",void 0);window.customElements.define("a2k-desktop",fe);var Xe=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Ge=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Wt extends ${constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return _` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`}}Wt.styles=x`
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
`;Xe([b({type:String}),Ge("design:type",Object)],Wt.prototype,"text",void 0);Xe([b({type:String}),Ge("design:type",Object)],Wt.prototype,"icon",void 0);Xe([b(),Ge("design:type",Object)],Wt.prototype,"onOpen",void 0);window.customElements.define("a2k-icon-button",Wt);const Uo=(s,t)=>{const e=s/t,i=t/s*100,o=Array(e).fill(i),n=o.length;for(let r=0;r<1e3;r++){const a=Math.floor(Math.random()*n),l=o[a],c=Math.floor(Math.random()*n),g=o[c],u=Xt(Math.random()*l),p=Xt(l-u),m=Xt(g+u);o[a]=p,o[c]=m}return o};var Ht=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},zt=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};const Lo=["Booting Up..."],Do=s=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:s});class dt extends ${constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.state="idle",this.image="",this.footerText="Copyright Ⓒ 1999-2000. Andricos2000",this.messages=Lo,this.progress=0,this.interval=50,this.handleStart=()=>{this.state="loading",document.querySelector("body").setAttribute("data-state","waiting"),this.beginLoading()},this.beginLoading=()=>{const t=Uo(this.startupTime,this.interval);this.intervalRef=setInterval(()=>{const e=t[this.currentStep]??0,i=Xt(this.progress+e),o=Do({progress:i,isComplete:i>=100});this.dispatchEvent(o),i>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=i,this.currentStep++)},this.interval)}}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return this.state==="idle"?_`
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
    `}}dt.styles=x`
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
`;Ht([b({type:String}),zt("design:type",Object)],dt.prototype,"state",void 0);Ht([b({type:String}),zt("design:type",Object)],dt.prototype,"image",void 0);Ht([b({type:String}),zt("design:type",Object)],dt.prototype,"footerText",void 0);Ht([b(),zt("design:type",Object)],dt.prototype,"messages",void 0);Ht([b(),zt("design:type",Object)],dt.prototype,"progress",void 0);window.customElements.define("a2k-startup",dt);var as=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},ls=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class ve extends ${firstUpdated(){const[t]=this.slotEl,e=t.cloneNode(!0);this.marqueeWrapperEl.appendChild(e)}render(){return _`<div id="marquee">
      <div id="marquee-inner-1">
        <slot name="text"></slot>
      </div>
      <div id="marquee-inner-2"></div>
    </div>`}}ve.styles=x`
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
`;as([po({slot:"text"}),ls("design:type",Array)],ve.prototype,"slotEl",void 0);as([It("#marquee-inner-2"),ls("design:type",HTMLElement)],ve.prototype,"marqueeWrapperEl",void 0);window.customElements.define("a2k-marquee",ve);const Io=s=>{const t=new FormData(s),e={};for(const[i,o]of t.entries())e.hasOwnProperty(i)?Array.isArray(e[i])?e[i].push(o):e[i]=[e[i],o]:e[i]=o;return e},xi=s=>{const t=Io(s),e={};return Object.entries(t).forEach(([i,o])=>{if(i.includes(".")){const n=i.split("."),r=n.pop();let a=e;for(;n.length;){const l=n.shift();a[l]=a[l]||{},a=a[l]}a[r]=o}else e[i]=t[i]}),e};var Fo=Object.defineProperty,Vo=Object.getOwnPropertyDescriptor,Ze=(s,t,e,i)=>{for(var o=i>1?void 0:i?Vo(t,e):t,n=s.length-1,r;n>=0;n--)(r=s[n])&&(o=(i?r(t,e,o):r(o))||o);return i&&o&&Fo(t,e,o),o};const No="https://github.com/andrico1234/a2k",Wo="https://twitter.com/andricokaroulla",Ho=()=>_`
    <a2k-text-field
      label="Feedback"
      placeholder="e.g. it's dope!"
      name="details"
    ></a2k-text-field>
  `,zo=()=>_`
    <a2k-text-field
      label="Ideas"
      placeholder="e.g. more easter eggs"
      name="details"
    ></a2k-text-field>
  `,qo=()=>_`
    <a2k-text-field
      label="Issues"
      placeholder="e.g. i'm on Chrome and it's broken"
      name="details"
    ></a2k-text-field>
  `,Bo=()=>_`
    <a2k-text-field
      label="Your email"
      placeholder="e.g. andrico@example.com"
      name="details"
    ></a2k-text-field>
  `,Yo=()=>_`
    <div>
      <p>
        Thanks! You can show your support by giving
        <a href="${No}">a2k</a> a star on GitHub.
      </p>
      <p>
        You can also follow me on <a href="${Wo}">Twitter</a> to follow
        progress.
      </p>
    </div>
  `,Ko={feature:zo,problem:qo,hire:Bo,support:Yo};class qt extends ${constructor(){super(...arguments),this.activeContent="",this.hasSubmitted=!1}submit(t){t.preventDefault();const e=t.target,{select:i="none",details:o=""}=xi(e);"track"in window.insights&&window.insights.track({id:"feedback",parameters:{type:i,details:o}}),this.hasSubmitted=!0}updateActiveContent(){const{select:t}=xi(this.formEl);this.activeContent=t?t.toString():""}handleFormChange(){this.updateActiveContent()}handleChange(){this.updateActiveContent()}render(){const t=Ko[this.activeContent];return _`
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

              ${t?t():Ho()}
              <a2k-button type="submit">Submit</a2k-button>

              ${this.hasSubmitted?_`<p>Thanks! We've received your feedback.</p>`:null}
            </a2k-stack>
          </form>
        </a2k-window>
      </div>
    `}}qt.styles=x`
    :host {
      --window-width: 400px;
    }

    #container {
      width: 320px;
    }

    form {
      margin-block: var(--spacing-100);
    }
  `;Ze([It("form")],qt.prototype,"formEl",2);Ze([ce()],qt.prototype,"activeContent",2);Ze([ce()],qt.prototype,"hasSubmitted",2);window.customElements.define("a2k-feedback",qt);const Xo=_`
  <a2k-window heading="Please wait..." draggable closeable>
    <p class="heading">Andricos<span>2000</span></p>
    <a2k-stack>
      <p>Andricos2000 is starting up...</p>
      <a2k-progress></a2k-progress>
    </a2k-stack>
  </a2k-window>
`,Go=navigator.platform.includes("Mac"),Zo=Go?"Ctrl+Alt+Delete":"Cmd+Option+Esc",Jo=_`
  <a2k-blue-screen>
    <a2k-stack>
      <p>
        An error has occurred and Andricos2000 has been shut down to prevent
        damage to your browser.
      </p>
      <p>
        If this the first time you're seeing this error, please restart
        Andricos2000 by pressing ${Zo}.
      </p>
      <p>
        If you continue to experience problems, please perform a fresh reinstall
        of Andricos2000 using an official installation CD.
      </p>
    </a2k-stack>
  </a2k-blue-screen>
`;var Qo=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,K=(s,t,e,i)=>{for(var o=i>1?void 0:i?tn(t,e):t,n=s.length-1,r;n>=0;n--)(r=s[n])&&(o=(i?r(t,e,o):r(o))||o);return i&&o&&Qo(t,e,o),o};function Pe(s=1,t=0){const e=s-t;return Math.random()*e+t}let q=class extends ${constructor(){super(),this.width="0",this.height="0",this.href="",this.styles={top:"0",left:"0",zIndex:"0",width:this.width,height:this.height},this.imgStyles={width:this.width},this.imgSrc="",this.alt="",this.delayTimeout=null,this.displayDelay=Pe(6,2)*1e3,this.styles.zIndex=`${Math.ceil(this.displayDelay)}`,this.setupAppearance()}willUpdate(t){t.has("width")&&(this.styles.width=this.width,this.imgStyles.width=this.width,this.requestUpdate()),t.has("height")&&(this.styles.height=this.height,this.requestUpdate())}setupAppearance(){setTimeout(()=>{this.triggerAppearance(),this.setElPosition()},this.displayDelay)}triggerAppearance(){this.wrapperEl.removeAttribute("hidden")}setElPosition(){const[t,e]=this.calculateValidPositionRange(),i=Pe(t),o=Pe(e);this.styles.left=`${i}px`,this.styles.top=`${o}px`,this.requestUpdate()}calculateValidPositionRange(){const{offsetParent:t}=this.wrapperEl,{width:e,height:i}=this.wrapperEl.getBoundingClientRect(),o={width:window.innerWidth,height:window.innerHeight},{width:n,height:r}=(t==null?void 0:t.getBoundingClientRect())??o,a=n-e,l=a>0?a:0,c=r-i,g=c>0?c:0;return[l,g]}render(){return _`<div style=${Ut(this.styles)} hidden id="wrapper">
      <a href=${this.href} target="_blank">
        <img
          src=${this.imgSrc}
          style=${Ut(this.imgStyles)}
          alt=${this.alt}
        />
      </a>
    </div>`}};q.styles=x`
    #wrapper {
      position: absolute;
    }
  `;K([b()],q.prototype,"width",2);K([b()],q.prototype,"height",2);K([b()],q.prototype,"href",2);K([b()],q.prototype,"styles",2);K([b()],q.prototype,"imgStyles",2);K([b()],q.prototype,"imgSrc",2);K([b()],q.prototype,"alt",2);K([It("#wrapper")],q.prototype,"wrapperEl",2);q=K([at("a2k-advert")],q);var en=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,Bt=(s,t,e,i)=>{for(var o=i>1?void 0:i?sn(t,e):t,n=s.length-1,r;n>=0;n--)(r=s[n])&&(o=(i?r(t,e,o):r(o))||o);return i&&o&&en(t,e,o),o};function on(s=1,t=0){const e=s-t;return Math.random()*e+t}let rt=class extends ${constructor(){super(),this.imgSrc="",this.alt="",this.href="",this.delayTimeout=null,this.displayDelay=on(6,2)*500,this.setupAppearance()}setupAppearance(){setTimeout(()=>{this.triggerAppearance()},this.displayDelay)}triggerAppearance(){this.wrapperEl.removeAttribute("hidden")}render(){return _`<div hidden id="wrapper">
      <a href=${this.href} target="_blank">
        <img src=${this.imgSrc} alt=${this.alt} />
      </a>
    </div>`}};rt.styles=x`
    #wrapper {
      width: 100%;
    }

    img {
      width: 100%;
    }
  `;Bt([b()],rt.prototype,"imgSrc",2);Bt([b()],rt.prototype,"alt",2);Bt([b()],rt.prototype,"href",2);Bt([It("#wrapper")],rt.prototype,"wrapperEl",2);rt=Bt([at("a2k-static-advert")],rt);const nn=new URL("/assets/cali-skills-ad-19fc50eb.gif",self.location).href,rn=new URL("/assets/coding-tips-and-tricks-7a7e7cda.gif",self.location).href,an=new URL("/assets/stream-songs-15e882ad.gif",self.location).href,ln=new URL("/assets/7-simple-tips-1fe1029b.png",self.location).href;class ds extends ${constructor(){super(...arguments);Y(this,"connection","");Y(this,"handleOnline",()=>{connection="Online"});Y(this,"handleOffline",()=>{connection="Offline"})}connectedCallback(){super.connectedCallback(),this.addEventListener("online",this.handleOnline),this.addEventListener("offline",this.handleOffline),this.connection=navigator.onLine?"Online":"Offline"}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("online",this.handleOnline),this.removeEventListener("offline",this.handleOffline)}render(){return _`<a2k-window draggable closeable heading="Internet Explorer 5">
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
          alt="cali skills advert" imgSrc=${nn}>
          </a2k-advert>
      </div>
      <div id="not-sidebar">
        <img src="/images/ie5-splash.png" />
      </div>
    </div>
    <a2k-advert href="https://blog.andri.co" alt="get the latest coding tips and tricks" width="300px" height="300px"
      imgSrc=${rn}></a2k-advert>
    <a2k-advert href="https://open.spotify.com/playlist/37i9dQZF1DX9D5dmCM8Lo3?si=5f5b2de628bf4f20"
      alt="stream millions of songs for free" width="125px" height="175px" imgSrc=${an}></a2k-advert>
    <a2k-advert href="https://www.who.int/news/item/19-05-2019-respect-women-preventing-violence-against-women"
      alt="become more popular with the ladies" width="360px" height="150px" imgSrc=${ln}></a2k-advert>
  </div>

  <a2k-window-status-bar statusOne="Loaded" statusTwo="${this.connection}" slot="statusbar"></a2k-window-status-bar>
</a2k-window>`}}Y(ds,"styles",x`
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
  `);window.customElements.define("a2k-ie5",ds);class cs extends ${render(){return _` <a2k-window draggable closeable heading="About Andricos2000">
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
    </a2k-window>`}}Y(cs,"styles",x`
    p {
      margin: 0;
    }

    img {
      max-width: 400px;
      object-fit: cover;
    }
  `);window.customElements.define("a2k-about",cs);var dn=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,ge=(s,t,e,i)=>{for(var o=i>1?void 0:i?cn(t,e):t,n=s.length-1,r;n>=0;n--)(r=s[n])&&(o=(i?r(t,e,o):r(o))||o);return i&&o&&dn(t,e,o),o};class Ct extends ${constructor(){super(...arguments),this.height=0,this.width=0,this.top=0,this.left=0}render(){const t=Ut({width:`${this.width}px`,transform:`translate(${this.left}px, ${this.top}px)`}),e=Ut({height:`${this.height}px`});return _`
      <div style=${t} id="outer-wrapper">
        <a2k-panel>
          <div style=${e}></div>
        </a2k-panel>
      </div>
    `}}Ct.styles=x`
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
  `;ge([b({type:Number})],Ct.prototype,"height",2);ge([b({type:Number})],Ct.prototype,"width",2);ge([b({type:Number})],Ct.prototype,"top",2);ge([b({type:Number})],Ct.prototype,"left",2);window.customElements.define("a2k-broken-window",Ct);const hn=_`
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
`,un={action:"default"};class pn{constructor(){Y(this,"items",[]);Y(this,"enqueue",(t=un)=>{this.items.push(t)});Y(this,"dequeue",()=>this.isEmpty()?void 0:this.items.shift());Y(this,"isEmpty",()=>!this.items.length)}}const Ie=document.querySelector("body"),fn=new URL("/assets/andricos-2000-startup-774be9be.mp3",self.location),ct=document.querySelector("#windows-container"),vn=document.querySelector('a2k-icon-button[icon="documents-icon"]');vn.onOpen=()=>{window.location.href="https://andri.co"};const gn=document.querySelector('a2k-icon-button[icon="network-icon"]');gn.onOpen=()=>{const s=document.createElement("a2k-feedback");ct.append(s)};const mn=document.querySelector('a2k-icon-button[icon="github-icon"]');mn.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const bn=document.querySelector('a2k-icon-button[icon="help-icon"]');bn.onOpen=()=>{const s=document.createElement("a2k-about");ct.append(s)};const wn=document.querySelector('a2k-icon-button[icon="internet-icon"]'),Tt=new pn;let Zt="idle";function yn(){setTimeout(()=>{Zt="off";const s=()=>{setTimeout(()=>{Tt.dequeue();const t=document.createElement("a2k-ie5");ct.append(t),Tt.isEmpty()||s()},100)};Tt.isEmpty()||s()},4e3)}wn.onOpen=()=>{if(Zt==="idle")Zt="queueing",Tt.enqueue(),yn();else if(Zt==="queueing")Tt.enqueue();else{const s=document.createElement("a2k-ie5");ct.append(s)}};const _n=document.querySelector('a2k-icon-button[icon="lock-icon"]');_n.onOpen=()=>{const s=document.createElement("div");ct.appendChild(s),Dt(hn,s)};let Ai=!1;const $n=s=>{const{target:t,detail:e}=s,{containerEl:i}=e,o=document.querySelector("a2k-window[heading='Please wait...']");if(!o||!o.isSameNode(t))return;const{width:n,top:r,left:a,height:l}=i.getBoundingClientRect(),c=document.createElement("a2k-broken-window");ct.insertBefore(c,o),c.setAttribute("height",l),c.setAttribute("width",n),c.setAttribute("top",r),c.setAttribute("left",a)};window.addEventListener("keypress",hs);function hs(s){s.key==="e"&&s.ctrlKey&&(window.removeEventListener("keypress",hs),Ie.textContent="",Dt(Jo,Ie))}window.addEventListener("startup-progress",s=>{if(!(s.detail.progress<50)&&!Ai){Ai=!0;try{kn()}catch{}}});window.addEventListener("startup-progress",s=>{!s.detail.isComplete||(setTimeout(()=>{document.querySelector(".fixed-container").remove(),En(),Cn()},300),setTimeout(()=>{Ie.removeAttribute("data-state")},500))});function kn(){const s=new Audio(fn);s.volume=.3,s.play()}function En(){let s=0;setTimeout(()=>{Dt(Xo,ct);const t=document.querySelector("a2k-progress"),e=document.querySelector("a2k-window[heading='Please wait...']"),i=setInterval(()=>{if(!!t&&(s=s+1.2,t.setAttribute("progress",s),s>40)){for(;e.firstChild;)e.removeChild(e.lastChild);window.addEventListener("window-drag",$n),e.innerHTML=`
        <a2k-stack>
          <p>Oh no! We had a problem loading Andricos2000. Don't worry, you can still play around and find some easter eggs.</p>
          <p>Andricos2000 is a work in progress, so keep checking back (or follow me on <a href="https://twitter.com/andricokaroulla" target="_blank"
          >Twitter</a
        >) for updates :)</p>
          </a2k-stack>
        `,clearInterval(i)}},100)},700)}function Cn(){const s=document.querySelectorAll("a2k-icon-button");setTimeout(()=>{s.forEach(t=>{t.removeAttribute("hidden")})},1200)}
