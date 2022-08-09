const numero = Number(prompt('DIGITE UM NÚMERO'))

// ultilizando if aninhados
if(numero % 2 === 0){
    if(numero % 3 ===0){
        console.log('numero divisivel por 2 e 3')
    }
}
// ultilizando operadores lógicos
if(numero % 2 === 0 || numero % 3 === 0){
    console.log('numero divisivel por 2 e 3')

}