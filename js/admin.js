document.addEventListener("DOMContentLoaded", function() {
    
    const formulario = document.getElementById("modalAgregar");

    const btnAgregar = document.querySelector("#modalAgregar .btn-success");
    btnAgregar.addEventListener("click", function(event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const genero = document.getElementById("genero").value.trim();
        const precio = document.getElementById("precio").value.trim();
        const formFile = document.getElementById("formFile").value.trim();

        if (nombre && genero && precio && formFile) {
            mostrarAlertaExito();
            $('#modalAgregar').modal('hide');
        } else {
            mostrarAlertaError();
        }
    });
    formulario.addEventListener("submit", mostrarAlertaExito);
});

function mostrarAlertaExito() {
    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'El producto se agregó correctamente.',
    });
}

function mostrarAlertaError() {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos.',
    });
}

function eliminarProducto() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará el producto. ¿Deseas continuar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#7b7b7b',
        confirmButtonText: 'Sí, Eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Eliminado', 'El producto ha sido eliminado.', 'success');
        }
    });
}