
const nombreUsuario = document.getElementById('nombre-usuario');
const nombreUsuarioError = document.getElementById('nombre-usuario-error');
const password = document.getElementById('password');
const password_error = document.getElementById('password-error-msg');
const submit_btn = document.getElementById('submit');

let nombre_cambia = false;

nombreUsuario.addEventListener('input', function (e) {
  nombre_cambia = true;
}, false);

nombreUsuario.addEventListener('keyup', function (e) {
  let valorNombre = nombreUsuario.value;
  if (nombre_cambia) {
    if (valorNombre.length === 0) {
      nombreUsuarioError.innerHTML = "El nombre no puede estar vacío";
      nombreUsuario.setAttribute('aria-invalid', 'true');
      nombreUsuario.classList.remove('success');
    } else
    if (valorNombre !== 'cursoUDL') {
      nombreUsuarioError.innerHTML = "";
      nombreUsuarioError.innerHTML = "Nombre no disponible";
      nombreUsuario.setAttribute('aria-invalid', 'true');
      nombreUsuario.classList.remove('success');

    } else
    {
      nombreUsuario.setAttribute('aria-invalid', 'false');
      nombreUsuario.classList.add('success');
      nombreUsuarioError.innerHTML = "";
    }
  }

});

let name_changed = false;

nombreUsuario.addEventListener('input', function (e) {
  nombre_cambia = true;
}, false);

nombreUsuario.addEventListener('blur', function (e) {
  if (nombre_cambia && !nombreUsuario.value) {
    name_error.innerHTML = '';
    name_error.innerHTML = 'Your name cannot be empty.';
    nombreUsuario.setAttribute('aria-inavlid', 'true');
  } else
  {
    nombreUsuarioError.innerHTML = '';
    nombreUsuario.setAttribute('aria-inavlid', 'false');
  }
}, false);
