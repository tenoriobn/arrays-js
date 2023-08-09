const notas = [7, 7, 8, 9];

// Aqui utilizando o spread operator [...] para copiar os valores de `notas`
// É como se ´[...notas]´ fosse um ctrl + c e ctrl + v de [7, 7, 8, 9].
const novasNotas = [...notas, 10];

// Aqui não precisamos usar o método `push()`
// Basta adicionar dentro do colchetes separado por virgual [...notas, 10]
// novasNotas.push(10)

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);