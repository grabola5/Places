'use strict';
(function(){

var templateList = document.getElementById('template-cell').innerHTML;
Mustache.parse(templateList);
var listSlides = '';

for (var i=0; i < slides.length; i++) {
	console.log(slides);
	listSlides += Mustache.render (templateList, slides[i]);
};

var results = getElementById ('main-carousel');
results.insertAdjacentHTML ("beforeend", listSlides);

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
})();