/**
 * Gerencia uma lista de tarefas.
 * 
 * Cria um array vazio, adiciona tarefas, remove a última tarefa e exibe o array final.
 * @returns {void}
 */
function gerenciarTarefas() {
    const tarefas = [];
    tarefas.push("Estudar JavaScript");
    tarefas.push("Praticar exercícios");
    tarefas.push("Revisar conteúdos");
    tarefas.pop();
    console.log(tarefas);
}

gerenciarTarefas();
