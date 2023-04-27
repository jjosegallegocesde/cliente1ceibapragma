export async function buscarCanciones(token){


    const URL="https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz/top-tracks?market=us"

    const PETICION={
        method:"GET",
        headers:{
            "Authorization":token
        }
    }

    let respuesta=await fetch(URL,PETICION)
    let cancionesEntregadas=await respuesta.json()
    return cancionesEntregadas

}