var elm = document.getElementById("elm");
var input = document.getElementById("input");
var button = document.getElementById("button");

elm.addEventListener("load", function() {
  input.removeAttribute("disabled");
  button.removeAttribute("disabled");
});

elm.addEventListener("error", function() {
  input.removeAttribute("disabled");
  button.removeAttribute("disabled");
});

button.addEventListener("click", function() {
  elm.setAttribute("data-user-id", input.value);

  input.setAttribute("disabled", true);
  button.setAttribute("disabled", true);
});
