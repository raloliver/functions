var contador = (function() {
//a funação mudaPlacar e a variável placar são privadas
var placar = 0;
    function mudaPlacar(valor) {
            placar += valor;
        }
    //apenas as funções que estão dentro do return são públicas e podem ser acessadas por outras por meio da função contador, exemplo: contador.aumenta()
    return {
            aumenta: function() {
            mudaPlacar(1);
        },
            diminui: function() {
            mudaPlacar(-1);
        },
            valor: function() {
            return placar;
        }
    }
})();

var counter = (function() {
    var placar = 0;
        function mudaPlacar(valor) {
            placar += valor;
        }
        function aumenta() {
            mudaPlacar(1);
        }
        function diminui() {
            mudaPlacar(-1);
        }
        function valor() {
            return placar;
        }
            return {
                aumenta: aumenta,
                diminui: diminui,
                valor: valor
            }
})();
