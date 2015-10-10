// FUNCTION DECLARATION: geralmente as chamadas podem ser declaradas antes da interpretação
function fdsoma (a, b){
//neste caso, fdsoma, é o nome da função e da variável (neste caso não vemos a atribuição da função)
    return a + b;
}
/*console.log(fdsoma(2,3))*/

// FUNCTION EXPRESSION
var fesoma = function (a, b){
//criação de função anônima (que poderia ter um nome)
    return a + b;
}

// QUAL A DIFERENÇA ENTRE FD (FUNCITION DECLARATION) E FE (FUNCTION EXPRESSION)?
// A declaration é carregada antes do código ser interpretado. E a expression é carregada durante a interpretação do código.
/*console.log(fesoma(3,3))*/
// NAMED FUNCTION EXPRESSION
var soma = function nfesoma (a, b) {
//o nome da função pode ser útil pois aparece no stack trace, lista de breakpoints e demais ferramentas de debbuging
    return a + b;
}
/*console.log(soma(4,3))*/

//COMO INVOCAR AS FUNÇÕES (diretamente (escopo global), objetos, operações call e apply e por meio do operador new)
// DIRETAMENTE (escopo global)
var invsoma = function (a, b){
    return a + b;
}
// invocacao
invsoma(2,2); //4
// FUNÇÃO COMO PARÂMETRO (lâmbida)
var produto = {nome: 'Caneca', preco:30};

var impostoL = function (preco) {return preco*0.27;};
var impostoF = function (preco) {return preco*0.07;};

var total = function (produto, impostos){
    return produto.preco + impostos(produto.preco);
    // aqui passamos a função por parâmetro (lâmbida) neste caso, impostos
}
//invocacao
/*console.log(total (produto,impostoL));*/
/*console.log(total (produto,impostoF));*/
// não foi necessário criar outro total, com isso reutilizamos o total, variamos apenas o calculo do imposto
//RETORNANDO UMA FUNÇÃO (funções de primeira classe)
var olaMundo = function () {
    return function() {
        return "Hello World!";
    };
};
//para ter o resultado da função interna é necessário invocar duas vezes
/*console.log(olaMundo()());*/

//OBJETOS (não existe métodos no JS, mas é possível simular a existência deles com valores de funções)
var person = {
    name: "Antonio",
    age: 55,
    //identificador que é uma função
    getAge: function() {
        return this.age;
    }
    // a função passa a ter um this se ele estiver sendo executada por meio de um objeto, trazendo referência a uma propriedade do objeto
};
//MANEIRA EXTERNALIZADA
var getAge = function () {
    // o this depende do contexto, se chamado num escopo global sera undifined
    return this.age;
};

var person = {
    name: "Antonio",
    age: 55,
    // sem o (), pois você não está invocando uma função e apenas conectando ela a outra
    getAge: getAge
};

/*console.log(person.getAge());*/

//3ª FORMA USANDO CALL E APPLY (a função é um objeto e como todo objeto)
/*toda função possui métodos call() e apply(). eles são utilizados para indicar em qual escopo ua função deve ser executada.
a diferençã está apenas na forma como é utilizado*/

//function.call(escopo,parameter1, parameter2)
//function.apply(escopo,parameters)
var getIdade = function (opcional, estima, real) {
    //mesmo não tendo os parâmetros extras dentro da função, posso acessa-los a partir dos argumentos acessíveis
    console.log(arguments);
    return this.idade + opcional + estima + real;
};

var pessoa = {
    nome: "Josélia",
    idade: 57,
    getIdade: getIdade
};
/*
console.log(pessoa.getIdade(5, 0, 0));
console.log(getIdade.call(pessoa, 2, 1, 2)); //os parâmetros são passados abertos através de vírgulas
console.log(getIdade.apply(pessoa, [3, 1, 1])); //no apply os parâmetros são passados via array
//mesmo passando parâmetros a mais, eles são ignorados
*/

//4ª FORMA ATRAVÉS DO OPERADOR NEW
/*Funções Construtora X Funções Fábrica*/
//FUNÇÃO FÁBRICA (tenho uma função que cria novos objetos)
var newPerson = function (name, age) {
    return {
        name: name,
        age: age
    };
};
/*
console.log(newPerson("Antonio", 55));
console.log(newPerson("Josélia", 57));
*/

// FUNÇÂO CONSTRUTORA (por padrão devem começar com letra maiúscula para lembramos do operador new)
/*o this se referencia ao objeto que está sendo criado por meio do operador new: http://easycaptures.com/0948222912*/
var Person = function (name, age) {
    this.name = name;
    this.age = age;
};
console.log(new Person ("Felipe", 23)); // LEMBRE-SE SEMPRE DO OPERADOR NEW
console.log(new Person ("Israel", 29));

//CLOSURES
var helloWorld = function () {
    var message = "Hello World!";
    return function () {
        return message;
    };
};

console.log(helloWorld()); //[Function]
//EXEMPLO DE CLOSURE
var fnHelloWorld = helloWorld();
console.log(fnHelloWorld()); //retorna message
