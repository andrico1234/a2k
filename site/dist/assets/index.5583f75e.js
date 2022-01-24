import {
  r as l,
  s as c,
  p,
  e as w,
  i as C,
  n as D,
} from "./vendor.34960ffc.js";
const F = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
  new MutationObserver((o) => {
    for (const e of o)
      if (e.type === "childList")
        for (const n of e.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && a(n);
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
F();
class R extends c {
  render() {
    return p`<div class="wrapper">
      <slot></slot>
    </div>`;
  }
}
R.styles = l`
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
window.customElements.define("a2k-stack", R);
class A extends c {
  render() {
    return p`<div class="topbar-wrapper">
      <h2 class="heading">
        <slot></slot>
      </h2>
    </div>`;
  }
}
A.styles = l`
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
window.customElements.define("a2k-window-topbar", A);
var v =
    (globalThis && globalThis.__decorate) ||
    function (i, t, r, a) {
      var o = arguments.length,
        e =
          o < 3
            ? t
            : a === null
            ? (a = Object.getOwnPropertyDescriptor(t, r))
            : a,
        n;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(i, t, r, a);
      else
        for (var s = i.length - 1; s >= 0; s--)
          (n = i[s]) &&
            (e = (o < 3 ? n(e) : o > 3 ? n(t, r, e) : n(t, r)) || e);
      return o > 3 && e && Object.defineProperty(t, r, e), e;
    },
  m =
    (globalThis && globalThis.__metadata) ||
    function (i, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(i, t);
    },
  x =
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
  u,
  W,
  B,
  S;
class d extends c {
  constructor() {
    super(...arguments);
    u.add(this),
      (this.draggable = !0),
      (this.cursorPositionX = null),
      (this.cursorPositionY = null),
      (this.styles = { top: "0px", left: "0px" });
  }
  handleWindowMove(t, r) {
    const { top: a, left: o } = this.styles,
      { innerHeight: e, innerWidth: n } = window,
      s = this.renderRoot.querySelector(".wrapper");
    if (!s) return;
    const f = Number(a == null ? void 0 : a.replace("px", "")),
      h = Number(o == null ? void 0 : o.replace("px", "")),
      { pageX: b, pageY: g } = r;
    if (
      b !== 0 &&
      g !== 0 &&
      (b !== this.cursorPositionX || g !== this.cursorPositionY)
    ) {
      const {
          bottom: E,
          right: I,
          width: X,
          height: Y,
        } = s.getBoundingClientRect(),
        y = b - this.cursorPositionX,
        k = g - this.cursorPositionY,
        O = f + k < 0,
        T = h + y < 0,
        $ = E + k > e,
        j = I + y > n,
        L = $ || T || j || O;
      (this.cursorPositionX = b),
        (this.cursorPositionY = g),
        L
          ? (O && (this.styles = { top: "0px", left: `${h}px` }),
            T && (this.styles = { top: `${f}px`, left: `${0}px` }),
            $ && (this.styles = { top: `${e - Y}px`, left: `${h}px` }),
            j && (this.styles = { top: `${f}px`, left: `${n - X}px` }))
          : (this.styles = { top: `${f + k}px`, left: `${h + y}px` });
    }
  }
  render() {
    return p` <div class="wrapper" style=${C(this.styles)}>
      <div
        @dragstart="${x(this, u, "m", W)}"
        @drag="${x(this, u, "m", B)}"
        @dragend="${x(this, u, "m", S)}"
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
(u = new WeakSet()),
  (W = function (t) {
    var r;
    const a = new Image();
    (r = t.dataTransfer) === null || r === void 0 || r.setDragImage(a, 0, 0),
      (this.cursorPositionX = t.pageX),
      (this.cursorPositionY = t.pageY);
  }),
  (B = function (t) {
    window.requestAnimationFrame((r) => this.handleWindowMove(r, t));
  }),
  (S = function () {
    (this.cursorPositionX = null), (this.cursorPositionY = null);
  });
d.styles = l`
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
d.properties = { title: { type: String } };
v(
  [w({ type: Boolean }), m("design:type", Object)],
  d.prototype,
  "draggable",
  void 0
);
v([w(), m("design:type", Object)], d.prototype, "cursorPositionX", void 0);
v([w(), m("design:type", Object)], d.prototype, "cursorPositionY", void 0);
v([w(), m("design:type", Object)], d.prototype, "styles", void 0);
window.customElements.define("a2k-window", d);
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
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      e = Reflect.decorate(i, t, r, a);
    else
      for (var s = i.length - 1; s >= 0; s--)
        (n = i[s]) && (e = (o < 3 ? n(e) : o > 3 ? n(t, r, e) : n(t, r)) || e);
    return o > 3 && e && Object.defineProperty(t, r, e), e;
  };
let _ = class extends c {
  render() {
    return p`<button>Start</button>`;
  }
};
_.styles = l`
    button {
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
  `;
_ = N([D("a2k-start-button")], _);
class q {
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
var U =
  (globalThis && globalThis.__decorate) ||
  function (i, t, r, a) {
    var o = arguments.length,
      e =
        o < 3
          ? t
          : a === null
          ? (a = Object.getOwnPropertyDescriptor(t, r))
          : a,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      e = Reflect.decorate(i, t, r, a);
    else
      for (var s = i.length - 1; s >= 0; s--)
        (n = i[s]) && (e = (o < 3 ? n(e) : o > 3 ? n(t, r, e) : n(t, r)) || e);
    return o > 3 && e && Object.defineProperty(t, r, e), e;
  };
let P = class extends c {
  constructor() {
    super(...arguments);
    this.clock = new q(this);
  }
  render() {
    const t = M.format(this.clock.value);
    return p`<div class="utility-bar">${t}</div>`;
  }
};
P.styles = l`
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
P = U([D("a2k-utility-bar")], P);
const M = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
class z extends c {
  render() {
    return p`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`;
  }
}
z.styles = l`
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
window.customElements.define("a2k-taskbar", z);
