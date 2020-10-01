function imprimirApariciones(){
    var cadena = document.getElementById('caja_cadena').value;
    var cajaVocales = document.getElementById('caja_vocales');
    var cajaConsonanes = document.getElementById('caja_consonantes');
    var cajaAparicion = document.getElementById('caja_aparicion');
    var cajaCadenaLoca = document.getElementById('caja_cadena_loca');

    var resultadoVocales = contarVocales(cadena);
    console.log(resultadoVocales);

    var resultadoConsonantes = contarConsonantes(cadena);
    console.log(resultadoConsonantes);

    var resultadoAparicion = contarCaracteres(cadena,"e");
    console.log(resultadoAparicion);

    var resultadoCadenaLoca = obtenerCadenaLoca(cadena);
    console.log(resultadoCadenaLoca);

    
}