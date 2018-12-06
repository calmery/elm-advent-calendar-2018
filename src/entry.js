// SCSS

const css = require("./style.scss");

// Elm

const { Elm } = require("./elm/Main.elm");

class ElmWebComponents extends HTMLElement {
  connectedCallback() {
    const shadowDom = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.innerHTML = css;
    shadowDom.appendChild(style);

    const div = document.createElement("div");
    shadowDom.appendChild(div);

    Elm.Main.init({ node: div });
  }
}

customElements.define("elm-web-components", ElmWebComponents);
