/*1.	Olmo Sebastian DIV H
TPs Ejercicio 1

Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function Sumar () 

{
	var productoUno;
	var productoDos;
	var productoTres;
	var sumaProductos;

	productoUno = txtIdPrecioUno.value;
	productoUno = parseFloat (productoUno);
	productoDos = txtIdPrecioDos.value;
	productoDos = parseFloat (productoDos);
	productoTres = txtIdPrecioTres.value;
	productoTres = parseFloat (productoTres);
	sumaProductos = ( productoUno + productoDos + productoTres) ;

	alert ( "La suma de los 3 productos es " +  sumaProductos);

}


function Promedio () 

{
	
	var productoUno;
	var productoDos;
	var productoTres;
	var promedioProductos;

	productoUno = txtIdPrecioUno.value;
	productoUno = parseFloat (productoUno);
	productoDos = txtIdPrecioDos.value;
	productoDos = parseFloat (productoDos);
	productoTres = txtIdPrecioTres.value;
	productoTres = parseFloat (productoTres);
	promedioProductos = ( productoUno + productoDos + productoTres) / 3 ;

	alert ( "El promedio de los 3 productos es " +  promedioProductos);


}


function PrecioFinal () 

{

	var productoUno;
	var productoDos;
	var productoTres;
	var precioFinal;
	var iva;
	var precioFinalIva;

	productoUno = txtIdPrecioUno.value;
	productoUno = parseFloat (productoUno);
	productoDos = txtIdPrecioDos.value;
	productoDos = parseFloat (productoDos);
	productoTres = txtIdPrecioTres.value;
	productoTres = parseFloat (productoTres);
	precioFinal = ( productoUno + productoDos + productoTres);
	iva = 0.21;
	precioFinalIva = (precioFinal * iva) + precioFinal; 

	alert ( "El precio final con iva 21% es " +  precioFinalIva);

	
}