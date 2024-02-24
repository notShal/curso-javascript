// 1 - setTimeout

console.log("Ainda não executou");

setTimeout(function() {
    console.log("Requisição assícrona");
}, 2000)

console.log("ainda não executou 2");

// 2 - setInsterval

console.log("Ainda não começou");

setInterval(function() {
    console.log("Intervalo assícrono");
}, 3000);

console.log("Ainda não começou 2");