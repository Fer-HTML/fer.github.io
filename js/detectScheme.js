// Detecta si el usuario prefiere el tema oscuro
let esquemaOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Selecciona el elemento por su ID
let elemento = document.getElementById('colorScheme');

// Dependiendo del valor de esquemaOscuro, escribe "dark" o "light"
if (esquemaOscuro) 
{
    elemento.textContent = 'Estas en modo oscuro (Coincidiendo con tu OS)';
}

else 
{
    elemento.textContent = 'Estas en modo claro (Coincidiendo con tu OS)';
}


function updateImage() {
    const img = document.getElementById('colorMode');
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    if (colorScheme === 'dark') {
        img.src = '/assets/images/presentacion/dark-image.png';
    } else {
        img.src = '/assets/images/presentacion/light-image.png';
    }
}

// Llamar a la función al cargar la página y al cambiar el color-scheme
window.addEventListener('load', updateImage);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateImage);