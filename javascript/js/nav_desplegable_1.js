document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("js-enabled"); // Indica que JavaScript está activado

  const icon = `<svg width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true">
  <path fill="currentColor" d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
</svg>`;
  changeSpanButton()

  const dropdownButton = document.getElementById("dropdown-button");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdown = dropdownButton.parentElement;


  function changeSpanButton(){
    let span= document.querySelector('.spanButton')
    let newButton = document.createElement("button");
    newButton.setAttribute("id", "dropdown-button");
    newButton.setAttribute("aria-haspopup", "true")
    newButton.setAttribute("aria-expanded", "false");
    newButton.innerText = 'Segundos';
    newButton.innerHTML += icon;
    span.replaceWith(newButton);

  }

  function toggleDropdown() {
      const isExpanded = dropdownButton.getAttribute("aria-expanded") === "true";
      dropdownButton.setAttribute("aria-expanded", !isExpanded);
      dropdown.classList.toggle("show");
  }

  function closeDropdown() {
      dropdownButton.setAttribute("aria-expanded", "false");
      dropdown.classList.remove("show");
  }

  // Toggle al hacer click
  dropdownButton.addEventListener("click", toggleDropdown);

  // Cerrar al hacer click fuera del menú
  document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) {
          closeDropdown();
      }
  });

  //cerrar cuando primeros o postres reciben el foco
  document.querySelectorAll(".menu > ul > li:not(.dropdown) > a").forEach(li => {
    li.addEventListener("focus", closeDropdown);
  })

  // Manejo del teclado
  dropdownButton.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleDropdown();
      }
  });

  dropdownMenu.addEventListener("keydown", (event) => {
      const items = Array.from(dropdownMenu.querySelectorAll("a"));
      let index = items.indexOf(document.activeElement);

      if (event.key === "ArrowDown") {
          event.preventDefault();
          index = (index + 1) % items.length;
          items[index].focus();
      }

      if (event.key === "ArrowUp") {
          event.preventDefault();
          index = (index - 1 + items.length) % items.length;
          items[index].focus();
      }

      if (event.key === "Escape") {
          closeDropdown();
          dropdownButton.focus();
      }
  });
});
