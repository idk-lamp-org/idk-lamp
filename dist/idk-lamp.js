var IdkLampBundle = (() => {
  // src/idk-lamp.js
  var IdkLamp = class extends HTMLElement {
    static get observedAttributes() {
      return ["state", "interactive"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._onClick = this._onClick.bind(this);
      this._onKeyDown = this._onKeyDown.bind(this);
      this._interactiveAttached = false;
    }
    connectedCallback() {
      this.render();
      this._updateState();
      this._syncInteractivity();
    }
    disconnectedCallback() {
      this._detachInteractivity();
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue === newValue)
        return;
      if (name === "state")
        this._updateState();
      if (name === "interactive")
        this._syncInteractivity();
    }
    _updateState() {
      const lamp = this.shadowRoot.getElementById("lamp");
      if (!lamp)
        return;
      const state = (this.getAttribute("state") || "active").toLowerCase();
      lamp.classList.toggle("is-idk", state === "idk");
    }
    _syncInteractivity() {
      if (this.hasAttribute("interactive"))
        this._attachInteractivity();
      else
        this._detachInteractivity();
    }
    _attachInteractivity() {
      if (this._interactiveAttached)
        return;
      this._interactiveAttached = true;
      this.addEventListener("click", this._onClick);
      this.addEventListener("keydown", this._onKeyDown);
      this.tabIndex = 0;
      this.setAttribute("role", "button");
      this.setAttribute("aria-label", "Toggle idk-lamp state");
    }
    _detachInteractivity() {
      if (!this._interactiveAttached)
        return;
      this._interactiveAttached = false;
      this.removeEventListener("click", this._onClick);
      this.removeEventListener("keydown", this._onKeyDown);
      this.removeAttribute("role");
      this.removeAttribute("aria-label");
      this.tabIndex = -1;
    }
    _onClick() {
      const current = (this.getAttribute("state") || "active").toLowerCase();
      const next = current === "idk" ? "active" : "idk";
      this.setAttribute("state", next);
    }
    _onKeyDown(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this._onClick();
      }
    }
    render() {
      this.shadowRoot.innerHTML = `
      <style>
        :host {
          --size: 80px;
          --border-width: 8px;
          --border-color: #333;
          --color-active: #007AFF; /* blue */
          --color-idk: #D9A404;    /* low-sat amber */

          display: inline-block;
          outline: none;
        }

        :host([interactive]) { cursor: pointer; }

        :host([interactive]):focus-visible .lamp-container {
          /* \u8272\u306F\u56FA\u5B9A\u3057\u306A\u3044\uFF1A\u8996\u8A8D\u6027\u3060\u3051\u4E0A\u3052\u308B */
          box-shadow: 0 0 0 3px rgba(0,0,0,0.20);
        }

        .lamp-container {
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          border: var(--border-width) solid var(--border-color);
          background-color: var(--color-active);
          box-sizing: border-box;

          background-image: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%);
          transition: background-color 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .lamp-container.is-idk {
          background-color: var(--color-idk);
          animation: breathe 4s infinite ease-in-out;
        }

        @keyframes breathe {
          0%, 100% { opacity: 0.8; }
          50%      { opacity: 1.0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .lamp-container { transition: none; }
          .lamp-container.is-idk {
            animation: none;
            opacity: 0.9;
          }
        }
      </style>

      <div class="lamp-container" id="lamp" part="lamp"></div>
    `;
    }
  };
  if (!customElements.get("idk-lamp")) {
    customElements.define("idk-lamp", IdkLamp);
  }
})();
