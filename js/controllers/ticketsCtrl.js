angular.module("bitTickets").controller("ticketsCtrl", function($scope, $location, googlePlacesService, ticketsService) {

	$scope.filter = JSON.parse(localStorage.getItem('filter'));
	if ($scope.filter == null) {
		$scope.filter = {
			type: "both",
			undefinedDate: false,
			passengers: 1,
			source: "",
			destination: "",
			start: "",
			end: ""
		};	
	};

	$scope.travel = {
		go: null,
		back: null
	}

	$scope.addToCart = function () {
		$location.path("/cart");
	};

	$scope.searchTickets = function(filter) {
		googlePlacesService.getDistance($scope, filter, function(distance) {
			//generate ticket to simulate a filter
			ticketsService.clearTickets();

			var companies = ticketsService.getCompanies();
			for (var i = 0; i < companies.length; i++) {
				
				var now = new Date();
				for (var j = 6; j <= 18; j=j+2) {
					now.setMinutes(0);
					var ticket = {
						leaveDate: now.setHours(j),
						arrivalDate: now.setHours(j + 1),
						company: companies[i].companyName,
						imageURL: companies[i].imageURL,
						price: (Number(distance) * companies[i].pricePerKm)
					};
					ticketsService.addTicket(ticket);	
				};
			};
			
			$scope.tickets = ticketsService.getTickets();
			localStorage.setItem('filter', JSON.stringify(filter));
		});
		
	};

	$scope.chooseGo = function (ticket) {
		ticket.selected = true;
		$scope.travel.go = ticket;
	};

	$scope.chooseBack = function (ticket) {
		ticket.selected = true;
		$scope.travel.back = ticket;
	}

	$scope.isDataGroupDisabled = function(filter) {
		return filter.undefinedDate;
	};

	$scope.isDataVoltaDisabled = function(filter) {
		return filter.undefinedDate || filter.type == "oneway";
	};

	$scope.isDataGroupRequired = function(filter) {
		return !filter.undefinedDate;
	};

	$scope.isDataVoltaRequired = function(filter) {
		return !filter.undefinedDate || filter.type == "both";
	};

	googlePlacesService.initSourceSearch(document.getElementById("origin-place"), $scope.filter);
	googlePlacesService.initDestinationSearch(document.getElementById("destiny-place"), $scope.filter);

});