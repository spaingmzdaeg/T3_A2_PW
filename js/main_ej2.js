function imprimirConversion(){
    var decimal = parseInt(document.getElementById('caja_decimal').value);

    var cajaBinario = document.getElementById('caja_binario');

    var cajaOctal = document.getElementById('caja_octal');
    
    var cajaHexadecimal = document.getElementById('caja_hexadecimal');



    //var decimal = 100;

    var resultadoBinario = decimalABinario(decimal);
    cajaBinario.value = resultadoBinario;
    //console.log(resultadoBinario);

    var resultadoOctal = decimalAOctal(decimal);
    cajaOctal.value = resultadoOctal;
    //console.log(resultadoOctal);

    var resultadoHexadecimal = decimalAHexadecimal(decimal);
    cajaHexadecimal.value = resultadoHexadecimal;
    //console.log(resultadoHexadecimal);


}