function contarVocales( cadena ){
    var listaVocales = 'aeiouAEIOU';
    var conteo = 0;
    
    for(var x = 0; x < cadena.length ; x++)
    {
      if (listaVocales.indexOf(cadena[x]) !== -1)
      {
        conteo += 1;
      }
    
    }
    return conteo;
}

function contarConsonantes ( cadena ){
    var listaConsonantes = 'bcdfghjklmnopqrstvwxyzBCDFGHJKLMNOPQRSTVWXYZ';
    var conteo = 0;
    
    for(var x = 0; x < cadena.length ; x++)
    {
      if (listaConsonantes.indexOf(cadena[x]) !== -1)
      {
        conteo += 1;
      }
    
    }
    return conteo;
}

function contarCaracteres( cadena,letra ){
    return (cadena.split(letra).length - 1)
}

function obtenerCadenaLoca( cadena ){
    var nuevaCadena = "";

    for(var i = 0; i < cadena.length; i++){
        if(i % 2 == 0){
            nuevaCadena += cadena[i].toUpperCase();
        }else {
            nuevaCadena += cadena[i].toLowerCase();
        }
    }

    return nuevaCadena; 
}



