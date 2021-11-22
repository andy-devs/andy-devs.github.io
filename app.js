const headerButton = document.querySelector('.header__button');
const headerNav = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const headerNavList = document.querySelector('.header__nav-list');
let headerNavLinks = document.querySelectorAll('.header__nav-list__link');

for (let i = 0; i < headerNavLinks.length; i++) {
	headerNavLinks[i].classList.add(`link-${i + 1}`);
}
let state = false;
headerButton.addEventListener('click', (e) => {
	if (state === false) {
		headerNav.classList.toggle('_active');
		setTimeout(() => {
			state = true;
		}, 200);
	} else {
		setTimeout(() => {
			headerNav.classList.toggle('_active');
		}, 600);
		setTimeout(() => {
			state = false;
		}, 600);
		headerNavList.classList.toggle('_animated');
		setTimeout(() => {
			headerNavList.classList.toggle('_animated');
		}, 600);
	}

	if (body.style.overflow != 'hidden') {
		body.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'visible';
	}
	headerButton.classList.toggle('_active');
	headerButton.classList.toggle('open');
	header.classList.toggle('_active');
});

for (let link of headerNavLinks) {
	link.addEventListener('click', (e) => {
		headerButton.classList.toggle('_active');
		headerButton.classList.toggle('open');
		headerNav.classList.toggle('_active');
		header.classList.toggle('_active');
		if (body.style.overflow != 'hidden') {
			body.style.overflow = 'hidden';
		} else {
			body.style.overflow = 'visible';
		}
		if (state === false) {
			headerNav.classList.toggle('_active');
			setTimeout(() => {
				state = true;
			}, 200);
		} else {
			setTimeout(() => {
				headerNav.classList.toggle('_active');
			}, 600);
			setTimeout(() => {
				state = false;
			}, 600);
			headerNavList.classList.toggle('_animated');
			setTimeout(() => {
				headerNavList.classList.toggle('_animated');
			}, 600);
		}
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
