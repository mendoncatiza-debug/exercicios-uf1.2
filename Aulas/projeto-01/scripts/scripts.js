


/*

    variaveis:
        -let
        -const
        
*/

let nome = "tiza"; //string
let idade = "20"; //number(inteiro)
const morada="achadinha";//string
let estaPresente= true; //boolean (true or false)
let altura= 1.70; //number (float)
let nota;//indefinido
let media = null; //valor intencional de vazio


nome = "maria";
idade = "28";

console.log("Meu nome e: "+nome, " - Minha idade e: " + idade);
console.log("Minha morada e: " +morada);
console.log(typeof nome); //tipo de dados da variavel nome

let nomcafe = "capuccino";
let preco = "1000";
let quantidade;
let resposta = prompt("Quantidade de Capuccino que queres:")
quantidade = parseInt(resposta);

let total = "0";

total = preco*quantidade;

console.log(nome + " pediu " + quantidade + " " + nomcafe);
console.log(" O total a pagar e de " + total + " escudos.");

//====================================================================
// Aula 2 - Operadores e Estruturas de Controlo
//A Caixa do Café Morabeza
//====================================================================

const aluno = "tiza";
console.log(`O nome do aluno e: ${aluno}`); // o nnome do aluno e: Leandro

const precoCafe = 80;
const precoCapuccino = 50;
console.log(`A soma dos doi e: ${precoCafe + precoCapuccino}`);
console.log(`: ${precoCapuccino - precoCafe}`);
console.log(`O preco de tres cafes e: ${precoCafe * 3}`);
console.log(`Black Friday preco e pela metade: ${precoCafe / 2}`);
console.log(`Resto da divisao: ${precoCafe % 2}`);
console.log(`Exponencial: ${precoCafe ** 2}`);

let caixa = 0;
let poteGorjeta = 0;

//vendi um cafe
caixa += precoCafe; // caixa = caixa + precoCafe
poteGorjeta += precoCafe * 0.1; // poteGorgeta + precoCafe * 0.1

//vendi um capuccino
caixa += precoCapuccino; // caixa = caixa + precoCafe
caixa -= precoCafe * 0.1; // caixa = caixa - precoCafe *0.1

poteGorjeta /= 2;

console.log(`o valor atual da caixa e: ${caixa}`);

let numClientes = 0;
// ++ incrementa (adiciona) mais 1 sobre o valor atual
// -- decrementa (subtrai) mais 1 do valor atual


// entro um cliente novo
numClientes++; //adiciona mais 1 sobre o nº de clientes // era 0 e ficou 1
//entrou mais um cliente
numClientes++; //adiciona mais 1 sobre o nº de clientes // era 1 e ficou 2

//saui um cliente
numClientes--; // subtrai 1 do numero de clientes //eram 2 e ficou 1

console.log(`o nº atual de clientes e: ${numClientes}`);

//operadores de comparacao

//vereficar se o preco de cafe e maior do que 100, se for dou u bonos de 10% de gorjeta
console.log(precoCafe > precoCapuccino);//true
console.log(precoCapuccino > precoCafe);//false


// verifica se o valor do caixa atual e maior do que 100, se for dou um bonos de 10% de gorjeta

console.log(caixa > 100); //true

//calculo de troco da venda de um cafe
let valorPago = 200;
console.log(valorPago > precoCafe)//true
console.log(`o troco e de: ${valorPago - precoCafe}`);

//calculo de troco ma venda de um cafe
let valorPago2 = 50;
console.log(valorPago === precoCapuccino)//true
console.log(`o troco e de: ${valorPago2 - precoCapuccino}`);


//OPERADORES LOGICOS


// && = e
const age = 18;
const genero = "m";

console.log(10 > 5 &&  10 > 14 );
console.log( age >= 18 && genero === "m");

// || = ou
const temCartaoFidelidade = true;
const temCupomDesconto = false;

console.log( temCartaoFidelidade || temCupomDesconto );// true || false =>
console.log(!temCartaoFidelidade); // !true => false

// ESTRUTURAS DE CONTROLE
//DESISORES

/*
if = se
else = senao
else if = senao se
switch = escolha
*/

/*

se (condicao for verdadeira) entao {
    // faca isto
}   senao entao {
    //faca aquilo
}   senao se (outra condicao for verdadeiro)entao {
    //faca isto
}


    se idade fpr maior do que 18 entao
        // pode entrar na festa
    senao se estiver acompanhado por um responsavel entao
        // pode entrar
    senao
        // nao pode entrar na festa
*/

if ( age >= 17){
    console.log("E maior de idade");
}
else{
    console.log("nao e maior de idade");
}

if ( age >= 18 && genero === "m"){
    console.log("El e um grande Homi");
}
else if (age >= 18 && genero==="f" ) {
    console.log("el e um grande Mudjer");
}

const nacionalidade = "cv";
switch (nacionalidade){
    case "cv":
    console.log("Kualeh nha mano");
    break
case"Portugal": 
    console.log("Como estas irmao");
    break
case"Guine": 
    console.log("Eh cuman de corpo");
    break
case"Senegal": 
    console.log("Na nga def");
    break
default:
    console.log("agh kz mo stou???");
}

//CICLOS

//for --> usamos quando soubermos exatamente quantas vezes queremos que o 
//ciclo rode

for (let i= 1; i <= 5; i++){
    console.log(`Cliente numero ${i}`);
}

let precoTemp = 90;
for (let quantidade = 1; quantidade <= 5; quantidade++){
    console.log(`${quantidade} cafes custam : ${precoTemp * quantidade}`);
}

// contador que conta de 10 a 0
for (let i= 10; i >= 0; i--){
    console.log(`Tempo Restante: ${i}`);
}

//while --> usase quando nao sabemos quantas vexes queremos que o
//Ciclo rode

const precoMoinho = 5000;
const poupancaDiaria = 100;
let totalPoupado = 0;
let dia = 1;

while (totalPoupado <= precoMoinho) {
    totalPoupado += poupancaDiaria;
    dia++;
}

// FUNÇÕES

function saudar(){
    console.log("ola, bem vindo ao cafe Morabeza");
}
saudar();//chamar a funcao e executar o codigo
let nomeCliente;
function receberNomeDoCliente(nomeCliente){
    nomeCliente = nome;
}

function saudarNovoCliente(){
    console.log(`ola ${nomeCliente}, bem vindo ao café Morabeza`)
}

receberNomeDoCliente("tiza");
saudarNovoCliente ();

function calcularDesconto(quantidade,temCartao){
    let desconto = 0;
    if (quantidade >= 10){ 
        desconto = 15;
    }
    else if (quantidade >= 5 ){
        desconto = 10;
    }
    if (temCartao){
        desconto += 5;
    }
    return desconto;
}

 const valorDesconto = calcularDesconto(15,false);
console.log(`O desconto e de: ${valorDesconto}%`);

function aplicarDesconto(subtotal, desconto){
    let valorFinal;
    valorFinal = subtotal - (subtotal * desconto / 100);
    return valorFinal;
}

let totalAPagar = aplicarDesconto(150, valorDesconto);
console.log(`O total  final a pagar e de: ${totalAPagar} ECV`);

function nomeDaFuncao(parametro){
    //corpo da funcao
    //retorno da funcao
   
}
const nomeDoArrowFunction = (parametro)=>{
    //corpo da funcao
    //retorno da funcao
}
nomeDaFuncao("parametro");
//Arrays
const produtos = ["cafe", "capuccino", "Mocha", "Ice Tea", "Sopa"];

console.log(produtos);
console.log(produtos[2]);
produtos[4] = "sanduiche";//substitui o item na posição 4 para o novo valor
console.log(produtos);
produtos.push("Bolo");//adiciona  mais um novo item no final do array
console.log(produtos);
produtos.pop();//remove o último elemento do array
console.log(produtos);

//arrays de alunos

const alunos = [
    {
        nome: "Tiza",
        idade: 20,
      morada: "street",
    },
    {
        nome: "Leandro",
        idade: 17,
       morada: "Vila-Nova",
    },
    {
        nome: "Maria",
        idade: 25,
        morada: "bairo",
    }
    

];

//adiciona mais um aluno no final do array
alunos.push({
    nome:"erica",
    idade:"20",
    morada:"achadinha",

})
//===================================
//substitui o item (morada) na posicao 1
alunos[1].morada="achadinha";
console.log(alunos);
//===================================
//nka sabi pake k ta sirbi
for (let i = 0; i < alunos .length;i++){
    console.log(alunos);
}





