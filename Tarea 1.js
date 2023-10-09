/* EJERCICIO 1 */
let respuesta = prompt("Eres bellísimo?");

if (respuesta === "S.i") {
    console.log("No te creo");
} else {
    console.log("Ya sabía");
}

/* EJERCICIO 2 */
let numero = prompt("Dime un número:");

if (numero / 2) {
    // ¿Qué quieres hacer aquí?
}

/* EJERCICIO 3 */
let numero = prompt("Dame un número:");

if (numero % 1 === 0) {
    console.log("Es un número entero");
} else {
    console.log("Es un número no entero");
}

/* EJERCICIO 4 */
let cliente = prompt("Dame tu número de cliente:");
if (cliente == 1000) {
    console.log("Ganaste un premio");
} else {
    console.log("Lo sentimos, sigue participando. Tu número es " + cliente);
}

/* EJERCICIO 5 */
let primero = prompt("Dame tu primer número:");
let segundo = prompt("Dame tu segundo número:");

if (primero < segundo) {
    console.log("El número menor es " + primero);
} else {
    console.log("El número menor es " + segundo);
}

/* EJERCICIO 6 */
let primero = prompt("Dame tu primer número:");
let segundo = prompt("Dame tu segundo número:");
let tercero = prompt("Dame el tercer número:");

if (primero < segundo) {
    console.log("El número mayor es " + segundo);
} else {
    if (segundo < tercero) {
        console.log("El número mayor es " + tercero);
    } else {
        if (tercero < primero) {
            console.log("El número mayor es " + primero);
        } else {
            console.log("Todos son iguales");
        }
    }
}

/* EJERCICIO 7 */
let dia = prompt("Ingrese el día de la semana");

if (dia === "lunes") {
    console.log("Feliz lunes!!!");
} else if (dia === "viernes") {
    console.log("Ya es fin de semana felicidades!!");
} else if (dia === "sabado") {
    console.log("Buen Sabadrink");
} else if (dia === "domingo") {
    console.log("Buen Dormingo");
} else {
    console.log("Tu día es " + dia);
}

/* EJERCICIO 8 */
let calificacion = prompt("Dame tu calificación: ");
if (calificacion < 6) {
    console.log("Reprobado");
} else if (calificacion < 8) {
    console.log("Bien");
} else if (calificacion == 10) {
    console.log("Excelente");
} else {
    console.log("Elige una calificación válida");
}

/* EJERCICIO 9 */
let tipodeHelado = prompt("¿Cuál topping quieres?");

if (tipodeHelado === "sin topping") {
    console.log("El helado sin topping cuesta 50 pesos");
} else if (tipodeHelado === "oreo") {
    console.log("El helado de Oreo cuesta 10 pesos");
} else if (tipodeHelado === "kitkat") {
    console.log("El helado de Kitkat cuesta 15 pesos");
} else if (tipodeHelado === "brownie") {
    console.log("El helado de Brownie cuesta 20 pesos");
} else {
    console.log("No tenemos ese topping, lo sentimos");
}

/* EJERCICIO 10 */
let opcion = prompt("¿Cuál curso quieres llevar?");

if (opcion === "course") {
    console.log("Seleccionaste el curso 'course'");
    let costo = 4999;
    let meses = 2;
    let respuesta = prompt("¿Cuentas con alguna beca?");
    
    if (respuesta === "facebook") {
        let beca = 0.80;
        console.log("Tu precio mensual con descuento es de " + costo * beca);
        console.log("Vas a gastar un total de " + costo * beca * meses);
    } else if (respuesta === "google") {
        let beca = 0.85;
        console.log("Tu precio mensual con descuento es de " + costo * beca);
        console.log("Vas a gastar un total de " + costo * beca * meses);
    } else if (respuesta === "jesua") {
        let beca = 0.5;
        console.log("Tu precio mensual con descuento es de " + costo * beca);
        console.log("Vas a gastar un total de " + costo * beca * meses);
    }
} else if (opcion === "carrera") {
    console.log("Seleccionaste el curso 'course'");
    let costo = 3999;
    let meses = 6;
    let respuesta = prompt("¿Cuentas con alguna beca?");
    
    if (respuesta === "facebook") {
        let beca = 0.80;
        console.log("Tu precio mensual con descuento es de " + costo * beca);
        console.log("Vas a gastar un total de " + costo * beca * meses);
    } else if (respuesta === "google") {
        let beca = 0.85;
        console.log("Tu precio mensual con descuento es de " + costo * beca);
        console.log("Vas a gastar un total de " + costo * beca * meses);
    } else if (respuesta === "jesua") {
        let beca = 0.5;
        console.log("Tu precio mensual con descuento es de " + costo * beca);
        console.log("Vas a gastar un total de " + costo * beca * meses);
    }
} else if (opcion === "master") {
    console.log("Seleccionaste el curso 'course'");
    let costo = 2999;
    let meses = 12;
    let respuesta = prompt("¿Cuentas con alguna beca?");
    
    if (respuesta === "facebook") {
        let beca = 0.80;
        console.log("Tu precio mensual con descuento es de " + costo * beca);
        console.log("Vas a gastar un total de " + costo * beca * meses);
    } else if (respuesta === "google") {
        let beca = 0.85;
        console.log("Tu precio mensual con descuento es de " + costo * beca);
        console.log("Vas a gastar un total de " + costo * beca * meses);
    } else if (respuesta === "jesua") {
        let beca = 0.50;
        console.log("Tu precio mensual con descuento es de " + costo * beca);
        console.log("Vas a gastar un total de " + costo * beca * meses);
    }
}

/* EJERCICIO 11 */

let litros = prompt("Cuántos litros consumió?")
let vehiculo = prompt("¿Que vehículo es?")
let kms = prompt("Cuantos kms viajo?")
if (vehiculo === "coche"){
    let precioKilometro = .2
    if (litros <= 100){
        extra = 5
        total = (precioKilometro * kms) + extra
        console.log("El total es " + total)
    } else {
        extra = 10
        total = (precioKilometro * kms) + extra
        console.log("El total es " + total)
    }
} else if (vehiculo === "moto"){
    let precioKilometro = .1
    if (litros <= 100){
        extra = 5
        total = (precioKilometro * kms) + extra
        console.log("El total es " + total)
    } else {        
        extra = 10
        total = (precioKilometro * kms) + extra
        console.log("El total es " + total)
    }
} else if (vehiculo == "autobus"){
    let precioKilometro = .5
    if (litros <= 100){
        extra = 5
        total = (precioKilometro * kms) + extra
        console.log("El total es " + total)
    } else {
        extra = 10
        total = (precioKilometro * kms) + extra
        console.log("El total es " + total)
    }
}