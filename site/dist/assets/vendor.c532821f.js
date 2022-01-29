var ht = Object.defineProperty,
  at = Object.defineProperties;
var dt = Object.getOwnPropertyDescriptors;
var j = Object.getOwnPropertySymbols;
var ct = Object.prototype.hasOwnProperty,
  ut = Object.prototype.propertyIsEnumerable;
var V = (n, t, e) =>
    t in n
      ? ht(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (n[t] = e),
  N = (n, t) => {
    for (var e in t || (t = {})) ct.call(t, e) && V(n, e, t[e]);
    if (j) for (var e of j(t)) ut.call(t, e) && V(n, e, t[e]);
    return n;
  },
  M = (n, t) => at(n, dt(t));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const R =
    window.ShadowRoot &&
    (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  O = Symbol(),
  W = new Map();
class q {
  constructor(t, e) {
    if (((this._$cssResult$ = !0), e !== O))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    this.cssText = t;
  }
  get styleSheet() {
    let t = W.get(this.cssText);
    return (
      R &&
        t === void 0 &&
        (W.set(this.cssText, (t = new CSSStyleSheet())),
        t.replaceSync(this.cssText)),
      t
    );
  }
  toString() {
    return this.cssText;
  }
}
const pt = (n) => new q(typeof n == "string" ? n : n + "", O),
  Nt = (n, ...t) => {
    const e =
      n.length === 1
        ? n[0]
        : t.reduce(
            (i, s, r) =>
              i +
              ((o) => {
                if (o._$cssResult$ === !0) return o.cssText;
                if (typeof o == "number") return o;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    o +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(s) +
              n[r + 1],
            n[0]
          );
    return new q(e, O);
  },
  $t = (n, t) => {
    R
      ? (n.adoptedStyleSheets = t.map((e) =>
          e instanceof CSSStyleSheet ? e : e.styleSheet
        ))
      : t.forEach((e) => {
          const i = document.createElement("style"),
            s = window.litNonce;
          s !== void 0 && i.setAttribute("nonce", s),
            (i.textContent = e.cssText),
            n.appendChild(i);
        });
  },
  K = R
    ? (n) => n
    : (n) =>
        n instanceof CSSStyleSheet
          ? ((t) => {
              let e = "";
              for (const i of t.cssRules) e += i.cssText;
              return pt(e);
            })(n)
          : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var k;
const Z = window.trustedTypes,
  vt = Z ? Z.emptyScript : "",
  J = window.reactiveElementPolyfillSupport,
  L = {
    toAttribute(n, t) {
      switch (t) {
        case Boolean:
          n = n ? vt : null;
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
  Y = (n, t) => t !== n && (t == t || n == n),
  z = { attribute: !0, type: String, converter: L, reflect: !1, hasChanged: Y };
class f extends HTMLElement {
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
        const s = this._$Eh(i, e);
        s !== void 0 && (this._$Eu.set(s, i), t.push(s));
      }),
      t
    );
  }
  static createProperty(t, e = z) {
    if (
      (e.state && (e.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, e),
      !e.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const i = typeof t == "symbol" ? Symbol() : "__" + t,
        s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && Object.defineProperty(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return {
      get() {
        return this[e];
      },
      set(s) {
        const r = this[t];
        (this[e] = s), this.requestUpdate(t, r, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || z;
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
      for (const s of i) this.createProperty(s, e[s]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i) e.unshift(K(s));
    } else t !== void 0 && e.push(K(t));
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
    return $t(e, this.constructor.elementStyles), e;
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
  _$ES(t, e, i = z) {
    var s, r;
    const o = this.constructor._$Eh(t, i);
    if (o !== void 0 && i.reflect === !0) {
      const d = (
        (r =
          (s = i.converter) === null || s === void 0
            ? void 0
            : s.toAttribute) !== null && r !== void 0
          ? r
          : L.toAttribute
      )(e, i.type);
      (this._$Ei = t),
        d == null ? this.removeAttribute(o) : this.setAttribute(o, d),
        (this._$Ei = null);
    }
  }
  _$AK(t, e) {
    var i, s, r;
    const o = this.constructor,
      d = o._$Eu.get(t);
    if (d !== void 0 && this._$Ei !== d) {
      const l = o.getPropertyOptions(d),
        h = l.converter,
        p =
          (r =
            (s =
              (i = h) === null || i === void 0 ? void 0 : i.fromAttribute) !==
              null && s !== void 0
              ? s
              : typeof h == "function"
              ? h
              : null) !== null && r !== void 0
            ? r
            : L.fromAttribute;
      (this._$Ei = d), (this[d] = p(e, l.type)), (this._$Ei = null);
    }
  }
  requestUpdate(t, e, i) {
    let s = !0;
    t !== void 0 &&
      (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || Y)(
        this[t],
        e
      )
        ? (this._$AL.has(t) || this._$AL.set(t, e),
          i.reflect === !0 &&
            this._$Ei !== t &&
            (this._$E_ === void 0 && (this._$E_ = new Map()),
            this._$E_.set(t, i)))
        : (s = !1)),
      !this.isUpdatePending && s && (this._$Ep = this._$EC());
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
        (this._$Et.forEach((s, r) => (this[r] = s)), (this._$Et = void 0));
    let e = !1;
    const i = this._$AL;
    try {
      (e = this.shouldUpdate(i)),
        e
          ? (this.willUpdate(i),
            (t = this._$Eg) === null ||
              t === void 0 ||
              t.forEach((s) => {
                var r;
                return (r = s.hostUpdate) === null || r === void 0
                  ? void 0
                  : r.call(s);
              }),
            this.update(i))
          : this._$EU();
    } catch (s) {
      throw ((e = !1), this._$EU(), s);
    }
    e && this._$AE(i);
  }
  willUpdate(t) {}
  _$AE(t) {
    var e;
    (e = this._$Eg) === null ||
      e === void 0 ||
      e.forEach((i) => {
        var s;
        return (s = i.hostUpdated) === null || s === void 0
          ? void 0
          : s.call(i);
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
(f.finalized = !0),
  (f.elementProperties = new Map()),
  (f.elementStyles = []),
  (f.shadowRootOptions = { mode: "open" }),
  J == null || J({ ReactiveElement: f }),
  ((k = globalThis.reactiveElementVersions) !== null && k !== void 0
    ? k
    : (globalThis.reactiveElementVersions = [])
  ).push("1.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var B;
const y = globalThis.trustedTypes,
  F = y ? y.createPolicy("lit-html", { createHTML: (n) => n }) : void 0,
  v = `lit$${(Math.random() + "").slice(9)}$`,
  G = "?" + v,
  _t = `<${G}>`,
  m = document,
  b = (n = "") => m.createComment(n),
  S = (n) => n === null || (typeof n != "object" && typeof n != "function"),
  Q = Array.isArray,
  At = (n) => {
    var t;
    return (
      Q(n) ||
      typeof ((t = n) === null || t === void 0 ? void 0 : t[Symbol.iterator]) ==
        "function"
    );
  },
  w = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  X = /-->/g,
  tt = />/g,
  _ =
    />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
  et = /'/g,
  it = /"/g,
  st = /^(?:script|style|textarea)$/i,
  nt =
    (n) =>
    (t, ...e) => ({ _$litType$: n, strings: t, values: e }),
  Mt = nt(1),
  Rt = nt(2),
  A = Symbol.for("lit-noChange"),
  u = Symbol.for("lit-nothing"),
  ot = new WeakMap(),
  ft = (n, t, e) => {
    var i, s;
    const r =
      (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0
        ? i
        : t;
    let o = r._$litPart$;
    if (o === void 0) {
      const d =
        (s = e == null ? void 0 : e.renderBefore) !== null && s !== void 0
          ? s
          : null;
      r._$litPart$ = o = new T(
        t.insertBefore(b(), d),
        d,
        void 0,
        e != null ? e : {}
      );
    }
    return o._$AI(n), o;
  },
  g = m.createTreeWalker(m, 129, null, !1),
  yt = (n, t) => {
    const e = n.length - 1,
      i = [];
    let s,
      r = t === 2 ? "<svg>" : "",
      o = w;
    for (let l = 0; l < e; l++) {
      const h = n[l];
      let p,
        a,
        c = -1,
        $ = 0;
      for (; $ < h.length && ((o.lastIndex = $), (a = o.exec(h)), a !== null); )
        ($ = o.lastIndex),
          o === w
            ? a[1] === "!--"
              ? (o = X)
              : a[1] !== void 0
              ? (o = tt)
              : a[2] !== void 0
              ? (st.test(a[2]) && (s = RegExp("</" + a[2], "g")), (o = _))
              : a[3] !== void 0 && (o = _)
            : o === _
            ? a[0] === ">"
              ? ((o = s != null ? s : w), (c = -1))
              : a[1] === void 0
              ? (c = -2)
              : ((c = o.lastIndex - a[2].length),
                (p = a[1]),
                (o = a[3] === void 0 ? _ : a[3] === '"' ? it : et))
            : o === it || o === et
            ? (o = _)
            : o === X || o === tt
            ? (o = w)
            : ((o = _), (s = void 0));
      const U = o === _ && n[l + 1].startsWith("/>") ? " " : "";
      r +=
        o === w
          ? h + _t
          : c >= 0
          ? (i.push(p), h.slice(0, c) + "$lit$" + h.slice(c) + v + U)
          : h + v + (c === -2 ? (i.push(void 0), l) : U);
    }
    const d = r + (n[e] || "<?>") + (t === 2 ? "</svg>" : "");
    return [F !== void 0 ? F.createHTML(d) : d, i];
  };
class C {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let r = 0,
      o = 0;
    const d = t.length - 1,
      l = this.parts,
      [h, p] = yt(t, e);
    if (
      ((this.el = C.createElement(h, i)),
      (g.currentNode = this.el.content),
      e === 2)
    ) {
      const a = this.el.content,
        c = a.firstChild;
      c.remove(), a.append(...c.childNodes);
    }
    for (; (s = g.nextNode()) !== null && l.length < d; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) {
          const a = [];
          for (const c of s.getAttributeNames())
            if (c.endsWith("$lit$") || c.startsWith(v)) {
              const $ = p[o++];
              if ((a.push(c), $ !== void 0)) {
                const U = s.getAttribute($.toLowerCase() + "$lit$").split(v),
                  x = /([.?@])?(.*)/.exec($);
                l.push({
                  type: 1,
                  index: r,
                  name: x[2],
                  strings: U,
                  ctor:
                    x[1] === "."
                      ? gt
                      : x[1] === "?"
                      ? bt
                      : x[1] === "@"
                      ? St
                      : P,
                });
              } else l.push({ type: 6, index: r });
            }
          for (const c of a) s.removeAttribute(c);
        }
        if (st.test(s.tagName)) {
          const a = s.textContent.split(v),
            c = a.length - 1;
          if (c > 0) {
            s.textContent = y ? y.emptyScript : "";
            for (let $ = 0; $ < c; $++)
              s.append(a[$], b()),
                g.nextNode(),
                l.push({ type: 2, index: ++r });
            s.append(a[c], b());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === G) l.push({ type: 2, index: r });
        else {
          let a = -1;
          for (; (a = s.data.indexOf(v, a + 1)) !== -1; )
            l.push({ type: 7, index: r }), (a += v.length - 1);
        }
      r++;
    }
  }
  static createElement(t, e) {
    const i = m.createElement("template");
    return (i.innerHTML = t), i;
  }
}
function E(n, t, e = n, i) {
  var s, r, o, d;
  if (t === A) return t;
  let l =
    i !== void 0
      ? (s = e._$Cl) === null || s === void 0
        ? void 0
        : s[i]
      : e._$Cu;
  const h = S(t) ? void 0 : t._$litDirective$;
  return (
    (l == null ? void 0 : l.constructor) !== h &&
      ((r = l == null ? void 0 : l._$AO) === null ||
        r === void 0 ||
        r.call(l, !1),
      h === void 0 ? (l = void 0) : ((l = new h(n)), l._$AT(n, e, i)),
      i !== void 0
        ? (((o = (d = e)._$Cl) !== null && o !== void 0 ? o : (d._$Cl = []))[
            i
          ] = l)
        : (e._$Cu = l)),
    l !== void 0 && (t = E(n, l._$AS(n, t.values), l, i)),
    t
  );
}
class mt {
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
        parts: s,
      } = this._$AD,
      r = (
        (e = t == null ? void 0 : t.creationScope) !== null && e !== void 0
          ? e
          : m
      ).importNode(i, !0);
    g.currentNode = r;
    let o = g.nextNode(),
      d = 0,
      l = 0,
      h = s[0];
    for (; h !== void 0; ) {
      if (d === h.index) {
        let p;
        h.type === 2
          ? (p = new T(o, o.nextSibling, this, t))
          : h.type === 1
          ? (p = new h.ctor(o, h.name, h.strings, this, t))
          : h.type === 6 && (p = new wt(o, this, t)),
          this.v.push(p),
          (h = s[++l]);
      }
      d !== (h == null ? void 0 : h.index) && ((o = g.nextNode()), d++);
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
class T {
  constructor(t, e, i, s) {
    var r;
    (this.type = 2),
      (this._$AH = u),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = i),
      (this.options = s),
      (this._$Cg =
        (r = s == null ? void 0 : s.isConnected) === null || r === void 0 || r);
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
    (t = E(this, t, e)),
      S(t)
        ? t === u || t == null || t === ""
          ? (this._$AH !== u && this._$AR(), (this._$AH = u))
          : t !== this._$AH && t !== A && this.$(t)
        : t._$litType$ !== void 0
        ? this.T(t)
        : t.nodeType !== void 0
        ? this.S(t)
        : At(t)
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
    this._$AH !== u && S(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.S(m.createTextNode(t)),
      (this._$AH = t);
  }
  T(t) {
    var e;
    const { values: i, _$litType$: s } = t,
      r =
        typeof s == "number"
          ? this._$AC(t)
          : (s.el === void 0 && (s.el = C.createElement(s.h, this.options)), s);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.m(i);
    else {
      const o = new mt(r, this),
        d = o.p(this.options);
      o.m(i), this.S(d), (this._$AH = o);
    }
  }
  _$AC(t) {
    let e = ot.get(t.strings);
    return e === void 0 && ot.set(t.strings, (e = new C(t))), e;
  }
  M(t) {
    Q(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let i,
      s = 0;
    for (const r of t)
      s === e.length
        ? e.push((i = new T(this.A(b()), this.A(b()), this, this.options)))
        : (i = e[s]),
        i._$AI(r),
        s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), (e.length = s));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for (
      (i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e);
      t && t !== this._$AB;

    ) {
      const s = t.nextSibling;
      t.remove(), (t = s);
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 &&
      ((this._$Cg = t),
      (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class P {
  constructor(t, e, i, s, r) {
    (this.type = 1),
      (this._$AH = u),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = s),
      (this.options = r),
      i.length > 2 || i[0] !== "" || i[1] !== ""
        ? ((this._$AH = Array(i.length - 1).fill(new String())),
          (this.strings = i))
        : (this._$AH = u);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, s) {
    const r = this.strings;
    let o = !1;
    if (r === void 0)
      (t = E(this, t, e, 0)),
        (o = !S(t) || (t !== this._$AH && t !== A)),
        o && (this._$AH = t);
    else {
      const d = t;
      let l, h;
      for (t = r[0], l = 0; l < r.length - 1; l++)
        (h = E(this, d[i + l], e, l)),
          h === A && (h = this._$AH[l]),
          o || (o = !S(h) || h !== this._$AH[l]),
          h === u ? (t = u) : t !== u && (t += (h != null ? h : "") + r[l + 1]),
          (this._$AH[l] = h);
    }
    o && !s && this.k(t);
  }
  k(t) {
    t === u
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t != null ? t : "");
  }
}
class gt extends P {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  k(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
const Et = y ? y.emptyScript : "";
class bt extends P {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  k(t) {
    t && t !== u
      ? this.element.setAttribute(this.name, Et)
      : this.element.removeAttribute(this.name);
  }
}
class St extends P {
  constructor(t, e, i, s, r) {
    super(t, e, i, s, r), (this.type = 5);
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = E(this, t, e, 0)) !== null && i !== void 0 ? i : u) === A)
      return;
    const s = this._$AH,
      r =
        (t === u && s !== u) ||
        t.capture !== s.capture ||
        t.once !== s.once ||
        t.passive !== s.passive,
      o = t !== u && (s === u || r);
    r && this.element.removeEventListener(this.name, this, s),
      o && this.element.addEventListener(this.name, this, t),
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
class wt {
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
    E(this, t);
  }
}
const rt = window.litHtmlPolyfillSupport;
rt == null || rt(C, T),
  ((B = globalThis.litHtmlVersions) !== null && B !== void 0
    ? B
    : (globalThis.litHtmlVersions = [])
  ).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var I, D;
class H extends f {
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
      (this._$Dt = ft(e, this.renderRoot, this.renderOptions));
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
    return A;
  }
}
(H.finalized = !0),
  (H._$litElement$ = !0),
  (I = globalThis.litElementHydrateSupport) === null ||
    I === void 0 ||
    I.call(globalThis, { LitElement: H });
const lt = globalThis.litElementPolyfillSupport;
lt == null || lt({ LitElement: H });
((D = globalThis.litElementVersions) !== null && D !== void 0
  ? D
  : (globalThis.litElementVersions = [])
).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Ot = (n) => (t) =>
  typeof t == "function"
    ? ((e, i) => (window.customElements.define(e, i), i))(n, t)
    : ((e, i) => {
        const { kind: s, elements: r } = i;
        return {
          kind: s,
          elements: r,
          finisher(o) {
            window.customElements.define(e, o);
          },
        };
      })(n, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Ct = (n, t) =>
  t.kind === "method" && t.descriptor && !("value" in t.descriptor)
    ? M(N({}, t), {
        finisher(e) {
          e.createProperty(t.key, n);
        },
      })
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
function Tt(n) {
  return (t, e) =>
    e !== void 0
      ? ((i, s, r) => {
          s.constructor.createProperty(r, i);
        })(n, t, e)
      : Ct(n, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function kt(n) {
  return Tt(M(N({}, n), { state: !0 }));
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Ut = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
  },
  xt =
    (n) =>
    (...t) => ({ _$litDirective$: n, values: t });
class Pt {
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
 */ const Lt = xt(
  class extends Pt {
    constructor(n) {
      var t;
      if (
        (super(n),
        n.type !== Ut.ATTRIBUTE ||
          n.name !== "style" ||
          ((t = n.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      )
        throw Error(
          "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute."
        );
    }
    render(n) {
      return Object.keys(n).reduce((t, e) => {
        const i = n[e];
        return i == null
          ? t
          : t +
              `${(e = e
                .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&")
                .toLowerCase())}:${i};`;
      }, "");
    }
    update(n, [t]) {
      const { style: e } = n.element;
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
        const s = t[i];
        s != null &&
          (this.ut.add(i), i.includes("-") ? e.setProperty(i, s) : (e[i] = s));
      }
      return A;
    }
  }
);
export {
  Tt as e,
  Lt as i,
  Ot as n,
  Mt as p,
  Nt as r,
  H as s,
  kt as t,
  Rt as y,
};
