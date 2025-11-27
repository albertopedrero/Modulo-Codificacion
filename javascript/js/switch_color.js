const miSwitch = document.getElementById('miSwitch');
const switchLabel = document.getElementById('switchLabel');
const switchLabelElement = document.querySelector('.switch');

/*if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    console.log('Modo oscuro soportado');
  } else {
    console.log('modo oscuro no soportado')
  }*/

miSwitch.addEventListener('change', () => {
    updateSwitchState();
});

switchLabelElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        miSwitch.checked = !miSwitch.checked;
        updateSwitchState();
    }
});

function updateSwitchState() {
    if (miSwitch.checked) {
        switchLabel.textContent = 'Oscuro';
        miSwitch.setAttribute('aria-checked', 'true');
        document.body.classList.add('dark-mode')
    } else {
        switchLabel.textContent = 'Claro';
        miSwitch.setAttribute('aria-checked', 'false');
        document.body.classList.remove('dark-mode')
    }
}