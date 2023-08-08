const nomes = ["Evaldo", "Mari", "Camis"];

// função anonima
nomes.forEach(function (nome) {
    console.log(nome)
})

// Arrow function
nomes.forEach((nome) => {
    console.log(nome)
})

// Função
function imprimeNome(nome) {
    console.log(nome)
}

nomes.forEach(imprimeNome)