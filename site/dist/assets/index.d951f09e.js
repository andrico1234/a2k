import {
  r as d,
  s as c,
  p as l,
  e as p,
  i as Z,
  y as tt,
  n as g,
  w as et,
  t as ot,
  o as rt,
} from "./vendor.7a89da44.js";
const nt = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
  new MutationObserver((n) => {
    for (const e of n)
      if (e.type === "childList")
        for (const a of e.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && i(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(n) {
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
  function i(n) {
    if (n.ep) return;
    n.ep = !0;
    const e = r(n);
    fetch(n.href, e);
  }
};
nt();
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
class W extends c {
  render() {
    return l` <div id="panel">
      <slot></slot>
    </div>`;
  }
}
W.styles = d`
    #panel {
      --inset-shadow-padding: 2px;
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
    }
  `;
window.customElements.define("a2k-panel", W);
var it =
    (globalThis && globalThis.__decorate) ||
    function (o, t, r, i) {
      var n = arguments.length,
        e =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, r))
            : i,
        a;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(o, t, r, i);
      else
        for (var s = o.length - 1; s >= 0; s--)
          (a = o[s]) &&
            (e = (n < 3 ? a(e) : n > 3 ? a(t, r, e) : a(t, r)) || e);
      return n > 3 && e && Object.defineProperty(t, r, e), e;
    },
  at =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
class T extends c {
  constructor() {
    super(...arguments);
    (this.closeButton = l`<button @click="${this.handleClose}">Close</button>`),
      (this.closable = !1);
  }
  handleClose(t) {
    const r = new Event("close", { bubbles: !0, composed: !0 });
    t.target.dispatchEvent(r);
  }
  render() {
    return l`<div class="topbar-wrapper">
      <h2 class="heading">
        <slot></slot>
      </h2>
      ${this.closable ? this.closeButton : ""}
    </div>`;
  }
}
T.styles = d`
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
it(
  [p({ type: Boolean }), at("design:type", Object)],
  T.prototype,
  "closable",
  void 0
);
window.customElements.define("a2k-window-topbar", T);
var h =
    (globalThis && globalThis.__decorate) ||
    function (o, t, r, i) {
      var n = arguments.length,
        e =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, r))
            : i,
        a;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(o, t, r, i);
      else
        for (var s = o.length - 1; s >= 0; s--)
          (a = o[s]) &&
            (e = (n < 3 ? a(e) : n > 3 ? a(t, r, e) : a(t, r)) || e);
      return n > 3 && e && Object.defineProperty(t, r, e), e;
    },
  b =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    },
  P =
    (globalThis && globalThis.__classPrivateFieldGet) ||
    function (o, t, r, i) {
      if (r === "a" && !i)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof t == "function" ? o !== t || !i : !t.has(o))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return r === "m" ? i : r === "a" ? i.call(o) : i ? i.value : t.get(o);
    },
  m,
  L,
  U,
  N;
class u extends c {
  constructor() {
    super();
    m.add(this),
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
      this.addEventListener("close", (t) => this.remove());
  }
  handleWindowMove(t, r) {
    const { top: i, left: n } = this.styles,
      { innerHeight: e, innerWidth: a } = window,
      s = this.renderRoot.querySelector("#window");
    if (!s) return;
    const f = Number(i == null ? void 0 : i.replace("px", "")),
      v = Number(n == null ? void 0 : n.replace("px", "")),
      { pageX: w, pageY: y } = r;
    if (
      w !== 0 &&
      y !== 0 &&
      (w !== this.cursorPositionX || y !== this.cursorPositionY)
    ) {
      const {
          bottom: H,
          right: K,
          width: Q,
          height: J,
        } = s.getBoundingClientRect(),
        A = w - this.cursorPositionX,
        j = y - this.cursorPositionY,
        B = f + j < 0,
        C = v + A < 0,
        z = H + j > e,
        M = K + A > a,
        V = z || C || M || B;
      (this.cursorPositionX = w),
        (this.cursorPositionY = y),
        V
          ? (B && (this.styles = { top: "0px", left: `${v}px` }),
            C && (this.styles = { top: `${f}px`, left: `${0}px` }),
            z && (this.styles = { top: `${e - J}px`, left: `${v}px` }),
            M && (this.styles = { top: `${f}px`, left: `${a - Q}px` }))
          : (this.styles = { top: `${f + j}px`, left: `${v + A}px` });
    }
  }
  render() {
    return l`
      <div id="window" style=${Z(this.styles)}>
        <a2k-panel>
          <div
            @dragstart="${P(this, m, "m", L)}"
            @drag="${P(this, m, "m", U)}"
            @dragend="${P(this, m, "m", N)}"
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
(m = new WeakSet()),
  (L = function (t) {
    var r;
    (r = t.dataTransfer) == null || r.setDragImage(this.img, 0, 0),
      (this.cursorPositionX = t.pageX),
      (this.cursorPositionY = t.pageY);
  }),
  (U = function (t) {
    window.requestAnimationFrame((r) => this.handleWindowMove(r, t));
  }),
  (N = function () {
    (this.cursorPositionX = null), (this.cursorPositionY = null);
  });
u.styles = d`
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
h([p(), b("design:type", Object)], u.prototype, "title", void 0);
h(
  [p({ type: Boolean }), b("design:type", Object)],
  u.prototype,
  "draggable",
  void 0
);
h([p(), b("design:type", Object)], u.prototype, "cursorPositionX", void 0);
h([p(), b("design:type", Object)], u.prototype, "cursorPositionY", void 0);
h(
  [p({ type: Boolean }), b("design:type", Object)],
  u.prototype,
  "closable",
  void 0
);
h([p(), b("design:type", Object)], u.prototype, "styles", void 0);
window.customElements.define("a2k-window", u);
var st =
    (globalThis && globalThis.__decorate) ||
    function (o, t, r, i) {
      var n = arguments.length,
        e =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, r))
            : i,
        a;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(o, t, r, i);
      else
        for (var s = o.length - 1; s >= 0; s--)
          (a = o[s]) &&
            (e = (n < 3 ? a(e) : n > 3 ? a(t, r, e) : a(t, r)) || e);
      return n > 3 && e && Object.defineProperty(t, r, e), e;
    },
  lt =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
const dt = new URL("/assets/a2k-icons.b9ba7649.svg", self.location).href;
class $ extends c {
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
      tt`
      <svg id="icon" height="1em" width="1em">
        <use href="${dt}#${this.icon}"></use>
      </svg>
    `
    );
  }
}
$.styles = d`
    /* Change this to somehow be the same as the icon it's referencing? */
    #icon {
      font-size: 32px;
    }
  `;
st(
  [p({ type: String }), lt("design:type", Object)],
  $.prototype,
  "icon",
  void 0
);
window.customElements.define("a2k-icon", $);
var X =
    (globalThis && globalThis.__decorate) ||
    function (o, t, r, i) {
      var n = arguments.length,
        e =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, r))
            : i,
        a;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(o, t, r, i);
      else
        for (var s = o.length - 1; s >= 0; s--)
          (a = o[s]) &&
            (e = (n < 3 ? a(e) : n > 3 ? a(t, r, e) : a(t, r)) || e);
      return n > 3 && e && Object.defineProperty(t, r, e), e;
    },
  ct =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
let _ = class extends c {
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
_.styles = d`
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
X([p(), ct("design:type", Object)], _.prototype, "open", void 0);
_ = X([g("a2k-start-menu-item")], _);
var Y =
    (globalThis && globalThis.__decorate) ||
    function (o, t, r, i) {
      var n = arguments.length,
        e =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, r))
            : i,
        a;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(o, t, r, i);
      else
        for (var s = o.length - 1; s >= 0; s--)
          (a = o[s]) &&
            (e = (n < 3 ? a(e) : n > 3 ? a(t, r, e) : a(t, r)) || e);
      return n > 3 && e && Object.defineProperty(t, r, e), e;
    },
  pt =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
let k = class extends c {
  constructor() {
    super(...arguments);
    this.open = !1;
  }
  handleAboutClick() {
    const t = l` <a2k-window closable title="About Andricos2000">
      <p>Deets coming soon...</p>
    </a2k-window>`;
    et(t, document.body);
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
                    <div slot="icon"><a2k-icon icon="documents-icon" /></div>
                    Portfolio
                  </a2k-start-menu-item>
                </a>
                <a target="_blank" href="https://twitter.com/andricokaroulla" rel="noreferrer noopener">
                  <a2k-start-menu-item>
                    <div slot="icon"><a2k-icon icon="twitter-icon" /></div>
                    Twitter
                  </a2k-start-menu-item>
                </a>

                <a target="_blank" href="mailto:karoulla.andrico@gmail.com" rel="noreferrer noopener">
                  <a2k-start-menu-item>
                    <div slot="icon"><a2k-icon icon="network-icon"/></div>
                    Contact
                  </a2k-start-menu-item>
                </a>
                <button @click="${this.handleAboutClick}">
                  <a2k-start-menu-item >
                    <div slot="icon"><a2k-icon icon="help-icon" /></div>
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
k.styles = d`
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
Y([p(), pt("design:type", Object)], k.prototype, "open", void 0);
k = Y([g("a2k-start-menu")], k);
var q =
    (globalThis && globalThis.__decorate) ||
    function (o, t, r, i) {
      var n = arguments.length,
        e =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, r))
            : i,
        a;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(o, t, r, i);
      else
        for (var s = o.length - 1; s >= 0; s--)
          (a = o[s]) &&
            (e = (n < 3 ? a(e) : n > 3 ? a(t, r, e) : a(t, r)) || e);
      return n > 3 && e && Object.defineProperty(t, r, e), e;
    },
  ut =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
let x = class extends c {
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
          <div class="icon-wrapper">
            <a2k-icon icon="windows-icon" />
          </div>
          Start
        </button>
      </div>
    `;
  }
};
x.styles = d`
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

    .icon-wrapper {
      width: var(--taskbar-start-button-icon-size);
    }
  `;
q([ot(), ut("design:type", Object)], x.prototype, "_isMenuOpen", void 0);
x = q([g("a2k-start-button")], x);
class ft {
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
var ht =
  (globalThis && globalThis.__decorate) ||
  function (o, t, r, i) {
    var n = arguments.length,
      e =
        n < 3
          ? t
          : i === null
          ? (i = Object.getOwnPropertyDescriptor(t, r))
          : i,
      a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      e = Reflect.decorate(o, t, r, i);
    else
      for (var s = o.length - 1; s >= 0; s--)
        (a = o[s]) && (e = (n < 3 ? a(e) : n > 3 ? a(t, r, e) : a(t, r)) || e);
    return n > 3 && e && Object.defineProperty(t, r, e), e;
  };
let D = class extends c {
  constructor() {
    super(...arguments);
    this.clock = new ft(this);
  }
  render() {
    const t = bt.format(this.clock.value);
    return l`<div class="utility-bar">${t}</div>`;
  }
};
D.styles = d`
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
D = ht([g("a2k-utility-bar")], D);
const bt = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
class F extends c {
  render() {
    return l`<div class="taskbar">
      <a2k-start-button></a2k-start-button>
      <a2k-utility-bar></a2k-utility-bar>
    </div>`;
  }
}
F.styles = d`
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
var G =
    (globalThis && globalThis.__decorate) ||
    function (o, t, r, i) {
      var n = arguments.length,
        e =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, r))
            : i,
        a;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(o, t, r, i);
      else
        for (var s = o.length - 1; s >= 0; s--)
          (a = o[s]) &&
            (e = (n < 3 ? a(e) : n > 3 ? a(t, r, e) : a(t, r)) || e);
      return n > 3 && e && Object.defineProperty(t, r, e), e;
    },
  gt =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
let O = class extends c {
  constructor() {
    super(...arguments);
    this.filled = "none";
  }
  render() {
    const t = {
      "half-filled": this.filled !== "none",
      filled: this.filled === "filled",
    };
    return l`<div class=${rt(t)} id="unit">
      <div></div>
      <div></div>
    </div>`;
  }
};
O.styles = d`
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
G([p(), gt("design:type", String)], O.prototype, "filled", void 0);
O = G([g("a2k-progress-unit")], O);
var mt =
    (globalThis && globalThis.__decorate) ||
    function (o, t, r, i) {
      var n = arguments.length,
        e =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, r))
            : i,
        a;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(o, t, r, i);
      else
        for (var s = o.length - 1; s >= 0; s--)
          (a = o[s]) &&
            (e = (n < 3 ? a(e) : n > 3 ? a(t, r, e) : a(t, r)) || e);
      return n > 3 && e && Object.defineProperty(t, r, e), e;
    },
  vt =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
class E extends c {
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
    const r = (s = t.getBoundingClientRect().width) != null ? s : 0;
    if (this.width === r) return;
    this.width = r;
    const { gap: i } = getComputedStyle(t),
      e = Number(i.replace("px", "")) + 12,
      a = Math.ceil(r / e);
    Array(a)
      .fill(0)
      .forEach(() => {
        const f = document.createElement("a2k-progress-unit");
        f.setAttribute("filled", "none"), t == null || t.appendChild(f);
      });
  }
  async updateProgressUnits() {
    await this.updateComplete;
    const t = this.renderRoot.querySelectorAll("a2k-progress-unit"),
      r = (this.progress / 100) * t.length,
      i = wt(r),
      n = Math.floor(r);
    t.forEach((e, a) => {
      a < n
        ? e.setAttribute("filled", "filled")
        : a === n && i >= 0.5
        ? e.setAttribute("filled", "half")
        : e.setAttribute("filled", "none");
    });
  }
  render() {
    return l`<div id="progress" role="progress"></div>`;
  }
}
E.styles = d`
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
mt(
  [p({ type: Number }), vt("design:type", Object)],
  E.prototype,
  "progress",
  void 0
);
const wt = (o) => Math.floor((o % 1) * 10) / 10;
window.customElements.define("a2k-progress", E);
var yt =
    (globalThis && globalThis.__decorate) ||
    function (o, t, r, i) {
      var n = arguments.length,
        e =
          n < 3
            ? t
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(t, r))
            : i,
        a;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        e = Reflect.decorate(o, t, r, i);
      else
        for (var s = o.length - 1; s >= 0; s--)
          (a = o[s]) &&
            (e = (n < 3 ? a(e) : n > 3 ? a(t, r, e) : a(t, r)) || e);
      return n > 3 && e && Object.defineProperty(t, r, e), e;
    },
  _t =
    (globalThis && globalThis.__metadata) ||
    function (o, t) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(o, t);
    };
class S extends c {
  constructor() {
    super(...arguments);
    this.disabled = !1;
  }
  render() {
    return l` <button .disabled=${this.disabled}>
      <slot></slot>
    </button>`;
  }
}
S.styles = d`
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
      cursor: pointer;

      border: var(--button-border);
      border-left: 1px dotted var(--color-white);
      border-top: 1px dotted var(--color-white);
      box-shadow: var(--button-shadow);
    }

    button[disabled] {
      border: 1px solid red;
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
yt(
  [p({ type: Boolean }), _t("design:type", Object)],
  S.prototype,
  "disabled",
  void 0
);
window.customElements.define("a2k-button", S);
let R = 0;
const kt = document.querySelector("a2k-window[title='Please wait...']");
kt.children;
const xt = setInterval(() => {
  const o = document.querySelector("a2k-progress");
  !o ||
    ((R = R + 1.2), o.setAttribute("progress", R), R > 70 && clearInterval(xt));
}, 100);
