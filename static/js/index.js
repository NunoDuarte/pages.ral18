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

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    // Store user preference
    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); //add this
        }
        else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light'); //add this
        }
    }

    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.body.classList.add(currentTheme === 'dark' ? 'dark-mode' : '');

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
})
