// Polyfill

require("@webcomponents/webcomponentsjs");

// SCSS

const css = require("./style.scss");

// Elm

const { Elm } = require("./elm/Main.elm");

class ElmQiitaProfile extends HTMLElement {
  constructor() {
    super();

    this.app = null;
  }

  // Attribute

  static get observedAttributes() {
    return ["data-user-id"];
  }

  attributeChangedCallback(name, _, nextValue) {
    if (this.app !== null && name === "data-user-id") {
      this.app.ports.request.send(nextValue);
    }
  }

  // Connect

  connectedCallback() {
    const shadowDom = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.innerHTML = css;
    shadowDom.appendChild(style);

    const div = document.createElement("div");
    shadowDom.appendChild(div);

    this.app = Elm.Main.init({
      node: div,
      flags: this.getAttribute("data-user-id") || ""
    });

    this._subscribe();
  }

  // Disconnect

  disconnectedCallback() {
    this._unsubscribe();
  }

  // Ports

  _subscribe() {
    const { load, error } = this.app.ports;

    load.subscribe(() => {
      this.dispatchEvent(new CustomEvent("load"));
    });

    error.subscribe(() => {
      this.dispatchEvent(new CustomEvent("error"));
    });
  }

  _unsubscribe() {
    Object.entries(this.app.ports).forEach(([, value]) => {
      if (value.hasOwnProperty("unsubscribe")) {
        value.unsubscribe();
      }
    });
  }
}

customElements.define("elm-qiita-profile", ElmQiitaProfile);
