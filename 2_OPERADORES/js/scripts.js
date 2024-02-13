// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Operações aritiméticas
console.log(3 + 5);
console.log(10 - 5);
console.log(5 * 5);
console.log(10 / 2);
console.log(5 + (4 * 2));

// 3 - Special Numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - Strings
console.log("Um Texto");
console.log('Mais um Texto');
console.log(`13`);

// 5 - Simbolos especiais em string
console.log("Testando a \n quebra de linha");

console.log("Espaçamento \t de tab");

// 6 - Concatenação
console.log("Oi," + " tudo" + " bem?");
console.log(`Testando` + ` com` + ` crase.`);

// 7 - Interpolação
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${(console.log("teste"))}`);

// 8 - Booleans
console.log(true);
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof false);

// 9 - Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);

// 10 - Idênticos
console.log(9 == "9"); // valor igual
console.log(9 === "9"); // tipo diferente
console.log(9 != "9"); // diferente
console.log(9 !== "9"); // tipo

// OBS - Operadores lógicos (&& - AND / || - OR / ! - NOT)

// 11 - Operadores lógicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Matheus" === 1);

console.log(5 > 2 || "Matheus" === 1);

console.log(5 < 2 || 5 > 100);

console.log(!true);

console.log(!5 > 2);

// 12 - Empety Values

console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - Conversão de tipo automática

console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);