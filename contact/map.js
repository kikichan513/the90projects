function init()
{


				       
					        	/* Sets default location */
	            var default_location = new google.maps.LatLng(22.2285035, 114.20055760000002
);

	            var mapOptions = 
	            {
	                zoom: 10,
	                center: default_location,
	                mapTypeId: google.maps.MapTypeId.ROADMAP
	            };

	            var map = new google.maps.Map(document.getElementById('map-canvas'),
	            mapOptions);

	       
	             if (navigator.geolocation) {
				     navigator.geolocation.getCurrentPosition(function (position) {
				        initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				         map.setCenter(initialLocation);

						var marker = new google.maps.Marker({
				        position: initialLocation,
				        map: map,
				        title:"Hello World!" });


				     });
				 }


	        google.maps.event.addDomListener(window, 'load', init);

						

}

