
class API{
    constructor(apiKey){
        this.apiKey = apiKey
    }

    //Obtener todas las monedas
    obtenerMonedas = async () =>{
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`

        //fetch a la api
        const urlObtenerMonedas = await fetch(url)

        //respuesta en json
        const monedas = await urlObtenerMonedas.json()

        return {
            monedas
        }
    }

    obtenerValores = async (moneda, criptomoneda) => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apiKey}`

        //Consultar en rest API
        const urlConvertir = await fetch(url)
        const resultado = await urlConvertir.json()
        return{
            resultado
        }
    }
}