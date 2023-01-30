function ConverterDolarReal() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    
    var valorEmDolar = parseFloat(valor);
    var valorEmReal = valorEmDolar * 5.32;

    var elementoValorConvertido = document.getElementById("valorConvertidoDolarReal");
    var valorConvertidoDolarReal = valorEmDolar + " Dólar americano igual a " + valorEmReal + " em Real brasileiro";
    elementoValorConvertido.innerHTML = valorConvertidoDolarReal;
}