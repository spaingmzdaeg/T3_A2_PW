

function imprimirCURP(){
var cajaCURP = document.getElementById('caja_curp');

var  nombre = document.getElementById('caja_nombres').value;
//console.log(nombre);
var primerApellido = document.getElementById('caja_primer_ap').value;
//console.log(primerApellido);
var segundoApellido = document.getElementById('caja_segundo_ap').value;
//console.log(segundoApellido);
var dia = document.getElementById('dia').value;
//console.log(dia);
if( dia < 10){
    dia = '0' + String(dia);
}
var mes = document.getElementById('mes').value;
//console.log(mes);
var anio = document.getElementById('caja_anio').value;
//console.log(anio);
var genero = document.getElementById('genero').value;
//console.log(genero);
var entidad = document.getElementById('entidad').value;
//console.log(entidad);
var fecha = dia+"/"+mes+"/"+anio;

var curp = obtenerCURP(nombre,primerApellido,segundoApellido,fecha,genero,entidad);

cajaCURP.value = curp;

console.log(curp);

}





