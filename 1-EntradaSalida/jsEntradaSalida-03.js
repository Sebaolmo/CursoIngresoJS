/* Olmo Sebastián Div H
Ejercicio E/S 3

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/


function mostrar()
{
	var nombreIngresado;

	//nombreIngresado=txtIdNombre.value;
	//alert("ok");

nombreIngresado = document.getElementById("txtIdNombre").value;
alert ("Su nombre es: " + nombreIngresado);

}



