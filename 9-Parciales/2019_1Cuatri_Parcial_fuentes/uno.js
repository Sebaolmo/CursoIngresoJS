/* Olmo Sebastián  Div H
Ejercicio 1 - 1er Parcial 2019

Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.

*/


function mostrar()


{

var lado;
var perimetro;


lado = prompt ("Ingresar el valor de un lado del triangulo");
lado = parseInt (lado);


perimetro = lado * 3;

alert (" el perimetro es: " + perimetro);

}
