//código a ser reescrito

// const nome = prompt('fale seu nome')

// let idade = prompt('fale sua idade')

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);

// if(idade >= 18){
// 	console.log(idade >= 18 'pode tirar a CNH' : 'NAO PODE TIRR A CNH')
// }
//   } 

//usando o if ternário 
// console.log(idadeDependente === 13? 'mensagem 1': 'mensagem 2')
// console.log(idadeDependente === 13? 'A idade do dependente é 13 e ja pode ter m cartão': "verifique outras opcoes possiveis")
const nome = prompt('digite o seu nome');
console.log(nome === 'jose'? 'oi, ze' : "oi, "+nome);
 
let idade = Number(prompt('digite sua idade'));
console.log(idade >=18? 'pode tirar carteira' : 'ainda não pode tirar a carteira')
