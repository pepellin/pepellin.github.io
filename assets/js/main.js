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

// Magnific Popup
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
			// titleSrc: function(item) {
			// 	return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			// }
		}
	});
});