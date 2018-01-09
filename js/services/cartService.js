angular.module("bitTickets").service('cartService', function() {

	//handle cart operations like add, remove and retrieve
	var getCart = function () {
		try {
			return JSON.parse(localStorage.getItem('cart'));
		} catch (ex) {
        	return null;
      	}
	}

	var addCartItem = function (item) {
		var cart;
		try {
			cart = JSON.parse(localStorage.getItem('cart'));
		} catch (ex) {
        	cart = null;
        	console.log("exception");
      	}
      	if (cart == null) {
      		cart = [];
      	}
      	cart.push(item);
      	localStorage.setItem('cart', JSON.stringify(cart));
	}

	var removeCartItem = function (item) {
		var cart;
		try {
			cart = JSON.parse(localStorage.getItem('cart'));
		} catch (ex) {
        	cart = null;
        	console.log("exception");
      	}
      	if (cart != null) {
      		console.log("cart:" + cart);
      		cart = cart.filter(function(cartItem) {
      			if (cartItem.go.source != item.go.source || cartItem.back.source != item.back.source
      			  	||cartItem.go.leaveDate != item.go.leaveDate || cartItem.back.leaveDate != item.back.leaveDate
      			  	||cartItem.go.arrivalDate != item.go.arrivalDate || cartItem.back.arrivalDate != item.back.arrivalDate) return cartItem;
      		});
      		localStorage.setItem('cart', JSON.stringify(cart));
      	}
	}	

  	return {
    	getCart: getCart,
    	addCartItem: addCartItem,
    	removeCartItem: removeCartItem
  	}

});