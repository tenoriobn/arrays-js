const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

// Podemos usar a conveção do `_` já que o `aluno` não seria utilizado e queremos apenas o indice
const reprovados = alunos.filter((_, indice) => {
    // Vai retornar o aluno que foi reprovado
    return medias[indice] < 7;

    // Aqui mostraria os alunos aprovados
    // return medias[indice] >= 7;
})

console.log(reprovados)