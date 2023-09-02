/* 04. Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. 
    Depois, o usuário vai preenchendo elemento por elemento do vetor. Ao final, exiba o array e o 
    array ao contrário (generalização do script anterior).
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function recebeArray(array) {
    return [...array].sort((a, b) => a - b);
}

rl.question("Quantos números você deseja digitar? ", (quantidade) => {
    const numArray = [];
    const numCount = parseInt(quantidade);

    function perguntaNumero(indice) {
        if (indice < numCount) {
            rl.question(`Digite o ${indice + 1}º número: `, (numero) => {
                const num = parseFloat(numero);
                numArray.push(num);
                perguntaNumero(indice + 1);
            });
        } else {
            const numerosOrdenados = recebeArray(numArray);
            console.log("Números digitados:", numArray);
            console.log("Números ordenados:", numerosOrdenados);
            rl.close();
        }
    };

    perguntaNumero(0);
});