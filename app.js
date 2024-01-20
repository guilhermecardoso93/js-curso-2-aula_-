let listaNumeroSorteados = [];
let limiteNumero = 10;
let numeroSecreto = randomNumber();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do Número Secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

    let mensagemTentativas = `Você descobriu o Número Secreto, com ${tentativas} ${palavraTentativa}!`;

    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O Número Secreto é menor que o chute");
    } else {
      exibirTextoNaTela("p", "O Número Secreto é maior que o chute");
    }
    tentativas++;
    limparCampo();
  }
}

function randomNumber() {
  let numeroEscolhido = parseInt(Math.random() * limiteNumero + 1);
  let quantidadeDeNumero = listaNumeroSorteados.length;

  if (quantidadeDeNumero == limiteNumero) {
    listaNumeroSorteados = [];
  }

  if (listaNumeroSorteados.includes(numeroEscolhido)) {
    return randomNumber();
  } else {
    listaNumeroSorteados.push(numeroEscolhido);
    console.log(listaNumeroSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = randomNumber();
  limparCampo();
  tentativas = 1;

  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
