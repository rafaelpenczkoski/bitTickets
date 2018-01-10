angular.module("bitTickets").config(['$routeProvider', function( $routeProvider ) {

    $routeProvider
	    .when('/tickets', {
	        templateUrl: 'view/tickets.html',
	        controller: 'ticketsCtrl'
	    })
	    .when('/cart', {
	        templateUrl: 'view/cart.html',
	        controller: 'cartCtrl'
	    })
	    .otherwise({
	        redirectTo: '/tickets'
	    });
}]);