var cuentas = [
    { nombre: 'mali', saldo: 200, contraseña: 'kiwito123' },
    { nombre: 'gera', saldo: 290, contraseña: 'pepito' },
    { nombre: 'maui', saldo: 67, contraseña: 'pedorrow' },
    { nombre: '', saldo: 100, contraseña: '' },
  ];

var cuenta =""

function iniciarSesion() {
    var cuentareal = document.getElementById("cuenta").value
    let cuenta = cuentareal.toLowerCase()
    var contraseña = document.getElementById("password").value

  for ( var i = 0 ; i < cuentas.length ; i ++)
   if( cuentas[i].nombre === cuenta && cuentas[i].contraseña === contraseña ) {
    alert("Inicio de sesión exitoso")


    var operaciones = document.getElementById("operaciones");
    operaciones.style.display = "block"
    var sesion = document.getElementById("seleccionCuenta");
    sesion.style.display = "none"


    return 

   }

  alert("Pon una cuenta o contraseña válidas!!!")
}


function consultarSaldo() {
  for ( let i = 0 ; i < cuentas.length ; i++){
  if (cuentas[i].nombre === cuenta){
    alert("Su saldo es " + cuentas[i].saldo)
  }
    }
  return

}

function ingresarMonto() {
    monto = parseInt(prompt("Cuánto desea ingresar?"))
    if ( !isNaN(monto) ) {  
    for ( let i = 0 ; i < cuentas.length ; i++ ){
        if ( cuenta === cuentas[i].nombre){
            if( cuentas[i].saldo + monto > 990){
                alert("No se puede papito")
             }else{
                cuentas[i].saldo += monto
                alert("Metiste " + monto + " pesos, tu saldo actual es de " + cuentas[i].saldo)
             }
        }
    }} else{
        alert("Escribe un número!")
    }
}

function retirarMonto() {
    monto = parseInt(prompt("Cuánto desea retirar?"))  
    if ( !isNaN(monto) ) {   
    for ( let i = 0 ; i < cuentas.length ; i++ ){
        if ( cuenta === cuentas[i].nombre){
            if( cuentas[i].saldo - monto < 10){
                alert("No se puede papito")
             }else{
                cuentas[i].saldo -= monto
                alert("Sacaste " + monto + " pesos, tu saldo actual es de " + cuentas[i].saldo)
             }
        }
    }} else{
        alert("Escribe un número!")
    }

}