const alunos = ["João", "Juliana", "Ana", "Caio"];

const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    // const alunos = listaDeAlunosEMedias[0];
    // const medias = listaDeAlunosEMedias[1];

    const [alunos, medias] = listaDeAlunosEMedias;

    if (alunos.includes(aluno)) {
        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a media ${mediaDoAluno}.`)
    } else {
        console.log("Aluno não encontrado");
    }
}

exibeNomeENota("Ana")