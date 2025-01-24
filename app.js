let listadeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNatela('h1', 'Jogo do número secreto');
    exibirTextoNatela('p', 'Escolha um número entre 1 e 10');    
}

exibirMensagemInicial();

exibirTextoNatela('h1', 'Jogo do número secreto');
exibirTextoNatela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNatela('h1', 'Acertou !!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com  ${tentativas} ${palavraTentativa}`;
        exibirTextoNatela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
       if(chute > numeroSecreto){
        exibirTextoNatela('p', `o número ${chute} é maior que o número secreto`);
       } else{
        exibirTextoNatela('p', `o número ${chute} é menor que o número secreto`);
       }

       tentativas ++;
       limparCampo();
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listadeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listadeNumerosSorteados = [];    
    }
    if(listadeNumerosSorteados.includes(numeroEscolhido)){
       return gerarNumeroAleatorio(); 
    } else{
        listadeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

  