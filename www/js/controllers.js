/* controllers da PedidaApp */
/* PS. Em uma App complexa, crie arquivos separados para cada controller */

angular.module('starter').controller('HomeController', function($scope, ProdutosService) {
	ProdutosService.lista().then(function(dados){
		$scope.bolos = dados;	
	});
});


angular.module('starter').controller('DetalheController', function($scope, ProdutosService, $stateParams) {
	ProdutosService.lista().then(function(dados){
		$scope.bolo = dados[$stateParams.boloId];
	});
});


angular.module('starter').controller('PedidoController', function($scope, $stateParams, $http, $state, $ionicPopup, $ionicLoading, ProdutosService) {

	ProdutosService.lista().then(function(dados){
		$scope.bolo = dados[$stateParams.boloId];
	});

	$scope.dados = {};

	$scope.fecharPedido = function() {

		// mostra o spinner de loading
		$ionicLoading.show();

		// dispara a API
		$http.get('http://cozinhapp.sergiolopes.org/novo-pedido', {
			params: {
				pedido: $scope.bolo.nome,
				info: $scope.dados.nome 
				      + ' (' + $scope.dados.telefone + ') - ' 
				      + $scope.dados.endereco
			}
		}).then(function() {

			// caso OK, mostra popup confirmando e
			// então navega pra home
			$ionicPopup.alert({
				title: 'Pedido confirmado!',
				template: 'Daqui a pouco chega :)'
			}).then(function(){
				$state.go('home');
			});

		}).catch(function(erro) {

			// caso dê erro mostra alerta com o erro
			$ionicPopup.alert({
				title: 'Erro no pedido!',
				template: erro.data + '. Liga pra gente: 011-1406'
			});

		}).finally(function(){
			// em qualquer caso, remove o spinner de loading
			$ionicLoading.hide();
		});
	};
});