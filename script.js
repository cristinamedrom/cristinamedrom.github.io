document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('buttonSearch').onclick = function() {
        alert('Error 404 (Page Not Found)');
    }

    document.getElementById('buttonAdd').onclick = function() {
        alert('Enviada petición de amistad.');
    }
});

document.addEventListener('DOMContentLoaded', function() {

    const usuarioInput = document.getElementById('usuario');
    const contraInput = document.getElementById('contra');
    const logButton = document.getElementById('log');

    logButton.addEventListener('click', function() {

        const usuario = usuarioInput.value;
        const contra = contraInput.value;

        if (usuario === 'Cristina Medrano' && contra === 'contraseña') {
            window.location.href = '/index.html'

        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    });
    });