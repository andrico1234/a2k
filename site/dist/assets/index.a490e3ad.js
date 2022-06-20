const Ft = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = e(o);
    fetch(o.href, i);
  }
};
Ft();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const it =
    window.ShadowRoot &&
    (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  nt = Symbol(),
  wt = new Map();
class Rt {
  constructor(t, e) {
    if (((this._$cssResult$ = !0), e !== nt))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    this.cssText = t;
  }
  get styleSheet() {
    let t = wt.get(this.cssText);
    return (
      it &&
        t === void 0 &&
        (wt.set(this.cssText, (t = new CSSStyleSheet())),
        t.replaceSync(this.cssText)),
      t
    );
  }
  toString() {
    return this.cssText;
  }
}
const Vt = (n) => new Rt(typeof n == "string" ? n : n + "", nt),
  b = (n, ...t) => {
    const e =
      n.length === 1
        ? n[0]
        : t.reduce(
            (r, o, i) =>
              r +
              ((s) => {
                if (s._$cssResult$ === !0) return s.cssText;
                if (typeof s == "number") return s;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    s +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(o) +
              n[i + 1],
            n[0]
          );
    return new Rt(e, nt);
  },
  Kt = (n, t) => {
    it
      ? (n.adoptedStyleSheets = t.map((e) =>
          e instanceof CSSStyleSheet ? e : e.styleSheet
        ))
      : t.forEach((e) => {
          const r = document.createElement("style"),
            o = window.litNonce;
          o !== void 0 && r.setAttribute("nonce", o),
            (r.textContent = e.cssText),
            n.appendChild(r);
        });
  },
  _t = it
    ? (n) => n
    : (n) =>
        n instanceof CSSStyleSheet
          ? ((t) => {
              let e = "";
              for (const r of t.cssRules) e += r.cssText;
              return Vt(e);
            })(n)
          : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var q;
const yt = window.trustedTypes,
  Zt = yt ? yt.emptyScript : "",
  $t = window.reactiveElementPolyfillSupport,
  Q = {
    toAttribute(n, t) {
      switch (t) {
        case Boolean:
          n = n ? Zt : null;
          break;
        case Object:
        case Array:
          n = n == null ? n : JSON.stringify(n);
      }
      return n;
    },
    fromAttribute(n, t) {
      let e = n;
      switch (t) {
        case Boolean:
          e = n !== null;
          break;
        case Number:
          e = n === null ? null : Number(n);
          break;
        case Object:
        case Array:
          try {
            e = JSON.parse(n);
          } catch {
            e = null;
          }
      }
      return e;
    },
  },
  Ut = (n, t) => t !== n && (t == t || n == n),
  F = {
    attribute: !0,
    type: String,
    converter: Q,
    reflect: !1,
    hasChanged: Ut,
  };
class k extends HTMLElement {
  constructor() {
    super(),
      (this._$Et = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$Ei = null),
      this.o();
  }
  static addInitializer(t) {
    var e;
    ((e = this.l) !== null && e !== void 0) || (this.l = []), this.l.push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this.elementProperties.forEach((e, r) => {
        const o = this._$Eh(r, e);
        o !== void 0 && (this._$Eu.set(o, r), t.push(o));
      }),
      t
    );
  }
  static createProperty(t, e = F) {
    if (
      (e.state && (e.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, e),
      !e.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const r = typeof t == "symbol" ? Symbol() : "__" + t,
        o = this.getPropertyDescriptor(t, r, e);
      o !== void 0 && Object.defineProperty(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    return {
      get() {
        return this[e];
      },
      set(o) {
        const i = this[t];
        (this[e] = o), this.requestUpdate(t, i, r);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || F;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (
      (t.finalize(),
      (this.elementProperties = new Map(t.elementProperties)),
      (this._$Eu = new Map()),
      this.hasOwnProperty("properties"))
    ) {
      const e = this.properties,
        r = [
          ...Object.getOwnPropertyNames(e),
          ...Object.getOwnPropertySymbols(e),
        ];
      for (const o of r) this.createProperty(o, e[o]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const o of r) e.unshift(_t(o));
    } else t !== void 0 && e.push(_t(t));
    return e;
  }
  static _$Eh(t, e) {
    const r = e.attribute;
    return r === !1
      ? void 0
      : typeof r == "string"
      ? r
      : typeof t == "string"
      ? t.toLowerCase()
      : void 0;
  }
  o() {
    var t;
    (this._$Ep = new Promise((e) => (this.enableUpdating = e))),
      (this._$AL = new Map()),
      this._$Em(),
      this.requestUpdate(),
      (t = this.constructor.l) === null ||
        t === void 0 ||
        t.forEach((e) => e(this));
  }
  addController(t) {
    var e, r;
    ((e = this._$Eg) !== null && e !== void 0 ? e : (this._$Eg = [])).push(t),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((r = t.hostConnected) === null || r === void 0 || r.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$Eg) === null ||
      e === void 0 ||
      e.splice(this._$Eg.indexOf(t) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Et.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e =
      (t = this.shadowRoot) !== null && t !== void 0
        ? t
        : this.attachShadow(this.constructor.shadowRootOptions);
    return Kt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (t = this._$Eg) === null ||
        t === void 0 ||
        t.forEach((e) => {
          var r;
          return (r = e.hostConnected) === null || r === void 0
            ? void 0
            : r.call(e);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    (t = this._$Eg) === null ||
      t === void 0 ||
      t.forEach((e) => {
        var r;
        return (r = e.hostDisconnected) === null || r === void 0
          ? void 0
          : r.call(e);
      });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ES(t, e, r = F) {
    var o, i;
    const s = this.constructor._$Eh(t, r);
    if (s !== void 0 && r.reflect === !0) {
      const a = (
        (i =
          (o = r.converter) === null || o === void 0
            ? void 0
            : o.toAttribute) !== null && i !== void 0
          ? i
          : Q.toAttribute
      )(e, r.type);
      (this._$Ei = t),
        a == null ? this.removeAttribute(s) : this.setAttribute(s, a),
        (this._$Ei = null);
    }
  }
  _$AK(t, e) {
    var r, o, i;
    const s = this.constructor,
      a = s._$Eu.get(t);
    if (a !== void 0 && this._$Ei !== a) {
      const l = s.getPropertyOptions(a),
        d = l.converter,
        u =
          (i =
            (o =
              (r = d) === null || r === void 0 ? void 0 : r.fromAttribute) !==
              null && o !== void 0
              ? o
              : typeof d == "function"
              ? d
              : null) !== null && i !== void 0
            ? i
            : Q.fromAttribute;
      (this._$Ei = a), (this[a] = u(e, l.type)), (this._$Ei = null);
    }
  }
  requestUpdate(t, e, r) {
    let o = !0;
    t !== void 0 &&
      (((r = r || this.constructor.getPropertyOptions(t)).hasChanged || Ut)(
        this[t],
        e
      )
        ? (this._$AL.has(t) || this._$AL.set(t, e),
          r.reflect === !0 &&
            this._$Ei !== t &&
            (this._$E_ === void 0 && (this._$E_ = new Map()),
            this._$E_.set(t, r)))
        : (o = !1)),
      !this.isUpdatePending && o && (this._$Ep = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = !0;
    try {
      await this._$Ep;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Et &&
        (this._$Et.forEach((o, i) => (this[i] = o)), (this._$Et = void 0));
    let e = !1;
    const r = this._$AL;
    try {
      (e = this.shouldUpdate(r)),
        e
          ? (this.willUpdate(r),
            (t = this._$Eg) === null ||
              t === void 0 ||
              t.forEach((o) => {
                var i;
                return (i = o.hostUpdate) === null || i === void 0
                  ? void 0
                  : i.call(o);
              }),
            this.update(r))
          : this._$EU();
    } catch (o) {
      throw ((e = !1), this._$EU(), o);
    }
    e && this._$AE(r);
  }
  willUpdate(t) {}
  _$AE(t) {
    var e;
    (e = this._$Eg) === null ||
      e === void 0 ||
      e.forEach((r) => {
        var o;
        return (o = r.hostUpdated) === null || o === void 0
          ? void 0
          : o.call(r);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$EU() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$E_ !== void 0 &&
      (this._$E_.forEach((e, r) => this._$ES(r, this[r], e)),
      (this._$E_ = void 0)),
      this._$EU();
  }
  updated(t) {}
  firstUpdated(t) {}
}
(k.finalized = !0),
  (k.elementProperties = new Map()),
  (k.elementStyles = []),
  (k.shadowRootOptions = { mode: "open" }),
  $t == null || $t({ ReactiveElement: k }),
  ((q = globalThis.reactiveElementVersions) !== null && q !== void 0
    ? q
    : (globalThis.reactiveElementVersions = [])
  ).push("1.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var V;
const T = globalThis.trustedTypes,
  xt = T ? T.createPolicy("lit-html", { createHTML: (n) => n }) : void 0,
  $ = `lit$${(Math.random() + "").slice(9)}$`,
  jt = "?" + $,
  Gt = `<${jt}>`,
  S = document,
  R = (n = "") => S.createComment(n),
  U = (n) => n === null || (typeof n != "object" && typeof n != "function"),
  Lt = Array.isArray,
  Jt = (n) => {
    var t;
    return (
      Lt(n) ||
      typeof ((t = n) === null || t === void 0 ? void 0 : t[Symbol.iterator]) ==
        "function"
    );
  },
  C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Et = /-->/g,
  kt = />/g,
  x =
    />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
  At = /'/g,
  Tt = /"/g,
  Mt = /^(?:script|style|textarea)$/i,
  zt =
    (n) =>
    (t, ...e) => ({ _$litType$: n, strings: t, values: e }),
  v = zt(1),
  Qt = zt(2),
  w = Symbol.for("lit-noChange"),
  p = Symbol.for("lit-nothing"),
  St = new WeakMap(),
  Dt = (n, t, e) => {
    var r, o;
    const i =
      (r = e == null ? void 0 : e.renderBefore) !== null && r !== void 0
        ? r
        : t;
    let s = i._$litPart$;
    if (s === void 0) {
      const a =
        (o = e == null ? void 0 : e.renderBefore) !== null && o !== void 0
          ? o
          : null;
      i._$litPart$ = s = new L(
        t.insertBefore(R(), a),
        a,
        void 0,
        e != null ? e : {}
      );
    }
    return s._$AI(n), s;
  },
  A = S.createTreeWalker(S, 129, null, !1),
  te = (n, t) => {
    const e = n.length - 1,
      r = [];
    let o,
      i = t === 2 ? "<svg>" : "",
      s = C;
    for (let l = 0; l < e; l++) {
      const d = n[l];
      let u,
        c,
        h = -1,
        f = 0;
      for (; f < d.length && ((s.lastIndex = f), (c = s.exec(d)), c !== null); )
        (f = s.lastIndex),
          s === C
            ? c[1] === "!--"
              ? (s = Et)
              : c[1] !== void 0
              ? (s = kt)
              : c[2] !== void 0
              ? (Mt.test(c[2]) && (o = RegExp("</" + c[2], "g")), (s = x))
              : c[3] !== void 0 && (s = x)
            : s === x
            ? c[0] === ">"
              ? ((s = o != null ? o : C), (h = -1))
              : c[1] === void 0
              ? (h = -2)
              : ((h = s.lastIndex - c[2].length),
                (u = c[1]),
                (s = c[3] === void 0 ? x : c[3] === '"' ? Tt : At))
            : s === Tt || s === At
            ? (s = x)
            : s === Et || s === kt
            ? (s = C)
            : ((s = x), (o = void 0));
      const E = s === x && n[l + 1].startsWith("/>") ? " " : "";
      i +=
        s === C
          ? d + Gt
          : h >= 0
          ? (r.push(u), d.slice(0, h) + "$lit$" + d.slice(h) + $ + E)
          : d + $ + (h === -2 ? (r.push(void 0), l) : E);
    }
    const a = i + (n[e] || "<?>") + (t === 2 ? "</svg>" : "");
    return [xt !== void 0 ? xt.createHTML(a) : a, r];
  };
class j {
  constructor({ strings: t, _$litType$: e }, r) {
    let o;
    this.parts = [];
    let i = 0,
      s = 0;
    const a = t.length - 1,
      l = this.parts,
      [d, u] = te(t, e);
    if (
      ((this.el = j.createElement(d, r)),
      (A.currentNode = this.el.content),
      e === 2)
    ) {
      const c = this.el.content,
        h = c.firstChild;
      h.remove(), c.append(...h.childNodes);
    }
    for (; (o = A.nextNode()) !== null && l.length < a; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) {
          const c = [];
          for (const h of o.getAttributeNames())
            if (h.endsWith("$lit$") || h.startsWith($)) {
              const f = u[s++];
              if ((c.push(h), f !== void 0)) {
                const E = o.getAttribute(f.toLowerCase() + "$lit$").split($),
                  _ = /([.?@])?(.*)/.exec(f);
                l.push({
                  type: 1,
                  index: i,
                  name: _[2],
                  strings: E,
                  ctor:
                    _[1] === "."
                      ? re
                      : _[1] === "?"
                      ? ie
                      : _[1] === "@"
                      ? ne
                      : Y,
                });
              } else l.push({ type: 6, index: i });
            }
          for (const h of c) o.removeAttribute(h);
        }
        if (Mt.test(o.tagName)) {
          const c = o.textContent.split($),
            h = c.length - 1;
          if (h > 0) {
            o.textContent = T ? T.emptyScript : "";
            for (let f = 0; f < h; f++)
              o.append(c[f], R()),
                A.nextNode(),
                l.push({ type: 2, index: ++i });
            o.append(c[h], R());
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === jt) l.push({ type: 2, index: i });
        else {
          let c = -1;
          for (; (c = o.data.indexOf($, c + 1)) !== -1; )
            l.push({ type: 7, index: i }), (c += $.length - 1);
        }
      i++;
    }
  }
  static createElement(t, e) {
    const r = S.createElement("template");
    return (r.innerHTML = t), r;
  }
}
function P(n, t, e = n, r) {
  var o, i, s, a;
  if (t === w) return t;
  let l =
    r !== void 0
      ? (o = e._$Cl) === null || o === void 0
        ? void 0
        : o[r]
      : e._$Cu;
  const d = U(t) ? void 0 : t._$litDirective$;
  return (
    (l == null ? void 0 : l.constructor) !== d &&
      ((i = l == null ? void 0 : l._$AO) === null ||
        i === void 0 ||
        i.call(l, !1),
      d === void 0 ? (l = void 0) : ((l = new d(n)), l._$AT(n, e, r)),
      r !== void 0
        ? (((s = (a = e)._$Cl) !== null && s !== void 0 ? s : (a._$Cl = []))[
            r
          ] = l)
        : (e._$Cu = l)),
    l !== void 0 && (t = P(n, l._$AS(n, t.values), l, r)),
    t
  );
}
class ee {
  constructor(t, e) {
    (this.v = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t) {
    var e;
    const {
        el: { content: r },
        parts: o,
      } = this._$AD,
      i = (
        (e = t == null ? void 0 : t.creationScope) !== null && e !== void 0
          ? e
          : S
      ).importNode(r, !0);
    A.currentNode = i;
    let s = A.nextNode(),
      a = 0,
      l = 0,
      d = o[0];
    for (; d !== void 0; ) {
      if (a === d.index) {
        let u;
        d.type === 2
          ? (u = new L(s, s.nextSibling, this, t))
          : d.type === 1
          ? (u = new d.ctor(s, d.name, d.strings, this, t))
          : d.type === 6 && (u = new se(s, this, t)),
          this.v.push(u),
          (d = o[++l]);
      }
      a !== (d == null ? void 0 : d.index) && ((s = A.nextNode()), a++);
    }
    return i;
  }
  m(t) {
    let e = 0;
    for (const r of this.v)
      r !== void 0 &&
        (r.strings !== void 0
          ? (r._$AI(t, r, e), (e += r.strings.length - 2))
          : r._$AI(t[e])),
        e++;
  }
}
class L {
  constructor(t, e, r, o) {
    var i;
    (this.type = 2),
      (this._$AH = p),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = r),
      (this.options = o),
      (this._$Cg =
        (i = o == null ? void 0 : o.isConnected) === null || i === void 0 || i);
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !==
      null && e !== void 0
      ? e
      : this._$Cg;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    (t = P(this, t, e)),
      U(t)
        ? t === p || t == null || t === ""
          ? (this._$AH !== p && this._$AR(), (this._$AH = p))
          : t !== this._$AH && t !== w && this.$(t)
        : t._$litType$ !== void 0
        ? this.T(t)
        : t.nodeType !== void 0
        ? this.S(t)
        : Jt(t)
        ? this.M(t)
        : this.$(t);
  }
  A(t, e = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, e);
  }
  S(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.A(t)));
  }
  $(t) {
    this._$AH !== p && U(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.S(S.createTextNode(t)),
      (this._$AH = t);
  }
  T(t) {
    var e;
    const { values: r, _$litType$: o } = t,
      i =
        typeof o == "number"
          ? this._$AC(t)
          : (o.el === void 0 && (o.el = j.createElement(o.h, this.options)), o);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === i)
      this._$AH.m(r);
    else {
      const s = new ee(i, this),
        a = s.p(this.options);
      s.m(r), this.S(a), (this._$AH = s);
    }
  }
  _$AC(t) {
    let e = St.get(t.strings);
    return e === void 0 && St.set(t.strings, (e = new j(t))), e;
  }
  M(t) {
    Lt(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let r,
      o = 0;
    for (const i of t)
      o === e.length
        ? e.push((r = new L(this.A(R()), this.A(R()), this, this.options)))
        : (r = e[o]),
        r._$AI(i),
        o++;
    o < e.length && (this._$AR(r && r._$AB.nextSibling, o), (e.length = o));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for (
      (r = this._$AP) === null || r === void 0 || r.call(this, !1, !0, e);
      t && t !== this._$AB;

    ) {
      const o = t.nextSibling;
      t.remove(), (t = o);
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 &&
      ((this._$Cg = t),
      (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class Y {
  constructor(t, e, r, o, i) {
    (this.type = 1),
      (this._$AH = p),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = o),
      (this.options = i),
      r.length > 2 || r[0] !== "" || r[1] !== ""
        ? ((this._$AH = Array(r.length - 1).fill(new String())),
          (this.strings = r))
        : (this._$AH = p);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, r, o) {
    const i = this.strings;
    let s = !1;
    if (i === void 0)
      (t = P(this, t, e, 0)),
        (s = !U(t) || (t !== this._$AH && t !== w)),
        s && (this._$AH = t);
    else {
      const a = t;
      let l, d;
      for (t = i[0], l = 0; l < i.length - 1; l++)
        (d = P(this, a[r + l], e, l)),
          d === w && (d = this._$AH[l]),
          s || (s = !U(d) || d !== this._$AH[l]),
          d === p ? (t = p) : t !== p && (t += (d != null ? d : "") + i[l + 1]),
          (this._$AH[l] = d);
    }
    s && !o && this.k(t);
  }
  k(t) {
    t === p
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t != null ? t : "");
  }
}
class re extends Y {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  k(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
const oe = T ? T.emptyScript : "";
class ie extends Y {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  k(t) {
    t && t !== p
      ? this.element.setAttribute(this.name, oe)
      : this.element.removeAttribute(this.name);
  }
}
class ne extends Y {
  constructor(t, e, r, o, i) {
    super(t, e, r, o, i), (this.type = 5);
  }
  _$AI(t, e = this) {
    var r;
    if ((t = (r = P(this, t, e, 0)) !== null && r !== void 0 ? r : p) === w)
      return;
    const o = this._$AH,
      i =
        (t === p && o !== p) ||
        t.capture !== o.capture ||
        t.once !== o.once ||
        t.passive !== o.passive,
      s = t !== p && (o === p || i);
    i && this.element.removeEventListener(this.name, this, o),
      s && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var e, r;
    typeof this._$AH == "function"
      ? this._$AH.call(
          (r =
            (e = this.options) === null || e === void 0 ? void 0 : e.host) !==
            null && r !== void 0
            ? r
            : this.element,
          t
        )
      : this._$AH.handleEvent(t);
  }
}
class se {
  constructor(t, e, r) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = r);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    P(this, t);
  }
}
const Pt = window.litHtmlPolyfillSupport;
Pt == null || Pt(j, L),
  ((V = globalThis.litHtmlVersions) !== null && V !== void 0
    ? V
    : (globalThis.litHtmlVersions = [])
  ).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var K, Z;
class g extends k {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Dt = void 0);
  }
  createRenderRoot() {
    var t, e;
    const r = super.createRenderRoot();
    return (
      ((t = (e = this.renderOptions).renderBefore) !== null && t !== void 0) ||
        (e.renderBefore = r.firstChild),
      r
    );
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Dt = Dt(e, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      (t = this._$Dt) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(),
      (t = this._$Dt) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return w;
  }
}
(g.finalized = !0),
  (g._$litElement$ = !0),
  (K = globalThis.litElementHydrateSupport) === null ||
    K === void 0 ||
    K.call(globalThis, { LitElement: g });
const Ct = globalThis.litElementPolyfillSupport;
Ct == null || Ct({ LitElement: g });
((Z = globalThis.litElementVersions) !== null && Z !== void 0
  ? Z
  : (globalThis.litElementVersions = [])
).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const M = (n) => (t) =>
  typeof t == "function"
    ? ((e, r) => (window.customElements.define(e, r), r))(n, t)
    : ((e, r) => {
        const { kind: o, elements: i } = r;
        return {
          kind: o,
          elements: i,
          finisher(s) {
            window.customElements.define(e, s);
          },
        };
      })(n, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ae = (n, t) =>
  t.kind === "method" && t.descriptor && !("value" in t.descriptor)
    ? {
        ...t,
        finisher(e) {
          e.createProperty(t.key, n);
        },
      }
    : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: t.key,
        initializer() {
          typeof t.initializer == "function" &&
            (this[t.key] = t.initializer.call(this));
        },
        finisher(e) {
          e.createProperty(t.key, n);
        },
      };
function m(n) {
  return (t, e) =>
    e !== void 0
      ? ((r, o, i) => {
          o.constructor.createProperty(i, r);
        })(n, t, e)
      : ae(n, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function le(n) {
  return m({ ...n, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const st = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
  },
  at =
    (n) =>
    (...t) => ({ _$litDirective$: n, values: t });
class lt {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, r) {
    (this._$Ct = t), (this._$AM = e), (this._$Ci = r);
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const de = at(
  class extends lt {
    constructor(n) {
      var t;
      if (
        (super(n),
        n.type !== st.ATTRIBUTE ||
          n.name !== "style" ||
          ((t = n.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      )
        throw Error(
          "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute."
        );
    }
    render(n) {
      return Object.keys(n).reduce((t, e) => {
        const r = n[e];
        return r == null
          ? t
          : t +
              `${(e = e
                .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&")
                .toLowerCase())}:${r};`;
      }, "");
    }
    update(n, [t]) {
      const { style: e } = n.element;
      if (this.ut === void 0) {
        this.ut = new Set();
        for (const r in t) this.ut.add(r);
        return this.render(t);
      }
      this.ut.forEach((r) => {
        t[r] == null &&
          (this.ut.delete(r),
          r.includes("-") ? e.removeProperty(r) : (e[r] = ""));
      });
      for (const r in t) {
        const o = t[r];
        o != null &&
          (this.ut.add(r), r.includes("-") ? e.setProperty(r, o) : (e[r] = o));
      }
      return w;
    }
  }
);
class ce {
  constructor(t, e = 1e3) {
    (this.value = new Date()),
      (this.host = t),
      this.host.addController(this),
      (this.timeout = e);
  }
  hostConnected() {
    this.intervalId = setInterval(() => {
      (this.value = new Date()), this.host.requestUpdate();
    }, this.timeout);
  }
  hostDisconnected() {
    clearInterval(this.intervalId), (this.intervalId = void 0);
  }
}
class y {
  constructor(t) {
    (this.id = -1),
      (this.nativePointer = t),
      (this.pageX = t.pageX),
      (this.pageY = t.pageY),
      (this.clientX = t.clientX),
      (this.clientY = t.clientY),
      self.Touch && t instanceof Touch
        ? (this.id = t.identifier)
        : O(t) && (this.id = t.pointerId);
  }
  getCoalesced() {
    if ("getCoalescedEvents" in this.nativePointer) {
      const t = this.nativePointer.getCoalescedEvents().map((e) => new y(e));
      if (t.length > 0) return t;
    }
    return [this];
  }
}
const O = (n) => "pointerId" in n,
  G = (n) => "changedTouches" in n,
  Ot = () => {};
class he {
  constructor(
    t,
    {
      start: e = () => !0,
      move: r = Ot,
      end: o = Ot,
      rawUpdates: i = !1,
      avoidPointerEvents: s = !1,
    } = {}
  ) {
    (this._element = t),
      (this.startPointers = []),
      (this.currentPointers = []),
      (this._excludeFromButtonsCheck = new Set()),
      (this._pointerStart = (a) => {
        if (O(a) && a.buttons === 0)
          this._excludeFromButtonsCheck.add(a.pointerId);
        else if (!(a.buttons & 1)) return;
        const l = new y(a);
        this.currentPointers.some((d) => d.id === l.id) ||
          !this._triggerPointerStart(l, a) ||
          (O(a)
            ? ((a.target && "setPointerCapture" in a.target
                ? a.target
                : this._element
              ).setPointerCapture(a.pointerId),
              this._element.addEventListener(
                this._rawUpdates ? "pointerrawupdate" : "pointermove",
                this._move
              ),
              this._element.addEventListener("pointerup", this._pointerEnd),
              this._element.addEventListener("pointercancel", this._pointerEnd))
            : (window.addEventListener("mousemove", this._move),
              window.addEventListener("mouseup", this._pointerEnd)));
      }),
      (this._touchStart = (a) => {
        for (const l of Array.from(a.changedTouches))
          this._triggerPointerStart(new y(l), a);
      }),
      (this._move = (a) => {
        if (
          !G(a) &&
          (!O(a) || !this._excludeFromButtonsCheck.has(a.pointerId)) &&
          a.buttons === 0
        ) {
          this._pointerEnd(a);
          return;
        }
        const l = this.currentPointers.slice(),
          d = G(a)
            ? Array.from(a.changedTouches).map((c) => new y(c))
            : [new y(a)],
          u = [];
        for (const c of d) {
          const h = this.currentPointers.findIndex((f) => f.id === c.id);
          h !== -1 && (u.push(c), (this.currentPointers[h] = c));
        }
        u.length !== 0 && this._moveCallback(l, u, a);
      }),
      (this._triggerPointerEnd = (a, l) => {
        if (!G(l) && l.buttons & 1) return !1;
        const d = this.currentPointers.findIndex((c) => c.id === a.id);
        if (d === -1) return !1;
        this.currentPointers.splice(d, 1),
          this.startPointers.splice(d, 1),
          this._excludeFromButtonsCheck.delete(a.id);
        const u = !(
          l.type === "mouseup" ||
          l.type === "touchend" ||
          l.type === "pointerup"
        );
        return this._endCallback(a, l, u), !0;
      }),
      (this._pointerEnd = (a) => {
        if (!!this._triggerPointerEnd(new y(a), a))
          if (O(a)) {
            if (this.currentPointers.length) return;
            this._element.removeEventListener(
              this._rawUpdates ? "pointerrawupdate" : "pointermove",
              this._move
            ),
              this._element.removeEventListener("pointerup", this._pointerEnd),
              this._element.removeEventListener(
                "pointercancel",
                this._pointerEnd
              );
          } else
            window.removeEventListener("mousemove", this._move),
              window.removeEventListener("mouseup", this._pointerEnd);
      }),
      (this._touchEnd = (a) => {
        for (const l of Array.from(a.changedTouches))
          this._triggerPointerEnd(new y(l), a);
      }),
      (this._startCallback = e),
      (this._moveCallback = r),
      (this._endCallback = o),
      (this._rawUpdates = i && "onpointerrawupdate" in window),
      self.PointerEvent && !s
        ? this._element.addEventListener("pointerdown", this._pointerStart)
        : (this._element.addEventListener("mousedown", this._pointerStart),
          this._element.addEventListener("touchstart", this._touchStart),
          this._element.addEventListener("touchmove", this._move),
          this._element.addEventListener("touchend", this._touchEnd),
          this._element.addEventListener("touchcancel", this._touchEnd));
  }
  stop() {
    this._element.removeEventListener("pointerdown", this._pointerStart),
      this._element.removeEventListener("mousedown", this._pointerStart),
      this._element.removeEventListener("touchstart", this._touchStart),
      this._element.removeEventListener("touchmove", this._move),
      this._element.removeEventListener("touchend", this._touchEnd),
      this._element.removeEventListener("touchcancel", this._touchEnd),
      this._element.removeEventListener(
        this._rawUpdates ? "pointerrawupdate" : "pointermove",
        this._move
      ),
      this._element.removeEventListener("pointerup", this._pointerEnd),
      this._element.removeEventListener("pointercancel", this._pointerEnd),
      window.removeEventListener("mousemove", this._move),
      window.removeEventListener("mouseup", this._pointerEnd);
  }
  _triggerPointerStart(t, e) {
    return this._startCallback(t, e)
      ? (this.currentPointers.push(t), this.startPointers.push(t), !0)
      : !1;
  }
}
var J =
    (globalThis && globalThis.__classPrivateFieldGet) ||
    function (n, t, e, r) {
      if (e === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof t == "function" ? n !== t || !r : !t.has(n))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return e === "m" ? r : e === "a" ? r.call(n) : r ? r.value : t.get(n);
    },
  tt,
  et,
  rt;
class ue extends lt {
  constructor(t) {
    if ((super(t), (this.hasInitialised = !1), t.type !== st.ELEMENT))
      throw new Error("The `drag` directive must be used on an element");
  }
  update(t, e) {
    if (this.hasInitialised) return;
    const r = t.element,
      [o, i] = e;
    r.setAttribute("data-dragging", "idle"),
      (o.draggableElement = r),
      (o.pointerTracker = new he(r, {
        start(...s) {
          return i.start(...s), r.setAttribute("data-dragging", "dragging"), !0;
        },
        move(...s) {
          i.move(...s);
        },
        end(...s) {
          i.end(...s), r.setAttribute("data-dragging", "idle");
        },
      })),
      (this.hasInitialised = !0);
  }
  render(t, e) {
    return w;
  }
}
const pe = at(ue);
class ge {
  constructor(t) {
    (this.cursorPositionX = null),
      (this.cursorPositionY = null),
      (this.pointerTracker = null),
      (this.draggableElement = null),
      (this.styles = { top: "16px", left: "16px" }),
      tt.set(
        this,
        (e, r) => (
          (this.cursorPositionX = Math.floor(e.pageX)),
          (this.cursorPositionY = Math.floor(e.pageY)),
          r.target.setAttribute("data-state", "dragging"),
          !0
        )
      ),
      et.set(this, (e, r) => {
        const [o] = r;
        window.requestAnimationFrame(() => this.handleWindowMove(o));
      }),
      rt.set(this, (e, r) => {
        r.target.removeAttribute("data-state");
      }),
      (this.host = t),
      this.host.addController(this);
  }
  hostDisconnected() {
    this.pointerTracker && this.pointerTracker.stop();
  }
  draggable() {
    return pe(this, {
      start: J(this, tt, "f"),
      move: J(this, et, "f"),
      end: J(this, rt, "f"),
    });
  }
  handleWindowMove(t) {
    const { top: e, left: r } = this.styles,
      { innerHeight: o, innerWidth: i } = window,
      s = this.draggableElement;
    if (!s) return;
    const a = Number(e == null ? void 0 : e.replace("px", "")),
      l = Number(r == null ? void 0 : r.replace("px", "")),
      d = Math.floor(t.pageX),
      u = Math.floor(t.pageY);
    if (
      d !== 0 &&
      u !== 0 &&
      (d !== this.cursorPositionX || u !== this.cursorPositionY)
    ) {
      const {
          bottom: c,
          right: h,
          width: f,
          height: E,
        } = s.getBoundingClientRect(),
        _ = d - this.cursorPositionX,
        X = u - this.cursorPositionY,
        ft = a + X < 0,
        vt = l + _ < 0,
        bt = c + X > o,
        mt = h + _ > i,
        qt = bt || vt || mt || ft;
      (this.cursorPositionX = d),
        (this.cursorPositionY = u),
        qt
          ? (ft && (this.styles = { top: "0px", left: `${l}px` }),
            vt && (this.styles = { top: `${a}px`, left: `${0}px` }),
            bt && (this.styles = { top: `${o - E}px`, left: `${l}px` }),
            mt && (this.styles = { top: `${a}px`, left: `${i - f}px` }))
          : (this.styles = { top: `${a + X}px`, left: `${l + _}px` }),
        this.host.requestUpdate();
    }
  }
}
(tt = new WeakMap()), (et = new WeakMap()), (rt = new WeakMap());
class Nt extends g {
  render() {
    return v`<div id="stack">
      <slot></slot>
    </div>`;
  }
}
Nt.styles = b`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;
window.customElements.define("a2k-stack", Nt);
class Bt extends g {
  render() {
    return v` <div id="panel">
      <slot></slot>
    </div>`;
  }
}
Bt.styles = b`
    #panel {
      --inset-shadow-padding: 2px;
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
    }
  `;
window.customElements.define("a2k-panel", Bt);
var fe =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var o = arguments.length,
        i =
          o < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(n, t, e, r);
      else
        for (var a = n.length - 1; a >= 0; a--)
          (s = n[a]) &&
            (i = (o < 3 ? s(i) : o > 3 ? s(t, e, i) : s(t, e)) || i);
      return o > 3 && i && Object.defineProperty(t, e, i), i;
    },
  ve =
    (globalThis && globalThis.__metadata) ||
    function (n, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(n, t);
    };
class dt extends g {
  constructor() {
    super(...arguments),
      (this.closeButton = v`<button @click="${this.handleClose}">Close</button>`),
      (this.closeable = !1);
  }
  handleClose(t) {
    const e = new Event("close", { bubbles: !0, composed: !0 });
    t.target.dispatchEvent(e);
  }
  render() {
    return v`<div class="topbar-wrapper">
      <h2 class="heading">
        <slot></slot>
      </h2>
      ${this.closeable ? this.closeButton : ""}
    </div>`;
  }
}
dt.styles = b`
    .topbar-wrapper {
      background: var(--window-topbar-background);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      user-select: none;
    }

    h2 {
      margin: 0;
      font-size: var(--window-topbar-heading-font-size);
      color: var(--window-topbar-heading-color);
      padding: 0 var(--window-spacing-horizontal);
    }
  `;
fe(
  [m({ type: Boolean }), ve("design:type", Object)],
  dt.prototype,
  "closeable",
  void 0
);
window.customElements.define("a2k-window-topbar", dt);
var ct =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var o = arguments.length,
        i =
          o < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(n, t, e, r);
      else
        for (var a = n.length - 1; a >= 0; a--)
          (s = n[a]) &&
            (i = (o < 3 ? s(i) : o > 3 ? s(t, e, i) : s(t, e)) || i);
      return o > 3 && i && Object.defineProperty(t, e, i), i;
    },
  ht =
    (globalThis && globalThis.__metadata) ||
    function (n, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(n, t);
    };
class z extends g {
  constructor() {
    super(),
      (this.heading = ""),
      (this.draggable = !1),
      (this.closeable = !1),
      (this.drag = new ge(this)),
      this.addEventListener("close", () => this.remove());
  }
  render() {
    return v`
      <div id="window" style=${de(this.drag.styles)}>
        <a2k-panel>
          <div id="draggable" ${this.drag.draggable()}>
            <a2k-window-topbar ?closeable="${this.closeable}"
              >${this.heading}</a2k-window-topbar
            >
          </div>
          <div class="content">
            <a2k-stack>
              <slot></slot>
            </a2k-stack>
          </div>
        </a2k-panel>
      </div>
    `;
  }
}
z.styles = b`
    #window {
      font-family: var(--font-primary);
      position: absolute;
      width: var(--window-width);
      max-width: 100%;
    }

    #draggable[data-dragging="idle"] {
      cursor: var(--cursor-grab);
    }

    #draggable[data-dragging="dragging"] {
      cursor: var(--cursor-grabbing);
    }

    .content {
      padding: 0 var(--window-spacing-horizontal);
    }
  `;
ct(
  [m({ type: String }), ht("design:type", Object)],
  z.prototype,
  "heading",
  void 0
);
ct(
  [m({ type: Boolean }), ht("design:type", Object)],
  z.prototype,
  "draggable",
  void 0
);
ct(
  [m({ type: Boolean }), ht("design:type", Object)],
  z.prototype,
  "closeable",
  void 0
);
window.customElements.define("a2k-window", z);
var be =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var o = arguments.length,
        i =
          o < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(n, t, e, r);
      else
        for (var a = n.length - 1; a >= 0; a--)
          (s = n[a]) &&
            (i = (o < 3 ? s(i) : o > 3 ? s(t, e, i) : s(t, e)) || i);
      return o > 3 && i && Object.defineProperty(t, e, i), i;
    },
  me =
    (globalThis && globalThis.__metadata) ||
    function (n, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(n, t);
    };
const we = new URL("/assets/a2k-icons.b9ba7649.svg", self.location).href;
class ut extends g {
  constructor() {
    super(...arguments), (this.icon = "");
  }
  render() {
    return (
      this.icon ||
        console.warn(
          "This icon is a missing a 'name', please specify the 'name' of the icon you want to display"
        ),
      Qt`
      <svg id="icon" height="1em" width="1em">
        <use href="${we}#${this.icon}"></use>
      </svg>
    `
    );
  }
}
ut.styles = b`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;
be(
  [m({ type: String }), me("design:type", Object)],
  ut.prototype,
  "icon",
  void 0
);
window.customElements.define("a2k-icon", ut);
var Ht =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var o = arguments.length,
        i =
          o < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(n, t, e, r);
      else
        for (var a = n.length - 1; a >= 0; a--)
          (s = n[a]) &&
            (i = (o < 3 ? s(i) : o > 3 ? s(t, e, i) : s(t, e)) || i);
      return o > 3 && i && Object.defineProperty(t, e, i), i;
    },
  _e =
    (globalThis && globalThis.__metadata) ||
    function (n, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(n, t);
    };
let B = class extends g {
  constructor() {
    super(...arguments), (this.open = !1);
  }
  render() {
    return v`
      <div id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </div>
    `;
  }
};
B.styles = b`
    #start-menu-item {
      height: var(--start-menu-item-height);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding-inline: var(--start-menu-item-padding);
      gap: var(--start-menu-item-gap);
      background: var(--start-menu-item-background);
      cursor: pointer;
      width: 100%;
      border: 0;
      font-size: inherit;
      text-align: left;
      font-family: var(--font-primary);
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
  `;
Ht([m(), _e("design:type", Object)], B.prototype, "open", void 0);
B = Ht([M("a2k-start-menu-item")], B);
var It =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var o = arguments.length,
        i =
          o < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(n, t, e, r);
      else
        for (var a = n.length - 1; a >= 0; a--)
          (s = n[a]) &&
            (i = (o < 3 ? s(i) : o > 3 ? s(t, e, i) : s(t, e)) || i);
      return o > 3 && i && Object.defineProperty(t, e, i), i;
    },
  ye =
    (globalThis && globalThis.__metadata) ||
    function (n, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(n, t);
    };
let H = class extends g {
  constructor() {
    super(...arguments), (this.open = !1);
  }
  handleAboutClick() {
    const t = v` <a2k-window closeable heading="About Andricos2000">
      <p>Deets coming soon...</p>
    </a2k-window>`;
    Dt(t, document.body);
  }
  render() {
    const t = String(this.open) === "true";
    return v`
      <div id="start-menu" class="${t ? "open" : ""}">
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
                    <span slot="icon"><a2k-icon icon="twitter-icon" /></span>
                    Twitter
                  </a2k-start-menu-item>
                </a>

                <a target="_blank" href="mailto:karoulla.andrico@gmail.com" rel="noreferrer noopener">
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
    `;
  }
};
H.styles = b`
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
      font-size: var(--font-size-100);
    }

    #side-strip p {
      color: white;
      font-weight: var(--font-weight-600);
      margin: 0;
      padding-inline-start: var(--spacing-50);
    }
  `;
It([m(), ye("design:type", Object)], H.prototype, "open", void 0);
H = It([M("a2k-start-menu")], H);
var Wt =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var o = arguments.length,
        i =
          o < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(n, t, e, r);
      else
        for (var a = n.length - 1; a >= 0; a--)
          (s = n[a]) &&
            (i = (o < 3 ? s(i) : o > 3 ? s(t, e, i) : s(t, e)) || i);
      return o > 3 && i && Object.defineProperty(t, e, i), i;
    },
  $e =
    (globalThis && globalThis.__metadata) ||
    function (n, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(n, t);
    };
let I = class extends g {
  constructor() {
    super(...arguments),
      (this._hideOnClickOutside = (t) => {
        t.composedPath().includes(this) ||
          ((this._isMenuOpen = !1),
          document.removeEventListener("click", this._hideOnClickOutside));
      }),
      (this._isMenuOpen = !1);
  }
  _toggleMenu() {
    const t = !this._isMenuOpen;
    t
      ? document.addEventListener("click", this._hideOnClickOutside)
      : document.removeEventListener("click", this._hideOnClickOutside),
      (this._isMenuOpen = t);
  }
  render() {
    return v`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `;
  }
};
I.styles = b`
    .wrapper {
      position: relative;
      height: 100%;
    }

    button {
      display: flex;
      align-items: center;
      gap: var(--taskbar-content-gap);
      font-family: var(--font-primary);
      height: 100%;
      font-weight: var(--font-weight-heavy);
      font-size: var(--font-size-100);
      line-height: var(--font-size-100);
      background-color: var(--color-gray-600);
      cursor: pointer;
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
  `;
Wt([le(), $e("design:type", Object)], I.prototype, "_isMenuOpen", void 0);
I = Wt([M("a2k-start-button")], I);
var xe =
  (globalThis && globalThis.__decorate) ||
  function (n, t, e, r) {
    var o = arguments.length,
      i =
        o < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, e))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(n, t, e, r);
    else
      for (var a = n.length - 1; a >= 0; a--)
        (s = n[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(t, e, i) : s(t, e)) || i);
    return o > 3 && i && Object.defineProperty(t, e, i), i;
  };
let ot = class extends g {
  constructor() {
    super(...arguments), (this.clock = new ce(this));
  }
  render() {
    const t = Ee.format(this.clock.value);
    return v`<div class="utility-bar">${t}</div>`;
  }
};
ot.styles = b`
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
  `;
ot = xe([M("a2k-utility-bar")], ot);
const Ee = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
class Yt extends g {
  render() {
    return v`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`;
  }
}
Yt.styles = b`
    .taskbar {
      --inset-shadow-padding: 2px;

      font-family: var(--font-primary);
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
  `;
window.customElements.define("a2k-taskbar", Yt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ke = at(
  class extends lt {
    constructor(n) {
      var t;
      if (
        (super(n),
        n.type !== st.ATTRIBUTE ||
          n.name !== "class" ||
          ((t = n.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      )
        throw Error(
          "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
        );
    }
    render(n) {
      return (
        " " +
        Object.keys(n)
          .filter((t) => n[t])
          .join(" ") +
        " "
      );
    }
    update(n, [t]) {
      var e, r;
      if (this.st === void 0) {
        (this.st = new Set()),
          n.strings !== void 0 &&
            (this.et = new Set(
              n.strings
                .join(" ")
                .split(/\s/)
                .filter((i) => i !== "")
            ));
        for (const i in t)
          t[i] &&
            !(!((e = this.et) === null || e === void 0) && e.has(i)) &&
            this.st.add(i);
        return this.render(t);
      }
      const o = n.element.classList;
      this.st.forEach((i) => {
        i in t || (o.remove(i), this.st.delete(i));
      });
      for (const i in t) {
        const s = !!t[i];
        s === this.st.has(i) ||
          ((r = this.et) === null || r === void 0 ? void 0 : r.has(i)) ||
          (s ? (o.add(i), this.st.add(i)) : (o.remove(i), this.st.delete(i)));
      }
      return w;
    }
  }
);
var Xt =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var o = arguments.length,
        i =
          o < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(n, t, e, r);
      else
        for (var a = n.length - 1; a >= 0; a--)
          (s = n[a]) &&
            (i = (o < 3 ? s(i) : o > 3 ? s(t, e, i) : s(t, e)) || i);
      return o > 3 && i && Object.defineProperty(t, e, i), i;
    },
  Ae =
    (globalThis && globalThis.__metadata) ||
    function (n, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(n, t);
    };
let W = class extends g {
  constructor() {
    super(...arguments), (this.filled = "none");
  }
  render() {
    const t = {
      "half-filled": this.filled !== "none",
      filled: this.filled === "filled",
    };
    return v`<div class=${ke(t)} id="unit">
      <div></div>
      <div></div>
    </div>`;
  }
};
W.styles = b`
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
  `;
Xt([m(), Ae("design:type", String)], W.prototype, "filled", void 0);
W = Xt([M("a2k-progress-unit")], W);
var Te =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var o = arguments.length,
        i =
          o < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(n, t, e, r);
      else
        for (var a = n.length - 1; a >= 0; a--)
          (s = n[a]) &&
            (i = (o < 3 ? s(i) : o > 3 ? s(t, e, i) : s(t, e)) || i);
      return o > 3 && i && Object.defineProperty(t, e, i), i;
    },
  Se =
    (globalThis && globalThis.__metadata) ||
    function (n, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(n, t);
    };
class pt extends g {
  constructor() {
    super(...arguments), (this.progress = 0), (this.width = 0);
  }
  async firstUpdated() {
    this.generateProgressUnits();
  }
  async updated(t) {
    t.has("progress") && this.updateProgressUnits();
  }
  async generateProgressUnits() {
    var a;
    const t = this.renderRoot.querySelector("#progress");
    if (!t) return;
    await this.updateComplete;
    const e = (a = t.getBoundingClientRect().width) != null ? a : 0;
    if (this.width === e) return;
    this.width = e;
    const { gap: r } = getComputedStyle(t),
      i = Number(r.replace("px", "")) + 12,
      s = Math.ceil(e / i);
    Array(s)
      .fill(0)
      .forEach(() => {
        const l = document.createElement("a2k-progress-unit");
        l.setAttribute("filled", "none"), t == null || t.appendChild(l);
      });
  }
  async updateProgressUnits() {
    await this.updateComplete;
    const t = this.renderRoot.querySelectorAll("a2k-progress-unit"),
      e = (this.progress / 100) * t.length,
      r = Pe(e),
      o = Math.floor(e);
    t.forEach((i, s) => {
      s < o
        ? i.setAttribute("filled", "filled")
        : s === o && r >= 0.5
        ? i.setAttribute("filled", "half")
        : i.setAttribute("filled", "none");
    });
  }
  render() {
    return v`<div id="progress" role="progress"></div>`;
  }
}
pt.styles = b`
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
  `;
Te(
  [m({ type: Number }), Se("design:type", Object)],
  pt.prototype,
  "progress",
  void 0
);
const Pe = (n) => Math.floor((n % 1) * 10) / 10;
window.customElements.define("a2k-progress", pt);
var Ce =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var o = arguments.length,
        i =
          o < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(n, t, e, r);
      else
        for (var a = n.length - 1; a >= 0; a--)
          (s = n[a]) &&
            (i = (o < 3 ? s(i) : o > 3 ? s(t, e, i) : s(t, e)) || i);
      return o > 3 && i && Object.defineProperty(t, e, i), i;
    },
  Oe =
    (globalThis && globalThis.__metadata) ||
    function (n, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(n, t);
    };
class gt extends g {
  constructor() {
    super(...arguments), (this.disabled = !1);
  }
  render() {
    return v` <button ?disabled=${this.disabled}>
      <slot></slot>
    </button>`;
  }
}
gt.styles = b`
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

    button:not([disabled]):active {
      border-bottom: 2px solid transparent;
      border-right: 0;
      border-left: 1px dotted var(--color-black);
      border-top: 1px dotted var(--color-black);
      box-shadow: var(--button-shadow-active);
      transform: translate(2px, 2px);
    }
  `;
Ce(
  [m({ type: Boolean }), Oe("design:type", Object)],
  gt.prototype,
  "disabled",
  void 0
);
window.customElements.define("a2k-button", gt);
let D = 0;
const N = document.querySelector("a2k-window[title='Please wait...']"),
  Re = setInterval(() => {
    const n = document.querySelector("a2k-progress");
    if (!!n && ((D = D + 1.2), n.setAttribute("progress", D), D > 70)) {
      for (; N.firstChild; ) N.removeChild(N.lastChild);
      (N.innerHTML = `
      <p>There was an error loading Andricos2000</p>
      <p>Andricos2000 is still a work in progress, keeping checking back for updates or follow progress on Twitter</p>
    `),
        clearInterval(Re);
    }
  }, 100);
