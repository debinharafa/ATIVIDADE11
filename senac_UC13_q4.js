/**
 * Exibe palavras de um array em ordem reversa.
 * 
 * Recebe um array e exibe os elementos na ordem inversa.
 * @param {string[]} palavras Array de palavras
 * @returns {void}
 */
function exibirPalavrasReverso(palavras) {
    for (let i = palavras.length - 1; i >= 0; i--) {
        console.log(palavras[i]);
    }
}

exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);
