// Se pone un mensaje para ingresar un número
// Se define variable para que se pueda ingresar número


alert('Ingrese un número del 1 al 20');
var numero = prompt('Ingrese número');
var numero = parseInt(numero);

// Se define condición cuando se ingresa un número que no corresponde al rango requerido (while)

while (numero < 1 || numero > 20) {
    numero = prompt('Número fuera del rango');
}

// Se hace arrow function con let para multiplicación

let multiplicador = (numero) => {
    if (numero >= 1 || numero <= 20) {
        for (var i = 1; i <= numero; i++) {
            var multiplicacion = i * numero;
            console.log(`${i} x ${numero} = ${multiplicacion}`);
        }
    }
}

multiplicador(numero);

// Se hace arrow function con let para factorial

let factorial = (numero) => {
    if (numero >= 1 || numero <= 20) {
        var factorial = 1;
        for (var i = numero; i > 0; i--) {
            var factorial = factorial * i;
        }
    } else if (numero <= 1 || numero >= 20) {
        document.write('<h1>Número fuera de rango</h1>');
    }

    console.log(`El factorial de ${numero} es ${factorial}`);
}

factorial(numero);



