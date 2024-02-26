/*

        ForEach(item, index, array)

        item - Dados/infirmações contidas na posição atual do array
        index - Número da posição. Sempre começa em 0.
        array - Retorna o array completo
*/

const users = [
    {
        name: "Shal",
        age: 22,
        contact: "(61) 4002-8922",
    },
    {
        name: "Paulo",
        age: 25,
        contact: "(62) 4003-8923",
    },
    {
        name: "Carlos",
        age: 14,
        contact: "(63) 4004-8925",
    },
    {
        name: "André",
        age: 23,
        contact: "(64) 4005-8926",
    }

]

users.forEach((item, index) =>{
    if(item.age < 18){
        console.log(`O cliente ${item.name} na posição ${index} é menor de idade!`)
    }
 //   console.log(item);
 //   console.log(index);
});