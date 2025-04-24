// var
// Forma tradicional de declarar variáveis. Tem escopo de função, sofre hoisting e pode ser redeclarada.
// Menos recomendada em código moderno.
var nome = "João";
console.log(nome);

//let
// Introduzida no ES6. Tem escopo de bloco, pode ter seu valor alterado, mas não pode ser redeclarada no mesmo escopo.
//  Mais previsível que var.
let idade = 18;
console.log(idade);

//const
// Introduzida no ES6. Tem escopo de bloco e não permite reatribuição após declaração.
// Objetos e arrays declarados com const podem ter seus conteúdos modificados.?
const pi = 3.14;
console.log(pi);
