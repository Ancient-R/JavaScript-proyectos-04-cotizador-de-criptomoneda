//Creamos una instancia de clase del archivo api.js
const cotizador = new API('822fd239e301b3064a5cbc801657b75162fcff1ceb51bb693d569a41a9bb7b0e')
//Creamos una instancia de clase del archivo ui.js
const ui = new Interfaz()

//Localizamos el formulario y los select del DOM
const formulario = document.getElementById('formulario')
const selectMoneda = document.getElementById('moneda')
const selectCripto = document.getElementById('criptomoneda')
const cotizacion = document.getElementById('resultado')

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    
    //Leer el tipo de moneda
    const moneda = selectMoneda.options[selectMoneda.selectedIndex].value
    
    //Leer el tipo de criptomoneda
    const criptomoneda = selectCripto.options[selectCripto.selectedIndex].value

    //Comprobar que ambos campos tengan algo seleccionado
    if(moneda === '' || criptomoneda === ''){

        //Arroja una alerta en caso de error
        ui.mostrarMensaje('Verifique los campos', 'alert bg-danger text-center')

    }else{
        //Consultar la API
        cotizador.obtenerValores(moneda, criptomoneda)
            .then(data => ui.mostrarResultado(data.resultado.RAW, moneda, criptomoneda))
    }

    
})