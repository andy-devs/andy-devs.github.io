const headerButton = document.querySelector('.header__button');
const headerNav = document.querySelector('.header__nav');

headerButton.addEventListener('click', (e) => {
	headerButton.classList.toggle('_active');
	headerNav.classList.toggle('_active');
});

const terminalCursor = document.querySelector('.terminal-cursor');

setInterval(() => {
	terminalCursor.classList.toggle('_active');
}, 800);
