/* Problema 1 */

const numeroUsuario = parseInt(prompt("Ingresa un número:"));

let i = 1;

console.log(`Múltiplos de 5 hasta ${numeroUsuario}:`);
while (i <= numeroUsuario) {
  if (i % 5 === 0) {
    console.log(i);
  }
  i++; // Incrementar la variable de control
}

/* Problema 2 */

let numero1 = prompt("Dame el numero 1")
let numero2 = prompt("Dame el numero 2")

let i = 1

while(i <= 50) {
  if (i == numero1 || i == numero2){
    console.log(i + " Loteria!!") 
  }
  else{
  console.log(i)
  }
  i++;
}

/* Problema 3 */

let numero = []
let numeroUsuario =

do {
  numeroUsuario = parseInt(prompt("Dame un numero, y escribe 0 para terminar"))

  if (!isNaN(numeroUsuario)){
    numero.push(numeroUsuario)
  } else{
    alert("Pon numero válido joeputa")
  }
} 
while (numeroUsuario = ! == 0)

/* Problema 3 */

let palabras = []
let palabraUsuario =

do {
  palabraUsuario = (prompt("Dame un numero, y escribe 0 para terminar"))

  if (isNaN(palabraUsuario)){
    palabras.push(palabraUsuario)
  } else{
    alert("Escribe una palabra")
  }
} 
while (palabraUsuario !== "")

/* Problema 4 */

let palabras = [];
let palabraUsuario;

do {
  palabraUsuario = prompt("Escribe una palabra, y escribe una cadena vacía para terminar");

  if (!isNaN(parseInt(palabraUsuario))) {
    alert("Ingresa una palabra, no un número.");
  } else {
    palabras.push(palabraUsuario);
  }
} while (palabraUsuario !== "");

console.log("Lista de palabras:", palabras);


/* Problema 5 */

let diaSemana;

do {
  diaSemana = prompt("Ingresa un día de la semana (ej: lunes, martes, domingo, etc).");

  if (diaSemana) {
    switch (diaSemana.toLowerCase()) {
      case 'lunes':
        alert("Es el primer día laboral, ¡ánimo!");
        break;
      case 'martes':
      case 'miércoles':
        alert("Estamos en la mitad de la semana, ¡tú puedes!");
        break;
      case 'jueves':
        alert("¡Casi llegamos al fin de semana!");
        break;
      case 'viernes':
        alert("¡Viernes, al fin! Prepárate para el fin de semana.");
        break;
      case 'sábado':
        alert("¡Es fin de semana! Disfruta y descansa.");
        break;
      case 'domingo':
        alert("Ve a descansar");
        break;
      default:
        alert("Día no reconocido. Por favor, ingresa un día válido.");
    }
  }
} while (diaSemana && diaSemana.toLowerCase() !== 'domingo');
