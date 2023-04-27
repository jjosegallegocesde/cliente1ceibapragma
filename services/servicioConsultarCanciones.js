export async function buscarCanciones(token){


    const URL="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=us"

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