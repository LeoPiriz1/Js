let numeroIngresado
let numero

while (true) {
    numeroIngresado = prompt("Por favor ingrese un número:")

    
    if (!isNaN(numeroIngresado)) {
        numero = parseInt(numeroIngresado)
        break; 
    } else {
        alert("El valor ingresado no es un número válido. Inténtelo de nuevo.")
    }
}

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

if (esPar(numero)) {
    alert(numero + " es un número par.")
} else {
    alert(numero + " es un número impar.")
}
