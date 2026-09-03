var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

function toggleMenu() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

menuTrigger.onclick = toggleMenu;

var menuLinks = menuContainer.querySelectorAll('a');
for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function() {
        if (menuContainer.classList.contains('open')) {
            toggleMenu();
        }
    });
}

var faqQuestions = document.querySelectorAll('.faq-question');
for (var j = 0; j < faqQuestions.length; j++) {
    faqQuestions[j].addEventListener('click', function() {
        var item = this.closest('.faq-item');
        var isOpen = item.classList.toggle('open');
        this.setAttribute('aria-expanded', isOpen);
    });
    faqQuestions[j].addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
}
