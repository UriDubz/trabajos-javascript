Tarea 2
/* EJERCICIO 1 */
let array = []

for(let i = 0; i < 10; i++) {
    let Numero = Math.floor(Math.random() * 100);
    array.push (Numero);
}

console.log(array)

/* EJERCICIO 2 */
let palabras = prompt ("Dame varias palabras separadas con coma")
var tabla = palabras.split(',')
console.log (tabla)



/* EJERCICIO 3 */
let tabla = [10,40,30,20,15,5];
let numeroMayor = Math.max(...tabla);
let numeroMenor = Math.min(...tabla);

tabla.sort(function(a, b) {
    return a - b;
  });

console.log("El arreglo ordenar es " + tabla)
console.log("El numero mayor es " + numeroMayor)
console.log("El numero menor es " + numeroMenor)
