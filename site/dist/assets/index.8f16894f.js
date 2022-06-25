const Gt = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList")
        for (const s of r.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(n) {
    const r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerpolicy && (r.referrerPolicy = n.referrerpolicy),
      n.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : n.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function i(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = e(n);
    fetch(n.href, r);
  }
};
Gt();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const nt =
    window.ShadowRoot &&
    (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  st = Symbol(),
  _t = new Map();
class jt {
  constructor(t, e) {
    if (((this._$cssResult$ = !0), e !== st))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    this.cssText = t;
  }
  get styleSheet() {
    let t = _t.get(this.cssText);
    return (
      nt &&
        t === void 0 &&
        (_t.set(this.cssText, (t = new CSSStyleSheet())),
        t.replaceSync(this.cssText)),
      t
    );
  }
  toString() {
    return this.cssText;
  }
}
const Jt = (o) => new jt(typeof o == "string" ? o : o + "", st),
  b = (o, ...t) => {
    const e =
      o.length === 1
        ? o[0]
        : t.reduce(
            (i, n, r) =>
              i +
              ((s) => {
                if (s._$cssResult$ === !0) return s.cssText;
                if (typeof s == "number") return s;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    s +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(n) +
              o[r + 1],
            o[0]
          );
    return new jt(e, st);
  },
  Qt = (o, t) => {
    nt
      ? (o.adoptedStyleSheets = t.map((e) =>
          e instanceof CSSStyleSheet ? e : e.styleSheet
        ))
      : t.forEach((e) => {
          const i = document.createElement("style"),
            n = window.litNonce;
          n !== void 0 && i.setAttribute("nonce", n),
            (i.textContent = e.cssText),
            o.appendChild(i);
        });
  },
  yt = nt
    ? (o) => o
    : (o) =>
        o instanceof CSSStyleSheet
          ? ((t) => {
              let e = "";
              for (const i of t.cssRules) e += i.cssText;
              return Jt(e);
            })(o)
          : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var F;
const $t = window.trustedTypes,
  te = $t ? $t.emptyScript : "",
  xt = window.reactiveElementPolyfillSupport,
  tt = {
    toAttribute(o, t) {
      switch (t) {
        case Boolean:
          o = o ? te : null;
          break;
        case Object:
        case Array:
          o = o == null ? o : JSON.stringify(o);
      }
      return o;
    },
    fromAttribute(o, t) {
      let e = o;
      switch (t) {
        case Boolean:
          e = o !== null;
          break;
        case Number:
          e = o === null ? null : Number(o);
          break;
        case Object:
        case Array:
          try {
            e = JSON.parse(o);
          } catch {
            e = null;
          }
      }
      return e;
    },
  },
  Ut = (o, t) => t !== o && (t == t || o == o),
  V = {
    attribute: !0,
    type: String,
    converter: tt,
    reflect: !1,
    hasChanged: Ut,
  };
class E extends HTMLElement {
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
      this.elementProperties.forEach((e, i) => {
        const n = this._$Eh(i, e);
        n !== void 0 && (this._$Eu.set(n, i), t.push(n));
      }),
      t
    );
  }
  static createProperty(t, e = V) {
    if (
      (e.state && (e.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, e),
      !e.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const i = typeof t == "symbol" ? Symbol() : "__" + t,
        n = this.getPropertyDescriptor(t, i, e);
      n !== void 0 && Object.defineProperty(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return {
      get() {
        return this[e];
      },
      set(n) {
        const r = this[t];
        (this[e] = n), this.requestUpdate(t, r, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || V;
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
        i = [
          ...Object.getOwnPropertyNames(e),
          ...Object.getOwnPropertySymbols(e),
        ];
      for (const n of i) this.createProperty(n, e[n]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const n of i) e.unshift(yt(n));
    } else t !== void 0 && e.push(yt(t));
    return e;
  }
  static _$Eh(t, e) {
    const i = e.attribute;
    return i === !1
      ? void 0
      : typeof i == "string"
      ? i
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
    var e, i;
    ((e = this._$Eg) !== null && e !== void 0 ? e : (this._$Eg = [])).push(t),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((i = t.hostConnected) === null || i === void 0 || i.call(t));
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
    return Qt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (t = this._$Eg) === null ||
        t === void 0 ||
        t.forEach((e) => {
          var i;
          return (i = e.hostConnected) === null || i === void 0
            ? void 0
            : i.call(e);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    (t = this._$Eg) === null ||
      t === void 0 ||
      t.forEach((e) => {
        var i;
        return (i = e.hostDisconnected) === null || i === void 0
          ? void 0
          : i.call(e);
      });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$ES(t, e, i = V) {
    var n, r;
    const s = this.constructor._$Eh(t, i);
    if (s !== void 0 && i.reflect === !0) {
      const a = (
        (r =
          (n = i.converter) === null || n === void 0
            ? void 0
            : n.toAttribute) !== null && r !== void 0
          ? r
          : tt.toAttribute
      )(e, i.type);
      (this._$Ei = t),
        a == null ? this.removeAttribute(s) : this.setAttribute(s, a),
        (this._$Ei = null);
    }
  }
  _$AK(t, e) {
    var i, n, r;
    const s = this.constructor,
      a = s._$Eu.get(t);
    if (a !== void 0 && this._$Ei !== a) {
      const l = s.getPropertyOptions(a),
        d = l.converter,
        u =
          (r =
            (n =
              (i = d) === null || i === void 0 ? void 0 : i.fromAttribute) !==
              null && n !== void 0
              ? n
              : typeof d == "function"
              ? d
              : null) !== null && r !== void 0
            ? r
            : tt.fromAttribute;
      (this._$Ei = a), (this[a] = u(e, l.type)), (this._$Ei = null);
    }
  }
  requestUpdate(t, e, i) {
    let n = !0;
    t !== void 0 &&
      (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || Ut)(
        this[t],
        e
      )
        ? (this._$AL.has(t) || this._$AL.set(t, e),
          i.reflect === !0 &&
            this._$Ei !== t &&
            (this._$E_ === void 0 && (this._$E_ = new Map()),
            this._$E_.set(t, i)))
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
        (this._$Et.forEach((n, r) => (this[r] = n)), (this._$Et = void 0));
    let e = !1;
    const i = this._$AL;
    try {
      (e = this.shouldUpdate(i)),
        e
          ? (this.willUpdate(i),
            (t = this._$Eg) === null ||
              t === void 0 ||
              t.forEach((n) => {
                var r;
                return (r = n.hostUpdate) === null || r === void 0
                  ? void 0
                  : r.call(n);
              }),
            this.update(i))
          : this._$EU();
    } catch (n) {
      throw ((e = !1), this._$EU(), n);
    }
    e && this._$AE(i);
  }
  willUpdate(t) {}
  _$AE(t) {
    var e;
    (e = this._$Eg) === null ||
      e === void 0 ||
      e.forEach((i) => {
        var n;
        return (n = i.hostUpdated) === null || n === void 0
          ? void 0
          : n.call(i);
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
      (this._$E_.forEach((e, i) => this._$ES(i, this[i], e)),
      (this._$E_ = void 0)),
      this._$EU();
  }
  updated(t) {}
  firstUpdated(t) {}
}
(E.finalized = !0),
  (E.elementProperties = new Map()),
  (E.elementStyles = []),
  (E.shadowRootOptions = { mode: "open" }),
  xt == null || xt({ ReactiveElement: E }),
  ((F = globalThis.reactiveElementVersions) !== null && F !== void 0
    ? F
    : (globalThis.reactiveElementVersions = [])
  ).push("1.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var K;
const T = globalThis.trustedTypes,
  kt = T ? T.createPolicy("lit-html", { createHTML: (o) => o }) : void 0,
  $ = `lit$${(Math.random() + "").slice(9)}$`,
  Lt = "?" + $,
  ee = `<${Lt}>`,
  S = document,
  R = (o = "") => S.createComment(o),
  j = (o) => o === null || (typeof o != "object" && typeof o != "function"),
  Mt = Array.isArray,
  ie = (o) => {
    var t;
    return (
      Mt(o) ||
      typeof ((t = o) === null || t === void 0 ? void 0 : t[Symbol.iterator]) ==
        "function"
    );
  },
  C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Et = /-->/g,
  At = />/g,
  x =
    />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
  Tt = /'/g,
  St = /"/g,
  zt = /^(?:script|style|textarea)$/i,
  Dt =
    (o) =>
    (t, ...e) => ({ _$litType$: o, strings: t, values: e }),
  v = Dt(1),
  re = Dt(2),
  w = Symbol.for("lit-noChange"),
  g = Symbol.for("lit-nothing"),
  Pt = new WeakMap(),
  Nt = (o, t, e) => {
    var i, n;
    const r =
      (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0
        ? i
        : t;
    let s = r._$litPart$;
    if (s === void 0) {
      const a =
        (n = e == null ? void 0 : e.renderBefore) !== null && n !== void 0
          ? n
          : null;
      r._$litPart$ = s = new L(
        t.insertBefore(R(), a),
        a,
        void 0,
        e != null ? e : {}
      );
    }
    return s._$AI(o), s;
  },
  A = S.createTreeWalker(S, 129, null, !1),
  oe = (o, t) => {
    const e = o.length - 1,
      i = [];
    let n,
      r = t === 2 ? "<svg>" : "",
      s = C;
    for (let l = 0; l < e; l++) {
      const d = o[l];
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
              ? (s = At)
              : c[2] !== void 0
              ? (zt.test(c[2]) && (n = RegExp("</" + c[2], "g")), (s = x))
              : c[3] !== void 0 && (s = x)
            : s === x
            ? c[0] === ">"
              ? ((s = n != null ? n : C), (h = -1))
              : c[1] === void 0
              ? (h = -2)
              : ((h = s.lastIndex - c[2].length),
                (u = c[1]),
                (s = c[3] === void 0 ? x : c[3] === '"' ? St : Tt))
            : s === St || s === Tt
            ? (s = x)
            : s === Et || s === At
            ? (s = C)
            : ((s = x), (n = void 0));
      const k = s === x && o[l + 1].startsWith("/>") ? " " : "";
      r +=
        s === C
          ? d + ee
          : h >= 0
          ? (i.push(u), d.slice(0, h) + "$lit$" + d.slice(h) + $ + k)
          : d + $ + (h === -2 ? (i.push(void 0), l) : k);
    }
    const a = r + (o[e] || "<?>") + (t === 2 ? "</svg>" : "");
    return [kt !== void 0 ? kt.createHTML(a) : a, i];
  };
class U {
  constructor({ strings: t, _$litType$: e }, i) {
    let n;
    this.parts = [];
    let r = 0,
      s = 0;
    const a = t.length - 1,
      l = this.parts,
      [d, u] = oe(t, e);
    if (
      ((this.el = U.createElement(d, i)),
      (A.currentNode = this.el.content),
      e === 2)
    ) {
      const c = this.el.content,
        h = c.firstChild;
      h.remove(), c.append(...h.childNodes);
    }
    for (; (n = A.nextNode()) !== null && l.length < a; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const c = [];
          for (const h of n.getAttributeNames())
            if (h.endsWith("$lit$") || h.startsWith($)) {
              const f = u[s++];
              if ((c.push(h), f !== void 0)) {
                const k = n.getAttribute(f.toLowerCase() + "$lit$").split($),
                  _ = /([.?@])?(.*)/.exec(f);
                l.push({
                  type: 1,
                  index: r,
                  name: _[2],
                  strings: k,
                  ctor:
                    _[1] === "."
                      ? se
                      : _[1] === "?"
                      ? le
                      : _[1] === "@"
                      ? de
                      : Y,
                });
              } else l.push({ type: 6, index: r });
            }
          for (const h of c) n.removeAttribute(h);
        }
        if (zt.test(n.tagName)) {
          const c = n.textContent.split($),
            h = c.length - 1;
          if (h > 0) {
            n.textContent = T ? T.emptyScript : "";
            for (let f = 0; f < h; f++)
              n.append(c[f], R()),
                A.nextNode(),
                l.push({ type: 2, index: ++r });
            n.append(c[h], R());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === Lt) l.push({ type: 2, index: r });
        else {
          let c = -1;
          for (; (c = n.data.indexOf($, c + 1)) !== -1; )
            l.push({ type: 7, index: r }), (c += $.length - 1);
        }
      r++;
    }
  }
  static createElement(t, e) {
    const i = S.createElement("template");
    return (i.innerHTML = t), i;
  }
}
function P(o, t, e = o, i) {
  var n, r, s, a;
  if (t === w) return t;
  let l =
    i !== void 0
      ? (n = e._$Cl) === null || n === void 0
        ? void 0
        : n[i]
      : e._$Cu;
  const d = j(t) ? void 0 : t._$litDirective$;
  return (
    (l == null ? void 0 : l.constructor) !== d &&
      ((r = l == null ? void 0 : l._$AO) === null ||
        r === void 0 ||
        r.call(l, !1),
      d === void 0 ? (l = void 0) : ((l = new d(o)), l._$AT(o, e, i)),
      i !== void 0
        ? (((s = (a = e)._$Cl) !== null && s !== void 0 ? s : (a._$Cl = []))[
            i
          ] = l)
        : (e._$Cu = l)),
    l !== void 0 && (t = P(o, l._$AS(o, t.values), l, i)),
    t
  );
}
class ne {
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
        el: { content: i },
        parts: n,
      } = this._$AD,
      r = (
        (e = t == null ? void 0 : t.creationScope) !== null && e !== void 0
          ? e
          : S
      ).importNode(i, !0);
    A.currentNode = r;
    let s = A.nextNode(),
      a = 0,
      l = 0,
      d = n[0];
    for (; d !== void 0; ) {
      if (a === d.index) {
        let u;
        d.type === 2
          ? (u = new L(s, s.nextSibling, this, t))
          : d.type === 1
          ? (u = new d.ctor(s, d.name, d.strings, this, t))
          : d.type === 6 && (u = new ce(s, this, t)),
          this.v.push(u),
          (d = n[++l]);
      }
      a !== (d == null ? void 0 : d.index) && ((s = A.nextNode()), a++);
    }
    return r;
  }
  m(t) {
    let e = 0;
    for (const i of this.v)
      i !== void 0 &&
        (i.strings !== void 0
          ? (i._$AI(t, i, e), (e += i.strings.length - 2))
          : i._$AI(t[e])),
        e++;
  }
}
class L {
  constructor(t, e, i, n) {
    var r;
    (this.type = 2),
      (this._$AH = g),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = i),
      (this.options = n),
      (this._$Cg =
        (r = n == null ? void 0 : n.isConnected) === null || r === void 0 || r);
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
      j(t)
        ? t === g || t == null || t === ""
          ? (this._$AH !== g && this._$AR(), (this._$AH = g))
          : t !== this._$AH && t !== w && this.$(t)
        : t._$litType$ !== void 0
        ? this.T(t)
        : t.nodeType !== void 0
        ? this.S(t)
        : ie(t)
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
    this._$AH !== g && j(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.S(S.createTextNode(t)),
      (this._$AH = t);
  }
  T(t) {
    var e;
    const { values: i, _$litType$: n } = t,
      r =
        typeof n == "number"
          ? this._$AC(t)
          : (n.el === void 0 && (n.el = U.createElement(n.h, this.options)), n);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.m(i);
    else {
      const s = new ne(r, this),
        a = s.p(this.options);
      s.m(i), this.S(a), (this._$AH = s);
    }
  }
  _$AC(t) {
    let e = Pt.get(t.strings);
    return e === void 0 && Pt.set(t.strings, (e = new U(t))), e;
  }
  M(t) {
    Mt(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let i,
      n = 0;
    for (const r of t)
      n === e.length
        ? e.push((i = new L(this.A(R()), this.A(R()), this, this.options)))
        : (i = e[n]),
        i._$AI(r),
        n++;
    n < e.length && (this._$AR(i && i._$AB.nextSibling, n), (e.length = n));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for (
      (i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e);
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
class Y {
  constructor(t, e, i, n, r) {
    (this.type = 1),
      (this._$AH = g),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = n),
      (this.options = r),
      i.length > 2 || i[0] !== "" || i[1] !== ""
        ? ((this._$AH = Array(i.length - 1).fill(new String())),
          (this.strings = i))
        : (this._$AH = g);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, n) {
    const r = this.strings;
    let s = !1;
    if (r === void 0)
      (t = P(this, t, e, 0)),
        (s = !j(t) || (t !== this._$AH && t !== w)),
        s && (this._$AH = t);
    else {
      const a = t;
      let l, d;
      for (t = r[0], l = 0; l < r.length - 1; l++)
        (d = P(this, a[i + l], e, l)),
          d === w && (d = this._$AH[l]),
          s || (s = !j(d) || d !== this._$AH[l]),
          d === g ? (t = g) : t !== g && (t += (d != null ? d : "") + r[l + 1]),
          (this._$AH[l] = d);
    }
    s && !n && this.k(t);
  }
  k(t) {
    t === g
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t != null ? t : "");
  }
}
class se extends Y {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  k(t) {
    this.element[this.name] = t === g ? void 0 : t;
  }
}
const ae = T ? T.emptyScript : "";
class le extends Y {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  k(t) {
    t && t !== g
      ? this.element.setAttribute(this.name, ae)
      : this.element.removeAttribute(this.name);
  }
}
class de extends Y {
  constructor(t, e, i, n, r) {
    super(t, e, i, n, r), (this.type = 5);
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = P(this, t, e, 0)) !== null && i !== void 0 ? i : g) === w)
      return;
    const n = this._$AH,
      r =
        (t === g && n !== g) ||
        t.capture !== n.capture ||
        t.once !== n.once ||
        t.passive !== n.passive,
      s = t !== g && (n === g || r);
    r && this.element.removeEventListener(this.name, this, n),
      s && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var e, i;
    typeof this._$AH == "function"
      ? this._$AH.call(
          (i =
            (e = this.options) === null || e === void 0 ? void 0 : e.host) !==
            null && i !== void 0
            ? i
            : this.element,
          t
        )
      : this._$AH.handleEvent(t);
  }
}
class ce {
  constructor(t, e, i) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = i);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    P(this, t);
  }
}
const Ct = window.litHtmlPolyfillSupport;
Ct == null || Ct(U, L),
  ((K = globalThis.litHtmlVersions) !== null && K !== void 0
    ? K
    : (globalThis.litHtmlVersions = [])
  ).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var Z, G;
class p extends E {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Dt = void 0);
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return (
      ((t = (e = this.renderOptions).renderBefore) !== null && t !== void 0) ||
        (e.renderBefore = i.firstChild),
      i
    );
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Dt = Nt(e, this.renderRoot, this.renderOptions));
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
(p.finalized = !0),
  (p._$litElement$ = !0),
  (Z = globalThis.litElementHydrateSupport) === null ||
    Z === void 0 ||
    Z.call(globalThis, { LitElement: p });
const Ot = globalThis.litElementPolyfillSupport;
Ot == null || Ot({ LitElement: p });
((G = globalThis.litElementVersions) !== null && G !== void 0
  ? G
  : (globalThis.litElementVersions = [])
).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const M = (o) => (t) =>
  typeof t == "function"
    ? ((e, i) => (window.customElements.define(e, i), i))(o, t)
    : ((e, i) => {
        const { kind: n, elements: r } = i;
        return {
          kind: n,
          elements: r,
          finisher(s) {
            window.customElements.define(e, s);
          },
        };
      })(o, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const he = (o, t) =>
  t.kind === "method" && t.descriptor && !("value" in t.descriptor)
    ? {
        ...t,
        finisher(e) {
          e.createProperty(t.key, o);
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
          e.createProperty(t.key, o);
        },
      };
function m(o) {
  return (t, e) =>
    e !== void 0
      ? ((i, n, r) => {
          n.constructor.createProperty(r, i);
        })(o, t, e)
      : he(o, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function ue(o) {
  return m({ ...o, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const at = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
  },
  lt =
    (o) =>
    (...t) => ({ _$litDirective$: o, values: t });
class dt {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    (this._$Ct = t), (this._$AM = e), (this._$Ci = i);
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
 */ const pe = lt(
  class extends dt {
    constructor(o) {
      var t;
      if (
        (super(o),
        o.type !== at.ATTRIBUTE ||
          o.name !== "style" ||
          ((t = o.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      )
        throw Error(
          "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute."
        );
    }
    render(o) {
      return Object.keys(o).reduce((t, e) => {
        const i = o[e];
        return i == null
          ? t
          : t +
              `${(e = e
                .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&")
                .toLowerCase())}:${i};`;
      }, "");
    }
    update(o, [t]) {
      const { style: e } = o.element;
      if (this.ut === void 0) {
        this.ut = new Set();
        for (const i in t) this.ut.add(i);
        return this.render(t);
      }
      this.ut.forEach((i) => {
        t[i] == null &&
          (this.ut.delete(i),
          i.includes("-") ? e.removeProperty(i) : (e[i] = ""));
      });
      for (const i in t) {
        const n = t[i];
        n != null &&
          (this.ut.add(i), i.includes("-") ? e.setProperty(i, n) : (e[i] = n));
      }
      return w;
    }
  }
);
class ge {
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
const O = (o) => "pointerId" in o,
  J = (o) => "changedTouches" in o,
  Rt = () => {};
class fe {
  constructor(
    t,
    {
      start: e = () => !0,
      move: i = Rt,
      end: n = Rt,
      rawUpdates: r = !1,
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
          !J(a) &&
          (!O(a) || !this._excludeFromButtonsCheck.has(a.pointerId)) &&
          a.buttons === 0
        ) {
          this._pointerEnd(a);
          return;
        }
        const l = this.currentPointers.slice(),
          d = J(a)
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
        if (!J(l) && l.buttons & 1) return !1;
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
      (this._moveCallback = i),
      (this._endCallback = n),
      (this._rawUpdates = r && "onpointerrawupdate" in window),
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
var Q =
    (globalThis && globalThis.__classPrivateFieldGet) ||
    function (o, t, e, i) {
      if (e === "a" && !i)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof t == "function" ? o !== t || !i : !t.has(o))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return e === "m" ? i : e === "a" ? i.call(o) : i ? i.value : t.get(o);
    },
  et,
  it,
  rt;
class ve extends dt {
  constructor(t) {
    if ((super(t), (this.hasInitialised = !1), t.type !== at.ELEMENT))
      throw new Error("The `drag` directive must be used on an element");
  }
  update(t, e) {
    if (this.hasInitialised) return;
    const i = t.element,
      [n, r] = e;
    i.setAttribute("data-dragging", "idle"),
      (n.draggableElement = i),
      (n.pointerTracker = new fe(i, {
        start(...s) {
          return r.start(...s), i.setAttribute("data-dragging", "dragging"), !0;
        },
        move(...s) {
          r.move(...s);
        },
        end(...s) {
          r.end(...s), i.setAttribute("data-dragging", "idle");
        },
      })),
      (this.hasInitialised = !0);
  }
  render(t, e) {
    return w;
  }
}
const be = lt(ve);
class me {
  constructor(t) {
    (this.cursorPositionX = null),
      (this.cursorPositionY = null),
      (this.pointerTracker = null),
      (this.draggableElement = null),
      (this.styles = { top: "16px", left: "16px" }),
      et.set(
        this,
        (e, i) => (
          (this.cursorPositionX = Math.floor(e.pageX)),
          (this.cursorPositionY = Math.floor(e.pageY)),
          i.target.setAttribute("data-state", "dragging"),
          !0
        )
      ),
      it.set(this, (e, i) => {
        const [n] = i;
        window.requestAnimationFrame(() => this.handleWindowMove(n));
      }),
      rt.set(this, (e, i) => {
        i.target.removeAttribute("data-state");
      }),
      (this.host = t),
      this.host.addController(this);
  }
  hostDisconnected() {
    this.pointerTracker && this.pointerTracker.stop();
  }
  applyDrag() {
    return this.host.draggable
      ? be(this, {
          start: Q(this, et, "f"),
          move: Q(this, it, "f"),
          end: Q(this, rt, "f"),
        })
      : null;
  }
  handleWindowMove(t) {
    const { top: e, left: i } = this.styles,
      { innerHeight: n, innerWidth: r } = window,
      s = this.draggableElement;
    if (!s) return;
    const a = Number(e == null ? void 0 : e.replace("px", "")),
      l = Number(i == null ? void 0 : i.replace("px", "")),
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
          height: k,
        } = s.getBoundingClientRect(),
        _ = d - this.cursorPositionX,
        q = u - this.cursorPositionY,
        vt = a + q < 0,
        bt = l + _ < 0,
        mt = c + q > n,
        wt = h + _ > r,
        Zt = mt || bt || wt || vt;
      (this.cursorPositionX = d),
        (this.cursorPositionY = u),
        Zt
          ? (vt && (this.styles = { top: "0px", left: `${l}px` }),
            bt && (this.styles = { top: `${a}px`, left: `${0}px` }),
            mt && (this.styles = { top: `${n - k}px`, left: `${l}px` }),
            wt && (this.styles = { top: `${a}px`, left: `${r - f}px` }))
          : (this.styles = { top: `${a + q}px`, left: `${l + _}px` }),
        this.host.requestUpdate();
    }
  }
}
(et = new WeakMap()), (it = new WeakMap()), (rt = new WeakMap());
class Bt extends p {
  render() {
    return v`<div id="stack">
      <slot></slot>
    </div>`;
  }
}
Bt.styles = b`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;
window.customElements.define("a2k-stack", Bt);
class Ht extends p {
  render() {
    return v` <div id="panel">
      <slot></slot>
    </div>`;
  }
}
Ht.styles = b`
    #panel {
      --inset-shadow-padding: 2px;
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
    }
  `;
window.customElements.define("a2k-panel", Ht);
var we =
    (globalThis && globalThis.__decorate) ||
    function (o, t, e, i) {
      var n = arguments.length,
        r =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, e))
            : i,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        r = Reflect.decorate(o, t, e, i);
      else
        for (var a = o.length - 1; a >= 0; a--)
          (s = o[a]) &&
            (r = (n < 3 ? s(r) : n > 3 ? s(t, e, r) : s(t, e)) || r);
      return n > 3 && r && Object.defineProperty(t, e, r), r;
    },
  _e =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
class ct extends p {
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
ct.styles = b`
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
we(
  [m({ type: Boolean }), _e("design:type", Object)],
  ct.prototype,
  "closeable",
  void 0
);
window.customElements.define("a2k-window-topbar", ct);
var It =
    (globalThis && globalThis.__decorate) ||
    function (o, t, e, i) {
      var n = arguments.length,
        r =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, e))
            : i,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        r = Reflect.decorate(o, t, e, i);
      else
        for (var a = o.length - 1; a >= 0; a--)
          (s = o[a]) &&
            (r = (n < 3 ? s(r) : n > 3 ? s(t, e, r) : s(t, e)) || r);
      return n > 3 && r && Object.defineProperty(t, e, r), r;
    },
  Wt =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
class X extends p {
  constructor() {
    super(...arguments), (this.disabled = !1), (this.size = "medium");
  }
  render() {
    return v` <button data-size="${this.size}" ?disabled=${this.disabled}>
      <slot></slot>
    </button>`;
  }
}
X.styles = b`
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
It(
  [m({ type: Boolean }), Wt("design:type", Object)],
  X.prototype,
  "disabled",
  void 0
);
It(
  [m({ type: String }), Wt("design:type", String)],
  X.prototype,
  "size",
  void 0
);
window.customElements.define("a2k-button", X);
var ye =
    (globalThis && globalThis.__decorate) ||
    function (o, t, e, i) {
      var n = arguments.length,
        r =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, e))
            : i,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        r = Reflect.decorate(o, t, e, i);
      else
        for (var a = o.length - 1; a >= 0; a--)
          (s = o[a]) &&
            (r = (n < 3 ? s(r) : n > 3 ? s(t, e, r) : s(t, e)) || r);
      return n > 3 && r && Object.defineProperty(t, e, r), r;
    },
  $e =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
const xe = new URL("/assets/a2k-icons.3ccf22cf.svg", self.location).href;
class ht extends p {
  constructor() {
    super(...arguments), (this.icon = "");
  }
  render() {
    return (
      this.icon ||
        console.warn(
          "This icon is a missing a 'name', please specify the 'name' of the icon you want to display"
        ),
      re`
      <svg id="icon" height="1em" width="1em">
        <use href="${xe}#${this.icon}"></use>
      </svg>
    `
    );
  }
}
ht.styles = b`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;
ye(
  [m({ type: String }), $e("design:type", Object)],
  ht.prototype,
  "icon",
  void 0
);
window.customElements.define("a2k-icon", ht);
var ke =
    (globalThis && globalThis.__decorate) ||
    function (o, t, e, i) {
      var n = arguments.length,
        r =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, e))
            : i,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        r = Reflect.decorate(o, t, e, i);
      else
        for (var a = o.length - 1; a >= 0; a--)
          (s = o[a]) &&
            (r = (n < 3 ? s(r) : n > 3 ? s(t, e, r) : s(t, e)) || r);
      return n > 3 && r && Object.defineProperty(t, e, r), r;
    },
  Ee =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
class ut extends p {
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
ut.styles = b`
    #icon-wrapper {
      font-size: 8px;
    }
  `;
ke(
  [m({ type: Boolean }), Ee("design:type", Object)],
  ut.prototype,
  "closeable",
  void 0
);
window.customElements.define("a2k-window-actions", ut);
var pt =
    (globalThis && globalThis.__decorate) ||
    function (o, t, e, i) {
      var n = arguments.length,
        r =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, e))
            : i,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        r = Reflect.decorate(o, t, e, i);
      else
        for (var a = o.length - 1; a >= 0; a--)
          (s = o[a]) &&
            (r = (n < 3 ? s(r) : n > 3 ? s(t, e, r) : s(t, e)) || r);
      return n > 3 && r && Object.defineProperty(t, e, r), r;
    },
  gt =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
class z extends p {
  constructor() {
    super(),
      (this.heading = ""),
      (this.draggable = !1),
      (this.closeable = !1),
      (this.drag = new me(this)),
      this.addEventListener("close", () => this.remove());
  }
  render() {
    return v`
      <div id="window" style=${pe(this.drag.styles)}>
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
z.styles = b`
    #window {
      font-family: var(--font-primary);
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
pt(
  [m({ type: String }), gt("design:type", Object)],
  z.prototype,
  "heading",
  void 0
);
pt(
  [m({ type: Boolean }), gt("design:type", Object)],
  z.prototype,
  "draggable",
  void 0
);
pt(
  [m({ type: Boolean }), gt("design:type", Object)],
  z.prototype,
  "closeable",
  void 0
);
window.customElements.define("a2k-window", z);
var Yt =
    (globalThis && globalThis.__decorate) ||
    function (o, t, e, i) {
      var n = arguments.length,
        r =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, e))
            : i,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        r = Reflect.decorate(o, t, e, i);
      else
        for (var a = o.length - 1; a >= 0; a--)
          (s = o[a]) &&
            (r = (n < 3 ? s(r) : n > 3 ? s(t, e, r) : s(t, e)) || r);
      return n > 3 && r && Object.defineProperty(t, e, r), r;
    },
  Ae =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
let B = class extends p {
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
      cursor: var(--cursor-pointer);
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
Yt([m(), Ae("design:type", Object)], B.prototype, "open", void 0);
B = Yt([M("a2k-start-menu-item")], B);
var Xt =
    (globalThis && globalThis.__decorate) ||
    function (o, t, e, i) {
      var n = arguments.length,
        r =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, e))
            : i,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        r = Reflect.decorate(o, t, e, i);
      else
        for (var a = o.length - 1; a >= 0; a--)
          (s = o[a]) &&
            (r = (n < 3 ? s(r) : n > 3 ? s(t, e, r) : s(t, e)) || r);
      return n > 3 && r && Object.defineProperty(t, e, r), r;
    },
  Te =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
let H = class extends p {
  constructor() {
    super(...arguments), (this.open = !1);
  }
  handleAboutClick() {
    const t = v` <a2k-window closeable heading="About Andricos2000">
      <p>Deets coming soon...</p>
    </a2k-window>`;
    Nt(t, document.body);
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
Xt([m(), Te("design:type", Object)], H.prototype, "open", void 0);
H = Xt([M("a2k-start-menu")], H);
var qt =
    (globalThis && globalThis.__decorate) ||
    function (o, t, e, i) {
      var n = arguments.length,
        r =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, e))
            : i,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        r = Reflect.decorate(o, t, e, i);
      else
        for (var a = o.length - 1; a >= 0; a--)
          (s = o[a]) &&
            (r = (n < 3 ? s(r) : n > 3 ? s(t, e, r) : s(t, e)) || r);
      return n > 3 && r && Object.defineProperty(t, e, r), r;
    },
  Se =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
let I = class extends p {
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
qt([ue(), Se("design:type", Object)], I.prototype, "_isMenuOpen", void 0);
I = qt([M("a2k-start-button")], I);
var Pe =
  (globalThis && globalThis.__decorate) ||
  function (o, t, e, i) {
    var n = arguments.length,
      r =
        n < 3
          ? t
          : i === null
          ? (i = Object.getOwnPropertyDescriptor(t, e))
          : i,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      r = Reflect.decorate(o, t, e, i);
    else
      for (var a = o.length - 1; a >= 0; a--)
        (s = o[a]) && (r = (n < 3 ? s(r) : n > 3 ? s(t, e, r) : s(t, e)) || r);
    return n > 3 && r && Object.defineProperty(t, e, r), r;
  };
let ot = class extends p {
  constructor() {
    super(...arguments), (this.clock = new ge(this));
  }
  render() {
    const t = Ce.format(this.clock.value);
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
ot = Pe([M("a2k-utility-bar")], ot);
const Ce = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
class Ft extends p {
  render() {
    return v`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`;
  }
}
Ft.styles = b`
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
window.customElements.define("a2k-taskbar", Ft);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Oe = lt(
  class extends dt {
    constructor(o) {
      var t;
      if (
        (super(o),
        o.type !== at.ATTRIBUTE ||
          o.name !== "class" ||
          ((t = o.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      )
        throw Error(
          "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
        );
    }
    render(o) {
      return (
        " " +
        Object.keys(o)
          .filter((t) => o[t])
          .join(" ") +
        " "
      );
    }
    update(o, [t]) {
      var e, i;
      if (this.st === void 0) {
        (this.st = new Set()),
          o.strings !== void 0 &&
            (this.et = new Set(
              o.strings
                .join(" ")
                .split(/\s/)
                .filter((r) => r !== "")
            ));
        for (const r in t)
          t[r] &&
            !(!((e = this.et) === null || e === void 0) && e.has(r)) &&
            this.st.add(r);
        return this.render(t);
      }
      const n = o.element.classList;
      this.st.forEach((r) => {
        r in t || (n.remove(r), this.st.delete(r));
      });
      for (const r in t) {
        const s = !!t[r];
        s === this.st.has(r) ||
          ((i = this.et) === null || i === void 0 ? void 0 : i.has(r)) ||
          (s ? (n.add(r), this.st.add(r)) : (n.remove(r), this.st.delete(r)));
      }
      return w;
    }
  }
);
var Vt =
    (globalThis && globalThis.__decorate) ||
    function (o, t, e, i) {
      var n = arguments.length,
        r =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, e))
            : i,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        r = Reflect.decorate(o, t, e, i);
      else
        for (var a = o.length - 1; a >= 0; a--)
          (s = o[a]) &&
            (r = (n < 3 ? s(r) : n > 3 ? s(t, e, r) : s(t, e)) || r);
      return n > 3 && r && Object.defineProperty(t, e, r), r;
    },
  Re =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
let W = class extends p {
  constructor() {
    super(...arguments), (this.filled = "none");
  }
  render() {
    const t = {
      "half-filled": this.filled !== "none",
      filled: this.filled === "filled",
    };
    return v`<div class=${Oe(t)} id="unit">
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
Vt([m(), Re("design:type", String)], W.prototype, "filled", void 0);
W = Vt([M("a2k-progress-unit")], W);
var je =
    (globalThis && globalThis.__decorate) ||
    function (o, t, e, i) {
      var n = arguments.length,
        r =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, e))
            : i,
        s;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        r = Reflect.decorate(o, t, e, i);
      else
        for (var a = o.length - 1; a >= 0; a--)
          (s = o[a]) &&
            (r = (n < 3 ? s(r) : n > 3 ? s(t, e, r) : s(t, e)) || r);
      return n > 3 && r && Object.defineProperty(t, e, r), r;
    },
  Ue =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
class ft extends p {
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
    const { gap: i } = getComputedStyle(t),
      r = Number(i.replace("px", "")) + 12,
      s = Math.ceil(e / r);
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
      i = Le(e),
      n = Math.floor(e);
    t.forEach((r, s) => {
      s < n
        ? r.setAttribute("filled", "filled")
        : s === n && i >= 0.5
        ? r.setAttribute("filled", "half")
        : r.setAttribute("filled", "none");
    });
  }
  render() {
    return v`<div id="progress" role="progress"></div>`;
  }
}
ft.styles = b`
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
je(
  [m({ type: Number }), Ue("design:type", Object)],
  ft.prototype,
  "progress",
  void 0
);
const Le = (o) => Math.floor((o % 1) * 10) / 10;
window.customElements.define("a2k-progress", ft);
class Kt extends p {
  render() {
    return v`<div id="desktop"></div>`;
  }
}
Kt.styles = b`
    #desktop {
      height: 100%;
    }
  `;
window.customElements.define("a2k-desktop", Kt);
let D = 0;
const N = document.querySelector("a2k-window[heading='Please wait...']"),
  Me = setInterval(() => {
    const o = document.querySelector("a2k-progress");
    if (!!o && ((D = D + 1.2), o.setAttribute("progress", D), D > 70)) {
      for (; N.firstChild; ) N.removeChild(N.lastChild);
      (N.innerHTML = `
      <p>There was an error loading Andricos2000</p>
      <p>Andricos2000 is still a work in progress, keeping checking back for updates or follow progress on Twitter</p>
    `),
        clearInterval(Me);
    }
  }, 100);
