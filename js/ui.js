
class Interfaz {

    constructor(){
        this.init()
    }
    init(){
        this.construirSelect()
    }

    construirSelect = () => {
        //Llamamos al método que se encuentra en el archivo api.js
        cotizador.obtenerMonedas()
            .then(monedas => {
                const fragment = document.createDocumentFragment()
                for(const [key, value] of Object.entries(monedas.monedas.Data)){
                    const option = document.createElement('option')
                    option.value = value.Symbol
                    option.textContent = value.CoinName
                    fragment.append(option)
                   
                }
                selectCripto.append(fragment)
            })
    }

    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div')
        div.className = clases
        div.append(document.createTextNode(mensaje))

        //Seleccionar mensaje
        const divMensajes = document.querySelector('.mensajes')
        divMensajes.append(div)

        //Mostrar contenido
       setTimeout(() =>{
            document.querySelector('.mensajes div').remove()
        }, 3000)
    }

   //Imprime el resultado de la cotización
   mostrarResultado(resultado, moneda, criptomoneda){

    //En caso de que haya un resultado anterior, hay que eliminarlo
    const resultadoAnterior = document.querySelector('#resultado > div')
    if(resultadoAnterior) resultadoAnterior.remove()

       let respuesta = resultado[criptomoneda][moneda],        
           fecha = new Date(respuesta.LASTUPDATE * 1000).toLocaleDateString('es-MX'),
           template = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class='card-title'>Resultado: </h2>
                    <p>El precio de ${criptomoneda} a ${moneda} es de : $ ${respuesta.PRICE.toFixed(3)} </p>
                    <p>Variación del último día: %${respuesta.CHANGEPCTDAY.toFixed(3)} </p>
                    <p>Última actualización: ${fecha}</p>
                </div>
            </div>
        `
        this.spinner('block')
        setTimeout(() => {
            this.spinner('none')
            cotizacion.innerHTML = template
        }, 3000);
   }

   //Muestra y oculta el spinner
   spinner(display){
       const spinner = document.querySelector('.spinner')
       spinner.style.display = display
   }
} 