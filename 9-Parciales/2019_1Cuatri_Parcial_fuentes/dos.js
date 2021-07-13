
/* Olmo Sebastián  Div H
Ejercicio 2 - 1er Parcial 2019

Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".


*/

function mostrar()
{
  

var nombreUno;
var nombreDos;
var pesoUno;
var pesoDos;
var sumaKilos;
var promedioKilos;


nombreUno = prompt ("Bienvenidos, ingrese su nombre:");
pesoUno = prompt ( nombreUno + " ingresá tu peso");
pesoUno = parseInt (pesoUno);

nombreDos = prompt ("Ingresá tu nombre");
pesoDos = prompt (nombreDos + " ingresá tu peso");
pesoDos = parseInt (pesoDos);

sumaKilos = pesoUno + pesoDos;
promedioKilos = (pesoUno + pesoDos) / 2 ;

alert ("ustedes se llaman: "  + nombreUno + " y " + nombreDos + " pesan " + pesoUno + " y " 
	+ pesoDos + " kilos, que sumados son " + sumaKilos  + " kilos y el promedio de peso " + promedioKilos);



}
