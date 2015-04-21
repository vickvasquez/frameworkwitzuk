var n = prompt('Genera la lista de numeros');
var numero = 0;
var numeros = [];
for (var j = 0; j < n; j++) {
	numero = prompt('Ingresa los numeros, tecleando enter despues de capturar un numero');
	if (numero != "")
		numeros.push(numero);
}

document.write('Lista Generada<br/>=========================<br/>')
numeros.forEach(function(numero) {
	document.write(numero + "<br/>")
})

var pos = prompt('Teclea a apartir de que posicion deseas realizar el calculo');
if (pos <= numeros.length) {


	var newArr = numeros.splice(pos);
	document.write('Nueva lista<br/>=====================<br/>')
	newArr.forEach(function(numero) {
		document.write(numero + "<br/>");

	})
	var desigualdad = Math.max.apply(Math, newArr) - Math.min.apply(Math, newArr);

	document.write("<b> La desigualdad minima es :" + desigualdad);
}