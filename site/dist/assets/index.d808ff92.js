import {
  r,
  s as F,
  p as a,
  e as y,
  i as J,
  y as x,
  n as p,
  w as i1,
  t as t1,
  o as l1,
} from "./vendor.7a89da44.js";
const h1 = function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) f(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const d of t.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && f(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function h(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function f(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = h(e);
    fetch(e.href, t);
  }
};
h1();
class $ extends F {
  render() {
    return a`<div id="stack">
      <slot></slot>
    </div>`;
  }
}
$.styles = r`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;
window.customElements.define("a2k-stack", $);
class j extends F {
  render() {
    return a` <div id="panel">
      <slot></slot>
    </div>`;
  }
}
j.styles = r`
    #panel {
      --inset-shadow-padding: 2px;
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
    }
  `;
window.customElements.define("a2k-panel", j);
var e1 =
    (globalThis && globalThis.__decorate) ||
    function (l, i, h, f) {
      var e = arguments.length,
        t =
          e < 3
            ? i
            : f === null
            ? (f = Object.getOwnPropertyDescriptor(i, h))
            : f,
        d;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        t = Reflect.decorate(l, i, h, f);
      else
        for (var c = l.length - 1; c >= 0; c--)
          (d = l[c]) &&
            (t = (e < 3 ? d(t) : e > 3 ? d(i, h, t) : d(i, h)) || t);
      return e > 3 && t && Object.defineProperty(i, h, t), t;
    },
  f1 =
    (globalThis && globalThis.__metadata) ||
    function (l, i) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(l, i);
    };
class A extends F {
  constructor() {
    super(...arguments);
    (this.closeButton = a`<button @click="${this.handleClose}">Close</button>`),
      (this.closable = !1);
  }
  handleClose(i) {
    const h = new Event("close", { bubbles: !0, composed: !0 });
    i.target.dispatchEvent(h);
  }
  render() {
    return a`<div class="topbar-wrapper">
      <h2 class="heading">
        <slot></slot>
      </h2>
      ${this.closable ? this.closeButton : ""}
    </div>`;
  }
}
A.styles = r`
    .topbar-wrapper {
      background: var(--window-topbar-background);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    h2 {
      margin: 0;
      font-size: var(--window-topbar-heading-font-size);
      color: var(--window-topbar-heading-color);
      padding: 0 var(--window-spacing-horizontal);
    }
  `;
e1(
  [y({ type: Boolean }), f1("design:type", Object)],
  A.prototype,
  "closable",
  void 0
);
window.customElements.define("a2k-window-topbar", A);
var V =
    (globalThis && globalThis.__decorate) ||
    function (l, i, h, f) {
      var e = arguments.length,
        t =
          e < 3
            ? i
            : f === null
            ? (f = Object.getOwnPropertyDescriptor(i, h))
            : f,
        d;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        t = Reflect.decorate(l, i, h, f);
      else
        for (var c = l.length - 1; c >= 0; c--)
          (d = l[c]) &&
            (t = (e < 3 ? d(t) : e > 3 ? d(i, h, t) : d(i, h)) || t);
      return e > 3 && t && Object.defineProperty(i, h, t), t;
    },
  H =
    (globalThis && globalThis.__metadata) ||
    function (l, i) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(l, i);
    },
  m =
    (globalThis && globalThis.__classPrivateFieldGet) ||
    function (l, i, h, f) {
      if (h === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof i == "function" ? l !== i || !f : !i.has(l))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return h === "m" ? f : h === "a" ? f.call(l) : f ? f.value : i.get(l);
    },
  C,
  P,
  S,
  z;
class w extends F {
  constructor() {
    super();
    C.add(this),
      (this.title = ""),
      (this.draggable = !0),
      (this.cursorPositionX = null),
      (this.cursorPositionY = null),
      (this.closable = !1),
      (this.styles = {
        top: "16px",
        left: "16px",
        width: "var(--window-width)",
      }),
      (this.img = new Image(0, 0)),
      (this.img.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
      this.addEventListener("close", (i) => this.remove());
  }
  handleWindowMove(i, h) {
    const { top: f, left: e } = this.styles,
      { innerHeight: t, innerWidth: d } = window,
      c = this.renderRoot.querySelector("#window");
    if (!c) return;
    const g = Number(f == null ? void 0 : f.replace("px", "")),
      o = Number(e == null ? void 0 : e.replace("px", "")),
      { pageX: M, pageY: Z } = h;
    if (
      M !== 0 &&
      Z !== 0 &&
      (M !== this.cursorPositionX || Z !== this.cursorPositionY)
    ) {
      const {
          bottom: Y,
          right: q,
          width: G,
          height: K,
        } = c.getBoundingClientRect(),
        v = M - this.cursorPositionX,
        u = Z - this.cursorPositionY,
        _ = g + u < 0,
        O = o + v < 0,
        R = Y + u > t,
        T = q + v > d,
        Q = R || O || T || _;
      (this.cursorPositionX = M),
        (this.cursorPositionY = Z),
        Q
          ? (_ && (this.styles = { top: "0px", left: `${o}px` }),
            O && (this.styles = { top: `${g}px`, left: `${0}px` }),
            R && (this.styles = { top: `${t - K}px`, left: `${o}px` }),
            T && (this.styles = { top: `${g}px`, left: `${d - G}px` }))
          : (this.styles = { top: `${g + u}px`, left: `${o + v}px` });
    }
  }
  render() {
    return a`
      <div id="window" style=${J(this.styles)}>
        <a2k-panel>
          <div
            @dragstart="${m(this, C, "m", P)}"
            @drag="${m(this, C, "m", S)}"
            @dragend="${m(this, C, "m", z)}"
            class="topbar-wrapper"
            draggable="${this.draggable}"
          >
            <a2k-window-topbar ?closable="${this.closable}"
              >${this.title}</a2k-window-topbar
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
(C = new WeakSet()),
  (P = function (i) {
    var h;
    (h = i.dataTransfer) === null ||
      h === void 0 ||
      h.setDragImage(this.img, 0, 0),
      (this.cursorPositionX = i.pageX),
      (this.cursorPositionY = i.pageY);
  }),
  (S = function (i) {
    window.requestAnimationFrame((h) => this.handleWindowMove(h, i));
  }),
  (z = function () {
    (this.cursorPositionX = null), (this.cursorPositionY = null);
  });
w.styles = r`
    #window {
      font-family: var(--font-primary);
      position: absolute;
      width: var(--window-width);
      max-width: 100%;
    }
    .content {
      padding: 0 var(--window-spacing-horizontal);
    }
  `;
V([y(), H("design:type", Object)], w.prototype, "title", void 0);
V(
  [y({ type: Boolean }), H("design:type", Object)],
  w.prototype,
  "draggable",
  void 0
);
V([y(), H("design:type", Object)], w.prototype, "cursorPositionX", void 0);
V([y(), H("design:type", Object)], w.prototype, "cursorPositionY", void 0);
V(
  [y({ type: Boolean }), H("design:type", Object)],
  w.prototype,
  "closable",
  void 0
);
V([y(), H("design:type", Object)], w.prototype, "styles", void 0);
window.customElements.define("a2k-window", w);
class d1 extends F {
  constructor() {
    super(...arguments);
    (this.width = 16), (this.height = 14);
  }
  render() {
    return x`
    <svg
    styles="width:auto"
    viewBox="0 0 ${this.width} ${this.height}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#000" d="M0 2h1v2H0z" />
    <path fill="#DA2F20" d="M0 5h1v2H0z" />
    <path fill="#0022F4" d="M0 8h1v2H0z" />
    <path d="M0 11h1v1H0v-1ZM0 12h1v1H0v-1Z" fill="#000" />
    <path
      d="M8 5h1v1H8V5ZM9 4h1v1H9V4ZM8 3h1v1H8V3ZM8 4h1v1H8V4ZM9 2h1v1H9V2ZM9 3h1v1H9V3Z"
      fill="#DA2F20"
    />
    <path
      d="M9 8h1v1H9V8ZM8 9h1v1H8V9ZM8 8h1v1H8V8ZM8 10h1v1H8v-1ZM9 7h1v1H9V7ZM9 9h1v1H9V9Z"
      fill="#0022F4"
    />
    <path
      d="M12 2h1v1h-1V2ZM13 3h1v1h-1V3ZM12 3h1v1h-1V3ZM12 4h1v1h-1V4ZM13 4h1v1h-1V4ZM13 5h1v1h-1V5Z"
      fill="#76F74D"
    />
    <path fill="#000" d="M13 7h1v1h-1z" />
    <path
      d="M13 9h1v1h-1V9ZM12 8h1v1h-1V8ZM12 7h1v1h-1V7ZM12 9h1v1h-1V9ZM13 8h1v1h-1V8ZM13 10h1v1h-1v-1Z"
      fill="#FDEA52"
    />
    <path
      d="M2 6h1v1H2V6ZM2 7h1v1H2V7ZM3 7h1v1H3V7ZM4 6h1v1H4V6ZM4 7h1v1H4V7ZM5 6h1v1H5V6ZM5 7h1v1H5V7Z"
      fill="#DA2F20"
    />
    <path
      d="M2 9h1v1H2V9ZM2 10h1v1H2v-1ZM3 10h1v1H3v-1ZM4 9h1v1H4V9ZM4 10h1v1H4v-1ZM5 9h1v1H5V9ZM5 10h1v1H5v-1Z"
      fill="#0022F4"
    />
    <path
      d="M7 12h1v1H7v-1ZM8 2h1v1H8V2ZM12 5h1v1h-1V5ZM13 6h1v1h-1V6ZM6 2h1v1H6V2ZM6 3h1v1H6V3ZM6 5h1v1H6V5ZM6 6h1v1H6V6ZM6 8h1v1H6V8ZM6 9h1v1H6V9ZM6 11h1v1H6v-1ZM7 1h1v1H7V1ZM7 2h1v1H7V2ZM7 4h1v1H7V4ZM6 4h1v1H6V4ZM7 3h1v1H7V3ZM7 9h1v1H7V9ZM6 10h1v1H6v-1ZM6 7h1v1H6V7ZM7 6h1v1H7V6ZM7 5h1v1H7V5ZM7 7h1v1H7V7ZM7 8h1v1H7V8ZM7 10h1v1H7v-1ZM7 11h1v1H7v-1ZM8 12h1v1H8v-1ZM8 1h1v1H8V1ZM8 7h1v1H8V7ZM8 11h1v1H8v-1ZM9 11h1v1H9v-1ZM9 0h1v1H9V0ZM9 1h1v1H9V1ZM9 5h1v1H9V5ZM9 6h1v1H9V6ZM8 6h1v1H8V6ZM9 10h1v1H9v-1ZM10 2h1v1h-1V2ZM11 2h1v1h-1V2ZM11 8h1v1h-1V8ZM10 8h1v1h-1V8ZM10 5h1v1h-1V5ZM11 5h1v1h-1V5ZM10 11h1v1h-1v-1ZM10 0h1v1h-1V0ZM10 1h1v1h-1V1ZM10 3h1v1h-1V3ZM10 4h1v1h-1V4ZM10 6h1v1h-1V6ZM10 7h1v1h-1V7ZM10 9h1v1h-1V9ZM10 10h1v1h-1v-1ZM11 11h1v1h-1v-1ZM11 0h1v1h-1V0ZM11 1h1v1h-1V1ZM11 3h1v1h-1V3ZM11 4h1v1h-1V4ZM11 6h1v1h-1V6ZM11 7h1v1h-1V7ZM11 9h1v1h-1V9ZM11 10h1v1h-1v-1ZM12 11h1v1h-1v-1ZM12 0h1v1h-1V0ZM12 1h1v1h-1V1ZM12 6h1v1h-1V6ZM12 10h1v1h-1v-1ZM13 12h1v1h-1v-1ZM13 1h1v1h-1V1ZM13 2h1v1h-1V2ZM13 11h1v1h-1v-1ZM14 3h1v1h-1V3ZM15 4h1v1h-1V4ZM15 7h1v1h-1V7ZM15 10h1v1h-1v-1ZM14 9h1v1h-1V9ZM14 6h1v1h-1V6ZM14 12h1v1h-1v-1ZM14 1h1v1h-1V1ZM14 2h1v1h-1V2ZM14 4h1v1h-1V4ZM14 5h1v1h-1V5ZM14 7h1v1h-1V7ZM14 8h1v1h-1V8ZM14 10h1v1h-1v-1ZM14 11h1v1h-1v-1ZM15 13h1v1h-1v-1ZM15 2h1v1h-1V2ZM15 3h1v1h-1V3ZM15 5h1v1h-1V5ZM15 6h1v1h-1V6ZM15 8h1v1h-1V8ZM15 9h1v1h-1V9ZM15 11h1v1h-1v-1ZM15 12h1v1h-1v-1ZM2 3h1v1H2V3ZM2 4h1v1H2V4ZM3 4h1v1H3V4ZM4 3h1v1H4V3ZM4 4h1v1H4V4ZM5 3h1v1H5V3ZM5 4h1v1H5V4ZM2 12h1v1H2v-1ZM2 13h1v1H2v-1ZM4 12h1v1H4v-1ZM4 13h1v1H4v-1ZM6 12h1v1H6v-1ZM6 13h1v1H6v-1ZM5 12h1v1H5v-1ZM5 13h1v1H5v-1ZM3 13h1v1H3v-1Z"
      fill="#000"
    />
  </svg>
    `;
  }
}
window.customElements.define("a2k-windows-logo", d1);
class c1 extends F {
  constructor() {
    super(...arguments);
    (this.width = 24), (this.height = 24);
  }
  render() {
    return x`
    <svg
    styles="width:auto"
    viewBox="0 0 ${this.width} ${this.height}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
<rect y="12" width="1" height="1" fill="#791A80"/>
<rect y="13" width="1" height="1" fill="#791A80"/>
<rect y="14" width="1" height="1" fill="#791A80"/>
<rect y="15" width="1" height="1" fill="#791A80"/>
<rect x="1" y="12" width="1" height="1" fill="#791A80"/>
<rect x="1" y="13" width="1" height="1" fill="#5A0E30"/>
<rect x="1" y="14" width="1" height="1" fill="#5A1160"/>
<rect x="1" y="15" width="1" height="1" fill="#5A1160"/>
<rect x="2" y="12" width="1" height="1" fill="#791A80"/>
<rect x="2" y="13" width="1" height="1" fill="#9C9C9C"/>
<rect x="2" y="14" width="1" height="1" fill="#9C9C9C"/>
<rect x="2" y="15" width="1" height="1" fill="#9C9C9C"/>
<rect x="3" y="12" width="1" height="1" fill="#BD2EC7"/>
<rect x="3" y="13" width="1" height="1" fill="#791A80"/>
<rect x="3" y="14" width="1" height="1" fill="#C6C6C6"/>
<rect x="3" y="15" width="1" height="1" fill="#C6C6C6"/>
<rect x="4" y="12" width="1" height="1" fill="#BD2EC7"/>
<rect x="5" y="12" width="1" height="1" fill="#8F2097"/>
<rect x="6" y="12" width="1" height="1" fill="#BD2EC7"/>
<rect x="7" y="12" width="1" height="1" fill="#C79D47"/>
<rect x="8" y="12" width="1" height="1" fill="#FFFE54"/>
<rect x="9" y="12" width="1" height="1" fill="#C79D47"/>
<rect x="10" y="12" width="1" height="1" fill="#8F2097"/>
<rect x="11" y="12" width="1" height="1" fill="#791A80"/>
<rect x="12" y="12" width="1" height="1" fill="#8F2097"/>
<rect x="13" y="12" width="1" height="1" fill="#791A80"/>
<rect x="14" y="12" width="1" height="1" fill="#8F2097"/>
<rect x="15" y="12" width="1" height="1" fill="#791A80"/>
<rect x="16" y="12" width="1" height="1" fill="#791A80"/>
<rect x="17" y="12" width="1" height="1" fill="black"/>
<rect x="18" y="12" width="1" height="1" fill="#5A5A5A"/>
<rect x="4" y="13" width="1" height="1" fill="#791A80"/>
<rect x="5" y="13" width="1" height="1" fill="#BD2EC7"/>
<rect x="6" y="13" width="1" height="1" fill="#8F2097"/>
<rect x="7" y="13" width="1" height="1" fill="#8F2097"/>
<rect x="8" y="13" width="1" height="1" fill="#5A1160"/>
<rect x="9" y="13" width="1" height="1" fill="#5A1160"/>
<rect x="10" y="13" width="1" height="1" fill="#5A1160"/>
<rect x="11" y="13" width="1" height="1" fill="#8F2097"/>
<rect x="12" y="13" width="1" height="1" fill="#791A80"/>
<rect x="13" y="13" width="1" height="1" fill="#8F2097"/>
<rect x="14" y="13" width="1" height="1" fill="#791A80"/>
<rect x="15" y="13" width="1" height="1" fill="#791A80"/>
<rect x="16" y="13" width="1" height="1" fill="black"/>
<rect x="17" y="13" width="1" height="1" fill="#5A5A5A"/>
<rect x="18" y="13" width="1" height="1" fill="#848484"/>
<rect x="4" y="14" width="1" height="1" fill="#9C9C9C"/>
<rect x="5" y="14" width="1" height="1" fill="#791A80"/>
<rect x="6" y="14" width="1" height="1" fill="#791A80"/>
<rect x="7" y="14" width="1" height="1" fill="#8F2097"/>
<rect x="8" y="14" width="1" height="1" fill="#8F2097"/>
<rect x="9" y="14" width="1" height="1" fill="#791A80"/>
<rect x="10" y="14" width="1" height="1" fill="#8F2097"/>
<rect x="11" y="14" width="1" height="1" fill="#791A80"/>
<rect x="12" y="14" width="1" height="1" fill="#8F2097"/>
<rect x="13" y="14" width="1" height="1" fill="#791A80"/>
<rect x="14" y="14" width="1" height="1" fill="#791A80"/>
<rect x="15" y="14" width="1" height="1" fill="black"/>
<rect x="16" y="14" width="1" height="1" fill="#5A5A5A"/>
<rect x="17" y="14" width="1" height="1" fill="#848484"/>
<rect x="18" y="14" width="1" height="1" fill="#ADAD96"/>
<rect x="19" y="12" width="1" height="1" fill="#848484"/>
<rect x="19" y="13" width="1" height="1" fill="#848484"/>
<rect x="19" y="14" width="1" height="1" fill="#791A80"/>
<rect x="4" y="15" width="1" height="1" fill="#C6C6C6"/>
<rect x="5" y="15" width="1" height="1" fill="#ADAD96"/>
<rect x="6" y="15" width="1" height="1" fill="#9C9C9C"/>
<rect x="7" y="15" width="1" height="1" fill="#791A80"/>
<rect x="8" y="15" width="1" height="1" fill="#791A80"/>
<rect x="9" y="15" width="1" height="1" fill="#8F2097"/>
<rect x="10" y="15" width="1" height="1" fill="#791A80"/>
<rect x="11" y="15" width="1" height="1" fill="#8F2097"/>
<rect x="12" y="15" width="1" height="1" fill="#791A80"/>
<rect x="13" y="15" width="1" height="1" fill="#791A80"/>
<rect x="8" y="8" width="1" height="1" fill="#BD2EC7"/>
<rect x="9" y="8" width="1" height="1" fill="#BD2EC7"/>
<rect x="10" y="8" width="1" height="1" fill="#903962"/>
<rect x="11" y="8" width="1" height="1" fill="#791A80"/>
<rect x="12" y="8" width="1" height="1" fill="#791A80"/>
<rect x="13" y="8" width="1" height="1" fill="#791A80"/>
<rect x="8" y="9" width="1" height="1" fill="#BD2EC7"/>
<rect x="9" y="9" width="1" height="1" fill="#791A80"/>
<rect x="10" y="9" width="1" height="1" fill="#94653A"/>
<rect x="11" y="9" width="1" height="1" fill="#F8CF46"/>
<rect x="12" y="9" width="1" height="1" fill="#FFFE54"/>
<rect x="13" y="9" width="1" height="1" fill="#FFFE54"/>
<rect x="8" y="10" width="1" height="1" fill="#BD2EC7"/>
<rect x="9" y="10" width="1" height="1" fill="#F8CF46"/>
<rect x="10" y="10" width="1" height="1" fill="#FFFE54"/>
<rect x="11" y="10" width="1" height="1" fill="#C79D47"/>
<rect x="12" y="10" width="1" height="1" fill="#94653A"/>
<rect x="13" y="10" width="1" height="1" fill="#94653A"/>
<rect x="8" y="11" width="1" height="1" fill="#BD2EC7"/>
<rect x="9" y="11" width="1" height="1" fill="#BD2EC7"/>
<rect x="10" y="11" width="1" height="1" fill="#5A1160"/>
<rect x="11" y="11" width="1" height="1" fill="#5A1160"/>
<rect x="12" y="11" width="1" height="1" fill="#5A1160"/>
<rect x="13" y="11" width="1" height="1" fill="#5A1160"/>
<rect x="14" y="8" width="1" height="1" fill="#903962"/>
<rect x="15" y="8" width="1" height="1" fill="#FFFE54"/>
<rect x="16" y="8" width="1" height="1" fill="#94653A"/>
<rect x="17" y="8" width="1" height="1" fill="#5A1160"/>
<rect x="18" y="8" width="1" height="1" fill="#791A80"/>
<rect x="19" y="8" width="1" height="1" fill="#791A80"/>
<rect x="14" y="9" width="1" height="1" fill="#FFFE54"/>
<rect x="15" y="9" width="1" height="1" fill="#94653A"/>
<rect x="16" y="9" width="1" height="1" fill="#5A1160"/>
<rect x="17" y="9" width="1" height="1" fill="#791A80"/>
<rect x="18" y="9" width="1" height="1" fill="#791A80"/>
<rect x="19" y="9" width="1" height="1" fill="#5A1160"/>
<rect x="14" y="10" width="1" height="1" fill="#5A1160"/>
<rect x="15" y="10" width="1" height="1" fill="#5A1160"/>
<rect x="16" y="10" width="1" height="1" fill="#791A80"/>
<rect x="17" y="10" width="1" height="1" fill="#791A80"/>
<rect x="18" y="10" width="1" height="1" fill="#791A80"/>
<rect x="19" y="10" width="1" height="1" fill="black"/>
<rect x="14" y="11" width="1" height="1" fill="#791A80"/>
<rect x="15" y="11" width="1" height="1" fill="#8F2097"/>
<rect x="16" y="11" width="1" height="1" fill="#791A80"/>
<rect x="17" y="11" width="1" height="1" fill="#791A80"/>
<rect x="18" y="11" width="1" height="1" fill="black"/>
<rect x="19" y="11" width="1" height="1" fill="#5A5A5A"/>
<rect x="20" y="12" width="1" height="1" fill="#5A5A5A"/>
<rect x="20" y="13" width="1" height="1" fill="#791A80"/>
<rect x="20" y="8" width="1" height="1" fill="#5A1160"/>
<rect x="20" y="9" width="1" height="1" fill="black"/>
<rect x="20" y="10" width="1" height="1" fill="#5A5A5A"/>
<rect x="20" y="11" width="1" height="1" fill="#5A5A5A"/>
<rect x="14" y="15" width="1" height="1" fill="black"/>
<rect x="15" y="15" width="1" height="1" fill="#5A5A5A"/>
<rect x="16" y="15" width="1" height="1" fill="#848484"/>
<rect x="17" y="15" width="1" height="1" fill="#ADAD96"/>
<rect x="2" y="16" width="1" height="1" fill="#9C9C9C"/>
<rect x="3" y="16" width="1" height="1" fill="#E7E7D8"/>
<rect x="4" y="16" width="1" height="1" fill="#E7E7D8"/>
<rect x="5" y="16" width="1" height="1" fill="#E7E7D8"/>
<rect x="6" y="16" width="1" height="1" fill="#E7E7D8"/>
<rect x="7" y="16" width="1" height="1" fill="#C6C6C6"/>
<rect x="8" y="16" width="1" height="1" fill="#9C9C9C"/>
<rect x="9" y="16" width="1" height="1" fill="#5A1160"/>
<rect x="10" y="16" width="1" height="1" fill="#5A1160"/>
<rect x="11" y="16" width="1" height="1" fill="#791A80"/>
<rect x="12" y="16" width="1" height="1" fill="#791A80"/>
<rect x="13" y="16" width="1" height="1" fill="black"/>
<rect x="14" y="16" width="1" height="1" fill="#5A5A5A"/>
<rect x="15" y="16" width="1" height="1" fill="#848484"/>
<rect x="16" y="16" width="1" height="1" fill="#ADAD96"/>
<rect x="4" y="17" width="1" height="1" fill="#C6C6C6"/>
<rect x="5" y="17" width="1" height="1" fill="#E7E7D8"/>
<rect x="6" y="17" width="1" height="1" fill="#E7E7D8"/>
<rect x="7" y="17" width="1" height="1" fill="#E7E7D8"/>
<rect x="8" y="17" width="1" height="1" fill="#E7E7D8"/>
<rect x="9" y="17" width="1" height="1" fill="#C6C6C6"/>
<rect x="10" y="17" width="1" height="1" fill="#9C9C9C"/>
<rect x="11" y="17" width="1" height="1" fill="#5A1160"/>
<rect x="12" y="17" width="1" height="1" fill="black"/>
<rect x="13" y="17" width="1" height="1" fill="#737373"/>
<rect x="14" y="17" width="1" height="1" fill="#848484"/>
<rect x="15" y="17" width="1" height="1" fill="#ADAD96"/>
<rect x="6" y="18" width="1" height="1" fill="#C6C6C6"/>
<rect x="7" y="18" width="1" height="1" fill="#E7E7D8"/>
<rect x="8" y="18" width="1" height="1" fill="#E7E7D8"/>
<rect x="9" y="18" width="1" height="1" fill="#E7E7D8"/>
<rect x="10" y="18" width="1" height="1" fill="#E7E7D8"/>
<rect x="11" y="18" width="1" height="1" fill="#C4C4C4"/>
<rect x="12" y="18" width="1" height="1" fill="#737373"/>
<rect x="13" y="18" width="1" height="1" fill="#ADAD96"/>
<rect x="14" y="18" width="1" height="1" fill="#ADAD96"/>
<rect x="8" y="19" width="1" height="1" fill="#C6C6C6"/>
<rect x="9" y="19" width="1" height="1" fill="#E7E7D8"/>
<rect x="10" y="19" width="1" height="1" fill="#E7E7D8"/>
<rect x="11" y="19" width="1" height="1" fill="#E7E7D8"/>
<rect x="12" y="19" width="1" height="1" fill="#C6C6C6"/>
<rect x="13" y="19" width="1" height="1" fill="#C6C6C6"/>
<rect x="10" y="20" width="1" height="1" fill="#C6C6C6"/>
<rect x="11" y="20" width="1" height="1" fill="#E7E7D8"/>
<rect x="12" y="20" width="1" height="1" fill="#C6C6C6"/>
<rect x="13" y="20" width="1" height="1" fill="#791A80"/>
<rect x="14" y="19" width="1" height="1" fill="#791A80"/>
<rect x="15" y="18" width="1" height="1" fill="#791A80"/>
<rect x="16" y="17" width="1" height="1" fill="#791A80"/>
<rect x="17" y="16" width="1" height="1" fill="#791A80"/>
<rect x="18" y="15" width="1" height="1" fill="#791A80"/>
<rect y="16" width="1" height="1" fill="#791A80"/>
<rect x="1" y="16" width="1" height="1" fill="#5A0E30"/>
<rect x="1" y="17" width="1" height="1" fill="#791A80"/>
<rect x="2" y="17" width="1" height="1" fill="#791A80"/>
<rect x="3" y="17" width="1" height="1" fill="#C42C90"/>
<rect x="3" y="18" width="1" height="1" fill="#791A80"/>
<rect x="4" y="18" width="1" height="1" fill="#791A80"/>
<rect x="5" y="18" width="1" height="1" fill="#C42C90"/>
<rect x="5" y="19" width="1" height="1" fill="#791A80"/>
<rect x="6" y="19" width="1" height="1" fill="#791A80"/>
<rect x="7" y="19" width="1" height="1" fill="#C42C90"/>
<rect x="7" y="20" width="1" height="1" fill="#791A80"/>
<rect x="8" y="20" width="1" height="1" fill="#791A80"/>
<rect x="9" y="20" width="1" height="1" fill="#C42C90"/>
<rect x="9" y="21" width="1" height="1" fill="#5A1160"/>
<rect x="10" y="21" width="1" height="1" fill="#791A80"/>
<rect x="11" y="21" width="1" height="1" fill="#C42C90"/>
<rect x="11" y="22" width="1" height="1" fill="#5A1160"/>
<rect x="12" y="22" width="1" height="1" fill="black"/>
<rect x="13" y="21" width="1" height="1" fill="black"/>
<rect x="12" y="21" width="1" height="1" fill="#791A80"/>
<rect x="14" y="20" width="1" height="1" fill="black"/>
<rect x="15" y="19" width="1" height="1" fill="black"/>
<rect x="16" y="18" width="1" height="1" fill="black"/>
<rect x="17" y="17" width="1" height="1" fill="black"/>
<rect x="18" y="16" width="1" height="1" fill="black"/>
<rect x="19" y="15" width="1" height="1" fill="black"/>
<rect x="20" y="14" width="1" height="1" fill="black"/>
<rect x="1" y="11" width="1" height="1" fill="#791A80"/>
<rect x="2" y="10" width="1" height="1" fill="#791A80"/>
<rect x="3" y="9" width="1" height="1" fill="#791A80"/>
<rect x="4" y="8" width="1" height="1" fill="#791A80"/>
<rect x="5" y="7" width="1" height="1" fill="#791A80"/>
<rect x="6" y="6" width="1" height="1" fill="#791A80"/>
<rect x="7" y="5" width="1" height="1" fill="#791A80"/>
<rect x="8" y="4" width="1" height="1" fill="#791A80"/>
<rect x="9" y="3" width="1" height="1" fill="#791A80"/>
<rect x="10" y="2" width="1" height="1" fill="#791A80"/>
<rect x="21" y="13" width="1" height="1" fill="black"/>
<rect x="22" y="12" width="1" height="1" fill="black"/>
<rect x="22" y="11" width="1" height="1" fill="black"/>
<rect x="21" y="12" width="1" height="1" fill="#791A80"/>
<rect x="21" y="11" width="1" height="1" fill="#791A80"/>
<rect x="21" y="10" width="1" height="1" fill="#791A80"/>
<rect x="21" y="9" width="1" height="1" fill="#791A80"/>
<rect x="21" y="8" width="1" height="1" fill="black"/>
<rect x="8" y="7" width="1" height="1" fill="#BD2EC7"/>
<rect x="7" y="8" width="1" height="1" fill="#BD2EC7"/>
<rect x="7" y="9" width="1" height="1" fill="#BD2EC7"/>
<rect x="7" y="10" width="1" height="1" fill="#BD2EC7"/>
<rect x="7" y="11" width="1" height="1" fill="#BD2EC7"/>
<rect x="7" y="7" width="1" height="1" fill="#BD2EC7"/>
<rect x="6" y="8" width="1" height="1" fill="#BD2EC7"/>
<rect x="6" y="9" width="1" height="1" fill="#BD2EC7"/>
<rect x="6" y="10" width="1" height="1" fill="#BD2EC7"/>
<rect x="6" y="11" width="1" height="1" fill="#8F2097"/>
<rect x="5" y="8" width="1" height="1" fill="#F1A2F9"/>
<rect x="5" y="9" width="1" height="1" fill="#BD2EC7"/>
<rect x="5" y="10" width="1" height="1" fill="#BD2EC7"/>
<rect x="5" y="11" width="1" height="1" fill="#BD2EC7"/>
<rect x="4" y="9" width="1" height="1" fill="#F1A2F9"/>
<rect x="4" y="10" width="1" height="1" fill="#BD2EC7"/>
<rect x="3" y="10" width="1" height="1" fill="#F1A2F9"/>
<rect x="3" y="11" width="1" height="1" fill="#BD2EC7"/>
<rect x="2" y="11" width="1" height="1" fill="#F1A2F9"/>
<rect x="4" y="11" width="1" height="1" fill="#BD2EC7"/>
<rect x="6" y="7" width="1" height="1" fill="#F1A2F9"/>
<rect x="9" y="7" width="1" height="1" fill="#BD2EC7"/>
<rect x="10" y="7" width="1" height="1" fill="#C79D47"/>
<rect x="11" y="7" width="1" height="1" fill="#5A1160"/>
<rect x="12" y="7" width="1" height="1" fill="#5A1160"/>
<rect x="13" y="7" width="1" height="1" fill="#5A1160"/>
<rect x="14" y="7" width="1" height="1" fill="#F8CF46"/>
<rect x="15" y="7" width="1" height="1" fill="#FFFE54"/>
<rect x="16" y="7" width="1" height="1" fill="#94653A"/>
<rect x="17" y="7" width="1" height="1" fill="#5A1160"/>
<rect x="18" y="7" width="1" height="1" fill="#791A80"/>
<rect x="19" y="7" width="1" height="1" fill="#791A80"/>
<rect x="20" y="7" width="1" height="1" fill="#791A80"/>
<rect x="8" y="6" width="1" height="1" fill="#BD2EC7"/>
<rect x="7" y="6" width="1" height="1" fill="#F1A2F9"/>
<rect x="9" y="6" width="1" height="1" fill="#C79D47"/>
<rect x="10" y="6" width="1" height="1" fill="#F8CF46"/>
<rect x="11" y="6" width="1" height="1" fill="#FFFE54"/>
<rect x="12" y="6" width="1" height="1" fill="#FFFE54"/>
<rect x="13" y="6" width="1" height="1" fill="#FFFE54"/>
<rect x="14" y="6" width="1" height="1" fill="#F8CF46"/>
<rect x="15" y="6" width="1" height="1" fill="#946564"/>
<rect x="16" y="6" width="1" height="1" fill="#5A1160"/>
<rect x="17" y="6" width="1" height="1" fill="#791A80"/>
<rect x="18" y="6" width="1" height="1" fill="#791A80"/>
<rect x="8" y="5" width="1" height="1" fill="#F1A2F9"/>
<rect x="9" y="5" width="1" height="1" fill="#BD2EC7"/>
<rect x="10" y="5" width="1" height="1" fill="#903962"/>
<rect x="11" y="5" width="1" height="1" fill="#C16966"/>
<rect x="12" y="5" width="1" height="1" fill="#C79D47"/>
<rect x="13" y="5" width="1" height="1" fill="#946564"/>
<rect x="14" y="5" width="1" height="1" fill="#903962"/>
<rect x="15" y="5" width="1" height="1" fill="#8F2097"/>
<rect x="16" y="5" width="1" height="1" fill="#8F2097"/>
<rect x="9" y="4" width="1" height="1" fill="#F1A2F9"/>
<rect x="10" y="4" width="1" height="1" fill="#BD2EC7"/>
<rect x="11" y="4" width="1" height="1" fill="#BD2EC7"/>
<rect x="12" y="4" width="1" height="1" fill="#8F2097"/>
<rect x="13" y="4" width="1" height="1" fill="#BD2EC7"/>
<rect x="14" y="4" width="1" height="1" fill="#8F2097"/>
<rect x="10" y="3" width="1" height="1" fill="#F1A2F9"/>
<rect x="11" y="3" width="1" height="1" fill="#BD2EC7"/>
<rect x="12" y="3" width="1" height="1" fill="#BD2EC7"/>
<rect x="11" y="2" width="1" height="1" fill="#F1A2F9"/>
<rect x="12" y="2" width="1" height="1" fill="#BD2EC7"/>
<rect x="13" y="3" width="1" height="1" fill="#8F2097"/>
<rect x="14" y="3" width="1" height="1" fill="#8F2097"/>
<rect x="15" y="4" width="1" height="1" fill="#8F2097"/>
<rect x="16" y="4" width="1" height="1" fill="#791A80"/>
<rect x="17" y="5" width="1" height="1" fill="#791A80"/>
<rect x="18" y="5" width="1" height="1" fill="#5A1160"/>
<rect x="19" y="6" width="1" height="1" fill="#791A80"/>
<rect x="20" y="6" width="1" height="1" fill="#5A1160"/>
<rect x="21" y="7" width="1" height="1" fill="#5A1160"/>
<rect x="22" y="7" width="1" height="1" fill="black"/>
<rect x="22" y="6" width="1" height="1" fill="black"/>
<rect x="21" y="6" width="1" height="1" fill="#5A1160"/>
<rect x="11" y="1" width="1" height="1" fill="#791A80"/>
<rect x="12" y="1" width="1" height="1" fill="#2C042F"/>
<rect x="13" y="2" width="1" height="1" fill="#5A1160"/>
<rect x="14" y="2" width="1" height="1" fill="#2C042F"/>
<rect x="15" y="3" width="1" height="1" fill="#5A1160"/>
<rect x="16" y="3" width="1" height="1" fill="#2C042F"/>
<rect x="17" y="4" width="1" height="1" fill="#5A1160"/>
<rect x="18" y="4" width="1" height="1" fill="black"/>
<rect x="19" y="5" width="1" height="1" fill="#5A1160"/>
<rect x="20" y="5" width="1" height="1" fill="black"/>
</svg>

    `;
  }
}
window.customElements.define("a2k-help-logo", c1);
class F1 extends F {
  constructor() {
    super(...arguments);
    (this.width = 31), (this.height = 27);
  }
  render() {
    return x`
  <svg styles="width:auto" viewBox="0 0 ${this.width} ${this.height}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 1H4V2H3V1Z" fill="#479DFF"/>
<path d="M3 1H4V2H3V1Z" fill="black" fill-opacity="0.2"/>
<path d="M25 1H26V2H25V1Z" fill="#479DFF"/>
<path d="M25 1H26V2H25V1Z" fill="black" fill-opacity="0.2"/>
<path d="M22 0H23V1H22V0Z" fill="#479DFF"/>
<path d="M22 0H23V1H22V0Z" fill="black" fill-opacity="0.2"/>
<path d="M23 0H24V1H23V0Z" fill="#479DFF"/>
<path d="M23 0H24V1H23V0Z" fill="black" fill-opacity="0.2"/>
<path d="M24 0H25V1H24V0Z" fill="#479DFF"/>
<path d="M24 0H25V1H24V0Z" fill="black" fill-opacity="0.2"/>
<path d="M20 0H21V1H20V0Z" fill="#479DFF"/>
<path d="M20 0H21V1H20V0Z" fill="black" fill-opacity="0.2"/>
<path d="M26 2H27V3H26V2Z" fill="#479DFF"/>
<path d="M26 2H27V3H26V2Z" fill="black" fill-opacity="0.2"/>
<path d="M28 2H29V3H28V2Z" fill="#479DFF"/>
<path d="M28 2H29V3H28V2Z" fill="black" fill-opacity="0.2"/>
<path d="M29 2H30V3H29V2Z" fill="#479DFF"/>
<path d="M29 2H30V3H29V2Z" fill="black" fill-opacity="0.2"/>
<path d="M27 3H28V4H27V3Z" fill="#479DFF"/>
<path d="M27 3H28V4H27V3Z" fill="black" fill-opacity="0.2"/>
<path d="M26 3H27V4H26V3Z" fill="#479DFF"/>
<path d="M26 3H27V4H26V3Z" fill="black" fill-opacity="0.2"/>
<path d="M27 4H28V5H27V4Z" fill="#479DFF"/>
<path d="M27 4H28V5H27V4Z" fill="black" fill-opacity="0.2"/>
<path d="M27 7H28V8H27V7Z" fill="#479DFF"/>
<path d="M27 7H28V8H27V7Z" fill="black" fill-opacity="0.2"/>
<path d="M28 7H29V8H28V7Z" fill="#479DFF"/>
<path d="M28 7H29V8H28V7Z" fill="black" fill-opacity="0.2"/>
<path d="M27 8H28V9H27V8Z" fill="#479DFF"/>
<path d="M27 8H28V9H27V8Z" fill="black" fill-opacity="0.2"/>
<path d="M28 3H29V4H28V3Z" fill="#479DFF"/>
<path d="M28 3H29V4H28V3Z" fill="black" fill-opacity="0.2"/>
<path d="M26 11H27V12H26V11Z" fill="#479DFF"/>
<path d="M26 11H27V12H26V11Z" fill="black" fill-opacity="0.2"/>
<path d="M26 12H27V13H26V12Z" fill="#479DFF"/>
<path d="M26 12H27V13H26V12Z" fill="black" fill-opacity="0.2"/>
<path d="M26 13H27V14H26V13Z" fill="#479DFF"/>
<path d="M26 13H27V14H26V13Z" fill="black" fill-opacity="0.2"/>
<path d="M26 14H27V15H26V14Z" fill="#479DFF"/>
<path d="M26 14H27V15H26V14Z" fill="black" fill-opacity="0.2"/>
<path d="M25 14H26V15H25V14Z" fill="#479DFF"/>
<path d="M25 14H26V15H25V14Z" fill="black" fill-opacity="0.2"/>
<path d="M25 15H26V16H25V15Z" fill="#479DFF"/>
<path d="M25 15H26V16H25V15Z" fill="black" fill-opacity="0.2"/>
<path d="M25 16H26V17H25V16Z" fill="#479DFF"/>
<path d="M25 16H26V17H25V16Z" fill="black" fill-opacity="0.2"/>
<path d="M25 17H26V18H25V17Z" fill="#479DFF"/>
<path d="M25 17H26V18H25V17Z" fill="black" fill-opacity="0.2"/>
<path d="M24 16H25V17H24V16Z" fill="#479DFF"/>
<path d="M24 16H25V17H24V16Z" fill="black" fill-opacity="0.2"/>
<path d="M9 25V26H8V25H9Z" fill="#479DFF"/>
<path d="M9 25V26H8V25H9Z" fill="black" fill-opacity="0.2"/>
<path d="M8 25V26H7V25H8Z" fill="#479DFF"/>
<path d="M8 25V26H7V25H8Z" fill="black" fill-opacity="0.2"/>
<path d="M7 25V26H6V25H7Z" fill="#479DFF"/>
<path d="M7 25V26H6V25H7Z" fill="black" fill-opacity="0.2"/>
<path d="M6 24V25H5V24H6Z" fill="#479DFF"/>
<path d="M6 24V25H5V24H6Z" fill="black" fill-opacity="0.2"/>
<path d="M5 24V25H4V24H5Z" fill="#479DFF"/>
<path d="M5 24V25H4V24H5Z" fill="black" fill-opacity="0.2"/>
<path d="M5 23V24H4V23H5Z" fill="#479DFF"/>
<path d="M5 23V24H4V23H5Z" fill="black" fill-opacity="0.2"/>
<path d="M6 22V23H5V22H6Z" fill="#479DFF"/>
<path d="M6 22V23H5V22H6Z" fill="black" fill-opacity="0.2"/>
<path d="M7 22V23H6V22H7Z" fill="#479DFF"/>
<path d="M7 22V23H6V22H7Z" fill="black" fill-opacity="0.2"/>
<path d="M4 23V24H3V23H4Z" fill="#479DFF"/>
<path d="M4 23V24H3V23H4Z" fill="black" fill-opacity="0.2"/>
<path d="M3 24V25H2V24H3Z" fill="#479DFF"/>
<path d="M3 24V25H2V24H3Z" fill="black" fill-opacity="0.2"/>
<path d="M2 24V25H1V24H2Z" fill="#479DFF"/>
<path d="M2 24V25H1V24H2Z" fill="black" fill-opacity="0.2"/>
<path d="M1 24V25H0L4.37114e-08 24H1Z" fill="#479DFF"/>
<path d="M1 24V25H0L4.37114e-08 24H1Z" fill="black" fill-opacity="0.2"/>
<path d="M2 25V26H1V25H2Z" fill="#479DFF"/>
<path d="M2 25V26H1V25H2Z" fill="black" fill-opacity="0.2"/>
<path d="M3 25V26H2V25H3Z" fill="#479DFF"/>
<path d="M3 25V26H2V25H3Z" fill="black" fill-opacity="0.2"/>
<path d="M4 25V26H3V25H4Z" fill="#479DFF"/>
<path d="M4 25V26H3V25H4Z" fill="black" fill-opacity="0.2"/>
<path d="M4 24V25H3V24H4Z" fill="#479DFF"/>
<path d="M4 24V25H3V24H4Z" fill="black" fill-opacity="0.2"/>
<path d="M5 25V26H4V25H5Z" fill="#479DFF"/>
<path d="M5 25V26H4V25H5Z" fill="black" fill-opacity="0.2"/>
<path d="M6 25V26H5V25H6Z" fill="#479DFF"/>
<path d="M6 25V26H5V25H6Z" fill="black" fill-opacity="0.2"/>
<path d="M28 6H29V7H28V6Z" fill="#479DFF"/>
<path d="M28 6H29V7H28V6Z" fill="black" fill-opacity="0.2"/>
<path d="M29 6H30V7H29V6Z" fill="#479DFF"/>
<path d="M29 6H30V7H29V6Z" fill="black" fill-opacity="0.2"/>
<path d="M29 5H30V6H29V5Z" fill="#479DFF"/>
<path d="M29 5H30V6H29V5Z" fill="black" fill-opacity="0.2"/>
<path d="M30 5H31V6H30V5Z" fill="#479DFF"/>
<path d="M30 5H31V6H30V5Z" fill="black" fill-opacity="0.2"/>
<path d="M25 2H26V3H25V2Z" fill="#479DFF"/>
<path d="M25 2H26V3H25V2Z" fill="black" fill-opacity="0.2"/>
<path d="M19 0H20V1H19V0Z" fill="#479DFF"/>
<path d="M19 0H20V1H19V0Z" fill="black" fill-opacity="0.2"/>
<path d="M18 1H19V2H18V1Z" fill="#479DFF"/>
<path d="M18 1H19V2H18V1Z" fill="black" fill-opacity="0.2"/>
<path d="M17 2H18V3H17V2Z" fill="#479DFF"/>
<path d="M17 2H18V3H17V2Z" fill="black" fill-opacity="0.2"/>
<path d="M16 3H17V4H16V3Z" fill="#479DFF"/>
<path d="M16 3H17V4H16V3Z" fill="black" fill-opacity="0.2"/>
<path d="M16 4H17V5H16V4Z" fill="#479DFF"/>
<path d="M16 4H17V5H16V4Z" fill="black" fill-opacity="0.2"/>
<path d="M15 5H16V6H15V5Z" fill="#479DFF"/>
<path d="M15 5H16V6H15V5Z" fill="black" fill-opacity="0.2"/>
<path d="M15 6H16V7H15V6Z" fill="#479DFF"/>
<path d="M15 6H16V7H15V6Z" fill="black" fill-opacity="0.2"/>
<path d="M15 7H16V8H15V7Z" fill="#479DFF"/>
<path d="M15 7H16V8H15V7Z" fill="black" fill-opacity="0.2"/>
<path d="M27 9H28V10H27V9Z" fill="#479DFF"/>
<path d="M27 9H28V10H27V9Z" fill="black" fill-opacity="0.2"/>
<path d="M27 10H28V11H27V10Z" fill="#479DFF"/>
<path d="M27 10H28V11H27V10Z" fill="black" fill-opacity="0.2"/>
<path d="M27 11H28V12H27V11Z" fill="#479DFF"/>
<path d="M27 11H28V12H27V11Z" fill="black" fill-opacity="0.2"/>
<path d="M7 21H8V22H7V21Z" fill="#479DFF"/>
<path d="M7 21H8V22H7V21Z" fill="black" fill-opacity="0.2"/>
<path d="M6 16H7V17H6V16Z" fill="#479DFF"/>
<path d="M6 16H7V17H6V16Z" fill="black" fill-opacity="0.2"/>
<path d="M7 16H8V17H7V16Z" fill="#479DFF"/>
<path d="M7 16H8V17H7V16Z" fill="black" fill-opacity="0.2"/>
<path d="M6 15H7V16H6V15Z" fill="#479DFF"/>
<path d="M6 15H7V16H6V15Z" fill="black" fill-opacity="0.2"/>
<path d="M7 15H8V16H7V15Z" fill="#479DFF"/>
<path d="M7 15H8V16H7V15Z" fill="black" fill-opacity="0.2"/>
<path d="M6 14H7V15H6V14Z" fill="#479DFF"/>
<path d="M6 14H7V15H6V14Z" fill="black" fill-opacity="0.2"/>
<path d="M6 13H7V14H6V13Z" fill="#479DFF"/>
<path d="M6 13H7V14H6V13Z" fill="black" fill-opacity="0.2"/>
<path d="M6 11H7V12H6V11Z" fill="#479DFF"/>
<path d="M6 11H7V12H6V11Z" fill="black" fill-opacity="0.2"/>
<path d="M6 10H7V11H6V10Z" fill="#479DFF"/>
<path d="M6 10H7V11H6V10Z" fill="black" fill-opacity="0.2"/>
<path d="M6 9H7V10H6V9Z" fill="#479DFF"/>
<path d="M6 9H7V10H6V9Z" fill="black" fill-opacity="0.2"/>
<path d="M6 8H7V9H6V8Z" fill="#479DFF"/>
<path d="M6 8H7V9H6V8Z" fill="black" fill-opacity="0.2"/>
<path d="M7 8H8V9H7V8Z" fill="#479DFF"/>
<path d="M7 8H8V9H7V8Z" fill="black" fill-opacity="0.2"/>
<path d="M6 7H7V8H6V7Z" fill="#479DFF"/>
<path d="M6 7H7V8H6V7Z" fill="black" fill-opacity="0.2"/>
<path d="M7 7H8V8H7V7Z" fill="#479DFF"/>
<path d="M7 7H8V8H7V7Z" fill="black" fill-opacity="0.2"/>
<path d="M6 6H7V7H6V6Z" fill="#479DFF"/>
<path d="M6 6H7V7H6V6Z" fill="black" fill-opacity="0.2"/>
<path d="M6 5H7V6H6V5Z" fill="#479DFF"/>
<path d="M6 5H7V6H6V5Z" fill="black" fill-opacity="0.2"/>
<path d="M7 6H8V7H7V6Z" fill="#479DFF"/>
<path d="M7 6H8V7H7V6Z" fill="black" fill-opacity="0.2"/>
<path d="M8 7H9V8H8V7Z" fill="#479DFF"/>
<path d="M8 7H9V8H8V7Z" fill="black" fill-opacity="0.2"/>
<path d="M10 7H11V8H10V7Z" fill="#479DFF"/>
<path d="M10 7H11V8H10V7Z" fill="black" fill-opacity="0.2"/>
<path d="M8 6H9V7H8V6Z" fill="#479DFF"/>
<path d="M8 6H9V7H8V6Z" fill="black" fill-opacity="0.2"/>
<path d="M9 6H10V7H9V6Z" fill="#479DFF"/>
<path d="M9 6H10V7H9V6Z" fill="black" fill-opacity="0.2"/>
<path d="M7 5H8V6H7V5Z" fill="#479DFF"/>
<path d="M7 5H8V6H7V5Z" fill="black" fill-opacity="0.2"/>
<path d="M6 4H7V5H6V4Z" fill="#479DFF"/>
<path d="M6 4H7V5H6V4Z" fill="black" fill-opacity="0.2"/>
<path d="M5 3H6V4H5V3Z" fill="#479DFF"/>
<path d="M5 3H6V4H5V3Z" fill="black" fill-opacity="0.2"/>
<path d="M4 2H5V3H4V2Z" fill="#479DFF"/>
<path d="M4 2H5V3H4V2Z" fill="black" fill-opacity="0.2"/>
<path d="M11 8H12V9H11V8Z" fill="#479DFF"/>
<path d="M11 8H12V9H11V8Z" fill="black" fill-opacity="0.2"/>
<path d="M11 7H12V8H11V7Z" fill="#479DFF"/>
<path d="M11 7H12V8H11V7Z" fill="black" fill-opacity="0.2"/>
<path d="M12 7H13V8H12V7Z" fill="#479DFF"/>
<path d="M12 7H13V8H12V7Z" fill="black" fill-opacity="0.2"/>
<path d="M6 18H7V19H6V18Z" fill="#479DFF"/>
<path d="M6 18H7V19H6V18Z" fill="black" fill-opacity="0.2"/>
<path d="M5 18H6V19H5V18Z" fill="#479DFF"/>
<path d="M5 18H6V19H5V18Z" fill="black" fill-opacity="0.2"/>
<path d="M7 18H8V19H7V18Z" fill="#479DFF"/>
<path d="M7 18H8V19H7V18Z" fill="black" fill-opacity="0.2"/>
<path d="M6 19H7V20H6V19Z" fill="#479DFF"/>
<path d="M6 19H7V20H6V19Z" fill="black" fill-opacity="0.2"/>
<path d="M5 14H6V15H5V14Z" fill="#479DFF"/>
<path d="M5 14H6V15H5V14Z" fill="black" fill-opacity="0.2"/>
<path d="M5 12H6V13H5V12Z" fill="#479DFF"/>
<path d="M5 12H6V13H5V12Z" fill="black" fill-opacity="0.2"/>
<path d="M5 11H6V12H5V11Z" fill="#479DFF"/>
<path d="M5 11H6V12H5V11Z" fill="black" fill-opacity="0.2"/>
<path d="M5 7H6V8H5V7Z" fill="#479DFF"/>
<path d="M5 7H6V8H5V7Z" fill="black" fill-opacity="0.2"/>
<path d="M5 6H6V7H5V6Z" fill="#479DFF"/>
<path d="M5 6H6V7H5V6Z" fill="black" fill-opacity="0.2"/>
<path d="M5 5H6V6H5V5Z" fill="#479DFF"/>
<path d="M5 5H6V6H5V5Z" fill="black" fill-opacity="0.2"/>
<path d="M5 4H6V5H5V4Z" fill="#479DFF"/>
<path d="M5 4H6V5H5V4Z" fill="black" fill-opacity="0.2"/>
<path d="M5 16H6V17H5V16Z" fill="#479DFF"/>
<path d="M5 16H6V17H5V16Z" fill="black" fill-opacity="0.2"/>
<path d="M5 17H6V18H5V17Z" fill="#479DFF"/>
<path d="M5 17H6V18H5V17Z" fill="black" fill-opacity="0.2"/>
<path d="M4 14H5V15H4V14Z" fill="#479DFF"/>
<path d="M4 14H5V15H4V14Z" fill="black" fill-opacity="0.2"/>
<path d="M3 13H4V14H3V13Z" fill="#479DFF"/>
<path d="M3 13H4V14H3V13Z" fill="black" fill-opacity="0.2"/>
<path d="M4 11H5V12H4V11Z" fill="#479DFF"/>
<path d="M4 11H5V12H4V11Z" fill="black" fill-opacity="0.2"/>
<path d="M4 10H5V11H4V10Z" fill="#479DFF"/>
<path d="M4 10H5V11H4V10Z" fill="black" fill-opacity="0.2"/>
<path d="M3 10H4V11H3V10Z" fill="#479DFF"/>
<path d="M3 10H4V11H3V10Z" fill="black" fill-opacity="0.2"/>
<path d="M3 11H4V12H3V11Z" fill="#479DFF"/>
<path d="M3 11H4V12H3V11Z" fill="black" fill-opacity="0.2"/>
<path d="M3 12H4V13H3V12Z" fill="#479DFF"/>
<path d="M3 12H4V13H3V12Z" fill="black" fill-opacity="0.2"/>
<path d="M2 10H3V11H2V10Z" fill="#479DFF"/>
<path d="M2 10H3V11H2V10Z" fill="black" fill-opacity="0.2"/>
<path d="M2 11H3V12H2V11Z" fill="#479DFF"/>
<path d="M2 11H3V12H2V11Z" fill="black" fill-opacity="0.2"/>
<path d="M2 12H3V13H2V12Z" fill="#479DFF"/>
<path d="M2 12H3V13H2V12Z" fill="black" fill-opacity="0.2"/>
<path d="M2 13H3V14H2V13Z" fill="#479DFF"/>
<path d="M2 13H3V14H2V13Z" fill="black" fill-opacity="0.2"/>
<path d="M2 9H3V10H2V9Z" fill="#479DFF"/>
<path d="M2 9H3V10H2V9Z" fill="black" fill-opacity="0.2"/>
<path d="M1 9H2V10H1V9Z" fill="#479DFF"/>
<path d="M1 9H2V10H1V9Z" fill="black" fill-opacity="0.2"/>
<path d="M1 8H2V9H1V8Z" fill="#479DFF"/>
<path d="M1 8H2V9H1V8Z" fill="black" fill-opacity="0.2"/>
<path d="M4 6H5V7H4V6Z" fill="#479DFF"/>
<path d="M4 6H5V7H4V6Z" fill="black" fill-opacity="0.2"/>
<path d="M4 5H5V6H4V5Z" fill="#479DFF"/>
<path d="M4 5H5V6H4V5Z" fill="black" fill-opacity="0.2"/>
<path d="M4 4H5V5H4V4Z" fill="#479DFF"/>
<path d="M4 4H5V5H4V4Z" fill="black" fill-opacity="0.2"/>
<path d="M3 3H4V4H3V3Z" fill="#479DFF"/>
<path d="M3 3H4V4H3V3Z" fill="black" fill-opacity="0.2"/>
<path d="M3 2H4V3H3V2Z" fill="#479DFF"/>
<path d="M3 2H4V3H3V2Z" fill="black" fill-opacity="0.2"/>
<path d="M3 4H4V5H3V4Z" fill="#479DFF"/>
<path d="M3 4H4V5H3V4Z" fill="black" fill-opacity="0.2"/>
<path d="M4 3H5V4H4V3Z" fill="#479DFF"/>
<path d="M4 3H5V4H4V3Z" fill="black" fill-opacity="0.2"/>
<path d="M2 2H3V3H2V2Z" fill="#479DFF"/>
<path d="M2 2H3V3H2V2Z" fill="black" fill-opacity="0.2"/>
<path d="M2 4H3V5H2V4Z" fill="#479DFF"/>
<path d="M2 4H3V5H2V4Z" fill="black" fill-opacity="0.2"/>
<path d="M3 5H4V6H3V5Z" fill="#479DFF"/>
<path d="M3 5H4V6H3V5Z" fill="black" fill-opacity="0.2"/>
<path d="M2 3H3V4H2V3Z" fill="#479DFF"/>
<path d="M2 3H3V4H2V3Z" fill="black" fill-opacity="0.2"/>
<path d="M4 16H5V17H4V16Z" fill="#479DFF"/>
<path d="M4 16H5V17H4V16Z" fill="black" fill-opacity="0.2"/>
<path d="M3 16H4V17H3V16Z" fill="#479DFF"/>
<path d="M3 16H4V17H3V16Z" fill="black" fill-opacity="0.2"/>
<path d="M4 17H5V18H4V17Z" fill="#479DFF"/>
<path d="M4 17H5V18H4V17Z" fill="black" fill-opacity="0.2"/>
<path d="M7 19H8V20H7V19Z" fill="#479DFF"/>
<path d="M7 19H8V20H7V19Z" fill="black" fill-opacity="0.2"/>
<path d="M8 19H9V20H8V19Z" fill="#479DFF"/>
<path d="M8 19H9V20H8V19Z" fill="black" fill-opacity="0.2"/>
<path d="M9 19H10V20H9V19Z" fill="#479DFF"/>
<path d="M9 19H10V20H9V19Z" fill="black" fill-opacity="0.2"/>
<path d="M8 20H9V21H8V20Z" fill="#479DFF"/>
<path d="M8 20H9V21H8V20Z" fill="black" fill-opacity="0.2"/>
<path d="M8 21H9V22H8V21Z" fill="#479DFF"/>
<path d="M8 21H9V22H8V21Z" fill="black" fill-opacity="0.2"/>
<path d="M7 22H8V23H7V22Z" fill="#479DFF"/>
<path d="M7 22H8V23H7V22Z" fill="black" fill-opacity="0.2"/>
<path d="M8 22H9V23H8V22Z" fill="#479DFF"/>
<path d="M8 22H9V23H8V22Z" fill="black" fill-opacity="0.2"/>
<path d="M6 23V24H5V23H6Z" fill="#479DFF"/>
<path d="M6 23V24H5V23H6Z" fill="black" fill-opacity="0.2"/>
<path d="M7 23V24H6V23H7Z" fill="#479DFF"/>
<path d="M7 23V24H6V23H7Z" fill="black" fill-opacity="0.2"/>
<path d="M7 23H8V24H7V23Z" fill="#479DFF"/>
<path d="M7 23H8V24H7V23Z" fill="black" fill-opacity="0.2"/>
<path d="M14 26H15V27H14V26Z" fill="#479DFF"/>
<path d="M14 26H15V27H14V26Z" fill="black" fill-opacity="0.2"/>
<path d="M15 26H16V27H15V26Z" fill="#479DFF"/>
<path d="M15 26H16V27H15V26Z" fill="black" fill-opacity="0.2"/>
<path d="M12 26H13V27H12V26Z" fill="#479DFF"/>
<path d="M12 26H13V27H12V26Z" fill="black" fill-opacity="0.2"/>
<path d="M11 26H12V27H11V26Z" fill="#479DFF"/>
<path d="M11 26H12V27H11V26Z" fill="black" fill-opacity="0.2"/>
<path d="M11 26V27H10V26H11Z" fill="#479DFF"/>
<path d="M11 26V27H10V26H11Z" fill="black" fill-opacity="0.2"/>
<path d="M10 26V27H9V26H10Z" fill="#479DFF"/>
<path d="M10 26V27H9V26H10Z" fill="black" fill-opacity="0.2"/>
<path d="M9 26V27H8V26H9Z" fill="#479DFF"/>
<path d="M9 26V27H8V26H9Z" fill="black" fill-opacity="0.2"/>
<path d="M8 26V27H7V26H8Z" fill="#479DFF"/>
<path d="M8 26V27H7V26H8Z" fill="black" fill-opacity="0.2"/>
<path d="M13 26H14V27H13V26Z" fill="#479DFF"/>
<path d="M13 26H14V27H13V26Z" fill="black" fill-opacity="0.2"/>
<path d="M13 8H14V9H13V8Z" fill="#479DFF"/>
<path d="M13 8H14V9H13V8Z" fill="black" fill-opacity="0.2"/>
<path d="M14 8H15V9H14V8Z" fill="#479DFF"/>
<path d="M14 8H15V9H14V8Z" fill="black" fill-opacity="0.2"/>
<path d="M9 25H10V26H9V25Z" fill="#479DFF"/>
<path d="M9 25H10V26H9V25Z" fill="black" fill-opacity="0.2"/>
<path d="M10 25H11V26H10V25Z" fill="#479DFF"/>
<path d="M10 25H11V26H10V25Z" fill="black" fill-opacity="0.2"/>
<path d="M11 25H12V26H11V25Z" fill="#479DFF"/>
<path d="M11 25H12V26H11V25Z" fill="black" fill-opacity="0.2"/>
<path d="M12 25H13V26H12V25Z" fill="#479DFF"/>
<path d="M12 25H13V26H12V25Z" fill="black" fill-opacity="0.2"/>
<path d="M13 25H14V26H13V25Z" fill="#479DFF"/>
<path d="M13 25H14V26H13V25Z" fill="black" fill-opacity="0.2"/>
<path d="M21 0H22V1H21V0Z" fill="#479DFF"/>
<path d="M21 0H22V1H21V0Z" fill="black" fill-opacity="0.2"/>
<path d="M24 17H25V18H24V17Z" fill="#479DFF"/>
<path d="M24 17H25V18H24V17Z" fill="black" fill-opacity="0.2"/>
<path d="M24 18H25V19H24V18Z" fill="#479DFF"/>
<path d="M24 18H25V19H24V18Z" fill="black" fill-opacity="0.2"/>
<path d="M24 19H25V20H24V19Z" fill="#479DFF"/>
<path d="M24 19H25V20H24V19Z" fill="black" fill-opacity="0.2"/>
<path d="M23 18H24V19H23V18Z" fill="#479DFF"/>
<path d="M23 18H24V19H23V18Z" fill="black" fill-opacity="0.2"/>
<path d="M23 19H24V20H23V19Z" fill="#479DFF"/>
<path d="M23 19H24V20H23V19Z" fill="black" fill-opacity="0.2"/>
<path d="M23 20H24V21H23V20Z" fill="#479DFF"/>
<path d="M23 20H24V21H23V20Z" fill="black" fill-opacity="0.2"/>
<path d="M23 21H24V22H23V21Z" fill="#479DFF"/>
<path d="M23 21H24V22H23V21Z" fill="black" fill-opacity="0.2"/>
<path d="M22 21H23V22H22V21Z" fill="#479DFF"/>
<path d="M22 21H23V22H22V21Z" fill="black" fill-opacity="0.2"/>
<path d="M22 22H23V23H22V22Z" fill="#479DFF"/>
<path d="M22 22H23V23H22V22Z" fill="black" fill-opacity="0.2"/>
<path d="M20 22H21V23H20V22Z" fill="#479DFF"/>
<path d="M20 22H21V23H20V22Z" fill="black" fill-opacity="0.2"/>
<path d="M22 19H23V20H22V19Z" fill="#479DFF"/>
<path d="M22 19H23V20H22V19Z" fill="black" fill-opacity="0.2"/>
<path d="M22 20H23V21H22V20Z" fill="#479DFF"/>
<path d="M22 20H23V21H22V20Z" fill="black" fill-opacity="0.2"/>
<path d="M20 23H21V24H20V23Z" fill="#479DFF"/>
<path d="M20 23H21V24H20V23Z" fill="black" fill-opacity="0.2"/>
<path d="M19 23H20V24H19V23Z" fill="#479DFF"/>
<path d="M19 23H20V24H19V23Z" fill="black" fill-opacity="0.2"/>
<path d="M19 24H20V25H19V24Z" fill="#479DFF"/>
<path d="M19 24H20V25H19V24Z" fill="black" fill-opacity="0.2"/>
<path d="M18 24H19V25H18V24Z" fill="#479DFF"/>
<path d="M18 24H19V25H18V24Z" fill="black" fill-opacity="0.2"/>
<path d="M16 24H17V25H16V24Z" fill="#479DFF"/>
<path d="M16 24H17V25H16V24Z" fill="black" fill-opacity="0.2"/>
<path d="M17 25H18V26H17V25Z" fill="#479DFF"/>
<path d="M17 25H18V26H17V25Z" fill="black" fill-opacity="0.2"/>
<path d="M16 25H17V26H16V25Z" fill="#479DFF"/>
<path d="M16 25H17V26H16V25Z" fill="black" fill-opacity="0.2"/>
<path d="M15 25H16V26H15V25Z" fill="#479DFF"/>
<path d="M15 25H16V26H15V25Z" fill="black" fill-opacity="0.2"/>
<path d="M14 25H15V26H14V25Z" fill="#479DFF"/>
<path d="M14 25H15V26H14V25Z" fill="black" fill-opacity="0.2"/>
<path d="M17 24H18V25H17V24Z" fill="#479DFF"/>
<path d="M17 24H18V25H17V24Z" fill="black" fill-opacity="0.2"/>
<path d="M18 23H19V24H18V23Z" fill="#479DFF"/>
<path d="M18 23H19V24H18V23Z" fill="black" fill-opacity="0.2"/>
<path d="M21 22H22V23H21V22Z" fill="#479DFF"/>
<path d="M21 22H22V23H21V22Z" fill="black" fill-opacity="0.2"/>
<path d="M21 23H22V24H21V23Z" fill="#479DFF"/>
<path d="M21 23H22V24H21V23Z" fill="black" fill-opacity="0.2"/>
<path d="M7 24V25H6V24H7Z" fill="#479DFF"/>
<path d="M7 24V25H6V24H7Z" fill="black" fill-opacity="0.2"/>
<path d="M9 22H10V23H9V22Z" fill="#479DFF"/>
<path d="M9 22H10V23H9V22Z" fill="black" fill-opacity="0.2"/>
<path d="M10 22H11V23H10V22Z" fill="#479DFF"/>
<path d="M10 22H11V23H10V22Z" fill="black" fill-opacity="0.2"/>
<path d="M11 22H12V23H11V22Z" fill="#479DFF"/>
<path d="M11 22H12V23H11V22Z" fill="black" fill-opacity="0.2"/>
<path d="M12 22H13V23H12V22Z" fill="#479DFF"/>
<path d="M12 22H13V23H12V22Z" fill="black" fill-opacity="0.2"/>
<path d="M15 22H16V23H15V22Z" fill="#479DFF"/>
<path d="M15 22H16V23H15V22Z" fill="black" fill-opacity="0.2"/>
<path d="M16 22H17V23H16V22Z" fill="#479DFF"/>
<path d="M16 22H17V23H16V22Z" fill="black" fill-opacity="0.2"/>
<path d="M17 22H18V23H17V22Z" fill="#479DFF"/>
<path d="M17 22H18V23H17V22Z" fill="black" fill-opacity="0.2"/>
<path d="M18 22H19V23H18V22Z" fill="#479DFF"/>
<path d="M18 22H19V23H18V22Z" fill="black" fill-opacity="0.2"/>
<path d="M9 23H10V24H9V23Z" fill="#479DFF"/>
<path d="M9 23H10V24H9V23Z" fill="black" fill-opacity="0.2"/>
<path d="M10 23H11V24H10V23Z" fill="#479DFF"/>
<path d="M10 23H11V24H10V23Z" fill="black" fill-opacity="0.2"/>
<path d="M8 23H9V24H8V23Z" fill="#479DFF"/>
<path d="M8 23H9V24H8V23Z" fill="black" fill-opacity="0.2"/>
<path d="M11 23H12V24H11V23Z" fill="#479DFF"/>
<path d="M11 23H12V24H11V23Z" fill="black" fill-opacity="0.2"/>
<path d="M12 23H13V24H12V23Z" fill="#479DFF"/>
<path d="M12 23H13V24H12V23Z" fill="black" fill-opacity="0.2"/>
<path d="M15 23H16V24H15V23Z" fill="#479DFF"/>
<path d="M15 23H16V24H15V23Z" fill="black" fill-opacity="0.2"/>
<path d="M16 23H17V24H16V23Z" fill="#479DFF"/>
<path d="M16 23H17V24H16V23Z" fill="black" fill-opacity="0.2"/>
<path d="M17 23H18V24H17V23Z" fill="#479DFF"/>
<path d="M17 23H18V24H17V23Z" fill="black" fill-opacity="0.2"/>
<path d="M9 24H10V25H9V24Z" fill="#479DFF"/>
<path d="M9 24H10V25H9V24Z" fill="black" fill-opacity="0.2"/>
<path d="M10 24H11V25H10V24Z" fill="#479DFF"/>
<path d="M10 24H11V25H10V24Z" fill="black" fill-opacity="0.2"/>
<path d="M7 24H8V25H7V24Z" fill="#479DFF"/>
<path d="M7 24H8V25H7V24Z" fill="black" fill-opacity="0.2"/>
<path d="M8 24H9V25H8V24Z" fill="#479DFF"/>
<path d="M8 24H9V25H8V24Z" fill="black" fill-opacity="0.2"/>
<path d="M11 24H12V25H11V24Z" fill="#479DFF"/>
<path d="M11 24H12V25H11V24Z" fill="black" fill-opacity="0.2"/>
<path d="M12 24H13V25H12V24Z" fill="#479DFF"/>
<path d="M12 24H13V25H12V24Z" fill="black" fill-opacity="0.2"/>
<path d="M15 24H16V25H15V24Z" fill="#479DFF"/>
<path d="M15 24H16V25H15V24Z" fill="black" fill-opacity="0.2"/>
<path d="M13 22H14V23H13V22Z" fill="#479DFF"/>
<path d="M13 22H14V23H13V22Z" fill="black" fill-opacity="0.2"/>
<path d="M13 23H14V24H13V23Z" fill="#479DFF"/>
<path d="M13 23H14V24H13V23Z" fill="black" fill-opacity="0.2"/>
<path d="M13 24H14V25H13V24Z" fill="#479DFF"/>
<path d="M13 24H14V25H13V24Z" fill="black" fill-opacity="0.2"/>
<path d="M14 22H15V23H14V22Z" fill="#479DFF"/>
<path d="M14 22H15V23H14V22Z" fill="black" fill-opacity="0.2"/>
<path d="M14 23H15V24H14V23Z" fill="#479DFF"/>
<path d="M14 23H15V24H14V23Z" fill="black" fill-opacity="0.2"/>
<path d="M14 24H15V25H14V24Z" fill="#479DFF"/>
<path d="M14 24H15V25H14V24Z" fill="black" fill-opacity="0.2"/>
<path d="M19 22H20V23H19V22Z" fill="#479DFF"/>
<path d="M19 22H20V23H19V22Z" fill="black" fill-opacity="0.2"/>
<path d="M20 21H21V22H20V21Z" fill="#479DFF"/>
<path d="M20 21H21V22H20V21Z" fill="black" fill-opacity="0.2"/>
<path d="M10 19H11V20H10V19Z" fill="#479DFF"/>
<path d="M10 19H11V20H10V19Z" fill="black" fill-opacity="0.2"/>
<path d="M11 19H12V20H11V19Z" fill="#479DFF"/>
<path d="M11 19H12V20H11V19Z" fill="black" fill-opacity="0.2"/>
<path d="M12 19H13V20H12V19Z" fill="#479DFF"/>
<path d="M12 19H13V20H12V19Z" fill="black" fill-opacity="0.2"/>
<path d="M15 19H16V20H15V19Z" fill="#479DFF"/>
<path d="M15 19H16V20H15V19Z" fill="black" fill-opacity="0.2"/>
<path d="M16 19H17V20H16V19Z" fill="#479DFF"/>
<path d="M16 19H17V20H16V19Z" fill="black" fill-opacity="0.2"/>
<path d="M17 19H18V20H17V19Z" fill="#479DFF"/>
<path d="M17 19H18V20H17V19Z" fill="black" fill-opacity="0.2"/>
<path d="M18 19H19V20H18V19Z" fill="#479DFF"/>
<path d="M18 19H19V20H18V19Z" fill="black" fill-opacity="0.2"/>
<path d="M19 19H20V20H19V19Z" fill="#479DFF"/>
<path d="M19 19H20V20H19V19Z" fill="black" fill-opacity="0.2"/>
<path d="M20 19H21V20H20V19Z" fill="#479DFF"/>
<path d="M20 19H21V20H20V19Z" fill="black" fill-opacity="0.2"/>
<path d="M9 20H10V21H9V20Z" fill="#479DFF"/>
<path d="M9 20H10V21H9V20Z" fill="black" fill-opacity="0.2"/>
<path d="M10 20H11V21H10V20Z" fill="#479DFF"/>
<path d="M10 20H11V21H10V20Z" fill="black" fill-opacity="0.2"/>
<path d="M11 20H12V21H11V20Z" fill="#479DFF"/>
<path d="M11 20H12V21H11V20Z" fill="black" fill-opacity="0.2"/>
<path d="M12 20H13V21H12V20Z" fill="#479DFF"/>
<path d="M12 20H13V21H12V20Z" fill="black" fill-opacity="0.2"/>
<path d="M15 20H16V21H15V20Z" fill="#479DFF"/>
<path d="M15 20H16V21H15V20Z" fill="black" fill-opacity="0.2"/>
<path d="M16 20H17V21H16V20Z" fill="#479DFF"/>
<path d="M16 20H17V21H16V20Z" fill="black" fill-opacity="0.2"/>
<path d="M17 20H18V21H17V20Z" fill="#479DFF"/>
<path d="M17 20H18V21H17V20Z" fill="black" fill-opacity="0.2"/>
<path d="M18 20H19V21H18V20Z" fill="#479DFF"/>
<path d="M18 20H19V21H18V20Z" fill="black" fill-opacity="0.2"/>
<path d="M19 20H20V21H19V20Z" fill="#479DFF"/>
<path d="M19 20H20V21H19V20Z" fill="black" fill-opacity="0.2"/>
<path d="M9 21H10V22H9V21Z" fill="#479DFF"/>
<path d="M9 21H10V22H9V21Z" fill="black" fill-opacity="0.2"/>
<path d="M10 21H11V22H10V21Z" fill="#479DFF"/>
<path d="M10 21H11V22H10V21Z" fill="black" fill-opacity="0.2"/>
<path d="M11 21H12V22H11V21Z" fill="#479DFF"/>
<path d="M11 21H12V22H11V21Z" fill="black" fill-opacity="0.2"/>
<path d="M12 21H13V22H12V21Z" fill="#479DFF"/>
<path d="M12 21H13V22H12V21Z" fill="black" fill-opacity="0.2"/>
<path d="M15 21H16V22H15V21Z" fill="#479DFF"/>
<path d="M15 21H16V22H15V21Z" fill="black" fill-opacity="0.2"/>
<path d="M16 21H17V22H16V21Z" fill="#479DFF"/>
<path d="M16 21H17V22H16V21Z" fill="black" fill-opacity="0.2"/>
<path d="M17 21H18V22H17V21Z" fill="#479DFF"/>
<path d="M17 21H18V22H17V21Z" fill="black" fill-opacity="0.2"/>
<path d="M18 21H19V22H18V21Z" fill="#479DFF"/>
<path d="M18 21H19V22H18V21Z" fill="black" fill-opacity="0.2"/>
<path d="M19 21H20V22H19V21Z" fill="#479DFF"/>
<path d="M19 21H20V22H19V21Z" fill="black" fill-opacity="0.2"/>
<path d="M13 19H14V20H13V19Z" fill="#479DFF"/>
<path d="M13 19H14V20H13V19Z" fill="black" fill-opacity="0.2"/>
<path d="M13 20H14V21H13V20Z" fill="#479DFF"/>
<path d="M13 20H14V21H13V20Z" fill="black" fill-opacity="0.2"/>
<path d="M13 21H14V22H13V21Z" fill="#479DFF"/>
<path d="M13 21H14V22H13V21Z" fill="black" fill-opacity="0.2"/>
<path d="M14 19H15V20H14V19Z" fill="#479DFF"/>
<path d="M14 19H15V20H14V19Z" fill="black" fill-opacity="0.2"/>
<path d="M14 20H15V21H14V20Z" fill="#479DFF"/>
<path d="M14 20H15V21H14V20Z" fill="black" fill-opacity="0.2"/>
<path d="M14 21H15V22H14V21Z" fill="#479DFF"/>
<path d="M14 21H15V22H14V21Z" fill="black" fill-opacity="0.2"/>
<path d="M20 20H21V21H20V20Z" fill="#479DFF"/>
<path d="M20 20H21V21H20V20Z" fill="black" fill-opacity="0.2"/>
<path d="M21 21H22V22H21V21Z" fill="#479DFF"/>
<path d="M21 21H22V22H21V21Z" fill="black" fill-opacity="0.2"/>
<path d="M21 19H22V20H21V19Z" fill="#479DFF"/>
<path d="M21 19H22V20H21V19Z" fill="black" fill-opacity="0.2"/>
<path d="M21 20H22V21H21V20Z" fill="#479DFF"/>
<path d="M21 20H22V21H21V20Z" fill="black" fill-opacity="0.2"/>
<path d="M6 17H7V18H6V17Z" fill="#479DFF"/>
<path d="M6 17H7V18H6V17Z" fill="black" fill-opacity="0.2"/>
<path d="M7 17H8V18H7V17Z" fill="#479DFF"/>
<path d="M7 17H8V18H7V17Z" fill="black" fill-opacity="0.2"/>
<path d="M7 14H8V15H7V14Z" fill="#479DFF"/>
<path d="M7 14H8V15H7V14Z" fill="black" fill-opacity="0.2"/>
<path d="M7 13H8V14H7V13Z" fill="#479DFF"/>
<path d="M7 13H8V14H7V13Z" fill="black" fill-opacity="0.2"/>
<path d="M6 12H7V13H6V12Z" fill="#479DFF"/>
<path d="M6 12H7V13H6V12Z" fill="black" fill-opacity="0.2"/>
<path d="M7 12H8V13H7V12Z" fill="#479DFF"/>
<path d="M7 12H8V13H7V12Z" fill="black" fill-opacity="0.2"/>
<path d="M7 11H8V12H7V11Z" fill="#479DFF"/>
<path d="M7 11H8V12H7V11Z" fill="black" fill-opacity="0.2"/>
<path d="M7 10H8V11H7V10Z" fill="#479DFF"/>
<path d="M7 10H8V11H7V10Z" fill="black" fill-opacity="0.2"/>
<path d="M7 9H8V10H7V9Z" fill="#479DFF"/>
<path d="M7 9H8V10H7V9Z" fill="black" fill-opacity="0.2"/>
<path d="M5 13H6V14H5V13Z" fill="#479DFF"/>
<path d="M5 13H6V14H5V13Z" fill="black" fill-opacity="0.2"/>
<path d="M4 13H5V14H4V13Z" fill="#479DFF"/>
<path d="M4 13H5V14H4V13Z" fill="black" fill-opacity="0.2"/>
<path d="M4 12H5V13H4V12Z" fill="#479DFF"/>
<path d="M4 12H5V13H4V12Z" fill="black" fill-opacity="0.2"/>
<path d="M16 5H17V6H16V5Z" fill="#479DFF"/>
<path d="M16 5H17V6H16V5Z" fill="black" fill-opacity="0.2"/>
<path d="M16 6H17V7H16V6Z" fill="#479DFF"/>
<path d="M16 6H17V7H16V6Z" fill="black" fill-opacity="0.2"/>
<path d="M16 7H17V8H16V7Z" fill="#479DFF"/>
<path d="M16 7H17V8H16V7Z" fill="black" fill-opacity="0.2"/>
<path d="M15 8H16V9H15V8Z" fill="#479DFF"/>
<path d="M15 8H16V9H15V8Z" fill="black" fill-opacity="0.2"/>
<path d="M16 8H17V9H16V8Z" fill="#479DFF"/>
<path d="M16 8H17V9H16V8Z" fill="black" fill-opacity="0.2"/>
<path d="M8 8H9V9H8V8Z" fill="#479DFF"/>
<path d="M8 8H9V9H8V8Z" fill="black" fill-opacity="0.2"/>
<path d="M9 8H10V9H9V8Z" fill="#479DFF"/>
<path d="M9 8H10V9H9V8Z" fill="black" fill-opacity="0.2"/>
<path d="M9 7H10V8H9V7Z" fill="#479DFF"/>
<path d="M9 7H10V8H9V7Z" fill="black" fill-opacity="0.2"/>
<path d="M10 8H11V9H10V8Z" fill="#479DFF"/>
<path d="M10 8H11V9H10V8Z" fill="black" fill-opacity="0.2"/>
<path d="M11 8H13V9H11V8Z" fill="#479DFF"/>
<path d="M11 8H13V9H11V8Z" fill="black" fill-opacity="0.2"/>
<path d="M24 15H25V16H24V15Z" fill="#479DFF"/>
<path d="M24 15H25V16H24V15Z" fill="black" fill-opacity="0.2"/>
<path d="M23 17H24V18H23V17Z" fill="#479DFF"/>
<path d="M23 17H24V18H23V17Z" fill="black" fill-opacity="0.2"/>
<path d="M23 16H24V17H23V16Z" fill="#479DFF"/>
<path d="M23 16H24V17H23V16Z" fill="black" fill-opacity="0.2"/>
<path d="M23 15H24V16H23V15Z" fill="#479DFF"/>
<path d="M23 15H24V16H23V15Z" fill="black" fill-opacity="0.2"/>
<path d="M23 14H24V15H23V14Z" fill="#479DFF"/>
<path d="M23 14H24V15H23V14Z" fill="black" fill-opacity="0.2"/>
<path d="M24 14H25V15H24V14Z" fill="#479DFF"/>
<path d="M24 14H25V15H24V14Z" fill="black" fill-opacity="0.2"/>
<path d="M25 12H26V13H25V12Z" fill="#479DFF"/>
<path d="M25 12H26V13H25V12Z" fill="black" fill-opacity="0.2"/>
<path d="M25 13H26V14H25V13Z" fill="#479DFF"/>
<path d="M25 13H26V14H25V13Z" fill="black" fill-opacity="0.2"/>
<path d="M27 6H28V7H27V6Z" fill="#479DFF"/>
<path d="M27 6H28V7H27V6Z" fill="black" fill-opacity="0.2"/>
<path d="M26 4H27V5H26V4Z" fill="#479DFF"/>
<path d="M26 4H27V5H26V4Z" fill="black" fill-opacity="0.2"/>
<path d="M26 5H27V6H26V5Z" fill="#479DFF"/>
<path d="M26 5H27V6H26V5Z" fill="black" fill-opacity="0.2"/>
<path d="M26 9H27V10H26V9Z" fill="#479DFF"/>
<path d="M26 9H27V10H26V9Z" fill="black" fill-opacity="0.2"/>
<path d="M26 10H27V11H26V10Z" fill="#479DFF"/>
<path d="M26 10H27V11H26V10Z" fill="black" fill-opacity="0.2"/>
<path d="M26 6H27V7H26V6Z" fill="#479DFF"/>
<path d="M26 6H27V7H26V6Z" fill="black" fill-opacity="0.2"/>
<path d="M26 7H27V8H26V7Z" fill="#479DFF"/>
<path d="M26 7H27V8H26V7Z" fill="black" fill-opacity="0.2"/>
<path d="M26 8H27V9H26V8Z" fill="#479DFF"/>
<path d="M26 8H27V9H26V8Z" fill="black" fill-opacity="0.2"/>
<path d="M17 4H18V5H17V4Z" fill="#479DFF"/>
<path d="M17 4H18V5H17V4Z" fill="black" fill-opacity="0.2"/>
<path d="M17 5H18V6H17V5Z" fill="#479DFF"/>
<path d="M17 5H18V6H17V5Z" fill="black" fill-opacity="0.2"/>
<path d="M17 6H18V7H17V6Z" fill="#479DFF"/>
<path d="M17 6H18V7H17V6Z" fill="black" fill-opacity="0.2"/>
<path d="M17 7H18V8H17V7Z" fill="#479DFF"/>
<path d="M17 7H18V8H17V7Z" fill="black" fill-opacity="0.2"/>
<path d="M17 8H18V9H17V8Z" fill="#479DFF"/>
<path d="M17 8H18V9H17V8Z" fill="black" fill-opacity="0.2"/>
<path d="M18 2H19V3H18V2Z" fill="#479DFF"/>
<path d="M18 2H19V3H18V2Z" fill="black" fill-opacity="0.2"/>
<path d="M22 1H23V2H22V1Z" fill="#479DFF"/>
<path d="M22 1H23V2H22V1Z" fill="black" fill-opacity="0.2"/>
<path d="M23 1H24V2H23V1Z" fill="#479DFF"/>
<path d="M23 1H24V2H23V1Z" fill="black" fill-opacity="0.2"/>
<path d="M24 1H25V2H24V1Z" fill="#479DFF"/>
<path d="M24 1H25V2H24V1Z" fill="black" fill-opacity="0.2"/>
<path d="M20 1H21V2H20V1Z" fill="#479DFF"/>
<path d="M20 1H21V2H20V1Z" fill="black" fill-opacity="0.2"/>
<path d="M23 2H24V3H23V2Z" fill="#479DFF"/>
<path d="M23 2H24V3H23V2Z" fill="black" fill-opacity="0.2"/>
<path d="M22 2H23V3H22V2Z" fill="#479DFF"/>
<path d="M22 2H23V3H22V2Z" fill="black" fill-opacity="0.2"/>
<path d="M20 2H21V3H20V2Z" fill="#479DFF"/>
<path d="M20 2H21V3H20V2Z" fill="black" fill-opacity="0.2"/>
<path d="M24 2H25V3H24V2Z" fill="#479DFF"/>
<path d="M24 2H25V3H24V2Z" fill="black" fill-opacity="0.2"/>
<path d="M19 2H20V3H19V2Z" fill="#479DFF"/>
<path d="M19 2H20V3H19V2Z" fill="black" fill-opacity="0.2"/>
<path d="M19 1H20V2H19V1Z" fill="#479DFF"/>
<path d="M19 1H20V2H19V1Z" fill="black" fill-opacity="0.2"/>
<path d="M21 1H22V2H21V1Z" fill="#479DFF"/>
<path d="M21 1H22V2H21V1Z" fill="black" fill-opacity="0.2"/>
<path d="M21 2H22V3H21V2Z" fill="#479DFF"/>
<path d="M21 2H22V3H21V2Z" fill="black" fill-opacity="0.2"/>
<path d="M18 3H19V4H18V3Z" fill="#479DFF"/>
<path d="M18 3H19V4H18V3Z" fill="black" fill-opacity="0.2"/>
<path d="M19 3H20V4H19V3Z" fill="#479DFF"/>
<path d="M19 3H20V4H19V3Z" fill="black" fill-opacity="0.2"/>
<path d="M20 3H21V4H20V3Z" fill="#479DFF"/>
<path d="M20 3H21V4H20V3Z" fill="black" fill-opacity="0.2"/>
<path d="M22 3H23V4H22V3Z" fill="#479DFF"/>
<path d="M22 3H23V4H22V3Z" fill="black" fill-opacity="0.2"/>
<path d="M23 3H24V4H23V3Z" fill="#479DFF"/>
<path d="M23 3H24V4H23V3Z" fill="black" fill-opacity="0.2"/>
<path d="M24 3H25V4H24V3Z" fill="#479DFF"/>
<path d="M24 3H25V4H24V3Z" fill="black" fill-opacity="0.2"/>
<path d="M18 4H19V5H18V4Z" fill="#479DFF"/>
<path d="M18 4H19V5H18V4Z" fill="black" fill-opacity="0.2"/>
<path d="M19 4H20V5H19V4Z" fill="#479DFF"/>
<path d="M19 4H20V5H19V4Z" fill="black" fill-opacity="0.2"/>
<path d="M20 4H21V5H20V4Z" fill="#479DFF"/>
<path d="M20 4H21V5H20V4Z" fill="black" fill-opacity="0.2"/>
<path d="M22 4H23V5H22V4Z" fill="#479DFF"/>
<path d="M22 4H23V5H22V4Z" fill="black" fill-opacity="0.2"/>
<path d="M23 4H24V5H23V4Z" fill="#479DFF"/>
<path d="M23 4H24V5H23V4Z" fill="black" fill-opacity="0.2"/>
<path d="M24 4H25V5H24V4Z" fill="#479DFF"/>
<path d="M24 4H25V5H24V4Z" fill="black" fill-opacity="0.2"/>
<path d="M18 5H19V6H18V5Z" fill="#479DFF"/>
<path d="M18 5H19V6H18V5Z" fill="black" fill-opacity="0.2"/>
<path d="M19 5H20V6H19V5Z" fill="#479DFF"/>
<path d="M19 5H20V6H19V5Z" fill="black" fill-opacity="0.2"/>
<path d="M20 5H21V6H20V5Z" fill="#479DFF"/>
<path d="M20 5H21V6H20V5Z" fill="black" fill-opacity="0.2"/>
<path d="M22 5H23V6H22V5Z" fill="#479DFF"/>
<path d="M22 5H23V6H22V5Z" fill="black" fill-opacity="0.2"/>
<path d="M23 5H24V6H23V5Z" fill="#479DFF"/>
<path d="M23 5H24V6H23V5Z" fill="black" fill-opacity="0.2"/>
<path d="M24 5H25V6H24V5Z" fill="#479DFF"/>
<path d="M24 5H25V6H24V5Z" fill="black" fill-opacity="0.2"/>
<path d="M18 6H19V7H18V6Z" fill="#479DFF"/>
<path d="M18 6H19V7H18V6Z" fill="black" fill-opacity="0.2"/>
<path d="M19 6H20V7H19V6Z" fill="#479DFF"/>
<path d="M19 6H20V7H19V6Z" fill="black" fill-opacity="0.2"/>
<path d="M20 6H21V7H20V6Z" fill="#479DFF"/>
<path d="M20 6H21V7H20V6Z" fill="black" fill-opacity="0.2"/>
<path d="M22 6H23V7H22V6Z" fill="#479DFF"/>
<path d="M22 6H23V7H22V6Z" fill="black" fill-opacity="0.2"/>
<path d="M23 6H24V7H23V6Z" fill="#479DFF"/>
<path d="M23 6H24V7H23V6Z" fill="black" fill-opacity="0.2"/>
<path d="M24 6H25V7H24V6Z" fill="#479DFF"/>
<path d="M24 6H25V7H24V6Z" fill="black" fill-opacity="0.2"/>
<path d="M18 7H19V8H18V7Z" fill="#479DFF"/>
<path d="M18 7H19V8H18V7Z" fill="black" fill-opacity="0.2"/>
<path d="M17 3H18V4H17V3Z" fill="#479DFF"/>
<path d="M17 3H18V4H17V3Z" fill="black" fill-opacity="0.2"/>
<path d="M19 7H20V8H19V7Z" fill="#479DFF"/>
<path d="M19 7H20V8H19V7Z" fill="black" fill-opacity="0.2"/>
<path d="M20 7H21V8H20V7Z" fill="#479DFF"/>
<path d="M20 7H21V8H20V7Z" fill="black" fill-opacity="0.2"/>
<path d="M22 7H23V8H22V7Z" fill="#479DFF"/>
<path d="M22 7H23V8H22V7Z" fill="black" fill-opacity="0.2"/>
<path d="M23 7H24V8H23V7Z" fill="#479DFF"/>
<path d="M23 7H24V8H23V7Z" fill="black" fill-opacity="0.2"/>
<path d="M24 7H25V8H24V7Z" fill="#479DFF"/>
<path d="M24 7H25V8H24V7Z" fill="black" fill-opacity="0.2"/>
<path d="M18 8H19V9H18V8Z" fill="#479DFF"/>
<path d="M18 8H19V9H18V8Z" fill="black" fill-opacity="0.2"/>
<path d="M19 8H20V9H19V8Z" fill="#479DFF"/>
<path d="M19 8H20V9H19V8Z" fill="black" fill-opacity="0.2"/>
<path d="M20 8H21V9H20V8Z" fill="#479DFF"/>
<path d="M20 8H21V9H20V8Z" fill="black" fill-opacity="0.2"/>
<path d="M22 8H23V9H22V8Z" fill="#479DFF"/>
<path d="M22 8H23V9H22V8Z" fill="black" fill-opacity="0.2"/>
<path d="M23 8H24V9H23V8Z" fill="#479DFF"/>
<path d="M23 8H24V9H23V8Z" fill="black" fill-opacity="0.2"/>
<path d="M24 8H25V9H24V8Z" fill="#479DFF"/>
<path d="M24 8H25V9H24V8Z" fill="black" fill-opacity="0.2"/>
<path d="M25 6H26V7H25V6Z" fill="#479DFF"/>
<path d="M25 6H26V7H25V6Z" fill="black" fill-opacity="0.2"/>
<path d="M25 7H26V8H25V7Z" fill="#479DFF"/>
<path d="M25 7H26V8H25V7Z" fill="black" fill-opacity="0.2"/>
<path d="M25 8H26V9H25V8Z" fill="#479DFF"/>
<path d="M25 8H26V9H25V8Z" fill="black" fill-opacity="0.2"/>
<path d="M25 3H26V4H25V3Z" fill="#479DFF"/>
<path d="M25 3H26V4H25V3Z" fill="black" fill-opacity="0.2"/>
<path d="M25 4H26V5H25V4Z" fill="#479DFF"/>
<path d="M25 4H26V5H25V4Z" fill="black" fill-opacity="0.2"/>
<path d="M25 5H26V6H25V5Z" fill="#479DFF"/>
<path d="M25 5H26V6H25V5Z" fill="black" fill-opacity="0.2"/>
<path d="M21 3H22V4H21V3Z" fill="#479DFF"/>
<path d="M21 3H22V4H21V3Z" fill="black" fill-opacity="0.2"/>
<path d="M21 4H22V5H21V4Z" fill="#479DFF"/>
<path d="M21 4H22V5H21V4Z" fill="black" fill-opacity="0.2"/>
<path d="M21 5H22V6H21V5Z" fill="#479DFF"/>
<path d="M21 5H22V6H21V5Z" fill="black" fill-opacity="0.2"/>
<path d="M21 6H22V7H21V6Z" fill="#479DFF"/>
<path d="M21 6H22V7H21V6Z" fill="black" fill-opacity="0.2"/>
<path d="M21 7H22V8H21V7Z" fill="#479DFF"/>
<path d="M21 7H22V8H21V7Z" fill="black" fill-opacity="0.2"/>
<path d="M21 8H22V9H21V8Z" fill="#479DFF"/>
<path d="M21 8H22V9H21V8Z" fill="black" fill-opacity="0.2"/>
<path d="M8 16H9V17H8V16Z" fill="#479DFF"/>
<path d="M8 16H9V17H8V16Z" fill="black" fill-opacity="0.2"/>
<path d="M9 16H10V17H9V16Z" fill="#479DFF"/>
<path d="M9 16H10V17H9V16Z" fill="black" fill-opacity="0.2"/>
<path d="M10 16H11V17H10V16Z" fill="#479DFF"/>
<path d="M10 16H11V17H10V16Z" fill="black" fill-opacity="0.2"/>
<path d="M11 16H12V17H11V16Z" fill="#479DFF"/>
<path d="M11 16H12V17H11V16Z" fill="black" fill-opacity="0.2"/>
<path d="M12 16H13V17H12V16Z" fill="#479DFF"/>
<path d="M12 16H13V17H12V16Z" fill="black" fill-opacity="0.2"/>
<path d="M15 16H16V17H15V16Z" fill="#479DFF"/>
<path d="M15 16H16V17H15V16Z" fill="black" fill-opacity="0.2"/>
<path d="M16 16H17V17H16V16Z" fill="#479DFF"/>
<path d="M16 16H17V17H16V16Z" fill="black" fill-opacity="0.2"/>
<path d="M17 16H18V17H17V16Z" fill="#479DFF"/>
<path d="M17 16H18V17H17V16Z" fill="black" fill-opacity="0.2"/>
<path d="M18 16H19V17H18V16Z" fill="#479DFF"/>
<path d="M18 16H19V17H18V16Z" fill="black" fill-opacity="0.2"/>
<path d="M19 16H20V17H19V16Z" fill="#479DFF"/>
<path d="M19 16H20V17H19V16Z" fill="black" fill-opacity="0.2"/>
<path d="M8 15H9V16H8V15Z" fill="#479DFF"/>
<path d="M8 15H9V16H8V15Z" fill="black" fill-opacity="0.2"/>
<path d="M9 15H10V16H9V15Z" fill="#479DFF"/>
<path d="M9 15H10V16H9V15Z" fill="black" fill-opacity="0.2"/>
<path d="M10 15H11V16H10V15Z" fill="#479DFF"/>
<path d="M10 15H11V16H10V15Z" fill="black" fill-opacity="0.2"/>
<path d="M11 15H12V16H11V15Z" fill="#479DFF"/>
<path d="M11 15H12V16H11V15Z" fill="black" fill-opacity="0.2"/>
<path d="M12 15H13V16H12V15Z" fill="#479DFF"/>
<path d="M12 15H13V16H12V15Z" fill="black" fill-opacity="0.2"/>
<path d="M15 15H16V16H15V15Z" fill="#479DFF"/>
<path d="M15 15H16V16H15V15Z" fill="black" fill-opacity="0.2"/>
<path d="M16 15H17V16H16V15Z" fill="#479DFF"/>
<path d="M16 15H17V16H16V15Z" fill="black" fill-opacity="0.2"/>
<path d="M17 15H18V16H17V15Z" fill="#479DFF"/>
<path d="M17 15H18V16H17V15Z" fill="black" fill-opacity="0.2"/>
<path d="M18 15H19V16H18V15Z" fill="#479DFF"/>
<path d="M18 15H19V16H18V15Z" fill="black" fill-opacity="0.2"/>
<path d="M19 15H20V16H19V15Z" fill="#479DFF"/>
<path d="M19 15H20V16H19V15Z" fill="black" fill-opacity="0.2"/>
<path d="M8 14H9V15H8V14Z" fill="#479DFF"/>
<path d="M8 14H9V15H8V14Z" fill="black" fill-opacity="0.2"/>
<path d="M9 14H10V15H9V14Z" fill="#479DFF"/>
<path d="M9 14H10V15H9V14Z" fill="black" fill-opacity="0.2"/>
<path d="M10 14H11V15H10V14Z" fill="#479DFF"/>
<path d="M10 14H11V15H10V14Z" fill="black" fill-opacity="0.2"/>
<path d="M11 14H12V15H11V14Z" fill="#479DFF"/>
<path d="M11 14H12V15H11V14Z" fill="black" fill-opacity="0.2"/>
<path d="M12 14H13V15H12V14Z" fill="#479DFF"/>
<path d="M12 14H13V15H12V14Z" fill="black" fill-opacity="0.2"/>
<path d="M15 14H16V15H15V14Z" fill="#479DFF"/>
<path d="M15 14H16V15H15V14Z" fill="black" fill-opacity="0.2"/>
<path d="M16 14H17V15H16V14Z" fill="#479DFF"/>
<path d="M16 14H17V15H16V14Z" fill="black" fill-opacity="0.2"/>
<path d="M17 14H18V15H17V14Z" fill="#479DFF"/>
<path d="M17 14H18V15H17V14Z" fill="black" fill-opacity="0.2"/>
<path d="M18 14H19V15H18V14Z" fill="#479DFF"/>
<path d="M18 14H19V15H18V14Z" fill="black" fill-opacity="0.2"/>
<path d="M19 14H20V15H19V14Z" fill="#479DFF"/>
<path d="M19 14H20V15H19V14Z" fill="black" fill-opacity="0.2"/>
<path d="M8 13H9V14H8V13Z" fill="#479DFF"/>
<path d="M8 13H9V14H8V13Z" fill="black" fill-opacity="0.2"/>
<path d="M9 13H10V14H9V13Z" fill="#479DFF"/>
<path d="M9 13H10V14H9V13Z" fill="black" fill-opacity="0.2"/>
<path d="M10 13H11V14H10V13Z" fill="#479DFF"/>
<path d="M10 13H11V14H10V13Z" fill="black" fill-opacity="0.2"/>
<path d="M11 13H12V14H11V13Z" fill="#479DFF"/>
<path d="M11 13H12V14H11V13Z" fill="black" fill-opacity="0.2"/>
<path d="M12 13H13V14H12V13Z" fill="#479DFF"/>
<path d="M12 13H13V14H12V13Z" fill="black" fill-opacity="0.2"/>
<path d="M15 13H16V14H15V13Z" fill="#479DFF"/>
<path d="M15 13H16V14H15V13Z" fill="black" fill-opacity="0.2"/>
<path d="M16 13H17V14H16V13Z" fill="#479DFF"/>
<path d="M16 13H17V14H16V13Z" fill="black" fill-opacity="0.2"/>
<path d="M17 13H18V14H17V13Z" fill="#479DFF"/>
<path d="M17 13H18V14H17V13Z" fill="black" fill-opacity="0.2"/>
<path d="M18 13H19V14H18V13Z" fill="#479DFF"/>
<path d="M18 13H19V14H18V13Z" fill="black" fill-opacity="0.2"/>
<path d="M19 13H20V14H19V13Z" fill="#479DFF"/>
<path d="M19 13H20V14H19V13Z" fill="black" fill-opacity="0.2"/>
<path d="M8 12H9V13H8V12Z" fill="#479DFF"/>
<path d="M8 12H9V13H8V12Z" fill="black" fill-opacity="0.2"/>
<path d="M9 12H10V13H9V12Z" fill="#479DFF"/>
<path d="M9 12H10V13H9V12Z" fill="black" fill-opacity="0.2"/>
<path d="M10 12H11V13H10V12Z" fill="#479DFF"/>
<path d="M10 12H11V13H10V12Z" fill="black" fill-opacity="0.2"/>
<path d="M11 12H12V13H11V12Z" fill="#479DFF"/>
<path d="M11 12H12V13H11V12Z" fill="black" fill-opacity="0.2"/>
<path d="M12 12H13V13H12V12Z" fill="#479DFF"/>
<path d="M12 12H13V13H12V12Z" fill="black" fill-opacity="0.2"/>
<path d="M15 12H16V13H15V12Z" fill="#479DFF"/>
<path d="M15 12H16V13H15V12Z" fill="black" fill-opacity="0.2"/>
<path d="M16 12H17V13H16V12Z" fill="#479DFF"/>
<path d="M16 12H17V13H16V12Z" fill="black" fill-opacity="0.2"/>
<path d="M17 12H18V13H17V12Z" fill="#479DFF"/>
<path d="M17 12H18V13H17V12Z" fill="black" fill-opacity="0.2"/>
<path d="M18 12H19V13H18V12Z" fill="#479DFF"/>
<path d="M18 12H19V13H18V12Z" fill="black" fill-opacity="0.2"/>
<path d="M19 12H20V13H19V12Z" fill="#479DFF"/>
<path d="M19 12H20V13H19V12Z" fill="black" fill-opacity="0.2"/>
<path d="M8 11H9V12H8V11Z" fill="#479DFF"/>
<path d="M8 11H9V12H8V11Z" fill="black" fill-opacity="0.2"/>
<path d="M9 11H10V12H9V11Z" fill="#479DFF"/>
<path d="M9 11H10V12H9V11Z" fill="black" fill-opacity="0.2"/>
<path d="M10 11H11V12H10V11Z" fill="#479DFF"/>
<path d="M10 11H11V12H10V11Z" fill="black" fill-opacity="0.2"/>
<path d="M11 11H12V12H11V11Z" fill="#479DFF"/>
<path d="M11 11H12V12H11V11Z" fill="black" fill-opacity="0.2"/>
<path d="M12 11H13V12H12V11Z" fill="#479DFF"/>
<path d="M12 11H13V12H12V11Z" fill="black" fill-opacity="0.2"/>
<path d="M15 11H16V12H15V11Z" fill="#479DFF"/>
<path d="M15 11H16V12H15V11Z" fill="black" fill-opacity="0.2"/>
<path d="M16 11H17V12H16V11Z" fill="#479DFF"/>
<path d="M16 11H17V12H16V11Z" fill="black" fill-opacity="0.2"/>
<path d="M17 11H18V12H17V11Z" fill="#479DFF"/>
<path d="M17 11H18V12H17V11Z" fill="black" fill-opacity="0.2"/>
<path d="M18 11H19V12H18V11Z" fill="#479DFF"/>
<path d="M18 11H19V12H18V11Z" fill="black" fill-opacity="0.2"/>
<path d="M19 11H20V12H19V11Z" fill="#479DFF"/>
<path d="M19 11H20V12H19V11Z" fill="black" fill-opacity="0.2"/>
<path d="M8 10H9V11H8V10Z" fill="#479DFF"/>
<path d="M8 10H9V11H8V10Z" fill="black" fill-opacity="0.2"/>
<path d="M9 10H10V11H9V10Z" fill="#479DFF"/>
<path d="M9 10H10V11H9V10Z" fill="black" fill-opacity="0.2"/>
<path d="M10 10H11V11H10V10Z" fill="#479DFF"/>
<path d="M10 10H11V11H10V10Z" fill="black" fill-opacity="0.2"/>
<path d="M11 10H12V11H11V10Z" fill="#479DFF"/>
<path d="M11 10H12V11H11V10Z" fill="black" fill-opacity="0.2"/>
<path d="M12 10H13V11H12V10Z" fill="#479DFF"/>
<path d="M12 10H13V11H12V10Z" fill="black" fill-opacity="0.2"/>
<path d="M15 10H16V11H15V10Z" fill="#479DFF"/>
<path d="M15 10H16V11H15V10Z" fill="black" fill-opacity="0.2"/>
<path d="M16 10H17V11H16V10Z" fill="#479DFF"/>
<path d="M16 10H17V11H16V10Z" fill="black" fill-opacity="0.2"/>
<path d="M17 10H18V11H17V10Z" fill="#479DFF"/>
<path d="M17 10H18V11H17V10Z" fill="black" fill-opacity="0.2"/>
<path d="M18 10H19V11H18V10Z" fill="#479DFF"/>
<path d="M18 10H19V11H18V10Z" fill="black" fill-opacity="0.2"/>
<path d="M19 10H20V11H19V10Z" fill="#479DFF"/>
<path d="M19 10H20V11H19V10Z" fill="black" fill-opacity="0.2"/>
<path d="M8 9H9V10H8V9Z" fill="#479DFF"/>
<path d="M8 9H9V10H8V9Z" fill="black" fill-opacity="0.2"/>
<path d="M9 9H10V10H9V9Z" fill="#479DFF"/>
<path d="M9 9H10V10H9V9Z" fill="black" fill-opacity="0.2"/>
<path d="M10 9H11V10H10V9Z" fill="#479DFF"/>
<path d="M10 9H11V10H10V9Z" fill="black" fill-opacity="0.2"/>
<path d="M11 9H12V10H11V9Z" fill="#479DFF"/>
<path d="M11 9H12V10H11V9Z" fill="black" fill-opacity="0.2"/>
<path d="M12 9H13V10H12V9Z" fill="#479DFF"/>
<path d="M12 9H13V10H12V9Z" fill="black" fill-opacity="0.2"/>
<path d="M15 9H16V10H15V9Z" fill="#479DFF"/>
<path d="M15 9H16V10H15V9Z" fill="black" fill-opacity="0.2"/>
<path d="M16 9H17V10H16V9Z" fill="#479DFF"/>
<path d="M16 9H17V10H16V9Z" fill="black" fill-opacity="0.2"/>
<path d="M17 9H18V10H17V9Z" fill="#479DFF"/>
<path d="M17 9H18V10H17V9Z" fill="black" fill-opacity="0.2"/>
<path d="M18 9H19V10H18V9Z" fill="#479DFF"/>
<path d="M18 9H19V10H18V9Z" fill="black" fill-opacity="0.2"/>
<path d="M19 9H20V10H19V9Z" fill="#479DFF"/>
<path d="M19 9H20V10H19V9Z" fill="black" fill-opacity="0.2"/>
<path d="M20 16H21V17H20V16Z" fill="#479DFF"/>
<path d="M20 16H21V17H20V16Z" fill="black" fill-opacity="0.2"/>
<path d="M20 15H21V16H20V15Z" fill="#479DFF"/>
<path d="M20 15H21V16H20V15Z" fill="black" fill-opacity="0.2"/>
<path d="M20 14H21V15H20V14Z" fill="#479DFF"/>
<path d="M20 14H21V15H20V14Z" fill="black" fill-opacity="0.2"/>
<path d="M20 13H21V14H20V13Z" fill="#479DFF"/>
<path d="M20 13H21V14H20V13Z" fill="black" fill-opacity="0.2"/>
<path d="M20 12H21V13H20V12Z" fill="#479DFF"/>
<path d="M20 12H21V13H20V12Z" fill="black" fill-opacity="0.2"/>
<path d="M20 11H21V12H20V11Z" fill="#479DFF"/>
<path d="M20 11H21V12H20V11Z" fill="black" fill-opacity="0.2"/>
<path d="M20 10H21V11H20V10Z" fill="#479DFF"/>
<path d="M20 10H21V11H20V10Z" fill="black" fill-opacity="0.2"/>
<path d="M20 9H21V10H20V9Z" fill="#479DFF"/>
<path d="M20 9H21V10H20V9Z" fill="black" fill-opacity="0.2"/>
<path d="M22 16H23V17H22V16Z" fill="#479DFF"/>
<path d="M22 16H23V17H22V16Z" fill="black" fill-opacity="0.2"/>
<path d="M8 17H9V18H8V17Z" fill="#479DFF"/>
<path d="M8 17H9V18H8V17Z" fill="black" fill-opacity="0.2"/>
<path d="M9 17H10V18H9V17Z" fill="#479DFF"/>
<path d="M9 17H10V18H9V17Z" fill="black" fill-opacity="0.2"/>
<path d="M10 17H11V18H10V17Z" fill="#479DFF"/>
<path d="M10 17H11V18H10V17Z" fill="black" fill-opacity="0.2"/>
<path d="M11 17H12V18H11V17Z" fill="#479DFF"/>
<path d="M11 17H12V18H11V17Z" fill="black" fill-opacity="0.2"/>
<path d="M12 17H13V18H12V17Z" fill="#479DFF"/>
<path d="M12 17H13V18H12V17Z" fill="black" fill-opacity="0.2"/>
<path d="M15 17H16V18H15V17Z" fill="#479DFF"/>
<path d="M15 17H16V18H15V17Z" fill="black" fill-opacity="0.2"/>
<path d="M16 17H17V18H16V17Z" fill="#479DFF"/>
<path d="M16 17H17V18H16V17Z" fill="black" fill-opacity="0.2"/>
<path d="M17 17H18V18H17V17Z" fill="#479DFF"/>
<path d="M17 17H18V18H17V17Z" fill="black" fill-opacity="0.2"/>
<path d="M18 17H19V18H18V17Z" fill="#479DFF"/>
<path d="M18 17H19V18H18V17Z" fill="black" fill-opacity="0.2"/>
<path d="M19 17H20V18H19V17Z" fill="#479DFF"/>
<path d="M19 17H20V18H19V17Z" fill="black" fill-opacity="0.2"/>
<path d="M20 17H21V18H20V17Z" fill="#479DFF"/>
<path d="M20 17H21V18H20V17Z" fill="black" fill-opacity="0.2"/>
<path d="M22 17H23V18H22V17Z" fill="#479DFF"/>
<path d="M22 17H23V18H22V17Z" fill="black" fill-opacity="0.2"/>
<path d="M8 18H9V19H8V18Z" fill="#479DFF"/>
<path d="M8 18H9V19H8V18Z" fill="black" fill-opacity="0.2"/>
<path d="M9 18H10V19H9V18Z" fill="#479DFF"/>
<path d="M9 18H10V19H9V18Z" fill="black" fill-opacity="0.2"/>
<path d="M10 18H11V19H10V18Z" fill="#479DFF"/>
<path d="M10 18H11V19H10V18Z" fill="black" fill-opacity="0.2"/>
<path d="M11 18H12V19H11V18Z" fill="#479DFF"/>
<path d="M11 18H12V19H11V18Z" fill="black" fill-opacity="0.2"/>
<path d="M12 18H13V19H12V18Z" fill="#479DFF"/>
<path d="M12 18H13V19H12V18Z" fill="black" fill-opacity="0.2"/>
<path d="M15 18H16V19H15V18Z" fill="#479DFF"/>
<path d="M15 18H16V19H15V18Z" fill="black" fill-opacity="0.2"/>
<path d="M16 18H17V19H16V18Z" fill="#479DFF"/>
<path d="M16 18H17V19H16V18Z" fill="black" fill-opacity="0.2"/>
<path d="M17 18H18V19H17V18Z" fill="#479DFF"/>
<path d="M17 18H18V19H17V18Z" fill="black" fill-opacity="0.2"/>
<path d="M18 18H19V19H18V18Z" fill="#479DFF"/>
<path d="M18 18H19V19H18V18Z" fill="black" fill-opacity="0.2"/>
<path d="M19 18H20V19H19V18Z" fill="#479DFF"/>
<path d="M19 18H20V19H19V18Z" fill="black" fill-opacity="0.2"/>
<path d="M20 18H21V19H20V18Z" fill="#479DFF"/>
<path d="M20 18H21V19H20V18Z" fill="black" fill-opacity="0.2"/>
<path d="M13 16H14V17H13V16Z" fill="#479DFF"/>
<path d="M13 16H14V17H13V16Z" fill="black" fill-opacity="0.2"/>
<path d="M13 15H14V16H13V15Z" fill="#479DFF"/>
<path d="M13 15H14V16H13V15Z" fill="black" fill-opacity="0.2"/>
<path d="M13 14H14V15H13V14Z" fill="#479DFF"/>
<path d="M13 14H14V15H13V14Z" fill="black" fill-opacity="0.2"/>
<path d="M13 13H14V14H13V13Z" fill="#479DFF"/>
<path d="M13 13H14V14H13V13Z" fill="black" fill-opacity="0.2"/>
<path d="M13 12H14V13H13V12Z" fill="#479DFF"/>
<path d="M13 12H14V13H13V12Z" fill="black" fill-opacity="0.2"/>
<path d="M13 11H14V12H13V11Z" fill="#479DFF"/>
<path d="M13 11H14V12H13V11Z" fill="black" fill-opacity="0.2"/>
<path d="M13 10H14V11H13V10Z" fill="#479DFF"/>
<path d="M13 10H14V11H13V10Z" fill="black" fill-opacity="0.2"/>
<path d="M13 9H14V10H13V9Z" fill="#479DFF"/>
<path d="M13 9H14V10H13V9Z" fill="black" fill-opacity="0.2"/>
<path d="M13 17H14V18H13V17Z" fill="#479DFF"/>
<path d="M13 17H14V18H13V17Z" fill="black" fill-opacity="0.2"/>
<path d="M13 18H14V19H13V18Z" fill="#479DFF"/>
<path d="M13 18H14V19H13V18Z" fill="black" fill-opacity="0.2"/>
<path d="M14 16H15V17H14V16Z" fill="#479DFF"/>
<path d="M14 16H15V17H14V16Z" fill="black" fill-opacity="0.2"/>
<path d="M14 15H15V16H14V15Z" fill="#479DFF"/>
<path d="M14 15H15V16H14V15Z" fill="black" fill-opacity="0.2"/>
<path d="M14 14H15V15H14V14Z" fill="#479DFF"/>
<path d="M14 14H15V15H14V14Z" fill="black" fill-opacity="0.2"/>
<path d="M14 13H15V14H14V13Z" fill="#479DFF"/>
<path d="M14 13H15V14H14V13Z" fill="black" fill-opacity="0.2"/>
<path d="M14 12H15V13H14V12Z" fill="#479DFF"/>
<path d="M14 12H15V13H14V12Z" fill="black" fill-opacity="0.2"/>
<path d="M14 11H15V12H14V11Z" fill="#479DFF"/>
<path d="M14 11H15V12H14V11Z" fill="black" fill-opacity="0.2"/>
<path d="M14 10H15V11H14V10Z" fill="#479DFF"/>
<path d="M14 10H15V11H14V10Z" fill="black" fill-opacity="0.2"/>
<path d="M14 9H15V10H14V9Z" fill="#479DFF"/>
<path d="M14 9H15V10H14V9Z" fill="black" fill-opacity="0.2"/>
<path d="M14 17H15V18H14V17Z" fill="#479DFF"/>
<path d="M14 17H15V18H14V17Z" fill="black" fill-opacity="0.2"/>
<path d="M14 18H15V19H14V18Z" fill="#479DFF"/>
<path d="M14 18H15V19H14V18Z" fill="black" fill-opacity="0.2"/>
<path d="M21 16H22V17H21V16Z" fill="#479DFF"/>
<path d="M21 16H22V17H21V16Z" fill="black" fill-opacity="0.2"/>
<path d="M21 15H22V16H21V15Z" fill="#479DFF"/>
<path d="M21 15H22V16H21V15Z" fill="black" fill-opacity="0.2"/>
<path d="M21 14H22V15H21V14Z" fill="#479DFF"/>
<path d="M21 14H22V15H21V14Z" fill="black" fill-opacity="0.2"/>
<path d="M21 13H22V14H21V13Z" fill="#479DFF"/>
<path d="M21 13H22V14H21V13Z" fill="black" fill-opacity="0.2"/>
<path d="M21 12H22V13H21V12Z" fill="#479DFF"/>
<path d="M21 12H22V13H21V12Z" fill="black" fill-opacity="0.2"/>
<path d="M21 11H22V12H21V11Z" fill="#479DFF"/>
<path d="M21 11H22V12H21V11Z" fill="black" fill-opacity="0.2"/>
<path d="M21 10H22V11H21V10Z" fill="#479DFF"/>
<path d="M21 10H22V11H21V10Z" fill="black" fill-opacity="0.2"/>
<path d="M21 9H22V10H21V9Z" fill="#479DFF"/>
<path d="M21 9H22V10H21V9Z" fill="black" fill-opacity="0.2"/>
<path d="M21 17H22V18H21V17Z" fill="#479DFF"/>
<path d="M21 17H22V18H21V17Z" fill="black" fill-opacity="0.2"/>
<path d="M21 18H22V19H21V18Z" fill="#479DFF"/>
<path d="M21 18H22V19H21V18Z" fill="black" fill-opacity="0.2"/>
<path d="M22 18H23V19H22V18Z" fill="#479DFF"/>
<path d="M22 18H23V19H22V18Z" fill="black" fill-opacity="0.2"/>
<path d="M22 15H23V16H22V15Z" fill="#479DFF"/>
<path d="M22 15H23V16H22V15Z" fill="black" fill-opacity="0.2"/>
<path d="M22 14H23V15H22V14Z" fill="#479DFF"/>
<path d="M22 14H23V15H22V14Z" fill="black" fill-opacity="0.2"/>
<path d="M22 13H23V14H22V13Z" fill="#479DFF"/>
<path d="M22 13H23V14H22V13Z" fill="black" fill-opacity="0.2"/>
<path d="M22 12H23V13H22V12Z" fill="#479DFF"/>
<path d="M22 12H23V13H22V12Z" fill="black" fill-opacity="0.2"/>
<path d="M22 11H23V12H22V11Z" fill="#479DFF"/>
<path d="M22 11H23V12H22V11Z" fill="black" fill-opacity="0.2"/>
<path d="M22 10H23V11H22V10Z" fill="#479DFF"/>
<path d="M22 10H23V11H22V10Z" fill="black" fill-opacity="0.2"/>
<path d="M22 9H23V10H22V9Z" fill="#479DFF"/>
<path d="M22 9H23V10H22V9Z" fill="black" fill-opacity="0.2"/>
<path d="M23 13H24V14H23V13Z" fill="#479DFF"/>
<path d="M23 13H24V14H23V13Z" fill="black" fill-opacity="0.2"/>
<path d="M23 12H24V13H23V12Z" fill="#479DFF"/>
<path d="M23 12H24V13H23V12Z" fill="black" fill-opacity="0.2"/>
<path d="M23 11H24V12H23V11Z" fill="#479DFF"/>
<path d="M23 11H24V12H23V11Z" fill="black" fill-opacity="0.2"/>
<path d="M23 10H24V11H23V10Z" fill="#479DFF"/>
<path d="M23 10H24V11H23V10Z" fill="black" fill-opacity="0.2"/>
<path d="M23 9H24V10H23V9Z" fill="#479DFF"/>
<path d="M23 9H24V10H23V9Z" fill="black" fill-opacity="0.2"/>
<path d="M24 13H25V14H24V13Z" fill="#479DFF"/>
<path d="M24 13H25V14H24V13Z" fill="black" fill-opacity="0.2"/>
<path d="M24 12H25V13H24V12Z" fill="#479DFF"/>
<path d="M24 12H25V13H24V12Z" fill="black" fill-opacity="0.2"/>
<path d="M24 11H25V12H24V11Z" fill="#479DFF"/>
<path d="M24 11H25V12H24V11Z" fill="black" fill-opacity="0.2"/>
<path d="M24 10H25V11H24V10Z" fill="#479DFF"/>
<path d="M24 10H25V11H24V10Z" fill="black" fill-opacity="0.2"/>
<path d="M24 9H25V10H24V9Z" fill="#479DFF"/>
<path d="M24 9H25V10H24V9Z" fill="black" fill-opacity="0.2"/>
<path d="M25 11H26V12H25V11Z" fill="#479DFF"/>
<path d="M25 11H26V12H25V11Z" fill="black" fill-opacity="0.2"/>
<path d="M25 10H26V11H25V10Z" fill="#479DFF"/>
<path d="M25 10H26V11H25V10Z" fill="black" fill-opacity="0.2"/>
<path d="M25 9H26V10H25V9Z" fill="#479DFF"/>
<path d="M25 9H26V10H25V9Z" fill="black" fill-opacity="0.2"/>
</svg>


    `;
  }
}
window.customElements.define("a2k-twitter-logo", F1);
class a1 extends F {
  constructor() {
    super(...arguments);
    (this.width = 32), (this.height = 32);
  }
  render() {
    return x`
  <svg styles="width:auto" viewBox="0 0 ${this.width} ${this.height}" fill="none" xmlns="http://www.w3.org/2000/svg">

<rect x="8" width="1" height="1" fill="#33CC33"/>
<rect x="7" y="1" width="1" height="1" fill="#33CC33"/>
<rect x="6" y="1" width="1" height="1" fill="#33CC33"/>
<rect x="5" y="2" width="1" height="1" fill="#33CC33"/>
<rect x="4" y="2" width="1" height="1" fill="#33CC33"/>
<rect x="3" y="3" width="1" height="1" fill="#33CC33"/>
<rect x="2" y="4" width="1" height="1" fill="#33CC33"/>
<rect x="2" y="5" width="1" height="1" fill="#A6CAF0"/>
<rect x="1" y="6" width="1" height="1" fill="#A6CAF0"/>
<rect x="1" y="7" width="1" height="1" fill="#A6CAF0"/>
<rect y="8" width="1" height="1" fill="#A6CAF0"/>
<rect y="9" width="1" height="1" fill="#A6CAF0"/>
<rect y="10" width="1" height="1" fill="#A6CAF0"/>
<rect y="11" width="1" height="1" fill="#A6CAF0"/>
<rect y="12" width="1" height="1" fill="#A6CAF0"/>
<rect y="13" width="1" height="1" fill="#33CC33"/>
<rect x="1" y="12" width="1" height="1" fill="#33CC33"/>
<rect x="2" y="11" width="1" height="1" fill="#33CC33"/>
<rect x="3" y="10" width="1" height="1" fill="#33CC33"/>
<rect x="4" y="10" width="1" height="1" fill="#33CC33"/>
<rect y="15" width="1" height="1" fill="#33CC33"/>
<rect y="14" width="1" height="1" fill="#33CC33"/>
<rect x="2" y="14" width="1" height="1" fill="#66FF66"/>
<rect x="1" y="15" width="1" height="1" fill="#66FF66"/>
<rect x="1" y="14" width="1" height="1" fill="#CCFFCC"/>
<rect x="1" y="16" width="1" height="1" fill="#33CC33"/>
<rect x="1" y="17" width="1" height="1" fill="#33CC33"/>
<rect x="2" y="15" width="1" height="1" fill="#393939"/>
<rect x="3" y="14" width="1" height="1" fill="#868686"/>
<rect x="4" y="14" width="1" height="1" fill="#9999CC"/>
<rect x="5" y="14" width="1" height="1" fill="#9999CC"/>
<rect x="6" y="14" width="1" height="1" fill="#9999CC"/>
<rect x="7" y="14" width="1" height="1" fill="#9999CC"/>
<rect x="8" y="14" width="1" height="1" fill="#9999CC"/>
<rect x="9" y="14" width="1" height="1" fill="#9999CC"/>
<rect x="10" y="14" width="1" height="1" fill="#9999CC"/>
<rect x="11" y="14" width="1" height="1" fill="#9999CC"/>
<rect x="12" y="14" width="1" height="1" fill="#9999CC"/>
<rect x="13" y="14" width="1" height="1" fill="#9999CC"/>
<rect x="14" y="14" width="1" height="1" fill="#9999CC"/>
<rect x="15" y="14" width="1" height="1" fill="#999966"/>
<rect x="16" y="13" width="1" height="1" fill="#339900"/>
<rect x="17" y="15" width="1" height="1" fill="#424242"/>
<rect x="17" y="16" width="1" height="1" fill="#4D4D4D"/>
<rect x="17" y="17" width="1" height="1" fill="#424242"/>
<rect x="17" y="18" width="1" height="1" fill="#424242"/>
<rect x="17" y="19" width="1" height="1" fill="#424242"/>
<rect x="17" y="20" width="1" height="1" fill="#424242"/>
<rect x="18" y="17" width="1" height="1" fill="#008000"/>
<rect x="18" y="18" width="1" height="1" fill="#003300"/>
<rect x="18" y="19" width="1" height="1" fill="#0033CC"/>
<rect x="18" y="20" width="1" height="1" fill="#0033CC"/>
<rect x="19" y="17" width="1" height="1" fill="#336600"/>
<rect x="20" y="17" width="1" height="1" fill="#336600"/>
<rect x="19" y="18" width="1" height="1" fill="#003300"/>
<rect x="20" y="18" width="1" height="1" fill="#336600"/>
<rect x="19" y="19" width="1" height="1" fill="#0033CC"/>
<rect x="20" y="19" width="1" height="1" fill="#003300"/>
<rect x="19" y="20" width="1" height="1" fill="#0033CC"/>
<rect x="17" y="21" width="1" height="1" fill="#424242"/>
<rect x="18" y="21" width="1" height="1" fill="black"/>
<rect x="19" y="21" width="1" height="1" fill="black"/>
<rect x="20" y="20" width="1" height="1" fill="black"/>
<rect x="21" y="19" width="1" height="1" fill="black"/>
<rect x="21" y="18" width="1" height="1" fill="black"/>
<rect x="21" y="17" width="1" height="1" fill="#003300"/>
<rect x="22" y="17" width="1" height="1" fill="#C4C4C4"/>
<rect x="22" y="17" width="1" height="1" fill="black"/>
<rect x="17" y="22" width="1" height="1" fill="#424242"/>
<rect x="17" y="23" width="1" height="1" fill="#292929"/>
<rect x="17" y="24" width="1" height="1" fill="black"/>
<rect x="16" y="25" width="1" height="1" fill="black"/>
<rect x="2" y="16" width="1" height="1" fill="#393939"/>
<rect x="2" y="17" width="1" height="1" fill="#393939"/>
<rect x="2" y="18" width="1" height="1" fill="#393939"/>
<rect x="2" y="19" width="1" height="1" fill="#393939"/>
<rect x="2" y="20" width="1" height="1" fill="#393939"/>
<rect x="2" y="21" width="1" height="1" fill="#393939"/>
<rect x="2" y="22" width="1" height="1" fill="#393939"/>
<rect x="2" y="23" width="1" height="1" fill="#393939"/>
<rect x="3" y="24" width="1" height="1" fill="#393939"/>
<rect x="3" y="25" width="1" height="1" fill="#CC9999"/>
<rect x="2" y="25" width="1" height="1" fill="#393939"/>
<rect x="2" y="26" width="1" height="1" fill="#393939"/>
<rect x="2" y="27" width="1" height="1" fill="#393939"/>
<rect x="2" y="28" width="1" height="1" fill="#C4C4C4"/>
<rect x="2" y="28" width="1" height="1" fill="#393939"/>
<rect x="3" y="29" width="1" height="1" fill="#393939"/>
<rect x="4" y="30" width="1" height="1" fill="#222222"/>
<rect x="5" y="30" width="1" height="1" fill="#222222"/>
<rect x="6" y="31" width="1" height="1" fill="#222222"/>
<rect x="7" y="31" width="1" height="1" fill="#9999FF"/>
<rect x="8" y="31" width="1" height="1" fill="#868686"/>
<rect x="9" y="31" width="1" height="1" fill="#9999CC"/>
<rect x="10" y="31" width="1" height="1" fill="#868686"/>
<rect x="11" y="31" width="1" height="1" fill="#9999CC"/>
<rect x="12" y="31" width="1" height="1" fill="#868686"/>
<rect x="13" y="31" width="1" height="1" fill="#9999CC"/>
<rect x="14" y="31" width="1" height="1" fill="#868686"/>
<rect x="15" y="31" width="1" height="1" fill="#9999CC"/>
<rect x="16" y="31" width="1" height="1" fill="#666699"/>
<rect x="17" y="31" width="1" height="1" fill="#808080"/>
<rect x="18" y="31" width="1" height="1" fill="#666699"/>
<rect x="6" y="30" width="1" height="1" fill="#868686"/>
<rect x="7" y="30" width="1" height="1" fill="#D7D7D7"/>
<rect x="8" y="30" width="1" height="1" fill="#666633"/>
<rect x="9" y="30" width="1" height="1" fill="#B2B2B2"/>
<rect x="10" y="30" width="1" height="1" fill="#B2B2B2"/>
<rect x="11" y="30" width="1" height="1" fill="#ADA990"/>
<rect x="12" y="30" width="1" height="1" fill="#CBCBCB"/>
<rect x="13" y="30" width="1" height="1" fill="#9999CC"/>
<rect x="14" y="30" width="1" height="1" fill="#999966"/>
<rect x="15" y="30" width="1" height="1" fill="#996633"/>
<rect x="16" y="30" width="1" height="1" fill="#4D4D4D"/>
<rect x="17" y="30" width="1" height="1" fill="#CCCC99"/>
<rect x="4" y="29" width="1" height="1" fill="#666699"/>
<rect x="5" y="29" width="1" height="1" fill="#393939"/>
<rect x="6" y="29" width="1" height="1" fill="#C4C4C4"/>
<rect x="7" y="29" width="1" height="1" fill="#996633"/>
<rect x="8" y="29" width="1" height="1" fill="#B2B2B2"/>
<rect x="9" y="29" width="1" height="1" fill="#666633"/>
<rect x="10" y="29" width="1" height="1" fill="#E3E3E3"/>
<rect x="11" y="29" width="1" height="1" fill="#E3E3E3"/>
<rect x="12" y="29" width="1" height="1" fill="#9999CC"/>
<rect x="13" y="29" width="1" height="1" fill="#C4C4C4"/>
<rect x="15" y="29" width="1" height="1" fill="#C4C4C4"/>
<rect x="16" y="29" width="1" height="1" fill="#996633"/>
<rect x="17" y="29" width="1" height="1" fill="#808080"/>
<rect x="3" y="28" width="1" height="1" fill="#666699"/>
<rect x="4" y="28" width="1" height="1" fill="#666699"/>
<rect x="5" y="28" width="1" height="1" fill="#393939"/>
<rect x="6" y="28" width="1" height="1" fill="#161616"/>
<rect x="7" y="28" width="1" height="1" fill="#161616"/>
<rect x="8" y="28" width="1" height="1" fill="#666633"/>
<rect x="9" y="28" width="1" height="1" fill="#161616"/>
<rect x="10" y="28" width="1" height="1" fill="#C4C4C4"/>
<rect x="11" y="28" width="1" height="1" fill="#161616"/>
<rect x="12" y="28" width="1" height="1" fill="#C4C4C4"/>
<rect x="13" y="28" width="1" height="1" fill="#161616"/>
<rect x="14" y="28" width="1" height="1" fill="#996633"/>
<rect x="15" y="28" width="1" height="1" fill="#666699"/>
<rect x="16" y="28" width="1" height="1" fill="#996633"/>
<path d="M17 28H18V29H17V28Z" fill="#CCCC99"/>
<rect x="3" y="27" width="1" height="1" fill="#666699"/>
<rect x="4" y="27" width="1" height="1" fill="#808000"/>
<rect x="5" y="27" width="1" height="1" fill="#C4C4C4"/>
<rect x="6" y="27" width="1" height="1" fill="#EFD6C6"/>
<rect x="7" y="27" width="1" height="1" fill="#CCCCFF"/>
<rect x="8" y="27" width="1" height="1" fill="#EFD6C6"/>
<rect x="9" y="27" width="1" height="1" fill="#EAEAEA"/>
<rect x="10" y="27" width="1" height="1" fill="#EAEAEA"/>
<rect x="11" y="27" width="1" height="1" fill="#FCFCD0"/>
<rect x="12" y="27" width="1" height="1" fill="#EAEAEA"/>
<rect x="13" y="27" width="1" height="1" fill="#EFD6C6"/>
<rect x="14" y="27" width="1" height="1" fill="#CCCCFF"/>
<rect x="15" y="27" width="1" height="1" fill="#EFD6C6"/>
<rect x="16" y="27" width="1" height="1" fill="#CCCCFF"/>
<rect x="3" y="26" width="1" height="1" fill="#808000"/>
<rect x="4" y="26" width="1" height="1" fill="#EFD6C6"/>
<rect x="5" y="26" width="1" height="1" fill="#CC99CC"/>
<rect x="6" y="26" width="1" height="1" fill="#666666"/>
<rect x="7" y="26" width="1" height="1" fill="#663333"/>
<rect x="8" y="26" width="1" height="1" fill="#393939"/>
<rect x="9" y="26" width="1" height="1" fill="#666633"/>
<rect x="10" y="26" width="1" height="1" fill="#ADA990"/>
<rect x="11" y="26" width="1" height="1" fill="#ADA990"/>
<rect x="12" y="26" width="1" height="1" fill="#868686"/>
<rect x="13" y="26" width="1" height="1" fill="#663333"/>
<rect x="14" y="26" width="1" height="1" fill="#161616"/>
<rect x="15" y="26" width="1" height="1" fill="#393939"/>
<rect x="4" y="25" width="1" height="1" fill="black"/>
<rect x="5" y="25" width="1" height="1" fill="black"/>
<rect x="6" y="25" width="1" height="1" fill="black"/>
<rect x="7" y="25" width="1" height="1" fill="black"/>
<rect x="8" y="25" width="1" height="1" fill="black"/>
<rect x="9" y="25" width="1" height="1" fill="black"/>
<rect x="10" y="25" width="1" height="1" fill="black"/>
<rect x="11" y="25" width="1" height="1" fill="black"/>
<rect x="12" y="25" width="1" height="1" fill="black"/>
<rect x="13" y="25" width="1" height="1" fill="black"/>
<rect x="14" y="25" width="1" height="1" fill="black"/>
<rect x="15" y="25" width="1" height="1" fill="black"/>
<rect x="4" y="24" width="1" height="1" fill="#393939"/>
<rect x="5" y="24" width="1" height="1" fill="#B2B2B2"/>
<rect x="6" y="24" width="1" height="1" fill="#CCCCFF"/>
<rect x="7" y="24" width="1" height="1" fill="#DDDDDD"/>
<rect x="8" y="24" width="1" height="1" fill="#FFFFCC"/>
<rect x="9" y="24" width="1" height="1" fill="#FFFFCC"/>
<rect x="10" y="24" width="1" height="1" fill="#FFFFCC"/>
<rect x="11" y="24" width="1" height="1" fill="#FFFFCC"/>
<rect x="12" y="24" width="1" height="1" fill="#FFFFCC"/>
<rect x="13" y="24" width="1" height="1" fill="#FFFFCC"/>
<rect x="14" y="24" width="1" height="1" fill="#FFFFCC"/>
<rect x="15" y="24" width="1" height="1" fill="#DDDDDD"/>
<rect x="16" y="26" width="1" height="1" fill="#ADA990"/>
<rect x="17" y="27" width="1" height="1" fill="#F8F8F8"/>
<rect x="18" y="30" width="1" height="1" fill="#9999CC"/>
<rect x="19" y="31" width="1" height="1" fill="#424242"/>
<rect x="19" y="30" width="1" height="1" fill="#424242"/>
<rect x="18" y="29" width="1" height="1" fill="#808080"/>
<rect x="18" y="28" width="1" height="1" fill="#333366"/>
<rect x="18" y="27" width="1" height="1" fill="#333366"/>
<rect x="17" y="26" width="1" height="1" fill="#C0C0C0"/>
<rect x="16" y="24" width="1" height="1" fill="#9999CC"/>
<rect x="3" y="23" width="1" height="1" fill="#393939"/>
<rect x="4" y="23" width="1" height="1" fill="#B2B2B2"/>
<rect x="5" y="23" width="1" height="1" fill="#FFFFCC"/>
<rect x="6" y="23" width="1" height="1" fill="#33CCFF"/>
<rect x="7" y="23" width="1" height="1" fill="#3366CC"/>
<rect x="8" y="23" width="1" height="1" fill="#3366CC"/>
<rect x="9" y="23" width="1" height="1" fill="#3366CC"/>
<rect x="10" y="23" width="1" height="1" fill="#3366CC"/>
<rect x="11" y="23" width="1" height="1" fill="#3366CC"/>
<rect x="12" y="23" width="1" height="1" fill="#3366CC"/>
<rect x="13" y="23" width="1" height="1" fill="#3366CC"/>
<rect x="14" y="23" width="1" height="1" fill="#3366CC"/>
<rect x="15" y="23" width="1" height="1" fill="#3366CC"/>
<rect x="16" y="23" width="1" height="1" fill="#F8F8F8"/>
<rect x="3" y="22" width="1" height="1" fill="#B2B2B2"/>
<rect x="4" y="22" width="1" height="1" fill="#CCCCFF"/>
<rect x="5" y="22" width="1" height="1" fill="#FFFBF0"/>
<rect x="6" y="22" width="1" height="1" fill="#3399FF"/>
<rect x="7" y="22" width="1" height="1" fill="#33CCFF"/>
<rect x="8" y="22" width="1" height="1" fill="#33CCFF"/>
<rect x="9" y="22" width="1" height="1" fill="#33CCFF"/>
<rect x="10" y="22" width="1" height="1" fill="#33CCFF"/>
<rect x="11" y="22" width="1" height="1" fill="#33CCFF"/>
<rect x="12" y="22" width="1" height="1" fill="#0099FF"/>
<rect x="13" y="22" width="1" height="1" fill="#0099FF"/>
<rect x="14" y="22" width="1" height="1" fill="#0099FF"/>
<rect x="15" y="22" width="1" height="1" fill="#0066FF"/>
<rect x="16" y="22" width="1" height="1" fill="#F8F8F8"/>
<rect x="3" y="21" width="1" height="1" fill="#B2B2B2"/>
<rect x="4" y="21" width="1" height="1" fill="#B2B2B2"/>
<rect x="5" y="21" width="1" height="1" fill="#FFFBF0"/>
<rect x="6" y="21" width="1" height="1" fill="#6699CC"/>
<rect x="7" y="21" width="1" height="1" fill="#66CCFF"/>
<rect x="8" y="21" width="1" height="1" fill="#99FFFF"/>
<rect x="9" y="21" width="1" height="1" fill="#66FFFF"/>
<rect x="10" y="21" width="1" height="1" fill="#66FFFF"/>
<rect x="11" y="21" width="1" height="1" fill="#66CCFF"/>
<rect x="12" y="21" width="1" height="1" fill="#33CCFF"/>
<rect x="13" y="21" width="1" height="1" fill="#6699FF"/>
<rect x="14" y="21" width="1" height="1" fill="#0099FF"/>
<rect x="15" y="21" width="1" height="1" fill="#3366CC"/>
<rect x="16" y="21" width="1" height="1" fill="#F8F8F8"/>
<rect x="3" y="20" width="1" height="1" fill="#B2B2B2"/>
<rect x="4" y="20" width="1" height="1" fill="#CCCCFF"/>
<rect x="5" y="20" width="1" height="1" fill="#FFFBF0"/>
<rect x="6" y="20" width="1" height="1" fill="#6699CC"/>
<rect x="7" y="20" width="1" height="1" fill="#66FFFF"/>
<rect x="8" y="20" width="1" height="1" fill="#66FFFF"/>
<rect x="9" y="20" width="1" height="1" fill="#66FFFF"/>
<rect x="10" y="20" width="1" height="1" fill="#66FFFF"/>
<rect x="11" y="20" width="1" height="1" fill="#99FFFF"/>
<rect width="1" height="1" transform="matrix(1 0 0 -1 12 21)" fill="#33CCFF"/>
<rect x="13" y="20" width="1" height="1" fill="#33CCFF"/>
<rect x="14" y="20" width="1" height="1" fill="#0099FF"/>
<rect x="15" y="20" width="1" height="1" fill="#3366CC"/>
<rect x="16" y="20" width="1" height="1" fill="#CCFFFF"/>
<rect x="3" y="19" width="1" height="1" fill="#CCCCFF"/>
<rect x="4" y="19" width="1" height="1" fill="#B2B2B2"/>
<rect x="5" y="19" width="1" height="1" fill="#FFFBF0"/>
<rect x="6" y="19" width="1" height="1" fill="#6699CC"/>
<rect x="7" y="19" width="1" height="1" fill="#66FFFF"/>
<rect x="8" y="19" width="1" height="1" fill="#99FFFF"/>
<rect x="9" y="19" width="1" height="1" fill="#99FFFF"/>
<rect x="10" y="19" width="1" height="1" fill="#66FFFF"/>
<rect x="11" y="19" width="1" height="1" fill="#66FFFF"/>
<rect x="12" y="19" width="1" height="1" fill="#66CCFF"/>
<rect x="13" y="19" width="1" height="1" fill="#33CCFF"/>
<rect x="14" y="19" width="1" height="1" fill="#0099FF"/>
<rect x="15" y="19" width="1" height="1" fill="#3366CC"/>
<rect x="16" y="19" width="1" height="1" fill="#CCFFFF"/>
<rect x="3" y="18" width="1" height="1" fill="#B2B2B2"/>
<rect x="4" y="18" width="1" height="1" fill="#CCCCFF"/>
<rect x="5" y="18" width="1" height="1" fill="#FFFBF0"/>
<rect x="6" y="18" width="1" height="1" fill="#6666CC"/>
<rect x="7" y="18" width="1" height="1" fill="#99FFFF"/>
<rect x="8" y="18" width="1" height="1" fill="#99FFFF"/>
<rect x="9" y="18" width="1" height="1" fill="#99FFFF"/>
<rect x="10" y="18" width="1" height="1" fill="#66FFFF"/>
<rect x="11" y="18" width="1" height="1" fill="#99FFFF"/>
<rect x="12" y="18" width="1" height="1" fill="#66CCFF"/>
<rect x="13" y="18" width="1" height="1" fill="#33CCFF"/>
<rect x="14" y="18" width="1" height="1" fill="#3399FF"/>
<rect x="15" y="18" width="1" height="1" fill="#3366CC"/>
<rect x="16" y="18" width="1" height="1" fill="#99FFFF"/>
<rect x="3" y="17" width="1" height="1" fill="#C4C4C4"/>
<rect x="4" y="17" width="1" height="1" fill="#CCCCFF"/>
<rect x="5" y="17" width="1" height="1" fill="#F1F1F1"/>
<rect x="6" y="17" width="1" height="1" fill="#6666CC"/>
<rect x="7" y="17" width="1" height="1" fill="#66FFFF"/>
<rect x="8" y="17" width="1" height="1" fill="#99FFFF"/>
<rect x="9" y="17" width="1" height="1" fill="#99FFFF"/>
<rect x="10" y="17" width="1" height="1" fill="#99FFFF"/>
<rect x="11" y="17" width="1" height="1" fill="#66CCFF"/>
<rect x="12" y="17" width="1" height="1" fill="#66CCFF"/>
<rect x="13" y="17" width="1" height="1" fill="#3399FF"/>
<rect x="14" y="17" width="1" height="1" fill="#3399FF"/>
<rect x="15" y="17" width="1" height="1" fill="#0066FF"/>
<rect x="16" y="17" width="1" height="1" fill="#66FFFF"/>
<rect x="3" y="16" width="1" height="1" fill="#CCCCFF"/>
<rect x="4" y="16" width="1" height="1" fill="#F1F1F1"/>
<rect x="5" y="16" width="1" height="1" fill="#FFFFCC"/>
<rect x="6" y="16" width="1" height="1" fill="#C4C4C4"/>
<rect x="7" y="16" width="1" height="1" fill="#6666CC"/>
<rect x="8" y="16" width="1" height="1" fill="#000033"/>
<rect x="9" y="16" width="1" height="1" fill="#000033"/>
<rect x="10" y="16" width="1" height="1" fill="#000033"/>
<rect x="11" y="16" width="1" height="1" fill="#000033"/>
<rect x="12" y="16" width="1" height="1" fill="#000033"/>
<rect x="13" y="16" width="1" height="1" fill="#000033"/>
<rect x="14" y="16" width="1" height="1" fill="#000033"/>
<rect x="15" y="16" width="1" height="1" fill="#003366"/>
<rect x="16" y="16" width="1" height="1" fill="#CCECFF"/>
<rect x="3" y="15" width="1" height="1" fill="white"/>
<rect x="4" y="15" width="1" height="1" fill="white"/>
<rect x="5" y="15" width="1" height="1" fill="white"/>
<rect x="6" y="15" width="1" height="1" fill="white"/>
<rect x="7" y="15" width="1" height="1" fill="#FFFFCC"/>
<rect x="8" y="15" width="1" height="1" fill="#FFFFCC"/>
<rect x="9" y="15" width="1" height="1" fill="#FFFFCC"/>
<rect x="10" y="15" width="1" height="1" fill="#FFFFCC"/>
<rect x="11" y="15" width="1" height="1" fill="#FFFFCC"/>
<rect x="12" y="15" width="1" height="1" fill="#FFFFCC"/>
<rect x="13" y="15" width="1" height="1" fill="white"/>
<rect x="14" y="15" width="1" height="1" fill="white"/>
<rect x="15" y="15" width="1" height="1" fill="white"/>
<rect x="16" y="15" width="1" height="1" fill="#CCCCFF"/>
<rect x="9" width="1" height="1" fill="#33CC33"/>
<rect x="10" width="1" height="1" fill="#33CC33"/>
<rect x="11" width="1" height="1" fill="#33CC33"/>
<rect x="12" width="1" height="1" fill="#33CC33"/>
<rect x="13" width="1" height="1" fill="#33CC33"/>
<rect x="14" width="1" height="1" fill="#33CC33"/>
<rect x="15" width="1" height="1" fill="#33CC33"/>
<rect x="16" y="1" width="1" height="1" fill="#339900"/>
<rect x="17" y="1" width="1" height="1" fill="#3366FF"/>
<rect x="18" y="1" width="1" height="1" fill="#666699"/>
<rect x="19" y="1" width="1" height="1" fill="#666699"/>
<rect x="20" y="1" width="1" height="1" fill="#666699"/>
<rect x="21" y="1" width="1" height="1" fill="#666699"/>
<rect x="22" y="1" width="1" height="1" fill="#666699"/>
<rect x="23" y="1" width="1" height="1" fill="#666699"/>
<rect x="24" y="1" width="1" height="1" fill="#666699"/>
<rect x="25" y="1" width="1" height="1" fill="#666699"/>
<rect x="26" y="1" width="1" height="1" fill="#666699"/>
<rect x="27" y="1" width="1" height="1" fill="#666699"/>
<rect x="28" y="1" width="1" height="1" fill="#666699"/>
<rect x="29" y="1" width="1" height="1" fill="#666699"/>
<rect x="30" y="2" width="1" height="1" fill="#1C1C1C"/>
<rect x="30" y="3" width="1" height="1" fill="#1C1C1C"/>
<rect x="30" y="4" width="1" height="1" fill="#1C1C1C"/>
<rect x="30" y="5" width="1" height="1" fill="#1C1C1C"/>
<rect x="30" y="6" width="1" height="1" fill="#1C1C1C"/>
<rect x="30" y="7" width="1" height="1" fill="#1C1C1C"/>
<rect x="30" y="8" width="1" height="1" fill="#1C1C1C"/>
<rect x="30" y="9" width="1" height="1" fill="#1C1C1C"/>
<rect x="29" y="2" width="1" height="1" fill="#CCCCFF"/>
<rect x="29" y="3" width="1" height="1" fill="#CCECFF"/>
<rect x="29" y="4" width="1" height="1" fill="#66FFFF"/>
<rect x="29" y="5" width="1" height="1" fill="#99FFFF"/>
<rect x="29" y="6" width="1" height="1" fill="#CCFFFF"/>
<rect x="29" y="7" width="1" height="1" fill="#F8F8F8"/>
<rect x="29" y="8" width="1" height="1" fill="white"/>
<rect x="29" y="9" width="1" height="1" fill="#CCCCFF"/>
<rect x="28" y="2" width="1" height="1" fill="#FFFFCC"/>
<rect x="28" y="3" width="1" height="1" fill="#4D4D4D"/>
<rect x="28" y="4" width="1" height="1" fill="#3366CC"/>
<rect x="28" y="5" width="1" height="1" fill="#3366CC"/>
<rect x="28" y="6" width="1" height="1" fill="#3366CC"/>
<rect x="28" y="7" width="1" height="1" fill="#0066CC"/>
<rect x="28" y="8" width="1" height="1" fill="#3366CC"/>
<rect x="28" y="9" width="1" height="1" fill="#FFFFCC"/>
<rect x="27" y="2" width="1" height="1" fill="#F1F1F1"/>
<rect x="27" y="3" width="1" height="1" fill="#4D4D4D"/>
<rect x="27" y="4" width="1" height="1" fill="#6699FF"/>
<rect x="27" y="5" width="1" height="1" fill="#33CCFF"/>
<rect x="27" y="6" width="1" height="1" fill="#33CCFF"/>
<rect x="27" y="7" width="1" height="1" fill="#6699FF"/>
<rect x="27" y="8" width="1" height="1" fill="#3366CC"/>
<rect x="27" y="9" width="1" height="1" fill="#F1F1F1"/>
<rect x="26" y="2" width="1" height="1" fill="#F1F1F1"/>
<rect x="26" y="3" width="1" height="1" fill="#393939"/>
<rect x="26" y="4" width="1" height="1" fill="#66CCFF"/>
<rect x="26" y="5" width="1" height="1" fill="#66CCFF"/>
<rect x="26" y="6" width="1" height="1" fill="#66CCFF"/>
<rect x="26" y="7" width="1" height="1" fill="#33CCFF"/>
<rect x="26" y="8" width="1" height="1" fill="#3399FF"/>
<rect x="26" y="9" width="1" height="1" fill="#FFFFCC"/>
<rect x="25" y="2" width="1" height="1" fill="#F1F1F1"/>
<rect x="25" y="3" width="1" height="1" fill="#393939"/>
<rect x="25" y="4" width="1" height="1" fill="#66FFFF"/>
<rect x="25" y="5" width="1" height="1" fill="#99FFFF"/>
<rect x="25" y="6" width="1" height="1" fill="#66FFFF"/>
<rect x="25" y="7" width="1" height="1" fill="#66CCFF"/>
<rect x="25" y="8" width="1" height="1" fill="#6699FF"/>
<rect x="25" y="9" width="1" height="1" fill="#F1F1F1"/>
<rect x="24" y="2" width="1" height="1" fill="#F1F1F1"/>
<rect x="24" y="3" width="1" height="1" fill="#393939"/>
<rect x="24" y="4" width="1" height="1" fill="#99FFFF"/>
<rect x="24" y="5" width="1" height="1" fill="#66FFFF"/>
<rect x="24" y="6" width="1" height="1" fill="#66FFFF"/>
<rect x="24" y="7" width="1" height="1" fill="#66CCFF"/>
<rect x="24" y="8" width="1" height="1" fill="#6699FF"/>
<rect x="24" y="9" width="1" height="1" fill="#FFFFCC"/>
<rect x="23" y="2" width="1" height="1" fill="#F1F1F1"/>
<rect x="23" y="3" width="1" height="1" fill="#333333"/>
<rect x="23" y="4" width="1" height="1" fill="#99FFFF"/>
<rect x="23" y="5" width="1" height="1" fill="#99FFFF"/>
<rect x="23" y="6" width="1" height="1" fill="#99FFFF"/>
<rect x="23" y="7" width="1" height="1" fill="#66CCFF"/>
<rect x="23" y="8" width="1" height="1" fill="#3399FF"/>
<rect x="23" y="9" width="1" height="1" fill="#F1F1F1"/>
<rect x="22" y="2" width="1" height="1" fill="#F1F1F1"/>
<rect x="22" y="3" width="1" height="1" fill="#996699"/>
<rect x="22" y="4" width="1" height="1" fill="#99FFFF"/>
<rect x="22" y="5" width="1" height="1" fill="#99FFFF"/>
<rect x="22" y="6" width="1" height="1" fill="#66FFFF"/>
<rect x="22" y="7" width="1" height="1" fill="#66CCFF"/>
<rect x="22" y="8" width="1" height="1" fill="#3366CC"/>
<rect x="22" y="9" width="1" height="1" fill="#FFFFCC"/>
<rect x="21" y="2" width="1" height="1" fill="#F1F1F1"/>
<rect x="21" y="3" width="1" height="1" fill="#6699CC"/>
<rect x="21" y="4" width="1" height="1" fill="#6666CC"/>
<rect x="21" y="5" width="1" height="1" fill="#6666CC"/>
<rect x="21" y="6" width="1" height="1" fill="#6666CC"/>
<rect x="21" y="7" width="1" height="1" fill="#6666CC"/>
<rect x="21" y="8" width="1" height="1" fill="#3366CC"/>
<rect x="21" y="9" width="1" height="1" fill="#F1F1F1"/>
<rect x="20" y="2" width="1" height="1" fill="white"/>
<rect x="20" y="3" width="1" height="1" fill="white"/>
<rect x="20" y="4" width="1" height="1" fill="white"/>
<rect x="20" y="5" width="1" height="1" fill="white"/>
<rect x="20" y="6" width="1" height="1" fill="white"/>
<rect x="20" y="7" width="1" height="1" fill="white"/>
<rect x="20" y="8" width="1" height="1" fill="white"/>
<rect x="20" y="9" width="1" height="1" fill="#CCCCFF"/>
<rect x="19" y="2" width="1" height="1" fill="white"/>
<rect x="19" y="3" width="1" height="1" fill="#CCCCCC"/>
<rect x="19" y="4" width="1" height="1" fill="#CCCCFF"/>
<rect x="19" y="5" width="1" height="1" fill="#CCCCCC"/>
<rect x="19" y="6" width="1" height="1" fill="#CCCCFF"/>
<rect x="19" y="7" width="1" height="1" fill="#CCCCCC"/>
<rect x="19" y="8" width="1" height="1" fill="#CCCCFF"/>
<rect x="19" y="9" width="1" height="1" fill="#1C1C1C"/>
<rect x="18" y="2" width="1" height="1" fill="#868686"/>
<rect x="18" y="3" width="1" height="1" fill="#969696"/>
<rect x="18" y="4" width="1" height="1" fill="#868686"/>
<rect x="18" y="5" width="1" height="1" fill="#969696"/>
<rect x="18" y="6" width="1" height="1" fill="#868686"/>
<rect x="18" y="7" width="1" height="1" fill="#969696"/>
<rect x="18" y="8" width="1" height="1" fill="#666699"/>
<rect x="18" y="9" width="1" height="1" fill="#393939"/>
<rect x="17" y="2" width="1" height="1" fill="#393939"/>
<rect x="16" y="2" width="1" height="1" fill="#336633"/>
<rect x="17" y="3" width="1" height="1" fill="#393939"/>
<rect x="17" y="4" width="1" height="1" fill="#393939"/>
<rect x="17" y="5" width="1" height="1" fill="#393939"/>
<rect x="17" y="6" width="1" height="1" fill="#393939"/>
<rect x="17" y="7" width="1" height="1" fill="#393939"/>
<rect x="17" y="8" width="1" height="1" fill="#393939"/>
<rect x="17" y="9" width="1" height="1" fill="#3366FF"/>
<rect x="15" y="2" width="1" height="1" fill="#339900"/>
<rect x="16" y="3" width="1" height="1" fill="#3366FF"/>
<rect x="16" y="4" width="1" height="1" fill="#0099FF"/>
<rect x="16" y="5" width="1" height="1" fill="#0099FF"/>
<rect x="16" y="6" width="1" height="1" fill="#008000"/>
<rect x="16" y="7" width="1" height="1" fill="#336600"/>
<rect x="16" y="8" width="1" height="1" fill="#3366FF"/>
<rect x="16" y="9" width="1" height="1" fill="#3366FF"/>
<rect x="14" y="2" width="1" height="1" fill="#339900"/>
<rect x="15" y="3" width="1" height="1" fill="#336633"/>
<rect x="14" y="3" width="1" height="1" fill="#336633"/>
<rect x="15" y="4" width="1" height="1" fill="#3366FF"/>
<rect x="15" y="5" width="1" height="1" fill="#008000"/>
<rect x="15" y="6" width="1" height="1" fill="#33CC33"/>
<rect x="15" y="7" width="1" height="1" fill="#336600"/>
<rect x="15" y="8" width="1" height="1" fill="#336600"/>
<rect x="15" y="9" width="1" height="1" fill="#3366FF"/>
<rect x="15" y="10" width="1" height="1" fill="#3366FF"/>
<rect x="13" y="2" width="1" height="1" fill="#339900"/>
<rect x="13" y="3" width="1" height="1" fill="#339900"/>
<rect x="14" y="4" width="1" height="1" fill="#3366FF"/>
<rect x="14" y="5" width="1" height="1" fill="#33CCFF"/>
<rect x="14" y="6" width="1" height="1" fill="#008000"/>
<rect x="14" y="7" width="1" height="1" fill="#33CC33"/>
<rect x="14" y="8" width="1" height="1" fill="#008000"/>
<rect x="14" y="9" width="1" height="1" fill="#0099FF"/>
<rect x="14" y="10" width="1" height="1" fill="#008000"/>
<rect x="12" y="2" width="1" height="1" fill="#339900"/>
<rect x="13" y="5" width="1" height="1" fill="#0099FF"/>
<rect x="13" y="6" width="1" height="1" fill="#33CCFF"/>
<rect x="13" y="7" width="1" height="1" fill="#008000"/>
<rect x="13" y="8" width="1" height="1" fill="#0099FF"/>
<rect x="13" y="9" width="1" height="1" fill="#0099FF"/>
<rect x="12" y="3" width="1" height="1" fill="#336633"/>
<rect x="12" y="3" width="1" height="1" fill="#336633"/>
<rect x="13" y="4" width="1" height="1" fill="#336633"/>
<rect x="12" y="4" width="1" height="1" fill="#33CCFF"/>
<rect x="12" y="5" width="1" height="1" fill="#33CCFF"/>
<rect x="12" y="6" width="1" height="1" fill="#0099FF"/>
<rect x="12" y="7" width="1" height="1" fill="#33CCFF"/>
<rect x="12" y="8" width="1" height="1" fill="#336600"/>
<rect x="12" y="9" width="1" height="1" fill="#336600"/>
<rect x="13" y="10" width="1" height="1" fill="#0099FF"/>
<rect x="12" y="10" width="1" height="1" fill="#0099FF"/>
<rect x="11" y="2" width="1" height="1" fill="#33CC33"/>
<rect x="11" y="3" width="1" height="1" fill="#336633"/>
<rect x="11" y="4" width="1" height="1" fill="#0099FF"/>
<rect x="11" y="5" width="1" height="1" fill="#33CCFF"/>
<rect x="11" y="6" width="1" height="1" fill="#33CCFF"/>
<rect x="11" y="7" width="1" height="1" fill="#0099FF"/>
<rect x="11" y="8" width="1" height="1" fill="#008000"/>
<rect x="11" y="9" width="1" height="1" fill="#008000"/>
<rect x="11" y="10" width="1" height="1" fill="#33CCFF"/>
<rect x="10" y="2" width="1" height="1" fill="#33CC33"/>
<rect x="10" y="3" width="1" height="1" fill="#339900"/>
<rect x="10" y="4" width="1" height="1" fill="#336633"/>
<rect x="10" y="5" width="1" height="1" fill="#0099FF"/>
<rect x="10" y="6" width="1" height="1" fill="#33CCFF"/>
<rect x="10" y="7" width="1" height="1" fill="#33CCFF"/>
<rect x="10" y="8" width="1" height="1" fill="#33CCFF"/>
<rect x="10" y="9" width="1" height="1" fill="#33CCFF"/>
<rect x="10" y="10" width="1" height="1" fill="#0099FF"/>
<rect x="9" y="2" width="1" height="1" fill="#33FF66"/>
<rect x="9" y="3" width="1" height="1" fill="#33CC33"/>
<rect x="9" y="4" width="1" height="1" fill="#339900"/>
<rect x="9" y="5" width="1" height="1" fill="#336633"/>
<rect x="9" y="6" width="1" height="1" fill="#0099FF"/>
<rect x="9" y="7" width="1" height="1" fill="#33CCFF"/>
<rect x="9" y="8" width="1" height="1" fill="#33CCFF"/>
<rect x="9" y="9" width="1" height="1" fill="#0099FF"/>
<rect x="9" y="10" width="1" height="1" fill="#33CCFF"/>
<rect x="8" y="2" width="1" height="1" fill="#99FF99"/>
<rect x="15" y="1" width="1" height="1" fill="#339900"/>
<rect x="14" y="1" width="1" height="1" fill="#339900"/>
<rect x="13" y="1" width="1" height="1" fill="#33CC33"/>
<rect x="12" y="1" width="1" height="1" fill="#33FF66"/>
<rect x="11" y="1" width="1" height="1" fill="#CCFFCC"/>
<rect x="10" y="1" width="1" height="1" fill="#CCFFCC"/>
<rect x="9" y="1" width="1" height="1" fill="#CCFFCC"/>
<rect x="8" y="1" width="1" height="1" fill="white"/>
<rect x="8" y="3" width="1" height="1" fill="#33CC33"/>
<rect x="8" y="4" width="1" height="1" fill="#339900"/>
<rect x="8" y="5" width="1" height="1" fill="#339900"/>
<rect x="8" y="6" width="1" height="1" fill="#336633"/>
<rect x="8" y="7" width="1" height="1" fill="#0099FF"/>
<rect x="8" y="8" width="1" height="1" fill="#33CCFF"/>
<rect x="8" y="9" width="1" height="1" fill="#33CCFF"/>
<rect x="8" y="10" width="1" height="1" fill="#0099FF"/>
<rect x="7" y="2" width="1" height="1" fill="#CCFFCC"/>
<rect x="7" y="3" width="1" height="1" fill="#33FF66"/>
<rect x="7" y="4" width="1" height="1" fill="#33CC33"/>
<rect x="7" y="5" width="1" height="1" fill="#339900"/>
<rect x="7" y="6" width="1" height="1" fill="#339900"/>
<rect x="7" y="7" width="1" height="1" fill="#336633"/>
<rect x="7" y="8" width="1" height="1" fill="#0099FF"/>
<rect x="7" y="9" width="1" height="1" fill="#33CCFF"/>
<rect x="7" y="10" width="1" height="1" fill="#33CCFF"/>
<rect x="6" y="2" width="1" height="1" fill="white"/>
<rect x="6" y="3" width="1" height="1" fill="#99FF99"/>
<rect x="6" y="4" width="1" height="1" fill="#33CC33"/>
<rect x="6" y="5" width="1" height="1" fill="#33CC33"/>
<rect x="6" y="6" width="1" height="1" fill="#33CC33"/>
<rect x="6" y="7" width="1" height="1" fill="#CCFFCC"/>
<rect x="6" y="8" width="1" height="1" fill="#336600"/>
<rect x="6" y="9" width="1" height="1" fill="#33CCFF"/>
<rect x="6" y="10" width="1" height="1" fill="#33CCFF"/>
<rect x="5" y="3" width="1" height="1" fill="#CCFFCC"/>
<rect x="5" y="4" width="1" height="1" fill="#99FF99"/>
<rect x="5" y="5" width="1" height="1" fill="#33FF66"/>
<rect x="5" y="6" width="1" height="1" fill="#CCFFCC"/>
<rect x="5" y="7" width="1" height="1" fill="#336600"/>
<rect x="5" y="8" width="1" height="1" fill="#33FFFF"/>
<rect x="5" y="9" width="1" height="1" fill="#33CCFF"/>
<rect x="5" y="10" width="1" height="1" fill="#33CCCC"/>
<rect x="4" y="3" width="1" height="1" fill="white"/>
<rect x="4" y="4" width="1" height="1" fill="#CCFFCC"/>
<rect x="4" y="5" width="1" height="1" fill="#66FF66"/>
<rect x="4" y="6" width="1" height="1" fill="#336600"/>
<rect x="4" y="7" width="1" height="1" fill="#99FFFF"/>
<rect x="4" y="8" width="1" height="1" fill="#33FFFF"/>
<rect x="4" y="9" width="1" height="1" fill="#33FFFF"/>
<rect x="3" y="4" width="1" height="1" fill="white"/>
<rect x="3" y="5" width="1" height="1" fill="#336600"/>
<rect x="3" y="6" width="1" height="1" fill="#C0DCC0"/>
<rect x="3" y="7" width="1" height="1" fill="#CCFFFF"/>
<rect x="3" y="8" width="1" height="1" fill="#CCFFFF"/>
<rect x="3" y="9" width="1" height="1" fill="#33FFFF"/>
<rect x="2" y="6" width="1" height="1" fill="white"/>
<rect x="2" y="7" width="1" height="1" fill="white"/>
<rect x="2" y="8" width="1" height="1" fill="#CCFFFF"/>
<rect x="2" y="9" width="1" height="1" fill="#CCFFFF"/>
<rect x="2" y="10" width="1" height="1" fill="#CCFFFF"/>
<rect x="1" y="8" width="1" height="1" fill="white"/>
<rect x="1" y="9" width="1" height="1" fill="white"/>
<rect x="1" y="10" width="1" height="1" fill="#CCFFFF"/>
<rect x="28" y="10" width="1" height="1" fill="#1C1C1C"/>
<rect x="27" y="10" width="1" height="1" fill="#1C1C1C"/>
<rect x="26" y="10" width="1" height="1" fill="#1C1C1C"/>
<rect x="25" y="10" width="1" height="1" fill="#1C1C1C"/>
<rect x="24" y="10" width="1" height="1" fill="#1C1C1C"/>
<rect x="23" y="10" width="1" height="1" fill="#1C1C1C"/>
<rect x="22" y="10" width="1" height="1" fill="#1C1C1C"/>
<rect x="21" y="10" width="1" height="1" fill="#1C1C1C"/>
<rect x="20" y="10" width="1" height="1" fill="#040404"/>
<rect x="19" y="10" width="1" height="1" fill="#663333"/>
<rect x="18" y="10" width="1" height="1" fill="#777777"/>
<rect x="17" y="10" width="1" height="1" fill="#4D4D4D"/>
<rect x="16" y="10" width="1" height="1" fill="#008000"/>
<rect x="15" y="11" width="1" height="1" fill="#008000"/>
<rect x="14" y="11" width="1" height="1" fill="#CCFFCC"/>
<rect x="13" y="11" width="1" height="1" fill="#008000"/>
<rect x="12" y="11" width="1" height="1" fill="#0099FF"/>
<rect x="10" y="11" width="1" height="1" fill="#33CCFF"/>
<rect x="9" y="11" width="1" height="1" fill="#0099FF"/>
<rect x="8" y="11" width="1" height="1" fill="#33CCFF"/>
<rect x="7" y="11" width="1" height="1" fill="#0099FF"/>
<rect x="6" y="11" width="1" height="1" fill="#006600"/>
<rect x="5" y="11" width="1" height="1" fill="#006600"/>
<rect x="4" y="11" width="1" height="1" fill="#CCFFCC"/>
<rect x="3" y="11" width="1" height="1" fill="#C4C4C4"/>
<rect x="1" y="11" width="1" height="1" fill="#CCFFFF"/>
<rect x="28" y="11" width="1" height="1" fill="black"/>
<rect x="27" y="11" width="1" height="1" fill="black"/>
<rect x="29" y="11" width="1" height="1" fill="#999966"/>
<rect x="26" y="11" width="1" height="1" fill="#424242"/>
<rect x="25" y="11" width="1" height="1" fill="#777777"/>
<rect x="24" y="11" width="1" height="1" fill="#666633"/>
<rect x="23" y="11" width="1" height="1" fill="#080808"/>
<rect x="22" y="11" width="1" height="1" fill="#330000"/>
<rect x="21" y="11" width="1" height="1" fill="#393939"/>
<rect x="20" y="11" width="1" height="1" fill="#CC99CC"/>
<rect x="19" y="11" width="1" height="1" fill="#CCCC66"/>
<rect x="18" y="11" width="1" height="1" fill="#777777"/>
<rect x="17" y="11" width="1" height="1" fill="#333333"/>
<rect x="16" y="11" width="1" height="1" fill="#339900"/>
<rect x="15" y="12" width="1" height="1" fill="#33CC66"/>
<rect x="14" y="12" width="1" height="1" fill="#33CC66"/>
<rect x="12" y="12" width="1" height="1" fill="#0099FF"/>
<rect x="11" y="12" width="1" height="1" fill="#0099FF"/>
<rect x="10" y="12" width="1" height="1" fill="#0099FF"/>
<rect x="9" y="12" width="1" height="1" fill="#33CCFF"/>
<rect x="8" y="12" width="1" height="1" fill="#0099FF"/>
<rect x="7" y="12" width="1" height="1" fill="#33CCFF"/>
<rect x="6" y="12" width="1" height="1" fill="#006600"/>
<rect x="5" y="12" width="1" height="1" fill="#33FF66"/>
<rect x="4" y="12" width="1" height="1" fill="#CCFFCC"/>
<rect x="3" y="12" width="1" height="1" fill="#CCFFCC"/>
<rect x="2" y="12" width="1" height="1" fill="#C4C4C4"/>
<rect x="29" y="10" width="1" height="1" fill="#1C1C1C"/>
<rect x="30" y="11" width="1" height="1" fill="#333366"/>
<rect x="28" y="12" width="1" height="1" fill="#D7D7D7"/>
<rect x="27" y="12" width="1" height="1" fill="#CBCBCB"/>
<rect x="29" y="12" width="1" height="1" fill="#F8F8F8"/>
<rect x="26" y="12" width="1" height="1" fill="#EFD6C6"/>
<rect x="25" y="12" width="1" height="1" fill="#FFFFCC"/>
<rect x="24" y="12" width="1" height="1" fill="#E7E7D6"/>
<rect x="23" y="12" width="1" height="1" fill="#EFD6C6"/>
<rect x="22" y="12" width="1" height="1" fill="#EFD6C6"/>
<rect x="21" y="12" width="1" height="1" fill="#CCCCCC"/>
<rect x="20" y="12" width="1" height="1" fill="#ADA990"/>
<rect x="19" y="12" width="1" height="1" fill="#777777"/>
<rect x="18" y="12" width="1" height="1" fill="#666699"/>
<rect x="17" y="12" width="1" height="1" fill="#333333"/>
<rect x="16" y="12" width="1" height="1" fill="#33CC66"/>
<rect x="15" y="13" width="1" height="1" fill="#33CC66"/>
<rect x="14" y="13" width="1" height="1" fill="#336600"/>
<rect x="13" y="12" width="1" height="1" fill="#008000"/>
<rect x="13" y="13" width="1" height="1" fill="#3366FF"/>
<rect x="12" y="13" width="1" height="1" fill="#0099FF"/>
<rect x="11" y="13" width="1" height="1" fill="#0099FF"/>
<rect x="10" y="13" width="1" height="1" fill="#0099FF"/>
<rect x="9" y="13" width="1" height="1" fill="#0099FF"/>
<rect x="8" y="13" width="1" height="1" fill="#33CCFF"/>
<rect x="7" y="13" width="1" height="1" fill="#0099FF"/>
<rect x="6" y="13" width="1" height="1" fill="#006600"/>
<rect x="5" y="13" width="1" height="1" fill="#33FF66"/>
<rect x="4" y="13" width="1" height="1" fill="#66FF66"/>
<rect x="3" y="13" width="1" height="1" fill="#66FF66"/>
<rect x="2" y="13" width="1" height="1" fill="#CCFFCC"/>
<rect x="1" y="13" width="1" height="1" fill="white"/>
<rect x="30" y="12" width="1" height="1" fill="#CCCCCC"/>
<rect x="28" y="13" width="1" height="1" fill="#666666"/>
<rect x="27" y="13" width="1" height="1" fill="#663300"/>
<rect x="29" y="13" width="1" height="1" fill="#996633"/>
<rect x="26" y="13" width="1" height="1" fill="#555555"/>
<rect x="25" y="13" width="1" height="1" fill="#5F5F5F"/>
<rect x="24" y="13" width="1" height="1" fill="#666633"/>
<rect x="23" y="13" width="1" height="1" fill="#424242"/>
<rect x="22" y="13" width="1" height="1" fill="#333300"/>
<rect x="21" y="13" width="1" height="1" fill="#1C1C1C"/>
<rect x="20" y="13" width="1" height="1" fill="#1C1C1C"/>
<rect x="19" y="13" width="1" height="1" fill="#666699"/>
<rect x="18" y="13" width="1" height="1" fill="#333333"/>
<rect x="17" y="13" width="1" height="1" fill="#339900"/>
<rect x="30" y="13" width="1" height="1" fill="#1C1C1C"/>
<rect x="28" y="15" width="1" height="1" fill="#969696"/>
<rect x="27" y="15" width="1" height="1" fill="#868686"/>
<rect x="29" y="15" width="1" height="1" fill="#666699"/>
<rect x="26" y="15" width="1" height="1" fill="#DDDDDD"/>
<rect x="25" y="15" width="1" height="1" fill="#868686"/>
<rect x="24" y="15" width="1" height="1" fill="#D7D7D7"/>
<rect x="23" y="15" width="1" height="1" fill="#C0C0C0"/>
<rect x="22" y="15" width="1" height="1" fill="#B2B2B2"/>
<rect x="21" y="15" width="1" height="1" fill="#292929"/>
<rect x="20" y="15" width="1" height="1" fill="#008000"/>
<rect x="19" y="15" width="1" height="1" fill="#336600"/>
<rect x="18" y="15" width="1" height="1" fill="#008000"/>
<rect x="30" y="15" width="1" height="1" fill="#868686"/>
<rect x="28" y="16" width="1" height="1" fill="#292929"/>
<rect x="27" y="16" width="1" height="1" fill="#292929"/>
<rect x="29" y="16" width="1" height="1" fill="#292929"/>
<rect x="26" y="16" width="1" height="1" fill="#292929"/>
<rect x="25" y="16" width="1" height="1" fill="#292929"/>
<rect x="24" y="16" width="1" height="1" fill="#292929"/>
<rect x="23" y="16" width="1" height="1" fill="#292929"/>
<rect x="22" y="16" width="1" height="1" fill="#292929"/>
<rect x="21" y="16" width="1" height="1" fill="#336600"/>
<rect x="20" y="16" width="1" height="1" fill="#336600"/>
<rect x="19" y="16" width="1" height="1" fill="#008000"/>
<rect x="18" y="16" width="1" height="1" fill="#336600"/>
<rect x="30" y="16" width="1" height="1" fill="#292929"/>
<rect x="31" y="12" width="1" height="1" fill="#333366"/>
<rect x="31" y="13" width="1" height="1" fill="#333366"/>
<rect x="16" y="14" width="1" height="1" fill="#666699"/>
<rect x="28" y="14" width="1" height="1" fill="#999933"/>
<rect x="27" y="14" width="1" height="1" fill="#969696"/>
<rect x="29" y="14" width="1" height="1" fill="#4D4D4D"/>
<rect x="26" y="14" width="1" height="1" fill="#CCCCFF"/>
<rect x="25" y="14" width="1" height="1" fill="#CCCCCC"/>
<rect x="24" y="14" width="1" height="1" fill="#CCCCCC"/>
<rect x="23" y="14" width="1" height="1" fill="#666633"/>
<rect x="22" y="14" width="1" height="1" fill="#CCCC99"/>
<rect x="21" y="14" width="1" height="1" fill="#969696"/>
<rect x="20" y="14" width="1" height="1" fill="#1C1C1C"/>
<rect x="19" y="14" width="1" height="1" fill="#1C1C1C"/>
<rect x="18" y="14" width="1" height="1" fill="#008000"/>
<rect x="17" y="14" width="1" height="1" fill="#339900"/>
<rect x="30" y="14" width="1" height="1" fill="#C0C0C0"/>
<rect x="31" y="14" width="1" height="1" fill="#333366"/>
<rect x="31" y="15" width="1" height="1" fill="#666666"/>
<rect x="31" y="16" width="1" height="1" fill="#292929"/>
<rect x="25" y="17" width="1" height="1" fill="#66CCFF"/>
<rect x="26" y="17" width="1" height="1" fill="#99CCCC"/>
<rect x="26" y="18" width="1" height="1" fill="#000033"/>
<rect x="25" y="18" width="1" height="1" fill="#000033"/>
<rect x="27" y="18" width="1" height="1" fill="#66CCFF"/>
<rect x="28" y="18" width="1" height="1" fill="#99CCCC"/>
<rect x="28" y="19" width="1" height="1" fill="#000033"/>
<rect x="27" y="19" width="1" height="1" fill="#000033"/>
<rect x="29" y="19" width="1" height="1" fill="#66CCFF"/>
<rect x="30" y="19" width="1" height="1" fill="#99CCCC"/>
<rect x="31" y="20" width="1" height="1" fill="#99CCCC"/>
<rect x="30" y="20" width="1" height="1" fill="#66CCFF"/>
<rect x="29" y="20" width="1" height="1" fill="#99CCCC"/>
<rect x="28" y="20" width="1" height="1" fill="#66CCFF"/>
<rect x="27" y="20" width="1" height="1" fill="#C4C4C4"/>
<rect x="27" y="20" width="1" height="1" fill="#99CCCC"/>
<rect x="26" y="20" width="1" height="1" fill="#66CCFF"/>
<rect x="25" y="20" width="1" height="1" fill="#99CCCC"/>
<rect x="24" y="20" width="1" height="1" fill="#66CCFF"/>
<rect x="23" y="20" width="1" height="1" fill="#99CCCC"/>
<rect x="23" y="21" width="1" height="1" fill="#000033"/>
<rect x="24" y="21" width="1" height="1" fill="#000033"/>
<rect x="25" y="21" width="1" height="1" fill="#66CCFF"/>
<rect x="26" y="21" width="1" height="1" fill="#99CCCC"/>
<rect x="26" y="22" width="1" height="1" fill="#000033"/>
<rect x="25" y="22" width="1" height="1" fill="#000033"/>
<rect x="27" y="21" width="1" height="1" fill="#000033"/>
<rect x="28" y="21" width="1" height="1" fill="#000033"/>
<rect x="29" y="21" width="1" height="1" fill="#000033"/>
<rect x="30" y="21" width="1" height="1" fill="#000033"/>
<rect x="31" y="21" width="1" height="1" fill="#000033"/>
<rect x="27" y="22" width="1" height="1" fill="#66CCFF"/>
<rect x="28" y="22" width="1" height="1" fill="#99CCCC"/>
<rect x="27" y="23" width="1" height="1" fill="#000033"/>
<rect x="28" y="23" width="1" height="1" fill="#000033"/>
<rect x="29" y="23" width="1" height="1" fill="#66CCFF"/>
<rect x="30" y="23" width="1" height="1" fill="#99CCCC"/>
<rect x="31" y="24" width="1" height="1" fill="#99CCCC"/>
<rect x="31" y="25" width="1" height="1" fill="#000033"/>
<rect x="30" y="24" width="1" height="1" fill="#66CCFF"/>
<rect x="30" y="25" width="1" height="1" fill="#000033"/>
<rect x="29" y="24" width="1" height="1" fill="#99CCCC"/>
<rect x="29" y="25" width="1" height="1" fill="#000033"/>
<rect x="28" y="24" width="1" height="1" fill="#66CCFF"/>
<rect x="28" y="25" width="1" height="1" fill="#000033"/>
<rect x="27" y="24" width="1" height="1" fill="#99CCCC"/>
<rect x="27" y="25" width="1" height="1" fill="#000033"/>
<rect x="26" y="24" width="1" height="1" fill="#66CCFF"/>
<rect x="26" y="25" width="1" height="1" fill="#000033"/>
<rect x="25" y="24" width="1" height="1" fill="#99CCCC"/>
<rect x="25" y="25" width="1" height="1" fill="#000033"/>
<rect x="24" y="24" width="1" height="1" fill="#66CCFF"/>
<rect x="24" y="25" width="1" height="1" fill="#000033"/>
<rect x="23" y="24" width="1" height="1" fill="#99CCCC"/>
<rect x="23" y="25" width="1" height="1" fill="#000033"/>
<rect x="22" y="24" width="1" height="1" fill="#66CCFF"/>
<rect x="22" y="25" width="1" height="1" fill="#000033"/>
<rect x="21" y="24" width="1" height="1" fill="#99CCCC"/>
<rect x="21" y="25" width="1" height="1" fill="#000033"/>
<rect x="20" y="24" width="1" height="1" fill="#66CCFF"/>
<rect x="19" y="24" width="1" height="1" fill="#99CCCC"/>
<rect x="20" y="25" width="1" height="1" fill="#000033"/>
<rect x="11" y="11" width="1" height="1" fill="#0099FF"/>
<rect x="14" y="29" width="1" height="1" fill="#4D4D4D"/>
</svg>
    `;
  }
}
window.customElements.define("a2k-network-icon", a1);
class r1 extends F {
  constructor() {
    super(...arguments);
    (this.width = 32), (this.height = 32);
  }
  render() {
    return x`
  <svg styles="width:auto" viewBox="0 0 ${this.width} ${this.height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="30" width="1" height="1" fill="#333300"/>
<rect x="5" y="30" width="1" height="1" fill="#333300"/>
<rect x="6" y="30" width="1" height="1" fill="#333300"/>
<rect x="7" y="30" width="1" height="1" fill="#333300"/>
<rect x="8" y="30" width="1" height="1" fill="#333300"/>
<rect x="9" y="30" width="1" height="1" fill="#333300"/>
<rect x="10" y="30" width="1" height="1" fill="#333300"/>
<rect x="11" y="30" width="1" height="1" fill="#333300"/>
<rect x="12" y="30" width="1" height="1" fill="#333300"/>
<rect x="13" y="30" width="1" height="1" fill="#333300"/>
<rect x="14" y="30" width="1" height="1" fill="#333300"/>
<rect x="15" y="30" width="1" height="1" fill="#333300"/>
<rect x="16" y="30" width="1" height="1" fill="#333300"/>
<rect x="17" y="30" width="1" height="1" fill="#333300"/>
<rect x="18" y="30" width="1" height="1" fill="#333300"/>
<rect x="19" y="30" width="1" height="1" fill="#333300"/>
<rect x="20" y="30" width="1" height="1" fill="#333300"/>
<rect x="21" y="30" width="1" height="1" fill="#333300"/>
<rect x="22" y="30" width="1" height="1" fill="#333300"/>
<rect x="23" y="30" width="1" height="1" fill="#333300"/>
<rect x="24" y="30" width="1" height="1" fill="#333300"/>
<rect x="25" y="30" width="1" height="1" fill="#333300"/>
<rect x="26" y="30" width="1" height="1" fill="#333300"/>
<rect x="27" y="30" width="1" height="1" fill="#333300"/>
<rect x="28" y="30" width="1" height="1" fill="#333300"/>
<rect x="4" y="29" width="1" height="1" fill="#999900"/>
<rect x="3" y="29" width="1" height="1" fill="#999900"/>
<rect x="3" y="28" width="1" height="1" fill="#999900"/>
<rect x="3" y="27" width="1" height="1" fill="#999900"/>
<rect x="2" y="26" width="1" height="1" fill="#999900"/>
<rect x="2" y="25" width="1" height="1" fill="#999900"/>
<rect x="2" y="24" width="1" height="1" fill="#999900"/>
<rect x="2" y="23" width="1" height="1" fill="#999900"/>
<rect x="1" y="22" width="1" height="1" fill="#999900"/>
<rect x="1" y="21" width="1" height="1" fill="#999900"/>
<rect x="1" y="20" width="1" height="1" fill="#999900"/>
<rect x="1" y="19" width="1" height="1" fill="#999900"/>
<rect y="18" width="1" height="1" fill="#999900"/>
<rect y="17" width="1" height="1" fill="#999900"/>
<rect y="16" width="1" height="1" fill="#999900"/>
<rect y="15" width="1" height="1" fill="#999900"/>
<rect y="14" width="1" height="1" fill="#999900"/>
<rect x="1" y="14" width="1" height="1" fill="white"/>
<rect x="1" y="15" width="1" height="1" fill="white"/>
<rect x="1" y="16" width="1" height="1" fill="white"/>
<rect x="1" y="17" width="1" height="1" fill="white"/>
<rect x="1" y="18" width="1" height="1" fill="white"/>
<rect x="2" y="19" width="1" height="1" fill="white"/>
<rect x="2" y="20" width="1" height="1" fill="white"/>
<rect x="2" y="21" width="1" height="1" fill="white"/>
<rect x="2" y="22" width="1" height="1" fill="white"/>
<rect x="3" y="23" width="1" height="1" fill="white"/>
<rect x="3" y="24" width="1" height="1" fill="white"/>
<rect x="3" y="25" width="1" height="1" fill="white"/>
<rect x="3" y="26" width="1" height="1" fill="white"/>
<rect x="4" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="5" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="6" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="7" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="8" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="9" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="10" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="11" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="12" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="13" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="14" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="15" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="15" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="16" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="17" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="18" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="19" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="20" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="21" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="21" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="22" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="23" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="24" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="25" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="25" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="26" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="27" y="28" width="1" height="1" fill="#FFCC99"/>
<rect x="27" y="27" width="1" height="1" fill="#FFCC99"/>
<rect x="26" y="27" width="1" height="1" fill="#FFCC99"/>
<rect x="25" y="27" width="1" height="1" fill="#FFCC99"/>
<rect x="26" y="26" width="1" height="1" fill="#FFCC99"/>
<rect x="25" y="25" width="1" height="1" fill="#FFCC99"/>
<rect x="24" y="26" width="1" height="1" fill="#FFCC99"/>
<rect x="23" y="26" width="1" height="1" fill="#FFCC99"/>
<rect x="23" y="27" width="1" height="1" fill="#FFCC99"/>
<rect x="22" y="26" width="1" height="1" fill="#FFCC99"/>
<rect x="20" y="26" width="1" height="1" fill="#FFCC99"/>
<rect x="20" y="25" width="1" height="1" fill="#FFCC99"/>
<rect x="21" y="25" width="1" height="1" fill="#FFCC99"/>
<rect x="23" y="25" width="1" height="1" fill="#FFCC99"/>
<rect x="24" y="24" width="1" height="1" fill="#FFCC99"/>
<rect x="25" y="24" width="1" height="1" fill="#FFCC99"/>
<rect x="26" y="24" width="1" height="1" fill="#FFCC99"/>
<rect x="25" y="23" width="1" height="1" fill="#FFCC99"/>
<rect x="23" y="23" width="1" height="1" fill="#FFCC99"/>
<rect x="22" y="24" width="1" height="1" fill="#FFCC99"/>
<rect x="21" y="23" width="1" height="1" fill="#FFCC99"/>
<rect x="20" y="23" width="1" height="1" fill="#FFCC99"/>
<rect x="19" y="22" width="1" height="1" fill="#FFCC99"/>
<rect x="18" y="23" width="1" height="1" fill="#FFCC99"/>
<rect x="17" y="22" width="1" height="1" fill="#FFCC99"/>
<rect x="16" y="22" width="1" height="1" fill="#FFCC99"/>
<rect x="17" y="21" width="1" height="1" fill="#FFCC99"/>
<rect x="18" y="20" width="1" height="1" fill="#FFCC99"/>
<rect x="19" y="19" width="1" height="1" fill="#FFCC99"/>
<rect x="19" y="17" width="1" height="1" fill="#FFCC99"/>
<rect x="17" y="17" width="1" height="1" fill="#FFCC99"/>
<rect x="15" y="18" width="1" height="1" fill="#FFCC99"/>
<rect x="13" y="18" width="1" height="1" fill="#FFCC99"/>
<rect x="12" y="17" width="1" height="1" fill="#FFCC99"/>
<rect x="9" y="17" width="1" height="1" fill="#FFCC99"/>
<rect x="10" y="17" width="1" height="2" fill="#FFCC99"/>
<rect x="19" y="20" width="1" height="1" fill="#FFCC99"/>
<rect x="16" y="20" width="1" height="1" fill="#FFCC99"/>
<rect x="15" y="21" width="1" height="1" fill="#FFCC99"/>
<rect x="13" y="20" width="1" height="1" fill="#FFCC99"/>
<rect x="19" y="24" width="1" height="1" fill="#FFCC99"/>
<rect x="27" y="26" width="1" height="1" fill="#FFCC99"/>
<rect x="27" y="25" width="1" height="1" fill="#FFCC99"/>
<rect x="27" y="24" width="1" height="1" fill="#FFCC99"/>
<rect x="27" y="23" width="1" height="1" fill="#FFCC99"/>
<rect x="27" y="22" width="1" height="1" fill="#FFCC99"/>
<rect x="26" y="22" width="1" height="1" fill="#FFCC99"/>
<rect x="26" y="21" width="1" height="1" fill="#FFCC99"/>
<rect x="26" y="20" width="1" height="1" fill="#FFCC99"/>
<rect x="26" y="19" width="1" height="1" fill="#FFCC99"/>
<rect x="24" y="18" width="1" height="1" fill="#FFCC99"/>
<rect x="23" y="17" width="1" height="1" fill="#FFCC99"/>
<rect x="24" y="16" width="1" height="1" fill="#FFCC99"/>
<rect x="22" y="15" width="1" height="1" fill="#FFCC99"/>
<rect x="21" y="16" width="1" height="1" fill="#FFCC99"/>
<rect x="11" y="15" width="1" height="1" fill="#FFCC99"/>
<rect x="25" y="20" width="1" height="1" fill="#FFCC99"/>
<rect x="24" y="21" width="1" height="1" fill="#FFCC99"/>
<rect x="24" y="22" width="1" height="1" fill="#FFCC99"/>
<rect x="23" y="20" width="1" height="1" fill="#FFCC99"/>
<rect x="22" y="21" width="1" height="1" fill="#FFCC99"/>
<rect x="21" y="20" width="1" height="1" fill="#FFCC99"/>
<rect x="20" y="21" width="1" height="1" fill="#FFCC99"/>
<rect x="21" y="19" width="1" height="1" fill="#FFCC99"/>
<rect x="22" y="22" width="1" height="1" fill="#FFCC99"/>
<rect x="2" y="15" width="1" height="1" transform="rotate(-90 2 15)" fill="white"/>
<rect x="3" y="15" width="1" height="1" transform="rotate(-90 3 15)" fill="white"/>
<rect x="4" y="15" width="1" height="1" transform="rotate(-90 4 15)" fill="white"/>
<rect x="3" y="15" width="1" height="1" transform="rotate(-90 3 15)" fill="white"/>
<rect x="5" y="15" width="1" height="1" transform="rotate(-90 5 15)" fill="white"/>
<rect x="6" y="15" width="1" height="1" transform="rotate(-90 6 15)" fill="white"/>
<rect x="7" y="15" width="1" height="1" transform="rotate(-90 7 15)" fill="white"/>
<rect x="8" y="15" width="1" height="1" transform="rotate(-90 8 15)" fill="white"/>
<rect x="9" y="15" width="1" height="1" transform="rotate(-90 9 15)" fill="white"/>
<rect x="10" y="15" width="1" height="1" transform="rotate(-90 10 15)" fill="white"/>
<rect x="11" y="15" width="1" height="1" transform="rotate(-90 11 15)" fill="white"/>
<rect x="12" y="15" width="1" height="1" transform="rotate(-90 12 15)" fill="white"/>
<rect x="13" y="15" width="1" height="1" transform="rotate(-90 13 15)" fill="white"/>
<rect x="14" y="15" width="1" height="1" transform="rotate(-90 14 15)" fill="white"/>
<rect x="15" y="15" width="1" height="1" transform="rotate(-90 15 15)" fill="white"/>
<rect x="16" y="15" width="1" height="1" transform="rotate(-90 16 15)" fill="white"/>
<rect x="17" y="15" width="1" height="1" transform="rotate(-90 17 15)" fill="white"/>
<rect x="18" y="15" width="1" height="1" transform="rotate(-90 18 15)" fill="white"/>
<rect x="19" y="15" width="1" height="1" transform="rotate(-90 19 15)" fill="white"/>
<rect x="20" y="15" width="1" height="1" transform="rotate(-90 20 15)" fill="white"/>
<rect x="21" y="15" width="1" height="1" transform="rotate(-90 21 15)" fill="white"/>
<rect x="22" y="15" width="1" height="1" transform="rotate(-90 22 15)" fill="white"/>
<rect x="23" y="15" width="1" height="1" transform="rotate(-90 23 15)" fill="white"/>
<rect x="24" y="15" width="1" height="1" transform="rotate(-90 24 15)" fill="white"/>
<rect x="1" y="13" width="1" height="1" fill="#999900"/>
<rect x="2" y="13" width="1" height="1" fill="#999900"/>
<rect x="3" y="13" width="1" height="1" fill="#999900"/>
<rect x="3" y="12" width="1" height="1" fill="#808000"/>
<rect x="4" y="12" width="1" height="1" fill="#CCCC66"/>
<rect x="5" y="10" width="1" height="1" fill="#CCCC66"/>
<rect x="5" y="9" width="1" height="1" fill="#CCCC66"/>
<rect x="6" y="9" width="1" height="1" fill="#CCCC66"/>
<rect x="5" y="8" width="1" height="1" fill="#CCCC66"/>
<rect x="6" y="8" width="1" height="1" fill="#CCCC66"/>
<rect x="7" y="8" width="1" height="1" fill="#CCCC66"/>
<rect x="10" y="6" width="1" height="1" fill="#CCCC66"/>
<rect x="26" y="10" width="1" height="1" fill="#CCCC66"/>
<rect x="26" y="18" width="1" height="1" fill="#CCCC66"/>
<rect x="27" y="21" width="1" height="1" fill="#CCCC66"/>
<rect x="27" y="10" width="1" height="1" fill="#CCCC66"/>
<rect x="27" y="11" width="1" height="1" fill="#CCCC66"/>
<rect x="28" y="11" width="1" height="1" fill="#CCCC66"/>
<rect x="28" y="12" width="1" height="1" fill="#CCCC66"/>
<rect x="6" y="7" width="1" height="1" fill="#CCCC66"/>
<rect x="7" y="7" width="1" height="1" fill="#CCCC66"/>
<rect x="8" y="7" width="1" height="1" fill="#CCCC66"/>
<rect x="4" y="11" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="10" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="9" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="8" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="7" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="7" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="6" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="6" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="6" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="6" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="6" width="1" height="1" fill="#FFFF99"/>
<rect x="3" y="11" width="1" height="1" fill="#808000"/>
<rect x="3" y="10" width="1" height="1" fill="#808000"/>
<rect x="3" y="9" width="1" height="1" fill="#808000"/>
<rect x="3" y="8" width="1" height="1" fill="#808000"/>
<rect x="3" y="7" width="1" height="1" fill="#808000"/>
<rect x="4" y="6" width="1" height="1" fill="#808000"/>
<rect x="7" y="5" width="1" height="1" fill="#808000"/>
<rect x="7" y="5" width="1" height="1" fill="#808000"/>
<rect x="6" y="5" width="1" height="1" fill="#808000"/>
<rect x="5" y="5" width="1" height="1" fill="#808000"/>
<rect x="10" y="5" width="1" height="1" fill="#808000"/>
<rect x="10" y="5" width="1" height="1" fill="#808000"/>
<rect x="29" y="11" width="1" height="1" fill="#808000"/>
<rect x="29" y="12" width="1" height="1" fill="#808000"/>
<rect x="29" y="13" width="1" height="1" fill="#808000"/>
<rect x="28" y="10" width="1" height="1" fill="#808000"/>
<rect x="28" y="9" width="1" height="1" fill="#808000"/>
<rect x="27" y="9" width="1" height="1" fill="#808000"/>
<rect x="26" y="9" width="1" height="1" fill="#808000"/>
<rect x="25" y="9" width="1" height="1" fill="#808000"/>
<rect x="11" y="5" width="1" height="1" fill="#808000"/>
<rect x="12" y="5" width="1" height="1" fill="#9999CC"/>
<rect x="13" y="4" width="1" height="1" fill="#9999CC"/>
<rect x="14" y="3" width="1" height="1" fill="#9999CC"/>
<rect x="15" y="2" width="1" height="1" fill="#9999CC"/>
<rect x="16" y="2" width="1" height="1" fill="#CCCCFF"/>
<rect x="17" y="3" width="1" height="1" fill="#CCCCFF"/>
<rect x="18" y="4" width="1" height="1" fill="#CCCCFF"/>
<rect x="19" y="5" width="1" height="1" fill="#CCCCFF"/>
<rect x="20" y="6" width="1" height="1" fill="#CCCCFF"/>
<rect x="21" y="7" width="1" height="1" fill="#CCCCFF"/>
<rect x="22" y="8" width="1" height="1" fill="#CCCCFF"/>
<rect x="23" y="9" width="1" height="1" fill="#CCCCFF"/>
<rect x="24" y="10" width="1" height="1" fill="#CCCCFF"/>
<rect x="25" y="11" width="1" height="1" fill="#CCCCFF"/>
<rect x="26" y="12" width="1" height="1" fill="#CCCCFF"/>
<rect x="27" y="13" width="1" height="1" fill="#CCCCFF"/>
<rect x="28" y="14" width="1" height="1" fill="#CCCCFF"/>
<rect x="29" y="15" width="1" height="1" fill="#CCCCFF"/>
<rect x="30" y="16" width="1" height="1" fill="#CCCCFF"/>
<rect x="29" y="17" width="1" height="1" fill="#CCCCFF"/>
<rect x="28" y="18" width="1" height="1" fill="#CCCCFF"/>
<rect x="28" y="17" width="1" height="1" fill="#CCCCFF"/>
<rect x="27" y="17" width="1" height="1" fill="#9999FF"/>
<rect x="28" y="16" width="1" height="1" fill="#CCCCFF"/>
<rect x="27" y="16" width="1" height="1" fill="#CCCCFF"/>
<rect x="27" y="15" width="1" height="1" fill="#CCCCFF"/>
<rect x="26" y="14" width="1" height="1" fill="#CCCCFF"/>
<rect x="25" y="13" width="1" height="1" fill="#CCCCFF"/>
<rect x="24" y="12" width="1" height="1" fill="#CCCCFF"/>
<rect x="23" y="12" width="1" height="1" fill="#9999FF"/>
<rect x="21" y="11" width="1" height="1" fill="#9999FF"/>
<rect x="20" y="12" width="1" height="1" fill="#9999FF"/>
<rect x="10" y="12" width="1" height="1" fill="#9999FF"/>
<rect x="9" y="12" width="1" height="1" fill="#330099"/>
<rect x="14" y="12" width="1" height="1" fill="#330099"/>
<rect x="16" y="12" width="1" height="1" fill="#330099"/>
<rect x="15" y="12" width="1" height="1" fill="#3399FF"/>
<rect x="14" y="11" width="1" height="1" fill="#33CCFF"/>
<rect x="12" y="10" width="1" height="1" fill="#3399FF"/>
<rect x="12" y="9" width="1" height="1" fill="#3399FF"/>
<rect x="13" y="8" width="1" height="1" fill="#3399FF"/>
<rect x="14" y="7" width="1" height="1" fill="#3399FF"/>
<rect x="15" y="6" width="1" height="1" fill="#3399FF"/>
<rect x="16" y="6" width="1" height="1" fill="#3399FF"/>
<rect x="16" y="11" width="1" height="1" fill="#33CCFF"/>
<rect x="17" y="10" width="1" height="1" fill="#33CCFF"/>
<rect x="18" y="10" width="1" height="1" fill="#0066FF"/>
<rect x="17" y="11" width="1" height="1" fill="#3333CC"/>
<rect x="19" y="12" width="1" height="1" fill="#330099"/>
<rect x="20" y="11" width="1" height="1" fill="#3333CC"/>
<rect x="21" y="10" width="1" height="1" fill="#3333CC"/>
<rect x="22" y="12" width="1" height="1" fill="#330099"/>
<rect x="16" y="1" width="1" height="1" fill="#666699"/>
<rect x="17" y="2" width="1" height="1" fill="#666699"/>
<rect x="18" y="3" width="1" height="1" fill="#666699"/>
<rect x="19" y="4" width="1" height="1" fill="#666699"/>
<rect x="20" y="5" width="1" height="1" fill="#666699"/>
<rect x="21" y="6" width="1" height="1" fill="#666699"/>
<rect x="22" y="7" width="1" height="1" fill="#666699"/>
<rect x="23" y="8" width="1" height="1" fill="#666699"/>
<rect x="24" y="9" width="1" height="1" fill="#666699"/>
<rect x="25" y="10" width="1" height="1" fill="#666699"/>
<rect x="26" y="11" width="1" height="1" fill="#666699"/>
<rect x="27" y="12" width="1" height="1" fill="#666699"/>
<rect x="28" y="13" width="1" height="1" fill="#666699"/>
<rect x="11" y="6" width="1" height="1" fill="#9999CC"/>
<rect x="10" y="7" width="1" height="1" fill="#9999CC"/>
<rect x="9" y="8" width="1" height="1" fill="#9999CC"/>
<rect x="8" y="9" width="1" height="1" fill="#9999CC"/>
<rect x="7" y="10" width="1" height="1" fill="#9999CC"/>
<rect x="6" y="11" width="1" height="1" fill="#9999CC"/>
<rect x="5" y="12" width="1" height="1" fill="#9999CC"/>
<rect x="6" y="12" width="1" height="1" fill="#CCFFFF"/>
<rect x="7" y="12" width="1" height="1" fill="#CCCCFF"/>
<rect x="8" y="12" width="1" height="1" fill="#CCCCFF"/>
<rect x="11" y="12" width="1" height="1" fill="#CCCCFF"/>
<rect x="12" y="12" width="1" height="1" fill="#CCCCFF"/>
<rect x="13" y="12" width="1" height="1" fill="#CCCCFF"/>
<rect x="17" y="12" width="1" height="1" fill="#CCCCFF"/>
<rect x="18" y="12" width="1" height="1" fill="#CCCCFF"/>
<rect x="21" y="12" width="1" height="1" fill="#CCCCFF"/>
<rect x="7" y="11" width="1" height="1" fill="#CCFFFF"/>
<rect x="9" y="11" width="1" height="1" fill="#CCFFFF"/>
<rect x="8" y="11" width="1" height="1" fill="white"/>
<rect x="3" y="26" width="1" height="1" fill="white"/>
<rect x="3" y="25" width="1" height="1" fill="white"/>
<rect x="3" y="24" width="1" height="1" fill="white"/>
<rect x="3" y="23" width="1" height="1" fill="white"/>
<rect x="2" y="22" width="1" height="1" fill="white"/>
<rect x="2" y="21" width="1" height="1" fill="white"/>
<rect x="2" y="20" width="1" height="1" fill="white"/>
<rect x="2" y="19" width="1" height="1" fill="white"/>
<rect x="1" y="18" width="1" height="1" fill="white"/>
<rect x="1" y="17" width="1" height="1" fill="white"/>
<rect x="1" y="16" width="1" height="1" fill="white"/>
<rect x="1" y="15" width="1" height="1" fill="white"/>
<rect x="1" y="14" width="1" height="1" fill="white"/>
<rect x="2" y="14" width="1" height="1" fill="white"/>
<rect x="2" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="2" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="2" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="3" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="3" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="3" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="10" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="10" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="13" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="11" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="11" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="11" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="13" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="13" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="14" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="14" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="15" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="14" y="15" width="1" height="1" fill="#FFCC99"/>
<rect x="15" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="16" y="15" width="1" height="1" fill="#FFCC99"/>
<rect x="16" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="17" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="17" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="18" y="15" width="1" height="1" fill="#FFCC99"/>
<rect x="18" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="19" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="19" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="20" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="21" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="22" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="23" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="23" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="24" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="25" y="15" width="1" height="1" fill="#FFFF99"/>
<rect x="25" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="25" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="24" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="25" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="25" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="24" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="23" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="23" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="22" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="22" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="20" y="16" width="1" height="1" fill="#FFFF99"/>
<rect x="21" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="21" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="22" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="22" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="19" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="20" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="20" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="17" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="18" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="18" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="15" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="16" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="16" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="15" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="16" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="17" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="18" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="20" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="19" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="20" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="17" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="18" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="15" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="16" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="15" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="18" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="20" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="19" y="23" width="1" height="1" fill="#FFFF99"/>
<rect x="20" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="17" y="23" width="1" height="1" fill="#FFFF99"/>
<rect x="18" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="15" y="23" width="1" height="1" fill="#FFFF99"/>
<rect x="15" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="16" y="23" width="1" height="1" fill="#FFFF99"/>
<rect x="15" y="25" width="1" height="1" fill="#FFCC99"/>
<rect x="16" y="25" width="1" height="1" fill="#FFFF99"/>
<rect x="17" y="25" width="1" height="1" fill="#FFFF99"/>
<rect x="19" y="25" width="1" height="1" fill="#FFFF99"/>
<rect x="19" y="27" width="1" height="1" fill="#FFCC99"/>
<rect x="17" y="26" width="1" height="1" fill="#FFCC99"/>
<rect x="18" y="26" width="1" height="1" fill="#FFCC99"/>
<rect x="18" y="25" width="1" height="1" fill="#FFCC99"/>
<rect x="20" y="27" width="1" height="1" fill="#FFFF99"/>
<rect x="21" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="21" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="22" y="23" width="1" height="1" fill="#FFFF99"/>
<rect x="21" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="21" y="26" width="1" height="1" fill="#FFFF99"/>
<rect x="22" y="25" width="1" height="1" fill="#FFFF99"/>
<rect x="22" y="27" width="1" height="1" fill="#FFFF99"/>
<rect x="24" y="27" width="1" height="1" fill="#FFFF99"/>
<rect x="25" y="26" width="1" height="1" fill="#FFFF99"/>
<rect x="24" y="25" width="1" height="1" fill="#FFFF99"/>
<rect x="26" y="25" width="1" height="1" fill="#FFFF99"/>
<rect x="26" y="23" width="1" height="1" fill="#FFFF99"/>
<rect x="24" y="23" width="1" height="1" fill="#FFFF99"/>
<rect x="23" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="23" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="23" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="25" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="25" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="24" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="21" y="27" width="1" height="1" fill="#FFCC99"/>
<rect x="19" y="26" width="1" height="1" fill="#FFFF99"/>
<rect x="17" y="27" width="1" height="1" fill="#FFFF99"/>
<rect x="18" y="27" width="1" height="1" fill="#FFFF99"/>
<rect x="15" y="26" width="1" height="1" fill="#FFFF99"/>
<rect x="15" y="27" width="1" height="1" fill="#FFCC99"/>
<rect x="16" y="26" width="1" height="1" fill="#FFFF99"/>
<rect x="16" y="27" width="1" height="1" fill="#FFCC99"/>
<rect x="9" y="25" width="1" height="1" fill="#FFFF99"/>
<rect x="10" y="25" width="1" height="1" fill="#FFFF99"/>
<rect x="11" y="25" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="25" width="1" height="1" fill="#FFCC99"/>
<rect x="13" y="25" width="1" height="1" fill="#FFFF99"/>
<rect x="14" y="25" width="1" height="1" fill="#FFCC99"/>
<rect x="13" y="26" width="1" height="1" fill="#FFFF99"/>
<rect x="13" y="27" width="1" height="1" fill="#FFCC99"/>
<rect x="14" y="26" width="1" height="1" fill="#FFCC99"/>
<rect x="14" y="27" width="1" height="1" fill="#FFFF99"/>
<rect x="11" y="26" width="1" height="1" fill="#FFCC99"/>
<rect x="11" y="27" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="26" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="27" width="1" height="1" fill="#FFCC99"/>
<rect x="9" y="26" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="27" width="1" height="1" fill="#FFCC99"/>
<rect x="10" y="26" width="1" height="1" fill="#FFCC99"/>
<rect x="10" y="27" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="10" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="11" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="14" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="14" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="13" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="14" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="13" y="23" width="1" height="1" fill="#FFFF99"/>
<rect x="14" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="11" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="23" width="1" height="1" fill="#FFCC99"/>
<rect x="11" y="22" width="1" height="1" fill="#FFCC99"/>
<rect x="12" y="23" width="1" height="1" fill="#FFCC99"/>
<rect x="14" y="23" width="1" height="1" fill="#FFCC99"/>
<rect x="13" y="24" width="1" height="1" fill="#FFCC99"/>
<rect x="13" y="22" width="1" height="1" fill="#FFCC99"/>
<rect x="9" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="10" y="23" width="1" height="1" fill="#FFFF99"/>
<rect x="10" y="24" width="1" height="1" fill="#FFCC99"/>
<rect x="13" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="14" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="14" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="11" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="10" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="11" y="23" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="11" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="11" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="12" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="10" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="10" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="10" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="21" width="1" height="1" fill="#FFCC99"/>
<rect x="11" y="20" width="1" height="1" fill="#FFCC99"/>
<rect x="10" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="19" width="1" height="1" fill="#FFCC99"/>
<rect x="9" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="10" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="10" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="10" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="25" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="25" width="1" height="1" fill="#FFCC99"/>
<rect x="7" y="26" width="1" height="1" fill="#FFCC99"/>
<rect x="7" y="27" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="26" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="27" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="23" width="1" height="1" fill="#FFCC99"/>
<rect x="7" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="23" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="21" width="1" height="1" fill="#FFCC99"/>
<rect x="8" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="19" width="1" height="1" fill="#FFCC99"/>
<rect x="7" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="7" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="8" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="25" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="25" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="26" width="1" height="1" fill="#FFCC99"/>
<rect x="5" y="27" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="26" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="27" width="1" height="1" fill="#FFCC99"/>
<rect x="5" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="23" width="1" height="1" fill="#FFCC99"/>
<rect x="5" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="25" width="1" height="1" fill="#FFCC99"/>
<rect x="4" y="26" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="27" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="23" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="24" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="22" width="1" height="1" fill="#FFCC99"/>
<rect x="5" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="5" y="17" width="1" height="1" fill="#FFCC99"/>
<rect x="5" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="6" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="17" width="1" height="1" fill="#FFFF99"/>
<rect x="2" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="3" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="3" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="3" y="20" width="1" height="1" fill="#FFFF99"/>
<rect x="3" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="18" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="19" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="20" width="1" height="1" fill="#FFCC99"/>
<rect x="4" y="21" width="1" height="1" fill="#FFFF99"/>
<rect x="3" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="22" width="1" height="1" fill="#FFFF99"/>
<rect x="4" y="23" width="1" height="1" fill="#FFFF99"/>
<rect x="9" y="10" width="1" height="1" fill="white"/>
<rect x="10" y="10" width="1" height="1" fill="white"/>
<rect x="12" y="11" width="1" height="1" fill="white"/>
<rect x="11" y="10" width="1" height="1" fill="white"/>
<rect x="11" y="9" width="1" height="1" fill="white"/>
<rect x="10" y="9" width="1" height="1" fill="white"/>
<rect x="11" y="8" width="1" height="1" fill="white"/>
<rect x="12" y="8" width="1" height="1" fill="white"/>
<rect x="12" y="7" width="1" height="1" fill="white"/>
<rect x="13" y="7" width="1" height="1" fill="white"/>
<rect x="13" y="6" width="1" height="1" fill="white"/>
<rect x="14" y="6" width="1" height="1" fill="white"/>
<rect x="14" y="5" width="1" height="1" fill="white"/>
<rect x="15" y="5" width="1" height="1" fill="white"/>
<rect x="15" y="4" width="1" height="1" fill="white"/>
<rect x="16" y="4" width="1" height="1" fill="white"/>
<rect x="16" y="5" width="1" height="1" fill="white"/>
<rect x="17" y="5" width="1" height="1" fill="white"/>
<rect x="18" y="6" width="1" height="1" fill="white"/>
<rect x="18" y="7" width="1" height="1" fill="white"/>
<rect x="19" y="7" width="1" height="1" fill="white"/>
<rect x="20" y="8" width="1" height="1" fill="white"/>
<rect x="19" y="8" width="1" height="1" fill="#CCFFFF"/>
<rect x="20" y="9" width="1" height="1" fill="white"/>
<rect x="21" y="9" width="1" height="1" fill="white"/>
<rect x="22" y="10" width="1" height="1" fill="white"/>
<rect x="19" y="10" width="1" height="1" fill="white"/>
<rect x="18" y="11" width="1" height="1" fill="white"/>
<rect x="23" y="11" width="1" height="1" fill="white"/>
<rect x="11" y="11" width="1" height="1" fill="#CCFFFF"/>
<rect x="10" y="11" width="1" height="1" fill="#3333CC"/>
<rect x="13" y="11" width="1" height="1" fill="#666699"/>
<rect x="15" y="11" width="1" height="1" fill="#66CCFF"/>
<rect x="16" y="10" width="1" height="1" fill="#66CCFF"/>
<rect x="15" y="10" width="1" height="1" fill="#66CCFF"/>
<rect x="14" y="10" width="1" height="1" fill="#66CCFF"/>
<rect x="13" y="10" width="1" height="1" fill="#66CCFF"/>
<rect x="8" y="10" width="1" height="1" fill="#CCFFFF"/>
<rect x="9" y="9" width="1" height="1" fill="#CCFFFF"/>
<rect x="13" y="9" width="1" height="1" fill="#CCFFFF"/>
<rect x="14" y="9" width="1" height="1" fill="#66FFFF"/>
<rect x="15" y="9" width="1" height="1" fill="#66FFFF"/>
<rect x="16" y="8" width="1" height="1" fill="#66FFFF"/>
<rect x="17" y="8" width="1" height="1" fill="#66FFFF"/>
<rect x="17" y="7" width="1" height="1" fill="#666699"/>
<rect x="18" y="8" width="1" height="1" fill="#666699"/>
<rect x="19" y="9" width="1" height="1" fill="#666699"/>
<rect x="18" y="9" width="1" height="1" fill="#99CCFF"/>
<rect x="17" y="9" width="1" height="1" fill="#99CCFF"/>
<rect x="16" y="9" width="1" height="1" fill="#99CCFF"/>
<rect x="14" y="8" width="1" height="1" fill="#CCFFFF"/>
<rect x="15" y="7" width="1" height="1" fill="#CCFFFF"/>
<rect x="17" y="6" width="1" height="1" fill="#CCFFFF"/>
<rect x="16" y="7" width="1" height="1" fill="#CCECFF"/>
<rect x="15" y="8" width="1" height="1" fill="#CCECFF"/>
<rect x="10" y="8" width="1" height="1" fill="#CCFFFF"/>
<rect x="11" y="7" width="1" height="1" fill="#CCFFFF"/>
<rect x="12" y="6" width="1" height="1" fill="#CCFFFF"/>
<rect x="13" y="5" width="1" height="1" fill="#CCFFFF"/>
<rect x="14" y="4" width="1" height="1" fill="#CCFFFF"/>
<rect x="15" y="3" width="1" height="1" fill="#CCFFFF"/>
<rect x="16" y="3" width="1" height="1" fill="#CCFFFF"/>
<rect x="17" y="4" width="1" height="1" fill="#CCFFFF"/>
<rect x="18" y="5" width="1" height="1" fill="#CCFFFF"/>
<rect x="19" y="6" width="1" height="1" fill="#CCFFFF"/>
<rect x="20" y="7" width="1" height="1" fill="#CCFFFF"/>
<rect x="21" y="8" width="1" height="1" fill="#CCFFFF"/>
<rect x="22" y="9" width="1" height="1" fill="#CCFFFF"/>
<rect x="23" y="10" width="1" height="1" fill="#CCFFFF"/>
<rect x="20" y="10" width="1" height="1" fill="#CCFFFF"/>
<rect x="19" y="11" width="1" height="1" fill="#CCFFFF"/>
<rect x="22" y="11" width="1" height="1" fill="#CCFFFF"/>
<rect x="24" y="11" width="1" height="1" fill="#CCFFFF"/>
<rect x="25" y="12" width="1" height="1" fill="#CCFFFF"/>
<rect x="26" y="13" width="1" height="1" fill="#CCFFFF"/>
<rect x="27" y="14" width="1" height="1" fill="#CCFFFF"/>
<rect x="28" y="15" width="1" height="1" fill="#CCFFFF"/>
<rect x="29" y="16" width="1" height="1" fill="#CCFFFF"/>
<rect x="9" y="5" width="1" height="1" fill="#808000"/>
<rect x="8" y="5" width="1" height="1" fill="#808000"/>
<rect x="4" y="13" width="1" height="1" fill="#999900"/>
<rect x="5" y="13" width="1" height="1" fill="#999900"/>
<rect x="5" y="11" width="1" height="1" fill="#999900"/>
<rect x="6" y="10" width="1" height="1" fill="#999900"/>
<rect x="7" y="9" width="1" height="1" fill="#999900"/>
<rect x="8" y="8" width="1" height="1" fill="#999900"/>
<rect x="9" y="7" width="1" height="1" fill="#999900"/>
<rect x="9" y="7" width="1" height="1" fill="#999900"/>
<rect x="6" y="13" width="1" height="1" fill="#999900"/>
<rect x="7" y="13" width="1" height="1" fill="#999900"/>
<rect x="8" y="13" width="1" height="1" fill="#999900"/>
<rect x="9" y="13" width="1" height="1" fill="#999900"/>
<rect x="10" y="13" width="1" height="1" fill="#999900"/>
<rect x="11" y="13" width="1" height="1" fill="#999900"/>
<rect x="12" y="13" width="1" height="1" fill="#999900"/>
<rect x="13" y="13" width="1" height="1" fill="#999900"/>
<rect x="14" y="13" width="1" height="1" fill="#999900"/>
<rect x="15" y="13" width="1" height="1" fill="#999900"/>
<rect x="16" y="13" width="1" height="1" fill="#999900"/>
<rect x="17" y="13" width="1" height="1" fill="#999900"/>
<rect x="18" y="13" width="1" height="1" fill="#999900"/>
<rect x="19" y="13" width="1" height="1" fill="#999900"/>
<rect x="20" y="13" width="1" height="1" fill="#999900"/>
<rect x="5" y="29" width="1" height="1" fill="#999900"/>
<rect x="6" y="29" width="1" height="1" fill="#999900"/>
<rect x="7" y="29" width="1" height="1" fill="#999900"/>
<rect x="8" y="29" width="1" height="1" fill="#999900"/>
<rect x="9" y="29" width="1" height="1" fill="#999900"/>
<rect x="10" y="29" width="1" height="1" fill="#999900"/>
<rect x="11" y="29" width="1" height="1" fill="#999900"/>
<rect x="12" y="29" width="1" height="1" fill="#999900"/>
<rect x="13" y="29" width="1" height="1" fill="#999900"/>
<rect x="14" y="29" width="1" height="1" fill="#999900"/>
<rect x="15" y="29" width="1" height="1" fill="#999900"/>
<rect x="16" y="29" width="1" height="1" fill="#999900"/>
<rect x="17" y="29" width="1" height="1" fill="#999900"/>
<rect x="18" y="29" width="1" height="1" fill="#999900"/>
<rect x="19" y="29" width="1" height="1" fill="#999900"/>
<rect x="20" y="29" width="1" height="1" fill="#999900"/>
<rect x="21" y="29" width="1" height="1" fill="#999900"/>
<rect x="22" y="29" width="1" height="1" fill="#999900"/>
<rect x="23" y="29" width="1" height="1" fill="#999900"/>
<rect x="24" y="29" width="1" height="1" fill="#999900"/>
<rect x="25" y="29" width="1" height="1" fill="#999900"/>
<rect x="26" y="29" width="1" height="1" fill="#999900"/>
<rect x="27" y="29" width="1" height="1" fill="#999900"/>
<rect x="28" y="29" width="1" height="1" fill="#999900"/>
<rect x="28" y="28" width="1" height="1" fill="#999900"/>
<rect x="28" y="27" width="1" height="1" fill="#999900"/>
<rect x="28" y="26" width="1" height="1" fill="#999900"/>
<rect x="28" y="25" width="1" height="1" fill="#999900"/>
<rect x="28" y="24" width="1" height="1" fill="#999900"/>
<rect x="27" y="20" width="1" height="1" fill="#999900"/>
<rect x="27" y="19" width="1" height="1" fill="#999900"/>
<rect x="27" y="18" width="1" height="1" fill="#999900"/>
<rect x="26" y="17" width="1" height="1" fill="#999900"/>
<rect x="26" y="16" width="1" height="1" fill="#999900"/>
<rect x="26" y="15" width="1" height="1" fill="#999900"/>
<rect x="25" y="14" width="1" height="1" fill="#999900"/>
<rect x="24" y="13" width="1" height="1" fill="#999900"/>
<rect x="23" y="13" width="1" height="1" fill="#999900"/>
<rect x="22" y="13" width="1" height="1" fill="#999900"/>
<rect x="21" y="13" width="1" height="1" fill="#999900"/>
<rect x="29" y="29" width="1" height="1" fill="#333300"/>
<rect x="29" y="28" width="1" height="1" fill="#333300"/>
<rect x="29" y="27" width="1" height="1" fill="#333300"/>
<rect x="29" y="26" width="1" height="1" fill="#333300"/>
<rect x="29" y="25" width="1" height="1" fill="#333300"/>
<rect x="29" y="25" width="1" height="1" fill="#333300"/>
<rect x="29" y="24" width="1" height="1" fill="#333300"/>
<rect x="29" y="23" width="1" height="1" fill="#333300"/>
<rect x="29" y="22" width="1" height="1" fill="#333300"/>
<rect x="29" y="21" width="1" height="1" fill="#333300"/>
<rect x="29" y="20" width="1" height="1" fill="#333300"/>
<rect x="29" y="20" width="1" height="1" fill="#333300"/>
<rect x="28" y="23" width="1" height="1" fill="#333300"/>
<rect x="28" y="22" width="1" height="1" fill="#333300"/>
<rect x="28" y="21" width="1" height="1" fill="#333300"/>
<rect x="28" y="20" width="1" height="1" fill="#333300"/>
<rect x="28" y="20" width="1" height="1" fill="#333300"/>
<rect x="29" y="19" width="1" height="1" fill="#333300"/>
<rect x="28" y="19" width="1" height="1" fill="black"/>
<rect x="29" y="18" width="1" height="1" fill="black"/>
<rect x="30" y="17" width="1" height="1" fill="black"/>
<rect x="31" y="16" width="1" height="1" fill="black"/>
<rect x="30" y="15" width="1" height="1" fill="black"/>
<rect x="30" y="14" width="1" height="1" fill="#003333"/>
<rect x="30" y="13" width="1" height="1" fill="#003333"/>
<rect x="30" y="12" width="1" height="1" fill="#003333"/>
<rect x="30" y="11" width="1" height="1" fill="#003333"/>
<rect x="29" y="10" width="1" height="1" fill="#003333"/>
<rect x="29" y="14" width="1" height="1" fill="black"/>
<rect x="16" y="24" width="1" height="1" fill="#FFCC99"/>
<rect x="17" y="24" width="1" height="1" fill="#FFCC99"/>
</svg>
    `;
  }
}
window.customElements.define("a2k-documents-icon", r1);
var L =
    (globalThis && globalThis.__decorate) ||
    function (l, i, h, f) {
      var e = arguments.length,
        t =
          e < 3
            ? i
            : f === null
            ? (f = Object.getOwnPropertyDescriptor(i, h))
            : f,
        d;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        t = Reflect.decorate(l, i, h, f);
      else
        for (var c = l.length - 1; c >= 0; c--)
          (d = l[c]) &&
            (t = (e < 3 ? d(t) : e > 3 ? d(i, h, t) : d(i, h)) || t);
      return e > 3 && t && Object.defineProperty(i, h, t), t;
    },
  y1 =
    (globalThis && globalThis.__metadata) ||
    function (l, i) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(l, i);
    };
let n = class extends F {
  constructor() {
    super(...arguments);
    this.open = !1;
  }
  render() {
    return a`
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
n.styles = r`
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
L([y(), y1("design:type", Object)], n.prototype, "open", void 0);
n = L([p("a2k-start-menu-item")], n);
var I =
    (globalThis && globalThis.__decorate) ||
    function (l, i, h, f) {
      var e = arguments.length,
        t =
          e < 3
            ? i
            : f === null
            ? (f = Object.getOwnPropertyDescriptor(i, h))
            : f,
        d;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        t = Reflect.decorate(l, i, h, f);
      else
        for (var c = l.length - 1; c >= 0; c--)
          (d = l[c]) &&
            (t = (e < 3 ? d(t) : e > 3 ? d(i, h, t) : d(i, h)) || t);
      return e > 3 && t && Object.defineProperty(i, h, t), t;
    },
  w1 =
    (globalThis && globalThis.__metadata) ||
    function (l, i) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(l, i);
    };
let s = class extends F {
  constructor() {
    super(...arguments);
    this.open = !1;
  }
  handleAboutClick() {
    const i = a` <a2k-window closable title="About Andricos2000">
      <p>Deets coming soon...</p>
    </a2k-window>`;
    i1(i, document.body);
  }
  render() {
    const i = String(this.open) === "true";
    return a`
      <div id="start-menu" class="${i ? "open" : ""}">
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
                    <div slot="icon"><a2k-documents-icon /></div>
                    Portfolio
                  </a2k-start-menu-item>
                </a>
                <a target="_blank" href="https://twitter.com/andricokaroulla" rel="noreferrer noopener">
                  <a2k-start-menu-item>
                    <div slot="icon"><a2k-twitter-logo /></div>
                    Twitter
                  </a2k-start-menu-item>
                </a>

                <a target="_blank" href="mailto:karoulla.andrico@gmail.com" rel="noreferrer noopener">
                  <a2k-start-menu-item>
                    <div slot="icon"><a2k-network-icon /></div>
                    Contact
                  </a2k-start-menu-item>
                </a>
                <button @click="${this.handleAboutClick}">
                  <a2k-start-menu-item >
                    <div slot="icon"><a2k-help-logo /></div>
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
s.styles = r`
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
I([y(), w1("design:type", Object)], s.prototype, "open", void 0);
s = I([p("a2k-start-menu")], s);
var W =
    (globalThis && globalThis.__decorate) ||
    function (l, i, h, f) {
      var e = arguments.length,
        t =
          e < 3
            ? i
            : f === null
            ? (f = Object.getOwnPropertyDescriptor(i, h))
            : f,
        d;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        t = Reflect.decorate(l, i, h, f);
      else
        for (var c = l.length - 1; c >= 0; c--)
          (d = l[c]) &&
            (t = (e < 3 ? d(t) : e > 3 ? d(i, h, t) : d(i, h)) || t);
      return e > 3 && t && Object.defineProperty(i, h, t), t;
    },
  g1 =
    (globalThis && globalThis.__metadata) ||
    function (l, i) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(l, i);
    };
let b = class extends F {
  constructor() {
    super(...arguments);
    (this._hideOnClickOutside = (i) => {
      i.composedPath().includes(this) ||
        ((this._isMenuOpen = !1),
        document.removeEventListener("click", this._hideOnClickOutside));
    }),
      (this._isMenuOpen = !1);
  }
  _toggleMenu() {
    const i = !this._isMenuOpen;
    i
      ? document.addEventListener("click", this._hideOnClickOutside)
      : document.removeEventListener("click", this._hideOnClickOutside),
      (this._isMenuOpen = i);
  }
  render() {
    return a`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <div class="icon-wrapper">
            <a2k-windows-logo />
          </div>
          Start
        </button>
      </div>
    `;
  }
};
b.styles = r`
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
      border: var(--taskbar-start-button-border);
      border-left: 1px dotted var(--color-white);
      border-top: 1px dotted var(--color-white);
      box-shadow: var(--taskbar-start-button-shadow);
      outline-color: var(--outline-color-focus);
      outline-offset: var(--outline-offset-focus);
    }

    button:active {
      border: 0;
      border-left: 1px dotted var(--color-black);
      border-top: 1px dotted var(--color-black);
      box-shadow: var(--taskbar-start-button-shadow-active);
    }

    .icon-wrapper {
      width: var(--taskbar-start-button-icon-size);
    }
  `;
W([t1(), g1("design:type", Object)], b.prototype, "_isMenuOpen", void 0);
b = W([p("a2k-start-button")], b);
class V1 {
  constructor(i, h = 1e3) {
    (this.value = new Date()),
      (this.host = i),
      this.host.addController(this),
      (this.timeout = h);
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
var H1 =
  (globalThis && globalThis.__decorate) ||
  function (l, i, h, f) {
    var e = arguments.length,
      t =
        e < 3
          ? i
          : f === null
          ? (f = Object.getOwnPropertyDescriptor(i, h))
          : f,
      d;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      t = Reflect.decorate(l, i, h, f);
    else
      for (var c = l.length - 1; c >= 0; c--)
        (d = l[c]) && (t = (e < 3 ? d(t) : e > 3 ? d(i, h, t) : d(i, h)) || t);
    return e > 3 && t && Object.defineProperty(i, h, t), t;
  };
let E = class extends F {
  constructor() {
    super(...arguments);
    this.clock = new V1(this);
  }
  render() {
    const i = x1.format(this.clock.value);
    return a`<div class="utility-bar">${i}</div>`;
  }
};
E.styles = r`
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
E = H1([p("a2k-utility-bar")], E);
const x1 = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
class U extends F {
  render() {
    return a`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`;
  }
}
U.styles = r`
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
window.customElements.define("a2k-taskbar", U);
var N =
    (globalThis && globalThis.__decorate) ||
    function (l, i, h, f) {
      var e = arguments.length,
        t =
          e < 3
            ? i
            : f === null
            ? (f = Object.getOwnPropertyDescriptor(i, h))
            : f,
        d;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        t = Reflect.decorate(l, i, h, f);
      else
        for (var c = l.length - 1; c >= 0; c--)
          (d = l[c]) &&
            (t = (e < 3 ? d(t) : e > 3 ? d(i, h, t) : d(i, h)) || t);
      return e > 3 && t && Object.defineProperty(i, h, t), t;
    },
  p1 =
    (globalThis && globalThis.__metadata) ||
    function (l, i) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(l, i);
    };
let k = class extends F {
  constructor() {
    super(...arguments);
    this.filled = "none";
  }
  render() {
    const i = {
      "half-filled": this.filled !== "none",
      filled: this.filled === "filled",
    };
    return a`<div class=${l1(i)} id="unit">
      <div></div>
      <div></div>
    </div>`;
  }
};
k.styles = r`
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
N([y(), p1("design:type", String)], k.prototype, "filled", void 0);
k = N([p("a2k-progress-unit")], k);
var C1 =
    (globalThis && globalThis.__decorate) ||
    function (l, i, h, f) {
      var e = arguments.length,
        t =
          e < 3
            ? i
            : f === null
            ? (f = Object.getOwnPropertyDescriptor(i, h))
            : f,
        d;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        t = Reflect.decorate(l, i, h, f);
      else
        for (var c = l.length - 1; c >= 0; c--)
          (d = l[c]) &&
            (t = (e < 3 ? d(t) : e > 3 ? d(i, h, t) : d(i, h)) || t);
      return e > 3 && t && Object.defineProperty(i, h, t), t;
    },
  o1 =
    (globalThis && globalThis.__metadata) ||
    function (l, i) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(l, i);
    };
class B extends F {
  constructor() {
    super(...arguments);
    (this.progress = 0), (this.width = 0);
  }
  async firstUpdated() {
    this.generateProgressUnits();
  }
  async updated(i) {
    i.has("progress") && this.updateProgressUnits();
  }
  async generateProgressUnits() {
    var i;
    const h = this.renderRoot.querySelector("#progress");
    if (!h) return;
    await this.updateComplete;
    const f =
      (i = h.getBoundingClientRect().width) !== null && i !== void 0 ? i : 0;
    if (this.width === f) return;
    this.width = f;
    const { gap: e } = getComputedStyle(h),
      d = Number(e.replace("px", "")) + 12,
      c = Math.ceil(f / d);
    Array(c)
      .fill(0)
      .forEach(() => {
        const g = document.createElement("a2k-progress-unit");
        g.setAttribute("filled", "none"), h == null || h.appendChild(g);
      });
  }
  async updateProgressUnits() {
    await this.updateComplete;
    const i = this.renderRoot.querySelectorAll("a2k-progress-unit"),
      h = (this.progress / 100) * i.length,
      f = M1(h),
      e = Math.floor(h);
    i.forEach((t, d) => {
      d < e
        ? t.setAttribute("filled", "filled")
        : d === e && f >= 0.5
        ? t.setAttribute("filled", "half")
        : t.setAttribute("filled", "none");
    });
  }
  render() {
    return a`<div id="progress" role="progress"></div>`;
  }
}
B.styles = r`
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
C1(
  [y({ type: Number }), o1("design:type", Object)],
  B.prototype,
  "progress",
  void 0
);
const M1 = (l) => Math.floor((l % 1) * 10) / 10;
window.customElements.define("a2k-progress", B);
let D = 0;
const X = document.querySelector("a2k-window[title='Please wait...']"),
  Z1 = X.children;
console.log("type", typeof Z1);
const n1 = setInterval(() => {
  const l = document.querySelector("a2k-progress");
  console.log(l),
    !!l &&
      ((D = D + 1.2),
      l.setAttribute("progress", D),
      D > 70 &&
        ((X.innerHTML = `
      <p>There was an error loading Andricos2000</p>
      <p>Andricos2000 is still a work in progress, keeping checking back for updates or follow progress on Twitter</p>
      <p>Hey there you, what's up?</p>
    `),
        clearInterval(n1)));
}, 100);
