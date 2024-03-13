const formulario = document.querySelector("#formRecuperarContraseña");

formulario.addEventListener("submit", recuperarContraseña);

function recuperarContraseña(e) {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();
    const validatorEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const resultado = validatorEmail.test(emailValue);

    if (emailValue === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡El Email es Obligatorio!",
        });
    } else if (!resultado) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Correo no válido!',
        });
        formulario.reset(); // Use the form variable, not the function
    } else {
        Swal.fire({
            icon: "success",
            title: "¡Enviado!",
            text: "Se ha enviado un enlace de recuperación a tu correo electrónico.",
        });
        formulario.reset(); // Use the form variable, not the function
    }
}
