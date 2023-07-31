function validarCumpleanos(event) {
    event.preventDefault();
    
    const inputDate = document.getElementById('diaCumpleanos').value;
    const diaCumpleanos = new Date('1990-08-03');

    if (inputDate === diaCumpleanos.toISOString().split('T')[0]) {
        // Mostrar mensaje antes de redirigir
        const message = document.getElementById('message');
        message.textContent = '¡Jessica Mariela Diaz, vas a ser dirigida a tu sorpresa!';
        message.style.display = 'block';

        // Ocultar mensaje después de 3 segundos (3000 milisegundos)
        setTimeout(function() {
            message.style.display = 'none';
            // Redirigir a la página sorpresa.html
            window.location.href = 'sorpresa.html';
        }, 3000);
    } else {
        document.getElementById('message').textContent = 'IMPOSTORAAAAAAAAAAA!!!';
    }
}

// Obtener el elemento del mensaje
const message = document.getElementById('message');

// Cambiar el color del texto 
message.style.color = 'black';

// Cambiar el tamaño de fuente 
message.style.fontSize = '15px';

// Cambiar el fondo del texto 
message.style.backgroundColor = 'yellow';

// Aplicar una fuente en negrita
message.style.fontWeight = 'bold';

