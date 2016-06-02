$(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


});
  
function initMap() {
  var myLatLng = {lat: 40.02, lng: -83.02};
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    zoom: 12
  });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'The Ohio State University'
      });
}  