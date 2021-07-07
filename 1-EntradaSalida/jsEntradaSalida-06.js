/* Olmo Sebastian DIV H 
Ejercicio E/S 6 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/


/* Primera versión de codigo
function sumar()

{
	
var numero1 =  parseInt (document.getElementById("txtIdNumeroUno").value);
var numero2 =  parseInt (document.getElementById("txtIdNumeroDos").value);
var resultado = numero1 + numero2;
alert (resultado);

}

*/


// versión del profesor más correcta. Escribir todas las sentencias de forma secuencial. Evitar la reducción de lìneas por otros idiomas menos permisivos.

function sumar () {

var unNumero;
var otroNumero;
var resultado;

unNumero = txtIdNumeroUno.value;
otroNumero = txtIdNumeroDos.value;

unNumero = parseInt (unNumero);
otroNumero = parseInt (otroNumero);

resultado = unNumero + otroNumero;

alert ("La suma de los dos numeros es: " + resultado);

}



