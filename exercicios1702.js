//Exercícios de Arrow Functions e Higher-Order Functions.

//Exercício 1: Arrow Function com um parâmetro
//Crie uma arrow function chamada dobro que recebe um número e retorna o dobro dele.
//Dica: Não use {} nem return, pois a função pode ser simplificada.

const dobro = a => a + a;
console.log(dobro(4));


//Exercício 2: Arrow Function com múltiplos parâmetros
//Crie uma arrow function chamada dividir que recebe dois números e retorna o
//resultado da divisão do primeiro pelo segundo.

const dividir = (a, b) => a / b;
console.log(dividir(5, 2));


//Exercício 3: Arrow Function com múltiplas linhas
//Crie uma arrow function chamada mensagemBoasVindas que recebe um nome e 
//retorna uma mensagem de boas-vindas no formato "Seja bem-vindo, [nome]!".

const mensagemBoasVindas = (nome) => `Seja bem-vindo, ${nome}!`;
console.log(mensagemBoasVindas("User"));


// Exercício 4: Higher-Order Function personalizada
// Crie uma função chamada executarOperacao que recebe três parâmetros: dois
// números e uma função que representa uma operação matemática (adição, 
// subtração, multiplicação ou divisão).
// Em seguida, chame essa função passando diferentes operações matemáticas como 
// arrow functions.

const executarOperacao = (a, b, operacao) => operacao(a, b);
console.log(executarOperacao(10, 5, (x, y) => x * y))
console.log(executarOperacao(80, 10, (x, y) => x / y))


// Exercício 5: map() – Transformação de um array
// Crie um array de preços de produtos e use o método map() para aplicar um 
// desconto de 10% em cada preço.

const precos = [1, 2, 3, 4];
const precosComDesconto = precos.map(preco => preco * 0.9);
console.log(precosComDesconto);


// Exercício 6: filter() – Filtrando valores em um array
// Crie um array com idades e use o método filter() para retornar apenas as idades 
// menores que 18 ano

const idades = [12, 25, 17, 30, 14, 19];
const menoresDeIdade = idades.filter(idade => idade <= 18);
console.log(menoresDeIdade);


// Exercício 7: reduce() – Somando valores de um array
// Crie um array com números e use o método reduce() para calcular o produto 
// (multiplicação de todos os números).

const valores = [2, 3, 4, 5];
const multiplicacao = valores.reduce((total, num) => total * num);
console.log(multiplicacao);



