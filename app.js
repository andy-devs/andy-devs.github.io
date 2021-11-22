const headerButton = document.querySelector('.header__button');
const headerNav = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const body = document.querySelector('body');

headerButton.addEventListener('click', (e) => {
	if (body.style.overflow != 'hidden') {
		body.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'visible';
	}
	headerButton.classList.toggle('_active');
	headerNav.classList.toggle('_active');
	header.classList.toggle('_active');
});

const headerNavLinks = document.querySelectorAll('.header__nav-list__link');

for (let link of headerNavLinks) {
	link.addEventListener('click', (e) => {
		headerButton.classList.toggle('_active');
		headerNav.classList.toggle('_active');
		header.classList.toggle('_active');
	});
}

const terminalCursor = document.querySelector('.terminal-cursor');

setInterval(() => {
	terminalCursor.classList.toggle('_active');
}, 800);

var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

var didScroll;

$(window).scroll(function (event) {
	didScroll = true;
});

setInterval(function () {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);
function hasScrolled() {
	var st = $(this).scrollTop();
	if (Math.abs(lastScrollTop - st) <= delta) return;

	if (st > lastScrollTop && st > navbarHeight) {
		$('header').removeClass('nav-down').addClass('nav-up');
	} else {
		if (st + $(window).height() < $(document).height()) {
			$('header').removeClass('nav-up').addClass('nav-down');
		}
	}
	lastScrollTop = st;
}
