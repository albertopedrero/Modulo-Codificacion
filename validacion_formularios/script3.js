document.getElementById('formulario').addEventListener('input', function (event) {
  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');

  const errorNombre = document.getElementById('error-nombre');
  const errorEmail = document.getElementById('error-email');

  if (nombreInput.value.length < 8 && nombreInput.value !== '') {
    errorNombre.textContent = 'El nombre debe tener al menos 8 caracteres.';
    nombreInput.setAttribute('aria-invalid', 'true');
  } else {
    errorNombre.textContent = '';
    nombreInput.removeAttribute('aria-invalid');
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  if (!emailValido && emailInput.value !== '') {
    errorEmail.textContent = 'El correo electrónico no tiene un formato válido.';
    emailInput.setAttribute('aria-invalid', 'true');
  } else {
    errorEmail.textContent = '';
    emailInput.removeAttribute('aria-invalid');
  }
});
