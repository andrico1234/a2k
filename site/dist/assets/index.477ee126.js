import {
  e as V,
  i as Z,
  t as tt,
  P as et,
  b as ot,
  r as d,
  s as c,
  p as l,
  a as p,
  c as rt,
  y as nt,
  n as f,
  w as at,
  d as it,
  o as st,
} from "./vendor.14a1b6b4.js";
const lt = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
  new MutationObserver((a) => {
    for (const e of a)
      if (e.type === "childList")
        for (const i of e.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(a) {
    const e = {};
    return (
      a.integrity && (e.integrity = a.integrity),
      a.referrerpolicy && (e.referrerPolicy = a.referrerpolicy),
      a.crossorigin === "use-credentials"
        ? (e.credentials = "include")
        : a.crossorigin === "anonymous"
        ? (e.credentials = "omit")
        : (e.credentials = "same-origin"),
      e
    );
  }
  function n(a) {
    if (a.ep) return;
    a.ep = !0;
    const e = o(a);
    fetch(a.href, e);
  }
};
lt();
class dt {
  constructor(t, o = 1e3) {
    (this.value = new Date()),
      (this.host = t),
      this.host.addController(this),
      (this.timeout = o);
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
var T =
    (globalThis && globalThis.__classPrivateFieldGet) ||
    function (r, t, o, n) {
      if (o === "a" && !n)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof t == "function" ? r !== t || !n : !t.has(r))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return o === "m" ? n : o === "a" ? n.call(r) : n ? n.value : t.get(r);
    },
  R,
  j,
  P;
class ct extends Z {
  constructor(t) {
    super(t);
    if (((this.hasInitialised = !1), t.type !== tt.ELEMENT))
      throw new Error("The `drag` directive must be used on an element");
  }
  update(t, o) {
    if (this.hasInitialised) return;
    const n = t.element,
      [a, e] = o;
    n.setAttribute("data-dragging", "idle"),
      (a.draggableElement = n),
      (a.pointerTracker = new et(n, {
        start(...i) {
          return e.start(...i), n.setAttribute("data-dragging", "dragging"), !0;
        },
        move(...i) {
          e.move(...i);
        },
        end(...i) {
          e.end(...i), n.setAttribute("data-dragging", "idle");
        },
      })),
      (this.hasInitialised = !0);
  }
  render(t, o) {
    return ot;
  }
}
const pt = V(ct);
class ut {
  constructor(t) {
    (this.cursorPositionX = null),
      (this.cursorPositionY = null),
      (this.pointerTracker = null),
      (this.draggableElement = null),
      (this.styles = { top: "16px", left: "16px" }),
      R.set(
        this,
        (o, n) => (
          (this.cursorPositionX = Math.floor(o.pageX)),
          (this.cursorPositionY = Math.floor(o.pageY)),
          n.target.setAttribute("data-state", "dragging"),
          !0
        )
      ),
      j.set(this, (o, n) => {
        const [a] = n;
        window.requestAnimationFrame(() => this.handleWindowMove(a));
      }),
      P.set(this, (o, n) => {
        n.target.removeAttribute("data-state");
      }),
      (this.host = t),
      this.host.addController(this);
  }
  hostDisconnected() {
    this.pointerTracker && this.pointerTracker.stop();
  }
  draggable() {
    return pt(this, {
      start: T(this, R, "f"),
      move: T(this, j, "f"),
      end: T(this, P, "f"),
    });
  }
  handleWindowMove(t) {
    const { top: o, left: n } = this.styles,
      { innerHeight: a, innerWidth: e } = window,
      i = this.draggableElement;
    if (!i) return;
    const s = Number(o == null ? void 0 : o.replace("px", "")),
      u = Number(n == null ? void 0 : n.replace("px", "")),
      g = Math.floor(t.pageX),
      b = Math.floor(t.pageY);
    if (
      g !== 0 &&
      b !== 0 &&
      (g !== this.cursorPositionX || b !== this.cursorPositionY)
    ) {
      const {
          bottom: G,
          right: H,
          width: K,
          height: J,
        } = i.getBoundingClientRect(),
        x = g - this.cursorPositionX,
        O = b - this.cursorPositionY,
        B = s + O < 0,
        z = u + x < 0,
        L = G + O > a,
        U = H + x > e,
        Q = L || z || U || B;
      (this.cursorPositionX = g),
        (this.cursorPositionY = b),
        Q
          ? (B && (this.styles = { top: "0px", left: `${u}px` }),
            z && (this.styles = { top: `${s}px`, left: `${0}px` }),
            L && (this.styles = { top: `${a - J}px`, left: `${u}px` }),
            U && (this.styles = { top: `${s}px`, left: `${e - K}px` }))
          : (this.styles = { top: `${s + O}px`, left: `${u + x}px` }),
        this.host.requestUpdate();
    }
  }
}
(R = new WeakMap()), (j = new WeakMap()), (P = new WeakMap());
class I extends c {
  render() {
    return l`<div id="stack">
      <slot></slot>
    </div>`;
  }
}
I.styles = d`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;
window.customElements.define("a2k-stack", I);
class N extends c {
  render() {
    return l` <div id="panel">
      <slot></slot>
    </div>`;
  }
}
N.styles = d`
    #panel {
      --inset-shadow-padding: 2px;
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
    }
  `;
window.customElements.define("a2k-panel", N);
var ft =
    (globalThis && globalThis.__decorate) ||
    function (r, t, o, n) {
      var a = arguments.length,
        e =
          a < 3
            ? t
            : n === null
            ? (n = Object.getOwnPropertyDescriptor(t, o))
            : n,
        i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(r, t, o, n);
      else
        for (var s = r.length - 1; s >= 0; s--)
          (i = r[s]) &&
            (e = (a < 3 ? i(e) : a > 3 ? i(t, o, e) : i(t, o)) || e);
      return a > 3 && e && Object.defineProperty(t, o, e), e;
    },
  ht =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
class $ extends c {
  constructor() {
    super(...arguments);
    (this.closeButton = l`<button @click="${this.handleClose}">Close</button>`),
      (this.closeable = !1);
  }
  handleClose(t) {
    const o = new Event("close", { bubbles: !0, composed: !0 });
    t.target.dispatchEvent(o);
  }
  render() {
    return l`<div class="topbar-wrapper">
      <h2 class="heading">
        <slot></slot>
      </h2>
      ${this.closeable ? this.closeButton : ""}
    </div>`;
  }
}
$.styles = d`
    .topbar-wrapper {
      background: var(--window-topbar-background);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      user-select: none;
    }

    h2 {
      margin: 0;
      font-size: var(--window-topbar-heading-font-size);
      color: var(--window-topbar-heading-color);
      padding: 0 var(--window-spacing-horizontal);
    }
  `;
ft(
  [p({ type: Boolean }), ht("design:type", Object)],
  $.prototype,
  "closeable",
  void 0
);
window.customElements.define("a2k-window-topbar", $);
var C =
    (globalThis && globalThis.__decorate) ||
    function (r, t, o, n) {
      var a = arguments.length,
        e =
          a < 3
            ? t
            : n === null
            ? (n = Object.getOwnPropertyDescriptor(t, o))
            : n,
        i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(r, t, o, n);
      else
        for (var s = r.length - 1; s >= 0; s--)
          (i = r[s]) &&
            (e = (a < 3 ? i(e) : a > 3 ? i(t, o, e) : i(t, o)) || e);
      return a > 3 && e && Object.defineProperty(t, o, e), e;
    },
  D =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
class h extends c {
  constructor() {
    super();
    (this.heading = ""),
      (this.draggable = !1),
      (this.closeable = !1),
      (this.drag = new ut(this)),
      this.addEventListener("close", () => this.remove());
  }
  render() {
    return l`
      <div id="window" style=${rt(this.drag.styles)}>
        <a2k-panel>
          <div id="draggable" ${this.drag.draggable()}>
            <a2k-window-topbar ?closeable="${this.closeable}"
              >${this.heading}</a2k-window-topbar
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
h.styles = d`
    #window {
      font-family: var(--font-primary);
      position: absolute;
      width: var(--window-width);
      max-width: 100%;
    }

    #draggable[data-dragging="idle"] {
      cursor: var(--cursor-grab);
    }

    #draggable[data-dragging="dragging"] {
      cursor: var(--cursor-grabbing);
    }

    .content {
      padding: 0 var(--window-spacing-horizontal);
    }
  `;
C(
  [p({ type: String }), D("design:type", Object)],
  h.prototype,
  "heading",
  void 0
);
C(
  [p({ type: Boolean }), D("design:type", Object)],
  h.prototype,
  "draggable",
  void 0
);
C(
  [p({ type: Boolean }), D("design:type", Object)],
  h.prototype,
  "closeable",
  void 0
);
window.customElements.define("a2k-window", h);
var gt =
    (globalThis && globalThis.__decorate) ||
    function (r, t, o, n) {
      var a = arguments.length,
        e =
          a < 3
            ? t
            : n === null
            ? (n = Object.getOwnPropertyDescriptor(t, o))
            : n,
        i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(r, t, o, n);
      else
        for (var s = r.length - 1; s >= 0; s--)
          (i = r[s]) &&
            (e = (a < 3 ? i(e) : a > 3 ? i(t, o, e) : i(t, o)) || e);
      return a > 3 && e && Object.defineProperty(t, o, e), e;
    },
  bt =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
const mt = new URL("/assets/a2k-icons.b9ba7649.svg", self.location).href;
class A extends c {
  constructor() {
    super(...arguments);
    this.icon = "";
  }
  render() {
    return (
      this.icon ||
        console.warn(
          "This icon is a missing a 'name', please specify the 'name' of the icon you want to display"
        ),
      nt`
      <svg id="icon" height="1em" width="1em">
        <use href="${mt}#${this.icon}"></use>
      </svg>
    `
    );
  }
}
A.styles = d`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
    }
  `;
gt(
  [p({ type: String }), bt("design:type", Object)],
  A.prototype,
  "icon",
  void 0
);
window.customElements.define("a2k-icon", A);
var W =
    (globalThis && globalThis.__decorate) ||
    function (r, t, o, n) {
      var a = arguments.length,
        e =
          a < 3
            ? t
            : n === null
            ? (n = Object.getOwnPropertyDescriptor(t, o))
            : n,
        i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(r, t, o, n);
      else
        for (var s = r.length - 1; s >= 0; s--)
          (i = r[s]) &&
            (e = (a < 3 ? i(e) : a > 3 ? i(t, o, e) : i(t, o)) || e);
      return a > 3 && e && Object.defineProperty(t, o, e), e;
    },
  vt =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
let m = class extends c {
  constructor() {
    super(...arguments);
    this.open = !1;
  }
  render() {
    return l`
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
m.styles = d`
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
W([p(), vt("design:type", Object)], m.prototype, "open", void 0);
m = W([f("a2k-start-menu-item")], m);
var q =
    (globalThis && globalThis.__decorate) ||
    function (r, t, o, n) {
      var a = arguments.length,
        e =
          a < 3
            ? t
            : n === null
            ? (n = Object.getOwnPropertyDescriptor(t, o))
            : n,
        i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(r, t, o, n);
      else
        for (var s = r.length - 1; s >= 0; s--)
          (i = r[s]) &&
            (e = (a < 3 ? i(e) : a > 3 ? i(t, o, e) : i(t, o)) || e);
      return a > 3 && e && Object.defineProperty(t, o, e), e;
    },
  wt =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
let v = class extends c {
  constructor() {
    super(...arguments);
    this.open = !1;
  }
  handleAboutClick() {
    const t = l` <a2k-window closeable heading="About Andricos2000">
      <p>Deets coming soon...</p>
    </a2k-window>`;
    at(t, document.body);
  }
  render() {
    const t = String(this.open) === "true";
    return l`
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
v.styles = d`
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
q([p(), wt("design:type", Object)], v.prototype, "open", void 0);
v = q([f("a2k-start-menu")], v);
var X =
    (globalThis && globalThis.__decorate) ||
    function (r, t, o, n) {
      var a = arguments.length,
        e =
          a < 3
            ? t
            : n === null
            ? (n = Object.getOwnPropertyDescriptor(t, o))
            : n,
        i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(r, t, o, n);
      else
        for (var s = r.length - 1; s >= 0; s--)
          (i = r[s]) &&
            (e = (a < 3 ? i(e) : a > 3 ? i(t, o, e) : i(t, o)) || e);
      return a > 3 && e && Object.defineProperty(t, o, e), e;
    },
  yt =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
let w = class extends c {
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
    return l`
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
w.styles = d`
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
X([it(), yt("design:type", Object)], w.prototype, "_isMenuOpen", void 0);
w = X([f("a2k-start-button")], w);
var kt =
  (globalThis && globalThis.__decorate) ||
  function (r, t, o, n) {
    var a = arguments.length,
      e =
        a < 3
          ? t
          : n === null
          ? (n = Object.getOwnPropertyDescriptor(t, o))
          : n,
      i;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      e = Reflect.decorate(r, t, o, n);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (i = r[s]) && (e = (a < 3 ? i(e) : a > 3 ? i(t, o, e) : i(t, o)) || e);
    return a > 3 && e && Object.defineProperty(t, o, e), e;
  };
let E = class extends c {
  constructor() {
    super(...arguments);
    this.clock = new dt(this);
  }
  render() {
    const t = _t.format(this.clock.value);
    return l`<div class="utility-bar">${t}</div>`;
  }
};
E.styles = d`
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
E = kt([f("a2k-utility-bar")], E);
const _t = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
class Y extends c {
  render() {
    return l`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`;
  }
}
Y.styles = d`
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
window.customElements.define("a2k-taskbar", Y);
var F =
    (globalThis && globalThis.__decorate) ||
    function (r, t, o, n) {
      var a = arguments.length,
        e =
          a < 3
            ? t
            : n === null
            ? (n = Object.getOwnPropertyDescriptor(t, o))
            : n,
        i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(r, t, o, n);
      else
        for (var s = r.length - 1; s >= 0; s--)
          (i = r[s]) &&
            (e = (a < 3 ? i(e) : a > 3 ? i(t, o, e) : i(t, o)) || e);
      return a > 3 && e && Object.defineProperty(t, o, e), e;
    },
  xt =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
let y = class extends c {
  constructor() {
    super(...arguments);
    this.filled = "none";
  }
  render() {
    const t = {
      "half-filled": this.filled !== "none",
      filled: this.filled === "filled",
    };
    return l`<div class=${st(t)} id="unit">
      <div></div>
      <div></div>
    </div>`;
  }
};
y.styles = d`
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
F([p(), xt("design:type", String)], y.prototype, "filled", void 0);
y = F([f("a2k-progress-unit")], y);
var Ot =
    (globalThis && globalThis.__decorate) ||
    function (r, t, o, n) {
      var a = arguments.length,
        e =
          a < 3
            ? t
            : n === null
            ? (n = Object.getOwnPropertyDescriptor(t, o))
            : n,
        i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(r, t, o, n);
      else
        for (var s = r.length - 1; s >= 0; s--)
          (i = r[s]) &&
            (e = (a < 3 ? i(e) : a > 3 ? i(t, o, e) : i(t, o)) || e);
      return a > 3 && e && Object.defineProperty(t, o, e), e;
    },
  Tt =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
class M extends c {
  constructor() {
    super(...arguments);
    (this.progress = 0), (this.width = 0);
  }
  async firstUpdated() {
    this.generateProgressUnits();
  }
  async updated(t) {
    t.has("progress") && this.updateProgressUnits();
  }
  async generateProgressUnits() {
    var s;
    const t = this.renderRoot.querySelector("#progress");
    if (!t) return;
    await this.updateComplete;
    const o = (s = t.getBoundingClientRect().width) != null ? s : 0;
    if (this.width === o) return;
    this.width = o;
    const { gap: n } = getComputedStyle(t),
      e = Number(n.replace("px", "")) + 12,
      i = Math.ceil(o / e);
    Array(i)
      .fill(0)
      .forEach(() => {
        const u = document.createElement("a2k-progress-unit");
        u.setAttribute("filled", "none"), t == null || t.appendChild(u);
      });
  }
  async updateProgressUnits() {
    await this.updateComplete;
    const t = this.renderRoot.querySelectorAll("a2k-progress-unit"),
      o = (this.progress / 100) * t.length,
      n = Rt(o),
      a = Math.floor(o);
    t.forEach((e, i) => {
      i < a
        ? e.setAttribute("filled", "filled")
        : i === a && n >= 0.5
        ? e.setAttribute("filled", "half")
        : e.setAttribute("filled", "none");
    });
  }
  render() {
    return l`<div id="progress" role="progress"></div>`;
  }
}
M.styles = d`
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
Ot(
  [p({ type: Number }), Tt("design:type", Object)],
  M.prototype,
  "progress",
  void 0
);
const Rt = (r) => Math.floor((r % 1) * 10) / 10;
window.customElements.define("a2k-progress", M);
var jt =
    (globalThis && globalThis.__decorate) ||
    function (r, t, o, n) {
      var a = arguments.length,
        e =
          a < 3
            ? t
            : n === null
            ? (n = Object.getOwnPropertyDescriptor(t, o))
            : n,
        i;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(r, t, o, n);
      else
        for (var s = r.length - 1; s >= 0; s--)
          (i = r[s]) &&
            (e = (a < 3 ? i(e) : a > 3 ? i(t, o, e) : i(t, o)) || e);
      return a > 3 && e && Object.defineProperty(t, o, e), e;
    },
  Pt =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(r, t);
    };
class S extends c {
  constructor() {
    super(...arguments);
    this.disabled = !1;
  }
  render() {
    return l` <button ?disabled=${this.disabled}>
      <slot></slot>
    </button>`;
  }
}
S.styles = d`
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

    button:not([disabled]):active {
      border-bottom: 2px solid transparent;
      border-right: 0;
      border-left: 1px dotted var(--color-black);
      border-top: 1px dotted var(--color-black);
      box-shadow: var(--button-shadow-active);
      transform: translate(2px, 2px);
    }
  `;
jt(
  [p({ type: Boolean }), Pt("design:type", Object)],
  S.prototype,
  "disabled",
  void 0
);
window.customElements.define("a2k-button", S);
let k = 0;
const _ = document.querySelector("a2k-window[title='Please wait...']"),
  $t = setInterval(() => {
    const r = document.querySelector("a2k-progress");
    if (!!r && ((k = k + 1.2), r.setAttribute("progress", k), k > 70)) {
      for (; _.firstChild; ) _.removeChild(_.lastChild);
      (_.innerHTML = `
      <p>There was an error loading Andricos2000</p>
      <p>Andricos2000 is still a work in progress, keeping checking back for updates or follow progress on Twitter</p>
    `),
        clearInterval($t);
    }
  }, 100);
