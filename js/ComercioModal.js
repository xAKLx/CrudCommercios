var tempLat = undefined;
var tempLng = undefined;

function saveComercio(){
    var nombre = document.getElementById("inputNombre").value;
    var codigo = document.getElementById("inputCodigo").value;
    var descripcion = document.getElementById("inputDescripcion").value;
    
    var ubicacion = {};
    ubicacion["lat"] = tempLat;
    ubicacion["lng"] = tempLng;
    
    addComercio(nombre, codigo, descripcion, ubicacion);
    
    tempLat = undefined;
    tempLng = undefined;
    document.getElementById("inputNombre").value= "";
    document.getElementById("inputCodigo").value= "";
    document.getElementById("inputDescripcion").value= "";
    document.getElementById("latLng").innerHTML = "";
}

function populateModal(codigo){
    comercio = getComercios()[codigo];
    if(comercio !== undefined){
        document.getElementById("inputNombre").value= comercio.nombre;
        document.getElementById("inputCodigo").value= comercio.codigo;
        document.getElementById("inputDescripcion").value= comercio.descripcion;
        tempLat = comercio.ubicacion.lat;
        tempLng = comercio.ubicacion.lng;
        document.getElementById("latLng").innerHTML = "Ubicacion: lat: " + tempLat + " lng: " + tempLng;
    }
}