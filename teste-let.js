var exibeMensagem = function() {
    if(true) {
        var escopoFuncao = 'daFuncao';
        let escopoBloco = 'doBloco';

        console.log(escopoBloco);
    }
    console.log(escopoFuncao);
    console.log(escopoBloco);
}

exibeMensagem();