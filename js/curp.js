//documento js que calcula la curp

function obtenerVocal(str) {
  var vocales = "AEIOU";
  var i, c;
  for (i = 1; i < str.length; i++) {
    c = str.charAt(i);
    if (vocales.indexOf(c) >= 0) {
      return c;
    }
  }
  return "X";
}

function obtenerConsonante(str) {
  var vocales = "AEIOU ��."; //primerApellidoron para ignorar vocales
  var i, c;
  for (i = 1; i < str.length; i++) {
    c = str.charAt(i);
    if (vocales.indexOf(c) < 0) {
      return c;
    }
  }
  return "X";
}

/*funcion para evitar palabras bloqueadas segun la pagina oficial de lineamientos debido a que 
En la estructura de la CURP (posiciones 1-4) que en ocasiones forma una palabra cuya pronunciación se considera ofensiva para 
los primerApellidorones socialmente establecidos, en cuyo caso la letra de la segunda posición se sustituye por una 'X'.*/

function remplazarPalabra(str) {
  //usar expresiones regulares

  var pal1 = new RegExp(
    /BUEI|BUEY|CACA|CACO|CAGA|CAGO|CAKA|CAKO|COGE|COJA|COJE|COJI|COJO|CULO|FETO|GUEY/
  );
  var pal2 = new RegExp(
    /JOTO|KACA|KACO|KAGA|KAGO|KOGE|KOJO|KAKA|KULO|LOCA|LOCO|MAME|MAMO|MEAR|MEAS|MEON/
  );
  var pal3 = new RegExp(
    /MION|MOCO|MULA|PEDA|PEDO|PENE|PUTA|PUTO|QULO|RATA|RUIN/
  );
  var validacion;

  str = str.substring(0, 4);

  validacion = pal1.test(str) || pal2.test(str);
  validacion = pal3.test(str) || validacion;

  if (validacion) return str.substring(0, 1) + "X" + str.substring(2, 4);

  return str;
}

function obtenerEntidad(entidad) {
  var entidad;
  var vectorEntidades = new Array(
    "DF",
    "AS",
    "BC",
    "BS",
    "CC",
    "CL",
    "CM",
    "CS",
    "CH",
    "DG",
    "GT",
    "GR",
    "HG",
    "JC",
    "MC",
    "MN",
    "MS",
    "NT",
    "NL",
    "OC",
    "PL",
    "QT",
    "QR",
    "SP",
    "SL",
    "SR",
    "TC",
    "TS",
    "TL",
    "VZ",
    "YN",
    "ZS",
    "NE"
  );
  return vectorEntidades[entidad];
}

function tabla(i, x) {
  if (i >= "0" && i <= "9") {
    return x - 48;
  } else if (i >= "A" && i <= "N") {
    return x - 55;
  } else if (i >= "O" && i <= "Z") {
    return x - 54;
  } else {
    return 0;
  }
}

function obtenerUltimoDigito(curp) {
  var i,
    c,
    dv = 0;
  //verificar ultimo digito
  for (i = 0; i < curp.length; i++) {
    c = tabla(curp.charAt(i), curp.charCodeAt(i));
    dv += c * (18 - i);
  }
  dv %= 10;
  //ternario
  return dv == 0 ? 0 : 10 - dv;
}

function obtenerCURP(
  nombre,
  primerApellido,
  segundoApellido,
  fecha,
  genero,
  entidad
) {
  var quitar, nombres, curp;

  nombre = nombre.toUpperCase();
  primerApellido = primerApellido.toUpperCase();
  segundoApellido = segundoApellido.toUpperCase();
  genero = genero.toUpperCase();

  remover = new RegExp(/^(DE |DEL |LO |LOS |LA |LAS )+/); //prohibido
  nombresSaltados = new RegExp(/^(MARIA |JOSE )/); //primeros nombres saltados
  nombre = nombre.replace(quitar, "");
  nombre = nombre.replace(remover, "");
  nombre = nombre.replace(remover, "");
  primerApellido = primerApellido.replace(remover, "");
  segundoApellido = segundoApellido.replace(remover, "");
  if (segundoApellido == "") {
    segundoApellido = "X";
  }

  curp =
    primerApellido.substring(0, 1) +
    obtenerVocal(primerApellido) +
    segundoApellido.substring(0, 1) +
    nombre.substring(0, 2);
  curp = remplazarPalabra(curp);
  curp +=
    fecha.substring(8, 10) + fecha.substring(3, 5) + fecha.substring(0, 2);
  curp += (genero == "M" ? "H" : "M") + obtenerEntidad(entidad);
  curp +=
    obtenerConsonante(primerApellido) +
    obtenerConsonante(segundoApellido) +
    obtenerConsonante(nombre);
  curp += fecha.substring(6, 8) == "19" ? "0" : "A";
  curp += obtenerUltimoDigito(curp);

  return curp;
}
