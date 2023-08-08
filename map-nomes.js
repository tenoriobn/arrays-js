const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => {
    return nome.toUpperCase();
})

// É possível escrever omitindo o `return`, mas é preciso tirar as chaves e o ponto e virgula:
// const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados)