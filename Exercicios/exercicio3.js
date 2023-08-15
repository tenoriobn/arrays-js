// 03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
// Modifique os elementos do array de modo a a sequência de números ficar do contrário.
// Ou seja, se digitou: 1,2,3, vai aparecer: 3,2,1

// Criando readline para inserir números simulando o usuario pelo nodejs.
const readline = require('readline');

// Criando uma interface de interação para perguntar e receber valores
const rl = readline.createInterface({
    // Vai ler o que o usuário digita.
    input: process.stdin,
    // Vai exibir o resultado do que foi digitado.
    output: process.stdout
});

// Função responsável por receber os valores pelo parâmetro `array`.
function recebeArray(array) {

    // Está copiando a array com os valores
    // E comparando os valores com o .sorte()
    // Se o resultado da subtração entre dois valores der negativo
    // Significa que a é menor que b e deve vir depois de b, criando a ordem decrescente.
    return [...array].sort((a, b) => b - a);
}

// Aqui é utilizado a variavel const `rl` que armazena o readline para fazer a pergunta ao usuário
// A primeira pergunta é sobre o `numeroUm` que utilizara essa "variavel" para guardar o valor
rl.question("Digite o primeiro número: ", (numeroUm) => {
    rl.question("Digite o segundo número: ", (numeroDois) => {
        rl.question("Digite o terceiro número: ", (numeroTres) => {
            // Aqui é utilizado para garantir que o `numeroUm` e etc guarde valores números com decimais se necessário
            const numeros = [parseFloat(numeroUm), parseFloat(numeroDois), parseFloat(numeroTres)];
            // Aqui é passado a variável `numeros` que armazena os valores digitados e passo para a função
            // A função com os valores é armazenado na variável `numerosOrdenados`
            // Criando uma nova array com os números digitados em ordem descente
            const numerosOrdenados = recebeArray(numeros);

            // Aqui exibe os números na ordem que o usuário digitou
            console.log("Números digitados:", numeros);
            
            // Aqui exibe os números na ordem decrescente.
            console.log("Números ordenados:", numerosOrdenados);

            // Finaliza a sessão de interação com o usuário
            rl.close();
        });
    });
});