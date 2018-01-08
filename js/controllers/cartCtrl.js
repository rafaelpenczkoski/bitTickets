angular.module("bitTickets").controller("cartCtrl", function($scope, $location) {

	$scope.cart = [
		{
			go: {
				source: "teste",
				destination: "teste",
				company: "teste",
				price: 1.00,
				distance: 20.00
			},
			back: {
				source: "teste",
				destination: "teste",
				company: "teste",
				price: 1.00,
				distance: 20.00
			}

		}
	];


	

	$scope.keepShopping = function() {
		$location.path("/tickets");
	};




});