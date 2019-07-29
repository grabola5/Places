'use strict';
(function(){

var templateItem = document.getElementById('template-cell').innerHTML;
Mustache.parse(templateItem);
var listSlides = '';

for (var i=0; i < slides.length; i++) {
	console.log(slides);
	listSlides += Mustache.render (templateItem, slides[i]);
};

var results = document.getElementById('main-carousel');
results.insertAdjacentHTML ('beforeend', listSlides);

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  hash: true
});

var restartBtn = document.querySelector('.restart-btn');
restartBtn.addEventListener ('click', function () {
  	flkty.select('0');
});
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

window.initMap = function () {
var cuba = slides[0].coords;

var map = new google.maps.Map (document.getElementById('map'), {
	zoom: 6,
	center: cuba

});

for (var i=0; i<slides.length; i++) {
	var localization = slides[i].coords;
	var marker = new google.maps.Marker ({
		position: localization,
		map: map
	});
}
};


})();