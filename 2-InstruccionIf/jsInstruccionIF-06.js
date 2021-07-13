
/*

Olmo Sebastian Div H 
Ejercicio IF 06

Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).



function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt (edad);
	if (edad < 13) 
	{
		alert("Niño");
	} 
	else if (edad >= 13 && edad <= 17)
	{
		alert("adolescente");
	}
	 else 
	{
		alert("adulto");
	}


}




//Codigo más optimizado.


function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt (edad);

	if (edad > 17) 
	{
		alert("Adulto");
	} 
	else if (edad > 12)
	{
		alert("adolescente");
	}
	else 
	{
		alert("niño");
	}


}// fin de 

*/

//Codigo más optimizado segun profesor.


function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt (edad);

	if (edad > 17) 
	{
		alert("Adulto");
	} 
	else
	{ 
		if (edad > 12)
		{
		alert("adolescente");
		}
		else 
		{
		alert("niño");
		}
	}

}// fin de 
