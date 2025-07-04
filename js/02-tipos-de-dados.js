// 🎨 TIPOS DE DADOS - Os Diferentes Tipos de Coisas que Guardamos

// 📝 String (Texto)
let nome = "Maria";
let sobrenome = 'Silva';
let frase = `Meu nome é ${nome}`; // Template string

console.log(nome); // Maria
console.log(sobrenome); // Silva
console.log(frase); // Meu nome é Maria
console.log("Tamanho do nome:", nome.length); // 5

// 🔢 Number (Números)
let idade = 25;        // Número inteiro
let altura = 1.75;     // Número decimal
let temperatura = -5;   // Número negativo
let infinito = Infinity; // Infinito

console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Temperatura:", temperatura);
console.log("Infinito:", infinito);

// ✅ Boolean (Verdadeiro/Falso)
let estouFeliz = true;
let estouTriste = false;

console.log("Estou feliz?", estouFeliz);
console.log("Estou triste?", estouTriste);

// 🚫 Null e Undefined
let caixaVazia = null;        // Caixa vazia de propósito
let caixaSemNada = undefined; // Caixa que ainda não recebeu nada

console.log("Caixa vazia:", caixaVazia);
console.log("Caixa sem nada:", caixaSemNada);

// 📦 Object (Objeto)
const pessoa = {
    nome: "Ana",
    idade: 8,
    gostoSorvete: true,
    brinquedos: ["boneca", "bola"]
};

console.log("Pessoa:", pessoa);
console.log("Nome da pessoa:", pessoa.nome);
console.log("Brinquedos:", pessoa.brinquedos);

// 📋 Array (Lista)
const cores = ["vermelho", "azul", "amarelo"];
const numeros = [1, 2, 3, 4, 5];
const misturado = ["texto", 42, true, { tipo: "objeto" }];

console.log("Cores:", cores);
console.log("Primeira cor:", cores[0]);
console.log("Quantidade de cores:", cores.length);

// 🏷️ Symbol (Identificador Único)
const simbolo1 = Symbol("descrição");
const simbolo2 = Symbol("descrição");

console.log("Símbolos iguais?", simbolo1 === simbolo2); // false

// 🗺️ Map (Mapa de Chave-Valor)
const mapa = new Map();
mapa.set("chave1", "valor1");
mapa.set("chave2", "valor2");

console.log("Valor da chave1:", mapa.get("chave1"));

// 📑 Set (Conjunto sem Repetição)
const conjunto = new Set([1, 2, 2, 3, 3, 4]);
console.log("Conjunto:", conjunto); // Set(4) {1, 2, 3, 4}

// 💡 Dicas:
// 1. Use o tipo mais apropriado para cada dado
// 2. Arrays são ótimos para listas ordenadas
// 3. Objetos são perfeitos para agrupar informações relacionadas
// 4. Set é útil quando precisamos de valores únicos
// 5. Map é ótimo para relacionar chaves e valores

// 🎮 Exercícios:
// 1. Crie um objeto com suas informações (nome, idade, hobbies)
// 2. Faça um array com suas comidas favoritas
// 3. Use template string para criar uma frase com seus dados
// 4. Crie um Set com números e tente adicionar números repetidos