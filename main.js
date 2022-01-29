// Não adianta colocar o onclick aqui, pois ele vai tentar aplicar na lista, e você quer colocar o onclick no elemento button
const teclas = document.querySelectorAll('.tecla');

function tocar(idAudio) {
    const elemento = document.querySelector(idAudio);

    // Validação para funcionar apenas com seletores 'audio'
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }else {
        console.log('Elemento não encontrado ou Seletor inválido');
    }
}

for (let contador = 0; contador < teclas.length; contador++) {
    const teclaNaPosicao = teclas[contador];
    const sufixoTeclas = teclaNaPosicao.classList[1];

    teclaNaPosicao.onclick = function () {
        tocar(`#som_${sufixoTeclas}`);
    };

    teclaNaPosicao.onkeydown = function(event) {
        // Se você der um console.log(event) você conseguirá saber qual code é a tecla pressionada, podendo escreve-la como comparativo abaixo
        if (event.code === 'Space' || event.code === 'Enter') {
            teclaNaPosicao.classList.add('ativa');
        }
    }

    teclaNaPosicao.onkeyup = function() {
        teclaNaPosicao.classList.remove('ativa');
    }
}
