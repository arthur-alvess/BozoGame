export { }
let pontos_jog1: number = 0;
let pontos_jog2: number = 0;
function lancarDados() {
    //
    let jogadas: number = 5;
    let a: number = 0;
    let b: number = 0;
    let c: number = 0;
    while (a < jogadas) {
        a += 1;
        b = obterInt(1, 6);
        c = obterInt(1, 6);
        //Soma dos resultados de cada jogador.
        pontos_jog1 += b;
        pontos_jog2 += c;
    }

    return `Jogador 1: ${pontos_jog1} Pontos! \nJogador 2: ${pontos_jog2} Pontos! \n `;

}


function obterInt(min: number, max: number): any {
    min = Math.ceil(min); // Irá arredondar para cima
    max = Math.floor(max); //Irá arredondar para baixo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(lancarDados())