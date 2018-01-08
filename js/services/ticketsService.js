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

  var addTicket = function(newTicket) {
      ticketList.push(newTicket);
  };

  var getTickets = function(){
      return ticketList;
  };

  var getCompanies = function(){
      return companyList;
  };

  var clearTickets = function(){
      ticketList = [];
  };

  return {
    addTicket: addTicket,
    getTickets: getTickets,
    getCompanies: getCompanies,
    clearTickets: clearTickets
  };

});