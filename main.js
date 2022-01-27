// Não adianta colocar o onclick aqui, pois ele vai tentar aplicar na lista, e você quer colocar o onclick no elemento button
const teclas = document.querySelectorAll('.tecla');

function tocar(idAudio) {
    document.querySelector(idAudio).play();
}

let contador = 0;

while (contador < teclas.length) {
    const sufixoTeclas = teclas[contador].classList[1];
    teclas[contador].onclick = function () {
        tocar(`#som_${sufixoTeclas}`);
    };
    console.log(contador);
    contador++;
}