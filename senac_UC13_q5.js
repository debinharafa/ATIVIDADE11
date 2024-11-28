/**
 * Jogo de adivinhação de número entre 1 e 10.
 * 
 * Pede ao usuário para adivinhar o número até acertar ou digitar "sair".
 * @returns {void}
 */
function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativa;

    while (true) {
        tentativa = prompt("Adivinhe um número entre 1 e 10 (ou digite 'sair'):");
        if (tentativa.toLowerCase() === "sair") {
            console.log("Você saiu do jogo!");
            break;
        } else if (parseInt(tentativa) === numeroSecreto) {
            console.log("Parabéns! Você acertou!");
            break;
        } else {
            console.log("Tente novamente!");
        }
    }
}

jogoAdivinhacao();
