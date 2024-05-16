// Event listeners para los campos de entrada
const nombreInput = document.getElementById('nombres');
nombreInput.addEventListener('blur', validarNombre);

const apellidosInput = document.getElementById('apellidos');
apellidosInput.addEventListener('blur', validarApellidos);

const correoInput = document.getElementById('correo');
correoInput.addEventListener('blur', validarCorreo);

const textareaInput = document.getElementById('mensaje');
textareaInput.addEventListener('blur', validarTextarea);

// Todas las Funciones de validación

function validarCampoVacio(inputElement, errorElement) {
    const valor = inputElement.value.trim();

    if (valor === '') {
        document.getElementById(errorElement).textContent = 'Este campo es obligatorio.';
        return false;
    } else {
        document.getElementById(errorElement).textContent = '';
        return true;
    }
}

function validarNombre() {
    const nombreInput = document.getElementById('nombres');
    const nombreValido = validarCampoVacio(nombreInput, 'error_nombre');

    if (!nombreValido) {
        return false;
    }

    const nombre = nombreInput.value.trim();

    if (nombre === '') {
        document.getElementById('error_nombre').textContent = 'Nombre incorrecto, no seas bobo';
        return false;
    } else {
        document.getElementById('error_nombre').textContent = '';
        return true;
    }
}

function validarApellidos() {
    const apellidosInput = document.getElementById('apellidos');
    const apellidos = apellidosInput.value.trim();

    if (!validarCampoVacio(apellidosInput, 'error_apellido')) {
        return false;
    }

    if (apellidos === '') {
        document.getElementById('error_apellido').textContent = 'Apellido incorrecto, alto corki';
        return false;
    } else {
        document.getElementById('error_apellido').textContent = '';
        return true;
    }
}

function validarCorreo() {
    const correoInput = document.getElementById('correo');
    const correo = correoInput.value.trim();

    if (!validarCampoVacio(correoInput, 'error_correo')) {
        return false;
    }

    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regexCorreo.test(correo)) {
        document.getElementById('error_correo').textContent = 'Ingresa un correo válido.';
        return false;
    } else {
        document.getElementById('error_correo').textContent = '';
        return true;
    }
}

function validarTextarea() {
    const textareaInput = document.getElementById('mensaje');
    const mensaje = textareaInput.value.trim();

    if (!validarCampoVacio(textareaInput, 'error_mensaje')) {
        return false;
    }

    if (mensaje === '') {
        document.getElementById('error_mensaje').textContent = 'Por favor, ingrese un mensaje.';
        return false;
    } else {
        document.getElementById('error_mensaje').textContent = '';
        return true;
    }
}

// Validación al enviar el formulario
const formulario = document.querySelector('form');
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Llama a las funciones de validación para cada campo
    const nombreValido = validarNombre();
    const apellidosValidos = validarApellidos();
    const correoValido = validarCorreo();
    const mensajeValido = validarTextarea();

    // Verifica si se aceptaron los términos y condiciones
const terminosCheckbox = document.getElementById('terminos');
if (!terminosCheckbox.checked) {
  document.getElementById('error_terminos').textContent = 'Debes aceptar los términos y condiciones';
  return; // Si los términos no están aceptados, no envíes el formulario
} else {
  document.getElementById('error_terminos').textContent = '';
}

// Si alguno de los campos no es válido, no envíes el formulario
if (!nombreValido || !apellidosValidos || !correoValido || !mensajeValido) {
  return;
}

// Si todos los campos son válidos y se aceptaron los términos, envía el formulario
formulario.submit();

  



}
