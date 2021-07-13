/* Olmo Sebastian DIV H
Ejercicio E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

/*
function mostrarAumento()
{


var importe;
var descuento;
var resultado;

importe = txtIdImporte.value;
importe = parseInt(importe);

descuento = 0.25;

resultado = importe - (importe * descuento);

txtIdResultado.value = resultado;

}


*/

//el dto sale por prompt


function mostrarAumento()
{


var importe;
var descuento;
var resultado;

importe = txtIdImporte.value;
importe = parseInt(importe);

descuento = prompt ("Ingresar el descuento");
descuento = parseInt (descuento);
descuentoPorcentaje = descuento/100; 

resultado = importe - (importe * descuentoPorcentaje);

txtIdResultado.value = resultado;

}

