angular.module("bitTickets").controller("cartCtrl", function($scope, $location, cartService) {

	$scope.cart = cartService.getCart();

	$scope.removeCartItem = function (item) {
		cartService.removeCartItem(item);
		$scope.cart = cartService.getCart();
		getCartTotal($scope.cart);
	}

	$scope.keepShopping = function() {
		$location.path("/tickets");
	}

	$scope.cantFinish = function (cart) {
		return !cart || cart.length < 1;
	}

	$scope.finalizarCompra = function() {
		console.log("not implemented yet");
	}


	//handle the total amount in the cart, considering number of passengers
	getCartTotal = function (cart) {
		$scope.total = 0;
      	if (cart && cart.length > 0) {
        	for (var i = 0; i < cart.length; i++) {
          		$scope.total += (cart[i].go.price * cart[i].go.passengers) + (cart[i].back.price * cart[i].back.passengers);
        	}
      	}
	}
	getCartTotal($scope.cart);
});