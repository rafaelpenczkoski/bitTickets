angular.module("bitTickets").service('googlePlacesService', function() {

    this.initSourceSearch = function(input, filter) {
        var places = new google.maps.places.Autocomplete(input);
            google.maps.event.addListener(places, 'place_changed', function () {
                var place = places.getPlace();
                var address = place.formatted_address;
                var latitude = place.geometry.location.A;
                var longitude = place.geometry.location.F;
                filter.source = address;
            });
    };

    this.initDestinationSearch = function(input, filter) {
        var places = new google.maps.places.Autocomplete(input);
            google.maps.event.addListener(places, 'place_changed', function () {
                var place = places.getPlace();
                var address = place.formatted_address;
                var latitude = place.geometry.location.A;
                var longitude = place.geometry.location.F;
                filter.destination = address;
            });
    };

    
    this.getDistance = function (scope, filter, callback) {
    	var directionsService = new google.maps.DirectionsService();

		var request = {
		  	origin      : filter.source,       // a city, full address, landmark etc
		  	destination : filter.destination,  //              //
		  	travelMode  : google.maps.DirectionsTravelMode.DRIVING
		};

		directionsService.route(request, function(response, status) {
		  	if ( status == google.maps.DirectionsStatus.OK ) {
		    	var distance = response.routes[0].legs[0].distance.value; // the distance in meters
                filter.source = response.routes[0].legs[0].start_address;
                filter.destination = response.routes[0].legs[0].end_address;
                filter.start = filter.source;
                filter.end = filter.destination;
                filter.error = false;
		    	callback(distance/1000); // the distance in kilometers
		  	} else {
                //oops, there's no route between these two locations
                filter.error = true;
		  	}
            scope.$apply();
		});
    }
    
});