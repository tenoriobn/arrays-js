const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.push("Rodrigo")

// Primeiro e segundo paramêtro estão removendo os índices
// O teceiro está adicionando o item Rodrigo no lugar dos items removidos.
nomes.splice(1, 2, "Rodrigo")
console.log(nomes)


/*Atividade
animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')

//                        0     1      2     3     4
// Aqui a saída seria: ['🐋', '🐠', '🐙', '🐬', '🦈']

animaisDoAquario.splice(3,2,'🐟')

//                        0     1      2     3    
// Aqui a saída seria: ['🐋', '🐠', '🐙', '🐟']
*/ 