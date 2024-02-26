/*
Estrutura de repetição - LOOP
        - FOR
            1 INICIALIZAÇÃO - Criar uma variável e colocar um valor inicial para ela

            2 CONDIÇÃO - Enquanto for true, o laço continuará iterando. Ele irá verificar antes de cada interação

            3 EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço der uma volta


            for ([INICIALIZAÇÃO]; [CONDIÇÃO]; [EXPRESSÃO FINAL]){
                seu código aqui 
            }
*/

const users = ["Maria", "Aline", "Shal", "Marcelo"] // lenght(tamanho do array)

for(let i = 0; i < users.length; i++){
    console.log(users[i]);
}