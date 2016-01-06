/* services da PedidaApp */
/* PS. Em uma App complexa, crie arquivos separados para cada service */

angular.module('starter').service('ProdutosService', function($http, $q) {

	// sempre dispara o serviço pra checar dados mais recentes
	var promise = $http.get('http://cozinhapp.sergiolopes.org/produtos?random=1')
			.then(function(response){
				localStorage.setItem('cache', JSON.stringify(response.data));
				return response.data;
			});

	// procura no localStorage
	var cache = localStorage.getItem('cache');
	if (cache != null) {
		promise = $q(function(resolve, reject) {
			resolve(JSON.parse(cache));
		});
	}

	return {
		lista: function() {
			return promise;
		}
	};

});