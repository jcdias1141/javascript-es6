//Exemplos Simples de Tipos de Dados em JavaScript ES6
//Strings (Textos)
let nome = "Luna";
let frase = "Eu gosto de sorvete";
let template = `Olá, meu nome é ${nome}`; // Template strings do ES6!

console.log(template); // Mostra: Olá, meu nome é Luna

//--------------------------------------------------------------
// Números para contar e calcular
let idade = 4;
let altura = 1.05;
let negativo = -10;

console.log(idade + 1); // Mostra: 5

//--------------------------------------------------------------
// Respostas de sim ou não boolean
let queroSorvete = true;
let estaChovendo = false;

console.log(queroSorvete); // Mostra: true

//--------------------------------------------------------------
// Caixa vazia que não decidimos o que vai dentro
let brinquedo;

console.log(brinquedo); // Mostra: undefined

//--------------------------------------------------------------
// Caixa que decidimos deixar vazia
let caixaVazia = null;

console.log(caixaVazia); // Mostra: null

//--------------------------------------------------------------
// Cada Symbol é único como um adesivo especial
let meuAdesivo = Symbol("estrela");
let outroAdesivo = Symbol("estrela");

console.log(meuAdesivo === outroAdesivo); // Mostra: false

//--------------------------------------------------------------
//Object (Mochila com vários itens)
let mochila = {
  lanche: "maçã",
  brinquedo: "carrinho",
  cor: "azul",
};

console.log(mochila.lanche); // Mostra: maçã

//--------------------------------------------------------------
//Array (Trem com vários vagões) -  Um trem onde cada vagão tem algo diferente
let trem = ["boneca", "bola", "bloco", "carrinho"];

console.log(trem[0]); // Mostra: boneca (o primeiro vagão)
console.log(trem.length); // Mostra: 4 (quantos vagões tem)

//--------------------------------------------------------------
//Map (Nova caixa organizadora ES6)
// Caixa onde cada item tem uma etiqueta especial
let baú = new Map();
baú.set("tesouro", "moedas de ouro");
baú.set("segredo", "chave mágica");

console.log(baú.get("tesouro")); // Mostra: moedas de ouro

//--------------------------------------------------------------
//Set (Caixa que não aceita repetidos)
// Caixa que guarda só um de cada brinquedo
let brinquedosÚnicos = new Set(['urso', 'bola', 'urso', 'carrinho']);

console.log(brinquedosÚnicos.size); // Mostra: 3 (não conta o urso repetido)
console.log(brinquedosÚnicos.has('bola')); // Mostra: true