/* services da PedidaApp */
/* PS. Em uma App complexa, crie arquivos separados para cada service */

angular.module('starter').service('ProdutosService', function($http, $q) {

	return {
		lista: function(){
			return $http.get("http://cozinhapp.sergiolopes.org/produtos")
						.then(function(response){
							return response.data;
						});
		}
	};

});