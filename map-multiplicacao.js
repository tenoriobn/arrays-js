const arrayNums = [1, 2, 3, 4];

function multiplicaPorDez(num) {
    return num * 10;
}

const arraySomada = arrayNums.map(multiplicaPorDez)

// O mapeamento feito a cima com função externa é a mesa coisa da linha de baixo com arrow function:
// const arraySomada = arrayNums.map(num => num * 10)


console.log(arraySomada)