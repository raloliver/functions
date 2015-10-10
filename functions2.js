
/*
CUIDADO COM O ESCOPO GLOBAL
O grande problema com o escopo global é que el pode ficar poluído.
*/
var counter = 0;
var add = function () {
    return ++counter;
};
    // console.log (add());
    // console.log (add());
    // console.log (add());
var itens = [];
var add = function (item) {
    itens.push(item);
    return itens;
};
    // console.log (add('A'));
    // console.log (add('B'));
    // console.log (add('C'));
    // console.log (add());
/*
JS não tem ligados ou linker, ele faz uso do escopo global compartilhado para estabelecer os vínculos entre diferentes parte de uma aplicação
MAS COMO FUGIR DISSO? Com técnicas de encapsulamento e objetos.
*/
 var ccounter = {
    value: 0,
    add: function () {
        return ++this.value;
    }
 };
    // console.log (ccounter.add());
    // console.log (ccounter.add());
    // console.log (ccounter.add());
var itenss = {
    value: [],
    add: function (item) {
        this.value.push(item);
        return this.value;
    }
};
    // console.log(itenss.add('A'));
    // console.log(itenss.add('B'));
    // console.log(itenss.add('C'));
    // console.log (ccounter.add());
/*
JS não possui modificadores de visibilidade (private, protected e public)
Como temos acesso ao conteúdo do objeto, podem ocorrer erros, como no exemplo abaixo.
A melhor opção é realizar encapsulamentos a partir de funções.
*/
    // console.log (ccounter.add());
    // console.log (ccounter.add());
    // console.log (ccounter.add());
    // ccounter.value = undefined;
    // console.log (ccounter.add());
/*
REESCREVENDO O EXEMPLO A PARTIR DE UMA FUNÇÃO
e fazendo ela se conectar ao mundo exterior, utilizando factory function.
*/
var createCounter = function () {
    var value = 0;
    /*
    var add = function () {
        return ++value;
    };
    */
    // aqui nós temos o retorno do que desejamos que seja público
    return {
        add: function () {
            return ++value;
        }
    };
};
    // console.log (ccounter.value); undefined
    // console.log (ccounter.add()); undefined
    var cccounter = createCounter();
    // console.log(counter.value); undefined
    // console.log(cccounter.add());
    // console.log(cccounter.add());
    // console.log(cccounter.add());
/*
Utilizando Constructor Function
*/
var Counter = function () {
    var value = 0;
    this.add = function () {
        return ++value;
    };
};
var cfcounter = new Counter();
// console.log(counter.value); undefined
    console.log(cfcounter.add());
    console.log(cfcounter.add());
    console.log(cfcounter.add());
