/* 
    Estrutura de repetição - LOOP
        - FOR IN
        - Usado para iterar objetos
*/

const user = { 
    name: "Rodolfo", 
    age: 30,
    street: "w3 norte",
}

//user.name -> Rodolfo
//user["name"] -> Rodolfo

for(let key in user) {
    console.log(`${key}: ${user[key]}`);
}