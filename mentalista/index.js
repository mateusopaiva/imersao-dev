var numeroSecreto = parseInt(Math.random() * 1001);
var tentativas = 10;

function Chutar() {
    
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);

    if(tentativas != 1) {
        if(chute == numeroSecreto) {
            elementoResultado.innerHTML = "Acertou! o número secreto era " + numeroSecreto;
            tentativas = 1;
        } else if(chute > 1000 || chute < 0 || Number.isNaN(chute)) {
            elementoResultado.innerHTML = "O número digitado é invalido";
        } else {
            if(chute > numeroSecreto) {
                elementoResultado.innerHTML = "Errou, o número secreto é menor que " + chute;
            }
            else {
                elementoResultado.innerHTML = "Errou, o número secreto é maior que " + chute;
            }
            tentativas--;
            tentativa.innerHTML = tentativas + " tentativas";
        }
    } else if(chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você ganhou!";
    } else {
        tentativa.innerHTML = "Acabaram todas as tentativas";
        elementoResultado.innerHTML = "Fim do Jogo!";
    }

}