function luzVerde() {
    alert("Soy el color verde");
    setTimeout(luzAmarilla, 2000); // Después de 2 segundos, cambia a amarillo
}

function luzRoja() {
    alert("Soy el color rojo");
    setTimeout(luzVerde, 2000); // Después de 2 segundos, cambia a verde
}

function luzAmarilla() {
    alert("Soy el color amarillo");
    setTimeout(luzRoja, 2000); // Después de 2 segundos, cambia a rojo
}

// Inicia el cambio de colores automáticamente
luzVerde();