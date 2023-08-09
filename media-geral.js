const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    // Aqui podemos omitir o `return` tirando as `chaves`.
    // O acumulador pode ser demonimado também `acc`.
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0)


/*  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        // Aqui o acumulador vai guardar a primeira nota `7` depois vai somar com a segunda nota que é `8`...
        return acumulador + nota;

        // Aqui em vez de somar as notas, vai somar a quantidade de notas que começa em zero
        // Então a primeira nota o 0 vai pra 1, a segunda nota, vai fazer ir pra 2
        // Portanto o acumulador, vai acumular a quantidade de notas e não somar as notas
        // return acumulador + 1;
    }, 0)
    
    */

    const media = somaDasNotas / notasDaSala.length;
    return media


}

console.log(`A média da sala de Javascript é ${calculaMedia(salaJS)}`)
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`)
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`)