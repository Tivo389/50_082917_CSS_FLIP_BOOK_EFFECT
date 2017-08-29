$(document).ready(function () {





var debounceFunction = (function() {
	var	interval = 0,
		timer;

	return function() {
		clearTimeout(timer);
		timer = setTimeout(function() {

			function isScrolledIntoView(element) {
				var	activationLine = window.innerHeight/2 + 25,
						activationMarker = ($(element).offset().top + $(element).outerHeight()/2) - ($(window).scrollTop());
				// Code that I used to confirm the output of each variable 
					// console.log("activationLine is at " + activationLine);
					// console.log("activationMarker is at " + activationMarker);
					// console.log(activationLine >= activationMarker);
				return (activationLine >= activationMarker);
			}

			$('.section').each(function() {
				// I added the '===true' for clarity, it works without it.
				if (isScrolledIntoView(this) === true) {
					$(this).find('.eiffel__image').addClass('activated');
					} else {
					$(this).find('.eiffel__image').removeClass('activated');					
				}
			});

		}, interval);
	};
})();

window.addEventListener('scroll', debounceFunction);





});