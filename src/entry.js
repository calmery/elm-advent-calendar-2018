// SCSS

require("./style.scss");

// Elm

const { Elm } = require("./elm/Main.elm");

class ElmWebComponents extends HTMLElement {
  connectedCallback() {
    Elm.Main.init({ node: this });
  }
}

customElements.define("elm-web-components", ElmWebComponents);
