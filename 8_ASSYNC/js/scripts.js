// 1 - setTimeout

console.log("Ainda não executou");

setTimeout(function() {
    console.log("Requisição assícrona");
}, 2000)

console.log("ainda não executou 2");

// 2 - setInsterval

console.log("Ainda não começou");

// setInterval(function() {
//     console.log("Intervalo assícrono");
// }, 3000);

console.log("Ainda não começou 2");

// 3 - promises

const promessa = Promise.resolve(5 + 5)

console.log("Algum código");

promessa.then(value => {
    console.log(`A soma é ${value}`);
})

console.log("Outro código");