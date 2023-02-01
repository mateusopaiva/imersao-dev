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

/* EXEMPLOS DE ENDEREÇOS DE FILMES:
    https://br.web.img2.acsta.net/pictures/bzp/01/61282.jpg
    https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg
    https://br.web.img2.acsta.net/pictures/22/08/23/09/37/1541299.jpg
    https://br.web.img3.acsta.net/pictures/15/10/18/18/39/408904.jpg
    https://br.web.img2.acsta.net/r_1280_720/img/0e/85/0e85b4029c87236712cf11cd3a343ae2.jpg
*/