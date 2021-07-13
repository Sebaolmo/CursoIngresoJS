
/* Olmo Sebastián  Div H
Ejercicio 3 - Parcial 2019

Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.

*/


function mostrar()

{

	var precioInicial;
	var porcentajeDescuento;
	var precioFinal;
	precioInicial = prompt ("Ingresar el precio");
	precioInicial = parseInt (precioInicial);
	porcentajeDescuento = prompt ("Ingresar el porcentaje de descuento");
	porcentajeDescuento = parseInt (porcentajeDescuento);
	porcentajeDescuento = porcentajeDescuento/100;
	precioFinal = precioInicial - (precioInicial*porcentajeDescuento);
	elPrecioFinal.value = precioFinal;


}
