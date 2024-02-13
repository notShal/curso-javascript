// 1 - Variáveis
let nome = "Shal";

console.log(nome);

nome = "Danillo Shal";

console.log(nome);

const idade = 18;

console.log(idade);

// idade = 19;  (const não muda o valor)

console.log(typeof nome);

console.log(typeof idade);

// 2 - Mais sobre variáveis

//let 2teste = "inválido"
//let @teste = "inválido"

let a = 10,
    b = 20,
    c = 30;

console.log(a, b, c);

const nomecompleto = "Danillo Shal";

const nomeCompleto = "João da Silva";

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste);

// 3 - Prompt

//const age = prompt("Digite a sua idade: ");

//console.log(`Você tem ${age} anos.`);

// 4 - Alert

//alert("Testando");

//const z = 10

//alert(`O número é ${z}`);

// 5 - Função Math

console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 6 - Console 

console.log("teste!");

console.error("error!");

console.warn("aviso!");

// 7 - Estruturas de controle - IF

const m = 10;

if(m > 5) {
    console.log("M é maior que 5!");
}

const user = "João"

if(user === "João") {
    console.log("Olá João!");
}

if(user === "Maria") {
    console.log("Olá Maria!");
}

console.log(user === "João", user === "Maria");

// 8 - Estruturas de controle - Else

const loggedIn = false

if(loggedIn) {
    console.log("Está autenticado!");
} else {
    console.log("Não está autenticado!");
}

const q = 10
const w = 25

if(q > 5 && w > 20) {
    console.log("Os números são mais altos");
} else {
    console.log("Os números não são mais altos");
}

// 9 - Estrutura condicional: else if

if(1 > 2) {
    console.log("Teste");
} else if(2 > 3) {
    console.log("Teste 2");
} else if(5 > 1) {
    console.log("Agora sim!");
}

const userName = "Shal"
const userAge = 18

if(userName === "Shal") {
    console.log("Bem vindo José!");
} else if(userName === "Shal" && userAge === 31) {
    console.log("Olá Shal, você tem 18 anos!");
} else {
    console.log("Nenhuma condição aceita!");
}

// 10 - Estruturas de repetição - While

let p = 0

while(p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

 // loop infinito

 //let x = 10

 //while(x > 5) {
 //   console.log(`Imprimindo ${x}`);
 //}

 