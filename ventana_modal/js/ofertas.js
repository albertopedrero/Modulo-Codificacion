

listadoOfertas = [
    {
        idProducto: "xy7yts",
        producto: "Galletas",
        precio: 8.34,
        precioOferta: 6.25
    },
    {
        idProducto: "zds9ym",
        producto: "Jabón manos",
        precio: 3.2,
        precioOferta: 2.5
    },
    {
        idProducto: "9iimjh",
        producto: "Detergente lavadora",
        precio: 12.4,
        precioOferta: 9.99
    },
    {
        idProducto: "mjkhyt",
        producto: "Salmón entero",
        precio: 19.99,
        precioOferta: 12.99
    },
    {
        idProducto: "9iu1as",
        producto: "Harina espelta",
        precio: 3.10,
        precioOferta: 2.49
    },
    {
        idProducto: "mn7f4s",
        producto: "Leche entera",
        precio: 1.34,
        precioOferta: 1.1
    },
    {
        idProducto: "z92djd",
        producto: "Traseros pollo",
        precio: 3.9,
        precioOferta: 2.99
    }
]

resultadoBusquedaOfertas = [
    {
        idProducto: "zds9ym",
        producto: "Jabón manos",
        precio: 3.2,
        precioOferta: 2.5
    },
    {
        idProducto: "9iimjh",
        producto: "Detergente lavadora",
        precio: 12.4,
        precioOferta: 9.99
    }
]
document.getElementById('buscadorOfertas').addEventListener('submit', (event) =>{
    event.preventDefault();
    document.location.replace('resultadoOfertas.html');
})

function mostrarOfertas(){
    const listaOfertas = document.getElementById('listaOfertas');
    listadoOfertas.forEach( oferta => {
        let div = document.createElement('div')
        div.classList.add('productoOferta');
        let h2 = document.createElement('h3')
        h2.innerHTML = oferta.producto;
        let img = document.createElement('img');
        img.src='https://placehold.co/300x200/CCCCCC/000000';
        img.alt='';
        let precio = document.createElement('p')
        precio.classList.add('normal')
        precio.innerHTML = 'Antes: ' + oferta.precio;
        let precioOferta = document.createElement('p')
        precioOferta.classList.add('oferta')
        precioOferta.innerHTML = 'Ahora: ' + oferta.precioOferta + '€';
        let botonAnadir = document.createElement('button')
        botonAnadir.innerHTML = 'Añadir'
        div.append(h2, img, precio, precioOferta, botonAnadir)
        listaOfertas.appendChild(div)
    })
}

function mostrarResultadoBusquedaOfertas(){
    const listaOfertas = document.getElementById('listaOfertas');
    resultadoBusquedaOfertas.forEach( oferta => {
        let div = document.createElement('div')
        div.classList.add('productoOferta');
        let h2 = document.createElement('h3')
        h2.innerHTML = oferta.producto;
        let img = document.createElement('img');
        img.src='https://placehold.co/300x200/CCCCCC/000000';
        img.alt='';
        let precio = document.createElement('p')
        precio.classList.add('normal')
        precio.innerHTML = 'Antes: ' + oferta.precio;
        let precioOferta = document.createElement('p')
        precioOferta.classList.add('oferta')
        precioOferta.innerHTML = 'Ahora: ' + oferta.precioOferta + '€';
        let botonAnadir = document.createElement('button')
        botonAnadir.innerHTML = 'Añadir'
        div.append(h2, img, precio, precioOferta, botonAnadir)
        listaOfertas.appendChild(div)
    })
}