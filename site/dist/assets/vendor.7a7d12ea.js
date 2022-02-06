var ct = Object.defineProperty,
  ut = Object.defineProperties;
var pt = Object.getOwnPropertyDescriptors;
var j = Object.getOwnPropertySymbols;
var $t = Object.prototype.hasOwnProperty,
  vt = Object.prototype.propertyIsEnumerable;
var V = (i, t, e) =>
    t in i
      ? ct(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (i[t] = e),
  N = (i, t) => {
    for (var e in t || (t = {})) $t.call(t, e) && V(i, e, t[e]);
    if (j) for (var e of j(t)) vt.call(t, e) && V(i, e, t[e]);
    return i;
  },
  M = (i, t) => ut(i, pt(t));
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
const _t = (i) => new q(typeof i == "string" ? i : i + "", O),
  Nt = (i, ...t) => {
    const e =
      i.length === 1
        ? i[0]
        : t.reduce(
            (s, n, r) =>
              s +
              ((o) => {
                if (o._$cssResult$ === !0) return o.cssText;
                if (typeof o == "number") return o;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    o +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(n) +
              i[r + 1],
            i[0]
          );
    return new q(e, O);
  },
  ft = (i, t) => {
    R
      ? (i.adoptedStyleSheets = t.map((e) =>
          e instanceof CSSStyleSheet ? e : e.styleSheet
        ))
      : t.forEach((e) => {
          const s = document.createElement("style"),
            n = window.litNonce;
          n !== void 0 && s.setAttribute("nonce", n),
            (s.textContent = e.cssText),
            i.appendChild(s);
        });
  },
  K = R
    ? (i) => i
    : (i) =>
        i instanceof CSSStyleSheet
          ? ((t) => {
              let e = "";
              for (const s of t.cssRules) e += s.cssText;
              return _t(e);
            })(i)
          : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var k;
const Z = window.trustedTypes,
  At = Z ? Z.emptyScript : "",
  J = window.reactiveElementPolyfillSupport,
  L = {
    toAttribute(i, t) {
      switch (t) {
        case Boolean:
          i = i ? At : null;
          break;
        case Object:
        case Array:
          i = i == null ? i : JSON.stringify(i);
      }
      return i;
    },
    fromAttribute(i, t) {
      let e = i;
      switch (t) {
        case Boolean:
          e = i !== null;
          break;
        case Number:
          e = i === null ? null : Number(i);
          break;
        case Object:
        case Array:
          try {
            e = JSON.parse(i);
          } catch {
            e = null;
          }
      }
      return e;
    },
  },
  Y = (i, t) => t !== i && (t == t || i == i),
  z = { attribute: !0, type: String, converter: L, reflect: !1, hasChanged: Y };
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
      this.elementProperties.forEach((e, s) => {
        const n = this._$Eh(s, e);
        n !== void 0 && (this._$Eu.set(n, s), t.push(n));
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
      const s = typeof t == "symbol" ? Symbol() : "__" + t,
        n = this.getPropertyDescriptor(t, s, e);
      n !== void 0 && Object.defineProperty(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    return {
      get() {
        return this[e];
      },
      set(n) {
        const r = this[t];
        (this[e] = n), this.requestUpdate(t, r, s);
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
        s = [
          ...Object.getOwnPropertyNames(e),
          ...Object.getOwnPropertySymbols(e),
        ];
      for (const n of s) this.createProperty(n, e[n]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const n of s) e.unshift(K(n));
    } else t !== void 0 && e.push(K(t));
    return e;
  }
  static _$Eh(t, e) {
    const s = e.attribute;
    return s === !1
      ? void 0
      : typeof s == "string"
      ? s
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
    var e, s;
    ((e = this._$Eg) !== null && e !== void 0 ? e : (this._$Eg = [])).push(t),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((s = t.hostConnected) === null || s === void 0 || s.call(t));
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
    return ft(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (t = this._$Eg) === null ||
        t === void 0 ||
        t.forEach((e) => {
          var s;
          return (s = e.hostConnected) === null || s === void 0
            ? void 0
            : s.call(e);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    (t = this._$Eg) === null ||
      t === void 0 ||
      t.forEach((e) => {
        var s;
        return (s = e.hostDisconnected) === null || s === void 0
          ? void 0
          : s.call(e);
      });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ES(t, e, s = z) {
    var n, r;
    const o = this.constructor._$Eh(t, s);
    if (o !== void 0 && s.reflect === !0) {
      const d = (
        (r =
          (n = s.converter) === null || n === void 0
            ? void 0
            : n.toAttribute) !== null && r !== void 0
          ? r
          : L.toAttribute
      )(e, s.type);
      (this._$Ei = t),
        d == null ? this.removeAttribute(o) : this.setAttribute(o, d),
        (this._$Ei = null);
    }
  }
  _$AK(t, e) {
    var s, n, r;
    const o = this.constructor,
      d = o._$Eu.get(t);
    if (d !== void 0 && this._$Ei !== d) {
      const l = o.getPropertyOptions(d),
        h = l.converter,
        p =
          (r =
            (n =
              (s = h) === null || s === void 0 ? void 0 : s.fromAttribute) !==
              null && n !== void 0
              ? n
              : typeof h == "function"
              ? h
              : null) !== null && r !== void 0
            ? r
            : L.fromAttribute;
      (this._$Ei = d), (this[d] = p(e, l.type)), (this._$Ei = null);
    }
  }
  requestUpdate(t, e, s) {
    let n = !0;
    t !== void 0 &&
      (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || Y)(
        this[t],
        e
      )
        ? (this._$AL.has(t) || this._$AL.set(t, e),
          s.reflect === !0 &&
            this._$Ei !== t &&
            (this._$E_ === void 0 && (this._$E_ = new Map()),
            this._$E_.set(t, s)))
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
    const s = this._$AL;
    try {
      (e = this.shouldUpdate(s)),
        e
          ? (this.willUpdate(s),
            (t = this._$Eg) === null ||
              t === void 0 ||
              t.forEach((n) => {
                var r;
                return (r = n.hostUpdate) === null || r === void 0
                  ? void 0
                  : r.call(n);
              }),
            this.update(s))
          : this._$EU();
    } catch (n) {
      throw ((e = !1), this._$EU(), n);
    }
    e && this._$AE(s);
  }
  willUpdate(t) {}
  _$AE(t) {
    var e;
    (e = this._$Eg) === null ||
      e === void 0 ||
      e.forEach((s) => {
        var n;
        return (n = s.hostUpdated) === null || n === void 0
          ? void 0
          : n.call(s);
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
      (this._$E_.forEach((e, s) => this._$ES(s, this[s], e)),
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
  J == null || J({ ReactiveElement: A }),
  ((k = globalThis.reactiveElementVersions) !== null && k !== void 0
    ? k
    : (globalThis.reactiveElementVersions = [])
  ).push("1.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var B;
const m = globalThis.trustedTypes,
  F = m ? m.createPolicy("lit-html", { createHTML: (i) => i }) : void 0,
  v = `lit$${(Math.random() + "").slice(9)}$`,
  G = "?" + v,
  mt = `<${G}>`,
  y = document,
  b = (i = "") => y.createComment(i),
  S = (i) => i === null || (typeof i != "object" && typeof i != "function"),
  Q = Array.isArray,
  yt = (i) => {
    var t;
    return (
      Q(i) ||
      typeof ((t = i) === null || t === void 0 ? void 0 : t[Symbol.iterator]) ==
        "function"
    );
  },
  w = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  X = /-->/g,
  tt = />/g,
  f =
    />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
  et = /'/g,
  st = /"/g,
  it = /^(?:script|style|textarea)$/i,
  nt =
    (i) =>
    (t, ...e) => ({ _$litType$: i, strings: t, values: e }),
  Mt = nt(1),
  Rt = nt(2),
  _ = Symbol.for("lit-noChange"),
  u = Symbol.for("lit-nothing"),
  rt = new WeakMap(),
  gt = (i, t, e) => {
    var s, n;
    const r =
      (s = e == null ? void 0 : e.renderBefore) !== null && s !== void 0
        ? s
        : t;
    let o = r._$litPart$;
    if (o === void 0) {
      const d =
        (n = e == null ? void 0 : e.renderBefore) !== null && n !== void 0
          ? n
          : null;
      r._$litPart$ = o = new T(
        t.insertBefore(b(), d),
        d,
        void 0,
        e != null ? e : {}
      );
    }
    return o._$AI(i), o;
  },
  g = y.createTreeWalker(y, 129, null, !1),
  Et = (i, t) => {
    const e = i.length - 1,
      s = [];
    let n,
      r = t === 2 ? "<svg>" : "",
      o = w;
    for (let l = 0; l < e; l++) {
      const h = i[l];
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
              ? (it.test(a[2]) && (n = RegExp("</" + a[2], "g")), (o = f))
              : a[3] !== void 0 && (o = f)
            : o === f
            ? a[0] === ">"
              ? ((o = n != null ? n : w), (c = -1))
              : a[1] === void 0
              ? (c = -2)
              : ((c = o.lastIndex - a[2].length),
                (p = a[1]),
                (o = a[3] === void 0 ? f : a[3] === '"' ? st : et))
            : o === st || o === et
            ? (o = f)
            : o === X || o === tt
            ? (o = w)
            : ((o = f), (n = void 0));
      const U = o === f && i[l + 1].startsWith("/>") ? " " : "";
      r +=
        o === w
          ? h + mt
          : c >= 0
          ? (s.push(p), h.slice(0, c) + "$lit$" + h.slice(c) + v + U)
          : h + v + (c === -2 ? (s.push(void 0), l) : U);
    }
    const d = r + (i[e] || "<?>") + (t === 2 ? "</svg>" : "");
    return [F !== void 0 ? F.createHTML(d) : d, s];
  };
class C {
  constructor({ strings: t, _$litType$: e }, s) {
    let n;
    this.parts = [];
    let r = 0,
      o = 0;
    const d = t.length - 1,
      l = this.parts,
      [h, p] = Et(t, e);
    if (
      ((this.el = C.createElement(h, s)),
      (g.currentNode = this.el.content),
      e === 2)
    ) {
      const a = this.el.content,
        c = a.firstChild;
      c.remove(), a.append(...c.childNodes);
    }
    for (; (n = g.nextNode()) !== null && l.length < d; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const a = [];
          for (const c of n.getAttributeNames())
            if (c.endsWith("$lit$") || c.startsWith(v)) {
              const $ = p[o++];
              if ((a.push(c), $ !== void 0)) {
                const U = n.getAttribute($.toLowerCase() + "$lit$").split(v),
                  x = /([.?@])?(.*)/.exec($);
                l.push({
                  type: 1,
                  index: r,
                  name: x[2],
                  strings: U,
                  ctor:
                    x[1] === "."
                      ? St
                      : x[1] === "?"
                      ? Ct
                      : x[1] === "@"
                      ? Tt
                      : P,
                });
              } else l.push({ type: 6, index: r });
            }
          for (const c of a) n.removeAttribute(c);
        }
        if (it.test(n.tagName)) {
          const a = n.textContent.split(v),
            c = a.length - 1;
          if (c > 0) {
            n.textContent = m ? m.emptyScript : "";
            for (let $ = 0; $ < c; $++)
              n.append(a[$], b()),
                g.nextNode(),
                l.push({ type: 2, index: ++r });
            n.append(a[c], b());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === G) l.push({ type: 2, index: r });
        else {
          let a = -1;
          for (; (a = n.data.indexOf(v, a + 1)) !== -1; )
            l.push({ type: 7, index: r }), (a += v.length - 1);
        }
      r++;
    }
  }
  static createElement(t, e) {
    const s = y.createElement("template");
    return (s.innerHTML = t), s;
  }
}
function E(i, t, e = i, s) {
  var n, r, o, d;
  if (t === _) return t;
  let l =
    s !== void 0
      ? (n = e._$Cl) === null || n === void 0
        ? void 0
        : n[s]
      : e._$Cu;
  const h = S(t) ? void 0 : t._$litDirective$;
  return (
    (l == null ? void 0 : l.constructor) !== h &&
      ((r = l == null ? void 0 : l._$AO) === null ||
        r === void 0 ||
        r.call(l, !1),
      h === void 0 ? (l = void 0) : ((l = new h(i)), l._$AT(i, e, s)),
      s !== void 0
        ? (((o = (d = e)._$Cl) !== null && o !== void 0 ? o : (d._$Cl = []))[
            s
          ] = l)
        : (e._$Cu = l)),
    l !== void 0 && (t = E(i, l._$AS(i, t.values), l, s)),
    t
  );
}
class bt {
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
        el: { content: s },
        parts: n,
      } = this._$AD,
      r = (
        (e = t == null ? void 0 : t.creationScope) !== null && e !== void 0
          ? e
          : y
      ).importNode(s, !0);
    g.currentNode = r;
    let o = g.nextNode(),
      d = 0,
      l = 0,
      h = n[0];
    for (; h !== void 0; ) {
      if (d === h.index) {
        let p;
        h.type === 2
          ? (p = new T(o, o.nextSibling, this, t))
          : h.type === 1
          ? (p = new h.ctor(o, h.name, h.strings, this, t))
          : h.type === 6 && (p = new Ut(o, this, t)),
          this.v.push(p),
          (h = n[++l]);
      }
      d !== (h == null ? void 0 : h.index) && ((o = g.nextNode()), d++);
    }
    return r;
  }
  m(t) {
    let e = 0;
    for (const s of this.v)
      s !== void 0 &&
        (s.strings !== void 0
          ? (s._$AI(t, s, e), (e += s.strings.length - 2))
          : s._$AI(t[e])),
        e++;
  }
}
class T {
  constructor(t, e, s, n) {
    var r;
    (this.type = 2),
      (this._$AH = u),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = s),
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
    (t = E(this, t, e)),
      S(t)
        ? t === u || t == null || t === ""
          ? (this._$AH !== u && this._$AR(), (this._$AH = u))
          : t !== this._$AH && t !== _ && this.$(t)
        : t._$litType$ !== void 0
        ? this.T(t)
        : t.nodeType !== void 0
        ? this.S(t)
        : yt(t)
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
      : this.S(y.createTextNode(t)),
      (this._$AH = t);
  }
  T(t) {
    var e;
    const { values: s, _$litType$: n } = t,
      r =
        typeof n == "number"
          ? this._$AC(t)
          : (n.el === void 0 && (n.el = C.createElement(n.h, this.options)), n);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.m(s);
    else {
      const o = new bt(r, this),
        d = o.p(this.options);
      o.m(s), this.S(d), (this._$AH = o);
    }
  }
  _$AC(t) {
    let e = rt.get(t.strings);
    return e === void 0 && rt.set(t.strings, (e = new C(t))), e;
  }
  M(t) {
    Q(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let s,
      n = 0;
    for (const r of t)
      n === e.length
        ? e.push((s = new T(this.A(b()), this.A(b()), this, this.options)))
        : (s = e[n]),
        s._$AI(r),
        n++;
    n < e.length && (this._$AR(s && s._$AB.nextSibling, n), (e.length = n));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for (
      (s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, e);
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
class P {
  constructor(t, e, s, n, r) {
    (this.type = 1),
      (this._$AH = u),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = n),
      (this.options = r),
      s.length > 2 || s[0] !== "" || s[1] !== ""
        ? ((this._$AH = Array(s.length - 1).fill(new String())),
          (this.strings = s))
        : (this._$AH = u);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, s, n) {
    const r = this.strings;
    let o = !1;
    if (r === void 0)
      (t = E(this, t, e, 0)),
        (o = !S(t) || (t !== this._$AH && t !== _)),
        o && (this._$AH = t);
    else {
      const d = t;
      let l, h;
      for (t = r[0], l = 0; l < r.length - 1; l++)
        (h = E(this, d[s + l], e, l)),
          h === _ && (h = this._$AH[l]),
          o || (o = !S(h) || h !== this._$AH[l]),
          h === u ? (t = u) : t !== u && (t += (h != null ? h : "") + r[l + 1]),
          (this._$AH[l] = h);
    }
    o && !n && this.k(t);
  }
  k(t) {
    t === u
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t != null ? t : "");
  }
}
class St extends P {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  k(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
const wt = m ? m.emptyScript : "";
class Ct extends P {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  k(t) {
    t && t !== u
      ? this.element.setAttribute(this.name, wt)
      : this.element.removeAttribute(this.name);
  }
}
class Tt extends P {
  constructor(t, e, s, n, r) {
    super(t, e, s, n, r), (this.type = 5);
  }
  _$AI(t, e = this) {
    var s;
    if ((t = (s = E(this, t, e, 0)) !== null && s !== void 0 ? s : u) === _)
      return;
    const n = this._$AH,
      r =
        (t === u && n !== u) ||
        t.capture !== n.capture ||
        t.once !== n.once ||
        t.passive !== n.passive,
      o = t !== u && (n === u || r);
    r && this.element.removeEventListener(this.name, this, n),
      o && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var e, s;
    typeof this._$AH == "function"
      ? this._$AH.call(
          (s =
            (e = this.options) === null || e === void 0 ? void 0 : e.host) !==
            null && s !== void 0
            ? s
            : this.element,
          t
        )
      : this._$AH.handleEvent(t);
  }
}
class Ut {
  constructor(t, e, s) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = s);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    E(this, t);
  }
}
const ot = window.litHtmlPolyfillSupport;
ot == null || ot(C, T),
  ((B = globalThis.litHtmlVersions) !== null && B !== void 0
    ? B
    : (globalThis.litHtmlVersions = [])
  ).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var I, D;
class H extends A {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Dt = void 0);
  }
  createRenderRoot() {
    var t, e;
    const s = super.createRenderRoot();
    return (
      ((t = (e = this.renderOptions).renderBefore) !== null && t !== void 0) ||
        (e.renderBefore = s.firstChild),
      s
    );
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Dt = gt(e, this.renderRoot, this.renderOptions));
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
 */ const Ot = (i) => (t) =>
  typeof t == "function"
    ? ((e, s) => (window.customElements.define(e, s), s))(i, t)
    : ((e, s) => {
        const { kind: n, elements: r } = s;
        return {
          kind: n,
          elements: r,
          finisher(o) {
            window.customElements.define(e, o);
          },
        };
      })(i, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const xt = (i, t) =>
  t.kind === "method" && t.descriptor && !("value" in t.descriptor)
    ? M(N({}, t), {
        finisher(e) {
          e.createProperty(t.key, i);
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
          e.createProperty(t.key, i);
        },
      };
function Pt(i) {
  return (t, e) =>
    e !== void 0
      ? ((s, n, r) => {
          n.constructor.createProperty(r, s);
        })(i, t, e)
      : xt(i, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function kt(i) {
  return Pt(M(N({}, i), { state: !0 }));
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ht = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
  },
  at =
    (i) =>
    (...t) => ({ _$litDirective$: i, values: t });
class dt {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, s) {
    (this._$Ct = t), (this._$AM = e), (this._$Ci = s);
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
 */ const Lt = at(
  class extends dt {
    constructor(i) {
      var t;
      if (
        (super(i),
        i.type !== ht.ATTRIBUTE ||
          i.name !== "style" ||
          ((t = i.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      )
        throw Error(
          "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute."
        );
    }
    render(i) {
      return Object.keys(i).reduce((t, e) => {
        const s = i[e];
        return s == null
          ? t
          : t +
              `${(e = e
                .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&")
                .toLowerCase())}:${s};`;
      }, "");
    }
    update(i, [t]) {
      const { style: e } = i.element;
      if (this.ut === void 0) {
        this.ut = new Set();
        for (const s in t) this.ut.add(s);
        return this.render(t);
      }
      this.ut.forEach((s) => {
        t[s] == null &&
          (this.ut.delete(s),
          s.includes("-") ? e.removeProperty(s) : (e[s] = ""));
      });
      for (const s in t) {
        const n = t[s];
        n != null &&
          (this.ut.add(s), s.includes("-") ? e.setProperty(s, n) : (e[s] = n));
      }
      return _;
    }
  }
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const zt = at(
  class extends dt {
    constructor(i) {
      var t;
      if (
        (super(i),
        i.type !== ht.ATTRIBUTE ||
          i.name !== "class" ||
          ((t = i.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      )
        throw Error(
          "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
        );
    }
    render(i) {
      return (
        " " +
        Object.keys(i)
          .filter((t) => i[t])
          .join(" ") +
        " "
      );
    }
    update(i, [t]) {
      var e, s;
      if (this.st === void 0) {
        (this.st = new Set()),
          i.strings !== void 0 &&
            (this.et = new Set(
              i.strings
                .join(" ")
                .split(/\s/)
                .filter((r) => r !== "")
            ));
        for (const r in t)
          t[r] &&
            !((e = this.et) === null || e === void 0 ? void 0 : e.has(r)) &&
            this.st.add(r);
        return this.render(t);
      }
      const n = i.element.classList;
      this.st.forEach((r) => {
        r in t || (n.remove(r), this.st.delete(r));
      });
      for (const r in t) {
        const o = !!t[r];
        o === this.st.has(r) ||
          ((s = this.et) === null || s === void 0 ? void 0 : s.has(r)) ||
          (o ? (n.add(r), this.st.add(r)) : (n.remove(r), this.st.delete(r)));
      }
      return _;
    }
  }
);
export {
  Pt as e,
  Lt as i,
  Ot as n,
  zt as o,
  Mt as p,
  Nt as r,
  H as s,
  kt as t,
  Rt as y,
};
