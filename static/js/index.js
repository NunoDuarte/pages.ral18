window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
			// Add touch support
			swipeThreshold: 30,
			draggable: true,
			pauseOnHover: true,
			// Responsive breakpoints
			breakpoints: [
				{
					changePoint: 480,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			]
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})
