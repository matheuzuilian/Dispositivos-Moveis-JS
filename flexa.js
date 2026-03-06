let apresentacaoFecha = nome => `meu nome é ${nome}`;

apresentacaoFecha("Felipe");

let apresentacaoFecha2 = (nome, idade) => `meu nome é ${nome} e eu tenho ${idade} anos`;

apresentacaoFecha2 = ("Matheus", 26);

//se tiver mais de uma linha de instrução, obrigatório usar chaves e return

const somaNumerosPequenos = (num1, num2) => {
    if(num > 10 || num2 >10)
        return "somente numeros de 1 a 9"
    else
        return num1 + num2;
}

//---------------------------------------------------------------------------------------

function gerar(){
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();

    let num = min + Math.trunc(dif * aleatorio);

    return `Acabei de pensar no numero ${num}`;
}

console.log("\nFunção Classica");
console.log(gerar());

//----------------------------------------------------------------------------------------

const gerar2 = (min = 1, max = 100) => {
    
    let dif = max - min;
    let aleatorio = Math.random();

    let num = min + Math.trunc(dif * aleatorio);

    return `Acabei de pensar no numero ${num}`;
}

console.log("\nFunção Flexa");
console.log(gerar2());