const botonInicio = document.getElementById("inicio");
const botonApli = document.getElementById("aplicaciones");
const botonImpa = document.getElementById("impacto");
const botonEva = document.getElementById("evaluación");
const thumbnails = document.querySelectorAll('.thumbnails img');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.getElementById('full-image');
const closeBtn = document.querySelector('.close-btn');


botonInicio.addEventListener("click", () => {
    window.open("index.html", "_self");
});

botonApli.addEventListener("click", () => {
    window.open("aplicaciones.html", "_self");
});

botonImpa.addEventListener("click", () => {
    window.open("impacto.html", "_self");
});

botonEva.addEventListener("click", () => {
    window.open("evaluacion.html", "_self");
});




thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        fullImage.src = thumbnail.src;
        fullImageContainer.style.display = 'flex';
    });
});
closeBtn.addEventListener('click', () => {
    fullImageContainer.style.display = 'none';
});


