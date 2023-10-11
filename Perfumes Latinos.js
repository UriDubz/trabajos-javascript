let ventasJuana = []
let ventasPedro = []
let cantidadJuana = []
let cantidadPedro = []

const ventasJuanaDisplay = ventasJuana.length === 0 ? 0 : ventasJuana;
const ventasPedroDisplay = ventasPedro.length === 0 ? 0 : ventasPedro;
function registrarVenta() {
  let perfume = prompt("Qué perfume se vendió?")
  switch (perfume.toLowerCase()){
    case "aqua" :
    costo = 200


    break

    case "emocion" :
    costo = 180
   
    break

    case "alegria" :
    costo = 160
  
    break

    case "frescura" :
    costo = 160

    break

    default:
    alert("No está en el inventario!")
    return
  }
  
  cantidad = parseInt(prompt("Cuántos se vendieron?"))

  if (isNaN(cantidad)){
    do {
      alert("Escribe un número válido!")
      cantidad = parseInt(prompt("Cuántos se vendieron?"))
      } while(isNaN(cantidad ))
  } else{
  }
  total = cantidad * costo
  do {
  let vendedor = prompt("quien fue el hijueputa q vendio")
  switch(vendedor.toLowerCase()){
    case "juana" :
      ventasJuana.push(total);
      for (let i = 0; i < cantidad ; i++){
        cantidadJuana.push(perfume)
      }
    
    return
      

    case "pedro" :
      ventasPedro.push(total);
      for (let i = 0; i < cantidad ; i++){
        cantidadPedro.push(perfume)
      }
      
    return 
    
    default :
      alert("No existe ese vendedor!")
      break
  }}while(!ventasJuana.length && !ventasPedro.length)
}

function mostrarResultados() {
 
  const sumaJuana = ventasJuana.reduce((acumulador, elemento) => acumulador + elemento, 0);
  const sumaPedro = ventasPedro.reduce((acumulador, elemento) => acumulador + elemento, 0);


  alert("Juana lleva " + sumaJuana + " pesos y Pedro lleva " + sumaPedro + " pesos")
}

function empleadoDelMes() {
  empleadoDelMesNombre = ((ventasJuana > ventasPedro) ? "Juana" : (ventasPedro > ventasJuana) ? "Pedro" : "empate")
  alert("El empleado del mes es " + empleadoDelMesNombre )
}

function ventasAqua() {
  var cantidadAquaJuana = 0
  for (let i = 0; i < cantidadJuana.length; i++) {
    if (cantidadJuana[i] === "aqua"){
      cantidadAquaJuana++
    } 
  }

  var cantidadAquaPedro = 0
  for (let i = 0; i < cantidadPedro.length; i++) {
   if (cantidadPedro[i] === "aqua"){
        cantidadAquaPedro++
       } 
  }
alert("Juana vendio " + cantidadAquaJuana +" mientras que Pedro vendio " + cantidadAquaPedro )
}

function ventasEmocion() {
  var cantidadEmocionJuana = 0
  for (let i = 0; i < cantidadJuana.length; i++) {
    if (cantidadJuana[i] === "emocion"){
      cantidadEmocionJuana++
    } 
  }

  var cantidadEmocionPedro = 0
  for (let i = 0; i < cantidadPedro.length; i++) {
   if (cantidadPedro[i] === "emocion"){
        cantidadEmocionPedro++
       } 
  }
alert("Juana vendio " + cantidadEmocionJuana +" mientras que Pedro vendio " + cantidadEmocionPedro )
}

function ventasAlegria() {
  var cantidadAlegriaJuana = 0
  for (let i = 0; i < cantidadJuana.length; i++) {
    if (cantidadJuana[i] === "alegria"){
      cantidadAlegriaJuana++
    } 
  }

  var cantidadAlegriaPedro = 0
  for (let i = 0; i < cantidadPedro.length; i++) {
   if (cantidadPedro[i] === "alegria"){
        cantidadAlegriaPedro++
       } 
  }
alert("Juana vendio " + cantidadAlegriaJuana +" mientras que Pedro vendio " + cantidadAlegriaPedro )
}

function ventasFrescura() {
  var cantidadFrescuraJuana = 0
  for (let i = 0; i < cantidadJuana.length; i++) {
    if (cantidadJuana[i] === "frescura"){
      cantidadFrescuraJuana++
    } 
  }

  var cantidadFrescuraPedro = 0
  for (let i = 0; i < cantidadPedro.length; i++) {
   if (cantidadPedro[i] === "frescura"){
        cantidadFrescuraPedro++
       } 
  }
alert("Juana vendio " + cantidadFrescuraJuana +" mientras que Pedro vendio " + cantidadFrescuraPedro )
}