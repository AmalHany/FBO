var mainApp = angular.module('mainApp', [ 'ngRoute','productApp']);
mainApp.config(['$routeProvider',
                  function($routeProvider) {
		$routeProvider.
		when('/products', {
        templateUrl: '/partials/Product/product.html',
        controller: 'productCRUD'
      });

                  }]
);
