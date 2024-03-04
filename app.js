let numeromaximo = 100;
let numerodetentativas = 1;
let numerosecreto = parseInt(Math.random() * numeromaximo + 1);
console.log(numerosecreto);
let chute;

while (chute != numerosecreto){
    chute = prompt (`escolha um numero entre 1 e ${numeromaximo}`);

    if (numerosecreto == chute) {
        break;
    } else {
        if (numerosecreto < chute) { 
            alert("o numero esta muito alto");
        } else{
            alert("o numero esta muito baixo");
        }
        numerodetentativas++;
           }

    } 
let paltenta = numerodetentativas == 1 ? 'tentativa' : 'tentativas';
alert(`parabens era (${numerosecreto}) com ${numerodetentativas} ${paltenta}`);