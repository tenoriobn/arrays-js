/* 01. Crie uma função que recebe um array de 2 números e 
coloque eles em ordem crescente. Não use o método sort. */


//Forma menos verbosa e funcional
// Criei a função que recebe os dois valores
function recebeArray(numeroUm, numeroDois) {
    // Desestruturação dos dois valores e verificação da ordem do menor para o maior
    const [min, max] = numeroUm < numeroDois ? [numeroUm, numeroDois] : [numeroDois, numeroUm];

    // Atribuindo as variaveis `min` e `max` a variavel const `arrayOrdenado`
    const arrayOrdenado = [min, max];

    console.log(arrayOrdenado);

    // Retornando os valores ordenados para a função.
    return arrayOrdenado;
};

// Definindo os dois valores.
recebeArray(5, 3);


// Forma correta, entretanto muito verbosa
/*
function recebeArray(numeroUm, numeroDois) {
    const array = [numeroUm, numeroDois];

    if (array[0] > array[1]) {
        const order = array[0];
        array[0] = array[1];
        array[1] = order;
    };

    console.log(array);
    return array;
}

recebeArray(2, 1);
*/