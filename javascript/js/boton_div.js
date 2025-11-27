    document.querySelectorAll('.boton').forEach((boton)=>{
        boton.addEventListener('click', (event) =>{
            console.log('pulsado boton con click')
        })
            
        boton.addEventListener('keydown', (event) =>{
            if (event.keyCode === 13) {
                event.preventDefault()
                console.log('pulsado boton con intro')

            }
        })
        boton.addEventListener('keyup', (event) =>{

            if (event.keyCode === 32){
                event.preventDefault()
                console.log('pulsado boton con espacio')
            }
        })

    })
