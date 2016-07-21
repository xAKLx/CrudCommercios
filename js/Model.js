/*
{
    "Codigo": {
        "nombre": string,
        "codigo": string,
        "descripcion": string,
        "ubicacion": {
            "lat": int,
            "lng": int
        }
    }
}
*/
var comercios = {};

//nombre, codigo y ubicacion son requeridos
//ubicacion debe tener como atributos lat y lng
function addComercio(nombre, codigo, descripcion, ubicacion) {
    
    if (nombre !== undefined && codigo !== undefined && ubicacion !== undefined && ubicacion.lat !== undefined && ubicacion.lng !== undefined) {
        var comercio = {
        "nombre": nombre,
        "codigo": codigo,
        "descripcion": descripcion,
        "ubicacion": ubicacion
        };
        
        comercios[codigo] = comercio;
    }
}

function getComercios(){
    return comercios;
}

function deleteComercio(codigo){
    delete comercios[codigo]
}