const botonInicio = document.getElementById("inicio");
const botonApli = document.getElementById("aplicaciones");
const botonImpa = document.getElementById("impacto");
const botonEva = document.getElementById("evaluación");


botonInicio.addEventListener("click", () => {
    window.open("index.html","_self");
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



