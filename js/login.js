// Variables
const formularioLogin = document.querySelector("#formularioLogin");
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Eventos
formularioLogin.addEventListener("submit", validarLogin);

// Funciones
function validarLogin(e) {
    e.preventDefault();

    const inputEmail = document.querySelector("#email").value;
    const inputPassword = document.querySelector("#password").value;

    const user = usuarios.find((user) => {
        return user.email === inputEmail && user.password === inputPassword;
    });

    if (user !== undefined) {
        const usuario = {
            id: user.id,
            email: user.email,
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        if (user.id === 9999) {
            location.href = "admin.html";
        } else {
            location.href = "index.html";
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡El Email o Contraseña es Incorrecto!",
        });
    }
}





