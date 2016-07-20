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
    updateCommerciosTable();
    
    tempLat = undefined;
    tempLng = undefined;
    document.getElementById("inputNombre").value= "";
    document.getElementById("inputCodigo").value= "";
    document.getElementById("inputDescripcion").value= "";
    document.getElementById("latLng").innerHTML = "";
}