# *DOCUMENTAÇÃO DA ATIVIDADE DA AULA 11:*

### ALUNA:DÉBORA RAFAELLE 
### DATA:27/11/2024 
### PROFESSOR: THIAGO

---

Documentação 

### *Introdução*

Este documento descreve as implementações e ajustes realizados para resolver os exercícios envolvendo Arrays e Estruturas de Repetição utilizando JavaScript. Cada exercício está documentado seguindo o padrão JSDoc.


---

## Questão 1: Gerenciamento de Tarefas

### *Descrição do Problema:*

Criar um script que gerencie uma lista de tarefas.

Etapas:

1. Criar um array vazio chamado tarefas.


2. Adicionar três tarefas usando o método .push().


3. Remover a última tarefa adicionada com .pop().


4. Exibir o array final no console.



Código Implementado:

/**
 * Gerencia uma lista de tarefas.
 * Adiciona e remove tarefas, exibindo o estado final do array.
 */
function gerenciarTarefas() {
    let tarefas = [];
    tarefas.push("Estudar", "Trabalhar", "Exercitar");
    tarefas.pop();
    console.log(tarefas);
}
gerenciarTarefas();


---

### *Questão 2: Gerenciamento de Estoque*

Descrição do Problema:
Criar um script que gerencie um estoque inicial de 4 itens.

Etapas:

1. Criar um array estoque com 4 itens.


2. Atualizar o segundo item do array.


3. Exibir o número total de itens no estoque usando .length.



Código Implementado:

/**
 * Gerencia um estoque de produtos.
 * Atualiza itens e exibe o total de produtos.
 */
function gerenciarEstoque() {
    let estoque = ["Item1", "Item2", "Item3", "Item4"];
    estoque[1] = "ItemAtualizado";
    console.log(Total de itens no estoque: ${estoque.length});
}
gerenciarEstoque();


---

## Questão 3: Cálculo de Médias de Alunos

### *Descrição do Problema:*

Criar um script para armazenar notas de alunos e calcular a média.

Etapas:

1. Criar um array alunos onde cada elemento é um array de notas.


2. Utilizar um loop aninhado para calcular a média.


3. Exibir o nome e a média de cada aluno.



Código Implementado:

/**
 * Calcula e exibe a média das notas de alunos.
 */
function calcularMediaAlunos() {
    let alunos = [
        { nome: "João", notas: [8, 9, 7] },
        { nome: "Maria", notas: [10, 7, 8] },
        { nome: "Carlos", notas: [6, 5, 8] }
    ];

    for (let aluno of alunos) {
        let soma = 0;
        for (let nota of aluno.notas) {
            soma += nota;
        }
        let media = soma / aluno.notas.length;
        console.log(Aluno: ${aluno.nome}, Média: ${media.toFixed(2)});
    }
}
calcularMediaAlunos();


---

## Questão 4: Exibição de Palavras em Ordem Reversa

### *Descrição do Problema:*

Criar um script que exiba palavras de um array em ordem reversa.

Etapas:

1. Criar um array palavras com pelo menos 5 palavras.


2. Usar um loop for reverso para exibir as palavras no console.



Código Implementado:

/**
 * Exibe palavras em ordem reversa.
 * @param {string[]} palavras - Array de palavras para exibição.
 */
function exibirPalavrasReverso(palavras) {
    for (let i = palavras.length - 1; i >= 0; i--) {
        console.log(palavras[i]);
    }
}
exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);


---

## Questão 5: Jogo de Adivinhação

### *Descrição do Problema:*

Criar um script para um jogo de adivinhação com números de 1 a 10.

Etapas:

1. Solicitar ao usuário que adivinhe um número.


2. Repetir até que ele acerte ou digite "sair".


3. Exibir mensagens apropriadas para respostas corretas e para o comando "sair".



Código Implementado:

/**
 * Jogo de adivinhação de números.
 */
function jogoAdivinhacao() {
    const numeroCorreto = Math.floor(Math.random() * 10) + 1;
    let tentativa;

    while (tentativa !== "sair") {
        tentativa = prompt("Adivinhe um número entre 1 e 10 ou digite 'sair' para encerrar:");

        if (tentativa === "sair") {
            console.log("Jogo encerrado.");
            break;
        }

        tentativa = parseInt(tentativa);
        if (tentativa === numeroCorreto) {
            console.log("Parabéns, você acertou!");
            break;
        } else {
            console.log("Tente novamente!");
        }
    }
}
jogoAdivinhacao();


---

# *Conclusão*

Os exercícios abordaram conceitos fundamentais de JavaScript, incluindo manipulação de arrays, loops e interação com o usuário. A documentação em JSDoc foi implementada para descrever cada função de forma clara.


---