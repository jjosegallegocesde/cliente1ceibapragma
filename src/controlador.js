import {pedirTokenEnSpotify} from '../services/servicioSpotify.js'
import {buscarCanciones} from '../services/servicioConsultarCanciones.js'

pedirTokenEnSpotify()
.then(function(token){
    
    buscarCanciones(token)
    .then(function(respuesta){
        console.log(respuesta.tracks)
    })

})
