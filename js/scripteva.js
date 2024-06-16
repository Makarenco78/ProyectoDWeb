const botonInicio = document.getElementById("inicio");
const botonApli = document.getElementById("aplicaciones");
const botonImpa = document.getElementById("impacto");
const botonEva = document.getElementById("evaluación");


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


const botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener("click", () => {
    const respuestas = {
        q1: 'true',
        q2: 'false',
        q3: 'false',
        q4: 'true',
        q5: 'true'
    };

    let resultado = 0;
    let totalPreguntas = 6;

    for (let key in respuestas) {
        let seleccion = document.querySelector(`input[name="${key}"]:checked`);
        if (seleccion && seleccion.value === respuestas[key]) {
            resultado++;
        }
    }


    let texto = `Has acertado ${resultado} de ${totalPreguntas} preguntas.`;
    document.getElementById('resultado').innerText = texto;
});



  
