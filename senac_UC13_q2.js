/**
 * Gerencia um estoque com operações básicas.
 * 
 * Cria um array com itens iniciais, atualiza um item e exibe o total de itens.
 * @returns {void}
 */
function gerenciarEstoque() {
    const estoque = ["Arroz", "Feijão", "Macarrão", "Farinha"];
    estoque[1] = "Lentilha"; // Atualizando o segundo item
    console.log(`Total de itens no estoque: ${estoque.length}`);
}

gerenciarEstoque();
