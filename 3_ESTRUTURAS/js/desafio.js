// DESAFIO - Ultilizando If / Else, crie um codigo que:
//      - verifica se uma cidade é grande ou pequena
//      - Cidade grande possui mais de 300mil habitantes

const saoPaulo = 11000000
const brasilia = 2800000
const engenhoVelho = 1350
const serraDaSaudade = 833

if (engenhoVelho >= 3000) {
    console.log(`São Paulo  é uma grande cidade!`);
} else {
    console.log("Cidade pequena");
}

function digaUmNome(nome) {
    console.log(nome);
}

digaUmNome("Shal")

function divisao(num1, num2){
    const resultado = num1 / num2
    console.log(resultado);
}

divisao(40, 8)

console.log("2" + "2" - "2");

// return

function estaEndividado (receita, gastos) {
    if ( receita > gastos) {
        return `Está no Azul`
    } else {
        return `Está no Vermelho`
    }
}

const maria = estaEndividado(5000, 7000)
const shal = estaEndividado(1000, 5000)

console.log(maria);
console.log(shal);

const estaEndividadoAF = (receita2, gastos2) => {
    if (receita2 > gastos2) {
        return "Está positivo"
    }else {
        return "Está endividado"
    }
}

const pedro = estaEndividadoAF(2000, 5000)
const clara = estaEndividadoAF(5000, 1000)

console.log(pedro);
console.log(clara);