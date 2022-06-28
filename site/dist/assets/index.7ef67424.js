const ie = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerpolicy && (i.referrerPolicy = n.referrerpolicy),
      n.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : n.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function o(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = e(n);
    fetch(n.href, i);
  }
};
ie();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const lt =
    window.ShadowRoot &&
    (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  ct = Symbol(),
  Et = new Map();
class Nt {
  constructor(t, e) {
    if (((this._$cssResult$ = !0), e !== ct))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    this.cssText = t;
  }
  get styleSheet() {
    let t = Et.get(this.cssText);
    return (
      lt &&
        t === void 0 &&
        (Et.set(this.cssText, (t = new CSSStyleSheet())),
        t.replaceSync(this.cssText)),
      t
    );
  }
  toString() {
    return this.cssText;
  }
}
const re = (r) => new Nt(typeof r == "string" ? r : r + "", ct),
  b = (r, ...t) => {
    const e =
      r.length === 1
        ? r[0]
        : t.reduce(
            (o, n, i) =>
              o +
              ((s) => {
                if (s._$cssResult$ === !0) return s.cssText;
                if (typeof s == "number") return s;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    s +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(n) +
              r[i + 1],
            r[0]
          );
    return new Nt(e, ct);
  },
  ne = (r, t) => {
    lt
      ? (r.adoptedStyleSheets = t.map((e) =>
          e instanceof CSSStyleSheet ? e : e.styleSheet
        ))
      : t.forEach((e) => {
          const o = document.createElement("style"),
            n = window.litNonce;
          n !== void 0 && o.setAttribute("nonce", n),
            (o.textContent = e.cssText),
            r.appendChild(o);
        });
  },
  At = lt
    ? (r) => r
    : (r) =>
        r instanceof CSSStyleSheet
          ? ((t) => {
              let e = "";
              for (const o of t.cssRules) e += o.cssText;
              return re(e);
            })(r)
          : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var Z;
const Tt = window.trustedTypes,
  se = Tt ? Tt.emptyScript : "",
  St = window.reactiveElementPolyfillSupport,
  it = {
    toAttribute(r, t) {
      switch (t) {
        case Boolean:
          r = r ? se : null;
          break;
        case Object:
        case Array:
          r = r == null ? r : JSON.stringify(r);
      }
      return r;
    },
    fromAttribute(r, t) {
      let e = r;
      switch (t) {
        case Boolean:
          e = r !== null;
          break;
        case Number:
          e = r === null ? null : Number(r);
          break;
        case Object:
        case Array:
          try {
            e = JSON.parse(r);
          } catch {
            e = null;
          }
      }
      return e;
    },
  },
  Ht = (r, t) => t !== r && (t == t || r == r),
  G = {
    attribute: !0,
    type: String,
    converter: it,
    reflect: !1,
    hasChanged: Ht,
  };
class A extends HTMLElement {
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
      this.elementProperties.forEach((e, o) => {
        const n = this._$Eh(o, e);
        n !== void 0 && (this._$Eu.set(n, o), t.push(n));
      }),
      t
    );
  }
  static createProperty(t, e = G) {
    if (
      (e.state && (e.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, e),
      !e.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const o = typeof t == "symbol" ? Symbol() : "__" + t,
        n = this.getPropertyDescriptor(t, o, e);
      n !== void 0 && Object.defineProperty(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, e, o) {
    return {
      get() {
        return this[e];
      },
      set(n) {
        const i = this[t];
        (this[e] = n), this.requestUpdate(t, i, o);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || G;
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
        o = [
          ...Object.getOwnPropertyNames(e),
          ...Object.getOwnPropertySymbols(e),
        ];
      for (const n of o) this.createProperty(n, e[n]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const n of o) e.unshift(At(n));
    } else t !== void 0 && e.push(At(t));
    return e;
  }
  static _$Eh(t, e) {
    const o = e.attribute;
    return o === !1
      ? void 0
      : typeof o == "string"
      ? o
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
    var e, o;
    ((e = this._$Eg) !== null && e !== void 0 ? e : (this._$Eg = [])).push(t),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((o = t.hostConnected) === null || o === void 0 || o.call(t));
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
    return ne(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (t = this._$Eg) === null ||
        t === void 0 ||
        t.forEach((e) => {
          var o;
          return (o = e.hostConnected) === null || o === void 0
            ? void 0
            : o.call(e);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    (t = this._$Eg) === null ||
      t === void 0 ||
      t.forEach((e) => {
        var o;
        return (o = e.hostDisconnected) === null || o === void 0
          ? void 0
          : o.call(e);
      });
  }
  attributeChangedCallback(t, e, o) {
    this._$AK(t, o);
  }
  _$ES(t, e, o = G) {
    var n, i;
    const s = this.constructor._$Eh(t, o);
    if (s !== void 0 && o.reflect === !0) {
      const a = (
        (i =
          (n = o.converter) === null || n === void 0
            ? void 0
            : n.toAttribute) !== null && i !== void 0
          ? i
          : it.toAttribute
      )(e, o.type);
      (this._$Ei = t),
        a == null ? this.removeAttribute(s) : this.setAttribute(s, a),
        (this._$Ei = null);
    }
  }
  _$AK(t, e) {
    var o, n, i;
    const s = this.constructor,
      a = s._$Eu.get(t);
    if (a !== void 0 && this._$Ei !== a) {
      const l = s.getPropertyOptions(a),
        c = l.converter,
        u =
          (i =
            (n =
              (o = c) === null || o === void 0 ? void 0 : o.fromAttribute) !==
              null && n !== void 0
              ? n
              : typeof c == "function"
              ? c
              : null) !== null && i !== void 0
            ? i
            : it.fromAttribute;
      (this._$Ei = a), (this[a] = u(e, l.type)), (this._$Ei = null);
    }
  }
  requestUpdate(t, e, o) {
    let n = !0;
    t !== void 0 &&
      (((o = o || this.constructor.getPropertyOptions(t)).hasChanged || Ht)(
        this[t],
        e
      )
        ? (this._$AL.has(t) || this._$AL.set(t, e),
          o.reflect === !0 &&
            this._$Ei !== t &&
            (this._$E_ === void 0 && (this._$E_ = new Map()),
            this._$E_.set(t, o)))
        : (n = !1)),
      !this.isUpdatePending && n && (this._$Ep = this._$EC());
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
        (this._$Et.forEach((n, i) => (this[i] = n)), (this._$Et = void 0));
    let e = !1;
    const o = this._$AL;
    try {
      (e = this.shouldUpdate(o)),
        e
          ? (this.willUpdate(o),
            (t = this._$Eg) === null ||
              t === void 0 ||
              t.forEach((n) => {
                var i;
                return (i = n.hostUpdate) === null || i === void 0
                  ? void 0
                  : i.call(n);
              }),
            this.update(o))
          : this._$EU();
    } catch (n) {
      throw ((e = !1), this._$EU(), n);
    }
    e && this._$AE(o);
  }
  willUpdate(t) {}
  _$AE(t) {
    var e;
    (e = this._$Eg) === null ||
      e === void 0 ||
      e.forEach((o) => {
        var n;
        return (n = o.hostUpdated) === null || n === void 0
          ? void 0
          : n.call(o);
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
      (this._$E_.forEach((e, o) => this._$ES(o, this[o], e)),
      (this._$E_ = void 0)),
      this._$EU();
  }
  updated(t) {}
  firstUpdated(t) {}
}
(A.finalized = !0),
  (A.elementProperties = new Map()),
  (A.elementStyles = []),
  (A.shadowRootOptions = { mode: "open" }),
  St == null || St({ ReactiveElement: A }),
  ((Z = globalThis.reactiveElementVersions) !== null && Z !== void 0
    ? Z
    : (globalThis.reactiveElementVersions = [])
  ).push("1.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var J;
const S = globalThis.trustedTypes,
  Pt = S ? S.createPolicy("lit-html", { createHTML: (r) => r }) : void 0,
  x = `lit$${(Math.random() + "").slice(9)}$`,
  Bt = "?" + x,
  ae = `<${Bt}>`,
  P = document,
  U = (r = "") => P.createComment(r),
  M = (r) => r === null || (typeof r != "object" && typeof r != "function"),
  It = Array.isArray,
  le = (r) => {
    var t;
    return (
      It(r) ||
      typeof ((t = r) === null || t === void 0 ? void 0 : t[Symbol.iterator]) ==
        "function"
    );
  },
  C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Ot = /-->/g,
  Rt = />/g,
  E =
    />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
  Ct = /'/g,
  jt = /"/g,
  Wt = /^(?:script|style|textarea)$/i,
  Yt =
    (r) =>
    (t, ...e) => ({ _$litType$: r, strings: t, values: e }),
  v = Yt(1),
  ce = Yt(2),
  _ = Symbol.for("lit-noChange"),
  f = Symbol.for("lit-nothing"),
  Ut = new WeakMap(),
  qt = (r, t, e) => {
    var o, n;
    const i =
      (o = e == null ? void 0 : e.renderBefore) !== null && o !== void 0
        ? o
        : t;
    let s = i._$litPart$;
    if (s === void 0) {
      const a =
        (n = e == null ? void 0 : e.renderBefore) !== null && n !== void 0
          ? n
          : null;
      i._$litPart$ = s = new z(
        t.insertBefore(U(), a),
        a,
        void 0,
        e != null ? e : {}
      );
    }
    return s._$AI(r), s;
  },
  T = P.createTreeWalker(P, 129, null, !1),
  de = (r, t) => {
    const e = r.length - 1,
      o = [];
    let n,
      i = t === 2 ? "<svg>" : "",
      s = C;
    for (let l = 0; l < e; l++) {
      const c = r[l];
      let u,
        d,
        h = -1,
        g = 0;
      for (; g < c.length && ((s.lastIndex = g), (d = s.exec(c)), d !== null); )
        (g = s.lastIndex),
          s === C
            ? d[1] === "!--"
              ? (s = Ot)
              : d[1] !== void 0
              ? (s = Rt)
              : d[2] !== void 0
              ? (Wt.test(d[2]) && (n = RegExp("</" + d[2], "g")), (s = E))
              : d[3] !== void 0 && (s = E)
            : s === E
            ? d[0] === ">"
              ? ((s = n != null ? n : C), (h = -1))
              : d[1] === void 0
              ? (h = -2)
              : ((h = s.lastIndex - d[2].length),
                (u = d[1]),
                (s = d[3] === void 0 ? E : d[3] === '"' ? jt : Ct))
            : s === jt || s === Ct
            ? (s = E)
            : s === Ot || s === Rt
            ? (s = C)
            : ((s = E), (n = void 0));
      const k = s === E && r[l + 1].startsWith("/>") ? " " : "";
      i +=
        s === C
          ? c + ae
          : h >= 0
          ? (o.push(u), c.slice(0, h) + "$lit$" + c.slice(h) + x + k)
          : c + x + (h === -2 ? (o.push(void 0), l) : k);
    }
    const a = i + (r[e] || "<?>") + (t === 2 ? "</svg>" : "");
    return [Pt !== void 0 ? Pt.createHTML(a) : a, o];
  };
class L {
  constructor({ strings: t, _$litType$: e }, o) {
    let n;
    this.parts = [];
    let i = 0,
      s = 0;
    const a = t.length - 1,
      l = this.parts,
      [c, u] = de(t, e);
    if (
      ((this.el = L.createElement(c, o)),
      (T.currentNode = this.el.content),
      e === 2)
    ) {
      const d = this.el.content,
        h = d.firstChild;
      h.remove(), d.append(...h.childNodes);
    }
    for (; (n = T.nextNode()) !== null && l.length < a; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const d = [];
          for (const h of n.getAttributeNames())
            if (h.endsWith("$lit$") || h.startsWith(x)) {
              const g = u[s++];
              if ((d.push(h), g !== void 0)) {
                const k = n.getAttribute(g.toLowerCase() + "$lit$").split(x),
                  y = /([.?@])?(.*)/.exec(g);
                l.push({
                  type: 1,
                  index: i,
                  name: y[2],
                  strings: k,
                  ctor:
                    y[1] === "."
                      ? pe
                      : y[1] === "?"
                      ? fe
                      : y[1] === "@"
                      ? ge
                      : V,
                });
              } else l.push({ type: 6, index: i });
            }
          for (const h of d) n.removeAttribute(h);
        }
        if (Wt.test(n.tagName)) {
          const d = n.textContent.split(x),
            h = d.length - 1;
          if (h > 0) {
            n.textContent = S ? S.emptyScript : "";
            for (let g = 0; g < h; g++)
              n.append(d[g], U()),
                T.nextNode(),
                l.push({ type: 2, index: ++i });
            n.append(d[h], U());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === Bt) l.push({ type: 2, index: i });
        else {
          let d = -1;
          for (; (d = n.data.indexOf(x, d + 1)) !== -1; )
            l.push({ type: 7, index: i }), (d += x.length - 1);
        }
      i++;
    }
  }
  static createElement(t, e) {
    const o = P.createElement("template");
    return (o.innerHTML = t), o;
  }
}
function O(r, t, e = r, o) {
  var n, i, s, a;
  if (t === _) return t;
  let l =
    o !== void 0
      ? (n = e._$Cl) === null || n === void 0
        ? void 0
        : n[o]
      : e._$Cu;
  const c = M(t) ? void 0 : t._$litDirective$;
  return (
    (l == null ? void 0 : l.constructor) !== c &&
      ((i = l == null ? void 0 : l._$AO) === null ||
        i === void 0 ||
        i.call(l, !1),
      c === void 0 ? (l = void 0) : ((l = new c(r)), l._$AT(r, e, o)),
      o !== void 0
        ? (((s = (a = e)._$Cl) !== null && s !== void 0 ? s : (a._$Cl = []))[
            o
          ] = l)
        : (e._$Cu = l)),
    l !== void 0 && (t = O(r, l._$AS(r, t.values), l, o)),
    t
  );
}
class he {
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
        el: { content: o },
        parts: n,
      } = this._$AD,
      i = (
        (e = t == null ? void 0 : t.creationScope) !== null && e !== void 0
          ? e
          : P
      ).importNode(o, !0);
    T.currentNode = i;
    let s = T.nextNode(),
      a = 0,
      l = 0,
      c = n[0];
    for (; c !== void 0; ) {
      if (a === c.index) {
        let u;
        c.type === 2
          ? (u = new z(s, s.nextSibling, this, t))
          : c.type === 1
          ? (u = new c.ctor(s, c.name, c.strings, this, t))
          : c.type === 6 && (u = new ve(s, this, t)),
          this.v.push(u),
          (c = n[++l]);
      }
      a !== (c == null ? void 0 : c.index) && ((s = T.nextNode()), a++);
    }
    return i;
  }
  m(t) {
    let e = 0;
    for (const o of this.v)
      o !== void 0 &&
        (o.strings !== void 0
          ? (o._$AI(t, o, e), (e += o.strings.length - 2))
          : o._$AI(t[e])),
        e++;
  }
}
class z {
  constructor(t, e, o, n) {
    var i;
    (this.type = 2),
      (this._$AH = f),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = o),
      (this.options = n),
      (this._$Cg =
        (i = n == null ? void 0 : n.isConnected) === null || i === void 0 || i);
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
    (t = O(this, t, e)),
      M(t)
        ? t === f || t == null || t === ""
          ? (this._$AH !== f && this._$AR(), (this._$AH = f))
          : t !== this._$AH && t !== _ && this.$(t)
        : t._$litType$ !== void 0
        ? this.T(t)
        : t.nodeType !== void 0
        ? this.S(t)
        : le(t)
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
    this._$AH !== f && M(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.S(P.createTextNode(t)),
      (this._$AH = t);
  }
  T(t) {
    var e;
    const { values: o, _$litType$: n } = t,
      i =
        typeof n == "number"
          ? this._$AC(t)
          : (n.el === void 0 && (n.el = L.createElement(n.h, this.options)), n);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === i)
      this._$AH.m(o);
    else {
      const s = new he(i, this),
        a = s.p(this.options);
      s.m(o), this.S(a), (this._$AH = s);
    }
  }
  _$AC(t) {
    let e = Ut.get(t.strings);
    return e === void 0 && Ut.set(t.strings, (e = new L(t))), e;
  }
  M(t) {
    It(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let o,
      n = 0;
    for (const i of t)
      n === e.length
        ? e.push((o = new z(this.A(U()), this.A(U()), this, this.options)))
        : (o = e[n]),
        o._$AI(i),
        n++;
    n < e.length && (this._$AR(o && o._$AB.nextSibling, n), (e.length = n));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var o;
    for (
      (o = this._$AP) === null || o === void 0 || o.call(this, !1, !0, e);
      t && t !== this._$AB;

    ) {
      const n = t.nextSibling;
      t.remove(), (t = n);
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 &&
      ((this._$Cg = t),
      (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class V {
  constructor(t, e, o, n, i) {
    (this.type = 1),
      (this._$AH = f),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = n),
      (this.options = i),
      o.length > 2 || o[0] !== "" || o[1] !== ""
        ? ((this._$AH = Array(o.length - 1).fill(new String())),
          (this.strings = o))
        : (this._$AH = f);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, o, n) {
    const i = this.strings;
    let s = !1;
    if (i === void 0)
      (t = O(this, t, e, 0)),
        (s = !M(t) || (t !== this._$AH && t !== _)),
        s && (this._$AH = t);
    else {
      const a = t;
      let l, c;
      for (t = i[0], l = 0; l < i.length - 1; l++)
        (c = O(this, a[o + l], e, l)),
          c === _ && (c = this._$AH[l]),
          s || (s = !M(c) || c !== this._$AH[l]),
          c === f ? (t = f) : t !== f && (t += (c != null ? c : "") + i[l + 1]),
          (this._$AH[l] = c);
    }
    s && !n && this.k(t);
  }
  k(t) {
    t === f
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t != null ? t : "");
  }
}
class pe extends V {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  k(t) {
    this.element[this.name] = t === f ? void 0 : t;
  }
}
const ue = S ? S.emptyScript : "";
class fe extends V {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  k(t) {
    t && t !== f
      ? this.element.setAttribute(this.name, ue)
      : this.element.removeAttribute(this.name);
  }
}
class ge extends V {
  constructor(t, e, o, n, i) {
    super(t, e, o, n, i), (this.type = 5);
  }
  _$AI(t, e = this) {
    var o;
    if ((t = (o = O(this, t, e, 0)) !== null && o !== void 0 ? o : f) === _)
      return;
    const n = this._$AH,
      i =
        (t === f && n !== f) ||
        t.capture !== n.capture ||
        t.once !== n.once ||
        t.passive !== n.passive,
      s = t !== f && (n === f || i);
    i && this.element.removeEventListener(this.name, this, n),
      s && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var e, o;
    typeof this._$AH == "function"
      ? this._$AH.call(
          (o =
            (e = this.options) === null || e === void 0 ? void 0 : e.host) !==
            null && o !== void 0
            ? o
            : this.element,
          t
        )
      : this._$AH.handleEvent(t);
  }
}
class ve {
  constructor(t, e, o) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = o);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    O(this, t);
  }
}
const Mt = window.litHtmlPolyfillSupport;
Mt == null || Mt(L, z),
  ((J = globalThis.litHtmlVersions) !== null && J !== void 0
    ? J
    : (globalThis.litHtmlVersions = [])
  ).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var Q, tt;
class p extends A {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Dt = void 0);
  }
  createRenderRoot() {
    var t, e;
    const o = super.createRenderRoot();
    return (
      ((t = (e = this.renderOptions).renderBefore) !== null && t !== void 0) ||
        (e.renderBefore = o.firstChild),
      o
    );
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Dt = qt(e, this.renderRoot, this.renderOptions));
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
    return _;
  }
}
(p.finalized = !0),
  (p._$litElement$ = !0),
  (Q = globalThis.litElementHydrateSupport) === null ||
    Q === void 0 ||
    Q.call(globalThis, { LitElement: p });
const Lt = globalThis.litElementPolyfillSupport;
Lt == null || Lt({ LitElement: p });
((tt = globalThis.litElementVersions) !== null && tt !== void 0
  ? tt
  : (globalThis.litElementVersions = [])
).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const D = (r) => (t) =>
  typeof t == "function"
    ? ((e, o) => (window.customElements.define(e, o), o))(r, t)
    : ((e, o) => {
        const { kind: n, elements: i } = o;
        return {
          kind: n,
          elements: i,
          finisher(s) {
            window.customElements.define(e, s);
          },
        };
      })(r, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const be = (r, t) =>
  t.kind === "method" && t.descriptor && !("value" in t.descriptor)
    ? {
        ...t,
        finisher(e) {
          e.createProperty(t.key, r);
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
          e.createProperty(t.key, r);
        },
      };
function m(r) {
  return (t, e) =>
    e !== void 0
      ? ((o, n, i) => {
          n.constructor.createProperty(i, o);
        })(r, t, e)
      : be(r, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function me(r) {
  return m({ ...r, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const dt = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
  },
  ht =
    (r) =>
    (...t) => ({ _$litDirective$: r, values: t });
class pt {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, o) {
    (this._$Ct = t), (this._$AM = e), (this._$Ci = o);
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
 */ const we = ht(
  class extends pt {
    constructor(r) {
      var t;
      if (
        (super(r),
        r.type !== dt.ATTRIBUTE ||
          r.name !== "style" ||
          ((t = r.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      )
        throw Error(
          "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute."
        );
    }
    render(r) {
      return Object.keys(r).reduce((t, e) => {
        const o = r[e];
        return o == null
          ? t
          : t +
              `${(e = e
                .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&")
                .toLowerCase())}:${o};`;
      }, "");
    }
    update(r, [t]) {
      const { style: e } = r.element;
      if (this.ut === void 0) {
        this.ut = new Set();
        for (const o in t) this.ut.add(o);
        return this.render(t);
      }
      this.ut.forEach((o) => {
        t[o] == null &&
          (this.ut.delete(o),
          o.includes("-") ? e.removeProperty(o) : (e[o] = ""));
      });
      for (const o in t) {
        const n = t[o];
        n != null &&
          (this.ut.add(o), o.includes("-") ? e.setProperty(o, n) : (e[o] = n));
      }
      return _;
    }
  }
);
class _e {
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
class $ {
  constructor(t) {
    (this.id = -1),
      (this.nativePointer = t),
      (this.pageX = t.pageX),
      (this.pageY = t.pageY),
      (this.clientX = t.clientX),
      (this.clientY = t.clientY),
      self.Touch && t instanceof Touch
        ? (this.id = t.identifier)
        : j(t) && (this.id = t.pointerId);
  }
  getCoalesced() {
    if ("getCoalescedEvents" in this.nativePointer) {
      const t = this.nativePointer.getCoalescedEvents().map((e) => new $(e));
      if (t.length > 0) return t;
    }
    return [this];
  }
}
const j = (r) => "pointerId" in r,
  et = (r) => "changedTouches" in r,
  zt = () => {};
class ye {
  constructor(
    t,
    {
      start: e = () => !0,
      move: o = zt,
      end: n = zt,
      rawUpdates: i = !1,
      avoidPointerEvents: s = !1,
    } = {}
  ) {
    (this._element = t),
      (this.startPointers = []),
      (this.currentPointers = []),
      (this._excludeFromButtonsCheck = new Set()),
      (this._pointerStart = (a) => {
        if (j(a) && a.buttons === 0)
          this._excludeFromButtonsCheck.add(a.pointerId);
        else if (!(a.buttons & 1)) return;
        const l = new $(a);
        this.currentPointers.some((c) => c.id === l.id) ||
          !this._triggerPointerStart(l, a) ||
          (j(a)
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
          this._triggerPointerStart(new $(l), a);
      }),
      (this._move = (a) => {
        if (
          !et(a) &&
          (!j(a) || !this._excludeFromButtonsCheck.has(a.pointerId)) &&
          a.buttons === 0
        ) {
          this._pointerEnd(a);
          return;
        }
        const l = this.currentPointers.slice(),
          c = et(a)
            ? Array.from(a.changedTouches).map((d) => new $(d))
            : [new $(a)],
          u = [];
        for (const d of c) {
          const h = this.currentPointers.findIndex((g) => g.id === d.id);
          h !== -1 && (u.push(d), (this.currentPointers[h] = d));
        }
        u.length !== 0 && this._moveCallback(l, u, a);
      }),
      (this._triggerPointerEnd = (a, l) => {
        if (!et(l) && l.buttons & 1) return !1;
        const c = this.currentPointers.findIndex((d) => d.id === a.id);
        if (c === -1) return !1;
        this.currentPointers.splice(c, 1),
          this.startPointers.splice(c, 1),
          this._excludeFromButtonsCheck.delete(a.id);
        const u = !(
          l.type === "mouseup" ||
          l.type === "touchend" ||
          l.type === "pointerup"
        );
        return this._endCallback(a, l, u), !0;
      }),
      (this._pointerEnd = (a) => {
        if (!!this._triggerPointerEnd(new $(a), a))
          if (j(a)) {
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
          this._triggerPointerEnd(new $(l), a);
      }),
      (this._startCallback = e),
      (this._moveCallback = o),
      (this._endCallback = n),
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
const Dt = (r, t) => (r <= t ? r : t);
var ot =
    (globalThis && globalThis.__classPrivateFieldGet) ||
    function (r, t, e, o) {
      if (e === "a" && !o)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof t == "function" ? r !== t || !o : !t.has(r))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return e === "m" ? o : e === "a" ? o.call(r) : o ? o.value : t.get(r);
    },
  rt,
  nt,
  st;
const $e = { initialPosition: {} };
class xe extends pt {
  constructor(t) {
    if ((super(t), (this.hasInitialised = !1), t.type !== dt.ELEMENT))
      throw new Error("The `drag` directive must be used on an element");
  }
  update(t, e) {
    if (this.hasInitialised) return;
    const o = t.element,
      [n, i] = e;
    o.setAttribute("data-dragging", "idle"),
      (n.draggableElement = o),
      (n.pointerTracker = new ye(o, {
        start(...s) {
          return i.start(...s), o.setAttribute("data-dragging", "dragging"), !0;
        },
        move(...s) {
          i.move(...s);
        },
        end(...s) {
          i.end(...s), o.setAttribute("data-dragging", "idle");
        },
      })),
      (this.hasInitialised = !0);
  }
  render(t, e) {
    return _;
  }
}
const ke = ht(xe);
class Ee {
  constructor(t, e = $e) {
    (this.cursorPositionX = null),
      (this.cursorPositionY = null),
      (this.pointerTracker = null),
      (this.draggableElement = null),
      (this.styles = { touchAction: "none", top: "0px", left: "0px" }),
      rt.set(
        this,
        (n, i) => (
          (this.cursorPositionX = Math.floor(n.pageX)),
          (this.cursorPositionY = Math.floor(n.pageY)),
          i.target.setAttribute("data-state", "dragging"),
          !0
        )
      ),
      nt.set(this, (n, i) => {
        const [s] = i;
        window.requestAnimationFrame(() => this.handleWindowMove(s));
      }),
      st.set(this, (n, i) => {
        i.target.removeAttribute("data-state");
      }),
      (this.host = t),
      this.host.addController(this);
    const { initialPosition: o = {} } = e;
    this.styles = { ...this.styles, ...o };
  }
  hostDisconnected() {
    this.pointerTracker && this.pointerTracker.stop();
  }
  applyDrag() {
    return this.host.draggable
      ? ke(this, {
          start: ot(this, rt, "f"),
          move: ot(this, nt, "f"),
          end: ot(this, st, "f"),
        })
      : null;
  }
  updateElPosition(t, e) {
    this.styles = { ...this.styles, left: t, top: e };
  }
  handleWindowMove(t) {
    const e = this.draggableElement;
    if (!e) return;
    const { top: o, left: n } = this.styles,
      i = Number(o == null ? void 0 : o.replace("px", "")),
      s = Number(n == null ? void 0 : n.replace("px", "")),
      a = Math.floor(t.pageX),
      l = Math.floor(t.pageY);
    if (
      a !== 0 &&
      l !== 0 &&
      (a !== this.cursorPositionX || l !== this.cursorPositionY)
    ) {
      const {
          bottom: c,
          right: u,
          width: d,
          height: h,
        } = e.getBoundingClientRect(),
        g = Dt(screen.availWidth, innerWidth),
        k = Dt(screen.availHeight, innerHeight),
        y = a - this.cursorPositionX,
        K = l - this.cursorPositionY,
        yt = i + K < 0,
        $t = s + y < 0,
        xt = c + K > k,
        kt = u + y > g,
        oe = xt || $t || kt || yt;
      if (((this.cursorPositionX = a), (this.cursorPositionY = l), oe)) {
        if (yt) {
          const w = `${s}px`;
          this.updateElPosition(w, "0px");
        }
        if ($t) {
          const w = `${i}px`;
          this.updateElPosition("0px", w);
        }
        if (xt) {
          const w = `${k - h}px`,
            R = `${s}px`;
          this.updateElPosition(R, w);
        }
        if (kt) {
          const w = `${i}px`,
            R = `${g - d}px`;
          this.updateElPosition(R, w);
        }
      } else {
        const w = `${i + K}px`,
          R = `${s + y}px`;
        this.updateElPosition(R, w);
      }
      this.host.requestUpdate();
    }
  }
}
(rt = new WeakMap()), (nt = new WeakMap()), (st = new WeakMap());
class Xt extends p {
  render() {
    return v`<div id="stack">
      <slot></slot>
    </div>`;
  }
}
Xt.styles = b`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;
window.customElements.define("a2k-stack", Xt);
class Vt extends p {
  render() {
    return v` <div id="panel">
      <slot></slot>
    </div>`;
  }
}
Vt.styles = b`
    #panel {
      --inset-shadow-padding: 2px;
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
    }
  `;
window.customElements.define("a2k-panel", Vt);
var Ae =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, o) {
      var n = arguments.length,
        i =
          n < 3
            ? t
            : o === null
            ? (o = Object.getOwnPropertyDescriptor(t, e))
            : o,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(r, t, e, o);
      else
        for (var a = r.length - 1; a >= 0; a--)
          (s = r[a]) &&
            (i = (n < 3 ? s(i) : n > 3 ? s(t, e, i) : s(t, e)) || i);
      return n > 3 && i && Object.defineProperty(t, e, i), i;
    },
  Te =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
class ut extends p {
  constructor() {
    super(...arguments), (this.closeable = !1);
  }
  render() {
    return v`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `;
  }
}
ut.styles = b`
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
  `;
Ae(
  [m({ type: Boolean }), Te("design:type", Object)],
  ut.prototype,
  "closeable",
  void 0
);
window.customElements.define("a2k-window-topbar", ut);
var Ft =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, o) {
      var n = arguments.length,
        i =
          n < 3
            ? t
            : o === null
            ? (o = Object.getOwnPropertyDescriptor(t, e))
            : o,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(r, t, e, o);
      else
        for (var a = r.length - 1; a >= 0; a--)
          (s = r[a]) &&
            (i = (n < 3 ? s(i) : n > 3 ? s(t, e, i) : s(t, e)) || i);
      return n > 3 && i && Object.defineProperty(t, e, i), i;
    },
  Kt =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
class F extends p {
  constructor() {
    super(...arguments), (this.disabled = !1), (this.size = "medium");
  }
  render() {
    return v` <button data-size="${this.size}" ?disabled=${this.disabled}>
      <slot></slot>
    </button>`;
  }
}
F.styles = b`
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
  `;
Ft(
  [m({ type: Boolean }), Kt("design:type", Object)],
  F.prototype,
  "disabled",
  void 0
);
Ft(
  [m({ type: String }), Kt("design:type", String)],
  F.prototype,
  "size",
  void 0
);
window.customElements.define("a2k-button", F);
var Se =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, o) {
      var n = arguments.length,
        i =
          n < 3
            ? t
            : o === null
            ? (o = Object.getOwnPropertyDescriptor(t, e))
            : o,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(r, t, e, o);
      else
        for (var a = r.length - 1; a >= 0; a--)
          (s = r[a]) &&
            (i = (n < 3 ? s(i) : n > 3 ? s(t, e, i) : s(t, e)) || i);
      return n > 3 && i && Object.defineProperty(t, e, i), i;
    },
  Pe =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
const Oe = new URL("/assets/a2k-icons.3ccf22cf.svg", self.location).href;
class ft extends p {
  constructor() {
    super(...arguments), (this.icon = "");
  }
  render() {
    return (
      this.icon ||
        console.warn(
          "This icon is a missing a 'name', please specify the 'name' of the icon you want to display"
        ),
      ce`
      <svg id="icon" height="1em" width="1em">
        <use href="${Oe}#${this.icon}"></use>
      </svg>
    `
    );
  }
}
ft.styles = b`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;
Se(
  [m({ type: String }), Pe("design:type", Object)],
  ft.prototype,
  "icon",
  void 0
);
window.customElements.define("a2k-icon", ft);
var Re =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, o) {
      var n = arguments.length,
        i =
          n < 3
            ? t
            : o === null
            ? (o = Object.getOwnPropertyDescriptor(t, e))
            : o,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(r, t, e, o);
      else
        for (var a = r.length - 1; a >= 0; a--)
          (s = r[a]) &&
            (i = (n < 3 ? s(i) : n > 3 ? s(t, e, i) : s(t, e)) || i);
      return n > 3 && i && Object.defineProperty(t, e, i), i;
    },
  Ce =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
class gt extends p {
  constructor() {
    super(...arguments), (this.closeable = !1);
  }
  handleClose(t) {
    const e = new Event("close", { bubbles: !0, composed: !0 });
    t.target.dispatchEvent(e);
  }
  render() {
    return v`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
    >
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `;
  }
}
gt.styles = b`
    #icon-wrapper {
      font-size: 8px;
    }
  `;
Re(
  [m({ type: Boolean }), Ce("design:type", Object)],
  gt.prototype,
  "closeable",
  void 0
);
window.customElements.define("a2k-window-actions", gt);
var vt =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, o) {
      var n = arguments.length,
        i =
          n < 3
            ? t
            : o === null
            ? (o = Object.getOwnPropertyDescriptor(t, e))
            : o,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(r, t, e, o);
      else
        for (var a = r.length - 1; a >= 0; a--)
          (s = r[a]) &&
            (i = (n < 3 ? s(i) : n > 3 ? s(t, e, i) : s(t, e)) || i);
      return n > 3 && i && Object.defineProperty(t, e, i), i;
    },
  bt =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
class N extends p {
  constructor() {
    super(),
      (this.heading = ""),
      (this.draggable = !1),
      (this.closeable = !1),
      (this.drag = new Ee(this, {
        initialPosition: { left: "32px", top: "32px" },
      })),
      this.addEventListener("close", () => this.remove());
  }
  render() {
    return v`
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
    `;
  }
}
N.styles = b`
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
  `;
vt(
  [m({ type: String }), bt("design:type", Object)],
  N.prototype,
  "heading",
  void 0
);
vt(
  [m({ type: Boolean }), bt("design:type", Object)],
  N.prototype,
  "draggable",
  void 0
);
vt(
  [m({ type: Boolean }), bt("design:type", Object)],
  N.prototype,
  "closeable",
  void 0
);
window.customElements.define("a2k-window", N);
var Zt =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, o) {
      var n = arguments.length,
        i =
          n < 3
            ? t
            : o === null
            ? (o = Object.getOwnPropertyDescriptor(t, e))
            : o,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(r, t, e, o);
      else
        for (var a = r.length - 1; a >= 0; a--)
          (s = r[a]) &&
            (i = (n < 3 ? s(i) : n > 3 ? s(t, e, i) : s(t, e)) || i);
      return n > 3 && i && Object.defineProperty(t, e, i), i;
    },
  je =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
let W = class extends p {
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
W.styles = b`
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
  `;
Zt([m(), je("design:type", Object)], W.prototype, "open", void 0);
W = Zt([D("a2k-start-menu-item")], W);
var Gt =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, o) {
      var n = arguments.length,
        i =
          n < 3
            ? t
            : o === null
            ? (o = Object.getOwnPropertyDescriptor(t, e))
            : o,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(r, t, e, o);
      else
        for (var a = r.length - 1; a >= 0; a--)
          (s = r[a]) &&
            (i = (n < 3 ? s(i) : n > 3 ? s(t, e, i) : s(t, e)) || i);
      return n > 3 && i && Object.defineProperty(t, e, i), i;
    },
  Ue =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
let Y = class extends p {
  constructor() {
    super(...arguments), (this.open = !1);
  }
  handleAboutClick() {
    const t = v` <a2k-window
      draggable
      closeable
      heading="About Andricos2000"
    >
      <p>Deets coming soon...</p>
    </a2k-window>`;
    qt(t, document.body);
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
Y.styles = b`
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
  `;
Gt([m(), Ue("design:type", Object)], Y.prototype, "open", void 0);
Y = Gt([D("a2k-start-menu")], Y);
var Jt =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, o) {
      var n = arguments.length,
        i =
          n < 3
            ? t
            : o === null
            ? (o = Object.getOwnPropertyDescriptor(t, e))
            : o,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(r, t, e, o);
      else
        for (var a = r.length - 1; a >= 0; a--)
          (s = r[a]) &&
            (i = (n < 3 ? s(i) : n > 3 ? s(t, e, i) : s(t, e)) || i);
      return n > 3 && i && Object.defineProperty(t, e, i), i;
    },
  Me =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
let q = class extends p {
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
q.styles = b`
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
  `;
Jt([me(), Me("design:type", Object)], q.prototype, "_isMenuOpen", void 0);
q = Jt([D("a2k-start-button")], q);
var Le =
  (globalThis && globalThis.__decorate) ||
  function (r, t, e, o) {
    var n = arguments.length,
      i =
        n < 3
          ? t
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, e))
          : o,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(r, t, e, o);
    else
      for (var a = r.length - 1; a >= 0; a--)
        (s = r[a]) && (i = (n < 3 ? s(i) : n > 3 ? s(t, e, i) : s(t, e)) || i);
    return n > 3 && i && Object.defineProperty(t, e, i), i;
  };
let at = class extends p {
  constructor() {
    super(...arguments), (this.clock = new _e(this));
  }
  render() {
    const t = ze.format(this.clock.value);
    return v`<div class="utility-bar">${t}</div>`;
  }
};
at.styles = b`
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
at = Le([D("a2k-utility-bar")], at);
const ze = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
class Qt extends p {
  render() {
    return v`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`;
  }
}
Qt.styles = b`
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
  `;
window.customElements.define("a2k-taskbar", Qt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const De = ht(
  class extends pt {
    constructor(r) {
      var t;
      if (
        (super(r),
        r.type !== dt.ATTRIBUTE ||
          r.name !== "class" ||
          ((t = r.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      )
        throw Error(
          "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
        );
    }
    render(r) {
      return (
        " " +
        Object.keys(r)
          .filter((t) => r[t])
          .join(" ") +
        " "
      );
    }
    update(r, [t]) {
      var e, o;
      if (this.st === void 0) {
        (this.st = new Set()),
          r.strings !== void 0 &&
            (this.et = new Set(
              r.strings
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
      const n = r.element.classList;
      this.st.forEach((i) => {
        i in t || (n.remove(i), this.st.delete(i));
      });
      for (const i in t) {
        const s = !!t[i];
        s === this.st.has(i) ||
          ((o = this.et) === null || o === void 0 ? void 0 : o.has(i)) ||
          (s ? (n.add(i), this.st.add(i)) : (n.remove(i), this.st.delete(i)));
      }
      return _;
    }
  }
);
var te =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, o) {
      var n = arguments.length,
        i =
          n < 3
            ? t
            : o === null
            ? (o = Object.getOwnPropertyDescriptor(t, e))
            : o,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(r, t, e, o);
      else
        for (var a = r.length - 1; a >= 0; a--)
          (s = r[a]) &&
            (i = (n < 3 ? s(i) : n > 3 ? s(t, e, i) : s(t, e)) || i);
      return n > 3 && i && Object.defineProperty(t, e, i), i;
    },
  Ne =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
let X = class extends p {
  constructor() {
    super(...arguments), (this.filled = "none");
  }
  render() {
    const t = {
      "half-filled": this.filled !== "none",
      filled: this.filled === "filled",
    };
    return v`<div class=${De(t)} id="unit">
      <div></div>
      <div></div>
    </div>`;
  }
};
X.styles = b`
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
te([m(), Ne("design:type", String)], X.prototype, "filled", void 0);
X = te([D("a2k-progress-unit")], X);
var He =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, o) {
      var n = arguments.length,
        i =
          n < 3
            ? t
            : o === null
            ? (o = Object.getOwnPropertyDescriptor(t, e))
            : o,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(r, t, e, o);
      else
        for (var a = r.length - 1; a >= 0; a--)
          (s = r[a]) &&
            (i = (n < 3 ? s(i) : n > 3 ? s(t, e, i) : s(t, e)) || i);
      return n > 3 && i && Object.defineProperty(t, e, i), i;
    },
  Be =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
class mt extends p {
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
    const { gap: o } = getComputedStyle(t),
      i = Number(o.replace("px", "")) + 12,
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
      o = Ie(e),
      n = Math.floor(e);
    t.forEach((i, s) => {
      s < n
        ? i.setAttribute("filled", "filled")
        : s === n && o >= 0.5
        ? i.setAttribute("filled", "half")
        : i.setAttribute("filled", "none");
    });
  }
  render() {
    return v`<div id="progress" role="progress"></div>`;
  }
}
mt.styles = b`
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
He(
  [m({ type: Number }), Be("design:type", Object)],
  mt.prototype,
  "progress",
  void 0
);
const Ie = (r) => Math.floor((r % 1) * 10) / 10;
window.customElements.define("a2k-progress", mt);
class ee extends p {
  render() {
    return v`<div id="desktop">
      <slot />
    </div>`;
  }
}
ee.styles = b`
    #desktop {
      height: 100%;
    }
  `;
window.customElements.define("a2k-desktop", ee);
var wt =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, o) {
      var n = arguments.length,
        i =
          n < 3
            ? t
            : o === null
            ? (o = Object.getOwnPropertyDescriptor(t, e))
            : o,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(r, t, e, o);
      else
        for (var a = r.length - 1; a >= 0; a--)
          (s = r[a]) &&
            (i = (n < 3 ? s(i) : n > 3 ? s(t, e, i) : s(t, e)) || i);
      return n > 3 && i && Object.defineProperty(t, e, i), i;
    },
  _t =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
class H extends p {
  constructor() {
    super(...arguments),
      (this.text = ""),
      (this.icon = ""),
      (this.onOpen = () => null);
  }
  render() {
    return v` <button id="icon-wrapper" @dblclick=${this.onOpen}>
      <a2k-icon icon="${this.icon}"></a2k-icon>
      <p>${this.text}</p>
    </button>`;
  }
}
H.styles = b`
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
    }

    #icon-wrapper p {
      padding: var(--desktop-icon-text-padding);
      margin: 0;
    }

    #icon-wrapper:focus p {
      outline: var(--desktop-icon-text-outline-focus);
      background: var(--desktop-icon-text-background-color-focus);
    }
  `;
wt(
  [m({ type: String }), _t("design:type", Object)],
  H.prototype,
  "text",
  void 0
);
wt(
  [m({ type: String }), _t("design:type", Object)],
  H.prototype,
  "icon",
  void 0
);
wt([m(), _t("design:type", Object)], H.prototype, "onOpen", void 0);
window.customElements.define("a2k-desktop-icon", H);
let B = 0;
const I = document.querySelector("a2k-window[heading='Please wait...']"),
  We = setInterval(() => {
    const r = document.querySelector("a2k-progress");
    if (!!r && ((B = B + 1.2), r.setAttribute("progress", B), B > 70)) {
      for (; I.firstChild; ) I.removeChild(I.lastChild);
      (I.innerHTML = `
      <p>There was an error loading Andricos2000</p>
      <p>Andricos2000 is still a work in progress, keeping checking back for updates or follow progress on Twitter</p>
    `),
        clearInterval(We);
    }
  }, 100),
  Ye = document.querySelector('a2k-desktop-icon[icon="twitter-icon"]');
Ye.onOpen = () => {
  window.location.href = "https://twitter.com/andricokaroulla";
};
