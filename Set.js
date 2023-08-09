const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = [...new Set(nomes)];

// A forma abaixo é mais verbosa
// const meuSet = new Set(nomes);
// const nomesAtualizados = [...meuSet]

console.log(nomesAtualizados);