import {
  r as l,
  s as h,
  p as d,
  e as c,
  i as X,
  y as Y,
  n as y,
  t as N,
} from "./vendor.c532821f.js";
const q = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver((n) => {
    for (const e of n)
      if (e.type === "childList")
        for (const a of e.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(n) {
    const e = {};
    return (
      n.integrity && (e.integrity = n.integrity),
      n.referrerpolicy && (e.referrerPolicy = n.referrerpolicy),
      n.crossorigin === "use-credentials"
        ? (e.credentials = "include")
        : n.crossorigin === "anonymous"
        ? (e.credentials = "omit")
        : (e.credentials = "same-origin"),
      e
    );
  }
  function r(n) {
    if (n.ep) return;
    n.ep = !0;
    const e = i(n);
    fetch(n.href, e);
  }
};
q();
class $ extends h {
  render() {
    return d`<div class="wrapper">
      <slot></slot>
    </div>`;
  }
}
$.styles = l`
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
window.customElements.define("a2k-stack", $);
class j extends h {
  render() {
    return d` <div id="panel">
      <slot></slot>
    </div>`;
  }
}
j.styles = l`
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
class R extends h {
  render() {
    return d`<div class="topbar-wrapper">
      <h2 class="heading">
        <slot></slot>
      </h2>
    </div>`;
  }
}
R.styles = l`
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
window.customElements.define("a2k-window-topbar", R);
var p =
    (globalThis && globalThis.__decorate) ||
    function (o, t, i, r) {
      var n = arguments.length,
        e =
          n < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, i))
            : r,
        a;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(o, t, i, r);
      else
        for (var s = o.length - 1; s >= 0; s--)
          (a = o[s]) &&
            (e = (n < 3 ? a(e) : n > 3 ? a(t, i, e) : a(t, i)) || e);
      return n > 3 && e && Object.defineProperty(t, i, e), e;
    },
  u =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    },
  k =
    (globalThis && globalThis.__classPrivateFieldGet) ||
    function (o, t, i, r) {
      if (i === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof t == "function" ? o !== t || !r : !t.has(o))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return i === "m" ? r : i === "a" ? r.call(o) : r ? r.value : t.get(o);
    },
  f,
  T,
  D,
  B;
class v extends h {
  constructor() {
    super();
    f.add(this),
      (this.title = ""),
      (this.draggable = !0),
      (this.cursorPositionX = null),
      (this.cursorPositionY = null),
      (this.styles = { top: "0px", left: "0px", width: "var(--window-width)" }),
      (this.img = new Image(0, 0)),
      (this.img.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
  }
  handleWindowMove(t, i) {
    const { top: r, left: n } = this.styles,
      { innerHeight: e, innerWidth: a } = window,
      s = this.renderRoot.querySelector("#window");
    if (!s) return;
    const M = Number(r == null ? void 0 : r.replace("px", "")),
      Z = Number(n == null ? void 0 : n.replace("px", "")),
      { pageX: g, pageY: b } = i;
    if (
      g !== 0 &&
      b !== 0 &&
      (g !== this.cursorPositionX || b !== this.cursorPositionY)
    ) {
      const {
          bottom: W,
          right: z,
          width: L,
          height: I,
        } = s.getBoundingClientRect(),
        m = g - this.cursorPositionX,
        H = b - this.cursorPositionY,
        x = M + H < 0,
        A = Z + m < 0,
        O = W + H > e,
        P = z + m > a,
        C = O || A || P || x;
      (this.cursorPositionX = g),
        (this.cursorPositionY = b),
        C
          ? (x && (this.styles = { top: "0px", left: `${Z}px` }),
            A && (this.styles = { top: `${M}px`, left: `${0}px` }),
            O && (this.styles = { top: `${e - I}px`, left: `${Z}px` }),
            P && (this.styles = { top: `${M}px`, left: `${a - L}px` }))
          : (this.styles = { top: `${M + H}px`, left: `${Z + m}px` });
    }
  }
  render() {
    return d`
      <div id="window" style=${X(this.styles)}>
        <a2k-panel>
          <div
            @dragstart="${k(this, f, "m", T)}"
            @drag="${k(this, f, "m", D)}"
            @dragend="${k(this, f, "m", B)}"
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
(f = new WeakSet()),
  (T = function (t) {
    var i;
    (i = t.dataTransfer) === null ||
      i === void 0 ||
      i.setDragImage(this.img, 0, 0),
      (this.cursorPositionX = t.pageX),
      (this.cursorPositionY = t.pageY);
  }),
  (D = function (t) {
    window.requestAnimationFrame((i) => this.handleWindowMove(i, t));
  }),
  (B = function () {
    (this.cursorPositionX = null), (this.cursorPositionY = null);
  });
v.styles = l`
    #window {
      position: absolute;
      top: 0;
      left: 0;
      width: var(--window-width);
    }
    .content {
      padding: 0 var(--window-spacing-horizontal);
    }
  `;
p([c(), u("design:type", Object)], v.prototype, "title", void 0);
p(
  [c({ type: Boolean }), u("design:type", Object)],
  v.prototype,
  "draggable",
  void 0
);
p([c(), u("design:type", Object)], v.prototype, "cursorPositionX", void 0);
p([c(), u("design:type", Object)], v.prototype, "cursorPositionY", void 0);
p([c(), u("design:type", Object)], v.prototype, "styles", void 0);
window.customElements.define("a2k-window", v);
class U extends h {
  constructor() {
    super(...arguments);
    (this.width = 16), (this.height = 14);
  }
  render() {
    return Y`
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
window.customElements.define("a2k-windows-logo", U);
var E =
    (globalThis && globalThis.__decorate) ||
    function (o, t, i, r) {
      var n = arguments.length,
        e =
          n < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, i))
            : r,
        a;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(o, t, i, r);
      else
        for (var s = o.length - 1; s >= 0; s--)
          (a = o[s]) &&
            (e = (n < 3 ? a(e) : n > 3 ? a(t, i, e) : a(t, i)) || e);
      return n > 3 && e && Object.defineProperty(t, i, e), e;
    },
  G =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
let w = class extends h {
  constructor() {
    super(...arguments);
    this.open = !1;
  }
  render() {
    const t = String(this.open) === "true";
    return d` <div class="start-menu ${t ? "open" : ""}">Start</div> `;
  }
};
w.styles = l`
    .start-menu {
      height: 200px;
      width: 200px;
      position: absolute;
      background: red;
      bottom: calc(0px + var(--taskbar-height));
      display: none;
    }

    .start-menu.open {
      display: block;
    }
  `;
E([c(), G("design:type", Object)], w.prototype, "open", void 0);
w = E([y("a2k-start-menu")], w);
var S =
    (globalThis && globalThis.__decorate) ||
    function (o, t, i, r) {
      var n = arguments.length,
        e =
          n < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, i))
            : r,
        a;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(o, t, i, r);
      else
        for (var s = o.length - 1; s >= 0; s--)
          (a = o[s]) &&
            (e = (n < 3 ? a(e) : n > 3 ? a(t, i, e) : a(t, i)) || e);
      return n > 3 && e && Object.defineProperty(t, i, e), e;
    },
  K =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
let V = class extends h {
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
    return d`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <div class="icon-wrapper">
            <a2k-windows-logo>
          </div>
          Start
        </button>
      </div>
    `;
  }
};
V.styles = l`
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
      width: 32px;
    }
  `;
S([N(), K("design:type", Object)], V.prototype, "_isMenuOpen", void 0);
V = S([y("a2k-start-button")], V);
class Q {
  constructor(t, i = 1e3) {
    (this.value = new Date()),
      (this.host = t),
      this.host.addController(this),
      (this.timeout = i);
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
var J =
  (globalThis && globalThis.__decorate) ||
  function (o, t, i, r) {
    var n = arguments.length,
      e =
        n < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, i))
          : r,
      a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      e = Reflect.decorate(o, t, i, r);
    else
      for (var s = o.length - 1; s >= 0; s--)
        (a = o[s]) && (e = (n < 3 ? a(e) : n > 3 ? a(t, i, e) : a(t, i)) || e);
    return n > 3 && e && Object.defineProperty(t, i, e), e;
  };
let _ = class extends h {
  constructor() {
    super(...arguments);
    this.clock = new Q(this);
  }
  render() {
    const t = tt.format(this.clock.value);
    return d`<div class="utility-bar">${t}</div>`;
  }
};
_.styles = l`
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
_ = J([y("a2k-utility-bar")], _);
const tt = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
class F extends h {
  render() {
    return d`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`;
  }
}
F.styles = l`
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
window.customElements.define("a2k-taskbar", F);
