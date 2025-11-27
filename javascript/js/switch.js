const miSwitch = document.getElementById('miSwitch');
const switchLabel = document.getElementById('switchLabel');
const switchLabelElement = document.querySelector('.switch');

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
        switchLabel.textContent = 'Encendido';
        miSwitch.setAttribute('aria-checked', 'true');
    } else {
        switchLabel.textContent = 'Apagado';
        miSwitch.setAttribute('aria-checked', 'false');
    }
}