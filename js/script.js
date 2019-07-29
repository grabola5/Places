'use strict';
(function(){

var templateItem = document.getElementById('template-cell').innerHTML;
var listSlides = '';
var results = document.getElementById('main-carousel');
var elem = document.querySelector('.main-carousel');
var restartBtn = document.querySelector('.restart-btn');
var progressBar = document.querySelector('.progress-bar')

Mustache.parse(templateItem);

for (var i=0; i < slides.length; i++) {
	console.log(slides);
	listSlides += Mustache.render (templateItem, slides[i]);
};

results.insertAdjacentHTML ('beforeend', listSlides);

var flkty = new Flickity( elem, {
  	cellAlign: 'left',
  	contain: true,
  	hash: true
});

restartBtn.addEventListener ('click', function () {
  	flkty.select('0');
});

flkty.on( 'scroll', function( progress ) {
  	progress = Math.max( 0, Math.min( 1, progress ) );
 	progressBar.style.width = progress * 100 + '%';
});

window.initMap = function () {
	var cuba = slides[0].coords;

	var map = new google.maps.Map (document.getElementById('map'), {
		zoom: 6,
		center: cuba
		}
	);

	for (let i=0; i<slides.length; i++) {
		var localization = slides[i].coords;
		var marker = new google.maps.Marker ({
			position: localization,
			map: map,
			index: i
			}
		);
		marker.addListener('click', function () {
  			flkty.select(i);
		});
	}	
	
	flkty.on( 'change', function (index) {
		map.panTo(slides[index].coords);
	}); 
};

})();