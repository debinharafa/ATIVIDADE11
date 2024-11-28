/**
 * Calcula a média das notas de alunos.
 * 
 * Cria um array de notas, calcula a média de cada aluno e exibe no console.
 * @returns {void}
 */
function calcularMediaAlunos() {
    const alunos = [
        [8, 7, 9],
        [6, 5, 7],
        [10, 9, 8]
    ];
    for (let i = 0; i < alunos.length; i++) {
        let soma = 0;
        for (let j = 0; j < alunos[i].length; j++) {
            soma += alunos[i][j];
        }
        const media = soma / alunos[i].length;
        console.log(`Aluno ${i + 1} - Média: ${media.toFixed(2)}`);
    }
}

calcularMediaAlunos();
