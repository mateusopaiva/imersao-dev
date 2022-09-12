function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if(filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito);
    } else {
        console.error("Endereço de filme invalido");
    }
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filmeFavorito) {
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    var elementolistaFilmes = document.getElementById("listaFilmes");
    elementolistaFilmes.innerHTML = elementolistaFilmes.innerHTML + elementoFilmeFavorito;
}