exports.exportspulgadasametros = function(pulgadas) {        //exports se utiliza para exportar la funcion 
    return pulgadas * 0.0264;                                // return se utiliza para regresar el resultado de la funcion y seguir utilizandolo
}

exports.millasametros = function(millas) {
    return millas * 1609.34;
}

exports.yardasametros = function(yardas) {
    return yardas * 0.9144; 
}

exports.piesametros = function (pies) {
    return pies * 0.3048;
}

