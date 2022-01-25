import {
  r as d,
  s,
  p as l,
  e as f,
  i as E,
  y as I,
  n as O,
} from "./vendor.fd431537.js";
const X = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
  new MutationObserver((o) => {
    for (const e of o)
      if (e.type === "childList")
        for (const h of e.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && a(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const e = {};
    return (
      o.integrity && (e.integrity = o.integrity),
      o.referrerpolicy && (e.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (e.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (e.credentials = "omit")
        : (e.credentials = "same-origin"),
      e
    );
  }
  function a(o) {
    if (o.ep) return;
    o.ep = !0;
    const e = r(o);
    fetch(o.href, e);
  }
};
X();
class D extends s {
  render() {
    return l`<div class="wrapper">
      <slot></slot>
    </div>`;
  }
}
D.styles = d`
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    ::slotted(*) {
      margin-block-start: var(--stack-spacing-top) !important;
    }

    ::slotted(*:first-child) {
      margin-block: 0 !important;
    }
  `;
window.customElements.define("a2k-stack", D);
class $ extends s {
  render() {
    return l`<div class="topbar-wrapper">
      <h2 class="heading">
        <slot></slot>
      </h2>
    </div>`;
  }
}
$.styles = d`
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
window.customElements.define("a2k-window-topbar", $);
var w =
    (globalThis && globalThis.__decorate) ||
    function (i, t, r, a) {
      var o = arguments.length,
        e =
          o < 3
            ? t
            : a === null
            ? (a = Object.getOwnPropertyDescriptor(t, r))
            : a,
        h;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(i, t, r, a);
      else
        for (var n = i.length - 1; n >= 0; n--)
          (h = i[n]) &&
            (e = (o < 3 ? h(e) : o > 3 ? h(t, r, e) : h(t, r)) || e);
      return o > 3 && e && Object.defineProperty(t, r, e), e;
    },
  g =
    (globalThis && globalThis.__metadata) ||
    function (i, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(i, t);
    },
  H =
    (globalThis && globalThis.__classPrivateFieldGet) ||
    function (i, t, r, a) {
      if (r === "a" && !a)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof t == "function" ? i !== t || !a : !t.has(i))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return r === "m" ? a : r === "a" ? a.call(i) : a ? a.value : t.get(i);
    },
  c,
  T,
  j,
  A;
class v extends s {
  constructor() {
    super(...arguments);
    c.add(this),
      (this.draggable = !0),
      (this.cursorPositionX = null),
      (this.cursorPositionY = null),
      (this.styles = { top: "0px", left: "0px" });
  }
  handleWindowMove(t, r) {
    const { top: a, left: o } = this.styles,
      { innerHeight: e, innerWidth: h } = window,
      n = this.renderRoot.querySelector(".wrapper");
    if (!n) return;
    const p = Number(a == null ? void 0 : a.replace("px", "")),
      M = Number(o == null ? void 0 : o.replace("px", "")),
      { pageX: u, pageY: Z } = r;
    if (
      u !== 0 &&
      Z !== 0 &&
      (u !== this.cursorPositionX || Z !== this.cursorPositionY)
    ) {
      const {
          bottom: F,
          right: W,
          width: z,
          height: B,
        } = n.getBoundingClientRect(),
        b = u - this.cursorPositionX,
        V = Z - this.cursorPositionY,
        k = p + V < 0,
        x = M + b < 0,
        _ = F + V > e,
        P = W + b > h,
        S = _ || x || P || k;
      (this.cursorPositionX = u),
        (this.cursorPositionY = Z),
        S
          ? (k && (this.styles = { top: "0px", left: `${M}px` }),
            x && (this.styles = { top: `${p}px`, left: `${0}px` }),
            _ && (this.styles = { top: `${e - B}px`, left: `${M}px` }),
            P && (this.styles = { top: `${p}px`, left: `${h - z}px` }))
          : (this.styles = { top: `${p + V}px`, left: `${M + b}px` });
    }
  }
  render() {
    return l` <div class="wrapper" style=${E(this.styles)}>
      <div
        @dragstart="${H(this, c, "m", T)}"
        @drag="${H(this, c, "m", j)}"
        @dragend="${H(this, c, "m", A)}"
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
    </div>`;
  }
}
(c = new WeakSet()),
  (T = function (t) {
    var r;
    const a = new Image();
    (r = t.dataTransfer) === null || r === void 0 || r.setDragImage(a, 0, 0),
      (this.cursorPositionX = t.pageX),
      (this.cursorPositionY = t.pageY);
  }),
  (j = function (t) {
    window.requestAnimationFrame((r) => this.handleWindowMove(r, t));
  }),
  (A = function () {
    (this.cursorPositionX = null), (this.cursorPositionY = null);
  });
v.styles = d`
    .wrapper {
      --inset-shadow-padding: 2px;

      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      position: absolute;
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
      top: 0;
      left: 0;
      width: var(--window-width);
    }

    .content {
      padding: 0 var(--window-spacing-horizontal);
    }
  `;
v.properties = { title: { type: String } };
w(
  [f({ type: Boolean }), g("design:type", Object)],
  v.prototype,
  "draggable",
  void 0
);
w([f(), g("design:type", Object)], v.prototype, "cursorPositionX", void 0);
w([f(), g("design:type", Object)], v.prototype, "cursorPositionY", void 0);
w([f(), g("design:type", Object)], v.prototype, "styles", void 0);
window.customElements.define("a2k-window", v);
class Y extends s {
  constructor() {
    super(...arguments);
    (this.width = 16), (this.height = 14);
  }
  render() {
    return I`
    <svg
    width="auto"
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
window.customElements.define("a2k-windows-logo", Y);
var L =
  (globalThis && globalThis.__decorate) ||
  function (i, t, r, a) {
    var o = arguments.length,
      e =
        o < 3
          ? t
          : a === null
          ? (a = Object.getOwnPropertyDescriptor(t, r))
          : a,
      h;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      e = Reflect.decorate(i, t, r, a);
    else
      for (var n = i.length - 1; n >= 0; n--)
        (h = i[n]) && (e = (o < 3 ? h(e) : o > 3 ? h(t, r, e) : h(t, r)) || e);
    return o > 3 && e && Object.defineProperty(t, r, e), e;
  };
let m = class extends s {
  render() {
    return l`<button>
    <div class="icon-wrapper">
      <a2k-windows-logo>
    </div>
    Start
    </button>`;
  }
};
m.styles = d`
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
    }

    button:active {
      border: 0;
      border-left: 1px dotted var(--color-black);
      border-top: 1px dotted var(--color-black);
      box-shadow: var(--taskbar-start-button-shadow-active);
    }

    .icon-wrapper {
      width: 32px;
    }
  `;
m = L([O("a2k-start-button")], m);
class C {
  constructor(t, r = 1e3) {
    (this.value = new Date()),
      (this.host = t),
      this.host.addController(this),
      (this.timeout = r);
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
var N =
  (globalThis && globalThis.__decorate) ||
  function (i, t, r, a) {
    var o = arguments.length,
      e =
        o < 3
          ? t
          : a === null
          ? (a = Object.getOwnPropertyDescriptor(t, r))
          : a,
      h;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      e = Reflect.decorate(i, t, r, a);
    else
      for (var n = i.length - 1; n >= 0; n--)
        (h = i[n]) && (e = (o < 3 ? h(e) : o > 3 ? h(t, r, e) : h(t, r)) || e);
    return o > 3 && e && Object.defineProperty(t, r, e), e;
  };
let y = class extends s {
  constructor() {
    super(...arguments);
    this.clock = new C(this);
  }
  render() {
    const t = q.format(this.clock.value);
    return l`<div class="utility-bar">${t}</div>`;
  }
};
y.styles = d`
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
y = N([O("a2k-utility-bar")], y);
const q = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
class R extends s {
  render() {
    return l`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`;
  }
}
R.styles = d`
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
window.customElements.define("a2k-taskbar", R);
