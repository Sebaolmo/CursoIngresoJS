/* Olmo Sebastian DIV H
Ejercicio E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()

{

var importe;
var aumento;
var resultado;

importe = txtIdSueldo.value;
importe = parseInt (importe);

aumento = 0.1;

resultado = (importe * aumento) + importe;
txtIdResultado.value = resultado;


}
