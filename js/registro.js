class Usuario {
	constructor(id, usuario, email, password) {
		this.id = id
        this.usuario = usuario;
		this.email = email;
		this.password = password;
	}
}

const formulario = document.querySelector("#formularioRegistro");
let usuarios = [];

// Eventos
document.addEventListener("DOMContentLoaded", () => {
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const adminExist = usuarios.some(user => user.id === 9999);
    if (!adminExist) {
        const admin = new Usuario(9999, 'admin', 'admin@example.com', 'Admin123');
        usuarios.push(admin);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
} );

formulario.addEventListener("submit", validarUsuarios);

function validarUsuarios(e) {
    e.preventDefault();
    const id = Date.now();
    const user = document.querySelector('#user').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const termsCheckbox = document.querySelector('#terminos');
    const aceptaTerminos = termsCheckbox.checked;

    const validatorEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const resultado = validatorEmail.test(email);
    const noSpace = /\s/
    const ExRegPas = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
    const pasResultado = ExRegPas.test(password);
	
    let emailRepit = usuarios.find ((user) => {
        return user.email === email;
    });
    if (emailRepit !== undefined){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Este email ya se encuentra registrado!',
    });
    return formulario.reset ()
    }if ( user == '' || email.trim() == '' || password == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Todos los Campos son Obligatorios!',
        });
        return
    }else if (noSpace.test (email)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡No uses espacios en el correo!',
        });
    }
    else if (!resultado){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Correo no valido!',
        });
        return formulario.reset ()          
    }else if (user.length >10){  
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡El usuario tiene que tener menos de 10 caracteres!',
        });      
        return        
    }else if (noSpace.test (user)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡No uses espacios en el usuario!',
        });
        return
    }else if (password.length >16){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡La contraseña tiene que tener menos de 16 caracteres!',
        });
        return
    }else if (!pasResultado ) {Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡La contraseña debe tener de 8 a 16 caracteres, con al menos una mayuscula y sin simbolos!',
    });
        return
    }else if (!aceptaTerminos) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Debes aceptar los términos antes de enviar el formulario!',
        });
        return;
    }else { console.log ("usuario valido")
        }
	const newUser = new Usuario (id, user, email, password);      
	usuarios.push(newUser);
	localStorage.setItem ('usuarios', JSON.stringify(usuarios));
	Swal.fire({
        icon: "success",
        title: "¡Usuario Registrado!",
        showConfirmButton: false,
        timer: 1500
    })    
    formulario.reset ()  
    window.location.href = "login.html"
}



