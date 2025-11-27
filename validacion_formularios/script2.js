document.getElementById("btnEnviar").addEventListener("click", function () {
    const resumenErrores = document.getElementById("resumenErrores");
    resumenErrores.innerHTML = ""; 
    resumenErrores.style.display = "none";
  
    const campos = [
      { id: "nombreUsuario", validacion: value => value.length >= 8, error: "El nombre de usuario debe tener al menos 8 caracteres." },
      { id: "password", validacion: value => /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value), error: "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número." },
      { id: "repetirPassword", validacion: value => value === document.getElementById("password").value, error: "Las contraseñas no coinciden." },
      { id: "email", validacion: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), error: "El correo electrónico no es válido." }
    ];
  
    const errors = [];
    campos.forEach(({ id, validacion, error }) => {
      const campo = document.getElementById(id);
      const mensajeError = document.getElementById(`${id}-error`);
  
      if (!validacion(campo.value)) {
        campo.setAttribute("aria-invalid", "true");
        mensajeError.innerHTML =  error;
        errors.push({ id, message: error });
      } else {
        campo.removeAttribute("aria-invalid");
        mensajeError.textContent = "";
        mensajeError.hidden = true;
      }
    });
  
    if (errors.length > 0) {
      errors.forEach(({ id, message }) => {
        const errorLink = document.createElement("a");
        errorLink.href = "#";
        errorLink.textContent =message;
        errorLink.addEventListener("click", function (event) {
          event.preventDefault();
          const campo = document.getElementById(id);
          campo.focus();
          const mensajeError = document.getElementById(`${id}-error`);
          mensajeError.hidden = false; 
        });
        const errorItem = document.createElement("div");
        errorItem.appendChild(errorLink);
        resumenErrores.appendChild(errorItem);
      });
      resumenErrores.style.display = "block";
      resumenErrores.focus();
    } else {
      alert("Formulario enviado con éxito");
    }
  });
  