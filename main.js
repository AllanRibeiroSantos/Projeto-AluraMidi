// Não adianta colocar o onclick aqui, pois ele vai tentar aplicar na lista, e você quer colocar o onclick no elemento button
const teclas = document.querySelectorAll('.tecla');

function tocar(idAudio) {
    document.querySelector(idAudio).play();
}

let contador = 0;

while (contador < teclas.length) {
    const teclaNaPosicao = teclas[contador];
    const sufixoTeclas = teclaNaPosicao.classList[1];

    teclaNaPosicao.onclick = function () {
        tocar(`#som_${sufixoTeclas}`);
    };

    teclaNaPosicao.onkeydown = function() {
        teclaNaPosicao.classList.add('ativa');
    };

    teclaNaPosicao.onkeyup = function() {
        teclaNaPosicao.classList.remove('ativa');
    };

    console.log(contador);
    contador++;
}