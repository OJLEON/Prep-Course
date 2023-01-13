// No cambies los nombres de las funciones.

const { join } = require("@11ty/eleventy/src/TemplatePath");

devolverPrimerElemento(["hola","chao"]);
devolverUltimoElemento(["hola","chao", "si"]);
obtenerLargoDelArray(["hola","chao", "si"]);
incrementarPorUno([1,2,3,4,5]);
agregarItemAlFinalDelArray([1,2,3,4,5],6);
agregarItemAlComienzoDelArray([1,2,3,4,5],6);
dePalabrasAFrase(['Hello', 'world!']);
arrayContiene([1,2,3,4,5],6);
agregarNumeros([1,2,3,4,5]);
promedioResultadosTest([1,2,3,4,5]);
numeroMasGrande([1,2,3,4,5]);
multiplicarArgumentos();
cuentoElementos([1,2,3,4,5]);
diaDeLaSemana(2);
empiezaConNueve(20);
todosIguales([1,1,1,1,1]);
mesesDelAño(["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"]);
mayorACien([1,2,3,4,5]);
breakStatement(50);

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];  
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for(let x = 0;x < array.length;x++){
    array[x] += 1; 
  }
return array;

}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = palabras.join(' ');
  return frase;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

    var suma = 0;

    for(var x = 0; x < numeros.length; x++){
      suma += numeros[x];
    }

    return suma;

}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sum = 0;
  var promedio = 0;

  for(var x = 0; x < resultadosTest.length; x++){
    sum += resultadosTest[x];
    promedio = (sum / resultadosTest.length);
  }

  return promedio;

}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayo = 0;
  for(var x = 0; x < numeros.length; x++){
    if(numeros[x] > mayo){
      mayo = numeros[x];
    }
  }
  return mayo;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if(arguments.length === 0) return 0;
  if(arguments.length === 1 ) return arguments[0];

  var multiplo = 1;

  for(var x = 0; x < arguments.length; x++){
    multiplo *= arguments[x];
  }
  
  return multiplo;

}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var cantidad = 0;

  for(var x = 0; x < arreglo.length; x++){
    if(arreglo[x] > 18) cantidad++;
  }
  return cantidad;

}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  }else{
    return "Es dia Laboral";
  }
  
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  var array = Array.from(String(n), Number);

  if(array[0] === 9) return true;
  else return false;

}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  
  for( var x = 0; x < arreglo.length; x++){
    var j = 1;
    if (arreglo[x] === arreglo[j] ) j++;
    else  return false;
  }
  return true;
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array2 = [];
  
  for(var x = 0; x < array.length; x++){
    if(array[x] === "Enero" || array[x] === "Marzo" || array[x] === "Noviembre") array2.push(array[x]);
  }
  if(array2.length < 3){
    return "No se encontraron los meses pedidos"
  }else return array2;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var array2 = [];

  for(var x = 0; x < array.length; x++){
    if(array[x] > 100) array2.push(array[x]);
  }
  return array2;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var arry = [];
  var suma = numero;

  for(var x = 0; x < 10; x++){
    suma += 2;
    arry.push(suma);
    if (suma === x){
      return "Se interrumpió la ejecución";
      break;
    }
  }
  return arry;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arry = [];
  suma = numero;
  for(var x = 0; x < 10;x++){
    if(x === 5){
      continue;
    }else{
      suma +=2;
      arry.push(suma);
    }
  }
  return arry;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
