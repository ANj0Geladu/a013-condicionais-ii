let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

if(nacionalidade === 'brasileira'){
    console.log('A pessoa é brasileira')
    switch(nacionalidade){
        case argentina:
            console.log('a pessoa é argentina')
            break;
        case uruguaia:
            console.log('a pessoa é uruguaia')
            break;
        case chilena:
            console.log('a pessoa é chilena')
            break;
        case colombiana:
            console.log('a pessoa é colombiana')
            break;
        
        default:
            ('a nacionalidade da pessoa não consta no catalogo')
    }
 }else{
    console.log('não foi encontrada nacionalidade')
 }

 // if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }
