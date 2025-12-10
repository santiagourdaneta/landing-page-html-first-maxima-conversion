// Este script solo añade una clase CSS para una animación suave y no intrusiva.

function animarBotonPrincipal() {
    const boton = document.querySelector('.btn-primary');
    if (boton) {
        // La animación es manejada por CSS (GPU) no por JS (CPU), lo cual es ideal.
        boton.classList.add('pulse-animation');
    }
}

// Hacemos que la función sea visible fuera de este módulo para que Jest pueda importarla.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        animarBotonPrincipal
    };
}