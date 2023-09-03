/*
05. Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente. 
Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise sobre bubble sort.
*/

function bubbleSort(array) {
    const n = array.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                // Trocar os elementos se estiverem fora de ordem
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}

// Exemplo de uso:
const numeros = [5, 2, 9, 1, 5, 6];
const numerosOrdenados = bubbleSort(numeros);
console.log(numerosOrdenados);