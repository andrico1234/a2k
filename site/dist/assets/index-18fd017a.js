var so=Object.defineProperty;var no=(o,t,e)=>t in o?so(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var z=(o,t,e)=>(no(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();insights.init("qSiM34gCir3EyTFz");insights.trackPages();const Vt=window,Oe=Vt.ShadowRoot&&(Vt.ShadyCSS===void 0||Vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pe=Symbol(),ze=new WeakMap;let yi=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Pe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Oe&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ze.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ze.set(e,t))}return t}toString(){return this.cssText}};const ro=o=>new yi(typeof o=="string"?o:o+"",void 0,Pe),gt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new yi(e,o,Pe)},ao=(o,t)=>{Oe?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=Vt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},qe=Oe?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ro(e)})(o):o;var de;const Wt=window,Be=Wt.trustedTypes,lo=Be?Be.emptyScript:"",Ye=Wt.reactiveElementPolyfillSupport,ke={toAttribute(o,t){switch(t){case Boolean:o=o?lo:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},wi=(o,t)=>t!==o&&(t==t||o==o),ce={attribute:!0,type:String,converter:ke,reflect:!1,hasChanged:wi};let rt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=ce){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ce}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(qe(s))}else t!==void 0&&e.push(qe(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ao(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ce){var s;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:ke).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=s.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ke;this._$El=n,this[n]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||wi)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};rt.finalized=!0,rt.elementProperties=new Map,rt.elementStyles=[],rt.shadowRootOptions={mode:"open"},Ye==null||Ye({ReactiveElement:rt}),((de=Wt.reactiveElementVersions)!==null&&de!==void 0?de:Wt.reactiveElementVersions=[]).push("1.5.0");var he;const zt=window,ct=zt.trustedTypes,Ke=ct?ct.createPolicy("lit-html",{createHTML:o=>o}):void 0,K=`lit$${(Math.random()+"").slice(9)}$`,_i="?"+K,co=`<${_i}>`,ht=document,Ct=(o="")=>ht.createComment(o),At=o=>o===null||typeof o!="object"&&typeof o!="function",$i=Array.isArray,ho=o=>$i(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",_t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xe=/-->/g,Ge=/>/g,tt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ze=/'/g,Je=/"/g,ki=/^(?:script|style|textarea|title)$/i,uo=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),G=uo(1),it=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Qe=new WeakMap,lt=ht.createTreeWalker(ht,129,null,!1),po=(o,t)=>{const e=o.length-1,i=[];let s,n=t===2?"<svg>":"",r=_t;for(let l=0;l<e;l++){const d=o[l];let m,h,p=-1,v=0;for(;v<d.length&&(r.lastIndex=v,h=r.exec(d),h!==null);)v=r.lastIndex,r===_t?h[1]==="!--"?r=Xe:h[1]!==void 0?r=Ge:h[2]!==void 0?(ki.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=tt):h[3]!==void 0&&(r=tt):r===tt?h[0]===">"?(r=s??_t,p=-1):h[1]===void 0?p=-2:(p=r.lastIndex-h[2].length,m=h[1],r=h[3]===void 0?tt:h[3]==='"'?Je:Ze):r===Je||r===Ze?r=tt:r===Xe||r===Ge?r=_t:(r=tt,s=void 0);const b=r===tt&&o[l+1].startsWith("/>")?" ":"";n+=r===_t?d+co:p>=0?(i.push(m),d.slice(0,p)+"$lit$"+d.slice(p)+K+b):d+K+(p===-2?(i.push(void 0),l):b)}const a=n+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ke!==void 0?Ke.createHTML(a):a,i]};let qt=class{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const a=t.length-1,l=this.parts,[d,m]=po(t,e);if(this.el=qt.createElement(d,i),lt.currentNode=this.el.content,e===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(s=lt.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const p of s.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(K)){const v=m[r++];if(h.push(p),v!==void 0){const b=s.getAttribute(v.toLowerCase()+"$lit$").split(K),A=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:A[2],strings:b,ctor:A[1]==="."?vo:A[1]==="?"?mo:A[1]==="@"?bo:Qt})}else l.push({type:6,index:n})}for(const p of h)s.removeAttribute(p)}if(ki.test(s.tagName)){const h=s.textContent.split(K),p=h.length-1;if(p>0){s.textContent=ct?ct.emptyScript:"";for(let v=0;v<p;v++)s.append(h[v],Ct()),lt.nextNode(),l.push({type:2,index:++n});s.append(h[p],Ct())}}}else if(s.nodeType===8)if(s.data===_i)l.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(K,h+1))!==-1;)l.push({type:7,index:n}),h+=K.length-1}n++}}static createElement(t,e){const i=ht.createElement("template");return i.innerHTML=t,i}};function ut(o,t,e=o,i){var s,n,r,a;if(t===it)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const d=At(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),d===void 0?l=void 0:(l=new d(o),l._$AT(o,e,i)),i!==void 0?((r=(a=e)._$Co)!==null&&r!==void 0?r:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=ut(o,l._$AS(o,t.values),l,i)),t}let fo=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:ht).importNode(i,!0);lt.currentNode=n;let r=lt.nextNode(),a=0,l=0,d=s[0];for(;d!==void 0;){if(a===d.index){let m;d.type===2?m=new Jt(r,r.nextSibling,this,t):d.type===1?m=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(m=new yo(r,this,t)),this.u.push(m),d=s[++l]}a!==(d==null?void 0:d.index)&&(r=lt.nextNode(),a++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Jt=class{constructor(t,e,i,s){var n;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ut(this,t,e),At(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==it&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ho(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==P&&At(this._$AH)?this._$AA.nextSibling.data=t:this.T(ht.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=qt.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const r=new fo(n,this),a=r.v(this.options);r.p(i),this.T(a),this._$AH=r}}_$AC(t){let e=Qe.get(t.strings);return e===void 0&&Qe.set(t.strings,e=new qt(t)),e}k(t){$i(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Jt(this.O(Ct()),this.O(Ct()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Qt=class{constructor(t,e,i,s,n){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(n===void 0)t=ut(this,t,e,0),r=!At(t)||t!==this._$AH&&t!==it,r&&(this._$AH=t);else{const a=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=ut(this,a[i+l],e,l),d===it&&(d=this._$AH[l]),r||(r=!At(d)||d!==this._$AH[l]),d===P?t=P:t!==P&&(t+=(d??"")+n[l+1]),this._$AH[l]=d}r&&!s&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},vo=class extends Qt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}};const go=ct?ct.emptyScript:"";let mo=class extends Qt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,go):this.element.removeAttribute(this.name)}},bo=class extends Qt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=ut(this,t,e,0))!==null&&i!==void 0?i:P)===it)return;const s=this._$AH,n=t===P&&s!==P||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==P&&(s===P||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},yo=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ut(this,t)}};const ti=zt.litHtmlPolyfillSupport;ti==null||ti(qt,Jt),((he=zt.litHtmlVersions)!==null&&he!==void 0?he:zt.litHtmlVersions=[]).push("2.5.0");const wo=(o,t,e)=>{var i,s;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const a=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=r=new Jt(t.insertBefore(Ct(),a),a,void 0,e??{})}return r._$AI(o),r};var ue,pe;let W=class extends rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wo(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return it}};W.finalized=!0,W._$litElement$=!0,(ue=globalThis.litElementHydrateSupport)===null||ue===void 0||ue.call(globalThis,{LitElement:W});const ei=globalThis.litElementPolyfillSupport;ei==null||ei({LitElement:W});((pe=globalThis.litElementVersions)!==null&&pe!==void 0?pe:globalThis.litElementVersions=[]).push("3.2.1");let _o=class extends Event{constructor(t,e,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=i}};let $o=class{constructor(t,e,i,s=!1){this.host=t,this.context=e,this.callback=i,this.subscribe=s,this.provided=!1,this.value=void 0,this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new _o(this.context,(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.subscribe))}};let ko=class{constructor(t){this.callbacks=new Map,this.updateObservers=()=>{for(const[e,i]of this.callbacks)e(this.t,i)},t!==void 0&&(this.value=t)}get value(){return this.t}set value(t){this.setValue(t)}setValue(t,e=!1){const i=e||!Object.is(t,this.t);this.t=t,i&&this.updateObservers()}addCallback(t,e){e&&(this.callbacks.has(t)||this.callbacks.set(t,()=>{this.callbacks.delete(t)})),t(this.value)}clearCallbacks(){this.callbacks.clear()}};let Eo=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}},Co=class extends ko{constructor(t,e,i){super(i),this.host=t,this.context=e,this.onContextRequest=s=>{s.context===this.context&&s.composedPath()[0]!==this.host&&(s.stopPropagation(),this.addCallback(s.callback,s.subscribe))},this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new Eo(this.context))}};const Ei=({finisher:o,descriptor:t})=>(e,i)=>{var s;if(i===void 0){const n=(s=e.originalKey)!==null&&s!==void 0?s:e.key,r=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return o!=null&&(r.finisher=function(a){o(a,n)}),r}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o==null||o(n,i)}};function Ao({context:o}){return Ei({finisher:(t,e)=>{const i=new WeakMap;t.addInitializer(a=>{i.set(a,new Co(a,o))});const s=Object.getOwnPropertyDescriptor(t.prototype,e),n=s==null?void 0:s.set,r={...s,set:function(a){var l;(l=i.get(this))===null||l===void 0||l.setValue(a),n&&n.call(this,a)}};Object.defineProperty(t.prototype,e,r)}})}function xo({context:o,subscribe:t}){return Ei({finisher:(e,i)=>{e.addInitializer(s=>{new $o(s,o,n=>{s[i]=n},t)})}})}const So=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function q(o){return(t,e)=>e!==void 0?((i,s,n)=>{s.constructor.createProperty(n,i)})(o,t,e):So(o,t)}var fe;((fe=window.HTMLSlotElement)===null||fe===void 0?void 0:fe.prototype.assignedElements)!=null;const To={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Oo=o=>(...t)=>({_$litDirective$:o,values:t});let Po=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const Ro=Oo(class extends Po{constructor(o){var t;if(super(o),o.type!==To.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const i=o[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[t]){const{style:e}=o.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const s=t[i];s!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,s):e[i]=s)}return it}});class Mo{constructor(t,e=1e3){this.value=new Date,this.host=t,this.host.addController(this),this.timeout=e}hostConnected(){this.intervalId=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this.intervalId),this.intervalId=void 0}}class Y{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:kt(t)&&(this.id=t.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const t=this.nativePointer.getCoalescedEvents().map(e=>new Y(e));if(t.length>0)return t}return[this]}}const kt=o=>"pointerId"in o,ve=o=>"changedTouches"in o,ii=()=>{};class jo{constructor(t,{start:e=()=>!0,move:i=ii,end:s=ii,rawUpdates:n=!1,avoidPointerEvents:r=!1}={}){this._element=t,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=a=>{if(kt(a)&&a.buttons===0)this._excludeFromButtonsCheck.add(a.pointerId);else if(!(a.buttons&1))return;const l=new Y(a);this.currentPointers.some(d=>d.id===l.id)||!this._triggerPointerStart(l,a)||(kt(a)?((a.target&&"setPointerCapture"in a.target?a.target:this._element).setPointerCapture(a.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd),this._element.addEventListener("pointercancel",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerStart(new Y(l),a)},this._move=a=>{if(!ve(a)&&(!kt(a)||!this._excludeFromButtonsCheck.has(a.pointerId))&&a.buttons===0){this._pointerEnd(a);return}const l=this.currentPointers.slice(),d=ve(a)?Array.from(a.changedTouches).map(h=>new Y(h)):[new Y(a)],m=[];for(const h of d){const p=this.currentPointers.findIndex(v=>v.id===h.id);p!==-1&&(m.push(h),this.currentPointers[p]=h)}m.length!==0&&this._moveCallback(l,m,a)},this._triggerPointerEnd=(a,l)=>{if(!ve(l)&&l.buttons&1)return!1;const d=this.currentPointers.findIndex(h=>h.id===a.id);if(d===-1)return!1;this.currentPointers.splice(d,1),this.startPointers.splice(d,1),this._excludeFromButtonsCheck.delete(a.id);const m=!(l.type==="mouseup"||l.type==="touchend"||l.type==="pointerup");return this._endCallback(a,l,m),!0},this._pointerEnd=a=>{if(!!this._triggerPointerEnd(new Y(a),a))if(kt(a)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=a=>{for(const l of Array.from(a.changedTouches))this._triggerPointerEnd(new Y(l),a)},this._startCallback=e,this._moveCallback=i,this._endCallback=s,this._rawUpdates=n&&"onpointerrawupdate"in window,self.PointerEvent&&!r?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(t,e){return this._startCallback(t,e)?(this.currentPointers.push(t),this.startPointers.push(t),!0):!1}}var ge=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(o):i?i.value:t.get(o)},Ee,Ce,Ae;const oi={initialPosition:{},getContainerEl:()=>null,getDraggableEl:()=>Promise.resolve(null),getIsDraggable:()=>!0};class Uo{constructor(t,e=oi){this.cursorPositionX=0,this.cursorPositionY=0,this.draggableEl=null,this.state="idle",this.pointerTracker=null,this.styles={position:"absolute",touchAction:"none",top:"0px",left:"0px"},Ee.set(this,r=>(this.cursorPositionX=Math.floor(r.pageX),this.cursorPositionY=Math.floor(r.pageY),!0)),Ce.set(this,(r,a)=>{const[l]=a,d=this.draggableEl,m=new CustomEvent("window-drag",{bubbles:!0,composed:!0,detail:{pointer:l,containerEl:this.getContainerEl(),draggableEl:d}});this.host.dispatchEvent(m),this.handleWindowMove(l)}),Ae.set(this,(r,a)=>{a.target.removeAttribute("data-state")}),this.host=t,this.host.addController(this),this.getContainerEl=e.getContainerEl,this.getIsDraggable=e.getIsDraggable??oi.getIsDraggable,e.getDraggableEl().then(r=>{if(!r){console.warn("getDraggableEl() did not return an element HTMLElement");return}this.draggableEl=r,this.init()});const{initialPosition:i}=e,{x:s=0,y:n=0}=i;this.x=s,this.y=n,this.updateElPosition()}init(){const t=ge(this,Ce,"f"),e=ge(this,Ee,"f"),i=ge(this,Ae,"f"),s=this.host,n=r=>this.state=r;this.pointerTracker=new jo(this.draggableEl,{start(r){return e(r),n("dragging"),s.requestUpdate(),!0},move(r,a){t(r,a)},end(r,a){i(r,a),n("idle"),s.requestUpdate()}})}hostDisconnected(){this.pointerTracker&&this.pointerTracker.stop()}updateElPosition(){this.styles.transform=`translate(${this.x}px, ${this.y}px)`}handleWindowMove(t){const e=this.draggableEl,i=this.getContainerEl();if(!e||!i||!this.getIsDraggable())return;const n=this.x,r=this.y,a=Math.floor(t.pageX),l=Math.floor(t.pageY);if(a!==this.cursorPositionX||l!==this.cursorPositionY){const{bottom:m,height:h}=e.getBoundingClientRect(),{right:p,width:v}=i.getBoundingClientRect(),b=a-this.cursorPositionX,A=l-this.cursorPositionY;this.x=n+b,this.y=r+A,this.cursorPositionX=a,this.cursorPositionY=l;const I=this.y<0,V=this.x<0,Q=m+A>window.innerHeight,M=p+b>=window.innerWidth;I&&(this.y=0),V&&(this.x=0),Q&&(this.y=window.innerHeight-h),M&&(this.x=Math.floor(window.innerWidth-v)),this.updateElPosition(),this.host.requestUpdate()}}}Ee=new WeakMap,Ce=new WeakMap,Ae=new WeakMap;const Dt=(o,t=100)=>Math.round(o*t)/t,Fo=(o,t)=>o<=t?o:t,Ci="window-context";let It;const Lo=new Uint8Array(16);function Io(){if(!It&&(It=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!It))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return It(Lo)}const R=[];for(let o=0;o<256;++o)R.push((o+256).toString(16).slice(1));function Vo(o,t=0){return(R[o[t+0]]+R[o[t+1]]+R[o[t+2]]+R[o[t+3]]+"-"+R[o[t+4]]+R[o[t+5]]+"-"+R[o[t+6]]+R[o[t+7]]+"-"+R[o[t+8]]+R[o[t+9]]+"-"+R[o[t+10]]+R[o[t+11]]+R[o[t+12]]+R[o[t+13]]+R[o[t+14]]+R[o[t+15]]).toLowerCase()}const Do=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),si={randomUUID:Do};function No(o,t,e){if(si.randomUUID&&!t&&!o)return si.randomUUID();o=o||{};const i=o.random||(o.rng||Io)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){e=e||0;for(let s=0;s<16;++s)t[e+s]=i[s];return t}return Vo(i)}const Nt=window,Re=Nt.ShadowRoot&&(Nt.ShadyCSS===void 0||Nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Me=Symbol(),ni=new WeakMap;let Ai=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Re&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ni.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ni.set(e,t))}return t}toString(){return this.cssText}};const Ho=o=>new Ai(typeof o=="string"?o:o+"",void 0,Me),x=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new Ai(e,o,Me)},Wo=(o,t)=>{Re?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=Nt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},ri=Re?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ho(e)})(o):o;var me;const Bt=window,ai=Bt.trustedTypes,zo=ai?ai.emptyScript:"",li=Bt.reactiveElementPolyfillSupport,xe={toAttribute(o,t){switch(t){case Boolean:o=o?zo:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},xi=(o,t)=>t!==o&&(t==t||o==o),be={attribute:!0,type:String,converter:xe,reflect:!1,hasChanged:xi};let at=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=be){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||be}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(ri(s))}else t!==void 0&&e.push(ri(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Wo(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=be){var s;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:xe).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=s.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:xe;this._$El=n,this[n]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||xi)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};at.finalized=!0,at.elementProperties=new Map,at.elementStyles=[],at.shadowRootOptions={mode:"open"},li==null||li({ReactiveElement:at}),((me=Bt.reactiveElementVersions)!==null&&me!==void 0?me:Bt.reactiveElementVersions=[]).push("1.5.0");var ye;const Yt=window,pt=Yt.trustedTypes,di=pt?pt.createPolicy("lit-html",{createHTML:o=>o}):void 0,X=`lit$${(Math.random()+"").slice(9)}$`,Si="?"+X,qo=`<${Si}>`,ft=document,xt=(o="")=>ft.createComment(o),St=o=>o===null||typeof o!="object"&&typeof o!="function",Ti=Array.isArray,Bo=o=>Ti(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",$t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ci=/-->/g,hi=/>/g,et=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ui=/'/g,pi=/"/g,Oi=/^(?:script|style|textarea|title)$/i,Pi=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),y=Pi(1),Yo=Pi(2),Z=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),fi=new WeakMap,dt=ft.createTreeWalker(ft,129,null,!1),Ko=(o,t)=>{const e=o.length-1,i=[];let s,n=t===2?"<svg>":"",r=$t;for(let l=0;l<e;l++){const d=o[l];let m,h,p=-1,v=0;for(;v<d.length&&(r.lastIndex=v,h=r.exec(d),h!==null);)v=r.lastIndex,r===$t?h[1]==="!--"?r=ci:h[1]!==void 0?r=hi:h[2]!==void 0?(Oi.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=et):h[3]!==void 0&&(r=et):r===et?h[0]===">"?(r=s??$t,p=-1):h[1]===void 0?p=-2:(p=r.lastIndex-h[2].length,m=h[1],r=h[3]===void 0?et:h[3]==='"'?pi:ui):r===pi||r===ui?r=et:r===ci||r===hi?r=$t:(r=et,s=void 0);const b=r===et&&o[l+1].startsWith("/>")?" ":"";n+=r===$t?d+qo:p>=0?(i.push(m),d.slice(0,p)+"$lit$"+d.slice(p)+X+b):d+X+(p===-2?(i.push(void 0),l):b)}const a=n+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[di!==void 0?di.createHTML(a):a,i]};class Tt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const a=t.length-1,l=this.parts,[d,m]=Ko(t,e);if(this.el=Tt.createElement(d,i),dt.currentNode=this.el.content,e===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(s=dt.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const p of s.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(X)){const v=m[r++];if(h.push(p),v!==void 0){const b=s.getAttribute(v.toLowerCase()+"$lit$").split(X),A=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:A[2],strings:b,ctor:A[1]==="."?Go:A[1]==="?"?Jo:A[1]==="@"?Qo:te})}else l.push({type:6,index:n})}for(const p of h)s.removeAttribute(p)}if(Oi.test(s.tagName)){const h=s.textContent.split(X),p=h.length-1;if(p>0){s.textContent=pt?pt.emptyScript:"";for(let v=0;v<p;v++)s.append(h[v],xt()),dt.nextNode(),l.push({type:2,index:++n});s.append(h[p],xt())}}}else if(s.nodeType===8)if(s.data===Si)l.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(X,h+1))!==-1;)l.push({type:7,index:n}),h+=X.length-1}n++}}static createElement(t,e){const i=ft.createElement("template");return i.innerHTML=t,i}}function vt(o,t,e=o,i){var s,n,r,a;if(t===Z)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const d=St(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),d===void 0?l=void 0:(l=new d(o),l._$AT(o,e,i)),i!==void 0?((r=(a=e)._$Co)!==null&&r!==void 0?r:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=vt(o,l._$AS(o,t.values),l,i)),t}class Xo{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:ft).importNode(i,!0);dt.currentNode=n;let r=dt.nextNode(),a=0,l=0,d=s[0];for(;d!==void 0;){if(a===d.index){let m;d.type===2?m=new Ot(r,r.nextSibling,this,t):d.type===1?m=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(m=new ts(r,this,t)),this.u.push(m),d=s[++l]}a!==(d==null?void 0:d.index)&&(r=dt.nextNode(),a++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Ot{constructor(t,e,i,s){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=vt(this,t,e),St(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==Z&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Bo(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==O&&St(this._$AH)?this._$AA.nextSibling.data=t:this.T(ft.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Tt.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const r=new Xo(n,this),a=r.v(this.options);r.p(i),this.T(a),this._$AH=r}}_$AC(t){let e=fi.get(t.strings);return e===void 0&&fi.set(t.strings,e=new Tt(t)),e}k(t){Ti(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Ot(this.O(xt()),this.O(xt()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class te{constructor(t,e,i,s,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(n===void 0)t=vt(this,t,e,0),r=!St(t)||t!==this._$AH&&t!==Z,r&&(this._$AH=t);else{const a=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=vt(this,a[i+l],e,l),d===Z&&(d=this._$AH[l]),r||(r=!St(d)||d!==this._$AH[l]),d===O?t=O:t!==O&&(t+=(d??"")+n[l+1]),this._$AH[l]=d}r&&!s&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Go extends te{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}}const Zo=pt?pt.emptyScript:"";class Jo extends te{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,Zo):this.element.removeAttribute(this.name)}}class Qo extends te{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=vt(this,t,e,0))!==null&&i!==void 0?i:O)===Z)return;const s=this._$AH,n=t===O&&s!==O||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==O&&(s===O||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class ts{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){vt(this,t)}}const vi=Yt.litHtmlPolyfillSupport;vi==null||vi(Tt,Ot),((ye=Yt.litHtmlVersions)!==null&&ye!==void 0?ye:Yt.litHtmlVersions=[]).push("2.5.0");const ee=(o,t,e)=>{var i,s;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const a=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=r=new Ot(t.insertBefore(xt(),a),a,void 0,e??{})}return r._$AI(o),r};var we,_e;class C extends at{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ee(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Z}}C.finalized=!0,C._$litElement$=!0,(we=globalThis.litElementHydrateSupport)===null||we===void 0||we.call(globalThis,{LitElement:C});const gi=globalThis.litElementPolyfillSupport;gi==null||gi({LitElement:C});((_e=globalThis.litElementVersions)!==null&&_e!==void 0?_e:globalThis.litElementVersions=[]).push("3.2.1");class Ri extends C{render(){return y`<div id="stack">
      <slot></slot>
    </div>`}}Ri.styles=x`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;window.customElements.define("a2k-stack",Ri);class Mi extends C{render(){return y` <div id="panel">
      <slot></slot>
    </div>`}}Mi.styles=x`
    :host {
      box-sizing: border-box;
    }

    #panel {
      border: var(--panel-border);
      background-color: var(--panel-color-background);
      box-shadow: var(--panel-shadow);
    }
  `;window.customElements.define("a2k-panel",Mi);class ji extends W{render(){return G`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `}}ji.styles=gt`
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
  `;window.customElements.define("a2k-window-topbar",ji);const Pt=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:s,elements:n}=i;return{kind:s,elements:n,finisher(r){customElements.define(e,r)}}})(o,t);const es=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function _(o){return(t,e)=>e!==void 0?((i,s,n)=>{s.constructor.createProperty(n,i)})(o,t,e):es(o,t)}function je(o){return _({...o,state:!0})}const Ui=({finisher:o,descriptor:t})=>(e,i)=>{var s;if(i===void 0){const n=(s=e.originalKey)!==null&&s!==void 0?s:e.key,r=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return o!=null&&(r.finisher=function(a){o(a,n)}),r}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o==null||o(n,i)}};function Ue(o,t){return Ui({descriptor:e=>{const i={get(){var s,n;return(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var n,r;return this[s]===void 0&&(this[s]=(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&r!==void 0?r:null),this[s]}}return i}})}var $e;const is=(($e=window.HTMLSlotElement)===null||$e===void 0?void 0:$e.prototype.assignedElements)!=null?(o,t)=>o.assignedElements(t):(o,t)=>o.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function os(o){const{slot:t,selector:e}=o??{};return Ui({descriptor:i=>({get(){var s;const n="slot"+(t?`[name=${t}]`:":not([name])"),r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n),a=r!=null?is(r,o):[];return e?a.filter(l=>l.matches(e)):a},enumerable:!0,configurable:!0})})}var $=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(o):i?i.value:t.get(o)},j=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,i,s){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!s:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?s.call(o,e):s?s.value=e:t.set(o,e),e};function ss(o){var t,e,i,s,n,r,a,l,d,m,h,p,v,b,A,I,V;class Q extends o{constructor(...c){super(...c),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),s.set(this,!1),n.set(this,void 0),r.set(this,void 0),a.set(this,""),l.set(this,()=>{j(this,s,!0,"f"),j(this,e,!0,"f"),$(this,t,"m",b).call(this)}),d.set(this,()=>{j(this,e,!1,"f"),$(this,t,"m",A).call(this,this.shouldFormValueUpdate()?$(this,a,"f"):""),!this.validity.valid&&$(this,s,"f")&&j(this,i,!0,"f");const u=$(this,t,"m",b).call(this);this.validationMessageCallback&&this.validationMessageCallback(u?this.internals.validationMessage:"")}),m.set(this,()=>{var u;j(this,i,!0,"f"),$(this,t,"m",b).call(this),(u=this===null||this===void 0?void 0:this.validationMessageCallback)===null||u===void 0||u.call(this,this.showError?this.internals.validationMessage:"")}),h.set(this,void 0),p.set(this,!1),v.set(this,Promise.resolve()),this.addEventListener("focus",$(this,l,"f")),this.addEventListener("blur",$(this,d,"f")),this.addEventListener("invalid",$(this,m,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const c=this.validators.map(f=>f.attribute),u=super.observedAttributes||[];return[...new Set([...u,...c])]}static getValidator(c){return this.validators.find(u=>u.attribute===c)||null}get form(){return this.internals.form}get showError(){return $(this,t,"m",b).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(c,u,g){var f;(f=super.attributeChangedCallback)===null||f===void 0||f.call(this,c,u,g),this.constructor.getValidator(c)&&this.validationTarget&&this.setValue($(this,a,"f"))}setValue(c){var u;j(this,i,!1,"f"),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,""),j(this,a,c,"f");const f=this.shouldFormValueUpdate()?c:null;this.internals.setFormValue(f),$(this,t,"m",A).call(this,f),this.valueChangedCallback&&this.valueChangedCallback(f),$(this,t,"m",b).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(c=>c($(this,v,"f")))}formResetCallback(){var c,u;j(this,s,!1,"f"),j(this,i,!1,"f"),$(this,t,"m",b).call(this),(c=this.resetFormControl)===null||c===void 0||c.call(this),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,$(this,t,"m",b).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,s=new WeakMap,n=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,d=new WeakMap,m=new WeakMap,h=new WeakMap,p=new WeakMap,v=new WeakMap,t=new WeakSet,b=function(){if(this.hasAttribute("disabled"))return!1;const c=$(this,i,"f")||$(this,s,"f")&&!this.validity.valid&&!$(this,e,"f");return c&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),c},A=function(c){const u=this.constructor,g={},f=u.validators,D=[];$(this,p,"f")||(j(this,v,new Promise(w=>{j(this,h,w,"f")}),"f"),j(this,p,!0,"f")),$(this,n,"f")&&($(this,n,"f").abort(),j(this,r,$(this,n,"f"),"f"));const S=new AbortController;j(this,n,S,"f");let L,B=!1;!f.length||(f.forEach(w=>{const N=w.key||"customError",T=w.isValid(this,c,S.signal);T instanceof Promise?(D.push(T),T.then(H=>{H!=null&&(g[N]=!H,L=$(this,t,"m",V).call(this,w,c),$(this,t,"m",I).call(this,g,L))})):(g[N]=!T,this.validity[N]!==!T&&(B=!0),T||(L=$(this,t,"m",V).call(this,w,c)))}),Promise.allSettled(D).then(()=>{var w;S!=null&&S.signal.aborted||(j(this,p,!1,"f"),(w=$(this,h,"f"))===null||w===void 0||w.call(this))}),B&&$(this,t,"m",I).call(this,g,L))},I=function(c,u){if(this.validationTarget)this.internals.setValidity(c,u,this.validationTarget);else{if(this.internals.setValidity(c,u),this.internals.validity.valid)return;let g=0;const f=setInterval(()=>{g>=100||this.validity.valid?clearInterval(f):this.validationTarget&&(this.internals.setValidity(this.validity,u,this.validationTarget),clearInterval(f)),g+=1},0)}},V=function(c,u){if(this.validityCallback){const g=this.validityCallback(c.key||"customError");if(g)return g}return c.message instanceof Function?c.message(this,u):c.message},Q}var Fe=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},Le=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Rt extends ss(C){constructor(){super(...arguments),this.disabled=!1,this.type="",this.size="medium"}handleSubmit(){this.form.requestSubmit()}connectedCallback(){super.connectedCallback(),!this.type&&this.form?this.type:this.type,this.type==="submit"&&this.addEventListener("click",this.handleSubmit)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleSubmit)}render(){return y` <button
      data-size="${this.size}"
      aria-label="${this.ariaLabel||O}"
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`}}Rt.styles=x`
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
  `;Fe([_({type:Boolean}),Le("design:type",Object)],Rt.prototype,"disabled",void 0);Fe([_({type:String}),Le("design:type",Object)],Rt.prototype,"type",void 0);Fe([_({type:String}),Le("design:type",String)],Rt.prototype,"size",void 0);window.customElements.define("a2k-button",Rt);var ns=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},rs=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};const as=new URL("/assets/a2k-icons-b650a9b4.svg",self.location).href;class Ie extends C{constructor(){super(...arguments),this.icon=""}render(){return this.icon||console.warn("This icon is a missing a 'name', please specify the 'name' of the icon you want to display"),Yo`
      <svg height="1em" width="1em">
        <use href="${as}#${this.icon}"></use>
      </svg>
    `}}Ie.styles=x`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;ns([_({type:String}),rs("design:type",Object)],Ie.prototype,"icon",void 0);window.customElements.define("a2k-icon",Ie);var ls=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},ds=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Ve extends W{constructor(){super(...arguments),this.closeable=!1}handleClose(t){const e=new Event("close",{bubbles:!0,composed:!0});t.target.dispatchEvent(e)}render(){return G`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
      aria-label="Close Window"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `}}Ve.styles=gt`
    :host {
      position: absolute;
      right: 2px;
    }

    #icon-wrapper {
      font-size: 8px;
    }
  `;ls([q({type:Boolean}),ds("design:type",Object)],Ve.prototype,"closeable",void 0);window.customElements.define("a2k-window-actions",Ve);var mt=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},bt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class J extends W{async getDraggableEl(){return await this.updateComplete,this.shadowRoot.querySelector("#draggable")}constructor(){super(),this.id=No(),this.heading="",this.draggable=!1,this.closeable=!1,this.x=32,this.y=32,this.drag=new Uo(this,{initialPosition:{},getContainerEl:()=>this.shadowRoot.querySelector("#window"),getDraggableEl:()=>this.getDraggableEl(),getIsDraggable:()=>this.draggable}),this.addEventListener("close",()=>this.remove())}connectedCallback(){if(super.connectedCallback(),this.windows){this.windows.registerWindow(this.id);const t=this.windows.count;this.x=t*32,this.y=t*32}}disconnectedCallback(){super.disconnectedCallback(),this.windows&&this.windows.unregisterWindow(this.id)}firstUpdated(){const{x:t,y:e}=this.drag,{offsetWidth:i}=this.renderRoot.querySelector("#window"),s=Fo(screen.availWidth,innerWidth);this.drag.x=this.x,this.drag.y=this.y,this.drag.updateElPosition(),t+i>s&&(this.drag.styles.transform=`translate(0px, ${e}px)`),this.requestUpdate()}render(){return G`
      <div id="window" style=${Ro(this.drag.styles)}>
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
    `}}J.styles=gt`
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
  `;mt([xo({context:Ci,subscribe:!0}),q({type:String}),bt("design:type",Object)],J.prototype,"windows",void 0);mt([q({type:String}),bt("design:type",Object)],J.prototype,"heading",void 0);mt([q({type:Boolean}),bt("design:type",Object)],J.prototype,"draggable",void 0);mt([q({type:Boolean}),bt("design:type",Object)],J.prototype,"closeable",void 0);mt([q({type:Number}),bt("design:type",Object)],J.prototype,"x",void 0);mt([q({type:Number}),bt("design:type",Object)],J.prototype,"y",void 0);window.customElements.define("a2k-window",J);var cs=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},hs=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Fi extends W{constructor(){super(...arguments),this.windowContext={windows:[],get count(){return this.windows.length},registerWindow:t=>{this.windowContext.windows.push({id:t})},unregisterWindow:t=>{const i=this.windowContext.windows.map(({id:s})=>s).indexOf(t);i!==-1&&this.windowContext.windows.splice(i,1)}}}render(){return G`<div>
      <slot></slot>
    </div>`}}cs([Ao({context:Ci}),q({attribute:!1}),hs("design:type",Object)],Fi.prototype,"windowContext",void 0);window.customElements.define("a2k-window-context",Fi);class Li extends W{render(){return G`<div id="toolbar">
        <slot></slot>
      </div>
      <div id="separator"></div>`}}Li.styles=gt`
    #toolbar {
      border-color: var(--color-gray-300) var(--color-gray-700)
        var(--color-gray-700) var(--color-gray-300);
      border-width: 2px;
      border-style: solid;
    }

    #separator {
      border-bottom: 5px solid var(--color-gray-400);
    }
  `;window.customElements.define("a2k-window-toolbar",Li);class Ii extends W{render(){return G`<div id="item">
      <slot></slot>
    </div>`}}Ii.styles=gt`
    #item {
      border-color: var(--color-gray-700) var(--color-gray-300)
        var(--color-gray-300) var(--color-gray-700);
      border-width: var(--border-width);
      border-style: solid;
      padding: var(--spacing-50);
      background-color: var(--window-toolbar-item-color-background);
    }
  `;window.customElements.define("a2k-window-toolbar-item",Ii);var Vi=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},Di=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class ie extends W{constructor(){super(...arguments),this.statusOne="",this.statusTwo=""}render(){return G`
      <div id="separator"></div>
      <div id="content">
        <div class="section">
          <p>${this.statusOne}</p>
        </div>

        ${this.statusTwo?G` <div class="section-separator"></div>
              <div class="section"><p>${this.statusTwo}</p></div>`:null}
      </div>
    `}}ie.styles=gt`
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
  `;Vi([q({type:String}),Di("design:type",Object)],ie.prototype,"statusOne",void 0);Vi([q({type:String}),Di("design:type",Object)],ie.prototype,"statusTwo",void 0);window.customElements.define("a2k-window-status-bar",ie);class Ni extends C{render(){return y`<div id="cover">
      <div>
        <slot name="heading"></slot>
      </div>
      <div>
        <slot name="principal"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>`}}Ni.styles=x`
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
  `;window.customElements.define("a2k-cover",Ni);class Hi extends C{render(){return y`
      <div id="wrapper">
        <a2k-cover>
          <div slot="heading"><slot></slot></div>
        </a2k-cover>
      </div>
    `}}Hi.styles=x`
    #wrapper {
      background: var(--blue-screen-color-background);
    }

    [slot="heading"] {
      color: var(--blue-screen-font-color);
      font-weight: var(--blue-screen-font-weight);
      font-size: var(--blue-screen-font-size);
    }
  `;window.customElements.define("a2k-blue-screen",Hi);var Wi=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},us=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let Kt=class extends C{constructor(){super(...arguments),this.open=!1}render(){return y`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `}};Kt.styles=x`
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
  `;Wi([_(),us("design:type",Object)],Kt.prototype,"open",void 0);Kt=Wi([Pt("a2k-start-menu-item")],Kt);var zi=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},ps=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let Xt=class extends C{constructor(){super(...arguments),this.open=!1}handleAboutClick(){const t=y` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;ee(t,document.body)}handleShutdownClick(){location.reload()}render(){const t=String(this.open)==="true";return y`
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
    `}};Xt.styles=x`
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
  `;zi([_(),ps("design:type",Object)],Xt.prototype,"open",void 0);Xt=zi([Pt("a2k-start-menu")],Xt);var qi=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},fs=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let Gt=class extends C{constructor(){super(...arguments),this._hideOnClickOutside=t=>{t.composedPath().includes(this)||(this._isMenuOpen=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._isMenuOpen=!1}_toggleMenu(){const t=!this._isMenuOpen;t?document.addEventListener("click",this._hideOnClickOutside):document.removeEventListener("click",this._hideOnClickOutside),this._isMenuOpen=t}render(){return y`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `}};Gt.styles=x`
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
  `;qi([je(),fs("design:type",Object)],Gt.prototype,"_isMenuOpen",void 0);Gt=qi([Pt("a2k-start-button")],Gt);var vs=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n};let Se=class extends C{constructor(){super(...arguments),this.clock=new Mo(this)}render(){const t=gs.format(this.clock.value);return y`<div class="utility-bar">${t}</div>`}};Se.styles=x`
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
  `;Se=vs([Pt("a2k-utility-bar")],Se);const gs=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"});class Bi extends C{render(){return y`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`}}Bi.styles=x`
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
  `;window.customElements.define("a2k-taskbar",Bi);const Yi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ki=o=>(...t)=>({_$litDirective$:o,values:t});let Xi=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const ms=Ki(class extends Xi{constructor(o){var t;if(super(o),o.type!==Yi.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,i;if(this.nt===void 0){this.nt=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((e=this.st)===null||e===void 0)&&e.has(n))&&this.nt.add(n);return this.render(t)}const s=o.element.classList;this.nt.forEach(n=>{n in t||(s.remove(n),this.nt.delete(n))});for(const n in t){const r=!!t[n];r===this.nt.has(n)||((i=this.st)===null||i===void 0?void 0:i.has(n))||(r?(s.add(n),this.nt.add(n)):(s.remove(n),this.nt.delete(n)))}return Z}});var Gi=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},bs=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};let Zt=class extends C{constructor(){super(...arguments),this.filled="none"}render(){const t={"half-filled":this.filled!=="none",filled:this.filled==="filled"};return y`<div class=${ms(t)} id="unit">
      <div></div>
      <div></div>
    </div>`}};Zt.styles=x`
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
  `;Gi([_(),bs("design:type",String)],Zt.prototype,"filled",void 0);Zt=Gi([Pt("a2k-progress-unit")],Zt);var ys=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},ws=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class De extends C{constructor(){super(...arguments),this.progress=0,this.width=0}async updated(t){this.width||this.generateProgressUnits(),t.has("progress")&&this.updateProgressUnits()}async generateProgressUnits(){const t=this.renderRoot.querySelector("#progress");if(!t)return;await this.updateComplete;const e=t.getBoundingClientRect().width??0;if(this.width===e)return;this.width=e;const{gap:i}=getComputedStyle(t),n=Number(i.replace("px",""))+12,r=Math.ceil(e/n);Array(r).fill(0).forEach(()=>{const a=document.createElement("a2k-progress-unit");a.setAttribute("filled","none"),t==null||t.appendChild(a)})}async updateProgressUnits(){await this.updateComplete;const t=this.renderRoot.querySelectorAll("a2k-progress-unit"),e=this.progress/100*t.length,i=_s(e),s=Math.floor(e);t.forEach((n,r)=>{r<s?n.setAttribute("filled","filled"):r===s&&i>=.5?n.setAttribute("filled","half"):n.setAttribute("filled","none")})}render(){return y`
      <div aria-label="Loading progress" id="progress" role="progressbar"></div>
    `}}De.styles=x`
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
  `;ys([_({type:Number}),ws("design:type",Object)],De.prototype,"progress",void 0);const _s=o=>Math.floor(o%1*10)/10;window.customElements.define("a2k-progress",De);var k=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(o):i?i.value:t.get(o)},U=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,i,s){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!s:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?s.call(o,e):s?s.value=e:t.set(o,e),e};function $s(o){var t,e,i,s,n,r,a,l,d,m,h,p,v,b,A,I,V;class Q extends o{constructor(...c){super(...c),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),s.set(this,!1),n.set(this,void 0),r.set(this,void 0),a.set(this,""),l.set(this,()=>{U(this,s,!0,"f"),U(this,e,!0,"f"),k(this,t,"m",b).call(this)}),d.set(this,()=>{U(this,e,!1,"f"),k(this,t,"m",A).call(this,this.shouldFormValueUpdate()?k(this,a,"f"):""),!this.validity.valid&&k(this,s,"f")&&U(this,i,!0,"f");const u=k(this,t,"m",b).call(this);this.validationMessageCallback&&this.validationMessageCallback(u?this.internals.validationMessage:"")}),m.set(this,()=>{var u;U(this,i,!0,"f"),k(this,t,"m",b).call(this),(u=this===null||this===void 0?void 0:this.validationMessageCallback)===null||u===void 0||u.call(this,this.showError?this.internals.validationMessage:"")}),h.set(this,void 0),p.set(this,!1),v.set(this,Promise.resolve()),this.addEventListener("focus",k(this,l,"f")),this.addEventListener("blur",k(this,d,"f")),this.addEventListener("invalid",k(this,m,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const c=this.validators.map(f=>f.attribute),u=super.observedAttributes||[];return[...new Set([...u,...c])]}static getValidator(c){return this.validators.find(u=>u.attribute===c)||null}get form(){return this.internals.form}get showError(){return k(this,t,"m",b).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(c,u,g){var f;(f=super.attributeChangedCallback)===null||f===void 0||f.call(this,c,u,g),this.constructor.getValidator(c)&&this.validationTarget&&this.setValue(k(this,a,"f"))}setValue(c){var u;U(this,i,!1,"f"),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,""),U(this,a,c,"f");const f=this.shouldFormValueUpdate()?c:null;this.internals.setFormValue(f),k(this,t,"m",A).call(this,f),this.valueChangedCallback&&this.valueChangedCallback(f),k(this,t,"m",b).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(c=>c(k(this,v,"f")))}formResetCallback(){var c,u;U(this,s,!1,"f"),U(this,i,!1,"f"),k(this,t,"m",b).call(this),(c=this.resetFormControl)===null||c===void 0||c.call(this),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,k(this,t,"m",b).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,s=new WeakMap,n=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,d=new WeakMap,m=new WeakMap,h=new WeakMap,p=new WeakMap,v=new WeakMap,t=new WeakSet,b=function(){if(this.hasAttribute("disabled"))return!1;const c=k(this,i,"f")||k(this,s,"f")&&!this.validity.valid&&!k(this,e,"f");return c&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),c},A=function(c){const u=this.constructor,g={},f=u.validators,D=[];k(this,p,"f")||(U(this,v,new Promise(w=>{U(this,h,w,"f")}),"f"),U(this,p,!0,"f")),k(this,n,"f")&&(k(this,n,"f").abort(),U(this,r,k(this,n,"f"),"f"));const S=new AbortController;U(this,n,S,"f");let L,B=!1;!f.length||(f.forEach(w=>{const N=w.key||"customError",T=w.isValid(this,c,S.signal);T instanceof Promise?(D.push(T),T.then(H=>{H!=null&&(g[N]=!H,L=k(this,t,"m",V).call(this,w,c),k(this,t,"m",I).call(this,g,L))})):(g[N]=!T,this.validity[N]!==!T&&(B=!0),T||(L=k(this,t,"m",V).call(this,w,c)))}),Promise.allSettled(D).then(()=>{var w;S!=null&&S.signal.aborted||(U(this,p,!1,"f"),(w=k(this,h,"f"))===null||w===void 0||w.call(this))}),B&&k(this,t,"m",I).call(this,g,L))},I=function(c,u){if(this.validationTarget)this.internals.setValidity(c,u,this.validationTarget);else{if(this.internals.setValidity(c,u),this.internals.validity.valid)return;let g=0;const f=setInterval(()=>{g>=100||this.validity.valid?clearInterval(f):this.validationTarget&&(this.internals.setValidity(this.validity,u,this.validationTarget),clearInterval(f)),g+=1},0)}},V=function(c,u){if(this.validityCallback){const g=this.validityCallback(c.key||"customError");if(g)return g}return c.message instanceof Function?c.message(this,u):c.message},Q}var oe=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},se=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class yt extends $s(C){constructor(){super(...arguments),this.defaultValue="",this.name="",this.label="",this.placeholder=""}static get formAssociated(){return!0}handleInputChange(t){const e=t.target;this.setValue(e.value);const i=new Event("change",{composed:!0,bubbles:!0});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.label&&(this.label=`${this.label}:`)}render(){return y`
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
    `}}yt.styles=x`
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
  `;oe([_(),se("design:type",Object)],yt.prototype,"defaultValue",void 0);oe([_(),se("design:type",Object)],yt.prototype,"name",void 0);oe([_(),se("design:type",Object)],yt.prototype,"label",void 0);oe([_(),se("design:type",Object)],yt.prototype,"placeholder",void 0);window.customElements.define("a2k-text-field",yt);var E=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,i){if(e==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?i:e==="a"?i.call(o):i?i.value:t.get(o)},F=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,i,s){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!s:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?s.call(o,e):s?s.value=e:t.set(o,e),e};function ks(o){var t,e,i,s,n,r,a,l,d,m,h,p,v,b,A,I,V;class Q extends o{constructor(...c){super(...c),t.add(this),this.internals=this.attachInternals(),e.set(this,!1),i.set(this,!1),s.set(this,!1),n.set(this,void 0),r.set(this,void 0),a.set(this,""),l.set(this,()=>{F(this,s,!0,"f"),F(this,e,!0,"f"),E(this,t,"m",b).call(this)}),d.set(this,()=>{F(this,e,!1,"f"),E(this,t,"m",A).call(this,this.shouldFormValueUpdate()?E(this,a,"f"):""),!this.validity.valid&&E(this,s,"f")&&F(this,i,!0,"f");const u=E(this,t,"m",b).call(this);this.validationMessageCallback&&this.validationMessageCallback(u?this.internals.validationMessage:"")}),m.set(this,()=>{var u;F(this,i,!0,"f"),E(this,t,"m",b).call(this),(u=this===null||this===void 0?void 0:this.validationMessageCallback)===null||u===void 0||u.call(this,this.showError?this.internals.validationMessage:"")}),h.set(this,void 0),p.set(this,!1),v.set(this,Promise.resolve()),this.addEventListener("focus",E(this,l,"f")),this.addEventListener("blur",E(this,d,"f")),this.addEventListener("invalid",E(this,m,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const c=this.validators.map(f=>f.attribute),u=super.observedAttributes||[];return[...new Set([...u,...c])]}static getValidator(c){return this.validators.find(u=>u.attribute===c)||null}get form(){return this.internals.form}get showError(){return E(this,t,"m",b).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(c,u,g){var f;(f=super.attributeChangedCallback)===null||f===void 0||f.call(this,c,u,g),this.constructor.getValidator(c)&&this.validationTarget&&this.setValue(E(this,a,"f"))}setValue(c){var u;F(this,i,!1,"f"),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,""),F(this,a,c,"f");const f=this.shouldFormValueUpdate()?c:null;this.internals.setFormValue(f),E(this,t,"m",A).call(this,f),this.valueChangedCallback&&this.valueChangedCallback(f),E(this,t,"m",b).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(c=>c(E(this,v,"f")))}formResetCallback(){var c,u;F(this,s,!1,"f"),F(this,i,!1,"f"),E(this,t,"m",b).call(this),(c=this.resetFormControl)===null||c===void 0||c.call(this),(u=this.validationMessageCallback)===null||u===void 0||u.call(this,E(this,t,"m",b).call(this)?this.validationMessage:"")}}return e=new WeakMap,i=new WeakMap,s=new WeakMap,n=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,d=new WeakMap,m=new WeakMap,h=new WeakMap,p=new WeakMap,v=new WeakMap,t=new WeakSet,b=function(){if(this.hasAttribute("disabled"))return!1;const c=E(this,i,"f")||E(this,s,"f")&&!this.validity.valid&&!E(this,e,"f");return c&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),c},A=function(c){const u=this.constructor,g={},f=u.validators,D=[];E(this,p,"f")||(F(this,v,new Promise(w=>{F(this,h,w,"f")}),"f"),F(this,p,!0,"f")),E(this,n,"f")&&(E(this,n,"f").abort(),F(this,r,E(this,n,"f"),"f"));const S=new AbortController;F(this,n,S,"f");let L,B=!1;!f.length||(f.forEach(w=>{const N=w.key||"customError",T=w.isValid(this,c,S.signal);T instanceof Promise?(D.push(T),T.then(H=>{H!=null&&(g[N]=!H,L=E(this,t,"m",V).call(this,w,c),E(this,t,"m",I).call(this,g,L))})):(g[N]=!T,this.validity[N]!==!T&&(B=!0),T||(L=E(this,t,"m",V).call(this,w,c)))}),Promise.allSettled(D).then(()=>{var w;S!=null&&S.signal.aborted||(F(this,p,!1,"f"),(w=E(this,h,"f"))===null||w===void 0||w.call(this))}),B&&E(this,t,"m",I).call(this,g,L))},I=function(c,u){if(this.validationTarget)this.internals.setValidity(c,u,this.validationTarget);else{if(this.internals.setValidity(c,u),this.internals.validity.valid)return;let g=0;const f=setInterval(()=>{g>=100||this.validity.valid?clearInterval(f):this.validationTarget&&(this.internals.setValidity(this.validity,u,this.validationTarget),clearInterval(f)),g+=1},0)}},V=function(c,u){if(this.validityCallback){const g=this.validityCallback(c.key||"customError");if(g)return g}return c.message instanceof Function?c.message(this,u):c.message},Q}var Mt=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},jt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class ot extends ks(C){constructor(){super(...arguments),this.label="",this.selectedItem=null,this.name="",this.expanded=!1,this.placeholder="Choose an option",this._options=[],this._openListbox=()=>{this.expanded||(this.expanded=!0,document.addEventListener("click",this._hideOnClickOutside))},this._closeListbox=()=>{!this.expanded||(this.expanded=!1,document.removeEventListener("click",this._hideOnClickOutside))},this._hideOnClickOutside=t=>{t.composedPath().includes(this)||this._closeListbox()}}handleKeyDown(t){t.key==="Escape"&&this.expanded?this._closeListbox():t.key==="Escape"&&!this.expanded&&this.handleSetValue(null)}handleSelectKeyDown(t){(t.key==="ArrowDown"||t.key==="Enter"||t.code==="Space")&&(this.expanded?this.moveFocusToOption(0):this._openListbox())}moveFocusToOption(t){this._options[t].focus()}handleSelectClick(){this.expanded?this._closeListbox():this._openListbox()}handleSetValue(t){const e=t||null;this.selectedItem=e,this.setValue((e==null?void 0:e.value)||"");const i=new Event("change",{composed:!0,bubbles:!0});this.dispatchEvent(i)}handleOptionSelect(t){const e=t.target;if(e.tagName!=="OPTION")return;const i={value:e.value,label:e.innerText};this.handleSetValue(i),this._closeListbox()}handleOptionKeyDown(t){if((t.key==="Enter"||t.code==="Space")&&this.handleOptionSelect(t),t.key==="ArrowDown"){const e=t.target;e.nextElementSibling?e.nextElementSibling.focus():this.moveFocusToOption(0)}if(t.key==="ArrowUp"){const e=t.target;if(e.previousElementSibling)e.previousElementSibling.focus();else{const s=this._options.length;this.moveFocusToOption(s-1)}}}toggleButton(){return y`<a2k-button tabindex="-1" aria-label="Open Select" size="small">
      <a2k-icon icon="chevron-icon"></a2k-icon>
    </a2k-button> `}handleSlotchange(t){const i=t.target.assignedElements();i.forEach(s=>{s.setAttribute("tabindex","0")}),this._options=i}connectedCallback(){super.connectedCallback(),this.label&&(this.label=`${this.label}:`),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown)}render(){var t;return y`
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
    `}}ot.styles=x`
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
  `;Mt([_({type:String}),jt("design:type",Object)],ot.prototype,"label",void 0);Mt([_({type:String}),jt("design:type",Object)],ot.prototype,"selectedItem",void 0);Mt([_({type:String}),jt("design:type",Object)],ot.prototype,"name",void 0);Mt([je(),jt("design:type",Object)],ot.prototype,"expanded",void 0);Mt([_({type:String}),jt("design:type",Object)],ot.prototype,"placeholder",void 0);window.customElements.define("a2k-select",ot);const Te=Ki(class extends Xi{constructor(o){var t;if(super(o),o.type!==Yi.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const i=o[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[t]){const{style:e}=o.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const s=t[i];s!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,s):e[i]=s)}return Z}});var Zi=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},Ji=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class ne extends C{constructor(){super(...arguments),this.slotHeightStyles={height:"0px"}}firstUpdated(){const t=getComputedStyle(this.desktopContainer).height;this.slotHeightStyles={height:t}}render(){return y`<div id="desktop">
      <slot id="slot" style=${Te(this.slotHeightStyles)}></slot>
    </div>`}}ne.styles=x`
    #desktop {
      height: 100%;
    }

    #desktop > slot {
      display: flex;
      flex-flow: column wrap;
      width: fit-content;
    }
  `;Zi([_(),Ji("design:type",Object)],ne.prototype,"slotHeightStyles",void 0);Zi([Ue("#desktop"),Ji("design:type",HTMLSlotElement)],ne.prototype,"desktopContainer",void 0);window.customElements.define("a2k-desktop",ne);var Ne=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},He=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class Ut extends C{constructor(){super(...arguments),this.text="",this.icon="",this.onOpen=()=>null}render(){return y` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`}}Ut.styles=x`
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
  `;Ne([_({type:String}),He("design:type",Object)],Ut.prototype,"text",void 0);Ne([_({type:String}),He("design:type",Object)],Ut.prototype,"icon",void 0);Ne([_(),He("design:type",Object)],Ut.prototype,"onOpen",void 0);window.customElements.define("a2k-icon-button",Ut);const Es=(o,t)=>{const e=o/t,i=t/o*100,s=Array(e).fill(i),n=s.length;for(let r=0;r<1e3;r++){const a=Math.floor(Math.random()*n),l=s[a],d=Math.floor(Math.random()*n),m=s[d],h=Dt(Math.random()*l),p=Dt(l-h),v=Dt(m+h);s[a]=p,s[d]=v}return s};var Ft=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},Lt=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};const Cs=["Booting Up..."],As=o=>new CustomEvent("startup-progress",{bubbles:!0,composed:!0,detail:o});class st extends C{constructor(){super(...arguments),this.startupTime=3e3,this.intervalRef=null,this.currentStep=0,this.state="idle",this.image="",this.footerText="Copyright Ⓒ 1999-2000. Andricos2000",this.messages=Cs,this.progress=0,this.interval=50,this.handleStart=()=>{this.state="loading",document.querySelector("body").setAttribute("data-state","waiting"),this.beginLoading()},this.beginLoading=()=>{const t=Es(this.startupTime,this.interval);this.intervalRef=setInterval(()=>{const e=t[this.currentStep]??0,i=Dt(this.progress+e),s=As({progress:i,isComplete:i>=100});this.dispatchEvent(s),i>=100?(clearInterval(this.intervalRef),this.progress=100):(this.progress=i,this.currentStep++)},this.interval)}}disconnectedCallback(){this.intervalRef&&clearInterval(this.intervalRef)}render(){return this.state==="idle"?y`
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
    `}}st.styles=x`
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
  `;Ft([_({type:String}),Lt("design:type",Object)],st.prototype,"state",void 0);Ft([_({type:String}),Lt("design:type",Object)],st.prototype,"image",void 0);Ft([_({type:String}),Lt("design:type",Object)],st.prototype,"footerText",void 0);Ft([_(),Lt("design:type",Object)],st.prototype,"messages",void 0);Ft([_(),Lt("design:type",Object)],st.prototype,"progress",void 0);window.customElements.define("a2k-startup",st);var Qi=globalThis&&globalThis.__decorate||function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},to=globalThis&&globalThis.__metadata||function(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)};class re extends C{firstUpdated(){const[t]=this.slotEl,e=t.cloneNode(!0);this.marqueeWrapperEl.appendChild(e)}render(){return y`<div id="marquee">
      <div id="marquee-inner-1">
        <slot name="text"></slot>
      </div>
      <div id="marquee-inner-2"></div>
    </div>`}}re.styles=x`
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
  `;Qi([os({slot:"text"}),to("design:type",Array)],re.prototype,"slotEl",void 0);Qi([Ue("#marquee-inner-2"),to("design:type",HTMLElement)],re.prototype,"marqueeWrapperEl",void 0);window.customElements.define("a2k-marquee",re);const xs=o=>{const t=new FormData(o),e={};for(const[i,s]of t.entries())e.hasOwnProperty(i)?Array.isArray(e[i])?e[i].push(s):e[i]=[e[i],s]:e[i]=s;return e},mi=o=>{const t=xs(o),e={};return Object.entries(t).forEach(([i,s])=>{if(i.includes(".")){const n=i.split("."),r=n.pop();let a=e;for(;n.length;){const l=n.shift();a[l]=a[l]||{},a=a[l]}a[r]=s}else e[i]=t[i]}),e};var Ss=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,eo=(o,t,e,i)=>{for(var s=i>1?void 0:i?Ts(t,e):t,n=o.length-1,r;n>=0;n--)(r=o[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Ss(t,e,s),s};const Os="https://github.com/andrico1234/a2k",Ps="https://twitter.com/andricokaroulla",Rs=()=>y`
    <a2k-text-field
      label="Feedback"
      placeholder="e.g. it's dope!"
      name="details"
    ></a2k-text-field>
  `,Ms=()=>y`
    <a2k-text-field
      label="Ideas"
      placeholder="e.g. more easter eggs"
      name="details"
    ></a2k-text-field>
  `,js=()=>y`
    <a2k-text-field
      label="Issues"
      placeholder="e.g. i'm on Chrome and it's broken"
      name="details"
    ></a2k-text-field>
  `,Us=()=>y`
    <a2k-text-field
      label="Your email"
      placeholder="e.g. andrico@example.com"
      name="details"
    ></a2k-text-field>
  `,Fs=()=>y`
    <div>
      <p>
        Thanks! You can show your support by giving
        <a href="${Os}">a2k</a> a star on GitHub.
      </p>
      <p>
        You can also follow me on <a href="${Ps}">Twitter</a> to follow
        progress.
      </p>
    </div>
  `,Ls={feature:Ms,problem:js,hire:Us,support:Fs};class ae extends C{constructor(){super(...arguments),this.activeContent=""}submit(t){t.preventDefault();const e=t.target,{select:i="none",details:s=""}=mi(e);window.insights.track({id:"feedback",parameters:{type:i,details:s}})}updateActiveContent(){const{select:t}=mi(this.formEl);this.activeContent=t?t.toString():""}handleFormChange(){this.updateActiveContent()}handleChange(){this.updateActiveContent()}render(){const t=Ls[this.activeContent];return y`
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

              ${t?t():Rs()}
              <a2k-button type="submit">Submit</a2k-button>
            </a2k-stack>
          </form>
        </a2k-window>
      </div>
    `}}ae.styles=x`
    :host {
      --window-width: 400px;
    }

    #container {
      width: 320px;
    }

    form {
      margin-block: var(--spacing-100);
    }
  `;eo([Ue("form")],ae.prototype,"formEl",2);eo([je()],ae.prototype,"activeContent",2);window.customElements.define("a2k-feedback",ae);const Is=y`
  <a2k-window heading="Please wait..." draggable closeable>
    <p class="heading">Andricos<span>2000</span></p>
    <a2k-stack>
      <p>Andricos2000 is starting up...</p>
      <a2k-progress></a2k-progress>
    </a2k-stack>
  </a2k-window>
`;navigator.platform.includes("Mac");class io extends C{constructor(){super(...arguments);z(this,"connection","");z(this,"handleOnline",()=>{connection="Online"});z(this,"handleOffline",()=>{connection="Offline"})}connectedCallback(){super.connectedCallback(),this.addEventListener("online",this.handleOnline),this.addEventListener("offline",this.handleOffline),this.connection=navigator.onLine?"Online":"Offline"}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("online",this.handleOnline),this.removeEventListener("offline",this.handleOffline)}render(){return y` <a2k-window draggable closeable heading="Internet Explorer 5">
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
    </a2k-window>`}}z(io,"styles",x`
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
  `);window.customElements.define("a2k-ie5",io);class oo extends C{render(){return y` <a2k-window draggable closeable heading="About Andricos2000">
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
    </a2k-window>`}}z(oo,"styles",x`
    p {
      margin: 0;
    }

    img {
      max-width: 400px;
      object-fit: cover;
    }
  `);window.customElements.define("a2k-about",oo);var Vs=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,le=(o,t,e,i)=>{for(var s=i>1?void 0:i?Ds(t,e):t,n=o.length-1,r;n>=0;n--)(r=o[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Vs(t,e,s),s};class wt extends C{constructor(){super(...arguments),this.height=0,this.width=0,this.top=0,this.left=0}render(){const t=Te({width:`${this.width}px`,transform:`translate(${this.left}px, ${this.top}px)`}),e=Te({height:`${this.height}px`});return y`
      <div style=${t} id="outer-wrapper">
        <a2k-panel>
          <div style=${e}></div>
        </a2k-panel>
      </div>
    `}}wt.styles=x`
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
  `;le([_()],wt.prototype,"height",2);le([_()],wt.prototype,"width",2);le([_()],wt.prototype,"top",2);le([_()],wt.prototype,"left",2);window.customElements.define("a2k-broken-window",wt);const Ns=y`
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
`,Hs={action:"default"};class Ws{constructor(){z(this,"items",[]);z(this,"enqueue",(t=Hs)=>{this.items.push(t)});z(this,"dequeue",()=>this.isEmpty()?void 0:this.items.shift());z(this,"isEmpty",()=>!this.items.length)}}const zs=document.querySelector("body"),qs=new URL("/assets/andricos-2000-startup-774be9be.mp3",self.location),nt=document.querySelector("#windows-container"),Bs=document.querySelector('a2k-icon-button[icon="documents-icon"]');Bs.onOpen=()=>{window.location.href="https://andri.co"};const Ys=document.querySelector('a2k-icon-button[icon="network-icon"]');Ys.onOpen=()=>{const o=document.createElement("a2k-feedback");nt.append(o)};const Ks=document.querySelector('a2k-icon-button[icon="github-icon"]');Ks.onOpen=()=>{window.location.href="https://github.com/andrico1234/a2k"};const Xs=document.querySelector('a2k-icon-button[icon="help-icon"]');Xs.onOpen=()=>{const o=document.createElement("a2k-about");nt.append(o)};const Gs=document.querySelector('a2k-icon-button[icon="internet-icon"]'),Et=new Ws;let Ht="idle";function Zs(){setTimeout(()=>{Ht="off";const o=()=>{setTimeout(()=>{Et.dequeue();const t=document.createElement("a2k-ie5");nt.append(t),Et.isEmpty()||o()},100)};Et.isEmpty()||o()},4e3)}Gs.onOpen=()=>{if(Ht==="idle")Ht="queueing",Et.enqueue(),Zs();else if(Ht==="queueing")Et.enqueue();else{const o=document.createElement("a2k-ie5");nt.append(o)}};const Js=document.querySelector('a2k-icon-button[icon="lock-icon"]');Js.onOpen=()=>{const o=document.createElement("div");nt.appendChild(o),ee(Ns,o)};let bi=!1;const Qs=o=>{const{target:t,detail:e}=o,{containerEl:i}=e,s=document.querySelector("a2k-window[heading='Please wait...']");if(!s||!s.isSameNode(t))return;const{width:n,top:r,left:a,height:l}=i.getBoundingClientRect(),d=document.createElement("a2k-broken-window");nt.insertBefore(d,s),d.setAttribute("height",l),d.setAttribute("width",n),d.setAttribute("top",r),d.setAttribute("left",a)};window.addEventListener("keypress",tn);function tn(){}window.addEventListener("startup-progress",o=>{if(!(o.detail.progress<50)&&!bi){bi=!0;try{en()}catch{}}});window.addEventListener("startup-progress",o=>{!o.detail.isComplete||(setTimeout(()=>{document.querySelector(".fixed-container").remove(),on(),sn()},300),setTimeout(()=>{zs.removeAttribute("data-state")},500))});function en(){const o=new Audio(qs);o.volume=.3,o.play()}function on(){let o=0;setTimeout(()=>{ee(Is,nt);const t=document.querySelector("a2k-progress"),e=document.querySelector("a2k-window[heading='Please wait...']"),i=setInterval(()=>{if(!!t&&(o=o+1.2,t.setAttribute("progress",o),o>40)){for(;e.firstChild;)e.removeChild(e.lastChild);window.addEventListener("window-drag",Qs),e.innerHTML=`
        <a2k-stack>
          <p>Oh no! We had a problem loading Andricos2000. Don't worry, you can still play around and find some easter eggs.</p>
          <p>Andricos2000 is a work in progress, so keep checking back (or follow me on <a href="https://twitter.com/andricokaroulla" target="_blank"
          >Twitter</a
        >) for updates :)</p>
          </a2k-stack>
        `,clearInterval(i)}},100)},700)}function sn(){const o=document.querySelectorAll("a2k-icon-button");setTimeout(()=>{o.forEach(t=>{t.removeAttribute("hidden")})},1200)}
