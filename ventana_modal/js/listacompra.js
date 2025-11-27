// import { v4 as uuid } from 'uuid'

listadoProductos = []

var dialog = document.getElementById('dialog');
var disparador = document.getElementById('botonAnadir');
var botonCerrar = document.getElementById('botonCerrar');
var formulario = document.getElementById('formularioAnadir')

const elementosFoco = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    let primerElementoFoco;
    let ultimoElementoFoco;



document.getElementById('formularioAnadir').addEventListener('submit', (event) => {
    event.preventDefault() 
})



/* Gestión de la ventana modal accesible */

function mostrarModal() { /* muestra la ventana modal y realiza acciones asociadas */
  dialog.setAttribute('open', '')
  document.getElementById('cover').style.display = 'block'


  const contenidoFoco = dialog.querySelectorAll(elementosFoco)
  primerElementoFoco = contenidoFoco[0]
  ultimoElementoFoco = contenidoFoco[contenidoFoco.length - 1]

  primerElementoFoco.focus()

  document.addEventListener('keydown', pulsadoTabulador)
  document.addEventListener('keydown', pulsadoEscape)

}

function cerrarDialog() { /* cierra ventana modal y desactiva pulsación escape */
    dialog.removeAttribute('open');
    document.getElementById('cover').style.display = 'none'
    document.removeEventListener('keydown', pulsadoEscape)

    disparador.focus()
  }

  function pulsadoTabulador(e) { /* gestiona pulsaciones de tabulador para no salirse de la ventana */
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Navegar hacia atrás
        if (document.activeElement === primerElementoFoco) {
          e.preventDefault();
          ultimoElementoFoco.focus();
        }
      } else {
        // Navegar hacia adelante
        if (document.activeElement === ultimoElementoFoco) {
          e.preventDefault();
          primerElementoFoco.focus();
        }
      }
    }
  }

  function closeDialog() {
    dialog.removeAttribute('open');
    document.getElementById('cover').style.display = 'none';
    document.removeEventListener('keydown', addESC);
  }
  
  var pulsadoEscape = function(e) {
    if (e.keyCode == 27) {
      cerrarDialog();
    } 
  };

  disparador.addEventListener('click', mostrarModal);
  botonCerrar.addEventListener('click', cerrarDialog)

  /* hasta aquí todo lo que tiene que ver con la ventana modal */




document.getElementById('formularioAnadir').addEventListener('submit', (event) => {
    event.preventDefault() // anulamos envío por defecto del formulario
    let producto = document.querySelector('#nombreProducto')
    if (producto.value.trim() ==='' ){  // si el usuario no ha escrito nada, no añado nada
        return
    }
})
