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
		}, 500);
		setTimeout(() => {
			state = false;
		}, 500);
		headerNavList.classList.toggle('_animated');
		setTimeout(() => {
			headerNavList.classList.toggle('_animated');
		}, 500);
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
		body.style.overflow = 'visible';
		state = false;
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
}, 200);
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

// ___________________ lang Change ____________________

var lang_en = {
	header: {
		home: 'home',
		about: 'about',
		skills: 'skills',
		projects: 'projects',
		contacts: 'contacts',
		lang: 'RU',
	},
	'first-screen': {
		'first-screen-text': `<h1 class="first-screen__text-content hello-p">
		Hello there!
	</h1>
	<div class="first-screen__text-block">
		<h1 class="first-screen__text-content">
			I'm
			<span class="first-screen__text-focus">Andrey</span
			>,
		</h1>
		<p class="first-screen__text-addition">
			nickname: andy-devs
		</p>
	</div>
	<div class="first-screen__text-block">
		<h1 class="first-screen__text-content frontend-p">
			<span class="first-screen__text-focus"
				>Frontend Developer</span
			>
		</h1>
		<p class="first-screen__text-addition">
			well, I'm just starting
		</p>
	</div>`,
	},
	about: {
		'about-head': 'About',
		'about-bio': `<div class="about__bio-text">
		<p class="about__bio-text__paragraph">
			My name is
			<span class="about__bio-text__focus"
				>Andrey Markushin</span
			>.
		</p>
		<p class="about__bio-text__paragraph">
		I’m
			<span class="about__bio-text__focus">18</span> I live in
			
			<span class="about__bio-text__focus"
				>Omsk, Russia</span
			>.
		</p>
		<p class="about__bio-text__paragraph">
		I’m passionate about
			<span class="about__bio-text__focus">coding</span>
			and
			<span class="about__bio-text__focus">dancing</span>.
		</p>
		<div class="about__bio-text__info">
			<p class="about__bio-text__info-head">
			In free time I like to:
			</p>
			<ul class="about__bio-text__info-list">
				<li class="about__bio-text__info-item">
					<i class="fas fa-graduation-cap"></i>
					learn new skills and technologies
				</li>
				<li class="about__bio-text__info-item">
					<div class="dance-image">
						<img
							src="./images/dancing-logo.svg"
							alt=""
						/>
					</div>
					dance on my own or with my friends
				</li>
				<li class="about__bio-text__info-item">
					<i class="fas fa-gamepad"></i>
					play computer games
				</li>
			</ul>
		</div>
	</div>`,
		'about-story': `
		<h2 class="about__story-text__preview">
			As for my coding story...
		</h2>
		<h3 class="about__story-text__heading">
			The very start <i class="fas fa-laptop"></i>
		</h3>
		<p class="about__story-text__paragraph">
			My programming path started when my parents bought
			me a laptop in March 2020. I really didn’t know what
			path to choose and just learned computer science a
			bit: completed CS50 Course by Harvard.
		</p>
		<h3 class="about__story-text__heading">
			Trying Web Dev <i class="fas fa-code"></i>
		</h3>
		<p class="about__story-text__paragraph">
			In April 2021 I truly started my programming path
			when I bought a Web Development Bootcamp Course by
			Colt Steele on Udemy. There I've learned basic
			technologies like HTML, CSS and JS. Then I've
			started building projects and continued my learning
			path.
		</p>
		<h3 class="about__story-text__heading">
			Couple thoughts <i class="far fa-comments"></i>
		</h3>
		<p class="about__story-text__paragraph">
			I purely love programming and think that this is our
			future that we have to build together. It's just
			beginning for me but I hope to live my life creating
			something useful for people.
		</p>
	`,
	},
};

var lang_ru = {
	header: {
		home: 'главная',
		about: 'обо мне',
		skills: 'навыки',
		projects: 'проекты',
		contacts: 'контакты',
		lang: 'EN',
	},
	'first-screen': {
		'first-screen-text': `<h1 class="first-screen__text-content hello-p">
		Привет!
	</h1>
	<div class="first-screen__text-block">
		<h1 class="first-screen__text-content">
			Я
			<span class="first-screen__text-focus">Андрей</span
			>,
		</h1>
		<p class="first-screen__text-addition">
			ник: andy-devs
		</p>
	</div>
	<div class="first-screen__text-block">
		<h1 class="first-screen__text-content frontend-p">
			<span class="first-screen__text-focus"
				>Frontend Разработчик</span
			>
		</h1>
		<p class="first-screen__text-addition">
			что ж, я только начинаю
		</p>
	</div>`,
	},
	about: {
		'about-head': 'Обо мне',
		'about-bio': `<div class="about__bio-text">
		<p class="about__bio-text__paragraph">
			Меня зовут
			<span class="about__bio-text__focus"
				>Андрей Маркушин</span
			>.
		</p>
		<p class="about__bio-text__paragraph">
			Мне
			<span class="about__bio-text__focus">18</span> и я живу в
			
			<span class="about__bio-text__focus"
				>Омске, России</span
			>.
		</p>
		<p class="about__bio-text__paragraph">
			Я люблю
			<span class="about__bio-text__focus">программирование</span>
			и
			<span class="about__bio-text__focus">танцы</span>.
		</p>
		<div class="about__bio-text__info">
			<p class="about__bio-text__info-head">
				В свободное время я обычно:
			</p>
			<ul class="about__bio-text__info-list">
				<li class="about__bio-text__info-item">
					<i class="fas fa-graduation-cap"></i>
					изучаю новые навыки и технологии
				</li>
				<li class="about__bio-text__info-item">
					<div class="dance-image">
						<img
							src="./images/dancing-logo.svg"
							alt=""
						/>
					</div>
					танцую один или с друзьями
				</li>
				<li class="about__bio-text__info-item">
					<i class="fas fa-gamepad"></i>
					играю в игры
				</li>
			</ul>
		</div>
	</div>`,
		'about-story': `
		<h2 class="about__story-text__preview">
			Как я пришел в программирование
		</h2>
		<h3 class="about__story-text__heading">
			Самое начало <i class="fas fa-laptop"></i>
		</h3>
		<p class="about__story-text__paragraph">
			Мой путь программирования начался, когда мои родители купили
			мне ноутбук в марте 2020 года. Я не знал, какой
			путь выбрать и начал изучать компьютерные науки: закончил Гарвардский курс CS50.
		</p>
		<h3 class="about__story-text__heading">
			Пробую Web Dev <i class="fas fa-code"></i>
		</h3>
		<p class="about__story-text__paragraph">
			В апреле 2021 года я по-настоящему начал свой путь программирования, когда купил курс по веб-разработке 
			от Кольта Стила на Udemy. 
			Там я выучил основы
			таких технологий, как HTML, CSS и JS. Тогда я
			делать проекты и продолжил свой путь
			обучения.
		</p>
		<h3 class="about__story-text__heading">
			Пара мыслей <i class="far fa-comments"></i>
		</h3>
		<p class="about__story-text__paragraph">
			Я люблю программировать и считаю, что это наше
			будущее, которое мы должны построить вместе. Это только
			начало для меня, но я надеюсь прожить свою жизнь, создавая
			что-то полезное для людей.
		</p>
	`,
	},
};

const langButton = document.querySelector('.header__nav-list__lang');
const html = document.querySelector('html');

const home = document.querySelector("[href='#home']");
const about = document.querySelector("[href='#about']");
const skills = document.querySelector("[href='#skills']");
const projects = document.querySelector("[href='#projects']");
const contacts = document.querySelector("[href='#contacts']");
const lang = document.querySelector('#lang');

const firstScreenBlock = document.querySelector('.first-screen__text');
const aboutHeader = document.querySelector('.about__head');
const aboutBioText = document.querySelector('.about__bio-text');
const aboutStoryText = document.querySelector('.about__story-text');

function changeLang() {
	if (html.getAttribute('lang') == 'en') {
		console.log('working to ru');
		html.setAttribute('lang', 'ru');

		home.textContent = lang_ru['header']['home'];
		about.textContent = lang_ru['header']['about'];
		skills.textContent = lang_ru['header']['skills'];
		projects.textContent = lang_ru['header']['projects'];
		contacts.textContent = lang_ru['header']['contacts'];
		lang.textContent = lang_ru['header']['lang'];

		firstScreenBlock.innerHTML =
			lang_ru['first-screen']['first-screen-text'];

		aboutHeader.innerHTML = lang_ru['about']['about-head'];
		aboutBioText.innerHTML = lang_ru['about']['about-bio'];
		aboutStoryText.innerHTML = lang_ru['about']['about-story'];
	} else if (html.getAttribute('lang') == 'ru') {
		console.log('working to en');
		html.setAttribute('lang', 'en');

		home.textContent = lang_en['header']['home'];
		about.textContent = lang_en['header']['about'];
		skills.textContent = lang_en['header']['skills'];
		projects.textContent = lang_en['header']['projects'];
		contacts.textContent = lang_en['header']['contacts'];
		lang.textContent = lang_en['header']['lang'];

		firstScreenBlock.innerHTML =
			lang_en['first-screen']['first-screen-text'];

		aboutHeader.innerHTML = lang_en['about']['about-head'];
		aboutBioText.innerHTML = lang_en['about']['about-bio'];
		aboutStoryText.innerHTML = lang_en['about']['about-story'];
	}
}
