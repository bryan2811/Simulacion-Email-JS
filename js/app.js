// Variables
const email = document.getElementById('email')
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')
const btnEnviar = document.getElementById('enviar')

// Event Listeners
eventListeners()

function eventListeners() {
    // Inicio de la aplicación y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp)

    // Campos del formulario
    email.addEventListener('blur', validarCampo)
    asunto.addEventListener('blur', validarCampo)
    mensaje.addEventListener('blur', validarCampo)
}

// Funciones
function inicioApp() {
    // Deshabilitar el envio
    btnEnviar.disabled = true;
}

function validarCampo() {
    // Se valida la longitud del texto y que no esté vacío
    validarLongitud(this)

    let errores = document.querySelectorAll('.error')

    // Habilitar el envío
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;    
        }
    }
}

function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}