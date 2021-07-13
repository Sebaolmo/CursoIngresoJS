/*2.	

Olmo Sebastián  Div H
Ejercicio 2 - TP

Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largoTerreno;
	var anchoTerreno;
	var cantidadAlambre;

	largoTerreno = txtIdLargo.value;
	largoTerreno = parseFloat (largoTerreno);
	anchoTerreno = txtIdAncho.value;
	anchoTerreno = parseFloat (anchoTerreno);
	cantidadAlambre = [(largoTerreno * 2) + (anchoTerreno*2)]*3

	alert ("Se debe comprar " + cantidadAlambre + " metros de alambre ");
}


function Circulo ()

{

	var radioTerreno;
	var cantidadAlambre;

	radioTerreno = txtIdRadio.value;
	radioTerreno = parseFloat (radioTerreno);
	cantidadAlambre = (Math.PI * radioTerreno) * 3;
	cantidadAlambre = Math.round(cantidadAlambre);


	alert ("Se debe comprar " + cantidadAlambre + " metros de alambre ");

}

function Materiales ()

{
	var largoTerreno;
	var anchoTerreno
	var cantidadMetros;
	var bolsasCementos;
	var bolsasCal;

	largoTerreno = txtIdLargo.value;
	largoTerreno = parseFloat (largoTerreno);
	anchoTerreno = txtIdAncho.value;
	anchoTerreno = parseFloat (anchoTerreno);

	cantidadMetros = largoTerreno * anchoTerreno;

	bolsasCementos = cantidadMetros * 2;
	bolsasCal = cantidadMetros * 3;

	alert ( "Se debe comprar " + bolsasCementos  + " bolsas de cemento, y " + bolsasCal + " bolsas de cal." );
	
}