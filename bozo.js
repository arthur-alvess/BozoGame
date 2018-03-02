"use strict";
exports.__esModule = true;
var pontos_jog1 = 0;
var pontos_jog2 = 0;
function lancarDados() {
    //
    var jogadas = 5;
    var a = 0;
    var b = 0;
    var c = 0;
    while (a < jogadas) {
        a += 1;
        b = obterInt(1, 6);
        c = obterInt(1, 6);
        //Soma dos resultados de cada jogador.
        pontos_jog1 += b;
        pontos_jog2 += c;
    }
    return "Jogador 1: " + pontos_jog1 + " Pontos! \nJogador 2: " + pontos_jog2 + " Pontos! \n ";
}
function obterInt(min, max) {
    min = Math.ceil(min); //arredonda para cima
    max = Math.floor(max); //arredonda para baixo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(lancarDados());