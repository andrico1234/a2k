var hs=Object.defineProperty;var us=(s,t,e)=>t in s?hs(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var B=(s,t,e)=>(us(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();insights.init("qSiM34gCir3EyTFz");insights.trackPages();const Yt=window,Ie=Yt.ShadowRoot&&(Yt.ShadyCSS===void 0||Yt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fe=Symbol(),Je=new WeakMap;let Ai=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ie&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Je.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Je.set(e,t))}return t}toString(){return this.cssText}};const ps=s=>new Ai(typeof s=="string"?s:s+"",void 0,Fe),yt=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[n+1],s[0]);return new Ai(e,s,Fe)},fs=(s,t)=>{Ie?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),o=Yt.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)})},Qe=Ie?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ps(e)})(s):s;var ge;const Zt=window,ti=Zt.trustedTypes,vs=ti?ti.emptyScript:"",ei=Zt.reactiveElementPolyfillSupport,Pe={toAttribute(s,t){switch(t){case Boolean:s=s?vs:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Si=(s,t)=>t!==s&&(t==t||s==s),me={attribute:!0,type:String,converter:Pe,reflect:!1,hasChanged:Si};let ct=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=me){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||me}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(Qe(o))}else t!==void 0&&e.push(Qe(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return fs(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=me){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Pe).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Pe;this._$El=n,this[n]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Si)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ct.finalized=!0,ct.elementProperties=new Map,ct.elementStyles=[],ct.shadowRootOptions={mode:"open"},ei==null||ei({ReactiveElement:ct}),((ge=Zt.reactiveElementVersions)!==null&&ge!==void 0?ge:Zt.reactiveElementVersions=[]).push("1.5.0");var be;const Jt=window,ft=Jt.trustedTypes,ii=ft?ft.createPolicy("lit-html",{createHTML:s=>s}):void 0,G=`lit$${(Math.random()+"").slice(9)}$`,Ti="?"+G,gs=`<${Ti}>`,vt=document,Tt=(s="")=>vt.createComment(s),Ot=s=>s===null||typeof s!="object"&&typeof s!="function",Oi=Array.isArray,ms=s=>Oi(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,si=/-->/g,oi=/>/g,it=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ni=/'/g,ri=/"/g,Pi=/^(?:script|style|textarea|title)$/i,bs=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),J=bs(1),ot=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),ai=new WeakMap,ut=vt.createTreeWalker(vt,129,null,!1),ws=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",r=Ct;for(let l=0;l<e;l++){const d=s[l];let v,h,p=-1,g=0;for(;g<d.length&&(r.lastIndex=g,h=r.exec(d),h!==null);)g=r.lastIndex,r===Ct?h[1]==="!--"?r=si:h[1]!==void 0?r=oi:h[2]!==void 0?(Pi.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=it):h[3]!==void 0&&(r=it):r===it?h[0]===">"?(r=o??Ct,p=-1):h[1]===void 0?p=-2:(p=r.lastIndex-h[2].length,v=h[1],r=h[3]===void 0?it:h[3]==='"'?ri:ni):r===ri||r===ni?r=it:r===si||r===oi?r=Ct:(r=it,o=void 0);const w=r===it&&s[l+1].startsWith("/>")?" ":"";n+=r===Ct?d+gs:p>=0?(i.push(v),d.slice(0,p)+"$lit$"+d.slice(p)+G+w):d+G+(p===-2?(i.push(void 0),l):w)}const a=n+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ii!==void 0?ii.createHTML(a):a,i]};let Qt=class{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const a=t.length-1,l=this.parts,[d,v]=ws(t,e);if(this.el=Qt.createElement(d,i),ut.currentNode=this.el.content,e===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(o=ut.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const p of o.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(G)){const g=v[r++];if(h.push(p),g!==void 0){const w=o.getAttribute(g.toLowerCase()+"$lit$").split(G),A=/([.?@])?(.*)/.exec(g);l.push({type:1,index:n,name:A[2],strings:w,ctor:A[1]==="."?_s:A[1]==="?"?ks:A[1]==="@"?Es:ae})}else l.push({type:6,index:n})}for(const p of h)o.removeAttribute(p)}if(Pi.test(o.tagName)){const h=o.textContent.split(G),p=h.length-1;if(p>0){o.textContent=ft?ft.emptyScript:"";for(let g=0;g<p;g++)o.append(h[g],Tt()),ut.nextNode(),l.push({type:2,index:++n});o.append(h[p],Tt())}}}else if(o.nodeType===8)if(o.data===Ti)l.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(G,h+1))!==-1;)l.push({type:7,index:n}),h+=G.length-1}n++}}static createElement(t,e){const i=vt.createElement("template");return i.innerHTML=t,i}};function gt(s,t,e=s,i){var o,n,r,a;if(t===ot)return t;let l=i!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[i]:e._$Cl;const d=Ot(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),d===void 0?l=void 0:(l=new d(s),l._$AT(s,e,i)),i!==void 0?((r=(a=e)._$Co)!==null&&r!==void 0?r:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=gt(s,l._$AS(s,t.values),l,i)),t}let ys=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:vt).importNode(i,!0);ut.currentNode=n;let r=ut.nextNode(),a=0,l=0,d=o[0];for(;d!==void 0;){if(a===d.index){let v;d.type===2?v=new re(r,r.nextSibling,this,t):d.type===1?v=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(v=new Cs(r,this,t)),this.u.push(v),d=o[++l]}a!==(d==null?void 0:d.index)&&(r=ut.nextNode(),a++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},re=class{constructor(t,e,i,o){var n;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=gt(this,t,e),Ot(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==ot&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ms(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==P&&Ot(this._$AH)?this._$AA.nextSibling.data=t:this.T(vt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Qt.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const r=new ys(n,this),a=r.v(this.options);r.p(i),this.T(a),this._$AH=r}}_$AC(t){let e=ai.get(t.strings);return e===void 0&&ai.set(t.strings,e=new Qt(t)),e}k(t){Oi(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new re(this.O(Tt()),this.O(Tt()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},ae=class{constructor(t,e,i,o,n){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=gt(this,t,e,0),r=!Ot(t)||t!==this._$AH&&t!==ot,r&&(this._$AH=t);else{const a=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=gt(this,a[i+l],e,l),d===ot&&(d=this._$AH[l]),r||(r=!Ot(d)||d!==this._$AH[l]),d===P?t=P:t!==P&&(t+=(d??"")+n[l+1]),this._$AH[l]=d}r&&!o&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},_s=class extends ae{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}};const $s=ft?ft.emptyScript:"";let ks=class extends ae{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,$s):this.element.removeAttribute(this.name)}},Es=class extends ae{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=gt(this,t,e,0))!==null&&i!==void 0?i:P)===ot)return;const o=this._$AH,n=t===P&&o!==P||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==P&&(o===P||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Cs=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){gt(this,t)}};const li=Jt.litHtmlPolyfillSupport;li==null||li(Qt,re),((be=Jt.litHtmlVersions)!==null&&be!==void 0?be:Jt.litHtmlVersions=[]).push("2.5.0");const xs=(s,t,e)=>{var i,o;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const a=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new re(t.insertBefore(Tt(),a),a,void 0,e??{})}return r._$AI(s),r};var we,ye;let H=class extends ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xs(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ot}};H.finalized=!0,H._$litElement$=!0,(we=globalThis.litElementHydrateSupport)===null||we===void 0||we.call(globalThis,{LitElement:H});const di=globalThis.litElementPolyfillSupport;di==null||di({LitElement:H});((ye=globalThis.litElementVersions)!==null&&ye!==void 0?ye:globalThis.litElementVersions=[]).push("3.2.1");let As=class extends Event{constructor(t,e,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=i}};let Ss=class{constructor(t,e,i,o=!1){this.host=t,this.context=e,this.callback=i,this.subscribe=o,this.provided=!1,this.value=void 0,this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new As(this.context,(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.subscribe))}};let Ts=class{constructor(t){this.callbacks=new Map,this.updateObservers=()=>{for(const[e,i]of this.callbacks)e(this.t,i)},t!==void 0&&(this.value=t)}get value(){return this.t}set value(t){this.setValue(t)}setValue(t,e=!1){const i=e||!Object.is(t,this.t);this.t=t,i&&this.updateObservers()}addCallback(t,e){e&&(this.callbacks.has(t)||this.callbacks.set(t,()=>{this.callbacks.delete(t)})),t(this.value)}clearCallbacks(){this.callbacks.clear()}};let Os=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}},Ps=class extends Ts{constructor(t,e,i){super(i),this.host=t,this.context=e,this.onContextRequest=o=>{o.context===this.context&&o.composedPath()[0]!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,o.subscribe))},this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new Os(this.context))}};const Ri=({finisher:s,descriptor:t})=>(e,i)=>{var o;if(i===void 0){const n=(o=e.originalKey)!==null&&o!==void 0?o:e.key,r=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return s!=null&&(r.finisher=function(a){s(a,n)}),r}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),s==null||s(n,i)}};function Rs({context:s}){return Ri({finisher:(t,e)=>{const i=new WeakMap;t.addInitializer(a=>{i.set(a,new Ps(a,s))});const o=Object.getOwnPropertyDescriptor(t.prototype,e),n=o==null?void 0:o.set,r={...o,set:function(a){var l;(l=i.get(this))===null||l===void 0||l.setValue(a),n&&n.call(this,a)}};Object.defineProperty(t.prototype,e,r)}})}function Ms({context:s,subscribe:t}){return Ri({finisher:(e,i)=>{e.addInitializer(o=>{new Ss(o,s,n=>{o[i]=n},t)})}})}const js=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function q(s){return(t,e)=>e!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(s,t,e):js(s,t)}var _e;((_e=window.HTMLSlotElement)===null||_e===void 0?void 0:_e.prototype.assignedElements)!=null;const Us={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ls=s=>(...t)=>({_$litDirective$:s,values:t});let Ds=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const Is=Ls(class extends Ds{constructor(s){var t;if(super(s),s.type!==Us.ATTRIBUTE||s.name!=="style"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{const i=s[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[t]){const{style:e}=s.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const o=t[i];o!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,o):e[i]=o)}return ot}});class Fs{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class X{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:At(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new X(e));if(t.length>0)return t}return[this]}}const At=s=>"pointerId"in s,$e=s=>"changedTouches"in s,ci=()=>{};class Vs{constructor(t,{start:e=()=>!0,move:i=ci,end:o=ci,rawUpdates:n=!1,avoidPointerEvents:r=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(At(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const l=new X(a);this.currentPointers.some(d=>d.id===l.id)||!this._triggerPointerStart(l,a)||(At(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerStart(new X(l),a)},this._move=a=>{if(!$e(a)&&(!At(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const l=this.currentPointers.slice(),d=$e(a)?Array.from(a.changedTouches).map(h=>new X(h)):[new X(a)],v=[];for(const h of d){const p=this.currentPointers.findIndex(g=>g.id===h.id);p!==-1&&(v.push(h),this.currentPointers[p]=h)}v.length!==0&&this._moveCallback(l,v,a)},this._triggerPointerEnd=(a,l)=>{if(!$e(l)&&l.buttons&1)return!1;const d=this.currentPointers.findIndex(h=>h.id===a.id);if(d===-1)return!1;this.currentPointers.splice(d,1),this.startPointers.splice(d,1),this._excludeFromButtonsCheck.delete(a.id);const v=!(l.type==="mouseup"||l.type==="touchend"||l.type==="pointerup");return this._endCallback(a,l,v),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new X(a),a))if(At(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerEnd(new X(l),a)},this._startCallback=e,this._moveCallback=i,this._endCallback=o,this._rawUpdates=n&&"onpointerrawupdate"in window,self.PointerEvent&&!r?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}var ke=globalThis&&globalThis.__classPrivateFieldGet||function(s,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(s):i?i.value:t.get(s)},Re,Me,je;const hi={initialPosition:{},getContainerEl:()=>null,getDraggableEl:()=>Promise.resolve(null),getIsDraggable:()=>!0};class Ns{constructor(t,e=hi){this.cursorPositionX=0,this.cursorPositionY=0,this.draggableEl=null,this.state="idle",this.pointerTracker=null,this.styles={position:"absolute",touchAction:"none",top:"0px",left:"0px"},Re.set(this,r=>(this.cursorPositionX=Math.floor(r.pageX),this.cursorPositionY=Math.floor(r.pageY),!0)),Me.set(this,(r,a)=>{const[l]=a,d=this.draggableEl,v=new CustomEvent("window-drag",{bubbles:!0,composed:!0,detail:{pointer:l,containerEl:this.getContainerEl(),draggableEl:d}});this.host.dispatchEvent(v),this.handleWindowMove(l)}),je.set(this,(r,a)=>{a.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this),this.getContainerEl=e.getContainerEl,this.getIsDraggable=e.getIsDraggable??hi.getIsDraggable,e.getDraggableEl().then(r=>{if(!r){console.warn("getDraggableEl() did not return an element HTMLElement");return}this.draggableEl=r,this.init()});const{initialPosition:i}=e,{x:o=0,y:n=0}=i;this.x=o,this.y=n,this.updateElPosition()}init(){const t=ke(this,Me,"f"),e=ke(this,Re,"f"),i=ke(this,je,"f"),o=this.host,n=r=>this.state=r;this.pointerTracker=new Vs(this.draggableEl,{start(r){return e(r),n("dragging"),o.requestUpdate(),!0},move(r,a){t(r,a)},end(r,a){i(r,a),n("idle"),o.requestUpdate()}})}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}updateElPosition(){this.styles.transform=`translate(${this.x}px, ${this.y}px)`}handleWindowMove(t){const e=this.draggableEl,i=this.getContainerEl();if(!e||!i||!this.getIsDraggable())return;const n=this.x,r=this.y,a=Math.floor(t.pageX),l=Math.floor(t.pageY);if(a!==this.cursorPositionX||l!==this.cursorPositionY){const{bottom:v,height:h}=e.getBoundingClientRect(),{right:p,width:g}=i.getBoundingClientRect(),w=a-this.cursorPositionX,A=l-this.cursorPositionY;this.x=n+w,this.y=r+A,this.cursorPositionX=a,this.cursorPositionY=l;const I=this.y<0,F=this.x<0,et=v+A>window.innerHeight,M=p+w>=window.innerWidth;I&&(this.y=0),F&&(this.x=0),et&&(this.y=window.innerHeight-h),M&&(this.x=Math.floor(window.innerWidth-g)),this.updateElPosition(),this.host.requestUpdate()}}}Re=new WeakMap,Me=new WeakMap,je=new WeakMap;const Kt=(s,t=100)=>Math.round(s*t)/t,Ws=(s,t)=>s<=t?s:t,Mi="window-context";let Bt;const Hs=new Uint8Array(16);function zs(){if(!Bt&&(Bt=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Bt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Bt(Hs)}const R=[];for(let s=0;s<256;++s)R.push((s+256).toString(16).slice(1));function qs(s,t=0){return(R[s[t+0]]+R[s[t+1]]+R[s[t+2]]+R[s[t+3]]+"-"+R[s[t+4]]+R[s[t+5]]+"-"+R[s[t+6]]+R[s[t+7]]+"-"+R[s[t+8]]+R[s[t+9]]+"-"+R[s[t+10]]+R[s[t+11]]+R[s[t+12]]+R[s[t+13]]+R[s[t+14]]+R[s[t+15]]).toLowerCase()}const Bs=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ui={randomUUID:Bs};function Ys(s,t,e){if(ui.randomUUID&&!t&&!s)return ui.randomUUID();s=s||{};const i=s.random||(s.rng||zs)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){e=e||0;for(let o=0;o<16;++o)t[e+o]=i[o];return t}return qs(i)}const Xt=window,Ve=Xt.ShadowRoot&&(Xt.ShadyCSS===void 0||Xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ne=Symbol(),pi=new WeakMap;let ji=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ve&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=pi.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&pi.set(e,t))}return t}toString(){return this.cssText}};const Ks=s=>new ji(typeof s=="string"?s:s+"",void 0,Ne),x=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[n+1],s[0]);return new ji(e,s,Ne)},Xs=(s,t)=>{Ve?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),o=Xt.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)})},fi=Ve?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ks(e)})(s):s;var Ee;const te=window,vi=te.trustedTypes,Gs=vi?vi.emptyScript:"",gi=te.reactiveElementPolyfillSupport,Ue={toAttribute(s,t){switch(t){case Boolean:s=s?Gs:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Ui=(s,t)=>t!==s&&(t==t||s==s),Ce={attribute:!0,type:String,converter:Ue,reflect:!1,hasChanged:Ui};let ht=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=Ce){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ce}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(fi(o))}else t!==void 0&&e.push(fi(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Xs(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Ce){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Ue).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Ue;this._$El=n,this[n]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Ui)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ht.finalized=!0,ht.elementProperties=new Map,ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},gi==null||gi({ReactiveElement:ht}),((Ee=te.reactiveElementVersions)!==null&&Ee!==void 0?Ee:te.reactiveElementVersions=[]).push("1.5.0");var xe;const ee=window,mt=ee.trustedTypes,mi=mt?mt.createPolicy("lit-html",{createHTML:s=>s}):void 0,Z=`lit$${(Math.random()+"").slice(9)}$`,Li="?"+Z,Zs=`<${Li}>`,bt=document,Pt=(s="")=>bt.createComment(s),Rt=s=>s===null||typeof s!="object"&&typeof s!="function",Di=Array.isArray,Js=s=>Di(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bi=/-->/g,wi=/>/g,st=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yi=/'/g,_i=/"/g,Ii=/^(?:script|style|textarea|title)$/i,Fi=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),y=Fi(1),Qs=Fi(2),Q=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),$i=new WeakMap,pt=bt.createTreeWalker(bt,129,null,!1),to=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",r=xt;for(let l=0;l<e;l++){const d=s[l];let v,h,p=-1,g=0;for(;g<d.length&&(r.lastIndex=g,h=r.exec(d),h!==null);)g=r.lastIndex,r===xt?h[1]==="!--"?r=bi:h[1]!==void 0?r=wi:h[2]!==void 0?(Ii.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=st):h[3]!==void 0&&(r=st):r===st?h[0]===">"?(r=o??xt,p=-1):h[1]===void 0?p=-2:(p=r.lastIndex-h[2].length,v=h[1],r=h[3]===void 0?st:h[3]==='"'?_i:yi):r===_i||r===yi?r=st:r===bi||r===wi?r=xt:(r=st,o=void 0);const w=r===st&&s[l+1].startsWith("/>")?" ":"";n+=r===xt?d+Zs:p>=0?(i.push(v),d.slice(0,p)+"$lit$"+d.slice(p)+Z+w):d+Z+(p===-2?(i.push(void 0),l):w)}const a=n+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[mi!==void 0?mi.createHTML(a):a,i]};class Mt{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const a=t.length-1,l=this.parts,[d,v]=to(t,e);if(this.el=Mt.createElement(d,i),pt.currentNode=this.el.content,e===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(o=pt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const p of o.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(Z)){const g=v[r++];if(h.push(p),g!==void 0){const w=o.getAttribute(g.toLowerCase()+"$lit$").split(Z),A=/([.?@])?(.*)/.exec(g);l.push({type:1,index:n,name:A[2],strings:w,ctor:A[1]==="."?io:A[1]==="?"?oo:A[1]==="@"?no:le})}else l.push({type:6,index:n})}for(const p of h)o.removeAttribute(p)}if(Ii.test(o.tagName)){const h=o.textContent.split(Z),p=h.length-1;if(p>0){o.textContent=mt?mt.emptyScript:"";for(let g=0;g<p;g++)o.append(h[g],Pt()),pt.nextNode(),l.push({type:2,index:++n});o.append(h[p],Pt())}}}else if(o.nodeType===8)if(o.data===Li)l.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(Z,h+1))!==-1;)l.push({type:7,index:n}),h+=Z.length-1}n++}}static createElement(t,e){const i=bt.createElement("template");return i.innerHTML=t,i}}function wt(s,t,e=s,i){var o,n,r,a;if(t===Q)return t;let l=i!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[i]:e._$Cl;const d=Rt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),d===void 0?l=void 0:(l=new d(s),l._$AT(s,e,i)),i!==void 0?((r=(a=e)._$Co)!==null&&r!==void 0?r:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=wt(s,l._$AS(s,t.values),l,i)),t}class eo{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:bt).importNode(i,!0);pt.currentNode=n;let r=pt.nextNode(),a=0,l=0,d=o[0];for(;d!==void 0;){if(a===d.index){let v;d.type===2?v=new Ut(r,r.nextSibling,this,t):d.type===1?v=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(v=new ro(r,this,t)),this.u.push(v),d=o[++l]}a!==(d==null?void 0:d.index)&&(r=pt.nextNode(),a++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Ut{constructor(t,e,i,o){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=wt(this,t,e),Rt(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==Q&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Js(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==O&&Rt(this._$AH)?this._$AA.nextSibling.data=t:this.T(bt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Mt.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const r=new eo(n,this),a=r.v(this.options);r.p(i),this.T(a),this._$AH=r}}_$AC(t){let e=$i.get(t.strings);return e===void 0&&$i.set(t.strings,e=new Mt(t)),e}k(t){Di(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new Ut(this.O(Pt()),this.O(Pt()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class le{constructor(t,e,i,o,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=wt(this,t,e,0),r=!Rt(t)||t!==this._$AH&&t!==Q,r&&(this._$AH=t);else{const a=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=wt(this,a[i+l],e,l),d===Q&&(d=this._$AH[l]),r||(r=!Rt(d)||d!==this._$AH[l]),d===O?t=O:t!==O&&(t+=(d??"")+n[l+1]),this._$AH[l]=d}r&&!o&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class io extends le{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}}const so=mt?mt.emptyScript:"";class oo extends le{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,so):this.element.removeAttribute(this.name)}}class no extends le{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=wt(this,t,e,0))!==null&&i!==void 0?i:O)===Q)return;const o=this._$AH,n=t===O&&o!==O||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==O&&(o===O||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class ro{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){wt(this,t)}}const ki=ee.litHtmlPolyfillSupport;ki==null||ki(Mt,Ut),((xe=ee.litHtmlVersions)!==null&&xe!==void 0?xe:ee.litHtmlVersions=[]).push("2.5.0");const Lt=(s,t,e)=>{var i,o;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const a=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new Ut(t.insertBefore(Pt(),a),a,void 0,e??{})}return r._$AI(s),r};var Ae,Se;class $ extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Q}}$.finalized=!0,$._$litElement$=!0,(Ae=globalThis.litElementHydrateSupport)===null||Ae===void 0||Ae.call(globalThis,{LitElement:$});const Ei=globalThis.litElementPolyfillSupport;Ei==null||Ei({LitElement:$});((Se=globalThis.litElementVersions)!==null&&Se!==void 0?Se:globalThis.litElementVersions=[]).push("3.2.1");class Vi extends ${render(){return y`<div id="stack">
      <slot></slot>
    </div>`}}Vi.styles=x`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",Vi);class Ni extends ${render(){return y` <div id="panel">
      <slot></slot>
    </div>`}}Ni.styles=x`
    :host {
      box-sizing: border-box;
    }

    #panel {
      border: var(--panel-border);
      background-color: var(--panel-color-background);
      box-shadow: var(--panel-shadow);
    }
  `;window.customElements.define("a2k-panel",Ni);var ao=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},lo=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class We extends H{constructor(){super(...arguments),this.dataState="active"}render(){return J`
      <div data-state=${this.dataState} id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}We.styles=yt`
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
  `;ao([q({attribute:"data-state"}),lo("design:type",Object)],We.prototype,"dataState",void 0);window.customElements.define("a2k-window-topbar",We);const rt=s=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(r){customElements.define(e,r)}}})(s,t);const co=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function b(s){return(t,e)=>e!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(s,t,e):co(s,t)}function de(s){return b({...s,state:!0})}const Wi=({finisher:s,descriptor:t})=>(e,i)=>{var o;if(i===void 0){const n=(o=e.originalKey)!==null&&o!==void 0?o:e.key,r=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return s!=null&&(r.finisher=function(a){s(a,n)}),r}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),s==null||s(n,i)}};function Dt(s,t){return Wi({descriptor:e=>{const i={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(s))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const o=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var n,r;return this[o]===void 0&&(this[o]=(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(s))!==null&&r!==void 0?r:null),this[o]}}return i}})}var Te;const ho=((Te=window.HTMLSlotElement)===null||Te===void 0?void 0:Te.prototype.assignedElements)!=null?(s,t)=>s.assignedElements(t):(s,t)=>s.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function uo(s){const{slot:t,selector:e}=s??{};return Wi({descriptor:i=>({get(){var o;const n="slot"+(t?`[name=${t}]`:":not([name])"),r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n),a=r!=null?ho(r,s):[];return e?a.filter(l=>l.matches(e)):a},enumerable:!0,configurable:!0})})}var k=globalThis&&globalThis.__classPrivateFieldGet||function(s,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(s):i?i.value:t.get(s)},j=globalThis&&globalThis.__classPrivateFieldSet||function(s,t,e,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!o:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(s,e):o?o.value=e:t.set(s,e),e};function po(s){var t,e,i,o,n,r,a,l,d,v,h,p,g,w,A,I,F;class et extends s{constructor(...c){super(...c),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),o.set(this,!1),n.set(this,void 0),r.set(this,void 0),a.set(this,""),l.set(this,()=>{j(this,o,!0,"f"),j(this,e,!0,"f"),k(this,t,"m",w).call(this)}),d.set(this,()=>{j(this,e,!1,"f"),k(this,t,"m",A).call(this,this.shouldFormValueUpdate()?k(this,a,"f"):""),!this.validity.valid&&k(this,o,"f")&&j(this,i,!0,"f");const u=k(this,t,"m",w).call(this);this.validationMessageCallback&&this.validationMessageCallback(u?this.internals.validationMessage:"")}),v.set(this,()=>{var u;j(this,i,!0,"f"),k(this,t,"m",w).call(this),(u=this===null||this===void 0?void 0:this.validationMessageCallback)===null||u===void 0||u.call(this,this.showError?this.internals.validationMessage:"")}),h.set(this,void 0),p.set(this,!1),g.set(this,Promise.resolve()),this.addEventListener("focus",k(this,l,"f")),this.addEventListener("blur",k(this,d,"f")),this.addEventListener("invalid",k(this,v,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const c=this.validators.map(f=>f.attribute),u=super.observedAttributes||[];return[...new Set([...u,...c])]}static getValidator(c){return this.validators.find(u=>u.attribute===c)||null}get form(){return this.internals.form}get showError(){return k(this,t,"m",w).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(c,u,m){var f;(f=super.attributeChangedCallback)===null||f===void 0||f.call(this,c,u,m),this.constructor.getValidator(c)&&this.validationTarget&&this.setValue(k(this,a,"f"))}setValue(c){var u;j(this,i,!1,"f"),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,""),j(this,a,c,"f");const f=this.shouldFormValueUpdate()?c:null;this.internals.setFormValue(f),k(this,t,"m",A).call(this,f),this.valueChangedCallback&&this.valueChangedCallback(f),k(this,t,"m",w).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(c=>c(k(this,g,"f")))}formResetCallback(){var c,u;j(this,o,!1,"f"),j(this,i,!1,"f"),k(this,t,"m",w).call(this),(c=this.resetFormControl)===null||c===void 0||c.call(this),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,k(this,t,"m",w).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,o=new WeakMap,n=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,d=new WeakMap,v=new WeakMap,h=new WeakMap,p=new WeakMap,g=new WeakMap,t=new WeakSet,w=function(){if(this.hasAttribute("disabled"))return!1;const c=k(this,i,"f")||k(this,o,"f")&&!this.validity.valid&&!k(this,e,"f");return c&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),c},A=function(c){const u=this.constructor,m={},f=u.validators,V=[];k(this,p,"f")||(j(this,g,new Promise(_=>{j(this,h,_,"f")}),"f"),j(this,p,!0,"f")),k(this,n,"f")&&(k(this,n,"f").abort(),j(this,r,k(this,n,"f"),"f"));const S=new AbortController;j(this,n,S,"f");let D,K=!1;!f.length||(f.forEach(_=>{const N=_.key||"customError",T=_.isValid(this,c,S.signal);T instanceof Promise?(V.push(T),T.then(W=>{W!=null&&(m[N]=!W,D=k(this,t,"m",F).call(this,_,c),k(this,t,"m",I).call(this,m,D))})):(m[N]=!T,this.validity[N]!==!T&&(K=!0),T||(D=k(this,t,"m",F).call(this,_,c)))}),Promise.allSettled(V).then(()=>{var _;S!=null&&S.signal.aborted||(j(this,p,!1,"f"),(_=k(this,h,"f"))===null||_===void 0||_.call(this))}),K&&k(this,t,"m",I).call(this,m,D))},I=function(c,u){if(this.validationTarget)this.internals.setValidity(c,u,this.validationTarget);else{if(this.internals.setValidity(c,u),this.internals.validity.valid)return;let m=0;const f=setInterval(()=>{m>=100||this.validity.valid?clearInterval(f):this.validationTarget&&(this.internals.setValidity(this.validity,u,this.validationTarget),clearInterval(f)),m+=1},0)}},F=function(c,u){if(this.validityCallback){const m=this.validityCallback(c.key||"customError");if(m)return m}return c.message instanceof Function?c.message(this,u):c.message},et}var He=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},ze=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class It extends po($){constructor(){super(...arguments),this.disabled=!1,this.type="",this.size="medium"}handleSubmit(){this.form.requestSubmit()}connectedCallback(){super.connectedCallback(),!this.type&&this.form?this.type:this.type,this.type==="submit"&&this.addEventListener("click",this.handleSubmit)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleSubmit)}render(){return y` <button
      data-size="${this.size}"
      aria-label="${this.ariaLabel||O}"
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`}}It.styles=x`
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
  `;He([b({type:Boolean}),ze("design:type",Object)],It.prototype,"disabled",void 0);He([b({type:String}),ze("design:type",Object)],It.prototype,"type",void 0);He([b({type:String}),ze("design:type",String)],It.prototype,"size",void 0);window.customElements.define("a2k-button",It);var fo=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},vo=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};const go=new URL("/assets/a2k-icons-b650a9b4.svg",self.location).href;class qe extends ${constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),Qs`
      <svg height="1em" width="1em">
        <use href="${go}#${this.icon}"></use>
      </svg>
    `}}qe.styles=x`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;fo([b({type:String}),vo("design:type",Object)],qe.prototype,"icon",void 0);window.customElements.define("a2k-icon",qe);var mo=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},bo=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Be extends H{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return J`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
      aria-label="Close Window"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}Be.styles=yt`
    :host {
      position: absolute;
      right: 2px;
    }

    #icon-wrapper {
      font-size: 8px;
    }
  `;mo([q({type:Boolean}),bo("design:type",Object)],Be.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",Be);var _t=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},$t=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class tt extends H{async getDraggableEl(){return await this.updateComplete,this.shadowRoot.querySelector("#draggable")}constructor(){super(),this.id=Ys(),this.heading="",this.draggable=!1,this.closeable=!1,this.x=-1,this.y=-1,this.drag=new Ns(this,{initialPosition:{},getContainerEl:()=>this.shadowRoot.querySelector("#window"),getDraggableEl:()=>this.getDraggableEl(),getIsDraggable:()=>this.draggable}),this.addEventListener("close",()=>this.remove())}connectedCallback(){if(super.connectedCallback(),this.windows){const t=this.x===-1||this.y===-1,e={hasAutoPosition:t};if(this.windows.registerWindow(this.id,e),this.addEventListener("pointerdown",this.handleClick),t){const o=this.windows.windowsList.filter(n=>n.hasAutoPosition).length;this.x=o*32,this.y=o*32}}this.x===-1&&(this.x=0),this.y===-1&&(this.y=0)}disconnectedCallback(){super.disconnectedCallback(),this.windows&&(this.windows.unregisterWindow(this.id),this.removeEventListener("pointerdown",this.handleClick))}firstUpdated(){const{offsetWidth:t}=this.renderRoot.querySelector("#window"),e=Ws(screen.availWidth,innerWidth);this.drag.x=this.x,this.drag.y=this.y,this.drag.updateElPosition(),this.x+t>e&&(this.drag.styles.transform=`translate(0px, ${this.y}px)`),this.requestUpdate()}handleClick(){var t;(t=this.windows)==null||t.handleInteraction(this.id)}getWindowPosition(){if(!!this.windows)return this.windows.windowOrder.indexOf(this.id)}getIsMostRecentlyUpdatedWindow(){if(!this.windows)return;const{windowOrder:t}=this.windows;return t[t.length-1]===this.id}render(){const t=this.getWindowPosition(),e=this.getIsMostRecentlyUpdatedWindow()?"active":"inactive";return J`
      <div
        id="window"
        style=${Is({...this.drag.styles,zIndex:`${t}`})}
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
    `}}tt.styles=yt`
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
  `;_t([Ms({context:Mi,subscribe:!0}),q({type:String,attribute:!1}),$t("design:type",Object)],tt.prototype,"windows",void 0);_t([q({type:String}),$t("design:type",Object)],tt.prototype,"heading",void 0);_t([q({type:Boolean}),$t("design:type",Object)],tt.prototype,"draggable",void 0);_t([q({type:Boolean}),$t("design:type",Object)],tt.prototype,"closeable",void 0);_t([q({type:Number}),$t("design:type",Object)],tt.prototype,"x",void 0);_t([q({type:Number}),$t("design:type",Object)],tt.prototype,"y",void 0);window.customElements.define("a2k-window",tt);var wo=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},yo=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Hi extends H{constructor(){super(...arguments),this.windowContext={windows:{},get windowsList(){return Object.values(this.windows)},get windowOrder(){return this.windowsList.sort((i,o)=>i.lastInteractionTime-o.lastInteractionTime).map(({id:i})=>i)},get count(){return Object.keys(this.windows).length},registerWindow:(t,e)=>{const{hasAutoPosition:i=!0}=e,o=Date.now(),n={id:t,lastInteractionTime:o,hasAutoPosition:i,el:null};this.windowContext.windows[t]=n,this.windowContext.triggerUpdate()},unregisterWindow:t=>{delete this.windowContext.windows[t],this.windowContext.triggerUpdate()},handleInteraction:t=>{if(!this.windowContext.windows[t])return;const i=Date.now();this.windowContext.windows[t].lastInteractionTime=i,this.windowContext.triggerUpdate()},triggerUpdate:()=>{const t=_o(this.windowContext);this.windowContext=t}}}render(){return J`<div>
      <slot></slot>
    </div>`}}wo([Rs({context:Mi}),q({attribute:!1}),yo("design:type",Object)],Hi.prototype,"windowContext",void 0);function _o(s){return Object.create(Object.getPrototypeOf(s),Object.getOwnPropertyDescriptors(s))}window.customElements.define("a2k-window-context",Hi);class zi extends H{render(){return J`<div id="toolbar">
        <slot></slot>
      </div>
      <div id="separator"></div>`}}zi.styles=yt`
    #toolbar {
      border-color: var(--color-gray-300) var(--color-gray-700)
        var(--color-gray-700) var(--color-gray-300);
      border-width: 2px;
      border-style: solid;
    }

    #separator {
      border-bottom: 5px solid var(--color-gray-400);
    }
  `;window.customElements.define("a2k-window-toolbar",zi);class qi extends H{render(){return J`<div id="item">
      <slot></slot>
    </div>`}}qi.styles=yt`
    #item {
      border-color: var(--color-gray-700) var(--color-gray-300)
        var(--color-gray-300) var(--color-gray-700);
      border-width: var(--border-width);
      border-style: solid;
      padding: var(--spacing-50);
      background-color: var(--window-toolbar-item-color-background);
    }
  `;window.customElements.define("a2k-window-toolbar-item",qi);var Bi=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Yi=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class ce extends H{constructor(){super(...arguments),this.statusOne="",this.statusTwo=""}render(){return J`
      <div id="separator"></div>
      <div id="content">
        <div class="section">
          <p>${this.statusOne}</p>
        </div>

        ${this.statusTwo?J` <div class="section-separator"></div>
              <div class="section"><p>${this.statusTwo}</p></div>`:null}
      </div>
    `}}ce.styles=yt`
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
  `;Bi([q({type:String}),Yi("design:type",Object)],ce.prototype,"statusOne",void 0);Bi([q({type:String}),Yi("design:type",Object)],ce.prototype,"statusTwo",void 0);window.customElements.define("a2k-window-status-bar",ce);class Ki extends ${render(){return y`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}Ki.styles=x`
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
  `;window.customElements.define("a2k-cover",Ki);class Xi extends ${render(){return y`
      <div id="wrapper">
        <a2k-cover>
          <div slot="heading"><slot></slot></div>
        </a2k-cover>
      </div>
    `}}Xi.styles=x`
    #wrapper {
      background: var(--blue-screen-color-background);
    }

    [slot="heading"] {
      color: var(--blue-screen-font-color);
      font-weight: var(--blue-screen-font-weight);
      font-size: var(--blue-screen-font-size);
    }
  `;window.customElements.define("a2k-blue-screen",Xi);var Gi=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},$o=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let ie=class extends ${constructor(){super(...arguments),this.open=!1}render(){return y`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};ie.styles=x`
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
  `;Gi([b(),$o("design:type",Object)],ie.prototype,"open",void 0);ie=Gi([rt("a2k-start-menu-item")],ie);var Zi=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},ko=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let se=class extends ${constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=y` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;Lt(t,document.body)}handleShutdownClick(){location.reload()}render(){const t=String(this.open)==="true";return y`
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
    `}};se.styles=x`
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
  `;Zi([b(),ko("design:type",Object)],se.prototype,"open",void 0);se=Zi([rt("a2k-start-menu")],se);var Ji=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Eo=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let oe=class extends ${constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return y`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `}};oe.styles=x`
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
  `;Ji([de(),Eo("design:type",Object)],oe.prototype,"_isMenuOpen",void 0);oe=Ji([rt("a2k-start-button")],oe);var Co=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n};let Le=class extends ${constructor(){super(...arguments),this.clock=new Fs(this)}render(){const t=xo.format(this.clock.value);return y`<div class="utility-bar">${t}</div>`}};Le.styles=x`
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
  `;Le=Co([rt("a2k-utility-bar")],Le);const xo=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class Qi extends ${render(){return y`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}Qi.styles=x`
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
  `;window.customElements.define("a2k-taskbar",Qi);const ts={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},es=s=>(...t)=>({_$litDirective$:s,values:t});let is=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const Ao=es(class extends is{constructor(s){var t;if(super(s),s.type!==ts.ATTRIBUTE||s.name!=="class"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){var e,i;if(this.nt===void 0){this.nt=new Set,s.strings!==void 0&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((e=this.st)===null||e===void 0)&&e.has(n))&&this.nt.add(n);return this.render(t)}const o=s.element.classList;this.nt.forEach(n=>{n in t||(o.remove(n),this.nt.delete(n))});for(const n in t){const r=!!t[n];r===this.nt.has(n)||((i=this.st)===null||i===void 0?void 0:i.has(n))||(r?(o.add(n),this.nt.add(n)):(o.remove(n),this.nt.delete(n)))}return Q}});var ss=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},So=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let ne=class extends ${constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return y`<div class=${Ao(t)} id="unit">
      <div></div>
      <div></div>
    </div>`}};ne.styles=x`
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
  `;ss([b(),So("design:type",String)],ne.prototype,"filled",void 0);ne=ss([rt("a2k-progress-unit")],ne);var To=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Oo=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Ye extends ${constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=t.getBoundingClientRect().width??0;if(this.width===e)return;this.width=e;const{gap:i}=getComputedStyle(t),n=Number(i.replace("px",""))+12,r=Math.ceil(e/n);Array(r).fill(0).forEach(()=>{const a=document.createElement("a2k-progress-unit");a.setAttribute("filled","none"),t==null||t.appendChild(a)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,i=Po(e),o=Math.floor(e);t.forEach((n,r)=>{r<o?n.setAttribute("filled","filled"):r===o&&i>=.5?n.setAttribute("filled","half"):n.setAttribute("filled","none")})}render(){return y`
      <div aria-label="Loading progress" id="progress" role="progressbar"></div>
    `}}Ye.styles=x`
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
  `;To([b({type:Number}),Oo("design:type",Object)],Ye.prototype,"progress",void 0);const Po=s=>Math.floor(s%1*10)/10;window.customElements.define("a2k-progress",Ye);var E=globalThis&&globalThis.__classPrivateFieldGet||function(s,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(s):i?i.value:t.get(s)},U=globalThis&&globalThis.__classPrivateFieldSet||function(s,t,e,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!o:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(s,e):o?o.value=e:t.set(s,e),e};function Ro(s){var t,e,i,o,n,r,a,l,d,v,h,p,g,w,A,I,F;class et extends s{constructor(...c){super(...c),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),o.set(this,!1),n.set(this,void 0),r.set(this,void 0),a.set(this,""),l.set(this,()=>{U(this,o,!0,"f"),U(this,e,!0,"f"),E(this,t,"m",w).call(this)}),d.set(this,()=>{U(this,e,!1,"f"),E(this,t,"m",A).call(this,this.shouldFormValueUpdate()?E(this,a,"f"):""),!this.validity.valid&&E(this,o,"f")&&U(this,i,!0,"f");const u=E(this,t,"m",w).call(this);this.validationMessageCallback&&this.validationMessageCallback(u?this.internals.validationMessage:"")}),v.set(this,()=>{var u;U(this,i,!0,"f"),E(this,t,"m",w).call(this),(u=this===null||this===void 0?void 0:this.validationMessageCallback)===null||u===void 0||u.call(this,this.showError?this.internals.validationMessage:"")}),h.set(this,void 0),p.set(this,!1),g.set(this,Promise.resolve()),this.addEventListener("focus",E(this,l,"f")),this.addEventListener("blur",E(this,d,"f")),this.addEventListener("invalid",E(this,v,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const c=this.validators.map(f=>f.attribute),u=super.observedAttributes||[];return[...new Set([...u,...c])]}static getValidator(c){return this.validators.find(u=>u.attribute===c)||null}get form(){return this.internals.form}get showError(){return E(this,t,"m",w).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(c,u,m){var f;(f=super.attributeChangedCallback)===null||f===void 0||f.call(this,c,u,m),this.constructor.getValidator(c)&&this.validationTarget&&this.setValue(E(this,a,"f"))}setValue(c){var u;U(this,i,!1,"f"),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,""),U(this,a,c,"f");const f=this.shouldFormValueUpdate()?c:null;this.internals.setFormValue(f),E(this,t,"m",A).call(this,f),this.valueChangedCallback&&this.valueChangedCallback(f),E(this,t,"m",w).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(c=>c(E(this,g,"f")))}formResetCallback(){var c,u;U(this,o,!1,"f"),U(this,i,!1,"f"),E(this,t,"m",w).call(this),(c=this.resetFormControl)===null||c===void 0||c.call(this),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,E(this,t,"m",w).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,o=new WeakMap,n=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,d=new WeakMap,v=new WeakMap,h=new WeakMap,p=new WeakMap,g=new WeakMap,t=new WeakSet,w=function(){if(this.hasAttribute("disabled"))return!1;const c=E(this,i,"f")||E(this,o,"f")&&!this.validity.valid&&!E(this,e,"f");return c&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),c},A=function(c){const u=this.constructor,m={},f=u.validators,V=[];E(this,p,"f")||(U(this,g,new Promise(_=>{U(this,h,_,"f")}),"f"),U(this,p,!0,"f")),E(this,n,"f")&&(E(this,n,"f").abort(),U(this,r,E(this,n,"f"),"f"));const S=new AbortController;U(this,n,S,"f");let D,K=!1;!f.length||(f.forEach(_=>{const N=_.key||"customError",T=_.isValid(this,c,S.signal);T instanceof Promise?(V.push(T),T.then(W=>{W!=null&&(m[N]=!W,D=E(this,t,"m",F).call(this,_,c),E(this,t,"m",I).call(this,m,D))})):(m[N]=!T,this.validity[N]!==!T&&(K=!0),T||(D=E(this,t,"m",F).call(this,_,c)))}),Promise.allSettled(V).then(()=>{var _;S!=null&&S.signal.aborted||(U(this,p,!1,"f"),(_=E(this,h,"f"))===null||_===void 0||_.call(this))}),K&&E(this,t,"m",I).call(this,m,D))},I=function(c,u){if(this.validationTarget)this.internals.setValidity(c,u,this.validationTarget);else{if(this.internals.setValidity(c,u),this.internals.validity.valid)return;let m=0;const f=setInterval(()=>{m>=100||this.validity.valid?clearInterval(f):this.validationTarget&&(this.internals.setValidity(this.validity,u,this.validationTarget),clearInterval(f)),m+=1},0)}},F=function(c,u){if(this.validityCallback){const m=this.validityCallback(c.key||"customError");if(m)return m}return c.message instanceof Function?c.message(this,u):c.message},et}var he=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},ue=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class kt extends Ro($){constructor(){super(...arguments),this.defaultValue="",this.name="",this.label="",this.placeholder=""}static get formAssociated(){return!0}handleInputChange(t){const e=t.target;this.setValue(e.value);const i=new Event("change",{composed:!0,bubbles:!0});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.label&&(this.label=`${this.label}:`)}render(){return y`
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
    `}}kt.styles=x`
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
  `;he([b(),ue("design:type",Object)],kt.prototype,"defaultValue",void 0);he([b(),ue("design:type",Object)],kt.prototype,"name",void 0);he([b(),ue("design:type",Object)],kt.prototype,"label",void 0);he([b(),ue("design:type",Object)],kt.prototype,"placeholder",void 0);window.customElements.define("a2k-text-field",kt);var C=globalThis&&globalThis.__classPrivateFieldGet||function(s,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(s):i?i.value:t.get(s)},L=globalThis&&globalThis.__classPrivateFieldSet||function(s,t,e,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!o:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(s,e):o?o.value=e:t.set(s,e),e};function Mo(s){var t,e,i,o,n,r,a,l,d,v,h,p,g,w,A,I,F;class et extends s{constructor(...c){super(...c),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),o.set(this,!1),n.set(this,void 0),r.set(this,void 0),a.set(this,""),l.set(this,()=>{L(this,o,!0,"f"),L(this,e,!0,"f"),C(this,t,"m",w).call(this)}),d.set(this,()=>{L(this,e,!1,"f"),C(this,t,"m",A).call(this,this.shouldFormValueUpdate()?C(this,a,"f"):""),!this.validity.valid&&C(this,o,"f")&&L(this,i,!0,"f");const u=C(this,t,"m",w).call(this);this.validationMessageCallback&&this.validationMessageCallback(u?this.internals.validationMessage:"")}),v.set(this,()=>{var u;L(this,i,!0,"f"),C(this,t,"m",w).call(this),(u=this===null||this===void 0?void 0:this.validationMessageCallback)===null||u===void 0||u.call(this,this.showError?this.internals.validationMessage:"")}),h.set(this,void 0),p.set(this,!1),g.set(this,Promise.resolve()),this.addEventListener("focus",C(this,l,"f")),this.addEventListener("blur",C(this,d,"f")),this.addEventListener("invalid",C(this,v,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const c=this.validators.map(f=>f.attribute),u=super.observedAttributes||[];return[...new Set([...u,...c])]}static getValidator(c){return this.validators.find(u=>u.attribute===c)||null}get form(){return this.internals.form}get showError(){return C(this,t,"m",w).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(c,u,m){var f;(f=super.attributeChangedCallback)===null||f===void 0||f.call(this,c,u,m),this.constructor.getValidator(c)&&this.validationTarget&&this.setValue(C(this,a,"f"))}setValue(c){var u;L(this,i,!1,"f"),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,""),L(this,a,c,"f");const f=this.shouldFormValueUpdate()?c:null;this.internals.setFormValue(f),C(this,t,"m",A).call(this,f),this.valueChangedCallback&&this.valueChangedCallback(f),C(this,t,"m",w).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(c=>c(C(this,g,"f")))}formResetCallback(){var c,u;L(this,o,!1,"f"),L(this,i,!1,"f"),C(this,t,"m",w).call(this),(c=this.resetFormControl)===null||c===void 0||c.call(this),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,C(this,t,"m",w).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,o=new WeakMap,n=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,d=new WeakMap,v=new WeakMap,h=new WeakMap,p=new WeakMap,g=new WeakMap,t=new WeakSet,w=function(){if(this.hasAttribute("disabled"))return!1;const c=C(this,i,"f")||C(this,o,"f")&&!this.validity.valid&&!C(this,e,"f");return c&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),c},A=function(c){const u=this.constructor,m={},f=u.validators,V=[];C(this,p,"f")||(L(this,g,new Promise(_=>{L(this,h,_,"f")}),"f"),L(this,p,!0,"f")),C(this,n,"f")&&(C(this,n,"f").abort(),L(this,r,C(this,n,"f"),"f"));const S=new AbortController;L(this,n,S,"f");let D,K=!1;!f.length||(f.forEach(_=>{const N=_.key||"customError",T=_.isValid(this,c,S.signal);T instanceof Promise?(V.push(T),T.then(W=>{W!=null&&(m[N]=!W,D=C(this,t,"m",F).call(this,_,c),C(this,t,"m",I).call(this,m,D))})):(m[N]=!T,this.validity[N]!==!T&&(K=!0),T||(D=C(this,t,"m",F).call(this,_,c)))}),Promise.allSettled(V).then(()=>{var _;S!=null&&S.signal.aborted||(L(this,p,!1,"f"),(_=C(this,h,"f"))===null||_===void 0||_.call(this))}),K&&C(this,t,"m",I).call(this,m,D))},I=function(c,u){if(this.validationTarget)this.internals.setValidity(c,u,this.validationTarget);else{if(this.internals.setValidity(c,u),this.internals.validity.valid)return;let m=0;const f=setInterval(()=>{m>=100||this.validity.valid?clearInterval(f):this.validationTarget&&(this.internals.setValidity(this.validity,u,this.validationTarget),clearInterval(f)),m+=1},0)}},F=function(c,u){if(this.validityCallback){const m=this.validityCallback(c.key||"customError");if(m)return m}return c.message instanceof Function?c.message(this,u):c.message},et}var Ft=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Vt=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class at extends Mo($){constructor(){super(...arguments),this.label="",this.selectedItem=null,this.name="",this.expanded=!1,this.placeholder="Choose an option",this._options=[],this._openListbox=()=>{this.expanded||(this.expanded=!0,document.addEventListener("click",this._hideOnClickOutside))},this._closeListbox=()=>{!this.expanded||(this.expanded=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._hideOnClickOutside=t=>{t.composedPath().includes(this)||this._closeListbox()}}handleKeyDown(t){t.key==="Escape"&&this.expanded?this._closeListbox():t.key==="Escape"&&!this.expanded&&this.handleSetValue(null)}handleSelectKeyDown(t){(t.key==="ArrowDown"||t.key==="Enter"||t.code==="Space")&&(this.expanded?this.moveFocusToOption(0):this._openListbox())}moveFocusToOption(t){this._options[t].focus()}handleSelectClick(){this.expanded?this._closeListbox():this._openListbox()}handleSetValue(t){const e=t||null;this.selectedItem=e,this.setValue((e==null?void 0:e.value)||"");const i=new Event("change",{composed:!0,bubbles:!0});this.dispatchEvent(i)}handleOptionSelect(t){const e=t.target;if(e.tagName!=="OPTION")return;const i={value:e.value,label:e.innerText};this.handleSetValue(i),this._closeListbox()}handleOptionKeyDown(t){if((t.key==="Enter"||t.code==="Space")&&this.handleOptionSelect(t),t.key==="ArrowDown"){const e=t.target;e.nextElementSibling?e.nextElementSibling.focus():this.moveFocusToOption(0)}if(t.key==="ArrowUp"){const e=t.target;if(e.previousElementSibling)e.previousElementSibling.focus();else{const o=this._options.length;this.moveFocusToOption(o-1)}}}toggleButton(){return y`<a2k-button tabindex="-1" aria-label="Open Select" size="small">
      <a2k-icon icon="chevron-icon"></a2k-icon>
    </a2k-button> `}handleSlotchange(t){const i=t.target.assignedElements();i.forEach(o=>{o.setAttribute("tabindex","0")}),this._options=i}connectedCallback(){super.connectedCallback(),this.label&&(this.label=`${this.label}:`),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown)}render(){var t;return y`
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

          ${this.expanded?y`
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
    `}}at.styles=x`
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
  `;Ft([b({type:String}),Vt("design:type",Object)],at.prototype,"label",void 0);Ft([b({type:String}),Vt("design:type",Object)],at.prototype,"selectedItem",void 0);Ft([b({type:String}),Vt("design:type",Object)],at.prototype,"name",void 0);Ft([de(),Vt("design:type",Object)],at.prototype,"expanded",void 0);Ft([b({type:String}),Vt("design:type",Object)],at.prototype,"placeholder",void 0);window.customElements.define("a2k-select",at);const jt=es(class extends is{constructor(s){var t;if(super(s),s.type!==ts.ATTRIBUTE||s.name!=="style"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{const i=s[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[t]){const{style:e}=s.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const o=t[i];o!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,o):e[i]=o)}return Q}});var os=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},ns=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class pe extends ${constructor(){super(...arguments),this.slotHeightStyles={height:"0px"}}firstUpdated(){const t=getComputedStyle(this.desktopContainer).height;this.slotHeightStyles={height:t}}render(){return y`<div id="desktop">
      <slot id="slot" style=${jt(this.slotHeightStyles)}></slot>
    </div>`}}pe.styles=x`
    #desktop {
      height: 100%;
    }

    #desktop > slot {
      display: flex;
      flex-flow: column wrap;
      width: fit-content;
    }
  `;os([b(),ns("design:type",Object)],pe.prototype,"slotHeightStyles",void 0);os([Dt("#desktop"),ns("design:type",HTMLSlotElement)],pe.prototype,"desktopContainer",void 0);window.customElements.define("a2k-desktop",pe);var Ke=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Xe=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class Nt extends ${constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return y` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`}}Nt.styles=x`
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
  `;Ke([b({type:String}),Xe("design:type",Object)],Nt.prototype,"text",void 0);Ke([b({type:String}),Xe("design:type",Object)],Nt.prototype,"icon",void 0);Ke([b(),Xe("design:type",Object)],Nt.prototype,"onOpen",void 0);window.customElements.define("a2k-icon-button",Nt);const jo=(s,t)=>{const e=s/t,i=t/s*100,o=Array(e).fill(i),n=o.length;for(let r=0;r<1e3;r++){const a=Math.floor(Math.random()*n),l=o[a],d=Math.floor(Math.random()*n),v=o[d],h=Kt(Math.random()*l),p=Kt(l-h),g=Kt(v+h);o[a]=p,o[d]=g}return o};var Wt=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},Ht=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};const Uo=["Booting Up..."],Lo=s=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:s});class lt extends ${constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.state="idle",this.image="",this.footerText="Copyright Ⓒ 1999-2000. Andricos2000",this.messages=Uo,this.progress=0,this.interval=50,this.handleStart=()=>{this.state="loading",document.querySelector("body").setAttribute("data-state","waiting"),this.beginLoading()},this.beginLoading=()=>{const t=jo(this.startupTime,this.interval);this.intervalRef=setInterval(()=>{const e=t[this.currentStep]??0,i=Kt(this.progress+e),o=Lo({progress:i,isComplete:i>=100});this.dispatchEvent(o),i>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=i,this.currentStep++)},this.interval)}}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return this.state==="idle"?y`
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
      `:y`
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
    `}}lt.styles=x`
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
  `;Wt([b({type:String}),Ht("design:type",Object)],lt.prototype,"state",void 0);Wt([b({type:String}),Ht("design:type",Object)],lt.prototype,"image",void 0);Wt([b({type:String}),Ht("design:type",Object)],lt.prototype,"footerText",void 0);Wt([b(),Ht("design:type",Object)],lt.prototype,"messages",void 0);Wt([b(),Ht("design:type",Object)],lt.prototype,"progress",void 0);window.customElements.define("a2k-startup",lt);var rs=globalThis&&globalThis.__decorate||function(s,t,e,i){var o=arguments.length,n=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},as=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};class fe extends ${firstUpdated(){const[t]=this.slotEl,e=t.cloneNode(!0);this.marqueeWrapperEl.appendChild(e)}render(){return y`<div id="marquee">
      <div id="marquee-inner-1">
        <slot name="text"></slot>
      </div>
      <div id="marquee-inner-2"></div>
    </div>`}}fe.styles=x`
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
  `;rs([uo({slot:"text"}),as("design:type",Array)],fe.prototype,"slotEl",void 0);rs([Dt("#marquee-inner-2"),as("design:type",HTMLElement)],fe.prototype,"marqueeWrapperEl",void 0);window.customElements.define("a2k-marquee",fe);const Do=s=>{const t=new FormData(s),e={};for(const[i,o]of t.entries())e.hasOwnProperty(i)?Array.isArray(e[i])?e[i].push(o):e[i]=[e[i],o]:e[i]=o;return e},Ci=s=>{const t=Do(s),e={};return Object.entries(t).forEach(([i,o])=>{if(i.includes(".")){const n=i.split("."),r=n.pop();let a=e;for(;n.length;){const l=n.shift();a[l]=a[l]||{},a=a[l]}a[r]=o}else e[i]=t[i]}),e};var Io=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,Ge=(s,t,e,i)=>{for(var o=i>1?void 0:i?Fo(t,e):t,n=s.length-1,r;n>=0;n--)(r=s[n])&&(o=(i?r(t,e,o):r(o))||o);return i&&o&&Io(t,e,o),o};const Vo="https://github.com/andrico1234/a2k",No="https://twitter.com/andricokaroulla",Wo=()=>y`
    <a2k-text-field
      label="Feedback"
      placeholder="e.g. it's dope!"
      name="details"
    ></a2k-text-field>
  `,Ho=()=>y`
    <a2k-text-field
      label="Ideas"
      placeholder="e.g. more easter eggs"
      name="details"
    ></a2k-text-field>
  `,zo=()=>y`
    <a2k-text-field
      label="Issues"
      placeholder="e.g. i'm on Chrome and it's broken"
      name="details"
    ></a2k-text-field>
  `,qo=()=>y`
    <a2k-text-field
      label="Your email"
      placeholder="e.g. andrico@example.com"
      name="details"
    ></a2k-text-field>
  `,Bo=()=>y`
    <div>
      <p>
        Thanks! You can show your support by giving
        <a href="${Vo}">a2k</a> a star on GitHub.
      </p>
      <p>
        You can also follow me on <a href="${No}">Twitter</a> to follow
        progress.
      </p>
    </div>
  `,Yo={feature:Ho,problem:zo,hire:qo,support:Bo};class zt extends ${constructor(){super(...arguments),this.activeContent="",this.hasSubmitted=!1}submit(t){t.preventDefault();const e=t.target,{select:i="none",details:o=""}=Ci(e);window.insights.track({id:"feedback",parameters:{type:i,details:o}}),this.hasSubmitted=!0}updateActiveContent(){const{select:t}=Ci(this.formEl);this.activeContent=t?t.toString():""}handleFormChange(){this.updateActiveContent()}handleChange(){this.updateActiveContent()}render(){const t=Yo[this.activeContent];return y`
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

              ${t?t():Wo()}
              <a2k-button type="submit">Submit</a2k-button>

              ${this.hasSubmitted?y`<p>Thanks! We've received your feedback.</p>`:null}
            </a2k-stack>
          </form>
        </a2k-window>
      </div>
    `}}zt.styles=x`
    :host {
      --window-width: 400px;
    }

    #container {
      width: 320px;
    }

    form {
      margin-block: var(--spacing-100);
    }
  `;Ge([Dt("form")],zt.prototype,"formEl",2);Ge([de()],zt.prototype,"activeContent",2);Ge([de()],zt.prototype,"hasSubmitted",2);window.customElements.define("a2k-feedback",zt);const Ko=y`
  <a2k-window heading="Please wait..." draggable closeable>
    <p class="heading">Andricos<span>2000</span></p>
    <a2k-stack>
      <p>Andricos2000 is starting up...</p>
      <a2k-progress></a2k-progress>
    </a2k-stack>
  </a2k-window>
`,Xo=navigator.platform.includes("Mac"),Go=Xo?"Ctrl+Alt+Delete":"Cmd+Option+Esc",Zo=y`
  <a2k-blue-screen>
    <a2k-stack>
      <p>
        An error has occurred and Andricos2000 has been shut down to prevent
        damage to your browser.
      </p>
      <p>
        If this the first time you're seeing this error, please restart
        Andricos2000 by pressing ${Go}.
      </p>
      <p>
        If you continue to experience problems, please perform a fresh reinstall
        of Andricos2000 using an official installation CD.
      </p>
    </a2k-stack>
  </a2k-blue-screen>
`;var Jo=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,Y=(s,t,e,i)=>{for(var o=i>1?void 0:i?Qo(t,e):t,n=s.length-1,r;n>=0;n--)(r=s[n])&&(o=(i?r(t,e,o):r(o))||o);return i&&o&&Jo(t,e,o),o};function Oe(s=1,t=0){const e=s-t;return Math.random()*e+t}let z=class extends ${constructor(){super(),this.width="0",this.height="0",this.href="",this.styles={top:"0",left:"0",zIndex:"0",width:this.width,height:this.height},this.imgStyles={width:this.width},this.imgSrc="",this.alt="",this.delayTimeout=null,this.displayDelay=Oe(6,2)*1e3,this.styles.zIndex=`${Math.ceil(this.displayDelay)}`,this.setupAppearance()}willUpdate(t){t.has("width")&&(this.styles.width=this.width,this.imgStyles.width=this.width,this.requestUpdate()),t.has("height")&&(this.styles.height=this.height,this.requestUpdate())}setupAppearance(){setTimeout(()=>{this.triggerAppearance(),this.setElPosition()},this.displayDelay)}triggerAppearance(){this.wrapperEl.removeAttribute("hidden")}setElPosition(){const[t,e]=this.calculateValidPositionRange(),i=Oe(t),o=Oe(e);this.styles.left=`${i}px`,this.styles.top=`${o}px`,this.requestUpdate()}calculateValidPositionRange(){const{offsetParent:t}=this.wrapperEl,{width:e,height:i}=this.wrapperEl.getBoundingClientRect(),o={width:window.innerWidth,height:window.innerHeight},{width:n,height:r}=(t==null?void 0:t.getBoundingClientRect())??o,a=n-e,l=a>0?a:0,d=r-i,v=d>0?d:0;return[l,v]}render(){return y`<div style=${jt(this.styles)} hidden id="wrapper">
      <a href=${this.href} target="_blank">
        <img
          src=${this.imgSrc}
          style=${jt(this.imgStyles)}
          alt=${this.alt}
        />
      </a>
    </div>`}};z.styles=x`
    #wrapper {
      position: absolute;
    }
  `;Y([b()],z.prototype,"width",2);Y([b()],z.prototype,"height",2);Y([b()],z.prototype,"href",2);Y([b()],z.prototype,"styles",2);Y([b()],z.prototype,"imgStyles",2);Y([b()],z.prototype,"imgSrc",2);Y([b()],z.prototype,"alt",2);Y([Dt("#wrapper")],z.prototype,"wrapperEl",2);z=Y([rt("a2k-advert")],z);var tn=Object.defineProperty,en=Object.getOwnPropertyDescriptor,qt=(s,t,e,i)=>{for(var o=i>1?void 0:i?en(t,e):t,n=s.length-1,r;n>=0;n--)(r=s[n])&&(o=(i?r(t,e,o):r(o))||o);return i&&o&&tn(t,e,o),o};function sn(s=1,t=0){const e=s-t;return Math.random()*e+t}let nt=class extends ${constructor(){super(),this.imgSrc="",this.alt="",this.href="",this.delayTimeout=null,this.displayDelay=sn(6,2)*500,this.setupAppearance()}setupAppearance(){setTimeout(()=>{this.triggerAppearance()},this.displayDelay)}triggerAppearance(){this.wrapperEl.removeAttribute("hidden")}render(){return y`<div hidden id="wrapper">
      <a href=${this.href} target="_blank">
        <img src=${this.imgSrc} alt=${this.alt} />
      </a>
    </div>`}};nt.styles=x`
    #wrapper {
      width: 100%;
    }

    img {
      width: 100%;
    }
  `;qt([b()],nt.prototype,"imgSrc",2);qt([b()],nt.prototype,"alt",2);qt([b()],nt.prototype,"href",2);qt([Dt("#wrapper")],nt.prototype,"wrapperEl",2);nt=qt([rt("a2k-static-advert")],nt);const on=new URL("/assets/cali-skills-ad-19fc50eb.gif",self.location).href,nn=new URL("/assets/coding-tips-and-tricks-7a7e7cda.gif",self.location).href,rn=new URL("/assets/stream-songs-15e882ad.gif",self.location).href,an=new URL("/assets/7-simple-tips-1fe1029b.png",self.location).href;class ls extends ${constructor(){super(...arguments);B(this,"connection","");B(this,"handleOnline",()=>{connection="Online"});B(this,"handleOffline",()=>{connection="Offline"})}connectedCallback(){super.connectedCallback(),this.addEventListener("online",this.handleOnline),this.addEventListener("offline",this.handleOffline),this.connection=navigator.onLine?"Online":"Offline"}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("online",this.handleOnline),this.removeEventListener("offline",this.handleOffline)}render(){return y`<a2k-window draggable closeable heading="Internet Explorer 5">
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
          alt="cali skills advert" imgSrc=${on}>
          </a2k-advert>
      </div>
      <div id="not-sidebar">
        <img src="/images/ie5-splash.png" />
      </div>
    </div>
    <a2k-advert href="https://blog.andri.co" alt="get the latest coding tips and tricks" width="300px" height="300px"
      imgSrc=${nn}></a2k-advert>
    <a2k-advert href="https://open.spotify.com/playlist/37i9dQZF1DX9D5dmCM8Lo3?si=5f5b2de628bf4f20"
      alt="stream millions of songs for free" width="125px" height="175px" imgSrc=${rn}></a2k-advert>
    <a2k-advert href="https://www.who.int/news/item/19-05-2019-respect-women-preventing-violence-against-women"
      alt="become more popular with the ladies" width="360px" height="150px" imgSrc=${an}></a2k-advert>
  </div>

  <a2k-window-status-bar statusOne="Loaded" statusTwo="${this.connection}" slot="statusbar"></a2k-window-status-bar>
</a2k-window>`}}B(ls,"styles",x`
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
  `);window.customElements.define("a2k-ie5",ls);class ds extends ${render(){return y` <a2k-window draggable closeable heading="About Andricos2000">
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
    </a2k-window>`}}B(ds,"styles",x`
    p {
      margin: 0;
    }

    img {
      max-width: 400px;
      object-fit: cover;
    }
  `);window.customElements.define("a2k-about",ds);var ln=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,ve=(s,t,e,i)=>{for(var o=i>1?void 0:i?dn(t,e):t,n=s.length-1,r;n>=0;n--)(r=s[n])&&(o=(i?r(t,e,o):r(o))||o);return i&&o&&ln(t,e,o),o};class Et extends ${constructor(){super(...arguments),this.height=0,this.width=0,this.top=0,this.left=0}render(){const t=jt({width:`${this.width}px`,transform:`translate(${this.left}px, ${this.top}px)`}),e=jt({height:`${this.height}px`});return y`
      <div style=${t} id="outer-wrapper">
        <a2k-panel>
          <div style=${e}></div>
        </a2k-panel>
      </div>
    `}}Et.styles=x`
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
  `;ve([b({type:Number})],Et.prototype,"height",2);ve([b({type:Number})],Et.prototype,"width",2);ve([b({type:Number})],Et.prototype,"top",2);ve([b({type:Number})],Et.prototype,"left",2);window.customElements.define("a2k-broken-window",Et);const cn=y`
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
`,hn={action:"default"};class un{constructor(){B(this,"items",[]);B(this,"enqueue",(t=hn)=>{this.items.push(t)});B(this,"dequeue",()=>this.isEmpty()?void 0:this.items.shift());B(this,"isEmpty",()=>!this.items.length)}}const De=document.querySelector("body"),pn=new URL("/assets/andricos-2000-startup-774be9be.mp3",self.location),dt=document.querySelector("#windows-container"),fn=document.querySelector('a2k-icon-button[icon="documents-icon"]');fn.onOpen=()=>{window.location.href="https://andri.co"};const vn=document.querySelector('a2k-icon-button[icon="network-icon"]');vn.onOpen=()=>{const s=document.createElement("a2k-feedback");dt.append(s)};const gn=document.querySelector('a2k-icon-button[icon="github-icon"]');gn.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const mn=document.querySelector('a2k-icon-button[icon="help-icon"]');mn.onOpen=()=>{const s=document.createElement("a2k-about");dt.append(s)};const bn=document.querySelector('a2k-icon-button[icon="internet-icon"]'),St=new un;let Gt="idle";function wn(){setTimeout(()=>{Gt="off";const s=()=>{setTimeout(()=>{St.dequeue();const t=document.createElement("a2k-ie5");dt.append(t),St.isEmpty()||s()},100)};St.isEmpty()||s()},4e3)}bn.onOpen=()=>{if(Gt==="idle")Gt="queueing",St.enqueue(),wn();else if(Gt==="queueing")St.enqueue();else{const s=document.createElement("a2k-ie5");dt.append(s)}};const yn=document.querySelector('a2k-icon-button[icon="lock-icon"]');yn.onOpen=()=>{const s=document.createElement("div");dt.appendChild(s),Lt(cn,s)};let xi=!1;const _n=s=>{const{target:t,detail:e}=s,{containerEl:i}=e,o=document.querySelector("a2k-window[heading='Please wait...']");if(!o||!o.isSameNode(t))return;const{width:n,top:r,left:a,height:l}=i.getBoundingClientRect(),d=document.createElement("a2k-broken-window");dt.insertBefore(d,o),d.setAttribute("height",l),d.setAttribute("width",n),d.setAttribute("top",r),d.setAttribute("left",a)};window.addEventListener("keypress",cs);function cs(s){s.key==="e"&&s.ctrlKey&&(window.removeEventListener("keypress",cs),De.textContent="",Lt(Zo,De))}window.addEventListener("startup-progress",s=>{if(!(s.detail.progress<50)&&!xi){xi=!0;try{$n()}catch{}}});window.addEventListener("startup-progress",s=>{!s.detail.isComplete||(setTimeout(()=>{document.querySelector(".fixed-container").remove(),kn(),En()},300),setTimeout(()=>{De.removeAttribute("data-state")},500))});function $n(){const s=new Audio(pn);s.volume=.3,s.play()}function kn(){let s=0;setTimeout(()=>{Lt(Ko,dt);const t=document.querySelector("a2k-progress"),e=document.querySelector("a2k-window[heading='Please wait...']"),i=setInterval(()=>{if(!!t&&(s=s+1.2,t.setAttribute("progress",s),s>40)){for(;e.firstChild;)e.removeChild(e.lastChild);window.addEventListener("window-drag",_n),e.innerHTML=`
        <a2k-stack>
          <p>Oh no! We had a problem loading Andricos2000. Don't worry, you can still play around and find some easter eggs.</p>
          <p>Andricos2000 is a work in progress, so keep checking back (or follow me on <a href="https://twitter.com/andricokaroulla" target="_blank"
          >Twitter</a
        >) for updates :)</p>
          </a2k-stack>
        `,clearInterval(i)}},100)},700)}function En(){const s=document.querySelectorAll("a2k-icon-button");setTimeout(()=>{s.forEach(t=>{t.removeAttribute("hidden")})},1200)}
