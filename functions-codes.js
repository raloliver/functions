/*
function teste(nome){
    alert("Olá " + nome);
};

teste("Miseravi");

function soma (a,b) {
    var numero = a+b;
    return numero;
}

console.log(soma(2,2));
*/

/*ALERTAS VISUAIS: esses alertas travam a utilização do navegador*/
/*
alert: alerta simples na tela
confirm: alerta com confirmação, ok=true cancel=false
prompt: alerta com input de informação (string) e confirmação ok or cancel
*/
/*FUNÇÕES NÚMERICAS:*/
/*
parseInt: realiza o parseamento do valor para inteiro
parseFloat: realiza o parseamento mas aceita números não inteiros
isNaN: ???
*/
/*FUNÇÕES DE TEMPO*/
/*
setTimeout
Sintaxe: setTimeout(function, time);
*/
/*
function tempo() {
    alert("Tempo Esgotado");
};
setTimeout(tempo, 2000);

// setTimeout através de uma função anônima
setTimeout(function(){
    alert("Já chega!!!")
}, 5000)
*/
/*
setInterval: a ação ou função é invocada dentro de um intervalo
Sintaxe: setInterval(function, time); porém é retornado um ID do intervalo
*/
// exemplo de função criada ára travar a chamada após uma determinada quantidade invocações
/*
var counter = 0;
var interval = setInterval(function(){
    var today = new Date();
    var now   = today.toLocaleTimeString();
        alert(now);
        counter++;
        if(counter == 3) {
            clearInterval(interval);
        }
}, 300000)
*/
/*
typeof
*/
/*
Expressão em Linha com JS
typeof(numero) == "Number" ? numero : parseFloat(numero);
*/
function aviso(msg, title) {
    title = title || "Atenção "; // em um linha podemos setar um valor padrão
    alert(title + "\n" + msg);
}
aviso("Mensagem de aviso", "Título");
/*
eval: é uma má pratica utilizar ele, pois o mesmo é muito utilizado para invasão hacker
*/

