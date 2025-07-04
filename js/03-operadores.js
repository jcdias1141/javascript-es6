// ➕ OPERADORES - Como Fazemos Contas e Comparações

// 🧮 Operadores Aritméticos
let soma = 5 + 3;
console.log("5 + 3 =", soma); // 8

let subtracao = 10 - 4;
console.log("10 - 4 =", subtracao); // 6

let multiplicacao = 3 * 4;
console.log("3 * 4 =", multiplicacao); // 12

let divisao = 10 / 2;
console.log("10 / 2 =", divisao); // 5

// 🔍 Operadores de Comparação
let maiorQue = 5 > 3;
console.log("5 é maior que 3?", maiorQue); // true

let menorQue = 5 < 10;
console.log("5 é menor que 10?", menorQue); // true

let igual = 5 === 5;
console.log("5 é igual a 5?", igual); // true

let diferente = 5 !== 3;
console.log("5 é diferente de 3?", diferente); // true

// 🤔 Operadores Lógicos
// AND (&&) - Os dois precisam ser verdadeiros
let tenhoDinheiro = true;
let sorveteriaBerta = true;
let possoComprarSorvete = tenhoDinheiro && sorveteriaBerta;
console.log("Posso comprar sorvete?", possoComprarSorvete); // true

// OR (||) - Pelo menos um precisa ser verdadeiro
let tenhoBolacha = false;
let tenhoBolo = true;
let tenhoLanche = tenhoBolacha || tenhoBolo;
console.log("Tenho lanche?", tenhoLanche); // true

// NOT (!) - Inverte o valor
let estouComSono = true;
let estouDisposto = !estouComSono;
console.log("Estou disposto?", estouDisposto); // false

// 🎯 Exemplos Práticos
// Calculando média de notas
let nota1 = 7;
let nota2 = 8;
let media = (nota1 + nota2) / 2;
console.log("Média das notas:", media);

// Verificando se passou de ano
let mediaMinima = 7;
let passou = media >= mediaMinima;
console.log("Passou de ano?", passou);

// 💡 Dicas:
// 1. Use === ao invés de == para comparações mais seguras
// 2. Cuidado com divisão por zero
// 3. Operadores lógicos são ótimos para decisões complexas
// 4. Parênteses ajudam a organizar operações complexas

// 🎮 Exercícios:
// 1. Calcule a área de um retângulo (base * altura)
// 2. Verifique se uma pessoa pode dirigir (idade >= 18 && temCarteira)
// 3. Calcule o desconto de um produto (preço * (desconto / 100)) 