/* 02. Crie uma função que recebe um array de 3 números e 
coloque eles em ordem crescente. Crie sua própria função para isso. */
/*
// Criei a função que como parâmetro recebera a lista que guarda os 3 números
function recebeArray(array) {

    // Aqui estamos ordenando e retornando os valores para a função.
    // O .slice() cria uma cópia superficial da array original antes de aplicar o .sort()
    // O .sort() como função usa `a, b` para comparar os valores
    // Então `a` guarda um valor `b` guarda outro, depois é feito a substração para saber a ordem
    // `a` começa com 7 e `b` 3, é feito a ordenação, depois `a` é 7 e `b` é 5...
    // Se o resultado for negativo, significa que a é menor que b e deve ficar antes.
    // Se o resultado for positivo, significa que `a` é maior que `b` e deve ficar depois
    // Se o resultado for zero, significa que a e b são iguais em relação à ordem
    return array.slice().sort((a, b) => a - b);
};
*/

// Modo menos verboso de fazer a função de ordenação
function recebeArray(array) {
    // copiando a lista, obtendo os valores nos parâmetros, realizando a subtração e retornando na ordem.
    return [...array].sort((a, b) => a - b);
}

// Array com os 3 números desordenados
const numeros = [7, 3, 5];

// Variável que vai guardar o resultado da execução da função que será os numeros em ordem.
const numerosOrdenados = recebeArray(numeros);

// vai imprimir o resultado.
console.log(numerosOrdenados);