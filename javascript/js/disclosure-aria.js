let trigger = document.querySelector(".disclosure-widget .trigger"),
    panel = document.querySelector(".disclosure-widget .trigger + .panel");

trigger.addEventListener("click", function() {
  if ( this.getAttribute("aria-expanded") === "true" ) {
    this.setAttribute("aria-expanded", "false");
    panel.setAttribute("hidden", "");
  }
  else {
    this.setAttribute("aria-expanded", "true");
    panel.removeAttribute("hidden");
  } 
});