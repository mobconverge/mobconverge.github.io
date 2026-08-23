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
