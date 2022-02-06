import {
  r as a,
  s as c,
  p as n,
  e as s,
  i as K,
  y as B,
  n as g,
  t as Q,
  o as J,
} from "./vendor.7a7d12ea.js";
const tt = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const d of i.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && r(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = e(l);
    fetch(l.href, i);
  }
};
tt();
class R extends c {
  render() {
    return n`<div id="stack">
      <slot></slot>
    </div>`;
  }
}
R.styles = a`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;
window.customElements.define("a2k-stack", R);
class j extends c {
  render() {
    return n` <div id="panel">
      <slot></slot>
    </div>`;
  }
}
j.styles = a`
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
class P extends c {
  render() {
    return n`<div class="topbar-wrapper">
      <h2 class="heading">
        <slot></slot>
      </h2>
    </div>`;
  }
}
P.styles = a`
    .topbar-wrapper {
      background: var(--window-topbar-background);
    }

    h2 {
      margin: 0;
      font-size: var(--window-topbar-heading-font-size);
      color: var(--window-topbar-heading-color);
      padding: 0 var(--window-spacing-horizontal);
    }
  `;
window.customElements.define("a2k-window-topbar", P);
var w =
    (globalThis && globalThis.__decorate) ||
    function (h, t, e, r) {
      var l = arguments.length,
        i =
          l < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        d;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(h, t, e, r);
      else
        for (var o = h.length - 1; o >= 0; o--)
          (d = h[o]) &&
            (i = (l < 3 ? d(i) : l > 3 ? d(t, e, i) : d(t, e)) || i);
      return l > 3 && i && Object.defineProperty(t, e, i), i;
    },
  y =
    (globalThis && globalThis.__metadata) ||
    function (h, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(h, t);
    },
  V =
    (globalThis && globalThis.__classPrivateFieldGet) ||
    function (h, t, e, r) {
      if (e === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof t == "function" ? h !== t || !r : !t.has(h))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return e === "m" ? r : e === "a" ? r.call(h) : r ? r.value : t.get(h);
    },
  v,
  T,
  $,
  S;
class f extends c {
  constructor() {
    super();
    v.add(this),
      (this.title = ""),
      (this.draggable = !0),
      (this.cursorPositionX = null),
      (this.cursorPositionY = null),
      (this.styles = { top: "0px", left: "0px", width: "var(--window-width)" }),
      (this.img = new Image(0, 0)),
      (this.img.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
  }
  handleWindowMove(t, e) {
    const { top: r, left: l } = this.styles,
      { innerHeight: i, innerWidth: d } = window,
      o = this.renderRoot.querySelector("#window");
    if (!o) return;
    const x = Number(r == null ? void 0 : r.replace("px", "")),
      p = Number(l == null ? void 0 : l.replace("px", "")),
      { pageX: u, pageY: A } = e;
    if (
      u !== 0 &&
      A !== 0 &&
      (u !== this.cursorPositionX || A !== this.cursorPositionY)
    ) {
      const {
          bottom: Y,
          right: U,
          width: N,
          height: q,
        } = o.getBoundingClientRect(),
        C = u - this.cursorPositionX,
        k = A - this.cursorPositionY,
        D = x + k < 0,
        H = p + C < 0,
        _ = Y + k > i,
        O = U + C > d,
        G = _ || H || O || D;
      (this.cursorPositionX = u),
        (this.cursorPositionY = A),
        G
          ? (D && (this.styles = { top: "0px", left: `${p}px` }),
            H && (this.styles = { top: `${x}px`, left: `${0}px` }),
            _ && (this.styles = { top: `${i - q}px`, left: `${p}px` }),
            O && (this.styles = { top: `${x}px`, left: `${d - N}px` }))
          : (this.styles = { top: `${x + k}px`, left: `${p + C}px` });
    }
  }
  render() {
    return n`
      <div id="window" style=${K(this.styles)}>
        <a2k-panel>
          <div
            @dragstart="${V(this, v, "m", T)}"
            @drag="${V(this, v, "m", $)}"
            @dragend="${V(this, v, "m", S)}"
            class="topbar-wrapper"
            draggable="${this.draggable}"
          >
            <a2k-window-topbar>${this.title}</a2k-window-topbar>
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
(v = new WeakSet()),
  (T = function (t) {
    var e;
    (e = t.dataTransfer) === null ||
      e === void 0 ||
      e.setDragImage(this.img, 0, 0),
      (this.cursorPositionX = t.pageX),
      (this.cursorPositionY = t.pageY);
  }),
  ($ = function (t) {
    window.requestAnimationFrame((e) => this.handleWindowMove(e, t));
  }),
  (S = function () {
    (this.cursorPositionX = null), (this.cursorPositionY = null);
  });
f.styles = a`
    #window {
      font-family: var(--font-primary);
      position: absolute;
      top: 0;
      left: 0;
      width: var(--window-width);
      max-width: 100%;
    }
    .content {
      padding: 0 var(--window-spacing-horizontal);
    }
  `;
w([s(), y("design:type", Object)], f.prototype, "title", void 0);
w(
  [s({ type: Boolean }), y("design:type", Object)],
  f.prototype,
  "draggable",
  void 0
);
w([s(), y("design:type", Object)], f.prototype, "cursorPositionX", void 0);
w([s(), y("design:type", Object)], f.prototype, "cursorPositionY", void 0);
w([s(), y("design:type", Object)], f.prototype, "styles", void 0);
window.customElements.define("a2k-window", f);
class it extends c {
  constructor() {
    super(...arguments);
    (this.width = 16), (this.height = 14);
  }
  render() {
    return B`
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
window.customElements.define("a2k-windows-logo", it);
class et extends c {
  constructor() {
    super(...arguments);
    (this.width = 24), (this.height = 24);
  }
  render() {
    return B`
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
window.customElements.define("a2k-help-logo", et);
var z =
    (globalThis && globalThis.__decorate) ||
    function (h, t, e, r) {
      var l = arguments.length,
        i =
          l < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        d;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(h, t, e, r);
      else
        for (var o = h.length - 1; o >= 0; o--)
          (d = h[o]) &&
            (i = (l < 3 ? d(i) : l > 3 ? d(t, e, i) : d(t, e)) || i);
      return l > 3 && i && Object.defineProperty(t, e, i), i;
    },
  ht =
    (globalThis && globalThis.__metadata) ||
    function (h, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(h, t);
    };
let b = class extends c {
  constructor() {
    super(...arguments);
    this.open = !1;
  }
  render() {
    return n`
      <button id="start-menu-item">
        <div id="icon-wrapper">
          <slot name="icon"></slot>
        </div>
        <p id="text-wrapper">
          <slot> </slot>
        </p>
      </button>
    `;
  }
};
b.styles = a`
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
z([s(), ht("design:type", Object)], b.prototype, "open", void 0);
b = z([g("a2k-start-menu-item")], b);
var W =
    (globalThis && globalThis.__decorate) ||
    function (h, t, e, r) {
      var l = arguments.length,
        i =
          l < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        d;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(h, t, e, r);
      else
        for (var o = h.length - 1; o >= 0; o--)
          (d = h[o]) &&
            (i = (l < 3 ? d(i) : l > 3 ? d(t, e, i) : d(t, e)) || i);
      return l > 3 && i && Object.defineProperty(t, e, i), i;
    },
  lt =
    (globalThis && globalThis.__metadata) ||
    function (h, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(h, t);
    };
let m = class extends c {
  constructor() {
    super(...arguments);
    this.open = !1;
  }
  render() {
    const t = String(this.open) === "true";
    return n`
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
                <a2k-start-menu-item>
                  <div slot="icon"><a2k-help-logo /></div>
                  Help
                </a2k-start-menu-item>
                <a2k-start-menu-item>
                  <div slot="icon"><a2k-help-logo /></div>
                  Help
                </a2k-start-menu-item>
                <a2k-start-menu-item>
                  <div slot="icon"><a2k-help-logo /></div>
                  Help
                </a2k-start-menu-item>
              </a2k-stack>
            </div>
          </a2k-panel>
        </div>
      </div>
    `;
  }
};
m.styles = a`
    #start-menu {
      width: var(--start-menu-height);
      position: absolute;
      bottom: calc(0px + var(--taskbar-height));
      display: none;
    }

    #start-menu.open {
      display: block;
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

    #side-strip p {
      color: white;
      font-weight: var(--font-weight-600);
      margin: 0;
      padding-inline-start: var(--spacing-50);
    }
  `;
W([s(), lt("design:type", Object)], m.prototype, "open", void 0);
m = W([g("a2k-start-menu")], m);
var L =
    (globalThis && globalThis.__decorate) ||
    function (h, t, e, r) {
      var l = arguments.length,
        i =
          l < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        d;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(h, t, e, r);
      else
        for (var o = h.length - 1; o >= 0; o--)
          (d = h[o]) &&
            (i = (l < 3 ? d(i) : l > 3 ? d(t, e, i) : d(t, e)) || i);
      return l > 3 && i && Object.defineProperty(t, e, i), i;
    },
  rt =
    (globalThis && globalThis.__metadata) ||
    function (h, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(h, t);
    };
let M = class extends c {
  constructor() {
    super(...arguments);
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
    return n`
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
M.styles = a`
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
L([Q(), rt("design:type", Object)], M.prototype, "_isMenuOpen", void 0);
M = L([g("a2k-start-button")], M);
class dt {
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
var ot =
  (globalThis && globalThis.__decorate) ||
  function (h, t, e, r) {
    var l = arguments.length,
      i =
        l < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, e))
          : r,
      d;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(h, t, e, r);
    else
      for (var o = h.length - 1; o >= 0; o--)
        (d = h[o]) && (i = (l < 3 ? d(i) : l > 3 ? d(t, e, i) : d(t, e)) || i);
    return l > 3 && i && Object.defineProperty(t, e, i), i;
  };
let F = class extends c {
  constructor() {
    super(...arguments);
    this.clock = new dt(this);
  }
  render() {
    const t = ct.format(this.clock.value);
    return n`<div class="utility-bar">${t}</div>`;
  }
};
F.styles = a`
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
F = ot([g("a2k-utility-bar")], F);
const ct = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
class I extends c {
  render() {
    return n`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`;
  }
}
I.styles = a`
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
window.customElements.define("a2k-taskbar", I);
var X =
    (globalThis && globalThis.__decorate) ||
    function (h, t, e, r) {
      var l = arguments.length,
        i =
          l < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        d;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(h, t, e, r);
      else
        for (var o = h.length - 1; o >= 0; o--)
          (d = h[o]) &&
            (i = (l < 3 ? d(i) : l > 3 ? d(t, e, i) : d(t, e)) || i);
      return l > 3 && i && Object.defineProperty(t, e, i), i;
    },
  at =
    (globalThis && globalThis.__metadata) ||
    function (h, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(h, t);
    };
let Z = class extends c {
  constructor() {
    super(...arguments);
    this.filled = "none";
  }
  render() {
    const t = {
      "half-filled": this.filled !== "none",
      filled: this.filled === "filled",
    };
    return n`<div class=${J(t)} id="unit">
      <div></div>
      <div></div>
    </div>`;
  }
};
Z.styles = a`
    #unit {
      width: 12px;
      height: 100%;
      display: flex;
      flex-direction: row;
    }

    #unit > div {
      width: 6px;
      height: 100%;
    }

    .half-filled > div:first-child {
      background: var(--color-blue-100);
    }

    .filled > :last-child {
      background: var(--color-blue-100);
    }
  `;
X([s(), at("design:type", String)], Z.prototype, "filled", void 0);
Z = X([g("a2k-progress-unit")], Z);
var nt =
    (globalThis && globalThis.__decorate) ||
    function (h, t, e, r) {
      var l = arguments.length,
        i =
          l < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        d;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(h, t, e, r);
      else
        for (var o = h.length - 1; o >= 0; o--)
          (d = h[o]) &&
            (i = (l < 3 ? d(i) : l > 3 ? d(t, e, i) : d(t, e)) || i);
      return l > 3 && i && Object.defineProperty(t, e, i), i;
    },
  st =
    (globalThis && globalThis.__metadata) ||
    function (h, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(h, t);
    };
class E extends c {
  constructor() {
    super(...arguments);
    (this.progress = 0), (this.width = 0);
  }
  async firstUpdated() {
    var t;
    const e = this.renderRoot.querySelector("#progress");
    await this.updateComplete;
    const r =
      (t = e == null ? void 0 : e.getBoundingClientRect().width) !== null &&
      t !== void 0
        ? t
        : 0;
    if (this.width === r) return;
    this.width = r;
    const l = Math.ceil(r / 14);
    Array(l)
      .fill(0)
      .forEach(() => {
        const i = document.createElement("a2k-progress-unit");
        i.setAttribute("filled", "filled"), e == null || e.appendChild(i);
      });
  }
  render() {
    return n`<div id="progress" role="progress"></div>`;
  }
}
E.styles = a`
    #progress {
      width: 100%;
      display: flex;
      box-shadow: var(--shadow-inset-medium);
      padding-left: 3px;
      padding-right: 2px;
      padding-bottom: 2px;
      padding-top: 3px;
      height: 24px;
      border-right: 1px solid white;
      gap: 2px;
      overflow: hidden;
    }
  `;
nt(
  [s({ type: Number }), st("design:type", Object)],
  E.prototype,
  "progress",
  void 0
);
window.customElements.define("a2k-progress", E);
