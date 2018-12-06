// SCSS

require("./style.scss");

// Elm

const { Elm } = require("./elm/Main.elm");

Elm.Main.init({
  node: document.getElementById("elm")
});
