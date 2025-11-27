var formulario = document.querySelector('#formulario');
var listaTareas = document.querySelector('#lista_tareas');
var total = document.querySelector('#total');

var listadoTareas = [];

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    var input = document.querySelector('#tarea');
    if (input.value.trim() === "") {
        return;
    }
    
    var nuevoLi = document.createElement('li');
    nuevoLi.classList.add("list-group-item");
    nuevoLi.addEventListener('dblclick', function() {
        this.parentElement.removeChild(this);
    })

    nuevoLi.innerHTML = input.value;
    listaTareas.appendChild(nuevoLi);

    listadoTareas.push(input.value);

    total.innerHTML = `<i>Número total de tareas  ${listadoTareas.length}</i>`;

    input.value = "";
})

function mostrarTodas(){
    listaTareas.innerHTML = "";
    listadoTareas.forEach( function(tarea) {
        var nuevoLi = document.createElement('li');
        nuevoLi.classList.add("list-group-item");
        nuevoLi.addEventListener('dblclick', function() {
            this.parentElement.removeChild(this);
        })
        nuevoLi.innerHTML = tarea;
        listaTareas.appendChild(nuevoLi);
    })
}
function mostrarPrimeras(){
    listaTareas.innerHTML = "";
    for (var i=0; i < 5; i++){
        var nuevoLi = document.createElement('li');
        nuevoLi.classList.add("list-group-item");
        nuevoLi.addEventListener('dblclick', function() {
            this.parentElement.removeChild(this);
        })
        nuevoLi.innerHTML = listadoTareas[i];
        listaTareas.appendChild(nuevoLi);
    }
}

function mostrarUltimas(){
    listaTareas.innerHTML = "";
    var inicio = listadoTareas.length - 5;
    for (var i=0; i < 5; i++){
        var nuevoLi = document.createElement('li');
        nuevoLi.classList.add("list-group-item");
        nuevoLi.addEventListener('dblclick', function() {
            this.parentElement.removeChild(this);
        })
        nuevoLi.innerHTML = listadoTareas[inicio++];
        listaTareas.appendChild(nuevoLi);
    }
}


