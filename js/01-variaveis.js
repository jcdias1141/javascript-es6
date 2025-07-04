// 📦 VARIÁVEIS - Nossas Caixinhas Mágicas

// 🔄 let - A Caixinha que Pode Mudar
let meuBrinquedo = "carrinho";
console.log("Meu brinquedo inicial:", meuBrinquedo);

meuBrinquedo = "bola"; // Podemos trocar!
console.log("Meu brinquedo agora:", meuBrinquedo);

let meuSorvete = "chocolate";
console.log("Sabor inicial:", meuSorvete);

meuSorvete = "morango"; // Trocamos o sabor!
console.log("Novo sabor:", meuSorvete);

// 🔒 const - A Caixinha Que Não Muda
const meuNome = "João";
console.log("Meu nome é:", meuNome);
// meuNome = "Pedro"; // ❌ Erro! Não podemos mudar uma const

// ⚠️ var - A Forma Antiga (Evite usar)
// var tem escopo de função e sofre hoisting
var idade = 25;
if (true) {
    var idade = 30; // Mesmo 'idade' do escopo externo
}
console.log("Idade com var:", idade); // Mostra 30

// 🎯 Exemplo de Escopo com let
let contador = 1;
if (true) {
    let contador = 2; // Diferente contador do escopo externo
    console.log("Contador dentro do if:", contador); // Mostra 2
}
console.log("Contador fora do if:", contador); // Mostra 1

// 💡 Dicas:
// 1. Prefira const sempre que possível
// 2. Use let quando precisar mudar o valor
// 3. Evite var em código moderno
// 4. Use nomes descritivos para suas variáveis

// 🎮 Exercício:
// 1. Crie uma const com seu nome
// 2. Crie uma let com sua idade
// 3. Tente mudar o valor da let
// 4. Observe o erro ao tentar mudar a const
