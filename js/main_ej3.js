function imprimirApariciones() {
  var cadena = document.getElementById("caja_cadena").value;
  var caracter = document.getElementById("caja_caracter").value;
  var cajaVocales = document.getElementById("caja_vocales");
  var cajaConsonanes = document.getElementById("caja_consonantes");
  var cajaAparicion = document.getElementById("caja_aparicion");
  var cajaCadenaLoca = document.getElementById("caja_cadena_loca");

  var resultadoVocales = contarVocales(cadena);
  cajaVocales.value = resultadoVocales;
  //console.log(resultadoVocales);

  var resultadoConsonantes = contarConsonantes(cadena);
  cajaConsonanes.value = resultadoConsonantes;
  //console.log(resultadoConsonantes);

  var resultadoAparicion = contarCaracteres(cadena, caracter);
  cajaAparicion.value = resultadoAparicion;
  //console.log(resultadoAparicion);

  var resultadoCadenaLoca = obtenerCadenaLoca(cadena);
  cajaCadenaLoca.value = resultadoCadenaLoca;
  //console.log(resultadoCadenaLoca);
}
