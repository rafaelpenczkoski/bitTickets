angular.module("bitTickets").service('ticketsService', function() {
  	var ticketList = [];

  	var companyList = [
		{
			companyName: "LATAM",
			imageURL: "resources/latam.png",
			pricePerKm: 1.34
		},
		{
			companyName: "Azul",
			imageURL: "resources/azul.png",
			pricePerKm: 1.35
		},
		{
			companyName: "Gol",
			imageURL: "resources/gol.png",
			pricePerKm: 1.39
		},
		{
			companyName: "Avianca",
			imageURL: "resources/avianca.png",
			pricePerKm: 1.36
		},
	];

	var getFilter = function () {
		var filter;
		try {
			filter = JSON.parse(localStorage.getItem('filter'));
		} catch (ex) {
        	filter = null;
      	}
		// set default values for filter if there's no data on localStorage
		if (filter == null) {
			filter = {
				type: "both",
				undefinedDate: false,
				passengers: 1,
				source: "",
				destination: "",
				start: "",
				end: ""
			};	
		}
		return filter;
	}

	//save user filter data
	var saveFilter = function (filter) {
		localStorage.setItem('filter', JSON.stringify(filter));
	}

  	var addTicket = function(newTicket) {
      	ticketList.push(newTicket);
  	}

  	var getTickets = function(){
      	return ticketList;
  	}

  	var getCompanies = function(){
      	return companyList;
  	}

  	var clearTickets = function(){
      	ticketList = [];
  	}

  	return {
    	addTicket: addTicket,
    	getTickets: getTickets,
    	getCompanies: getCompanies,
    	clearTickets: clearTickets,
    	getFilter: getFilter,
    	saveFilter: saveFilter
  	}

});