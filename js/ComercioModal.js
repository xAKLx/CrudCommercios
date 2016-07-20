function saveComercio(){
    var nombre = document.getElementById("inputNombre").value;
    var codigo = document.getElementById("inputCodigo").value;
    var descripcion = document.getElementById("inputDescripcion").value;
    
    var ubicacion = {"lat": 10, "lng": 10};
    
    addComercio(nombre, codigo, descripcion, ubicacion);
    
}