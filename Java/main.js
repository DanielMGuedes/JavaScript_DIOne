//INTRODUÇÃO GERAL JavaScript
/*By DanielMGuedes
//ROTEIRO JavaScript Básico
alert
variaveis
console,log
array e dicionário
toString para array
join para array
replace
condicional (if else)
Laços de repetição while e for
push, pop e length
reverse array
variavel global / local
lowerCase, upperCase
redirecionar para outra página
date
function
//

//VARIAVÉS E ALERT

var nome = "DanielMGuedes";
var idade = 41;
var idade2 = 10;
var frase = "Brazil Soccer Player Is Not The Beast";
alert("Train JavaScript de " + nome + " que tem" + idade + " anos");
alert(idade+idade2);
alert("Teste3" + idade+idade2); 
console.log(nome)
console.log(idade + idade2)
console.log(frase.replace("Brazil", "Japão"));
alert(frase.replace("Brazil", "Japão")); */

// Aprendendo Array JavaScript / console.log()

/*var lista =["maça", "Laranja", "Banana"];
lista.push("uva");
//lista.pop(); // Usado para excluir um elemento
console.log(lista);
console.log(lista.reverse());
console.log(lista.toString()); // trata tudo comouma String
console.log(lista.join('-*-'));
*/

// Aprendendo Dicionário em JavaScript
/* Exemplo 1
var fruta = {Nome: "maça", cor: "Vermelha"}
console.log(fruta.Nome);
alert(fruta[1].nome)*/

/* Exemplo 2
var frutas = [{Nome: "maça", cor: "Vermelha"}, {Nome: "Banana", cor: "Amarela"}]
console.log(frutas);
alert(frutas[1].Nome); */

// Aula 3 - Condicionais, laços de Repeitção e Date

// Condiçional IF ELSE / PROMPT
alert("Olá Bonitão.. fala pra mim...");
var idade = prompt("Qual é a sua idade?")
if (idade > 18) {
    alert("Você é Maior de idade(18anos) e se passar no VEstibular da UNB pode pedir uma carro para seu Pai!");
}else {
    alert("Você é Menor de Idade(18anos) e ainda precisa escutar muiiiiito o seu Pai chato.. :) I love you, my Son!")
}

//LAÇOS DE REPETIÇÃO WHILE 

/*
var count = 0;
while (count <=5) {
    console.log(count);
    count = count +1;
    alert(count);
    cont++;
}
*/

//LAÇOS DE REPETIÇÃO FOR
/*
var conta;
for(conta=0; conta <=5; conta++){
    console.log(conta);
    alert(conta);
}
*/
// date


var data = new Date();
alert("Data Completa (data):");
alert(data);
alert("Mes (data.getMonth):");
alert(data.getMonth(0));
alert("Minutos (data.getMinutes):");
alert(data.getMinutes());
alert("Date (data.getDate):");
alert(data.getDate());
alert("hora (data.getHours):");
alert(data.getHours());



