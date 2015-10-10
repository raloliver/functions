/*
CONCEITO DE MODULE PATTERN
*/
/*
var counter = (function () {
    var value = 0;
        return {
            add: function () {
                return ++value;
        },
            reset: function () {
                value = 0;
            }
    };
})();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());
*/

/*
CONCEITO DE REVEALING MODULE PATTERN
*/

var counterr = (function () {
    // tudo isso aqui é privado
    // pode usar o _ para o que for privado
    var _value = 0;
    var _add = function () {
        return ++_value;
    };
    var _reset = function () {
        _value = 0;
    };
    // a partir daqui teremos o que desejamos público
    return {
        add: _add,
        reset: _reset
    };
})();

console.log(counterr.value);
console.log(counterr.add());
console.log(counterr.add());
console.log(counterr.add());
counterr.reset();
console.log(counterr.add());
