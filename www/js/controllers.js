/* controllers da PedidaApp */
/* PS. Em uma App complexa, crie arquivos separados para cada controller */

angular.module('starter').controller('HomeController', function($scope) {

    $scope.bolos = [
        { nome: "Só de Cenoura", preco: 18 },
        { nome: "Com Nutella", preco: 29 },
        { nome: "De Brigadeiro", preco: 24 },
        { nome: "Açucarado", preco: 19 }
      ];

});

