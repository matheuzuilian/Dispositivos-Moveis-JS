//funcao sem retorno e sem parametro

function ola(){
    console.log("olá")
}

//funcao sem retorno e com parametro

function imprimir(texto = ""){
    console.log(texto);
}

//funcao com retorno e com parametro

function soma(a = 0, b = 1){
    return a+b;
}

ola();

//se eu passar parametro, ele sobrescreve
imprimir(soma(5 , 9));
//se eu nao passar ele usa a inicialização
imprimir(soma());