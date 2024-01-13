//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 100';
let numeroSecretoAnterior = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
console.log(numeroSecreto);

function exibirMensagenInicial() {
    titulo = exibirTextoNaTela('h1', 'Jogo do número secreto 2.0');
    paragrafo = exibirTextoNaTela('p', 'escolha um número de 1 a 10');

}
exibirMensagenInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('h1', mensagemTentativas);
        exibirTextoNaTela('p', `o numero secreto era ${numeroSecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', `${chute} é maior que o numero secreto`);
    } else {
        exibirTextoNaTela('p', `${chute} é menor que o numero secreto`);
    } tentativas++;
      limparCampo();  
}      

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *10 +1);
    quantidadeDeElementosDaLista = numeroSecretoAnterior.length;

    if (quantidadeDeElementosDaLista == numeroLimite) {
        numeroSecretoAnterior = [];
    }

    if (numeroSecretoAnterior.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numeroSecretoAnterior.push(numeroEscolhido);
        console.log(numeroSecretoAnterior);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagenInicial();    
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

