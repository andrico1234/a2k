var vt = Object.defineProperty,
  $t = Object.defineProperties;
var mt = Object.getOwnPropertyDescriptors;
var Y = Object.getOwnPropertySymbols;
var ft = Object.prototype.hasOwnProperty,
  gt = Object.prototype.propertyIsEnumerable;
var F = (s, t, e) =>
    t in s
      ? vt(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (s[t] = e),
  N = (s, t) => {
    for (var e in t || (t = {})) ft.call(t, e) && F(s, e, t[e]);
    if (Y) for (var e of Y(t)) gt.call(t, e) && F(s, e, t[e]);
    return s;
  },
  M = (s, t) => $t(s, mt(t));
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
  X = new Map();
class q {
  constructor(t, e) {
    if (((this._$cssResult$ = !0), e !== O))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    this.cssText = t;
  }
  get styleSheet() {
    let t = X.get(this.cssText);
    return (
      R &&
        t === void 0 &&
        (X.set(this.cssText, (t = new CSSStyleSheet())),
        t.replaceSync(this.cssText)),
      t
    );
  }
  toString() {
    return this.cssText;
  }
}
const Et = (s) => new q(typeof s == "string" ? s : s + "", O),
  Rt = (s, ...t) => {
    const e =
      s.length === 1
        ? s[0]
        : t.reduce(
            (i, n, r) =>
              i +
              ((o) => {
                if (o._$cssResult$ === !0) return o.cssText;
                if (typeof o == "number") return o;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    o +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(n) +
              s[r + 1],
            s[0]
          );
    return new q(e, O);
  },
  At = (s, t) => {
    R
      ? (s.adoptedStyleSheets = t.map((e) =>
          e instanceof CSSStyleSheet ? e : e.styleSheet
        ))
      : t.forEach((e) => {
          const i = document.createElement("style"),
            n = window.litNonce;
          n !== void 0 && i.setAttribute("nonce", n),
            (i.textContent = e.cssText),
            s.appendChild(i);
        });
  },
  K = R
    ? (s) => s
    : (s) =>
        s instanceof CSSStyleSheet
          ? ((t) => {
              let e = "";
              for (const i of t.cssRules) e += i.cssText;
              return Et(e);
            })(s)
          : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var I;
const Z = window.trustedTypes,
  yt = Z ? Z.emptyScript : "",
  J = window.reactiveElementPolyfillSupport,
  B = {
    toAttribute(s, t) {
      switch (t) {
        case Boolean:
          s = s ? yt : null;
          break;
        case Object:
        case Array:
          s = s == null ? s : JSON.stringify(s);
      }
      return s;
    },
    fromAttribute(s, t) {
      let e = s;
      switch (t) {
        case Boolean:
          e = s !== null;
          break;
        case Number:
          e = s === null ? null : Number(s);
          break;
        case Object:
        case Array:
          try {
            e = JSON.parse(s);
          } catch {
            e = null;
          }
      }
      return e;
    },
  },
  G = (s, t) => t !== s && (t == t || s == s),
  z = { attribute: !0, type: String, converter: B, reflect: !1, hasChanged: G };
class g extends HTMLElement {
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
  static createProperty(t, e = z) {
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
      for (const n of i) this.createProperty(n, e[n]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const n of i) e.unshift(K(n));
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
    return At(e, this.constructor.elementStyles), e;
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
    var n, r;
    const o = this.constructor._$Eh(t, i);
    if (o !== void 0 && i.reflect === !0) {
      const h = (
        (r =
          (n = i.converter) === null || n === void 0
            ? void 0
            : n.toAttribute) !== null && r !== void 0
          ? r
          : B.toAttribute
      )(e, i.type);
      (this._$Ei = t),
        h == null ? this.removeAttribute(o) : this.setAttribute(o, h),
        (this._$Ei = null);
    }
  }
  _$AK(t, e) {
    var i, n, r;
    const o = this.constructor,
      h = o._$Eu.get(t);
    if (h !== void 0 && this._$Ei !== h) {
      const l = o.getPropertyOptions(h),
        a = l.converter,
        p =
          (r =
            (n =
              (i = a) === null || i === void 0 ? void 0 : i.fromAttribute) !==
              null && n !== void 0
              ? n
              : typeof a == "function"
              ? a
              : null) !== null && r !== void 0
            ? r
            : B.fromAttribute;
      (this._$Ei = h), (this[h] = p(e, l.type)), (this._$Ei = null);
    }
  }
  requestUpdate(t, e, i) {
    let n = !0;
    t !== void 0 &&
      (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || G)(
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
(g.finalized = !0),
  (g.elementProperties = new Map()),
  (g.elementStyles = []),
  (g.shadowRootOptions = { mode: "open" }),
  J == null || J({ ReactiveElement: g }),
  ((I = globalThis.reactiveElementVersions) !== null && I !== void 0
    ? I
    : (globalThis.reactiveElementVersions = [])
  ).push("1.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var D;
const E = globalThis.trustedTypes,
  Q = E ? E.createPolicy("lit-html", { createHTML: (s) => s }) : void 0,
  v = `lit$${(Math.random() + "").slice(9)}$`,
  tt = "?" + v,
  wt = `<${tt}>`,
  A = document,
  b = (s = "") => A.createComment(s),
  S = (s) => s === null || (typeof s != "object" && typeof s != "function"),
  et = Array.isArray,
  bt = (s) => {
    var t;
    return (
      et(s) ||
      typeof ((t = s) === null || t === void 0 ? void 0 : t[Symbol.iterator]) ==
        "function"
    );
  },
  C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  it = /-->/g,
  st = />/g,
  f =
    />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
  nt = /'/g,
  rt = /"/g,
  ot = /^(?:script|style|textarea)$/i,
  ht =
    (s) =>
    (t, ...e) => ({ _$litType$: s, strings: t, values: e }),
  Ot = ht(1),
  It = ht(2),
  $ = Symbol.for("lit-noChange"),
  u = Symbol.for("lit-nothing"),
  lt = new WeakMap(),
  St = (s, t, e) => {
    var i, n;
    const r =
      (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0
        ? i
        : t;
    let o = r._$litPart$;
    if (o === void 0) {
      const h =
        (n = e == null ? void 0 : e.renderBefore) !== null && n !== void 0
          ? n
          : null;
      r._$litPart$ = o = new T(
        t.insertBefore(b(), h),
        h,
        void 0,
        e != null ? e : {}
      );
    }
    return o._$AI(s), o;
  },
  y = A.createTreeWalker(A, 129, null, !1),
  Ct = (s, t) => {
    const e = s.length - 1,
      i = [];
    let n,
      r = t === 2 ? "<svg>" : "",
      o = C;
    for (let l = 0; l < e; l++) {
      const a = s[l];
      let p,
        d,
        c = -1,
        _ = 0;
      for (; _ < a.length && ((o.lastIndex = _), (d = o.exec(a)), d !== null); )
        (_ = o.lastIndex),
          o === C
            ? d[1] === "!--"
              ? (o = it)
              : d[1] !== void 0
              ? (o = st)
              : d[2] !== void 0
              ? (ot.test(d[2]) && (n = RegExp("</" + d[2], "g")), (o = f))
              : d[3] !== void 0 && (o = f)
            : o === f
            ? d[0] === ">"
              ? ((o = n != null ? n : C), (c = -1))
              : d[1] === void 0
              ? (c = -2)
              : ((c = o.lastIndex - d[2].length),
                (p = d[1]),
                (o = d[3] === void 0 ? f : d[3] === '"' ? rt : nt))
            : o === rt || o === nt
            ? (o = f)
            : o === it || o === st
            ? (o = C)
            : ((o = f), (n = void 0));
      const x = o === f && s[l + 1].startsWith("/>") ? " " : "";
      r +=
        o === C
          ? a + wt
          : c >= 0
          ? (i.push(p), a.slice(0, c) + "$lit$" + a.slice(c) + v + x)
          : a + v + (c === -2 ? (i.push(void 0), l) : x);
    }
    const h = r + (s[e] || "<?>") + (t === 2 ? "</svg>" : "");
    return [Q !== void 0 ? Q.createHTML(h) : h, i];
  };
class P {
  constructor({ strings: t, _$litType$: e }, i) {
    let n;
    this.parts = [];
    let r = 0,
      o = 0;
    const h = t.length - 1,
      l = this.parts,
      [a, p] = Ct(t, e);
    if (
      ((this.el = P.createElement(a, i)),
      (y.currentNode = this.el.content),
      e === 2)
    ) {
      const d = this.el.content,
        c = d.firstChild;
      c.remove(), d.append(...c.childNodes);
    }
    for (; (n = y.nextNode()) !== null && l.length < h; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const d = [];
          for (const c of n.getAttributeNames())
            if (c.endsWith("$lit$") || c.startsWith(v)) {
              const _ = p[o++];
              if ((d.push(c), _ !== void 0)) {
                const x = n.getAttribute(_.toLowerCase() + "$lit$").split(v),
                  L = /([.?@])?(.*)/.exec(_);
                l.push({
                  type: 1,
                  index: r,
                  name: L[2],
                  strings: x,
                  ctor:
                    L[1] === "."
                      ? Tt
                      : L[1] === "?"
                      ? xt
                      : L[1] === "@"
                      ? Lt
                      : k,
                });
              } else l.push({ type: 6, index: r });
            }
          for (const c of d) n.removeAttribute(c);
        }
        if (ot.test(n.tagName)) {
          const d = n.textContent.split(v),
            c = d.length - 1;
          if (c > 0) {
            n.textContent = E ? E.emptyScript : "";
            for (let _ = 0; _ < c; _++)
              n.append(d[_], b()),
                y.nextNode(),
                l.push({ type: 2, index: ++r });
            n.append(d[c], b());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === tt) l.push({ type: 2, index: r });
        else {
          let d = -1;
          for (; (d = n.data.indexOf(v, d + 1)) !== -1; )
            l.push({ type: 7, index: r }), (d += v.length - 1);
        }
      r++;
    }
  }
  static createElement(t, e) {
    const i = A.createElement("template");
    return (i.innerHTML = t), i;
  }
}
function w(s, t, e = s, i) {
  var n, r, o, h;
  if (t === $) return t;
  let l =
    i !== void 0
      ? (n = e._$Cl) === null || n === void 0
        ? void 0
        : n[i]
      : e._$Cu;
  const a = S(t) ? void 0 : t._$litDirective$;
  return (
    (l == null ? void 0 : l.constructor) !== a &&
      ((r = l == null ? void 0 : l._$AO) === null ||
        r === void 0 ||
        r.call(l, !1),
      a === void 0 ? (l = void 0) : ((l = new a(s)), l._$AT(s, e, i)),
      i !== void 0
        ? (((o = (h = e)._$Cl) !== null && o !== void 0 ? o : (h._$Cl = []))[
            i
          ] = l)
        : (e._$Cu = l)),
    l !== void 0 && (t = w(s, l._$AS(s, t.values), l, i)),
    t
  );
}
class Pt {
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
          : A
      ).importNode(i, !0);
    y.currentNode = r;
    let o = y.nextNode(),
      h = 0,
      l = 0,
      a = n[0];
    for (; a !== void 0; ) {
      if (h === a.index) {
        let p;
        a.type === 2
          ? (p = new T(o, o.nextSibling, this, t))
          : a.type === 1
          ? (p = new a.ctor(o, a.name, a.strings, this, t))
          : a.type === 6 && (p = new kt(o, this, t)),
          this.v.push(p),
          (a = n[++l]);
      }
      h !== (a == null ? void 0 : a.index) && ((o = y.nextNode()), h++);
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
  constructor(t, e, i, n) {
    var r;
    (this.type = 2),
      (this._$AH = u),
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
    (t = w(this, t, e)),
      S(t)
        ? t === u || t == null || t === ""
          ? (this._$AH !== u && this._$AR(), (this._$AH = u))
          : t !== this._$AH && t !== $ && this.$(t)
        : t._$litType$ !== void 0
        ? this.T(t)
        : t.nodeType !== void 0
        ? this.S(t)
        : bt(t)
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
      : this.S(A.createTextNode(t)),
      (this._$AH = t);
  }
  T(t) {
    var e;
    const { values: i, _$litType$: n } = t,
      r =
        typeof n == "number"
          ? this._$AC(t)
          : (n.el === void 0 && (n.el = P.createElement(n.h, this.options)), n);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.m(i);
    else {
      const o = new Pt(r, this),
        h = o.p(this.options);
      o.m(i), this.S(h), (this._$AH = o);
    }
  }
  _$AC(t) {
    let e = lt.get(t.strings);
    return e === void 0 && lt.set(t.strings, (e = new P(t))), e;
  }
  M(t) {
    et(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let i,
      n = 0;
    for (const r of t)
      n === e.length
        ? e.push((i = new T(this.A(b()), this.A(b()), this, this.options)))
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
class k {
  constructor(t, e, i, n, r) {
    (this.type = 1),
      (this._$AH = u),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = n),
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
  _$AI(t, e = this, i, n) {
    const r = this.strings;
    let o = !1;
    if (r === void 0)
      (t = w(this, t, e, 0)),
        (o = !S(t) || (t !== this._$AH && t !== $)),
        o && (this._$AH = t);
    else {
      const h = t;
      let l, a;
      for (t = r[0], l = 0; l < r.length - 1; l++)
        (a = w(this, h[i + l], e, l)),
          a === $ && (a = this._$AH[l]),
          o || (o = !S(a) || a !== this._$AH[l]),
          a === u ? (t = u) : t !== u && (t += (a != null ? a : "") + r[l + 1]),
          (this._$AH[l] = a);
    }
    o && !n && this.k(t);
  }
  k(t) {
    t === u
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t != null ? t : "");
  }
}
class Tt extends k {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  k(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
const Ut = E ? E.emptyScript : "";
class xt extends k {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  k(t) {
    t && t !== u
      ? this.element.setAttribute(this.name, Ut)
      : this.element.removeAttribute(this.name);
  }
}
class Lt extends k {
  constructor(t, e, i, n, r) {
    super(t, e, i, n, r), (this.type = 5);
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = w(this, t, e, 0)) !== null && i !== void 0 ? i : u) === $)
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
class kt {
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
    w(this, t);
  }
}
const at = window.litHtmlPolyfillSupport;
at == null || at(P, T),
  ((D = globalThis.litHtmlVersions) !== null && D !== void 0
    ? D
    : (globalThis.litHtmlVersions = [])
  ).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var j, V;
class H extends g {
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
      (this._$Dt = St(e, this.renderRoot, this.renderOptions));
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
    return $;
  }
}
(H.finalized = !0),
  (H._$litElement$ = !0),
  (j = globalThis.litElementHydrateSupport) === null ||
    j === void 0 ||
    j.call(globalThis, { LitElement: H });
const dt = globalThis.litElementPolyfillSupport;
dt == null || dt({ LitElement: H });
((V = globalThis.litElementVersions) !== null && V !== void 0
  ? V
  : (globalThis.litElementVersions = [])
).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Bt = (s) => (t) =>
  typeof t == "function"
    ? ((e, i) => (window.customElements.define(e, i), i))(s, t)
    : ((e, i) => {
        const { kind: n, elements: r } = i;
        return {
          kind: n,
          elements: r,
          finisher(o) {
            window.customElements.define(e, o);
          },
        };
      })(s, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Ht = (s, t) =>
  t.kind === "method" && t.descriptor && !("value" in t.descriptor)
    ? M(N({}, t), {
        finisher(e) {
          e.createProperty(t.key, s);
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
          e.createProperty(t.key, s);
        },
      };
function Nt(s) {
  return (t, e) =>
    e !== void 0
      ? ((i, n, r) => {
          n.constructor.createProperty(r, i);
        })(s, t, e)
      : Ht(s, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function zt(s) {
  return Nt(M(N({}, s), { state: !0 }));
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ct = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
  },
  ut =
    (s) =>
    (...t) => ({ _$litDirective$: s, values: t });
class pt {
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
 */ const Dt = ut(
  class extends pt {
    constructor(s) {
      var t;
      if (
        (super(s),
        s.type !== ct.ATTRIBUTE ||
          s.name !== "style" ||
          ((t = s.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      )
        throw Error(
          "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute."
        );
    }
    render(s) {
      return Object.keys(s).reduce((t, e) => {
        const i = s[e];
        return i == null
          ? t
          : t +
              `${(e = e
                .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&")
                .toLowerCase())}:${i};`;
      }, "");
    }
    update(s, [t]) {
      const { style: e } = s.element;
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
      return $;
    }
  }
);
class m {
  constructor(t) {
    (this.id = -1),
      (this.nativePointer = t),
      (this.pageX = t.pageX),
      (this.pageY = t.pageY),
      (this.clientX = t.clientX),
      (this.clientY = t.clientY),
      self.Touch && t instanceof Touch
        ? (this.id = t.identifier)
        : U(t) && (this.id = t.pointerId);
  }
  getCoalesced() {
    if ("getCoalescedEvents" in this.nativePointer) {
      const t = this.nativePointer.getCoalescedEvents().map((e) => new m(e));
      if (t.length > 0) return t;
    }
    return [this];
  }
}
const U = (s) => "pointerId" in s,
  W = (s) => "changedTouches" in s,
  _t = () => {};
class jt {
  constructor(
    t,
    {
      start: e = () => !0,
      move: i = _t,
      end: n = _t,
      rawUpdates: r = !1,
      avoidPointerEvents: o = !1,
    } = {}
  ) {
    (this._element = t),
      (this.startPointers = []),
      (this.currentPointers = []),
      (this._excludeFromButtonsCheck = new Set()),
      (this._pointerStart = (h) => {
        if (U(h) && h.buttons === 0)
          this._excludeFromButtonsCheck.add(h.pointerId);
        else if (!(h.buttons & 1)) return;
        const l = new m(h);
        this.currentPointers.some((a) => a.id === l.id) ||
          !this._triggerPointerStart(l, h) ||
          (U(h)
            ? ((h.target && "setPointerCapture" in h.target
                ? h.target
                : this._element
              ).setPointerCapture(h.pointerId),
              this._element.addEventListener(
                this._rawUpdates ? "pointerrawupdate" : "pointermove",
                this._move
              ),
              this._element.addEventListener("pointerup", this._pointerEnd),
              this._element.addEventListener("pointercancel", this._pointerEnd))
            : (window.addEventListener("mousemove", this._move),
              window.addEventListener("mouseup", this._pointerEnd)));
      }),
      (this._touchStart = (h) => {
        for (const l of Array.from(h.changedTouches))
          this._triggerPointerStart(new m(l), h);
      }),
      (this._move = (h) => {
        if (
          !W(h) &&
          (!U(h) || !this._excludeFromButtonsCheck.has(h.pointerId)) &&
          h.buttons === 0
        ) {
          this._pointerEnd(h);
          return;
        }
        const l = this.currentPointers.slice(),
          a = W(h)
            ? Array.from(h.changedTouches).map((d) => new m(d))
            : [new m(h)],
          p = [];
        for (const d of a) {
          const c = this.currentPointers.findIndex((_) => _.id === d.id);
          c !== -1 && (p.push(d), (this.currentPointers[c] = d));
        }
        p.length !== 0 && this._moveCallback(l, p, h);
      }),
      (this._triggerPointerEnd = (h, l) => {
        if (!W(l) && l.buttons & 1) return !1;
        const a = this.currentPointers.findIndex((d) => d.id === h.id);
        if (a === -1) return !1;
        this.currentPointers.splice(a, 1),
          this.startPointers.splice(a, 1),
          this._excludeFromButtonsCheck.delete(h.id);
        const p = !(
          l.type === "mouseup" ||
          l.type === "touchend" ||
          l.type === "pointerup"
        );
        return this._endCallback(h, l, p), !0;
      }),
      (this._pointerEnd = (h) => {
        if (!!this._triggerPointerEnd(new m(h), h))
          if (U(h)) {
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
      (this._touchEnd = (h) => {
        for (const l of Array.from(h.changedTouches))
          this._triggerPointerEnd(new m(l), h);
      }),
      (this._startCallback = e),
      (this._moveCallback = i),
      (this._endCallback = n),
      (this._rawUpdates = r && "onpointerrawupdate" in window),
      self.PointerEvent && !o
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
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Vt = ut(
  class extends pt {
    constructor(s) {
      var t;
      if (
        (super(s),
        s.type !== ct.ATTRIBUTE ||
          s.name !== "class" ||
          ((t = s.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      )
        throw Error(
          "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
        );
    }
    render(s) {
      return (
        " " +
        Object.keys(s)
          .filter((t) => s[t])
          .join(" ") +
        " "
      );
    }
    update(s, [t]) {
      var e, i;
      if (this.st === void 0) {
        (this.st = new Set()),
          s.strings !== void 0 &&
            (this.et = new Set(
              s.strings
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
      const n = s.element.classList;
      this.st.forEach((r) => {
        r in t || (n.remove(r), this.st.delete(r));
      });
      for (const r in t) {
        const o = !!t[r];
        o === this.st.has(r) ||
          ((i = this.et) === null || i === void 0 ? void 0 : i.has(r)) ||
          (o ? (n.add(r), this.st.add(r)) : (n.remove(r), this.st.delete(r)));
      }
      return $;
    }
  }
);
export {
  jt as P,
  Nt as a,
  $ as b,
  Dt as c,
  zt as d,
  ut as e,
  pt as i,
  Bt as n,
  Vt as o,
  Ot as p,
  Rt as r,
  H as s,
  ct as t,
  St as w,
  It as y,
};
