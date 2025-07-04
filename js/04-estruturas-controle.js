// 🔄 ESTRUTURAS DE CONTROLE - Como Tomamos Decisões

// 🤔 if/else (Se/Senão)
let hora = 12;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Exemplo prático: Verificar se pode andar de montanha russa
let altura = 1.4;
let idadeVisitante = 10;
let acompanhado = true;

if (altura >= 1.4) {
    console.log("Pode andar na montanha russa!");
} else if (altura >= 1.2 && acompanhado) {
    console.log("Pode andar com acompanhante!");
} else {
    console.log("Não pode andar na montanha russa.");
}

// 🎯 switch (Escolha)
let cor = "azul";

switch (cor) {
    case "vermelho":
        console.log("Você escolheu vermelho!");
        break;
    case "azul":
        console.log("Você escolheu azul!");
        break;
    case "verde":
        console.log("Você escolheu verde!");
        break;
    default:
        console.log("Cor não encontrada!");
}

// Exemplo prático: Dias da semana
let dia = 3;
switch (dia) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    default:
        console.log("Outro dia da semana");
}

// 🔁 Loops (Repetições)
// for - Quando sabemos quantas vezes queremos repetir
console.log("Contando com for:");
for (let i = 1; i <= 5; i++) {
    console.log(`Número ${i}`);
}

// Exemplo prático: Tabuada
console.log("\nTabuada do 2:");
for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}

// while - Quando não sabemos quantas vezes vamos repetir
console.log("\nContando com while:");
let contador = 1;
while (contador <= 5) {
    console.log(`Contagem: ${contador}`);
    contador++;
}

// Exemplo prático: Jogo de adivinhação
let numeroSecreto = 7;
let tentativa = 1;
let acertou = false;

console.log("\nJogo de adivinhação:");
while (!acertou && tentativa <= 3) {
    console.log(`Tentativa ${tentativa}`);
    // Aqui você normalmente pediria um número ao usuário
    let palpite = tentativa + 3; // Simulando palpites
    
    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você acertou!");
        acertou = true;
    } else {
        console.log("Tente novamente!");
        tentativa++;
    }
}

// 💡 Dicas:
// 1. Use if/else para decisões simples
// 2. Use switch quando tiver muitas opções para uma única variável
// 3. Use for quando souber o número de repetições
// 4. Use while quando não souber quantas repetições serão necessárias

// 🎮 Exercícios:
// 1. Crie um if/else para verificar se um número é par ou ímpar
// 2. Use switch para criar um menu de opções
// 3. Faça um for para mostrar os números pares de 0 a 10
// 4. Use while para fazer uma contagem regressiva 