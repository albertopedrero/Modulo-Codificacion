document.getElementById("btnEnviar").addEventListener("click", function (e) {
    e.preventDefault()
    const errores = []; // aquí iremos guardando los distintos mensajes/enlaces de error
    const resumenErrores = document.getElementById("resumenErrores"); // parde del documento donde mostraremos los mensajes de error
    resumenErrores.innerHTML = ""; // vaciamos los posibles mensajes
    resumenErrores.style.display = "none"; // por ahora, ocultamos los mensajes de error
  
    // Obtenemos una referencia a cada uno de los elementos para comprobar sus valores
    const nombreUsuario = document.getElementById("nombreUsuario");
    const password = document.getElementById("password");
    const repetirPassword = document.getElementById("repetirPassword");
    const email = document.getElementById("email");
  
    // Validación de campos
    if (nombreUsuario.value.length < 8) {
      errores.push({ campo: "nombreUsuario", mensaje: "El nombre de usuario debe tener al menos 8 caracteres." });
    }
  
    if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password.value)) {
      errores.push({ campo: "password", mensaje: "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número." });
    }
  
    if (password.value !== repetirPassword.value) {
      errores.push({ campo: "repetirPassword", mensaje: "Las contraseñas no coinciden." });
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errores.push({ campo: "email", mensaje: "El correo electrónico no es válido." });
    }
  
    // Si la longitud del array de errores es > 0, significa que hay algún error)
    if (errores.length > 0) {
        let h2 = document.createElement('h2')
        h2.id='encabezado_errores' // creamos un h2 para indicar que hay errores
        h2.innerHTML = `Hay ${errores.length} errores en el formulario`
        resumenErrores.appendChild(h2)

        let ol = document.createElement('ol')
      errores.forEach(error => {
        const enlaceError = document.createElement("a");
        enlaceError.href = "#";
        enlaceError.textContent = error.mensaje;
        enlaceError.addEventListener("click", function (event) {
          event.preventDefault();
          document.getElementById(error.campo).focus();
        });
        const errorLi = document.createElement("li");
        errorLi.appendChild(enlaceError);
        ol.appendChild(errorLi)

      });
      resumenErrores.appendChild(ol);
      resumenErrores.style.display = "block";
      resumenErrores.focus();
    } else {
      alert("Formulario enviado con éxito");
    }
  });
  