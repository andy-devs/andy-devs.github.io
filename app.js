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
			<span class="about__bio-text__focus">coding</span>.
		</p>
		<div class="about__bio-text__info">
			<p class="about__bio-text__info-head">
			In free time I like to:
			</p>
			<ul class="about__bio-text__info-list">
				<li class="about__bio-text__info-item">
					<i class="fas fa-graduation-cap"></i>
					learn new skills
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
	skills: `
	<h2 class="skills__head">Skills</h2>
			<div class="skills__block">
				<div class="skills__block-head">
					<i class="fab fa-html5 skills__block-head__item"></i>
					<i class="fab fa-css3-alt skills__block-head__item"></i>
				</div>
				<div class="skills__block-text">
					<p class="skills__block-text__paragraph-lead">
						I have intermediate skills in HTML and CSS.
					</p>
					<p class="skills__block-text__paragraph">
						I built many projects with these technologies (you can
						see them in related section) and continue to learn them
						deeper. I took Responsive Web Design Course on
						freeCodeCamp and Web Development Course on Udemy, which
						I talked about earlier.
					</p>
					<p class="skills__block-text__paragraph">
						I also worked with CSS preprocessors (SASS, SCSS). I use
						SCSS for styling on this website.
					</p>
				</div>
			</div>
			<div class="skills__block">
				<div class="skills__block-head">
					<i class="fab fa-js skills__block-head__item"></i>
				</div>
				<div class="skills__block-text">
					<p class="skills__block-text__paragraph-lead">
						I have intermediate skills in JavaScript.
					</p>
					<p class="skills__block-text__paragraph">
						I also worked with it in my projects. I took JavaScript
						Algorithms and Data Structures Course on freeCodeCamp.
						JS was in that Web Development Course on Udemy too. I continue to solidify my knowledge in
						this programming language by reading a book about it and
						solving algorithmic challenges on CodeWars.
					</p>
					<p class="skills__block-text__paragraph">
						In the nearest future, I want to learn React and It’s
						ecosystem. But for now, I try to level up my skills in
						vanilla JS. I really enjoy using it! Well, most of the
						time.
					</p>
				</div>
			</div>
			<div class="skills__block">
				<div class="skills__block-head lang-logo">
					<i class="fas fa-language skills__block-head__item"></i>
				</div>
				<div class="skills__block-text">
					<p class="skills__block-text__paragraph-lead">
						I have upper-intermediate knowledge of English.
					</p>
					<ul class="skills__block-text__list">
						<p class="skills__block-text__list-head">I can:</p>
						<li class="skills__block-text__list-item">
							<i class="fas fa-video"></i>
							watch youtube videos and serials in English
						</li>
						<li class="skills__block-text__list-item">
							<i class="fas fa-book-open"></i>
							read the docs written in English
						</li>
						<li class="skills__block-text__list-item">
							<i class="fas fa-pen"></i>
							write in English myself
						</li>
					</ul>
					
				</div>
			</div>
	`,
	projects: 'Projects',
	contacts: `
	<h2 class="contacts__head">Contacts</h2>
			<p class="contacts__text">
				If you want to contact me for any of your reasons...
			</p>
			<p class="contacts__text">Send me email!</p>

			<form
				action="https://formsubmit.co/markushin.andrew@gmail.com"
				method="POST"
				class="contacts__form"
			>
				<div class="contacts__form-first">
					<input
						class="contacts__form-input"
						type="text"
						id="name"
						name="name"
						placeholder="your name"
						required
					/>
					<input
						class="contacts__form-input"
						type="email"
						id="email"
						name="email"
						placeholder="your email"
						required
					/>
				</div>
				<textarea
					class="contacts__form-textarea"
					name="message"
					id="message"
					placeholder="message..."
					required
				></textarea>
				<input type="text" name="_honey" style="display: none" />
				<input type="hidden" name="_captcha" value="false" />
				<input
					type="hidden"
					name="_next"
					value="https://andy-devs.github.io/"
				/>
				<button
					type="submit"
					id="submit"

					class="contacts__form-button"
				>
					Send
				</button>
			</form>
			<p class="contacts__text contacts__text-bigger">My socials</p>
			<div class="contacts__social">
				<a
					href="https://github.com/andy-devs"
					class="contacts__social-item"
				>
					<i class="fab fa-github contacts__social-image"></i>
					<p class="contacts__social-text">andy-devs</p>
				</a>
				<a
					href="https://vk.com/mark.andrey"
					class="contacts__social-item"
				>
					<i class="fab fa-vk contacts__social-image"></i>
					<p class="contacts__social-text">mark.andrey</p>
				</a>
				<a
					href="https://www.instagram.com/markusshinn/"
					class="contacts__social-item"
				>
					<i class="fab fa-instagram contacts__social-image"></i>
					<p class="contacts__social-text">markusshinn/andy-devs</p>
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=100071666065631"
					class="contacts__social-item"
				>
					<i class="fab fa-facebook contacts__social-image"></i>
					<p class="contacts__social-text">Andrey Markushin</p>
				</a>
			</div>`,
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
				>России, город Омск</span
			>.
		</p>
		<p class="about__bio-text__paragraph">
			Я люблю
			<span class="about__bio-text__focus">программирование</span>.
		</p>
		<div class="about__bio-text__info">
			<p class="about__bio-text__info-head">
				В свободное время я обычно:
			</p>
			<ul class="about__bio-text__info-list">
				<li class="about__bio-text__info-item">
					<i class="fas fa-graduation-cap"></i>
					изучаю новые навыки
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
			таких технологий, как HTML, CSS и JS. Затем я начал
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
	skills: `
	<h2 class="skills__head">Навыки</h2>
			<div class="skills__block">
				<div class="skills__block-head">
					<i class="fab fa-html5 skills__block-head__item"></i>
					<i class="fab fa-css3-alt skills__block-head__item"></i>
				</div>
				<div class="skills__block-text">
					<p class="skills__block-text__paragraph-lead">
						У меня средний уровень навыков в HTML и CSS.
					</p>
					<p class="skills__block-text__paragraph">
						Я сделал много проектов на этих технологиях (вы можете посмотреть на примеры в секции с проектами)
						 и продолжаю изучать их глубже. Я прошёл курс по Адаптивному Веб Дизайну на freeCodeCamp 
						 и курс Веб разработки на Udemy, о котором я говорил раннее.
					</p>
					<p class="skills__block-text__paragraph">
						Также я работал с CSS препроцессорами (SASS, SCSS). Я использую SCSS для стилизования на этом сайте.
					</p>
				</div>
			</div>
			<div class="skills__block">
				<div class="skills__block-head">
					<i class="fab fa-js skills__block-head__item"></i>
				</div>
				<div class="skills__block-text">
					<p class="skills__block-text__paragraph-lead">
						У меня средний уровень навыков в JavaScript.
					</p>
					<p class="skills__block-text__paragraph">
						Я также работал с ним в своих нескольких проектах. Я прошёл курс Алгоритмов и Структур Данных на freeCodeCamp. 
						JS тоже был в курсе по Веб разработке на Udemy. Я продолжаю оттачивать свои навыки в этом языке 
						программирования читая книгу и решая алгоритмические задачки на CodeWars.
					</p>
					<p class="skills__block-text__paragraph">
						В ближайшем будущем я хочу изучить React и его экосистему.
						Но сейчас я повышаю свой уровень в нативном JS.
						Я очень люблю на нём писать! Что ж, большую часть времени.
					</p>
				</div>
			</div>
			<div class="skills__block">
				<div class="skills__block-head lang-logo">
					<i class="fas fa-language skills__block-head__item"></i>
				</div>
				<div class="skills__block-text">
					<p class="skills__block-text__paragraph-lead">
						Мой уровень навыков в английском - выше среднего (upper-intermediate)
					</p>
					<ul class="skills__block-text__list">
						<p class="skills__block-text__list-head">Я могу:</p>
						<li class="skills__block-text__list-item">
							<i class="fas fa-video"></i>
							свободно смотреть видео на ютубе и сериалы
						</li>
						<li class="skills__block-text__list-item">
							<i class="fas fa-book-open"></i>
							читать документацию на английском
						</li>
						<li class="skills__block-text__list-item">
							<i class="fas fa-pen"></i>
							писать на английском
						</li>
					</ul>
				</div>
			</div>
	`,
	projects: 'Проекты',
	contacts: `
	<h2 class="contacts__head">Контакты</h2>
			<p class="contacts__text">
				Если вы хотите со мной связаться по любой из причин...
			</p>
			<p class="contacts__text">Отправьте сообщение!</p>

			<form
				action="https://formsubmit.co/markushin.andrew@gmail.com"
				method="POST"
				class="contacts__form"
			>
				<div class="contacts__form-first">
					<input
						class="contacts__form-input"
						type="text"
						id="name"
						name="name"
						placeholder="ваше имя"
						required
					/>
					<input
						class="contacts__form-input"
						type="email"
						id="email"
						name="email"
						placeholder="ваш email"
						required
					/>
				</div>
				<textarea
					class="contacts__form-textarea"
					name="message"
					id="message"
					placeholder="сообщение..."
					required
				></textarea>
				<input type="text" name="_honey" style="display: none" />
				<input type="hidden" name="_captcha" value="false" />
				<input
					type="hidden"
					name="_next"
					value="https://andy-devs.github.io/"
				/>
				<button
					type="submit"
					id="submit"

					class="contacts__form-button"
				>
					Отправить
				</button>
			</form>
			<p class="contacts__text contacts__text-bigger">Мои соц сети</p>
			<div class="contacts__social">
				<a
					href="https://github.com/andy-devs"
					class="contacts__social-item"
				>
					<i class="fab fa-github contacts__social-image"></i>
					<p class="contacts__social-text">andy-devs</p>
				</a>
				<a
					href="https://vk.com/mark.andrey"
					class="contacts__social-item"
				>
					<i class="fab fa-vk contacts__social-image"></i>
					<p class="contacts__social-text">mark.andrey</p>
				</a>
				<a
					href="https://www.instagram.com/markusshinn/"
					class="contacts__social-item"
				>
					<i class="fab fa-instagram contacts__social-image"></i>
					<p class="contacts__social-text">markusshinn/andy-devs</p>
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=100071666065631"
					class="contacts__social-item"
				>
					<i class="fab fa-facebook contacts__social-image"></i>
					<p class="contacts__social-text">Andrey Markushin</p>
				</a>
			</div>`,
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
const skillsSection = document.querySelector('.skills');

const projectsHead = document.querySelector('.projects__head');

const contactsSection = document.querySelector('.contacts');

var language = window.navigator.userLanguage || window.navigator.language;

if (language.match(/(ru)/gi)) {
	html.setAttribute('lang', 'ru');
	home.textContent = lang_ru['header']['home'];
	about.textContent = lang_ru['header']['about'];
	skills.textContent = lang_ru['header']['skills'];
	projects.textContent = lang_ru['header']['projects'];
	contacts.textContent = lang_ru['header']['contacts'];
	lang.textContent = lang_ru['header']['lang'];

	firstScreenBlock.innerHTML = lang_ru['first-screen']['first-screen-text'];

	aboutHeader.innerHTML = lang_ru['about']['about-head'];
	aboutBioText.innerHTML = lang_ru['about']['about-bio'];
	aboutStoryText.innerHTML = lang_ru['about']['about-story'];

	skillsSection.innerHTML = lang_ru['skills'];

	projectsHead.textContent = lang_ru['projects'];

	contactsSection.innerHTML = lang_ru['contacts'];
}

function changeLang() {
	if (html.getAttribute('lang') == 'en') {
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

		skillsSection.innerHTML = lang_ru['skills'];

		projectsHead.textContent = lang_ru['projects'];

		contactsSection.innerHTML = lang_ru['contacts'];
	} else if (html.getAttribute('lang') == 'ru') {
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

		skillsSection.innerHTML = lang_en['skills'];

		projectsHead.textContent = lang_en['projects'];

		contactsSection.innerHTML = lang_en['contacts'];
	}
}
