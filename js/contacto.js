const formulario = document.querySelector("#formularioContacto");

formulario.addEventListener("submit", enviarMensaje);

function enviarMensaje(e) {
    e.preventDefault();

    const user = document.querySelector('#user').value;
    const email = document.querySelector('#email').value;
    const mensaje = document.querySelector('#mensaje').value;
    const asunto = document.querySelector('#asunto').value;
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();
    const validatorEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const resultado = validatorEmail.test(emailValue);

    if ( user == '' || email.trim() == '' || asunto == '' || mensaje == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Todos los Campos son Obligatorios!',
        });
        return
    }
    if (emailValue === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡El Email es Obligatorio!",
        });
    }else if (!resultado){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Correo no valido!',
        });
        return formulario.reset ()          
    } else {
        Swal.fire({
            icon: "success",
            title: "¡Enviado!",
            text: "Su consulta fue enviada con exito.",
        });
        formulario.reset();
    }
}