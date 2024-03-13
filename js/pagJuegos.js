function mostrarTexto() {
    document.getElementById('textoDescripción').style.display = 'block';
    document.getElementById('tablaDescripción').style.display = 'none';
    document.getElementById("btnFichaTecnica").classList.remove("active");
    document.getElementById("btnDescripcion").classList.add("active");
}

function mostrarTabla() {
    document.getElementById('textoDescripción').style.display = 'none';
    document.getElementById('tablaDescripción').style.display = 'block';
    document.getElementById("btnDescripcion").classList.remove("active");
    document.getElementById("btnFichaTecnica").classList.add("active");
}