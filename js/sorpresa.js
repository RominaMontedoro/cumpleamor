
function apagarVelitas() {
  // Aquí colocamos el código para apagar las velitas
  // Por ejemplo, podemos cambiar la imagen de la torta para mostrar las velitas apagadas
  var tortaImg = document.querySelector('.torta img');
  tortaImg.src = './imagenes/velasApagadas.png';
}

var carousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
    interval: 3000, // Cambia la imagen cada 3 segundos (3000 ms)
    wrap: true // Permite el desplazamiento circular del carrusel
  });
  

// Contraseñas para cada contenedor
var contrasenas = {
    1: 'masajes',
    2: 'merienda',
    3: 'bowling',
    4: 'shopping'
};
  
function mostrarMensaje(numero) {
    var mensaje = document.getElementById("mensaje" + numero);
    mensaje.classList.remove("oculto");
}
  
function validarContrasena(numero) {
    var contrasena = document.getElementById("contrasena" + numero).value;
    var mensaje = document.getElementById("mensaje" + numero);
    var resultado = document.getElementById("resultado" + numero);
  
    if (contrasena === contrasenas[numero]) {
      mensaje.classList.add("oculto");
      resultado.classList.remove("oculto");
    } else {
      alert('Ay! Estas cerca! o no? jajaja Volve a probar bebeshita!');
    }
}
  
var cancion1 = document.getElementById('cancion1');
var cancion2 = document.getElementById('cancion2');
var reproduciendoCancion2 = false;

cancion1.addEventListener('timeupdate', function() {
  if (cancion1.currentTime >= 25 && !reproduciendoCancion2) {
    setTimeout(function() {
      cancion1.pause();
      cancion2.play();
      reproduciendoCancion2 = true;
    }, 0);
  }
});

window.addEventListener('beforeunload', function() {
  cancion2.pause();
});

cancion1.play();



  