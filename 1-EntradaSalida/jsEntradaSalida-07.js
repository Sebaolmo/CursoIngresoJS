/* Olmo Sebastian Div H 
Ejercicio E/S 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


/*  Versión realizada por mi. Esta ok pero tiene vicios que corregir.

function sumar()
{	
	
var numero1 =  parseInt (document.getElementById("txtIdNumeroUno").value);
var numero2 =  parseInt (document.getElementById("txtIdNumeroDos").value);
var resultado = numero1 + numero2;
alert ("La suma es " + resultado);

}



function restar()
{
	
var numero1 =  parseInt (document.getElementById("txtIdNumeroUno").value);
var numero2 =  parseInt (document.getElementById("txtIdNumeroDos").value);
var resultado = numero1 - numero2;
alert ("La resta es " + resultado);


}

function multiplicar()
{ 
	
var numero1 =  parseInt (document.getElementById("txtIdNumeroUno").value);
var numero2 =  parseInt (document.getElementById("txtIdNumeroDos").value);
var resultado = numero1 * numero2;
alert ("La multiplicación es " + resultado);

}

function dividir()
{
	
var numero1 =  parseInt (document.getElementById("txtIdNumeroUno").value);
var numero2 =  parseInt (document.getElementById("txtIdNumeroDos").value);
var resultado = numero1 /  numero2;
alert ("La división es " + resultado);


}


*/


// Versión +  correcta.


function sumar()

{	
	
var numero1;
var numero2;
var suma;

numero1 =  txtIdNumeroUno.value;
numero2 =  txtIdNumeroDos.value;

numero1 =  parseInt (numero1);
numero2 =  parseInt (numero2);

suma = numero1 + numero2;

alert ("La suma es " + suma);

}



function restar()

{
	
var numero1;
var numero2;
var resta;

numero1 =  txtIdNumeroUno.value;
numero2 =  txtIdNumeroDos.value;

numero1 =  parseInt (numero1);
numero2 =  parseInt (numero2);

resta = numero1 - numero2;

alert ("La resta es " + resta);


}



function multiplicar()

{ 
	
var numero1;
var numero2;
var multiplicacion;

numero1 =  txtIdNumeroUno.value;
numero2 =  txtIdNumeroDos.value;

numero1 =  parseInt (numero1);
numero2 =  parseInt (numero2);

multiplicacion = numero1 * numero2;
alert ("La multiplicación es " + multiplicacion);

}



function dividir()
{
	
var numero1;
var numero2;
var division;

numero1 =  txtIdNumeroUno.value;
numero2 =  txtIdNumeroDos.value;

numero1 =  parseInt (numero1);
numero2 =  parseInt (numero2);

division = numero1 /  numero2;

alert ("La división es " + division);


}


