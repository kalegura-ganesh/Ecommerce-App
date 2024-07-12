var bg = document.querySelector('.header');


     window.addEventListener('scroll', function() {

	if(window.scrollY > 60) {

		bg.classList.add('navScroll');
	}

	if (window.scrollY < 60) {
		bg.classList.remove('navScroll');
	}

})