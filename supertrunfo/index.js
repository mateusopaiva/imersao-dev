var carta1 = {
    nome: "Darth Vader",
    imagem: "https://t.ctcdn.com.br/9ujX8CZfRB6fyBgS-Ax3JYSZMg4=/1000x563/smart/i571972.jpeg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6,
    }
};

var carta2 = {
    nome: "Bulbasauro",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2,
    }
};

var carta3 = {
    nome: "Shiryu do Dragão",
    imagem: "http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10,
    }
};

var cartas = [carta1, carta2, carta3];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3); 
    while(numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for(var i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var AtributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");

    if(cartaJogador.atributos[AtributoSelecionado] > cartaMaquina.atributos[AtributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Você venceu</p>";
    } else if (cartaMaquina.atributos[AtributoSelecionado] > cartaJogador.atributos[AtributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Você perdeu</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }

    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`;
    //divCartaJogador.style.backgroundImage="url(" + cartaJogador.imagem + ")";
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = ""

    for(var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name= 'atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"; 
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>';
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`;

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = ""
    for(var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name= 'atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"; 
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>';
}