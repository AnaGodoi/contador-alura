var frase = $(".frase").text(); // aqui estamos usando a função de puxar a classe do html, como se fosse document.querySelector e com o .text dizemos oq queremos selecionar
var numPalavras = frase.split(/\S+/).length;

var tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");

campo.on("input", function () {
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;

    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);

});

var tempoRestante = $("#tempo-digitacao").text();

campo.one("focus", function (params) {
    var cronometroID = setInterval(function () {
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante)
        if(tempoRestante < 1){
            campo.attr("disabled", true);
            clearInterval(cronometroID);
        }
    }, 1000);

});